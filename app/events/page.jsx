import EventsPageComponent from "@/components/events-page";
import LayoutComponent from "@/components/layout-component";

export default function Page() {
  return (
    <LayoutComponent childPage="events">
      <EventsPageComponent />
    </LayoutComponent>
  );
}
