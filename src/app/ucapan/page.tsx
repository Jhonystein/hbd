// pages/birthday.tsx
"use client"

import Head from 'next/head';
import { useState } from 'react';
import Header from '../../../components/Header';
import Cake from '../../../components/Cake';
import Balloons from '../../../components/Balloons';
import ModalLetter from '../../../components/ModalLetter'; // Sesuaikan path dengan struktur proyek Anda

const Birthday = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="background-container flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden">
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="Happy Birthday to my special one" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center relative">
        <Header />
        <Cake />
        <Balloons />
        <img
          src="/letter.png"
          alt="Surat Ulang Tahun"
          className="cursor-pointer w-24 h-auto"
          onClick={openModal}
        />
        {isModalOpen && <ModalLetter onClose={closeModal} />} {/* Tampilkan modal jika isModalOpen true */}
      </main>
      <style jsx>{`
        .background-container {
          background-image: url('/bg.png');
          background-size: cover;
          background-position: center;
        }

        @media (max-width: 768px) {
          .background-container {
            background-size: contain;
          }
        }
      `}</style>
    </div>
  );
};

export default Birthday;
