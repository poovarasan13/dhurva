import FlipCard from "@/components/page-components/FlipCard";

const ProPassList = () => {
  const passes = [
    {
      title: "Pro Pass",
      price: 500,
      features: [
        "Full Event Access (Day 1 + Day 2)",
        "Exclusive Meet & Greet with Resource Persons",
        "Priority Seating",
        "Backstage Access",
        "VIP Lounge Entry",
      ],
    },
    {
      title: "Standard Pass",
      price: 300,
      features: ["Day 1 Access", "Technical & Non-Technical Events"],
    },
    {
      title: "VIP Pass",
      price: 700,
      features: [
        "All Benefits of Pro Pass",
        "Personalized Event Kit",
        "Exclusive VIP Lounge Access",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-center text-3xl sm:text-5xl my-8 font-bold dm-serif">
        Pass
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {passes.map((pass, index) => (
          <FlipCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProPassList;
