import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./_helpers/store";
import App from "./App";

test("renders budget", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/budget/i)).toBeInTheDocument();
});
