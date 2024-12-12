'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

function AddNewPostModal(props: TModalProps & { onHandleSubmit: () => void }) {
    const { isOpen, onClose = () => {}, onHandleSubmit } = props;

    // const { mutate, isPending } = useCreatePost();

    const form = useForm<addNewPostPayload>({
        resolver: zodResolver(addNewPostSchema),
        mode: 'onChange',
        defaultValues: {
            content: '',
            title: '',
        },
    });

    const {
        formState: { errors },
        // watch,
        reset,
        control,
    } = form;

    const onSubmit = (data: addNewPostPayload) => {
        console.log(data);
        onHandleSubmit();
        closeModal();
        // mutate(data, {
        //   onSuccess: () => {
        //     reset();
        //     setIsModalToggle?.();
        //   },
        // });
    };

    const closeModal = () => {
        onClose();
        reset();
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
                                name="content"
                                render={({ field }) => (
                                    <FormtextArea
                                        label="Post content"
                                        error={errors.content}
                                        placeholder="Write something mind-blowing"
                                        containerClass="mb-4"
                                        {...field}
                                    />
                                )}
                            />
                            <div className="flex justify-end gap-[8px]">
                                <Button
                                    disabled={false}
                                    type="button"
                                    onClick={closeModal}
                                    variant="neutral"
                                    label="Cancel"
                                    className="w-fit"
                                    size="sm"
                                />
                                <Button
                                    disabled={false}
                                    type="submit"
                                    label="Publish"
                                    size="sm"
                                    className="w-fit"
                                    loading={false}
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
