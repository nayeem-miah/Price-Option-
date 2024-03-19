import { LineChart as LCharts, Line,XAxis,YAxis } from "recharts";

const LineCharts = () => {
  const studentData = [
    {
      id: 1,
      name: "John",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 72,
    },
    {
      id: 2,
      name: "Alice",
      mathMarks: 78,
      physicsMarks: 81,
      chemistryMarks: 70,
    },
    {
      id: 3,
      name: "Michael",
      mathMarks: 92,
      physicsMarks: 85,
      chemistryMarks: 89,
    },
    {
      id: 4,
      name: "Emily",
      mathMarks: 67,
      physicsMarks: 63,
      chemistryMarks: 71,
    },
    {
      id: 5,
      name: "David",
      mathMarks: 75,
      physicsMarks: 72,
      chemistryMarks: 68,
    },
    {
      id: 6,
      name: "Sophia",
      mathMarks: 88,
      physicsMarks: 90,
      chemistryMarks: 84,
    },
    {
      id: 7,
      name: "Jacob",
      mathMarks: 82,
      physicsMarks: 79,
      chemistryMarks: 80,
    },
    {
      id: 8,
      name: "Emma",
      mathMarks: 95,
      physicsMarks: 91,
      chemistryMarks: 93,
    },
    {
      id: 9,
      name: "Daniel",
      mathMarks: 70,
      physicsMarks: 68,
      chemistryMarks: 65,
    },
    {
      id: 10,
      name: "Olivia",
      mathMarks: 79,
      physicsMarks: 75,
      chemistryMarks: 77,
    },
  ];

  return (
    <div>
      <LCharts width={800} height={400} data={studentData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke="red"></Line>
        <Line dataKey={"physicsMarks"} stroke="yellow"></Line>
        <Line dataKey={"chemistryMarks"} stroke="blue"></Line>
      </LCharts>
    </div>
  );
};

export default LineCharts;
