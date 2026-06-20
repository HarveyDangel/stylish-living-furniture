import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryGallery } from "@/components/sections/category-gallery";
import { CTA } from "@/components/sections/cta";
import { getCategoryBySlug } from "@/data/collections";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return { title: "Not Found" };

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      images: [
        {
          url: category.images[0],
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg font-sans text-6xl text-white">
            {category.name}
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {category.description}
          </p>
        </div>
      </section>

      <CategoryGallery images={category.images} categoryName={category.name} />

      <CTA
        title="Ready to Transform Your Space?"
        description="Whether you are furnishing one room or an entire building, our team is here to help. Reach out today for a free consultation."
        buttonText="Get in Touch"
      />
    </>
  );
}
