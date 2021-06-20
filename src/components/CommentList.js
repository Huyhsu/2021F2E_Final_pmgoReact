import { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import PokeItem from "./PokeItem";
import { LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import { StoreContext } from "../store";
import { LoadingIcon } from "./Icons";
import { setCommentList } from "../actions";

export default function CommentList() {
  const {state: { pokeDetail: { poke, qty }, commentList: { comments }, requestPokes: { loading },},dispatch} = useContext(StoreContext);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 80, color: "#4d7072" }} spin />
  );
  const spinnerIcon = (
    <LoadingIcon style={{ fontSize: 80, color: "#4d7072" }} spin />
  );

  return (
    <>
      {/* {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={spinnerIcon} className="spinner" />
        </div>
      ) : ( */}
        <Row gutter={[24, 24]}>
          {comments.map((comment) => (
            <Col
              key={comment.timeStamp}
              sm={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
              xxl={{ span: 4 }}
            >
              <div className="test">{comment.comment}</div>
            </Col>
          ))}
        </Row>
      {/* )} */}
    </>
  );
}
