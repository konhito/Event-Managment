import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import { customHeight } from "@/components/Dashboard";
export default function Home() {
  const s = customHeight();
  console.log(s);
  return (
    <div className=" min-h-screen bg-slate-950 ">
      <Navbar />
      <Dashboard />
    </div>
  );
}
