import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
      <h2 className="text-2xl font-bold">Wiki Page Not Found</h2>
      <p className="text-muted-foreground">
        We couldn't find the wiki page you're looking for.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
} 