import { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Spin, Card } from "antd";
import { LoadingIcon, BallIcon } from "./Icons";
import { requestOrderDetail } from "../actions"
import { StoreContext } from "../store";

export default function OrderCard({ orderId }) {
   const { state: { orderDetail: { loading, order } }, dispatch } = useContext(StoreContext);
   const { orderItems } = order;
   const history = useHistory()

	 const spinnerIcon = (
    <LoadingIcon style={{ fontSize: 80, color: "#4d7072" }} spin />
  );

   useEffect(() => {
      requestOrderDetail(dispatch, orderId)
   }, [orderId])

   return (
     <>
       {loading ? (
         <div className="spinner__wrap">
           <Spin indicator={spinnerIcon} className="spinner" />
         </div>
       ) : (
         <>
           <div className="commentList__title-wrap">
             <BallIcon size={36} />
             <div className="commentList__title">{orderId}</div>
           </div>
           <Row gutter={[32, 32]}>
             {orderItems.map((item, index) => (
               <Col
                 key={index}
                 sm={{ span: 8 }}
                 lg={{ span: 6 }}
                 xl={{ span: 6 }}
                 xxl={{ span: 4 }}
               >
                 <Card className="poke__card">
                   <div className="bagItem__wrap">
                     <Link to={`/poke/${item.id}`}>
                       <div className="bag__image">
                         {item.shiny === "notshiny" ? (
                           <img
                             src={item.image}
                             alt={item.name}
                             className="pokeCard__img"
                             style={{ width: "90%" }}
                           />
                         ) : (
                           <img
                             src={item.shinyimage}
                             alt={item.name}
                             className="pokeCard__img"
                             style={{ width: "90%" }}
                           />
                         )}
                       </div>
                     </Link>
                     <div className="pokeItem__info">
                       <h6 className="pokeItem__no">#{item.no}</h6>
                       {item.shiny === "notshiny" ? (
                         <div className="pokeItem__name-wrap">
                           <h2 className="pokeItem__name">{item.name}</h2>
                         </div>
                       ) : (
                         <div className="pokeItem__name-wrap">
                           <h2 className="pokeItem__name">
                             {item.name} (異色)
                           </h2>
                         </div>
                       )}
                     </div>
                   </div>
                 </Card>
               </Col>
             ))}
           </Row>
         </>
       )}
     </>
   );
}

