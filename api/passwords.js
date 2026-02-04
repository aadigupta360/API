export default async function handler(req, res) {
  // PASTE your Google Apps Script "Web App URL" here
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywRH6sIwHBTA2-EEemFOBCvq0sX_6_cuHJoFhD5yo7gY7u4KtPl48iUj4Y3Jr19YyQ/exec";
  const ADMIN_PASS = "HamarESP";

  const receivedPass = req.query.adminPass || req.body?.adminPass;

  // 1. Security check: Only your ESP32 (or you) can trigger the fetch
  if (receivedPass !== ADMIN_PASS) {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(401).send("Unauthorized");
  }

  try {
    // 2. Fetch the latest 8-digit passwords from the Spreadsheet
    const googleResponse = await fetch(GOOGLE_SCRIPT_URL);
    const passwordList = await googleResponse.text();

    // 3. Send the list to the ESP32
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
    
  } catch (error) {
    console.error("Fetch Error:", error);
    res.setHeader('Content-Type', 'text/plain');
    return res.status(500).send("Error fetching from Sheets");
  }
}