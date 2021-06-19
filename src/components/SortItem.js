import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { setPage, setActiveType } from "../actions";

export default function SortItem(props) {
  const { children, className, inactiveClassName, type } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
		const url = window.location.pathname;
		setActiveType(dispatch, state.sortBar.activeTypes, type, url)
  };

  return (
    <>
      <div
        onClick={onClick}
        className={`
          ${className} 
          ${state.sortBar.activeTypes.length === 0 ? "" : (state.sortBar.activeTypes.includes(type) ? "" : inactiveClassName)}
				`}
      >
        {children}
      </div>
    </>
  );
}
