// Using CommonJS syntax (standard for Vercel Node.js functions)
module.exports = async (req, res) => {
  const ADMIN_PASS = "HamarESP";
  
  // Log it so you can see it in the Vercel Dashboard Logs
  console.log("Request received with query:", req.query);

  const receivedPass = req.query.adminPass || req.body?.adminPass;

  if (receivedPass === ADMIN_PASS) {
    const passwords = "1234,5678,9999,0000"; // Replace with your list
    
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(passwords);
  }

  res.setHeader('Content-Type', 'text/plain');
  return res.status(401).send("Unauthorized");
};