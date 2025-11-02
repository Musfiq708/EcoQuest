import { useContext } from "react"
import { AuthContext } from "../AuthProfider/AuthProvider"
import Loading from "./Loading"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const { loading, user } = useContext(AuthContext);
    console.log(user, loading)
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        // <Navigate to="/login"></Navigate>
        return children
    }
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;

};
