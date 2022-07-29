import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import App from './pages/App'
import Tasks from './pages/Tasks'
import Posts from './pages/Posts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="tasks/:userId" element={<Tasks />} />
        <Route path="posts/:userId" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
