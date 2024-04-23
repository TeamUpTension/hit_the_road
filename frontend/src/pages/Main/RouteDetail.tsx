import ListSectionRead from "@/components/Route/ListSectionRead";
import MapSectionRead from "@/components/Route/MapSectionRead";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Description, NavBox, NavButton, Wrapper } from "@/styles/StyledComponents";
// import { FaShareAlt } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "@/types/d";

const RouteDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [route, setRoute] = useState<Route | null>(null);

    useEffect(() => {
        axios.get<Route>(`/routes/${id}`)
            .then((response) => {
                // console.log("요청")
                setRoute(response.data)
                // console.log(response.data)
            }).catch((error) => {
                console.log("Error fetching route detail", error);
            })
    }, [])

    const navigate = useNavigate();
    const handleClickBackBtn = () => {
        navigate(-1); // 이전 페이지로 이동
    }

    if (!route) {
        return <></>;
    }
    return (<>
        <NavBox>
            <NavButton onClick={handleClickBackBtn}>
                <FaChevronLeft />
            </NavButton>
            <div>{route.title}</div>
            <div></div>
            {/* <NavButton><FaShareAlt /></NavButton> */}
        </NavBox>
        <Container>
            <Description>✨ {route.description}</Description>
            <Wrapper>
                <ListSectionRead placeList={route.placeList} />
                <MapSectionRead />
            </Wrapper>
        </Container>
        {/* <FixedButton><FaCheck /> 여행루트 담기</FixedButton> */}
    </>)
}

export default RouteDetail;