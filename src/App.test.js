import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders whole applicatoion", () => {
  render(<App />);
  const application = screen.getByTestId("appContainer");
  expect(application).toBeInTheDocument();
});
