import { Outlet, createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header/Header";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});
export default function Layout() {
  return (
    <>
      <Header />
      <div style={{marginTop:110}}>
        <Outlet />
      </div>
    </>
  );
}
