import { Request, Response } from "express";

import {
  CreateOrderService,
  OrderRequest,
} from "../../services/order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { id, user_id, status, amount }: OrderRequest = req.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({
      id,
      user_id,
      status,
      amount,
    });

    return res.json(order);
  }
}

export { CreateOrderController };
