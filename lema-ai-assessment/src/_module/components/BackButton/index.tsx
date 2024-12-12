import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import { BackArrowIcon } from '../icons/backArrow';

interface BackButtonProps {
    to: string;
}

const BackButton = (props: BackButtonProps) => {
    const { to } = props;
    const navigate = useNavigate();
    const goToPreviousPage = () => {
        navigate(to);
    };

    return (
        <Button
            label="Back to Users"
            onClick={goToPreviousPage}
            icon={<BackArrowIcon />}
            variant="tertiary"
            className="p-0 text-primary-100 text-sm font-semibold leading-5 !gap-[12.17px]"
        />
    );
};

export default BackButton;
