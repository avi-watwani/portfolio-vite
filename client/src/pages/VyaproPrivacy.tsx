import VyaproPageShell from "@/components/VyaproPageShell";

const SUPPORT_EMAIL = "avi.watwani@gmail.com";
const EFFECTIVE_DATE = "September 12, 2026";

export default function VyaproPrivacy() {
  return (
    <VyaproPageShell
      title="Privacy Policy"
      subtitle={`Effective date: ${EFFECTIVE_DATE}`}
    >
      <section className="space-y-3 md:col-span-2 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
        <p>
          Vyapro (&quot;the app&quot;) is provided by Avi Watwani. This policy explains what information
          is handled when you use the app to manage billing, inventory, and related business records.
        </p>
      </section>

      <section className="space-y-3 md:col-span-2 xl:col-span-1">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Account and business data
        </h2>
        <p>
          When you create an account, we store authentication details (such as email) and the business
          information you enter — for example business profile, parties, items, invoices, payments,
          expenses, inventory, and GST settings. This data is required to provide the service.
        </p>
        <p>
          We do not sell your business data or use it for third-party advertising.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Cloud storage and sync
        </h2>
        <p>
          App data is stored in cloud services (including Firebase Auth, Firestore, Storage, and Cloud
          Functions) so you can sign in and sync across devices. Access is limited to your authenticated
          account and invited team members you add.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Network and technical data
        </h2>
        <p>
          API requests are sent over the internet. Standard server logs (such as timestamps and
          technical request metadata) may be collected by hosting providers for security, reliability,
          and troubleshooting. These logs are not used to build advertising profiles.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Notifications
        </h2>
        <p>
          If you enable push notifications (for example low-stock alerts), a device token may be stored
          to deliver those messages. You can disable notifications in system settings.
        </p>
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
    </VyaproPageShell>
  );
}
