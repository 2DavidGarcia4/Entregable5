import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({name}){
  return name ? <Outlet /> : <Navigate to="/" />
}