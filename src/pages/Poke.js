import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import PokeDetail from "../components/PokeDetail";
import { setPage, setPokeDetail, setCommentList } from "../actions";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Poke({ match }) {

	const { dispatch } = useContext(StoreContext);

	useEffect(() => setPokeDetail(dispatch, match.params.pokeId, 0),[])
	useEffect(() => setCommentList(dispatch, match.params.pokeId),[])

	useEffect(() => {
		setPokeDetail(dispatch, match.params.pokeId, 0);
		setCommentList(dispatch, match.params.pokeId);
	}, [])

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
