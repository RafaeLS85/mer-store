import { useProductStore } from "@/store/products"
import { Product } from "@/types/types"
import { useEffect, useState } from "react"

export const useProducts = ({ products } : { products: Product[] } ) => {

    const fetchProducts = useProductStore((state) => state.fetchProducts )

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {          

        if(products.length > 0){
          setIsLoaded(true)
        } 

        if(products.length === 0){
            console.log("fetch products...")
            fetchProducts()
        }

      }, [products])
    
    return { isLoaded }
}