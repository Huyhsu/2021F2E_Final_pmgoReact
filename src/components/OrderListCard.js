import React, { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useHistory, Link } from "react-router-dom";
import { Button } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { LoadingSmallIcon, BallIcon } from "./Icons";
import { setOrderList } from "../actions";
import { StoreContext } from "../store";

export default function OrderListCard() {
  const { state: { orderList: { loading, orders } }, dispatch } = useContext(StoreContext);
  const spinnerIcon = (
    <LoadingSmallIcon size={20} spin />
  );

  useEffect(() => {
    setOrderList(dispatch)
  }, []);

  return (
    <>
      <div className="orderList__wrap">
        <div className="login-form-title-wrap">
          <BallIcon size={28}/>
          <div className="login-form-title">背包紀錄</div>
        </div>
        {loading ? (
          <div className="spinner__wrap">
            <Spin indicator={spinnerIcon} className="spinner__small" />
          </div>
        ) : (
          <div className="order__wrap">
            { orders.length === 0 ? (
              <p className="order__tip">目前沒有紀錄</p>
            ) : (
              orders.map(order => (
                <Link to={`/order/${order.id}`}>
                  <div>
                    <p className="order__id">紀錄ID: {order.id}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
