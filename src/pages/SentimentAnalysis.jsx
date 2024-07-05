import { useQuery } from "@tanstack/react-query";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSentimentAnalysis = async () => {
  const response = await fetch("/api/sentiment-analysis");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
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