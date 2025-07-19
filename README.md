# Calendar current week

Small extension to add small changes to the look and feel of Google Calendar UI only when we are in current week.

Make sure you have Google Calendar UI in English and you have enabled `Settings -> View Options -> Show week numbers` in your Calendar for this extension to work.

Current UI changes:

* Add light green background color to the "header"

Published as:
 * [Firefox extension](https://addons.mozilla.org/es/firefox/addon/calendar-current-week/)
 * [Chrome extension](https://chromewebstore.google.com/detail/calendar-current-week/aoccpmfeidofhlglpaogdgdggmldpgmh)

## Development

To generate the zip file in macOS to upload it to the stores:

```
zip -r -X calendar_current_week_1_2.zip change_background.js icons manifest.json
```

For Firefox add-on, add `"browser_specific_settings"` item from `manifest_firefox.json` to `manifest.json`.
