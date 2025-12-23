import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import { mobile,tablet } from "../responsive";
import { useSelector } from "react-redux";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from "react-router-dom";
import { useState } from "react";
import "./icon.css";

const Container = styled.div`
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  ${mobile({ height: "50px" })};
  position: sticky;
  top: 0;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  ${mobile({ padding: "10px 0px", })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  transition: margin-left 0.5s;

  ${mobile({ display: 'none', })};
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  background: white;
  color: black;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.35s ease-in-out;

  ${tablet({
    overflow: 'hidden',
    width: '30vw',
  })}
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

  ${mobile({
    textAlign: 'start',
    padding: '0 10px',
  })}
`;
const Logo = styled.a`
  font-weight: bold;
  font-size: 28px;
  text-decoration: none;
  color: black;
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
const NavBar = ({ setIsLoginOpen }) => {
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
          <Logo href="/">StyleRo.</Logo>
        </Center>
        <Right>
          {/* <SearchBar /> */}
          <PersonIcon onClick={() => setIsLoginOpen((prev) => !prev)} />
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <Link to="/cart">
                <LocalMallIcon
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
