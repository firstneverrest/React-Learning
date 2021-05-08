import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// describe create test suites which combines a couple of tests in one group
describe("Greeting Component", () => {
  test("renders learn react link", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloJestElement = screen.getByText("Testing Practice");
    expect(helloJestElement).toBeInTheDocument();
  });

  test("renders Hello, Welcome to testing in React if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing because don't need to click the button

    // Assert
    const outputElement = screen.getByText(
      "hello, welcome to testing in react",
      { exact: false }
    );
    expect(outputElement).toBeInTheDocument();
  });

  test("renders The text is changed if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("The text is changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "Hello, Welcome to testing in React" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    // query return null if the element is not found
    const outputElement = screen.queryByText(
      "hello, welcome to testing in react",
      { exact: false }
    );
    expect(outputElement).toBeNull();
  });
});
