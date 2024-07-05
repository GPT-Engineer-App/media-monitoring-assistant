export default async function handler(req, res) {
  // Mock data for mentions
  const data = [
    {
      id: 1,
      source: "Twitter",
      date: "2023-10-01",
      content: "Great product!",
      sentiment: "positive",
    },
    {
      id: 2,
      source: "Facebook",
      date: "2023-10-02",
      content: "Not satisfied with the service.",
      sentiment: "negative",
    },
    {
      id: 3,
      source: "Instagram",
      date: "2023-10-03",
      content: "It's okay, could be better.",
      sentiment: "neutral",
    },
  ];

  res.status(200).json(data);
}