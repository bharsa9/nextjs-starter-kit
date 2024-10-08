import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BlogCreateProps } from '@/utils/types';

const CreateBlogForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogCreateProps>({
    resolver: zodResolver(z.object({
      title: z.string().min(3, { message: "Title is required" }),
      content: z.string().min(10, { message: "Content is required" }),
      category: z.string(),
      subcategory: z.string(),
    })),
  });

  const onSubmit = (data: BlogCreateProps) => {
    // TODO: Implement blog creation logic
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input {...register('title')} placeholder="Blog Title" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <Input {...register('category')} placeholder="Main Category" />
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>
      <div>
        <Input {...register('subcategory')} placeholder="Subcategory" />
        {errors.subcategory && <p className="text-red-500">{errors.subcategory.message}</p>}
      </div>
      <div>
        <Textarea {...register('content')} placeholder="Blog Content" />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      </div>
      <Button type="submit">Create Blog</Button>
    </form>
  );
};

export default CreateBlogForm;
