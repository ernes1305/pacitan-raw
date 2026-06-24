// Katalog rilisan netlabel Pacitan Raw — gaya halaman per-rilisan (mengacu Yes No Wave).
// No. katalog "PR-###" diberikan oleh Pacitan Raw. artistSlug menaut ke /band/<slug>.

const thumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

export const releases = [
  {
    slug: 'royal-flush-brutal-worldwide',
    catalog: 'PR-001',
    artist: 'Royal Flush',
    artistSlug: 'royal-flush',
    title: 'Brutal Worldwide',
    year: 2016,
    date: '2016',
    genre: 'Hardcore',
    cover: '/img/royal-flush/cover-sq.jpg',
    spotifyArtistId: '0Z13EcoAE9lRh3rcdOWVzS',
    tracks: ['RFHC', 'Before The End', 'After Blood', 'Another Victim Die', 'The Destroy World (ft. Dope Troopers)', 'Brutal Worldwide', 'War Is Over', 'Bangun Kembali'],
    liner: 'Album debut Royal Flush bertema kekejaman perang dunia — tentang korban jiwa, kehancuran, dan semangat untuk bangkit kembali. Dilengkapi video klip "Brutal Worldwide" dan, pada 2017, kolaborasi dengan Dope Troopers (Hip-Hop).',
    credits: ['Fajar Afrianto — vokal', 'Derry Angga Ramanda — gitar', 'Fals Danny Alvan — gitar', 'Dewa Probo — bass', 'Riza Pahlawan — drum', 'Kolaborasi: Dope Troopers (Slam & Willy) pada "The Destroy World"'],
    license: 'Rilisan independen — hak cipta pada Royal Flush.',
    links: [{ label: 'Spotify', url: 'https://open.spotify.com/artist/0Z13EcoAE9lRh3rcdOWVzS', status: 'active' }],
  },
  {
    slug: 'pxmx-hometown',
    catalog: 'PR-002',
    artist: 'P.X.M.X',
    artistSlug: 'packan-manoex',
    title: 'Hometown',
    year: 2023,
    date: '2023',
    genre: 'Punk Rock',
    cover: '/img/packan-manoex/hometown.jpg',
    spotifyAlbumId: '6qgegWf4gsL62HnTLrgKom',
    tracks: ['Funtime', 'Right Side', 'PRLS (Punk Rock Love Story)', 'Nothing', 'Holiday', 'Black and Blue', 'Theme Song', "Our Tatto's", 'Indonesia Skinheadpunk', 'Survive', 'No Less No More', 'Hantam Langit', 'Hometown !!'],
    liner: 'Wajah terkini punk rock pelopor Pacitan, Packan Manoex, kini di bawah nama P.X.M.X. Tiga belas trek yang mempertemukan akar punk 2007 dengan energi hari ini — termasuk "Survive", lagu yang menandai babak kebangkitan skena.',
    credits: ['Boneng — vokal', 'Si Bho — drum', '(formasi awal: Hargos † · Juantop · Doni · Dimas · Kancil)'],
    license: 'Rilisan independen — hak cipta pada P.X.M.X.',
    links: [{ label: 'Spotify', url: 'https://open.spotify.com/artist/1EZDtGw1OpZwel5wcfBWKH', status: 'active' }],
  },
  {
    slug: 'suwex-untuk-apa',
    catalog: 'PR-003',
    artist: 'Suwex',
    artistSlug: 'chaos-suwex',
    title: 'Untuk Apa?!',
    year: 2024,
    date: '9 Juli 2024',
    genre: 'Hardcore Punk',
    cover: '/img/chaos-suwex/album-untukapa.jpg',
    bandcampAlbumId: '2019638435',
    bandcampUrl: 'https://suwex.bandcamp.com/album/untuk-apa',
    tracks: ['Intro', 'Peras Eksistensi', 'Pajak VS Upeti', 'Tanpa Fakta', 'JOH!', 'Terserah', 'Untuk Apa?!', 'Terserah X Monong Chaos (Crash File)'],
    liner: 'Album Suwex — delapan trek hardcore punk yang lahir dari prinsip "keterbatasan sebagai kekuatan". Direkam dan dirilis mandiri; tersedia name-your-price di Bandcamp.',
    credits: ['Monong Chaos — vokal', 'Pitra Bojamin — gitar', 'Kepet Tuner — bass', 'RX.Tarzan — drum'],
    license: 'Rilisan independen — hak cipta pada Suwex & Bapangan Bersatu. Name-your-price di Bandcamp.',
    links: [
      { label: 'Bandcamp', url: 'https://suwex.bandcamp.com/album/untuk-apa', status: 'active' },
      { label: 'MediaFire (lama)', url: 'https://www.mediafire.com/file/b9hjnmfbf98didt', status: 'archive' },
    ],
  },
];

// peta artistSlug -> rilisan (dipakai halaman band untuk menaut ke rilisannya)
export const releasesByArtist = releases.reduce((m, r) => {
  (m[r.artistSlug] = m[r.artistSlug] || []).push(r);
  return m;
}, {});
