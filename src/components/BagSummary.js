import { useState, useContext } from "react";
import { Badge } from "antd";
import { NewBagIcon, UserIcon } from "./Icons";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function BagSummary() {

  const { state: { bagItems } } = useContext(StoreContext);
  const count = (bagItems.length > 0) ?
    bagItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  return (
    <>
      <Link to="/pokebag" className="header__bag-summary">
        <Badge count={ count } size={"small"} style={{ color: 'white', backgroundColor: '#1d8796' }}>
          <NewBagIcon size={32} />
        </Badge>
        <p className="header__bag-summary-text">背包</p>
      </Link>
    </>
  );
}
