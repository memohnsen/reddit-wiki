import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">r/Weightlifting Wiki</h1>
        <p className="text-muted-foreground">
          Welcome to the r/Weightlifting website. Browse through different sections using the sidebar.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="rounded-lg border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <p className="mt-2 text-muted-foreground">
            Learn how to navigate and use Reddit Wiki site effectively.
          </p>
          <Button asChild className="mt-4" variant="secondary">
            <Link href="/wiki/getting-started">Read More</Link>
          </Button>
        </div>
        
        <div className="rounded-lg border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Community Rules</h2>
          <p className="mt-2 text-muted-foreground">
            Explore the rules and guidelines that govern the community.
          </p>
          <Button asChild className="mt-4" variant="secondary">
            <Link href="/wiki/rules">Read More</Link>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="rounded-lg border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground">
            Find answers to common questions about the community.
          </p>
          <Button asChild className="mt-4" variant="secondary">
            <Link href="/wiki/faq">Read More</Link>
          </Button>
        </div>
        
        <div className="rounded-lg border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Resources</h2>
          <p className="mt-2 text-muted-foreground">
            Discover helpful resources and external links.
          </p>
          <Button asChild className="mt-4" variant="secondary">
            <Link href="/wiki/resources">Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
