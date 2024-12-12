import React from 'react';
// import Image, { StaticImageData } from 'next/image';

import cx from 'classnames';

import { Button as ShadCNButton } from '@/_module/components/ui/button';
import Loader from '../Loader/loader';
// import { Loader } from "@/components";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: 'primary' | 'neutral' | 'tertiary';

    icon?: React.ReactElement;
    iconClassName?: string;
    iconAfter?: string;
    loading?: boolean;
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = (props: IButton) => {
    const {
        label,
        variant,
        icon,
        iconAfter,
        loading,
        className,
        disabled,
        type = 'submit',
        ...rest
    } = props;
    return (
        <>
            <ShadCNButton
                disabled={loading || disabled}
                variant={variant}
                className={cx(
                    className,
                    {
                        'border-neutral-500 bg-neutral-150 cursor-not-allowed':
                            disabled,
                    },
                    { 'cursor-progress opacity-85': loading },
                    { 'flex gap-4': loading || !!iconAfter || !!icon }
                )}
                type={type}
                {...rest}
            >
                {icon ? icon : null}
                {label}
                {iconAfter ? iconAfter : null}
                {loading ? <Loader /> : null}
            </ShadCNButton>
        </>
    );
};

export default Button;
