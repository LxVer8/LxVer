const SITE_DATA = {

  videoChannels: [
    { href: "https://www.youtube.com/@Makkro",         thumb: "images/makkro.jpg",        name: "Makkro",        amount: "+850 videos", date: "Since August 3rd, 2022 to date" },
    { href: "https://www.youtube.com/@EUWXYZ1",        thumb: "images/xyz.jpg",           name: "XYZ",           amount: "+40 videos",  date: "Since July 15th, 2026 to date" },
    { href: "https://www.youtube.com/@EkkoTheNeekoYT", thumb: "images/ekkotheneeko.jpg",  name: "EkkoTheNeeko",  amount: "+25 videos",  date: "Since April 21st, 2023 to date (not constant)" },
    { href: "https://www.youtube.com/@GameBoltPlays",  thumb: "images/gameboltplays.jpg", name: "GameBoltPlays", amount: "~25 videos",  date: "From September 22nd, 2024 until around April 2025" },
    { href: "https://www.youtube.com/@Urpog1",         thumb: "images/urpog.jpg",         name: "Urpog",         amount: "~20 videos",  date: "From January 18th, 2025 until around June 2025" },
    { href: "https://www.youtube.com/@FerNasus145",    thumb: "images/fernasus145.jpg",   name: "FerNasus145",   amount: "~14 videos",  date: "From September 19th, 2022 until around July 2023" },
    { href: "https://www.youtube.com/@SloppyWalrusX",  thumb: "images/sloppywalrus.jpg",  name: "Sloppy Walrus", amount: "1 video",     date: "August 13th, 2023. It was too hard LO" }
  ],

  shortFormTrigger: {
    name: "Other random videos",
    date: "Short form content uploaded on Twitter"
  },

  shortFormVideos: [
    { href: "https://x.com/LxVer8/status/2093683010717577379?s=20",            thumbnail: "images/twitter/17.png",  title: "SoloQ Challenge 2026 (Part 2, 3 and 4)",       date: "August 30th, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/EkkoTheNeekoTW/status/2091860382855966879?s=20",    thumbnail: "images/twitter/16.png",  title: "SoloQ Challenge 2026 (Part 1)",                date: "August 24th, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/LxVer8/status/2082821077017711041?s=20",            thumbnail: "images/twitter/15.png",  title: "eko de neko soloq chalenge!!!!!!",             date: "July 30th, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/LxVer8/status/2079546607406579989?s=20",            thumbnail: "images/twitter/14.png",  title: "\"Ella hace todo por seducirme\"",             date: "July 21st, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/LxVer8/status/2074204743660978676?s=20",            thumbnail: "images/twitter/13.png",  title: "Down Under - Ekko Montage",                    date: "July 6th, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/EkkoTheNeekoTW/status/2046575682700840988?s=20",    thumbnail: "images/twitter/12.png",  title: "Dusk and Dawn Ekko",                           date: "April 21st, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/LxVer8/status/2040636501952766233?s=20",            thumbnail: "images/twitter/11.png",  title: "Peak Poppy performance",                       date: "April 5th, 2026 | fay31" },
    { href: "https://x.com/LxVer8/status/2011218786083619307?s=20",            thumbnail: "images/twitter/10.png",  title: "Prendo el velador PUM",                        date: "January 13th, 2026 | EkkoTheNeeko" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1963211829032685681?s=20",    thumbnail: "images/twitter/9.png",   title: "CINEMA",                                       date: "September 3rd, 2025 | EkkoTheNeeko" },
    { href: "https://x.com/LxVer8/status/1887686871158800563?s=20",            thumbnail: "images/twitter/8.png",   title: "💘𝓔𝓼𝓽𝓸𝔂 𝓪𝓫𝓼𝓸𝓵𝓾𝓽𝓪𝓶𝓮𝓷𝓽𝓮 𝓬𝓸𝓵𝓪𝓹𝓼𝓪𝓭𝓸💘",      date: "February 6th, 2025 | ElMillor" },
    { href: "https://x.com/MakkroLoL/status/1865098384425521413?s=20",         thumbnail: "images/twitter/7-2.png", title: "Makkro wishes you merry christmass!",          date: "December 6th, 2024 | Makkro" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1810452221009519016?s=20",    thumbnail: "images/twitter/5.png",   title: "Tristaneitor 3000",                            date: "July 8th, 2024 | EkkoTheNeeko" },
    { href: "https://x.com/konradosj/status/1809631099259146332?s=20",         thumbnail: "images/twitter/4.png",   title: "Yordle Mall Wizard",                           date: "July 6th, 2024 | konradosj" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1808996425243537866?s=20",    thumbnail: "images/twitter/3.png",   title: "Five Nights at Ekko's",                        date: "July 4th, 2024 | EkkoTheNeeko" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1802733193713406272?s=20",    thumbnail: "images/twitter/2.png",   title: "Ekko hits the shacobong",                      date: "June 17th, 2024 | EkkoTheNeeko" },
    { href: "https://x.com/MakkroLoL/status/1802725729685176368?s=20",         thumbnail: "images/twitter/2-2.png", title: "Ornn hits the shacobong",                      date: "June 17th, 2024 | Makkro" },
    { href: "https://x.com/LxVer8/status/1784719746555888078?s=20",            thumbnail: "images/twitter/1.png",   title: "\"I think you are pretty good at this game\"", date: "April 28th, 2024 | Makkro" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1782856226843267523?s=20",    thumbnail: "images/twitter/7.png",   title: "Giant - Ekko Montage",                         date: "April 23rd, 2024 | EkkoTheNeeko" },
    { href: "https://x.com/EkkoTheNeekoTW/status/1777803687655559573?s=20",    thumbnail: "images/twitter/6.png",   title: "DuoQ Challenge 2024",                          date: "April 9th, 2024 | EkkoTheNeeko" }
  ],

  bibles: [
    { href: "https://www.patreon.com/cw/Makkro",                                                                        thumb: "images/ornn.png",   name: "Makkro's Ornn Bible",          date: "October 2024 to date (Patreon only)" },
    { href: "https://docs.google.com/spreadsheets/d/1zeejIO2xDI5ml9j5jkHwhSZExa4ZL9vPbgHKqectCqg/edit?usp=sharing",     thumb: "images/shaco.png",  name: "The Shacopedia",               date: "July 2025 to June 2026 (WIP)" },
    { href: "https://docs.google.com/spreadsheets/d/1ZdUMdGtwC0jiNKC2Re1Po77jVIzohG-3GQw0nIgiqMc/edit?usp=sharing",     thumb: "images/illaoi.png", name: "The Illaoi Bible",             date: "December 2025 to June 2026 (WIP)" },
    { href: "https://docs.google.com/spreadsheets/d/1yd2CGT7A--N5_25NoQycl-HSiCqSurtaBfGme5oBmuo/edit?usp=sharing",     thumb: "images/kled.png",   name: "The Kled Bible",               date: "December 2025 to date (Not managed by me)" },
    { href: "https://docs.google.com/spreadsheets/d/1jIqZHUREwuN7VXZ-xLTgA4OW0bpwGRvBwosqaT3qVsw/edit?usp=sharing",     thumb: "images/ekko.png",   name: "EkkoTheNeeko's Ekko Bible",    date: "January 2025 to June 2026 (Canceled-ish)" },
    { href: "https://docs.google.com/spreadsheets/d/1lVT9N834KLr8Mdum_UAzlFRx3kLbY458VL7ueCT3fkU/edit?usp=sharing",     thumb: "images/jax.png",    name: "The Jax Bible",                date: "January 2026 to date (Paused)" },
    { href: "https://docs.google.com/spreadsheets/d/15JnfU6PWoR_8rMnIz_SsY_1w-lrXFlTu1-RhBE67whw/edit?usp=sharing",     thumb: "images/nasus.png",  name: "The Nasus Bible",              date: "Around 2022-2023 (Canceled)" }
  ],

  extras: [
    { href: "https://lxver8.github.io/CTECGuessr/",                     thumb: "images/ctecguessr.png",                   name: "CTECGuessr",                        date: "June 15th, 2026 (Working, but WIP)" },
    { href: "https://lxver8.github.io/Locke/",                          thumb: "images/lockebible.png",                   name: "The Locke Bible",                   date: "June 27th, 2026 to date (WIP)" },
    { href: "https://lxver8.github.io/LeagueOfMath/",                   thumb: "images/leagueofmath.png",                 name: "League of Math",                    date: "July 15th, 2026 (Very early in development)" },
    { href: "https://sites.google.com/view/lolguidesarchive/main",      thumb: "images/leagueoflegendsguidesarchive.png", name: "League of Legends Guides Archive",  date: "January 13th, 2026 (Planning on a big rework)" },
    { href: "#",                                                        thumb: "images/leagueofkeystrokes.png",           name: "League of Keystrokes",              date: "July 29th, 2026 (Not released publically yet)" },
    { href: "#",                                                        thumb: "images/oldworldmap.png",                  name: "A Helper World",                    date: "Haven't started. Would show the map of the world with information for GeoGuessr." },
    { href: "#",                                                        thumb: "images/allthemasterypoints.png",          name: "All The Mastery Points",            date: "Haven't started. Would track multiple League account's mastery points." }
  ],

  achievementsFeatured: [
    { bgImg: "images/achievements/digs.png",        title: "+20.000.000 Digs",                   desc: "Mined 20M block in Minecraft, mostly on the same Server (Enigma)" },
    { bgImg: "images/achievements/ornnpoints.jpg",  title: "1.400.000 Points on Ornn",           desc: "Reached 1.4M mastery points on Ornn (on multiple accounts)" },
    { bgImg: "images/achievements/shacopoints.jpg", title: "1.300.000 Points on Shaco",          desc: "Reached 1.3M mastery points on Shaco (on -mostly- the same account)" },
    { bgImg: "images/achievements/loltime.png",     title: "+14.000 hours in League of Legends", desc: "Played 14k hours in League of Legends, spent in around 20 accounts" }
  ],

  achievementsRest: [
    { year: "September 2026", bgImg: "images/achievements/attmyn.png",         title: "ATTMYN Release",                              desc: "All The Technical Mods You Need is a Minecraft modpack I made with technical mods" },
    { year: "July 2026",      bgImg: "images/achievements/xyzeditor.jpg",      title: "Editor for XYZ",                              desc: "Became an editor for XYZ on YouTube" },
    { year: "June 2026",      bgImg: "images/achievements/arenachall.png",     title: "Challenger in Arena",                         desc: "Based on arenasweats.lol, I got Challenger in LAS. I also became R1 Galio and Milio as well" },
    { year: "June 2026",      bgImg: "images/achievements/ctec.webp",          title: "Joined CTEC",                                 desc: "CTEC is a mandarin-based Technical Minecraft Server, and one of the best in the world" },
    { year: "April 2025",     bgImg: "images/achievements/loleventstaff.jpg",  title: "League of Legends Event Staff",               desc: "I became event staff for the League of Legends Discord Server (I'm not a Rioter though)" },
    { year: "November 2024",  bgImg: "images/achievements/pinkwardmod.jpg",    title: "Moderator for PinkWard",                      desc: "Became a moderator for PinkWard, both in his Discord server and his Twitch channel" },
    { year: "October 2024",   bgImg: "images/achievements/makkrobible.png",    title: "Helper on Makkro's Bible",                    desc: "I began helping Makkro to update and rework his Ornn Bible" },
    { year: "April 2024",     bgImg: "images/achievements/rotterdam.jpg",      title: "Twitchcom Rotterdam",                         desc: "I went to Rotterdam, Netherlands for Twitchcom and met my friends yay" },
    { year: "April 2024",     bgImg: "images/achievements/minecraftshaco.jpg", title: "Minecraft Shaco Custom Skin",                 desc: "I finished and published my best custom skin, Minecraft Shaco for League of Legends" },
    { year: "March 2024",     bgImg: "images/achievements/speedruncom.png",    title: "Admin for League of Legends in Speedrun.com", desc: "Became an admin for the League of Legends game on Speedrun.com" },
    { year: "February 2024",  bgImg: "images/achievements/enigma.png",         title: "Joined Enigma",                               desc: "Enigma is a Technical Minecraft Server with a lot of users and big projects. I became a mod in 2025" },
    { year: "April 2023",     bgImg: "images/achievements/ekkoediting.png",    title: "Moderator for EkkoTheNeeko",                  desc: "Became a moderator for EkkoTheNeeko, both in his Discord server and his Twitch channel" },
    { year: "August 2022",    bgImg: "images/achievements/makkroediting.png",  title: "Editor for Makkro",                           desc: "Became an editor for Makkro, editing videos for his YouTube channel" }
  ],

  mapArts: [
    { thumb: "images/maparts/okak.png",                    full: "images/maparts/okak.png",                    alt: "okak",                          name: "okak",                            author: "---",                             started: "Somewhere in June 2026",       finished: "June 23rd, 2026",               size: "128x128 blocks (1x1 map)", staircased: "Yes", blocks: "Concrete and Terracotta", madeIn: "CTEC",       madeWith: "---" },
    { thumb: "images/maparts/palebluedot.png",             full: "images/maparts/palebluedot.png",             alt: "Pale Blue Dot",                 name: "Pale Blue Dot",                   author: "Voyager 1 (1990)",                started: "July 2nd, 2025",               finished: "July 4th, 2025",                size: "128x256 blocks (1x2 map)", staircased: "Yes", blocks: "Concrete + Terracotta",   madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/theambassadors.png",          full: "images/maparts/theambassadors.png",          alt: "The Ambassadors",               name: "The Ambassadors",                 author: "Hans Holbein the Younger (1533)", started: "June 11th, 2025",              finished: "June 27th, 2025",               size: "512x512 blocks (4x4 maps)", staircased: "Yes", blocks: "Carpets",                madeIn: "Bombacraft", madeWith: "---" },
    { thumb: "images/maparts/nevertrustafart.png",         full: "images/maparts/nevertrustafart.png",         alt: "Never Trust a Fart",            name: "never trust a #fart",             author: "---",                             started: "June 13th, 2025",              finished: "June 13th, 2025",               size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "Bombacraft", madeWith: "---" },
    { thumb: "images/maparts/99ofgamblers.png",            full: "images/maparts/99ofgamblers.png",            alt: "99% of Gamblers",               name: "99% of gamblers...",              author: "---",                             started: "June 7th, 2025",               finished: "June 9th, 2025",                size: "384x256 blocks (3x2 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "Bombacraft", madeWith: "---" },
    { thumb: "images/maparts/dieeeeeee.png",               full: "images/maparts/dieeeeeee.png",               alt: "Dieeeeeee",                     name: "DIEEEEEEEEE",                     author: "SloppyWalrusX",                   started: "June 7th, 2025",               finished: "June 9th, 2025",                size: "256x128 blocks (2x1 map)", staircased: "Yes", blocks: "Carpets",                 madeIn: "Bombacraft", madeWith: "---" },
    { thumb: "images/maparts/popefrancis.png",             full: "images/maparts/popefrancis.png",             alt: "Pope Francis",                  name: "Gangster Pope Francis",           author: "---",                             started: "May 5th, 2025",                finished: "May 10th, 2025",                size: "256x256 blocks (2x2 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "iGmi, Rayz and Millan" },
    { thumb: "images/maparts/jackblack.png",               full: "images/maparts/jackblack.png",               alt: "Jack Black",                    name: "Gangster Jack Black",             author: "---",                             started: "April 18th, 2025",             finished: "Somewhere in May 2025",         size: "256x256 blocks (2x2 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/brrbrrpatapim.png",           full: "images/maparts/brrbrrpatapim.png",           alt: "Brbrrpatapim",                  name: "brr brr patapim",                 author: "---",                             started: "May 2nd, 2025",                finished: "May 2nd, 2025",                 size: "128x128 blocks (1x1 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "iGmi and Millan" },
    { thumb: "images/maparts/ctec.png",                    full: "images/maparts/ctec.png",                    alt: "CTEC",                          name: "CTEC's Logo",                     author: "---",                             started: "April 25th, 2025",             finished: "April 25th, 2025",              size: "128x128 blocks (1x1 map)", staircased: "Yes", blocks: "Concrete + Prismarine",   madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/qrcode.png",                  full: "images/maparts/qrcode.png",                  alt: "QR Code",                       name: "QR Code",                         author: "LxVer",                           started: "Somewhere in April 2025",      finished: "Somewhere in April 2025",       size: "128x128 blocks (1x1 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/enigma.png",                  full: "images/maparts/enigma.png",                  alt: "Enigma",                        name: "Enigma's Logo",                   author: "---",                             started: "Somewhere in March 2025",      finished: "Somewhere in March 2025",       size: "128x128 blocks (1x1 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/otag.png",                    full: "images/maparts/otag.png",                    alt: "Otag",                          name: "otag",                            author: "---",                             started: "February 15th-ish, 2025",      finished: "February 19th, 2025",           size: "256x128 blocks (2x1 map)", staircased: "Yes", blocks: "Concrete + Dirt",         madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/powderandekko.png",           full: "images/maparts/powderandekko.png",           alt: "Powder and Ekko",               name: "Powder and Ekko",                 author: "Arcane lol",                      started: "February 17th, 2025",          finished: "February 19th, 2025",           size: "256x128 blocks (2x1 map)", staircased: "Yes", blocks: "Concrete",                madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/blink.png",                   full: "images/maparts/blink.png",                   alt: "Blink",                         name: "blink",                           author: "Crunchy Cat",                     started: "February 11th, 2025",          finished: "February 11th, 2025",           size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Concrete",                madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/saturnodevirandoasuhijo.png", full: "images/maparts/saturnodevirandoasuhijo.png", alt: "Saturno Devorando a Su Hijo",   name: "Saturno Devorando a su Hijo",     author: "Francisco Goya (1823*)",          started: "February 1th-ish, 2025",       finished: "February 5th, 2025",            size: "128x256 blocks (1x2 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/argentinareference.png",      full: "images/maparts/argentinareference.png",      alt: "Argentina Reference",           name: "ARGENTINA REFERENCE???",          author: "---",                             started: "Somewhere in January 2025",    finished: "Somewhere in January 2025",     size: "256x256 blocks (2x2 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/followtheleader.png",         full: "images/maparts/followtheleader.png",         alt: "Follow the Leader",             name: "Follow the Leader",               author: "Korn",                            started: "Somewhere in September 2024",  finished: "Somewhere in September 2024",   size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "Enigma",     madeWith: "---" },
    { thumb: "images/maparts/cull.png",                    full: "images/maparts/cull.png",                    alt: "Cull",                          name: "Cull",                            author: "League of Legends",               started: "Late 2023, early 2024",        finished: "Late 2023, early 2024",         size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "AirForce",   madeWith: "---" },
    { thumb: "images/maparts/shaco.png",                   full: "images/maparts/shaco.png",                   alt: "Shaco",                         name: "Shaco Illustration Icon",         author: "League of Legends",               started: "Late 2023, early 2024",        finished: "Late 2023, early 2024",         size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "AirForce",   madeWith: "---" },
    { thumb: "images/maparts/sex.png",                     full: "images/maparts/sex.png",                     alt: "sex",                           name: "sex",                             author: "League of Legends",               started: "Late 2023, early 2024",        finished: "Late 2023, early 2024",         size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "AirForce",   madeWith: "---" },
    { thumb: "images/maparts/balls.png",                   full: "images/maparts/balls.png",                   alt: "balls",                         name: "balls",                           author: "---",                             started: "Late 2023, early 2024",        finished: "Late 2023, early 2024",         size: "128x128 blocks (1x1 map)", staircased: "No",  blocks: "Carpets",                 madeIn: "AirForce",   madeWith: "---" }
  ],

  socials: [
    { href: "https://github.com/LxVer8",         label: "GitHub",  icon: "fa-brands fa-github" },
    { href: "https://www.twitch.tv/LxVer8",      label: "Twitch",  icon: "fa-brands fa-twitch" },
    { href: "https://x.com/LxVer8",              label: "Twitter", icon: "fa-brands fa-twitter" },
    { href: "https://discord.gg/z3xVM2U8Mr",     label: "Discord", icon: "fa-brands fa-discord" }
  ],

  footerCopy: "&copy; 2026 - Made with 💜 - LxVer's Den was created under Riot Games' \"Legal Jibber Jabber\" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project."
};