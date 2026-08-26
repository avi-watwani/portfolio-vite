import { Link } from "wouter";
import { ReactNode } from "react";

type CdrViewerPageShellProps = {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  children: ReactNode;
};

export default function CdrViewerPageShell({
  title,
  subtitle,
  showLogo = false,
  children,
}: CdrViewerPageShellProps) {
  return (
    <main className="px-6 pt-28 pb-8">
      <article className="container mx-auto w-full">
        <header>
          {!showLogo ? (
            <p className="text-sm font-medium text-primary">
              <Link href="/cdr-viewer" className="hover:underline">
                CDR Viewer
              </Link>
            </p>
          ) : null}
          <div className={`${showLogo ? "" : "mt-2 "}flex items-center gap-3 md:gap-4`}>
            {showLogo ? (
              <img
                src="/cdr-logo.png"
                alt="CDR Viewer"
                width={48}
                height={48}
                className="h-10 w-10 shrink-0 rounded-xl shadow-sm md:h-12 md:w-12"
              />
            ) : null}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
          {subtitle ? (
            <p className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </header>

        {/*
          Global CSS applies `py-20` to every `section`; reset it here.
          Mid/large screens use a multi-column grid so content fills the viewport width.
        */}
        <div
          className={[
            "mt-10 grid grid-cols-1 gap-5 text-slate-700 dark:text-slate-300 leading-relaxed",
            "md:grid-cols-2 md:gap-6",
            "xl:grid-cols-3 xl:gap-8",
            "[&_section]:py-0",
            "[&_section]:rounded-xl",
            "[&_section]:border",
            "[&_section]:border-slate-200",
            "dark:[&_section]:border-slate-700",
            "[&_section]:bg-white",
            "dark:[&_section]:bg-slate-800/60",
            "[&_section]:p-5",
            "md:[&_section]:p-6",
            "lg:[&_section]:p-8",
            "[&_section]:space-y-3",
          ].join(" ")}
        >
          {children}
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm">
          <Link href="/cdr-viewer" className="text-primary hover:underline">
            About
          </Link>
          <Link href="/cdr-viewer/downloads" className="text-primary hover:underline">
            Downloads
          </Link>
          <Link href="/cdr-viewer/support" className="text-primary hover:underline">
            Support
          </Link>
          <Link href="/cdr-viewer/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </article>
    </main>
  );
}
