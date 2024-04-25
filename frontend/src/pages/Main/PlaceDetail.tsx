import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { FixedButton, Container, NavBox, NavButton } from "@/styles/StyledComponents";
import { FaChevronLeft, FaRegMap } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Place, Review } from "@/types/d";
import ImageSlider from "@/components/Place/ImageSlider";
import { useDispatch } from "react-redux";
import { addPlace } from "@/store/myRouteSlice";

const PlaceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [place, setPlace] = useState<Place | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/places/${id}`)
            .then((response) => {
                console.log("요청")
                setPlace(response.data)
                console.log(response.data)
            }).catch(() => {
                console.log("실패함")
            })
    }, [id])

    const handleClickBackBtn = () => {
        navigate(-1); // 이전 페이지로 이동
    }

    const handleAddPlace = (placeName: string) => {
        dispatch(addPlace(placeName));
        navigate("/my-route/write");
    }

    if (!place) {
        return null;
    }
    return (
        <>
            <NavBox>
                <NavButton onClick={handleClickBackBtn}>
                    <FaChevronLeft />
                </NavButton>
                <span>{place.name}</span>
                <NavButton><FaShareAlt /></NavButton>
            </NavBox>
            <Container>
                <PlaceImageContainer>
                    <ImageSlider images={place.images} />
                </PlaceImageContainer>
                <PlaceInfo>
                    <li><span><FaMapMarkerAlt /> 주소</span>{place.address}</li>
                    <li><span><MdAccessTime /> 운영시간</span>{place.openingHours}</li>
                    <li><span><FaRegMap /> 지도보기</span></li>
                </PlaceInfo>
                <SectionTitle>
                    리뷰<span>{place.reviews.length}</span>
                </SectionTitle>
                <PlaceReview>
                    {place.reviews.map((review: Review, index: number) => (
                        <li key={index}>
                            <span>{review.userName}</span>
                            <span>{review.content}</span>
                        </li>
                    ))}
                </PlaceReview>
            </Container>
            <FixedButton onClick={() => handleAddPlace(place.name)}><TiPlus /> 내 여행루트에 담기</FixedButton>
        </>
    )
}

const PlaceImageContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background: #eceae4;
`;
const PlaceInfo = styled.ul`
    padding: 2rem 1rem;
    border-bottom: 1px solid #eceae4;
    li {
        padding: 0.5rem 0;
        span {
            display: inline-block;
            width: 120px;
        }
    }
`;
const SectionTitle = styled.h5`
    padding: 2rem 1rem 0 1rem;
    font-weight: bold;
    span {
        padding-left: 0.5rem;
        color: gray;
    }
`
const PlaceReview = styled.ul`
    min-height: 50vh;
    li {
        padding: 1.4rem;
        margin: 1.4rem 0.2rem;
        background: #f8f6f1;
        span:nth-child(2) {
            padding-left: 1rem;
        }
    }
`;

export default PlaceDetail;