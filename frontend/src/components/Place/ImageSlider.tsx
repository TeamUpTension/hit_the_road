import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <SlideContainer>
      <SlideContent style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)`, width: `${images.length * 100}%` }}>
        {images.map((image, index) => (
          <SlideItem key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </SlideContent>
      <PrevButton onClick={prevSlide}><FaChevronLeft /></PrevButton>
      <NextButton onClick={nextSlide}><FaChevronRight /></NextButton>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SlideContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SlideItem = styled.img`
  width: 100%;
  height: auto;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export default ImageSlider;
