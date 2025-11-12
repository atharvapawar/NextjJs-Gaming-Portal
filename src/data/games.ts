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
  {
    id: "4",
    slug: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    category: "Action RPG",
    description:
      "Geralt of Rivia embarks on a journey across war-torn lands in search of his adopted daughter, Ciri, while battling monsters and politics.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    rating: 4.9,
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PS5", "Xbox Series X/S", "Switch"],
    gameplayMechanics: [
      "Sword combat",
      "Alchemy and potion crafting",
      "Monster hunting contracts",
      "Dialogue-driven choices",
    ],
    story:
      "Geralt searches for Ciri while confronting the Wild Hunt — spectral warriors from another world.",
    setting:
      "The Continent — a medieval fantasy world filled with magic and war.",
    combatStyle: "Fast-paced swordplay with spells (Signs).",
    worldDesign: "Open world with dynamic weather and immersive NPCs.",
    playerChoiceImpact:
      "Branching quests and multiple endings shaped by player actions.",
    multiplayer: "None (single-player).",
    expansionContent: ["Hearts of Stone", "Blood and Wine"],
    difficulty: "Scalable from Story to Death March mode.",
    progressionSystem: "XP, skill trees, and gear upgrades.",
  },
  {
    id: "5",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    category: "Action Adventure",
    description:
      "Arthur Morgan and the Van der Linde gang struggle to survive in a changing America filled with lawmen and betrayal.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    rating: 4.9,
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    platforms: ["PC", "PS4", "Xbox One"],
    gameplayMechanics: [
      "Horse riding",
      "Gunfights and duels",
      "Hunting and fishing",
      "Moral choice system",
    ],
    story:
      "An outlaw faces his mortality and loyalty as the Wild West comes to an end.",
    setting: "Late 1800s America — forests, swamps, towns, and mountains.",
    combatStyle: "Third-person and first-person shooting.",
    worldDesign: "Open world with extreme detail and realism.",
    playerChoiceImpact: "Honor system influences story and character outcomes.",
    multiplayer: "Red Dead Online.",
    expansionContent: [],
    difficulty: "Realistic; survival and shooting balance.",
    progressionSystem: "Story missions, side quests, and honor progression.",
  },
  {
    id: "6",
    slug: "horizon-forbidden-west",
    title: "Horizon Forbidden West",
    category: "Action RPG",
    description:
      "Aloy journeys west to uncover the mystery behind a deadly plague and ancient machines in a lush, post-apocalyptic world.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202108/0922/E6mby16BfD0yYxHQaYgW6T0g.png",
    rating: 4.6,
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2022-02-18",
    platforms: ["PS5", "PS4"],
    gameplayMechanics: [
      "Bow and melee combat",
      "Machine taming",
      "Stealth and exploration",
      "Crafting and upgrades",
    ],
    story:
      "Aloy ventures to the Forbidden West to save life on Earth from extinction.",
    setting: "Post-apocalyptic North America overrun by robotic creatures.",
    combatStyle: "Ranged and melee hybrid with weak-point targeting.",
    worldDesign: "Open world with biomes from deserts to jungles.",
    playerChoiceImpact: "Dialogue and choices affect side quests.",
    multiplayer: "None (single-player).",
    expansionContent: ["Burning Shores DLC"],
    difficulty: "Customizable difficulty levels.",
    progressionSystem: "Skill trees, gear crafting, and XP-based leveling.",
  },
  {
    id: "7",
    slug: "spider-man-2",
    title: "Marvel’s Spider-Man 2",
    category: "Action Adventure",
    description:
      "Peter Parker and Miles Morales face new threats in New York City, including the symbiote Venom.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202309/1520/27ecab675f8f2907c594d5de24df6c2a3d8e6c39b795c5cf.png",
    rating: 4.7,
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "2023-10-20",
    platforms: ["PS5"],
    gameplayMechanics: [
      "Web-swinging traversal",
      "Dual character switching",
      "Cinematic combat",
      "Stealth missions",
    ],
    story:
      "Peter and Miles battle inner demons and Venom in a high-stakes story about power and responsibility.",
    setting: "Modern New York City with expanded open-world boroughs.",
    combatStyle: "Fast-paced melee with gadgets and symbiote powers.",
    worldDesign: "Open world with seamless transitions between characters.",
    playerChoiceImpact: "Narrative-driven; no major branching paths.",
    multiplayer: "None (single-player).",
    expansionContent: [],
    difficulty: "Story to Ultimate modes.",
    progressionSystem: "Skill trees for both Spider-Men.",
  },
  {
    id: "8",
    slug: "assassins-creed-valhalla",
    title: "Assassin’s Creed Valhalla",
    category: "Action RPG",
    description:
      "Lead Eivor, a Viking raider, in the conquest of England and uncover the truth behind the Hidden Ones.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
    rating: 4.4,
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    releaseDate: "2020-11-10",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    gameplayMechanics: [
      "Raiding and settlement building",
      "Stealth assassinations",
      "Skill tree progression",
      "Naval exploration",
    ],
    story:
      "Eivor leads their clan from Norway to England during the Dark Ages, forging alliances and shaping destiny.",
    setting: "Medieval England and Norway.",
    combatStyle: "Third-person melee combat with axes, shields, and stealth.",
    worldDesign: "Expansive open world with dynamic weather and settlements.",
    playerChoiceImpact: "Choices affect alliances and story endings.",
    multiplayer: "Limited online features.",
    expansionContent: ["Dawn of Ragnarök DLC"],
    difficulty: "Scalable (Adventurer to Master Assassin).",
    progressionSystem: "XP-based leveling and gear upgrades.",
  },
  {
    id: "9",
    slug: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    category: "Survival Horror",
    description:
      "Leon S. Kennedy returns to rescue the president’s daughter in a terrifying reimagining of the classic horror masterpiece.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
    rating: 4.8,
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2023-03-24",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    gameplayMechanics: [
      "Over-the-shoulder shooting",
      "Inventory management",
      "Parry system",
      "Resource scavenging",
    ],
    story:
      "Leon battles cultists and creatures in rural Spain while uncovering dark secrets.",
    setting: "European village and castle environments.",
    combatStyle: "Tactical shooting with survival mechanics.",
    worldDesign: "Linear progression with detailed horror environments.",
    playerChoiceImpact: "Minimal — cinematic storytelling focus.",
    multiplayer: "None (single-player).",
    expansionContent: ["Separate Ways DLC"],
    difficulty: "Standard to Professional modes.",
    progressionSystem: "Weapon upgrades and skill-based improvement.",
  },
  {
    id: "10",
    slug: "zelda-tears-of-the-kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    category: "Adventure",
    description:
      "Link explores the skies and lands of Hyrule, using creativity and physics-based tools to face Ganondorf’s return.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2397000/header.jpg",
    rating: 4.9,
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseDate: "2023-05-12",
    platforms: ["Nintendo Switch"],
    gameplayMechanics: [
      "Physics-based puzzles",
      "Weapon crafting and fusion",
      "Open-world exploration",
      "Creative building mechanics",
    ],
    story:
      "Link and Zelda confront Ganondorf as darkness spreads across the skies and depths of Hyrule.",
    setting: "Hyrule’s sky islands, depths, and overworld.",
    combatStyle: "Third-person melee and ranged combat.",
    worldDesign: "Expansive vertical open world.",
    playerChoiceImpact: "High — open-ended exploration and creative solutions.",
    multiplayer: "None (single-player).",
    expansionContent: [],
    difficulty: "Moderate (exploration-focused).",
    progressionSystem: "Upgrade hearts, stamina, and gear.",
  },
];

// 🧠 Utility functions
export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}

export const categories = [
  { slug: "action-rpg", name: "Action RPG" },
  { slug: "action-adventure", name: "Action Adventure" },
  { slug: "survival-horror", name: "Survival Horror" },
  { slug: "open-world-rpg", name: "Open World RPG" },
  { slug: "adventure", name: "Adventure" },
];
