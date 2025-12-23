import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import { fetchProducts } from "../redux/productActions";
import Loader from "./Loader";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    padding: "5px",
  })};
`;

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  console.log(123, products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
