import CareerDevelopment from "@/components/career-development";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="/resources/career-development">
      <CareerDevelopment />
    </LayoutComponent>
  );
}
