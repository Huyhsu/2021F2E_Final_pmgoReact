import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import PokeDetail from "../components/PokeDetail";
import { setPage, setPokeDetail } from "../actions";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Poke({ match }) {
	const {state: { page: { pokes } }, dispatch} = useContext(StoreContext);
	// useEffect(() => {
	//   const url = window.location.pathname;
	//   setPage(dispatch, url);
	// }, []);
	useEffect(() => setPokeDetail(dispatch, match.params.pokeId, 0),[])
   	return (
      	<Layout className="container layout__main">   
            <Header className="layout__header">
            	<AppHeader />
            </Header>
            <NavBar />
            <Content className="layout__content">
            	<PokeDetail />
            </Content>
            <Footer className="layout__footer">
               	<AppFooter />
    		</Footer>
      	</Layout>
   	);
}

export default Poke;
