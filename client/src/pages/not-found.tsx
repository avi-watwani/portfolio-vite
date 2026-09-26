import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-20">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-red-500 shrink-0" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Button asChild className="mt-6 bg-primary text-white hover:bg-blue-600">
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
