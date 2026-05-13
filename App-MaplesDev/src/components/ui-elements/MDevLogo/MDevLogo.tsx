import { Link } from "react-router-dom";
import { MDevLogo } from "../../../assets/Logo/";

export const DisplayDevLogo = () => {
    return (
        <Link to="/" className="flex items-center bg-transparent">
            <span className="self-center text-4xl text-gray-800 whitespace-nowrap bg-transparent hover:bg-sky-500/10">
                <img className="w-100" src={ MDevLogo } alt="" />  
            </span>
        </Link>
    )
};