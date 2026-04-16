import FadeIn from "./FadeIn";

export default function Manifesto() {
  return (
    <section className="px-7 py-20 max-w-[520px] mx-auto">
      <FadeIn>
        <p className="text-[17px] leading-[1.9] text-[#999] font-light text-center tracking-[0.3px]">
          For those who show up when it's dark outside.<br />
          When it rains sideways.<br />
          When the body says stop — and you don't.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-[13px] leading-[1.8] text-[#555] text-center mt-7">
          Technical running and training apparel. Limited drops. When it's gone, it's gone.
        </p>
      </FadeIn>
    </section>
  );
}
