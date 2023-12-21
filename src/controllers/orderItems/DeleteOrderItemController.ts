import { Request, Response } from "express";

import { DeleteOrderItemService } from "../../services/orderItems/DeleteOrderItemService";

class DeleteOrderItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const deleteOrderItem = new DeleteOrderItemService();

    const orderItem = await deleteOrderItem.execute({ item_id });
    return res.json(orderItem);
  }
}

export { DeleteOrderItemController };
