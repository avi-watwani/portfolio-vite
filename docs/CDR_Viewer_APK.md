# Shipping a new CDR Viewer APK

The Android APK is **not** stored in this repo (too large for git). It is published as a [GitHub Release](https://github.com/avi-watwani/portfolio-vite/releases) asset named `cdr-viewer.apk`.

The Downloads page links to a **tag-specific** asset (not `/releases/latest/`), so a newer Vyapro (or other) release does not break this URL:

`https://github.com/avi-watwani/portfolio-vite/releases/download/cdr-viewer-v1.0.0/cdr-viewer.apk`

Defined in `client/src/lib/cdr-viewer.ts` as `CDR_VIEWER_APK_URL`.

The same release also hosts a sample CorelDRAW file for testers (`sample.cdr`):

`https://github.com/avi-watwani/portfolio-vite/releases/download/cdr-viewer-v1.0.0/sample.cdr`

Site shortcut: `/cdr-viewer/sample-file` (redirects to that asset). Defined as `CDR_VIEWER_SAMPLE_FILE_URL`.

In production, `vercel.json` also 302-redirects `/cdr-viewer/sample-file` to the same GitHub asset (so cold loads never boot the SPA). Keep that destination in sync when updating the URL constant. The React route remains for local Vite and as a fallback.

## To ship a new APK later

1. Build the APK in the [cdr-viewer](https://github.com/avi-watwani/cdr-viewer) app (output is typically under `dist/`, e.g. `cdr-viewer-preview.apk`).
2. Publish a new release on **this** repo. Keep the uploaded asset name exactly `cdr-viewer.apk`.
3. Update `CDR_VIEWER_APK_URL` in `client/src/lib/cdr-viewer.ts` to the new tag path.

```bash
gh release create cdr-viewer-v1.0.1 \
  /path/to/your-build.apk#cdr-viewer.apk \
  --repo avi-watwani/portfolio-vite \
  --title "CDR Viewer Android APK v1.0.1" \
  --notes "Android APK for CDR Viewer direct install."
```

Example with a local preview build:

```bash
gh release create cdr-viewer-v1.0.1 \
  ~/cdr-viewer/dist/cdr-viewer-preview.apk#cdr-viewer.apk \
  --repo avi-watwani/portfolio-vite \
  --title "CDR Viewer Android APK v1.0.1" \
  --notes "Android APK for CDR Viewer direct install."
```

Bump the tag / title for each release (`cdr-viewer-v1.0.2`, etc.), then point `CDR_VIEWER_APK_URL` at that tag.

## Local-only copy (optional)

You may keep a copy at `client/public/cdr-viewer.apk` for local testing. It is gitignored (`client/public/*.apk`) and is **not** what production serves.
