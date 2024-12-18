import { TIconProps } from '../../types/icon-props-type';

export const RightArrowIcon = ({
    width = '14',
    height = '14',
    ...props
}: TIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.16663 7.00002H12.8333M12.8333 7.00002L6.99996 1.16669M12.8333 7.00002L6.99996 12.8334"
                stroke="#717680"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
