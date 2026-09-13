import { Link } from "wouter";
import { ReactNode } from "react";

type VyaproPageShellProps = {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  children: ReactNode;
};

export default function VyaproPageShell({
  title,
  subtitle,
  showLogo = false,
  children,
}: VyaproPageShellProps) {
  return (
    <main className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
      <article className="container mx-auto w-full">
        <header className="space-y-3 md:space-y-4">
          {!showLogo ? (
            <p className="text-sm font-medium text-primary">
              <Link href="/vyapro" className="hover:underline">
                Vyapro
              </Link>
            </p>
          ) : null}
          <div className="flex items-center gap-3 md:gap-4">
            {showLogo ? (
              <img
                src="/vyapro-logo.png"
                alt="Vyapro"
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
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </header>

        {/* Card chrome for child sections; `p-*` overrides global `section { py-20 }`. */}
        <div
          className={[
            "mt-8 grid grid-cols-1 gap-6 text-slate-700 dark:text-slate-300 leading-relaxed",
            "md:mt-10 md:grid-cols-2 md:gap-6",
            "xl:grid-cols-3 xl:gap-8",
            "[&_section]:rounded-xl",
            "[&_section]:border",
            "[&_section]:border-slate-200",
            "dark:[&_section]:border-slate-700",
            "[&_section]:bg-white",
            "dark:[&_section]:bg-slate-800/60",
            "[&_section]:p-6",
            "lg:[&_section]:p-8",
          ].join(" ")}
        >
          {children}
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm">
          <Link href="/vyapro" className="text-primary hover:underline">
            About
          </Link>
          <Link href="/vyapro/downloads" className="text-primary hover:underline">
            Downloads
          </Link>
          <Link href="/vyapro/support" className="text-primary hover:underline">
            Support
          </Link>
          <Link href="/vyapro/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </article>
    </main>
  );
}
