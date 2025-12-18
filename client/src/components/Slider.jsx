import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { Link } from "react-router-dom";

const SLIDE_WIDTH = 210;
const AUTO_DELAY = 2000;

const Container = styled.div`
  overflow:hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: column;
  padding: 10px 10px;
  gap: 10px;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
`;

const ImgContainer = styled.div`
  height: 90%;
  ${mobile({
    height: "80%",
  })};
  ${tablet({
    flex: "0",
  })};
`;
const Image = styled.img`
  height: 420px;
  ${mobile({
    height: "240px",
  })};
  ${tablet({ height: "320px" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 65px;
  ${mobile({
    fontSize: "26px",
  })};
`;

const Desc = styled.p`
  padding: 24px 0px;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "12px",
  })};
  ${tablet({ fontSize: "12px" })};
`;
const Button = styled.button`
  padding: 10px;
  font-size: 25px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({
    fontSize: "16px",
  })};
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => {
        if(prev === sliderItems.length-1) return 0;
        return prev+1;
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
        next();
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Wrapper style={{
            transform: `translateX(-${index * SLIDE_WIDTH}px)`,
            transition: "transform 2s linear",
          }}>
        {sliderItems.map((item) => (
          <Slide>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to={`/products/${item.category}`}>
                <Button>Shop Now</Button>
              </Link>
            </InfoContainer>
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
