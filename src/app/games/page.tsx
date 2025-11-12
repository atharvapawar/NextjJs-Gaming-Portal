import { games } from "@/data/games";
import Link from "next/link";
console.log(games);

const GamePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Explore Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Link
            className="group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
            key={game.id}
            href={`/games/${game.category}/${game.slug}`}
          >
            <div>
              <img src={game.image} alt={game.title} />
              <div></div>
            </div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <p>{game.rating}/10</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
