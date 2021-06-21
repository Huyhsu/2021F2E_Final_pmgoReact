import { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import PokeItem from "./PokeItem";
import { LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import { StoreContext } from "../store";
import { LoadingIcon, BallIcon } from "./Icons";
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
    <div className="commentList__wrap">
      {/* {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={spinnerIcon} className="spinner" />
        </div>
      ) : ( */}
      <div className="commentList__title-wrap">
        <BallIcon size={36} />
        <div className="commentList__title">留言板</div>
      </div>
      <Row gutter={[24, 24]} justify="center">
        {comments.map((comment) => (
          <Col
            key={comment.timeStamp}
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            md={{ span: 20 }}
            lg={{ span: 20 }}
            xl={{ span: 20 }}
            xxl={{ span: 20 }}
          >
            <div className="commentList__item"><div className="commentList__userName">{comment.senderName}：</div>{comment.comment}</div>
          </Col>
        ))}
      </Row>
      {/* )} */}
    </div>
  );
}
