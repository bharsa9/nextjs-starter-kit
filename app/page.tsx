import HeroSection from "@/components/homepage/hero-section";
import BlogList from "@/components/BlogList";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection 
          title="Welcome to Blogtagon"
          subtitle="Engage in heated debates, judge arguments, and explore diverse perspectives"
        />
      </div>
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Debates</h2>
        <BlogList />
      </div>
      <div className="flex justify-center my-8">
        <Button asChild>
          <Link href="/dashboard">
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </PageWrapper>
  );
}
