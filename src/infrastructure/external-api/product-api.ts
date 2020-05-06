import { Product } from './../../domain/entities/product';
import { AxiosApi } from "./axios-api";
import { injectable } from "inversify";
import { AxiosResponse } from 'axios';
import { AddProductToCartRequest } from '../../domain/product-api-models/AddProductToCartRequest';

@injectable()
export class ProductApi extends AxiosApi {
    constructor() {
        super();
    }

    public GetAllProducts(): Promise<AxiosResponse<Product[]>> {
        return this.get<Product[]>("http://127.0.0.1:8080/product")
    }

    public GetProductDetailsById(id: number): Promise<AxiosResponse<Product>>  {
        return this.get<Product>(`"http://127.0.0.1:8080/product/${id}`);
    }

    public AddProductToCart(request: AddProductToCartRequest): Promise<AxiosResponse>  {
        return this.post("http://127.0.0.1:8080/product/addtocart",JSON.stringify(request));
    }

    public CheckOut(customerId: number)  {
        return this.post(`http://127.0.0.1:8080/product/checkout/${customerId}`);
    }
}