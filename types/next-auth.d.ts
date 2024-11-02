import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    is_mentor: boolean;
    username: string;
  }

  interface Session {
    user: User;
  }
}
