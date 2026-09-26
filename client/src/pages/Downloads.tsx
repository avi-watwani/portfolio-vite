import { Button } from "@/components/ui/button";
import CdrViewerPageShell from "@/components/CdrViewerPageShell";
import { CDR_VIEWER_APK_URL, CDR_VIEWER_APP_STORE_URL } from "@/lib/cdr-viewer";

export default function Downloads() {
  return (
    <CdrViewerPageShell
      title="Downloads"
      subtitle="Get CDR View on iPhone from the App Store, or install the Android APK directly."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">iOS — App Store</h2>
        <p>
          CDR View is available for iPhone on the App Store. Download it for free to open{" "}
          <code className="text-sm">.cdr</code> files and export to JPG or PDF.
        </p>
        <div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-blue-600">
            <a href={CDR_VIEWER_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              View on the App Store
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-4 md:col-span-1 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Android APK</h2>
        <p>
          Download the Android build below, then open the file on your device to install. You may need to
          allow installs from this browser or unknown sources.
        </p>
        <div>
          <Button asChild size="lg" variant="outline">
            <a href={CDR_VIEWER_APK_URL} rel="noopener noreferrer">
              Download cdr-viewer.apk
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Prefer the Play Store listing when available. This APK is served from GitHub Releases for
          direct install on Android devices.
        </p>
      </section>

      <section className="space-y-4 md:col-span-2 xl:col-span-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Sample .cdr file</h2>
        <p>
          Testers can download a sample CorelDRAW file to try opening and exporting in the app.
        </p>
        <div>
          <Button asChild size="lg" variant="outline">
            <a href="/cdr-viewer/sample-file">Download sample.cdr</a>
          </Button>
        </div>
      </section>
    </CdrViewerPageShell>
  );
}
