import { StyledEngineProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
)
