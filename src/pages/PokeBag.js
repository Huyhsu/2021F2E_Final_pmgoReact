import { useEffect, useContext } from "react";
import { Layout } from "antd";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import BagDetail from "../components/BagDetail";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

export default function PokeBag() {
  const {
    state: {
      bag: { bagItems },
      pokeDetail: { qty },
    },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems]);


  return (
    <Layout className="container layout__main">
      <Header className="layout__header">
        <AppHeader />
      </Header>
      <NavBar />
      <Content className="layout__content">
        <BagDetail />
      </Content>
      <Footer className="layout__footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}