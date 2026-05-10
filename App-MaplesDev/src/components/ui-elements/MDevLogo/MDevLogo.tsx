import { Link } from "react-router-dom";
import MaplesDevLogo from "../../../assets/Logo/MaplesDev-Logo.svg";

export const MDevLogo = () => {

    return (
        <Link to="/" className="flex items-center">
            <span className="self-center text-4xl text-gray-800 whitespace-nowrap">
                <img className="w-80" src={MaplesDevLogo} alt="" />
            </span>
        </Link>
    )

};