// pages/index.js

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-pink-100" 
      style={{ 
        backgroundImage: "url('/domba.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Head>
        <title>Selamat Ulang Tahun!</title>
        <meta name="description" content="Selamat Ulang Tahun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-pink-600">
          Met HBD!
        </h1>

        <p className="mt-3 text-2xl text-pink-500">
        Jika klik tombol dibawah anda tidak akan makan SEBLAK selama setahun! 
        </p>

        <Link href="./ucapan">
          <button className="mt-6 px-8 py-4 bg-pink-500 text-white text-2xl rounded-full hover:bg-pink-600">
            PENCET BURUU!
          </button>
        </Link>
      </main>
    </div>
  )
}
