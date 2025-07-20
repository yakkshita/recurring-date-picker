import { useRecurrence } from "../context/RecurrenceContext";

function IntervalSelector() {
  const { interval, setInterval } = useRecurrence();

  return (
    <>
      <label htmlFor="interval">Repeat every X units</label>
      <input
        type="number"
        id="interval"
        min="1"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      />
    </>
  );
}

export default IntervalSelector;
