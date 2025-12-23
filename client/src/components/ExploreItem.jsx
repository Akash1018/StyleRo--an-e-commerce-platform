import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Info = styled.div`
  width: 200px;
  text-align: left;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  ${mobile({
    width: "100px",
  })}
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;

  ${mobile({
    width: "100px",
    height: "100px",
  })}
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
const Heading = styled.h1`
  textdecoration: "none";
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;

  ${mobile({
    width: "100px",
    fontSize: "10px",
  })}
`;

const ExploreItem = ({ item }) => {
  return (
    <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
      <Container>
        <ImageWrapper>
          <Image src={item.img} />
        </ImageWrapper>
        <Info>
          <Heading>{item.title}</Heading>
          <p style={{ fontSize: "16px" }}>Rs. {item.price}</p>
        </Info>
      </Container>
    </Link>
  );
};

export default ExploreItem;
