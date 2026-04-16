import FadeIn from "./FadeIn";

export default function Community() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/img/lifestyle/group-run.jpg"
        alt="FUBAR crew"
        className="w-full h-[420px] object-cover brightness-[0.5]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <FadeIn y={20}>
          <div className="font-mono text-[8px] tracking-[5px] text-accent mb-4">GRIMSTAD · NORWAY</div>
          <h2 className="font-mono text-[clamp(22px,6vw,36px)] tracking-[clamp(5px,2vw,12px)] leading-tight">
            IKKE ET MERKE.<br />ET CREW.
          </h2>
          <p className="text-[12px] leading-[1.8] text-[#777] mt-5 max-w-[260px] mx-auto font-light">
            Vi møtes i mørket. Vi løper når det regner. Vi heier på hverandre hele veien.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
