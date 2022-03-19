import { useApi } from "../../context/api";
import "./search-bar.scss";
import { BiSearchAlt } from "react-icons/bi";
import React, { useState } from "react";
import Spinner from "../spinner/spinner";

export default function SearchBar() {
  const { loading, search, setSearch } = useApi();
  const [hover, setHover] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(e.target.value);
    }
  };

  const onLeave =()=>{
    setHover(false)
  }
  const onHover = () => {
      setHover(true)
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper" onMouseOver={onHover} onMouseLeave={onLeave}>
        <input type="text" value={search} onChange={onChange} />

        <div className={hover ? "btn-search hover" : "btn-search"}>
          {loading ? (
            <Spinner isLoading={loading} />
          ) : (
            <BiSearchAlt color="white" fontSize={28} />
          )}
        </div>
      </div>
    </div>
  );
}
