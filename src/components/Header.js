import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import BagSummary from "./BagSummary";
import UserInfo from "./UserInfo";
import { setPage, resetSortBar } from "../actions";

export default function Header() {
    const { dispatch } = useContext(StoreContext);
    const history = useHistory();

    const onClickHeader = () => {
        setPage(dispatch, "/");
        history.push("/");
        resetSortBar(dispatch, []);
    };

    return(
        <>
            <header className="header">
                <div className="header__wrap">
                    <div className="header__text" onClick={onClickHeader}>
                    <Link to="/">
                        <h1 className="header__title">Pokémon Go</h1>
                    </Link>
                    <p className="header__slogan">圖鑑</p>
                    </div>
                    <BagSummary />
                    <UserInfo />
                </div>
            </header>
        </>
    );
}