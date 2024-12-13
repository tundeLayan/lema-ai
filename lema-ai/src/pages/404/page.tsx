import { useNavigate } from 'react-router-dom';

import Button from '@/_module/components/Button';
import '../../_module/styles/NotFound.css';
import routes from '@/_module/constants/routes';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <h1>404</h1>
            <h3>The page you are looking for cannot be found</h3>
            <Button
                label="Go Home"
                onClick={() => navigate(routes.home.path)}
                className="bg-purple-200 text-white mt-5"
            />
        </div>
    );
};

export default NotFound;
