import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      dashboard (protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
