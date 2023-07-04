import { Product } from '@/types/types';
import axios from 'axios'

import Papa from 'papaparse'

const URL = process.env.NEXT_PUBLIC_URL;

const api = {
    list: async (): Promise<Product[] | []> => {

        if(!URL) return []

        return axios
        .get(URL, { responseType: 'blob'})
        .then(res => {
            return new Promise<Product[]>((resolve, reject) => {
                Papa.parse(res.data, {
                    header: true,
                    complete: results => {
                        const products = results.data as Product[]
                        return resolve( products.map(product => ({
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