export default function handler(req, res) {
  // Security Check: Only allow POST requests with your Admin Password
  if (req.method === 'POST') {
    const { adminPass } = req.body;

    if (adminPass === "HamarESP") {
      // You can hardcode passwords here or fetch from a database/GitHub
      const passwordList = "1234,5678,9999,0000"; 
      
      // Send raw text - NO HTML!
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(passwordList);
    } else {
      return res.status(401).send("Unauthorized");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}