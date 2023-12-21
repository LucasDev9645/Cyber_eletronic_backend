import prismaClient from "../../prisma";

export type UpdateProductRequest = {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
};

interface ProductRequest {
  product_id: number;
  data: UpdateProductRequest;
}

class UpdateProductService {
  async execute({ product_id, data }: ProductRequest) {
    const product = await prismaClient.product.update({
      where: {
        id: product_id,
      },
      data,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        banner: true,
        category_id: true,
      },
    });
    return product;
  }
}

export { UpdateProductService };
