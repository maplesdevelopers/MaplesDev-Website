import { Link } from "react-router-dom";
import MaplesDevLogo from "../../../assets/Logo/MDEVLOGO_0.svg";

export const MDevLogo = () => {
    return (
        <Link to="/" className="flex items-center bg-transparent">
            <span className="self-center text-4xl text-gray-800 whitespace-nowrap bg-transparent hover:bg-sky-500/10">
                <img className="w-100" src={MaplesDevLogo} alt="" />
            </span>
        </Link>
    )
};