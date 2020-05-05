import { ICustomerService } from '../services/ICustomerService';
import * as express from "express";
import { controller, httpGet, response, BaseHttpController, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../../domain/constant/types';



@controller('/customer')
export class CustomerController extends BaseHttpController {

  private readonly _customerService: ICustomerService;
  public constructor(
    @inject(TYPES.CustomerService) customerService: ICustomerService
  ) {
    super();
    this._customerService = customerService;
  }

  @httpGet('/:id')
  public async DetailsById(
    @requestParam("id") id: number,
    @response() res: express.Response
  ) {
    return this.ok(await this._customerService.GetOrdersByCustomerId(id));
  }

  
}
