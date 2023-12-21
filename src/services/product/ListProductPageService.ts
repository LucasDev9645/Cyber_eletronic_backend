import prismaClient from "../../prisma";

interface ListProductRequest {
  skip: number;
  take: number;
}

class ListProductPageService {
  async execute({ skip, take }: ListProductRequest) {
    const result = await prismaClient.$transaction([
      prismaClient.product.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          banner: true,
          category_id: true,
        },
        skip,
        take,
      }),
      prismaClient.product.count(),
    ]);

    const products = result[0];
    const total = Math.ceil(result[1] / take);

    return { products, total };
  }
}

export { ListProductPageService };
