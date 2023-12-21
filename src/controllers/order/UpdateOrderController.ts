import { Request, Response } from "express";

import { UpdateOrderService } from "../../services/order/UpdateOrderService";
import { UpdateOrderRequest } from "../../services/order/UpdateOrderService";

class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;
    const data: UpdateOrderRequest = req.body;

    const updateOrder = new UpdateOrderService();

    const order = await updateOrder.execute({ order_id, data });
    return res.json(order);
  }
}

export { UpdateOrderController };
