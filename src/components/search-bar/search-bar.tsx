import { useApi } from "../../context/api";
import "./search-bar.scss";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
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

  const onLeave = () => {
    setHover(false);
  };
  const onHover = () => {
    setHover(true);
  };

  const onClear = () => {
    if (setSearch) {
      setSearch("");
    }
  };
  return (
    <div className="search-bar-container">
      <div
        className="search-bar-input-wrapper"
        onMouseOver={onHover}
        onMouseLeave={onLeave}
      >
        <div className={hover ? "btn-search hover" : "btn-search"}>
          {loading ? (
            <Spinner isLoading={loading} />
          ) : (
            <BiSearchAlt color="gray" fontSize={28} />
          )}
        </div>
        <input type="text" value={search} onChange={onChange} />
        <div
          className={hover ? "btn-close hover" : "btn-close"}
          onClick={onClear}
        >
          {search && <IoMdCloseCircle color="gray" fontSize={20} />}
        </div>
      </div>
    </div>
  );
}
