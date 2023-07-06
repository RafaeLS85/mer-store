import { Product } from '@/types/types';
import axios from 'axios'

import Papa from 'papaparse'

const URL = process.env.NEXT_PUBLIC_URL;

const api = {
    list: async ({categoryId, searchTerm}: { categoryId: number, searchTerm: string }  ): Promise<Product[] | []> => {

        if(!URL) return []

        return axios
        .get(URL, { responseType: 'blob'})
        .then(res => {
            return new Promise<Product[]>((resolve, reject) => {
                Papa.parse(res.data, {
                    header: true,
                    complete: results => {

                        const products = results.data as Product[]

                        if(categoryId !== 0) {
                            const filteredProducts = products.filter(product => product.category === String(categoryId))           

                            return resolve( filteredProducts.map(product => ({
                                ...product,
                                price: Number(product.price)
                            })))
                        }

                        if(!searchTerm){
                            return resolve( products.map(product => ({
                                ...product,
                                price: Number(product.price)
                            })))
                        }
                        const filteredProducts = products.filter(product => product.description.includes(searchTerm) || product.title.includes(searchTerm) )


                        if(!filteredProducts){

                            return resolve( products.map(product => ({
                                ...product,
                                price: Number(product.price)
                            })))
                        }  

                        return resolve( filteredProducts.map(product => ({
                            ...product,
                            price: Number(product.price)
                        })))
                        

                    },
                    error: error => reject(error.message),
                })
            })
        })
    }
}

export default api;