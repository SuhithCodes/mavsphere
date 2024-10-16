import ProfileComponent from "@/components/profile-content";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="profile">
      <ProfileComponent />
    </LayoutComponent>
  );
}
