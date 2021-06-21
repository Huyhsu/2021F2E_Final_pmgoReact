import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import PlaceOrderCard from "../components/PlaceOrderCard";

import {  } from "../actions";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function PlaceOrder() {
  return (
    <Layout className="container layout__main">
      <Header className="layout__header">
        <AppHeader />
      </Header>
      <NavBar />
      <Content className="layout__content">
        <PlaceOrderCard />
      </Content>
      <Footer className="layout__footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default PlaceOrder;
