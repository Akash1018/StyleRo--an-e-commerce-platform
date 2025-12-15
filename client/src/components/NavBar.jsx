import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "./icon.css";

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
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100%;
  overflow: disable;
  background-color: white;
  color: black;
  z-index: 1;
  transition: 0.5s;
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
  position: fixed;
  top: 18px;
  left: 15px;
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
    height: "100%",
    position: "fixed",
    top: "20%",
    listStyleType: "none",
    fontSize: "50px",
    gap: "20px",
    textAlign: "left",
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
            {showNav === true && (
              <Nav>
                <Butt2 onClick={() => setShowNav(!showNav)}>
                  <MenuIcon />
                </Butt2>
                <ul style={listStyle}>
                  <Link
                    to="/"
                    style={{ color: "color", textDecoration: "none" }}
                  >
                    <li>shop</li>
                  </Link>
                  <Link
                    to="/product"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <li>Collections</li>
                  </Link>
                  <li>About</li>
                </ul>
              </Nav>
            )}
          </Butt1>
        </Left>
        <Center>
          <Logo>StyleRo</Logo>
        </Center>
        <Right>
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
