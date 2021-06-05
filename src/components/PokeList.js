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
        <Row gutter={[32, 32]}>
          {pokes.map((poke) => (
            <Col
              key={poke.id}
              sm={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
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
