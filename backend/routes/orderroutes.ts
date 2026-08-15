//need to display ordered elements , (can be done later also)
import Orders from "../models/orders";
import { Router } from "express";
import auth from "../middleware/auth";

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const userId = (req as any).user.userId;

    const orders = await Orders.find({
      user: userId,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;

    const order = await Orders.findOne({
      _id: id,
      user: userId,
    }).populate("items.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
});

export default router;
