import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Limited access to weight machines",
        "Group fitness classes not included",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to cardio equipment",
        "Access to weight machines",
        "Access to group fitness classes",
        "Personal trainer available (additional fee)",
        "Locker room access",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 79.99,
      features: [
        "Access to cardio equipment",
        "Access to weight machines",
        "Access to group fitness classes",
        "Access to swimming pool",
        "Personal trainer included",
        "Sauna access",
        "Locker room access",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
