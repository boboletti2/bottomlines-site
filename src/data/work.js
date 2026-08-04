import fichiImg from "@/assets/FIchi1.png";
import gabiImg from "@/assets/gabi.png";
import masseriaImg from "@/assets/masseria.png";
import ciboccaImg from "@/assets/cibocca.png";

export const work = [
  {
    no: "W—01",
    slug: "fichi-collection",
    name: "Fichi Collection",
    cat: "Clothing brand",
    scope: "Finance · Store · SEO",
    year: "2024",
    quote: "A seamless transition from creative vision to a fully managed e-commerce powerhouse.",
    image: fichiImg,
    summary:
      "A Danish clothing brand merging outdoor ease with sharp aesthetics. We managed their bookkeeping and financials, while simultaneously designing, building, and optimizing their entire online storefront.",
    services: [
      "Bookkeeping",
      "Financials",
      "E-commerce setup",
      "SEO & Management",
    ],
    outcomes: [
      { k: "100%", v: "Managed financial oversight" },
      { k: "Custom", v: "Store design & setup" },
      { k: "SEO", v: "Optimized for organic search" },
    ],

    story: [
      "Fichi Collection needed a digital home that matched their natural, effortless style. We took charge of their online presence, building a custom storefront and optimizing their SEO to drive organic reach.",
      "Beyond the frontend, we took over their bookkeeping and financial management, giving the founders the freedom to focus entirely on their collections instead of the back office.",
    ],
  },
  {
    no: "W—02",
    slug: "gabi-gamel",
    name: "Gabi Gamel",
    cat: "Clothing brand",
    scope: "E-commerce · Design · SEO",
    year: "2025",
    quote: "A digital storefront that feels as tactile and crafted as the garments themselves.",
    image: gabiImg,
    summary:
      "A contemporary clothing label focused on rich textures and urban elegance. We designed and built their online store from the ground up, implementing a robust SEO strategy to elevate their digital footprint.",
    services: ["Web design & build", "Online store setup", "SEO strategy", "Technical optimization"],
    outcomes: [
      { k: "New", v: "Digital storefront launched" },
      { k: "Top", v: "Search ranking focus" },
      { k: "Premium", v: "Brand presentation" },
    ],

    story: [
      "Gabi Gamel's pieces are highly tactile and visually striking, requiring an online store that could translate that physical quality into a digital experience. We focused on a clean, editorial layout to let the garments speak for themselves.",
      "Alongside the visual design, we implemented a comprehensive SEO strategy, ensuring the brand reaches the right audience organically while maintaining a premium feel.",
    ],
  },
  {
    no: "W—03",
    slug: "masseria-schiuma",
    name: "Masseria Schiuma & Palazzo Penelope",
    cat: "Hospitality",
    scope: "Web design · SEO",
    year: "2024",
    quote: "Capturing the timeless luxury of two Italian sister properties in one digital experience.",
    image: masseriaImg,
    summary:
      "Two breathtaking Italian sister properties available for rent. We crafted a highly atmospheric online presence, setting up their digital storefronts and optimizing them for international search visibility.",
    services: [
      "Website design",
      "Booking setup",
      "SEO strategy",
      "Digital presence",
    ],
    outcomes: [
      { k: "2", v: "Sister properties unified online" },
      { k: "Global", v: "SEO reach for bookings" },
      { k: "Bespoke", v: "Digital guest experience" },
    ],

    story: [
      "Palazzo Penelope and Masseria Schiuma offer unparalleled Italian luxury. Our task was to translate their rich, historic atmosphere into a seamless digital booking experience. We designed sites that feel expansive, elegant, and deeply rooted in their heritage.",
      "By refining their SEO strategy and optimizing the underlying architecture, we ensured these exceptional properties are easily discoverable by high-end travelers worldwide.",
    ],
  },
  {
    no: "W—04",
    slug: "cibocca",
    name: "Cibocca",
    cat: "Food producer",
    scope: "Commerce · Finance",
    year: "2026",
    quote: "Streamlining the business of bringing authentic Puglian products to the world.",
    image: ciboccaImg,
    summary:
      "A producer of premium olive oil and authentic Italian goods from Puglia. We handled the setup of their online store while simultaneously managing their bookkeeping and financial operations.",
    services: [
      "Online store setup",
      "Bookkeeping",
      "Financials",
      "Commerce ops",
    ],
    outcomes: [
      { k: "D2C", v: "Storefront successfully launched" },
      { k: "100%", v: "Financial clarity & reporting" },
      { k: "Streamlined", v: "Sales operations" },
    ],

    story: [
      "Cibocca is dedicated to the craft of traditional Puglian olive oil and regional products. They needed a partner to help scale their operations without losing their artisanal touch.",
      "We built a robust online store to facilitate direct-to-consumer sales, and took over their bookkeeping and financial reporting. This dual approach ensured their back office is as refined as the products they sell.",
    ],
  },
];

export function getWork(slug) {
  return work.find((w) => w.slug === slug);
}
