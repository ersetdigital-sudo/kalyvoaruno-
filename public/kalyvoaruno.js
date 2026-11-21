/* script 0 */

/* ============================================================
   data.js — identitas situs, katalog, FAQ, konten legal.
   Menambah game / layanan = menambah satu objek di GAMES / PPOB.
   ============================================================ */

/* Identitas & kontak. Baris yang dikosongkan otomatis disembunyikan. */
const SITE = {
  name: 'Kalyvoaruno Games',
  first: 'kalyvoaruno',
  second: 'games',
  email: 'halo@kalyvoarunogames.com',
  hours: 'Setiap hari, 08.00–22.00 WIB',
  phone: '',
  whatsapp: '',
  address: '',
  legalName: ''
};

/* Metode bayar. fee: persen dari total, atau flat. Dibulatkan ke atas. */
const PAY_METHODS = [
  { id: 'qris',      name: 'QRIS',             desc: 'Semua e-wallet & m-banking', mark: 'QR', color: '#121212', fee: { type: 'percent', value: 0.7 } }
];


const mk = (pre, list, unit) => list.map((r, i) => ({ id: pre + (i + 1), name: r[0], price: r[1], tag: r[2] || '', was: 0 }));

const GAMES = [
  { id: 'mlbb', name: 'Mobile Legends', cat: 'MOBA', color: '#1F5FFF', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzBDMEUwOSIvPjxwYXRoIGQ9Ik0xMDUgMTYwTDE2MCAxMDVIMjQwTDI5NSAxNjBMMjAwIDMwNVoiIGZpbGw9IiNGQ0ZGMUEiIHN0cm9rZT0iI0ZDRkYxQSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMDUgMTYwSDI5NU0xNjAgMTA1TDE4NSAxNjBMMjAwIDMwNU0yNDAgMTA1TDIxNSAxNjBMMjAwIDMwNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMEMwRTA5IiBzdHJva2Utd2lkdGg9IjkiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==', unit: 'Diamonds', desc: 'Top up Diamonds Mobile Legends: Bang Bang.',
    fields: [
      { key: 'id', label: 'User ID', digits: true, min: 6, max: 12, placeholder: '12345678', help: 'Buka profil di game untuk melihat User ID.' },
      { key: 'zone', label: 'Zone ID', digits: true, min: 3, max: 5, placeholder: '1234', help: 'Angka dalam kurung di samping User ID.' }],
    products: mk('d', [['3 Diamonds', 1200], ['12 Diamonds', 3500], ['59 Diamonds', 16000], ['86 Diamonds', 22500, 'Populer', 24000], ['172 Diamonds', 44000], ['257 Diamonds', 65000], ['514 Diamonds', 129000], ['Weekly Diamond Pass', 29500, 'Hemat']]) },
  { id: 'ff', name: 'Free Fire', cat: 'Battle Royale', color: '#FF8A00', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZGMjA3MCIvPjxwYXRoIGQ9Ik0yMDUgNzhDMjMyIDExOCAyODIgMTQ4IDI4MiAyMTRDMjgyIDI2NiAyNDYgMzA4IDIwMCAzMDhDMTU0IDMwOCAxMTggMjcwIDExOCAyMjJDMTE4IDE4NiAxMzYgMTYwIDE1NiAxNDJDMTU4IDE2NiAxNjggMTgwIDE4MCAxODZDMTc2IDE1MCAxODYgMTEwIDIwNSA3OFoiIGZpbGw9IiMwQzBFMDkiIHN0cm9rZT0iIzBDMEUwOSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMDMgMTg4QzIxOCAyMTIgMjM4IDIyNiAyMzggMjU2QzIzOCAyODAgMjIyIDI5NiAyMDAgMjk2QzE3OCAyOTYgMTY0IDI4MCAxNjQgMjU4QzE2NCAyMzYgMTg4IDIyNCAyMDMgMTg4WiIgZmlsbD0iI0ZGMjA3MCIvPjwvc3ZnPg==', unit: 'Diamonds', desc: 'Top up Diamonds Free Fire.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 8, max: 12, placeholder: '123456789', help: 'Player ID ada di halaman profil.' }],
    products: mk('d', [['12 Diamonds', 1900], ['50 Diamonds', 7500], ['70 Diamonds', 10000, 'Populer'], ['140 Diamonds', 19500], ['355 Diamonds', 49000], ['720 Diamonds', 98000], ['Membership Mingguan', 29000, 'Hemat']]) },
  { id: 'pubg', name: 'PUBG Mobile', cat: 'Battle Royale', color: '#D9A400', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZDRkYxQSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTE4IiBmaWxsPSIjMEMwRTA5Ii8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSI5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkNGRjFBIiBzdHJva2Utd2lkdGg9IjkiLz48dGV4dCB4PSIyMDAiIHk9IjIzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIEJsYWNrLEFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iODgiIGxldHRlci1zcGFjaW5nPSItMiIgZmlsbD0iI0ZDRkYxQSI+VUM8L3RleHQ+PC9zdmc+', unit: 'UC', desc: 'Top up UC PUBG Mobile.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 8, max: 12, placeholder: '5123456789', help: 'Player ID ada di halaman profil.' }],
    products: mk('u', [['60 UC', 15000], ['325 UC', 77000, 'Populer'], ['660 UC', 152000], ['1.800 UC', 380000], ['3.850 UC', 760000], ['8.100 UC', 1520000]]) },
  { id: 'genshin', name: 'Genshin Impact', cat: 'RPG', color: '#6E56F0', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzBDMEUwOSIvPjxwYXRoIGQ9Ik0xOTAgNzhRMjA2IDE4MiAzMTggMTk4UTIwNiAyMTQgMTkwIDMxOFExNzQgMjE0IDYyIDE5OFExNzQgMTgyIDE5MCA3OFoiIGZpbGw9IiNGRjIwNzAiIHN0cm9rZT0iI0ZGMjA3MCIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCA0KSIvPjxwYXRoIGQ9Ik0zMTIgNjZRMzE4IDEwMCAzNDYgMTA2UTMxOCAxMTIgMzEyIDE0NlEzMDYgMTEyIDI3OCAxMDZRMzA2IDEwMCAzMTIgNjZaIiBmaWxsPSIjRkYyMDcwIi8+PC9zdmc+', unit: 'Genesis Crystals', desc: 'Top up Genesis Crystals Genshin Impact.',
    fields: [
      { key: 'id', label: 'UID', digits: true, min: 9, max: 10, placeholder: '800123456', help: 'UID tampil di pojok kanan bawah layar.' },
      { key: 'server', label: 'Server', type: 'select', options: ['Asia', 'America', 'Europe', 'TW, HK, MO'] }],
    products: mk('g', [['60 Genesis Crystals', 15000], ['300 + 30 Genesis Crystals', 75000], ['980 + 110 Genesis Crystals', 229000, 'Populer'], ['1.980 + 260 Genesis Crystals', 459000], ['3.280 + 600 Genesis Crystals', 749000], ['Blessing of the Welkin Moon', 69000, 'Hemat']]) },
  { id: 'valorant', name: 'Valorant', cat: 'FPS', color: '#FF4655', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZGMjA3MCIvPjxwYXRoIGQ9Ik04OCAxMThIMTY0TDIwMCAyMzJMMjM2IDExOEgzMTJMMjI0IDMwMEgxNzZaIiBmaWxsPSIjMEMwRTA5IiBzdHJva2U9IiMwQzBFMDkiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=', unit: 'VP', desc: 'Top up Valorant Points.',
    fields: [{ key: 'id', label: 'Riot ID', placeholder: 'NamaAnda#1234', pattern: '^.{3,16}#[A-Za-z0-9]{3,5}$', msg: 'Format Riot ID: Nama#TAG, lalu 3–5 huruf atau angka setelah tanda #.', help: 'Tulis lengkap beserta tanda # dan tag.' }],
    products: mk('v', [['475 VP', 49000], ['1.000 VP', 99000, 'Populer'], ['2.050 VP', 199000], ['3.650 VP', 349000], ['5.350 VP', 499000], ['11.000 VP', 999000]]) },
  { id: 'hok', name: 'Honor of Kings', cat: 'MOBA', color: '#E8B100', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZDRkYxQSIvPjxwYXRoIGQ9Ik0yMDAgODJMMzA0IDExOFYyMTBDMzA0IDI2OCAyNTggMzA0IDIwMCAzMjhDMTQyIDMwNCA5NiAyNjggOTYgMjEwVjExOFoiIGZpbGw9IiMwQzBFMDkiIHN0cm9rZT0iIzBDMEUwOSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNDYgMjMyTDE1NiAxNjBMMTg0IDE5NkwyMDAgMTU2TDIxNiAxOTZMMjQ0IDE2MEwyNTQgMjMyWiIgZmlsbD0iI0ZDRkYxQSIgc3Ryb2tlPSIjRkNGRjFBIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cmVjdCB4PSIxNDYiIHk9IjI0MCIgd2lkdGg9IjEwOCIgaGVpZ2h0PSIxNCIgcng9IjUiIGZpbGw9IiNGQ0ZGMUEiLz48L3N2Zz4=', unit: 'Tokens', desc: 'Top up Tokens Honor of Kings.',
    fields: [{ key: 'id', label: 'Player ID', digits: true, min: 6, max: 14, placeholder: '1234567890', help: 'Player ID ada di halaman profil.' }],
    products: mk('t', [['16 Tokens', 4000], ['80 Tokens', 19000], ['240 Tokens', 55000, 'Populer'], ['400 Tokens', 89000], ['800 Tokens', 175000], ['1.200 Tokens', 260000]]) },
  { id: 'roblox', name: 'Roblox', cat: 'Voucher', color: '#E2231A', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzBDMEUwOSIvPjxnIHRyYW5zZm9ybT0icm90YXRlKC0xNCAyMDAgMjAwKSI+PHJlY3QgeD0iMTA0IiB5PSIxMDQiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjgiIGZpbGw9IiNGQ0ZGMUEiLz48cmVjdCB4PSIxNjQiIHk9IjE2NCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTAiIGZpbGw9IiMwQzBFMDkiLz48L2c+PC9zdmc+', unit: 'Robux', desc: 'Top up Robux untuk akun Roblox.',
    fields: [{ key: 'id', label: 'Username Roblox', placeholder: 'NamaPengguna', pattern: '^[A-Za-z0-9_]{3,20}$', msg: 'Username 3–20 karakter: huruf, angka, atau garis bawah.', help: 'Pastikan username sesuai akun tujuan.' }],
    products: mk('r', [['80 Robux', 15000], ['400 Robux', 75000, 'Populer'], ['800 Robux', 149000], ['1.700 Robux', 299000], ['4.500 Robux', 749000]]) },
  { id: 'codm', name: 'Call of Duty Mobile', cat: 'FPS', color: '#2A2A2A', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZDRkYxQSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iOTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBDMEUwOSIgc3Ryb2tlLXdpZHRoPSIyNCIvPjxnIHN0cm9rZT0iIzBDMEUwOSIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMjAwIDY2VjExOE0yMDAgMjgyVjMzNE02NiAyMDBIMTE4TTI4MiAyMDBIMzM0Ii8+PC9nPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTYiIGZpbGw9IiMwQzBFMDkiLz48L3N2Zz4=', unit: 'CP', desc: 'Top up COD Points Call of Duty Mobile.',
    fields: [{ key: 'id', label: 'Open ID', digits: true, min: 8, max: 20, placeholder: '6742123456789', help: 'Open ID ada di pengaturan akun.' }],
    products: mk('c', [['31 CP', 5000], ['62 CP', 10000], ['127 CP', 20000], ['321 CP', 50000, 'Populer'], ['645 CP', 100000], ['1.373 CP', 210000], ['2.060 CP', 310000]]) },
  { id: 'steam', name: 'Steam Wallet', cat: 'Voucher', color: '#1B6FA8', cover: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0ZGMjA3MCIvPjxyZWN0IHg9Ijg0IiB5PSIxMTgiIHdpZHRoPSIyMzIiIGhlaWdodD0iMTY4IiByeD0iMzAiIGZpbGw9IiMwQzBFMDkiLz48cmVjdCB4PSIyMjQiIHk9IjE3OCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI1OCIgcng9IjI5IiBmaWxsPSIjRkYyMDcwIiBzdHJva2U9IiMwQzBFMDkiIHN0cm9rZS13aWR0aD0iMTAiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyMDciIHI9IjExIiBmaWxsPSIjMEMwRTA5Ii8+PC9zdmc+', unit: 'Steam Wallet', desc: 'Kode Steam Wallet dikirim ke email.',
    fields: [{ key: 'email', label: 'Email Penerima Kode', type: 'email', placeholder: 'nama@email.com', help: 'Kode voucher dikirim ke email ini.' }],
    products: mk('s', [['Steam Wallet Rp12.000', 14000], ['Steam Wallet Rp45.000', 50000], ['Steam Wallet Rp60.000', 66000], ['Steam Wallet Rp90.000', 99000, 'Populer'], ['Steam Wallet Rp120.000', 130000], ['Steam Wallet Rp250.000', 270000], ['Steam Wallet Rp400.000', 430000]]) },
];

