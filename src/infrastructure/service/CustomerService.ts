import { injectable, inject } from "inversify";
import TYPES from "../../domain/constant/types";
import { Repository } from "typeorm";
import { Cart } from '../../domain/entities/cart';
import { IGenericRepository } from '../../interfaces_adapters/repositories/IGenericRepository';
import { ICustomerService } from '../../interfaces_adapters/services/ICustomerService';
import { Customer } from '../../domain/entities/customer';


@injectable()
export class CustomerService implements ICustomerService {

  private readonly _customerRepository: Repository<Customer>;

  public constructor(
    @inject(TYPES.CustomerRepository) customerRepository: Repository<Customer>,
    @inject(TYPES.CartRepository) cartRepository: Repository<Cart>,
    @inject(TYPES.GenericRepository) genericRepository: IGenericRepository

  ) {
    this._customerRepository = customerRepository;
  }

  public async GetOrdersByCustomerId(id: number): Promise<Customer[]> {

    // this._customerRepository.createQueryBuilder('c1')
    //   .addSelect('r.id', 'orderid')
    //   .addSelect('p.name')
    //   .addSelect('ri.quantity')
    //   .innerJoin("orders", 'r', 'c1.id = r.customerid')
    //   .innerJoin("orderInformation", 'ri', 'r.id = ri.orderid')
    //   .innerJoin("product", 'p', 'p.id = ri.productid')
    //   .where('c1.id = ' + id)
    //   .getRawAndEntities().then(x => {
    //     console.log(x);
    //   }).catch(err => {
    //     console.log(err)
    //   })



    return this._customerRepository.find({
      where: {
        id: id
      },
      relations: ["orders","orders.orderInfo"]
    });


  }


}
