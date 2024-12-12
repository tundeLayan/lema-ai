'use client';
import React from 'react';

import cx from 'classnames';
import { type FieldError } from 'react-hook-form';

import { Input as ShadInput } from '../ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    containerClass?: string;
    error?: FieldError;
    subText?: string;
}

/**
 *
 * NOTE: Must be used in a Form(shadcn form)
 */

const Input = ({
    label,
    containerClass,
    error,
    id,
    required,
    type = 'text',
    subText,
    ...rest
}: InputProps) => {
    return (
        <FormItem
            className={cx(
                'space-y-[10px]',
                { 'flex flex-col': !!label },
                { [`${containerClass}`]: !!containerClass }
            )}
        >
            {label ? (
                <FormLabel
                    className={cx(
                        'text-primary-100 text-[18px] font-medium leading-5'
                    )}
                    htmlFor={id}
                >
                    {label}{' '}
                    {required && <span className="text-red-500">*</span>}
                </FormLabel>
            ) : null}
            <FormControl className="">
                <div className="relative">
                    <ShadInput
                        className={cx(
                            '!mt-0 focus:ring-transparent focus-visible:ring-transparent',
                            {
                                'border-red-500': !!error,
                            }
                        )}
                        id={id}
                        // ref={ref}
                        type={type}
                        {...rest}
                    />
                </div>
            </FormControl>
            {!!error && <FormMessage className="text-xs" />}
            {subText && (
                <p className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
                    {subText}
                </p>
            )}
        </FormItem>
    );
};

export default Input;
