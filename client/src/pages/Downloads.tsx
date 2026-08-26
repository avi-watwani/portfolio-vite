import { Button } from "@/components/ui/button";
import CdrViewerPageShell from "@/components/CdrViewerPageShell";
import { CDR_VIEWER_APK_URL } from "@/lib/cdr-viewer";

export default function Downloads() {
  return (
    <CdrViewerPageShell
      title="Downloads"
      subtitle="Get the latest Android build of CDR Viewer for direct install."
    >
      <section className="space-y-4 md:col-span-2 xl:col-span-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Android APK</h2>
        <p>
          Download the Android build below, then open the file on your device to install. You may need to
          allow installs from this browser or unknown sources.
        </p>
        <div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-blue-600">
            <a href={CDR_VIEWER_APK_URL} rel="noopener noreferrer">
              Download cdr-viewer.apk
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Prefer the App Store / Play Store listing when available. This APK is for direct install on
          Android devices.
        </p>
      </section>
    </CdrViewerPageShell>
  );
}
