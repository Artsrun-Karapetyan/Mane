import { createFileRoute } from "@tanstack/react-router";
import Courts from "../components/Courts";

export const Route = createFileRoute("/courts")({
  component: CourtsPage,
});

function CourtsPage () {
  return <Courts />;
}
