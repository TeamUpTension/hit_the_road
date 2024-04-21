import { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Place } from "../../types/d";
import { Container } from "../../styles/StyledComponents";
import TabMenu from "../../components/TabMenu";
import Header from "../../components/Header";
import PlaceItem from "../../components/Place/PlaceItem";

const RouteList: React.FC = () => {
  const [items, setItems] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const observer = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useRef<HTMLLIElement>(null);

  const fetchMoreItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/places?page=${page}`);
      setItems(prevItems => [...prevItems, ...response.data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more places:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreItems(); // 페이지가 처음 마운트될 때 초기 데이터를 불러옵니다.
  }, []);

  // Intersection Observer API로 무한 스크롤 구현
  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        fetchMoreItems(); // 페이지의 끝에 도달하면 추가 데이터를 불러옵니다.
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (bottomBoundaryRef.current) {
      observer.current.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (observer.current && bottomBoundaryRef.current) {
        observer.current.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [loading, page]);

  return (
    <>
      <Header />
      <Container>
        <TabMenu />
        <Wrapper>
          <Title></Title>
          <AlignSelect>
            <option>최근등록순</option>
            <option>추가순</option>
            <option>조회순</option>
          </AlignSelect>
        </Wrapper>
        <List>
          {items.map((item, index) => (
            <PlaceItem key={index} index={index} place={item}></PlaceItem>
          ))}
          <span ref={bottomBoundaryRef}></span>
        </List>
        {loading && <p>Loading...</p>}
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-left: 0.3rem;
`;
const AlignSelect = styled.select`
  border: 2px solid lightgray;
  padding: 10px;
  border-radius: 3rem;
  height: 2.5rem;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default RouteList;