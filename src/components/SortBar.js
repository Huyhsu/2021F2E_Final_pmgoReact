import { useContext } from "react";
import { Row, Col, Spin, Button } from "antd";
import PokeItem from "./PokeItem";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import { StoreContext } from "../store";
import { UserIcon } from "./Icons";
// requestPokes: { loading }
export default function SortBar() {
  const {
    state: {
      page: { pokes },
      requestPokes: { loading },
    },
  } = useContext(StoreContext);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#4d7072" }} spin />
  );
  // const mySpinner = props => <Icon component={ UserIcon } {...props} spin/>
  return (
    <>
      {/* {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={antIcon} className="spinner" />
        </div>
      ) : ( */}
      <Row gutter={[12, 12]} justify="center" className="sortBar__wrap" align="middle">
        <Col
          xs={{ span: 18 }}
          sm={{ span: 24 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 20 }}
          xxl={{ span: 18 }}
        >
          <Row gutter={[0, 0]} justify="center" className="sortBar__wrap" align="middle">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row gutter={[24, 24]} justify="center" className="sortBar__wrap" align="middle">
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">一般</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">火</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">格鬥</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">水</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">飛行</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">草</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 24 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 24 }}
          xxl={{ span: 20 }}
        >
          <Row gutter={[0, 0]} justify="center" className="sortBar__wrap" align="middle">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 22 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row gutter={[24, 24]} justify="center" className="sortBar__wrap" align="middle">
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">一般</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">火</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">格鬥</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">水</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">飛行</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">草</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 24 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 24 }}
          xxl={{ span: 20 }}
        >
          <Row gutter={[0, 0]} justify="center" className="sortBar__wrap" align="middle">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 22 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <Row gutter={[24, 24]} justify="center" className="sortBar__wrap" align="middle">
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">一般</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">火</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">格鬥</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">水</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">飛行</div>
                </Col>
                <Col
                  xs={{ span: 8 }}
                  sm={{ span: 4 }}
                  lg={{ span: 3 }}
                  xl={{ span: 3 }}
                  xxl={{ span: 3 }}
                >
                  <div className="sortBar__btn">草</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* ))} */}
      </Row>
      {/* )} */}
    </>
  );
}
