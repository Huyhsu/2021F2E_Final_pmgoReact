import { Layout } from "antd";
import React, { useContext, useEffect } from "react";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import OrderListCard from "../components/OrderListCard";
// import { setOrderList } from "../actions"
import { StoreContext } from "../store";
import { Row, Col, Spin } from "antd";

const { Header, Content, Footer } = Layout;

// state: { userSignin: { userInfo } },

function Profile() {
  // const { dispatch } = useContext(StoreContext);
  // useEffect(() => {
  //   setOrderList(dispatch)
  // }, []);
  return (
    <Layout className="container layout__main">
        <Header className="layout__header">
          <AppHeader />
        </Header>
        <NavBar />
        <Content className="layout__content">
          <Row gutter={[32, 32]} justify="center">
            <Col lg={{ span: 8 }}>
              <ProfileCard />
            </Col>
            <Col lg={{ span: 8 }}>
              <OrderListCard />
            </Col>
          </Row>
        </Content>
        <Footer className="layout__footer">
          <AppFooter />
        </Footer>
    </Layout>
  );
}

export default Profile;
