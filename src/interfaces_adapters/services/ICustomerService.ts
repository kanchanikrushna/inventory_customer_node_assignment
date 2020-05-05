import { Customer } from "../../domain/entities/customer";

export interface ICustomerService{
    GetOrdersByCustomerId(id: number): Promise<Customer[]>;
}