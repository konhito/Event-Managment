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
    <div className="text-white flex flex-col items-center h-screen max-w-screen p-6">
      <h1 className="text-6xl font-bold uppercase tracking-wide bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient mb-8">
        Event Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {events.map((item: Event) => (
          <div key={item.id} className="bg-gray-800  p-6 rounded-lg  w-48">
            <h2 className="text-center font-semibold text-sm mb-2">
              {item.name}
            </h2>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-28 object-cover rounded-md"
            />
            <div className="bg-gray-500 rounded-full flex items-center justify-center">
              <div className="px-5 flex flex-wrap">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
