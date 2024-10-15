import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      // Add custom authorization logic
      const pathname = req.nextUrl.pathname;

      // Require mentor status for mentor routes
      if (pathname.startsWith("/mentor")) {
        return token?.is_mentor === true;
      }

      // Require authentication for all other protected routes
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/mentor/:path*"],
};
