import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "sofiane/site",
  },
  singletons: {
    home: singleton({
      label: "Accueil",
      path: "src/content/home/home",
      format: { contentField: "content" },
      schema: {
        slogan: fields.text({
          label: "Slogan",
          validation: { isRequired: true },
        }),
        content: fields.mdx({ label: "Description", extension: "md" }),
      },
    }),
  },
  collections: {
    products: collection({
      label: "Produits",
      slugField: "title",
      path: "src/content/products/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        priority: fields.number({
          label: "Priorité",
          defaultValue: 0,
          validation: { isRequired: true },
        }),
        url: fields.url({ label: "Url", validation: { isRequired: true } }),
        price: fields.number({
          label: "Prix",
          validation: { isRequired: true },
        }),
        features: fields.array(fields.text({ label: "Description" }), {
          label: "Caractéristiques",
          itemLabel: (props) => props.value,
        }),
        content: fields.emptyContent({ extension: "md" }),
      },
    }),
  },
});
