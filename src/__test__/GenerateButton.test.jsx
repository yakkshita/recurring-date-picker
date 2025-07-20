import { render, screen, fireEvent } from "@testing-library/react";
import { RecurrenceProvider } from "../context/RecurrenceContext";
import GenerateButton from "../components/GenerateButton";

describe("GenerateButton", () => {
  it("renders the button", () => {
    render(
      <RecurrenceProvider>
        <GenerateButton />
      </RecurrenceProvider>
    );
    expect(screen.getByText("Generate Recurring Dates")).toBeInTheDocument();
  });

  it("shows alert if no start date", () => {
    window.alert = vi.fn(); // mock alert
    render(
      <RecurrenceProvider>
        <GenerateButton />
      </RecurrenceProvider>
    );

    fireEvent.click(screen.getByText("Generate Recurring Dates"));
    expect(window.alert).toHaveBeenCalledWith("Please select a start date.");
  });
});
