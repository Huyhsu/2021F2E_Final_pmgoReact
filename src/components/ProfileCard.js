import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { logoutFromFirebase, updateUserInfo } from "../actions";
import { StoreContext } from "../store";

const ProfileCard = () => {
  const { state: { userSignIn: { userInfo }, }, dispatch, } = useContext(StoreContext);
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };
  
  return (
    <Form
      onFinish={handleUpdate}
      name="normal_login"
      className="profile-form"
      form={form}
      initialValues={userInfo}
    >
      <Form.Item
        label="暱稱: "
        name="name"
        rules={[
          {
            type: "string",
            message: "無效的暱稱!",
          },
          {
            message: "請輸入暱稱",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={displayName} />
      </Form.Item>
      <Form.Item
        label="電子郵件: "
        name="email"
        rules={[
          {
            type: "email",
            message: "無效的電子郵件地址!",
          },
          {
            message: "請輸入電子郵件",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={email} />
      </Form.Item>
      <Form.Item
        label="密碼"
        name="password"
        
        rules={[
          {
            message: "請輸入密碼",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="確認密碼"
        name="rePassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            message: "請再次輸入密碼!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("密碼不符合!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
        >
          提交修改
        </Button>

        <Button
          type="danger"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={handleLogout}
        >
          登出
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProfileCard;
