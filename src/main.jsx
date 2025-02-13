import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Nav from './Nav.jsx'
import Container from './Container.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Nav />
    <Container />
  </StrictMode>,
)
