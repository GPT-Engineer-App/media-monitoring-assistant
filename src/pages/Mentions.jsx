import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";

const fetchMentions = async () => {
  // Replace with actual API call
  return [
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
};

const Mentions = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["mentions"],
    queryFn: fetchMentions,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1 className="text-3xl mb-4">Mentions</h1>
      <div className="space-y-4">
        {data.map((mention) => (
          <div key={mention.id} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{mention.source}</span>
              <span className="text-sm text-gray-500">{mention.date}</span>
            </div>
            <p className="mb-2">{mention.content}</p>
            <Badge variant={mention.sentiment}>{mention.sentiment}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentions;