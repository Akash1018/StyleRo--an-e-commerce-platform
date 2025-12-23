import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";

const useRouterLoader = () => {
  const location = useLocation();
  const { startLoading } = useLoader();

  useEffect(() => {
    startLoading();
  }, [location?.pathname]);
};

export default useRouterLoader;
