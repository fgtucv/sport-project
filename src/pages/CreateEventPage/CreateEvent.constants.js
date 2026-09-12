import {
  GameEventIcon,
  QualificationEventIcon,
  TournamentEventIcon,
} from "../../components/Icons/Icons";

export const TEXT_DATA = {
  title: "Створіть подію",
  subtitle: "Створюйте свої ігри, турніри, кваліфікації",
};

export const EVENT_TYPES = [
  {
    key: "gameEventsCard",
    Icon: GameEventIcon,
    title: "Звичайна гра",
    description: "Хороший вибір щоб пограти з друзями або завести нові знайомства",
    isActive: true,
  },
  {
    key: "tournamentEventsCard",
    Icon: TournamentEventIcon,
    title: "Турнір",
    description: "Можна перевірити себе та підвищити рівень гри",
    isActive: false,
  },
  {
    key: "qualificationEventsCard",
    Icon: QualificationEventIcon,
    title: "Кваліфікація",
    description: "Швидкий спосіб підвищитись до Прімавери щоб взяти участь в турнірі",
    isActive: false,
  },
];
