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

export const getDayMatrix = (month = dayjs().month()) => {
month = Math.floor(month);
const year = dayjs().year();
const firstDayOfMonth = dayjs(new

Date(year, month, 1)).day();

let currentMonthCount = 0 - firstDayOfMonth;
const weeksMatrix = new Array(6).fill([]);

for (let weekIndex = 0; weekIndex < weeksMatrix.length; weekIndex++) {
    weeksMatrix[weekIndex] = new Array(7).fill(null).map(() => {
    currentMonthCount++;
    return dayjs(new Date(year, month, currentMonthCount));
    });
}

return weeksMatrix;
};

import dayjs from 'dayjs';

export const getHoursMatrix = (month = dayjs().month()) => {
const dayMatrix = getDayMatrix(month);
const hoursMatrix = new Array(24).fill([]);

for (let hourIndex = 0; hourIndex < hoursMatrix.length; hourIndex++) {
    hoursMatrix[hourIndex] = dayMatrix.map((week) => {
    const day = week.find((day) => day.hour() === hourIndex);
    return day || null;
    });
}

return hoursMatrix;
};
