import prismaClient from "../../prisma";

class ListProductIdService {
  async execute(product_id: number) {
    const product = await prismaClient.product.findUnique({
      where: {
        id: product_id,
      },
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

export { ListProductIdService };
