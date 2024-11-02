import { GettingStartedPage } from "@/components/page-components/getting-started-page/getting-started";
import ProtectedRoute from "@/components/auth/protected-route";

export default function GettingStarted() {
  return (
    <ProtectedRoute>
      <GettingStartedPage />
    </ProtectedRoute>
  );
}
