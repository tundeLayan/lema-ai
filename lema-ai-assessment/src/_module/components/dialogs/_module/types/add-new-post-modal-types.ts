import { z } from 'zod';

import { ErrorMessages } from '@/_module/constants/validation-error-messages';

export const addNewPostSchema = z.object({
    title: z.string().min(1, { message: ErrorMessages.required('Post Title') }),
    content: z
        .string()
        .min(1, { message: ErrorMessages.required('Post Content') }),
});

export type addNewPostPayload = z.infer<typeof addNewPostSchema>;
