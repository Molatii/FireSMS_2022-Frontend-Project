import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "../signUpForm";

describe("Test SignUp component", () => {
  test("renders SignUp has 2 buttons", async () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const SignUpButtons = await screen.findAllByRole("button");
    expect(SignUpButtons).toHaveLength(2);
  });

  test("Check Email input and it should accept email", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredEmail = screen.getByPlaceholderText("Email Address");
    expect(EnteredEmail).toHaveAttribute("type", "email");
  });

  test("Check Phone input and it should accept Telephone", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredPhoneNumber = screen.getByPlaceholderText("Phone Number");
    expect(EnteredPhoneNumber).toHaveAttribute("type", "number");
  });

  test("password input is password", () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );
    const EnteredPassword = screen.getByPlaceholderText("Password");
    expect(EnteredPassword).toHaveAttribute("type", "password");
  });

  test("On submition Loading is displayed", async () => {
    render(
      <Router>
        <SignUpForm />
      </Router>,
    );

    const CreateAccounButton = screen.getByRole("button", {
      name: /Create Account/i,
    });
    expect(CreateAccounButton).toBeInTheDocument();

    const PasswordInput = screen.getByPlaceholderText("Password");
    const PhoneNumberInput = screen.getByPlaceholderText("Phone Number");
    const EmailInput = screen.getByPlaceholderText("Email Address");
    userEvent.type(EmailInput, "molati@gmail.com");
    userEvent.type(PhoneNumberInput, "595959597");
    userEvent.type(PasswordInput, "@EricMolati2022");
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Lesotho" }),
    );

    const checkBox = screen.getByRole("checkbox", {
      name: /Accept Terms and Conditions/i,
    });
    expect(checkBox).not.toBeChecked();
    userEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });
});
