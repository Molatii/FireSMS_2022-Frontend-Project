import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NavHeader from "./Components/Navigation/NavHeader";

test("renders Navigation with 5 buttons", async () => {
  render(
    <Router>
      <NavHeader />
    </Router>,
  );
  const Navbuttons = await screen.findAllByRole("button");
  expect(Navbuttons).toHaveLength(5);
});

test("renders Layout Child Plans component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PlansTitle = screen.getByText(/Developer first SMS/i);
  expect(PlansTitle).toBeInTheDocument();
});

test("renders Layout Child Prices component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PricesTitle = screen.getByText(/Plans that fit your need/i);
  expect(PricesTitle).toBeInTheDocument();
});

test("renders Layout Child SMSPlatform component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PlatFormTitle = screen.getByText(/The most affordable platform/i);
  expect(PlatFormTitle).toBeInTheDocument();
});

test("renders Layout Child PaymentOptions component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PaymentOptionsTitle = screen.getByText(
    /We currently only have a bank account payment options/i,
  );
  expect(PaymentOptionsTitle).toBeInTheDocument();
});

test("renders Layout Child Footer component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const FooterTitle = screen.getByText(/Powered by Africa Code Foundry/i);
  expect(FooterTitle).toBeInTheDocument();
});
