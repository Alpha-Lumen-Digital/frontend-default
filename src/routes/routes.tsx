import { Route, Routes, Navigate } from 'react-router-dom'

const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<></>} />
  </Routes>
)

export default Router
