import { Request, Response } from "express";

import { ListingCategoryService } from "../../services/category/ListingCategoryService";

class ListingCategoryController {
  async handle(req: Request, res: Response) {
    const listingCategoryService = new ListingCategoryService();

    const categoryList = await listingCategoryService.execute();

    return res.json(categoryList);
  }
}

export { ListingCategoryController };
