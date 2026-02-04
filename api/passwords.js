export default function handler(req, res) {
  const ADMIN_PASS = "HamarESP";

  // Check URL (?adminPass=...) OR the JSON body
  const receivedPass = req.query.adminPass || req.body?.adminPass;

  if (receivedPass === ADMIN_PASS) {
    const passwordList = "1234,5678,9999,0000"; 
    
    // Send as plain text to avoid any HTML wrapping by the proxy
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
  }

  // If unauthorized, return plain text so the ESP32 doesn't see HTML
  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send("Error: Unauthorized");
}