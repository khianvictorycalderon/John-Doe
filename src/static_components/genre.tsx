export default function Genre() {
  const genres = [
    { name: "Rock", description: "Energetic, bold, and timeless." },
    { name: "Jazz", description: "Smooth, soulful, and expressive." },
    { name: "Electronic", description: "Modern, rhythmic, and vibrant." },
    { name: "Acoustic", description: "Raw, emotional, and intimate." },
  ];

  return (
    <section className="w-full py-16 px-4 text-white bg-transparent">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Genres</h2>
        <p className="text-gray-300">
          Explore the different genres I composed my songs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">{genre.name}</h3>
            <p className="text-gray-300">{genre.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}