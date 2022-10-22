const stripe = require("stripe")(
  "sk_test_51KitRBHq9wU42jJqog1aYSpgBCp0FGcKEFvCqq0cai3xSwSWNGz6Gu3RQeKHzmTC5NK7Nz0k7QmZcryQsUt2xV8g00q5w7fUDg"
);
export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "aud",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  console.log(transformedItems);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1LvhfTHq9wU42jJq0hBGo95E"],
    shipping_address_collection: { allowed_countries: ["GB", "AU", "CA"] },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
