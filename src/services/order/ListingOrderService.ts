import prismaClient from "../../prisma";

class ListingOrderService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      select: {
        id: true,
        status: true,
        amount: true,
      },
    });
    return orders;
  }
}

export { ListingOrderService };
