import { Layout } from "antd";
import AppHeader from "../components/Header";
import NavBar from "../components/NavBar";
import AppFooter from "../components/Footer";
import OrderCard from "../components/OrderCard";
const { Header, Content, Footer } = Layout;

function Order({ match }) {
   return (
    <Layout className="container layout__main">
        <Header className="layout__header">
          <AppHeader />
        </Header>
        <NavBar />
        <Content className="layout__content">
          <OrderCard orderId={match.params.orderId} />
        </Content>
        <Footer className="layout__footer">
          <AppFooter />
        </Footer>
    </Layout>
  );
}

export default Order;
