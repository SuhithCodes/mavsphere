import SettingsPageComponent from "@/components/settings-page";
import LayoutComponent from "@/components/layout-component";
import ProtectedRoute from "@/components/auth/protected-route";

export default function Page() {
  return (
    <ProtectedRoute>
      <LayoutComponent childPage="/settings">
        <SettingsPageComponent />
      </LayoutComponent>
    </ProtectedRoute>
  );
}
