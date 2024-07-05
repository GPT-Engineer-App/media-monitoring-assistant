import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const fetchDashboardData = async () => {
  const response = await fetch("/api/dashboard");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Dashboard = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    setKeyword(event.target.value);
    // Implement the logic to handle the search here
    console.log("Searching for keyword:", keyword);
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search for keywords..."
          value={keyword}
          onChange={handleSearch}
          className="w-full"
        />
      </div>
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
        <Card>
          <CardHeader>
            <CardTitle>Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.reach}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.engagement}</p>
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