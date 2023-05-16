import React from "react";
import { CheckBox } from "./Clients";

export const TodoItem = ({ title, description  , id , complete}) => {
  return (
    <div className="item">
      <div>
        <div className="title">{title}</div>
        <div className="des">{description}</div>
      </div>
      <div className="check">
        <CheckBox id={id} complete={complete}/>
      </div>
    </div>
  );
};
