
  const getCurrentWeekInMonth = ()=> {
  const today = dayjs();
  const firstDayOfMonth = dayjs(today).startOf('month');
  const daysSinceFirstDayOfMonth = today.diff(firstDayOfMonth, 'day');
  const weekNumber = Math.floor(daysSinceFirstDayOfMonth / 7) + 1;
  return weekNumber;
}

  const currentWeekInMonth = getCurrentWeekInMonth();