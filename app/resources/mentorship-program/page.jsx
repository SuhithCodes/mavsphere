import MentorshipProgramComponent from "@/components/mentorship-program";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="/resources/mentoship-program">
      <MentorshipProgramComponent />
    </LayoutComponent>
  );
}
