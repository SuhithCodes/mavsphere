import NetworkingPageComponent from "@/components/networking-page";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="networking">
      <NetworkingPageComponent />
    </LayoutComponent>
  );
}
