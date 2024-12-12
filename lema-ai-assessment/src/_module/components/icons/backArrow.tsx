import { TIconProps } from "../../types/icon-props-type";

export const BackArrowIcon = ({
  width = "14",
  height = "14",
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
        d="M12.8334 6.99999H1.16675M1.16675 6.99999L7.00008 12.8333M1.16675 6.99999L7.00008 1.16666"
        stroke="#717680"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
