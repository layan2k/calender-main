import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);

// Returns a 2D Array of a Day and DatesS
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

    // Adjust the starting date to the previous Sunday if it's not already Sunday
    let currentDate = dayjs(startDate);
    if (currentDate.weekday() !== 0) {
        currentDate = currentDate.startOf('week');
    }

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
                const formattedTime = time.format('DD-MM-YYYY HH:mm');

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


export function getQuartoHourBlocks(selectedDate = dayjs().startOf('day')) {

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
            const formattedInterval = currentInterval.format('h A');
            hourArray.push(formattedInterval);
        }

        // Add the array for the current hour to the main array
        hoursArray.push(hourArray);
    }

    return hoursArray;
}

export function getHourBlocks(selectedDate = dayjs().startOf('day')) {
    const hoursArray = [];

    // Start with the selected date at midnight
    const startDate = dayjs(selectedDate).startOf('day');

    // Loop through each hour of the selected day
    for (let i = 0; i < 24; i++) {
        const currentHour = startDate.add(i, 'hours');
        const hourArray = [];

        // Loop through 4 intervals per hour (60 minutes / 15 minutes)
        for (let j = 0; j < 4; j++) {
            const currentInterval = currentHour.add(j * 15, 'minutes');
            const formattedInterval = currentInterval.format('DD-MM-YYYY HH:mm ');
            hourArray.push(formattedInterval);
        }

        // Add the array for the current hour to the main array
        hoursArray.push(hourArray);
    }

    return hoursArray;
}

// Get Current Month Index given a date as an input
export const getWeekOfMonth = (selectedDate) => {
    const startOfMonth = selectedDate.startOf('month');
    const diffInDays = selectedDate.diff(startOfMonth, 'day');
    return Math.floor((diffInDays + startOfMonth.day()) / 7);
};


export const getFirstAndLastDay = (selectedDate) => {
    // Convert the selected date to a Day.js object
    const selectedDay = dayjs(selectedDate);

    // Get the first day of the week (Sunday)
    const firstDayOfWeek = selectedDay.startOf('week').format('D MMM');

    // Get the last day of the week (Saturday)
    const lastDayOfWeek = selectedDay.endOf('week').format('D MMM, YYYY');

    // Return both dates in an object
    return { firstDayOfWeek, lastDayOfWeek };
}

// Get The days in a week given the Date as an input
export const getWeekDays = (date = dayjs()) => {
    const selectedDate = dayjs(date);
    const firstDayOfWeek = selectedDate.startOf('week');
    const lastDayOfWeek = selectedDate.endOf('week');
    const days = [];

    for (let currentDate = firstDayOfWeek; currentDate.isSameOrBefore(lastDayOfWeek); currentDate = currentDate.add(1, 'day')) {
        days.push(currentDate.format('ddd D'));
    }

    return days;
}

