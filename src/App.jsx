import { createRouter, RouterProvider } from '@tanstack/react-router';


import { routeTree } from './routeTree.gen.ts';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <div>Not Found</div>
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;