import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

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
                required: true
            },

            // Store the product price at the time of purchase
            price: {
                type: Number,
                required: true
            },
            image: {
            type: String,
            required: true
            }
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    status: {
    type: String,
    enum: [
        "Pending",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled"
    ],
    default: "Pending"
},

shippingAddress: {

    name: String,

    email: String,

    phone: String,

    address: String,

    city: String,

    state: String,

    pincode: String

},

paymentMethod: {
    type: String,
    default: "Razorpay"
},

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending"
    },

    razorpayOrderId: {
        type: String
    },

    razorpayPaymentId: {
        type: String
    },

    razorpaySignature: {
        type: String
    }

},
{
    timestamps: true
});

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;