const PHONE_FIELD = { key: 'phone', label: 'Nomor HP', type: 'phone', placeholder: '0812 3456 7890', help: 'Nomor tujuan, awalan 08 atau +62.' };

const PPOB = [
  { id: 'pulsa', name: 'Pulsa', group: 'Prabayar', icon: 'pulsa', color: '#D9480F', ink: '#fff', desc: 'Isi pulsa semua operator.',
    kw: 'isi pulsa telkomsel indosat xl axis tri smartfren',
    fields: [{ ...PHONE_FIELD, detect: true, operator: true }],
    products: mk('pl', [['Pulsa Rp5.000', 6500], ['Pulsa Rp10.000', 11500], ['Pulsa Rp15.000', 16500], ['Pulsa Rp20.000', 21500, 'Populer'], ['Pulsa Rp25.000', 26500], ['Pulsa Rp30.000', 31500], ['Pulsa Rp50.000', 51500], ['Pulsa Rp75.000', 76500], ['Pulsa Rp100.000', 101500]]) },
  { id: 'data', name: 'Paket Data', group: 'Prabayar', icon: 'data', color: '#2563EB', ink: '#fff', desc: 'Kuota internet semua operator.',
    kw: 'kuota internet gb paket data',
    fields: [{ ...PHONE_FIELD, detect: true, operator: true }],
    products: mk('dt', [['Data 1 GB / 3 hari', 9500], ['Data 3 GB / 30 hari', 24000], ['Data 6 GB / 30 hari', 42000], ['Data 12 GB / 30 hari', 68000, 'Populer', 72000], ['Data 25 GB / 30 hari', 99000], ['Data 45 GB / 30 hari', 139000]]) },
  { id: 'pln', name: 'Token PLN', group: 'Prabayar', icon: 'pln', color: '#A16207', ink: '#fff', desc: 'Beli token listrik prabayar.',
    kw: 'listrik token pln prabayar meteran',
    fields: [{ key: 'meter', label: 'Nomor Meter / ID Pelanggan', digits: true, min: 11, max: 12, placeholder: '12345678901', help: '11–12 digit, tertera di meteran atau struk sebelumnya.' }],
    products: mk('pn', [['Token Rp20.000', 22000], ['Token Rp50.000', 52500], ['Token Rp100.000', 102500, 'Populer', 104000], ['Token Rp200.000', 202500], ['Token Rp500.000', 502500], ['Token Rp1.000.000', 1002500]]) },
  { id: 'plnpasca', name: 'Tagihan Listrik Pascabayar', short: 'Listrik Pascabayar', group: 'Tagihan', postpaid: true, icon: 'pasca', color: '#0F766E', ink: '#fff', desc: 'Cek dan bayar tagihan listrik bulanan.',
    kw: 'listrik tagihan pascabayar pln bulanan',
    fields: [{ key: 'idpel', label: 'ID Pelanggan', digits: true, min: 12, max: 12, placeholder: '123456789012', help: '12 digit ID pelanggan PLN.' }] },
  { id: 'bpjs', name: 'BPJS Kesehatan', group: 'Tagihan', postpaid: true, icon: 'bpjs', color: '#15803D', ink: '#fff', desc: 'Bayar iuran BPJS Kesehatan.',
    kw: 'bpjs kesehatan iuran jkn',
    fields: [
      { key: 'va', label: 'Nomor VA Keluarga', digits: true, min: 11, max: 16, placeholder: '8888801234567890', help: 'Nomor Virtual Account keluarga BPJS.' },
      { key: 'months', label: 'Bayar untuk', type: 'select', options: ['1 bulan', '2 bulan', '3 bulan', '6 bulan', '12 bulan'] }] },
  { id: 'pdam', name: 'PDAM', group: 'Tagihan', postpaid: true, icon: 'pdam', color: '#0369A1', ink: '#fff', desc: 'Bayar tagihan air PDAM.',
    kw: 'air pdam tagihan',
    fields: [
      { key: 'area', label: 'Wilayah PDAM', type: 'select', options: ['Jakarta', 'Bandung', 'Surabaya', 'Semarang', 'Medan', 'Makassar', 'Yogyakarta', 'Denpasar'] },
      { key: 'idpel', label: 'Nomor Pelanggan', digits: true, min: 6, max: 14, placeholder: '1234567', help: 'Tertera di bukti tagihan air.' }] },
  { id: 'internet', name: 'Internet & TV', group: 'Tagihan', postpaid: true, icon: 'inet', color: '#4F46E5', ink: '#fff', desc: 'Tagihan internet rumah dan TV kabel.',
    kw: 'internet tv kabel wifi indihome biznet myrepublic',
    fields: [
      { key: 'provider', label: 'Penyedia', type: 'select', options: ['IndiHome', 'Biznet Home', 'MyRepublic', 'First Media', 'Oxygen.id'] },
      { key: 'idpel', label: 'Nomor Pelanggan', digits: true, min: 8, max: 14, placeholder: '1234567890', help: 'Tertera di bukti tagihan.' }] },
  { id: 'ewallet', name: 'Saldo E-Wallet', group: 'Prabayar', icon: 'ewallet', color: '#7E22CE', ink: '#fff', desc: 'Isi saldo DANA, OVO, GoPay, dan lainnya.',
    kw: 'dompet digital dana ovo gopay shopeepay linkaja saldo',
    fields: [
      { key: 'provider', label: 'E-Wallet', type: 'select', options: ['DANA', 'OVO', 'GoPay', 'ShopeePay', 'LinkAja'] },
      { ...PHONE_FIELD, label: 'Nomor Akun E-Wallet', help: 'Nomor HP yang terdaftar di e-wallet.' }],
    products: mk('ew', [['Saldo Rp20.000', 22000], ['Saldo Rp50.000', 52500, 'Populer'], ['Saldo Rp100.000', 102500], ['Saldo Rp200.000', 202500], ['Saldo Rp500.000', 502500]]) },
  { id: 'voucher', name: 'Voucher Digital', group: 'Prabayar', icon: 'voucher', color: '#BE185D', ink: '#fff', desc: 'Voucher belanja, musik, dan hiburan.',
    kw: 'voucher google play spotify netflix gift card',
    fields: [{ key: 'email', label: 'Email Penerima Voucher', type: 'email', placeholder: 'nama@email.com', help: 'Kode voucher dikirim ke email ini.' }],
    products: mk('vc', [['Google Play Rp50.000', 52500], ['Google Play Rp100.000', 102500, 'Populer'], ['Spotify Premium 1 Bulan', 55000], ['Netflix Gift Card Rp100.000', 105000], ['Voucher Belanja Rp100.000', 101500]]) }
];

GAMES.forEach(g => { g.kind = 'game'; });
PPOB.forEach(p => { p.kind = 'ppob'; });

const Catalog = {
  service(kind, id) { return (kind === 'game' ? GAMES : PPOB).find(s => s.id === id) || null; },
  product(svc, pid) { return (svc && svc.products || []).find(p => p.id === pid) || null; },
  href(svc, pid) { return '#/' + (svc.kind === 'game' ? 'topup' : 'isi-ulang') + '/' + svc.id + (pid ? '?p=' + pid : ''); },
  /* Pilihan kurasi beranda — ganti dengan data penjualan sebenarnya. */
  featured: [['ppob', 'pulsa', 'pl4'], ['ppob', 'pln', 'pn3'], ['ppob', 'data', 'dt4'], ['ppob', 'ewallet', 'ew2'], ['game', 'mlbb', 'd4'], ['game', 'ff', 'd3'], ['game', 'valorant', 'v2'], ['game', 'genshin', 'g3']]
};

const PAGES = [
  { label: 'Beranda', href: '#/', sub: 'Halaman utama', kw: 'home' },
  { label: 'PPOB', href: '#/isi-ulang', sub: 'Semua layanan PPOB', kw: 'tagihan pulsa listrik' },
  { label: 'Top Up Game', href: '#/topup', sub: 'Semua game', kw: 'topup diamond voucher' },
  { label: 'Cek Transaksi', href: '#/pesanan', sub: 'Cek status dengan nomor invoice', kw: 'riwayat invoice pesanan status' },
  { label: 'Bantuan', href: '#/bantuan', sub: 'FAQ & kontak', kw: 'faq kontak cs' },
  { label: 'Syarat & Ketentuan', href: '#/bantuan/syarat', sub: 'Aturan penggunaan layanan', kw: 'terms' },
  { label: 'Kebijakan Privasi', href: '#/bantuan/privasi', sub: 'Cara kami memakai data', kw: 'privacy data' }
];

const FAQ = [
  ['Bagaimana cara memesan?', 'Pilih layanan atau game, isi data tujuan, pilih nominal, lalu bayar lewat QRIS. Setelah pesanan dibuat, selesaikan pembayaran dari halaman detail pesanan.'],
  ['Apa saja metode pembayarannya?', 'Pembayaran lewat QRIS, bisa dibayar dari semua aplikasi e-wallet dan m-banking yang mendukung QRIS. Biaya admin ditampilkan sebelum Anda membayar.'],
  ['Berapa lama batas waktu pembayaran?', 'Setiap pesanan punya batas pembayaran 24 jam. Lewat dari itu, pesanan dibatalkan otomatis.'],
  ['Di mana saya memantau status pesanan?', 'Buka menu Cek Transaksi lalu masukkan nomor invoice. Status yang dipakai: Menunggu Pembayaran, Diproses, Berhasil, Gagal, dan Dibatalkan. Simpan nomor invoice Anda, karena riwayat tidak disimpan di situs ini.'],
  ['Salah memasukkan ID atau nomor tujuan, bagaimana?', 'Periksa kembali data sebelum membayar. Pesanan yang sudah berhasil diproses tidak dapat dibatalkan. Hubungi kami bila ada kendala dan siapkan nomor invoice Anda.'],
  ['Bisakah membatalkan pesanan?', 'Bisa, selama pesanan masih berstatus Menunggu Pembayaran. Buka detail pesanan lalu pilih Batalkan Pesanan.'],
  ['Apakah saya perlu membuat akun?', 'Tidak perlu. Situs ini juga tidak menyimpan riwayat pesanan di perangkat Anda. Cukup simpan nomor invoice untuk mengecek status pesanan.']
];

const LEGAL = {
  syarat: { title: 'Syarat & Ketentuan', items: [
    ['Penggunaan layanan', 'Dengan memakai situs ini, Anda menyatakan data yang dimasukkan benar dan transaksi dilakukan untuk keperluan yang sah.'],
    ['Ketepatan data', 'Anda bertanggung jawab atas ketepatan ID game, nomor tujuan, nomor pelanggan, atau email. Kesalahan input yang sudah berhasil diproses tidak dapat dibatalkan.'],
    ['Harga dan biaya', 'Harga dan biaya admin ditampilkan sebelum pesanan dibuat. Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.'],
    ['Pembayaran', 'Pesanan harus dibayar sebelum batas waktu yang tertera. Pesanan yang melewati batas waktu dibatalkan otomatis.'],
    ['Pemrosesan dan pengembalian dana', 'Pesanan diproses setelah pembayaran terkonfirmasi. Bila pesanan gagal, pengembalian dana mengikuti metode bayar yang digunakan.'],
    ['Perubahan ketentuan', 'Ketentuan dapat diperbarui dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini.']
  ] },
  privasi: { title: 'Kebijakan Privasi', items: [
    ['Data yang kami proses', 'Kami memproses data yang Anda isi untuk menyelesaikan pesanan, seperti ID game, nomor tujuan, email penerima, dan metode bayar.'],
    ['Riwayat tidak disimpan', 'Karena situs ini bersifat publik, riwayat pesanan tidak disimpan di perangkat Anda. Anda mengecek transaksi dengan nomor invoice yang diberikan saat pesanan dibuat.'],
    ['Penggunaan data', 'Data dipakai hanya untuk memproses pesanan, memberi dukungan, dan mencegah penyalahgunaan layanan.'],
    ['Berbagi data', 'Data dibagikan kepada penyedia pembayaran dan penyedia produk sebatas yang diperlukan untuk menyelesaikan transaksi.'],
    ['Pertanyaan', 'Untuk pertanyaan terkait privasi, hubungi kami lewat kontak di halaman Bantuan.']
  ] }
};



/* script 1 */

