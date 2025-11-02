import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
            <button
                onClick={() => navigate('/')}
                className="btn bg-green-600 text-white hover:bg-green-400 border-none px-6 py-2 rounded"
            >
                Go Back Home
            </button>
        </div>
    );
}
