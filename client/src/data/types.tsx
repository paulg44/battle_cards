export type Stats = {
  health: number;
  power: number;
  intellect: number;
  fearFactor: number;
  bodyCount: number;
  stealth: number;
};

export type battleCardTypes = {
  id: number;
  name: string;
  image: string;
  description: string;
  special: string;
  weakness: string;
  stats: Stats;
};
