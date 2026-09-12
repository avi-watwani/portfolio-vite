import { Link } from "wouter";
import VyaproPageShell from "@/components/VyaproPageShell";

const SUPPORT_EMAIL = "avi.watwani@gmail.com";

export default function VyaproSupport() {
  return (
    <VyaproPageShell
      title="Support"
      subtitle="Get help with Vyapro — billing, stock, GST, and account access."
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
          How we handle business and account data is described in the{" "}
          <Link href="/vyapro/privacy" className="text-primary hover:underline">
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
              How do I get started?
            </h3>
            <p>
              Install the Android APK from{" "}
              <Link href="/vyapro/downloads" className="text-primary hover:underline">
                Downloads
              </Link>
              , create an account, and complete business setup (name, GSTIN if applicable, and default
              tax settings). You can then add parties, items, and create sales.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              Does Vyapro support GST invoices?
            </h3>
            <p>
              Yes. Vyapro supports CGST/SGST/IGST splits, HSN/SAC codes, and GSTR-1 style summaries so
              you can bill in line with common Indian GST workflows.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              Will stock update automatically?
            </h3>
            <p>
              Stock moves with sales and purchases. You can also adjust inventory manually and receive
              low-stock alerts when configured.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-slate-900 dark:text-white">
              Something failed or looks wrong
            </h3>
            <p>
              Email support with the app version, device model, and a short description of what
              happened. Screenshots help when invoices, GST totals, or stock numbers look off.
            </p>
          </div>
        </div>
      </section>
    </VyaproPageShell>
  );
}
