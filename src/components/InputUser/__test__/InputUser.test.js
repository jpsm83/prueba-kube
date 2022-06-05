import { fireEvent, render, screen } from "@testing-library/react";
import InputUser from "../InputUser";

describe("Test the InputUser Component", () => {
  test("render the InputUser with 1 button", async () => {
    render(<InputUser />);
    const buttonsRequired = await screen.findAllByRole("button");
    expect(buttonsRequired).toHaveLength(1);
  });

  test("render the InputUser with 1 input", async () => {
    render(<InputUser />);
    const inputsRequired = await screen.findAllByRole("textbox");
    expect(inputsRequired).toHaveLength(1);
  });

  test("shoud InputUser be empty", () => {
    render(<InputUser />);
    const inputsRequired = screen.findAllByRole("textbox");
    expect(inputsRequired.value).toBe("" || undefined);
  });

  test("should name input change", () => {
    render(<InputUser />);
    const inputChange = screen.getByTestId("inputUser");
    const testValue = "test";
    fireEvent.change(inputChange, { target: { value: testValue } });
    expect(inputChange.value).toBe(testValue);
  });
});
