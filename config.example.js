// Copy this file to config.js and fill in your values.
// config.js is gitignored and must never be committed.
//
// Power Automate Setup:
// 1. Create a Cloud Flow (Instant cloud flow) triggered by HTTP request
// 2. Copy the URL from the trigger
// 3. The form will POST a JSON object with fields:
//    { name, email, phone, notificationType, frequency }
// 4. Configure your flow to send confirmations or store data as needed

window.BENTAX_CONFIG = {
  flowUrl: "YOUR_POWER_AUTOMATE_HTTP_TRIGGER_URL_HERE"
};
