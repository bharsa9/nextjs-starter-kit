import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import BlogList from '@/components/BlogList'
import CreateBlogForm from '@/components/CreateBlogForm'

export default async function Dashboard() {
  // TODO: Fetch user role from backend
  const userRole = "admin"; // Placeholder, replace with actual user role

  return (
    <div className='flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4'>
      <Card className='w-full'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">
            Welcome to Blogtagon Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage your blogs, comments, and engage in debates.
          </p>
        </CardContent>
      </Card>

      {userRole === "admin" && (
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>Create New Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateBlogForm />
          </CardContent>
        </Card>
      )}

      <Card className='w-full'>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Your Blogs</CardTitle>
            <CardDescription>
              Blogs you've created or participated in
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/blogs">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <BlogList userSpecific={true} />
        </CardContent>
      </Card>

      {userRole === "judge" && (
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>Blogs to Judge</CardTitle>
          </CardHeader>
          <CardContent>
            <BlogList judgingQueue={true} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
