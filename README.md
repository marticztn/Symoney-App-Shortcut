
## App announcements

The iOS announcements screen reads the same notices maintained in `src/i18n.ts`.
`npm run build` automatically creates `dist/notices/{zh-cn,zh-tw,en,ja}.json`.
The development server serves these endpoints too.

To publish an announcement, update the four languages in `src/i18n.ts` and deploy
this website normally. Keep each notice ID stable and use a new ID for a new
notice. No additional App release is needed after users have installed the version
that includes the announcements screen. Deploy the website endpoints before that
App release. The App refreshes on opening the list and on pull-to-refresh, with a
cached copy available when a refresh fails. System cache cleanup can remove that
copy. It does not send push notifications.

`schemaVersion: 1` is the shared format. Keep existing fields compatible with older
App versions. Links from the App use `?tab=contact&lang=zh-cn` (or another supported
tab and language) to open the relevant guide section.
