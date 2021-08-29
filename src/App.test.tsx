import "@testing-library/jest-dom";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  beforeAll(() => {
    window.scroll = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders tabs", () => {
    const billsTab = screen.getByText("Bills");
    const transactionsTab = screen.getByText("Transactions");
    expect(transactionsTab).toBeInTheDocument();
    expect(billsTab).toBeInTheDocument();
  });

  describe("Tabs", () => {
    it("starts on first tab option", () => {
      const tab = screen.getByRole("tab", { selected: true });
      expect(tab).toHaveTextContent("Bills");
    })

    it("clicking tab changes selected state", () => {
      fireEvent.pointerUp(screen.getByText("Transactions"));
      const tab = screen.getByRole("tab", { selected: true });
      expect(tab).toHaveTextContent("Transactions");
    })
  });
})
