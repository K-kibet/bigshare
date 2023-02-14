import { DeleteOutline } from "@mui/icons-material";
import React from "react";

function KeepItem () {
  return (
    <div className="keep-item" >
      <textarea  value="Hello World"/>
      <div>
        <p>12th May 2021</p>
        <DeleteOutline className="delete"/>
      </div>
    </div>
  );
}

export default KeepItem;