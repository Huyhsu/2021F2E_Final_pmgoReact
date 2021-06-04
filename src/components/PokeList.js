import { useContext } from "react";
import { Row, Col } from "antd";
import PokeItem from "./PokeItem";
import { StoreContext } from "../store";
// requestPokes: { loading }
export default function PokeList() {
    const { state: { page: { pokes },  } } = useContext(StoreContext);
    return (
        <Row gutter={[32, 32]} >
            {pokes.map(poke => (
                <Col 
                    key={poke.id}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }} 
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <PokeItem poke={poke}/>
                </Col>
            ))}
        </Row>
    );
}