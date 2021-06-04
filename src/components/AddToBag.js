import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { BagIcon } from "./Icons";
import { addBagItem } from "../actions";

export default function AddToBag() {
  	const { state: { bagItems, pokeDetail: { poke, qty }, pokeIsShiny: { shiny } }, dispatch } = useContext(StoreContext);

  	const openNotification = () => {
    	notification.open({
			message: '',
			description:
				`你已將 ${qty} 隻 ${poke.name} ${shiny == "notshiny" ? "" : "(異色)"} 加入背包`,
			onClick: () => {
				console.log('Notification Clicked!');
			},
			placement: 'bottomRight'
    	});
	};

  	const addToBag = () => {
    	openNotification();
    	addBagItem(dispatch, poke, qty, shiny);
  	};

  	useEffect(()=>{
    	localStorage.setItem("bagItems", JSON.stringify(bagItems));
  	}, [bagItems])

  	return (
    	<Button type="primary" className="pokeDetail__btn-toBag" onClick={addToBag}>
      		{/* <BagIcon size={20} /> */}
      		<span style={{ marginLeft: 12 }}>加入背包</span>
    	</Button>
  );
}
