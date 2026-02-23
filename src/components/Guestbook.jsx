import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, UserCircle2, Clock, XCircle, CheckCircle, AlertCircle, X } from 'lucide-react';
import { supabase } from '../supabaseClient';
import FadeIn from './FadeIn';

const Guestbook = ({ guestNameFromUrl }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Hadir');
  const [message, setMessage] = useState('');
  
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // State untuk Custom Alert
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', type: 'success' });

  // Set nama dari URL sebagai default
  useEffect(() => {
    if (guestNameFromUrl && guestNameFromUrl !== 'Teman & Sahabat') {
      setName(guestNameFromUrl);
    }
    fetchMessages();
  }, [guestNameFromUrl]);

  // Fungsi memunculkan alert menarik
  const triggerAlert = (msg, type = 'success') => {
    setAlertInfo({ show: true, message: msg, type });
    // Otomatis hilang setelah 3 detik
    setTimeout(() => {
      setAlertInfo(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  // Fungsi mengambil pesan dari Supabase
  const fetchMessages = async () => {
    setIsFetching(true);
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsFetching(false);
    }
  };

  // Fungsi format tanggal
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Fungsi Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('guestbook')
        .insert([
          { name: name, attendance: attendance, message: message }
        ])
        .select();

      if (error) throw error;

      setMessage('');
      if (data) {
        setMessages([data[0], ...messages]);
      }
      
      // Memanggil alert sukses (Mengganti fungsi alert bawaan)
      triggerAlert("Terima kasih atas doa dan ucapan Anda!", "success");

    } catch (error) {
      console.error("Error inserting message:", error);
      // Memanggil alert gagal
      triggerAlert("Gagal mengirim pesan. Silakan coba lagi.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-white border-y border-[#eaddcf] relative">
      
      {/* KODE CUSTOM ALERT (Notifikasi Melayang) */}
      <div 
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-500 w-[90%] max-w-sm md:max-w-md ${
          alertInfo.show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } ${
          alertInfo.type === 'success' 
            ? 'bg-white border-b-4 border-[#967041]' 
            : 'bg-red-50 border-b-4 border-red-500'
        }`}
      >
        {alertInfo.type === 'success' ? (
          <CheckCircle className="text-[#967041] shrink-0" size={24} />
        ) : (
          <AlertCircle className="text-red-500 shrink-0" size={24} />
        )}
        <p className={`text-sm font-bold tracking-wide flex-1 ${alertInfo.type === 'success' ? 'text-[#1A1A1A]' : 'text-red-700'}`}>
          {alertInfo.message}
        </p>
        <button 
          onClick={() => setAlertInfo({ ...alertInfo, show: false })} 
          className="text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      {/* AKHIR CUSTOM ALERT */}

      <FadeIn>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-sans font-bold mb-4 text-[#967041] tracking-[0.3em] uppercase">Buku Tamu</h2>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Ucapan & Doa</h3>
            <p className="text-sm text-gray-600">Berikan ucapan, harapan, dan doa restu untuk kedua mempelai.</p>
          </div>

          {/* Form Area */}
          <div className="bg-[#F7F3EE] p-6 md:p-8 rounded-2xl border border-[#eaddcf] shadow-sm mb-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider">Nama Anda</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda..."
                  className="w-full px-4 py-3 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#967041] bg-white text-[#1A1A1A]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider">Konfirmasi Kehadiran</label>
                <select 
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#967041] bg-white text-[#1A1A1A]"
                >
                  <option value="Hadir">Akan Hadir</option>
                  <option value="Tidak Hadir">Maaf, Tidak Bisa Hadir</option>
                  <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 uppercase tracking-wider">Ucapan & Doa</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan harapan dan doa Anda di sini..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-[#eaddcf] focus:outline-none focus:ring-2 focus:ring-[#967041] bg-white text-[#1A1A1A] resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold tracking-wider text-white transition-all ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1A1A1A] hover:bg-[#967041]'
                }`}
              >
                {isLoading ? 'MENGIRIM...' : 'KIRIM UCAPAN'} 
                {!isLoading && <Send size={18} />}
              </button>
            </form>
          </div>

          {/* List Komentar */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-[#1A1A1A] border-b border-[#eaddcf] pb-3">
              {messages.length} Ucapan
            </h4>

            {isFetching ? (
              <p className="text-center text-gray-500 py-8 animate-pulse">Memuat ucapan...</p>
            ) : messages.length === 0 ? (
              <p className="text-center text-gray-500 py-8 bg-[#F7F3EE] rounded-xl border border-dashed border-[#eaddcf]">
                Belum ada ucapan. Jadilah yang pertama!
              </p>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-[#F7F3EE] p-5 rounded-xl border border-[#eaddcf]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#967041] shrink-0 border border-[#eaddcf]">
                        <UserCircle2 size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h5 className="font-bold text-[#1A1A1A]">{msg.name}</h5>
                          {msg.attendance === 'Hadir' && (
                            <span className="flex items-center gap-1 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              <CheckCircle2 size={10} /> Hadir
                            </span>
                          )}
                           {msg.attendance === 'Tidak Hadir' && (
                            <span className="flex items-center gap-1 text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              <XCircle size={10} /> Tidak Hadir
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                          <Clock size={12} /> {formatDate(msg.created_at)}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Guestbook;