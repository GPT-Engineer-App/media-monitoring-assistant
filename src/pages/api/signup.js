export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // Mock database insertion
  const users = [{ email, password }];

  res.status(200).json({ message: "User signed up successfully" });
}