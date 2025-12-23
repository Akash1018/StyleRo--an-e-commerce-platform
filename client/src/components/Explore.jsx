import { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import ExploreItem from "./ExploreItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/productActions";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-item: center;
  gap: 16px;
  overflow: hidden;
  ${mobile({
    padding: "8px 20px 0",
  })};
`;

const Explore = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {products.slice(0, 8).map((item) => (
        <ExploreItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Explore;
