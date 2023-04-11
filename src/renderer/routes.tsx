import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './styles/index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<HashRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</HashRouter>
	</StrictMode>,
)
