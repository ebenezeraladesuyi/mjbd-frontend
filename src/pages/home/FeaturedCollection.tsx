import { Link } from "react-router-dom";
import img1 from "../../assets/images/MJBD-1.jpeg"
import img2 from "../../assets/images/MJBD-2.jpeg"
import img3 from "../../assets/images/MJBD-3.jpeg"
import img4 from "../../assets/images/MJBD-4.jpeg"

/* ---------- Types ---------- */
export interface Product {
  id: string;
//   name: string;
  category: "Round-Neck" | "Polo" | "Hoodie" | "Tracksuit";
  image: any;
  price?: number;          // base price in NGN
  comingSoon?: boolean;
  badge?: string;         // e.g. "Best Seller", "New"
}

/* ---------- Placeholder data (swap for API later) ---------- */
const PRODUCTS: Product[] = [
  {
    id: "rn-001",
    // name: "Round-Neck",
    category: "Round-Neck",
    image: img1,
    //   "https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=800&q=80",
    // price: 10000,
    badge: "Best Seller",
  },
  {
    id: "pl-001",
    // name: "Grace Polo",
    category: "Round-Neck",
    image: img2,
    //   "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800&q=80",
    // price: 12000,
    badge: "New",
  },
  {
    id: "hd-001",
    // name: "Faith Hoodie",
    category: "Round-Neck",
    image: img3,
    //   "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    // price: 0,
    // comingSoon: true,
  },
  {
    id: "ts-001",
    // name: "Glory Tracksuit",
    category: "Round-Neck",
    image: img4,
    //   "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    // price: 0,
    // comingSoon: true,
  },
];

/* ---------- Format NGN ---------- */
// const formatNGN = (n: number) =>
//   new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//     maximumFractionDigits: 0,
//   }).format(n);

/* ---------- Section ---------- */
export default function FeaturedCollection() {
  return (
    <section className="relative w-full bg-[#F8F7F4] py-16 sm:py-20 lg:py-24">
      <div className="flex w-full justify-center">
        <div className="w-[90%]">
          {/* ===== Section header ===== */}
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#4A3B32]/50" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4A3B32]/70 sm:text-xs">
                  The Collection
                </span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#4A3B32] sm:text-4xl lg:text-5xl">
                Built for the bold.
                <br />
                <span className="text-[#4A3B32]/40">Worn by the faithful.</span>
              </h2>
            </div>

            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-wider text-[#4A3B32] sm:self-auto"
            >
              View All
              <span className="relative overflow-hidden">
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#4A3B32] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* ===== Grid ===== */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product Card ---------- */
function ProductCard({ product }: { product: Product }) {
  const isDisabled = product.comingSoon;

  const CardWrapper = isDisabled ? "div" : Link;
  const wrapperProps = isDisabled
    ? {}
    : { to: `/gallery?product=${product.id}` };

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[#E5DFD5] transition-all duration-300 ${
        isDisabled
          ? "cursor-default"
          : "hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(74,59,50,0.5)]"
      }`}
    >
      {/* Image wrapper */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#E5DFD5]">
        <img
          src={product.image}
          alt={product.category}
          loading="lazy"
          className={`h-full w-full object-cover object-top transition-transform duration-900 ease-out ${
            isDisabled ? "opacity-60 grayscale-40" : "group-hover:scale-105"
          }`}
        />

        {/* Overlay for disabled state */}
        {isDisabled && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#4A3B32]/30 backdrop-blur-[2px]">
            <span className="rounded-full bg-[#F8F7F4] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4A3B32]">
              Coming Soon
            </span>
          </div>
        )}

        {/* Top badge (Best Seller / New) */}
        {product.badge && !isDisabled && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-[#4A3B32] px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F8F7F4]">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick CTA revealed on hover (desktop) */}
        {/* {!isDisabled && (
          <div className="absolute inset-x-3 bottom-3 z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex w-full items-center justify-center rounded-full bg-[#F8F7F4]/95 py-2.5 text-xs font-bold uppercase tracking-wider text-[#4A3B32] backdrop-blur-sm">
              Customize →
            </span>
          </div>
        )} */}
      </div>

      {/* Info footer */}
      <div className="flex flex-1 items-center justify-between px-4 py-4 sm:px-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A3B32]/50">
            {product.category}
          </p>
          {/* <h3 className="mt-0.5 text-sm font-bold leading-tight text-[#4A3B32] sm:text-base">
            {product.name}
          </h3> */}
        </div>

        {/* <div className="text-right">
          {isDisabled ? (
            <span className="text-xs font-medium text-[#4A3B32]/40">TBA</span>
          ) : (
            <>
              <p className="text-[10px] uppercase tracking-wider text-[#4A3B32]/50">
                From
              </p>
              <p className="text-sm font-black text-[#4A3B32] sm:text-base">
                {formatNGN(product.price)}
              </p>
            </>
          )}
        </div> */}
      </div>
    </CardWrapper>
  );
}