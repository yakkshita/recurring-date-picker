import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState("daily");
  const [interval, setInterval] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weekdays, setWeekdays] = useState([]);
  const [dates, setDates] = useState([]);
  const [monthlyWeek, setMonthlyWeek] = useState("2");  
  const [monthlyWeekday, setMonthlyWeekday] = useState("Tuesday");

  return (
    <RecurrenceContext.Provider
      value={{
        recurrence,
        setRecurrence,
        interval,
        setInterval,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        weekdays,
        setWeekdays,
        dates,
        setDates,
        monthlyWeek,
        setMonthlyWeek,
        monthlyWeekday,
        setMonthlyWeekday,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
