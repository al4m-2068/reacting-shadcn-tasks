import React from 'react'
import {
  MoneyIcon, PackageIcon, ShoppingCartIcon, UsersIcon,
} from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

const stats = [
  { title: 'Penjualan Hari Ini', value: 'Rp 1.240.000', change: '+12,5% dari kemarin', icon: MoneyIcon },
  { title: 'Pesanan Baru', value: '18', change: '+4 dari kemarin', icon: ShoppingCartIcon },
  { title: 'Produk Aktif', value: '24', change: '2 produk stok menipis', icon: PackageIcon },
  { title: 'Total Pelanggan', value: '312', change: '+15 minggu ini', icon: UsersIcon },
]

const recentOrders = [
  { id: '#TF-1084', customer: 'Rani Putri', date: '12 Jun 2025', total: 'Rp 145.000', status: 'Baru' },
  { id: '#TF-1083', customer: 'Dimas Prakoso', date: '12 Jun 2025', total: 'Rp 210.000', status: 'Diproses' },
  { id: '#TF-1082', customer: 'Salsabila', date: '11 Jun 2025', total: 'Rp 90.000', status: 'Dikirim' },
  { id: '#TF-1081', customer: 'Arif Wibowo', date: '11 Jun 2025', total: 'Rp 480.000', status: 'Selesai' },
  { id: '#TF-1080', customer: 'Budi Santoso', date: '10 Jun 2025', total: 'Rp 120.000', status: 'Dibatalkan' },
]

const statusVariant = {
  Baru: 'outline',
  Diproses: 'secondary',
  Dikirim: 'secondary',
  Selesai: 'default',
  Dibatalkan: 'destructive',
}

function Dashboard() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <stat.icon size={16} className="shrink-0" />
                {stat.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold">Pesanan Terbaru</h3>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium">ID</th>
                <th className="px-4 py-3 text-left font-medium">Pelanggan</th>
                <th className="hidden px-4 py-3 text-left font-medium md:table-cell">Tanggal</th>
                <th className="px-4 py-3 text-left font-medium">Total</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b transition-colors last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{order.date}</td>
                  <td className="px-4 py-3">{order.total}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard