import { Layout } from "antd";
import * as QueryString from "query-string";

import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";
import RegisterCard from "../components/RegisterCard";

const { Header, Content, Footer } = Layout;

function Register(props) {
  const { redirect } = QueryString.parse(props.location.search);
  return (
    <Layout className="container layout__main">
      <Header className="layout__header">
        <AppHeader />
      </Header>
      <NavBar />
      <Content className="layout__content">
        <RegisterCard redirect={redirect} />
      </Content>
      <Footer className="layout__footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Register;
