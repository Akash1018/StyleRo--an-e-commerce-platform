import { RingLoader } from "react-spinners";
import { useLoader } from "../context/LoaderContext";

const Loader = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <RingLoader
        color="black"
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
