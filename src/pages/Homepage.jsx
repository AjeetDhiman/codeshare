import { Button } from "@/components/ui/button";

export const Homepage = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-red-500">
        Welcome to the Homepage
      </h2>
      <p className="mt-4 text-gray-700">
        This is the homepage content styled with Tailwind.
      </p>
      <Button>Click me</Button>
    </div>
  );
};
