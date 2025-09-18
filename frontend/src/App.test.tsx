import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders Hello component", () => {
  render(<App />);
  const textElement = screen.getByText(/Hello from Waqar Rana/i);
  expect(textElement).toBeInTheDocument();
});
