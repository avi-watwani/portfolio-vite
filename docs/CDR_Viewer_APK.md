# Shipping a new CDR Viewer APK

The Android APK is **not** stored in this repo (too large for git). It is published as a [GitHub Release](https://github.com/avi-watwani/portfolio-vite/releases) asset named `cdr-viewer.apk`.

The Downloads page links to the latest asset:

`https://github.com/avi-watwani/portfolio-vite/releases/latest/download/cdr-viewer.apk`

Defined in `client/src/lib/cdr-viewer.ts` as `CDR_VIEWER_APK_URL`.

## To ship a new APK later

1. Build the APK in the [cdr-viewer](https://github.com/avi-watwani/cdr-viewer) app (output is typically under `dist/`, e.g. `cdr-viewer-preview.apk`).
2. Publish a new release on **this** repo. Keep the uploaded asset name exactly `cdr-viewer.apk` so the site URL does not need a code change:

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

Bump the tag / title for each release (`cdr-viewer-v1.0.2`, etc.).

## Local-only copy (optional)

You may keep a copy at `client/public/cdr-viewer.apk` for local testing. It is gitignored (`client/public/*.apk`) and is **not** what production serves.
