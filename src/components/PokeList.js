import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import PokeItem from "./PokeItem";
import { LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import { StoreContext } from "../store";
import { UserIcon } from "./Icons";
// requestPokes: { loading }
export default function PokeList() {
  const {state: { page: { pokes }, requestPokes: { loading },},} = useContext(StoreContext);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#4d7072" }} spin />
  );
  // const mySpinner = props => <Icon component={ UserIcon } {...props} spin/>
  return (
    <>
      {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={antIcon} className="spinner" />
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {pokes.map((poke) => (
            <Col
              key={poke.id}
              sm={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
              xxl={{ span: 4 }}
            >
              <PokeItem poke={poke} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
