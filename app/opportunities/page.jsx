import JobBoardComponent from "@/components/opportunities";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="opportunities">
      <JobBoardComponent />
    </LayoutComponent>
  );
}
