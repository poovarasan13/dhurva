import ProPassCard from "./ProPassCard";
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
    }, {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-screen bg-gray-900 text-white justify-items-center">
      {passes.map((pass, index) => (
        <ProPassCard key={index} {...pass} />
      ))}
    </div>
  );
};
export default ProPassList;