import dayjs from 'dayjs'

export const getMonth = (month = dayjs().month()) => {
    month = Math.floor(month)
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfMonth
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })
    return daysMatrix
}

export const getWeekHours = (startDate = dayjs().date()) => {
  // Initialize the 2D array to store the hours
const weekHours = [];

  // Set the starting date to the provided date
let currentDate = dayjs(startDate);

  // Iterate through the week (7 days)
for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
    // Create a subarray to store the hours for the current day
    const dayHours = [];

    // Iterate through each hour of the day (24 hours)
    for (let hourIndex = 0; hourIndex < 24; hourIndex++) {
      // Create an array for each 15-minute interval within the hour
    const hourIntervals = [];

      // Iterate through each 15-minute interval (4 intervals per hour)
    for (let intervalIndex = 0; intervalIndex < 4; intervalIndex++) {
        // Create a Day.js object for the current 15-minute interval
        const time = currentDate.hour(hourIndex).minute(intervalIndex * 15);

        // Format the time as a string with two digits
        const formattedTime = time.format('HH:mm');

        // Add the formatted time to the interval array
        hourIntervals.push(formattedTime);
    }

      // Add the hour intervals array to the day's hour subarray
    dayHours.push(hourIntervals);
    }

    // Add the day's hour subarray to the week's hour 2D array
    weekHours.push(dayHours);

    // Increment the date to the next day
    currentDate = currentDate.add(1, 'day');
}

return weekHours;
};


export function getQuartoHourBlocks(selectedDate = dayjs().date()) {

const hoursArray = [];

  // Start with the selected date at midnight
const startDate = dayjs(selectedDate).startOf('day');

  // Loop through each hour
    for (let i = 0; i < 24; i++) {
    const currentHour = startDate.add(i, 'hours');
    const hourArray = [];

    // Loop through 4 intervals per hour (60 minutes / 15 minutes)
    for (let j = 0; j < 4; j++) {
      const currentInterval = currentHour.add(j * 15, 'minutes');
    const formattedInterval = currentInterval.format('HH:mm');
    hourArray.push(formattedInterval);
    }

    // Add the array for the current hour to the main array
    hoursArray.push(hourArray);
}

    return hoursArray;
}





export const getWeekOfMonth = (selectedDate) => {
    const startOfMonth = selectedDate.startOf('month')
    const diffInDays = selectedDate.diff(startOfMonth, 'day')
    return Math.ceil((diffInDays + startOfMonth.day()) / 7)
}

