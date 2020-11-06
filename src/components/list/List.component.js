import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.component";

const listStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  background: "#FFFFFF",
};

const inputStyle = {
  padding: "3px",
  margin: "5px 0",
};

const btnStyle = {
  padding: "3px",
  margin: "5px 0",
  border: "none",
  boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.274)",
  background: "#F9EDE3",
};

const List = ({ list, onClear }) => {
  const [displayList, setDisplayList] = useState(list);
  const [term, setTerm] = useState("");

  const filterList = () => {
    const newList = list.filter((item) => {
      return item.email.includes(term) || item.msg.includes(term);
    });
    setDisplayList([...newList]);
  };

  const renderList = () => {
    return displayList.map((item, index) => {
      return (
        <ListItem
          key={index}
          content={item}
          imgSrc={`https://picsum.photos/50?q=avatar&random=${index}`}
        />
      );
    });
  };

  const handleFilter = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
  };

  useEffect(filterList, [term, list]);

  useEffect(() => {
    setDisplayList([...list]);
  }, [list]);

  return (
    <div style={listStyle}>
      <input
        style={inputStyle}
        type="search"
        name="filter"
        placeholder="Filter"
        onChange={handleFilter}
      />
      {renderList()}
      <button style={btnStyle} type="button" onClick={onClear}>
        CLEAR LIST
      </button>
    </div>
  );
};

export default List;
