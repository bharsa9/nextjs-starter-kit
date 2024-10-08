import React from 'react';
import { getBlogById, getCommentsByBlogId, getUserById } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default async function BlogPost({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);
  const comments = await getCommentsByBlogId(params.id);
  const author = blog ? await getUserById(blog.author_id) : null;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{blog.title}</CardTitle>
          <div className="flex items-center mt-2">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={author?.profile_image_url} />
              <AvatarFallback>{author?.first_name[0]}{author?.last_name[0]}</AvatarFallback>
            </Avatar>
            <span>{author?.first_name} {author?.last_name}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p>{blog.content}</p>
          <div className="mt-4">
            <span className="font-bold">Category:</span> {blog.category} &gt; {blog.subcategory}
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <span className="font-bold">Side 1 Score:</span> {blog.side1_score}
            </div>
            <div>
              <span className="font-bold">Side 2 Score:</span> {blog.side2_score}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.map((comment) => (
          <Card key={comment.id} className="mb-4">
            <CardContent className="pt-4">
              <p>{comment.content}</p>
              <div className="mt-2 text-sm text-gray-500">
                Side: {comment.side}, Points: {comment.points}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Button>Add Comment</Button>
      </div>
    </div>
  );
}
