import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
}

class ListingItemsOrderService {
  async execute({ order_id }: ItemRequest) {
    const findByOrder = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
    });
    return findByOrder;
  }
}

export { ListingItemsOrderService };
