import { Link } from "wouter";
import CdrViewerPageShell from "@/components/CdrViewerPageShell";

export default function CdrViewer() {
  return (
    <CdrViewerPageShell
      title="CDR Viewer"
      subtitle="Open CorelDRAW .cdr files on your phone, preview them, and export to JPG or PDF — without installing CorelDRAW."
      showLogo
    >
      <section className="space-y-3 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">What it does</h2>
        <p>
          CDR Viewer lets you pick a <code className="text-sm">.cdr</code> file from Files or open one
          shared into the app. It converts the file so you can preview the design on your device, then
          export or share a JPG or PDF when you need to send it to a client or print shop.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Download</h2>
        <p>
          Android users can get the APK from{" "}
          <Link href="/cdr-viewer/downloads" className="text-primary hover:underline">
            Downloads
          </Link>
          .
        </p>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Need help?</h2>
        <p>
          Visit{" "}
          <Link href="/cdr-viewer/support" className="text-primary hover:underline">
            Support
          </Link>{" "}
          for FAQs and contact information.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2 md:gap-6 xl:col-span-3 xl:gap-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How it works</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Select or open a <code className="text-sm">.cdr</code> file on your phone</li>
            <li>The app sends it to a conversion service over the internet</li>
            <li>You get a preview, then can export JPG or PDF</li>
          </ol>
          <p className="text-sm text-muted-foreground">
            Conversion requires a network connection. Files are processed temporarily for conversion and
            are not kept as a permanent library on our servers. See the{" "}
            <Link href="/cdr-viewer/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Who it&apos;s for</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Designers who receive CorelDRAW files and need a quick mobile look</li>
            <li>Print shops and vendors checking artwork on the go</li>
            <li>Freelancers and clients who don&apos;t have CorelDRAW installed</li>
          </ul>
        </section>
      </div>
    </CdrViewerPageShell>
  );
}
