// data/games.ts

export type Game = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  gameplayMechanics: string[];
  story: string;
  setting: string;
  combatStyle: string;
  worldDesign: string;
  playerChoiceImpact: string;
  multiplayer: string;
  expansionContent: string[];
  difficulty: string;
  progressionSystem: string;
};

export const games: Game[] = [
  {
    id: "1",
    slug: "elden-ring",
    title: "Elden Ring",
    category: "Action RPG",
    description:
      "Elden Ring is a dark fantasy open-world action RPG where players explore the Lands Between, battle demigods, and uncover ancient mysteries.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202111/2904/9gI3tkZ9GkVvFzOPfJ9TqE3T.png",
    rating: 4.9,
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "2022-02-25",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    gameplayMechanics: [
      "Open world exploration",
      "Stamina-based combat",
      "Character customization",
      "Summoning allies",
    ],
    story:
      "The Tarnished rise to claim the Elden Ring and become Elden Lord, exploring a shattered realm ruled by corrupted demigods.",
    setting:
      "The Lands Between, a mythic open world filled with ruins, castles, and divine entities.",
    combatStyle:
      "Third-person melee and magic combat with dodge and parry mechanics.",
    worldDesign:
      "Seamless interconnected open world with dynamic weather and day-night cycles.",
    playerChoiceImpact:
      "Choices affect questlines, endings, and NPC relationships.",
    multiplayer: "Co-op and PvP multiplayer through summoning and invasions.",
    expansionContent: ["Shadow of the Erdtree DLC"],
    difficulty: "Challenging (souls-like difficulty curve).",
    progressionSystem:
      "Level-based progression with customizable builds and upgrade paths.",
  },
  {
    id: "2",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    category: "Open World RPG",
    description:
      "Set in a dystopian Night City, Cyberpunk 2077 lets players assume the role of V — a mercenary navigating corporate chaos and cybernetic power.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    rating: 4.3,
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    gameplayMechanics: [
      "First-person shooting",
      "Cyberware abilities",
      "Hacking and stealth",
      "Branching dialogue choices",
    ],
    story:
      "V searches for a one-of-a-kind implant that grants immortality, while powerful factions battle for control of Night City.",
    setting:
      "Night City — a neon-drenched futuristic metropolis filled with crime and cyber enhancement.",
    combatStyle:
      "FPS-style combat mixing guns, blades, hacking, and stealth systems.",
    worldDesign:
      "Highly detailed futuristic city with vertical design and multiple districts.",
    playerChoiceImpact:
      "Dialogue and quest decisions affect story endings and relationships.",
    multiplayer: "None (single-player).",
    expansionContent: ["Phantom Liberty DLC"],
    difficulty: "Adjustable (Easy to Very Hard).",
    progressionSystem:
      "Skill trees and attribute systems for customizing playstyle.",
  },
  {
    id: "3",
    slug: "god-of-war-ragnarok",
    title: "God of War: Ragnarök",
    category: "Action Adventure",
    description:
      "Kratos and Atreus embark on an epic journey through the Nine Realms as Ragnarök — the end of the world — approaches.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/2416/bkfsItcA0I6nqbiqoxOamP0S.png",
    rating: 4.8,
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-11-09",
    platforms: ["PS5", "PS4"],
    gameplayMechanics: [
      "Third-person combat",
      "Puzzle solving",
      "Weapon upgrades",
      "Companion AI mechanics",
    ],
    story:
      "As the realms prepare for Ragnarök, Kratos and Atreus must face gods, monsters, and their own destiny.",
    setting: "Norse mythological realms such as Midgard, Asgard, and Vanaheim.",
    combatStyle:
      "Cinematic melee combat using Leviathan Axe, Blades of Chaos, and shields.",
    worldDesign:
      "Semi-open world with interconnected realms and exploration hubs.",
    playerChoiceImpact:
      "Minimal — linear story focus with emotional decisions.",
    multiplayer: "None (single-player campaign).",
    expansionContent: [],
    difficulty: "Scalable (Give Me Story to Give Me God of War).",
    progressionSystem:
      "Gear and ability upgrades through XP and resource collection.",
  },
];

// 🧠 Optional utility functions
export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}

export const categories = [
  { slug: "action-rpg", name: "Action RPG" },
  { slug: "action-adventure", name: "Action Adventure" },
];
