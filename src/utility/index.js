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
