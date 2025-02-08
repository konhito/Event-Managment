import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className=" min-h-screen bg-slate-950 ">
      <Navbar />
      <Dashboard />
    </div>
  );
}
