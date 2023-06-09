import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { RecoilRoot } from 'recoil'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
)
