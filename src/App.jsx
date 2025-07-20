import React from "react";
import './App.css';
import { RecurrenceProvider, useRecurrence } from "./context/RecurrenceContext";
import DatePicker from "./components/DatePicker";
import GenerateButton from "./components/GenerateButton";
import RecurringDatesPreview from "./components/RecurringDatesPreview";
import IntervalSelector from "./components/IntervalSelector";
import RecurrenceOptions from "./components/RecurrenceOptions";
import WeeklySelector from "./components/WeeklySelector";
import MonthlyPatternSelector from "./components/MonthlyPatternSelector";

function FormContent() {
  const { recurrence } = useRecurrence();

  return (
    <>
      <div className="form-section">
        <DatePicker />
      </div>

      <div className="form-section">
        <RecurrenceOptions />
        <IntervalSelector />
      </div>

      {recurrence === "weekly" && (
        <div className="form-section">
          <WeeklySelector />
        </div>
      )}

      {recurrence === "monthly" && (
        <div className="form-section">
          <MonthlyPatternSelector />
        </div>
      )}

      <GenerateButton />
      <RecurringDatesPreview />
    </>
  );
}

function App() {
  return (
    <RecurrenceProvider>
      <div className="container">
        <h1>Recurring Date Picker</h1>
        <FormContent />
      </div>
    </RecurrenceProvider>
  );
}

export default App;
