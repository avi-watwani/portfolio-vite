import { Button } from "@/components/ui/button";

export default function CdrViewerApk() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-xl rounded-lg border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">Download CDR Viewer APK</h1>
        <p className="mt-3 text-muted-foreground">
          Use the link below to download the latest APK build.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <a href="/cdr-viewer.apk" download>
              Download cdr-viewer.apk
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
