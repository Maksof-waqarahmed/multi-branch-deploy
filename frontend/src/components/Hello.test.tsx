import { render, screen } from "@testing-library/react";
import Hello from "./hello";


test("renders hello message", () => {
  render(<Hello />);
  const textElement = screen.getByText(/Hello from Waqar Rana/i);
  expect(textElement).toBeInTheDocument();
});
