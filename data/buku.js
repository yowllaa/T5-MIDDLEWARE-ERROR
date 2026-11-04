// Penyimpanan sementara dalam memori. Data akan kembali ke kondisi awal saat server restart.
const buku = [
  { id: 1, judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005, stok: 8, kategori: 'novel' },
  { id: 2, judul: 'Sapiens', penulis: 'Yuval Noah Harari', tahun: 2011, stok: 4, kategori: 'sains' },
  { id: 3, judul: 'Sejarah Indonesia Modern', penulis: 'M.C. Ricklefs', tahun: 2008, stok: 3, kategori: 'sejarah' },
  { id: 4, judul: 'Tafsir Al-Misbah', penulis: 'M. Quraish Shihab', tahun: 2002, stok: 6, kategori: 'agama' },
  { id: 5, judul: 'Bumi', penulis: 'Tere Liye', tahun: 2014, stok: 10, kategori: 'novel' }
];
export default buku;
