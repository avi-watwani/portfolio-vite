import { Link } from "wouter";
import VyaproPageShell from "@/components/VyaproPageShell";

export default function Vyapro() {
  return (
    <VyaproPageShell
      title="Vyapro"
      subtitle="Billing, stock & GST that feel like your shop ledger — built for Indian retailers, wholesalers, and service businesses."
      showLogo
    >
      <section className="space-y-3 xl:col-span-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">What it does</h2>
        <p>
          Vyapro is a mobile-first accounting app for Indian SMBs. Create GST invoices, track
          receivables and payables, manage inventory, and run day-to-day books from your phone —
          without ERP complexity.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Download</h2>
        <p>
          Android users can get the APK from{" "}
          <Link href="/vyapro/downloads" className="text-primary hover:underline">
            Downloads
          </Link>
          . iOS is coming soon.
        </p>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Need help?</h2>
        <p>
          Visit{" "}
          <Link href="/vyapro/support" className="text-primary hover:underline">
            Support
          </Link>{" "}
          for FAQs and contact information.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2 md:gap-6 xl:col-span-3 xl:gap-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Features</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>GST-ready billing with CGST/SGST/IGST, HSN/SAC, and GSTR-1 style summaries</li>
            <li>Inventory that updates with every sale and purchase, plus low-stock alerts</li>
            <li>Receivables, payables, P&amp;L, and cash/bank in plain language</li>
            <li>Parties, items, expenses, payments, and team invites</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Who it&apos;s for</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Retailers and wholesalers who need fast GST invoicing on the go</li>
            <li>Service businesses tracking clients, payments, and expenses</li>
            <li>Shop owners who want books that feel like a ledger, not an ERP</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Account data is stored securely in the cloud so you can sign in from your devices. See the{" "}
            <Link href="/vyapro/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>
      </div>
    </VyaproPageShell>
  );
}
