const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const dateString =
  currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;

export { dateString };
