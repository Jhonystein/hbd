// components/ModalLetter.tsx

import React from "react";

interface ModalLetterProps {
  onClose: () => void; // Properti untuk menutup modal
}

const ModalLetter: React.FC<ModalLetterProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="bg-gray-100 fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-4 md:p-8 w-full max-w-md md:max-w-lg rounded-lg overflow-y-auto max-h-full">
          <h2 className="text-lg font-bold mb-4">HAI!</h2>
          <p className="text-gray-700 mb-4">
            yapp! pacar aku hari ini ultah, happy birthday ayy. sorry ya kalo
            ngucapin nya lama, aku harap di umur kamu yang ini, kamu
            pemikirannya di dewasain lagi, sikap childish nya di kurangin, dan
            aku berharap, apapun doa atau keinginan kamu bisa kamu dapetin, dan
            jangan lupa nikmati semua proses untuk mencapainya. tetap semangat
            karena aku yakin semua keinginan kamu bisa tercapai, dan jangan
            berkecil hati kalau semisalnya kamu gagal. karna kegagalan adalah
            sebuah proses dan kunci dari semua kesuksesan, percayalah. tetaplah
            bermimpi setinggi langit, dan berusahalah untuk meraih semua
            impianmu aku bakalan tetep disini. aku ga akan ninggalin kamu, aku
            akan jadi sistem pendukung yang #10000000% yang baik untuk kamu,
            always healthy and wish u all the best, inget. aku selalu di sini
            untuk kamu, di sampingmu. selalu. AND I LOVE U IN EVERY UNIVERSE
          </p>
          <button
            onClick={onClose}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg mt-4"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLetter;
