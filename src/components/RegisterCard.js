import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { BallIcon } from "./Icons";
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = ({ redirect }) => {
  const { state: { userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >
      <div className="login-form-title-wrap">
        <BallIcon size={28} />
        <div className="login-form-title">註冊帳戶</div>
      </div>
      <Form.Item
        name="name"
        label="你的暱稱"
        tooltip="輸入你想要的名字"
        rules={[
          {
            required: true,
            message: "請輸入暱稱",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="電子郵件"
        rules={[
          {
            type: "email",
            message: "無效的電子郵件地址!",
          },
          {
            required: true,
            message: "請輸入電子信箱",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密碼"
        rules={[
          {
            required: true,
            message: "請輸入密碼",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="確認密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請再次輸入密碼",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("密碼不符合!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("必須同意條款")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox className="check__note">
          我已閱讀並瞭解<Link to={"/"}>服務條款</Link>及
          <Link to={"/"}>隱私權聲明</Link>。
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {loading ? (
          <Button
            type="primary"
            className="login-form__btn"
            htmlType="submit"
            loading
          >
            註冊帳戶
          </Button>
        ) : (
          <Button
            type="primary"
            className="login-form__btn"
            htmlType="submit"
          >
            註冊帳戶
          </Button>
        )}
        <div className="check__had">已經擁有帳戶? <Link to={"/login?redirect=profile"}>登入</Link></div>
        {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
