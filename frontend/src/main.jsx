import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Wrap your app in BrowserRouter */}
      <App />
    </Router>
  </StrictMode>,
)
