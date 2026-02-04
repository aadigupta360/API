export default function handler(req, res) {
  const ADMIN_PASS = "HamarESP";

  // Check the JSON body OR the URL query string (?adminPass=...)
  const receivedPass = req.body?.adminPass || req.query?.adminPass;

  if (receivedPass === ADMIN_PASS) {
    // Replace this string with your Google Sheet fetch logic later if needed
    const passwordList = "1234,5678,9999,0000"; 
    
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
  }

  // If we reach here, the password didn't match
  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send("401 Unauthorized: Password Mismatch");
}