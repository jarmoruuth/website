// Astronomical object narrative data
const astroData = {

  'M74.jpg': {
    name: 'Messier 74',
    catalog: 'Messier 74 (NGC 628)',
    story: 'A nearly perfect example of a grand design spiral galaxy seen face-on from Earth. Its two well-defined arms host numerous star-forming regions and rich lanes of interstellar dust, making it one of the most symmetrical spirals known.',
    nameOrigin: 'Catalogued by Charles Messier in 1780 while searching for comets.',
    whatToLook: 'Two graceful spiral arms filled with blue star clusters and pink emission nebulae.',
    scale: 'About 32 million light-years away, roughly 95,000 light-years across.',
    constellation: 'Pisces',
    discovered: 'Pierre Méchain in 1780.'
  },

  'M78.jpg': {
    name: 'Messier 78',
    catalog: 'Messier 78 (NGC 2068)',
    story: 'A bright reflection nebula in the Orion Molecular Cloud Complex. The blue color comes from dust scattering starlight from young, hot stars still embedded within the gas. Several newly formed stars and protostars lie hidden inside.',
    nameOrigin: 'Catalogued by Charles Messier’s assistant Pierre Méchain in 1780.',
    whatToLook: 'Soft blue glow with dark dust lanes crossing in front of the illuminated clouds.',
    scale: 'About 1,350 light-years away, spanning roughly 4 light-years.',
    constellation: 'Orion',
    discovered: 'Pierre Méchain in 1780.'
  },

  'M81.jpg': {
    name: "Bode's Galaxy",
    catalog: 'Messier 81 (NGC 3031)',
    story: 'A large, bright spiral galaxy with well-defined arms and a luminous central bulge containing a supermassive black hole. M81 is part of a small galaxy group that includes its close companion, M82, the Cigar Galaxy.',
    nameOrigin: 'Named after its discoverer Johann Elert Bode, who found it in 1774.',
    whatToLook: 'Smooth, sweeping spiral arms and bright yellowish core with fine dust lanes.',
    scale: 'About 12 million light-years away, 90,000 light-years across.',
    constellation: 'Ursa Major',
    discovered: 'Johann Elert Bode in 1774.'
  },

  'M82.jpg': {
    name: 'Cigar Galaxy',
    catalog: 'Messier 82 (NGC 3034)',
    story: 'A nearby starburst galaxy undergoing intense star formation triggered by interaction with its neighbor, M81. Strong galactic winds from massive young stars drive red plumes of hot gas perpendicular to its disk.',
    nameOrigin: 'Its elongated appearance led to the nickname “Cigar Galaxy.”',
    whatToLook: 'Long, narrow disk with bright center and reddish outflows above and below the plane.',
    scale: 'About 12 million light-years away, around 37,000 light-years across.',
    constellation: 'Ursa Major',
    discovered: 'Johann Elert Bode in 1774.'
  },

  'M101.jpg': {
    name: 'Pinwheel Galaxy',
    catalog: 'Messier 101 (NGC 5457)',
    story: 'A large, face-on spiral galaxy notable for its asymmetrical structure and numerous bright H II regions. Gravitational interactions with nearby companions have slightly distorted its spiral arms while triggering waves of star formation.',
    nameOrigin: 'Named for its resemblance to a spinning pinwheel when viewed in telescopes.',
    whatToLook: 'Expansive spiral arms filled with glowing pink nebulae and bright blue clusters.',
    scale: 'About 21 million light-years away, 170,000 light-years across.',
    constellation: 'Ursa Major',
    discovered: 'Pierre Méchain in 1781.'
  },

  'M104.jpg': {
    name: 'Sombrero Galaxy',
    catalog: 'Messier 104 (NGC 4594)',
    story: 'A lenticular galaxy seen nearly edge-on, famous for its bright central bulge and dark dust lane encircling it like the brim of a sombrero. Its core harbors a billion-solar-mass black hole.',
    nameOrigin: 'Named “Sombrero Galaxy” because its shape resembles a broad-brimmed hat.',
    whatToLook: 'Brilliant central nucleus bisected by a dark, sharply defined dust band.',
    scale: 'About 29 million light-years away, approximately 50,000 light-years across.',
    constellation: 'Virgo',
    discovered: 'Pierre Méchain in 1781.'
  },

  'M8.jpg': {
    name: 'Lagoon Nebula',
    catalog: 'Messier 8 (NGC 6523)',
    story: 'A large and bright emission nebula where new stars are forming within vast clouds of hydrogen gas and dust. Stellar winds from hot, young stars carve cavities and filaments through the glowing material.',
    nameOrigin: 'Named for the dark lane that divides its luminous regions, resembling a lagoon.',
    whatToLook: 'The dark dust lane cutting across the nebula and the small star cluster NGC 6530 at its core.',
    scale: 'About 4,100 light-years away, roughly 110 light-years across.',
    constellation: 'Sagittarius',
    discovered: 'First recorded by Giovanni Battista Hodierna before 1654.'
  },

  'M10.jpg': {
    name: 'Messier 10',
    catalog: 'Messier 10 (NGC 6254)',
    story: 'A bright globular cluster composed of hundreds of thousands of ancient stars gravitationally bound together. It belongs to the halo of the Milky Way and is one of the richer southern clusters visible from mid-latitudes.',
    whatToLook: 'A dense, round ball of faint yellowish stars that become tightly packed toward the center.',
    scale: 'Approximately 14,300 light-years away, spanning about 83 light-years.',
    constellation: 'Ophiuchus',
    discovered: 'Charles Messier in 1764.'
  },

  'M14.jpg': {
    name: 'Messier 14',
    catalog: 'Messier 14 (NGC 6402)',
    story: 'A dense globular cluster containing hundreds of thousands of old stars, including many variable stars and long-period variables. It is partially obscured by interstellar dust, giving it a dimmer appearance than similar clusters.',
    whatToLook: 'Compact cluster with a bright core and subtle outer halo of faint stars.',
    scale: 'About 30,000 light-years away, 100 light-years across.',
    constellation: 'Ophiuchus',
    discovered: 'Charles Messier in 1764.'
  },

  'M16.jpg': {
    name: 'Eagle Nebula',
    catalog: 'Messier 16 (NGC 6611)',
    story: 'A star-forming region containing the open cluster NGC 6611. Within the nebula lie towering columns of gas and dust — the “Pillars of Creation” — made famous by Hubble Space Telescope images.',
    nameOrigin: 'The nebula’s outline resembles a spread-winged eagle in some telescopic views.',
    whatToLook: 'Bright central cluster and the dark, finger-like pillars of gas silhouetted against glowing hydrogen.',
    scale: 'About 7,000 light-years away, 70 light-years across.',
    constellation: 'Serpens',
    discovered: 'Jean-Philippe de Chéseaux in 1745–46.'
  },

  'M20.jpg': {
    name: 'Trifid Nebula',
    catalog: 'Messier 20 (NGC 6514)',
    story: 'A stellar nursery divided by dark lanes of dust into three distinct sections. The red emission and blue reflection regions illustrate both ionized gas and scattered starlight in one view.',
    nameOrigin: 'From Latin “trifidus,” meaning split into three parts; named by John Herschel in the 1820s.',
    whatToLook: 'The central dark dust lanes and the contrast between red emission and blue reflection areas.',
    scale: 'About 5,200 light-years away, 28 light-years across.',
    constellation: 'Sagittarius',
    discovered: 'Charles Messier in 1764.'
  },

  'M27.jpg': {
    name: 'Dumbbell Nebula',
    catalog: 'Messier 27 (NGC 6853)',
    story: 'A planetary nebula formed when a Sun-like star shed its outer layers at the end of its life. The expanding shell of gas glows as ultraviolet light from the central white dwarf excites the material.',
    nameOrigin: 'Named for its dumbbell-like shape seen through small telescopes.',
    whatToLook: 'Two bright lobes separated by a narrower waist and a small blue-white star in the center.',
    scale: 'About 1,250 light-years away, roughly 2.5 light-years across.',
    constellation: 'Vulpecula',
    discovered: 'Charles Messier in 1764.'
  },

  'M31.jpg': {
    name: 'Andromeda Galaxy',
    catalog: 'Messier 31 (NGC 224)',
    story: 'The nearest spiral galaxy to the Milky Way and the largest member of the Local Group. It contains hundreds of billions of stars and will eventually merge with the Milky Way in about 4 billion years.',
    nameOrigin: 'Named for its position in the constellation Andromeda, visible to the naked eye as a faint smudge.',
    whatToLook: 'A bright central bulge with faint, elongated spiral arms and two small companions, M32 and M110.',
    scale: 'About 2.5 million light-years away, 220,000 light-years across.',
    constellation: 'Andromeda',
    discovered: 'Known since antiquity; first telescopic observation by Simon Marius in 1612.'
  },

  'M42.jpg': {
    name: 'Orion Nebula',
    catalog: 'Messier 42 (NGC 1976)',
    story: 'The nearest large star-forming region to Earth, visible to the naked eye in Orion’s sword. Intense ultraviolet radiation from massive young stars in the Trapezium cluster lights up the surrounding gas.',
    nameOrigin: 'Named for its position within the Orion constellation.',
    whatToLook: 'The glowing central core containing the Trapezium and the broad fan-shaped nebula extending outward.',
    scale: 'About 1,350 light-years away, 24 light-years across.',
    constellation: 'Orion',
    discovered: 'First recorded by Nicolas-Claude Fabri de Peiresc in 1610.'
  },

  'M45.jpg': {
    name: 'Pleiades',
    catalog: 'Messier 45 (Seven Sisters)',
    story: 'An open star cluster containing several hot, blue stars formed within the last 100 million years. The cluster is surrounded by faint reflection nebulae caused by interstellar dust scattering starlight.',
    nameOrigin: 'Named after the Seven Sisters of Greek mythology; known since ancient times.',
    whatToLook: 'A group of bright blue stars with soft nebulous glow around the brightest members.',
    scale: 'About 440 light-years away, spanning 17 light-years.',
    constellation: 'Taurus',
    discovered: 'Visible to the naked eye since prehistoric times; catalogued by Charles Messier in 1769.'
  },

  'M51.jpg': {
    name: 'Whirlpool Galaxy',
    catalog: 'Messier 51 (NGC 5194)',
    story: 'A classic face-on spiral galaxy interacting with a smaller companion, NGC 5195. Their gravitational encounter enhances star formation in the spiral arms, making them stand out in vivid detail.',
    nameOrigin: 'Named for its whirlpool-like spiral pattern seen in early telescopes.',
    whatToLook: 'Two well-defined spiral arms connected to a smaller yellowish companion galaxy.',
    scale: 'Approximately 23 million light-years away, 60,000 light-years across.',
    constellation: 'Canes Venatici',
    discovered: 'Charles Messier in 1773.'
  },

  'Comet21PandMessier37.jpg': {
    name: 'Comet 21P/Giacobini–Zinner and Messier 37',
    catalog: 'Messier 37 and Comet 21P/Giacobini–Zinner',
    story: 'Comet 21P/Giacobini–Zinner is a periodic comet that orbits the Sun every 6.6 years. It is the parent body of the Draconid meteor shower. In this image it appears against the rich star field containing Messier 37, one of the brightest open clusters in Auriga.',
    nameOrigin: 'The comet was discovered by Michel Giacobini in 1900 and rediscovered by Ernst Zinner in 1913; M37 was catalogued by Charles Messier in 1764.',
    whatToLook: 'The small, greenish comet with a faint tail moving against a dense background of cluster stars.',
    scale: 'M37 lies about 4,500 light-years away; the comet was roughly 0.4 astronomical units from Earth at the time of approach.',
    constellation: 'Auriga'
  },

  'Comet62PnearLeoTriplet_crop_copy.jpg': {
    name: 'Comet 62P/Tsuchinshan near the Leo Triplet',
    catalog: 'Comet 62P/Tsuchinshan and Leo Triplet (M65, M66, NGC 3628)',
    story: 'Comet 62P/Tsuchinshan is a short-period comet discovered at the Purple Mountain Observatory in 1965. In this view it passes near the famous Leo Triplet of spiral galaxies — a chance alignment between a nearby solar-system object and distant island universes.',
    nameOrigin: 'Named after the Tsuchinshan (Purple Mountain) Observatory in Nanjing, China.',
    whatToLook: 'A diffuse greenish coma of the comet contrasting with the elongated shapes of the three galaxies in Leo.',
    scale: 'The comet is only millions of kilometers away, while the Leo Triplet lies about 35 million light-years distant.',
    constellation: 'Leo'
  },

  'SunFlare2-2.jpg': {
    name: 'Solar Flare',
    catalog: 'Active Region on the Sun',
    story: 'A solar flare is a sudden, intense burst of radiation from the Sun’s atmosphere, caused by magnetic energy release near sunspots. Flares can heat plasma to tens of millions of degrees and emit energy across the electromagnetic spectrum.',
    whatToLook: 'A bright, localized eruption near a sunspot group, often accompanied by coronal loops or jets.',
    scale: 'Solar flares typically span tens of thousands of kilometers; the Sun’s diameter is about 1.39 million kilometers.',
    constellation: 'Observed within the Solar System',
    discovered: 'First observed telescopically by Richard Carrington and Richard Hodgson in 1859.'
  },

  'Sun2-2.jpg': {
    name: 'Solar Flares',
    catalog: 'Active Regions on the Sun',
    story: 'Solar flares occur when twisted magnetic field lines in the Sun’s corona suddenly realign, releasing vast amounts of energy. They are often associated with coronal mass ejections that send charged particles into space, influencing space weather near Earth.',
    whatToLook: 'Multiple bright patches along the solar limb where magnetic loops erupt and fade.',
    scale: 'Each flare may cover areas larger than Earth; typical durations range from minutes to hours.',
    constellation: 'Observed within the Solar System',
    discovered: 'First recorded flare in 1859 during the Carrington Event.'
  },

  'M100_copy.jpg': {
    name: 'Messier 100',
    catalog: 'Messier 100 (NGC 4321)',
    story: 'A grand design spiral galaxy in the Virgo Cluster, notable for its nearly symmetrical spiral arms. It contains billions of stars, with active star formation occurring in its bright, dusty arms.',
    nameOrigin: 'Named by Charles Messier as part of his catalog of deep-sky objects.',
    whatToLook: 'Two main spiral arms with bright star-forming regions and a well-defined core.',
    scale: 'About 55 million light-years away, roughly 160,000 light-years across.',
    constellation: 'Coma Berenices',
    discovered: 'Pierre Méchain in 1781'
  },

  'M81_copy4.jpg': {
    name: "Bode's Galaxy",
    catalog: 'Messier 81 (NGC 3031)',
    story: 'A large, bright spiral galaxy visible even with small telescopes. It exhibits tightly wound spiral arms and a luminous nucleus that contains a supermassive black hole. M81 interacts gravitationally with nearby M82, distorting both galaxies over time.',
    nameOrigin: 'Named after Johann Elert Bode, who discovered it in 1774.',
    whatToLook: 'Bright central bulge and smooth, graceful spiral arms with dust lanes.',
    scale: 'About 12 million light-years away, spanning 90,000 light-years.',
    constellation: 'Ursa Major',
    discovered: 'Johann Elert Bode in 1774'
  },

  'NGC660_v2_copy3.jpg': {
    name: 'NGC 660',
    catalog: 'NGC 660',
    story: 'A rare polar ring galaxy — a disk galaxy surrounded by an outer ring of gas and stars orbiting at a steep angle. The unusual shape is thought to have formed from a past collision or merger with another galaxy.',
    whatToLook: 'Bright central bulge crossed by a tilted outer ring and dark dust lanes.',
    scale: 'Around 45 million light-years away, about 50,000 light-years across.',
    constellation: 'Pisces',
    discovered: 'William Herschel in 1784'
  },

  'NGC3521_rotcrop_copy2.jpg': {
    name: 'NGC 3521',
    catalog: 'NGC 3521',
    story: 'A flocculent spiral galaxy characterized by patchy, loosely wound arms. Its halo contains faint tidal streams — remnants of smaller galaxies it has absorbed in the past.',
    whatToLook: 'Soft, fragmented spiral structure surrounding a bright, yellowish core.',
    scale: 'About 35 million light-years away, roughly 50,000 light-years across.',
    constellation: 'Leo',
    discovered: 'William Herschel in 1784'
  },

  'M100_copy2.jpg': {
    name: 'Messier 100',
    catalog: 'Messier 100 (NGC 4321)',
    story: 'A bright spiral member of the Virgo Cluster showing strikingly symmetrical arms. M100 is one of the best examples of a grand design spiral, with active regions of star formation visible in ultraviolet light.',
    whatToLook: 'Two broad spiral arms containing numerous blue star clusters and dust lanes.',
    scale: 'Approximately 55 million light-years distant, 160,000 light-years wide.',
    constellation: 'Coma Berenices',
    discovered: 'Pierre Méchain in 1781'
  },

  'Topsy_Turvy_Galaxy_v2_copy.jpg': {
    name: 'Topsy Turvy Galaxy',
    catalog: 'NGC 1313',
    story: 'A distorted barred spiral galaxy with asymmetric arms, suggesting gravitational interaction or internal instabilities. It shows intense star formation and rich nebular emission across its disk.',
    whatToLook: 'Irregular spiral arms and bright blue star-forming knots scattered across its disk.',
    scale: 'About 13 million light-years away, roughly 50,000 light-years across.',
    constellation: 'Reticulum',
    discovered: 'James Dunlop in 1826'
  },

  'NGC1316_v2_copy.jpg': {
    name: 'NGC 1316',
    catalog: 'NGC 1316 (Fornax A)',
    story: 'A giant elliptical galaxy that is one of the brightest radio sources in the sky, known as Fornax A. It shows evidence of past galaxy mergers, with visible dust lanes and shells surrounding its bright core.',
    whatToLook: 'Smooth elliptical halo crossed by faint dust filaments and outer shells.',
    scale: 'About 60 million light-years away, around 200,000 light-years across.',
    constellation: 'Fornax',
    discovered: 'James Dunlop in 1826'
  },

  'NGC3981_copy.jpg': {
    name: 'NGC 3981',
    catalog: 'NGC 3981',
    story: 'A beautiful spiral galaxy with long, curving arms extending from a bright central bar. Its well-defined structure and active star formation make it a fine example of an intermediate-type spiral.',
    whatToLook: 'Graceful spiral arms emanating from a bright yellow core with subtle dust features.',
    scale: 'About 65 million light-years away, 75,000 light-years across.',
    constellation: 'Crater',
    discovered: 'William Herschel in 1785'
  },

  'M94_v3_copy.jpg': {
    name: 'Messier 94',
    catalog: 'Messier 94 (NGC 4736)',
    story: 'A spiral galaxy notable for its bright inner ring of star formation and a faint outer disk. The inner ring appears as a vivid blue circle surrounding the central bulge when viewed in visible light.',
    whatToLook: 'Compact bright core with a distinct, bluish ring of young stars around it.',
    scale: 'About 16 million light-years away, 50,000 light-years across.',
    constellation: 'Canes Venatici',
    discovered: 'Pierre Méchain in 1781'
  },

  'NGC1531_copy.jpg': {
    name: 'NGC 1531 and NGC 1532',
    catalog: 'Interacting Galaxies Pair',
    story: 'A close pair of interacting galaxies where the small elliptical NGC 1531 is being distorted by the gravitational pull of the larger spiral NGC 1532. The interaction has triggered widespread star formation in the spiral’s arms.',
    whatToLook: 'Elongated spiral galaxy with a smaller elliptical companion appearing just below it.',
    scale: 'About 55 million light-years away, pair spans nearly 120,000 light-years.',
    constellation: 'Eridanus',
    discovered: 'William Herschel in 1785'
  },

  'Pinwheel_Galaxy_v9.jpg': {
    name: 'Pinwheel Galaxy',
    catalog: 'Messier 101 (NGC 5457)',
    story: 'A large, face-on grand design spiral galaxy with prominent arms filled with pink star-forming regions and blue clusters of young stars. Its asymmetry may be due to gravitational interactions with nearby companion galaxies.',
    nameOrigin: 'Named “Pinwheel” for its classic spiral pattern seen nearly face-on from Earth.',
    whatToLook: 'Multiple spiral arms containing glowing hydrogen regions and bright clusters.',
    scale: 'About 21 million light-years away, 170,000 light-years across.',
    constellation: 'Ursa Major',
    discovered: 'Pierre Méchain in 1781'
  },

  'Cigar_Galaxy_v3.jpg': {
    name: 'Cigar Galaxy',
    catalog: 'Messier 82 (NGC 3034)',
    story: 'A starburst galaxy undergoing intense star formation triggered by interaction with its neighbor M81. Powerful galactic winds eject streams of hot gas perpendicular to its disk, visible in red emission lines.',
    nameOrigin: 'Its elongated shape resembles a cigar seen edge-on.',
    whatToLook: 'Elongated disk with bright central regions and reddish outflow plumes extending above and below.',
    scale: '12 million light-years away, around 37,000 light-years across.',
    constellation: 'Ursa Major',
    discovered: 'Johann Elert Bode in 1774'
  },

  'Black_Eye_v6.jpg': {
    name: 'Black Eye Galaxy',
    catalog: 'Messier 64 (NGC 4826)',
    story: 'A spiral galaxy famous for the dark dust band obscuring part of its bright nucleus. It has two counter-rotating disks of gas, evidence of a past merger with a smaller galaxy.',
    nameOrigin: 'Called the “Black Eye” or “Evil Eye” galaxy because of its prominent dark lane across the bright core.',
    whatToLook: 'Bright core bisected by a sharp, dark dust lane on one side.',
    scale: '17 million light-years away, roughly 60,000 light-years across.',
    constellation: 'Coma Berenices',
    discovered: 'Edward Pigott in 1779'
  },

  'Hydra_Cluster_v3.jpg': {
    name: 'Hydra Cluster',
    catalog: 'Abell 1060',
    story: 'A massive cluster of over 150 galaxies bound together by gravity. It includes giant elliptical galaxies such as NGC 3311 and NGC 3309 at its core, and emits strong X-rays from hot intracluster gas.',
    whatToLook: 'Numerous elliptical and spiral galaxies scattered in a dense region of sky.',
    scale: 'About 190 million light-years away, extending several million light-years across.',
    constellation: 'Hydra',
    discovered: 'Catalogued by George O. Abell in 1958'
  },

  'NGC300.jpg': {
    name: 'NGC 300',
    catalog: 'NGC 300',
    story: 'A nearby spiral galaxy belonging to the Sculptor Group. It is seen nearly face-on and resembles a smaller version of the Andromeda Galaxy, showing rich star-forming regions and a distinct spiral pattern.',
    whatToLook: 'Two main spiral arms dotted with blue star clusters and red emission nebulae.',
    scale: 'About 6 million light-years away, 60,000 light-years across.',
    constellation: 'Sculptor',
    discovered: 'James Dunlop in 1826'
  },

  'Sculptor_Galaxy_rotated.jpg': {
    name: 'Sculptor Galaxy',
    catalog: 'NGC 253',
    story: 'One of the brightest spiral galaxies in the night sky and a member of the Sculptor Group. It is undergoing a burst of star formation that fills its disk with glowing hydrogen and dusty filaments.',
    nameOrigin: 'Named for its location in the constellation Sculptor.',
    whatToLook: 'Edge-on spiral disk with dust lanes and bright star-forming regions along the midplane.',
    scale: '11 million light-years away, 90,000 light-years across.',
    constellation: 'Sculptor',
    discovered: 'Caroline Herschel in 1783'
  },

  'Whale_Galaxy_v8.jpg': {
    name: 'Whale Galaxy',
    catalog: 'NGC 4631',
    story: 'An edge-on spiral galaxy whose shape resembles a whale gliding through space. It shows signs of gravitational interaction with nearby companion galaxies, producing a warped disk and starburst activity.',
    nameOrigin: 'Named for its resemblance to a whale seen from the side.',
    whatToLook: 'Elongated disk with bright knots of star formation and faint tidal filaments.',
    scale: 'About 30 million light-years away, 140,000 light-years long.',
    constellation: 'Canes Venatici',
    discovered: 'William Herschel in 1787'
  },

  'Southern_Pinwheel_Galaxy.jpg': {
    name: 'Southern Pinwheel Galaxy',
    catalog: 'Messier 83 (NGC 5236)',
    story: 'A barred spiral galaxy with well-defined arms rich in pink hydrogen regions and blue star clusters. M83 is one of the nearest and brightest barred spirals visible from Earth’s southern hemisphere.',
    whatToLook: 'Bright bar structure at the center and sweeping spiral arms with numerous nebulae.',
    scale: '15 million light-years away, about 55,000 light-years across.',
    constellation: 'Hydra',
    discovered: 'Nicolas-Louis de Lacaille in 1752'
  },

  'NGC1291.jpg': {
    name: 'Ring Galaxy',
    catalog: 'NGC 1291',
    story: 'A barred lenticular galaxy distinguished by its bright, nearly circular outer ring of stars and gas. The ring surrounds a central bar and inner disk, making NGC 1291 a prototype of ringed galaxies.',
    whatToLook: 'Prominent outer ring surrounding a bright central bar and smooth disk.',
    scale: 'About 33 million light-years away, 100,000 light-years across.',
    constellation: 'Eridanus',
    discovered: 'James Dunlop in 1826'
  },

  'NGC4945.jpg': {
    name: 'NGC 4945',
    catalog: 'NGC 4945',
    story: 'An edge-on spiral galaxy similar in size and structure to the Milky Way. It contains a highly active nucleus powered by a supermassive black hole and is one of the brightest infrared galaxies in the southern sky.',
    whatToLook: 'Narrow, edge-on disk with a bright nucleus and dark central dust lane.',
    scale: '13 million light-years away, about 100,000 light-years across.',
    constellation: 'Centaurus',
    discovered: 'James Dunlop in 1826'
  },

  'M106_NGC4217.jpg': {
    name: 'Messier 106 and NGC 4217',
    catalog: 'M106 (NGC 4258) and NGC 4217',
    story: 'M106 is a Seyfert spiral galaxy with an active nucleus powered by a supermassive black hole. Its companion, NGC 4217, is seen edge-on nearby. M106’s jets emit in radio and X-rays, revealing energetic activity in its core.',
    whatToLook: 'The bright spiral of M106 with pink star-forming regions and the slender edge-on form of NGC 4217 beside it.',
    scale: 'Both about 24 million light-years away; M106 spans 135,000 light-years.',
    constellation: 'Canes Venatici',
    discovered: 'Pierre Méchain in 1781'
  },

  'Lagoon_Nebula_CHI-6.jpg': {
    name: 'Lagoon Nebula',
    catalog: 'Messier 8 (NGC 6523)',
    story: 'A vast star-forming region glowing in hydrogen light, where powerful stellar winds from young massive stars carve cavities and channels through the surrounding gas. The Lagoon Nebula is easily visible with small telescopes and even to the naked eye from dark skies.',
    nameOrigin: 'Named for the dark lane crossing its bright core, which resembles a lagoon separating two luminous regions.',
    whatToLook: 'The central dark dust lane cutting through the bright red emission, and the compact star cluster NGC 6530 embedded within.',
    scale: 'About 4,100 light-years away, spanning roughly 110 light-years.',
    constellation: 'Sagittarius',
    discovered: 'First described by Giovanni Battista Hodierna before 1654.'
  },

  'Heart_Nebula_v3.jpg': {
    name: 'Heart Nebula',
    catalog: 'IC 1805',
    story: 'A large emission nebula shaped like a cosmic heart, powered by the young, massive stars of the open cluster Melotte 15. Stellar winds and radiation sculpt the gas into intricate ridges and pillars, marking a region of ongoing star formation.',
    nameOrigin: 'Named for its heart-like outline in wide-field images of the Cassiopeia region.',
    whatToLook: 'The central cluster Melotte 15 and the surrounding glowing filaments of hydrogen gas.',
    scale: 'About 7,500 light-years away, spanning over 200 light-years.',
    constellation: 'Cassiopeia',
    discovered: 'William Herschel in 1787.'
  },

  'Statue_of_Liberty_Nebula_v2.jpg': {
    name: 'Statue of Liberty Nebula',
    catalog: 'NGC 3576',
    story: 'A turbulent star-forming region within the Sagittarius–Carina spiral arm. Its complex gas structures and bright cavities are carved by winds and radiation from hot, young stars. The nebula’s outline has been compared to the Statue of Liberty, inspiring its popular name.',
    nameOrigin: 'The nickname comes from the nebula’s resemblance to the Statue of Liberty in optical images.',
    whatToLook: 'The central bright arcs of hydrogen gas and the looping filaments of dust within the glowing cloud.',
    scale: 'About 9,000 light-years away, extending roughly 100 light-years.',
    constellation: 'Carina',
    discovered: 'James Dunlop in 1826.'
  },

  'Running_Chiken_SHO_extra_PS.jpg': {
    name: 'Running Chicken Nebula',
    catalog: 'IC 2944',
    story: 'A bright emission nebula illuminated by the young open cluster IC 2948. Dark, round Bok globules embedded in the nebula are dense pockets of gas where new stars may form. The surrounding gas glows due to ionization from nearby massive stars.',
    nameOrigin: 'Its outline in wide-field photographs resembles a running chicken.',
    whatToLook: 'Bright red hydrogen regions dotted with small dark circular Bok globules.',
    scale: 'About 6,500 light-years away, around 100 light-years across.',
    constellation: 'Centaurus',
    discovered: 'Listed by Edward Emerson Barnard in 1908.'
  },

  'Gabriela_Mistral_Nebula_v4.jpg': {
    name: 'Gabriela Mistral Nebula',
    catalog: 'NGC 3324',
    story: 'A glowing cavity on the northwest edge of the Carina Nebula, shaped by radiation and winds from young massive stars. The sculpted wall of gas bears a resemblance to the face of Chilean poet Gabriela Mistral, giving rise to the nebula’s nickname.',
    nameOrigin: 'Named for its visual similarity to the profile of Gabriela Mistral, Chilean poet and Nobel laureate.',
    whatToLook: 'The bright blue-green central region and the curved rim of reddish hydrogen emission.',
    scale: 'About 7,500 light-years away, roughly 35 light-years across.',
    constellation: 'Carina',
    discovered: 'James Dunlop in 1826.'
  },

  'Rosette_Nebula_SHO_v6.jpg': {
    name: 'Rosette Nebula',
    catalog: 'NGC 2237–2238–2246',
    story: 'A vast ring-shaped emission nebula surrounding the open cluster NGC 2244. Stellar winds and radiation from the cluster’s young, massive stars have hollowed out the central cavity and shaped the surrounding shell of glowing hydrogen gas.',
    nameOrigin: 'Its circular shape and petal-like structure inspired the name “Rosette.”',
    whatToLook: 'The central star cluster and the surrounding symmetrical ring of reddish emission clouds.',
    scale: 'About 5,000 light-years away, 130 light-years across.',
    constellation: 'Monoceros',
    discovered: 'John Flamsteed likely observed it before 1690; later catalogued in the 19th century.'
  },

  'NGC1761_v3.jpg': {
    name: 'NGC 1761',
    catalog: 'NGC 1761',
    story: 'A bright open cluster and associated emission nebula located within the Large Magellanic Cloud. Its massive young stars ionize the surrounding gas, contributing to the broader N11 star-forming region.',
    whatToLook: 'Cluster of blue stars embedded in reddish emission clouds within the LMC.',
    scale: 'About 163,000 light-years away in the Large Magellanic Cloud.',
    constellation: 'Dorado',
    discovered: 'James Dunlop in 1826.'
  },

  'Sh2-136-wide.jpg': {
    name: 'Ghost Nebula',
    catalog: 'Sh2-136 (VdB 141)',
    story: 'A reflection and dark nebula shaped like a ghostly apparition, illuminated by embedded young stars. It lies within a dense molecular cloud where new stars continue to form.',
    nameOrigin: 'Nicknamed the “Ghost Nebula” for its human-like shape and pale reflection glow.',
    whatToLook: 'Soft brown and blue reflection clouds with dark dust structures forming a ghostly figure.',
    scale: 'About 1,200 light-years away, roughly 2 light-years across.',
    constellation: 'Cepheus',
    discovered: 'Stewart Sharpless in 1959.'
  },

  'NGC3576-2.jpg': {
    name: 'Statue of Liberty Nebula',
    catalog: 'NGC 3576',
    story: 'A luminous emission nebula rich in ionized hydrogen and complex dust lanes. Stellar winds from its young stars shape dramatic arcs and filaments that appear as if a figure is holding a torch, reminiscent of the Statue of Liberty.',
    nameOrigin: 'Named for its resemblance to the Statue of Liberty in visible-light images.',
    whatToLook: 'Bright reddish arcs, pillars, and dust ridges illuminated by hot young stars.',
    scale: 'Approximately 9,000 light-years away, 100 light-years across.',
    constellation: 'Carina',
    discovered: 'James Dunlop in 1826.'
  },

  'M42_Mosaic_Large_Filled_PS_PI.jpg': {
    name: 'Orion and Running Man Nebula',
    catalog: 'Messier 42 and NGC 1977',
    story: 'A wide-field view of the Orion Molecular Cloud Complex, featuring the Orion Nebula (M42) — a massive stellar nursery — and the adjacent blue reflection nebula NGC 1977, nicknamed the Running Man. Together they form one of the brightest and most studied star-forming regions in the sky.',
    nameOrigin: 'The “Running Man” refers to the reflection nebula NGC 1977, whose pattern resembles a running figure.',
    whatToLook: 'The bright pink-red glow of M42 below and the bluish reflection nebula NGC 1977 just above it.',
    scale: 'About 1,350 light-years away, the field spans nearly 40 light-years.',
    constellation: 'Orion',
    discovered: 'M42 described by Nicolas-Claude Fabri de Peiresc in 1610; NGC 1977 catalogued by William Herschel in 1786.'
  },

  'DolphinNebula_bin2_copy.jpg': {
    name: 'Dolphin Nebula',
    catalog: 'Sh2-308',
    story: 'A large, faint bubble of gas blown by the fierce stellar wind of the Wolf–Rayet star EZ Canis Majoris. As the star sheds its outer layers, the wind sweeps surrounding gas into an enormous, expanding shell of ionized oxygen that glows with a soft blue hue.',
    whatToLook: 'A circular, translucent bubble with brighter edges resembling a dolphin outline.',
    scale: 'About 4,500 light-years away, roughly 60 light-years across.',
    constellation: 'Canis Major',
    discovered: 'Catalogued by Stewart Sharpless in 1959'
  },

  'CosmicBat_v2_copy3.jpg': {
    name: 'Cosmic Bat Nebula',
    catalog: 'LDN 43 region',
    story: 'A striking dark nebula whose silhouette resembles a bat spreading its wings. The opaque dust clouds block background starlight while harboring young stars still forming deep inside.',
    whatToLook: 'A bat-shaped dark patch surrounded by a faint reddish glow of the surrounding molecular cloud.',
    scale: 'Approximately 1,400 light-years away within the Ophiuchus molecular cloud complex.',
    constellation: 'Ophiuchus',
    discovered: 'Identified in Lynds Dark Nebula catalogue (1962)'
  },

  'RCW6_v3_copy.jpg': {
    name: 'RCW 6',
    catalog: 'RCW 6 (Gum 14)',
    story: 'A bright emission nebula in the southern sky where intense ultraviolet radiation from young massive stars excites hydrogen gas, producing its reddish glow. It is part of a larger complex of H II regions catalogued by Rodgers, Campbell and Whiteoak.',
    whatToLook: 'Diffuse red emission clouds with embedded bright stars and dark lanes.',
    scale: 'Around 5,500 light-years away in the Vela–Puppis region.',
    constellation: 'Vela',
    discovered: 'Listed in the RCW Catalogue of Southern H II Regions (1960)'
  },

  'Lupus_Dust_P12_copy_small.jpg': {
    name: 'Lupus Molecular Cloud',
    catalog: 'Lupus I–IV Complex',
    story: 'A nearby region of dark interstellar dust and gas that forms new low-mass stars. Illuminated edges and scattered starlight create soft blue hues that contrast with the surrounding darkness.',
    whatToLook: 'Delicate dust filaments and blue reflection patches against a star-filled background.',
    scale: 'Roughly 400–500 light-years away, spanning several degrees across the sky.',
    constellation: 'Lupus',
    discovered: 'Studied extensively in modern infrared and submillimeter surveys'
  },

  'IC2948_copy3.jpg': {
    name: 'Running Chicken Nebula',
    catalog: 'IC 2944',
    story: 'A bright emission nebula illuminated by the young open cluster IC 2948. Dark, round Bok globules within the nebula are dense pockets of gas where new stars may eventually form.',
    whatToLook: 'Bright red and pink emission clouds with small dark round globules silhouetted against the glow.',
    scale: 'About 6,500 light-years away, around 100 light-years wide.',
    constellation: 'Centaurus',
    discovered: 'Catalogue by Edward Emerson Barnard in 1908'
  },

  'DarkSharkNebula_copy.jpg': {
    name: 'Dark Shark Nebula',
    catalog: 'LDN 1235',
    story: 'A cold, dusty molecular cloud whose distinctive shape resembles a swimming shark. The dark nebula is part of the Cepheus Flare region and is faintly illuminated by nearby stars, producing a soft blue reflection glow.',
    whatToLook: 'Shark-shaped silhouette outlined by faint blue light and scattered background stars.',
    scale: 'Approximately 650 light-years away, spanning about 15 light-years.',
    constellation: 'Cepheus',
    discovered: 'Identified in Lynds Dark Nebula catalogue (1962)'
  },

  'Jellyfish_Nebula_copy3.jpg': {
    name: 'Jellyfish Nebula',
    catalog: 'IC 443',
    story: 'The remnant of a supernova explosion that occurred thousands of years ago. The expanding shockwave interacts with surrounding gas and dust, producing intricate filaments that resemble the tentacles of a jellyfish.',
    whatToLook: 'Wispy red arcs and tangled filaments extending from a bright curved rim.',
    scale: 'About 5,000 light-years away, around 70 light-years across.',
    constellation: 'Gemini',
    discovered: 'Discovered photographically in the early 20th century'
  },

  'ConeNebulaMosaic_copy.jpg': {
    name: 'Cone Nebula and Christmas Tree Cluster Mosaic',
    catalog: 'NGC 2264',
    story: 'A wide-field view combining the dark Cone Nebula and the surrounding open cluster known as the Christmas Tree Cluster. Radiation from hot young stars erodes the nearby molecular cloud, shaping the cone-like pillar seen in silhouette.',
    whatToLook: 'Dark triangular cone pointing toward a bright blue cluster amid glowing red hydrogen gas.',
    scale: 'Roughly 2,700 light-years away, region spans about 30 light-years.',
    constellation: 'Monoceros',
    discovered: 'William Herschel in 1785'
  },

  'GC4_v2_copy2.jpg': {
    name: 'Galactic Cloud 4',
    catalog: 'Likely dark nebula in Cepheus region',
    story: 'A faint and little-known dust complex within the Milky Way’s plane. Its irregular absorption features trace cold interstellar matter silhouetted against the dense star field of the galactic disk.',
    whatToLook: 'Subtle dark patches and streaks where stars are noticeably absent.',
    scale: 'Estimated distance a few hundred light-years; small dark nebular region.',
    constellation: 'Cepheus',
    discovered: 'Identified in photographic sky surveys'
  },

  'Horsehead_Mosaic_v1_copy6.jpg': {
    name: 'Horsehead and Orion Nebula Mosaic',
    catalog: 'Barnard 33, IC 434, and Messier 42',
    story: 'A panoramic mosaic covering part of the Orion Molecular Cloud Complex. It links the iconic Horsehead and Flame Nebulae near Alnitak with the great Orion Nebula farther south, showing a continuous landscape of star formation and dark dust.',
    whatToLook: 'Bright hydrogen glow with the small horse-shaped silhouette and the vast Orion Nebula below.',
    scale: 'Around 1,350 light-years distant; mosaic spans over 10 degrees of sky.',
    constellation: 'Orion',
    discovered: 'Various regions observed since the 17th–19th centuries'
  },

  'Great_Lacerta_Nebula_v4_copy4.jpg': {
    name: 'Waves of the Great Lacerta Nebula',
    catalog: 'LBN 437 region',
    story: 'A sprawling molecular cloud complex in Lacerta showing wavelike patterns of illuminated dust. The region includes reflection and dark nebulae shaped by interstellar winds and newborn stars.',
    whatToLook: 'Flowing arcs of faint red and blue nebulosity resembling undulating waves.',
    scale: 'About 1,200 light-years away, tens of light-years across.',
    constellation: 'Lacerta',
    discovered: 'Listed in the Lynds Bright Nebula catalogue (1965)'
  },

  'Dark_Nebula_Complex_v5_copy.jpg': {
    name: 'Chamaeleon III Dark Cloud',
    catalog: 'Chamaeleon III Molecular Cloud',
    story: 'One of several nearby dark clouds in the Chamaeleon complex, rich in cold gas and dust where low-mass stars are forming. It appears as a dark region cutting across the background Milky Way.',
    whatToLook: 'Intertwined dark lanes with occasional faint reflection patches.',
    scale: 'Roughly 550 light-years away, extending about 30 light-years.',
    constellation: 'Chamaeleon',
    discovered: 'Recognized in modern infrared sky surveys'
  },

  'Heart_Nebula_detail_v5_copy.jpg': {
    name: 'Heart Nebula Detail',
    catalog: 'IC 1805 (central region around Melotte 15)',
    story: 'Close-up of the bright core of the Heart Nebula, where strong stellar winds from the young star cluster Melotte 15 sculpt pillars and ridges in the surrounding gas.',
    whatToLook: 'Intricate filaments and pillar structures illuminated by hot, blue stars.',
    scale: 'About 7,500 light-years away; this cropped field spans roughly 40 light-years.',
    constellation: 'Cassiopeia',
    discovered: 'William Herschel in 1787'
  },

  'NGC3324_v2_copy.jpg': {
    name: 'NGC 3324',
    catalog: 'NGC 3324 (part of the Carina Nebula)',
    story: 'An emission nebula on the edge of the Carina complex, shaped by radiation from young, massive stars. Its sculpted wall of gas is sometimes called the Gabriela Mistral Nebula for its human-profile outline.',
    whatToLook: 'Bright, scalloped rim and blue-green core within a rich star field.',
    scale: 'About 7,500 light-years away, around 35 light-years wide.',
    constellation: 'Carina',
    discovered: 'James Dunlop in 1826'
  },

  'NGC2014_v3_copy.jpg': {
    name: 'NGC 2014',
    catalog: 'NGC 2014',
    story: 'A glowing star-forming region in the Large Magellanic Cloud. Radiation and winds from massive newborn stars ionize the surrounding hydrogen, creating a red cloud bordered by bright ridges.',
    whatToLook: 'A reddish emission region paired with the nearby bluish nebula NGC 2020, forming the so-called “Cosmic Reef.”',
    scale: 'About 163,000 light-years away in the LMC, spanning 600 light-years.',
    constellation: 'Dorado',
    discovered: 'James Dunlop in 1826'
  },

  'FlyingBat_ElephantsTrunk_v3_copy.jpg': {
    name: 'Flying Bat and Elephant’s Trunk Mosaic',
    catalog: 'Sh2-129 and IC 1396A',
    story: 'A wide field combining two large emission nebulae in Cepheus. The Flying Bat (Sh2-129) is a red hydrogen cloud, while the Elephant’s Trunk (IC 1396A) is a dark, pillar-shaped region of dense gas and dust within a nearby H II region.',
    whatToLook: 'Extended red glow of Sh2-129 and the dark curved column of the Elephant’s Trunk.',
    scale: 'Both regions about 2,400 light-years distant; field spans roughly 100 light-years.',
    constellation: 'Cepheus',
    discovered: 'Catalogued in mid-20th-century H II surveys'
  },

  'Plican_Nebula_detail_copy.jpg': {
    name: 'Pelican Nebula Detail',
    catalog: 'IC 5070',
    story: 'A close view of the Pelican Nebula’s intricate network of ionized gas and dust. Ultraviolet radiation from nearby massive stars sculpts the clouds into ridges and filaments, marking active star formation.',
    whatToLook: 'Sharp, curving ridges of red emission and dark dust outlines forming the bird-like shape.',
    scale: 'About 1,800 light-years away, several tens of light-years across.',
    constellation: 'Cygnus',
    discovered: 'Edward E. Barnard, late 19th century'
  },

  'Cone_Nebula_AP_copy3.jpg': {
    name: 'Cone Nebula',
    catalog: 'NGC 2264',
    story: 'A dark conical column of molecular gas standing out against a bright hydrogen background. The shape results from erosion by the ultraviolet light of nearby hot stars, a hallmark of active star-forming regions.',
    whatToLook: 'Dark cone-shaped silhouette pointing toward a blue-white star cluster.',
    scale: '2,700 light-years away, about 7 light-years long.',
    constellation: 'Monoceros',
    discovered: 'William Herschel in 1785'
  },

  'NGC6723_copy_v5.jpg': {
    name: 'NGC 6723',
    catalog: 'NGC 6723 (globular cluster)',
    story: 'A rich, bright globular cluster lying close to the border of Sagittarius and Corona Australis. Its dense population of ancient stars shines through a region partly veiled by foreground dust.',
    whatToLook: 'Compact, round cluster of yellowish stars fading into the dark background.',
    scale: 'About 28,000 light-years away, roughly 65 light-years across.',
    constellation: 'Sagittarius / Corona Australis',
    discovered: 'James Dunlop in 1826'
  },

  'SH2-63_X_copy.jpg': {
    name: 'Sh2-63',
    catalog: 'Sh2-63',
    story: 'A dark nebula catalogued by Stewart Sharpless, notable for its heavy obscuration of background starlight. It marks a dense molecular region within the Milky Way where little visible light escapes.',
    whatToLook: 'Irregular dark lane across a rich star field with faint surrounding nebulosity.',
    scale: 'Approximately 400 light-years away in the Ophiuchus molecular complex.',
    constellation: 'Ophiuchus',
    discovered: 'Stewart Sharpless in 1959'
  },

  'Flying_Bat_and_Squid_Nebula_v2_copy.jpg': {
    name: 'Flying Bat and Squid Nebula',
    catalog: 'Sh2-129 and Ou4',
    story: 'A remarkable pair of overlapping nebulae: the large red emission region Sh2-129, and within it, the faint blue bipolar outflow known as Ou4. The structures highlight different stellar processes within the same sky region.',
    whatToLook: 'Wide red oval with delicate blue lobes at the center forming a squid-like shape.',
    scale: 'About 2,300 light-years distant; the blue outflow spans nearly 50 light-years.',
    constellation: 'Cepheus',
    discovered: 'Ou4 discovered by Nicolas Outters in 2011'
  },

  'Polaris_v4.jpg': {
    name: 'Polaris Nebula',
    catalog: 'Integrated Flux Nebula around Polaris',
    story: 'Faint, high-latitude dust illuminated by the combined glow of the Milky Way, rather than a single star. Near the North Star, these wisps of dust are part of the extensive Polaris Flare complex.',
    whatToLook: 'Very faint, smoky clouds against a star-rich background near Polaris.',
    scale: 'About 350 light-years away, extending hundreds of light-years across the sky.',
    constellation: 'Ursa Minor / Camelopardalis',
    discovered: 'Recognized in modern deep wide-field imaging'
  },

  'Rho_Blu_mosaic_real_v12_final.jpg': {
    name: 'Rho Ophiuchi and Blue Horsehead Mosaic',
    catalog: 'IC 4604–4605 region',
    story: 'A colorful reflection and dark nebula complex surrounding the bright star Rho Ophiuchi. Blue reflection nebulae and yellow-orange dust clouds contrast sharply, marking one of the closest star-forming regions to Earth.',
    whatToLook: 'Blue reflection areas near bright stars and dark, looping dust filaments.',
    scale: 'About 440 light-years away, covering over 10 light-years.',
    constellation: 'Ophiuchus / Scorpius',
    discovered: 'Described photographically in the early 20th century'
  },

  'Helix_Nebula_v2_copy.jpg': {
    name: 'Helix Nebula',
    catalog: 'NGC 7293',
    story: 'A planetary nebula formed when a Sun-like star expelled its outer layers near the end of its life. The expanding shell glows from ultraviolet light emitted by the exposed hot white dwarf at its center.',
    whatToLook: 'Eye-like pattern of concentric rings with faint outer arcs and radial cometary knots.',
    scale: '650 light-years away, about 2.5 light-years across.',
    constellation: 'Aquarius',
    discovered: 'Karl Ludwig Harding before 1824'
  },

  'Bubble_Nebula_v2.jpg': {
    name: 'Bubble Nebula',
    catalog: 'NGC 7635',
    story: 'A nearly spherical shell of gas shaped by the intense stellar wind from the massive star BD+60°2522. The bubble expands into the surrounding molecular cloud, glowing where it meets denser material.',
    whatToLook: 'Round bubble enclosing a bright star, embedded in red emission clouds.',
    scale: '7,100 light-years away, roughly 10 light-years wide.',
    constellation: 'Cassiopeia',
    discovered: 'William Herschel in 1787'
  },

  'NGC6559_v22.jpg': {
    name: 'NGC 6559',
    catalog: 'NGC 6559',
    story: 'A bright region of emission and reflection nebulae lying close to the Lagoon Nebula. Young stars within its gas clouds illuminate hydrogen and reflect blue light from nearby dust.',
    whatToLook: 'Mixture of red emission glow and bluish reflection patches separated by dark lanes.',
    scale: 'About 5,000 light-years away, region spans a few tens of light-years.',
    constellation: 'Sagittarius',
    discovered: 'John Herschel in 1834'
  },

  'NGC6559_crop_v22.jpg': {
    name: 'NGC 6559',
    catalog: 'NGC 6559',
    story: 'A cropped view of the active star-forming region neighboring the Lagoon Nebula. Bright red hydrogen clouds contrast with dark dust and reflection regions.',
    whatToLook: 'Fine detail of emission and dark structures surrounding young stars.',
    scale: '5,000 light-years distant in the Sagittarius arm.',
    constellation: 'Sagittarius',
    discovered: 'John Herschel in 1834'
  },

  'CED111_v3.jpg': {
    name: 'CED 111 Reflection Nebula',
    catalog: 'Cederblad 111 (Chamaeleon I)',
    story: 'A blue reflection nebula within the Chamaeleon I molecular cloud. It shines by scattering starlight from nearby young stars, marking one of the closest stellar nurseries to Earth.',
    whatToLook: 'Soft blue glow embedded in dark dusty surroundings.',
    scale: 'About 600 light-years away within the Chamaeleon I region.',
    constellation: 'Chamaeleon',
    discovered: 'Cederblad Catalogue (1946)'
  },

  'Crescent_Soap_Bubble_wide_v1.jpg': {
    name: 'Crescent and Soap Bubble Nebula',
    catalog: 'NGC 6888 and PN G75.5+1.7',
    story: 'A wide field showing the Crescent Nebula, formed by a Wolf–Rayet star’s winds, and the faint Soap Bubble planetary nebula nearby. Both represent different late stages of stellar evolution.',
    whatToLook: 'Bright curved Crescent Nebula with a small, perfect circular Soap Bubble nearby.',
    scale: 'Both about 5,000 light-years away in Cygnus; the Soap Bubble is about 5 light-years across.',
    constellation: 'Cygnus',
    discovered: 'Crescent by William Herschel (1792); Soap Bubble by Dave Jurasevich (2008)'
  },
    'Trifid_Nebula.jpg': {
        name: 'Trifid Nebula',
        catalog: 'Messier 20',
        story: 'A stellar nursery divided by dark lanes of cosmic dust into three distinct lobes. This nebula showcases two cosmic phenomena at once - the reddish glow comes from hot hydrogen gas energized by newborn stars, while the blue region is starlight reflecting off dust clouds like moonlight on fog.',
        nameOrigin: 'From Latin "trifidus" meaning split into three parts, named by astronomer John Herschel in the 1820s',
        whatToLook: 'The dramatic dark dust lanes that carve the nebula into sections, and the color contrast between emission and reflection regions',
        scale: '5,200 light-years away, spanning about 28 light-years across',
        constellation: 'Sagittarius'
    },
    
    'Cocoon_Nebula2.jpg': {
        name: 'Cocoon Nebula',
        catalog: 'IC 5146',
        story: 'A young star cluster wrapped in the glowing cocoon of gas from which it was born. The dark lane of dust leading to it has earned the nickname "The Dark River", making this look like a cosmic embryo at the end of a dark tunnel.',
        whatToLook: 'The bright central cocoon contrasted with the dark dust lane streaming away from it',
        scale: '4,000 light-years distant in the constellation Cygnus',
        constellation: 'Cygnus'
    },
    
    'Lagoon_Nebula.jpg': {
        name: 'Lagoon Nebula',
        catalog: 'Messier 8',
        story: 'One of only two star-forming nebulae visible to the naked eye from mid-northern latitudes. The dark dust lane cutting through its center creates the appearance of a lagoon in a sea of glowing gas. At its heart, violent stellar winds from young stars are sculpting the surrounding material into dramatic shapes.',
        nameOrigin: 'Named for the dark lane that creates a lagoon-like appearance',
        whatToLook: 'The hourglass-shaped dark dust lane and the bright knots of intense star formation',
        scale: '4,100 light-years away, spanning 110 light-years across - large enough to contain multiple solar systems',
        constellation: 'Sagittarius',
        discovered: 'Giovanni Battista Hodierna, before 1654'
    },
    
    'Orion_Nebula.jpg': {
        name: 'Orion Nebula',
        catalog: 'Messier 42',
        story: 'The closest major star-forming region to Earth and the brightest nebula in the night sky. This cosmic maternity ward contains over 3,000 young stars, many still wrapped in their birth material. The Trapezium - four massive young stars at its heart - illuminate the surrounding gas like cosmic floodlights.',
        whatToLook: 'The Trapezium star cluster at its core and the greenish glow of oxygen in addition to the red hydrogen',
        scale: 'Only 1,344 light-years away - practically in our cosmic neighborhood - and spanning 24 light-years',
        constellation: 'Orion',
        mythology: 'Located in the sword of Orion, the mighty hunter of Greek mythology',
        discovered: 'Known since ancient times, first recorded by Nicolas-Claude Fabri de Peiresc in 1610'
    },

    'Western_Veil_Nebula.jpg': {
        name: 'Veil Nebula West',
        catalog: 'NGC 6960',
        story: 'The shattered remains of a massive star that exploded as a supernova between 10,000 and 20,000 years ago. This delicate, lace-like structure is just one piece of a much larger spherical shell of debris still expanding outward at over 600,000 mph. The bright star visible within the nebula is 52 Cygni, which just happens to lie along our line of sight.',
        whatToLook: 'The incredibly delicate, thread-like filaments that reveal the shock wave from the ancient explosion',
        scale: '2,400 light-years away, part of a debris field spanning over 100 light-years',
        constellation: 'Cygnus'
    },

    'Bubble_Nebula4.jpg': {
        name: 'Bubble Nebula',
        catalog: 'NGC 7635',
        story: 'A perfect cosmic bubble blown by the fierce stellar wind from a massive star 40 times more massive than our Sun. This star, visible at the edge (not center) of the bubble, generates winds traveling at 4 million mph, sweeping up surrounding material into this expanding sphere.',
        whatToLook: 'The perfectly spherical bubble shape and the off-center position of the star creating it',
        scale: '7,100 light-years distant, with the bubble spanning 7 light-years across',
        constellation: 'Cassiopeia',
        discovered: 'William Herschel in 1787'
    },

    'Dumbbell_Nebula.jpg': {
        name: 'Dumbbell Nebula',
        catalog: 'Messier 27',
        story: 'The death shroud of a sun-like star that exhausted its nuclear fuel and shed its outer layers. The dying star at the center is now a white dwarf - incredibly dense and hot. This was the first planetary nebula ever discovered, though the name is misleading as these objects have nothing to do with planets.',
        nameOrigin: 'Named for its distinctive two-lobed shape resembling a dumbbell or hourglass',
        whatToLook: 'The bright, structured lobes and the faint outer shell of material',
        scale: '1,360 light-years away, spanning 2.5 light-years',
        constellation: 'Vulpecula',
        discovered: 'Charles Messier in 1764'
    },

    'Heart_Nebula.jpg': {
        name: 'Heart Nebula',
        catalog: 'IC 1805',
        story: 'A vast cloud of glowing hydrogen shaped remarkably like a human heart. At its center, young hot stars are carving out cavities in the surrounding gas, creating the valentine-like shape. This nebula is part of a larger star-forming complex that also includes the Soul Nebula nearby.',
        whatToLook: 'The distinctive heart shape and the dark dust lanes that define its structure',
        scale: '7,500 light-years distant, spanning about 200 light-years',
        constellation: 'Cassiopeia'
    },

    'Helix_Nebula.jpg': {
        name: 'Helix Nebula',
        catalog: 'NGC 7293',
        story: 'The closest planetary nebula to Earth, nicknamed "The Eye of God" for its striking resemblance to a giant cosmic eye staring back at us. Like the Dumbbell, this is the cast-off outer layers of a dying sun-like star. The intricate structure includes thousands of comet-like filaments radiating outward.',
        whatToLook: 'The eye-like appearance with its colorful rings and the delicate cometary knots throughout',
        scale: 'Just 650 light-years away - the closest planetary nebula - and appears nearly as large as the full Moon in the sky',
        constellation: 'Aquarius'
    },

    'Rosette_Nebula.jpg': {
        name: 'Rosette Nebula',
        catalog: 'NGC 2238',
        story: 'A massive cloud of gas shaped like a cosmic rose in bloom. At its center, a cluster of young stars has blown away the surrounding material, creating the distinctive hollow center. The nebula glows in the red light of hydrogen energized by these hot young stars.',
        nameOrigin: 'Named for its resemblance to a rose flower',
        whatToLook: 'The circular wreath-like shape with intricate petal-like structures and the dark, cleared-out center',
        scale: '5,000 light-years away, spanning 130 light-years across',
        constellation: 'Monoceros'
    },

    'Horsehead_Nebula_copy3.jpg': {
        name: 'Horsehead Nebula',
        catalog: 'Barnard 33',
        story: 'One of the most recognizable dark nebulae in the sky, the Horsehead is actually a dense cloud of dust silhouetted against the bright emission nebula IC 434 behind it. This iconic shape is slowly being eroded by radiation from nearby stars and will eventually dissipate into space.',
        whatToLook: 'The distinctive horse head profile created by the dark dust against glowing background gas',
        scale: '1,500 light-years distant, about 3.5 light-years tall',
        constellation: 'Orion',
        discovered: 'Williamina Fleming in 1888 at Harvard College Observatory'
    },

    'Eagle_Nebula_full_auto_PS2.jpg': {
        name: 'Eagle Nebula',
        catalog: 'Messier 16',
        story: 'Home to the famous "Pillars of Creation" photographed by Hubble - towering columns of gas and dust where new stars are being born. These pillars are like cosmic incubators, with dense knots of material collapsing to form stars while being sculpted by intense radiation from nearby massive stars.',
        nameOrigin: 'The bright emission regions resemble an eagle with outstretched wings',
        whatToLook: 'The dark pillars of dust against glowing hydrogen and the star cluster embedded within',
        scale: '7,000 light-years away, the pillars themselves are about 5 light-years tall',
        constellation: 'Serpens'
    },

    'Tarantula_Nebula.jpg': {
        name: 'Tarantula Nebula',
        catalog: 'NGC 2070',
        story: 'The largest and most active star-forming region known in our cosmic neighborhood, located in the Large Magellanic Cloud satellite galaxy. So luminous that if it were as close as the Orion Nebula, it would cast shadows on Earth. Home to some of the most massive stars ever discovered.',
        nameOrigin: 'Its spidery, web-like appearance resembles a tarantula spider',
        whatToLook: 'The complex web of filaments and the extremely bright central star cluster R136',
        scale: '160,000 light-years away in the Large Magellanic Cloud, spanning about 650 light-years',
        constellation: 'Dorado'
    },

    'Crescent_Nebula.jpg': {
        name: 'Crescent Nebula',
        catalog: 'NGC 6888',
        story: 'A cosmic bubble created by a Wolf-Rayet star - a rare, massive star in its final stages before exploding as a supernova. The powerful stellar winds from this dying star, traveling at millions of miles per hour, have swept up material ejected earlier in the star\'s life, creating this distinctive crescent shape.',
        whatToLook: 'The crescent or brain-like structure with intricate filaments throughout',
        scale: '5,000 light-years away, spanning about 25 light-years',
        constellation: 'Cygnus',
        discovered: 'William Herschel in 1792'
    },

    'North_America_Pelican_Nebula-2.jpg': {
        name: 'North America and Pelican Nebula',
        catalog: 'NGC 7000 and IC 5070',
        story: 'Two regions of the same enormous hydrogen cloud, remarkably resembling the shape of North America and a pelican. The dark lane between them is a dense dust cloud blocking the light. These are active star-forming regions lit by extremely hot young stars.',
        nameOrigin: 'NGC 7000 resembles the continent of North America, complete with a "Gulf of Mexico". IC 5070 resembles a pelican with its distinctive beak and head',
        whatToLook: 'The continental outline of North America and the pelican shape, separated by the dark dust lane',
        scale: '2,600 light-years distant, spanning over 100 light-years',
        constellation: 'Cygnus'
    },

    'Cone_Nebula.jpg': {
        name: 'Cone Nebula',
        catalog: 'NGC 2264',
        story: 'A towering pillar of dark dust and gas, part of the larger star-forming region that includes the Christmas Tree Cluster. This dark column is being sculpted by radiation from nearby young stars, gradually eroding away while new stars form within its dense interior.',
        whatToLook: 'The distinctive cone or pillar shape pointing downward, carved by stellar winds and radiation',
        scale: '2,700 light-years away, the cone itself is 7 light-years tall',
        constellation: 'Monoceros',
        discovered: 'William Herschel in 1785'
    },

    'Iris_Nebula.jpg': {
        name: 'Iris Nebula',
        catalog: 'NGC 7023',
        story: 'A beautiful reflection nebula where starlight from a hot young star scatters off surrounding dust particles, creating blue hues similar to Earth\'s blue sky. Unlike emission nebulae that glow with their own light, this nebula shines purely by reflected starlight, like a cosmic mirror.',
        nameOrigin: 'Named for its delicate, flower-like appearance resembling an iris bloom',
        whatToLook: 'The blue reflection region surrounding the central star, contrasted with reddish dust in the background',
        scale: '1,300 light-years distant, spanning about 6 light-years',
        constellation: 'Cepheus'
    },

    'M78_v11_6000_copy4.jpg': {
        name: 'M78',
        catalog: 'Messier 78',
        story: 'The brightest reflection nebula in the sky. Two young stars illuminate the surrounding dust cloud, creating ghostly blue wisps. This nebula is part of the vast Orion Molecular Cloud Complex, the same stellar nursery that spawned the Orion Nebula.',
        whatToLook: 'The bright blue reflection regions and the complex dark dust lanes throughout',
        scale: '1,600 light-years away, spanning about 5 light-years',
        constellation: 'Orion',
        discovered: 'Pierre Méchain in 1780'
    },

    'Vela_Supernova_Remnant_HSO_2048.jpg': {
        name: 'Vela Supernova Remnant',
        story: 'The remains of a massive star that exploded about 11,000 years ago. This explosion was so powerful it would have been as bright as the Moon in Earth\'s sky. The expanding debris shell is now about 100 light-years across and still racing outward at millions of miles per hour.',
        whatToLook: 'The delicate, complex filaments of shocked gas in multiple colors',
        scale: '800 light-years away - one of the closest supernova remnants to Earth',
        constellation: 'Vela'
    },

    'Pencil_Nebula_v6.jpg': {
        name: 'Pencil Nebula',
        catalog: 'NGC 2736',
        story: 'A small piece of the much larger Vela Supernova Remnant, resembling a pencil-thin stroke across the sky. This bright filament marks where the supernova\'s shock wave is colliding with interstellar gas, heating it to extreme temperatures and causing it to glow.',
        nameOrigin: 'Named for its distinctive thin, pencil-like appearance',
        whatToLook: 'The remarkably straight, thin filament structure',
        scale: '815 light-years away, about 5 light-years long',
        constellation: 'Vela'
    },

    'Spaghetti_Nebula_HOO_PS_exp_stars2_PStopaz_PIstars.jpg': {
        name: 'Spaghetti Nebula',
        catalog: 'Simeis 147',
        story: 'Another ancient supernova remnant, roughly 40,000 years old, appearing as tangled strands of glowing gas across a vast area of sky. Despite its enormous angular size - about 6 times the width of the full Moon - it\'s extremely faint and challenging to observe.',
        nameOrigin: 'Named for its tangled, spaghetti-like filaments',
        whatToLook: 'The complex web of thin filaments spread across a large area',
        scale: '3,000 light-years distant, spanning about 150 light-years',
        constellation: 'Taurus/Auriga'
    },

    'Jellufish_Nebula.jpg': {
        name: 'Jellyfish Nebula',
        catalog: 'IC 443',
        story: 'A supernova remnant between 3,000 and 30,000 years old, with tendrils that resemble a jellyfish floating through space. The collision of the expanding supernova debris with surrounding interstellar clouds creates the glowing filaments we see today.',
        nameOrigin: 'Its flowing, tentacle-like structure resembles a jellyfish',
        whatToLook: 'The jellyfish-like appearance with flowing tendrils and bright knots',
        scale: '5,000 light-years away, spanning about 70 light-years',
        constellation: 'Gemini'
    },

    'Rho_Ophiuchi_Set_2_AUS_2_v1.jpg': {
        name: 'Rho Ophiuchi',
        story: 'One of the most colorful nebula complexes visible, showcasing emission, reflection, and dark nebulae all in one region. This is one of the closest star-forming regions to Earth, a cosmic laboratory where astronomers study how stars are born.',
        whatToLook: 'The incredible variety of colors - blue reflection, red emission, and dark dust clouds all intermingling',
        scale: 'Only 460 light-years away - practically in our stellar neighborhood',
        constellation: 'Ophiuchus'
    },

    'Elephants_Trunk_v2.jpg': {
        name: 'Elephants Trunk Nebula',
        catalog: 'IC 1396A',
        story: 'A dense pillar of gas and dust within the larger IC 1396 emission nebula, carved into an elephant trunk shape by stellar winds from nearby young stars. New stars are forming within this dense column, hidden from view by the surrounding dust.',
        nameOrigin: 'Its shape closely resembles an elephant\'s trunk',
        whatToLook: 'The distinctive curved trunk shape with globules of dense material along its length',
        scale: '2,400 light-years distant, about 20 light-years long',
        constellation: 'Cepheus'
    },

    'California_Nebula_copy.jpg': {
        name: 'California Nebula',
        catalog: 'NGC 1499',
        story: 'An emission nebula that remarkably resembles the outline of the state of California. Despite its large apparent size in the sky, it\'s quite faint and was not discovered until 1884. The nebula is energized by Xi Persei, a hot blue star.',
        nameOrigin: 'Its shape closely matches the outline of California',
        whatToLook: 'The California coastline shape stretching across the field',
        scale: '1,000 light-years away, spanning about 100 light-years',
        constellation: 'Perseus',
        discovered: 'Edward Emerson Barnard in 1884'
    },

    'Witch_Head_Nebula_copy6.jpg': {
        name: 'Witch Head Nebula',
        catalog: 'IC 2118',
        story: 'A reflection nebula illuminated by the bright blue supergiant star Rigel in Orion. The nebula\'s eerie shape, resembling a witch\'s face in profile, is actually a cloud of interstellar dust reflecting Rigel\'s light.',
        nameOrigin: 'Its profile resembles a cackling witch\'s face',
        whatToLook: 'The witch profile with distinctive nose and chin',
        scale: '900 light-years away, spanning about 50 light-years',
        constellation: 'Eridanus'
    },

    'Pleiades_v2tonemapped_copy.jpg': {
        name: 'Pleiades',
        catalog: 'Messier 45',
        story: 'Also known as the Seven Sisters, this is the most famous star cluster in the night sky, visible to the naked eye and recognized by cultures worldwide for thousands of years. The blue nebulosity around the stars is not leftover birth material but a dust cloud the cluster is currently passing through.',
        whatToLook: 'The bright blue stars surrounded by delicate blue reflection nebulae',
        scale: '440 light-years away - one of the closest star clusters to Earth',
        constellation: 'Taurus',
        mythology: 'Named for the Seven Sisters of Greek mythology, daughters of Atlas and Pleione',
        discovered: 'Known since prehistoric times'
    },

    'Lobster_Nebula_v4_blue2_copy2.jpg': {
        name: 'Lobster Nebula',
        catalog: 'NGC 6357',
        story: 'A massive star-forming region containing some of the most massive stars known. The intense radiation and stellar winds from these giants have carved the surrounding gas into a shape reminiscent of a lobster\'s claw.',
        nameOrigin: 'Its structure resembles a lobster with claws',
        whatToLook: 'The claw-like structures and bright star-forming regions',
        scale: '8,000 light-years distant, spanning about 400 light-years',
        constellation: 'Scorpius'
    },

    'Thos_Helmet_copy.jpg': {
        name: 'Thor\'s Helmet',
        catalog: 'NGC 2359',
        story: 'Created by a Wolf-Rayet star blowing a bubble in space, with wing-like structures resembling the helmet of the Norse god Thor. The central star is racing toward its death as a supernova, having already shed much of its mass.',
        nameOrigin: 'Resembles the winged helmet worn by Thor in Norse mythology',
        whatToLook: 'The helmet shape with distinctive wing-like extensions',
        scale: '15,000 light-years away, spanning about 30 light-years',
        constellation: 'Canis Major'
    },

    'Dolphin_Nebula_Sh-308_v3_copy.jpg': {
        name: 'Dolphin Nebula',
        catalog: 'Sh2-308',
        story: 'A bubble nebula created by a Wolf-Rayet star that has shed its outer layers through powerful stellar winds. The bubble\'s shape, resembling a dolphin, formed as these winds interact with surrounding interstellar material.',
        nameOrigin: 'Its curved shape resembles a leaping dolphin',
        whatToLook: 'The dolphin-like profile and the bubble structure',
        scale: '5,200 light-years distant, spanning about 60 light-years',
        constellation: 'Canis Major'
    },

    // GALAXIES

    'Pinwheel_Galaxy.jpg': {
        name: 'Pinwheel Galaxy',
        catalog: 'Messier 101',
        story: 'A stunning face-on spiral galaxy with remarkably symmetric spiral arms studded with bright pink star-forming regions. Its asymmetric structure suggests a gravitational encounter with smaller companion galaxies in the past. Contains an estimated 1 trillion stars.',
        whatToLook: 'The grand spiral structure and numerous bright HII regions throughout the arms',
        scale: '21 million light-years away, spanning 170,000 light-years across - larger than our Milky Way',
        constellation: 'Ursa Major',
        discovered: 'Pierre Méchain in 1781'
    },

    'm81m82.jpg': {
        name: 'Bode\'s Galaxy and The Cigar Galaxy',
        catalog: 'Messier 81 and 82',
        story: 'A cosmic dance between two galaxies. M81 is a beautiful grand design spiral, while M82 is undergoing a violent starburst - forming stars at 10 times the rate of our Milky Way - triggered by gravitational interaction with M81. They\'re pulling material from each other in a slow-motion collision.',
        whatToLook: 'The contrast between the elegant spiral M81 and the irregular, explosive M82',
        scale: 'Both about 12 million light-years away',
        constellation: 'Ursa Major',
        discovered: 'Johann Bode in 1774'
    },

    'M33.jpg': {
        name: 'Triangulum Galaxy',
        catalog: 'Messier 33',
        story: 'The third-largest member of our Local Group of galaxies after Andromeda and the Milky Way. Under excellent dark sky conditions, it\'s barely visible to the naked eye, making it the most distant object visible without optical aid. This face-on spiral shows remarkable detail in its arms.',
        whatToLook: 'The loose, open spiral structure with NGC 604, one of the largest HII regions known',
        scale: '3 million light-years away, about 60,000 light-years across',
        constellation: 'Triangulum',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'Grand_Design_Galaxy.jpg': {
        name: 'Grand Design Galaxy',
        catalog: 'Messier 74',
        story: 'A textbook example of a "grand design" spiral galaxy, with well-defined, symmetric spiral arms. Its face-on orientation makes it a favorite for studying spiral structure. Despite its beauty, it\'s quite faint due to its low surface brightness.',
        whatToLook: 'The perfectly symmetric spiral arms and the prominent star-forming regions along them',
        scale: '32 million light-years away, spanning about 95,000 light-years',
        constellation: 'Pisces',
        discovered: 'Pierre Méchain in 1780'
    },

    'M83.jpg': {
        name: 'Southern Pinwheel Galaxy',
        catalog: 'Messier 83',
        story: 'One of the nearest and brightest spiral galaxies, sometimes called the "Southern Pinwheel." It\'s remarkably active, having hosted six observed supernovae in the past century - more than any other galaxy. Its prominent bar and spiral arms are sites of intense star formation.',
        whatToLook: 'The bright central bar and the red star-forming regions throughout the spiral arms',
        scale: '15 million light-years away, about 55,000 light-years across',
        constellation: 'Hydra',
        discovered: 'Nicolas Louis de Lacaille in 1752'
    },

    'M64.jpg': {
        name: 'Black-Eye Galaxy',
        catalog: 'Messier 64',
        story: 'Named for the spectacular dark dust band in front of its bright nucleus, giving it the appearance of a black eye. Even more remarkable: the outer part of this galaxy rotates in the opposite direction from the inner region - likely the result of a past merger with another galaxy.',
        nameOrigin: 'The prominent dark dust lane gives it a black eye appearance',
        whatToLook: 'The dramatic dark dust band contrasting with the bright core',
        scale: '24 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Edward Pigott in 1779'
    },

    'IC342.jpg': {
        name: 'The Hidden Galaxy',
        catalog: 'IC 342',
        story: 'One of the brightest galaxies in the sky but hidden behind dense dust and gas clouds in our own Milky Way, dimming it significantly. If not for this obscuration, it would be a spectacular naked-eye object. It\'s the brightest member of the IC 342/Maffei group of galaxies.',
        nameOrigin: 'Called "hidden" because Milky Way dust obscures it',
        whatToLook: 'The face-on spiral structure showing through the foreground Milky Way dust',
        scale: '10 million light-years away, about 50,000 light-years across',
        constellation: 'Camelopardalis',
        discovered: 'William Frederick Denning in 1892'
    },

    'Silver_Coin_Galaxy.jpg': {
        name: 'Silver Coin Galaxy',
        catalog: 'NGC 253',
        story: 'A starburst galaxy forming stars at a tremendous rate, about 5 times faster than our Milky Way. Seen almost edge-on, it shows prominent dust lanes and bright star-forming regions. It\'s the brightest galaxy in the Sculptor Group.',
        nameOrigin: 'Its edge-on appearance resembles a silver coin',
        whatToLook: 'The edge-on view with prominent dust lanes and bright core',
        scale: '11 million light-years away, about 90,000 light-years across',
        constellation: 'Sculptor',
        discovered: 'Caroline Herschel in 1783'
    },

    'Fireworks_Galaxy_v2.jpg': {
        name: 'Fireworks Galaxy',
        catalog: 'NGC 6946',
        story: 'Appropriately nicknamed the "Fireworks Galaxy" because ten supernovae have been observed in it over the past century - more than any other galaxy. This high supernova rate indicates very active star formation. Like IC 342, it suffers from obscuration by Milky Way dust.',
        nameOrigin: 'Named for its frequent supernovae that light up like fireworks',
        whatToLook: 'The face-on spiral with numerous star-forming regions',
        scale: '22 million light-years away',
        constellation: 'Cepheus',
        discovered: 'William Herschel in 1798'
    },

    'CentaurusA_v3.jpg': {
        name: 'Centaurus A',
        catalog: 'NGC 5128',
        story: 'One of the most spectacular peculiar galaxies, with a prominent dark dust lane cutting across its bright elliptical body. It\'s actually an elliptical galaxy that has merged with a spiral galaxy, creating this dramatic appearance. At its heart lies one of the closest supermassive black holes to Earth, actively feeding on material.',
        whatToLook: 'The dramatic dark dust lane bisecting the bright elliptical galaxy',
        scale: '13 million light-years away, spanning about 60,000 light-years',
        constellation: 'Centaurus',
        discovered: 'James Dunlop in 1826'
    },

    'Whirlpool_Galaxy_APF.jpg': {
        name: 'Whirlpool Galaxy',
        catalog: 'Messier 51',
        story: 'One of the most famous galaxies, the Whirlpool was the first recognized spiral galaxy. Its companion NGC 5195 is passing behind it, and the gravitational interaction has triggered spectacular star formation in M51\'s spiral arms, making them particularly prominent and beautiful.',
        whatToLook: 'The well-defined spiral arms and the companion galaxy NGC 5195 apparently pulling on one arm',
        scale: '31 million light-years away, about 76,000 light-years across',
        constellation: 'Canes Venatici',
        discovered: 'Charles Messier in 1773'
    },

    'Sombrero_Galaxy_v2.jpg': {
        name: 'Sombrero Galaxy',
        catalog: 'Messier 104',
        story: 'Named for its resemblance to a Mexican sombrero hat, this galaxy is seen nearly edge-on, revealing a prominent dark dust lane and unusually large bright central bulge. It contains an estimated 2,000 globular clusters - 10 times more than orbit our Milky Way.',
        nameOrigin: 'Its edge-on appearance with prominent dust lane resembles a sombrero hat',
        whatToLook: 'The distinctive hat shape with bright bulge and dark dust lane brim',
        scale: '29 million light-years away, about 50,000 light-years across',
        constellation: 'Virgo',
        discovered: 'Pierre Méchain in 1781'
    },

    'M31_v3_crop_copy.jpg': {
        name: 'Andromeda Galaxy',
        catalog: 'Messier 31',
        story: 'Our nearest large galactic neighbor and the most distant object visible to the naked eye. Andromeda and the Milky Way are approaching each other and will collide and merge in about 4.5 billion years. It contains roughly 1 trillion stars - about twice as many as our galaxy.',
        whatToLook: 'The enormous spiral structure, bright core, and companion galaxies M32 and M110',
        scale: '2.5 million light-years away, spanning 220,000 light-years - the largest galaxy in our Local Group',
        constellation: 'Andromeda',
        mythology: 'Named for Princess Andromeda of Greek mythology',
        discovered: 'Known since ancient times, first recorded by Abd al-Rahman al-Sufi in 964 CE'
    },

    'NGC1566_copy.jpg': {
        name: 'Spanish Dancer Galaxy',
        catalog: 'NGC 1566',
        story: 'A spectacular grand design spiral with two prominent arms that trail like the flowing dress of a Spanish dancer. It\'s the second brightest Seyfert galaxy known, with an active galactic nucleus powered by a supermassive black hole.',
        nameOrigin: 'Its spiral arms resemble the swirling dress of a Spanish flamenco dancer',
        whatToLook: 'The elegant, sweeping spiral arms and bright active nucleus',
        scale: '60 million light-years away',
        constellation: 'Dorado',
        discovered: 'James Dunlop in 1826'
    },

    'Virgo_Cluster.jpg': {
        name: 'Virgo Cluster',
        catalog: 'Messier 84, 86, 87, etc.',
        story: 'The nearest large galaxy cluster to Earth, containing about 1,300 to 2,000 galaxies. This concentration of galaxies forms the heart of the larger Virgo Supercluster, of which our Local Group is an outlying member. M87 at its center harbors one of the most massive black holes known.',
        whatToLook: 'The numerous galaxies of various types concentrated in a small area of sky',
        scale: 'About 65 million light-years away, spanning roughly 15 million light-years',
        constellation: 'Virgo'
    },

    // STAR CLUSTERS

    'NGC4755.jpg': {
        name: 'Jewel Box Cluster',
        catalog: 'NGC 4755',
        story: 'One of the most spectacular open star clusters, containing bright stars of contrasting colors - including red supergiants and blue supergiants side by side, creating a jewel box effect. It\'s young, only about 14 million years old, so the stars haven\'t dispersed yet.',
        nameOrigin: 'Named by John Herschel for its appearance of "a casket of variously colored precious stones"',
        whatToLook: 'The colorful mix of blue, white, and red stars clustered together',
        scale: '6,400 light-years away, spanning about 20 light-years',
        constellation: 'Crux',
        discovered: 'Nicolas Louis de Lacaille in 1751-1752'
    },

    'Omega_Centauri.jpg': {
        name: 'Omega Centauri',
        catalog: 'NGC 5139',
        story: 'The largest and brightest globular cluster orbiting the Milky Way, containing about 10 million stars. It\'s so large and unusual that astronomers now think it might be the core of a dwarf galaxy that was disrupted and absorbed by the Milky Way billions of years ago.',
        whatToLook: 'The dense concentration of hundreds of thousands of visible stars',
        scale: '17,000 light-years away, spanning about 150 light-years across',
        constellation: 'Centaurus',
        discovered: 'Known to ancient Greeks, catalogued by Ptolemy as a star'
    },

    'NGC3532.jpg': {
        name: 'Wishing Well Cluster',
        catalog: 'NGC 3532',
        story: 'One of the nearest open clusters to Earth and one of the most studied. Contains about 400 stars including several bright red giants. The cluster gets its nickname from the appearance of its brightest stars scattered like coins in a wishing well.',
        nameOrigin: 'The scattered bright stars resemble coins at the bottom of a wishing well',
        whatToLook: 'The loose scattering of bright stars with several prominent red giants',
        scale: '1,300 light-years away, spanning about 50 light-years',
        constellation: 'Carina',
        discovered: 'Nicolas Louis de Lacaille in 1752'
    },

    'Pleiades_m45.jpg': {
        name: 'Pleiades',
        catalog: 'Messier 45',
        story: 'The most famous star cluster in the sky, known as the Seven Sisters. These young, hot blue stars formed together about 100 million years ago and are still traveling through space as a group. The blue nebulosity is dust they\'re currently passing through, not their birth cloud.',
        whatToLook: 'The distinctive pattern of bright blue stars with nebulosity',
        scale: '440 light-years away - one of the closest clusters',
        constellation: 'Taurus',
        mythology: 'Named for the Seven Sisters of Greek mythology, daughters of Atlas',
        discovered: 'Known since prehistoric times'
    },

    'Southern_Pleiades_copy2.jpg': {
        name: 'Southern Pleiades',
        catalog: 'IC 2602',
        story: 'Often called the "Southern Pleiades," this bright open cluster contains about 60 stars and is dominated by several hot blue giants. At only 30-35 million years old, it\'s quite young on cosmic timescales.',
        nameOrigin: 'Southern hemisphere counterpart to the famous Pleiades cluster',
        whatToLook: 'The concentration of bright blue stars',
        scale: '480 light-years away',
        constellation: 'Carina',
        discovered: 'Nicolas Louis de Lacaille in 1751'
    },

    'NGC6752_copy.jpg': {
        name: 'NGC 6752',
        story: 'One of the brightest globular clusters visible from Earth\'s southern hemisphere, containing hundreds of thousands of ancient stars packed densely together. The cluster is about 10-12 billion years old, making its stars nearly as old as the universe itself.',
        whatToLook: 'The dense core with stars packed closely together',
        scale: '13,000 light-years away, spanning about 100 light-years',
        constellation: 'Pavo',
        discovered: 'James Dunlop in 1826'
    },

    'M14_v2_copy3.jpg': {
        name: 'Messier 14',
        catalog: 'NGC 6402',
        story: 'A globular cluster containing about 150,000 stars. Like all globular clusters, it orbits in the halo of our galaxy and is ancient, formed when the Milky Way was young.',
        whatToLook: 'The dense spherical concentration of ancient stars',
        scale: '30,000 light-years away, spanning about 100 light-years',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1764'
    },

    'M10_copy.jpg': {
        name: 'Messier 10',
        catalog: 'NGC 6254',
        story: 'A loosely concentrated globular cluster visible even in small telescopes. One of the closer globulars to Earth, making it a good target for studying the properties of ancient stars.',
        whatToLook: 'The spherical cluster with individual stars resolvable toward the edges',
        scale: '14,000 light-years away, spanning about 80 light-years',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1764'
    },

    // SOLAR SYSTEM

    'Sun2.jpg': {
        name: 'Sun',
        story: 'Our star, a middle-aged yellow dwarf that has been shining for 4.6 billion years and will continue for another 5 billion. Every second, it converts 600 million tons of hydrogen into helium through nuclear fusion, releasing the energy that makes life on Earth possible.',
        whatToLook: 'Surface features like sunspots, which are cooler regions caused by magnetic activity',
        scale: '93 million miles from Earth, with a diameter of 864,000 miles - about 109 times Earth\'s diameter'
    },

    'Moon_color_wavelet.jpg': {
        name: 'Moon',
        story: 'Earth\'s only natural satellite, formed about 4.5 billion years ago, likely from debris after a Mars-sized object collided with the young Earth. Its gravitational pull creates our ocean tides and has slowed Earth\'s rotation over billions of years.',
        whatToLook: 'The different colors reveal different mineral compositions - blues indicate titanium-rich areas, oranges and reds show iron-rich regions',
        scale: '238,900 miles from Earth on average, with a diameter of 2,159 miles'
    },

    'Comet_Lenonard_v3_copy.jpg': {
        name: 'Comet C/2021 A1 (Leonard)',
        story: 'Discovered in January 2021, Comet Leonard was the brightest comet of that year. Like all comets, it\'s a "dirty snowball" of ice and rock that developed a bright tail as it approached the Sun and solar radiation vaporized some of its icy material.',
        discovered: 'Gregory Leonard on January 3, 2021',
        whatToLook: 'The bright coma and dust tail',
        scale: 'Made its closest approach to Earth in December 2021 at about 21 million miles'
    },

    'COMETC2022E3_AutoLRGB_edit_2_copy.jpg': {
        name: 'Comet C/2022 E3 (ZTF)',
        story: 'Discovered in March 2022, this long-period comet made its closest approach to Earth in early 2023. It won\'t return to the inner solar system for another 50,000 years. Its distinctive green color comes from carbon molecules in its coma.',
        discovered: 'Zwicky Transient Facility on March 2, 2022',
        whatToLook: 'The green coma caused by carbon emission and the dust and ion tails',
        scale: 'Made its closest approach to Earth at about 26 million miles in February 2023'
    },

    'CometC2023A3_copy.jpg': {
        name: 'Comet C/2023 A3',
        story: 'A recently discovered comet that brightened as it approached the inner solar system. Comets are frozen remnants from the early solar system, preserving material from the Sun\'s birth.',
        whatToLook: 'The bright coma and developing tail as the comet is heated by the Sun',
        discovered: '2023'
    },

    // MESSIER CATALOG

    'M1.jpg': {
        name: 'Crab Nebula',
        catalog: 'Messier 1',
        story: 'The shattered remains of a massive star whose explosion was witnessed and recorded by Chinese and Arab astronomers in 1054 CE. At its heart, a rapidly spinning neutron star - a pulsar - rotates 30 times per second, acting like a cosmic lighthouse and powering the nebula\'s glow.',
        whatToLook: 'The intricate filamentary structure and the pulsar at its center',
        scale: '6,500 light-years away, spanning about 11 light-years',
        constellation: 'Taurus',
        discovered: 'John Bevis in 1731, independently by Messier in 1758'
    },

    'M2.jpg': {
        name: 'Messier 2',
        catalog: 'Globular Cluster',
        story: 'One of the largest and richest globular clusters, containing about 150,000 stars packed into a sphere. These ancient stars, over 12 billion years old, orbit the Milky Way\'s halo like bees around a hive.',
        whatToLook: 'The dense concentration of stars increasing toward the bright core',
        scale: '37,500 light-years away, spanning 175 light-years',
        constellation: 'Aquarius',
        discovered: 'Jean-Dominique Maraldi in 1746'
    },

    'M3.jpg': {
        name: 'Messier 3',
        catalog: 'Globular Cluster',
        story: 'One of the finest globular clusters visible from northern latitudes, containing about 500,000 stars. It has the most variable stars of any globular cluster - over 270 have been catalogued - making it crucial for understanding stellar evolution.',
        whatToLook: 'The densely packed core with individual stars visible in outer regions',
        scale: '33,900 light-years away, spanning 180 light-years',
        constellation: 'Canes Venatici',
        discovered: 'Charles Messier in 1764'
    },

    'M4.jpg': {
        name: 'Messier 4',
        catalog: 'Globular Cluster',
        story: 'One of the closest globular clusters to Earth and one of the easiest to resolve into individual stars. Some of its stars are among the oldest ever studied, with ages up to 13 billion years - nearly as old as the universe itself.',
        whatToLook: 'The bar-like structure of stars crossing the cluster\'s center',
        scale: 'Only 7,200 light-years away - one of the closest globulars',
        constellation: 'Scorpius',
        discovered: 'Philippe Loys de Chéseaux in 1746'
    },

    'M5.jpg': {
        name: 'Messier 5',
        catalog: 'Globular Cluster',
        story: 'One of the oldest and largest globular clusters orbiting the Milky Way, with an age of about 13 billion years. It contains over 100,000 stars and at least 105 variable stars, making it a key target for stellar evolution studies.',
        whatToLook: 'The brilliant core surrounded by chains of stars extending outward',
        scale: '24,500 light-years away, spanning 165 light-years',
        constellation: 'Serpens',
        discovered: 'Gottfried Kirch in 1702'
    },

    'M6.jpg': {
        name: 'Butterfly Cluster',
        catalog: 'Messier 6',
        story: 'A bright open cluster whose pattern of stars resembles a butterfly with spread wings. The cluster contains about 80 stars and is young - only about 100 million years old - so the stars are still hot and blue.',
        nameOrigin: 'The star pattern resembles a butterfly',
        whatToLook: 'The butterfly-shaped pattern of bright stars',
        scale: '1,600 light-years away',
        constellation: 'Scorpius',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M7.jpg': {
        name: 'Ptolemy\'s Cluster',
        catalog: 'Messier 7',
        story: 'Known since ancient times and recorded by Ptolemy in 130 CE as a "nebulous" object. This bright open cluster contains about 80 stars and is easily visible to the naked eye as a hazy patch near the tail of Scorpius.',
        nameOrigin: 'Named for Ptolemy who first recorded it',
        whatToLook: 'The loose scattering of bright stars',
        scale: '980 light-years away - one of the closest open clusters',
        constellation: 'Scorpius',
        discovered: 'Known since antiquity, recorded by Ptolemy in 130 CE'
    },

    'M9.jpg': {
        name: 'Messier 9',
        catalog: 'Globular Cluster',
        story: 'A globular cluster located close to the center of our galaxy, only about 5,500 light-years from the galactic core. This proximity to the galaxy\'s heart makes it one of the most metal-rich globulars known.',
        whatToLook: 'The compressed appearance due to its location near the galactic center',
        scale: '25,800 light-years away',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1764'
    },

    'M11.jpg': {
        name: 'Wild Duck Cluster',
        catalog: 'Messier 11',
        story: 'One of the richest and most compact open clusters known, containing about 2,900 stars. Its V-shaped formation of brightest stars resembles a flight of wild ducks, giving it its popular name. At 220 million years old, it\'s ancient for an open cluster.',
        nameOrigin: 'Named by Admiral Smyth for its resemblance to a flight of wild ducks',
        whatToLook: 'The dense concentration of stars with a V-shaped pattern',
        scale: '6,000 light-years away',
        constellation: 'Scutum',
        discovered: 'Gottfried Kirch in 1681'
    },

    'M12.jpg': {
        name: 'Messier 12',
        catalog: 'Globular Cluster',
        story: 'A loosely concentrated globular cluster that has lost many stars to tidal interactions with the Milky Way during its long life. It\'s considered one of the most loosely concentrated of all globular clusters.',
        whatToLook: 'The relatively sparse appearance for a globular cluster',
        scale: '16,000 light-years away',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1764'
    },

    'M13.jpg': {
        name: 'Hercules Cluster',
        catalog: 'Messier 13',
        story: 'The brightest globular cluster in the northern sky, containing about 300,000 stars. In 1974, a radio message was transmitted toward M13 from the Arecibo telescope - humanity\'s first deliberate message to potential extraterrestrial intelligence. It will arrive in about 25,000 years.',
        whatToLook: 'The brilliant concentration of hundreds of thousands of stars',
        scale: '22,200 light-years away, spanning 145 light-years',
        constellation: 'Hercules',
        discovered: 'Edmond Halley in 1714'
    },

    'M15.jpg': {
        name: 'Messier 15',
        catalog: 'Globular Cluster',
        story: 'One of the densest known globular clusters, with an extremely concentrated core that may harbor an intermediate-mass black hole. It also contains a planetary nebula - Pease 1 - the first ever discovered in a globular cluster.',
        whatToLook: 'The extremely dense and bright core',
        scale: '33,600 light-years away',
        constellation: 'Pegasus',
        discovered: 'Jean-Dominique Maraldi in 1746'
    },

    'M17.jpg': {
        name: 'Omega Nebula',
        catalog: 'Messier 17',
        story: 'A spectacular emission nebula with a shape that has earned it many names: Omega, Swan, Horseshoe, and Lobster Nebula. It\'s one of the youngest and most massive star-forming regions in our galaxy, with active star formation occurring throughout its structure.',
        nameOrigin: 'Various names based on its shape: Omega (Ω), Swan, Horseshoe, Lobster',
        whatToLook: 'The bright emission region with its distinctive curved shape',
        scale: '5,000 light-years away, spanning 15 light-years',
        constellation: 'Sagittarius',
        discovered: 'Philippe Loys de Chéseaux in 1745'
    },

    'M18.jpg': {
        name: 'Messier 18',
        catalog: 'Open Cluster',
        story: 'A small, relatively sparse open cluster overshadowed by its spectacular neighbors M17 and M24. It contains only about 20 stars and is quite young at just 32 million years old.',
        whatToLook: 'The small grouping of faint stars',
        scale: '4,900 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1764'
    },

    'M19.jpg': {
        name: 'Messier 19',
        catalog: 'Globular Cluster',
        story: 'One of the most oblate (flattened) globular clusters known, appearing noticeably elliptical rather than spherical. This distortion is likely due to its close proximity to the galactic center, where tidal forces stretch it.',
        whatToLook: 'The noticeably elliptical rather than round shape',
        scale: '28,000 light-years away',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1764'
    },

    'M21.jpg': {
        name: 'Messier 21',
        catalog: 'Open Cluster',
        story: 'A young open cluster located less than a degree from the famous Trifid Nebula (M20). The cluster contains about 57 stars and is only 4.6 million years old - extremely young on cosmic timescales.',
        whatToLook: 'The compact grouping of young, hot blue stars',
        scale: '4,250 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1764'
    },

    'M22.jpg': {
        name: 'Messier 22',
        catalog: 'Globular Cluster',
        story: 'One of the brightest globular clusters visible and one of the first to be discovered with a telescope. It\'s unusual in having a planetary nebula within it, and evidence suggests it may harbor a pair of intermediate-mass black holes at its core.',
        whatToLook: 'The bright, well-resolved cluster visible even in binoculars',
        scale: '10,600 light-years away - one of the closest globulars',
        constellation: 'Sagittarius',
        discovered: 'Abraham Ihle in 1665'
    },

    'M23.jpg': {
        name: 'Messier 23',
        catalog: 'Open Cluster',
        story: 'A large, loose open cluster containing about 150 stars. At 300 million years old, many of its original hot blue stars have already evolved, giving the cluster a more mixed color.',
        whatToLook: 'The scattered field of stars spanning a large area',
        scale: '2,150 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1764'
    },

    'M24.jpg': {
        name: 'Sagittarius Star Cloud',
        catalog: 'Messier 24',
        story: 'Not a true cluster but a gap in the obscuring dust clouds that normally block our view of the galactic center, allowing us to see through to the dense star fields beyond. Thousands of stars are visible through this "window" into the galaxy.',
        nameOrigin: 'A star cloud rather than a cluster - a window through galactic dust',
        whatToLook: 'The incredibly dense field of stars visible through the dust gap',
        scale: 'About 10,000-16,000 light-years to the stars visible through the gap',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1764'
    },

    'M25.jpg': {
        name: 'Messier 25',
        catalog: 'Open Cluster',
        story: 'A bright open cluster containing about 86 stars, including the Cepheid variable U Sagittarii. Cepheid variables are crucial for measuring cosmic distances, making this cluster scientifically important.',
        whatToLook: 'The scattered stars with the variable star U Sagittarii among them',
        scale: '2,000 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Philippe Loys de Chéseaux in 1745'
    },

    'M26.jpg': {
        name: 'Messier 26',
        catalog: 'Open Cluster',
        story: 'A small, compact open cluster that appears to have a hole in its center due to obscuring dust. It\'s relatively young at 89 million years old and contains about 90 stars.',
        whatToLook: 'The central clearing created by foreground dust obscuration',
        scale: '5,000 light-years away',
        constellation: 'Scutum',
        discovered: 'Charles Messier in 1764'
    },

    'M28.jpg': {
        name: 'Messier 28',
        catalog: 'Globular Cluster',
        story: 'A globular cluster located in a rich star field toward the galactic center. It contains at least 18 RR Lyrae variable stars and was the first globular cluster where millisecond pulsars were discovered.',
        whatToLook: 'The condensed cluster set against rich background star fields',
        scale: '18,000 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1764'
    },

    'M29.jpg': {
        name: 'Messier 29',
        catalog: 'Open Cluster',
        story: 'A small, relatively sparse open cluster heavily obscured by interstellar dust. This dust dims the cluster significantly - without it, M29 would appear several times brighter.',
        whatToLook: 'The small grouping of bright stars forming a distinctive pattern',
        scale: '4,000 light-years away',
        constellation: 'Cygnus',
        discovered: 'Charles Messier in 1764'
    },

    'M30.jpg': {
        name: 'Messier 30',
        catalog: 'Globular Cluster',
        story: 'A dense globular cluster that has undergone core collapse - a process where the central region becomes extremely concentrated. It\'s one of the more metal-poor globulars, indicating great age.',
        whatToLook: 'The very concentrated core with a sparse outer halo',
        scale: '26,000 light-years away',
        constellation: 'Capricornus',
        discovered: 'Charles Messier in 1764'
    },

    'M32.jpg': {
        name: 'Messier 32',
        catalog: 'Dwarf Elliptical Galaxy',
        story: 'A satellite galaxy of Andromeda, and an unusual one - it\'s one of the most compact galaxies known. Evidence suggests it was once much larger but lost most of its stars during a close encounter with Andromeda.',
        whatToLook: 'The compact, bright elliptical galaxy near Andromeda\'s core',
        scale: '2.5 million light-years away',
        constellation: 'Andromeda',
        discovered: 'Guillaume Le Gentil in 1749'
    },

    'M34.jpg': {
        name: 'Messier 34',
        catalog: 'Open Cluster',
        story: 'A large, bright open cluster visible to the naked eye under dark skies. It\'s relatively young at 180 million years old and is slowly drifting through space along with the stars that formed with it.',
        whatToLook: 'The scattered field of moderately bright stars',
        scale: '1,500 light-years away',
        constellation: 'Perseus',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M35.jpg': {
        name: 'Messier 35',
        catalog: 'Open Cluster',
        story: 'A spectacular open cluster containing about 200 stars, easily visible in binoculars. Nearby NGC 2158 provides an excellent contrast - it\'s much older, more distant, and more compact, showing how open clusters evolve.',
        whatToLook: 'The bright, scattered stars with the denser NGC 2158 nearby',
        scale: '2,800 light-years away',
        constellation: 'Gemini',
        discovered: 'Philippe Loys de Chéseaux in 1745'
    },

    'M36.jpg': {
        name: 'Messier 36',
        catalog: 'Open Cluster',
        story: 'One of three bright star clusters in Auriga, M36 is a compact cluster of about 60 stars. At 25 million years old, it still contains hot blue stars that haven\'t had time to evolve.',
        whatToLook: 'The neat, compact grouping of bright stars',
        scale: '4,100 light-years away',
        constellation: 'Auriga',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M37.jpg': {
        name: 'Messier 37',
        catalog: 'Open Cluster',
        story: 'The brightest and richest of the three Messier clusters in Auriga, containing about 500 stars. At 300 million years old, many of its stars have evolved into red giants, giving the cluster a notably orange hue.',
        whatToLook: 'The rich, densely packed field of stars with prominent red giants',
        scale: '4,500 light-years away',
        constellation: 'Auriga',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M38.jpg': {
        name: 'Messier 38',
        catalog: 'Open Cluster',
        story: 'An open cluster containing about 100 stars arranged in a distinctive cross or oblique bar pattern. Its brightest members are yellow giants that have evolved from their original blue color.',
        whatToLook: 'The cross or Pi-shaped pattern of bright stars',
        scale: '4,200 light-years away',
        constellation: 'Auriga',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M39.jpg': {
        name: 'Messier 39',
        catalog: 'Open Cluster',
        story: 'A large, loose open cluster easily visible in binoculars. Its stars are spread out across a large area, having had 280 million years to drift apart since forming together.',
        whatToLook: 'The widely scattered bright stars',
        scale: '825 light-years away - one of the closer open clusters',
        constellation: 'Cygnus',
        discovered: 'Guillaume Le Gentil in 1750'
    },

    'M40.jpg': {
        name: 'Winnecke 4',
        catalog: 'Messier 40',
        story: 'The only Messier object that isn\'t a deep-sky object at all - it\'s simply a double star system. Messier was looking for a nebula reported by Hevelius but found only these two stars. He catalogued them anyway.',
        whatToLook: 'The close pair of stars appearing as a double star',
        scale: 'The two stars are about 510 light-years away',
        constellation: 'Ursa Major',
        discovered: 'Charles Messier in 1764'
    },

    'M41.jpg': {
        name: 'Messier 41',
        catalog: 'Open Cluster',
        story: 'A bright, large open cluster visible to the naked eye under good conditions. It may have been known to Aristotle, who recorded a "cloudy spot" in this location around 325 BCE. The cluster contains about 100 stars.',
        whatToLook: 'The scattered field of bright stars with several red giants',
        scale: '2,300 light-years away',
        constellation: 'Canis Major',
        discovered: 'Possibly known to Aristotle; rediscovered by Giovanni Battista Hodierna before 1654'
    },

    'M43.jpg': {
        name: 'De Mairan\'s Nebula',
        catalog: 'Messier 43',
        story: 'A small emission nebula that\'s actually part of the greater Orion Nebula complex, separated from M42\'s main body by a dark dust lane. It has its own embedded star that illuminates it.',
        whatToLook: 'The small, comma-shaped nebula separated from M42 by dark dust',
        scale: '1,600 light-years away',
        constellation: 'Orion',
        discovered: 'Jean-Jacques d\'Ortous de Mairan in 1731'
    },

    'M44.jpg': {
        name: 'Beehive Cluster',
        catalog: 'Messier 44',
        story: 'Known since ancient times and described by Hipparchus as a "little cloud." This open cluster resembles a swarm of bees, giving it its popular name. Galileo was the first to resolve it into individual stars with his telescope in 1609.',
        nameOrigin: 'The scattered stars resemble a swarm of bees',
        whatToLook: 'The large, scattered cluster of stars filling the field of view',
        scale: '577 light-years away - one of the closest open clusters',
        constellation: 'Cancer',
        discovered: 'Known since ancient times'
    },

    'M46.jpg': {
        name: 'Messier 46',
        catalog: 'Open Cluster',
        story: 'A rich open cluster containing about 500 stars. It appears to contain the planetary nebula NGC 2438, but this is actually a foreground object not physically associated with the cluster - a cosmic coincidence of alignment.',
        whatToLook: 'The rich star field with the planetary nebula NGC 2438 superimposed',
        scale: '5,400 light-years away',
        constellation: 'Puppis',
        discovered: 'Charles Messier in 1771'
    },

    'M47.jpg': {
        name: 'Messier 47',
        catalog: 'Open Cluster',
        story: 'A bright, coarse open cluster easily visible in binoculars. Due to an error in Messier\'s position, this cluster was "lost" for many years until T.F. Morris correctly identified it in 1959.',
        whatToLook: 'The scattered grouping of bright stars',
        scale: '1,600 light-years away',
        constellation: 'Puppis',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M48.jpg': {
        name: 'Messier 48',
        catalog: 'Open Cluster',
        story: 'Another cluster that was "lost" due to a position error in Messier\'s catalogue. It contains about 80 stars and is a nice binocular object under dark skies.',
        whatToLook: 'The triangular or arrow-shaped pattern of brighter cluster members',
        scale: '1,500 light-years away',
        constellation: 'Hydra',
        discovered: 'Charles Messier in 1771'
    },

    'M49.jpg': {
        name: 'Messier 49',
        catalog: 'Giant Elliptical Galaxy',
        story: 'The first galaxy discovered in the Virgo Cluster and one of its brightest members. This giant elliptical contains thousands of globular clusters orbiting it - far more than orbit our Milky Way.',
        whatToLook: 'The large, smooth elliptical galaxy',
        scale: '56 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1771'
    },

    'M50.jpg': {
        name: 'Messier 50',
        catalog: 'Open Cluster',
        story: 'A bright open cluster containing about 200 stars, including a prominent red giant near its center. The cluster is relatively young at 78 million years old.',
        whatToLook: 'The heart-shaped cluster with a red giant near its core',
        scale: '3,000 light-years away',
        constellation: 'Monoceros',
        discovered: 'Giovanni Battista Hodierna before 1654'
    },

    'M52.jpg': {
        name: 'Messier 52',
        catalog: 'Open Cluster',
        story: 'A rich, compact open cluster containing about 200 stars. It\'s relatively young at 35 million years old, so most of its stars are still hot and blue.',
        whatToLook: 'The concentrated grouping of faint stars',
        scale: '5,000 light-years away',
        constellation: 'Cassiopeia',
        discovered: 'Charles Messier in 1774'
    },

    'M53.jpg': {
        name: 'Messier 53',
        catalog: 'Globular Cluster',
        story: 'A distant globular cluster located far from the galactic plane in the galactic halo. It\'s one of the more remote globulars that can still be observed with amateur equipment.',
        whatToLook: 'The condensed globular with a bright core',
        scale: '58,000 light-years away - one of the more distant Messier objects',
        constellation: 'Coma Berenices',
        discovered: 'Johann Bode in 1775'
    },

    'M54.jpg': {
        name: 'Messier 54',
        catalog: 'Globular Cluster',
        story: 'For many years thought to be a normal Milky Way globular, M54 was discovered in 1994 to actually belong to the Sagittarius Dwarf Elliptical Galaxy - a small galaxy being torn apart by the Milky Way\'s gravity.',
        whatToLook: 'The dense globular cluster',
        scale: '87,000 light-years away - actually in a satellite galaxy',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1778'
    },

    'M55.jpg': {
        name: 'Messier 55',
        catalog: 'Globular Cluster',
        story: 'A large, loosely concentrated globular cluster easily resolved into individual stars. Its position low in southern skies made it difficult for Messier to observe from Paris.',
        whatToLook: 'The loose, well-resolved globular cluster',
        scale: '17,600 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Nicolas Louis de Lacaille in 1752'
    },

    'M56.jpg': {
        name: 'Messier 56',
        catalog: 'Globular Cluster',
        story: 'A relatively sparse globular cluster that\'s metal-poor even by globular standards, indicating extreme age. It\'s slowly approaching us as it orbits the galaxy.',
        whatToLook: 'The loose globular with stars resolved toward the edges',
        scale: '32,900 light-years away',
        constellation: 'Lyra',
        discovered: 'Charles Messier in 1779'
    },

    'M57.jpg': {
        name: 'Ring Nebula',
        catalog: 'Messier 57',
        story: 'One of the most famous planetary nebulae, appearing as a perfect smoke ring in space. This is the dying gasp of a sun-like star, which shed its outer layers about 1,600 years ago. The white dwarf star at its center is all that remains of the star\'s core.',
        nameOrigin: 'Its perfect ring shape',
        whatToLook: 'The distinctive donut or ring shape with the faint central white dwarf',
        scale: '2,300 light-years away, about 1 light-year across',
        constellation: 'Lyra',
        discovered: 'Antoine Darquier de Pellepoix in 1779'
    },

    'M58.jpg': {
        name: 'Messier 58',
        catalog: 'Barred Spiral Galaxy',
        story: 'One of the first barred spiral galaxies identified and a member of the Virgo Cluster. It\'s a Seyfert galaxy with an active nucleus powered by a supermassive black hole.',
        whatToLook: 'The barred spiral structure',
        scale: '62 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1779'
    },

    'M59.jpg': {
        name: 'Messier 59',
        catalog: 'Elliptical Galaxy',
        story: 'A giant elliptical galaxy in the Virgo Cluster. Like most ellipticals, it\'s composed primarily of old stars and has little ongoing star formation.',
        whatToLook: 'The smooth, featureless elliptical galaxy',
        scale: '60 million light-years away',
        constellation: 'Virgo',
        discovered: 'Johann Koehler in 1779'
    },

    'M60.jpg': {
        name: 'Messier 60',
        catalog: 'Giant Elliptical Galaxy',
        story: 'The third-brightest galaxy in the Virgo Cluster. It harbors one of the most massive black holes known - about 4.5 billion times the Sun\'s mass. The smaller spiral galaxy NGC 4647 is a close companion.',
        whatToLook: 'The large elliptical with companion spiral galaxy NGC 4647',
        scale: '55 million light-years away',
        constellation: 'Virgo',
        discovered: 'Johann Koehler in 1779'
    },

    'M61.jpg': {
        name: 'Messier 61',
        catalog: 'Spiral Galaxy',
        story: 'A face-on spiral galaxy in Virgo that\'s been called the "swelling spiral" due to its asymmetric appearance. It\'s had six observed supernovae - more than most galaxies - indicating active star formation.',
        whatToLook: 'The face-on spiral with asymmetric arms',
        scale: '52 million light-years away',
        constellation: 'Virgo',
        discovered: 'Barnaba Oriani in 1779'
    },

    'M62.jpg': {
        name: 'Messier 62',
        catalog: 'Globular Cluster',
        story: 'An irregularly shaped globular cluster, appearing lopsided due to tidal interactions with the Milky Way\'s gravitational field. It\'s located close to the galactic center.',
        whatToLook: 'The asymmetric, lopsided shape of the cluster',
        scale: '22,500 light-years away',
        constellation: 'Ophiuchus',
        discovered: 'Charles Messier in 1771'
    },

    'M63.jpg': {
        name: 'Sunflower Galaxy',
        catalog: 'Messier 63',
        story: 'A spiral galaxy with a unique, flocculent appearance - its spiral arms are broken into numerous short segments rather than forming continuous spirals, resembling sunflower petals.',
        nameOrigin: 'Its segmented spiral arms resemble sunflower petals',
        whatToLook: 'The patchy, petal-like spiral structure',
        scale: '37 million light-years away',
        constellation: 'Canes Venatici',
        discovered: 'Pierre Méchain in 1779'
    },

    'M65.jpg': {
        name: 'Messier 65',
        catalog: 'Spiral Galaxy',
        story: 'Part of the famous Leo Triplet along with M66 and NGC 3628. Recent star formation in M65 suggests it has recently interacted gravitationally with its companions.',
        whatToLook: 'The slightly warped spiral galaxy',
        scale: '35 million light-years away',
        constellation: 'Leo',
        discovered: 'Charles Messier in 1780'
    },

    'M66.jpg': {
        name: 'Messier 66',
        catalog: 'Spiral Galaxy',
        story: 'The brightest member of the Leo Triplet, with prominent, asymmetric spiral arms distorted by gravitational interactions with its neighbors. Active star formation makes it a Seyfert galaxy.',
        whatToLook: 'The bright, asymmetric spiral structure',
        scale: '36 million light-years away',
        constellation: 'Leo',
        discovered: 'Charles Messier in 1780'
    },

    'M67.jpg': {
        name: 'Messier 67',
        catalog: 'Open Cluster',
        story: 'One of the oldest open clusters known, at about 4 billion years old - roughly the same age as our Sun. This ancient age makes it valuable for studying stellar evolution. Most open clusters disperse long before reaching this age.',
        whatToLook: 'The rich cluster with many evolved yellow stars',
        scale: '2,700 light-years away',
        constellation: 'Cancer',
        discovered: 'Johann Koehler before 1779'
    },

    'M68.jpg': {
        name: 'Messier 68',
        catalog: 'Globular Cluster',
        story: 'A metal-poor globular cluster with an unusual orbit that takes it far from the galactic plane. It may have been captured from a dwarf galaxy absorbed by the Milky Way long ago.',
        whatToLook: 'The moderately concentrated globular cluster',
        scale: '33,600 light-years away',
        constellation: 'Hydra',
        discovered: 'Charles Messier in 1780'
    },

    'M69.jpg': {
        name: 'Messier 69',
        catalog: 'Globular Cluster',
        story: 'A compact globular cluster located near the galactic center. It\'s relatively metal-rich, suggesting it formed from material already enriched by previous generations of stars.',
        whatToLook: 'The small, condensed globular cluster',
        scale: '29,700 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1780'
    },

    'M70.jpg': {
        name: 'Messier 70',
        catalog: 'Globular Cluster',
        story: 'A concentrated globular cluster located in a rich star field toward the galactic center. It\'s difficult to observe due to its location in crowded regions of the sky.',
        whatToLook: 'The dense core set against rich background stars',
        scale: '29,300 light-years away',
        constellation: 'Sagittarius',
        discovered: 'Charles Messier in 1780'
    },

    'M71.jpg': {
        name: 'Messier 71',
        catalog: 'Globular Cluster',
        story: 'Long debated whether this was a dense open cluster or a loose globular cluster. It\'s now classified as a globular but is one of the most loosely concentrated ones known.',
        whatToLook: 'The very loose clustering of stars',
        scale: '13,000 light-years away',
        constellation: 'Sagitta',
        discovered: 'Philippe Loys de Chéseaux in 1746'
    },

    'M72.jpg': {
        name: 'Messier 72',
        catalog: 'Globular Cluster',
        story: 'A remote, faint globular cluster that\'s challenging to resolve into individual stars. Its great distance and loose concentration make it a difficult object.',
        whatToLook: 'The faint, distant globular cluster',
        scale: '53,000 light-years away',
        constellation: 'Aquarius',
        discovered: 'Pierre Méchain in 1780'
    },

    'M73.jpg': {
        name: 'Messier 73',
        catalog: 'Asterism',
        story: 'Not a true cluster at all, but four unrelated stars that happen to lie along the same line of sight. Modern studies confirm they\'re at different distances and not physically associated. Messier thought it was a cluster with nebulosity.',
        whatToLook: 'The Y-shaped pattern of four stars',
        scale: 'Stars at various distances, not physically related',
        constellation: 'Aquarius',
        discovered: 'Charles Messier in 1780'
    },

    'M75.jpg': {
        name: 'Messier 75',
        catalog: 'Globular Cluster',
        story: 'One of the most distant and concentrated globular clusters in the Messier catalogue. Its extreme distance makes it appear small and compact.',
        whatToLook: 'The small, very condensed globular cluster',
        scale: '67,500 light-years away - one of the most distant Messier objects',
        constellation: 'Sagittarius',
        discovered: 'Pierre Méchain in 1780'
    },

    'M76.jpg': {
        name: 'Little Dumbbell Nebula',
        catalog: 'Messier 76',
        story: 'A planetary nebula with a distinctive barbell or butterfly shape, earning it the nickname "Little Dumbbell." It\'s one of only four planetary nebulae in the Messier catalogue and one of the faintest Messier objects.',
        nameOrigin: 'Resembles a smaller version of the Dumbbell Nebula (M27)',
        whatToLook: 'The two-lobed planetary nebula structure',
        scale: '2,500 light-years away',
        constellation: 'Perseus',
        discovered: 'Pierre Méchain in 1780'
    },

    'M77.jpg': {
        name: 'Messier 77',
        catalog: 'Spiral Galaxy',
        story: 'The brightest and most studied Seyfert galaxy - a type with an extremely active nucleus. Its supermassive black hole is actively feeding, making the core incredibly luminous. The galaxy is face-on to us, clearly showing its spiral structure.',
        whatToLook: 'The very bright nucleus and spiral arms',
        scale: '47 million light-years away',
        constellation: 'Cetus',
        discovered: 'Pierre Méchain in 1780'
    },

    'M79.jpg': {
        name: 'Messier 79',
        catalog: 'Globular Cluster',
        story: 'An unusual globular cluster located on the opposite side of the sky from the galactic center, where most globulars concentrate. It likely originated in the Canis Major Dwarf Galaxy being absorbed by the Milky Way.',
        whatToLook: 'The bright, condensed globular cluster',
        scale: '41,000 light-years away',
        constellation: 'Lepus',
        discovered: 'Pierre Méchain in 1780'
    },

    'M80.jpg': {
        name: 'Messier 80',
        catalog: 'Globular Cluster',
        story: 'One of the most densely concentrated globular clusters known, containing hundreds of thousands of stars packed into a relatively small volume. In 1860, a nova erupted in this cluster and briefly outshone the entire cluster.',
        whatToLook: 'The extremely dense and concentrated core',
        scale: '32,600 light-years away',
        constellation: 'Scorpius',
        discovered: 'Charles Messier in 1781'
    },

    'M84.jpg': {
        name: 'Messier 84',
        catalog: 'Lenticular Galaxy',
        story: 'A lenticular galaxy in the Virgo Cluster with a supermassive black hole 1.5 billion times the Sun\'s mass at its core. It shows jets of material being expelled from near the black hole.',
        whatToLook: 'The smooth lenticular structure',
        scale: '60 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1781'
    },

    'M85.jpg': {
        name: 'Messier 85',
        catalog: 'Lenticular Galaxy',
        story: 'A lenticular galaxy that shows signs of recent interaction with neighboring galaxies. It contains some younger stars and dust, unusual for a lenticular galaxy.',
        whatToLook: 'The oval galaxy with its companion NGC 4394',
        scale: '60 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Pierre Méchain in 1781'
    },

    'M86.jpg': {
        name: 'Messier 86',
        catalog: 'Lenticular Galaxy',
        story: 'A lenticular galaxy in Virgo moving toward us at an unusually high speed - one of the few galaxies showing blueshift rather than redshift. This indicates it\'s falling into the Virgo Cluster.',
        whatToLook: 'The bright elliptical appearance',
        scale: '52 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1781'
    },

    'M87.jpg': {
        name: 'Virgo A',
        catalog: 'Messier 87',
        story: 'A supergiant elliptical galaxy at the heart of the Virgo Cluster, harboring a supermassive black hole 6.5 billion times the Sun\'s mass - the first black hole ever imaged directly by the Event Horizon Telescope in 2019. Jets of material shoot out from near the black hole at nearly light speed.',
        whatToLook: 'The bright elliptical galaxy with visible jet extending from the core',
        scale: '53 million light-years away, spanning 120,000 light-years',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1781'
    },

    'M88.jpg': {
        name: 'Messier 88',
        catalog: 'Spiral Galaxy',
        story: 'A beautiful spiral galaxy in Virgo with well-defined spiral arms. It\'s moving through the cluster at high speed, and ram pressure from the cluster\'s hot gas is stripping gas from the galaxy.',
        whatToLook: 'The elegant spiral structure',
        scale: '47 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Charles Messier in 1781'
    },

    'M89.jpg': {
        name: 'Messier 89',
        catalog: 'Elliptical Galaxy',
        story: 'An almost perfectly spherical elliptical galaxy in Virgo - one of the most circular galaxies known. It\'s surrounded by a faint halo of gas and appears to have interacted with other galaxies.',
        whatToLook: 'The nearly perfect spherical shape',
        scale: '50 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1781'
    },

    'M90.jpg': {
        name: 'Messier 90',
        catalog: 'Spiral Galaxy',
        story: 'One of the few galaxies showing blueshift - it\'s approaching us at about 235,000 mph. This is due to the peculiar motion of our Local Group relative to the Virgo Cluster.',
        whatToLook: 'The spiral galaxy with compressed arms',
        scale: '60 million light-years away',
        constellation: 'Virgo',
        discovered: 'Charles Messier in 1781'
    },

    'M91.jpg': {
        name: 'Messier 91',
        catalog: 'Barred Spiral Galaxy',
        story: 'A barred spiral in Virgo that was "lost" for many years due to a position error. The galaxy shows signs of interaction with its environment, possibly from traveling through the cluster.',
        whatToLook: 'The barred spiral structure',
        scale: '63 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Charles Messier in 1781'
    },

    'M92.jpg': {
        name: 'Messier 92',
        catalog: 'Globular Cluster',
        story: 'A bright globular cluster often overshadowed by its more famous neighbor M13. M92 is actually older, denser, and slightly more distant. It\'s one of the oldest known globulars, at about 13.8 billion years.',
        whatToLook: 'The dense, bright globular cluster',
        scale: '26,700 light-years away',
        constellation: 'Hercules',
        discovered: 'Johann Bode in 1777'
    },

    'M93.jpg': {
        name: 'Messier 93',
        catalog: 'Open Cluster',
        story: 'A bright open cluster with a distinctive wedge or butterfly shape formed by its brighter members. It contains about 80 stars.',
        whatToLook: 'The wedge or butterfly pattern of bright stars',
        scale: '3,600 light-years away',
        constellation: 'Puppis',
        discovered: 'Charles Messier in 1781'
    },

    'M94.jpg': {
        name: 'Messier 94',
        catalog: 'Spiral Galaxy',
        story: 'A beautiful spiral galaxy with a bright, active starburst ring around its nucleus. This ring is a region of intense star formation triggered by the galaxy\'s oval shape funneling gas inward.',
        whatToLook: 'The bright starburst ring surrounding the nucleus',
        scale: '16 million light-years away',
        constellation: 'Canes Venatici',
        discovered: 'Pierre Méchain in 1781'
    },

    'M95.jpg': {
        name: 'Messier 95',
        catalog: 'Barred Spiral Galaxy',
        story: 'A barred spiral galaxy with a prominent ring of star formation around its core. Part of the Leo I group of galaxies along with M96 and M105.',
        whatToLook: 'The bright bar and star-forming ring',
        scale: '33 million light-years away',
        constellation: 'Leo',
        discovered: 'Pierre Méchain in 1781'
    },

    'M96.jpg': {
        name: 'Messier 96',
        catalog: 'Spiral Galaxy',
        story: 'The brightest galaxy in the Leo I group, with asymmetric spiral arms suggesting past gravitational interactions. It has hosted two observed supernovae.',
        whatToLook: 'The bright, slightly asymmetric spiral',
        scale: '31 million light-years away',
        constellation: 'Leo',
        discovered: 'Pierre Méchain in 1781'
    },

    'M97.jpg': {
        name: 'Owl Nebula',
        catalog: 'Messier 97',
        story: 'A planetary nebula with two dark patches that resemble the eyes of an owl, giving it its popular name. This is the shell of material ejected by a dying sun-like star about 6,000 years ago.',
        nameOrigin: 'Two dark regions resemble an owl\'s eyes',
        whatToLook: 'The nearly circular nebula with two eye-like dark patches',
        scale: '2,030 light-years away',
        constellation: 'Ursa Major',
        discovered: 'Pierre Méchain in 1781'
    },

    'M98.jpg': {
        name: 'Messier 98',
        catalog: 'Spiral Galaxy',
        story: 'An edge-on spiral galaxy in Virgo showing a slight warp in its disk, likely caused by tidal interactions with other cluster members.',
        whatToLook: 'The edge-on spiral with warped disk',
        scale: '44 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Pierre Méchain in 1781'
    },

    'M99.jpg': {
        name: 'Messier 99',
        catalog: 'Grand Design Spiral',
        story: 'A beautiful face-on spiral galaxy with one spiral arm brighter and more prominent than the other, likely due to gravitational interaction with nearby galaxies in the Virgo Cluster.',
        whatToLook: 'The asymmetric spiral arms',
        scale: '44 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Pierre Méchain in 1781'
    },

    'M100.jpg': {
        name: 'Messier 100',
        catalog: 'Grand Design Spiral',
        story: 'A spectacular face-on spiral galaxy, one of the brightest in the Virgo Cluster. Observations of Cepheid variable stars in M100 were used to help calibrate cosmic distance scales.',
        whatToLook: 'The grand design spiral structure with bright arms',
        scale: '55 million light-years away',
        constellation: 'Coma Berenices',
        discovered: 'Pierre Méchain in 1781'
    },

    'M102.jpg': {
        name: 'Messier 102',
        catalog: 'Spindle Galaxy',
        story: 'The identity of M102 has been debated for centuries - Messier may have accidentally catalogued M101 twice. Most modern references identify it with NGC 5866, the Spindle Galaxy, a beautiful edge-on lenticular galaxy.',
        whatToLook: 'The thin, edge-on lenticular galaxy with dust lane',
        scale: '50 million light-years away (if NGC 5866)',
        constellation: 'Draco',
        discovered: 'Pierre Méchain in 1781'
    },

    'M103.jpg': {
        name: 'Messier 103',
        catalog: 'Open Cluster',
        story: 'A small, young open cluster dominated by a bright double star (though not physically part of the cluster). The cluster contains about 40 stars and is quite young at 25 million years.',
        whatToLook: 'The small, dense cluster with prominent double star',
        scale: '8,500 light-years away',
        constellation: 'Cassiopeia',
        discovered: 'Pierre Méchain in 1781'
    },

    'M105.jpg': {
        name: 'Messier 105',
        catalog: 'Elliptical Galaxy',
        story: 'An elliptical galaxy in the Leo I group harboring a supermassive black hole about 200 million times the Sun\'s mass. It\'s gravitationally interacting with nearby galaxies NGC 3384 and NGC 3389.',
        whatToLook: 'The smooth elliptical with companion galaxies',
        scale: '32 million light-years away',
        constellation: 'Leo',
        discovered: 'Pierre Méchain in 1781'
    },

    'M106.jpg': {
        name: 'Messier 106',
        catalog: 'Seyfert Galaxy',
        story: 'A spectacular spiral galaxy with an active nucleus powered by a supermassive black hole. It emits unusual microwave emission from its core and has anomalous spiral arms possibly created by jets from the central black hole.',
        whatToLook: 'The bright spiral with unusual reddish anomalous arms',
        scale: '23 million light-years away',
        constellation: 'Canes Venatici',
        discovered: 'Pierre Méchain in 1781'
    },

    'M107.jpg': {
        name: 'Messier 107',
        catalog: 'Globular Cluster',
        story: 'A loose globular cluster that was actually discovered by Méchain but not added to Messier\'s catalogue until 1947 when Helen Sawyer Hogg found a note about it. It\'s one of the 100+ globulars orbiting the Milky Way.',
        whatToLook: 'The relatively loose globular cluster',
        scale: '20,900 light-years away',
        constellation: 'Ophiuchus',
        discovered: 'Pierre Méchain in 1782'
    },

    'M108.jpg': {
        name: 'Messier 108',
        catalog: 'Barred Spiral Galaxy',
        story: 'An edge-on barred spiral galaxy showing prominent dust lanes throughout. Its orientation makes it appear elongated and gives us a good view of the dust in the galactic plane.',
        whatToLook: 'The edge-on view with multiple dark dust lanes',
        scale: '46 million light-years away',
        constellation: 'Ursa Major',
        discovered: 'Pierre Méchain in 1781'
    },

    'M109.jpg': {
        name: 'Messier 109',
        catalog: 'Barred Spiral Galaxy',
        story: 'A barred spiral galaxy showing complex structure. The last object in Messier\'s catalogue, it wasn\'t actually included by Messier himself but was later added based on his observations.',
        whatToLook: 'The barred spiral structure with complex arms',
        scale: '83 million light-years away',
        constellation: 'Ursa Major',
        discovered: 'Pierre Méchain in 1781'
    },

    'M110.jpg': {
        name: 'Messier 110',
        catalog: 'Dwarf Elliptical Galaxy',
        story: 'A satellite galaxy of Andromeda (M31), visible as a small companion. Like M32, it\'s a dwarf elliptical orbiting the larger Andromeda Galaxy. It shows some unusual dust lanes for an elliptical galaxy.',
        whatToLook: 'The small elliptical companion to M31',
        scale: '2.7 million light-years away',
        constellation: 'Andromeda',
        discovered: 'Charles Messier in 1773'
    },

    'Messier_Challenge_Poster.jpg': {
        name: 'Messier objects',
        catalog: 'Messier Catalogue',
        story: 'A collection of astronomical objects cataloged by the French astronomer Charles Messier in the 18th century. This poster showcases all Messier objects, including galaxies, nebulae, and star clusters.',
        whatToLook: 'The various shapes and structures of the Messier objects',
        scale: 'Varies by object',
        constellation: 'Varies by object',
        discovered: 'Charles Messier and others in the 18th century'
    }

};
