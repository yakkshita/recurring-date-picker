import { render, screen } from "@testing-library/react";
import { RecurrenceProvider } from "../context/RecurrenceContext";
import DatePicker from "../components/DatePicker";

describe("DatePicker", () => {
  it("renders date fields", () => {
    render(
      <RecurrenceProvider>
        <DatePicker />
      </RecurrenceProvider>
    );

    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
  });
});
