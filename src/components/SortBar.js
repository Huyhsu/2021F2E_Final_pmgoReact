import { Children, useContext } from "react";
import { Row, Col, Spin, Button } from "antd";
import PokeItem from "./PokeItem";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import { StoreContext } from "../store";
import { UserIcon } from "./Icons";
// requestPokes: { loading }
export default function SortBar() {
  const { state: { page: { pokes }, requestPokes: { loading },}, dispatch} = useContext(StoreContext);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#4d7072" }} spin />
  );
  // const mySpinner = props => <Icon component={ UserIcon } {...props} spin/>

  // const onClick = () => {
  //   sortPoke(dispatch, pokes,)
  // };






  return (
    <div className="sortBar__wrap">
      {/* {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={antIcon} className="spinner" />
        </div>
      ) : ( */}
      <Row
        gutter={[12, 24]}
        justify="center"
        align="middle"
      >
        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 20 }}
          xxl={{ span: 15 }}
        >
          <Row
            gutter={[0, 0]}
            justify="center"
            align="middle"
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
              >
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn normalType">一般</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div
                    className={`
                      sortBar__btn
                      fireType
                      
                    `}
                  >
                    火
                  </div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn fightingType">格鬥</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn iceType">水</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn flyingType">飛行</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn grassType">草</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 20 }}
          xxl={{ span: 15 }}
        >
          <Row
            gutter={[0, 0]}
            justify="center"
            align="middle"
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
              >
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn poisonType">毒</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn electricType">電</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn groundType">地面</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn psychicType">超能力</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn rockType">岩石</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn iceType">冰</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 20 }}
          xxl={{ span: 15 }}
        >
          <Row
            gutter={[0, 0]}
            justify="center"
            align="middle"
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
              >
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn bugType">蟲</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn dragonType">龍</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn ghostType">幽靈</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn darkType">惡</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn steelType">鋼</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn fairyType">妖精</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* ))} */}
      </Row>
      {/* )} */}
    </div>
  );
}
