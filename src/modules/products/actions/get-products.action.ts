import {tesloApi} from "@/api/tesloApi";
import type {Product} from "@/modules/products/interfaces/product.interface";

export const getProductsAction = async (page: number = 1, limit: number = 10) => {
    try {
        const {data} = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page * limit}`)

        console.log({data})

        return data

    } catch (e) {
        console.log({error: e})
        throw new Error('Error getting products')

    }
}