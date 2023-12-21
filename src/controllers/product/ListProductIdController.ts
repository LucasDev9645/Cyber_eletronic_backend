import { Request, Response } from "express";

import { ListProductIdService } from "../../services/product/ListProductIdService";

class ListProductIdController {
  async handle(req: Request, res: Response) {
    const product_id = req.params.id;

    const listProductIdrService = new ListProductIdService();

    const detailProduct = await listProductIdrService.execute(
      Number(product_id)
    );
    return res.json(detailProduct);
  }
}

export { ListProductIdController };
