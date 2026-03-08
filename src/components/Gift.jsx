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
        className={`mt-4 w-full py-3 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 font-bold ${
          copied ? 'bg-green-100 text-green-700 border-green-200' : 'bg-[#1A1A1A] text-white hover:bg-[#C5A059] shadow-md'
        }`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Berhasil Disalin' : label}
      </button>
    );
  };

  return (
    <section className="py-24 px-6 bg-white relative">
      <FadeIn>
        <div className="text-center mb-16">
          <GiftIcon size={40} className="mx-auto mb-6 text-[#C5A059]" />
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Wedding Gift</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Bagi sahabat/rekan sekalian yang ingin mengirimkan kado pernikahan atau tanda kasih, dapat mengirimkannya melalui tautan di bawah ini.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingData.gifts.banks.map((bank, index) => (
            <div key={index} className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#eaddcf] relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CreditCard className="absolute -right-6 -bottom-6 w-32 h-32 text-[#C5A059] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[#C5A059]/10 text-[#C5A059] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-[#C5A059]/20">
                  {bank.bankName}
                </div>
                <p className="text-xl tracking-widest text-[#1A1A1A] font-mono font-bold mb-2">{bank.accountNumber}</p>
                <p className="text-sm text-gray-600 mb-6 font-serif italic">a.n. {bank.accountName}</p>
                <CopyButton text={bank.accountNumber} label="Salin Rekening" />
              </div>
            </div>
          ))}
          
          <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#333] text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative z-10 text-white">
              <GiftIcon className="mx-auto mb-4 text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="font-bold mb-3 font-serif text-xl text-[#C5A059]">Kirim Kado Fisik</p>
              <p className="text-sm font-semibold tracking-wider">{weddingData.gifts.physicalAddress.receiverName}</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed px-2">{weddingData.gifts.physicalAddress.address}</p>
            </div>
            <div className="mt-6">
              <CopyButton text={weddingData.gifts.physicalAddress.address} label="Salin Alamat" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Gift;