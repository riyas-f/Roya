import { StrictMode } from "react";
    import ReactDOM from "react-dom";
    
    import WebFont from "webfontloader";
    import App from "./App";

    WebFont.load({
        google: {
            families: ['Poppins', "Avenir Next:,500,400,700","SF Pro Text:600","Jura:700","SF Pro Display:400"]
        }
      });
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      rootElement
    );
    