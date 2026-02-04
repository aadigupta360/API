export default function handler(req, res) {
  const ADMIN_PASS = "HamarESP";

  // LOGS: Go to Vercel Dashboard > Logs to see these
  console.log("Full Query Params:", req.query);
  
  // Try to find the password under different common names just in case
  const receivedPass = req.query.adminPass || req.query.password || req.body?.adminPass;

  if (receivedPass === ADMIN_PASS) {
    const passwordList = "1234,5678,9999,0000"; // Your actual passwords
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
  }

  // If mismatch, tell us what we actually received (for debugging)
  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send(`Unauthorized. Received: ${receivedPass}`);
}