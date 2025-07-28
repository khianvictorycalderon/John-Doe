interface HeroProps {
    OnHire: () => void;
}

export default function Hero({ OnHire }: HeroProps) {
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center bg-transparent text-white px-4 text-center">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight drop-shadow-sm animate-fade-in">
                Hi, I'm <span className="text-indigo-400">John Doe</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl animate-fade-in delay-200">
                A musician, composer, and storyteller. I turn emotions into melodies and moments into music.
            </p>

            <button
                className="mt-8 inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 hover:cursor-pointer"
                onClick={OnHire}
            >Hire Me!</button>
        </section>
    );
}