/* icons.js — ikon PPOB duotone (viewBox 48) + ikon UI (viewBox 24) + logo. Semua currentColor. */
const PPOB_ICONS = {
  pulsa: '<rect x="13" y="5" width="22" height="38" rx="6"/><path fill="none" d="M21 10h6M22 37h4"/>',
  data: '<circle cx="24" cy="24" r="17"/><path fill="none" d="M7 24h34M24 7c-7 6-7 28 0 34M24 7c7 6 7 28 0 34"/>',
  pln: '<path d="M27 4 10 27h12l-2 17 18-23H26z"/>',
  pasca: '<path d="M12 5h24v38l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path fill="none" d="M18 14h12M18 21h12M18 28h7"/>',
  bpjs: '<path d="M24 4 39 10v13c0 9-6 16-15 20C15 39 9 32 9 23V10z"/><path fill="none" d="M24 16v14M17 23h14"/>',
  pdam: '<path d="M24 4S11 19 11 29a13 13 0 0 0 26 0C37 19 24 4 24 4z"/><path fill="none" d="M18 30a6 6 0 0 0 6 6"/>',
  inet: '<rect x="5" y="9" width="38" height="26" rx="6"/><path fill="none" d="M17 42h14M16.5 22a10 10 0 0 1 15 0M20 26a5 5 0 0 1 8 0"/><circle cx="24" cy="30" r="1.2" fill="currentColor" stroke="none"/>',
  ewallet: '<rect x="5" y="11" width="38" height="28" rx="7"/><path fill="none" d="M9 11l24-6 3 6"/><rect x="28" y="21" width="15" height="10" rx="4" fill="none"/><circle cx="34" cy="26" r="1.3" fill="currentColor" stroke="none"/>',
  voucher: '<path d="M5 15a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v4a5 5 0 0 0 0 10v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-4a5 5 0 0 0 0-10z"/><path fill="none" stroke-dasharray="3 4" d="M30 13v22"/><path fill="none" d="M14 20h8M14 27h6"/>'
};

function ppobIcon(name, size) {
  const s = size ? ` width="${size}" height="${size}"` : '';
  return `<svg class="ico-ppob" viewBox="0 0 48 48"${s} aria-hidden="true" focusable="false"><g fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${PPOB_ICONS[name] || ''}</g></svg>`;
}

const UI_ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
  auto: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  home: '<path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  game: '<rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M15.5 11.5h.01M18 13.5h.01"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8h5M9.5 12h5"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',
  chevR: '<path d="m9 6 6 6-6 6"/>',
  chevL: '<path d="m15 6-6 6 6 6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v5M12 17.5h.01"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>'
};

function ui(name, size) {
  const s = size || 20;
  return `<svg class="ico" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${UI_ICONS[name] || ''}</svg>`;
}

function logoMark(size) {
  const s = size || 36;
  return `<svg class="logo__mark" viewBox="0 0 48 48" width="${s}" height="${s}" aria-hidden="true" focusable="false"><rect x="3" y="3" width="42" height="42" rx="13" fill="#0C0E09"/><path d="M16 12V36M16 25L31 12M20 23L32 36" fill="none" stroke="#FCFF1A" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="37" cy="11" r="4.5" fill="#FF2070"/></svg>`;
}

function logoFull() {
  return `<a class="logo" href="/" aria-label="${SITE.name} — Beranda">${logoMark(40)}<span class="logo__word"><b>${SITE.first}</b><span>${SITE.second}</span></span></a>`;
}



/* script 2 */

/* util.js — helper kecil */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rp = n => 'Rp' + Math.round(n || 0).toLocaleString('id-ID');
const delay = ms => new Promise(r => setTimeout(r, ms));
const REDUCED = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

function fmtDate(ts) {
  const d = new Date(ts);
  const tgl = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const jam = String(d.getHours()).padStart(2, '0') + '.' + String(d.getMinutes()).padStart(2, '0');
  return tgl + ', ' + jam;
}

function maskId(v) {
  v = String(v || '');
  if (v.includes('@')) {
    const [l, d] = v.split('@');
    return (l.slice(0, 2) + '•'.repeat(Math.max(2, l.length - 2))) + '@' + d;
  }
  if (v.length <= 4) return v.slice(0, 1) + '•'.repeat(Math.max(1, v.length - 1));
  return v.slice(0, 3) + '•'.repeat(v.length - 5) + v.slice(-2);
}
function maskName(n) { return String(n).split(' ').map(w => w[0] + '•'.repeat(Math.max(2, w.length - 1))).join(' '); }

function setTitle(t) { document.title = t ? t + ' — ' + SITE.name : SITE.name + ' — Semua Kebutuhan Digital, Satu Tempat'; }

function parseQuery(s) {
  const o = {}; new URLSearchParams(s || '').forEach((v, k) => { o[k] = v; }); return o;
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch (e) {
    try {
      const t = document.createElement('textarea'); t.value = text; t.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(t); t.select(); const ok = document.execCommand('copy'); t.remove(); return ok;
    } catch (e2) { return false; }
  }
}

/* Operator seluler dari awalan nomor. */
const OPERATORS = [
  ['Telkomsel', ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853']],
  ['Indosat', ['0814', '0815', '0816', '0855', '0856', '0857', '0858']],
  ['XL', ['0817', '0818', '0819', '0859', '0877', '0878']],
  ['Axis', ['0831', '0832', '0833', '0838']],
  ['Tri', ['0895', '0896', '0897', '0898', '0899']],
  ['Smartfren', ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']]
];
function normPhone(v) {
  let d = String(v || '').replace(/\D/g, '');
  if (d.startsWith('62')) d = '0' + d.slice(2);
  return d;
}
function detectOperator(v) {
  const d = normPhone(v);
  if (d.length < 4) return '';
  const hit = OPERATORS.find(o => o[1].includes(d.slice(0, 4)));
  return hit ? hit[0] : '';
}

/* Validasi satu field berdasarkan definisi di data.js. Mengembalikan pesan error atau ''. */
function validateField(f, raw) {
  const val = String(raw == null ? '' : raw).trim();
  if (!val) return f.type === 'select' ? `Pilih ${f.label.toLowerCase()}.` : `${f.label} wajib diisi.`;
  if (f.type === 'select') return f.options.includes(val) ? '' : `Pilihan ${f.label.toLowerCase()} tidak valid.`;
  if (f.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val) ? '' : 'Format email belum benar. Tulis seperti nama@email.com.';
  if (f.type === 'phone') {
    const d = normPhone(val);
    if (!/^08\d{8,11}$/.test(d)) return 'Nomor HP harus diawali 08 atau +62, panjang 10–13 digit.';
    if (f.operator && !detectOperator(d)) return 'Awalan nomor tidak dikenali sebagai operator seluler.';
    return '';
  }
  if (f.digits && !/^\d+$/.test(val)) return `${f.label} hanya boleh berisi angka.`;
  if (f.min && val.length < f.min) return `${f.label} minimal ${f.min} karakter.`;
  if (f.max && val.length > f.max) return `${f.label} maksimal ${f.max} karakter.`;
  if (f.pattern && !new RegExp(f.pattern).test(val)) return f.msg || `${f.label} belum sesuai format.`;
  return '';
}

function statusClass(s) {
  return ({ 'Menunggu Pembayaran': 'warn', 'Diproses': 'info', 'Berhasil': 'ok', 'Gagal': 'bad', 'Dibatalkan': 'mute' })[s] || 'mute';
}
function statusBadge(s) { return `<span class="badge badge--${statusClass(s)}">${esc(s)}</span>`; }

function svcIconHTML(svc, cls) {
  if (svc.kind === 'game') return `<img class="${cls || 'svc-cover'}" src="${svc.cover}" alt="" width="64" height="64" loading="lazy">`;
  return `<span class="${cls || 'svc-ico'} svc-ico" style="--c:${svc.color};--ink:${svc.ink}">${ppobIcon(svc.icon)}</span>`;
}



/* script 3 */

/* store.js — helper penyimpanan kecil. Situs ini publik: TIDAK ada riwayat pesanan yang disimpan di perangkat. */
const Store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } }
};



/* script 4 */

/* pricing.js — perhitungan harga UNTUK TAMPILAN di klien.
   Server WAJIB menghitung ulang harga dan biaya admin saat createOrder. */
const Pricing = {
  fee(method, base) {
    if (!method || base <= 0) return 0;
    return method.fee.type === 'percent' ? Math.ceil(base * method.fee.value / 100) : method.fee.value;
  },
  feeLabel(method) {
    return method.fee.type === 'percent' ? String(method.fee.value).replace('.', ',') + '%' : rp(method.fee.value);
  }
};



/* script 5 */

/* ============================================================
   api.js — SATU-SATUNYA pintu komunikasi ke server.

   KONTRAK (endpoint yang disarankan):
   inquireBill(payload)  POST /api/bills/inquiry   body {serviceId, fields}
        → BillInquiry { billRef, customerName, period, amount, adminFee, details:[{label,value}] }
   createOrder(payload)  POST /api/orders           body OrderPayload
        → Order
   getOrder(id)          GET  /api/orders/:id       → Order | null (404)
   payOrder(id)          POST /api/orders/:id/pay   → { order, redirectUrl? }
        Bila redirectUrl ada, UI mengarahkan ke gateway pembayaran.
   cancelOrder(id)       POST /api/orders/:id/cancel → Order

   OrderPayload {
     kind: 'game'|'ppob', serviceId, fields: {key: nilai},
     productId?  (prabayar / game),
     billRef?    (pascabayar, hasil inquireBill),
     methodId
   }
   Order {
     id (= nomor invoice), kind, serviceId, serviceName, productName,
     targets: [{label, value}],  subtotal, fee, total,
     methodId, methodName, status: 'Menunggu Pembayaran'|'Diproses'|'Berhasil'|'Gagal'|'Dibatalkan',
     createdAt, expiresAt, paidAt?, processingAt?, doneAt?, note?   (epoch ms)
   }
   Error: lempar ApiError(message) — pesan ditampilkan apa adanya di UI.

   Setelah go-live: hapus MockBackend, ganti isi objek Api dengan fetch().
   ============================================================ */

class ApiError extends Error {}

const MockBackend = {
  KEY: 'ka.mockdb',
  PROCESS_MS: 3500,
  EXPIRE_MS: 24 * 3600 * 1000,
  db() { try { return JSON.parse(sessionStorage.getItem(this.KEY) || '{}'); } catch (e) { return {}; } },
  save(db) { try { sessionStorage.setItem(this.KEY, JSON.stringify(db)); } catch (e) { /* abaikan */ } },
  hash(s) { return Array.from(String(s)).reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7); },
  NAMES: ['Budi Santoso', 'Siti Rahayu', 'Agus Wijaya', 'Dewi Lestari', 'Rizky Pratama', 'Nur Aini', 'Hendra Kusuma', 'Maya Sari'],

  async inquireBill({ serviceId, fields }) {
    await delay(700);
    const svc = Catalog.service('ppob', serviceId);
    if (!svc || !svc.postpaid) throw new ApiError('Layanan tidak mendukung cek tagihan.');
    for (const f of svc.fields) { const m = validateField(f, fields[f.key]); if (m) throw new ApiError(m); }
    const num = String(fields.idpel || fields.va || '');
    if (/(\d)\1{5,}$/.test(num)) throw new ApiError('Nomor pelanggan tidak ditemukan atau tidak punya tagihan aktif.');
    const h = this.hash(num + serviceId);
    const months = parseInt(fields.months, 10) || 1;
    const base = serviceId === 'bpjs' ? 42000 * months : 60000 + (h % 60) * 5000;
    const d = new Date();
    const period = d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    const details = [{ label: 'Periode', value: serviceId === 'bpjs' ? months + ' bulan' : period }];
    if (serviceId === 'plnpasca') details.push({ label: 'Tarif / Daya', value: 'R1 / ' + [900, 1300, 2200][h % 3] + ' VA' });
    if (serviceId === 'pdam') details.push({ label: 'Wilayah', value: fields.area });
    if (serviceId === 'internet') details.push({ label: 'Penyedia', value: fields.provider });
    return { billRef: 'BILL' + h.toString(36).toUpperCase() + months, customerName: this.NAMES[h % this.NAMES.length], period, amount: base, adminFee: 2500, details };
  },

  async createOrder(p) {
    await delay(600);
    const svc = Catalog.service(p.kind, p.serviceId);
    if (!svc) throw new ApiError('Layanan tidak ditemukan.');
    for (const f of svc.fields) { const m = validateField(f, p.fields && p.fields[f.key]); if (m) throw new ApiError(m); }
    const method = PAY_METHODS.find(m => m.id === p.methodId);
    if (!method) throw new ApiError('Metode pembayaran tidak valid.');
    let productName, subtotal;
    if (svc.postpaid) {
      const bill = await this.inquireBill({ serviceId: svc.id, fields: p.fields });
      if (bill.billRef !== p.billRef) throw new ApiError('Tagihan berubah. Silakan cek tagihan lagi.');
      productName = 'Tagihan ' + (svc.short || svc.name) + ' · ' + bill.period; subtotal = bill.amount + bill.adminFee;
    } else {
      const prod = Catalog.product(svc, p.productId);
      if (!prod) throw new ApiError('Produk tidak ditemukan.');
      productName = prod.name; subtotal = prod.price;
    }
    const fee = Pricing.fee(method, subtotal);
    const now = Date.now();
    const rnd = Array.from({ length: 6 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]).join('');
    const dt = new Date(now);
    const id = 'KA' + String(dt.getFullYear()).slice(2) + String(dt.getMonth() + 1).padStart(2, '0') + String(dt.getDate()).padStart(2, '0') + rnd;
    const order = {
      id, kind: p.kind, serviceId: svc.id, serviceName: svc.name, productId: p.productId || '', productName,
      targets: svc.fields.map(f => ({ label: f.label, value: p.fields[f.key], mask: f.type !== 'select' })),
      subtotal, fee, total: subtotal + fee,
      methodId: method.id, methodName: method.name, status: 'Menunggu Pembayaran',
      createdAt: now, expiresAt: now + this.EXPIRE_MS
    };
    const db = this.db(); db[id] = order; db.__used = true; this.save(db);
    return order;
  },

  /* Status berjalan otomatis: Diproses → Berhasil setelah ±3,5 dtk; menunggu → batal setelah 24 jam. */
  tick(o) {
    const now = Date.now();
    if (o.status === 'Diproses' && now - o.processingAt >= this.PROCESS_MS) { o.status = 'Berhasil'; o.doneAt = o.processingAt + this.PROCESS_MS; }
    if (o.status === 'Menunggu Pembayaran' && now >= o.expiresAt) { o.status = 'Dibatalkan'; o.doneAt = o.expiresAt; o.note = 'Melewati batas waktu pembayaran.'; }
    return o;
  },

  async getOrder(id) {
    await delay(150);
    const db = this.db(); const o = db[String(id).toUpperCase()];
    if (!o) return null;
    const before = o.status; this.tick(o);
    if (o.status !== before) { db[o.id] = o; this.save(db); }
    return o;
  },
  async payOrder(id) {
    await delay(500);
    const db = this.db(); const o = db[id];
    if (!o) throw new ApiError('Pesanan tidak ditemukan.');
    this.tick(o);
    if (o.status !== 'Menunggu Pembayaran') throw new ApiError('Pesanan ini tidak bisa dibayar lagi.');
    o.status = 'Diproses'; o.paidAt = o.processingAt = Date.now();
    db[id] = o; this.save(db);
    return { order: o };
  },
  async cancelOrder(id) {
    await delay(400);
    const db = this.db(); const o = db[id];
    if (!o) throw new ApiError('Pesanan tidak ditemukan.');
    this.tick(o);
    if (o.status !== 'Menunggu Pembayaran') throw new ApiError('Hanya pesanan yang menunggu pembayaran yang bisa dibatalkan.');
    o.status = 'Dibatalkan'; o.doneAt = Date.now(); o.note = 'Dibatalkan oleh Anda.';
    db[id] = o; this.save(db);
    return o;
  },
  reset() { try { sessionStorage.removeItem(this.KEY); } catch (e) { /* abaikan */ } }
};

