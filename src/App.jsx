import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, CreditCard, Gift, Copy, Check, Music } from 'lucide-react';

// --- DATA UNDANGAN ---
// Menggunakan data yang Anda berikan, dengan placeholder untuk data yang kosong
const weddingData = {
  groom: {
    fullName: "Yusri Adi Januar",
    nickname: "Adhi",
    father: "Wagirin",
    mother: "Wasidah",
    childOrder: "Putra", 
  },
  bride: {
    fullName: "Dista Puspita Purnomo",
    nickname: "Dista",
    father: "Pujo Wiyono",
    mother: "Destri Safitri Sarwanti",
    childOrder: "Putri",
  },
  events: {
    akad: {
      title: "Akad Nikah",
      dateStr: "Kamis, [Tanggal] [Bulan] [Tahun]",
      time: "09.00 WIB - Selesai",
      location: "Kediaman Mempelai Wanita",
      address: "Brangkal Rt 53, Rw 17 Banyuroto, Nanggulan, Kulon Progo",
      mapsLink: "#", // Placeholder
    },
    ngunduhMantu: {
      title: "Ngunduh Mantu",
      dateStr: "Kamis, [Tanggal] [Bulan] [Tahun]",
      time: "13.00 WIB - Selesai",
      location: "Kediaman Mempelai Pria (Bpk Wagirin)",
      address: "Tegiri 2 Rt 50, Rw 19 Hargowilis, Kokap, Kulon Progo",
      mapsLink: "https://goo.gl/maps/tefvi8jPct8GfcQn6",
    }
  },
  gifts: {
    banks: [
      { bankName: "BCA", accountNumber: "[Nomor Rekening BCA]", accountName: "Yusri Adi Januar" },
      { bankName: "DANA", accountNumber: "[Nomor DANA]", accountName: "Dista Puspita Purnomo" }
    ],
    physicalAddress: {
      receiverName: "Adhi / Dista",
      address: "[Alamat lengkap pengiriman kado fisik beserta kode pos]"
    }
  },
  quote: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
  surah: "QS. Ar-Rum Ayat 21"
};

