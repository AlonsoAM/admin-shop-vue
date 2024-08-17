import {tesloApi} from "@/api/tesloApi";
import type {Product} from "@/modules/products/interfaces/product.interface";
import {getProductImageAction} from "@/modules/products/actions/get-product-image.action";

export const getProductsAction = async (page: number = 1, limit: number = 10) => {
    try {
        const {data} = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page * limit}`)

        return data.map((product) => ({
            ...product,
            images: product.images.map(getProductImageAction)
        }))

    } catch (e) {
        console.log({error: e})
        throw new Error('Error getting products')

    }
}