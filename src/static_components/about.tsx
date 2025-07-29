export default function About() {
  return (
    <section id="about" className="w-full py-16 px-4 text-white bg-transparent">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I'm John Doe, an independent music artist blending emotional lyrics with electronic and acoustic sounds. I started making music in my bedroom and now perform across cities sharing my sound with people from all walks of life. Whether it's late-night vibes or high-energy anthems, I put my heart into every song I create.
          </p>
        </div>
      </div>
    </section>
  );
}