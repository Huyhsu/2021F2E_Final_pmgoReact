import { Modal, Button, Select, Row, Col, Card } from "antd";
import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { BagIcon } from "./Icons";
import { removeBagItem, setPokeDetail } from "../actions";

export default function CartModal() {
  const {
    state: {
      bag: { bagItems },
      pokeDetail: { qty },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems]);

	const history = useHistory();

  const checkoutHandler = () => {
    history.push("/login?redirect=profile");
  }

  return (
    <>
      {bagItems.length === 0 ? (
        <h2 className="bagDetail__tips">無寶可夢被添加至背包</h2>
      ) : (
				<>
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
                          style={{ width: "70%" }}
                        />
                      ) : (
                        <img
                          src={item.shinyimage}
                          alt={item.name}
                          className="pokeCard__img"
                          style={{ width: "70%" }}
                        />
                      )}
                    </div>
                  </Link>
                  <div className="pokeItem__info">
                    <h6 className="pokeItem__no">#{item.no}</h6>
                    {item.shiny === "notshiny" ? (
                      <div className="pokeItem__name-wrap">
                        <h2 className="pokeItem__name">{item.name}</h2>
                        <h2
                          className="bagDetail__delete-btn"
                          onClick={() =>
                            removeBagItem(dispatch, item, item.shiny)
                          }
                        >
                          x
                        </h2>
                      </div>
                    ) : (
                      <div className="pokeItem__name-wrap">
                        <h2 className="pokeItem__name">{item.name} (異色)</h2>
                        <h2
                          className="bagDetail__delete-btn"
                          onClick={() =>
                            removeBagItem(dispatch, item, item.shiny)
                          }
                        >
                          x
                        </h2>
                      </div>
                    )}
                    {/* <div className="bagDetail__delete-wrap">
											<div className="bagDetail__delete-btn" onClick={() => removeBagItem(dispatch, item, item.shiny)}>
												x
											</div>
										</div> */}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
				<Row justify="center" >
						<Col
							sm={{ span: 8 }}
							lg={{ span: 4 }}
							xl={{ span: 4 }}
							xxl={{ span: 4 }}
						>
							<Button
								className="pokeDetail__btn-toBag bagDetail__btn-check"
								type="primary"
								onClick={checkoutHandler}
							>
								<span>紀錄背包</span>
							</Button>
						</Col>						
					</Row>
				</>
      )}
    </>
  );
}