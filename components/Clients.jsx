"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  console.log(children);
  const [Users, setUsers] = useState({});
  return (
    <Context.Provider value={{ Users, setUsers }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { users } = useContext(Context);
  const handleLogout = () => {
    alert("Loggout ");
  };
  return !users?.id ? (
    <Link href={"/login"}>Login</Link>
  ) : (
    <button className="btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export const CheckBox = ({ id, complete }) => {
  const handleDelete = (id) => {alert("Delete")};
  const handleChange = (id) => {};
  return (
    <>
      <div className="cont">
        <input type="checkbox" checked={complete} onChange={handleChange}/>
        <button className="Delete" onClick={() => handleDelete(id)}>
          Delete
        </button> 
      </div>
    </>
  );
};
