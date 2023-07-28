const songs = 
[
    {
        id: 1,
        title: 'En la intimidad',
        artist: 'Emilia Mernes ft Callejero Fino',
        genre: 'Cumbia',
        url: '../Songs/Genres/Cumbia/En_la_intimidad.mp3'
    },
    {
        id: 2,
        title: 'M.A Remix',
        artist: 'BM, Callejero Fino, La Joaqui, Lola Indigo',
        genre: 'Cumbia',
        url: '../Songs/Genres/Cumbia/MA_remix.mp3'
    },
    {
        id: 3 ,
        title: 'Un Finde',
        artist: 'Big One, FMK, Ke personajes',
        genre: 'Cumbia',
        url:'../Songs/Genres/Cumbia/Un_finde.mp3'
    },
    {
        id: 4,
        title: 'A romper la disco',
        artist: 'Tommy Viera, Daddy Yankee',
        genre: 'Reggaeton',
        url: '../Songs/Genres/Reggaetón/A_romper_la_disco.mp3'
    },
    {
        id: 5,
        title: 'Finge que me amas',
        artist: 'Tony Dize, Don Omar',
        genre: 'Reggaeton',
        url: '../Songs/Genres/Reggaetón/Finge_que_me_amas.mp3'
    },
    {
        id: 6,
        title: 'Flow HP',
        artist: 'Don Omar, Residente',
        genre: 'Reggaeton',
        url: '../Songs/Genres/Reggaetón/Flow_HP.mp3'
    },
    {
        id: 7,
        title: 'No es cumpa mía',
        artist: 'Dady Yankee',
        genre: 'Reggaeton',
        url: '../Songs/Genres/Reggaetón/No_es_culpa_mia.mp3'
    },
    {
        id: 8,
        title: 'RX',
        artist: 'Don Omar, Kendo, Syko',
        genre: 'Reggaeton',
        url: '../Songs/Genres/Reggaetón/RX.mp3'
    },
    {
        id: 9,
        title: 'La balada del diablo y la muerte (Encuentro en el estudio version)',
        artist: 'La Renga',
        genre: 'Rock',
        url: '../Songs/Genres/Rock/La_balada_del_diablo_y_la_muerte_(Estudio_version).mp3'
    },
    {
        id: 10,
        title: 'Como Alí',
        artist: 'Los piojos',
        genre: 'Rock',
        url: '../Songs/Genres/Rock/Como_Alí.mp3'
    },
    {
        id: 11,
        title: 'Cross road blues',
        artist: 'Robert Johnson',
        genre: 'Blues',
        url: '../Songs/Genres/Blues/Cross_road_blues.mp3'
    },
    {
        id: 12,
        title: 'Hoochie coochie man',
        artist: 'Muddy Waters',
        genre: 'Blues',
        url: '../Songs/Genres/Blues/Hoochie_coochie_man.mp3'
    },
    {
        id: 13,
        title: 'Four Seasons',
        artist: 'Antonio Vivaldi',
        genre: 'Clasic',
        url: '../Songs/Genres/Clasic/Four_seasons.mp3'
    },
    {
        id: 14,
        title: 'Für Elise',
        artist: 'Ludwig van Beethoven',
        genre: 'Clasic',
        url: '../Songs/Genres/Clasic/Für_Elise.mp3'
    },
    {
        id: 15,
        title: 'Cruise',
        artist: 'Florida Georgia Line',
        genre: 'Country',
        url: '../Songs/Genres/Country/Cruise.mp3'
    }, 
    {
        id: 16,
        title: 'Friends in low places',
        artist: 'Garth Brooks',
        genre: 'Country',
        url: '../Songs/Genres/Country/Friends_In_low_places.mp3'
    },
    {
        id: 17,
        title: 'Firs of the year',
        artist: 'Skrillex',
        genre: 'Electronic',
        url: '../Songs/Genres/Electronic/Firs_of_the_year.mp3'
    },
    {
        id: 18,
        title: 'Lean on',
        artist: 'Major Lazer & DJ Snake',
        genre: 'Electronic',
        url: '../Songs/Genres/Electronic/Lean_on.mp3'
    },
    {
        id: 19,
        title: 'Make it bun dem',
        artist: 'Skrillex & Damian Marley',
        genre: 'Electronic',
        url: '../Songs/Genres/Electronic/Make_it_bun_dem.mp3'
    },
    {
        id: 20,
        title: 'The sound of silence',
        artist: 'Simon and Garfunkel',
        genre: 'Folk',
        url: '../Songs/Genres/Folk/The_sound_of_silence.mp3'
    },
    {
        id: 21,
        title: 'Lose yourself',
        artist: 'Eminem',
        genre: 'Hip_Hop',
        url: '../Songs/Genres/Hip_Hop/Lose_yourself.mp3'
    },
    {
        id: 22,
        title: "You don't know",
        artist: 'Eminem ft 50 Cent, Cashis, Lloyd Banks',
        genre: 'Hip_Hop',
        url: '../Songs/Genres/Hip_Hop/You_dont_know.mp3'
    },
    {
        id: 23,
        title: 'So what',
        artist: 'Miles Davis',
        genre: 'Jazz',
        url: '../Songs/Genres/Jazz/So_what.mp3'
    },
    {
        id: 24,
        title: 'Take five',
        artist: 'Dave Brubeck',
        genre: 'Jazz',
        url: '../Songs/Genres/Jazz/Tave_five.mp3'
    },
    {
        id: 25,
        title: 'Crazy train',
        artist: 'Ozzy Osbourne',
        genre: 'Metal',
        url: '../Songs/Genres/Metal/Crazy_train.mp3'
    },
    {
        id: 26,
        title: 'Enter sandman',
        artist: 'Metallica',
        genre: 'Metal',
        url: '../Songs/Genres/Metal/Enter_sandman.mp3'
    },
    {
        id: 27,
        title: 'Bad guy',
        artist: 'Billie Eilish',
        genre: 'Pop',
        url: '../Songs/Pop/Bad_guy.mp3'
    },
    {
        id: 28,
        title: 'Shape of you',
        artist: 'Ed Sheeran',
        genre: 'Pop',
        url: '../Songs/Pop/Shape_of_you.mp3'
    },
    {
        id: 29,
        title: 'Someone like you',
        artist: 'Adele',
        genre: 'Pop',
        url: '../Songs/Pop/Someone_like_you.mp3'
    },
    {
        id: 30,
        title: 'Blinding ligths',
        artist: 'The Weeknd',
        genre: 'R&B',
        url: '../Songs/R&B/Blinding_lights.mp3'
    },
    {
        id: 31,
        title: 'Say so',
        artist: 'Doja Cat',
        genre: 'R&B',
        url: '../Songs/R&B/Say_so.mp3'
    },
    {
        id: 32,
        title: 'I wanna love you',
        artist: 'Bob Marley',
        genre: 'Reggae',
        url: '../Songs/Reggae/I_wanna_love_you.mp3'
    },
    {
        id: 33,
        title: 'No women no cry',
        artist: 'Bob Marley',
        genre: 'Reggae',
        url: '../Songs/Reggae/No_women_no_cry.mp3'
    },
    {
        id: 34,
        title: 'Pedro Navaja',
        artist: 'Rubén Blades',
        genre: 'Salsa',
        url: '../Songs/Salsa/Pedro_navaja.mp3'
    },
    {
        id: 35,
        title: 'Quimbara',
        artist: 'Celia Cruz',
        genre: 'Salsa',
        url: '../Songs/Salsa/Quimbara.mp3'
    },



]

export default songs;