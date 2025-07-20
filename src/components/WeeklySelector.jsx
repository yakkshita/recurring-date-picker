import { useRecurrence } from "../context/RecurrenceContext";

const weekdaysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WeeklySelector() {
  const { weekdays, setWeekdays } = useRecurrence();

  const toggleDay = (day) => {
    if (weekdays.includes(day)) {
      setWeekdays(weekdays.filter((d) => d !== day));
    } else {
      setWeekdays([...weekdays, day]);
    }
  };

  return (
    <div>
      <label>Choose Days:</label>
      <div className="weekdays-grid">
        {weekdaysList.map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={weekdays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}

export default WeeklySelector;