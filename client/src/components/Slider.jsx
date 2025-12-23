import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const SLIDE_WIDTH = 600;
const TOTAL_WIDTH = sliderItems.length * SLIDE_WIDTH;

const Container = styled.div`
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  gap: 10px;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
`;

const ImgContainer = styled.a`
  height: 750px;
  width: 600px;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    height: "480px",
    width: "300px",
  })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Slider = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [translateX, setTranslateX] = useState(0);

  const slides = [...sliderItems, ...sliderItems];

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev + 1);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (translateX >= TOTAL_WIDTH) {
      setIsTransitioning(false);
      setTranslateX(0);

      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [translateX]);

  return (
    <Container>
      <Wrapper
        style={{
          transform: `translateX(-${translateX}px)`,
          transition: isTransitioning ? "transform 0.3s linear" : "none",
        }}
      >
        {slides.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
