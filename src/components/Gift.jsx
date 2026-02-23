const Gift = () => {
  // Helper Component di dalam file Gift.jsx
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
        className={`mt-3 w-full py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-all duration-300 font-medium ${
          copied ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-[#F7F3EE] text-[#1A1A1A] hover:bg-[#eaddcf] border border-transparent'
        }`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Berhasil Disalin!' : label}
      </button>
    );
  };

  return (
    <section className="py-20 px-6 bg-white border-y border-[#eaddcf]">
      <div className="text-center mb-12">
        <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mx-auto mb-4 text-[#967041]">
          <Gift size={24} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Wedding Gift</h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-[280px] mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>
      </div>

      <div className="space-y-6">
        {weddingData.gifts.banks.map((bank, index) => (
          <div key={index} className="bg-[#F7F3EE] p-6 rounded-2xl border border-[#eaddcf] relative overflow-hidden">
            <CreditCard className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-block bg-[#1A1A1A] text-white px-3 py-1 rounded text-xs font-bold tracking-wider mb-4">
                {bank.bankName}
              </div>
              <p className="text-2xl tracking-widest text-[#1A1A1A] font-mono font-bold mb-1">{bank.accountNumber}</p>
              <p className="text-sm text-gray-600 mb-6">a.n. {bank.accountName}</p>
              <CopyButton text={bank.accountNumber} label="Salin No. Rekening" />
            </div>
          </div>
        ))}
        
        <div className="bg-white p-6 rounded-2xl border border-[#eaddcf] text-center shadow-sm">
          <p className="font-bold text-[#1A1A1A] mb-2 font-serif text-lg">Kirim Kado Fisik</p>
          <p className="text-sm text-gray-800 font-medium">{weddingData.gifts.physicalAddress.receiverName}</p>
          <p className="text-xs text-gray-500 mt-2 mb-6 leading-relaxed px-4">{weddingData.gifts.physicalAddress.address}</p>
          <CopyButton text={weddingData.gifts.physicalAddress.address} label="Salin Alamat" />
        </div>
      </div>
    </section>
  );
};