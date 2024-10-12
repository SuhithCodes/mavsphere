
import React from 'react'
import { HomePageContent } from './pages/home-page'
import { NetworkingPageComponent } from './pages/networking-page'
import { LayoutComponent } from './pages/layout-component'
import { ProfileContent } from './pages/profile-page'
import { SettingsPageComponent } from './pages/settings-page'
import { ForumComponent } from './pages/forum-page'
import { LoginSignupComponent } from './pages/login-signup-page'
import { CareerDevelopmentComponent } from './pages/career-development-page'
import { JobBoardComponent } from './pages/opportunities-page'
import { LandingPageComponent } from './pages/landing-page'

// export default function LandingPage() {
//   return (
//         <LandingPageComponent />
//   )
// }

// export default function LoginSignupPage() {
//   return (
//         <LoginSignupComponent />
//   )
// }

// export default function HomePage() {
//   return (
//     <LayoutComponent>
//         <HomePageContent />
//     </LayoutComponent>
//   )
// }

// export default function NetworkingPage() {
//   return (
//     <LayoutComponent>
//         <NetworkingPageComponent />
//     </LayoutComponent>
//   )
// }

// export default function ForumPage() {
//   return (
//     <LayoutComponent>
//         <ForumComponent />
//     </LayoutComponent>
//   )
// }


// export default function OppPage() {
//   return (
//     <LayoutComponent>
//         <JobBoardComponent />
//     </LayoutComponent>
//   )
// }

export default function CareerDevPage() {
  return (
    <LayoutComponent>
        <CareerDevelopmentComponent />
    </LayoutComponent>
  )
}

// export default function SettingsPage() {
//   return (
//     <LayoutComponent>
//         <SettingsPageComponent />
//     </LayoutComponent>
//   )
// }

// export default function ProfilePage() {
//   return (
//     <LayoutComponent>
//         <ProfileContent />
//     </LayoutComponent>
//   )
// }
