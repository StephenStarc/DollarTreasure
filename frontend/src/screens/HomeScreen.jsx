import { Row, Col } from "react-bootstrap"
import products from "../../products"
import Products from "../components/Product"
export default function HomeScreen(){
    console.log(products)
    return(
        <>
        <h1>Latest Product</h1>
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product}/>
                </Col>
            ))}
        </Row>
        </>
    )
}