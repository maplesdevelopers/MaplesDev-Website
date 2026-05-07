import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <main className="big-slate-200 h-[calc(100vh-43m)] flex flex-col justify-center items-center">
            <h1 className="font-bold text-gray-900 text-center text-5xl">
                404
            </h1>
            <p>
                <span className="text-gray-600">
                    The page you are looking for does not exist.
                </span>
            </p>
            <Link
                to='/'
                className="text-red-600 text-center font-semibold mt-5 hover:text-slate-700 hover:bg-slate-300 py-2 px-5 rounded-1g"
            >
                <span>Go to Home</span>
            </Link>
        </main>
      );
    };