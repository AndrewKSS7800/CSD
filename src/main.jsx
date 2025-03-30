import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import "./styles/color.css"
import "./styles/grid.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/contact.css"
import App from './App.jsx'
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/CSD">
      <App />
    </HashRouter>
  </StrictMode>,
)
