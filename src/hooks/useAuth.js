import { useContext } from "react";
import { Authcontext } from "../components/Context/Authprovider"

const useAuth = () => {
    return useContext(Authcontext);
}

export default useAuth;