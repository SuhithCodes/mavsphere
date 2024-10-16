import ForumComponent from "@/components/forum-page";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="networking/forums">
      <ForumComponent />
    </LayoutComponent>
  );
}
