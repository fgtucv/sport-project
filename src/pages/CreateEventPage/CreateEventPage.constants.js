import { Swords, ListChecks, Trophy } from "lucide-react";

export const EVENT_TYPES = [
  { value: "game", label: "Гра", icon: Swords },
  { value: "qualification", label: "Кваліфікація", icon: ListChecks },
  { value: "tournament", label: "Турнір", icon: Trophy },
];

export const SPORTS = [
  { value: "padel", label: "Падел" },
  { value: "tennis", label: "Теніс" },
];

// Не залежить від виду спорту
export const PLAYER_COUNTS = [2, 4];

export const DURATIONS = [60, 90, 120];

export const TEAMS = [
  { value: "A", label: "Команда A" },
  { value: "B", label: "Команда B" },
];
