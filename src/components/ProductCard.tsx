import type { ProductWithCategory } from "../types/product";

interface ProductCardProps {
    product: ProductWithCategory
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
            <p>{category.name}</p>
        </div>
    )
}