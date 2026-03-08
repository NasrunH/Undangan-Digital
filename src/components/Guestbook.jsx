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
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    if (guestNameFromUrl && guestNameFromUrl !== 'Teman & Sahabat') {
      setName(guestNameFromUrl);
    }
    fetchMessages();
  }, [guestNameFromUrl]);

  const triggerAlert = (msg, type = 'success') => {
    setAlertInfo({ show: true, message: msg, type });
    setTimeout(() => setAlertInfo(prev => ({ ...prev, show: false })), 3000);
  };

  const fetchMessages = async () => {
    setIsFetching(true);
    try {
      const { data, error } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      if (data) setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsLoading(true);

    try {
      const { data, error } = await supabase.from('guestbook').insert([{ name, attendance, message }]).select();
      if (error) throw error;
      setMessage('');
      if (data) setMessages([data[0], ...messages]);
      triggerAlert("Terima kasih atas doa dan ucapan Anda!", "success");
    } catch (error) {
      triggerAlert("Gagal mengirim pesan. Silakan coba lagi.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pola Abstract */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Custom Alert */}
      <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 w-[90%] max-w-sm md:max-w-md ${alertInfo.show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'} ${alertInfo.type === 'success' ? 'bg-white border-b-4 border-[#C5A059]' : 'bg-red-50 border-b-4 border-red-500'}`}>
        {alertInfo.type === 'success' ? <CheckCircle className="text-[#C5A059] shrink-0" size={24} /> : <AlertCircle className="text-red-500 shrink-0" size={24} />}
        <p className={`text-sm font-bold tracking-wide flex-1 ${alertInfo.type === 'success' ? 'text-[#1A1A1A]' : 'text-red-700'}`}>{alertInfo.message}</p>
        <button onClick={() => setAlertInfo({ ...alertInfo, show: false })} className="text-gray-400 hover:text-gray-800"><X size={18} /></button>
      </div>

      <FadeIn>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-sans font-bold mb-4 text-[#C5A059] tracking-[0.3em] uppercase">Buku Tamu</h2>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Ucapan & Doa</h3>
            <p className="text-sm text-gray-400">Berikan ucapan, harapan, dan doa restu untuk kedua mempelai.</p>
          </div>

          {/* Form Area Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] mb-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#C5A059] mb-2 uppercase tracking-wider">Nama Anda</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama Anda..." className="w-full px-5 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:border-[#C5A059] bg-[#1A1A1A]/50 text-white placeholder-gray-500 transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#C5A059] mb-2 uppercase tracking-wider">Konfirmasi Kehadiran</label>
                <select value={attendance} onChange={(e) => setAttendance(e.target.value)} className="w-full px-5 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:border-[#C5A059] bg-[#1A1A1A]/50 text-white transition-colors [&>option]:bg-[#1A1A1A]">
                  <option value="Hadir">Akan Hadir</option>
                  <option value="Tidak Hadir">Maaf, Tidak Bisa Hadir</option>
                  <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#C5A059] mb-2 uppercase tracking-wider">Ucapan & Doa</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tuliskan harapan dan doa Anda di sini..." rows="4" className="w-full px-5 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:border-[#C5A059] bg-[#1A1A1A]/50 text-white placeholder-gray-500 resize-none transition-colors" required></textarea>
              </div>
              <button type="submit" disabled={isLoading} className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold tracking-[0.2em] uppercase text-sm transition-all shadow-lg ${isLoading ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-[#C5A059] text-[#1A1A1A] hover:bg-white'}`}>
                {isLoading ? 'MENGIRIM...' : 'KIRIM UCAPAN'} {!isLoading && <Send size={18} />}
              </button>
            </form>
          </div>

          {/* List Komentar */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl text-[#C5A059] border-b border-white/10 pb-4">
              {messages.length} Ucapan Terkirim
            </h4>

            {isFetching ? (
              <p className="text-center text-[#C5A059] py-8 animate-pulse">Memuat ucapan...</p>
            ) : messages.length === 0 ? (
              <p className="text-center text-gray-500 py-8 bg-white/5 rounded-2xl border border-dashed border-white/20">
                Belum ada ucapan. Jadilah yang pertama!
              </p>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#C5A059] shrink-0 border border-[#C5A059]/30 shadow-inner">
                        <UserCircle2 size={26} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h5 className="font-bold text-white text-lg">{msg.name}</h5>
                          {msg.attendance === 'Hadir' && <span className="flex items-center gap-1 text-[10px] font-bold bg-green-900/40 text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider"><CheckCircle2 size={12} /> Hadir</span>}
                          {msg.attendance === 'Tidak Hadir' && <span className="flex items-center gap-1 text-[10px] font-bold bg-red-900/40 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider"><XCircle size={12} /> Absen</span>}
                        </div>
                        <p className="text-xs text-[#C5A059] flex items-center gap-1.5 mb-4">
                          <Clock size={12} /> {formatDate(msg.created_at)}
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
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