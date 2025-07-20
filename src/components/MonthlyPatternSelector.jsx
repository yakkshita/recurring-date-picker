import { useRecurrence } from "../context/RecurrenceContext";

const weeks = ["1", "2", "3", "4", "last"];
const weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function MonthlyPatternSelector() {
  const {
    monthlyWeek,
    setMonthlyWeek,
    monthlyWeekday,
    setMonthlyWeekday,
  } = useRecurrence();

  return (
    <div className="monthly-pattern">
      <label htmlFor="monthly-week">Monthly Pattern:</label>
      <div className="pattern-selectors">
        <select
          id="monthly-week"
          value={monthlyWeek}
          onChange={(e) => setMonthlyWeek(e.target.value)}
        >
          {weeks.map((week) => (
            <option key={week} value={week}>
              {week === "last" ? "Last" : `${week}${getOrdinalSuffix(week)} week`}
            </option>
          ))}
        </select>

        <select
          id="monthly-weekday"
          value={monthlyWeekday}
          onChange={(e) => setMonthlyWeekday(e.target.value)}
        >
          {weekdays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function getOrdinalSuffix(n) {
  const j = n % 10, k = n % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

export default MonthlyPatternSelector;
