import React from "react";

const itemStyle = {
  textAlign: "left",
  margin: "10px 0",
  color: "grey",
  display: "flex",
};
const bold = {
  fontWeight: "bold",
};

const imgStyle = {
  marginRight: "5px",
  borderRadius: "3px",
};

const ListItem = ({ content, imgSrc }) => {
  return (
    <div style={itemStyle}>
      <img style={imgStyle} src={imgSrc} alt="avatar" />
      <div>
        <p style={bold}>{content.email}</p>
        <p>{content.msg}</p>
      </div>
    </div>
  );
};
export default ListItem;
