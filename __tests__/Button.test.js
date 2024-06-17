import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button component", () => {
  const text = "Click me";
  const action = jest.fn(); // Mock function

  it("renders a button", () => {
    const { getByRole } = render(<Button text={text} action={action} />);
    // Verificar las clases CSS aplicadas al botón
    const button = getByRole("button");
  });

  it("calls action function on button click", () => {
    const { getByRole } = render(<Button text={text} action={action} />);
    // Simular clic en el botón
    fireEvent.click(getByRole("button"));
    // Verificar que la función action se haya llamado una vez al hacer clic en el botón
    expect(action).toHaveBeenCalledTimes(1);
  });
});
