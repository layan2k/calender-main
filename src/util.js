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

export const getWeekHours = (startDate) => {
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

export const getHoursForDay = (targetDate) => {
  // Convert the target date to a Day.js object
const day = dayjs(targetDate);

  // Initialize an empty array to store the hours
const hours = [];

  // Iterate through each hour from 00:00 to 23:00
for (let hour = 0; hour < 24; hour++) {
    // Create a Day.js object for the current hour
    const hourOfDay = day.hour(hour);

    // Format the hour as a string with two digits
    const formattedHour = hourOfDay.format('HH');

    // Add the formatted hour to the array
    hours.push(formattedHour);
}

return hours;
};


export const getWeekOfMonth = (selectedDate) => {
    const startOfMonth = selectedDate.startOf('month')
    const diffInDays = selectedDate.diff(startOfMonth, 'day')
    return Math.ceil((diffInDays + startOfMonth.day()) / 7)
}