import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #1d1d1d;
  color: white;
  ${mobile({
    height: "34px",
  })};
`;

const Announcement = () => {
  return (
    <Container>
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          padding: "6px",
        }}
      >
        Super Deal! Free Shipping on First Order.
      </p>
    </Container>
  );
};

export default Announcement;
