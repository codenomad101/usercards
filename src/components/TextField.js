import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ marginBottom: "2" }}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        style={{ background: "gray", border: "2px", outline: "none", width:"300px", height:'40px', color:'black', backgroundColor:"whitesmoke" }}
      ></input>
    </div>
  );
};

export default TextField;
