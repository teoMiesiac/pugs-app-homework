import { SimpleGrid } from '@chakra-ui/react'
import { MiniPictureCard } from 'components/MiniPictureCard'

const pictures = [
  {
    date: '1995-06-23',
    explanation:
      'What if you could "see" gamma rays? This computer processed image represents a map of the entire sky at photon energies above 100 million electron Volts. These gamma-ray photons are more than 40 million times more energetic than visible light photons and are blocked from the Earth\'s surface by the atmosphere. In the early 1990s NASA\'s Compton Gamma Ray Observatory, in orbit around the Earth, scanned the entire sky to produce this picture. A diffuse gamma-ray glow from the plane of our Milky Way Galaxy is clearly seen across the middle. The nature and even distance to some of the fainter sources remain unknown.  For more information see Compton Science Support Center release.   We keep an archive of previous Astronomy Pictures of the Day.   The sky is filled with breathtaking pictures, many of which are available on the World Wide Web. Each day we feature a different picture of some part of our fascinating universe, along with a brief explanation written by a professional astronomer.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert J. Nemiroff and Jerry T. Bonnell.',
    hdurl: 'https://apod.nasa.gov/apod/image/egret_gro.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Gamma Ray Sky Map',
    url: 'https://apod.nasa.gov/apod/image/egret_gro.gif',
  },
  {
    date: '2009-05-27',
    explanation:
      "Why are many large craters on Mercury relatively smooth inside? Recent images from the robotic MESSENGER spacecraft that flew by Mercury last October show previously uncharted regions of Mercury that have large craters with an internal smoothness similar to the maria on Earth's own Moon. Therefore, like our Moon's maria, these craters on Mercury are thought to have been flooded by lava floes that are old but not as old as the surrounding more highly cratered surface. The above image mosaic of the western limb of Mercury was created by MESSENGER as it approached the Solar System's innermost planet last October.  Old and heavily textured terrain runs across much of the image bottom, while across the middle left lies comparatively smooth impact basins where small craters may appear similar at first to protruding hills.  MESSENGER will buzz past Mercury again later this year before entering orbit in 2011.   digg_url = 'http://apod.nasa.gov/apod/ap090527.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0905/mercurywest_messenger_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Volcanic Terrain on Mercury',
    url: 'https://apod.nasa.gov/apod/image/0905/mercurywest_messenger.jpg',
  },
  {
    date: '2009-03-03',
    explanation:
      "Will our Sun look like this one day?  The Helix Nebula is one of brightest and closest examples of a planetary nebula, a gas cloud created at the end of the life of a Sun-like star.  The outer gasses of the star expelled into space appear from our vantage point as if we are looking down a helix.  The remnant central stellar core, destined to become a white dwarf star, glows in light so energetic it causes the previously expelled gas to fluoresce.  The Helix Nebula, given a technical designation of NGC 7293, lies about 700 light-years away towards the constellation of Aquarius and spans about 2.5 light-years.  The above picture was taken by the Wide Field Imager on the 2.2-meter Telescope at the European Southern Observatory's La Silla Observatory. A close-up of the inner edge of the Helix Nebula shows complex gas knots of unknown origin.    digg_url = 'http://apod.nasa.gov/apod/ap090303.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0903/helix_eso_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Helix Nebula from La Silla Observatory',
    url: 'https://apod.nasa.gov/apod/image/0903/helix_eso.jpg',
  },
  {
    date: '1995-08-15',
    explanation:
      "August 15, 1995    Venus: Earth's Sister Planet  Credit: NASA, Galileo, Copyright Calvin J. Hamilton  Explanation:  This picture in visible light was taken by the  Galileo spacecraft.  Venus is very similar to  Earth in size and mass - and so is sometimes referred to as Earth's sister planet - but Venus has a quite different climate.  Venus' thick clouds and closeness to the  Sun (only  Mercury is closer) make it the hottest planet - much hotter than the Earth. Humans could not survive there, and no life of any sort has ever been found. When  Venus is visible it is usually the brightest object in the sky after the Sun and the Moon. More than 20 spacecraft have visited Venus including Venera 9, which landed on the surface, and  Magellan, which used radar to peer through the clouds and make a map of the surface. There are still many things about Venus's unusual atmosphere that astronomers don't understand.",
    hdurl: 'https://apod.nasa.gov/apod/image/venus_galileo.gif',
    media_type: 'image',
    service_version: 'v1',
    title: "Venus: Earth's Sister Planet",
    url: 'https://apod.nasa.gov/apod/image/venus_galileo.gif',
  },
  {
    date: '2018-05-31',
    explanation:
      "Beautiful spiral galaxy NGC 6744 is nearly 175,000 light-years across, larger than our own Milky Way. It lies some 30 million light-years distant in the southern constellation Pavo, its galactic disk tilted towards our line of sight. This Hubble close-up of the nearby island universe spans about 24,000 light-years across NGC 6744's central region in a detailed portrait that combines visible light and ultraviolet image data. The giant galaxy's yellowish core is dominated by the visible light from old, cool stars. Beyond the core are pinkish star forming regions and young star clusters scattered along the inner spiral arms. The young star clusters are bright at ultraviolet wavelengths, shown in blue and magenta hues.",
    hdurl: 'https://apod.nasa.gov/apod/image/1805/STSCI-H-p1827h-NGC6744_2000x1924.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'NGC 6744 Close Up',
    url: 'https://apod.nasa.gov/apod/image/1805/STSCI-H-p1827h-NGC6744_1024x925.jpg',
  },
  {
    copyright: 'Bob Yen',
    date: '2000-07-10',
    explanation:
      "Comet LINEAR's tail appears to be extending.  Many sky watchers are closely following Comet C/1999 S4 LINEAR and wondering if it will develop an impressive tail or become visible to the naked eye later this month.  So far, the unpredictable comet is moving oddly indicating that exploding caverns of heated gas are causing the comet to shift slightly in its orbit around the Sun.  This volatility contributes to Comet LINEAR newly visible two-degree tail, discernable in the above photographic negative taken Friday from California.  Current brightness estimates indicate that Comet LINEAR will just barely become visible without binoculars in northern skies in the days surrounding July 23 during the early evening hours.",
    hdurl: 'https://apod.nasa.gov/apod/image/0007/linear0707_yen_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Comet LINEAR Extends',
    url: 'https://apod.nasa.gov/apod/image/0007/linear0707_yen.jpg',
  },
  {
    copyright: 'Piotrek Sadowski',
    date: '2009-06-09',
    explanation:
      "Across the heart of the Virgo Cluster of Galaxies lies a striking string of galaxies known as Markarian's Chain.  The chain, pictured above, is highlighted on the upper right with two large but featureless lenticular galaxies, M84 and M86. Prominent to their lower left is a pair of interacting galaxies known as The Eyes. The home Virgo Cluster is the nearest cluster of galaxies, contains over 2000 galaxies, and has a noticeable gravitational pull on the galaxies of the Local Group of Galaxies surrounding our Milky Way Galaxy.  The center of the Virgo Cluster is located about 70 million light years away toward the constellation of Virgo.  At least seven galaxies in the chain appear to move coherently, although others appear to be superposed by chance.    digg_url = 'http://apod.nasa.gov/apod/ap090609.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0906/markarian_sadowski_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Markarian's Chain of Galaxies",
    url: 'https://apod.nasa.gov/apod/image/0906/markarian_sadowski.jpg',
  },
  {
    copyright: 'Axel\nMellinger',
    date: '2006-05-19',
    explanation:
      'Named for Australian astronomer Colin Stanley Gum (1924-1960), The Gum Nebula is so large and close it is actually hard to see. In fact, we are only about 450 light-years from the front edge and 1,500 light-years from the back edge of this cosmic cloud of glowing hydrogen gas. Covered in this 41 degree-wide mosaic of H-alpha images, the faint emission region is otherwise easy to lose against the background of Milky Way stars. The complex nebula is thought to be a supernova remnant over a million years old, sprawling across the southern constellations Vela and Puppis.  Sliding your cursor over this spectacular wide field view will reveal the location of objects embedded in The Gum Nebula, including the Vela supernova remnant.',
    hdurl: 'https://apod.nasa.gov/apod/image/0605/Vela_50mm_HaRGB_1000.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Gum Nebula',
    url: 'https://apod.nasa.gov/apod/image/0605/Vela_50mm_HaRGB_f88.jpg',
  },
  {
    copyright: 'Leo Aerts',
    date: '2013-11-02',
    explanation:
      "This webcam and telescope image of banded gas giant Jupiter shows the transit of three shadows cast by Jupiter's moons in progress, captured in Belgian skies on October 12 at 0528 UT. Such a three shadow transit is a relatively rare event, even for a large planet with many moons. Visible in the frame are the three Galilean moons responsible, Callisto at the far left edge, Io closest to Jupiter's disk, and Europa below and just left of Io. Of their shadows on the sunlit Jovian cloud tops, Callisto casts the most elongated one near the planet's south polar region at the bottom. Io's shadow is above and right of Jupiter's Great Red Spot. Of course viewed from Jupiter's perspective, these shadow crossings could be seen as solar eclipses, analogous to the Moon's shadow crossing the sunlit face of planet Earth.",
    hdurl: 'https://apod.nasa.gov/apod/image/1311/Jupiter12oktober2013_5h28UTaerts.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Jupiter's Triple Shadow Transit",
    url: 'https://apod.nasa.gov/apod/image/1311/Jupiter12oktober2013_5h28UTaerts.jpg',
  },
  {
    date: '1997-05-25',
    explanation:
      "Looking like a fleet of futuristic starcruisers, NASA's highly successful series of High Energy Astrophysical Observatory (HEAO) spacecraft appear poised over planet Earth. Labeled A, B, and C in this vintage illustration, the spacebased telescopes were known as HEAO-1, HEAO-2, and HEAO-3 respectively. HEAO-1 and HEAO-2 were responsible for revealing to earthlings the wonders of the x-ray sky, discovering 1,000s of celestial sources of high-energy radiation. HEAO-2, also known as the Einstein Observatory, was launched near the date of the famous physicist's 100th birthday (November, 1978) and was the first large, fully imaging x-ray telescope in space. HEAO-3, the last in the series, was launched in 1979 and measured high energy cosmic-ray particles and gamma-rays. These satellite observatories were roughly 18 feet long and weighed about 7,000 pounds. Their missions completed, all have fallen from orbit and burned up harmessly in the atmosphere.",
    hdurl: 'https://apod.nasa.gov/apod/image/heao_fleet_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'A High Energy Fleet',
    url: 'https://apod.nasa.gov/apod/image/heao_fleet.gif',
  },
  {
    date: '2020-03-15',
    explanation:
      "You couldn't really be caught in this blizzard while standing by a cliff on Churyumov-Gerasimenko. Orbiting the comet -- frequently abbreviated as 67P or CG -- in June of 2016, the Rosetta spacecraft's narrow angle camera did record streaks of dust and ice particles -- similar to snow -- as they drifted across the field of view near the camera and above the comet's surface. Some of the bright specks in the scene, however, are likely due to a rain of energetic charged particles or cosmic rays hitting the camera, and the dense background of stars in the direction of the constellation of the Big Dog (Canis Major). In the featured video, these background stars are easy to spot trailing from top to bottom. The stunning movie was constructed from 33 consecutive images taken over 25 minutes while Rosetta cruised some 13 kilometers from the comet's nucleus.",
    media_type: 'video',
    service_version: 'v1',
    title: 'The Snows of Churyumov-Gerasimenko',
    url: 'https://www.youtube.com/embed/PpyPgJHKxSw?rel=0',
  },
  {
    copyright: 'Peter Lowenstein',
    date: '2014-02-19',
    explanation:
      'Yes, but how many dark clouds have a multicolored lining? Pictured, behind this darker cloud, is a pileus iridescent cloud, a group of water droplets that have a uniformly similar size and so together diffract different colors of sunlight by different amounts.  The above image was taken just before sunset when it was noticed by chance by a photographer in Murambi East, near Odzi Valley and the Mtanda Range of Zimbabwe. Also captured were unusual cloud ripples above the pileus cloud.  The formation of a rare pileus cloud capping a common cumulus cloud is an indication that the lower cloud is expanding upward and might well develop into a storm. In this case, however, only a few minutes after the colorful cloud was noticed, it disappeared.   Follow APOD on: Facebook (Daily) (Sky) (Spanish) (Arabic) or Google Plus (Daily)',
    hdurl: 'https://apod.nasa.gov/apod/image/1402/pileus_lowenstein_4320.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Rainbow Pileus Cloud over Zimbabwe',
    url: 'https://apod.nasa.gov/apod/image/1402/pileus_lowenstein_960.jpg',
  },
  {
    date: '2000-08-20',
    explanation:
      "If sailing the hydrocarbon seas of Titan, beware of gasoline rain.  Such might be a travel advisory issued one future day for adventurers visiting Titan, the largest moon of Saturn.   New images of Titan's surface were released last week from the Canada-France Hawaii Telescope featuring the finest details yet resolved.  Peering into Titan's thick smog atmosphere with infrared light, complex features interpreted as oceans, glaciers, and rock became visible.  The high-resolution infrared image pictured above was made possible using an unblurring technique called adaptive optics.  The interplanetary probe Cassini will reach Saturn and Titan in 2004 to better explore this unusual world.",
    hdurl: 'https://apod.nasa.gov/apod/image/0008/titan_cfht_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Surface of Titan',
    url: 'https://apod.nasa.gov/apod/image/0008/titan_cfht.jpg',
  },
  {
    copyright: 'Dieter WillaschAstro-Cabinet',
    date: '2012-09-12',
    explanation:
      'M7 is one of the most prominent open clusters of stars on the sky.  The cluster, dominated by bright blue stars, can be seen with the naked eye in a dark sky in the tail of the constellation of the Scorpion (Scorpius). M7 contains about 100 stars in total, is about 200 million years old, spans 25 light-years across, and lies about 1000 light-years away.  The above deep exposure was taken from Hakos Farm in Namibia.  The M7 star cluster has been known since ancient times, being noted by Ptolemy in the year 130 AD.  Also visible are a dark dust cloud and literally millions of unrelated stars towards the Galactic center.',
    hdurl: 'https://apod.nasa.gov/apod/image/1209/m7_willasch_2200.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'M7: Open Star Cluster in Scorpius',
    url: 'https://apod.nasa.gov/apod/image/1209/m7_willasch_960.jpg',
  },
  {
    copyright: 'Babak Tafreshi',
    date: '2016-07-07',
    explanation:
      "The Milky Way is massively bright on this cold, clear, altiplano night. At 4,500 meters its reflection in a river, a volcanic peak on the distant horizon, is captured in this stitched panorama under naturally dark skies of the northern Chilean highlands near San Pedro de Atacama. Along the Solar System's ecliptic plane, the band of Zodiacal light also stands out, extending above the Milky Way toward the upper left. In the scene from late April, brilliant Mars, Saturn, and Antares form a bright celestial triangle where ecliptic meets the center of the Milky Way. Left of the triangle, the large purple-red emission nebula Sharpless 2-27, more than twenty Moon diameters wide is centered around star Zeta Ophiuchi.",
    hdurl: 'https://apod.nasa.gov/apod/image/1607/AltiplanoNight_NIK7856Ps.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Altiplano Night',
    url: 'https://apod.nasa.gov/apod/image/1607/AltiplanoNight_NIK7856Ps.jpg',
  },
  {
    date: '2005-09-07',
    explanation:
      "Scroll right to see a breathtaking panorama of Mars from the top of Husband Hill.  The image was taken by the robotic rover Spirit now exploring the red planet.  Spirit, situated in expansive Gusev Crater, has been exploring the Columbia Hills for some time including climbing Husband Hill over the last few months.  On the way up, Spirit took in a color vista from Larry's Lookout.  Visible in the above image is the vast eastern landscape previously blocked from view by the Columbia Hills themselves.  The horizon is mostly defined by the rim of Thira crater visible some 15 kilometers in the distance.  Spirit will now examine rocks and soil at the top of Husband Hill, looking for clues as to how the hills and local rocks formed in the distant past.",
    hdurl: 'https://apod.nasa.gov/apod/image/0509/husbandhill_spirit_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The View from Husband Hill on Mars',
    url: 'https://apod.nasa.gov/apod/image/0509/husbandhill_spirit.jpg',
  },
  {
    copyright: 'Jan CurtisU. AlaskaACRC',
    date: '2000-05-19',
    explanation:
      "Tomorrow's picture: A Comet Too Close to the Sun  < | Archive | Index | Search | Calendar | Glossary | Education | About APOD | >  Authors & editors: Robert Nemiroff (MTU) & Jerry Bonnell (USRA) NASA Technical Rep.: Jay Norris. Specific rights apply. A service of: LHEA at NASA/GSFC & Michigan Tech. U.",
    hdurl: 'https://apod.nasa.gov/apod/image/0005/auroracircle2_curtis.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'An Aurora Before the Storm',
    url: 'https://apod.nasa.gov/apod/image/0005/auroracircle2_curtis_big.jpg',
  },
  {
    date: '2019-06-12',
    explanation:
      "Dust lanes seem to swirl around the core of Messier 96 in this colorful, detailed portrait of the center of a beautiful island universe. Of course M96 is a spiral galaxy, and counting the faint arms extending beyond the brighter central region, it spans 100 thousand light-years or so, making it about the size of our own Milky Way. M96, also known as NGC 3368, is known to be about 35 million light-years distant and a dominant member of the Leo I galaxy group. The featured image was taken by the Hubble Space Telescope.  The reason for M96's asymmetry is unclear -- it could have arisen from gravitational interactions with other Leo I group galaxies, but the lack of an intra-group diffuse glow seems to indicate few recent interactions. Galaxies far in the background can be found by examining the edges of the picture.    APOD in other languages: Arabic, Catalan, Chinese (Beijing), Chinese (Taiwan), Croatian, Czech, Dutch, Farsi, French, French, German, Hebrew, Indonesian, Japanese, Korean, Montenegrin, Polish, Russian, Serbian, Slovenian,  Spanish and Ukrainian",
    hdurl: 'https://apod.nasa.gov/apod/image/1906/M96_HubbleShatz_1824.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Spiral Galaxy M96 from Hubble',
    url: 'https://apod.nasa.gov/apod/image/1906/M96_HubbleShatz_960.jpg',
  },
  {
    copyright: 'Dave Liquorice',
    date: '2002-12-30',
    explanation:
      'Have you ever seen a sun pillar?  When the air is cold and the Sun is rising or setting, falling ice crystals can reflect sunlight and create an unusual column of light.  Ice sometimes forms flat, stop-sign shaped crystals as it falls from high-level clouds.  Air resistance causes these crystals to lie nearly flat much of the time as they flutter to the ground.  Sunlight reflects off crystals that are properly aligned, creating the sun-pillar effect.  In the above picture, a sun-pillar reflects light from a setting Sun.',
    hdurl: 'https://apod.nasa.gov/apod/image/0212/sunpillar_liquorice.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Sun Pillar',
    url: 'https://apod.nasa.gov/apod/image/0212/sunpillar_liquorice_big.jpg',
  },
  {
    date: '2015-02-16',
    explanation:
      "What's happening at the center of spiral galaxy M106? A swirling disk of stars and gas, M106's appearance is dominated by blue spiral arms and red  dust lanes near the nucleus, as shown in the featured image.  The core of M106 glows brightly in radio waves and X-rays where twin jets have been found running the length of the galaxy.  An unusual central glow makes M106 one of the closest examples of the Seyfert class of galaxies, where vast amounts of glowing gas are thought to be falling into a central massive black hole.  M106, also designated NGC 4258, is a relatively close 23.5 million light years away, spans 60 thousand light years across, and can be seen with a small telescope towards the constellation of the Hunting Dogs (Canes Venatici).    Astrophysicists: Browse 1,000+ codes in the Astrophysics Source Code Library",
    hdurl: 'https://apod.nasa.gov/apod/image/1502/m106_colombari_3568.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'M106: A Spiral Galaxy with a Strange Center',
    url: 'https://apod.nasa.gov/apod/image/1502/m106_colombari_960.jpg',
  },
  {
    copyright: 'IAC',
    date: '2017-05-18',
    explanation:
      "It's easy to get lost following intricate filaments in this detailed image of faint supernova remnant Simeis 147. Also cataloged as Sharpless 2-240 it goes by the popular nickname, the Spaghetti Nebula. Seen toward the boundary of the constellations Taurus and Auriga, it covers nearly 3 degrees or 6 full moons on the sky. That's about 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. This composite includes image data taken through narrow-band filters, enhancing the reddish emission from ionized hydrogen atoms to trace the shocked, glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But the expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.",
    hdurl: 'https://apod.nasa.gov/apod/image/1705/Sh-2-240-RHa-GSII-BOIII_DLopez_IAC.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Simeis 147: Supernova Remnant',
    url: 'https://apod.nasa.gov/apod/image/1705/Sh-2-240-RHa-GSII-BOIII_DLopez_IAC1024c.jpg',
  },
  {
    copyright: 'Jack Fusco',
    date: '2012-01-08',
    explanation:
      "Named for a forgotten constellation, the Quadrantid Meteor Shower is an annual event for planet Earth's northern hemisphere skygazers. It usually peaks briefly in the cold, early morning hours of January 4. The shower's radiant point on the sky lies within the old, astronomically obsolete constellation Quadrans Muralis. That position is situated near the boundaries of the modern constellations Hercules, Bootes, and Draco. Many of this year's Quadrantid meteors were dim, but the one captured in this north-looking view is bright and easy to spot. In the foreground is the Maurice River's East Point Lighthouse located near the southern tip of New Jersey on the US east coast. The likely source of the dust stream that produces Quadrantid meteors was identified in 2003 as an asteroid.",
    hdurl: 'https://apod.nasa.gov/apod/image/1201/LighthouseMeteor_fusco.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Lighthouse and Meteor',
    url: 'https://apod.nasa.gov/apod/image/1201/LighthouseMeteor_fusco900.jpg',
  },
  {
    copyright: 'Brad GoldpaintGoldpaint Photography',
    date: '2012-04-25',
    explanation:
      'Did you see it?  One of the more common questions during a meteor shower occurs because the time it takes for a meteor to flash is typically less than the time it takes for a head to turn. Possibly, though, the glory of seeing bright meteors shoot across and knowing that they were once small pebbles on another world might make it all worthwhile, even if your observing partner(s) could not share in every particular experience. Peaking over the past few days, a dark moonless sky allowed the Lyrids meteor shower to exhibit as many as 30 visible meteors per hour from some locations. A bright Lyrid meteor streaks above picturesque Crater Lake in Oregon, USA, in the above composite of nine exposures taken last week. Snow covers the foreground, while the majestic central band of our home galaxy arches well behind the serene lake. Other meteor showers this year include the Perseids in mid-August and the Leonids in mid-November, both expected to also dodge the glare of a bright Moon in 2012.',
    hdurl: 'https://apod.nasa.gov/apod/image/1204/lyridcrater_goldpaint_1200.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Meteor Over Crater Lake',
    url: 'https://apod.nasa.gov/apod/image/1204/lyridcrater_goldpaint_960.jpg',
  },
  {
    date: '1998-07-13',
    explanation:
      'In the old days, just over a year ago, astronomers had little idea of the true distance to  gamma-ray bursts.  Did these enigmatic explosions occur in our outer Galaxy, or in the outer Universe?  Last May, a first telling distance measure was made - GRB 970508 showed an absorption line with a redshift of about 0.8 - indicating that this gamma-ray burst (GRB) was an enormous distance away.  Skeptics, however, are not always convinced by an unrepeated measurement. Since then, though, other tantalizing coincidences have occurred: GRB 971214 occurred unusually near a galaxy with the enormous redshift of 3.4, and GRB 980425 occurred unusually near a peculiar low-redshift supernova.  Skeptics were intrigued. Now, the potentially definitive implications of the above-pictured optical transient might impress even the cautious.  GRB 980703\'s optical transient shows a well-measured redshift from both an absorption line and an emission line: 0.97. The above negative highlights the uncommon transient source with the label "OT", while letters designate common comparison stars.',
    hdurl: 'https://apod.nasa.gov/apod/image/9807/grb980703_keck_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'GRB 980703: A Reassuring Redshift',
    url: 'https://apod.nasa.gov/apod/image/9807/grb980703_keck.jpg',
  },
  {
    copyright: 'Vicent Peris',
    date: '2008-03-08',
    explanation:
      "The striking spiral galaxy M104 is famous for its nearly edge-on profile featuring a broad ring of obscuring dust. Seen in silhouette against a bright bulge of stars, the swath of cosmic dust lanes lends a hat-like appearance to the galaxy in optical images suggesting the more popular moniker, The Sombrero Galaxy. Here, Hubble Space Telescope archival image data has been reprocessed to create this alternative look at the well-known galaxy. The newly developed processing improves the visibility of details otherwise lost in overwhelming glare, in this case allowing features of the galaxy's dust lanes to be followed well into the bright central region. About 50,000 light-years across and 28 million light-years away, M104 is one of the largest galaxies at the southern edge of the Virgo Galaxy Cluster.   digg_url = 'http://apod.nasa.gov/apod/ap080308.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0803/M104b_peris2048.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'M104 Hubble Remix',
    url: 'https://apod.nasa.gov/apod/image/0803/M104b_peris800.jpg',
  },
  {
    copyright: 'Sebastien GiguereAstrolab du Parc du Mont-Megantic',
    date: '2004-08-08',
    explanation:
      'Have you contemplated your sky recently?  This week will be a good one for midnight meditators at many northerly locations as meteors from the Perseid meteor shower will frequently streak through.  The Perseid meteor shower has slowly been building to a crescendo and should peak on the nights of August 11 and 12. Pictured above on 2002 August 1, a group of celestial sightseers near Quebec, Canada are treated to a dark and wondrous night sky that contained bright stars, green auroras, the band of our Milky Way galaxy, a majestic Moon rising, the International Space Station slowly gliding by, and the occasional flash of a Perseid meteor.  Although no meteors were caught in this frame, the Big Dipper remained quite prominent.',
    hdurl: 'https://apod.nasa.gov/apod/image/0208/peoplesky_mpo.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Contemplating the Sky',
    url: 'https://apod.nasa.gov/apod/image/0208/peoplesky_mpo.jpg',
  },
  {
    date: '2008-11-04',
    explanation:
      "How could a galaxy become shaped like a ring?  Even more strange: how could two?  The rim of the blue galaxy pictured on the right shows an immense ring-like structure 30,000 light years in diameter composed of newly formed, extremely bright, massive stars.  This blue galaxy is part of the interacting galaxy system known as Arp 147, and shows a ring because it has recently collided with the other galaxy in the frame, the red galaxy on the left.  Unusually, even this red galaxy shows a ring like band, although it is seen nearly edge-on. When galaxies collide, they pass through each other -- their individual stars rarely come into contact.  Clouds of interstellar gas and dust become condensed, causing a wave of star formation to move out from the impact point like a ripple across the surface of a pond.  The above image was taken last week by NASA's Hubble Space Telescope to demonstrate the ability of its Wide Field Planetary Camera 2 after some recent technical difficulties.   digg_url = 'http://apod.nasa.gov/apod/ap081104.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0811/arp147_hst_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Double Ring Galaxies of Arp 147 from Hubble',
    url: 'https://apod.nasa.gov/apod/image/0811/arp147_hst.jpg',
  },
  {
    date: '1996-06-09',
    explanation:
      'How did the astronauts get back from the Moon? The Lunar Module that landed two astronauts on the Moon actually came apart. The top part containing the astronauts carried additional rocket fuel which allowed it to blast away, leaving the bottom part on the Moon forever. The top part would later meet up with the Command Module and its astronaut pilot, which were continually orbiting the Moon. All would then return to Earth together. The above picture was taken by a robot TV camera left on the Moon by the crew of Apollo 16.  The frame above captures the top part of the Lunar Module just at it was blasting off.',
    hdurl: 'https://apod.nasa.gov/apod/image/apollo16_blastoff_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Blasting Off From the Moon',
    url: 'https://apod.nasa.gov/apod/image/apollo16_blastoff.gif',
  },
  {
    copyright: 'CARA Project',
    date: '2014-10-17',
    explanation:
      "This looks like a near miss but the greenish coma and tail of Comet Siding Spring (C/2013 A1) are really 2,000 light-years or so away from the stars of open cluster Messier 6. They do appear close together though, along the same line-of-sight in this gorgeous October 9th skyscape toward the constellation Scorpius. Still, on Sunday, October 19th this comet really will be involved in a near miss, passing within only 139,500 kilometers of planet Mars. That's about 10 times closer than any known comet flyby of planet Earth, and nearly one third the Earth-Moon distance. While an impact with the nucleus is not a threat the comet's dust, moving with a speed of about 56 kilometers per second relative to the Red Planet, and outskirts of its gaseous coma could interact with the thin Martian atmosphere. Of course, the comet's close encounter will be followed intently by spacecraft in Martian orbit and rovers on the surface.",
    hdurl: 'https://apod.nasa.gov/apod/image/1410/M6SidingSpringLigustri.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Messier 6 and Comet Siding Spring',
    url: 'https://apod.nasa.gov/apod/image/1410/M6SidingSpringLigustri950.jpg',
  },
  {
    date: '1998-05-03',
    explanation:
      'Humans once walked on the Moon. Pictured above is the second person to stand on the lunar surface: Edwin "Buzz" Aldrin. During this Apollo 11 mission, Neil Armstrong (the first person to walk on the moon) and Buzz Aldrin landed on the Moon while Michael Collins circled in the Command Module above. The lunar team erected a plaque on the surface that reads: HERE MEN FROM THE PLANET EARTH FIRST SET FOOT UPON THE MOON JULY 1969 A.D. WE CAME IN PEACE FOR ALL MANKIND. The Apollo missions demonstrated that it is possible to land humans on the Moon and return them safely.',
    hdurl: 'https://apod.nasa.gov/apod/image/9805/aldrin_a11_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Standing on the Moon',
    url: 'https://apod.nasa.gov/apod/image/9805/aldrin_a11.jpg',
  },
  {
    copyright: 'Yuri Beletsky',
    date: '2015-12-17',
    explanation:
      "rth's annual Geminid meteor shower did not disappoint, peaking before dawn on December 14 as our fair planet plowed through dust from active asteroid 3200 Phaethon. Captured in this southern hemisphere nightscape the meteors stream away from the shower's radiant in Gemini. To create the image, many individual frames recording meteor streaks were taken over period of 5 hours. In the final composite they were selected and registered against the starry sky above the twin 6.5 meter Magellan telescopes of Carnegie Las Campanas Observatory in Chile. Rigel in Orion, and Sirius shine brightly as the Milky Way stretches toward the zenith. Near Castor and Pollux the twin stars of Gemini, the meteor shower's radiant is low, close to the horizon. The radiant effect is due to perspective as the parallel meteor tracks appear to converge in the distance.  Gemini's meteors enter Earth's atmosphere traveling at about 22 kilometers per second.",
    hdurl: 'https://apod.nasa.gov/apod/image/1512/geminids2015_beletsky.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Geminids of the South',
    url: 'https://apod.nasa.gov/apod/image/1512/geminids2015_beletsky.jpg',
  },
  {
    date: '2018-12-25',
    explanation:
      "Majestic on a truly cosmic scale, M100 is appropriately known as a grand design spiral galaxy.  It is a large galaxy of over 100 billion stars with well-defined spiral arms that is similar to our own Milky Way Galaxy.  One of the brightest members of the Virgo Cluster of galaxies, M100 (alias NGC 4321) is 56 million light-years distant toward the constellation of Berenice's Hair (Coma Berenices).  This Hubble Space Telescope image of M100 was taken recently with the Wide Field Camera 3 and accentuates bright blue star clusters and intricate winding dust lanes which are hallmarks of this class of galaxies.  Studies of variable stars in M100 have played an important role in determining the size and age of the Universe.",
    hdurl: 'https://apod.nasa.gov/apod/image/1812/M100_HubbleWfc3_3679.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'M100: A Grand Design Spiral Galaxy',
    url: 'https://apod.nasa.gov/apod/image/1812/M100_HubbleWfc3_960.jpg',
  },
  {
    date: '1999-08-21',
    explanation:
      'This striking pair of galaxies is far, far away ... about 350 million light-years from Earth. Cataloged as AM0500-620, the pair is located in the southern constellation Dorado. The background elliptical and foreground spiral galaxy are representative of two of the three major classes of galaxies which inhabit our Universe. Within the disks of spiral galaxies, like our own Milky Way, gas, dust, and young blue star clusters trace out grand spiral "arms". The dust lanes along the arms of this particular spiral stand out dramatically in this Hubble Space Telescope image as they obligingly sweep in front of the background elliptical. Like the central bulges of spiral galaxies, elliptical galaxies tend toward spherical shapes resulting from more random motions of their stars. But while spirals produce new stars, star formation in ellipticals which lack gas and dust seems to have stopped. How do galaxies evolve with cosmic time? Evidence is growing that graceful galaxy shapes can hide a violent history.',
    hdurl: 'https://apod.nasa.gov/apod/image/9803/am0500_hst_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Galaxies Away',
    url: 'https://apod.nasa.gov/apod/image/9803/am0500_hst1.jpg',
  },
  {
    date: '2005-04-03',
    explanation:
      'What causes this unusual structure near the center of our Galaxy? The long parallel rays slanting across the top of the above radio image are known collectively as the Galactic Center Radio Arc and jut straight out from the Galactic plane.  The Radio Arc is connected to the Galactic center by strange curving filaments known as the Arches.  The bright radio structure at the bottom right likely surrounds a black hole at the Galactic center and is known as Sagittarius A*.  One origin hypothesis holds that the Radio Arc and the Arches have their geometry because they contain hot plasma flowing along lines of constant magnetic field.  Recent images from the Chandra X-ray Observatory appear to show this plasma colliding with a nearby cloud of cold gas.',
    hdurl: 'https://apod.nasa.gov/apod/image/0205/gcradioarc_vla_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Galactic Center Radio Arc',
    url: 'https://apod.nasa.gov/apod/image/0205/gcradioarc_vla.jpg',
  },
  {
    date: '2014-07-12',
    explanation:
      "A new star, likely the brightest supernova in recorded human history, lit up planet Earth's sky in the year 1006 AD. The expanding debris cloud from the stellar explosion, found in the southerly constellation of Lupus, still puts on a cosmic light show across the electromagnetic spectrum. In fact, this composite view includes X-ray data in blue from the Chandra Observatory, optical data in yellowish hues, and radio image data in red. Now known as the SN 1006 supernova remnant, the debris cloud appears to be about 60 light-years across and is understood to represent the remains of a white dwarf star. Part of a binary star system, the compact white dwarf gradually captured material from its companion star. The buildup in mass finally triggered a thermonuclear explosion that destroyed the dwarf star. Because the distance to the supernova remnant is about 7,000 light-years, that explosion actually happened 7,000 years before the light reached Earth in 1006. Shockwaves in the remnant accelerate particles to extreme energies and are thought to be a source of the mysterious cosmic rays.",
    hdurl: 'https://apod.nasa.gov/apod/image/1407/sn1006c.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'SN 1006 Supernova Remnant',
    url: 'https://apod.nasa.gov/apod/image/1407/sn1006c_c800.jpg',
  },
  {
    date: '2018-06-17',
    explanation:
      'What\'s happened to Mars? In 2001, Mars underwent a tremendous planet-wide dust storm -- one of the largest ever recorded from Earth. To show the extent, these two Hubble Space Telescope storm watch images from late June and early September (2001) offer dramatically contrasting views of the martian surface. At left, the onset of smaller "seed" storms can be seen near the Hellas basin (lower right edge of Mars) and the northern polar cap. A similar surface view at right, taken over two months later, shows the fully developed extent of the obscuring global storm. Although this storm eventually waned, in recent days a new large dust storm has been taking hold of the red planet.',
    hdurl: 'https://apod.nasa.gov/apod/image/1806/MarsDustStorm_Hubble_3000.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mars Engulfed',
    url: 'https://apod.nasa.gov/apod/image/1806/MarsDustStorm_Hubble_1080.jpg',
  },
  {
    date: '2009-02-04',
    explanation:
      "On the distant planet HD 80606b, summers might be dangerous. Hypothetic life forms floating in HD 080606b's atmosphere or lurking on one of its (presently hypothetical) moons might fear the 1,500 Kelvin summer heat, which is hot enough not only to melt lead but also nickel.  Although summers are defined for Earth by the daily amount of sunlight, summers on HD 80606b are more greatly influenced by how close the planet gets to its parent star. HD 80606b, about 200 light years distant, has the most elliptical orbit of any planet yet discovered.  In comparison to the Solar System, the distance to its parent star would range from outside the orbit of Venus to well inside the orbit of Mercury.  In this sequence, the night side of HD 80606b is computer simulated as it might glow in infrared light in nearly daily intervals as it passed the closest point in its 111-day orbit around its parent star.   The simulation is based on infrared data taken in late 2007 by the Spitzer Space Telescope.    digg_url = 'http://apod.nasa.gov/apod/ap090204.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0902/hd80606b_kasen_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Dangerous Summer on HD 80606b',
    url: 'https://apod.nasa.gov/apod/image/0902/hd80606b_kasen.jpg',
  },
  {
    date: '2011-10-29',
    explanation:
      "Is this what our own Milky Way Galaxy looks like from far away? Similar in size and grand design to our home Galaxy (although without the central bar), spiral galaxy NGC 3370 lies about 100 million light-years away toward the constellation of the Lion (Leo).  Recorded above in exquisite detail by the Hubble Space Telescope's Advanced Camera for Surveys, the big, beautiful face-on spiral is not only photogenic, but has proven sharp enough to study individual stars known as Cepheids. These pulsating stars have been used to accurately determine NGC 3370's distance. NGC 3370 was chosen for this study because in 1994 the  spiral galaxy was also home to a well studied stellar explosion -- a Type Ia supernova.  Combining the known distance to this standard candle supernova, based on the Cepheid measurements, with observations of supernovas at even greater distances, has helped to reveal the size and expansion rate of the entire Universe itself.",
    hdurl: 'https://apod.nasa.gov/apod/image/1110/ngc3370_hst_6031.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Spiral Galaxy NGC 3370 from Hubble',
    url: 'https://apod.nasa.gov/apod/image/1110/ngc3370_hst_900.jpg',
  },
  {
    copyright: 'Phil Hoffman',
    date: '2001-12-03',
    explanation:
      "Tomorrow's picture: Star Flame  < | Archive | Index | Search | Calendar | Glossary | Education | About APOD | >  Authors & editors: Robert Nemiroff (MTU) & Jerry Bonnell (USRA) NASA Technical Rep.: Jay Norris. Specific rights apply. A service of: LHEA at NASA/ GSFC & Michigan Tech. U.",
    hdurl: 'https://apod.nasa.gov/apod/image/0112/auroradouble_hoffman_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Dueling Auroras',
    url: 'https://apod.nasa.gov/apod/image/0112/auroradouble_hoffman.jpg',
  },
  {
    copyright: 'Marco Meniero',
    date: '2020-05-29',
    explanation:
      "That's not a bright star and crescent Moon caught between branches of a eucalyptus tree. It's Venus in a crescent phase and Mercury. Near the western horizon after sunset, the two inner planets closely shared this telescopic field of view on May 22, seen from a balcony in Civitavecchia, Italy. Venus, the very bright celestial beacon, is wandering lower into the evening twilight. It grows larger in apparent size and shows a thinner crescent as it heads toward its inferior conjunction, positioned between Earth and Sun on June 3. Mercury, in a fuller phase, is climbing in the western sky though, reaching its maximum angular distance from the Sun on June 4 Still, this remarkably close pairing with brilliant Venus made Mercury, usually lost in bright twilight skies, easier to spot from planet Earth.   Gallery: Notable Venus & Mercury Conjunction 2020 Images submitted to APOD",
    hdurl: 'https://apod.nasa.gov/apod/image/2005/Venere-e-Mercurio-tra-gli-Eucalipti.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mercury Meets Crescent Venus',
    url: 'https://apod.nasa.gov/apod/image/2005/Venere-e-Mercurio-tra-gli-Eucalipti1024.jpg',
  },
  {
    date: '2019-12-18',
    explanation:
      "What do neutron stars look like? Previously these city-sized stars were too small and too far away to resolve. Recently, however, the first maps of the locations and sizes of hotspots on a neutron star's surface have been made by carefully modeling how the rapid spin makes the star's X-ray brightness rise and fall.  Based on a leading model, an illustrative map of pulsar J0030+0451's hotspots is pictured, with the rest of the star's surface filled in with a false patchy blue.  J0030 spins once every 0.0049 seconds and is located about 1000 light years away. The map was computed from data taken by NASA's Neutron star Interior Composition ExploreR (NICER) X-ray telescope attached to the International Space Station.  The computed locations of these hotspots is surprising and not well understood. Because the gravitational lensing effect of neutron stars is so strong, J0300 displays more than half of its surface toward the Earth.  Studying the appearance of pulsars like J0030 allows accurate estimates of the neutron star's mass, radius, and the internal physics that keeps the star from imploding into a black hole.",
    hdurl: 'https://apod.nasa.gov/apod/image/1912/J0030_NICER_1024.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "A Hotspot Map of Neutron Star J0030's Surface",
    url: 'https://apod.nasa.gov/apod/image/1912/J0030_NICER_1024.jpg',
  },
  {
    date: '2004-11-18',
    explanation:
      "These sharp views of tilted gas giant Uranus show dramatic details of the planet's atmosphere and ring system. The remarkable ground-based images were made using a near-infrared camera and the Keck Adaptive Optics system to reduce the blurring effects of Earth's atmosphere. Recorded in July, the pictures show two sides of Uranus (careful how you pronounce that ...). In both, high, white cloud features are seen mostly in the northern (right hand) hemisphere, with medium level cloud bands in green and lower level clouds in blue. The artificial color scheme lends a deep reddish tint to the otherwise faint rings. Because of the severe tilt of its rotational axis, seasons on Uranus are extreme and last nearly 21 Earth years on the distant planet. Uranus is now slowly approaching its southern autumnal equinox - the beginning of fall in the southern hemisphere - in 2007.",
    hdurl: 'https://apod.nasa.gov/apod/image/0411/uranus_keck_full.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Sharper View of a Tilted Planet',
    url: 'https://apod.nasa.gov/apod/image/0411/uranus_keck_c2.jpg',
  },
  {
    copyright: 'Babak Tafreshi',
    date: '2016-03-10',
    explanation:
      "A dark Sun hangs in the clearing sky over a volcanic planet in this morning sea and skycape. It was taken during this week's total solar eclipse, a dramatic snapshot from along the narrow path of totality in the dark shadow of a New Moon. Earth's Indonesian isle of Ternate, North Maluku lies in the foreground. The sky is still bright near the eastern horizon though, beyond the region's flattened volcanic peaks and outside the Moon's umbral shadow. In fact, near the equator the dark lunar umbra is rushing eastward across Earth's surface at about 1,700 kilometers (1,100 miles) per hour.  Shining through the thin clouds, around the Sun's silhouette is the alluring glow of the solar corona, only easily seen during totality. An inspiring sight for eclipse watchers, this solar corona is the tenuous, hot outer atmosphere of the Sun.",
    hdurl: 'https://apod.nasa.gov/apod/image/1603/tseTafreshi_DSC5231Ps.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Dark Sun over Ternate',
    url: 'https://apod.nasa.gov/apod/image/1603/tseTafreshi_DSC5231Ps1024.jpg',
  },
  {
    copyright: 'Missouri Skies',
    date: '2005-12-09',
    explanation:
      "If you've been outdoors near sunset, then you've probably noticed Venus low in the west as the brilliant evening star. Sometimes mistaken for a tower light near the horizon, Venus is the third brightest celestial beacon, after the Sun and Moon, in planet Earth's sky. That distinction is particularly easy to appreciate in this peaceful scene featuring the crescent Moon, Venus, and sunset colors captured on December 4th near Albany, Missouri, USA. As this season's evening star, Venus will be at its most brilliant tonight, but as December progresses the bright planet will begin to fall out of the western sky. By early next week, December's Moon will have moved on to meet another bright planet overhead -- Mars.",
    hdurl: 'https://apod.nasa.gov/apod/image/0512/moonvenus3_bush_f.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'December Moon Meets Evening Star',
    url: 'https://apod.nasa.gov/apod/image/0512/moonvenus3_bush_c81.jpg',
  },
  {
    date: '2004-02-15',
    explanation:
      'How did this spherule come to be on the Moon? When a meteorite strikes the Moon, the energy of the impact melts some of the splattering rock, a fraction of which might cool into tiny glass beads.  Many of these glass beads were present in lunar soil samples returned to Earth by the Apollo missions.  Pictured above is one such glass spherule that measures only a quarter of a millimeter across.  This spherule is particularly interesting because it has been victim to an even smaller impact.  A miniature crater is visible on the upper left, surrounded by a fragmented area caused by the shockwaves of the small impact.  By dating many of these impacts, some astronomers estimate that cratering on our Moon increased roughly 500 million years ago and continues even today.',
    hdurl: 'https://apod.nasa.gov/apod/image/0402/spherule_apollo11.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "A Spherule from the Earth's Moon",
    url: 'https://apod.nasa.gov/apod/image/0402/spherule_apollo11_big.jpg',
  },
  {
    copyright: 'Stefan\nSeip',
    date: '2005-10-05',
    explanation:
      'On Monday, part of the Sun went missing.  The missing piece was no cause for concern -- the Moon was only momentarily in the way.  The event was not a  total eclipse of the Sun for any Earth-bound sky enthusiast but rather, at best, an annular eclipse, where the Moon blocked most of the Sun.  Because of the relatively large distance to the Moon during this Earth-Moon-Sun alignment, the Moon did not have a large enough angular size to block the entire Sun.  Those who witnessed the solar eclipse from a narrow path through Portugal, Spain and Africa, however, were lucky enough to see the coveted Ring of Fire, a dark Moon completely surrounded by the brilliant light of the distant Sun.  Pictured above is a Ring of Fire captured two days ago in unusually high resolution above Spain.  The resulting image shows details of the granular solar surface as well as many prominences around the Sun.',
    hdurl: 'https://apod.nasa.gov/apod/image/0510/annular_seip_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Annular Solar Eclipse at High Resolution',
    url: 'https://apod.nasa.gov/apod/image/0510/annular_seip.jpg',
  },
  {
    copyright: 'Bill\nSnyder',
    date: '2014-05-03',
    explanation:
      "The yellowish star near center in this dusty telescopic skyview is T Tauri, prototype of the class of T Tauri variable stars. Just next door is the yellow cosmic cloud historically known as Hind's Variable Nebula (NGC 1555). Over 400 light-years away, at the edge of an otherwise invisible molecular cloud, both star and nebula are seen to vary significantly in brightness but not necessarily at the same time, adding to the mystery of the intriguing region. T Tauri stars are now generally recognized as young (less than a few million years old), sun-like stars still in the early stages of formation. To further complicate the picture, infrared observations indicate that T Tauri itself is part of a multiple system and suggest that the associated Hind's Nebula may also contain a very young stellar object. The naturally colored image spans about 7 light-years at the estimated distance of T Tauri.",
    hdurl: 'https://apod.nasa.gov/apod/image/1405/NGC1555snyderPS1V4forAPOD.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "T Tauri and Hind's Variable Nebula",
    url: 'https://apod.nasa.gov/apod/image/1405/NGC1555snyderPS1V4forAPOD950c.jpg',
  },
  {
    date: '2016-01-24',
    explanation:
      'In the center of star-forming region 30 Doradus lies a huge cluster containing some of the largest, hottest, and most massive stars known. These stars, known collectively as star cluster R136, were captured in the featured image in visible light by the Wide Field Camera 3 in 2009 peering through the Hubble Space Telescope. Gas and dust clouds in 30 Doradus, also known as the Tarantula Nebula, have been sculpted into elongated shapes by powerful winds and ultraviolet radiation from these hot cluster stars.  The 30 Doradus Nebula lies within a neighboring galaxy known as the Large Magellanic Cloud and is located a mere 170,000 light-years away.',
    hdurl: 'https://apod.nasa.gov/apod/image/1601/30dor_hubble_3939.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Star Cluster R136 Bursts Out',
    url: 'https://apod.nasa.gov/apod/image/1601/30dor_hubble_960.jpg',
  },
  {
    copyright: 'Petr Horálek',
    date: '2020-05-12',
    explanation:
      "Where are all of these meteors coming from?  In terms of direction on the sky, the pointed answer is the constellation of Small Harp (Lyra).  That is why the famous meteor shower that peaks every April is known as the Lyrids -- the meteors all appear to came from a radiant toward Lyra. In terms of parent body, though, the sand-sized debris that makes up the Lyrid meteors come from Comet Thatcher. The comet follows a well-defined orbit around our Sun, and the part of the orbit that approaches Earth is superposed in front of Lyra. Therefore, when Earth crosses this orbit, the radiant point of falling debris appears in Lyra. Featured here, a composite image containing over 33 meteors (can you find them all?) from last month's  Lyrid meteor shower shows several bright meteors that streaked over a shore of Seč Lake in the Czech Republic. Also visible are the bright stars Vega and Altair, the planet Jupiter, and the central band of our Milky Way Galaxy.   Notable APOD Submissions: Lyrid Meteor Shower 2020",
    hdurl: 'https://apod.nasa.gov/apod/image/2005/Lyrids_Horalek_1221.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Lyrid Meteors from the Constellation Lyra',
    url: 'https://apod.nasa.gov/apod/image/2005/Lyrids_Horalek_960.jpg',
  },
  {
    date: '2009-08-30',
    explanation:
      "These bacteria could survive on another planet.  In an Earth lab, Deinococcus radiodurans (D. rad) survive extreme levels of radiation, extreme temperatures, dehydration, and exposure to genotoxic chemicals.  Amazingly, they even have the ability to repair their own DNA, usually within 48 hours.  Known as an extremophile, bacteria such as D. rad are of interest to NASA partly because they might be adaptable to help human astronauts survive on other worlds.  A recent map of D. rad's DNA might allow biologists to augment their survival skills with the ability to produce medicine, clean water, and oxygen.  Already they have been genetically engineered to help clean up spills of toxic mercury.  Likely one of the oldest surviving life forms, D. rad was discovered by accident in the 1950s when scientists investigating food preservation techniques could not easily kill it.  Pictured above, Deinococcus radiodurans grow quietly in a dish.   digg_url = 'http://apod.nasa.gov/apod/ap090830.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0908/drad_daly.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'D. rad Bacteria: Candidate Astronauts',
    url: 'https://apod.nasa.gov/apod/image/0908/drad_daly.jpg',
  },
  {
    date: '2001-11-12',
    explanation:
      'What is that unusual object?  Astronomers can identify most objects that are imaged on the sky, but not all.  Pictured above is one that currently defies classification.  Attributes of the object include that it has unusual colors, appears to be fading as months go by, and appears to be associated with a distant galaxy.  Its discoverers hold hope that they have uncovered the first known orphan afterglow, an explosion that would have been classified as a gamma-ray burst if the gamma-rays were beamed in our direction.  Orphan afterglows, if they exist, could have unparalleled brightness, and hence be visible so far away that they yield key information about the early years of our universe. A bit of caution might be merited, however, as the last well-publicized mystery object turned out not to be a new member of the astronomical zoo, but rather an unusual type of quasar.  Follow-up observations and analysis over the next year may find more objects like this and/or solve this mystery.',
    hdurl: 'https://apod.nasa.gov/apod/image/0111/afterglow_sdss_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Is Mystery Object an Orphan Afterglow?',
    url: 'https://apod.nasa.gov/apod/image/0111/afterglow_sdss.jpg',
  },
  {
    copyright: 'AAOAATBUKS Telescope',
    date: '1998-09-07',
    explanation:
      'A variety of stars and nebulae can be found towards the constellation of Sagittarius.  Dense fields of stars laced with dark lanes of dust crowd this region only a few degrees from the center of our Galaxy.  Prominent nebulae include the red Lagoon Nebula (M8) in the lower right and the multicolored Trifid Nebula (M20) in the upper right.  Recent high-resolution images of these nebulae show unusual features such as funnel-shaped clouds and proplyds that are not well understood.',
    hdurl: 'https://apod.nasa.gov/apod/image/9809/sag_uks026.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Sky Towards Sagittarius',
    url: 'https://apod.nasa.gov/apod/image/9809/sag_uks026_big.jpg',
  },
  {
    copyright: 'Miguel Claro',
    date: '2015-05-08',
    explanation:
      "In only about 12,000 years Vega will be the North Star, the closest bright star to our fair planet's North Celestial Pole. By then, when you fix your camera to a tripod long exposures of the night sky will show the concentric arcs of star trails centered on a point near Vega as Earth rotates on its axis. Of course, presently the bright star conveniently near the North Celestial Pole is Polaris, but that will change as the Earth's axis of rotation precesses, like the wobble of a spinning top with a precession period of about 26,000 years. If your camera is ready now and you don't want to wait 12,000 years for Vega to be the North Star, consider this ingenious demonstration of contemporary star trails (left) versus star trails reminiscent of the year 14000 CE. Both were recorded this April at the Alqueva Dark Sky Reserve in Alentejo, Portugal. To produce the more Vega-centric star trails of the distant future, astronomer Miguel Claro combined the rotation of two startracking camera mounts to create the apparent shift in the North Celestial Pole. (Addendum: Thanks to APOD readers who note that when Vega is the North Star it will also appear near the same position that Polaris is now relative to the landscape.)",
    hdurl: 'https://apod.nasa.gov/apod/image/1505/Precession-MC_Map_VEGA-POLARIS-Startrail2048.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'When Vega is North',
    url: 'https://apod.nasa.gov/apod/image/1505/Precession-MC_Map_VEGA-POLARIS-Startrail_cscale1024.jpg',
  },
  {
    date: '1999-12-30',
    explanation:
      'As the twentieth century dawned a debate raged over whether the Milky Way was the entire universe.  The 1920s brought observations of spiral-nebulae that housed familiar but faint variable stars, and hence placed these nebulae much farther than anything else ever found.  The Milky Way, apparently, is itself a spiral nebula seen from the inside.  Soon interstellar dust was identified as the opaque material that blocks our view of distant spiral arms, confirming that our Sun was well away from the center.  As the twentieth century closes, galaxies are seen forming across the universe, and our Milky Way is referred to as a spiral galaxy quite similar to NGC 1288, as pictured above.',
    hdurl: 'https://apod.nasa.gov/apod/image/9912/ngc1288_vlt_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Century that Defined Galaxy',
    url: 'https://apod.nasa.gov/apod/image/9912/ngc1288_vlt.jpg',
  },
  {
    date: '2018-09-26',
    explanation:
      "It is still not known why the Sun's light is missing some colors. Here are all the visible colors of the Sun, produced by passing the Sun's light through a prism-like device.  The spectrum was created at the McMath-Pierce Solar Observatory and shows, first off, that although our white-appearing Sun emits light of nearly every color, it does indeed appear brightest in yellow-green light.  The dark patches in the above spectrum arise from gas at or above the Sun's surface absorbing sunlight emitted below.  Since different types of gas absorb different colors of light, it is possible to determine what gasses compose the Sun.  Helium, for example, was first discovered in 1870 on a solar spectrum and only later found here on Earth.  Today, the majority of spectral absorption lines have been identified - but not all.",
    hdurl: 'https://apod.nasa.gov/apod/image/1809/sunspectrum_noao_3071.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "The Sun's Spectrum with its Missing Colors",
    url: 'https://apod.nasa.gov/apod/image/1809/sunspectrum_noao_960.jpg',
  },
  {
    date: '1999-04-30',
    explanation:
      "On September 24, 1997 a shock wave blasted across the surface of the sun at speeds of 250 to 600 kilometers per second. On planet Earth, observer Barry Reynolds photographed the expanding shock front (left) in the light emitted by hydrogen atoms at the solar surface. His discovery image was nicely confirmed by a space-based extreme ultraviolet image (right) of the shock ramming through the sun's upper atmosphere as recorded by the SOHO satellite observatory. In both pictures a bright solar flare is seen near the center of a circular arc-like feature representing a shock front. The shock front is dark in the ground based photo and bright in the ultraviolet image. These shock fronts are believed to be tracers of a 3-dimensional disturbance caused by the flare but researchers are uncertain as to the exact physical mechanisms which produced it. Along with other violent events called coronal mass ejections, solar flares are known to generate streams of energetic particles which can affect the Earth's magnetosphere and Earth orbiting satellites.",
    hdurl: 'https://apod.nasa.gov/apod/image/9904/moreton_halpha_eit.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Solar Shock Wave',
    url: 'https://apod.nasa.gov/apod/image/9904/moreton_halpha_eit.jpg',
  },
  {
    date: '1997-08-21',
    explanation:
      'Is this our universe? Possibly. It is one computerized guess of how gas in the universe was distributed billions of years ago, at redshift 3, when the universe was only a quarter of its present age.  Using supercomputers at the National Center for Supercomputing Applications and assumptions about the composition and beginning of the universe, the GC3 team was able to reconstruct a hypothetical universe. A cube of this universe was cut out and displayed, with each side being about 8 million light years across. Color represents temperature of the hot gas.  At the bottom a single slice through this cube is displayed, with helium abundance superposed with a wire mesh.  The small structures appearing here give insight into the past and present structure of the intergalactic medium, the matter inhabiting the regions between galaxies and clusters of galaxies.',
    hdurl: 'https://apod.nasa.gov/apod/image/9708/universe_gc3_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Universe in a Box',
    url: 'https://apod.nasa.gov/apod/image/9708/universe_gc3.jpg',
  },
  {
    copyright: 'Regina Kelly',
    date: '2016-06-27',
    explanation:
      "What's happening over the horizon?  Although the scene may appear somehow supernatural, nothing more unusual is occurring than a setting Sun and some well placed clouds.  Pictured above are anticrepuscular rays.  To understand them, start by picturing common crepuscular rays that are seen any time that sunlight pours though scattered clouds. Now although sunlight indeed travels along straight lines, the projections of these lines onto the spherical sky are great circles.  Therefore, the crepuscular rays from a setting (or rising) sun will appear to re-converge on the other side of the sky.  At the anti-solar point 180 degrees around from the Sun, they are referred to as anticrepuscular rays.  Featured here is a particularly striking display of anticrepuscular rays photographed earlier this month in Westminster, Colorado, USA.   Deja vu: Anticrepuscular Rays over Colorado (I)",
    hdurl: 'https://apod.nasa.gov/apod/image/1606/Anticrep02_Kelly_3264.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Anticrepuscular Rays over Colorado (II)',
    url: 'https://apod.nasa.gov/apod/image/1606/Anticrep02_Kelly_960.jpg',
  },
  {
    copyright: 'ESAPlanck Acknowledgement: CNRSIASU. Paris-XI',
    date: '2015-01-27',
    explanation:
      "What does the magnetic field of our Galaxy look like?  It has long been known that a modest magnetic field pervades our Milky Way Galaxy because it is seen to align small dust grains that scatter background light. Only recently, however, has the Sun-orbiting Planck satellite made a high-resolution map of this field. Color coded, the 30-degree wide map confirms, among other things, that the Galaxy's interstellar magnetism is strongest in the central disk. The revolution of charged gas around the Galactic center creates this magnetism, and it is hypothesized that viewed from the top, the Milky Way's magnetic field would appear as a spiral swirling out from the center. What caused many of the details in this and similar Planck maps -- and how magnetism in general affected our Galaxy's evolution -- will likely remain topics of research for years to come.",
    hdurl: 'https://apod.nasa.gov/apod/image/1501/GalacticMagneticField_planck_3197.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Our Galaxy's Magnetic Field from Planck",
    url: 'https://apod.nasa.gov/apod/image/1501/GalacticMagneticField_planck_960.jpg',
  },
  {
    date: '2018-04-09',
    explanation:
      "One of the most spectacular solar sights is an explosive flare. In 2011 June, the Sun unleashed somewhat impressive, medium-sized solar flare as rotation carried active regions of sunpots toward the solar limb. That flare, though, was followed by an astounding gush of magnetized plasma -- a monster filament seen erupting at the Sun's edge in this extreme ultraviolet image from NASA's Solar Dynamics Observatory. Featured here is a time-lapse video of that hours-long event showing darker, cooler plasma raining down across a broad area of the Sun's surface, arcing along otherwise invisible magnetic field lines. An associated coronal mass ejection, a massive cloud of high energy particles, was blasted in the general direction of the Earth,and made a glancing blow to Earth's magnetosphere.",
    media_type: 'video',
    service_version: 'v1',
    title: 'The Sun Unleashed: Monster Filament in Ultraviolet',
    url: 'https://www.youtube.com/embed/1rZAA5SYLZU?rel=0',
  },
  {
    copyright: 'Babak Tafreshi',
    date: '2011-12-09',
    explanation:
      "Tomorrow, December 10, the Full Moon will slide through planet Earth's shadow in a total lunar eclipse. The entire eclipse sequence, including 51 minutes of totality, will be visible from Asia and Australia, but moonwatchers in Europe and Africa will miss out on the beginning partial phases because for them, the eclipse will start before moonrise. In central and western North America the earlier phases of the eclipse will be in progress as the Moon sets. In fact, while those in the east will miss out, North Americans far enough west could see a scene very much like this one, with a mostly eclipsed Moon low and near the western horizon during morning twilght. This morning twilight view of another lunar eclipse approaching its total phase at moonset was captured in 2008 on February 21, from the Zagros Mountains of Iran.  Lunar eclipse times and visibility: chart (pdf) | calculator",
    hdurl: 'https://apod.nasa.gov/apod/image/1112/MorningEclipseTafreshi.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Eclipsed Moon in the Morning',
    url: 'https://apod.nasa.gov/apod/image/1112/MorningEclipseTafreshi950c.jpg',
  },
  {
    date: '1999-05-11',
    explanation:
      'Where did all the stars go?  What used to be considered a hole in the sky is now known to astronomers as a dark molecular cloud.  Here, a high concentration of dust and molecular gas absorb practically all the visible light emitted from background stars.  The eerily dark surroundings help make the interiors of molecular clouds some of the coldest and most isolated places in the universe.  One of the most notable of these dark absorption nebulae is a cloud toward the constellation Ophiuchus known as Barnard 68, pictured above.  That no stars are visible in the center indicates that Barnard 68 is relatively nearby, with measurements placing it about 500 light-years away and half a light-year across.  It is not known exactly how molecular clouds like Barnard 68 form, but it is known that these clouds are themselves likely places for new stars to form.',
    hdurl: 'https://apod.nasa.gov/apod/image/9905/barnard68_vlt_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Molecular Cloud Barnard 68',
    url: 'https://apod.nasa.gov/apod/image/9905/barnard68_vlt.jpg',
  },
  {
    copyright: 'Wissam Ayoub',
    date: '2020-10-17',
    explanation:
      'These clouds of gas and dust drift through rich star fields along the plane of our Milky Way Galaxy toward the high flying constellation Cygnus. Caught within the telescopic field of view are the Soap Bubble (lower left) and the Crescent Nebula (upper right). Both were formed at a final phase in the life of a star. Also known as NGC 6888, the Crescent was shaped as its bright, central massive Wolf-Rayet star, WR 136, shed its outer envelope in a strong stellar wind. Burning through fuel at a prodigious rate, WR 136 is near the end of a short life that should finish in a spectacular supernova explosion.  Discovered in 2013, the Soap Bubble Nebula is likely a planetary nebula, the final shroud of a lower mass, long-lived, sun-like star destined to become a slowly cooling white dwarf. Both stellar shrouds are 5,000 light-years or so distant. The larger Crescent Nebula is around 25 light-years across.',
    hdurl: 'https://apod.nasa.gov/apod/image/2010/NGC6888WissamAyoub.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Cygnus: Bubble and Crescent',
    url: 'https://apod.nasa.gov/apod/image/2010/NGC6888WissamAyoub1024.jpg',
  },
  {
    date: '2016-11-17',
    explanation:
      "Faster than a speeding bullet, more powerful than a locomotive, and able to leap tall buildings in a single bound, this Soyuz rocket stands on the launch pad at Baikonur Cosmodrome in Kazakhstan on November 14. Beyond it rises a supermoon, but fame for exceptional feats of speed, strength, and agility is not the reason November's Full Moon was given this popular name. Instead, whenever a Full Moon shines near perigee, the closest point in its elliptical orbit around Earth, it appears larger and brighter than other more distant Full Moons, and so a supermoon is born. In fact, November's supermoon was the second of three consecutive supermoons in 2016. It was also the closest and most superest Full Moon since 1948. Meanwhile, the mild mannered Soyuz rocket is scheduled to launch its Expedition 50/51 crew to the International Space Station today, November 17.",
    hdurl: 'https://apod.nasa.gov/apod/image/1611/nhq201611140001.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Soyuz vs Supermoon',
    url: 'https://apod.nasa.gov/apod/image/1611/nhq201611140001_900x1238.jpg',
  },
  {
    date: '1995-09-04',
    explanation:
      'Ganymede probably undergoes frequent ground shaking events not unlike terrestrial earthquakes. Ganymede, the largest moon of Jupiter and the Solar System, has a thick outer coating of water ice. Passing Voyager spacecraft found a large number of cracks and grooves in the ice so it is thought that Ganymede, like the Earth, has large shifting surface masses called tectonic plates. Ganymede was discovered by Galileo and Marius in 1610, and is larger than the planets Mercury and Pluto. The NASA spacecraft Galileo is scheduled to arrive at Jupiter is December of 1995.',
    hdurl: 'https://apod.nasa.gov/apod/image/ganymede_vg.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Ganymede: Moonquake World',
    url: 'https://apod.nasa.gov/apod/image/ganymede_vg.gif',
  },
  {
    date: '2019-08-03',
    explanation:
      "Peering from the shadows, the Saturn-facing hemisphere of Mimas lies in near darkness alongside a dramatic sunlit crescent. The mosaic was captured near the Cassini spacecraft's final close approach on January 30, 2017. Cassini's camera was pointed in a nearly sunward direction only 45,000 kilometers from Mimas. The result is one of the highest resolution views of the icy, crater-pocked, 400 kilometer diameter moon. An enhanced version better reveals the Saturn-facing hemisphere of the synchronously rotating moon lit by sunlight reflected from Saturn itself. To see it, slide your cursor over the image (or follow this link). Other Cassini images of Mimas include the small moon's large and ominous Herschel Crater.",
    hdurl: 'https://apod.nasa.gov/apod/image/1908/MimasPIA17213.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mimas in Saturnlight',
    url: 'https://apod.nasa.gov/apod/image/1908/MimasPIA17213_fig1_1024.jpg',
  },
  {
    copyright: 'Randall HuletRice U.',
    date: '2010-02-28',
    explanation:
      "Why doesn't matter just bunch up?  The same principle that keeps neutron stars and white dwarf stars from imploding also keeps people from imploding and makes normal matter mostly empty space. The observed reason is known as the Pauli Exclusion Principle.  The principle states that identical fermions -- one type of fundamental matter -- cannot be in the same place at the same time and with the same orientation.  The other type of matter, bosons, do not have this property, as demonstrated clearly by recently created Bose-Einstein condensates.  Earlier this decade, the Pauli Exclusion Principle was demonstrated graphically in the above picture of clouds of two isotopes of lithium -- the left cloud composed of bosons while the right cloud is composed of fermions.  As temperature drops, the bosons bunch together, while the fermions better keep their distance.  The reason why the Pauli Exclusion Principle is true and the physical limits of the principle are still unknown.   digg_url = 'http://apod.nasa.gov/apod/ap100228.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/1002/fermiexclusion_hulet_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Pauli Exclusion Principle: Why You Don't Implode",
    url: 'https://apod.nasa.gov/apod/image/1002/fermiexclusion_hulet.jpg',
  },
  {
    date: '2004-07-02',
    explanation:
      "Yesterday, Cassini became the first spacecraft to enter orbit around gas giant Saturn, rocketing through a 25,000 kilometer wide gap in the distant planet's magnificent system of icy rings at about 15 kilometers per second. Turning to snap pictures, Cassini's narrow angle camera recorded this stunning close-up of a much smaller gap in the rings, the Encke Gap. A mere 300 kilometers wide, the Encke Gap is flanked by amazing structures within the rings -- scalloped edges and patterns of density waves are clear in the sharp image. While the rings of Saturn are likely debris from the breakup of a fair-sized icy moon, the Encke Gap itself is created by the repeated passage of a tiny moon. Only 20 kilometers wide that tiny moon, Pan, was also detected by Cassini's camera as the spacecraft approached the Saturnian system.",
    hdurl: 'https://apod.nasa.gov/apod/image/0407/encke_cassini_fp.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Encke Gap: A Moon Goes Here',
    url: 'https://apod.nasa.gov/apod/image/0407/encke_cassini_fc1.jpg',
  },
  {
    copyright: 'Arturas Medvedevas',
    date: '2019-01-16',
    explanation:
      "Similar in size to large, bright spiral galaxies in our neighborhood, IC 342 is a mere 10 million light-years distant in the long-necked, northern constellation Camelopardalis. A sprawling island universe, IC 342 would otherwise be a prominent galaxy in our night sky, but it is hidden from clear view and only glimpsed through the veil of stars, gas and dust clouds along the plane of our own Milky Way galaxy. Even though IC 342's light is dimmed and reddened by intervening cosmic clouds, this sharp telescopic image traces the galaxy's own obscuring dust, young star clusters, and glowing pink star forming regions along spiral arms that wind far from the galaxy's core. IC 342 may have undergone a recent burst of star formation activity and is close enough to have gravitationally influenced the evolution of the local group of galaxies and the Milky Way.",
    hdurl: 'https://apod.nasa.gov/apod/image/1901/IC342Medvedevas.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'IC 342: The Hidden Galaxy',
    url: 'https://apod.nasa.gov/apod/image/1901/IC342Medvedevas1024.jpg',
  },
  {
    copyright: 'Egon Filter',
    date: '2019-12-10',
    explanation:
      'What are those streaks over the horizon? New Starlink satellites reflecting sunlight. SpaceX launched 60 Starlink communication satellites in May and 60 more in November. These satellites and thousands more are planned by communications companies in the next few years that may make streaks like these relatively common. Concern has been voiced by many in the astronomical community about how reflections from these satellites may affect future observations into space.  In the pictured composite of 33 exposures, parallel streaks from Starlink satellites are visible over southern Brazil. Sunflowers dot the foreground, while a bright meteor was caught by chance on the upper right. Satellite reflections are not new -- the constellation of 66 first-generation Iridium satellites launched starting 20 years ago produced some flares so bright that they could be seen during the day. Most of these old Iridium satellites, however, have been de-orbited over the past few years.    Infinite Loop: Create an APOD Station in your classroom or Science Center.',
    hdurl: 'https://apod.nasa.gov/apod/image/1912/StarlinkTrails_Filter_2048.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Starlink Satellite Trails over Brazil',
    url: 'https://apod.nasa.gov/apod/image/1912/StarlinkTrails_Filter_1080.jpg',
  },
  {
    copyright: 'Sebastian Voltmer',
    date: '2013-08-09',
    explanation:
      "Medieval Albrechtsberg castle is nestled in trees near the northern bank of the river Pielach and the town of Melk, Austria. In clearing night skies on August 12, 2012 it stood under constellations of the northern summer, including Aquarius, Aquila, and faint, compact Delphinus (above and right of center) in this west-looking skyview. The scene also captures a bright meteor above the castle walls. Part of the annual perseid meteor shower, its trail points back toward the heroic constellation Perseus high above the horizon in the early morning hours. Entering the atmosphere at about 60 kilometers per second, perseid meteors are swept up dust grains from the tail of comet Swift-Tuttle. Of course, this year's perseid meteors will flash through night skies this weekend.",
    hdurl: 'https://apod.nasa.gov/apod/image/1308/Albrechtsberg_Perseid2012-08-12_voltmer.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Perseid over Albrechtsberg Castle',
    url: 'https://apod.nasa.gov/apod/image/1308/Albrechtsberg_Perseid2012-08-12_voltmer900.jpg',
  },
  {
    copyright: 'Ignacio\nDiaz Bobillo',
    date: '2013-09-12',
    explanation:
      "Cosmic dust clouds sprawl across a rich field of stars in this sweeping telescopic vista near the northern boundary of Corona Australis, the Southern Crown. Less than 500 light-years away the dust clouds effectively block light from more distant background stars in the Milky Way. The entire frame spans about 2 degrees or over 15 light-years at the clouds' estimated distance. Near center is a group of lovely reflection nebulae cataloged as NGC 6726, 6727, 6729, and IC 4812. A characteristic blue color is produced as light from hot stars is reflected by the cosmic dust. The dust also obscures from view stars in the region still in the process of formation. Smaller yellowish nebula NGC 6729 surrounds young variable star R Coronae Australis. Below it are arcs and loops identified as Herbig Haro objects associated with energetic newborn stars. Magnificent globular star cluster NGC 6723 is at the right. Though NGC 6723 appears to be part of the group, its ancient stars actually lie nearly 30,000 light-years away, far beyond the young stars of the Corona Australis dust clouds.",
    hdurl: 'https://apod.nasa.gov/apod/image/1309/NGC6726-9Bobillo_hires.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Stars and Dust Across Corona Australis',
    url: 'https://apod.nasa.gov/apod/image/1309/NGC6726-9Bobillo950.jpg',
  },
  {
    copyright: 'Tunc Tezel',
    date: '2007-04-14',
    explanation:
      "Finding Venus in the night sky is not too hard these days. Now appearing as the evening star, Venus rules as the brightest celestial beacon in west just after sunset. And if you can find Venus tonight, you can also easily find the lovely Pleiades star cluster (aka M45) close by. In this serene skyview, recorded on Tuesday near Bolu, Turkey, Venus and the Pleiades are on the right, with brilliant Venus reflected in the calm waters of the small lake in the foreground. Left of Venus, the bright star Aldebaran anchors the V-shaped Hyades star cluster. Farther left are stars of the familiar constellation Orion with Rigel, at the foot of Orion, also reflected in the lake. Meanwhile, Sirius, in Canis Major, is the brightest star on the left side of the view. But the bright terrestrial light below Sirius is not a reflection, it's just a light near the lake shore.",
    hdurl: 'https://apod.nasa.gov/apod/image/0704/LakeVenusM45_tezel.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Venus by the Lake',
    url: 'https://apod.nasa.gov/apod/image/0704/LakeVenusM45_tezel720.jpg',
  },
  {
    copyright: 'Rogelio\nBernal Andreo',
    date: '2010-09-09',
    explanation:
      "Star clusters, glowing nebulae and dark dust clouds abound in Cepheus, royal constellation of the northern hemisphere. You can follow them in amazing detail across this broad skyscape, a mosaic of telescopic images spanning about 17 degrees. Beginning at the lower left, the large emission nebula is cataloged as IC 1396. Hundreds of light-years across and about 3,000 light-years distant, it contains a dark, winding, tendril-shaped feature popularly known as the Elephant's Trunk. Near the top middle, the bright nebula with an embedded star cluster is NGC 7380. At the upper right lies NGC 7635 (the Bubble Nebula) and star cluster M52. Put your cursor over the picture to see a labeled version of the field. Many of the objects highlighted have a designation from the second version of the Sharpless catalog (Sh2) and the Barnard catalog (B) of dark nebulae. Associated with star formation, the sites are telltale markers along the region's complex of giant molecular clouds.  Take a short survey about viewing astronomy images on mobile devices.",
    hdurl: 'https://apod.nasa.gov/apod/image/1009/BubblesTrunk_andreo.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Cepheus: Trunk to Bubble',
    url: 'https://apod.nasa.gov/apod/image/1009/BubblesTrunk_andreo600h.jpg',
  },
  {
    copyright: 'Jeremy\nPerez',
    date: '2016-08-19',
    explanation:
      "On the night of August 12, this bright Perseid meteor flashed above volcanic Sunset Crater National Monument, Arizona, USA, planet Earth. Streaking along the summer Milky Way, its initial color is likely due to the shower meteor's characteristically high speed. Entering at 60 kilometers per second, Perseid meteors are capable of exciting green emission from oxygen atoms while passing through the tenuous atmosphere at high altitudes. Also characteristic of bright meteors, this Perseid left a visibly glowing persistent train. Its evolution is seen over a three minute sequence (left to right) spanning the bottom of the frame.  The camera ultimately captured a dramatic timelapse video of the twisting, drifting train.",
    hdurl: 'https://apod.nasa.gov/apod/image/1608/img20160812-IMG_2647_mdPerez.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Perseid Fireball at Sunset Crater',
    url: 'https://apod.nasa.gov/apod/image/1608/img20160812-IMG_2647_mdPerez1024.jpg',
  },
  {
    copyright: 'Andrey Oreshko',
    date: '2009-06-05',
    explanation:
      "Cosmic dust clouds sprawl across a rich field of stars in this sweeping telescopic vista near the northern boundary of Corona Australis, the Southern Crown. Probably less than 500 light-years away and effectively blocking light from more distant, background stars in the Milky Way, the densest part of the dust cloud is about 8 light-years long. At its tip (upper right) is a group of lovely reflection nebulae cataloged as NGC 6726, 6727, 6729, and IC 4812. A characteristic blue color is produced as light from hot stars is reflected by the cosmic dust. The smaller yellowish nebula (NGC 6729) surrounds young variable star R Coronae Australis. Magnificent globular star cluster NGC 6723 is at the upper right corner of the view. While NGC 6723 appears to be part of the group, it actually lies nearly 30,000 light-years away, far beyond the Corona Australis dust clouds.   digg_url = 'http://apod.nasa.gov/apod/ap090605.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0906/Korona_oreshko1800.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Stars and Dust Across Corona Australis',
    url: 'https://apod.nasa.gov/apod/image/0906/Korona_oreshko900.jpg',
  },
  {
    date: '2004-03-27',
    explanation:
      "This dream-like image of Mir was recorded by astronauts as the Space Shuttle Atlantis approached the Russian space station prior to docking during the STS-76 mission. Sporting spindly appendages and solar panels, Mir resembles a whimsical flying insect hovering about 350 kilometers above New Zealand's South Island and the city of Nelson near Cook Strait. In late March 1996, Atlantis shuttled astronaut Shannon W. Lucid to Mir for a five month visit, increasing Mir's occupancy from 2 to 3. It returned to pick Lucid up and drop off astronaut John Blaha during the STS-79 mission in August of that year. Since becoming operational in 1986, Mir has been visited by over 100 spacefarers from the nations of planet Earth including, Russia, the United States, Great Britain, Germany, France, Japan, Austria, Kazakhstan and Slovakia.  After joint Shuttle-Mir training missions in support of the International Space Station, continuous occupation of Mir ended in August 1999. The Mir was deorbited in March 2001.",
    hdurl: 'https://apod.nasa.gov/apod/image/0403/mirdream_sts76_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mir Dreams',
    url: 'https://apod.nasa.gov/apod/image/0403/mirdream_sts76.jpg',
  },
  {
    date: '1997-04-11',
    explanation:
      "The Earth has once again endured a burst of\r particles from the Sun. The latest storm,\r which began Monday, was one of the best documented solar storms\r to date. At 10 am (EDT)\r ground monitors of the SOHO\r spacecraft, which continually monitors the Sun,\r noticed a weak spot in the solar corona was buckling again, this\r time letting loose\r a large, explosive Coronal Mass Ejection\r (CME). Almost simultaneously, NASA's WIND spacecraft\r began detecting bursts of radio waves\r from electrons\r involved in this magnetic storm. Supersonic\r waves rippled though the solar corona\r as a puff of high energy gas shot out into the Solar System.\r The above image\r shows two photographs of the Sun\r taken about 15 minutes apart and subtracted, highlighting the\r explosion. The CME\r gas will have little lasting effect on the Earth,\r but might make this a good weekend to see an aurora.\r",
    hdurl: 'https://apod.nasa.gov/apod/image/9704/suncme_soho_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Sun Puffs \r\nCredit:',
    url: 'https://apod.nasa.gov/apod/image/9704/suncme_soho.jpg',
  },
  {
    copyright: 'Jack Fusco',
    date: '2012-02-23',
    explanation:
      "Venus and Jupiter are this month's two brightest planets. Shortly after sunset on February 20, they dominate the sky above the western horizon and this snowy landscape. In clear and transparent skies over Cherry Springs State Park, Pennsylvania, USA, they are also seen immersed in Zodiacal light. The extended, diffuse, triangular glow is sunlight scattered by dust along the plane of the ecliptic. Brighter near the horizon, the Zodiacal glow angles upward, first to Venus and then to Jupiter hugging the ecliptic as they orbit the Sun. Fading even further, the glow stretches toward the lovely Pleides star cluster near the top of the frame. Following their appearance in this Zodiacal skyscape, the coming days will see Venus and Jupiter sharing the early evening sky with a young crescent Moon. The two bright planets are even headed for a close pairing or conjunction, separated by about 3 degrees on March 13.",
    hdurl: 'https://apod.nasa.gov/apod/image/1202/JackFusco_ZodiacalLightPortrait.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Zodiacal Skyscape',
    url: 'https://apod.nasa.gov/apod/image/1202/JackFusco_ZodiacalLightPortrait900.jpg',
  },
  {
    copyright: 'Dave Kodama',
    date: '2007-11-16',
    explanation:
      "This gorgeous image of Orion shows off the constellation's young stars and cosmic clouds of hydrogen gas and dust. Made with a film camera tracking the stars on November 11, the exposure lasted some 40 minutes. It includes the Great Orion Nebula (near center), a string of well-known nebulae leading upwards to Orion's three belt stars, and the large semi-circular arc known as Barnard's Loop that seems to end at the bottom right, next to bluish supergiant star Rigel. Serendipitously, the picture also recorded a bright, comet-shaped cloud not known to share the sky with Orion's famous stars and nebulae. Also spotted by other skywatchers, the mystery cloud was quickly recognized as a fuel dump from a booster rocket used to place a satellite in geosynchronous orbit. Reflecting sunlight, the fuel dump plume begins on the west (right) side of the star field and expands as it slowly drifts eastward and fades during the time exposure, creating the wedge-shaped streak.",
    hdurl: 'https://apod.nasa.gov/apod/image/0711/rocketOrion_kodama.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Rocket Fuel',
    url: 'https://apod.nasa.gov/apod/image/0711/rocketOrion_kodama720.jpg',
  },
  {
    copyright: 'Judy Schmidt',
    date: '2012-06-16',
    explanation:
      "The first APOD appeared seventeen years ago today, on 1995 June 16.  Although garnering only 14 page views on that day, we are proud to estimate that APOD has now served over one billion space-related images over the last 1.7 decades.  That early beginning, along with a nearly unchanging format, has allowed APOD to be a consistent and familiar site on a web frequently filled with change.   Many people don't know, though, that APOD is now translated daily into many major languages and featured on social media sites and smartphone applications. We again thank our readers and NASA for their continued support, as well as the folks who created the great pictures -- many times with considerable effort -- that APOD has been fortunate enough to feature over the years.  Many can be contacted by following links found in the credit line under the image.  Today's birthday collage includes numerous galaxies captured by the Hubble Space Telescope.   Vote: APOD entered in Three Quarks Daily 2012 Science Writing Contes",
    hdurl: 'https://apod.nasa.gov/apod/image/1206/apod17_person_2500.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'APOD Turns 17',
    url: 'https://apod.nasa.gov/apod/image/1206/apod17_person_960.jpg',
  },
  {
    date: '2000-05-22',
    explanation:
      "Bridges the length of a planet can form on the Sun in a matter of hours.  Known as light bridges, these structures may form as large sunspot groups decay.  Above, one of the sharpest photographs of the Sun ever taken shows two such light bridges that appeared late last month.  The 5000-kilometer long bridges connect moderately dark penumbral regions across the cool abyss of two dark sunspot umbras.  A movie shows that material tends more to rise from below and fall rather than to cross the light bridges.  Bright bubbling granules surround the sunspot group.  The impressive details on this recently released picture from the Swedish Solar Vacuum Telescope were made possible by new adaptive optics that correct for the blurring of the Earth's atmosphere.  What eventually became of the light bridges?  As days progressed, the bridge region expanded to fill the void as the sunspots moved apart and decayed.",
    hdurl: 'https://apod.nasa.gov/apod/image/0005/lightbridges_svst_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Light Bridges on the Sun',
    url: 'https://apod.nasa.gov/apod/image/0005/lightbridges_svst.jpg',
  },
  {
    copyright: 'Catching the Light',
    date: '2014-08-14',
    explanation:
      "Big, bright, and beautiful, a Full Moon near perigee, the closest point in its elliptical orbit around our fair planet, rose on August 10. This remarkable picture records the scene with a dreamlike quality from the east coast of the United States. The picture is actually a composite of 10 digital frames made with exposures from 1/500th second to 1 second long, preserving contrast and detail over a much wider than normal range of brightness. At a perigee distance of a mere 356,896 kilometers, August's Full Moon was the closest, and so the largest and most super, of the three Full Moons nearest perigee in 2014 now popularly known as supermoons. But if you missed August's super supermoon, the next not-quite-so supermoon will be September 8. Then, near the full lunar phase the Moon's perigee will be a slightly more distant 358,387 kilometers. That's only about 0.4 percent less super (farther and smaller) than the super supermoon.",
    hdurl: 'https://apod.nasa.gov/apod/image/1408/Supermoon_20140810.JPG',
    media_type: 'image',
    service_version: 'v1',
    title: 'Surreal Moon',
    url: 'https://apod.nasa.gov/apod/image/1408/Supermoon_20140810.JPG',
  },
  {
    copyright: 'Yuri BeletskyESO',
    date: '2007-07-31',
    explanation:
      "Why are these people shooting a powerful laser into the center of our Galaxy?  Fortunately, this is not meant to be the first step in a Galactic war.  Rather, astronomers at the Very Large Telescope (VLT) site in Chile are trying to measure the distortions of Earth's ever changing atmosphere.  Constant imaging of high-altitude atoms excited by the laser -- which appear like an artificial star -- allow astronomers to instantly measure atmospheric blurring.   This information is fed back to a VLT telescope mirror which is then slightly deformed to minimize this blurring.  In this case, a VLT was observing our Galaxy's center, and so Earth's atmospheric blurring in that direction was needed.  As for inter-galaxy warfare, when viewed from our Galaxy's center, no casualties are expected.  In fact, the light from this powerful laser would combine with light from our Sun to together appear only as bright as a faint and distant star.",
    hdurl: 'https://apod.nasa.gov/apod/image/0707/lasergalaxy_beletsky_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Laser Strike at the Galactic Center',
    url: 'https://apod.nasa.gov/apod/image/0707/lasergalaxy_beletsky.jpg',
  },
  {
    copyright: 'Steed YuNightChina.net',
    date: '2020-12-13',
    explanation:
      "Where do Geminid meteors come from?  In terms of location on the sky, as the featured image composite beautifully demonstrates, the sand-sized bits of rock that create the streaks of the Geminids meteor shower appear to flow out from the constellation of Gemini. In terms of parent body, Solar System trajectories point to the asteroid 3200 Phaethon -- but this results in a bit of a mystery since that unusual object appears mostly dormant.  Perhaps, 3200 Phaethon undergoes greater dust-liberating events than we know. Over 50 meteors including a bright fireball were captured during the peak of the 2015 Geminids Meteor Shower streaking above Xinglong Observatory in China.  The Geminids of December are one of the most predictable and active meteor showers.  This year's Geminids peak tonight and should be particularly good because, in part, the nearly new Moon will only rise toward dawn and so not brighten the sky.",
    hdurl: 'https://apod.nasa.gov/apod/image/2012/GemindsXinglong_Steed_2000.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Geminid Meteors over Xinglong Observatory',
    url: 'https://apod.nasa.gov/apod/image/2012/GemindsXinglong_Steed_960.jpg',
  },
  {
    copyright: 'AAOAATBROEUKS Telescope',
    date: '1998-01-25',
    explanation:
      'Almost unknown to casual observers in the northern hemisphere, the southern sky contains two diffuse wonders known as the Magellanic Clouds. The Magellanic Clouds are small irregular galaxies orbiting our own larger Milky Way spiral galaxy.  The Small Magellanic Cloud (SMC), pictured here, is about 250,000 light years away and contains a preponderance of young, hot, blue stars indicating it has undergone a recent period of star formation.  There is evidence that the SMC is not gravitationally bound to the LMC.',
    hdurl: 'https://apod.nasa.gov/apod/image/9801/smc_uks.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Small Cloud of Magellan (SMC)',
    url: 'https://apod.nasa.gov/apod/image/9801/smc_uks_big.jpg',
  },
  {
    copyright: 'Scott Rosen',
    date: '2015-05-22',
    explanation:
      "In the dusty sky toward the constellation Taurus and the Orion Arm of our Milky Way Galaxy, this broad mosaic follows dark and faint reflection nebulae along the region's fertile molecular cloud. The six degree wide field of view starts with long dark nebula LDN 1495 stretching from the lower left, and extends beyond the (upside down) bird-like visage of the Baby Eagle Nebula, LBN 777, at lower right. Small bluish reflection nebulae surround scattered fainter Taurus stars, sights often skipped over in favor of the constellation's better known, brighter celestial spectacles. Associated with the young, variable star RY Tau, the yellowish nebula VdB 27 is toward the upper left. Only 400 light-years or so distant, the Taurus molecular cloud is one of the closest regions of low-mass star formation. At that distance this dark vista would span over 40 light-years.",
    hdurl: 'https://apod.nasa.gov/apod/image/1505/vdb27-Pnl1-2-LBN777-Rosen2048x.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'A Dark and Dusty Sky',
    url: 'https://apod.nasa.gov/apod/image/1505/vdb27-Pnl1-2-LBN777-Rosen1078x.jpg',
  },
  {
    date: '2012-05-31',
    explanation:
      "Known for its bright ring system and many moons, gas giant Saturn looks strange and unfamiliar in this false-color view from the Cassini spacecraft. In fact, in this Visual and Infrared Mapping Spectrometer (VIMS) mosaic the famous rings are almost invisible, seen edge-on cutting across picture center. The most striking contrast in the image is along the terminator or boundary between night and day. To the right (day side) blue-green hues are visible sunlight reflected from Saturn's cloud tops. But on the left (night side) in the absence of sunlight, the lantern-like glow of infrared radiation from the planet's warm interior silhouettes features at Saturn's deeper cloud levels. The infrared glow also shines from the broad shadows of Saturn's rings sweeping across the planet's upper hemisphere.",
    hdurl: 'https://apod.nasa.gov/apod/image/1205/irsaturn_vims_f.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Lantern Saturn',
    url: 'https://apod.nasa.gov/apod/image/1205/irsaturn_vims_c80.jpg',
  },
  {
    copyright: 'Babak Tafreshi',
    date: '2010-05-14',
    explanation:
      "The arc of the southern Milky Way shone brightly on this starry night. Captured on May 4, in the foreground of this gorgeous skyview is the rainforest near the spectacular Iguaçu Falls and national park at the border of Brazil and Argentina. Looking skyward along the Milky Way's arc from the left are Alpha and Beta Centauri, the Coalsack, the Southern Cross, and the Carina Nebula. Sirius, brightest star in planet Earth's night sky is at the far right.  Brilliant Canopus, second brightest star in the night, and our neighboring galaxies the Large and Small Magellanic clouds, are also included in the scene. For help finding them, just slide your cursor over the image. Much closer to home, lights near the center along the horizon are from Argentina's Iguazú Falls International Airport.",
    hdurl: 'https://apod.nasa.gov/apod/image/1005/IguacuNight-tafreshi.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Iguaçu Starry Night',
    url: 'https://apod.nasa.gov/apod/image/1005/IguacuNight-tafreshi_900.jpg',
  },
  {
    copyright: 'Bob Franke',
    date: '2010-02-11',
    explanation:
      "This pretty, open cluster of stars, M34, is about the size of the Full Moon on the sky. Easy to appreciate in small telescopes, it lies some 1,800 light-years away in the constellation Perseus. At that distance, M34 physically spans about 15 light-years. Formed at the same time from the same cloud of dust and gas, all the stars of M34 are about 200 million years young. But like any open star cluster orbiting in the plane of our galaxy, M34 will eventually disperse as it experiences gravitational tides and encounters with the Milky Way's interstellar clouds and other stars. Over four billion years ago, our own Sun was likely formed in a similar open star cluster.   digg_url = 'http://apod.nasa.gov/apod/ap100211.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/1002/m34Franke.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Star Cluster M34',
    url: 'https://apod.nasa.gov/apod/image/1002/m34Franke900.jpg',
  },
  {
    copyright: 'Eric Coles',
    date: '2017-09-30',
    explanation:
      "Look through the cosmic cloud cataloged as NGC 281 and you might miss the stars of open cluster IC 1590. Still, formed within the nebula that cluster's young, massive stars ultimately power the pervasive nebular glow. The eye-catching shapes looming in this portrait of NGC 281 are sculpted columns and dense dust globules seen in silhouette, eroded by intense, energetic winds and radiation from the hot cluster stars. If they survive long enough, the dusty structures could also be sites of future star formation. Playfully called the Pacman Nebula because of its overall shape, NGC 281 is about 10,000 light-years away in the constellation Cassiopeia. This sharp composite image was made through narrow-band filters, combining emission from the nebula's hydrogen, sulfur, and oxygen atoms in green, red, and blue hues. It spans over 80 light-years at the estimated distance of NGC 281.",
    hdurl: 'https://apod.nasa.gov/apod/image/1709/N281_ColesHelm.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Portrait of NGC 281',
    url: 'https://apod.nasa.gov/apod/image/1709/N281ColesHelm1024.jpg',
  },
  {
    copyright: 'Ken Crawford',
    date: '2011-11-03',
    explanation:
      "These bright rims and flowing shapes suggest to some melting ice cream on a cosmic scale. Looking toward the constellation Cassiopeia, the colorful (zoomable) skyscape features the swept back, comet-shaped clouds IC 59 (left) and IC 63. About 600 light-years distant, the clouds aren't actually melting, but they are slowly dissipating under the influence of ionizing ultraviolet radiation from hot,luminous star gamma Cas. Gamma Cas is physically located only 3 to 4 light-years from the nebulae, just off the upper right edge of the frame. In fact, slightly closer to gamma Cas, IC 63 is dominated by red H-alpha light emitted as the ionized hydrogen atoms recombine with electrons. Farther from the star, IC 59 shows proportionally less H-alpha emission but more of the characteristic blue tint of dust reflected star light. The field of view spans about 1 degree or 10 light-years at the estimated distance of gamma Cas and friends.",
    hdurl: 'https://apod.nasa.gov/apod/image/1111/IC59IC63crawford.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'IC 59 and IC 63 in Cassiopeia',
    url: 'https://apod.nasa.gov/apod/image/1111/IC59IC63crawford600h.jpg',
  },
  {
    copyright: 'John Ambrose',
    date: '2010-04-30',
    explanation:
      "At opposition in late January, Mars shone very brightly in planet Earth's night sky, among the stars of the constellation Cancer the Crab. Since then the Red Planet has been fading, but still lingers in Cancer during April and May. In mid-April, Mars wandered remarkably close to Cancer's famous star cluster M44, the Beehive Cluster. M44 is also known by an older name, Praesepe, Latin for cradle or manger. Captured in this 60 second time exposure made on April 14, a yellow-tinged Mars and M44 are near the center of the field, seemingly just beyond the reach of a pine tree. Of course, M44's stars are about 600 light-years away, while Mars was more like 600 light-seconds from Earth. The digital photograph was made with a camera mounted on a telescope tracking the stars through dark skies above a camp ground in Virginia, USA. During the exposure, passing car lights briefly illuminated the tree branches.",
    hdurl: 'https://apod.nasa.gov/apod/image/1004/MarsandM44ambrose-60S-1024.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mars in a Manger',
    url: 'https://apod.nasa.gov/apod/image/1004/MarsandM44ambrose-60S-900.jpg',
  },
  {
    copyright: 'Iv\ufffdn \ufffdder',
    date: '2010-05-16',
    explanation:
      "There's something behind these clouds.  Those faint graceful arcs, upon inspection, are actually far, far in the distance.  They are the Earth's Moon and the planet Venus.  Both the Moon and Venus are bright enough to be seen during the day, and both are quite capable of showing a crescent phase.   To see Venus, which appears quite small, in a crescent phase requires binoculars or a telescope. In the above dramatic daytime image taken from Budapest, Hungary in 2004, the Moon and Venus shared a similar crescent phase a few minutes before the Moon eclipsed the larger but more distant world.   Similarly, visible today in parts of Africa and Asia, a crescent Moon will again eclipse Venus during the day. About an hour after the above image was taken, Venus reappeared.",
    hdurl: 'https://apod.nasa.gov/apod/image/1005/venusmoon_eder_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Crescent Venus and Moon',
    url: 'https://apod.nasa.gov/apod/image/1005/venusmoon_eder.jpg',
  },
  {
    copyright: 'Ignacio\nDiaz Bobillo',
    date: '2017-11-16',
    explanation:
      'The Tarantula Nebula is more than a thousand light-years in diameter, a giant star forming region within nearby satellite galaxy the Large Magellanic Cloud, about 180 thousand light-years away. The largest, most violent star forming region known in the whole Local Group of galaxies, the cosmic arachnid sprawls across this spectacular view composed with narrowband data centered on emission from ionized hydrogen and oxygen atoms. Within the Tarantula (NGC 2070), intense radiation, stellar winds and supernova shocks from the central young cluster of massive stars, cataloged as R136, energize the nebular glow and shape the spidery filaments. Around the Tarantula are other star forming regions with young star clusters, filaments, and blown-out bubble-shaped clouds. In fact, the frame includes the site of the closest supernova in modern times, SN 1987A, right of center. The rich field of view spans about 1 degree or 2 full moons, in the southern constellation Dorado. But were the Tarantula Nebula closer, say 1,500 light-years distant like the local star forming Orion Nebula, it would take up half the sky.  Watch: Leonid Meteor Shower',
    hdurl: 'https://apod.nasa.gov/apod/image/1711/Tarantula_bicolor_Bobillo.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Tarantula Nebula',
    url: 'https://apod.nasa.gov/apod/image/1711/Tarantula_bicolor_Bobillo1024.jpg',
  },
  {
    date: '2007-01-17',
    explanation:
      "The brightest comet of recent decades was a surprising first sight for a new camera in space.  The Sun Earth Connection Coronal and Heliospheric Investigation (SECCHI) instrument onboard the Solar TErrestrial RElations Observatory (STEREO) satellite had just opened up on January 11 when it snapped the above image of Comet McNaught.  Visible was a spectacular view of the ion tail of Comet McNaught being swept away from the Sun by the solar wind in filamentary rays.   The comet tail is seen to extend at least seven degrees across the above image, while the central coma is so bright it saturates. Comet McNaught is now reportedly so bright that it is visible even in broad daylight by blocking out the Sun with your hand.   Comet McNaught has rounded the Sun and will slowly fade away for observers in Earth's Southern Hemisphere as it recedes from the Sun.",
    hdurl: 'https://apod.nasa.gov/apod/image/0701/mcnaught_stereo_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Comet McNaught from New STEREO Satellite',
    url: 'https://apod.nasa.gov/apod/image/0701/mcnaught_stereo.jpg',
  },
  {
    date: '1996-11-29',
    explanation:
      "Is Io the solar system's Fissure King? Well, probably not ... but it is the most active volcanic moon. Active volcanoes on Jupiter's moon Io were a surprise discovery of the Voyager missions of the late 1970s. The extent of Io's volcanic activity today is being investigated close-up by the Galileo spacecraft currently exploring the Jovian system. The two frames above show a roughly 300 mile square area around the Io volcano called Marduk. The left-hand view of Marduk was made by Voyager in 1979, the right-hand view by Galileo earlier this year. A comparison reveals that dramatic changes have occured, including the creation of a dark, linear feature running diagonally through the Galileo image that is probably a huge volcanic fissure.",
    hdurl: 'https://apod.nasa.gov/apod/image/9611/iomarduk_gal.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Io: The Fissure King?\r\nCredit:',
    url: 'https://apod.nasa.gov/apod/image/9611/iomarduk_gal.jpg',
  },
  {
    copyright: 'Malin Space Science SystemsMOCMGSJPLNASA',
    date: '2004-08-31',
    explanation:
      'What causes the black dots on dunes on Mars?  As spring dawns on the Northern Hemisphere of Mars, dunes of sand near the poles begin to defrost.  Thinner regions of ice typically thaw first revealing sand whose darkness soaks in sunlight and accelerates the thaw.  By summer, the spots will have expanded to encompass the entire dunes that will then be completely thawed and dark. The carbon dioxide and water ice actually sublime in the thin atmosphere directly to gas.  Taken in mid-July, the above image shows a field of spotted polar dunes spanning about 3 kilometers near the Martian North Pole.  Meanwhile, in the Southern Hemisphere of Mars, the Earth-sent robot Martian rovers will try to survive through Martian winter, which peaks in mid-September.',
    hdurl: 'https://apod.nasa.gov/apod/image/0408/dotteddunes_mgs_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Dotted Dunes of Mars',
    url: 'https://apod.nasa.gov/apod/image/0408/dotteddunes_mgs.jpg',
  },
  {
    date: '2007-10-23',
    explanation:
      "Saturn never shows a crescent phase -- from Earth.  But when viewed from beyond, the majestic giant planet can show an unfamiliar diminutive sliver. This image of crescent Saturn in natural color was taken by the robotic Cassini spacecraft in May. The image captures Saturn's majestic rings from the side of the ring plane opposite the Sun -- the unilluminated side -- another vista not visible from Earth. Pictured are many of Saturn's photogenic wonders, including the subtle colors of cloud bands, the complex shadows of the rings on the planet, the shadow of the planet on the rings, and the moons Mimas (2 o'clock), Janus (4 o'clock), and Pandora (8 o'clock). As Saturn moves towards equinox in 2009, the ring shadows are becoming smaller and moving toward the equator.   During equinox, the rings will be nearly invisible from Earth and project only an extremely thin shadow line onto the planet.",
    hdurl: 'https://apod.nasa.gov/apod/image/0710/crescentsaturn_cassini_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Crescent Saturn',
    url: 'https://apod.nasa.gov/apod/image/0710/crescentsaturn_cassini.jpg',
  },
  {
    date: '2000-02-12',
    explanation:
      "Get out your red/blue glasses and launch yourself into this stereo picture of Saturn! The picture is actually composed from two images recorded weeks apart by the Voyager 2 spacecraft during its visit to the Saturnian System in August of 1981. Traveling at about 35,000 miles per hour, the spacecraft's changing viewpoint from one image to the next produced this exaggerated but pleasing stereo effect. Saturn is the second largest planet in the Solar System, after Jupiter. Its spectacular ring system is so wide that it would span the space between the Earth and Moon. Although they look solid here, Saturn's rings consist of individually orbiting bits of ice and rock ranging in size from grains of sand to barn-sized boulders.",
    hdurl: 'https://apod.nasa.gov/apod/image/0002/sat3d_voyager_big.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Stereo Saturn',
    url: 'https://apod.nasa.gov/apod/image/0002/sat3d_voyager.gif',
  },
]

const PicturesList = (): JSX.Element => (
  <SimpleGrid minChildWidth="150px" width="100%" gap="40px" justifyContent="center" alignItems="center">
    {pictures.map((picture) => (
      <MiniPictureCard key={picture.title} src={picture.url} />
    ))}
  </SimpleGrid>
)

export default PicturesList
