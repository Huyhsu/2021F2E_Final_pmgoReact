import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import BagDetail from "../components/BagDetail";

const { Header, Content, Footer } = Layout;

function PokeBag() {
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

export default PokeBag;
