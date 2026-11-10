import type { ProductWithCategory } from "../types/product"
import { ProductCard } from "./ProductCard"

interface ProductListProps {
    products: ProductWithCategory[]
}

export function ProductList(props: ProductListProps){
    const { products } = props
    return (
        <div>
            {products.map((product) => {
                return (
                    <ProductCard product = {product}/>
                )
            })}
        </div> 
    )
}