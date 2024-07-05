import { useQuery } from "@tanstack/react-query";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSentimentAnalysis = async () => {
  // Replace with actual API call
  return {
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
};

const SentimentAnalysis = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sentimentAnalysis"],
    queryFn: fetchSentimentAnalysis,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">Sentiment Analysis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={data.sentimentBySource} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={data.sentimentTrends} />
          </CardContent>
        </Card>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Word Cloud</h2>
        <div className="flex flex-wrap gap-2">
          {data.wordCloud.map((word) => (
            <span
              key={word.text}
              className="text-lg"
              style={{ fontSize: `${word.value * 10}px` }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;