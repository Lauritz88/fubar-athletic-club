import FadeIn from "./FadeIn";

const details = [
  { img: "/img/details/embroidery.jpg", label: "FBR EMBROIDERY" },
  { img: "/img/details/gel-pockets.jpg", label: "GEL POCKETS" },
  { img: "/img/details/label.jpg", label: "NECK LABEL" },
  { img: "/img/details/fabric.jpg", label: "FABRIC MACRO" },
];

export default function Details() {
  return (
    <section className="pt-14">
      <FadeIn>
        <div className="px-6 pb-7">
          <div className="font-mono text-[8px] tracking-[4px] text-accent">CRAFTSMANSHIP</div>
          <h2 className="font-mono text-[20px] tracking-[4px] mt-2">DETAILS</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 gap-[1px] bg-[#1a1a1a]">
        {details.map((d, i) => (
          <FadeIn key={d.label} delay={i * 0.08}>
            <div className="bg-[#0a0a0a] overflow-hidden group">
              <img
                src={d.img}
                alt={d.label}
                className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
              />
              <div className="px-3 py-2">
                <span className="font-mono text-[7px] tracking-[3px] text-[#333]">{d.label}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
