export default async function handler(req, res) {
  // Mock data for sentiment analysis
  const data = {
    sentimentBySource: {
      labels: ["Twitter", "Facebook", "Instagram"],
      datasets: [
        {
          label: "Positive",
          data: [12, 19, 3],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Negative",
          data: [2, 3, 20],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Neutral",
          data: [3, 10, 13],
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    sentimentTrends: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Positive",
          data: [12, 19, 3, 5, 2, 3],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: "Negative",
          data: [2, 3, 20, 5, 1, 4],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "Neutral",
          data: [3, 10, 13, 15, 22, 30],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    },
    wordCloud: [
      { text: "great", value: 10 },
      { text: "service", value: 8 },
      { text: "product", value: 6 },
      { text: "satisfied", value: 4 },
      { text: "okay", value: 2 },
    ],
  };

  res.status(200).json(data);
}