import { useContext, useState, useEffect } from "react";
import { Row, Col, Select, Spin, Input, Form, Slider, InputNumber } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { LoadingIcon, BallIcon, PlusIcon, MinusIcon } from "../components/Icons";
import { StoreContext } from "../store";
import { setPokeDetail, setPokeShiny, sendComment, setCommentList } from "../actions";
import AddToBag from "./AddToBag";
import CommentList from "./CommentList";

const { Option } = Select;
const { TextArea } = Input;

function PokeDetail() {
  const {
    state: {
      pokeDetail: { poke, qty },
      pokeIsShiny: { shiny },
      requestPokes: { loading },
      userSignIn: { userInfo, isLogin, },
    },
    dispatch,
  } = useContext(StoreContext);

  const spinnerIcon = (
    <LoadingIcon style={{ fontSize: 80, color: "#4d7072" }} spin />
  );

  const [commentText, setCommentText] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(commentText);
    if (commentText !== "")
      if ( !userInfo )
        sendComment(dispatch, poke.id, commentText, "訪客");
      else
        sendComment(dispatch, poke.id, commentText, userInfo.displayName);
    setCommentText("");
    setCommentList(dispatch, poke.id)
  };
  
  return (
    <div className="pokeDetail__wrap">
      {loading ? (
        <div className="spinner__wrap">
          <Spin indicator={spinnerIcon} className="spinner" />
        </div>
      ) : (
        <>
          <Row gutter={[32, 32]} justify="space-around">
            <Col lg={{ span: 8, offset: 2 }}>
              <img className="pokeDetail__image" alt="" src={poke.image} />
            </Col>
            <Col lg={{ span: 12, offset: 2}}>
              <div className="pokeDetail__info-wrap">
                <h1 className="pokeDetail__name">{poke.name}</h1>
                <h2 className="pokeDetail__category">{poke.category}</h2>
                <div className="pokeDetail__type-wrap">
                  <h1 className="pokeDetail__type-title">屬性：</h1>
                  <h2 className={`pokeDetail__type ${poke.type1__class}`}>
                    {poke.type1}
                  </h2>
                  <h2
                    className={`pokeDetail__type pokeDetail__type2 ${poke.type2__class}`}
                  >
                    {poke.type2}
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 32]} justify="space-around">
            <Col lg={{ span: 10, offset: 1 }}>
              <p className="pokeDetail__about">{poke.about}</p>
            </Col>
            <Col lg={{ span: 12, offset: 1 }}>
              <div className="pokeDetail__style-wrap">
                <div className="pokeDetail__qty">
                  數量: {"   "}
                  {/* <MinusIcon size={32} className="pokeDetail__qty-btn"/> */}
                  <Select
                    defaultValue={qty}
                    value={qty}
                    className="select__style"
                    onChange={(val) => setPokeDetail(dispatch, poke.id, val)}
                  >
                    {[...Array(poke.countInStock).keys()].map((x) => (
                      <Option key={x + 1} value={x + 1}>
                        {x + 1}
                      </Option>
                    ))}
                  </Select>
                  {/* {qty} */}
                  {/* <PlusIcon size={32} className="pokeDetail__qty-btn"/> */}
                </div>
                <div className="pokeDetail__shiny">
                  異色: {"   "}
                  <Select
                    defaultValue={shiny}
                    value={shiny}
                    className="select__style"
                    onChange={(val) => setPokeShiny(dispatch, val)}
                  >
                    <Option value="notshiny">否</Option>
                    <Option value="isshiny">是</Option>
                  </Select>
                </div>
                <AddToBag />
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            >
              <CommentList />
            </Col>
          </Row>
          <Row justify="center" className="comment-input__wrap">
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
              xxl={{ span: 20 }}
            >
              <Input
                className="comment-input"
                size="large"
                placeholder="留言..."
                name="commentTextArea"
                type="text"
                prefix={<UserOutlined />}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onPressEnter={handleOnSubmit}
                allowClear="true"
                autoComplete="off"
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default PokeDetail;
