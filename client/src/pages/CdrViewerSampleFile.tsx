import { useEffect, useRef } from "react";
import { CDR_VIEWER_SAMPLE_FILE_URL } from "@/lib/cdr-viewer";

/** Immediately starts downloading the sample .cdr for app testers. */
export default function CdrViewerSampleFile() {
  const started = useRef(false);

  useEffect(() => {
    // Guard React Strict Mode's double effect in development.
    if (started.current) return;
    started.current = true;
    // assign (not replace) so Back still returns to this site if the browser
    // navigates to the asset URL instead of staying put for the download.
    window.location.assign(CDR_VIEWER_SAMPLE_FILE_URL);
  }, []);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-4 py-16">
      <p className="text-center text-muted-foreground">
        Downloading sample file…
        <br />
        <a
          href={CDR_VIEWER_SAMPLE_FILE_URL}
          className="text-primary hover:underline"
          rel="noopener noreferrer"
        >
          Click here if the download does not start
        </a>
      </p>
    </main>
  );
}
