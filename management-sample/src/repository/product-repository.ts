

export type  ProductListRequest  = {
    name?:string
    descriotion?:string
    page:number
    rows:number
    order?:''|'asc'|'desc'
    orderBy?:string
}

export type Product ={
    name:string
    description:string
    id:number
    quantity:number
}

export type ProductResponse ={
    count:number
    data:Array<Product>
}

export type BaseResponse = {
    status:string
}

export type ProductUpdateRequest = Product

class ProductRepository {
    public static async findAll(reqest:ProductListRequest) :Promise<ProductResponse>{
        const response = await fetch(`https://next-typescript-sample-mu.vercel.app/api/products`)

        //is error
        if (!response.ok) {
            const errorResponse = await response.json()
            const error = new Error(errorResponse.message ?? 'APIリクエストにてエラー')
            throw error
        }
        const res = response.json();
        console.log(res)
        return res
    }
}
export { ProductRepository }