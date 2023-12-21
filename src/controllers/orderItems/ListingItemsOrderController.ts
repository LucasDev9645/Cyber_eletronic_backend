import { Request, Response } from "express";

import { ListingItemsOrderService } from "../../services/orderItems/ListingItemsOrderService";

class ListingItemsOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const listByOrder = new ListingItemsOrderService();

    const OrderItems = await listByOrder.execute({ order_id });

    return res.json(OrderItems);
  }
}

export { ListingItemsOrderController };
