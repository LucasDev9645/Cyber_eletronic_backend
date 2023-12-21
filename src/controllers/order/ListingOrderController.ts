import { Request, Response } from "express";

import { ListingOrderService } from "../../services/order/ListingOrderService";

class ListingOrderController {
  async handle(req: Request, res: Response) {
    const listingOrderService = new ListingOrderService();

    const orderList = await listingOrderService.execute();

    return res.json(orderList);
  }
}

export { ListingOrderController };
