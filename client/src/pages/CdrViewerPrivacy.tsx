import CdrViewerPageShell from "@/components/CdrViewerPageShell";

const SUPPORT_EMAIL = "avi.watwani@gmail.com";
const EFFECTIVE_DATE = "August 26, 2026";

export default function CdrViewerPrivacy() {
  return (
    <CdrViewerPageShell
      title="Privacy Policy"
      subtitle={`Effective date: ${EFFECTIVE_DATE}`}
    >
      <section className="space-y-3 md:col-span-2 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
        <p>
          CDR View (&quot;the app&quot;) is provided by Avi Watwani. This policy explains what
          information is handled when you use the app. We do not require accounts, do not show ads, and
          do not use third-party advertising or analytics tracking SDKs in the app.
        </p>
      </section>

      <section className="space-y-3 md:col-span-2 xl:col-span-1">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Files you choose to convert
        </h2>
        <p>
          When you select or open a CorelDRAW <code className="text-sm">.cdr</code> file, the app
          uploads that file to our conversion service solely to produce a preview (JPG) and, when
          available, a PDF. We do not use your files for marketing, training unrelated models, or
          selling data.
        </p>
        <p>
          Uploaded files are processed in temporary storage on the conversion server and removed after
          the conversion completes. We do not operate a permanent cloud library of your documents.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Data on your device
        </h2>
        <p>
          Converted previews and any exports you create remain on your device unless you choose to share
          or save them elsewhere (for example via the system share sheet).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Network and technical data
        </h2>
        <p>
          Conversion requests are sent over the internet to our conversion API. Standard server logs
          (such as timestamps and technical request metadata) may be collected by the hosting provider
          for security, reliability, and troubleshooting. These logs are not used to build advertising
          profiles.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          What we do not collect
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>No user accounts or login</li>
          <li>No advertising identifiers for ads</li>
          <li>No third-party tracking SDKs for marketing analytics</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Children</h2>
        <p>
          The app is not directed at children under 13. We do not knowingly collect personal information
          from children.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Changes</h2>
        <p>
          We may update this policy from time to time. The effective date at the top of this page will
          be revised when material changes are made.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p>
          For privacy questions or requests, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </CdrViewerPageShell>
  );
}
