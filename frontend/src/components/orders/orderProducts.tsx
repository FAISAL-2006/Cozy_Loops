interface Product {
  _id: string;
  name: string;
  image: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

interface Props {
  order: {
    items: OrderItem[];
  };
}

export default function OrderProducts({ order }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-6">
        Ordered Items
      </h2>

      <div className="space-y-6">

        {order.items.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center gap-5 border-b last:border-b-0 pb-6 last:pb-0"
          >

            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 rounded-xl object-cover border"
            />

            <div className="flex-1">

              <h3 className="text-lg font-semibold">
                {item.product.name}
              </h3>

              <div className="mt-3 space-y-1 text-gray-600">

                <p>
                  Quantity: <span className="font-medium">{item.quantity}</span>
                </p>

                <p>
                  Price: ₹{item.price}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-sm text-gray-500">
                Subtotal
              </p>

              <p className="text-xl font-bold">
                ₹{item.price * item.quantity}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}