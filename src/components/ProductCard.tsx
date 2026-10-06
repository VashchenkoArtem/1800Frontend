import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product
}

export function ProductCard(props: ProductCardProps) {
    const { 
        name,
        price,
        category
    } = props.product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}$</p>
            <p>{category}</p>
        </div>
    )
}