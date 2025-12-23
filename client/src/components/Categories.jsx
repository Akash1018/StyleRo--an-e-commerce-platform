import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  background-color: #fcf5e5;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;
const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
