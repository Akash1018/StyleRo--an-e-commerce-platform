import BagPic from "../assets/images/bag.png";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { addProduct, removeProduct } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  transition: all 0.5s linear;
  border-radius: 6px;

  &:hover {
    background: white;
    color: black;
  }
`;

const ImageBag = styled.img`
  width: 200px;
  height: 200px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest("/checkout/payment", {
          tokenId: stripeToken,
          amount: cart.total * 100,
        });
        history.push("/success");
      } catch {}
    };
    makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <>
      <Announcement />
      <Wrapper>
        {cart.quantity === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ImageBag src={BagPic} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <h1>YOUR BAG IS EMPTY</h1>
              <p>
                Your cart is ready to roll, but it's feeling a bit empty without
                some stylish finds.
              </p>
              <Button onClick={() => (window.location.href = "/")}>Start Shopping</Button>
            </div>
          </div>
        ) : (
          <>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton onClick={() => (window.location.href = "/")}>
                CONTINUE SHOPPING
              </TopButton>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                {cart.products.map((product) => (
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add onClick={() => dispatch(addProduct(product))} />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove
                          onClick={() => dispatch(removeProduct(product))}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        Rs {product.quantity * product.price}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                ))}
                <Hr />
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>Rs. 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>Rs. -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>Rs. {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                  name="Kicks"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                  StripeCheckout
                  currency="inr"
                >
                  <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
              </Summary>
            </Bottom>
          </>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;
