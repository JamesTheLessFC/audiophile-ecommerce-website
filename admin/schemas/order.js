const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "zip",
      title: "ZIP Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "e-Money", value: "e-Money" },
          { title: "Cash on Delivery", value: "Cash on Delivery" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "eMoneyNumber",
      title: "e-Money Number",
      type: "string",
    },
    {
      name: "eMoneyPin",
      title: "e-Money PIN",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "id",
              title: "ID",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "shippingFee",
      title: "Shipping Fee",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "grandTotal",
      title: "Grand Total",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "_createdAt",
    },
  },
};

export default order;
