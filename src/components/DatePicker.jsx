import { useRecurrence } from "../context/RecurrenceContext";

function DatePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrence();

  return (
    <>
      <label htmlFor="start-date">Start Date</label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="end-date">End Date (optional)</label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </>
  );
}

export default DatePicker;
