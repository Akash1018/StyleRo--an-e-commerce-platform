import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: white;
  position: fixed;
  top: 30%;
  left: 36%;
  border-radius: 10px;
  z-index: 4;

  ${mobile({ 
    width: "75%",
    top: "25%",
    left: "2%",
   })};

   ${tablet({
    top: "25%",
    left: "20%",
    width: "50%",
   })}
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 0.2px solid black;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  ${
    mobile({
      padding: "10px 10px"
    })
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const darkBG = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "100vw",
  height: "100vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  zIndex: '2',
};

const Login = ({ setIsLoginOpen }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => document.body.style.overflow = "auto";
  }, [])
  return (
    <>
      <div style={darkBG} onClick={() => setIsLoginOpen(false)} />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>LOGIN</Button>
            <Button>GUEST LOGIN</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link>Forgot Password</Link>
            <Link href="/register">CREATE A NEW ACCOUNT</Link>
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
