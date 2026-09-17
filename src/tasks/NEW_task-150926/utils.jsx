import React from 'react'
import { Link, createBrowserRouter, Outlet, useLocation } from 'react-router'
import { ArrowLeftIcon, SignOutIcon, SquaresFourIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu,
  SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger,
} from '@/components/ui/sidebar'
import Landing from './Landing'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import { TooltipProvider } from '@/components/ui/tooltip'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
]

const adminNav = [
  { title: 'Dashboard', href: '/admin', icon: SquaresFourIcon },
]

export function Theme() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Tsaqafee<span className="text-primary">.</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tsaqafee. Ngopi enak, harga bersahabat.
          </p>
          <div className="flex items-center">
            <Button variant="link" size="sm">Instagram</Button>
            <Button variant="link" size="sm">Kontak</Button>
            <Button variant="ghost" size="sm">Kebijakan Privasi</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AdminSidebar() {
  const { pathname } = useLocation()

  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/admin">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                    T
                  </div>
                  <div className="grid leading-tight">
                    <span className="truncate font-semibold">Tsaqafee</span>
                    <span className="truncate text-xs text-muted-foreground">Panel Admin</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <Link to={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Kembali ke Toko">
                <Link to="/">
                  <ArrowLeftIcon />
                  <span>Kembali ke Toko</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  )
}

export function AdminTheme() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <h2 className="text-sm font-semibold">Dashboard</h2>
          <Button variant="ghost" size="sm" className="ml-auto gap-2">
            <SignOutIcon size={16} />
            Keluar
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function Auth() {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
          alt="Secangkir kopi Tsaqafee"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-8 left-8 max-w-sm text-2xl font-semibold text-white">
          "Kopi terbaik lahir dari proses yang sabar."
        </p>
      </div>

      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Theme />,
    children: [
      { index: true, element: <Landing /> },
    ],
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminTheme />,
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
])