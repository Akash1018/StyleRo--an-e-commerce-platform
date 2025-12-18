import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "./icon.css";
import { display, height, padding } from "@mui/system";
import SearchBar from "./SearchBar";

const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  ${mobile({ height: "50px" })};
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 9999;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  transition: margin-left 0.5s;
`;

const Nav = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  background: white;
  color: black;
  z-index: 100;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.35s ease-in-out;
`;

const Butt1 = styled.button`
  border: none;
  background: none;
  transition: margin-left 0.5s;
  color: white;
`;

const Butt2 = styled.button`
  border: none;
  color: black;
  background: none;
  transition: 0.3s;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({})};
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "22px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "1" })};
`;
const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
  border: none;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [showNav, setShowNav] = useState(false);

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    height: "100vh",
    overflowY: "scroll",
  };

  const imgStyle = {
    height: "100px",
    width: "40%",
    objectFit: "cover",
  };
  const liStyle = {
    listStyle: "none",
    padding: "12px 0 8px 0",
  };
  showNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <Container>
      <Wrapper>
        <Left>
          <Butt1 onClick={() => setShowNav(!showNav)}>
            <MenuIcon style={{ color: "black" }} />
              <Nav isOpen={showNav}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  <Butt2 onClick={() => setShowNav(!showNav)}>
                    <CloseIcon />
                  </Butt2>
                  <p
                    style={{
                      fontSize: "20px",
                      margin: "auto",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Categories
                  </p>
                </div>
                <ul style={listStyle}>
                  {Array(20)
                    .fill(0)
                    .map((_, index) => (
                      <li key={index} style={liStyle}>
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={imgStyle}
                            src="https://image.hm.com/assets/hm/77/5a/775afd7e121de98e26c7bc2890cf4109efa36213.jpg?imwidth=1260"
                          />
                          <p style={{ fontSize: "20px", margin: 0 }}>
                            categories
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </Nav>
          </Butt1>
        </Left>
        <Center>
          <Logo>StyleRo</Logo>
        </Center>
        <Right>
          <SearchBar />
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>SignIn</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <Link to="/cart">
                <ShoppingCartIcon
                  style={{ color: "black" }}
                  className="iconSize"
                />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default NavBar;
