import Homepage from "@/components/homepage";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="Home">
      <Homepage />
    </LayoutComponent>
  );
}
