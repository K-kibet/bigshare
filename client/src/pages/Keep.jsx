import { AddCircleOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import KeepItem from "../componenets/KeepItem";

function Keep() {
  const [notes, setNotes] = useState(null);
  return (
    <div className="keep">
        <div className="sidebar">
            <AddCircleOutline className="add"/>
            <ul className='active'>
                <li />
            </ul>
       </div>
      <div className="note-container">
        <h2>Notes</h2>
        <div className="wrapper custom-scroll">
          <KeepItem/>
          <KeepItem/>
          <KeepItem/>
          <KeepItem/>
          {/*<h3>No Notes present</h3>*/}
        </div>
      </div>
    </div>
  );
}

export default Keep;