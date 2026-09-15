import React from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'

const testimonials = [
  {
    name: 'Rani Putri',
    role: 'Barista, Jakarta',
    quote: 'Aroma Gayo-nya juara. Pelanggan langganan sampai nanya kopi merek apa yang kami pakai.',
    img: 'https://i.pravatar.cc/96?img=47',
  },
  {
    name: 'Dimas Prakoso',
    role: 'Freelancer, Bandung',
    quote: 'Ngoding sambil ngopi Toraja dari Tsaqafee rasanya beda. Wanginya sampai se-kamar.',
    img: 'https://i.pravatar.cc/96?img=12',
  },
  {
    name: 'Salsabila',
    role: 'Mahasiswa, Yogyakarta',
    quote: 'Kemasan rapi, pengiriman cepat, rasa mantap. Worth it banget buat kantong mahasiswa.',
    img: 'https://i.pravatar.cc/96?img=32',
  },
  {
    name: 'Arif Wibowo',
    role: 'Owner kedai kopi, Surabaya',
    quote: 'Sudah setahun kerja sama untuk supply biji. Konsisten dan selalu fresh roasted.',
    img: 'https://i.pravatar.cc/96?img=59',
  },
]

const faqs = [
  {
    q: 'Bagaimana cara memesan kopi di Tsaqafee?',
    a: 'Buat akun lewat halaman Sign Up, pilih biji kopi favoritmu, lalu checkout. Pesanan disangrai fresh di hari yang sama.',
  },
  {
    q: 'Kopi dikirim dalam bentuk apa?',
    a: 'Tersedia wholebean, grind V60, grind espresso, hingga grind tubruk. Tinggal sesuaikan dengan alat seduhmu.',
  },
  {
    q: 'Berapa lama pengiriman pesanan?',
    a: 'Dikirim maksimal 1x24 jam setelah disangrai. Jabodetabek biasanya tiba H+1, kota besar lainnya H+2 sampai H+3.',
  },
  {
    q: 'Apakah bisa retur jika kopi rusak?',
    a: 'Tentu. Jika kopi tiba rusak atau tidak sesuai pesanan, ajukan pengembalian maksimal 3 hari setelah paket diterima.',
  },
]

function Landing() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section id="hero" className="mx-auto w-full max-w-6xl scroll-mt-16 px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">
              Arabika single origin · Fresh roasted
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Secangkir kopi hangat untuk menemani harimu
            </h1>
            <p className="max-w-md text-muted-foreground">
              Biji kopi pilihan dari petani lokal Nusantara, disangrai sempurna dan dikirim
              fresh ke rumahmu. Ngopi enak nggak harus ribet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/sign-up">Pesan Sekarang</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Kenali Kami</a>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              <AspectRatio ratio={4 / 3}>
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Secangkir kopi Tsaqafee"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============ About ============ */}
      <section id="about" className="border-t bg-muted/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl scroll-mt-16 px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Card className="overflow-hidden p-0 max-lg:order-last lg:order-first">
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80"
                    alt="Biji kopi sangrai Tsaqafee"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Dari kebun, langsung ke cangkirmu</h2>
              <p className="text-muted-foreground">
                Tsaqafee berawal dari kecintaan pada kopi nusantara. Kami bermitra langsung
                dengan petani agar setiap biji terlacak asalnya dan petani mendapat harga terbaik.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Biji Lokal Pilihan</CardTitle>
                    <CardDescription>Berkemitra langsung dengan petani Gayo, Toraja, dan Kintamani.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Fresh Roasted</CardTitle>
                    <CardDescription>Disangrai setiap hari dan dikirim maksimal 1x24 jam.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Roast Custom</CardTitle>
                    <CardDescription>Light, medium, atau dark? Sesuaikan selera seduhmu.</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Gratis Ongkir</CardTitle>
                    <CardDescription>Untuk pembelian di atas Rp200.000 ke seluruh Indonesia.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Testimoni ============ */}
      <section id="testimoni" className="border-t py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl scroll-mt-16 px-4">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Kata mereka yang sudah ngopi</h2>
            <p className="mt-2 text-muted-foreground">
              Ribuan cangkir telah dinikmati pelanggan di seluruh Indonesia.
            </p>
          </div>

          <Carousel opts={{ align: 'start' }} className="mx-auto w-full max-w-4xl">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col gap-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                      <div className="mt-auto flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={t.img} alt={t.name} />
                          <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">{t.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="border-t bg-muted/40 py-16 md:py-24">
        <div className="mx-auto w-full max-w-2xl scroll-mt-16 px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Pertanyaan Umum</h2>
            <p className="mt-2 text-muted-foreground">Masih bingung? Mungkin jawabannya ada di sini.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i + 1}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default Landing