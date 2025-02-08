import React from "react";
import events from "@/context/data";

interface Event {
  id: string;
  name: string;
  category: string;
  date: string;
  img: string;
}

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Event Dashboard</h1>
      <ul>
        {events.map((item: Event) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p>{item.date}</p>
            <img src={item.img} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
