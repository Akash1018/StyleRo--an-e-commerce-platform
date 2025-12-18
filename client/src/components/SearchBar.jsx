import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const { products } = useSelector((state) => state.product);
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      setItems(
        products.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }, 2000);

    return () => clearTimeout(id);
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Item"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
