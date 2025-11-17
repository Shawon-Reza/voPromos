import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ScheduleProvider } from './contextApi/ScheduleContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScheduleProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </ScheduleProvider>
  </StrictMode>,
)
