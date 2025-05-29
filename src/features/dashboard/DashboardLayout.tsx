import { Sidebar } from '@/components/ui/sidebar.tsx';
import { Outlet } from 'react-router';
import { TopNav } from '@/features/dashboard/components/TopNav.tsx';

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  )
}