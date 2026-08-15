import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
//one user-one cart
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },

            quantity: {
                type: Number,
                default: 1
            }
        }
    ]

});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;