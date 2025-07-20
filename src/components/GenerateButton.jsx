import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";
import generateRecurringDates from "../utils/generateRecurringDates";

function GenerateButton() {
  const {
    recurrence,
    interval,
    startDate,
    endDate,
    weekdays,
    setDates,
    monthlyWeek,
    monthlyWeekday,
  } = useRecurrence();

  const handleGenerate = () => {
    if (!startDate) {
      alert("Please select a start date.");
      return;
    }

    const generated = generateRecurringDates({
      recurrence,
      interval: Number(interval),
      startDate,
      endDate,
      weekdays,
      monthlyWeek,
      monthlyWeekday,
    });

    setDates(generated);
  };

  return (
    <div className="form-section">
      <button className="generate-button" onClick={handleGenerate}>
        Generate Recurring Dates
      </button>
    </div>
  );
}

export default GenerateButton;
