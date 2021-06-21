import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { NewBagIcon } from "./Icons";
import { StoreContext } from "../store"
import { setPage } from "../actions";


export default function BagSummary() {
  const { state: { bag: { bagItems }, pokeDetail: { qty } }, dispatch } = useContext(StoreContext);

  const count = (bagItems.length > 0) ?
    bagItems.reduce((sum, item) => sum + item.qty - item.qty + 1, 0)
    : 0;
  const onClick = () => {
    setPage(dispatch, "/");
  };
  return (
    <>
      <Link to="/pokebag" className="header__bag-summary" onClick={onClick}>
        <Badge count={ count } size={"small"} style={{ color: 'white', backgroundColor: '#1d8796' }}>
          <NewBagIcon size={32} />
        </Badge>
        <p className="header__bag-summary-text">背包</p>
      </Link>
    </>
  );
}
