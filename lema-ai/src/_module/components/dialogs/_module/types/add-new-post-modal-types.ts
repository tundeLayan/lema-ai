import { z } from 'zod';

import { ErrorMessages } from '@/_module/constants/validation-error-messages';

export const addNewPostSchema = z.object({
    title: z.string().min(1, { message: ErrorMessages.required('Post Title') }),
    body: z
        .string()
        .min(1, { message: ErrorMessages.required('Post Content') })
        .max(100, { message: ErrorMessages.maxLength(100, 'Content') }),
});

export type addNewPostPayload = z.infer<typeof addNewPostSchema>;
