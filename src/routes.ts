import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListingCategoryController } from "./controllers/category/ListingCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductIdController } from "./controllers/product/ListProductIdController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { ListProductPageController } from "./controllers/product/ListProductPageController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { UpdateOrderController } from "./controllers/order/UpdateOrderController";
import { ListingOrderController } from "./controllers/order/ListingOrderController";

import { CreateOrderItemController } from "./controllers/orderItems/CreateOrderItemController";
import { ListingItemsOrderController } from "./controllers/orderItems/ListingItemsOrderController";
import { DeleteOrderItemController } from "./controllers/orderItems/DeleteOrderItemController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get(
  "/categories",
  isAuthenticated,
  new ListingCategoryController().handle
);

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/product/:id",
  isAuthenticated,
  new ListProductIdController().handle
);
router.delete(
  "/product/:id",
  isAuthenticated,
  new DeleteProductController().handle
);
router.put(
  "/product/:id",
  isAuthenticated,
  new UpdateProductController().handle
);
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);
router.get(
  "/products",
  isAuthenticated,
  new ListProductPageController().handle
);

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.put("/order", isAuthenticated, new UpdateOrderController().handle);
router.get("/orders", isAuthenticated, new ListingOrderController().handle);

router.post(
  "/order/item",
  isAuthenticated,
  new CreateOrderItemController().handle
);
router.get(
  "/order/items",
  isAuthenticated,
  new ListingItemsOrderController().handle
);
router.delete(
  "/order/item",
  isAuthenticated,
  new DeleteOrderItemController().handle
);

export { router };
