import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import { Blog, Comment, User, BlogCreateProps, CommentCreateProps } from '@/utils/types';

const prisma = new PrismaClient();
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function getBlogs(): Promise<Blog[]> {
  return prisma.blog.findMany();
}

export async function getBlogById(id: string): Promise<Blog | null> {
  return prisma.blog.findUnique({ where: { id } });
}

export async function createBlog(data: BlogCreateProps): Promise<Blog> {
  return prisma.blog.create({ data });
}

export async function getCommentsByBlogId(blogId: string): Promise<Comment[]> {
  return prisma.comment.findMany({ where: { blog_id: blogId } });
}

export async function createComment(data: CommentCreateProps): Promise<Comment> {
  return prisma.comment.create({ data });
}

export async function getUserById(id: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data as User;
}

export async function updateBlogScore(blogId: string, side: 'side1' | 'side2', score: number): Promise<Blog | null> {
  const updateField = side === 'side1' ? 'side1_score' : 'side2_score';
  return prisma.blog.update({
    where: { id: blogId },
    data: { [updateField]: score },
  });
}
