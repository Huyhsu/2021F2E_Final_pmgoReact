import { Modal, Button, Select, Row, Col, Card } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { BagIcon } from "./Icons";
import {removeBagItem, setPokeDetail } from "../actions";

export default function CartModal() {
   	const { state: { bagItems, pokeDetail: { qty } }, dispatch } = useContext(StoreContext);


   	useEffect(() => {
      	localStorage.setItem("bagItems", JSON.stringify(bagItems));
   	}, [bagItems])

   	return (
    	<>
        	{bagItems.length === 0 ? (
            	<h2 className="bagDetail__tips">無寶可夢被添加至背包</h2>
         	) : (
            	<Row gutter={[32, 32]} >
					{bagItems.map(item => (
						<Col 
							key={bagItems.indexOf(item)}
							sm={{ span: 12 }}
							lg={{ span: 8 }} 
							xl={{ span: 6 }}
							xxl={{ span: 4 }}
						>
							<Card className="poke__card">
								<div className="bagItem__wrap">
									<Link to={`/poke/${item.id}`}>
										<div className="bag__image" >
											{item.shiny === "notshiny" ?(
												<img 
													src={item.image}
													alt={item.name}
													className="pokeCard__img"
													style={{ width: '50%' }}
												/>
											) : (
													<img
														src={item.shinyimage}
														alt={item.name}
														className="pokeCard__img"
														style={{ width: '50%' }}
													/>
												)
											}
										</div>
									</Link>
									<div className="pokeItem__info">
										<h6 className="pokeItem__no">
											#{item.no}
										</h6>
										{item.shiny === "notshiny" ?(
											<h2 className="pokeItem__name" >{item.name}</h2>
											) : (
												<h2 className="pokeItem__name" >{item.name}（異色）</h2>
												)
										}
										<div className="bagDetail__delete-wrap">
											<div className="bagDetail__delete-btn" onClick={() => removeBagItem(dispatch, item, item.shiny)}>
												x
											</div>
										</div>
									</div>
								</div>
							</Card>
						</Col>
					))}
            	</Row>
         	)}
      	</>
   );
}