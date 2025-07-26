import React ,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/login/loginSlice";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        // Remove token from localStorage
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userToken");
        dispatch(logout());
        navigate("/login");
    },[])
    return null;
}

export default Logout