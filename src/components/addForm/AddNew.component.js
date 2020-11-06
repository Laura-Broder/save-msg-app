import React, { useState } from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  background: "#F9EDE3",
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
  background: "#FFFFFF",
};

const AddNew = ({ onSubmit }) => {
  const [content, setContent] = useState({ email: "", msg: "" });

  const handleAddNew = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent({ email: "", msg: "" });
  };
  const handleChange = (e) => {
    const term = e.target.value;
    const name = e.target.name;
    const newContent = { ...content };
    newContent[name] = term;
    setContent({ ...newContent });
  };
  return (
    <form onSubmit={handleAddNew} style={formStyle}>
      <input
        style={inputStyle}
        type="email"
        name="email"
        placeholder="Email"
        value={content.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="msg"
        cols="30"
        rows="5"
        style={inputStyle}
        onChange={handleChange}
        value={content.msg}
        placeholder="Message"
        required></textarea>
      <button style={btnStyle} type="submit">
        SUBMIT
      </button>
    </form>
  );
};
export default AddNew;
