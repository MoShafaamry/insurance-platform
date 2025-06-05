import PolicyManager from '@/components/policy-manager'
import SidebarLayout from '@/components/sidebar-layout'

export default function PoliciesPage() {
  return (
    <SidebarLayout>
      <div className="p-8 text-white space-y-6">
        <h1 className="text-2xl font-bold">Policies</h1>
        <PolicyManager />
      </div>
    </SidebarLayout>
  )
}
