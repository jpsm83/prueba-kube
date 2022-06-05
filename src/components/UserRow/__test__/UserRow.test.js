import { render, screen } from "@testing-library/react";
import UserRow from "../UserRow";

describe("Test the UserRow Component", () => {
  test("should render user photo", () => {
    render(<UserRow />);
    const userPhoto = screen.getByTestId("userPhoto");
    expect(userPhoto).toBeInTheDocument();
  });

  test("should render user name", () => {
    render(<UserRow />);
    const userName = screen.getByTestId("userName");
    expect(userName).toBeInTheDocument();
  });

  test("should render user age", () => {
    render(<UserRow />);
    const userAge = screen.getByTestId("userAge");
    expect(userAge).toBeInTheDocument();
  });

  test("should render user country", () => {
    render(<UserRow />);
    const userCountry = screen.getByTestId("userCountry");
    expect(userCountry).toBeInTheDocument();
  });
});
