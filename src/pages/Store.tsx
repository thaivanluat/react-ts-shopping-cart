import { useEffect, useState } from "react"
import { Loading } from "../components/Loading";
import { Col, Row } from "react-bootstrap";
import { Product, ProductProps as ProductType } from "../components/Product";
import { useShoppingCart } from "../hooks/useShoppingCart";

export function Store() {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductType[]>([]);
    const {setProducts: setProductsForContext} = useShoppingCart()

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await (await fetch('https://fakestoreapi.com/products')).json();
            setProducts(response)
            setProductsForContext(response)
            setLoading(false); 
        } catch (error) {
            setLoading(false); 
            console.error(error);
        }
    };
    

    useEffect(() => {
        getProducts();
    }, [])

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {products.map(product => (
                    <Col key={product.id}>
                        <Product {...product} />
                    </Col>
                ))}
            </Row>
        </>
        
    )
}