import { Link } from "wouter";
import CdrViewerPageShell from "@/components/CdrViewerPageShell";

const SUPPORT_EMAIL = "avi.watwani@gmail.com";

export default function CdrViewerSupport() {
  return (
    <CdrViewerPageShell
      title="Support"
      subtitle="Get help with CDR Viewer — opening files, conversion, and exports."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p>
          Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . We typically reply within a few business days.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Privacy</h2>
        <p>
          How we handle files and data is described in the{" "}
          <Link href="/cdr-viewer/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 md:col-span-2 xl:col-span-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">FAQ</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              How do I open a .cdr file?
            </h3>
            <p>
              In the app, use the file picker to select a <code className="text-sm">.cdr</code> file from
              Files or Downloads. On iOS and Android you can also open a{" "}
              <code className="text-sm">.cdr</code> file with CDR Viewer from the share sheet or Files app
              when the app is installed.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              Why do I need an internet connection?
            </h3>
            <p>
              CorelDRAW files are converted on a remote service so the app can show a preview and generate
              JPG or PDF. Conversion will fail offline.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">What can I export?</h3>
            <p>
              After a successful conversion you can preview the result and export or share as JPG. PDF is
              available when the converter returns one, or the app can generate a PDF from the preview
              image.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              Conversion failed or the preview looks wrong
            </h3>
            <p>
              Try again with a stable connection and a smaller file if possible. Some complex or
              older-format CorelDRAW files may not convert perfectly. Include the app version and a short
              description of what happened when you email support.
            </p>
          </div>
        </div>
      </section>
    </CdrViewerPageShell>
  );
}
