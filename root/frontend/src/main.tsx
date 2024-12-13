import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from './App.tsx'


const root = document.getElementById("root");

// Null Root Handler
if (!root) {
  throw new Error("Root element not found. Make sure 'root' exists in your index.html.");
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App/>   
    </BrowserRouter>
  </StrictMode>
)
