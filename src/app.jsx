import "./app.css";
import { RouterApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./ui/components";
import { useTheme } from "./stores";

function App() {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Layout content={<RouterApp />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
