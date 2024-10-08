import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getBlogs } from '@/lib/api';
import { Blog } from '@/utils/types';

type BlogListProps = {
  userSpecific?: boolean;
  judgingQueue?: boolean;
};

const BlogList: React.FC<BlogListProps> = async ({ userSpecific = false, judgingQueue = false }) => {
  const blogs: Blog[] = await getBlogs();

  // TODO: Implement filtering based on userSpecific and judgingQueue props

  return (
    <div className="grid gap-4">
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <CardHeader>
            <CardTitle>
              <Link href={`/blogs/${blog.id}`} className="hover:underline">
                {blog.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{blog.category} &gt; {blog.subcategory}</p>
            <div className="mt-2 text-sm text-gray-500">
              Side 1 Score: {blog.side1_score} | Side 2 Score: {blog.side2_score}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
