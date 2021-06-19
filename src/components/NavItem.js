import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { setPage, resetSortBar } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setPage(dispatch, to);
    onClose && onClose();
    resetSortBar(dispatch, []);
  };

  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
          ${className} 
          ${state.navBar.activeItem === to ? activeClassName : ""}
				`}
      >
        {children}
      </div>
    </Link>
  );
}
