import { useRecurrence } from "../context/RecurrenceContext";

function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <>
      <label htmlFor="recurrence">Recurrence</label>
      <select
        id="recurrence"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </>
  );
}

export default RecurrenceOptions;