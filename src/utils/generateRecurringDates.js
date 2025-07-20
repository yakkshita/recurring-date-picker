import { addDays, addWeeks, addMonths, addYears, format, isAfter, isBefore, parseISO, startOfMonth } from "date-fns";

// Helper: Get the nth weekday of the month (e.g. 2nd Tuesday)
function getNthWeekdayOfMonth(date, nth, weekday) {
  const start = startOfMonth(date);
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekdayIndex = dayOfWeek.indexOf(weekday);

  let count = 0;
  for (let i = 0; i < 31; i++) {
    const current = addDays(start, i);
    if (current.getMonth() !== start.getMonth()) break;
    if (current.getDay() === weekdayIndex) {
      count++;
      if (count === parseInt(nth)) return current;
    }
  }
  return null;
}

export default function generateRecurringDates({
  recurrence,
  interval,
  startDate,
  endDate,
  weekdays = [],
  monthlyWeek,
  monthlyWeekday,
}) {
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : addYears(start, 1); // default to 1 year if no end

  const results = [];
  let current = start;

  if (recurrence === "daily") {
    while (!isAfter(current, end)) {
      results.push(format(current, "yyyy-MM-dd"));
      current = addDays(current, interval);
    }
  }

  else if (recurrence === "weekly") {
    while (!isAfter(current, end)) {
      weekdays.forEach((day) => {
        const offset = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(day) - current.getDay();
        const nextDay = addDays(current, offset >= 0 ? offset : offset + 7);
        if (!isAfter(nextDay, end) && !isBefore(nextDay, start)) {
          results.push(format(nextDay, "yyyy-MM-dd"));
        }
      });
      current = addWeeks(current, interval);
    }
  }

  else if (recurrence === "monthly") {
    while (!isAfter(current, end)) {
      const nthDay = getNthWeekdayOfMonth(current, monthlyWeek, monthlyWeekday);
      if (nthDay && !isAfter(nthDay, end) && !isBefore(nthDay, start)) {
        results.push(format(nthDay, "yyyy-MM-dd"));
      }
      current = addMonths(current, interval);
    }
  }

  else if (recurrence === "yearly") {
    while (!isAfter(current, end)) {
      results.push(format(current, "yyyy-MM-dd"));
      current = addYears(current, interval);
    }
  }

  return results;
}
