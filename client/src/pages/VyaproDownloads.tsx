import { Button } from "@/components/ui/button";
import VyaproPageShell from "@/components/VyaproPageShell";
import { VYAPRO_APK_URL, VYAPRO_APK_VERSION } from "@/lib/vyapro";

export default function VyaproDownloads() {
  return (
    <VyaproPageShell
      title="Downloads"
      subtitle="Install Vyapro on Android today. iOS is on the way."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Android APK{" "}
          <span className="text-base font-medium text-muted-foreground">
            v{VYAPRO_APK_VERSION}
          </span>
        </h2>
        <p>
          Download the Android build below, then open the file on your device to install. You may need to
          allow installs from this browser or unknown sources.
        </p>
        <div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-blue-600">
            <a href={VYAPRO_APK_URL} rel="noopener noreferrer">
              Download vyapro.apk
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Current version {VYAPRO_APK_VERSION}. Prefer the Play Store listing when available. This APK
          is served from GitHub Releases for direct install on Android devices.
        </p>
      </section>

      <section className="space-y-4 md:col-span-1 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">iOS — Coming soon</h2>
        <p>
          An iPhone and iPad build is in progress. App Store availability will be announced here when
          it ships.
        </p>
        <div className="inline-flex items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-muted-foreground dark:border-slate-600 dark:bg-slate-900/40">
          Coming soon on the App Store
        </div>
      </section>
    </VyaproPageShell>
  );
}
