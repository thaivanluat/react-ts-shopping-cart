import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../hooks/useShoppingCart"

export type ProductProps = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}

export function Product({ id, title, price, image, description }: ProductProps) {
    const { increaseCartQuantity } = useShoppingCart();
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={image}
                style={{
                    width: "400px",
                    height: "400px"
                }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{formatCurrency(price)}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Button variant="secondary" onClick={() => increaseCartQuantity(id)}>Add to cart</Button>
        </Card>
    )
}