'use client';
import React from 'react';

import cx from 'classnames';
import { type FieldError, type UseFormRegister } from 'react-hook-form';

import { Textarea as ShadTextarea } from '../ui/textarea';
import { FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';

interface InputProps<T extends object>
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    containerClass?: string;
    register?: UseFormRegister<T>;
    error?: FieldError;
    subText?: string;
}

/**
 *
 * NOTE: Must be used in a Form(shadcn form)
 */

const Textarea = ({
    label,
    containerClass,
    error,
    id,
    required,
    subText,
    ...rest
}: InputProps<object>) => {
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
                    <ShadTextarea
                        className={cx(
                            '!mt-0 focus:ring-transparent focus-visible:ring-transparent min-h-[154px]',
                            {
                                'border-red-500': !!error,
                            }
                        )}
                        id={id}
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

export default Textarea;
