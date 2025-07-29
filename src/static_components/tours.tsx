const tourData = [
  {
    city: "Los Angeles",
    description: "A wild night under neon lights. The crowd was electric!",
    image: "images/Los_Angeles.jpg",
  },
  {
    city: "Tokyo",
    description: "A magical vibe with incredible fans. Unforgettable!",
    image: "images/Tokyo.jpg",
  },
  {
    city: "Berlin",
    description: "The beats hit harder and the energy was unreal.",
    image: "images/Berlin.jpg",
  },
  {
    city: "Paris",
    description: "A dreamy night in the city of lights. So much love.",
    image: "images/Paris.jpg",
  },
];

const Container = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {tourData.map((tour, index) => (
        <div
          key={index}
          className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
            <h2 className="text-2xl font-semibold text-white mb-1">{tour.city}</h2>
            <p className="text-sm text-gray-300">{tour.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Tours() {
  return (
    <section id="tours" className="w-full py-16 text-white bg-transparent">
      <div className="text-center mb-12 px-4">
        <h1 className="font-bold text-3xl md:text-4xl">Tours</h1>
        <p className="text-gray-300 mt-2">
          The places where I've been, filled with music and memories.
        </p>
      </div>
      <Container />
    </section>
  );
}
