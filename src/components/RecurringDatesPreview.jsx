import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

function RecurringDatesPreview() {
  const { dates } = useRecurrence();

  if (!Array.isArray(dates) || dates.length === 0) {
    return <p className="no-dates">No dates generated yet.</p>;
  }

  return (
    <div className="preview">
      <h2>Recurring Dates Preview</h2>
      <div className="dates-grid">
        {dates.map((date, index) => (
          <div key={index} className="date-item">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecurringDatesPreview;
