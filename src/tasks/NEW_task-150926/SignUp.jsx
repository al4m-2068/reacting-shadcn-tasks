import React from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Buat akun baru</CardTitle>
        <CardDescription>Daftar gratis dan dapatkan diskon 20% untuk pesanan pertama.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" type="text" placeholder="Tsaqib Ahmad" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nama@email.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Minimal 8 karakter" minLength={8} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Konfirmasi Password</Label>
            <Input id="confirm-password" type="password" placeholder="Ulangi password" minLength={8} required />
          </div>
          <Button type="submit" className="w-full">Daftar</Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Sudah punya akun?{' '}
          <Link to="/sign-in" className="font-medium underline underline-offset-4">Sign In</Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignUp