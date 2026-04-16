import FadeIn from "./FadeIn";
import { products } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section className="pt-14">
      <FadeIn>
        <div className="px-6 pb-7 flex justify-between items-end">
          <div>
            <div className="font-mono text-[8px] tracking-[4px] text-accent">DROP 001</div>
            <h2 className="font-mono text-[20px] tracking-[4px] mt-2">COLLECTION</h2>
          </div>
          <div className="font-mono text-[8px] tracking-[2px] text-[#333]">SUMMER 2026</div>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 gap-[1px] bg-[#1a1a1a]">
        {products.slice(0, 6).map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.08}>
            <div className="bg-[#0a0a0a] cursor-pointer group">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="font-mono text-[7px] tracking-[2px] text-accent">{p.cat}</div>
                <div className="font-mono text-[9px] tracking-[1px] mt-1">{p.name}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-[#555]">{p.sub}</span>
                  <span className="font-mono text-[11px]">{p.price} NOK</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
