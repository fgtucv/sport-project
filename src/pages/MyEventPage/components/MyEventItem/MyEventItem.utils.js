// Тільки відображення. Заміни на свої хелпери, коли напишеш логіку.

const MONTHS = ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лист", "Гру"];

export const SPORT_LABELS = {
    padel: "Падель",
    tennis: "Теніс",
    squash: "Сквош",
};

export const formatDateTime = (iso) => {
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${d.getDate()} ${MONTHS[d.getMonth()]}, ${hh}:${mm}`;
};

export const formatDuration = (minutes) => `${minutes} хв`;

export const formatPrice = (price, currency) => `${Number(price).toFixed(2)} ${currency}`;

export const formatLevel = (min, max) => {
    if (min == null && max == null) return null;
    if (max == null) return `Level: ${min}+`;
    return `Level: ${min}–${max}`;
};
