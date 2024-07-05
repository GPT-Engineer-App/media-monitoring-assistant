import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

const fetchDashboardData = async () => {
  // Replace with actual API call
  return {
    totalMentions: 120,
    positiveMentions: 80,
    negativeMentions: 20,
    neutralMentions: 20,
    sentimentOverTime: {
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
  };
};

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.totalMentions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Positive Mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.positiveMentions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Negative Mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.negativeMentions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Neutral Mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.neutralMentions}</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Line data={data.sentimentOverTime} />
      </div>
    </div>
  );
};

export default Dashboard;