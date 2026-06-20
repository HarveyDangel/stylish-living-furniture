export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  folder: string;
  imageCount: number;
  imagePrefix: string;
}

export const categories: ProductCategory[] = [
  {
    name: "Living Furniture",
    slug: "living",
    description:
      "Comfortable and stylish pieces to make your living space feel like home.",
    folder: "living_furniture",
    imageCount: 12,
    imagePrefix: "living",
  },
  {
    name: "Bedroom Furniture",
    slug: "bedroom",
    description:
      "Create your personal sanctuary with our curated bedroom collections.",
    folder: "bedroom_furniture",
    imageCount: 15,
    imagePrefix: "bedroom",
  },
  {
    name: "Dining Furniture",
    slug: "dining",
    description:
      "Gather around thoughtfully designed tables and seating for every meal.",
    folder: "dining_furniture",
    imageCount: 15,
    imagePrefix: "dining",
  },
  {
    name: "Office Furniture",
    slug: "office",
    description:
      "Functional and elegant workspaces designed for productivity and comfort.",
    folder: "office_furniture",
    imageCount: 15,
    imagePrefix: "office",
  },
  {
    name: "Outdoor Furniture",
    slug: "outdoor",
    description:
      "Extend your living space outdoors with durable, all-weather designs.",
    folder: "outdoor_furniture",
    imageCount: 7,
    imagePrefix: "outdoor",
  },
];

export function getCategoryImages(category: ProductCategory): string[] {
  return Array.from(
    { length: category.imageCount },
    (_, i) =>
      `/Images/Products/${category.folder}/${category.imagePrefix}${i + 1}.webp`,
  );
}

export function getCategoryBySlug(slug: string) {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return undefined;
  return { ...category, images: getCategoryImages(category) };
}
