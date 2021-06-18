import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { setPage, setActiveType } from "../actions";

export default function SortItem(props) {
  const { children, className, inactiveClassName, type } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    // setPage(dispatch, to);
    // onClose && onClose();
		
		// if (state.sortBar.activeTypes.includes(type)) {
		// 	const index = state.sortBar.activeTypes.indexOf(type)
		// 	console.log("include this type")
		// 	if (index > -1) {
		// 		console.log("Remove from Array")
		// 		state.sortBar.activeTypes.splice(index,1)
		// 	}
		// }else {
		// 	console.log("Add to Array")
		// 	state.sortBar.activeTypes.push(type)
		// }

		setActiveType(dispatch, state.sortBar.activeTypes, type)

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
