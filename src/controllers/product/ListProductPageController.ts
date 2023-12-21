import { Request, Response } from "express";

import { ListProductPageService } from "../../services/product/ListProductPageService";

class ListProductPageController {
  async handle(req: Request, res: Response) {
    const listProductPageService = new ListProductPageService();

    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 6;

    const listProduct = await listProductPageService.execute({ skip, take });

    return res.json(listProduct);
  }
}

export { ListProductPageController };
