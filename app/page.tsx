
import React from 'react'
import { LayoutComponent } from './pages/layout-component'
import { ProfileContent } from './pages/profile-page'
import { Homepage } from './pages/home-page'
import { SettingsPageComponent } from './pages/settings-page'
import { NetworkingPageComponent } from './pages/networking-page'
import { ForumComponent } from './pages/forum-page'

// export default function ProfilePage() {
//   return (
//     <LayoutComponent>
//         <ForumComponent />
//     </LayoutComponent>
//   )
// }

// export default function HomePage() {
//   return (
//     <LayoutComponent>
//         <ForumComponent />
//     </LayoutComponent>
//   )
// }

// export default function SettingsPage() {
//   return (
//     <LayoutComponent>
//         <ForumComponent />
//     </LayoutComponent>
//   )
// }

// export default function NetworkingPage() {
//   return (
//     <LayoutComponent>
//         <ForumComponent />
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

