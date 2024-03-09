import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps): JSX.Element {
    const { products, removeFromCart } = useShoppingCart()
    const item = products.find(i => i.id === id)
    if (item == null) return <></>

    return (
        <Stack direction="horizontal" gap={2}>
            <div>
                <img src={item.image} style={{
                    width: "125px",
                    height: "125px",
                }} />
            </div>
            <div className="me-auto">
                <div>
                    <span>{item.title}</span> {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price * quantity)}
                </div>
            </div>
            <div>
                <Button variant="outline-danger" size="sm"
                    onClick={() => removeFromCart(item.id)}
                >
                    &times;
                </Button>
            </div>
        </Stack>
    )
}