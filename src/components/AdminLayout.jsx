import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
