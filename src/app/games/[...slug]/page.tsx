import { games } from "@/data/games";
import Image from "next/image";

const MainGamePage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  const [categorySlug, gameSlug] = slug;

  const game = games.find(
    (g) => g.categorySlug === categorySlug && g.slug === gameSlug
  );

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">
        Game Not Found :(
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Game Banner */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl md:text-5xl font-bold">{game.title}</h1>
          <p className="text-gray-300 mt-2">{game.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-10">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          {game.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
          <div className="space-y-2">
            <p>
              <span className="text-gray-400">Developer:</span>{" "}
              <span className="font-medium">{game.developer}</span>
            </p>
            <p>
              <span className="text-gray-400">Publisher:</span>{" "}
              <span className="font-medium">{game.publisher}</span>
            </p>
            <p>
              <span className="text-gray-400">Release Date:</span>{" "}
              <span className="font-medium">{game.releaseDate}</span>
            </p>
            <p>
              <span className="text-gray-400">Platforms:</span>{" "}
              <span className="font-medium">{game.platforms.join(", ")}</span>
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <span className="text-gray-400">Rating:</span>{" "}
              <span className="font-medium">{game.rating} / 5</span>
            </p>
            <p>
              <span className="text-gray-400">Category:</span>{" "}
              <span className="font-medium">{game.category}</span>
            </p>
            <p>
              <span className="text-gray-400">Difficulty:</span>{" "}
              <span className="font-medium">{game.difficulty}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
