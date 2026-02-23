import React, { useState } from 'react';
import { Gift as GiftIcon, CreditCard, Copy, Check } from 'lucide-react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Gift = () => {
  const CopyButton = ({ text, label }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {}
      document.body.removeChild(textArea);
    };

    return (
      <button 
        onClick={handleCopy}
        className={`mt-4 w-full py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-300 font-semibold ${
          copied ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-white text-[#1A1A1A] hover:bg-[#eaddcf] border border-[#eaddcf] shadow-sm'
        }`}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? 'Berhasil Disalin!' : label}
      </button>
    );
  };

  return (
    <section className="py-24 px-6 bg-[#F7F3EE]">
      <FadeIn>
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#967041] shadow-md">
            <GiftIcon size={28} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Wedding Gift</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Bagi sahabat/rekan sekalian yang ingin mengirimkan kado pernikahan atau tanda kasih, dapat mengirimkannya melalui tautan di bawah ini.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {weddingData.gifts.banks.map((bank, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-[#eaddcf] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <CreditCard className="absolute -right-6 -bottom-6 w-32 h-32 text-[#F7F3EE] opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[#1A1A1A] text-white px-4 py-1.5 rounded-md text-xs font-bold tracking-wider mb-6">
                  {bank.bankName}
                </div>
                <p className="text-2xl tracking-widest text-[#1A1A1A] font-mono font-bold mb-2">{bank.accountNumber}</p>
                <p className="text-sm text-gray-600 mb-6">a.n. {bank.accountName}</p>
                <CopyButton text={bank.accountNumber} label="Salin No. Rekening" />
              </div>
            </div>
          ))}
          
          <div className="bg-white p-8 rounded-2xl border border-[#eaddcf] text-center shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <p className="font-bold text-[#1A1A1A] mb-3 font-serif text-xl">Kirim Kado Fisik</p>
              <p className="text-sm text-gray-800 font-semibold">{weddingData.gifts.physicalAddress.receiverName}</p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed px-2">{weddingData.gifts.physicalAddress.address}</p>
            </div>
            <CopyButton text={weddingData.gifts.physicalAddress.address} label="Salin Alamat" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Gift;