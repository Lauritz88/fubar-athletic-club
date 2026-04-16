import FadeIn from "./FadeIn";

export default function Manifesto() {
  return (
    <section className="px-7 py-20 max-w-[520px] mx-auto">
      <FadeIn>
        <p className="text-[17px] leading-[1.9] text-[#999] font-light text-center tracking-[0.3px]">
          For de som stiller opp når det er mørkt ute.<br />
          Når det regner sidelengs.<br />
          Når kroppen sier stopp, men du fortsetter.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-[13px] leading-[1.8] text-[#555] text-center mt-7">
          Teknisk løpetøy og treningsklær. Limited drops. Når det er tomt, er det tomt.
        </p>
      </FadeIn>
    </section>
  );
}
