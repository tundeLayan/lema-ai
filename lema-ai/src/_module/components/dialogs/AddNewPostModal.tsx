'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';

import { TModalProps } from '@/_module/types/modal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Form, FormField } from '../ui/form';
import {
    addNewPostSchema,
    addNewPostPayload,
} from './_module/types/add-new-post-modal-types';
import FormInput from '../FormInput';
import FormtextArea from '../FormTextarea';
import Button from '../Button';
import { useCreatePost } from '@/pages/Posts/_module/hooks/useCreatePost';

function AddNewPostModal(props: TModalProps) {
    const { isOpen, onClose = () => {} } = props;
    const params = useParams();
    const userId = params.userId as string;

    const { mutate, isPending } = useCreatePost();

    const form = useForm<addNewPostPayload>({
        resolver: zodResolver(addNewPostSchema),
        mode: 'onChange',
        defaultValues: {
            body: '',
            title: '',
        },
    });

    const {
        formState: { errors },
        reset,
        control,
    } = form;

    const closeModal = () => {
        onClose();
        reset();
    };

    const onSubmit = (data: addNewPostPayload) => {
        const payload = {
            ...data,
            userId,
        };
        mutate(payload, {
            onSuccess: async () => {
                closeModal();
            },
        });
    };

    return (
        <Dialog
            onOpenChange={onClose}
            open={isOpen}
        >
            <DialogContent
                className="sm:max-w-[515px] [&>button]:hidden"
                aria-describedby={undefined}
            >
                <DialogHeader>
                    <DialogTitle className="text-primary-200 text-4xl font-medium leading-[43.57px] tracking-[-0.02em]">
                        New Post
                    </DialogTitle>
                </DialogHeader>
                <main className="mt-4 space-y-3 text-left">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3"
                            autoComplete="false"
                        >
                            <FormField
                                control={control}
                                name="title"
                                render={({ field }) => (
                                    <FormInput
                                        label="Post title"
                                        error={errors.title}
                                        type="text"
                                        placeholder="Give your post a title"
                                        containerClass=""
                                        {...field}
                                    />
                                )}
                            />
                            <FormField
                                control={control}
                                name="body"
                                render={({ field }) => (
                                    <FormtextArea
                                        label="Post body"
                                        error={errors.body}
                                        placeholder="Write something mind-blowing"
                                        containerClass="mb-4"
                                        {...field}
                                    />
                                )}
                            />
                            <div className="flex justify-end gap-[8px]">
                                <Button
                                    type="button"
                                    onClick={closeModal}
                                    variant="neutral"
                                    label="Cancel"
                                    className="w-fit"
                                    size="sm"
                                />
                                <Button
                                    type="submit"
                                    label="Publish"
                                    size="sm"
                                    className="w-fit"
                                    loading={isPending}
                                />
                            </div>
                        </form>
                    </Form>
                </main>
            </DialogContent>
        </Dialog>
    );
}

export default AddNewPostModal;
