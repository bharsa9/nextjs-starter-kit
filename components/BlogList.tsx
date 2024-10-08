import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type BlogListProps = {
  userSpecific?: boolean;
  judgingQueue?: boolean;
};

const BlogList: React.FC<BlogListProps> = ({ userSpecific = false, judgingQueue = false }) => {
  // TODO: Fetch blogs from backend based on props
  const blogs = [
    { id: '1', title: 'Sample Blog 1', category: 'Sports', subcategory: 'Football' },
    { id: '2', title: 'Sample Blog 2', category: 'Politics', subcategory: 'International' },
  ];

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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