const Api = {
  inquireBill: p => MockBackend.inquireBill(p),
  createOrder: p => MockBackend.createOrder(p),
  getOrder: id => MockBackend.getOrder(id),
  payOrder: id => MockBackend.payOrder(id),
  cancelOrder: id => MockBackend.cancelOrder(id)
};



/* script 6 */

/* toast.js */
const Toast = {
  show(msg, type) {
    const box = $('#toasts'); if (!box) return;
    const t = document.createElement('div');
    t.className = 'toast toast--' + (type || 'ok');
    t.innerHTML = (type === 'err' ? ui('alert', 18) : ui('check', 18)) + '<span>' + esc(msg) + '</span>';
    box.appendChild(t);
    setTimeout(() => t.classList.add('is-in'), 10);
    setTimeout(() => { t.classList.remove('is-in'); setTimeout(() => t.remove(), 250); }, 3200);
  }
};



/* script 7 */

/* sheet.js — dialog/bottom-sheet: focus-trap, Esc, kunci scroll, kembalikan fokus. */
const Sheet = {
  _open: 0,
  FOCUSABLE: 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',

  /* opts: {title, body(html), actions:[{label,value,kind}], variant, label, onMount(el, close)} → Promise<value|undefined> */
  show(opts) {
    return new Promise(resolve => {
      const prev = document.activeElement;
      const ov = document.createElement('div');
      ov.className = 'sheet-ov' + (opts.variant ? ' sheet-ov--' + opts.variant : '');
      const tid = 'sh-' + Math.random().toString(36).slice(2, 7);
      const acts = (opts.actions || []).map((a, i) => `<button type="button" class="btn btn--${a.kind || 'ghost'}" data-i="${i}">${esc(a.label)}</button>`).join('');
      ov.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" ${opts.title ? `aria-labelledby="${tid}"` : `aria-label="${esc(opts.label || 'Dialog')}"`}>
        ${opts.title ? `<div class="sheet__head"><h2 id="${tid}">${esc(opts.title)}</h2><button type="button" class="icon-btn" data-close aria-label="Tutup">${ui('x')}</button></div>` : ''}
        <div class="sheet__body">${opts.body || ''}</div>
        ${acts ? `<div class="sheet__foot">${acts}</div>` : ''}</div>`;
      $('#sheet-root').appendChild(ov);
      const dlg = $('.sheet', ov);
      if (this._open++ === 0) document.body.classList.add('lock');
      let done = false;
      const close = val => {
        if (done) return; done = true;
        document.removeEventListener('keydown', onKey, true);
        ov.classList.remove('is-open');
        setTimeout(() => ov.remove(), 200);
        if (--this._open === 0) document.body.classList.remove('lock');
        if (prev && prev.focus && document.contains(prev)) prev.focus();
        resolve(val);
      };
      const onKey = e => {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(undefined); return; }
        if (e.key !== 'Tab') return;
        const f = $$(this.FOCUSABLE, dlg).filter(x => x.offsetParent !== null);
        if (!f.length) { e.preventDefault(); return; }
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (!dlg.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      };
      document.addEventListener('keydown', onKey, true);
      ov.addEventListener('mousedown', e => { if (e.target === ov) close(undefined); });
      ov.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) return close(undefined);
        const b = e.target.closest('[data-i]');
        if (b) close(opts.actions[+b.dataset.i].value);
      });
      if (opts.onMount) opts.onMount(dlg, close);
      /* setTimeout, bukan requestAnimationFrame (rAF terjeda di tab latar) */
      setTimeout(() => {
        ov.classList.add('is-open');
        const auto = $('[data-autofocus]', dlg) || $$(this.FOCUSABLE, dlg).filter(x => !x.hasAttribute('data-close'))[0] || $('[data-close]', dlg) || dlg;
        if (auto === dlg) dlg.setAttribute('tabindex', '-1');
        auto.focus();
      }, 10);
    });
  },

  confirm({ title, message, ok, cancel, danger }) {
    return this.show({
      title, body: `<p class="sheet__msg">${esc(message)}</p>`,
      actions: [{ label: cancel || 'Batal', value: false, kind: 'ghost' }, { label: ok || 'Ya', value: true, kind: danger ? 'danger' : 'accent' }]
    }).then(v => v === true);
  }
};



/* script 8 */

/* palette.js — indeks pencarian, combobox ARIA, command palette (Ctrl/⌘+K atau /) */
const SearchIndex = {
  items() {
    return [
      ...PPOB.map(s => ({ type: 'PPOB', label: s.name, sub: s.desc, href: Catalog.href(s), kw: s.kw, svc: s })),
      ...GAMES.map(s => ({ type: 'Game', label: s.name, sub: s.cat + ' · ' + s.unit, href: Catalog.href(s), kw: s.name + ' ' + s.cat + ' ' + s.unit + ' topup', svc: s })),
      ...PAGES.map(p => ({ type: 'Halaman', label: p.label, sub: p.sub, href: p.href, kw: p.kw }))
    ];
  },
  query(q, limit) {
    q = String(q || '').trim().toLowerCase();
    const out = [];
    if (!q) return out;
    const orderType = { PPOB: 0, Game: 1, Halaman: 2 };
    const scored = this.items().map(it => {
      const l = it.label.toLowerCase(), k = (it.kw || '').toLowerCase();
      let s = -1;
      if (l.startsWith(q)) s = 0; else if (l.split(/\s+/).some(w => w.startsWith(q))) s = 1; else if (l.includes(q)) s = 2; else if (k.includes(q)) s = 3;
      return { it, s };
    }).filter(x => x.s >= 0).sort((a, b) => a.s - b.s || orderType[a.it.type] - orderType[b.it.type]);
    scored.forEach(x => out.push(x.it));
    const inv = q.toUpperCase();
    if (/^KA\w{4,}/i.test(q) && true) out.push({ type: 'Invoice', label: 'Cari invoice ' + inv, sub: 'Buka halaman Pesanan', href: '#/pesanan?q=' + encodeURIComponent(inv) });
    return out.slice(0, limit || 8);
  },
  suggestions() {
    return [...PPOB.slice(0, 5), ...GAMES.slice(0, 3)].map(s => ({ type: s.kind === 'ppob' ? 'PPOB' : 'Game', label: s.name, sub: s.desc, href: Catalog.href(s), svc: s }));
  }
};

function resultItemHTML(it, id, active) {
  const ico = it.svc ? svcIconHTML(it.svc, 'rs__ico') : `<span class="rs__ico rs__ico--page">${ui(it.type === 'Invoice' ? 'receipt' : 'arrow', 18)}</span>`;
  return `<li role="option" id="${id}" class="rs${active ? ' is-active' : ''}" data-href="${esc(it.href)}" aria-selected="${active ? 'true' : 'false'}">${ico}<span class="rs__txt"><b>${esc(it.label)}</b><small>${esc(it.sub || '')}</small></span><span class="rs__type">${esc(it.type)}</span></li>`;
}

/* Combobox: input + listbox. getResults(q) → items. onPick(item) dipanggil saat dipilih. */
function attachCombobox({ input, list, getResults, onPick, showEmpty, openOnFocus }) {
  let items = [], idx = -1, open = false;
  const pre = list.id || 'cb';
  const setOpen = v => {
    open = v; list.hidden = !v; input.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (!v) { idx = -1; input.removeAttribute('aria-activedescendant'); }
  };
  const render = () => {
    const q = input.value.trim();
    items = getResults(q);
    if (!items.length) {
      if (q && showEmpty !== false) { list.innerHTML = `<li class="rs-empty" role="presentation">Tidak ada hasil untuk “${esc(q)}”. Coba kata lain.</li>`; setOpen(true); }
      else setOpen(false);
      return;
    }
    idx = -1;
    list.innerHTML = items.map((it, i) => resultItemHTML(it, pre + '-o' + i, false)).join('');
    setOpen(true);
  };
  const mark = n => {
    idx = n;
    $$('.rs', list).forEach((el, i) => { const on = i === idx; el.classList.toggle('is-active', on); el.setAttribute('aria-selected', on ? 'true' : 'false'); if (on) { input.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); } });
  };
  input.addEventListener('input', render);
  if (openOnFocus) input.addEventListener('focus', render);
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) render(); if (items.length) mark((idx + 1) % items.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (items.length) mark((idx - 1 + items.length) % items.length); }
    else if (e.key === 'Enter') { if (open && items.length) { e.preventDefault(); onPick(items[idx >= 0 ? idx : 0]); } }
    else if (e.key === 'Escape' && open && openOnFocus !== 'keep') { e.stopPropagation(); setOpen(false); }
  });
  list.addEventListener('mousedown', e => e.preventDefault());
  list.addEventListener('click', e => { const li = e.target.closest('.rs'); if (li) onPick(items[$$('.rs', list).indexOf(li)]); });
  const outside = e => { if (!list.contains(e.target) && e.target !== input) setOpen(false); };
  document.addEventListener('click', outside);
  setOpen(false);
  return { render, close: () => setOpen(false), destroy: () => document.removeEventListener('click', outside) };
}

const Palette = {
  isOpen: false,
  open() {
    if (this.isOpen) return; this.isOpen = true;
    Sheet.show({
      variant: 'palette', label: 'Cari layanan, game, halaman, atau invoice',
      body: `<div class="pal"><div class="pal__in">${ui('search', 20)}<input id="pal-q" type="search" role="combobox" aria-expanded="true" aria-controls="pal-list" aria-autocomplete="list" aria-label="Cari" placeholder="Cari layanan, game, halaman, invoice…" autocomplete="off" data-autofocus><kbd>Esc</kbd></div><ul class="pal__list" id="pal-list" role="listbox" aria-label="Hasil pencarian"></ul></div>`,
      onMount: (el, close) => {
        const input = $('#pal-q', el), list = $('#pal-list', el);
        const cb = attachCombobox({ input, list, openOnFocus: 'keep', getResults: q => q ? SearchIndex.query(q, 8) : SearchIndex.suggestions(), onPick: it => { close(); Router.navigate(it.href); } });
        cb.render();
      }
    }).then(() => { this.isOpen = false; });
  },
  init() {
    document.addEventListener('keydown', e => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); this.open(); }
      else if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); this.open(); }
    });
    document.addEventListener('click', e => { if (e.target.closest('[data-open-palette]')) this.open(); });
  }
};



/* script 9 */

/* pages/home.js — Beranda Kalyvoaruno: hero kuning + kartu bertumpuk, pita harga berjalan, layanan (daftar), game (poster), tiga kartu langkah bertumpuk, alasan, populer, FAQ, ajakan. */
const minPrice = s => (s.products && s.products.length) ? Math.min(...s.products.map(p => p.price)) : 0;

const GLYPHS = {
  gem: '<path d="M-17 -5L-9 -15H9L17 -5L0 17Z" fill="#fff"/><path d="M-17 -5H17M-5 -5L0 17L5 -5M-9 -15L-5 -5M9 -15L5 -5" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="2" stroke-linejoin="round"/>',
  coin: '<circle r="17" fill="#fff"/><circle r="10.5" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="3"/>',
  star: '<path d="M0 -19Q2 -2 19 0Q2 2 0 19Q-2 2 -19 0Q-2 -2 0 -19Z" fill="#fff"/>',
  shield: '<path d="M0 -18L16 -11V3C16 12 9 17 0 21C-9 17 -16 12 -16 3V-11Z" fill="#fff"/><path d="M-6.5 -5L0 8L6.5 -5" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>'
};
const GLYPH_OF = { mlbb: 'gem', ff: 'gem', hok: 'gem', genshin: 'star', valorant: 'shield' };
function glyphTile(svc) {
  if (svc.kind === 'ppob') return `<span class="gl">${ppobIcon(svc.icon)}</span>`;
  return `<span class="gl"><svg viewBox="-24 -24 48 48" aria-hidden="true">${GLYPHS[GLYPH_OF[svc.id] || 'coin']}</svg></span>`;
}

/* Hero: tiga kartu voucher bertumpuk (hitam, merah muda, putih) bergaris tebal, bintang stiker. Datar, tanpa gradasi. */
function heroCards() {
  const K = '#0C0E09', P = '#FF2070', Y = '#FCFF1A';
  const card = (x, y, rot, fill, ink, circ, glyph, small, name, delay) => `<g transform="translate(${x} ${y}) rotate(${rot})"><g class="kbob" style="animation-delay:${delay}s">
    <rect width="320" height="190" rx="38" fill="${fill}" stroke="${K}" stroke-width="5"/>
    <circle cx="256" cy="120" r="36" fill="${circ}" stroke="${K}" stroke-width="4"/>
    <g transform="translate(256 120)">${glyph}</g>
    <text x="30" y="132" font-family="Be Vietnam Pro,sans-serif" font-weight="700" font-size="14" letter-spacing="1.6" fill="${ink}">${small}</text>
    <text x="30" y="166" font-family="Poppins,sans-serif" font-weight="800" font-size="30" fill="${ink}">${name}</text></g></g>`;
  const gem = `<path d="M-17 -6L-9 -16H9L17 -6L0 18Z" fill="${Y}" stroke="${Y}" stroke-width="3" stroke-linejoin="round"/><path d="M-17 -6H17M-5 -6L0 18L5 -6" fill="none" stroke="${K}" stroke-width="2.4" stroke-linejoin="round"/>`;
  const bolt = `<path d="M4 -22L-14 3H-2L-6 22L14 -5H2Z" fill="${K}" stroke="${K}" stroke-width="2" stroke-linejoin="round"/>`;
  const wallet = `<rect x="-19" y="-13" width="38" height="26" rx="6" fill="${P}"/><rect x="4" y="-4" width="15" height="10" rx="5" fill="#fff"/><circle cx="11" cy="1" r="2" fill="${P}"/>`;
  return `<svg class="art k-art" viewBox="0 0 560 600" role="img" aria-label="Ilustrasi tiga kartu voucher bertumpuk untuk top up diamond, token listrik, dan saldo e-wallet">
    <ellipse cx="280" cy="566" rx="200" ry="14" fill="${K}" opacity=".12"/>
    ${card(88, 292, -4, '#fff', K, Y, wallet.replace(/\$\{P\}/g, P), 'SALDO', 'E-Wallet', -3)}
    ${card(120, 160, 4, P, '#fff', '#fff', bolt, 'LISTRIK', 'Token PLN', -1.5)}
    ${card(56, 40, -5, K, Y, K, gem, 'GAME', 'Diamond', 0)}
    <g class="kspin" transform="translate(470 96)"><circle r="44" fill="${K}"/><path d="M0 -26Q3 -3 26 0Q3 3 0 26Q-3 3 -26 0Q-3 -3 0 -26Z" fill="${Y}"/></g>
    <circle cx="496" cy="470" r="30" fill="${P}" stroke="${K}" stroke-width="5"/>
    <circle cx="70" cy="530" r="12" fill="${K}"/>
    <path d="M444 200C500 230 520 300 470 360" fill="none" stroke="${K}" stroke-width="4" stroke-dasharray="3 12" stroke-linecap="round"/>
  </svg>`;
}

function secHead(title, sub, id) { return `<header class="k-sh"><h2${id ? ` id="${id}"` : ''}>${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ''}</header>`; }

function PageHome(view) {
  const cheapest = sv => sv.products.reduce((a, b) => a.price <= b.price ? a : b);
  const tick = [['ppob', 'pulsa'], ['ppob', 'pln'], ['ppob', 'data'], ['ppob', 'ewallet'], ['game', 'mlbb'], ['game', 'ff'], ['game', 'valorant'], ['game', 'roblox']].map(t => Catalog.service(t[0], t[1])).filter(Boolean)
    .map(sv => `<li><b>${esc(sv.short || sv.name)}</b> mulai ${rp(cheapest(sv).price)}</li>`).join('');
  const rows = PPOB.map(s => `<a class="k-row" href="${Catalog.href(s)}"><span class="k-row__ico">${ppobIcon(s.icon)}</span><span class="k-row__t"><b>${esc(s.short || s.name)}</b><small>${esc(s.desc)}</small></span><em>${s.postpaid ? 'Cek tagihan' : 'Mulai ' + rp(minPrice(s))}</em></a>`).join('');
  const gameCard = `<a class="k-row k-row--game" href="/topup"><span class="k-row__ico">${ui('game', 30)}</span><span class="k-row__t"><b>Top Up Game</b><small>Pilih dari ${GAMES.length} game favoritmu.</small></span><em>Mulai ${rp(Math.min(...GAMES.map(minPrice)))}</em></a>`;
  const steps = [['Pilih layanan', 'Pilih pulsa, tagihan, e-wallet, atau game yang mau diisi.'], ['Isi data dan nominal', 'Masukkan nomor atau ID, lalu pilih nominal. Harga langsung terlihat.'], ['Bayar dan cek transaksi', 'Bayar lewat QRIS, lalu cek status lewat nomor invoice.']]
    .map((s, i) => `<li class="k-step k-step--${i + 1}"><span class="k-step__n">Langkah ${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('');
  const facts = [[GAMES.length, 'game tersedia'], [PPOB.length, 'layanan isi ulang dan tagihan'], [PAY_METHODS[0].name, 'bayar dari semua e-wallet dan m-banking']].map((f, i) => `<li class="k-fact k-fact--${i + 1}"><b>${f[0]}</b><span>${f[1]}</span></li>`).join('');
  const why = [['tag', 'Harga terlihat sebelum bayar', 'Harga dan biaya admin ditampilkan lebih dulu, tidak ada kejutan di akhir.'], ['search', 'Tanpa akun', 'Langsung pesan tanpa daftar. Status dicek pakai nomor invoice.'], ['help', 'Bantuan tersedia', 'Pertanyaan umum dan kontak ada di halaman Bantuan.']]
    .map(w => `<li><span class="k-why__i">${ui(w[0], 22)}</span><span><b>${w[1]}</b><small>${w[2]}</small></span></li>`).join('');
  const best = Catalog.featured.map(f => { const svc = Catalog.service(f[0], f[1]), p = Catalog.product(svc, f[2]); if (!svc || !p) return ''; return `<a class="bst" href="${Catalog.href(svc, p.id)}">${glyphTile(svc)}<span class="bst__t"><small>${esc(svc.short || svc.name)}</small><b>${esc(p.name)}</b></span><span class="bst__p">${rp(p.price)}</span></a>`; }).join('');
  const faq = FAQ.slice(0, 4).map(f => `<details><summary>${esc(f[0])}<span class="faq__pm" aria-hidden="true"></span></summary><p>${esc(f[1])}</p></details>`).join('');

  view.innerHTML = `
  <section class="k-hero" aria-labelledby="h1"><div class="wrap k-hero__in">
    <div class="k-hero__txt">
      <p class="k-pill">Top up · Isi ulang · Tagihan</p>
      <h1 id="h1">Harga top up <span class="k-nb"><span class="k-hl">kelihatan dulu</span>,</span> baru bayar.</h1>
      <p class="k-sub">Pulsa, token listrik, saldo e-wallet, tagihan, sampai diamond game favoritmu. Tanpa akun, dan status transaksi bisa dicek lewat nomor invoice.</p>
      <div class="k-cta"><a class="btn btn--accent btn--lg" href="/topup">Top Up Game ${ui('arrow', 18)}</a><a class="btn btn--ghost btn--lg" href="/isi-ulang">Isi Ulang &amp; Tagihan</a></div>
    </div>
    <div class="k-hero__vis">${heroCards()}</div>
  </div></section>
  <div class="k-band" aria-label="Harga mulai dari"><ul class="k-band__track">${tick}</ul><ul class="k-band__track" aria-hidden="true">${tick}</ul></div>

  <section class="wrap k-sec" aria-labelledby="h-srv">${secHead('Pilih layanan', 'Pulsa, listrik, internet, BPJS, sampai top up game. Harga mulai dari terlihat di tiap kartu.', 'h-srv')}
    <div class="k-rows">${rows}${gameCard}</div>
  </section>
  <section class="wrap k-sec" aria-labelledby="h-how">${secHead('Cara memesan', 'Tiga langkah, selesai di satu halaman.', 'h-how')}<ol class="k-steps">${steps}</ol></section>

  <section class="wrap k-sec" aria-labelledby="h-why"><div class="k-whywrap">
    <div><h2 id="h-why">Kenapa Kalyvoaruno</h2><ul class="k-facts">${facts}</ul></div>
    <ul class="k-why">${why}</ul></div></section>

  <section class="wrap k-sec" aria-labelledby="h-best">${secHead('Produk populer', 'Langsung ke checkout dengan nominal terpilih.', 'h-best')}<div class="bstgrid">${best}</div></section>

  <section class="wrap k-sec" aria-labelledby="h-faq"><div class="k-faqwrap"><div><h2 id="h-faq">Pertanyaan yang sering muncul</h2><p class="muted">Masih ada yang kurang jelas? Buka halaman Bantuan.</p><a class="btn btn--ghost" href="/bantuan">Buka Bantuan ${ui('arrow', 18)}</a></div>
    <div class="faq">${faq}</div></div></section>

  <section class="wrap k-sec"><div class="k-cta2"><div><h2>Siap isi ulang atau top up?</h2><p>Pilih layanan, isi data, dan bayar. Tanpa buat akun.</p></div><a class="btn btn--accent btn--lg" href="/isi-ulang">Mulai Sekarang ${ui('arrow', 18)}</a></div></section>`;
  return () => {};
}



/* script 10 */

/* pages/catalog.js — Top Up Game (grid sampul) & Isi Ulang/Tagihan (ubin warna) */
function PageGames(view) {
  const cats = ['Semua', ...Array.from(new Set(GAMES.map(g => g.cat)))];
  view.innerHTML = `<div class="wrap pg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Top Up Game</span></nav>
    <header class="ph"><h1>Top up game favoritmu.</h1><p class="ph__sub">Isi ID akun, pilih nominal, bayar. ${GAMES.length} game tersedia.</p></header>
    <div class="filters"><div class="search"><label class="sr" for="g-q">Cari game</label>${ui('search', 18)}<input id="g-q" type="search" placeholder="Cari game…" autocomplete="off"></div>
      <label class="sr" for="g-sort">Urutkan</label><select id="g-sort" class="select"><option value="pop">Urutan awal</option><option value="az">A–Z</option><option value="za">Z–A</option></select></div>
    <div class="chips" id="g-cats" role="group" aria-label="Kategori">${cats.map((c, i) => `<button type="button" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('')}</div>
    <div id="g-out" aria-live="polite"></div></div>`;
  const out = $('#g-out', view); let cat = 'Semua', q = '', sort = 'pop', t;
  const skel = () => `<div class="covgrid">${Array.from({ length: 10 }, () => '<div class="cov skeleton"></div>').join('')}</div>`;
  const paint = () => {
    let l = GAMES.filter(g => (cat === 'Semua' || g.cat === cat) && g.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'az') l = [...l].sort((a, b) => a.name.localeCompare(b.name)); if (sort === 'za') l = [...l].sort((a, b) => b.name.localeCompare(a.name));
    out.innerHTML = l.length ? `<div class="covgrid">${l.map(g => `<a class="cov" href="${Catalog.href(g)}"><img src="${g.cover}" alt="" width="240" height="240" loading="lazy"><b>${esc(g.name)}</b><small>${esc(g.cat)} · mulai ${rp(minPrice(g))}</small></a>`).join('')}</div>`
      : `<div class="empty"><div class="empty__ico">${ui('search', 28)}</div><h2>Game tidak ditemukan</h2><p>Coba kata kunci lain atau ganti kategori.</p><button type="button" class="btn btn--ghost" id="g-reset">Atur Ulang</button></div>`;
  };
  out.innerHTML = skel(); t = setTimeout(paint, REDUCED() ? 0 : 300);
  $('#g-q', view).addEventListener('input', debounce(e => { q = e.target.value.trim(); paint(); }, 150));
  $('#g-sort', view).addEventListener('change', e => { sort = e.target.value; paint(); });
  const mark = b => $$('#g-cats button', view).forEach(c => c.setAttribute('aria-pressed', c === b));
  $('#g-cats', view).addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; cat = b.dataset.cat; mark(b); paint(); });
  out.addEventListener('click', e => { if (e.target.closest('#g-reset')) { q = ''; cat = 'Semua'; $('#g-q', view).value = ''; mark($('#g-cats button', view)); paint(); } });
  return () => clearTimeout(t);
}

function PagePpob(view) {
  const groups = ['Semua', 'Prabayar', 'Tagihan'];
  view.innerHTML = `<div class="wrap pg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Isi Ulang &amp; Tagihan</span></nav>
    <header class="ph"><h1>Isi ulang dan bayar tagihan.</h1><p class="ph__sub">Pulsa, data, listrik, tagihan, e-wallet, dan voucher digital.</p></header>
    <div class="filters"><div class="search"><label class="sr" for="p-q">Cari layanan</label>${ui('search', 18)}<input id="p-q" type="search" placeholder="Cari layanan…" autocomplete="off"></div></div>
    <div class="chips" id="p-cats" role="group" aria-label="Jenis layanan">${groups.map((c, i) => `<button type="button" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}</div>
    <div id="p-out" aria-live="polite"></div></div>`;
  const out = $('#p-out', view); let g = 'Semua', q = '';
  const paint = () => {
    const l = PPOB.filter(s => (g === 'Semua' || s.group === g) && (s.name + ' ' + s.kw).toLowerCase().includes(q.toLowerCase()));
    out.innerHTML = l.length ? `<div class="tiles tiles--lg">${l.map(s => `<a class="tile" href="${Catalog.href(s)}" style="--c:${s.color}"><span class="tile__ico">${ppobIcon(s.icon)}</span><b>${esc(s.name)}</b><small>${esc(s.desc)}</small><em>${s.postpaid ? 'Cek tagihan' : 'Mulai ' + rp(minPrice(s))}</em></a>`).join('')}</div>`
      : `<div class="empty"><div class="empty__ico">${ui('search', 28)}</div><h2>Layanan tidak ditemukan</h2><p>Coba kata kunci lain.</p></div>`;
  };
  paint();
  $('#p-q', view).addEventListener('input', debounce(e => { q = e.target.value.trim(); paint(); }, 150));
  $('#p-cats', view).addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; g = b.dataset.cat; $$('#p-cats button', view).forEach(c => c.setAttribute('aria-pressed', c === b)); paint(); });
}



/* script 11 */

/* pages/service.js — checkout dua tahap: (1) isi nominal + data dengan stepper progres, bilah bawah menempel; (2) lembar "Pilih pembayaran" berisi metode, biaya admin, dan total. */
function PageService(view, kind, id, query) {
  const svc = Catalog.service(kind, id);
  if (!svc) return PageNotFound(view);
  setTitle(svc.name);
  const post = !!svc.postpaid;
  const S = { values: {}, productId: null, methodId: PAY_METHODS.length === 1 ? PAY_METHODS[0].id : null, bill: null, busy: false, inquiring: false };
  svc.fields.forEach(f => { const v = query['f_' + f.key]; S.values[f.key] = v && (f.type !== 'select' || f.options.includes(v)) ? String(v).slice(0, 40) : ''; });
  if (!post && query.p && Catalog.product(svc, query.p)) S.productId = query.p;
  const listPath = kind === 'game' ? '#/topup' : '#/isi-ulang';

  const fieldHTML = f => {
    const fid = 'f-' + f.key;
    if (f.type === 'select') return `<div class="field"><label for="${fid}">${esc(f.label)}</label><select id="${fid}" data-key="${f.key}" aria-describedby="${fid}-err"><option value="">Pilih ${esc(f.label.toLowerCase())}</option>${f.options.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select><p class="field__err" id="${fid}-err" role="alert"></p></div>`;
    const im = f.digits || f.type === 'phone' ? 'numeric' : f.type === 'email' ? 'email' : 'text';
    return `<div class="field"><label for="${fid}">${esc(f.label)}</label><input id="${fid}" data-key="${f.key}" type="${f.type === 'email' ? 'email' : 'text'}" inputmode="${im}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(f.placeholder || '')}" ${f.max ? `maxlength="${f.type === 'phone' ? 16 : f.max}"` : ''} aria-describedby="${fid}-hint ${fid}-err"><p class="field__hint" id="${fid}-hint">${esc(f.help || '')}${f.detect ? ' <span class="op" id="op-badge" hidden></span>' : ''}</p><p class="field__err" id="${fid}-err" role="alert"></p></div>`;
  };
  const prodHTML = post
    ? `<div id="bill-box"><p class="muted">Isi data pelanggan, lalu tekan <b>Cek Tagihan</b> untuk melihat rincian.</p></div>`
    : `<div class="opts" role="radiogroup" aria-label="Pilih nominal">${svc.products.map(p => `<label class="opt"><input type="radio" name="product" value="${p.id}" ${S.productId === p.id ? 'checked' : ''}><span class="opt__body">${p.tag ? `<em class="opt__tag">${esc(p.tag)}</em>` : ''}<b>${esc(p.name)}</b><span class="opt__price">${rp(p.price)}</span></span></label>`).join('')}</div><p class="field__err" id="prod-err" role="alert"></p>`;

  const cardData = `<section class="kc" aria-labelledby="kc-data"><header class="kc__h"><h2 id="kc-data">${kind === 'game' ? 'Data akun' : 'Data tujuan'}</h2><p>${kind === 'game' ? 'Isi ID akun game tempat item dikirim.' : 'Isi nomor tujuan dengan teliti.'}</p></header><div class="fields">${svc.fields.map(fieldHTML).join('')}</div>${post ? '<button type="button" class="btn btn--ink" id="bill-btn" style="margin-top:14px">Cek Tagihan</button>' : ''}</section>`;
  const cardProd = `<section class="kc" aria-labelledby="os2"><header class="kc__h"><h2 id="os2">${post ? 'Rincian tagihan' : 'Pilih nominal'}</h2><p>${post ? 'Tagihan muncul setelah data dicek.' : 'Biaya admin dihitung saat memilih pembayaran.'}</p></header>${prodHTML}</section>`;
  const labels = post ? ['Data', 'Tagihan', 'Bayar'] : ['Nominal', 'Data', 'Bayar'];

  view.innerHTML = `<div class="wrap kpg">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<a href="${listPath}">${kind === 'game' ? 'Top Up Game' : 'Isi Ulang & Tagihan'}</a>${ui('chevR', 14)}<span aria-current="page">${esc(svc.name)}</span></nav>
    <header class="co-h">${svcIconHTML(svc, 'co-h__ico')}<div><h1>${esc(svc.name)}</h1><p>${esc(svc.desc)}</p></div></header>
    <ol class="kst" id="stepper" aria-label="Progres pesanan">${labels.map((l, i) => `<li data-s="${i}"><i>${i + 1}</i><span>${l}</span></li>`).join('')}</ol>
    <form id="co-form" novalidate autocomplete="off">${post ? cardData + cardProd : cardProd + cardData}</form></div>
    <div class="kbar"><div class="kbar__in"><div class="kbar__t"><small id="kb-sub">Pilih nominal dulu</small><b id="kb-total">—</b></div><button type="button" class="btn btn--accent btn--lg" id="cb-btn" data-pay>Bayar dengan QRIS</button></div></div>`;

  const dataOk = () => svc.fields.every(f => !validateField(f, S.values[f.key]));
  function calc() {
    let name = '', subtotal = 0;
    if (post) { if (S.bill) { name = 'Tagihan ' + (svc.short || svc.name) + ' · ' + S.bill.period; subtotal = S.bill.amount + S.bill.adminFee; } }
    else { const p = Catalog.product(svc, S.productId); if (p) { name = p.name; subtotal = p.price; } }
    const method = PAY_METHODS.find(m => m.id === S.methodId) || null, fee = method ? Pricing.fee(method, subtotal) : 0;
    return { name, subtotal, method, fee, total: subtotal ? subtotal + fee : 0 };
  }
  function paint() {
    const c = calc();
    $('#kb-total', view).textContent = c.subtotal ? rp(c.subtotal) : '—';
    $('#kb-sub', view).textContent = c.subtotal ? c.name : (post ? 'Cek tagihan dulu' : 'Pilih nominal dulu');
    const b = $('#cb-btn', view); b.disabled = S.busy; b.textContent = S.busy ? 'Memproses…' : 'Bayar dengan QRIS';
    const bb = $('#bill-btn', view); if (bb) { bb.disabled = S.inquiring; bb.textContent = S.inquiring ? 'Memeriksa…' : S.bill ? 'Cek Ulang Tagihan' : 'Cek Tagihan'; }
    const prodDone = post ? !!S.bill : !!S.productId, dd = dataOk();
    const done = post ? [dd, prodDone, false] : [prodDone, dd, false];
    let now = done.findIndex(x => !x); if (now < 0) now = 2;
    $$('#stepper li', view).forEach((li, i) => { li.classList.toggle('is-done', !!done[i]); li.classList.toggle('is-now', i === now && !done[i] || (i === 2 && now === 2)); });
  }

  const errEl = k => $('#f-' + k + '-err', view);
  function setErr(f, msg) { const inp = $('#f-' + f.key, view); errEl(f.key).textContent = msg || ''; inp.setAttribute('aria-invalid', msg ? 'true' : 'false'); inp.closest('.field').classList.toggle('has-err', !!msg); }
  function validateAll() { let first = null; svc.fields.forEach(f => { const m = validateField(f, S.values[f.key]); setErr(f, m); if (m && !first) first = f; }); return first; }
  function billHTML() {
    const b = S.bill; if (!b) return '<p class="muted">Isi data pelanggan, lalu tekan <b>Cek Tagihan</b> untuk melihat rincian.</p>';
    return `<div class="bill"><div class="bill__top"><span class="badge badge--ok">Tagihan ditemukan</span><b>${esc(maskName(b.customerName))}</b></div><dl class="sum">${b.details.map(d => `<div><dt>${esc(d.label)}</dt><dd>${esc(d.value)}</dd></div>`).join('')}<div><dt>Tagihan</dt><dd>${rp(b.amount)}</dd></div><div><dt>Biaya layanan</dt><dd>${rp(b.adminFee)}</dd></div><div class="sum--tot"><dt>Total tagihan</dt><dd>${rp(b.amount + b.adminFee)}</dd></div></dl></div>`;
  }
  async function inquire() {
    const bad = validateAll(); if (bad) { $('#f-' + bad.key, view).focus(); return false; }
    S.inquiring = true; paint();
    try { S.bill = await Api.inquireBill({ serviceId: svc.id, fields: { ...S.values } }); $('#bill-box', view).innerHTML = billHTML(); Toast.show('Tagihan ditemukan'); }
    catch (e) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); const first = svc.fields.find(f => f.key === 'idpel' || f.key === 'va') || svc.fields[0]; setErr(first, e.message); $('#f-' + first.key, view).focus(); }
    finally { S.inquiring = false; paint(); }
    return !!S.bill;
  }

  function sheetBody() {
    const c = calc();
    const tg = svc.fields.map(f => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.type === 'select' ? S.values[f.key] : maskId(S.values[f.key]))}</dd></div>`).join('');
    return `<div class="pm1"><span class="mk" style="--c:${c.method.color}">${c.method.mark}</span><span class="pm1__t"><b>Bayar lewat ${esc(c.method.name)}</b><small>${esc(c.method.desc)}</small></span></div>
      <dl class="sum sum--sheet"><div><dt>Layanan</dt><dd>${esc(svc.name)}</dd></div>${tg}<div><dt>Produk</dt><dd>${esc(c.name)}</dd></div><div><dt>Harga</dt><dd>${rp(c.subtotal)}</dd></div><div><dt>Biaya admin ${esc(c.method.name)}</dt><dd>${rp(c.fee)}</dd></div><div class="sum--tot"><dt>Total bayar</dt><dd>${rp(c.total)}</dd></div></dl>
      <p class="muted">Pastikan data tujuan sudah benar. Pesanan yang berhasil diproses tidak dapat dibatalkan.</p>`;
  }

  async function submit() {
    if (S.busy) return;
    const bad = validateAll();
    if (bad) { const el = $('#f-' + bad.key, view); el.scrollIntoView({ block: 'center', behavior: REDUCED() ? 'auto' : 'smooth' }); el.focus({ preventScroll: true }); return; }
    if (post && !S.bill) { Toast.show('Cek tagihan dulu sebelum membayar.', 'err'); const b = $('#bill-btn', view); b.scrollIntoView({ block: 'center' }); b.focus({ preventScroll: true }); return; }
    if (!post && !S.productId) { $('#prod-err', view).textContent = 'Pilih nominal terlebih dahulu.'; $('#os2', view).scrollIntoView({ block: 'center', behavior: REDUCED() ? 'auto' : 'smooth' }); return; }
    const ok = await Sheet.show({
      title: 'Konfirmasi pembayaran', body: sheetBody(),
      actions: [{ label: 'Kembali', value: false, kind: 'ghost' }, { label: 'Bayar Sekarang', value: true, kind: 'accent' }]
    });
    if (ok !== true) return;
    S.busy = true; paint();
    try {
      const order = await Api.createOrder({ kind, serviceId: svc.id, fields: { ...S.values }, productId: S.productId || undefined, billRef: S.bill ? S.bill.billRef : undefined, methodId: S.methodId });
      Toast.show('Pesanan dibuat. Selesaikan pembayaran.'); Router.navigate('/pesanan/' + order.id);
    } catch (e) { Toast.show(e.message || 'Pesanan gagal dibuat.', 'err'); S.busy = false; paint(); }
  }

  view.addEventListener('input', e => {
    const t = e.target, key = t.dataset && t.dataset.key; if (!key) return;
    const f = svc.fields.find(x => x.key === key);
    if (f.digits && t.type !== 'email') { const c = t.value.replace(/\D/g, ''); if (c !== t.value) t.value = c; }
    if (f.type === 'phone') { const c = t.value.replace(/[^\d+\s-]/g, ''); if (c !== t.value) t.value = c; }
    S.values[key] = t.value; if (errEl(key).textContent) setErr(f, '');
    if (f.detect) { const op = detectOperator(t.value), b = $('#op-badge', view); b.hidden = !op; b.textContent = op; }
    if (post && S.bill) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); }
    paint();
  });
  view.addEventListener('change', e => {
    const t = e.target;
    if (t.name === 'product') { S.productId = t.value; $('#prod-err', view).textContent = ''; paint(); }
    else if (t.dataset && t.dataset.key) { const f = svc.fields.find(x => x.key === t.dataset.key); S.values[f.key] = t.value; setErr(f, ''); if (post && S.bill) { S.bill = null; $('#bill-box', view).innerHTML = billHTML(); } paint(); }
  });
  view.addEventListener('focusout', e => { const key = e.target.dataset && e.target.dataset.key; if (!key) return; const f = svc.fields.find(x => x.key === key); if (S.values[key]) setErr(f, validateField(f, S.values[key])); });
  view.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'radio') { e.preventDefault(); if (post) inquire(); } });
  view.addEventListener('click', e => { if (e.target.closest('#bill-btn')) inquire(); if (e.target.closest('[data-pay]')) submit(); });
  $('#co-form', view).addEventListener('submit', e => e.preventDefault());

  svc.fields.forEach(f => { const el = $('#f-' + f.key, view); if (el) el.value = S.values[f.key] || ''; });
  const ph = svc.fields.find(f => f.detect); if (ph) { const op = detectOperator(S.values[ph.key]), b = $('#op-badge', view); if (b) { b.hidden = !op; b.textContent = op; } }
  paint();
  if (window.innerWidth >= 1024 && !post && S.productId && !S.values[svc.fields[0].key]) { const fi = $('#f-' + svc.fields[0].key, view); if (fi) fi.focus({ preventScroll: true }); }
  return () => {};
}



/* script 12 */

/* pages/pesanan.js — daftar pesanan (baris dengan titik status) & detail (banner status + linimasa + rincian) */
function PageOrders(view, query) {
  const pre = String(query.q || '').toUpperCase();
  view.innerHTML = `<div class="wrap pg pg--narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Cek Transaksi</span></nav>
    <section class="lookup" aria-labelledby="lk-h">
      <span class="lookup__ico">${ui('receipt', 30)}</span>
      <h1 id="lk-h">Cek status transaksi.</h1>
      <p class="ph__sub">Masukkan nomor invoice yang kamu terima saat membuat pesanan.</p>
      <form class="lookup__form" id="inv-form" role="search" novalidate>
        <div class="field"><label for="inv-q">Nomor invoice</label><input id="inv-q" type="text" placeholder="Nomor invoice" autocomplete="off" autocapitalize="characters" spellcheck="false" value="${esc(pre)}" aria-describedby="inv-err"><p class="field__hint">Diawali huruf KA, diikuti angka dan huruf.</p><p class="field__err" id="inv-err" role="alert"></p></div>
        <button class="btn btn--accent btn--lg btn--block" type="submit" id="inv-btn">Cek Transaksi</button>
      </form>
      <p class="lookup__note">${ui('info', 16)} Demi privasi, riwayat pesanan tidak disimpan di perangkat ini. Simpan nomor invoice kamu.</p>
    </section>
    <p class="lookup__more">Belum punya pesanan? <a href="/isi-ulang">Mulai memesan</a></p></div>`;
  const inp = $('#inv-q', view), err = $('#inv-err', view), btn = $('#inv-btn', view); let alive = true;
  inp.addEventListener('input', () => { err.textContent = ''; });
  $('#inv-form', view).addEventListener('submit', async e => {
    e.preventDefault(); const q = inp.value.trim().toUpperCase().replace(/\s+/g, ''); err.textContent = '';
    if (!q) { err.textContent = 'Masukkan nomor invoice terlebih dahulu.'; inp.focus(); return; }
    btn.disabled = true; btn.textContent = 'Memeriksa…';
    try { const o = await Api.getOrder(q); if (!alive) return; if (o) { Router.navigate('/pesanan/' + o.id); return; } err.textContent = `Invoice ${q} tidak ditemukan. Periksa kembali nomornya.`; inp.focus(); }
    catch (x) { err.textContent = 'Gagal memeriksa invoice. Coba lagi.'; }
    btn.disabled = false; btn.textContent = 'Cek Transaksi';
  });
  if (window.innerWidth >= 1024) inp.focus({ preventScroll: true });
  return () => { alive = false; };
}

/* Panel cara bayar sesuai metode. Nomor/kode dibuat dari nomor invoice sampai gateway sungguhan tersambung. */
function payPanel(o) {
  let x = [...o.id].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const rnd = () => (x = (x * 1664525 + 1013904223) >>> 0);
  const digits = n => Array.from({ length: n }, () => rnd() % 10).join('');
  const group = (v, n) => v.replace(new RegExp('(.{' + n + '})', 'g'), '$1 ').trim();
  const copyBtn = v => `<button type="button" class="btn btn--ghost btn--sm" data-copy="${esc(v)}">${ui('copy', 16)} Salin</button>`;
  const total = rp(o.total);
  let visual = '', title = '', steps = [];
  if (o.methodId === 'qris') {
    visual = `<div class="qr"><img src="/assets/images/payments/qris-baru.png" alt="Kode QRIS" style="width:100%;max-width:220px;height:auto;display:block;background:#fff;border-radius:12px"/><small>Kode QRIS · ${total}</small></div>`;
    title = 'Bayar dengan QRIS';
    steps = ['Buka aplikasi e-wallet atau m-banking apa pun yang mendukung QRIS.', 'Pindai kode QRIS di samping.', 'Pastikan total ' + total + ', lalu konfirmasi pembayaran.'];
  } else if (o.methodId === 'va') {
    const no = group('8808' + digits(12), 4);
    visual = `<div class="acct"><small>Nomor Virtual Account</small><b>${no}</b>${copyBtn(no.replace(/ /g, ''))}<small>Bank: BCA, BNI, BRI, Mandiri, Permata</small></div>`;
    title = 'Bayar lewat Virtual Account';
    steps = ['Buka m-banking atau ATM bank pilihan Anda.', 'Pilih menu Virtual Account, masukkan nomor di samping.', 'Pastikan total ' + total + ', lalu selesaikan pembayaran.'];
  } else if (o.methodId === 'bank') {
    const no = group(digits(10), 4);
    visual = `<div class="acct"><small>Nomor rekening tujuan</small><b>${no}</b>${copyBtn(no.replace(/ /g, ''))}<small>a.n. ${esc(SITE.legalName || SITE.name)}</small></div>`;
    title = 'Bayar lewat Transfer Bank';
    steps = ['Transfer tepat sebesar ' + total + ' ke rekening di samping.', 'Gunakan bank apa pun, termasuk transfer antarbank.', 'Simpan bukti transfer sampai status pesanan berubah.'];
  } else {
    const nm = o.methodName;
    visual = `<div class="acct"><small>Metode bayar</small><b>${esc(nm)}</b><small>Tagihan ${total} dikirim ke akun ${esc(nm)} Anda</small></div>`;
    title = 'Bayar lewat ' + nm;
    steps = ['Tekan Bayar Sekarang di halaman ini.', 'Buka aplikasi ' + nm + ' dan setujui pembayaran ' + total + '.', 'Status pesanan berubah otomatis setelah pembayaran diterima.'];
  }
  return `<section class="paypanel" aria-label="Cara pembayaran"><div class="paypanel__v">${visual}</div><div class="paypanel__t"><h2>${title}</h2><ol>${steps.map(t => `<li>${t}</li>`).join('')}</ol></div></section>`;
}

function PageOrder(view, id) {
  id = String(id).toUpperCase(); let alive = true, poll = null, tick = null, order = null;
  view.innerHTML = `<div class="wrap pg"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<a href="/pesanan">Cek Transaksi</a>${ui('chevR', 14)}<span aria-current="page">Detail</span></nav><div id="d-out"><div class="skeleton" style="height:240px;border-radius:24px"></div></div></div>`;
  const out = $('#d-out', view);
  function render() {
    const o = order;
    if (!o) { out.innerHTML = `<div class="empty"><div class="empty__ico">${ui('search', 30)}</div><h1>Invoice tidak ditemukan</h1><p>Nomor <code>${esc(id)}</code> tidak terdaftar. Periksa kembali nomornya.</p><div class="empty__act"><a class="btn btn--accent" href="/pesanan">Cek Invoice Lain</a></div></div>`; return; }
    const svc = Catalog.service(o.kind, o.serviceId), waiting = o.status === 'Menunggu Pembayaran', sc = statusClass(o.status);
    const copy = { 'Menunggu Pembayaran': ['Menunggu pembayaran', 'Selesaikan pembayaran sebelum batas waktu.'], 'Diproses': ['Sedang diproses', 'Pembayaran diterima. Mohon tunggu sebentar.'], 'Berhasil': ['Pesanan berhasil', 'Produk sudah terkirim ke tujuan.'], 'Gagal': ['Pesanan gagal', 'Hubungi kami dengan nomor invoice ini.'], 'Dibatalkan': ['Pesanan dibatalkan', o.note || 'Pesanan ini tidak dilanjutkan.'] }[o.status];
    const icon = { ok: 'check', warn: 'clock', info: 'clock', bad: 'x', mute: 'x' }[sc];
    const ev = [['Pesanan dibuat', o.createdAt]]; if (o.paidAt) ev.push(['Pembayaran diterima', o.paidAt]); if (o.processingAt) ev.push(['Pesanan diproses', o.processingAt]);
    if (o.status === 'Berhasil') ev.push(['Pesanan berhasil', o.doneAt]); if (o.status === 'Gagal') ev.push(['Pesanan gagal', o.doneAt || Date.now()]); if (o.status === 'Dibatalkan') ev.push(['Pesanan dibatalkan', o.doneAt]);
    const pend = waiting ? ['Menunggu pembayaran', 'Pesanan diproses', 'Selesai'] : o.status === 'Diproses' ? ['Selesai'] : [];
    out.innerHTML = `
      <section class="banner banner--${sc}" aria-labelledby="r-h"><span class="banner__ico">${o.status === 'Diproses' ? '<span class="spin" aria-hidden="true"></span>' : ui(icon, 30)}</span>
        <div class="banner__t"><h1 id="r-h">${esc(copy[0])}</h1><p>${esc(copy[1])}</p></div>
        <div class="banner__inv"><small>Nomor invoice · simpan untuk cek status</small><div><code id="inv-no">${esc(o.id)}</code><button type="button" class="btn btn--ghost btn--sm" id="copy-inv">${ui('copy', 16)} Salin</button></div></div></section>
      ${waiting ? `<section class="payrow"><div><small>Bayar sebelum</small><b>${fmtDate(o.expiresAt)}</b></div><div><small>Sisa waktu</small><b id="cd">—</b></div><div class="payrow__act"><button type="button" class="btn btn--accent" id="pay-now">Bayar Sekarang</button><button type="button" class="btn btn--ghost" id="cancel-o">Batalkan Pesanan</button></div></section>` : ''}
      ${waiting ? payPanel(o) : ''}
      <div class="dgrid">
        <section class="card"><h2>Rincian pesanan</h2><dl class="sum"><div><dt>Layanan</dt><dd>${esc(o.serviceName)}</dd></div><div><dt>Produk</dt><dd>${esc(o.productName)}</dd></div>${(o.targets || []).map(t => `<div><dt>${esc(t.label)}</dt><dd>${esc(t.mask ? maskId(t.value) : t.value)}</dd></div>`).join('')}<div><dt>Harga</dt><dd>${rp(o.subtotal)}</dd></div><div><dt>Biaya admin</dt><dd>${rp(o.fee)}</dd></div><div><dt>Metode bayar</dt><dd>${esc(o.methodName)}</dd></div><div class="sum--tot"><dt>Total</dt><dd>${rp(o.total)}</dd></div></dl>${svc ? `<a class="btn btn--ink btn--block" style="margin-top:14px" href="${Catalog.href(svc, o.productId)}">Pesan Lagi</a>` : ''}</section>
        <section class="card"><h2>Linimasa</h2><ol class="tl">${ev.map(e => `<li class="is-done"><b>${esc(e[0])}</b><small>${fmtDate(e[1])}</small></li>`).join('')}${pend.map((p, i) => `<li${i === 0 ? ' class="is-now"' : ''}><b>${esc(p)}</b></li>`).join('')}</ol></section>
      </div>`;
    updateCd();
  }
  function updateCd() {
    const el = $('#cd', view); if (!el || !order) return;
    const ms = order.expiresAt - Date.now(); if (ms <= 0) { el.textContent = 'Habis'; return; }
    const h = Math.floor(ms / 3600000), m = Math.floor(ms % 3600000 / 60000), s = Math.floor(ms % 60000 / 1000);
    el.textContent = `${h}j ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}d`;
  }
  async function refresh() {
    try { const n = await Api.getOrder(id); if (!alive) return; if (!n) { if (!order) render(); return; } const changed = !order || order.status !== n.status; order = n; if (changed) render(); } catch (e) { /* coba lagi */ }
  }
  if (order) render();
  refresh();
  poll = setInterval(() => { if (!order || order.status === 'Menunggu Pembayaran' || order.status === 'Diproses') refresh(); }, 1200);
  tick = setInterval(updateCd, 1000);
  out.addEventListener('click', async e => {
    const cp = e.target.closest('[data-copy]'); if (cp) Toast.show(await copyText(cp.dataset.copy) ? 'Berhasil disalin' : 'Gagal menyalin', 'ok');
    if (e.target.closest('#copy-inv')) Toast.show(await copyText(order.id) ? 'Nomor invoice disalin' : 'Gagal menyalin', 'ok');
    if (e.target.closest('#pay-now')) {
      const b = $('#pay-now', view); b.disabled = true; b.textContent = 'Memproses…';
      try { const r = await Api.payOrder(order.id); if (r.redirectUrl) { location.href = r.redirectUrl; return; } if (!alive) return; order = r.order; render(); Toast.show('Pembayaran diterima'); }
      catch (x) { Toast.show(x.message, 'err'); if (alive) { b.disabled = false; b.textContent = 'Bayar Sekarang'; } }
    }
    if (e.target.closest('#cancel-o')) {
      if (!await Sheet.confirm({ title: 'Batalkan pesanan?', message: 'Pesanan ini akan dibatalkan dan tidak bisa dibayar lagi.', ok: 'Batalkan Pesanan', cancel: 'Kembali', danger: true })) return;
      try { const n = await Api.cancelOrder(order.id); if (!alive) return; order = n; render(); Toast.show('Pesanan dibatalkan'); } catch (x) { Toast.show(x.message, 'err'); }
    }
  });
  return () => { alive = false; clearInterval(poll); clearInterval(tick); };
}



/* script 13 */

/* pages/help.js — Bantuan: pencarian FAQ langsung, kontak, dan ketentuan dalam akordeon */
function PageHelp(view, sec) {
  const contact = [];
  if (SITE.email) contact.push(['Email', `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`]);
  if (SITE.whatsapp) contact.push(['WhatsApp', esc(SITE.whatsapp)]);
  if (SITE.phone) contact.push(['Telepon', esc(SITE.phone)]);
  if (SITE.hours) contact.push(['Jam layanan', esc(SITE.hours)]);
  if (SITE.address) contact.push(['Alamat', esc(SITE.address)]);
  const legal = k => `<details id="${k}"${sec === k ? ' open' : ''}><summary>${esc(LEGAL[k].title)}<span class="faq__pm" aria-hidden="true"></span></summary><div class="legal">${LEGAL[k].items.map((it, i) => `<h3>${i + 1}. ${esc(it[0])}</h3><p>${esc(it[1])}</p>`).join('')}</div></details>`;
  view.innerHTML = `<div class="wrap pg pg--narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Beranda</a>${ui('chevR', 14)}<span aria-current="page">Bantuan</span></nav>
    <header class="ph"><h1>Ada yang bisa dibantu?</h1></header>
    <div class="filters"><div class="search"><label class="sr" for="h-q">Cari pertanyaan</label>${ui('search', 18)}<input id="h-q" type="search" placeholder="Cari pertanyaan" autocomplete="off"></div></div>
    <section class="card hcard"><h2>Pertanyaan umum</h2><div class="faq" id="faq"></div></section>
    <section class="card hcard" id="kontak"><h2>Hubungi kami</h2><dl class="contact">${contact.map(c => `<div><dt>${c[0]}</dt><dd>${c[1]}</dd></div>`).join('')}</dl><p class="muted">Sertakan nomor invoice supaya pertanyaan lebih cepat ditangani.</p></section>
    <section class="card hcard"><h2>Ketentuan</h2><div class="faq">${legal('syarat')}${legal('privasi')}</div></section></div>`;
  const faq = $('#faq', view);
  const paint = q => {
    q = (q || '').toLowerCase();
    const l = FAQ.filter(f => !q || (f[0] + ' ' + f[1]).toLowerCase().includes(q));
    faq.innerHTML = l.length ? l.map(f => `<details><summary>${esc(f[0])}<span class="faq__pm" aria-hidden="true"></span></summary><p>${esc(f[1])}</p></details>`).join('') : `<p class="muted" style="padding:14px 0">Tidak ada pertanyaan yang cocok. Coba kata lain atau hubungi kami.</p>`;
  };
  paint('');
  $('#h-q', view).addEventListener('input', debounce(e => paint(e.target.value.trim()), 120));
  const target = sec ? $('#' + sec, view) : null;
  if (target) setTimeout(() => target.scrollIntoView({ block: 'center' }), 30);
}



/* script 14 */

/* router.js — router hash. Tiap halaman: fn(view, params, query) → (opsional) fungsi cleanup. */
const Router = {
  cleanup: null,
  routes: [
    { re: /^\/$/, nav: 'home', title: '', fn: v => PageHome(v) },
    { re: /^\/isi-ulang$/, nav: 'ppob', title: 'Isi Ulang & Tagihan', fn: v => PagePpob(v) },
    { re: /^\/isi-ulang\/([\w-]+)$/, nav: 'ppob', fn: (v, p, q) => PageService(v, 'ppob', p[0], q) },
    { re: /^\/topup$/, nav: 'game', title: 'Top Up Game', fn: v => PageGames(v) },
    { re: /^\/topup\/([\w-]+)$/, nav: 'game', fn: (v, p, q) => PageService(v, 'game', p[0], q) },
    { re: /^\/pesanan$/, nav: 'pesanan', title: 'Cek Transaksi', fn: (v, p, q) => PageOrders(v, q) },
    { re: /^\/pesanan\/([\w-]+)$/, nav: 'pesanan', title: 'Detail Transaksi', fn: (v, p) => PageOrder(v, p[0]) },
    { re: /^\/bantuan(?:\/(\w+))?$/, nav: 'help', title: 'Bantuan', fn: (v, p) => PageHelp(v, p[0]) }
  ],
  parse() {
    const h = location.hash.replace(/^#/, '');
    const raw = h || location.pathname || '/';
    const [path, qs] = raw.split('?');
    return { path: path.replace(/(.)\/$/, '$1') || '/', query: parseQuery(qs) };
  },
  navigate(href) {
    const url = href.startsWith('#') ? href.slice(1) : href;
    if (url === (location.pathname + location.search)) return;
    history.pushState(null, '', url);
    this.go();
  },
  go() {
    const { path, query } = this.parse();
    if (typeof this.cleanup === 'function') { try { this.cleanup(); } catch (e) { console.error(e); } }
    this.cleanup = null;
    const old = $('#view'), view = old.cloneNode(false);   // buang semua listener lama
    old.replaceWith(view);
    let route = null, params = [];
    for (const r of this.routes) { const m = path.match(r.re); if (m) { route = r; params = m.slice(1); break; } }
    document.body.classList.toggle('is-checkout', !!(route && /^\/(isi-ulang|topup)\//.test(path)));
    document.body.classList.toggle('is-order', !!(route && /^\/pesanan\/[^/]+/.test(path)));
    setTitle(route ? route.title : 'Halaman tidak ditemukan');
    this.markNav(route ? route.nav : '');
    view.classList.add('page-in');
    try { this.cleanup = route ? route.fn(view, params, query) : PageNotFound(view); }
    catch (e) { console.error(e); view.innerHTML = '<div class="wrap empty"><h1>Terjadi kendala</h1><p>Halaman gagal dimuat. Muat ulang atau kembali ke beranda.</p><a class="btn btn--accent" href="/">Ke Beranda</a></div>'; }
    if (!(route && route.nav === 'help' && params[0])) window.scrollTo(0, 0);
  },
  markNav(key) {
    $$('[data-nav]').forEach(a => {
      const on = a.dataset.nav === key;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  },
  start() {
    window.addEventListener('popstate', () => this.go());
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = a.getAttribute('href') || '';
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      const url = href.startsWith('#') ? href.slice(1) : href;
      if (!url.startsWith('/')) return;
      e.preventDefault();
      this.navigate(url);
    });
    this.go();
  }
};

function PageNotFound(view) {
  setTitle('Halaman tidak ditemukan');
  view.innerHTML = `<div class="wrap empty"><div class="empty__ico">${ui('search', 32)}</div><h1>Halaman tidak ditemukan</h1><p>Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.</p><div class="empty__act"><a class="btn btn--accent" href="/">Ke Beranda</a><a class="btn btn--ghost" href="/isi-ulang">Lihat Layanan</a></div></div>`;
}



/* script 15 */

/* app.js — kerangka: header putih bergaris hitam tebal, tombol aktif berbentuk pil hitam, tanpa menu di mobile, footer kuning berisi semua tautan. */
(function () {
  const LINKS = [['home', 'Beranda', '#/'], ['ppob', 'Isi Ulang & Tagihan', '#/isi-ulang'], ['game', 'Top Up Game', '#/topup'], ['pesanan', 'Cek Transaksi', '#/pesanan']];
  const top = () => `<div class="util"><div class="util__in"><span>Tanpa akun · Status transaksi dicek lewat nomor invoice</span><nav aria-label="Tautan cepat"><a href="/bantuan" data-nav="help">Bantuan</a><a href="/bantuan/syarat">Syarat</a><a href="/bantuan/privasi">Privasi</a></nav></div></div>
    <div class="top__in">${logoFull()}
    <nav class="top__links" aria-label="Navigasi utama">${LINKS.map(l => `<a href="${l[2]}" data-nav="${l[0]}">${l[1]}</a>`).join('')}</nav>
    <div class="top__r"><button type="button" class="top__find" data-open-palette aria-label="Cari layanan atau game (Ctrl+K)">${ui('search', 18)}<span>Cari</span><kbd>Ctrl K</kbd></button>
      <a class="btn btn--accent btn--sm top__cta" href="/isi-ulang">Mulai Pesan</a>
      <a class="btn btn--ghost btn--sm top__tx" href="/pesanan">Cek Transaksi</a></div></div>`;
  function footer() {
    const c = [];
    if (SITE.email) c.push(`<li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>`);
    if (SITE.whatsapp) c.push(`<li>WhatsApp ${esc(SITE.whatsapp)}</li>`);
    if (SITE.phone) c.push(`<li>Telepon ${esc(SITE.phone)}</li>`);
    if (SITE.hours) c.push(`<li>${esc(SITE.hours)}</li>`);
    if (SITE.address) c.push(`<li>${esc(SITE.address)}</li>`);
    return `<div class="wrap"><div class="ft">
      <div class="ft__a">${logoFull()}<p>Isi pulsa, bayar tagihan, voucher digital, dan top up game dengan harga yang terlihat sebelum bayar.</p></div>
      <div><h3>Layanan</h3><ul>${PPOB.slice(0, 5).map(s => `<li><a href="${Catalog.href(s)}">${esc(s.short || s.name)}</a></li>`).join('')}<li><a href="/topup">Top Up Game</a></li></ul></div>
      <div><h3>Bantuan</h3><ul><li><a href="/pesanan">Cek Transaksi</a></li><li><a href="/bantuan">Pertanyaan Umum</a></li><li><a href="/bantuan/syarat">Syarat &amp; Ketentuan</a></li><li><a href="/bantuan/privasi">Kebijakan Privasi</a></li></ul></div>
      <div><h3>Kontak</h3><ul>${c.join('')}</ul></div></div>
      <div class="ft__pay"><span>Metode bayar</span>${PAY_METHODS.map(m => `<i>${esc(m.name)}</i>`).join('')}</div>
      <p class="ft__copy">© ${new Date().getFullYear()} ${esc(SITE.legalName || SITE.name)}</p></div>`;
  }
  function boot() {
    const topEl = $('#top'), ft = $('#site-footer'), skip = $('#skip'), view = $('#view');
    if (!topEl || !ft || !view) { setTimeout(boot, 30); return; }
    topEl.innerHTML = top();
    ft.innerHTML = footer();
    Palette.init();
    if (skip) skip.addEventListener('click', e => { e.preventDefault(); view.focus(); view.scrollIntoView(); });
    Router.start();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

