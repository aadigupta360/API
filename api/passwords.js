export default function handler(req, res) {
  const ADMIN_PASS = "HamarESP";
  
  // Check both the body (POST) and the query string (GET) for the pass
  const receivedPass = req.body?.adminPass || req.query?.adminPass;

  if (receivedPass === ADMIN_PASS) {
    // The raw string your ESP32 expects
    const passwordList = "1234,5678,9999,0000"; 
    
    // CRITICAL: Set content type to plain text so Proxy doesn't wrap it in HTML
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
  }

  // If unauthorized, send a plain text error, NOT an HTML error page
  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send("Error: Unauthorized");
}