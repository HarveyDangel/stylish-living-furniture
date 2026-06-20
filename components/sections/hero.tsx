import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
	return (
		<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-[url('/Images/hero.webp')] bg-center bg-cover" />

			<div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50" />
			<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
				<h1 className="mb-4 font-medium font-sans text-6xl text-white">
					Timeless Craft for
					<br />
					Modern Living
				</h1>
				<p className="mx-auto mb-10 max-w-xl text-lg text-white">
					Handcrafted furniture that brings warmth and character to every space.
					Discover pieces built to last a lifetime.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link
						href="/products"
						className={cn(
							buttonVariants({ variant: "secondary", size: "xl" }),
							"px-12 uppercase tracking-wide"
						)}
					>
						Explore Collection
					</Link>
					<Link
						href="/Contact"
						className={cn(
							buttonVariants({ variant: "secondaryOutline", size: "xl" }),
							"px-12 uppercase tracking-wide"
						)}
					>
						Message Us
					</Link>
				</div>
			</div>
		</section>
	);
}
