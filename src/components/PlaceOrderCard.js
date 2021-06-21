import { Modal, Button, Select, Row, Col, Card, Spin } from "antd";
import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { BallIcon, LoadingIcon } from "./Icons";
import { createOrder, resetOrder } from "../actions";

export default function PlaceOrderCard() {
  const { state: { bag, bag: { bagItems }, orderInfo: { loading, success, order },},dispatch,} = useContext(StoreContext);
  
  const spinnerIcon = (
    <LoadingIcon style={{ fontSize: 80, color: "#4d7072" }} spin />
  );

  useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems]);

	const history = useHistory();

  const placeOrderHandler = () => {
    createOrder(dispatch, bag)
  };

  useEffect(() => {
    if (success) {
      resetOrder(dispatch);
      history.push(`/order/${order.id}`);
    }
  }, [success]);

  return (
    <>
      {loading
        ? (
          <div className="spinner__wrap">
            <Spin indicator={spinnerIcon} className="spinner" />
          </div>
      ) : (
        <div className="placeOrderCard__wrap">
          <div className="commentList__title-wrap">
            <BallIcon size={36} />
            <div className="commentList__title">確認寶可夢</div>
          </div>
          <Row justify="center">
            <Col
              sm={{ span: 8 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
              xxl={{ span: 4 }}
            >
              <Button
                className="pokeDetail__btn-toBag bagDetail__btn-check"
                type="primary"
                onClick={placeOrderHandler}
              >
                <span>儲存</span>
              </Button>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            {bagItems.map((item, index) => (
              <Col
                key={index}
                sm={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
              >
                <Card className="poke__card">
                  <div className="bagItem__wrap">
                    <Link to={`/poke/${item.id}`}>
                      <div className="bag__image">
                        {item.shiny === "notshiny" ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="pokeCard__img"
                            style={{ width: "80%" }}
                          />
                        ) : (
                          <img
                            src={item.shinyimage}
                            alt={item.name}
                            className="pokeCard__img"
                            style={{ width: "80%" }}
                          />
                        )}
                      </div>
                    </Link>
                    <div className="pokeItem__info">
                      <h6 className="pokeItem__no">#{item.no}</h6>
                      {item.shiny === "notshiny" ? (
                        <div className="pokeItem__name-wrap">
                          <h2 className="pokeItem__name">{item.name}</h2>
                        </div>
                      ) : (
                        <div className="pokeItem__name-wrap">
                          <h2 className="pokeItem__name">{item.name} (異色)</h2>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
}