import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './routes/Home'
import Menu from './routes/Menu'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
	<Routes>
	    <Route path="/" element={<App />}>
		<Route path="/" element={<Home />}/>
		<Route path="menu" element={<Menu />}/>
	    </Route>
	</Routes>
    </BrowserRouter>
)
