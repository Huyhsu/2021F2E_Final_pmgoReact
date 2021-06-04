import { useContext, useEffect } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import PokeList from "../components/PokeList";
import AppFooter from "../components/Footer";
import { StoreContext } from "../store";
import { setPage } from "../actions"

const { Header, Content, Footer } = Layout;

function Home() {
  const { dispatch } = useContext(StoreContext);
  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url);
  }, []);
  return (
    <Layout className="container layout__main">
      <Header className="layout__header">
        <AppHeader />
      </Header>
      <NavBar />
      <Content className="layout__content">
        <PokeList />
      </Content>
      <Footer className="layout__footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