// --- KOMPONEN UTAMA ---
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);

  // Ambil nama dari parameter URL (?to=Nama)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
    // Di sini Anda bisa menambahkan logika audio.play() jika ada lagu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F3EE] font-sans text-[#1A1A1A] relative overflow-x-hidden selection:bg-[#967041] selection:text-white">
      
      {/* --- COVER OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-50 bg-[#F7F3EE] flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${isOpened ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="absolute top-0 left-0 w-full h-full border-[12px] border-[#1A1A1A] opacity-5 pointer-events-none"></div>
        
        <p className="text-[#967041] tracking-[0.2em] text-sm uppercase mb-4">The Wedding Of</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-8 text-center px-4">
          Adhi & Dista
        </h1>
        
        <div className="text-center mt-12 mb-12">
          <p className="text-sm text-gray-600 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <p className="text-2xl font-serif font-semibold text-[#1A1A1A] border-b border-[#967041] pb-1 px-4 inline-block">
            {guestName}
          </p>
        </div>

        <button 
          onClick={handleOpen}
          className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-[#967041] transition-colors duration-300 tracking-wider text-sm flex items-center gap-2 shadow-lg"
        >
          Buka Undangan
        </button>
      </div>

      {/* --- KONTEN UTAMA (Muncul setelah tombol ditekan) --- */}
      {isOpened && (
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative animate-[fadeIn_1s_ease-in-out]">
          
          {/* Hero Section */}
          <section className="py-20 px-6 text-center relative bg-[#F7F3EE]">
            <div className="w-16 h-16 bg-[#967041] rounded-full flex items-center justify-center mx-auto mb-6 bg-opacity-10 text-[#967041]">
              <span className="font-serif text-2xl font-bold">A&D</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Assalamu'alaikum <br/> Warahmatullahi Wabarakatuh</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
            </p>
          </section>

          {/* Profile Section */}
          <section className="py-16 px-6 relative bg-white border-y border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-[#967041] mb-2">{weddingData.groom.fullName}</h3>
              <p className="text-sm text-gray-600">{weddingData.groom.childOrder} dari<br/>Bapak {weddingData.groom.father} & Ibu {weddingData.groom.mother}</p>
            </div>

            <div className="flex justify-center items-center text-[#967041] font-serif text-4xl mb-12 italic">
              &
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-serif font-bold text-[#967041] mb-2">{weddingData.bride.fullName}</h3>
              <p className="text-sm text-gray-600">{weddingData.bride.childOrder} dari<br/>Bapak {weddingData.bride.father} & Ibu {weddingData.bride.mother}</p>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-16 px-6 bg-[#1A1A1A] text-white">
            <h2 className="text-2xl font-serif font-bold text-center mb-10 text-[#967041] tracking-widest uppercase">Rangkaian Acara</h2>
            
            <div className="space-y-8">
              {/* Akad */}
              <div className="bg-[#262626] p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-serif font-bold text-[#967041] mb-4">{weddingData.events.akad.title}</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-3"><Calendar size={18} className="text-[#967041]" /> {weddingData.events.akad.dateStr}</p>
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#967041]" /> {weddingData.events.akad.time}</p>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#967041] flex-shrink-0 mt-1" />
                    <p>{weddingData.events.akad.location}<br/><span className="text-xs text-gray-500">{weddingData.events.akad.address}</span></p>
                  </div>
                </div>
              </div>

              {/* Ngunduh Mantu */}
              <div className="bg-[#262626] p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-serif font-bold text-[#967041] mb-4">{weddingData.events.ngunduhMantu.title}</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-3"><Calendar size={18} className="text-[#967041]" /> {weddingData.events.ngunduhMantu.dateStr}</p>
                  <p className="flex items-center gap-3"><Clock size={18} className="text-[#967041]" /> {weddingData.events.ngunduhMantu.time}</p>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#967041] flex-shrink-0 mt-1" />
                    <p>{weddingData.events.ngunduhMantu.location}<br/><span className="text-xs text-gray-500">{weddingData.events.ngunduhMantu.address}</span></p>
                  </div>
                </div>
                <a 
                  href={weddingData.events.ngunduhMantu.mapsLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 w-full inline-block text-center bg-[#967041] text-white py-2 rounded-lg text-sm hover:bg-[#7a5b34] transition-colors"
                >
                  Buka Google Maps
                </a>
              </div>
            </div>
          </section>

          {/* Wedding Gift Section */}
          <section className="py-16 px-6 bg-[#F7F3EE]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Wedding Gift</h2>
              <p className="text-sm text-gray-600">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
            </div>

            <div className="space-y-4">
              {weddingData.gifts.banks.map((bank, index) => (
                <BankAccount key={index} bank={bank} />
              ))}
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#Eaddcf] text-center">
                <Gift className="mx-auto mb-3 text-[#967041]" size={32} />
                <p className="font-bold text-[#1A1A1A] mb-1">Kirim Kado Fisik</p>
                <p className="text-sm text-gray-600 mb-2">Penerima: {weddingData.gifts.physicalAddress.receiverName}</p>
                <p className="text-xs text-gray-500 mb-4">{weddingData.gifts.physicalAddress.address}</p>
                <CopyButton text={weddingData.gifts.physicalAddress.address} label="Salin Alamat" />
              </div>
            </div>
          </section>

          {/* Quote Section & Footer */}
          <section className="py-16 px-6 text-center bg-white">
            <p className="text-sm text-gray-600 italic leading-relaxed mb-4">"{weddingData.quote}"</p>
            <p className="font-bold text-[#967041]">{weddingData.surah}</p>
            
            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
              <p className="font-serif font-bold text-xl text-[#1A1A1A] mt-6">Wassalamu'alaikum Wr. Wb.</p>
              <h3 className="font-serif text-3xl text-[#967041] mt-4">Adhi & Dista</h3>
            </div>
          </section>

          {/* Floating Music Button */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#1A1A1A] text-[#967041] rounded-full flex items-center justify-center shadow-lg border border-[#967041] z-40"
          >
            <Music size={20} className={isPlaying ? 'animate-pulse' : ''} />
          </button>
        </div>
      )}
    </div>
  );
}

// --- KOMPONEN BANTUAN ---

// Komponen Rekening Bank dengan fitur Salin
function BankAccount({ bank }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#Eaddcf]">
      <div className="flex justify-between items-center mb-4">
        <CreditCard className="text-[#967041]" />
        <span className="font-bold text-[#1A1A1A]">{bank.bankName}</span>
      </div>
      <p className="text-2xl tracking-widest text-[#1A1A1A] font-mono mb-1">{bank.accountNumber}</p>
      <p className="text-sm text-gray-500 mb-4">a.n. {bank.accountName}</p>
      <CopyButton text={bank.accountNumber} label="Salin No. Rekening" />
    </div>
  );
}

// Komponen Tombol Salin (Copy to Clipboard)
function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // navigator.clipboard.writeText bisa diblokir jika tidak HTTPS atau dalam Iframe
    // menggunakan fallback document.execCommand untuk kompatibilitas
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <button 
      onClick={handleCopy}
      className={`w-full py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors ${
        copied ? 'bg-green-100 text-green-700' : 'bg-[#F7F3EE] text-[#1A1A1A] hover:bg-[#eaddcf]'
      }`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Tersalin!' : label}
    </button>
  );
}