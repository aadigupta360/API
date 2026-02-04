module.exports = async (req, res) => {
  // 1. Define the correct password
  const CORRECT_PASS = "HamarESP";
  
  // 2. Try to find the password in the URL (?adminPass=) 
  // OR in the body (jsonData)
  const receivedPass = req.query.adminPass || req.body?.adminPass;

  // DEBUG: This will show up in your Vercel Dashboard Logs
  console.log("Password received:", receivedPass);

  if (receivedPass === CORRECT_PASS) {
    // 3. Return your passwords
    const passwordList = "1234,5678,9999,0000,6969"; 
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwordList);
  }

  // 4. Return an error if it doesn't match
  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send("Unauthorized");
};