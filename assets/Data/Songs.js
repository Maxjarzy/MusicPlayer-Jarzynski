const songs = 
[
    {
        id: 1,
        title: 'En la intimidad',
        artist: 'Emilia Mernes ft Callejero Fino',
        genre: 'Cumbia',
        url: require('../../assets/Songs/Genres/Cumbia/En_la_intimidad.mp3'),
        artwork: 'https://www.cmtv.com.ar/tapas-cd/0820130001675304787.webp',
        duration: 165
    },
    {
        id: 2,
        title: 'M.A Remix',
        artist: 'BM, Callejero Fino, La Joaqui, Lola Indigo',
        genre: 'Cumbia',
        url: require('../../assets/Songs/Genres/Cumbia/MA_remix.mp3'),
        artwork: 'https://i.scdn.co/image/ab67616d0000b273cbbbad87cff1115a090ed190',
        duration: 268
    },
    {
        id: 3 ,
        title: 'Un Finde',
        artist: 'Big One, FMK, Ke personajes',
        genre: 'Cumbia',
        url:require('../../assets/Songs/Genres/Cumbia/Un_finde.mp3'),
        artwork: 'https://www.cmtv.com.ar/tapas-cd/0151158001680714482.webp',
        duration: 162
    },
    {
        id: 4,
        title: 'A romper la disco',
        artist: 'Tommy Viera, Daddy Yankee',
        genre: 'Reggaeton',
        url: require('../../assets/Songs/Genres/Reggaetón/A_romper_la_disco.mp3'),
        artwork: 'https://sun9-50.userapi.com/impf/c633117/v633117599/19b33/gESSkozoXrg.jpg?size=500x500&quality=96&sign=d6a4693c0e12f97a9bfb01572537fb0a&c_uniq_tag=1KDkp419GCGWbdq5f3hNBhyYR1xRUIbPnxhHoArYBys&type=album',
        duration: 168
    },
    {
        id: 5,
        title: 'Finge que me amas',
        artist: 'Tony Dize, Don Omar',
        genre: 'Reggaeton',
        url: require('../../assets/Songs/Genres/Reggaetón/Finge_que_me_amas.mp3'),
        artwork: 'https://cdns-images.dzcdn.net/images/cover/e15c5ee0e6c654a917ea1299dac4984a/500x500.jpg',
        duration: 234
    },
    {
        id: 6,
        title: 'Flow HP',
        artist: 'Don Omar, Residente',
        genre: 'Reggaeton',
        url: require('../../assets/Songs/Genres/Reggaetón/Flow_HP.mp3'),
        artwork: 'https://images.genius.com/19d76342925d3eb3ec839150630c2397.590x590x1.jpg',
        duration: 248
    },
    {
        id: 7,
        title: 'No es cumpa mía',
        artist: 'Dady Yankee',
        genre: 'Reggaeton',
        url: require('../../assets/Songs/Genres/Reggaetón/No_es_culpa_mia.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000004248238-ocy9x9-t500x500.jpg',
        duration: 107
    },
    {
        id: 8,
        title: 'RX',
        artist: 'Don Omar, Kendo, Syko',
        genre: 'Reggaeton',
        url: require('../../assets/Songs/Genres/Reggaetón/RX.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000011908510-9ac2fv-t500x500.jpg',
        duration: 225
    },
    {
        id: 9,
        title: 'La balada del diablo y la muerte (Encuentro en el estudio version)',
        artist: 'La Renga',
        genre: 'Rock',
        url: require('../../assets/Songs/Genres/Rock/La_balada_del_diablo_y_la_muerte_(Estudio_version).mp3'),
        artwork: 'https://i.ytimg.com/vi/CBgrUChC-X8/maxresdefault.jpg',
        duration: 429
    },
    {
        id: 10,
        title: 'Como Alí',
        artist: 'Los piojos',
        genre: 'Rock',
        url: require('../../assets/Songs/Genres/Rock/Como_Alí.mp3'),
        artwork: 'https://i.scdn.co/image/ab6761610000e5eb94c942de86e1d714b7238db1',
        duration: 211
    },
    {
        id: 11,
        title: 'Cross road blues',
        artist: 'Robert Johnson',
        genre: 'Blues',
        url: require('../../assets/Songs/Genres/Blues/Cross_road_blues.mp3'),
        artwork: 'https://i.discogs.com/mqUVRiZJ0pF8wO42cNPOP4o6fHmytlvuwWSXc5jLSUI/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3MzQ4/MjAtMTQ3NzA4NTQ5/My0xNjM3Lm1wbw.jpeg',
        duration: 158
    },
    {
        id: 12,
        title: 'Hoochie coochie man',
        artist: 'Muddy Waters',
        genre: 'Blues',
        url: require('../../assets/Songs/Genres/Blues/Hoochie_coochie_man.mp3'),
        artwork: 'https://i5.walmartimages.com/seo/Hoochie-Coochie-Man-Vinyl_ebf3e2fd-ea29-41c8-9015-3a255fb53f20_1.817e8c8a88011f23fe6bd993f6388536.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        duration: 173
    },
    {
        id: 13,
        title: 'Four Seasons',
        artist: 'Antonio Vivaldi',
        genre: 'Clasic',
        url: require('../../assets/Songs/Genres/Clasic/Four_seasons.mp3'),
        artwork: 'https://img.sheetmusic.direct/catalogue/contributor/ad79836d-9849-44df-8789-180bbc823f3c/large.jpg',
        duration: 2435
    },
    {
        id: 14,
        title: 'Für Elise',
        artist: 'Ludwig van Beethoven',
        genre: 'Clasic',
        url: require('../../assets/Songs/Genres/Clasic/Für_Elise.mp3'),
        artwork: 'https://3.bp.blogspot.com/-hjWysaNogFs/WCMqIKtnwbI/AAAAAAAAJJo/jWuwr2R-wuMepzKBuTHScv38jK2ETNEowCLcB/s1600/folder.jpg',
        duration: 173
    },
    {
        id: 15,
        title: 'Cruise',
        artist: 'Florida Georgia Line',
        genre: 'Country',
        url: require('../../assets/Songs/Genres/Country/Cruise.mp3'),
        artwork: 'https://img.sheetmusic.direct/catalogue/album/7c0b9033-86ae-438d-8ad7-d58a233c26a5/large.jpg',
        duration: 210
    }, 
    {
        id: 16,
        title: 'Friends in low places',
        artist: 'Garth Brooks',
        genre: 'Country',
        url: require('../../assets/Songs/Genres/Country/Friends_In_low_places.mp3'),
        artwork: 'https://lastfm.freetls.fastly.net/i/u/500x500/4d077ed31b044c3fba61f9872dc7c5d4.jpg',
        duration: 264
    },
    {
        id: 17,
        title: 'Firs of the year',
        artist: 'Skrillex',
        genre: 'Electronic',
        url: require('../../assets/Songs/Genres/Electronic/First_of_the_year.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000010757559-s028go-t500x500.jpg',
        duration: 261
    },
    {
        id: 18,
        title: 'Lean on',
        artist: 'Major Lazer & DJ Snake',
        genre: 'Electronic',
        url: require('../../assets/Songs/Genres/Electronic/Lean_on.mp3'),
        artwork: 'https://i.ebayimg.com/images/g/-TQAAOSwBDRghuYA/s-l500.jpg',
        duration: 176
    },
    {
        id: 19,
        title: 'Make it bun dem',
        artist: 'Skrillex & Damian Marley',
        genre: 'Electronic',
        url: require('../../assets/Songs/Genres/Electronic/Make_it_bun_dem.mp3'),
        artwork: 'https://lastfm.freetls.fastly.net/i/u/500x500/65ab85d7152f49d18dc416fc27b884fa.jpg',
        duration: 213
    },
    {
        id: 20,
        title: 'The sound of silence',
        artist: 'Simon and Garfunkel',
        genre: 'Folk',
        url: require('../../assets/Songs/Genres/Folk/The_sound_of_silence.mp3'),
        artwork: 'https://i.ebayimg.com/images/g/3vwAAOSwGh5g0N3S/s-l1200.jpg',
        duration: 185
    },
    {
        id: 21,
        title: 'Lose yourself',
        artist: 'Eminem',
        genre: 'Hip_Hop',
        url: require('../../assets/Songs/Genres/Hip_Hop/Lose_yourself.mp3'),
        artwork: 'https://lastfm.freetls.fastly.net/i/u/ar0/95dffb1e2bd84b128cdd3929abbec870.jpg',
        duration: 320
    },
    {
        id: 22,
        title: "You don't know",
        artist: 'Eminem ft 50 Cent, Cashis, Lloyd Banks',
        genre: 'Hip_Hop',
        url: require('../../assets/Songs/Genres/Hip_Hop/You_dont_know.mp3'),
        artwork: 'https://i.ebayimg.com/images/g/G-sAAOSwyFJghuh3/s-l600.jpg',
        duration: 258
    },
    {
        id: 23,
        title: 'So what',
        artist: 'Miles Davis',
        genre: 'Jazz',
        url: require('../../assets/Songs/Genres/Jazz/So_what.mp3'),
        artwork: 'https://cdn11.bigcommerce.com/s-rdecee92oy/images/stencil/500x659/products/24423/5912271/unilp89923-large__91185.1676628436.jpg?c=2',
        duration: 563
    },
    {
        id: 24,
        title: 'Take five',
        artist: 'Dave Brubeck',
        genre: 'Jazz',
        url: require('../../assets/Songs/Genres/Jazz/Take_five.mp3'),
        artwork: 'https://i.ebayimg.com/images/g/CSIAAOSwnnhkZlLh/s-l500.jpg',
        duration: 325
    },
    {
        id: 25,
        title: 'Crazy train',
        artist: 'Ozzy Osbourne',
        genre: 'Metal',
        url: require('../../assets/Songs/Genres/Metal/Crazy_train.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000072194694-0hlldx-t500x500.jpg',
        duration: 296
    },
    {
        id: 26,
        title: 'Enter sandman',
        artist: 'Metallica',
        genre: 'Metal',
        url: require('../../assets/Songs/Genres/Metal/Enter_sandman.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000161781213-m04ezm-t500x500.jpg',
        duration: 331
    },
    {
        id: 27,
        title: 'Bad guy',
        artist: 'Billie Eilish',
        genre: 'Pop',
        url: require('../../assets/Songs/Genres/Pop/Bad_guy.mp3'),
        artwork: 'https://i1.sndcdn.com/artworks-000585893159-qra1pk-t500x500.jpg',
        duration: 210
    },
    {
        id: 28,
        title: 'Shape of you',
        artist: 'Ed Sheeran',
        genre: 'Pop',
        url: require('../../assets/Songs/Genres/Pop/Shape_of_you.mp3'),
        artwork: 'https://m.media-amazon.com/images/I/51inO4DBH0L._UXNaN_FMjpg_QL85_.jpg',
        duration: 332
    },
    {
        id: 29,
        title: 'Someone like you',
        artist: 'Adele',
        genre: 'Pop',
        url: require('../../assets/Songs/Genres/Pop/Someone_like_you.mp3'),
        artwork: 'https://1.bp.blogspot.com/-JKyEg-jM5bU/UK_5d1J56yI/AAAAAAAAIh0/WNV0YFpHoKU/s1600/adele+someone+like+you+17.jpg',
        duration: 288
    },
    {
        id: 30,
        title: 'Blinding ligths',
        artist: 'The Weeknd',
        genre: 'RB',
        url: require('../../assets/Songs/Genres/R&B/Blinding_lights.mp3'),
        artwork: 'https://i.discogs.com/yd-eq2r-vp7K3z8DHt5mEEa6qys2sJziJjI86mCDkBs/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NjQ4/MTkwLTE1Nzg4NjA5/MDUtNjkxOC5qcGVn.jpeg',
        duration: 199
    },
    {
        id: 31,
        title: 'Say so',
        artist: 'Doja Cat',
        genre: 'RB',
        url: require('../../assets/Songs/Genres/R&B/Say_so.mp3'),
        artwork: 'https://i.ebayimg.com/00/s/NzI3WDcyNw==/z/rBwAAOSwaQdf4uW8/$_12.JPG?set_id=880000500F',
        duration: 239
    },
    {
        id: 32,
        title: 'I wanna love you',
        artist: 'Bob Marley',
        genre: 'Reggae',
        url: require('../../assets/Songs/Genres/Reggae/I_wanna_love_you.mp3'),
        artwork: 'https://d24jnm9llkb1ub.cloudfront.net/icpn/00602537298594/00602537298594-cover-zoom.jpg',
        duration: 230
    },
    {
        id: 33,
        title: 'No women no cry',
        artist: 'Bob Marley',
        genre: 'Reggae',
        url: require('../../assets/Songs/Genres/Reggae/No_women_no_cry.mp3'),
        artwork: 'https://i5.walmartimages.com/asr/ea649d3e-fcbf-44b6-87a8-fc41511c20e0_1.4efca59a2985da68bbd4a14c9e4ffcd5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        duration: 216
    },
    {
        id: 34,
        title: 'Pedro Navaja',
        artist: 'Rubén Blades',
        genre: 'Salsa',
        url: require('../../assets/Songs/Genres/Salsa/Pedro_Navaja.mp3'),
        artwork: 'https://i.ebayimg.com/00/s/MTQwMFgxNDAw/z/jfwAAOSw3thj6EOz/$_12.JPG?set_id=880000500F',
        duration: 444
    },
    {
        id: 35,
        title: 'Quimbara',
        artist: 'Celia Cruz',
        genre: 'Salsa',
        url: require('../../assets/Songs/Genres/Salsa/Quimbara.mp3'),
        artwork: 'https://fania.com/wp-content/uploads/2020/03/18CRGIM08517.jpg',
        duration: 295
    },
]

export default songs;