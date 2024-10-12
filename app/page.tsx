
import React from 'react'
import { LayoutComponent } from './pages/layout-component'
import { ProfileContent } from './pages/profile-page'
import { HomepageContent } from './pages/home-page'
import { SettingsPageComponent } from './pages/settings-page'
import { NetworkingPageComponent } from './pages/networking-page'
import { ForumComponent } from './pages/forum-page'

// export default function ProfilePage() {
//   return (
//     <LayoutComponent>
//         <ProfileContent />
//     </LayoutComponent>
//   )
// }

// export default function HomePage() {
//   return (
//     <LayoutComponent>
//         <HomepageContent />
//     </LayoutComponent>
//   )
// }

// export default function SettingsPage() {
//   return (
//     <LayoutComponent>
//         <SettingsPageComponent />
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

export default function ForumPage() {
  return (
    <LayoutComponent>
        <ForumComponent />
    </LayoutComponent>
  )
}

