import Homepage from "@/components/homepage";
import LayoutComponent from "@/components/layout-component";
import ProtectedRoute from "@/components/protected-route";

export default function Page() {
  return (
    <ProtectedRoute>
      <LayoutComponent childPage="Home">
        <Homepage />
      </LayoutComponent>
    </ProtectedRoute>
  );
}
