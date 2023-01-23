import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import CustomTheme from "./ExtendTheme";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={CustomTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);

reportWebVitals();
