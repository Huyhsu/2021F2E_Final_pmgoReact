import { Children, useContext } from "react";
import { Row, Col, Spin, Button } from "antd";
import PokeItem from "./PokeItem";
import SortItem from "./SortItem";
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
                  <SortItem
                    className={`
                      sortBar__btn
                      normalType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="一般"
                  >
                    一般
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      fireType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="火"
                  >
                    火
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      fightingType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="格鬥"
                  >
                    格鬥
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      waterType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="水"
                  >
                    水
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      flyingType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="飛行"
                  >
                    飛行
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      grassType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="草"
                  >
                    草
                  </SortItem>
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
                  <SortItem
                    className={`
                      sortBar__btn
                      poisonType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="毒"
                  >
                    毒
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      electricType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="電"
                  >
                    電
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      groundType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="地面"
                  >
                    地面
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      psychicType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="超能力"
                  >
                    超能力
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      rockType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="岩石"
                  >
                    岩石
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      iceType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="冰"
                  >
                    冰
                  </SortItem>
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
                  <SortItem
                    className={`
                      sortBar__btn
                      bugType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="蟲"
                  >
                    蟲
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      dragonType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="龍"
                  >
                    龍
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      ghostType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="幽靈"
                  >
                    幽靈
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      darkType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="惡"
                  >
                    惡
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      steelType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="鋼"
                  >
                    鋼
                  </SortItem>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 7 }}
                  md={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <SortItem
                    className={`
                      sortBar__btn
                      fairyType
                    `}
                    inactiveClassName="sortBar__btn--inactive"
                    type="妖精"
                  >
                    妖精
                  </SortItem>
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
