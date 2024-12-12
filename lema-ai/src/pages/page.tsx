import { Link } from 'react-router-dom';

import routes from '@/_module/constants/routes';

const Home = () => {
    return (
        <div className="flex items-center justify-center border h-[500px]">
            <Link
                className="text-blue-500 underline"
                to={routes.dashboard.users.path}
            >
                Go to Users
            </Link>
        </div>
    );
};

export default Home;
