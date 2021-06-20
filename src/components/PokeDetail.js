import { useContext, useState } from "react";
import { Row, Col, Select, Spin, Input, Form } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { LoadingIcon } from "../components/Icons";
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
      userSignIn: { userInfo },
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
      sendComment(dispatch, poke.id, commentText);
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
              <img className="poke__image" alt="" src={poke.image} />
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="">
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
                <p className="pokeDetail__about">{poke.about}</p>
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 32]} justify="space-around">
            <Col lg={{ span: 12, offset: 0 }}>
              <div className="pokeDetail__style-wrap">
                <div className="pokeDetail__qty">
                  數量: {"   "}
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
          <Row>
            <Col
              xs={{ span: 18 }}
              sm={{ span: 18 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
              xxl={{ span: 20 }}
            >
              <CommentList />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 18 }}
              sm={{ span: 18 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
              xxl={{ span: 20 }}
            >
              <Input
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
