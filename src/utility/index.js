export function getAvailable(day) {
  const dayNames = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  const todayName = dayNames[new Date().getDay()];
  return day.includes(todayName);
}

export const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
