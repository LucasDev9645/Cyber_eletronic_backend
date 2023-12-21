import { Request, Response } from "express";

import {
  CreateOrderItemService,
  OrderItemRequest,
} from "../../services/orderItems/CreateOrderItemService";

class CreateOrderItemController {
  async handle(req: Request, res: Response) {
    const { id, order_id, product_id, quantity, subtotal }: OrderItemRequest =
      req.body;

    const createOrderItemService = new CreateOrderItemService();

    const orderItem = await createOrderItemService.execute({
      id,
      order_id,
      product_id,
      quantity,
      subtotal,
    });

    return res.json(orderItem);
  }
}

export { CreateOrderItemController };
