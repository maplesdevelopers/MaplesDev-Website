import { Link } from "react-router-dom";

export const MDevLogo = () => {
    let Maples = "maples {dev}";

    return (
        <Link to="/" className="flex items-center">
            <span className="self-center text-4xl font-brick text-gray-800 whitespace-nowrap hover:text-gray-600">
                {Maples}
            </span>
        </Link>
    )

};