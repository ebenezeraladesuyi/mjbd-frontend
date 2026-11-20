import { Link } from "react-router-dom";
import heroImg from "../../assets/images/MJBD-3.jpeg"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F7F4]">
      {/* ================= MAIN WRAPPER ================= */}
      <div className="flex w-full justify-center">
        <div className="w-[90%] py-12 sm:py-16 lg:py-20">
          <div className="gri flex flex-col-reverse md:flex-row gri-cols-1 items-center gap-10 lg:gri-cols-2 lg:gap-16">
            {/* ================= LEFT: COPY ================= */}
            <div className="relative z-10 order-2 flex flex-col lg:order-1">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#4A3B32]/50" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4A3B32]/70 sm:text-xs">
                  Kingdom Streetwear
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#4A3B32] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Wear Your
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Faith.</span>
                  {/* Highlight swash */}
                  <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-[#E5DFD5] sm:h-4" />
                </span>
                <br />
                <span className="text-[#4A3B32]/40">Own Your Story.</span>
              </h1>

              {/* Sub-copy */}
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#4A3B32]/70 sm:text-lg">
                Premium round-necks, polos and hoodies built for the bold.
                Custom Kingdom inscriptions on the front, back — or both.
                Delivered worldwide.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/gallery"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#4A3B32] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#F8F7F4] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(74,59,50,0.6)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop the Collection
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
                  <span className="absolute inset-0 -translate-x-full bg-[#4A3B32]/85 transition-transform duration-300 group-hover:translate-x-0" />
                </Link>

                <Link
                  to="/gallery"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#4A3B32]/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#4A3B32] transition-all duration-300 hover:border-[#4A3B32] hover:bg-[#4A3B32] hover:text-[#F8F7F4]"
                >
                  Customize Yours
                </Link>
              </div>

              {/* Trust / stat strip */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#4A3B32]/10 pt-6">
                {/* <Stat value="A4" label="Inscription Size" /> */}
                <Stat value="M–XL" label="Fits All" />
                <Stat value="World" label="Delivery" />
              </div>
            </div>

            {/* ================= RIGHT: IMAGE ================= */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
              {/* Decorative warm-sand block */}
              <div className="absolute -right-4 top-4 h-[85%] w-[85%] rounded-4xl bg-[#E5DFD5] sm:-right-6 sm:top-6" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-[#4A3B32]/15 sm:-bottom-6 sm:-left-6" />

              {/* Image frame */}
              <div className="relative z-10 aspect-4/5 w-full max-w-md overflow-hidden rounded-4xl bg-[#E5DFD5] shadow-[0_25px_60px_-20px_rgba(74,59,50,0.5)] sm:max-w-lg">
                <img
                  // src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=80"
                  src={heroImg}
                  alt="Black model wearing MJBD Kingdom streetwear"
                  className="h-full w-full object-cover object-top transition-transform duration-1200 ease-out hover:scale-105"
                  loading="eager"
                />
                {/* Soft gradient bottom for legibility */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#4A3B32]/40 via-transparent to-transparent" />

                {/* Floating product tag — bottom left */}
                <div className="absolute bottom-4 left-4 z-20 rounded-xl bg-[#F8F7F4]/95 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A3B32]/60">
                    Front & Back
                  </p>
                  <p className="text-lg font-black leading-none text-[#4A3B32]">
                    ₦12,000
                  </p>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-[#4A3B32] px-3 py-1.5 sm:right-6 sm:top-6">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F8F7F4]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8F7F4]">
                    Customizable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MARQUEE STRIP ================= */}
      <div className="relative w-full border-y border-[#4A3B32]/10 bg-[#E5DFD5]/60 py-4 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12">
              {[
                "Premium Fabric",
                "Kingdom Inscriptions",
                "Worldwide Shipping",
                "Front & Back Branding",
                "Youth-Built",
                "Wear Your Faith",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#4A3B32]/70"
                >
                  <svg className="h-1.5 w-1.5 fill-[#4A3B32]/50" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= INLINE KEYFRAMES ================= */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Small helper ---------- */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-lg font-black leading-none text-[#4A3B32] sm:text-xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#4A3B32]/50 sm:text-xs">
        {label}
      </p>
    </div>
  );
}