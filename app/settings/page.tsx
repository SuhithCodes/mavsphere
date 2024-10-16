import SettingsPageComponent from "@/components/settings-page";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="/settings">
      <SettingsPageComponent />
    </LayoutComponent>
  );
}
