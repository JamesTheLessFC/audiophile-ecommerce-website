export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-05",
  useCdn: true,
};

export const configWithToken = {
  ...config,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
};
