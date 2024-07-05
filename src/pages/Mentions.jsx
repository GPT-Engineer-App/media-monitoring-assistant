import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";

const fetchMentions = async () => {
  const response = await fetch("/api/mentions");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
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