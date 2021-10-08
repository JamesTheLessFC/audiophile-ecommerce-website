const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the product",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The slug is the last part of the product URL, following the final slash",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cartName",
      title: "Cart Name",
      type: "string",
      description: "The name of the product as it appears in the shopping cart",
      validation: (Rule) =>
        Rule.required()
          .max(15)
          .error("The Cart Name must be 15 characters or less"),
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Headphones", value: "headphones" },
          { title: "Speakers", value: "speakers" },
          { title: "Earphones", value: "earphones" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "includes",
      title: "Includes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "item",
              title: "Item",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      description: "List the items that this product includes",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Product Image URL",
      type: "object",
      description:
        "This image will appear as the primary photo on the product details page",
      fields: [
        {
          name: "mobile",
          title: "Mobile",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "tablet",
          title: "Tablet",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "desktop",
          title: "Desktop",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cartImage",
      title: "Cart Image",
      type: "url",
      description: "This image will appear in the user's shopping cart",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categoryImage",
      title: "Category Image URL",
      type: "object",
      description:
        "This image will appear next to this product's summary on the relevant category page",
      fields: [
        {
          name: "mobile",
          title: "Mobile",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "tablet",
          title: "Tablet",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "desktop",
          title: "Desktop",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery Image URLs",
      type: "object",
      description:
        "These images will appear in the photo gallery underneath the product's description on the product details page",
      fields: [
        {
          name: "first",
          title: "First",
          type: "object",
          description: "First gallery image (small)",
          fields: [
            {
              name: "mobile",
              title: "Mobile",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "tablet",
              title: "Tablet",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "desktop",
              title: "Desktop",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "second",
          title: "Second",
          type: "object",
          description: "Second gallery image (small)",
          fields: [
            {
              name: "mobile",
              title: "Mobile",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "tablet",
              title: "Tablet",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "desktop",
              title: "Desktop",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "third",
          title: "Third",
          type: "object",
          description: "Third gallery image (large)",
          fields: [
            {
              name: "mobile",
              title: "Mobile",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "tablet",
              title: "Tablet",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "desktop",
              title: "Desktop",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "referenceImage",
      title: "Reference Image URL",
      type: "object",
      description:
        "This image will appear in the 'You might also like' sections on other product pages",
      fields: [
        {
          name: "mobile",
          title: "Mobile",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "tablet",
          title: "Tablet",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "desktop",
          title: "Desktop",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "others",
      title: "Others",
      type: "array",
      description:
        "These three products will appear under the 'You might also like' heading on the product details page",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "slug",
              type: "slug",
              title: "Slug",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              type: "object",
              fields: [
                {
                  name: "mobile",
                  title: "Mobile",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "tablet",
                  title: "Tablet",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "desktop",
                  title: "Desktop",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .length(3)
          .error("Exactly three products must be included"),
    },
  ],
};

export default product;
