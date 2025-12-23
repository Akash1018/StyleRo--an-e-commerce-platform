import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100wh;
    height: 100vh;
    background:linear-gradient(
        rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
        width: 40%;
        padding: 20px;
        background: white;
        ${mobile({width: '80%'})};
`

const Title =styled.div`
        font-size: 24px;
        font-weight: 300;

        ${mobile({textAlign: 'center'})}
`
const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
`

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`
const Agreement = styled.div`
        font-size: 12px;
        margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type='text' placeholder="name" />
                <Input type='text' placeholder="last name" />
                <Input type='text' placeholder="username" />
                <Input type='email' placeholder="email" />
                <Input type='password' placeholder="password" />
                <Input type='password' placeholder="confirm password" />
                <Agreement>
                By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register