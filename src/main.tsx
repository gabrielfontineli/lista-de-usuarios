import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import App from './pages/App'
import Tasks from './pages/Tasks'
import Posts from './pages/Posts'
import './index.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { AuthGuard } from "./guards/AuthGuard";
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={(
            
              <App />
            
          )} />
          <Route path="tasks/:userId" element={(
            
              <Tasks />
            
          )} />
          <Route path="posts/:userId" element={(
            
              <Posts />
            
          )} />
          <Route path="login" element={(
            
              <Login />
            
          )} />
          <Route path="cadastro" element={(
            
              <Cadastro />
            
          )} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
