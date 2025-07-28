export default function Songs() {
  const songs = [
    { title: "Midnight Echoes", duration: "3:45" },
    { title: "Neon Dreams", duration: "4:12" },
    { title: "Electric Soul", duration: "3:58" },
    { title: "Pulse of the Night", duration: "4:05" },
    { title: "Fragments", duration: "3:30" },
    { title: "Digital Sunrise", duration: "4:20" },
  ];

  return (
    <section className="w-full px-4 py-16 text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">My Composed Songs 🎵</h2>

      <div className="w-full max-w-5xl flex flex-col gap-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white/5 backdrop-blur-sm p-4 rounded-md border border-white/10 hover:bg-white/10 transition duration-300"
          >
            <div className="flex flex-col text-left">
              <span className="text-lg font-semibold text-white">{song.title}</span>
              <span className="text-sm text-gray-400">Duration: {song.duration}</span>
            </div>
            <button onClick={() => alert(`Playing ${song.title}...`)} className="text-sm font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer">
              ▶ Play
            </button>
          </div>
        ))}
      </div>

      <p className="max-w-xl text-center text-gray-400 mt-10 text-base">
        These songs show how I mix real feelings with electronic sounds. Check out more of my music and find something you'll enjoy.
      </p>

      <button
        onClick={() => alert("Loaded more songs.")}
        className="mt-10 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium text-white transition cursor-pointer"
      >
        Load More Songs
      </button>
    </section>
  );
}
