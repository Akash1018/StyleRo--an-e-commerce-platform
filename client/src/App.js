import useRouteLoader from "./hooks/useRouterLoader";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import { useLoader } from "./context/LoaderContext";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // first load done
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <NavBar setIsLoginOpen={setIsLoginOpen} />

      {isLoginOpen && <Login setIsLoginOpen={setIsLoginOpen} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
