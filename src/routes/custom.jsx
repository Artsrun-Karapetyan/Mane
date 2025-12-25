import { createFileRoute } from "@tanstack/react-router";
import Custom from "../components/Custom/Custom";
export const Route = createFileRoute("/custom")({
  component: CustomPage,
});

function CustomPage() {
  return <Custom />;
}
