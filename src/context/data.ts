import axios from "axios";
import backendUrl from "./backendUrl";
const events = [
  {
    id: "1",
    name: "Tech Conference",
    category: "Business",
    date: "2025-03-15",
    img: "https://img.bizbash.com/files/base/bizbash/bzb/image/2023/10/image003.6532f37567e5b.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
  },
  {
    id: "2",
    name: "Music Fest",
    category: "Entertainment",
    date: "2025-04-10",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Live_Music_Performance.jpg",
  },
  {
    id: "3",
    name: "Art Exhibition",
    category: "Culture",
    date: "2025-05-05",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Art_Exhibition.jpg/1200px-Art_Exhibition.jpg",
  },
  {
    id: "4",
    name: "Startup Meetup",
    category: "Networking",
    date: "2025-06-20",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Startup_meetup.jpg/1200px-Startup_meetup.jpg",
  },
  {
    id: "5",
    name: "Food Carnival",
    category: "Food & Drinks",
    date: "2025-07-12",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Food_Festival.jpg/1200px-Food_Festival.jpg",
  },
  {
    id: "6",
    name: "Food Carnival",
    category: "Food & Drinks",
    date: "2025-07-12",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Food_Festival.jpg/1200px-Food_Festival.jpg",
  },
];

export async function getEvents(
  title: string,
  category: string,
  img: string,
  date: string
) {
  axios
    .post(`${backendUrl}/api/events`, {
      title,
      category,
      img,
      date,
    })
    .then((e) => {
      console.log(e.data.events);
    });
  return events;
}

export default events;
