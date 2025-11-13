import { games } from "@/data/games";
import Link from "next/link";

const GamePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Explore Games
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.categorySlug}/${game.slug}`}
            className="group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
          >
            {/* Game Image */}
            <div className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-52 object-cover rounded-lg group-hover:opacity-80 transition"
              />
            </div>

            {/* Game Info */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition">
                {game.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                {game.description}
              </p>

              <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                <span className="inline-flex items-center gap-1">
                  ⭐ {game.rating} / 5
                </span>
                <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                  {game.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
