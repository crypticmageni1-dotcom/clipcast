# ClipCast — Built for Kenya. Made for East Africa. 🇰🇪

Open `index.html` in a browser. Seven pages are included: index.html, login.html, dashboard.html, upload.html, clips.html, editor.html, pricing.html.

The browser demo uses localStorage key `clipcast_user`, enforces 1 Cast = 1 Minute, deducts Casts before upload processing, and simulates M-Pesa STK Push.

Production Clipping API integration point:
```js
async function callClippingAPI(videoUrl) {
  // Replace with your real Clipping API key in .env - CLIPPING_API_KEY
}
```
Keep the real API secret server-side. Launch flow intentionally uses simple `wa.me` links and does not add TikTok API, YouTube API, Meta API, or WhatsApp Bot API.

M-Pesa production note:
```js
// For production, connect to Daraja API. For demo, simulate.
```
