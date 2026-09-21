# Shipping a new Vyapro APK

The Android APK is **not** stored in this repo (too large for git). It is published as a [GitHub Release](https://github.com/avi-watwani/portfolio-vite/releases) asset named `vyapro.apk`.

The Downloads page links to a **tag-specific** asset:

`https://github.com/avi-watwani/portfolio-vite/releases/download/vyapro-v1.0.4/vyapro.apk`

Defined in `client/src/lib/vyapro.ts` as `VYAPRO_APK_URL` / `VYAPRO_APK_VERSION`.

## To ship a new APK later

1. Build the APK in the [vyapro](https://github.com/avi-watwani/vyapro) mobile app.
2. Publish a new release on **this** repo. Keep the uploaded asset name exactly `vyapro.apk`.
3. Bump `VYAPRO_APK_VERSION` in `client/src/lib/vyapro.ts` to the new tag.

```bash
gh release create vyapro-v1.0.5 \
  /path/to/your-build.apk#vyapro.apk \
  --repo avi-watwani/portfolio-vite \
  --title "Vyapro Android APK v1.0.5" \
  --notes "Android APK for Vyapro direct install."
```

Bump the tag / title for each release (`vyapro-v1.0.5`, etc.), then point `VYAPRO_APK_VERSION` at that tag.

## Local-only copy (optional)

You may keep a copy at `client/public/vyapro.apk` for local testing. It is gitignored (`client/public/*.apk`) and is **not** what production serves.
