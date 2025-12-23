import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import "./icon.css";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fcf5e5;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({
    minWidth: "100px",
    height: "150px",
  })}
`;

const Image = styled.img`
  height: 98%;
  
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  ${mobile({
    width: "24px",
    height: "24px",
    margin: "8px",
  })}
`;
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addProduct({
        ...item,
        quantity: 1,
        color: item.color[0],
        size: item.size[0],
      })
    );
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleClick} className="iconSize" />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined className="iconSize" />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined className="iconSize" />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
