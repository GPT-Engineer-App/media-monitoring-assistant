export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    // Mock database retrieval
    const users = [{ email, password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zz8u5l9X7z2w7z2w7z2w7" }]; // Example hashed password
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ hashedPassword: user.password });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}