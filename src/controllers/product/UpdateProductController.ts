import { Request, Response } from "express";

import { UpdateProductService } from "../../services/product/UpdateProductService";
import { UpdateProductRequest } from "../../services/product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const product_id = Number(req.params.id);
    const data: UpdateProductRequest = req.body;

    const updateItem = new UpdateProductService();

    const product = await updateItem.execute({ product_id, data });
    return res.json(product);
  }
}

export { UpdateProductController };
