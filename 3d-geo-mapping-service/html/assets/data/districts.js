// Curated 31 Districts of Karnataka for 3D Map Explorer
window.KARNATAKA_CATEGORIES = {
  "temple": {
    "label": "Temples & shrines",
    "color": "#E8833A"
  },
  "faith": {
    "label": "Churches, mosques & basadis",
    "color": "#9B7BE0"
  },
  "nature": {
    "label": "Nature, hills & water",
    "color": "#2AA7C9"
  },
  "heritage": {
    "label": "Heritage, forts & palaces",
    "color": "#C9A227"
  },
  "civic": {
    "label": "Civic & education",
    "color": "#4C8BF5"
  },
  "city": {
    "label": "Getting around & sights",
    "color": "#6BAF5B"
  },
  "coast": {
    "label": "Beaches & islands",
    "color": "#2AA7C9"
  },
  "manipal": {
    "label": "Manipal & education",
    "color": "#4C8BF5"
  }
};

window.KARNATAKA_DISTRICTS = [
  {
    "id": "bagalkote",
    "name": "Bagalkote",
    "division": "Kittur Karnataka",
    "tagline": "Cradle of temple architecture with Badami, Pattadakal and Aihole",
    "bounds": {
      "north": 16.55,
      "south": 15.73,
      "east": 76.31,
      "west": 75.1
    },
    "home": {
      "center": {
        "lat": 15.9185,
        "lng": 75.6775,
        "altitude": 0
      },
      "range": 4500,
      "tilt": 60,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "badami-caves",
        "cat": "heritage",
        "featured": true,
        "name": "Badami Cave Temples",
        "query": "Badami Cave Temples Bagalkote",
        "lat": 15.9184,
        "lng": 75.6844,
        "blurb": "Four rock-cut cave temples carved into red sandstone cliffs, dating to the 6th-century Chalukya dynasty.",
        "details": [
          "Carved during the Badami Chalukya empire between the 6th and 8th centuries overlooking Agastya Lake.",
          "Cave 1 is dedicated to Nataraja Shiva with 18 arms, Caves 2 and 3 to Vishnu (including a stunning Varaha relief), and Cave 4 to Jain Tirthankaras.",
          "The red sandstone cliffs make Badami a worldwide destination for rock climbers."
        ]
      },
      {
        "id": "badami-fort-agastya",
        "cat": "nature",
        "featured": true,
        "name": "Badami Fort & Agastya Lake",
        "query": "Agastya Lake Badami Bagalkote",
        "lat": 15.9205,
        "lng": 75.6865,
        "blurb": "Historic 5th-century reservoir lake enclosed between northern and southern sandstone fort ridges.",
        "details": [
          "Created during the reign of Pulakeshin I; the water was believed to have miraculous healing properties.",
          "Overlooked by the 7th-century Bhutanatha temple group standing right at the water's edge."
        ]
      },
      {
        "id": "pattadakal-group",
        "cat": "heritage",
        "featured": true,
        "name": "Pattadakal UNESCO World Heritage Site",
        "query": "Pattadakal Temples Bagalkote",
        "lat": 15.9485,
        "lng": 75.8158,
        "blurb": "UNESCO World Heritage complex displaying a harmonious blend of Dravidian and Nagara temple styles on the Malaprabha River.",
        "details": [
          "Served as the holy coronation site (pattabhisheka) for Chalukyan monarchs.",
          "Features the monumental Virupaksha, Mallikarjuna, Sangameshwara, and Galaganatha temples.",
          "Built in 740 CE by Queen Lokamahadevi to commemorate victory over the Pallavas of Kanchi."
        ]
      },
      {
        "id": "aihole-durga",
        "cat": "heritage",
        "featured": true,
        "name": "Aihole Durga Temple Complex",
        "query": "Durga Temple Aihole Bagalkote",
        "lat": 16.0215,
        "lng": 75.8815,
        "blurb": "The cradle of Hindu temple architecture with over 120 stone temples dating from the 4th to 12th century.",
        "details": [
          "Famous for its unique apsidal (horseshoe-shaped) sanctum mimicking Buddhist chaitya halls.",
          "Surrounded by a colonnade of exquisitely carved stone pillars with celestial musicians and dancers."
        ]
      },
      {
        "id": "aihole-lad-khan",
        "cat": "heritage",
        "name": "Lad Khan & Ravanaphadi Caves, Aihole",
        "query": "Lad Khan Temple Aihole Bagalkote",
        "lat": 16.0205,
        "lng": 75.8825,
        "blurb": "One of the oldest surviving structural stone temples in South India, with monolithic square pillars and stone lattice jali windows.",
        "details": [
          "Originally built as an assembly hall in the 5th century CE and dedicated to Shiva.",
          "Nearby Ravanaphadi is a 6th-century rock-cut cave featuring Nataraja dancing with Ganesh and the Sapta Matrikas."
        ]
      },
      {
        "id": "mahakuta",
        "cat": "temple",
        "name": "Mahakuta Group of Temples",
        "query": "Mahakuta Temple Bagalkote",
        "lat": 15.9328,
        "lng": 75.7282,
        "blurb": "Tranquil cluster of 7th-century Shaivite temples around the natural freshwater spring pool of Vishnu Pushkarini.",
        "details": [
          "A sacred place of pilgrimage renowned for the natural freshwater spring pool that never runs dry.",
          "Contains important historical stone pillar inscriptions of the Badami Chalukya king Mangalesha dating to 602 CE."
        ]
      },
      {
        "id": "banashankari-bagalkote",
        "cat": "temple",
        "name": "Banashankari Amma Temple (Cholachagudda)",
        "query": "Banashankari Temple Badami Bagalkote",
        "lat": 15.8755,
        "lng": 75.7045,
        "blurb": "Ancient temple dedicated to Shakambhari Devi with a grand stepped pond (Haridra Theertha) and stone watchtowers.",
        "details": [
          "Originally built by the 7th-century Chalukyas who regarded Banashankari as their Kuladevi (tutelary deity).",
          "The annual Banashankari Jathra in January draws hundreds of thousands of devotees and features Karnataka's largest rural fair."
        ]
      },
      {
        "id": "almatti-dam",
        "cat": "nature",
        "name": "Almatti Dam & Lal Bahadur Shastri Sagar",
        "query": "Almatti Dam Bagalkote Karnataka",
        "lat": 16.3315,
        "lng": 75.8885,
        "blurb": "Major multipurpose dam on the Krishna River with landscaped Mughal terrace gardens, musical fountains and boating.",
        "details": [
          "The principal reservoir of the Upper Krishna Irrigation Project, completed in 2005.",
          "Features seven landscaped terrace gardens, musical dancing fountains, and rock gardens on the Krishna River backwaters."
        ]
      },
      {
        "id": "kudalasangama",
        "cat": "faith",
        "featured": true,
        "name": "Kudalasangama (Aikya Mantapa of Basavanna)",
        "query": "Kudalasangama Temple Bagalkote",
        "lat": 16.2085,
        "lng": 76.1555,
        "blurb": "Sacred confluence of Krishna and Malaprabha rivers, where 12th-century social reformer Basaveshwara attained Aikya.",
        "details": [
          "The primary pilgrimage centre of the Lingayat faith, housing the samadhi (Aikya Mantapa) of Jagadguru Basaveshwara.",
          "Protected within a cylindrical glass-and-stone ringwall amidst the backwaters of the Almatti Dam."
        ]
      },
      {
        "id": "bagalkote-badami-north-fort",
        "name": "Badami North Fort & Upper Shivalaya",
        "lat": 15.922,
        "lng": 75.684,
        "alt": 60,
        "cat": "heritage",
        "query": "Upper Shivalaya Badami Fort Bagalkote",
        "blurb": "Chalukyan hilltop bastion perched above Agastya Lake with 7th-century shrines.",
        "details": [
          "Constructed atop steep sandstone crags overlooking Badami town, accessible via stone stairways cut into narrow rock crevices.",
          "Upper Shivalaya retains fine Dravidian stone carvings including Garuda and mythological reliefs from the 7th-century Vatapi Chalukya era."
        ]
      },
      {
        "id": "bagalkote-bilgi-stepwell",
        "name": "Bilgi Siddeshwara Stepwell (Aretthina Bavi)",
        "lat": 16.345,
        "lng": 75.617,
        "alt": 40,
        "cat": "heritage",
        "query": "Aretthina Bavi Bilgi Stepwell Bagalkote",
        "blurb": "Historic 16th-century stepped well adorned with stone arched galleries.",
        "details": [
          "Built in 1595 during Adil Shahi vassal reign by Visvanathayya, featuring stone pavilions, cooling arcades, and Devanagari/Persian inscriptions.",
          "Demonstrates sophisticated medieval hydraulic engineering and stepwell design in North Karnataka."
        ]
      },
      {
        "id": "bagalkote-ilkal-weaving",
        "name": "Ilkal Saree & Heritage Silk Hub",
        "lat": 15.962,
        "lng": 76.115,
        "alt": 45,
        "cat": "civic",
        "query": "Ilkal Saree Weavers Bagalkote",
        "blurb": "Centuries-old textile weaving center famous for distinctive GI-tagged Ilkal sarees.",
        "details": [
          "Renowned since the 8th century for sarees weaving cotton warp with art silk weft and characteristic 'Tope Teni' red palv borders.",
          "Home to thousands of master weaver artisan families carrying forward handloom techniques."
        ]
      },
      {
        "id": "bagalkote-kerur-caves",
        "name": "Kerur Sandstone Rock Formations",
        "lat": 16.021,
        "lng": 75.565,
        "alt": 50,
        "cat": "nature",
        "query": "Kerur Hills Bagalkote",
        "blurb": "Scenic red sandstone hill ranges and historic rocky outcrops near Badami.",
        "details": [
          "Formed of Kaladgi rock group quartzites and sandstones dating back to the Proterozoic period.",
          "Popular stopover along the heritage corridor featuring panoramic plains views and bouldering terrain."
        ]
      }
    ]
  },
  {
    "id": "ballari",
    "name": "Ballari (Bellary)",
    "division": "Kalyana Karnataka",
    "tagline": "Historic granite hill fortress and mineral-rich heartland",
    "bounds": {
      "north": 15.78,
      "south": 14.85,
      "east": 77.3,
      "west": 76.37
    },
    "home": {
      "center": {
        "lat": 15.1485,
        "lng": 76.924,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "ballari-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Ballari Fort (Gudda Kote)",
        "query": "Bellary Fort Ballari Karnataka",
        "lat": 15.1485,
        "lng": 76.924,
        "blurb": "Monolithic granite hill fort with an Upper Fort built by Hanumappa Nayaka and a Lower Fort fortified by Hyder Ali.",
        "details": [
          "Built atop a massive single granite rock towering 460 feet above the surrounding plains.",
          "Divided into the Upper Fort (Bale Kote) with citadels and deep rock-cut cisterns, and the Lower Fort expanded with French engineering assistance.",
          "Provides a 360-degree panoramic view across the Ballari plains."
        ]
      },
      {
        "id": "kumbara-rock",
        "cat": "nature",
        "name": "Kumbara Gudda (Face Rock)",
        "query": "Face Rock Kumbara Gudda Ballari",
        "lat": 15.145,
        "lng": 76.918,
        "blurb": "Striking natural rock formation resembling a human face profile.",
        "details": [
          "Natural granite outcrop that clearly resembles a human face looking toward the sky when viewed from the south.",
          "Surrounded by rugged Deccan boulder terrain and natural hiking paths."
        ]
      },
      {
        "id": "durgamma-ballari",
        "cat": "temple",
        "name": "Ballari Kanaka Durgamma Temple",
        "query": "Kanaka Durgamma Temple Ballari",
        "lat": 15.146,
        "lng": 76.932,
        "blurb": "Highly revered local goddess shrine at the base of the fort rock.",
        "details": [
          "One of the oldest temples in Ballari city, patronized for centuries by local residents and traders.",
          "During the annual Jathra festival, thousands of devotees gather from Karnataka and neighboring Andhra Pradesh."
        ]
      },
      {
        "id": "sandur-kumaraswamy",
        "cat": "heritage",
        "featured": true,
        "name": "Sandur Kumaraswamy Temple",
        "query": "Kumaraswamy Temple Sandur Ballari",
        "lat": 15.0675,
        "lng": 76.549,
        "blurb": "8th-century Rashtrakuta and Badami Chalukyan stone temple complex hidden in the forested Sandur valley.",
        "details": [
          "Houses shrines of Kartikeya (Kumaraswamy) and Parvati with fine stone sculptures dating to 730 CE.",
          "Mahatma Gandhi visited Sandur in 1934 and praised the lush green valley as an 'oasis'."
        ]
      },
      {
        "id": "daroji-bear",
        "cat": "nature",
        "featured": true,
        "name": "Daroji Sloth Bear Sanctuary",
        "query": "Daroji Sloth Bear Sanctuary Ballari",
        "lat": 15.267,
        "lng": 76.541,
        "blurb": "Asia's first sanctuary created exclusively for the protection and conservation of the Indian sloth bear.",
        "details": [
          "Spans 82 square kilometers of rugged boulder-strewn scrub hills.",
          "A watchtower on a hill cliff gives visitors an open view of wild sloth bears foraging for sweet honey and fruits at dusk."
        ]
      },
      {
        "id": "narihalla-reservoir",
        "cat": "nature",
        "name": "Narihalla Reservoir, Sandur",
        "query": "Narihalla Dam Sandur Ballari",
        "lat": 15.105,
        "lng": 76.521,
        "blurb": "Scenic reservoir nestled amidst the red iron-ore mountains of Sandur, surrounded by dense forests.",
        "details": [
          "A popular bird-watching and picnic spot with scenic sunset views over the mountain gorges."
        ]
      },
      {
        "id": "ballari-kurugodu-temple",
        "name": "Kurugodu Doddabasaveshwara Temple",
        "lat": 15.346,
        "lng": 76.837,
        "alt": 45,
        "cat": "temple",
        "query": "Doddabasaveshwara Temple Kurugodu Ballari",
        "blurb": "Ancient temple famous for a colossal monolithic Nandi bull and Vijayanagara shrines.",
        "details": [
          "Features a 12-foot high Nandi monolith carved from a single granite boulder during the Vijayanagara period.",
          "Surrounded by remnants of hilltop fortifications and annual temple car chariot festivities."
        ]
      },
      {
        "id": "ballari-tekkalakote",
        "name": "Tekkalakote Prehistoric Rock Shelters",
        "lat": 15.534,
        "lng": 76.877,
        "alt": 50,
        "cat": "heritage",
        "query": "Tekkalakote Neolithic Site Ballari",
        "blurb": "Major Neolithic and Megalithic archaeological site with granite boulder paintings.",
        "details": [
          "Excavations revealed pottery, gold ornaments, ground stone tools, and petroglyphs dating to 1700-1500 BCE.",
          "Features dramatic granite tors with rock art depicting bulls, antelopes, and dancing warriors."
        ]
      },
      {
        "id": "ballari-sandur-valley",
        "name": "Sandur Valley & Hills Viewpoint",
        "lat": 15.093,
        "lng": 76.549,
        "alt": 60,
        "cat": "nature",
        "query": "Sandur Valley Ballari",
        "blurb": "Lush bowl-shaped valley praised by Mahatma Gandhi for its green microclimate.",
        "details": [
          "Enclosed by two parallel mountain ranges rich in mineral wealth, salubrious weather, and scenic ghat drives.",
          "Historic capital of the Ghorpade Maratha princely dynasty, offering dramatic hill views."
        ]
      },
      {
        "id": "ballari-siruguppa-riverbank",
        "name": "Siruguppa Tungabhadra River Park",
        "lat": 15.632,
        "lng": 76.898,
        "alt": 40,
        "cat": "nature",
        "query": "Siruguppa Tungabhadra River Ballari",
        "blurb": "Broad riverine wetlands and fertile paddy delta on the Tungabhadra.",
        "details": [
          "Known as the 'Paddy Bowl of Ballari' fed by the Tungabhadra canal irrigation network.",
          "Offers expansive riverside vistas and bird-watching during winter migratory flights."
        ]
      },
      {
        "id": "ballari-trinity-church",
        "name": "Holy Trinity Church (Ballari Cantonment)",
        "lat": 15.148,
        "lng": 76.921,
        "alt": 40,
        "cat": "faith",
        "query": "Holy Trinity Church Bellary Cantonment",
        "blurb": "Historic 1840s garrison colonial Gothic cathedral in Ballari cantonment.",
        "details": [
          "Designed by British military engineers in 1843 with a distinctive steeple, stained glass, and antique teakwood pews.",
          "Historic landmark honoring 19th-century Madras Presidency regiments stationed at Bellari."
        ]
      }
    ]
  },
  {
    "id": "belagavi",
    "name": "Belagavi (Belgaum)",
    "division": "Kittur Karnataka",
    "tagline": "Border citadel, roaring waterfalls and historic cradle of freedom fighters",
    "bounds": {
      "north": 16.85,
      "south": 15.3,
      "east": 75.35,
      "west": 74.05
    },
    "home": {
      "center": {
        "lat": 15.859,
        "lng": 74.524,
        "altitude": 0
      },
      "range": 5500,
      "tilt": 58,
      "heading": 10
    },
    "landmarks": [
      {
        "id": "belagavi-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Belagavi Fort & Kamal Basti",
        "query": "Belgaum Fort Belagavi Karnataka",
        "lat": 15.859,
        "lng": 74.524,
        "blurb": "Historic 13th-century stone fort surrounded by a deep moat, housing the exquisite Jain Kamal Basti and ancient mosques.",
        "details": [
          "Originally built in 1204 CE by Jaya Raya of the Ratta dynasty and later strengthened by the Bahmani and Bijapur sultans.",
          "The Kamal Basti (lotus temple) inside features a ceiling carved in the form of an open 72-petal lotus flower.",
          "Mahatma Gandhi was imprisoned inside Belagavi Fort during the freedom struggle."
        ]
      },
      {
        "id": "gokak-falls",
        "cat": "nature",
        "featured": true,
        "name": "Gokak Falls",
        "query": "Gokak Falls Belagavi Karnataka",
        "lat": 16.183,
        "lng": 74.821,
        "blurb": "The 'Niagara of Karnataka' plunging 52 metres over sandstone cliffs on the Ghataprabha River.",
        "details": [
          "The river Ghataprabha leaps 171 feet over a horseshoe-shaped sandstone cliff into a picturesque gorge.",
          "Features a historic hanging suspension bridge built in 1907 spanning 201 metres above the gorge.",
          "Site of one of India's earliest hydroelectric power stations commissioned in the late 19th century."
        ]
      },
      {
        "id": "godchinamalaki-falls",
        "cat": "nature",
        "name": "Godchinamalaki Falls (Markandeya Falls)",
        "query": "Godchinamalaki Falls Gokak Belagavi",
        "lat": 16.128,
        "lng": 74.792,
        "blurb": "Picturesque stepped waterfall on the Markandeya River cascading down rocky tiers in a deep forest gorge.",
        "details": [
          "The river drops 25 metres in a primary tier before splitting into multiple streams and plunging another 20 metres.",
          "Surrounded by green deciduous forest trails and rocky river swimming pools."
        ]
      },
      {
        "id": "suvarna-soudha",
        "cat": "civic",
        "name": "Suvarna Vidhana Soudha",
        "query": "Suvarna Vidhana Soudha Belagavi",
        "lat": 15.867,
        "lng": 74.591,
        "blurb": "Imposing legislative complex representing the unity of North and South Karnataka.",
        "details": [
          "Inaugurated in 2012 to host the winter session of the Karnataka State Legislature.",
          "Modeled on Bengaluru's Vidhana Soudha with traditional Dravidian stone architecture."
        ]
      },
      {
        "id": "kittur-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Kittur Rani Chennamma Fort & Palace",
        "query": "Kittur Fort Belagavi",
        "lat": 15.5975,
        "lng": 74.793,
        "blurb": "Historic stronghold of Rani Chennamma, one of India's earliest female rulers to fight against British rule in 1824.",
        "details": [
          "Rani Chennamma led an armed rebellion against the British East India Company in 1824 defying the Doctrine of Lapse.",
          "The palace ruins include the durbar hall, pole vault rooms and an archaeological museum."
        ]
      },
      {
        "id": "saundatti-yellamma",
        "cat": "temple",
        "name": "Saundatti Yellamma Temple (Renuka Devi)",
        "query": "Yellamma Temple Saundatti Belagavi",
        "lat": 15.7665,
        "lng": 75.1275,
        "blurb": "Major Shakti pilgrimage shrine atop Yellammagudda hill, dedicated to Renuka Devi (Yellamma).",
        "details": [
          "Built in 1514 by Bommappa Nayaka of Raybag in a fusion of Chalukyan and Rashtrakuta styles.",
          "One of the largest pilgrimage centers in North Karnataka, drawing millions during Banada Hunnime."
        ]
      },
      {
        "id": "rajhansgad-fort",
        "cat": "heritage",
        "name": "Rajhansgad Yellur Fort",
        "query": "Rajhansgad Fort Yellur Belagavi",
        "lat": 15.758,
        "lng": 74.502,
        "blurb": "Strategic hilltop fort rising 2,500 feet above sea level with a historic Shiva temple and Shivaji Maharaj statue.",
        "details": [
          "Served as an important observation outpost for the Marathas, Peshwas, and British forces.",
          "Offers sweeping vistas over the lush paddy plains of Belagavi."
        ]
      },
      {
        "id": "belagavi-military-mahadeva",
        "name": "Military Mahadeva Temple",
        "lat": 15.834,
        "lng": 74.521,
        "alt": 45,
        "cat": "temple",
        "query": "Military Mahadeva Temple Belagavi",
        "blurb": "Serene Shiva shrine maintained by the Indian Army in Belagavi cantonment.",
        "details": [
          "Constructed and tended by the Maratha Light Infantry Regimental Centre amidst landscaped manicured gardens.",
          "One of the cleanest and most visited spiritual spots in Belagavi city."
        ]
      },
      {
        "id": "belagavi-kapileshwar",
        "name": "Kapileshwar Temple (Dakshina Kashi)",
        "lat": 15.852,
        "lng": 74.509,
        "alt": 45,
        "cat": "temple",
        "query": "Kapileshwar Temple Belagavi",
        "blurb": "Believed to be one of the oldest Shiva temples in Karnataka.",
        "details": [
          "Regarded as the Dakshina Kashi; tradition holds a Jyotirlinga pilgrimage is completed only after worshipping here.",
          "Features Chalukyan-era stone plinths and a revered pushkarini holy water tank."
        ]
      },
      {
        "id": "belagavi-hidkal-dam",
        "name": "Hidkal Dam & Raja Lakhamagowda Reservoir",
        "lat": 16.155,
        "lng": 74.639,
        "alt": 50,
        "cat": "nature",
        "query": "Hidkal Dam Belagavi",
        "blurb": "Expansive water reservoir on Ghataprabha River against scenic Western Ghats hills.",
        "details": [
          "Constructed across the Ghataprabha River, supplying irrigation to Belagavi and Bagalkote plains.",
          "Popular sunset point featuring migratory waterfowl in winter."
        ]
      },
      {
        "id": "belagavi-halasi-temple",
        "name": "Halasi Bhuvaraha Narasimha Temple",
        "lat": 15.536,
        "lng": 74.597,
        "alt": 45,
        "cat": "heritage",
        "query": "Bhuvaraha Narasimha Temple Halasi Belagavi",
        "blurb": "5th-century Kadamba capital temple with towering pyramidal shikhara.",
        "details": [
          "Halasi was the secondary royal capital of the ancient Kadamba dynasty of Banavasi.",
          "Houses a 5-foot standing idol of Bhuvaraha along with a seated Bhagwan Narasimha."
        ]
      },
      {
        "id": "belagavi-bhimgad-wildlife",
        "name": "Bhimgad Wildlife Sanctuary",
        "lat": 15.545,
        "lng": 74.312,
        "alt": 65,
        "cat": "nature",
        "query": "Bhimgad Wildlife Sanctuary Khanapur Belagavi",
        "blurb": "Dense evergreen tropical reserve home to the rare Wroughton's free-tailed bat.",
        "details": [
          "Protected haven nestled in Khanapur taluk, acting as the catchment origin for the Mahadayi (Mandovi) River.",
          "Home to leopards, sloth bears, tigers, king cobras, and dense rainforest foliage."
        ]
      }
    ]
  },
  {
    "id": "bengaluru-rural",
    "name": "Bengaluru Rural",
    "division": "Bengaluru Division",
    "tagline": "Ancient hilltop shrines, birthplaces of legends, and green outskirts",
    "bounds": {
      "north": 13.72,
      "south": 12.85,
      "east": 77.86,
      "west": 77.04
    },
    "home": {
      "center": {
        "lat": 13.248,
        "lng": 77.7125,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 20
    },
    "landmarks": [
      {
        "id": "devanahalli-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Devanahalli Fort",
        "query": "Devanahalli Fort Bengaluru Rural",
        "lat": 13.248,
        "lng": 77.7125,
        "blurb": "Stone fort originally built by Malla Byre Gowda in 1501, and the birthplace of the ruler Tipu Sultan.",
        "details": [
          "Birthplace of Tipu Sultan in 1751, marked by an enclosed memorial just outside the fort walls.",
          "Features 12 bastions, semicircular stonework, and several living temples inside including the Venugopalaswamy temple."
        ]
      },
      {
        "id": "ghati-subramanya",
        "cat": "temple",
        "featured": true,
        "name": "Ghati Subramanya Temple",
        "query": "Ghati Subramanya Temple Bengaluru Rural",
        "lat": 13.3285,
        "lng": 77.514,
        "blurb": "Ancient pilgrimage temple where Lord Subramanya and Lord Lakshmi Narasimha are worshipped back-to-back on a single idol.",
        "details": [
          "A unique mirror placed behind the sanctum allows devotees to view Lord Narasimha while looking at Lord Subramanya.",
          "Renowned center for Naga aradhana and snake deity worship with thousands of installed serpent stones."
        ]
      },
      {
        "id": "shivagange",
        "cat": "nature",
        "featured": true,
        "name": "Shivagange Betta",
        "query": "Shivagange Hill Temple Karnataka",
        "lat": 13.171,
        "lng": 77.2285,
        "blurb": "Conical hill known as Dakshina Kashi, resembling a Shiva Linga when seen from four directions.",
        "details": [
          "Rises 804 metres with natural spring waters believed to originate from the Ganges.",
          "Houses cave temples of Gavisiddheshwara and Gangadhareshwara alongside scenic climbing trails."
        ]
      },
      {
        "id": "makalidurga",
        "cat": "nature",
        "name": "Makalidurga Hill & Fort",
        "query": "Makalidurga Railway Station Hill Karnataka",
        "lat": 13.435,
        "lng": 77.502,
        "blurb": "Granite hill fort rising 1,117 metres above a winding railway curve, crowned with a Shiva temple.",
        "details": [
          "Famous for night trekking overlooking a panoramic horseshoe-shaped railway track and lake.",
          "Fortified by Vijayanagara chieftain Makali Mallappa."
        ]
      },
      {
        "id": "nijagal-betta",
        "cat": "heritage",
        "name": "Nijagal Betta Fort",
        "query": "Nijagal Betta Dobbaspet Bengaluru Rural",
        "lat": 13.241,
        "lng": 77.195,
        "blurb": "Historical hill fort near Dobbaspet that witnessed battles between the Mysore armies, Marathas, and British troops.",
        "details": [
          "Houses ruins of triple-tiered fortifications, rock-cut ponds, and an ancient Dargah and Shiva shrine sharing the peak.",
          "Offers views stretching to Tumakuru and Devarayanadurga."
        ]
      },
      {
        "id": "blr-rural-doddaballapura-silk",
        "name": "Doddaballapura Handloom Silk Hub",
        "lat": 13.293,
        "lng": 77.538,
        "alt": 40,
        "cat": "civic",
        "query": "Doddaballapura Silk Weaving Karnataka",
        "blurb": "Major historic weaving and apparel cluster famous for Karnataka silk sarees.",
        "details": [
          "Home to tens of thousands of skilled weavers, traditional pit looms, and modern textile powerloom parks.",
          "Supplies bridal silks across South India alongside surrounding mulberry sericulture farms."
        ]
      },
      {
        "id": "blr-rural-nelamangala-ashram",
        "name": "Vishwa Shanti Ashram & Monolith Shrines",
        "lat": 13.0785,
        "lng": 77.4225,
        "alt": 45,
        "cat": "faith",
        "query": "Vishwa Shanti Ashram Nelamangala Bengaluru",
        "blurb": "Peaceful spiritual center featuring giant stone statues of Panduranga and Geeta Mandir.",
        "details": [
          "Founded by Sant Keshavadas in 1980, dedicated to universal meditation, Vedic education, and peace.",
          "Features a 36-foot monolithic idol of Lord Panduranga and a quiet leafy garden campus."
        ]
      },
      {
        "id": "blr-rural-grover-vineyards",
        "name": "Grover Zampa Vineyards (Nandi Foothills)",
        "lat": 13.2998,
        "lng": 77.6745,
        "alt": 45,
        "cat": "city",
        "query": "Grover Zampa Vineyards Bengaluru Rural",
        "blurb": "Pioneer boutique vineyard estate tucked into the sunny slopes of Nandi Valley.",
        "details": [
          "One of India's earliest commercial wineries, cultivating French grape varietals like Cabernet Sauvignon and Shiraz.",
          "Offers guided wine tasting tours, oak barrel cellars, and pastoral countryside views."
        ]
      },
      {
        "id": "blr-rural-dandiganahalli",
        "name": "Dandiganahalli Reservoir & Valley",
        "lat": 13.568,
        "lng": 77.632,
        "alt": 50,
        "cat": "nature",
        "query": "Dandiganahalli Dam Bengaluru",
        "blurb": "Untouched secluded reservoir encircled by rocky granite hills and forests.",
        "details": [
          "Hidden water reservoir off the beaten path, popular for sunrise nature drives and cycling trails.",
          "Provides clear pristine water reflections framed by rural dry-deciduous hills."
        ]
      }
    ]
  },
  {
    "id": "bengaluru-urban",
    "name": "Bengaluru Urban",
    "division": "Bengaluru Division",
    "tagline": "India's Silicon Valley, historic gardens, palaces and grand civic architecture",
    "bounds": {
      "north": 13.2,
      "south": 12.65,
      "east": 77.85,
      "west": 77.35
    },
    "home": {
      "center": {
        "lat": 12.9797,
        "lng": 77.5908,
        "altitude": 0
      },
      "range": 4800,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "vidhana-soudha",
        "cat": "civic",
        "featured": true,
        "name": "Vidhana Soudha & Attara Kacheri",
        "query": "Vidhana Soudha Bengaluru",
        "lat": 12.9797,
        "lng": 77.5908,
        "blurb": "The seat of Karnataka's legislature, described by prime minister Nehru as a 'temple dedicated to the nation'.",
        "details": [
          "Constructed between 1951 and 1956 under Chief Minister Kengal Hanumanthaiah in the Neo-Dravidian style.",
          "Built entirely from Bangalore granite, topped by the four-headed Ashoka Lion emblem.",
          "Facing it is the scarlet Greco-Roman High Court building (Attara Kacheri), built in 1868."
        ]
      },
      {
        "id": "bangalore-palace",
        "cat": "heritage",
        "featured": true,
        "name": "Bangalore Palace",
        "query": "Bangalore Palace Vasanth Nagar Bengaluru",
        "lat": 12.9988,
        "lng": 77.5921,
        "blurb": "Tudor-revival royal palace built by the Wadiyars in 1878, inspired by England's Windsor Castle.",
        "details": [
          "Built with fortified towers, battlements, turreted parapets and stained glass windows.",
          "The interiors house ornate wooden carvings, Victorian furniture and paintings by Raja Ravi Varma."
        ]
      },
      {
        "id": "lalbagh",
        "cat": "nature",
        "featured": true,
        "name": "Lalbagh Botanical Garden & Glass House",
        "query": "Lalbagh Botanical Garden Bengaluru",
        "lat": 12.9507,
        "lng": 77.5848,
        "blurb": "Historical 240-acre botanical garden commissioned by Hyder Ali in 1760, home to rare tropical flora and an iconic Glass House.",
        "details": [
          "Modeled on London's Crystal Palace, the central Glass House hosts the biannual Republic Day and Independence Day flower shows.",
          "Contains Lalbagh Rock, a 3,000-million-year-old Peninsular Gneiss outcrop carrying one of Kempe Gowda's four boundary watchtowers."
        ]
      },
      {
        "id": "cubbon-park",
        "cat": "nature",
        "featured": true,
        "name": "Cubbon Park",
        "query": "Cubbon Park Kasturba Road Bengaluru",
        "lat": 12.9763,
        "lng": 77.5929,
        "blurb": "The green lung of central Bengaluru spanning 300 acres, created in 1870 by Major General Richard Sankey.",
        "details": [
          "Home to over 6,000 trees, bamboo groves, the State Central Library (Seshadri Iyer Memorial) and statues of Queen Victoria and Sir Mark Cubbon.",
          "A pedestrian-only haven on weekends for artists, walkers and families."
        ]
      },
      {
        "id": "iskcon-bangalore",
        "cat": "temple",
        "featured": true,
        "name": "ISKCON Sri Radha Krishna Temple",
        "query": "ISKCON Temple Rajajinagar Bangalore",
        "lat": 13.0098,
        "lng": 77.5511,
        "blurb": "One of the largest ISKCON temple complexes in the world, built on Hare Krishna Hill in Rajajinagar.",
        "details": [
          "Inaugurated in 1997, featuring a blend of glass-and-brass modern architecture with traditional Dravidian gopurams.",
          "Pioneered the Akshaya Patra Foundation mid-day meal scheme, feeding millions of school children daily."
        ]
      },
      {
        "id": "bull-temple",
        "cat": "temple",
        "name": "Bull Temple (Dodda Basavana Gudi), Basavanagudi",
        "query": "Bull Temple Basavanagudi Bengaluru",
        "lat": 12.942,
        "lng": 77.568,
        "blurb": "Historic 16th-century temple housing a colossal monolithic Nandi bull carved out of a single granite boulder.",
        "details": [
          "Built in 1537 by Kempe Gowda I, founder of Bangalore.",
          "The monolithic Nandi measures 15 feet high and 20 feet long; hosts the famous annual Kadalekai Parishe (Groundnut Fair)."
        ]
      },
      {
        "id": "tipu-summer-palace",
        "cat": "heritage",
        "name": "Tipu Sultan's Summer Palace & Bangalore Fort",
        "query": "Tipu Sultan Summer Palace Chamrajpet Bengaluru",
        "lat": 12.9593,
        "lng": 77.5737,
        "blurb": "Two-storied teakwood palace built in 1791 with fluted wooden pillars, cusped arches, and floral wall paintings.",
        "details": [
          "Tipu Sultan referred to it as the 'Abode of Happiness and Envy of Heaven'.",
          "Nearby stands the surviving Delhi Gate of the stone Bangalore Fort rebuilt by Hyder Ali in 1761."
        ]
      },
      {
        "id": "halasuru-someshwara",
        "cat": "temple",
        "name": "Halasuru Someshwara Temple",
        "query": "Halasuru Someshwara Temple Bengaluru",
        "lat": 12.9735,
        "lng": 77.6255,
        "blurb": "One of the oldest temples in Bengaluru, dating from the Chola period and expanded by Kempe Gowda II.",
        "details": [
          "Features magnificent Vijayanagara stone pillars depicting Shiva's wedding and Ravana lifting Mount Kailash."
        ]
      },
      {
        "id": "bannerghatta",
        "cat": "nature",
        "name": "Bannerghatta Biological Park",
        "query": "Bannerghatta Biological Park Bengaluru",
        "lat": 12.8009,
        "lng": 77.5777,
        "blurb": "Extensive wildlife reserve featuring an open-bus safari, butterfly park, and rescue rehabilitation center.",
        "details": [
          "Spans over 100 square kilometers serving as an important elephant corridor connecting the Eastern and Western Ghats.",
          "Houses India's first butterfly conservatory within a circular enclosure."
        ]
      },
      {
        "id": "visvesvaraya-museum",
        "cat": "civic",
        "name": "Visvesvaraya Industrial & Technological Museum",
        "query": "Visvesvaraya Industrial Technological Museum Bengaluru",
        "lat": 12.9755,
        "lng": 77.597,
        "blurb": "Premier science museum established in 1962, featuring interactive galleries on space, engines, and biotechnology.",
        "details": [
          "Contains interactive exhibits including a full-scale replica of the Wright Brothers' Flyer aeroplane and dinosaur animatronics."
        ]
      },
      {
        "id": "sankey-tank",
        "cat": "nature",
        "name": "Sankey Tank",
        "query": "Sankey Tank Sadashivanagar Bengaluru",
        "lat": 13.008,
        "lng": 77.574,
        "blurb": "Picturesque 37-acre artificial lake constructed in 1882 by Col. Richard Sankey to meet the city's water needs.",
        "details": [
          "Surrounded by a scenic walking boulevard, landscaped island bird sanctuary, and boating facilities."
        ]
      },
      {
        "id": "blr-ngma",
        "name": "National Gallery of Modern Art (NGMA)",
        "lat": 12.989,
        "lng": 77.588,
        "alt": 40,
        "cat": "civic",
        "query": "National Gallery of Modern Art Bengaluru",
        "blurb": "Premier modern art museum set in the historic heritage Manikyavelu Mansion.",
        "details": [
          "Displays masterpieces by Raja Ravi Varma, Amrita Sher-Gil, Jamini Roy, and Rabindranath Tagore.",
          "Set amid century-old trees, sculpture courtyards, reflecting pools, and a garden cafe on Palace Road."
        ]
      },
      {
        "id": "blr-hal-museum",
        "name": "HAL Heritage Centre & Aerospace Museum",
        "lat": 12.9555,
        "lng": 77.674,
        "alt": 40,
        "cat": "civic",
        "query": "HAL Heritage Centre and Aerospace Museum Bangalore",
        "blurb": "India's first aerospace museum showcasing indigenous aircraft, jets, and helicopters.",
        "details": [
          "Displays legendary combat planes including Marut, Kiran, Ajeet, Canberra, and Tejas LCA.",
          "Features flight simulators, mock air traffic control towers, and exhibits tracing Indian aviation history."
        ]
      },
      {
        "id": "blr-st-marys-basilica",
        "name": "St. Mary's Basilica, Shivajinagar",
        "lat": 12.984,
        "lng": 77.604,
        "alt": 40,
        "cat": "faith",
        "query": "St. Mary's Basilica Shivajinagar Bengaluru",
        "blurb": "Bangalore's oldest church and minor basilica, built in soaring Gothic style in 1882.",
        "details": [
          "Known for its 160-foot tower, intricate stained glass windows imported from Paris, and Corinthian columns.",
          "Attracts hundreds of thousands during the annual St. Mary's Feast in September."
        ]
      },
      {
        "id": "blr-ulsoor-lake",
        "name": "Ulsoor Lake (Halasuru Kere)",
        "lat": 12.982,
        "lng": 77.623,
        "alt": 35,
        "cat": "nature",
        "query": "Ulsoor Lake Bengaluru",
        "blurb": "Historic 120-acre urban lake dotted with lush islands built by Kempe Gowda II.",
        "details": [
          "Historic heart of eastern Bengaluru offering paved running tracks, recreational boating, and bird watching.",
          "Surrounded by Halasuru military training grounds and ancient Tamil / Chola settlements."
        ]
      },
      {
        "id": "blr-planetarium",
        "name": "Jawaharlal Nehru Planetarium",
        "lat": 12.985,
        "lng": 77.589,
        "alt": 40,
        "cat": "civic",
        "query": "Jawaharlal Nehru Planetarium Bengaluru",
        "blurb": "Iconic full-dome space science centre and Science Park in central Bengaluru.",
        "details": [
          "Features a 15-meter dome running digital 4K astronomical sky shows in Kannada and English.",
          "The outdoor Science Park contains interactive exhibits demonstrating physics and astronomy principles."
        ]
      }
    ]
  },
  {
    "id": "bidar",
    "name": "Bidar",
    "division": "Kalyana Karnataka",
    "tagline": "Crown city of Karnataka, Bahmani capital, and home to Bidriware craftsmanship",
    "bounds": {
      "north": 18.45,
      "south": 17.6,
      "east": 77.75,
      "west": 76.75
    },
    "home": {
      "center": {
        "lat": 17.925,
        "lng": 77.527,
        "altitude": 0
      },
      "range": 4800,
      "tilt": 58,
      "heading": 25
    },
    "landmarks": [
      {
        "id": "bidar-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Bidar Fort & Rangeen Mahal",
        "query": "Bidar Fort Bidar Karnataka",
        "lat": 17.925,
        "lng": 77.527,
        "blurb": "Magnificent 15th-century citadel with triple-layered moats, Persian tile work, and the ornate Rangeen Mahal.",
        "details": [
          "Built by Sultan Ahmad Shah Wali Bahmani in 1427 when he shifted the Bahmani capital from Gulbarga to Bidar.",
          "The Rangeen Mahal inside features colored glazed tiles and exquisite mother-of-pearl inlay work on wood.",
          "Protected by a triple moat cut deep into volcanic laterite rock, considered one of the most formidable defense systems in India."
        ]
      },
      {
        "id": "nanak-jhira",
        "cat": "faith",
        "featured": true,
        "name": "Gurudwara Nanak Jhira Sahib",
        "query": "Gurudwara Nanak Jhira Sahib Bidar",
        "lat": 17.9279,
        "lng": 77.5079,
        "blurb": "Historic Sikh shrine commemorating Guru Nanak's visit in 1512, where a freshwater spring miraculous emerged from laterite rock.",
        "details": [
          "One of the most sacred pilgrimage sites for Sikhs in South India.",
          "Guru Nanak touched the dry laterite hillside with his wooden sandaled foot, causing a perennial sweet-water spring to gush forth to relieve a severe drought."
        ]
      },
      {
        "id": "mahmud-gawan",
        "cat": "heritage",
        "featured": true,
        "name": "Mahmud Gawan Madrasa",
        "query": "Mahmud Gawan Madrasa Bidar",
        "lat": 17.913,
        "lng": 77.53,
        "blurb": "Monumental 1472 CE Islamic university featuring Persian architectural styling with towering minarets and blue glazed tiles.",
        "details": [
          "Founded by Mahmud Gawan, prime minister to the Bahmani sultanate and a celebrated scholar from Gilan, Iran.",
          "Once housed a famous library of over 3,000 manuscripts and students from across the Islamic world."
        ]
      },
      {
        "id": "bahmani-tombs",
        "cat": "heritage",
        "name": "Bahmani Tombs (Ashtur)",
        "query": "Bahmani Tombs Ashtur Bidar",
        "lat": 17.93,
        "lng": 77.56,
        "blurb": "Row of twelve colossal domed mausoleums of the Bahmani rulers set in an orchard landscape.",
        "details": [
          "The tomb of Ahmad Shah al-Wali features gold-leaf Quranic calligraphy painted against jewel-toned backgrounds.",
          "Reflects the architectural transition from early Tughlaq style to classic Deccan sultanate domes."
        ]
      },
      {
        "id": "narasimha-jhira",
        "cat": "temple",
        "name": "Narasimha Jhira Cave Temple",
        "query": "Narasimha Jhira Cave Temple Bidar",
        "lat": 17.9315,
        "lng": 77.536,
        "blurb": "Cave temple where devotees wade through waist-deep spring water for 300 feet to reach the sanctum of Lord Narasimha.",
        "details": [
          "Natural subterranean spring keeps water flowing continuously through the tunnel cave at constant chest height."
        ]
      },
      {
        "id": "barid-shahi-tombs",
        "cat": "heritage",
        "name": "Barid Shahi Tombs",
        "query": "Barid Shahi Park Bidar",
        "lat": 17.918,
        "lng": 77.511,
        "blurb": "Elegantly landscaped garden tombs of the Barid Shahi dynasty sultans who ruled Bidar in the 16th century.",
        "details": [
          "Set within a vast archaeological garden featuring stone domes with open arched loggias."
        ]
      },
      {
        "id": "bidar-chaubara",
        "name": "Chaubara Clock Tower",
        "lat": 17.913,
        "lng": 77.525,
        "alt": 45,
        "cat": "heritage",
        "query": "Chaubara Clock Tower Bidar",
        "blurb": "71-foot cylindrical medieval watchtower at the historic intersection of Bidar.",
        "details": [
          "Constructed in the Bahmani Sultanate period to serve as a command watch post over the four city quadrants.",
          "Offers a sweeping view of Bidar's old walled city and bastions."
        ]
      },
      {
        "id": "bidar-papnash-temple",
        "name": "Papnash Shiva Temple & Natural Spring",
        "lat": 17.899,
        "lng": 77.545,
        "alt": 45,
        "cat": "temple",
        "query": "Papnash Shiva Temple Bidar",
        "blurb": "Sacred valley temple where Lord Rama is said to have worshipped to absolve sins.",
        "details": [
          "Tucked into a scenic green valley with a perennial natural freshwater spring feeding the Papnash Talav.",
          "Attracts thousands of pilgrims during Maha Shivaratri from Karnataka, Telangana, and Maharashtra."
        ]
      },
      {
        "id": "bidar-maniknagar",
        "name": "Manik Prabhu Samsthan, Maniknagar",
        "lat": 17.756,
        "lng": 77.161,
        "alt": 45,
        "cat": "faith",
        "query": "Manik Prabhu Temple Maniknagar Humnabad Bidar",
        "blurb": "Unique Sakalamata Sampradaya spiritual center founded by saint Sri Manik Prabhu.",
        "details": [
          "Known for its inclusive philosophy revering Hindu, Muslim, and Sikh spiritual traditions alike.",
          "Features a stunning white marble sanctum, library, and sprawling ashram in Humnabad taluk."
        ]
      },
      {
        "id": "bidar-chidri-lake",
        "name": "Chidri Lake & Birding Wetlands",
        "lat": 17.935,
        "lng": 77.562,
        "alt": 40,
        "cat": "nature",
        "query": "Chidri Lake Bidar",
        "blurb": "Scenic freshwater lake on the outskirts of Bidar welcoming migratory winter birds.",
        "details": [
          "Quiet picnic and sunset spot overlooking rocky Deccan plains and scrub forests.",
          "Frequented by painted storks, spot-billed pelicans, and egrets during the winter season."
        ]
      }
    ]
  },
  {
    "id": "chamarajanagar",
    "name": "Chamarajanagar",
    "division": "Mysuru Division",
    "tagline": "Sanctuary of tigers, mist-covered mountain peaks, and sacred border hills",
    "bounds": {
      "north": 12.45,
      "south": 11.52,
      "east": 77.71,
      "west": 76.45
    },
    "home": {
      "center": {
        "lat": 11.926,
        "lng": 76.942,
        "altitude": 0
      },
      "range": 6000,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "himavad-gopalaswamy",
        "cat": "nature",
        "featured": true,
        "name": "Himavad Gopalaswamy Betta",
        "query": "Himavad Gopalaswamy Betta Chamarajanagar",
        "lat": 11.723,
        "lng": 76.6025,
        "blurb": "Highest peak in Bandipur National Park (1,450 m), shrouded in mist year-round and crowned by a 14th-century Krishna temple.",
        "details": [
          "Built by King Chola Ballala in 1315 CE; 'Himavad' refers to the persistent cloud mist enveloping the sanctum.",
          "Surrounded by grassy shola hills frequently visited by herds of wild Asian elephants."
        ]
      },
      {
        "id": "bandipur",
        "cat": "nature",
        "featured": true,
        "name": "Bandipur National Park & Tiger Reserve",
        "query": "Bandipur National Park Karnataka",
        "lat": 11.666,
        "lng": 76.633,
        "blurb": "Premier tiger reserve forming part of the UNESCO Nilgiri Biosphere Reserve, rich in tigers, leopards, and elephants.",
        "details": [
          "Originally established in 1931 by the Maharaja of Mysore as the Venugopala Wildlife Park, brought under Project Tiger in 1973.",
          "Contiguous with Nagarhole, Wayanad and Mudumalai, creating one of the largest protected habitats for wild elephants and tigers in Asia."
        ]
      },
      {
        "id": "br-hills",
        "cat": "nature",
        "featured": true,
        "name": "Biligirirangana Hills (BR Hills) & Temple",
        "query": "Biligiriranganatha Swamy Temple BR Hills",
        "lat": 11.993,
        "lng": 77.14,
        "blurb": "Ecological bridge between the Western and Eastern Ghats, revered for the clifftop temple of Lord Ranganatha.",
        "details": [
          "The clifftop temple stands atop a precipitous white cliff (Biligiri in Kannada).",
          "Traditional homeland of the indigenous Soliga tribal community, known for sustainable forest honey harvesting."
        ]
      },
      {
        "id": "mm-hills",
        "cat": "temple",
        "featured": true,
        "name": "Male Mahadeshwara Hills (MM Hills)",
        "query": "Male Mahadeshwara Hills Temple Chamarajanagar",
        "lat": 12.04,
        "lng": 77.56,
        "blurb": "Famous hilltop Shaivite pilgrimage shrine surrounded by dense forests.",
        "details": [
          "Dedicated to the saint Mahadeshwara, believed by devotees to be an incarnation of Lord Shiva who performed miracles in the 15th century.",
          "Attracts over a million pilgrims every year during Diwali and Shivaratri."
        ]
      },
      {
        "id": "chamarajeshwara",
        "cat": "temple",
        "name": "Chamarajeshwara Temple",
        "query": "Chamarajeshwara Temple Chamarajanagar",
        "lat": 11.9265,
        "lng": 76.9425,
        "blurb": "Grand temple built in 1826 by Mummadi Krishnaraja Wadiyar in memory of his father Chamaraja Wadiyar IX.",
        "details": [
          "Features a massive 70-foot multi-tiered gopuram and a celebrated Ratha Jathra chariot festival with an aashadha car procession."
        ]
      },
      {
        "id": "bharachukki-falls",
        "cat": "nature",
        "name": "Bharachukki Falls (Kollegal)",
        "query": "Bharachukki Falls Kollegal Chamarajanagar",
        "lat": 12.3015,
        "lng": 77.185,
        "blurb": "Graceful wide curtain cascade of the Kaveri River plunging into a deep rocky gorge.",
        "details": [
          "Part of the twin Shivanasamudra river splits, known for coracle boat rides right up to the roaring mist pool."
        ]
      },
      {
        "id": "chamarajanagar-gundlupet-sunflowers",
        "name": "Gundlupet Sunflower & Marigold Fields",
        "lat": 11.802,
        "lng": 76.689,
        "alt": 45,
        "cat": "nature",
        "query": "Gundlupet Sunflower Fields Chamarajanagar",
        "blurb": "Spectacular golden sunflower and flower bloom corridor on the Ooty-Wayanad highway.",
        "details": [
          "During July to September, thousands of acres around Gundlupet burst into radiant yellow and orange blooms.",
          "Photographers and road travelers pause here against the backdrop of the Nilgiri foothill ranges."
        ]
      },
      {
        "id": "chamarajanagar-dhondenling-monastery",
        "name": "Dzogchen Monastery (Dhondenling Tibetan Settlement)",
        "lat": 11.8619,
        "lng": 77.2599,
        "alt": 55,
        "cat": "faith",
        "query": "Dzogchen Monastery Dhondenling Tibetan Settlement Kollegal",
        "blurb": "Majestic Tibetan Buddhist monastery and settlement nestled in the Biligirirangana hills.",
        "details": [
          "Established in 1974, home to five Tibetan villages, prayer wheel stupas, and peaceful mountain air.",
          "The grand monastery assembly hall features ornate Tibetan murals, golden statues, and traditional chanting."
        ]
      },
      {
        "id": "chamarajanagar-suvarnavathi-dam",
        "name": "Suvarnavathi Dam & Reservoir",
        "lat": 11.8225,
        "lng": 77.03,
        "alt": 45,
        "cat": "nature",
        "query": "Suvarnavathi Dam Chamarajanagar",
        "blurb": "Tranquil irrigation dam framed by forested hills near Punajanur ghats.",
        "details": [
          "Built across the Suvarnavathi River near the Tamil Nadu border, supporting wildlife and local farms.",
          "Scenic spot for bird watchers looking for wetland species and raptors."
        ]
      },
      {
        "id": "chamarajanagar-k-gudi-camp",
        "name": "K. Gudi Wilderness Camp (BR Hills)",
        "lat": 11.916,
        "lng": 77.142,
        "alt": 60,
        "cat": "nature",
        "query": "Kyathadevara Gudi Wilderness Camp BR Hills",
        "blurb": "Jungle safari camp in the heart of Biligiriranganatha Swamy Temple Tiger Reserve.",
        "details": [
          "Crucial wildlife corridor connecting the Western and Eastern Ghats biological systems.",
          "Offers open-top jeep safaris to spot wild elephants, gaur (Indian bison), leopards, and over 250 bird species."
        ]
      }
    ]
  },
  {
    "id": "chikkaballapura",
    "name": "Chikkaballapura",
    "division": "Bengaluru Division",
    "tagline": "Nandi Hills sunrise, thousand-year-old temples, and the land of Sir M.V.",
    "bounds": {
      "north": 13.94,
      "south": 13.15,
      "east": 78.27,
      "west": 77.44
    },
    "home": {
      "center": {
        "lat": 13.3702,
        "lng": 77.6835,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 20
    },
    "landmarks": [
      {
        "id": "nandi-hills",
        "cat": "nature",
        "featured": true,
        "name": "Nandi Hills (Nandidurga)",
        "query": "Nandi Hills Chikkaballapura",
        "lat": 13.3702,
        "lng": 77.6835,
        "blurb": "Iconic hill fortress 1,478 m above sea level, famous for mesmerizing sea-of-clouds sunrises and Tipu's Drop.",
        "details": [
          "Served as a summer retreat for Tipu Sultan, who fortified the hilltop with stone walls and bastions.",
          "Famous for 'Tipu's Drop', a 600-foot vertical cliff from which condemned prisoners were said to be pushed.",
          "The source of several rivers including the Arkavathi, Palar and Ponnaiyar."
        ]
      },
      {
        "id": "bhoga-nandeeshwara",
        "cat": "temple",
        "featured": true,
        "name": "Bhoga Nandeeshwara Temple, Nandi Village",
        "query": "Bhoga Nandeeshwara Temple Nandi Chikkaballapura",
        "lat": 13.388,
        "lng": 77.697,
        "blurb": "Magnificent 9th-century temple complex at the foot of Nandi Hills, built by the Nolambas, Rashtrakutas, and Hoysalas.",
        "details": [
          "One of the oldest surviving temple complexes in Karnataka, dating back to 806 CE.",
          "Features three distinct sanctums: Arunachaleshwara (childhood), Bhoga Nandeeshwara (youth), and Yoga Nandeeshwara (renunciation) on the hill summit.",
          "Houses a spectacular stepped temple tank (kalyani) called Shringi Theertha."
        ]
      },
      {
        "id": "skandagiri",
        "cat": "nature",
        "name": "Skandagiri (Kalavara Durga)",
        "query": "Skandagiri Hills Chikkaballapura",
        "lat": 13.418,
        "lng": 77.683,
        "blurb": "Historic hill fortress famed for night trekking above the clouds.",
        "details": [
          "Stands at 1,450 metres and features ruins of an 18th-century fort used by Tipu Sultan against British forces.",
          "A favorite destination for sunrise hikes overlooking an ocean of morning fog."
        ]
      },
      {
        "id": "muddenahalli",
        "cat": "civic",
        "name": "Sir M. Visvesvaraya Memorial, Muddenahalli",
        "query": "Sir M Visvesvaraya Memorial Muddenahalli",
        "lat": 13.398,
        "lng": 77.728,
        "blurb": "Birthplace and memorial museum of Bharat Ratna Sir M. Visvesvaraya, India's foremost statesman-engineer.",
        "details": [
          "Preserves the ancestral home, personal library, awards, and drafting tools of the visionary engineer who built the KRS Dam.",
          "His birthday, September 15, is celebrated across India as Engineers' Day."
        ]
      },
      {
        "id": "avalabetta",
        "cat": "nature",
        "name": "Avalabetta Hilltop Viewpoint",
        "query": "Avalabetta Hilltop Viewpoint Chikkaballapura",
        "lat": 13.585,
        "lng": 77.778,
        "blurb": "Scenic rocky hill famous for its protruding 'beak rock' hanging ledge overlooking green forest valleys.",
        "details": [
          "Often referred to as the quieter alternative to Nandi Hills, with a hilltop Lakshmi Narasimha temple and panoramic vistas."
        ]
      },
      {
        "id": "rangasthala",
        "cat": "temple",
        "name": "Rangasthala Sri Ranganatha Temple",
        "query": "Rangasthala Ranganatha Swamy Temple Chikkaballapura",
        "lat": 13.468,
        "lng": 77.765,
        "blurb": "Vijayanagara temple built in Hoysala style, housing a 4.5-foot idol of Lord Ranganatha reclining on Adisesha.",
        "details": [
          "Constructed inside a dark sanctum designed so that sunlight illuminates the deity's feet once a year on Makara Sankranti."
        ]
      },
      {
        "id": "chikkaballapura-gummanayaka-fort",
        "name": "Gummanayaka Fort",
        "lat": 13.7885,
        "lng": 77.9477,
        "alt": 60,
        "cat": "heritage",
        "query": "Gummanayaka Fort Bagepalli Chikkaballapura",
        "blurb": "Dramatic 14th-century hill fortress of the Palegar chieftains near Bagepalli.",
        "details": [
          "Constructed by chieftain Gummanayaka amidst massive boulders, featuring watch bastions and stone granaries.",
          "Offers rugged trekking terrain and 360-degree views of the arid Karnataka-Andhra border ranges."
        ]
      },
      {
        "id": "chikkaballapura-vidurashwatha",
        "name": "Vidurashwatha (Jallianwala Bagh of Karnataka)",
        "lat": 13.754,
        "lng": 77.595,
        "alt": 45,
        "cat": "heritage",
        "query": "Vidurashwatha Memorial Chikkaballapura",
        "blurb": "Historic freedom struggle martyrdom site and ancient sacred Ashwatha tree shrine.",
        "details": [
          "On April 25, 1938, British police fired upon unarmed freedom fighters, martyring 32 Satyagrahis.",
          "Also famous for an ancient peepal tree traditionally believed to have been planted by Vidura of Mahabharata fame."
        ]
      },
      {
        "id": "chikkaballapura-srinivasa-sagara",
        "name": "Srinivasa Sagara Dam & Waterfall View",
        "lat": 13.4395,
        "lng": 77.6255,
        "alt": 45,
        "cat": "nature",
        "query": "Srinivasa Sagara Dam Chikkaballapura",
        "blurb": "Picturesque masonry check-dam lake created during the reign of Mysore Maharajas.",
        "details": [
          "During monsoon overflows, water sheets gracefully over stepped stone weirs, creating a popular mini-cascade.",
          "Framed by the rugged granite monoliths of the Nandi and Skandagiri hills range."
        ]
      },
      {
        "id": "chikkaballapura-murugamalla",
        "name": "Murugamalla Dargah (Hazrat Fakruddin Shah)",
        "lat": 13.4387,
        "lng": 78.127,
        "alt": 45,
        "cat": "faith",
        "query": "Murugamalla Dargah Chintamani Chikkaballapura",
        "blurb": "Revered Sufi shrine drawing devotees from across religious backgrounds.",
        "details": [
          "Located in Chintamani taluk, the centuries-old Dargah complex is famed for communal harmony and healings.",
          "Celebrates a large annual Urs with traditional Qawwali and community feast (langar)."
        ]
      }
    ]
  },
  {
    "id": "chikkamagaluru",
    "name": "Chikkamagaluru",
    "division": "Malenadu & Hills",
    "tagline": "The coffee cradle of India, highest peaks of Karnataka, and emerald rainforests",
    "bounds": {
      "north": 13.89,
      "south": 12.95,
      "east": 76.35,
      "west": 75.11
    },
    "home": {
      "center": {
        "lat": 13.391,
        "lng": 75.721,
        "altitude": 0
      },
      "range": 5500,
      "tilt": 62,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "mullayanagiri",
        "cat": "nature",
        "featured": true,
        "name": "Mullayanagiri Peak",
        "query": "Mullayanagiri Peak Chikkamagaluru",
        "lat": 13.391,
        "lng": 75.721,
        "blurb": "Highest peak in Karnataka at 1,930 metres (6,330 ft), offering dramatic vistas of the Western Ghats.",
        "details": [
          "Named after the sage Mullappa Swamy who meditated in a cave temple at the summit.",
          "Part of the Chandra Drona hill range; cool winds and mist sweep over its grassland ridges throughout the year.",
          "Trekking trail connects Mullayanagiri to neighboring Baba Budangiri."
        ]
      },
      {
        "id": "baba-budangiri",
        "cat": "nature",
        "featured": true,
        "name": "Baba Budangiri (Chandra Drona Parvatha)",
        "query": "Baba Budangiri Chikkamagaluru",
        "lat": 13.4215,
        "lng": 75.767,
        "blurb": "Sacred mountain where Sufi saint Baba Budan first planted coffee in India in the 17th century.",
        "details": [
          "Baba Budan brought seven raw coffee beans hidden in his belt from Yemen in 1670, beginning coffee cultivation in India.",
          "The cave shrine is venerated by both Hindus (as Dattatreya Peeta) and Muslims (as Baba Budan Dargah) as a symbol of syncretic devotion."
        ]
      },
      {
        "id": "hebbe-falls",
        "cat": "nature",
        "featured": true,
        "name": "Hebbe Falls",
        "query": "Hebbe Falls Kemmangundi Chikkamagaluru",
        "lat": 13.535,
        "lng": 75.7215,
        "blurb": "Majestic twin waterfalls inside coffee estates plunging 168 metres in two stages.",
        "details": [
          "Cascades into Dodda Hebbe (Big Falls) and Chikka Hebbe (Small Falls).",
          "The natural pool is infused with medicinal mountain herbs from surrounding forest streams."
        ]
      },
      {
        "id": "kudremukh",
        "cat": "nature",
        "featured": true,
        "name": "Kudremukh Peak & National Park",
        "query": "Kudremukh National Park Chikkamagaluru",
        "lat": 13.218,
        "lng": 75.257,
        "blurb": "Distinctive horse-face shaped mountain peak nestled inside a pristine tropical evergreen rainforest reserve.",
        "details": [
          "At 1,894 metres, Kudremukh ('horse's face' in Kannada) is Karnataka's second-highest peak.",
          "A biodiversity hotspot home to lion-tailed macaques, Malabar giant squirrels, and endangered flora."
        ]
      },
      {
        "id": "hirekolale-lake",
        "cat": "nature",
        "name": "Hirekolale Lake",
        "query": "Hirekolale Lake Chikkamagaluru",
        "lat": 13.344,
        "lng": 75.719,
        "blurb": "Scenic man-made lake framed by the Western Ghats ridges, celebrated for serene sunset reflections.",
        "details": [
          "Built as an irrigation source for surrounding coffee towns, it has become one of Chikkamagaluru's top evening viewpoints."
        ]
      },
      {
        "id": "sringeri-sharada",
        "cat": "temple",
        "featured": true,
        "name": "Sringeri Sharada Peetham & Vidyashankara Temple",
        "query": "Sringeri Sharada Peetham Chikkamagaluru",
        "lat": 13.419,
        "lng": 75.257,
        "blurb": "First of the four cardinal Advaita mathas established by Adi Shankaracharya in the 8th century along the Tunga River.",
        "details": [
          "The Vidyashankara temple is an architectural marvel with 12 zodiac pillars (rashi stambhas) where morning sunbeams strike the pillar corresponding to the current astrological month.",
          "Devotees feed large sacred fish that gather fearlessly along the stone steps of the Tunga River bank."
        ]
      },
      {
        "id": "horanadu-temple",
        "cat": "temple",
        "featured": true,
        "name": "Horanadu Sri Annapoorneshwari Temple",
        "query": "Horanadu Annapoorneshwari Temple Chikkamagaluru",
        "lat": 13.275,
        "lng": 75.341,
        "blurb": "Ancient temple dedicated to the goddess of food and nourishment, nestled deep in the Western Ghats valleys.",
        "details": [
          "Consecrated by sage Agastya; the main golden idol of Goddess Annapoorneshwari holds the Shanku, Chakra, and Gayatri.",
          "Every single visitor to Horanadu is provided with a free three-course hot meal (maha prasada) irrespective of background."
        ]
      },
      {
        "id": "kalasa-temple",
        "cat": "temple",
        "name": "Kalasa Sri Kalaseshwara Temple",
        "query": "Kalaseshwara Temple Kalasa Chikkamagaluru",
        "lat": 13.235,
        "lng": 75.365,
        "blurb": "Sacred town known as Dakshina Kashi on the Bhadra River, associated with the wedding of Shiva and Parvati.",
        "details": [
          "Surrounded by the Pancha Theerthas (five sacred bathing ponds) fed by mountain streams."
        ]
      },
      {
        "id": "belavadi",
        "cat": "heritage",
        "name": "Veera Narayana Temple, Belavadi",
        "query": "Veeranarayana Temple Belavadi Karnataka",
        "lat": 13.284,
        "lng": 75.999,
        "blurb": "Trikuta (three-shrined) 13th-century Hoysala temple with 108 intricately lathed soapstone pillars.",
        "details": [
          "Built by the Hoysala king Veera Ballala II in 1200 CE, featuring shrines for Narayana, Venugopala, and Yoganarasimha.",
          "The Venugopala idol is considered one of the finest stone masterworks in Indian art."
        ]
      },
      {
        "id": "kemmangundi",
        "cat": "nature",
        "name": "Kemmangundi Hill Station & Z Point",
        "query": "Kemmangundi Hill Station Chikkamagaluru",
        "lat": 13.548,
        "lng": 75.755,
        "blurb": "Royal summer retreat of Krishnaraja Wadiyar IV (Sri Krishnarajendra Hill Station) at 1,434 m.",
        "details": [
          "Features landscaped ornamental rose gardens, mountain viewpoints, and the precipitous Z Point ridge."
        ]
      },
      {
        "id": "chikkamagaluru-jhari-falls",
        "name": "Jhari Falls (Buttermilk Falls)",
        "lat": 13.412,
        "lng": 75.748,
        "alt": 55,
        "cat": "nature",
        "query": "Jhari Falls Baba Budangiri Chikkamagaluru",
        "blurb": "Cascading mountain waterfall flowing through dense private coffee estates.",
        "details": [
          "Accessible via off-road jeep trails down deep valleys beneath Baba Budangiri.",
          "Water descends like frothy white buttermilk into a shallow rock pool surrounded by lush shola ferns."
        ]
      },
      {
        "id": "chikkamagaluru-bhadra-sanctuary",
        "name": "Bhadra Wildlife Sanctuary & Muthodi Camp",
        "lat": 13.682,
        "lng": 75.642,
        "alt": 55,
        "cat": "nature",
        "query": "Bhadra Wildlife Sanctuary Muthodi Chikkamagaluru",
        "blurb": "Protected Project Tiger reserve encompassing pristine moist deciduous forest.",
        "details": [
          "Surrounded by the Mullayanagiri and Hebbe hill ranges, acting as a crucial reservoir for the Bhadra River.",
          "Home to elephants, tigers, black panthers, Malabar giant squirrels, and Great Indian hornbills."
        ]
      },
      {
        "id": "chikkamagaluru-amruteshwara",
        "name": "Amruteshwara Temple, Amruthapura",
        "lat": 13.7411,
        "lng": 75.8539,
        "alt": 45,
        "cat": "heritage",
        "query": "Amruteshwara Temple Amruthapura Tarikere Chikkamagaluru",
        "blurb": "1196 CE Hoysala temple renowned for detailed Ramayana & Mahabharata narrative relief panels.",
        "details": [
          "Commissioned by Hoysala general Amrutheshwara Dandanayaka during the reign of King Veera Ballala II.",
          "Features an open mantapa with intricately carved soapstone ceilings and miniature shrine wall friezes."
        ]
      },
      {
        "id": "chikkamagaluru-manikyadhara",
        "name": "Manikyadhara Falls",
        "lat": 13.441,
        "lng": 75.779,
        "alt": 60,
        "cat": "nature",
        "query": "Manikyadhara Falls Baba Budan Giri Chikkamagaluru",
        "blurb": "Sacred perennial waterfall revered by Hindu and Sufi pilgrims atop the Bababudan range.",
        "details": [
          "Water cascades in droplets like 'strings of pearls' (manikya) down a sheer red-rock face.",
          "Never dries up even during summer peaks, believed by locals to possess herbal therapeutic qualities."
        ]
      }
    ]
  },
  {
    "id": "chitradurga",
    "name": "Chitradurga",
    "division": "Southern Karnataka",
    "tagline": "Impregnable fortress of seven circular walls, heroic lore, and massive dams",
    "bounds": {
      "north": 14.96,
      "south": 13.7,
      "east": 77.05,
      "west": 75.95
    },
    "home": {
      "center": {
        "lat": 14.218,
        "lng": 76.398,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "chitradurga-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Chitradurga Fort (Elusuttina Kote)",
        "query": "Chitradurga Fort Chitradurga Karnataka",
        "lat": 14.218,
        "lng": 76.398,
        "blurb": "Legendary 'Fort of Seven Rounds' with 19 gateways, 38 postern exits, and rain-harvesting interconnected reservoirs.",
        "details": [
          "Expanded between the 10th and 18th centuries by the Rashtrakutas, Chalukyas, Hoysalas, and the Nayakas of Chitradurga.",
          "Famous for Onake Obavva, the brave woman who defended the fort against Hyder Ali's troops using an onake (pestle) at a secret crevice.",
          "Features ancient granaries, oil pits, gun-powder mills and the Hidimbeshwara temple."
        ]
      },
      {
        "id": "obavva-kindi",
        "cat": "heritage",
        "featured": true,
        "name": "Onake Obavva Kindi (Heroic Crevice)",
        "query": "Onake Obavva Kindi Chitradurga Fort",
        "lat": 14.2195,
        "lng": 76.3995,
        "blurb": "The historic narrow rock opening where heroine Onake Obavva single-handedly dispatched enemy soldiers with a wooden pestle.",
        "details": [
          "In 1779, during the siege by Hyder Ali, Obavva guarded this secret water inlet while her husband was away, striking down invading soldiers one by one.",
          "Stands as an immortal symbol of female courage in Karnataka folklore."
        ]
      },
      {
        "id": "chandravalli",
        "cat": "heritage",
        "name": "Chandravalli Caves & Lake",
        "query": "Chandravalli Caves Chitradurga",
        "lat": 14.205,
        "lng": 76.388,
        "blurb": "Underground semi-subterranean hermitage caves dating to the Satavahana and Kadamba dynasties.",
        "details": [
          "The Ankali Matha caves descend 80 feet underground with meditation rooms, secret passages and Shiva lingas.",
          "Archaeological digs here unearthed coins of the Roman emperor Augustus Caesar."
        ]
      },
      {
        "id": "vani-vilasa",
        "cat": "nature",
        "featured": true,
        "name": "Vani Vilasa Sagara Dam (Mari Kanive)",
        "query": "Vani Vilasa Sagara Dam Chitradurga",
        "lat": 13.988,
        "lng": 76.485,
        "blurb": "Karnataka's oldest masonry dam, built across the Vedavathi River by the Mysore Maharajas in 1907.",
        "details": [
          "Commissioned by Regent Maharani Kempananjammanni Vani Vilasa Sannidhana, who pawned her royal jewelry to complete it.",
          "A landmark of pre-independence Indian civil engineering, predating the KRS Dam."
        ]
      },
      {
        "id": "jogimatti",
        "cat": "nature",
        "name": "Jogimatti Hill Station & Forest Reserve",
        "query": "Jogimatti Hill Station Chitradurga",
        "lat": 14.162,
        "lng": 76.398,
        "blurb": "Cool hilltop reserve (3,800 ft) named after a meditating yogi, rich in leopards, peacocks, and waterfalls.",
        "details": [
          "Features the Himavatkedra waterfall that drops into natural rock cisterns, surrounded by dense dry deciduous forest."
        ]
      },
      {
        "id": "chitradurga-nayakanahatti",
        "name": "Nayakanahatti Sri Guru Thipperudra Swamy Temple",
        "lat": 14.475,
        "lng": 76.541,
        "alt": 45,
        "cat": "faith",
        "query": "Nayakanahatti Thipperudraswamy Temple Chitradurga",
        "blurb": "Renowned 16th-century Veerashaiva saint shrine and massive annual wooden car festival.",
        "details": [
          "Dedicated to saint Thipperudraswamy who promoted water conservation and built 77 irrigation tanks in arid plains.",
          "Attracts over half a million devotees during the Phalgun month chariot festival."
        ]
      },
      {
        "id": "chitradurga-holalkere-ganapathi",
        "name": "Holalkere Maha Ganapathi Temple",
        "lat": 14.032,
        "lng": 76.186,
        "alt": 45,
        "cat": "temple",
        "query": "Holalkere Ganapathi Temple Chitradurga",
        "blurb": "Houses a monumental 9-foot single-granite monolithic idol of Lord Ganesha.",
        "details": [
          "Installed in 1475 CE by chieftain Guleya Nayaka, showcasing Vijayanagara-style bold sculptural proportions.",
          "Revered local pilgrim centre located at the base of the Holalkere range."
        ]
      },
      {
        "id": "chitradurga-gayatri-reservoir",
        "name": "Gayatri Reservoir, Hiriyur",
        "lat": 13.788,
        "lng": 76.708,
        "alt": 45,
        "cat": "nature",
        "query": "Gayatri Reservoir Hiriyur Chitradurga",
        "blurb": "Scenic water reservoir constructed across the Suvarnamukhi river.",
        "details": [
          "Commissioned in 1963 to bring canal life to the semi-arid farming belt of Hiriyur.",
          "Serene birdwatching destination surrounded by thorny scrub ridges and expansive horizons."
        ]
      },
      {
        "id": "chitradurga-brahmagiri-edict",
        "name": "Brahmagiri Ashokan Minor Rock Edict",
        "lat": 14.815,
        "lng": 76.815,
        "alt": 50,
        "cat": "heritage",
        "query": "Brahmagiri Ashokan Rock Edict Chitradurga",
        "blurb": "Ancient 3rd-century BCE Mauryan rock inscription written in Brahmi script.",
        "details": [
          "Discovered by Benjamin Rice in 1891, confirming the southern extent of Emperor Ashoka's empire.",
          "Contains the royal scribe Chapada's signature in Kharoshthi script at the bottom."
        ]
      }
    ]
  },
  {
    "id": "dakshina-kannada",
    "name": "Dakshina Kannada (Mangaluru)",
    "division": "Coastal Karnataka",
    "tagline": "Coastal port city, sacred pilgrim temples, white sand beaches and coastal culture",
    "bounds": {
      "north": 13.22,
      "south": 12.51,
      "east": 75.77,
      "west": 74.64
    },
    "home": {
      "center": {
        "lat": 12.879,
        "lng": 74.834,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "kudroli-temple",
        "cat": "temple",
        "featured": true,
        "name": "Kudroli Sri Gokarnanatheshwara Temple",
        "query": "Kudroli Gokarnanatheshwara Temple Mangaluru",
        "lat": 12.879,
        "lng": 74.834,
        "blurb": "Grand temple consecrated in 1912 by social reformer Narayana Guru, world-famous for Mangaluru Dasara celebrations.",
        "details": [
          "Consecrated in 1912 to assert equality for all communities who were previously barred from entering traditional temples.",
          "Renovated in Chola style with marble flooring and electric illumination; the grand finale of Mangaluru Dasara draws over a million spectators."
        ]
      },
      {
        "id": "kadri-manjunatha",
        "cat": "temple",
        "featured": true,
        "name": "Kadri Manjunatha Temple",
        "query": "Kadri Manjunatha Temple Mangalore",
        "lat": 12.883,
        "lng": 74.858,
        "blurb": "Ancient temple at the base of Kadri Hill dating back to the 10th century, housing rare Buddhist bronze sculptures.",
        "details": [
          "Features a 1,000-year-old bronze statue of Lokeshwara (Bodhisattva Avalokiteshwara) consecrated by King Kundavarma of the Alupa dynasty.",
          "Natural hillside freshwater ponds called Gomukha supply continuous water to the complex."
        ]
      },
      {
        "id": "st-aloysius",
        "cat": "faith",
        "featured": true,
        "name": "St. Aloysius Chapel",
        "query": "St Aloysius Chapel Mangaluru",
        "lat": 12.873,
        "lng": 74.845,
        "blurb": "Italianate chapel built in 1885, renowned for magnificent ceiling and wall frescoes painted by Antonio Moscheni.",
        "details": [
          "Often compared to Rome's Sistine Chapel for its vibrant fresco and oil-canvas coverage by Jesuit painter Brother Antonio Moscheni.",
          "Depicts the life of St. Aloysius Gonzaga, the Apostles, and saints."
        ]
      },
      {
        "id": "panambur-beach",
        "cat": "nature",
        "featured": true,
        "name": "Panambur Beach",
        "query": "Panambur Beach Mangaluru",
        "lat": 12.946,
        "lng": 74.806,
        "blurb": "Popular beach next to New Mangalore Port, famous for international kite festivals and Arabian Sea sunsets.",
        "details": [
          "One of the cleanest and safest beaches in Karnataka with active lifeguard patrols.",
          "Hosts the annual International Kite Festival drawing flyer teams from over 20 countries."
        ]
      },
      {
        "id": "tannirbhavi-beach",
        "cat": "nature",
        "name": "Tannirbhavi Beach & Tree Park",
        "query": "Tannirbhavi Beach Mangaluru",
        "lat": 12.893,
        "lng": 74.815,
        "blurb": "Golden sand beach bordered by Casuarina groves and the Gurupura River backwaters.",
        "details": [
          "Accessible via scenic river ferry from Sultan Battery or via the coastal road; features a landscaped coastal botanical Tree Park."
        ]
      },
      {
        "id": "mangaladevi",
        "cat": "temple",
        "name": "Mangaladevi Temple, Bolar",
        "query": "Mangaladevi Temple Mangaluru",
        "lat": 12.853,
        "lng": 74.851,
        "blurb": "9th-century temple from which the city of Mangaluru derives its name, established by King Kundavarma.",
        "details": [
          "Associated with Matsyendranath and Gorakhnath of the Nath tradition; celebrated for Navaratri Dasara celebrations."
        ]
      },
      {
        "id": "someshwara-beach",
        "cat": "nature",
        "name": "Someshwara Beach & Rudra Shile",
        "query": "Someshwara Beach Ullal Mangaluru",
        "lat": 12.795,
        "lng": 74.853,
        "blurb": "Pristine beach famous for colossal black granite rocks (Rudra Shile) standing in the breaking ocean surf.",
        "details": [
          "Overlooked by the historic Someshwara Shiva Temple built during the reign of the Alupa Queen Abbakka Devi."
        ]
      },
      {
        "id": "dharmasthala",
        "cat": "temple",
        "featured": true,
        "name": "Dharmasthala Sri Manjunatha Swamy Temple",
        "query": "Shri Kshetra Dharmasthala",
        "lat": 12.9575,
        "lng": 75.378,
        "blurb": "Historic temple representing harmony where a Shaivite deity is worshipped by Vaishnava priests under a Jain Heggade administration.",
        "details": [
          "Renowned for the Annapoorna charity dining hall that serves free meals (anna dana) to tens of thousands of pilgrims daily.",
          "Features a 39-foot monolithic statue of Lord Bahubali carved out of a single rock atop Ratnagiri Hill in 1973."
        ]
      },
      {
        "id": "kukke-subramanya",
        "cat": "temple",
        "featured": true,
        "name": "Kukke Sri Subrahmanya Temple",
        "query": "Kukke Sri Subrahmanya Temple Karnataka",
        "lat": 12.6635,
        "lng": 75.615,
        "blurb": "Revered temple nestled at the foot of the Kumara Parvatha peak, dedicated to Lord Subrahmanya, protector of serpent spirits.",
        "details": [
          "According to legend, the serpent king Vasuki took refuge under Lord Subrahmanya here to escape the wrath of Garuda.",
          "Pilgrims perform Sarpa Samskara and Ashlesha Bali rituals on the banks of the sacred Kumaradhara River."
        ]
      },
      {
        "id": "moodabidri-thousand-pillar",
        "cat": "heritage",
        "featured": true,
        "name": "Moodabidri Saavira Kambada Basadi (Tribhuvana Tilaka Chudamani)",
        "query": "Saavira Kambada Basadi Moodabidri",
        "lat": 13.072,
        "lng": 74.996,
        "blurb": "1430 CE Jain temple celebrated as the 'Jain Varanasi of South India', supported by 1,000 uniquely carved granite pillars.",
        "details": [
          "No two stone pillars in this colossal three-storied basadi are carved identically.",
          "Contains a 50-foot tall monolithic bronze Mana Stambha pillar and preserved ancient palm-leaf Dhavala manuscripts."
        ]
      },
      {
        "id": "pilikula",
        "cat": "nature",
        "name": "Pilikula Nisargadhama Biological Park",
        "query": "Pilikula Biological Park Mangaluru",
        "lat": 12.928,
        "lng": 74.901,
        "blurb": "Expansive 370-acre eco-heritage sanctuary featuring an open zoo, botanical garden, science centre, and artisan village.",
        "details": [
          "Preserves the traditional coastal house architecture (Guthu Mane) and indigenous Tuluva artisans' weaving, pottery, and oil-press traditions."
        ]
      },
      {
        "id": "dk-sasihithlu-beach",
        "name": "Sasihithlu Beach & Nandini River Mouth",
        "lat": 13.048,
        "lng": 74.789,
        "alt": 35,
        "cat": "coast",
        "query": "Sasihithlu Beach Mangalore",
        "blurb": "Host of the Indian Open of Surfing where the Nandini River flows into the Arabian Sea.",
        "details": [
          "Long untouched golden sand spit lined with casuarina trees, offering pristine wave breaks and dolphin sightings.",
          "Site of the annual national surfing and stand-up paddling festival."
        ]
      },
      {
        "id": "dk-kateel-temple",
        "name": "Kateel Sri Durgaparameshwari Temple",
        "lat": 13.033,
        "lng": 74.849,
        "alt": 40,
        "cat": "temple",
        "query": "Kateel Sri Durgaparameshwari Temple Dakshina Kannada",
        "blurb": "Famous island shrine situated in the flowing waters of River Nandini.",
        "details": [
          "Dedicated to Goddess Bhramari (Durgaparameshwari), patron deity of the Kateel Yakshagana Mela troupes.",
          "Surrounded by natural river rapids, holy fish, and lush coastal greenery."
        ]
      },
      {
        "id": "dk-sultan-battery",
        "name": "Sultan Battery Watchtower (Boloor)",
        "lat": 12.889,
        "lng": 74.825,
        "alt": 35,
        "cat": "heritage",
        "query": "Sultan Battery Mangalore",
        "blurb": "Miniature blackstone coastal watchtower built by Tipu Sultan in 1784.",
        "details": [
          "Constructed along the Gurupura River estuary to prevent British warships from entering Mangalore harbour.",
          "Features cannon embrasures and an active passenger ferry connection to Tannirbhavi beach."
        ]
      },
      {
        "id": "dk-ullal-dargah",
        "name": "Sayyid Madani Dargah, Ullal",
        "lat": 12.809,
        "lng": 74.856,
        "alt": 35,
        "cat": "faith",
        "query": "Ullal Dargah Sayyid Madani Dakshina Kannada",
        "blurb": "Historic 500-year-old Sufi saint shrine drawing millions for its quinquennial Uroos.",
        "details": [
          "Commemorates saint Sayyid Muhammad Madani who arrived from Medina in the 16th century.",
          "Known for its graceful minarets, philanthropy, and harmonious multicultural attendance."
        ]
      },
      {
        "id": "dk-surathkal-lighthouse",
        "name": "Surathkal Beach & Lighthouse",
        "lat": 13.003,
        "lng": 74.792,
        "alt": 45,
        "cat": "coast",
        "query": "Surathkal Lighthouse Mangalore",
        "blurb": "Active 1972 lighthouse perched upon an ancient rocky seaside promontory.",
        "details": [
          "Stands adjacent to the Sadashiva Temple on a natural cliff overlooking the Arabian Sea.",
          "Popular sunset point offering sweeping views of Mangalore harbour and coastal headlands."
        ]
      }
    ]
  },
  {
    "id": "davanagere",
    "name": "Davanagere",
    "division": "Central Karnataka",
    "tagline": "The textile capital, benne dosa heritage, and peaceful irrigation lakes",
    "bounds": {
      "north": 15.14,
      "south": 13.88,
      "east": 76.35,
      "west": 75.6
    },
    "home": {
      "center": {
        "lat": 14.478,
        "lng": 75.901,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "shanthi-sagara",
        "cat": "nature",
        "featured": true,
        "name": "Shanthi Sagara (Sulekere Reservoir)",
        "query": "Shanthi Sagara Sulekere Channagiri Davanagere",
        "lat": 14.1265,
        "lng": 75.9065,
        "blurb": "The second-largest ancient man-made lake in Asia, constructed in 1128 CE with a water spread of 6,550 acres.",
        "details": [
          "Built by Princess Shantavva, daughter of King Vikrama Raya, in the 12th century.",
          "Fed by Haridra stream and irrigates over 50 villages; features the historic Siddeshwara temple on an embankment hill."
        ]
      },
      {
        "id": "kunduvada-kere",
        "cat": "nature",
        "featured": true,
        "name": "Kunduvada Kere",
        "query": "Kunduvada Lake Davanagere",
        "lat": 14.456,
        "lng": 75.89,
        "blurb": "Vast 253-acre reservoir supplying drinking water to Davanagere, surrounded by a 5 km jogging track.",
        "details": [
          "Serves as the primary drinking water storage reservoir for Davanagere city.",
          "Popular spot for migratory bird watching and panoramic evening sunset views."
        ]
      },
      {
        "id": "durgambika-temple",
        "cat": "temple",
        "name": "Sri Durgambika Temple",
        "query": "Sri Durgambika Temple Davanagere",
        "lat": 14.4671,
        "lng": 75.92485,
        "blurb": "Most sacred presiding mother goddess temple of Davanagere city.",
        "details": [
          "Legend states the deity was brought from the historic fort of Chitradurga over 200 years ago.",
          "The biennial Durgambika Jathra is one of the largest temple fairs in Central Karnataka."
        ]
      },
      {
        "id": "harihar-temple",
        "cat": "heritage",
        "featured": true,
        "name": "Harihareshwara Temple, Harihar",
        "query": "Harihareshwara Temple Harihar Davanagere",
        "lat": 14.5125,
        "lng": 75.8021,
        "blurb": "Magnificent 1223 CE Hoysala temple on the Tungabhadra River, enshrining the united deity Harihara (half Vishnu, half Shiva).",
        "details": [
          "Built by Polalva, a commander of Hoysala King Vira Narasimha II, with 60 lathe-turned soapstone pillars and ornate ceiling vaults."
        ]
      },
      {
        "id": "bathi-gudda",
        "cat": "nature",
        "name": "Bathi Gudda & Lake",
        "query": "Bathi Gudda Davanagere",
        "lat": 14.4843,
        "lng": 75.8498,
        "blurb": "Hillock offering bird's-eye views over Davanagere city and the Tungabhadra plains.",
        "details": [
          "Houses the Dargah of Chaman Shah Wali and a tranquil sugarcane-surrounded irrigation lake."
        ]
      },
      {
        "id": "davanagere-bagali-temple",
        "name": "Bagali Kalleswara Temple",
        "lat": 14.8439,
        "lng": 75.9828,
        "alt": 45,
        "cat": "heritage",
        "query": "Kalleswara Temple Bagali",
        "blurb": "10th-century Western Chalukya architectural gem with 50 carved soapstone pillars.",
        "details": [
          "Built during the reign of Rashtrakuta and Western Chalukya monarchs, featuring exquisite doorway filigree and lathe-turned columns.",
          "Houses numerous ancient Kannada inscriptions recording land grants and guild donations."
        ]
      },
      {
        "id": "davanagere-channagiri-fort",
        "name": "Channagiri Fort (Rani Chennamma Hill)",
        "lat": 14.0222,
        "lng": 75.9216,
        "alt": 55,
        "cat": "heritage",
        "query": "Channagiri Fort Davanagere",
        "blurb": "Hilltop fort built in 1770 by Keladi queen Rani Chennamma.",
        "details": [
          "Offers a dramatic circular stone bastion crowning a steep 200-foot granite hill.",
          "Houses the Betta Sri Ranganatha Swamy Temple at the summit with expansive views over arecanut plantations."
        ]
      },
      {
        "id": "davanagere-uchangidurga",
        "name": "Uchangidurga Historic Hill Fort",
        "lat": 14.5592,
        "lng": 76.0536,
        "alt": 60,
        "cat": "heritage",
        "query": "Uchangidurga Fort",
        "blurb": "Ancient stronghold of the Kadambas, Nolambas, and Chitradurga Nayakas.",
        "details": [
          "Perched atop a rugged granite cliff, this fortified hill successfully withstood dozens of medieval sieges.",
          "Home to the famous Sri Utsavamba temple atop the rock plateau."
        ]
      },
      {
        "id": "davanagere-kondajji-lake",
        "name": "Kondajji Lake & Scout Training Base",
        "lat": 14.571,
        "lng": 75.865,
        "alt": 40,
        "cat": "nature",
        "query": "Kondajji Lake Davanagere",
        "blurb": "Serene freshwater lake surrounded by rolling hills and Karnataka Scout camps.",
        "details": [
          "Major winter wetland sanctuary welcoming whistling ducks, cormorants, and purple swamphens.",
          "Houses Karnataka State Bharat Scouts and Guides national adventure training grounds."
        ]
      }
    ]
  },
  {
    "id": "dharwad",
    "name": "Dharwad (Hubballi-Dharwad)",
    "division": "Kittur Karnataka",
    "tagline": "Twin cities of music, education, pedha confection, and Western Chalukya temples",
    "bounds": {
      "north": 15.75,
      "south": 15.1,
      "east": 75.51,
      "west": 74.8
    },
    "home": {
      "center": {
        "lat": 15.372,
        "lng": 75.127,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 20
    },
    "landmarks": [
      {
        "id": "chandramouleshwara",
        "cat": "heritage",
        "featured": true,
        "name": "Chandramouleshwara Temple, Hubballi",
        "query": "Chandramouleshwara Temple Hubballi Dharwad",
        "lat": 15.372,
        "lng": 75.127,
        "blurb": "Exquisite 900-year-old black granite Western Chalukyan temple with four doors in four directions and a Chaturmukha linga.",
        "details": [
          "Built in the 11th-12th century under the patronage of the Western Chalukyas.",
          "Features finely lathed and polished granite pillars, dancing figures, and floral scroll carvings.",
          "A protected national monument under the Archaeological Survey of India (ASI)."
        ]
      },
      {
        "id": "unkal-lake",
        "cat": "nature",
        "featured": true,
        "name": "Unkal Lake & Swami Vivekananda Statue",
        "query": "Unkal Lake Hubballi",
        "lat": 15.383,
        "lng": 75.118,
        "blurb": "Picturesque 200-acre lake with a massive statue of Swami Vivekananda erected in the center.",
        "details": [
          "Over 110 years old, serving as a recreational and historic water source.",
          "Features boating facilities, musical fountain gardens, and a grand 9-foot bronze statue of Swami Vivekananda."
        ]
      },
      {
        "id": "siddharoodha-matha",
        "cat": "faith",
        "featured": true,
        "name": "Sri Siddharoodha Swamy Matha",
        "query": "Siddharoodha Math Hubballi",
        "lat": 15.343,
        "lng": 75.161,
        "blurb": "Renowned spiritual center where saint Siddharoodha Swamy lived and taught Advaita philosophy.",
        "details": [
          "Visited by Mahatma Gandhi and Bal Gangadhar Tilak during the Indian freedom struggle.",
          "Serves free food and spiritual solace to thousands of visitors every day."
        ]
      },
      {
        "id": "karnatak-university",
        "cat": "civic",
        "name": "Karnatak University Dharwad Campus",
        "query": "Karnatak University Dharwad",
        "lat": 15.441,
        "lng": 74.986,
        "blurb": "Historic 750-acre hilltop university campus established in 1949, the second oldest university in Karnataka.",
        "details": [
          "The cradle of modern Kannada literature, culture, and Hindustani classical music traditions.",
          "Located on the scenic Chhota Mahabaleshwar hill offering panoramic views of Dharwad."
        ]
      },
      {
        "id": "nrupatunga-betta",
        "cat": "nature",
        "name": "Nrupatunga Betta Viewpoint",
        "query": "Nrupatunga Betta Hubballi",
        "lat": 15.367,
        "lng": 75.148,
        "blurb": "Popular hilltop park providing panoramic vistas of Hubballi city and the surrounding countryside.",
        "details": [
          "Equipped with sunset pathways, children's parks, and viewpoints stretching from Amargol to airport runways."
        ]
      },
      {
        "id": "indira-glass-house",
        "cat": "city",
        "name": "Indira Gandhi Glass House, Hubballi",
        "query": "Indira Gandhi Glass House Hubballi",
        "lat": 15.356,
        "lng": 75.139,
        "blurb": "Sprawling public park featuring a glass pavilion modeled after Lalbagh, with musical water fountains.",
        "details": [
          "Hosts annual flower shows, musical evenings, and skating rinks in the city center."
        ]
      },
      {
        "id": "dharwad-kelgeri-lake",
        "name": "Kelgeri Lake & Birdwatching Park",
        "lat": 15.465,
        "lng": 74.982,
        "alt": 45,
        "cat": "nature",
        "query": "Kelgeri Lake Dharwad",
        "blurb": "12th-century lake built by Chalukyan royalty, now a vibrant migratory bird haven.",
        "details": [
          "Sprawls across Dharwad's western edge, attracting thousands of winter visitors including bar-headed geese.",
          "Features a green eco-park, walking tracks, and botanical plantations."
        ]
      },
      {
        "id": "dharwad-sadhankeri-lake",
        "name": "Sadhankeri Lake & Da Ra Bendre Memorial",
        "lat": 15.448,
        "lng": 75.018,
        "alt": 45,
        "cat": "civic",
        "query": "Sadhankeri Lake Da Ra Bendre Dharwad",
        "blurb": "Poetic lake that inspired Jnanpith laureate Da Ra Bendre's lyrical Kannada verses.",
        "details": [
          "The adjacent Bendre Bhavan memorial celebrates the poet's life, manuscripts, and literary legacy.",
          "Features musical fountain gardens and an island pavilion."
        ]
      },
      {
        "id": "dharwad-navalgund-jamkhana",
        "name": "Navalgund Jamkhana Weaving Center",
        "lat": 15.568,
        "lng": 75.362,
        "alt": 40,
        "cat": "civic",
        "query": "Navalgund Jamkhana Durrie Weaving Dharwad",
        "blurb": "Traditional home of GI-tagged Navalgund hand-woven geometric durries and carpets.",
        "details": [
          "Centuries-old craft practiced exclusively by local women weavers using pit looms and indigenous vegetable dyes.",
          "Famous for motifs such as the peacock (mor) and playing card patterns (char-kamal)."
        ]
      },
      {
        "id": "dharwad-amminabhavi-matha",
        "name": "Amminabhavi 24 Tirthankara Basadi",
        "lat": 15.542,
        "lng": 74.989,
        "alt": 45,
        "cat": "faith",
        "query": "Amminabhavi Jain Temple Dharwad",
        "blurb": "Historic Jain pilgrimage center housing an ancient wooden carving of 24 Tirthankaras.",
        "details": [
          "Dating back to the Kadamba and Rashtrakuta eras, famous for its intricate Panchaloha idols and stone inscriptions.",
          "Serves as an important Digambara Jain educational and spiritual heritage site."
        ]
      }
    ]
  },
  {
    "id": "gadag",
    "name": "Gadag",
    "division": "Kittur Karnataka",
    "tagline": "The epic land of Kumaravyasa, Western Chalukyan art, and Lakkundi stepwells",
    "bounds": {
      "north": 15.89,
      "south": 14.95,
      "east": 76.12,
      "west": 75.24
    },
    "home": {
      "center": {
        "lat": 15.4265,
        "lng": 75.632,
        "altitude": 0
      },
      "range": 4800,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "trikuteshwara",
        "cat": "heritage",
        "featured": true,
        "name": "Trikuteshwara Temple Complex",
        "query": "Trikuteshwara Temple Gadag",
        "lat": 15.4265,
        "lng": 75.632,
        "blurb": "Splendid 11th-century Chalukyan temple dedicated to the triple lingas of Brahma, Shiva, and Vishnu.",
        "details": [
          "The adjacent Saraswati shrine houses a celebrated stone statue of goddess Saraswati adorned with filigree-like stone ornaments.",
          "Features ornate carved soapstone screens, stone pillars with miniature shrines, and deep stepped tanks."
        ]
      },
      {
        "id": "lakkundi-group",
        "cat": "heritage",
        "featured": true,
        "name": "Lakkundi Heritage Temples & Stepwells",
        "query": "Lakkundi Temples Gadag",
        "lat": 15.385,
        "lng": 75.708,
        "blurb": "Medieval architectural wonder featuring over 50 stone temples and 100 stepped pushkarinis (baolis).",
        "details": [
          "Flourished under the Western Chalukyas, Kalachuris, and Seunas as a major metropolitan mint city.",
          "Highlights include the Brahma Jinalaya, the Kasi Vishweswara temple, and the geometric Musukinabhavi stepwell."
        ]
      },
      {
        "id": "veera-narayana-gadag",
        "cat": "heritage",
        "featured": true,
        "name": "Veera Narayana Temple, Gadag",
        "query": "Veeranarayana Temple Gadag",
        "lat": 15.433,
        "lng": 75.626,
        "blurb": "Historic temple where the great poet Kumaravyasa composed the Mahabharata in Kannada (Gadugina Bharata).",
        "details": [
          "Built in 1117 CE by the Hoysala king Vishnuvardhana after his conversion to Sri Vaishnavism.",
          "The pillar where Kumaravyasa sat and composed his poetic epic is preserved as 'Kumaravyasana Kamba'."
        ]
      },
      {
        "id": "dambal-doddabasappa",
        "cat": "heritage",
        "name": "Dambal Doddabasappa Temple",
        "query": "Doddabasappa Temple Dambal Gadag",
        "lat": 15.305,
        "lng": 75.775,
        "blurb": "Unique 12th-century Western Chalukyan temple with a 24-pointed polygonal stellate (star-shaped) sanctum plan.",
        "details": [
          "The stepped star-like exterior walls catch shifting sun shadows throughout the day; houses a massive couchant Nandi bull."
        ]
      },
      {
        "id": "magadi-bird-sanctuary",
        "cat": "nature",
        "name": "Magadi Bird Sanctuary",
        "query": "Magadi Bird Sanctuary Gadag",
        "lat": 15.223,
        "lng": 75.525,
        "blurb": "Biodiversity wetland lake famed as one of South India's largest wintering grounds for Bar-headed Geese.",
        "details": [
          "Over 5,000 Bar-headed Geese fly across the Himalayas from Mongolia and Central Asia to spend winter in this tranquil tank."
        ]
      },
      {
        "id": "gadag-gajendragad-fort",
        "name": "Gajendragad Hill Fort & Kalakaleshwara",
        "lat": 15.738,
        "lng": 75.975,
        "alt": 60,
        "cat": "heritage",
        "query": "Gajendragad Fort Gadag",
        "blurb": "Imposing hill fortress built by Chhatrapati Shivaji Maharaj in 1676.",
        "details": [
          "Features dramatic defensive ramparts, deep rock-cut moats, and the subterranean Kalakaleshwara cave temple.",
          "Surrounded by modern wind turbines spinning across the ridge tops."
        ]
      },
      {
        "id": "gadag-nargund-fort",
        "name": "Nargund Fort & Baba Saheb Memorial",
        "lat": 15.722,
        "lng": 75.391,
        "alt": 55,
        "cat": "heritage",
        "query": "Nargund Fort Baba Saheb Gadag",
        "blurb": "Historic hill bastion of the 1857 Indian War of Independence hero Bhaskar Rao Bhave.",
        "details": [
          "The heroic ruler 'Baba Saheb' led an armed revolt against the British East India Company's Doctrine of Lapse.",
          "Crowns a steep flat-topped mesa with wide commanding views of the Malaprabha plains."
        ]
      },
      {
        "id": "gadag-sudi-temples",
        "name": "Sudi Twin-Towered Jodu Kalasha Temple",
        "lat": 15.731,
        "lng": 75.864,
        "alt": 45,
        "cat": "heritage",
        "query": "Sudi Twin Towered Temple Gadag",
        "blurb": "Rare Kalyani Chalukyan dual-shikhara stone temple dating back to 1060 CE.",
        "details": [
          "Engineered with two symmetrical stone towers crowning two sanctums facing a shared central pillar hall.",
          "Also features the Nagakunda stone stepwell and finely carved Nataraja sculptures."
        ]
      },
      {
        "id": "gadag-ron-temples",
        "name": "Ron Ananta Shayana & Mallikarjuna Temples",
        "lat": 15.698,
        "lng": 75.732,
        "alt": 45,
        "cat": "heritage",
        "query": "Anantasayana Temple Ron Gadag",
        "blurb": "Historic town boasting seven magnificent 10th-century Chalukyan rock shrines.",
        "details": [
          "Ananta Shayana temple depicts Lord Vishnu reclining on Sheshanaga carved from black chloritic schist.",
          "Preserves numerous royal epigraphs highlighting medieval local trade guilds."
        ]
      }
    ]
  },
  {
    "id": "hassan",
    "name": "Hassan",
    "division": "Malenadu & Hills",
    "tagline": "Capital of Hoysala craftsmanship, monolithic Jain colossus, and coffee valleys",
    "bounds": {
      "north": 13.55,
      "south": 12.55,
      "east": 76.63,
      "west": 75.54
    },
    "home": {
      "center": {
        "lat": 13.1627,
        "lng": 75.8596,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 60,
      "heading": 25
    },
    "landmarks": [
      {
        "id": "belur-chennakeshava",
        "cat": "heritage",
        "featured": true,
        "name": "Chennakeshava Temple, Belur",
        "query": "Chennakeshava Temple Belur Karnataka",
        "lat": 13.1627,
        "lng": 75.8596,
        "blurb": "UNESCO World Heritage Hoysala masterpiece built in 1117 CE, celebrated for its 42 bracket figures (Madanikas).",
        "details": [
          "Commissioned by Hoysala King Vishnuvardhana to commemorate his victory over the Cholas in Talakad.",
          "Took 103 years to complete; carved from fine-grained chloritic schist (soapstone) with astonishing lace-like detail.",
          "The exterior friezes depict over 600 charging elephants, each carved with unique expressions."
        ]
      },
      {
        "id": "halebidu-hoysaleshwara",
        "cat": "heritage",
        "featured": true,
        "name": "Hoysaleshwara Temple, Halebidu",
        "query": "Hoysaleshwara Temple Halebidu Karnataka",
        "lat": 13.2132,
        "lng": 75.994,
        "blurb": "UNESCO World Heritage twin-shrine temple built by King Vishnuvardhana in 1121 CE, renowned for 240+ wall relief sculptures.",
        "details": [
          "Dedicated to Shiva as Hoysaleshwara and Shantaleshwara, flanked by monolithic Nandi bulls in open pavilions.",
          "Features bands of horizontal friezes depicting scenes from the Ramayana, Mahabharata and Bhagavata Purana.",
          "Halebidu was known as Dorasamudra when it served as the royal capital of the Hoysala Empire."
        ]
      },
      {
        "id": "shravanabelagola",
        "cat": "heritage",
        "featured": true,
        "name": "Gommateshwara Statue, Shravanabelagola",
        "query": "Gommateshwara Statue Shravanabelagola",
        "lat": 12.8565,
        "lng": 76.4845,
        "blurb": "World's largest free-standing monolithic stone statue (57 ft / 17.5 m) carved atop Vindhyagiri Hill in 981 CE.",
        "details": [
          "Commissioned by Chavundaraya, commander of the Western Ganga dynasty, carved out of a single granite block.",
          "Every 12 years, the Mahamastakabhisheka festival anoints the statue with milk, saffron, turmeric, sandalwood and gold coins.",
          "Chandragupta Maurya, founder of the Mauryan Empire, spent his final days in meditation on the adjacent Chandragiri hill."
        ]
      },
      {
        "id": "manjarabad-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Manjarabad Star Fort, Sakleshpur",
        "query": "Manjarabad Fort Sakleshpur Hassan",
        "lat": 12.938,
        "lng": 75.782,
        "blurb": "Unique eight-pointed star-shaped fort built in 1792 by Tipu Sultan with French military engineers.",
        "details": [
          "Designed using Vauban octagonal bastions to withstand cannonball fire; 'Manjara' refers to the dense morning fog.",
          "Features underground ammunition cellars, a cruciform well, and arrow slits with views down the Shiradi Ghat to the Arabian Sea."
        ]
      },
      {
        "id": "shettihalli-church",
        "cat": "heritage",
        "name": "Shettihalli Rosary Church (Submerged Church)",
        "query": "Shettihalli Rosary Church Hassan",
        "lat": 12.927,
        "lng": 76.046,
        "blurb": "Haunting 1860s Gothic church ruins that submerge during the monsoon waters of the Hemavathi Reservoir.",
        "details": [
          "Built by French missionaries in 1860 with mortar, brick and egg-white mix.",
          "Submerged every monsoon since the Gorur Dam was built in 1960; visitors can kayak through its arches when flooded."
        ]
      },
      {
        "id": "bisle-ghat",
        "cat": "nature",
        "name": "Bisle Ghat Viewpoint (Bisle Reserve Forest)",
        "query": "Bisle Ghat View Point Hassan",
        "lat": 12.715,
        "lng": 75.698,
        "blurb": "Dramatic mountain cliff viewpoint overlooking three mountain ranges: Kumara Parvatha, Pushpagiri, and Dodda Betta.",
        "details": [
          "Located inside one of the richest tropical evergreen rain-forest corridors in the Western Ghats.",
          "The Giri Betta viewpoint platform hangs over an emerald valley chasm."
        ]
      },
      {
        "id": "gorur-dam",
        "cat": "nature",
        "name": "Gorur Hemavathi Dam",
        "query": "Gorur Dam Hemavathi Reservoir Hassan",
        "lat": 12.852,
        "lng": 76.061,
        "blurb": "Large irrigation dam built in 1979 across the Hemavathi River with six crest radial gates.",
        "details": [
          "Creates a massive 9,000-hectare reservoir surrounded by birdlife, gardens, and Paravasudeva temple."
        ]
      },
      {
        "id": "hasanamba-temple",
        "cat": "temple",
        "name": "Hasanamba Temple, Hassan",
        "query": "Hasanamba Temple Hassan",
        "lat": 13.005,
        "lng": 76.098,
        "blurb": "Historic 12th-century temple that opens its doors to the public only once a year during Diwali for two weeks.",
        "details": [
          "The ghee lamp lit and cooked rice offered at closing remains miraculously fresh and unextinguished when reopened a year later."
        ]
      },
      {
        "id": "hassan-kedareshwara-halebidu",
        "name": "Kedareshwara Temple, Halebidu",
        "lat": 13.209,
        "lng": 75.992,
        "alt": 45,
        "cat": "heritage",
        "query": "Kedareshwara Temple Halebidu Hassan",
        "blurb": "Star-shaped 1219 CE Hoysala royal trikuta temple built by King Veera Ballala II.",
        "details": [
          "Situated on the banks of Dwarasamudra lake, showcasing 180 sculpted friezes of deities and musicians.",
          "Carved from soft chloritic schist, exhibiting pristine star-shaped basement tiers."
        ]
      },
      {
        "id": "hassan-hulikere-kalyani",
        "name": "Hulikere Stepwell (Hoysala Kalyani)",
        "lat": 13.238,
        "lng": 75.978,
        "alt": 45,
        "cat": "heritage",
        "query": "Hulikere Kalyani Halebidu Hassan",
        "blurb": "Exquisite stepped water tank ringed by 27 miniature stone tower shrines.",
        "details": [
          "Built in the 12th century as a royal private bath for the Hoysala queens.",
          "Each miniature shrine along the tiered steps displays distinct Nagara and Dravida tower designs."
        ]
      },
      {
        "id": "hassan-jenukal-gudda",
        "name": "Jenukal Gudda (Honey Stone Peak)",
        "lat": 12.9555,
        "lng": 75.6172,
        "alt": 65,
        "cat": "nature",
        "query": "Jenukal Gudda Sakleshpur Hassan",
        "blurb": "Second highest mountain peak in Hassan offering views stretching to the Arabian Sea coast.",
        "details": [
          "Named after the wild honeybee hives clinging to sheer rock cliffs, flanked by verdant coffee estates.",
          "Popular sunrise trekking trail offering vistas of the Western Ghats spine and Bisle range."
        ]
      },
      {
        "id": "hassan-mosale-twin-temples",
        "name": "Mosale Nageshwara & Chennakeshava Twin Temples",
        "lat": 12.9017,
        "lng": 76.1421,
        "alt": 45,
        "cat": "heritage",
        "query": "Mosale Twin Temples Hassan",
        "blurb": "Symmetrical 13th-century twin Hoysala temples standing side by side.",
        "details": [
          "Built in 1200 CE representing rare parallel architectural harmony between Shaiva and Vaishnava faiths.",
          "Renowned for exquisite lathe-turned polished stone pillars and perforated window screens."
        ]
      }
    ]
  },
  {
    "id": "haveri",
    "name": "Haveri",
    "division": "Kittur Karnataka",
    "tagline": "Gateway to north Karnataka, saint Kanakadasa's land, and Chalukyan shrines",
    "bounds": {
      "north": 15.15,
      "south": 14.35,
      "east": 75.88,
      "west": 74.98
    },
    "home": {
      "center": {
        "lat": 14.793,
        "lng": 75.402,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "siddheshwara-haveri",
        "cat": "heritage",
        "featured": true,
        "name": "Siddheshwara Temple, Haveri",
        "query": "Siddheshwara Temple Haveri",
        "lat": 14.793,
        "lng": 75.402,
        "blurb": "11th-century Western Chalukyan temple famous for its East-facing deity and fine stone wall sculptures.",
        "details": [
          "Constructed in soapstone during the peak of Western Chalukya rule.",
          "Contains exquisite carvings of Surya, Vishnu, Ganesha and Mahishasuramardini alongside miniature shikharas."
        ]
      },
      {
        "id": "tarakeshwara-hangal",
        "cat": "heritage",
        "featured": true,
        "name": "Tarakeshwara Temple, Hangal",
        "query": "Tarakeshwara Temple Hangal Haveri",
        "lat": 14.762,
        "lng": 75.128,
        "blurb": "Massive 12th-century Chalukyan temple with a colossal 30-foot domical octagonal ceiling carved like an inverted lotus.",
        "details": [
          "Hangal was the ancient capital of the Hangal Kadambas and is mentioned in the Mahabharata as Viratanagari.",
          "The central hall ceiling is an engineering wonder supported by eight intricately turned pillars."
        ]
      },
      {
        "id": "galageshwara",
        "cat": "heritage",
        "name": "Galageshwara Temple, Galaganatha",
        "query": "Galageshwara Temple Galaganatha Haveri",
        "lat": 14.9194,
        "lng": 75.6811,
        "blurb": "11th-century Chalukyan temple situated at the scenic confluence of the Tungabhadra and Varada rivers.",
        "details": [
          "Features a striking stepped pyramidal shikhara and an inverted lotus ceiling with depictions of the eight Dikpalas."
        ]
      },
      {
        "id": "kaginele",
        "cat": "heritage",
        "featured": true,
        "name": "Kaginele Kanakadasa Memorial & Keshava Temple",
        "query": "Kaginele Kanakadasa Haveri",
        "lat": 14.735,
        "lng": 75.525,
        "blurb": "Birthplace and spiritual hermitage of the 16th-century Haridasa saint-philosopher and poet Kanakadasa.",
        "details": [
          "Houses the historic Adikeshava temple where Kanakadasa composed his famous Bhakti kirtanas with the signature 'Kaginele Adikeshava'.",
          "Includes a grand cultural memorial complex, fort replica, and research center."
        ]
      },
      {
        "id": "ranebennur-sanctuary",
        "cat": "nature",
        "name": "Ranebennur Blackbuck Sanctuary",
        "query": "Ranebennur Blackbuck Sanctuary Haveri",
        "lat": 14.618,
        "lng": 75.642,
        "blurb": "Wildlife sanctuary dedicated to protecting the endangered Indian blackbuck and the Great Indian Bustard.",
        "details": [
          "Covers 119 square kilometers of eucalyptus and scrub woodland.",
          "Home to over 6,000 blackbucks alongside wolves, jackals, and wild boars."
        ]
      },
      {
        "id": "haveri-chaudayyadanapura",
        "name": "Chaudayyadanapura Mukteshwara Temple",
        "lat": 14.767,
        "lng": 75.626,
        "alt": 45,
        "cat": "heritage",
        "query": "Mukteshwara Temple Chaudayyadanapura Haveri",
        "blurb": "Western Chalukyan masterpiece on the picturesque banks of the Tungabhadra River.",
        "details": [
          "Associated with Shivasharana Ambigara Chaudayya, the 12th-century boatman-philosopher of Basavanna's court.",
          "Exemplifies mature Chalukya stone craft with ornate wall niches, vimana, and riverside stone steps."
        ]
      },
      {
        "id": "haveri-bankapura-peacock",
        "name": "Bankapura Fort & Peacock Sanctuary",
        "lat": 14.921,
        "lng": 75.265,
        "alt": 45,
        "cat": "nature",
        "query": "Bankapura Peacock Sanctuary Haveri",
        "blurb": "Only bird sanctuary in Karnataka exclusively dedicated to the conservation of peacocks.",
        "details": [
          "Located inside the historic 11th-century Bankapura Fort ruins, housing over 1,000 free-roaming peafowl.",
          "Also contains the remarkable Nagareshwara stone temple with 66 carved pillars."
        ]
      },
      {
        "id": "haveri-hukkeri-matha",
        "name": "Hukkeri Matha, Haveri",
        "lat": 14.795,
        "lng": 75.402,
        "alt": 45,
        "cat": "faith",
        "query": "Hukkeri Matha Haveri",
        "blurb": "Venerated 400-year-old Lingayat spiritual and educational institution in Haveri town.",
        "details": [
          "Founded by saint Sri Shivabasava Swamiji, carrying on traditions of community annadana and social reform.",
          "Houses peaceful prayer halls and historic Kannada palm-leaf manuscripts."
        ]
      },
      {
        "id": "haveri-rattihalli-temple",
        "name": "Rattihalli Kadambeshwara Temple",
        "lat": 14.4245,
        "lng": 75.5129,
        "alt": 45,
        "cat": "temple",
        "query": "Kadambeshwara Temple Rattihalli Haveri",
        "blurb": "Ornate Rashtrakuta-Chalukya temple on the Kumadhvati riverbank.",
        "details": [
          "Features three sanctums dedicated to Shiva, Surya, and Vishnu with magnificent carvings.",
          "Preserves 12th-century heroic stone inscriptions honoring fallen chieftains."
        ]
      }
    ]
  },
  {
    "id": "kalaburagi",
    "name": "Kalaburagi (Gulbarga)",
    "division": "Kalyana Karnataka",
    "tagline": "First Bahmani sultanate capital, sprawling fort, and Sufi heritage",
    "bounds": {
      "north": 17.75,
      "south": 16.68,
      "east": 77.44,
      "west": 76.35
    },
    "home": {
      "center": {
        "lat": 17.343,
        "lng": 76.822,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "gulbarga-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Gulbarga Fort & Great Jama Masjid",
        "query": "Gulbarga Fort Kalaburagi",
        "lat": 17.343,
        "lng": 76.822,
        "blurb": "Historic 14th-century fort housing the unique roofed Jama Masjid modeled after the Mosque of Cordoba.",
        "details": [
          "Originally built by Raja Gulchand of the Kakatiyas and expanded by Alauddin Bahman Shah in 1347.",
          "The Jama Masjid inside (1367 CE) is rare in Islamic architecture for having its entire courtyard covered with 63 domes and wide archways.",
          "Houses the colossal 29-foot bronze cannon known as the Bara Gazi Tope."
        ]
      },
      {
        "id": "bande-nawaz",
        "cat": "faith",
        "featured": true,
        "name": "Khwaja Bande Nawaz Dargah",
        "query": "Khwaja Bande Nawaz Dargah Kalaburagi",
        "lat": 17.327,
        "lng": 76.848,
        "blurb": "Sacred mausoleum of the 14th-century Chishti Sufi saint Hazrat Syed Muhammad Gesudaraz.",
        "details": [
          "Built in an Indo-Saracenic style with influences of Bahmani architecture, featuring a massive dome and library with over 10,000 rare Arabic and Persian manuscripts.",
          "The annual Urs festival attracts hundreds of thousands of pilgrims of all faiths from across the Deccan."
        ]
      },
      {
        "id": "sharana-basaveshwara",
        "cat": "temple",
        "featured": true,
        "name": "Sharana Basaveshwara Temple",
        "query": "Sharana Basaveshwara Temple Kalaburagi",
        "lat": 17.336,
        "lng": 76.837,
        "blurb": "Revered temple and samadhi of the 18th-century Lingayat saint, philosopher and reformer Sharana Basaveshwara.",
        "details": [
          "Renowned for the concept of 'Dasoha' (unconditional free distribution of food, knowledge, and spiritual shelter).",
          "The temple features intricately carved stone pillars with mythical Yali creatures and an ornate silver cradle."
        ]
      },
      {
        "id": "buddha-vihar-kalaburagi",
        "cat": "faith",
        "name": "Siddharth Vihar Trust (Buddha Vihar)",
        "query": "Buddha Vihar Kalaburagi Karnataka",
        "lat": 17.359,
        "lng": 76.879,
        "blurb": "Sprawling modern Buddhist monument inaugurated in 2009 by the Dalai Lama and President Pratibha Patil.",
        "details": [
          "Built across 18 acres in traditional Buddhist pagoda style with an expansive meditation hall.",
          "Houses a gold-plated seated statue of Lord Buddha sculpted in Thailand."
        ]
      },
      {
        "id": "sannati-stupa",
        "cat": "heritage",
        "featured": true,
        "name": "Sannati Ashokan Edicts & Buddhist Stupa (Kanaganahalli)",
        "query": "Kanaganahalli Buddhist Stupa Sannati Kalaburagi",
        "lat": 16.828,
        "lng": 76.916,
        "blurb": "Archaeological discovery of Emperor Ashoka's carved portrait stone with his queens and major rock edicts.",
        "details": [
          "The only known sculpture depicting Emperor Ashoka labelled with his name ('Raya Asoka') in Brahmi script, excavated from a 1st-century BCE Mahastupa on the Bhima River bank."
        ]
      },
      {
        "id": "chandrampalli-dam",
        "cat": "nature",
        "name": "Chandrampalli Dam & Chincholi Forest",
        "query": "Chandrampalli Dam Kalaburagi",
        "lat": 17.438,
        "lng": 77.215,
        "blurb": "Scenic dam constructed in 1973 between two hills in the Chincholi wildlife reserve.",
        "details": [
          "Surrounded by Gottam Gotta forest trails and islands popular for eco-camping and trekking."
        ]
      },
      {
        "id": "kalaburagi-malkhed-fort",
        "name": "Malkhed Fort & Rashtrakuta Manyakheta Ruins",
        "lat": 17.189,
        "lng": 77.162,
        "alt": 45,
        "cat": "heritage",
        "query": "Malkhed Fort Manyakheta Kalaburagi",
        "blurb": "Historic royal capital of the Rashtrakuta Empire on the Kagina River.",
        "details": [
          "From this legendary seat, Emperor Amoghavarsha I ruled over an empire stretching from the Cauvery to the Narmada.",
          "Houses the sacred Vrindavan of Sri Jayatirtha (Teekacharya), the premier Dvaita saint philosopher."
        ]
      },
      {
        "id": "kalaburagi-nagavi-university",
        "name": "Nagavi Ghatika (Ancient University Ruins)",
        "lat": 17.1047,
        "lng": 77.085,
        "alt": 45,
        "cat": "heritage",
        "query": "Nagavi Ghatika Chittapur Kalaburagi",
        "blurb": "Medieval university seat that educated scholars in 14 Vedic sciences during Chalukya times.",
        "details": [
          "Inscriptions from 1058 CE mention hundreds of university students receiving free education, board, and stipends.",
          "Site features the stone Yellamma and Arupatthu Kambada (60-pillar) temple ruins."
        ]
      },
      {
        "id": "kalaburagi-koranti-hanuman",
        "name": "Koranti Hanuman Temple",
        "lat": 17.315,
        "lng": 76.848,
        "alt": 45,
        "cat": "temple",
        "query": "Koranti Hanuman Temple Kalaburagi",
        "blurb": "Revered modern Hindu shrine featuring a colossal 66-foot Lord Hanuman idol.",
        "details": [
          "Built in traditional South Indian style with an imposing entrance gopuram and peaceful manicured lawns.",
          "Popular evening destination for spiritual prayers and family strolls."
        ]
      },
      {
        "id": "kalaburagi-sedam-temples",
        "name": "Sedam Heritage Panchalingeshwara Temples",
        "lat": 17.182,
        "lng": 77.291,
        "alt": 45,
        "cat": "heritage",
        "query": "Sedam Temples Kalaburagi",
        "blurb": "Historic stone town dotted with medieval Jain and Kalyani Chalukya temples.",
        "details": [
          "Famous for the Panchalingeshwara complex, Bada Kaman, and Kotan Basadi constructed of Shahabad stone slabs.",
          "Thriving hub along the historic limestone trade route of the Deccan."
        ]
      }
    ]
  },
  {
    "id": "kodagu",
    "name": "Kodagu (Coorg)",
    "division": "Malenadu & Hills",
    "tagline": "Scotland of India, misty coffee valleys, brave martial traditions and sacred Kaveri",
    "bounds": {
      "north": 12.8,
      "south": 11.88,
      "east": 76.15,
      "west": 75.34
    },
    "home": {
      "center": {
        "lat": 12.417,
        "lng": 75.736,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "rajas-seat",
        "cat": "nature",
        "featured": true,
        "name": "Raja's Seat, Madikeri",
        "query": "Raja's Seat Madikeri Coorg",
        "lat": 12.417,
        "lng": 75.736,
        "blurb": "Clifftop pavilion with seasonal flower gardens where the kings of Kodagu watched sunsets over misty valleys.",
        "details": [
          "Features a brick-and-mortar pavilion commanding an amphitheater-like view of undulating hills and green valleys.",
          "Famous for spectacular sunset views and morning fog rolling over the Western Ghats."
        ]
      },
      {
        "id": "madikeri-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Madikeri Fort & Palace",
        "query": "Madikeri Fort Coorg",
        "lat": 12.4225,
        "lng": 75.739,
        "blurb": "Hilltop fort founded by Mudduraja in the 17th century, later rebuilt in granite by Tipu Sultan and the British.",
        "details": [
          "Inside the fort stands a two-story palace built by Lingarajendra Wodeyar II in 1812.",
          "Features two life-sized stone elephant sculptures at the entrance and an Anglican gothic church museum."
        ]
      },
      {
        "id": "abbey-falls",
        "cat": "nature",
        "featured": true,
        "name": "Abbey Falls (Abbi Falls)",
        "query": "Abbey Falls Madikeri Coorg",
        "lat": 12.454,
        "lng": 75.718,
        "blurb": "Picturesque 70-foot waterfall cascading between private coffee plantations and spice estates.",
        "details": [
          "Fed by mountain streams that gather into the Kaveri river basin.",
          "A hanging bridge opposite the waterfall offers clear photography views of the roar."
        ]
      },
      {
        "id": "talakaveri",
        "cat": "temple",
        "featured": true,
        "name": "Talakaveri Sacred Spring",
        "query": "Talakaveri Temple Bhagamandala Coorg",
        "lat": 12.385,
        "lng": 75.495,
        "blurb": "Sacred birthplace of the River Kaveri on the Brahmagiri hill slopes, venerated as the mother goddess of Kodagu.",
        "details": [
          "The holy water springs from a small perennial water tank (Kundike) into a holy bathing tank.",
          "On Tula Sankramana (October), the spring overflows in a holy event (Theerthodbhava) witnessed by thousands of devotees."
        ]
      },
      {
        "id": "bhagamandala",
        "cat": "temple",
        "name": "Bhagamandala Triveni Sangama",
        "query": "Bhagandeshwara Temple Bhagamandala Coorg",
        "lat": 12.392,
        "lng": 75.531,
        "blurb": "Sacred river confluence where the Kaveri meets the Kannike and the mythical subterranean Sujyoti river.",
        "details": [
          "The Sri Bhagandeshwara temple features Kerala-style gabled copper roofs and wood carvings."
        ]
      },
      {
        "id": "namdroling-monastery",
        "cat": "faith",
        "featured": true,
        "name": "Namdroling Monastery (Golden Temple), Bylakuppe",
        "query": "Namdroling Monastery Bylakuppe Coorg",
        "lat": 12.4285,
        "lng": 75.967,
        "blurb": "Largest Nyingma Tibetan Buddhist monastery in the world outside Tibet, home to 40-foot golden Buddha statues.",
        "details": [
          "Established in 1963 by His Holiness Penor Rinpoche.",
          "The main temple hall houses three magnificent 40-foot gold-plated statues: Buddha Shakyamuni, Padmasambhava, and Amitayus.",
          "The walls are adorned with rich traditional Tibetan thangka frescoes depicting deities and demons."
        ]
      },
      {
        "id": "dubare-elephant",
        "cat": "nature",
        "name": "Dubare Elephant Camp",
        "query": "Dubare Elephant Camp Coorg",
        "lat": 12.368,
        "lng": 75.905,
        "blurb": "Forest training camp on the banks of the Kaveri River where visitors can watch and participate in elephant bathing.",
        "details": [
          "Originally trained elephants for the world-famous Mysore Dasara procession."
        ]
      },
      {
        "id": "iruppu-falls",
        "cat": "nature",
        "featured": true,
        "name": "Iruppu Falls (Lakshmana Tirtha)",
        "query": "Iruppu Falls Kutta Coorg",
        "lat": 12.032,
        "lng": 75.981,
        "blurb": "Sacred waterfall in the Brahmagiri range plunging 170 feet, tied to legends of the Ramayana.",
        "details": [
          "Legend holds that Lakshmana shot an arrow into the Brahmagiri hills to fetch drinking water for Lord Rama.",
          "Devotees take holy dips during Shivaratri to wash away sins."
        ]
      },
      {
        "id": "tadiandamol-peak",
        "cat": "nature",
        "name": "Tadiandamol Peak (Highest in Kodagu)",
        "query": "Tadiandamol Peak Coorg",
        "lat": 12.215,
        "lng": 75.608,
        "blurb": "Highest mountain peak in Kodagu (1,748 m), offering dramatic views of the Western Ghats down to Kerala.",
        "details": [
          "The hiking trail passes the historic 1792 CE Nakkal Nalaknad Palace built by Dodda Veerarajendra."
        ]
      },
      {
        "id": "mandalpatti",
        "cat": "nature",
        "name": "Mandalpatti Peak Viewpoint",
        "query": "Mandalpatti Peak Madikeri Coorg",
        "lat": 12.518,
        "lng": 75.705,
        "blurb": "High wind-swept mountain ridge inside Pushpagiri Wildlife Sanctuary, famous for off-road 4x4 trails.",
        "details": [
          "Known in Kannada as Mugilu-Pete ('Market of Clouds') for the ocean of mist enveloping its rolling grasslands."
        ]
      },
      {
        "id": "kodagu-chelavara-falls",
        "name": "Chelavara Falls (Embrace Waterfall)",
        "lat": 12.215,
        "lng": 75.808,
        "alt": 55,
        "cat": "nature",
        "query": "Chelavara Falls Coorg Kodagu",
        "blurb": "Spectacular natural waterfall plunging over a tortoise-shaped rock formation.",
        "details": [
          "Tucked into the lush coffee and cardamom hills of Cheyyandane village in Virajpet taluk.",
          "Fed by tributary streams of the Cauvery flowing down the slopes of Chomakund hill."
        ]
      },
      {
        "id": "kodagu-omkareshwara",
        "name": "Omkareshwara Temple, Madikeri",
        "lat": 12.424,
        "lng": 75.739,
        "alt": 45,
        "cat": "temple",
        "query": "Omkareshwara Temple Madikeri Kodagu",
        "blurb": "1820 CE Shiva shrine showcasing a unique blend of Gothic and Islamic architectural styles.",
        "details": [
          "Commissioned by King Lingarajendra II, featuring a central dome, four corner minarets, and a large holy water pond.",
          "Houses a Shiva linga brought from the sacred city of Kashi (Varanasi)."
        ]
      },
      {
        "id": "kodagu-nisargadhama",
        "name": "Kaveri Nisargadhama Island & Deer Park",
        "lat": 12.448,
        "lng": 75.932,
        "alt": 45,
        "cat": "nature",
        "query": "Kaveri Nisargadhama Kushalnagar Kodagu",
        "blurb": "64-acre natural river island on the Cauvery accessed by a hanging rope bridge.",
        "details": [
          "Dense with thick bamboo groves, sandalwood trees, spotted deer herds, and tree-top cottages.",
          "Popular eco-tourism island offering paddle boating and riverside picnic spots."
        ]
      },
      {
        "id": "kodagu-honnamana-kere",
        "name": "Honnamana Kere Lake, Somwarpet",
        "lat": 12.602,
        "lng": 75.882,
        "alt": 50,
        "cat": "nature",
        "query": "Honnamana Kere Somwarpet Kodagu",
        "blurb": "Largest natural freshwater lake in Kodagu, steeped in royal legend.",
        "details": [
          "Surrounded by cliffs, coffee plantations, and the holy temple of Goddess Honnamma who sacrificed herself for village prosperity.",
          "Celebrates an annual Gowri festival where bagina offerings are dedicated to the lake."
        ]
      }
    ]
  },
  {
    "id": "kolar",
    "name": "Kolar",
    "division": "Bengaluru Division",
    "tagline": "Land of gold mines, a crore Shiva lingas, and ancient Ganga dynasty shrines",
    "bounds": {
      "north": 13.4,
      "south": 12.72,
      "east": 78.55,
      "west": 77.85
    },
    "home": {
      "center": {
        "lat": 12.983,
        "lng": 78.293,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "kotilingeshwara",
        "cat": "temple",
        "featured": true,
        "name": "Kotilingeshwara Temple, Kammasandra",
        "query": "Kotilingeshwara Temple Kolar",
        "lat": 12.983,
        "lng": 78.293,
        "blurb": "Temple complex famous for housing over one crore (10 million) Shiva lingas and a 108-foot colossal Maha Linga.",
        "details": [
          "Features a 108-foot (33 m) tall Shiva linga—one of the largest in Asia—accompanied by a 35-foot tall Nandi bull statue.",
          "Pilgrims from around the world install and consecrate their own small Shiva lingas within the expansive open courtyard."
        ]
      },
      {
        "id": "kolar-someshwara",
        "cat": "heritage",
        "featured": true,
        "name": "Someshwara Temple, Kolar",
        "query": "Someshwara Temple Kolar Karnataka",
        "lat": 13.135,
        "lng": 78.136,
        "blurb": "14th-century Vijayanagara architectural masterpiece famed for its ornate Kalyana Mandapa and elephant friezes.",
        "details": [
          "Built by the Vijayanagara rulers with exquisite granite pillars depicting Yali riders and celestial dancers.",
          "The Kalyana Mandapa (wedding hall) inside is acclaimed as a high peak of late Dravidian stonemasonry."
        ]
      },
      {
        "id": "kolaramma-temple",
        "cat": "temple",
        "name": "Kolaramma Temple, Kolar",
        "query": "Kolaramma Temple Kolar",
        "lat": 13.138,
        "lng": 78.134,
        "blurb": "1,000-year-old Chola-era Dravidian temple dedicated to Goddess Kolaramma, the presiding deity of Kolar.",
        "details": [
          "Built by Rajendra Chola I in the 11th century; features intricate granite inscriptions in ancient Tamil and Kannada.",
          "Contains the unique well of Chellamma (scorpion goddess) where coins are dropped to prevent scorpion stings."
        ]
      },
      {
        "id": "anthargange",
        "cat": "nature",
        "featured": true,
        "name": "Anthargange Caves & Mountain Spring",
        "query": "Anthargange Kolar",
        "lat": 13.142,
        "lng": 78.098,
        "blurb": "Rugged volcanic granite boulder mountain known for subterranean cave labyrinths and a perennial spring.",
        "details": [
          "Known as the 'Kashi of the South'; water flows continuously from the mouth of a stone bull (Basava) from an unknown subterranean source.",
          "A famous destination for caving and exploring pitch-dark geological boulder crevices."
        ]
      },
      {
        "id": "kgf",
        "cat": "heritage",
        "name": "Kolar Gold Fields (KGF) Heritage Area",
        "query": "Kolar Gold Fields Karnataka",
        "lat": 12.955,
        "lng": 78.271,
        "blurb": "One of the world's deepest and oldest gold mines, mined from the 2nd century until 2001, nicknamed 'Little England'.",
        "details": [
          "Reached depths of up to 3.2 kilometers beneath the surface, making it the second deepest mine in the world at its peak.",
          "Electrified in 1902 using hydroelectric power from the Shivanasamudra Falls—India's first transmission line."
        ]
      },
      {
        "id": "kurudumale-ganesha",
        "cat": "temple",
        "name": "Kurudumale Maha Ganapathi Temple",
        "query": "Kurudumale Ganesha Temple Kolar",
        "lat": 13.238,
        "lng": 78.348,
        "blurb": "Ancient temple housing a 13.5-foot monolithic black granite Ganesha idol, believed by tradition to have been consecrated by the Trimurtis.",
        "details": [
          "Attracts devotees before undertaking any new venture or business; adjacent Someshwara temple features half-finished intricate carvings attributed to master sculptor Jakanachari."
        ]
      },
      {
        "id": "avani-temple",
        "cat": "heritage",
        "name": "Avani Sita Temple & Hill (Gaya of the South)",
        "query": "Avani Temple Kolar",
        "lat": 13.105,
        "lng": 78.332,
        "blurb": "One of the few temples dedicated to Sita, set on a historic hill with ancient Nolamba-era shrines of the Ramalingeshwara group.",
        "details": [
          "Tradition identifies Avani with Valmiki's ashram where Lava and Kusha were born."
        ]
      },
      {
        "id": "kolar-markandeya-hill",
        "name": "Markandeya Hill & Reservoir",
        "lat": 12.985,
        "lng": 78.152,
        "alt": 55,
        "cat": "nature",
        "query": "Markandeya Hill Reservoir Kolar",
        "blurb": "Scenic rocky hill and check dam where sage Markandeya performed penance.",
        "details": [
          "Crowns a granite peak with an ancient Markandeshwara temple and panoramic vistas of Kolar district plains.",
          "Popular destination for quiet weekend treks and reservoir birdwatching."
        ]
      },
      {
        "id": "kolar-bethamangala-dam",
        "name": "Bethamangala Dam & Heritage Waterworks",
        "lat": 12.998,
        "lng": 78.318,
        "alt": 45,
        "cat": "nature",
        "query": "Bethamangala Dam Kolar",
        "blurb": "Historic 1904 reservoir built by Mysore kingdom to supply filtered water to KGF gold mines.",
        "details": [
          "Constructed across the Palar River, incorporating one of Asia's earliest modern sand water filtration plants.",
          "Peaceful lakeside promenade lined with historic brick pump stations and waterlily wetlands."
        ]
      },
      {
        "id": "kolar-budikote-fort",
        "name": "Budikote Fort (Birthplace of Hyder Ali)",
        "lat": 12.905,
        "lng": 78.136,
        "alt": 45,
        "cat": "heritage",
        "query": "Budikote Hyder Ali Birthplace Kolar",
        "blurb": "Historic granite fort where Mysore ruler Hyder Ali was born in 1721.",
        "details": [
          "Budikote ('Fort of Ash') preserves stone ramparts, historic watch bastions, and the Someshwara temple.",
          "Offers insight into 18th-century military history prior to the Anglo-Mysore wars."
        ]
      },
      {
        "id": "kolar-virupakshi-temple",
        "name": "Virupakshi Gopinatha Temple, Mulbagal",
        "lat": 13.145,
        "lng": 78.365,
        "alt": 45,
        "cat": "temple",
        "query": "Virupakshi Temple Mulbagal Kolar",
        "blurb": "13th-century Vijayanagara temple housing an extraordinary Surya-manifesting Shiva linga.",
        "details": [
          "Commissioned by chieftain Lakkanna Dandesha with ornate pillared halls resembling Hampi's architecture.",
          "The Virupaksha linga is famed for changing shade from blood red to white depending on sunlight."
        ]
      }
    ]
  },
  {
    "id": "koppal",
    "name": "Koppal",
    "division": "Kalyana Karnataka",
    "tagline": "Cradle of stone architecture, Kishkindha of the Ramayana, and Anegundi heritage",
    "bounds": {
      "north": 15.85,
      "south": 15.14,
      "east": 76.65,
      "west": 75.83
    },
    "home": {
      "center": {
        "lat": 15.353,
        "lng": 76.494,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "itagi-mahadeva",
        "cat": "heritage",
        "featured": true,
        "name": "Mahadeva Temple, Itagi",
        "query": "Mahadeva Temple Itagi Koppal",
        "lat": 15.467,
        "lng": 75.986,
        "blurb": "Celebrated in ancient inscriptions as 'Devalaya Chakravarti' (Emperor among Temples), built in 1112 CE.",
        "details": [
          "Constructed by Mahadeva, a commander in the Western Chalukya army under Emperor Vikramaditya VI.",
          "Renowned for its vast open hall (navaranga) resting on 64 intricately lathe-turned soapstone pillars.",
          "A benchmark of late Western Chalukyan architectural sophistication."
        ]
      },
      {
        "id": "anegundi",
        "cat": "heritage",
        "featured": true,
        "name": "Anegundi Ancient Heritage Town & Gagan Mahal",
        "query": "Anegundi Koppal Karnataka",
        "lat": 15.353,
        "lng": 76.494,
        "blurb": "Older than the Vijayanagara capital across the Tungabhadra River, identified with the monkey kingdom of Kishkindha.",
        "details": [
          "Features prehistoric rock art dating back over 3,000 years to the Iron and Neolithic Ages.",
          "Key sites include the Chintamani temple complex where Lord Rama met Sugriva, and the Gagan Mahal palace ruins."
        ]
      },
      {
        "id": "anjanadri-betta",
        "cat": "nature",
        "featured": true,
        "name": "Anjanadri Hill (Hanuman Janmasthana)",
        "query": "Anjanadri Hill Anegundi Koppal",
        "lat": 15.352,
        "lng": 76.471,
        "blurb": "Sacred hilltop temple recognized by tradition as the birthplace of Lord Hanuman.",
        "details": [
          "A climb of 575 stone steps leads to the hilltop temple offering a 360-degree panoramic vista over the Tungabhadra paddy fields.",
          "At the base lies Pampa Sarovar, one of the five sacred lakes (Pancha Sarovar) mentioned in Hindu epics."
        ]
      },
      {
        "id": "sanapur-lake",
        "cat": "nature",
        "name": "Sanapur Lake & Bouldering Canyon",
        "query": "Sanapur Lake Koppal",
        "lat": 15.372,
        "lng": 76.442,
        "blurb": "Deep blue freshwater irrigation lake surrounded by gigantic granite balancing boulders.",
        "details": [
          "World-renowned among bouldering enthusiasts; popular for circular coracle boat rides and cliff-jumping."
        ]
      },
      {
        "id": "koppal-fort",
        "cat": "heritage",
        "name": "Koppal Fort (Bahadur Banda)",
        "query": "Koppal Fort Karnataka",
        "lat": 15.347,
        "lng": 76.155,
        "blurb": "Historic fort soaring 400 feet atop a granite hill, strengthened by French engineers for Tipu Sultan in 1786.",
        "details": [
          "Referred to by Sir John Malcolm as one of the strongest forts in the Deccan."
        ]
      },
      {
        "id": "huligemma-temple",
        "cat": "temple",
        "name": "Sri Huligemma Devi Temple, Huligi",
        "query": "Huligemma Temple Huligi Koppal",
        "lat": 15.312,
        "lng": 76.325,
        "blurb": "Venerated 13th-century goddess temple on the banks of the Tungabhadra River, drawing massive congregations.",
        "details": [
          "Features a massive 25-foot monolithic flag post (Dhwaja Stambha) overlooking the river."
        ]
      },
      {
        "id": "koppal-pampa-sarovar",
        "name": "Pampa Sarovar Sacred Pond, Anegundi",
        "lat": 15.352,
        "lng": 76.468,
        "alt": 45,
        "cat": "temple",
        "query": "Pampa Sarovar Anegundi Koppal",
        "blurb": "One of the five sacred Sarovars of India, linked to Shabari's ashram in Ramayana.",
        "details": [
          "Hidden in a picturesque valley south of the Tungabhadra River, blooming with sacred pink waterlilies.",
          "Adjacent to cave shrines dedicated to Goddess Pampa (consort of Lord Shiva) and Lord Rama."
        ]
      },
      {
        "id": "koppal-chintamani-temple",
        "name": "Chintamani Temple & Sugriva Cave",
        "lat": 15.351,
        "lng": 76.471,
        "alt": 45,
        "cat": "heritage",
        "query": "Chintamani Temple Anegundi Koppal",
        "blurb": "Riverside temple complex where Lord Rama is believed to have met Sugriva to plan Vali's vanquishing.",
        "details": [
          "Perched right on the granite boulder rocks of the Tungabhadra riverfront in ancient Kishkindha.",
          "Contains natural rock caves with petroglyphic footprint marks and panoramic views of Hampi across the river."
        ]
      },
      {
        "id": "koppal-munirabad-gardens",
        "name": "Munirabad Tungabhadra Left Bank Promenade",
        "lat": 15.295,
        "lng": 76.338,
        "alt": 45,
        "cat": "nature",
        "query": "Munirabad TB Dam Koppal",
        "blurb": "Lush terraced gardens and Japanese style landscaped parks overlooking the Tungabhadra reservoir.",
        "details": [
          "Located on the Koppal side of the monumental Tungabhadra Dam, featuring fountains and shaded gazebos.",
          "Favorite evening family viewpoint to enjoy the sunset over the massive 378 sq km inland lake."
        ]
      },
      {
        "id": "koppal-kuknur-navalinga",
        "name": "Kuknur Navalinga Temple Complex",
        "lat": 15.4897,
        "lng": 75.9939,
        "alt": 45,
        "cat": "heritage",
        "query": "Navalinga Temple Kuknur Koppal",
        "blurb": "Cluster of nine 9th-century shrines exhibiting early Rashtrakuta stone architecture.",
        "details": [
          "Each of the nine shrines has an independent linga and stone vimana, clustered around communal pillared mantapas.",
          "Represents the transition from Early Chalukyan to Late Rashtrakuta Dravidian building techniques."
        ]
      }
    ]
  },
  {
    "id": "mandya",
    "name": "Mandya",
    "division": "Mysuru Division",
    "tagline": "The sugar bowl of Karnataka, sacred islands of the Kaveri, and roaring waterfalls",
    "bounds": {
      "north": 13.05,
      "south": 12.15,
      "east": 77.32,
      "west": 76.35
    },
    "home": {
      "center": {
        "lat": 12.4245,
        "lng": 76.685,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "srirangapatna-temple",
        "cat": "temple",
        "featured": true,
        "name": "Sri Ranganathaswamy Temple, Srirangapatna",
        "query": "Sri Ranganathaswamy Temple Srirangapatna",
        "lat": 12.4245,
        "lng": 76.685,
        "blurb": "Revered island shrine on the River Kaveri (Adi Ranga), consecrated by the Western Ganga dynasty in 984 CE.",
        "details": [
          "First of the three holy island shrines of Lord Ranganatha along the course of the River Kaveri (Adi Ranga, Madhya Ranga, Anthya Ranga).",
          "Expanded across dynasties: Gangas, Hoysalas, Vijayanagara rulers, and the Mysore Wadiyars.",
          "Srirangapatna island was the fortified capital of Tipu Sultan and Hyder Ali."
        ]
      },
      {
        "id": "shivanasamudra-falls",
        "cat": "nature",
        "featured": true,
        "name": "Shivanasamudra Falls (Gaganachukki & Bharachukki)",
        "query": "Shivanasamudra Falls Karnataka",
        "lat": 12.296,
        "lng": 77.171,
        "blurb": "Twin waterfalls where the River Kaveri cascades over 98-metre cliffs, site of Asia's first hydroelectric power station (1902).",
        "details": [
          "The Kaveri splits around the island of Shivanasamudra into two roaring torrents: Gaganachukki and Bharachukki.",
          "In 1902, Sir K. Seshadri Iyer established the Shivanasamudra Hydroelectric Station to supply electric power to the Kolar Gold Fields."
        ]
      },
      {
        "id": "krs-dam",
        "cat": "nature",
        "featured": true,
        "name": "Krishna Raja Sagara Dam & Brindavan Gardens",
        "query": "KRS Dam Brindavan Gardens Mandya",
        "lat": 12.425,
        "lng": 76.573,
        "blurb": "Historic gravity dam built by Sir M. Visvesvaraya in 1932, adorned with the terrace fountains of Brindavan Gardens.",
        "details": [
          "Built across the Kaveri using 'surki' mortar (lime and brick dust) without Portland cement.",
          "The terrace gardens below feature illuminated dancing musical fountains laid out in symmetric Mughal style."
        ]
      },
      {
        "id": "dariya-daulat",
        "cat": "heritage",
        "featured": true,
        "name": "Dariya Daulat Bagh (Tipu's Summer Palace)",
        "query": "Daria Daulat Bagh Srirangapatna",
        "lat": 12.418,
        "lng": 76.696,
        "blurb": "Teakwood palace built in 1784, entirely covered with Persian frescoes portraying battles and court life.",
        "details": [
          "Constructed in Indo-Islamic style on the banks of the Kaveri.",
          "The exterior walls feature vibrant murals depicting the Battle of Pollilur (1780) where Hyder Ali and Tipu defeated British forces."
        ]
      },
      {
        "id": "gumbaz-srirangapatna",
        "cat": "heritage",
        "name": "Gumbaz (Mausoleum of Tipu Sultan & Hyder Ali)",
        "query": "Gumbaz Srirangapatna Mandya",
        "lat": 12.412,
        "lng": 76.714,
        "blurb": "Imposing dome tomb resting on 36 polished black granite pillars, housing the graves of Tipu Sultan, Hyder Ali, and Fatima Fakhr-un-Nisa.",
        "details": [
          "Built by Tipu Sultan in 1784 in an ornamental cypress garden (Lalbagh).",
          "The ebony doors inlaid with ivory were presented by Lord Dalhousie."
        ]
      },
      {
        "id": "ranganathittu",
        "cat": "nature",
        "featured": true,
        "name": "Ranganathittu Bird Sanctuary",
        "query": "Ranganathittu Bird Sanctuary Srirangapatna",
        "lat": 12.424,
        "lng": 76.657,
        "blurb": "Six islet sanctuaries on the Kaveri River, designated as a Ramsar Wetland and home to 170+ bird species and mugger crocodiles.",
        "details": [
          "Declared a sanctuary in 1940 at the urging of ornithologist Dr. Salim Ali.",
          "Boating tours navigate past nesting colonies of painted storks, spoonbills, and pelicans alongside basking marsh crocodiles."
        ]
      },
      {
        "id": "melukote-cheluvanarayana",
        "cat": "temple",
        "featured": true,
        "name": "Cheluvanarayana Swamy Temple, Melukote",
        "query": "Cheluvanarayana Swamy Temple Melukote",
        "lat": 12.665,
        "lng": 76.652,
        "blurb": "Sacred Sri Vaishnava temple town where philosopher Sri Ramanujacharya lived for 12 years in the 12th century.",
        "details": [
          "Celebrated for the Vairamudi Brahmotsava festival when the deity is adorned with the historic diamond crown.",
          "Nearby Yoga Narasimha temple crowns the rocky Yadugiri hill summit overlooking the vast Kalyani pushkarini."
        ]
      },
      {
        "id": "kokkare-bellur",
        "cat": "nature",
        "name": "Kokkare Bellur Pelican & Stork Sanctuary",
        "query": "Kokkare Bellur Pelican Sanctuary Mandya",
        "lat": 12.615,
        "lng": 77.085,
        "blurb": "Unique rural village where spot-billed pelicans and painted storks nest in harmony on the trees of villagers' backyards.",
        "details": [
          "A rare example of community-driven conservation where local farmers protect the birds and value their guano as fertilizer."
        ]
      },
      {
        "id": "mandya-triveni-sangama",
        "name": "Triveni Sangama, Srirangapatna",
        "lat": 12.418,
        "lng": 76.702,
        "alt": 40,
        "cat": "nature",
        "query": "Triveni Sangama Srirangapatna Mandya",
        "blurb": "Sacred confluence of three holy rivers: Cauvery, Lokapavani, and mythical subterranean Hemavathi.",
        "details": [
          "Revered pilgrimage bathing ghat where pilgrims perform ancestral rites and sacred dips.",
          "Fringed by ancient stone steps, banyan groves, and temples at the eastern tip of Srirangapatna island."
        ]
      },
      {
        "id": "mandya-col-bailey-dungeon",
        "name": "Colonel Bailey's Dungeon, Srirangapatna",
        "lat": 12.426,
        "lng": 76.696,
        "alt": 40,
        "cat": "heritage",
        "query": "Colonel Baillie Dungeon Srirangapatna Mandya",
        "blurb": "Subterranean brick-vaulted prison where Tipu Sultan held captured British officers.",
        "details": [
          "Named after British Colonel William Baillie who died in captivity here in 1782 following the Battle of Pollilur.",
          "Features iron wall rings where prisoners were chained at neck level during monsoon inundations."
        ]
      },
      {
        "id": "mandya-thonnur-kere",
        "name": "Thonnur Kere (Moti Talab Sacred Lake)",
        "lat": 12.5689,
        "lng": 76.635,
        "alt": 45,
        "cat": "nature",
        "query": "Thonnur Kere Pandavapura Mandya",
        "blurb": "Massive crystal-clear historic lake built in the 12th century by Hoysala King Vishnuvardhana.",
        "details": [
          "Named 'Moti Talab' (Lake of Pearls) by Mughal general Nasir Jung due to its exceptionally pure water.",
          "Surrounded by rocky hills, ancient Ramanujacharya monuments, and cliff swimming spots."
        ]
      },
      {
        "id": "mandya-basaralu-temple",
        "name": "Basaralu Mallikarjuna Temple",
        "lat": 12.712,
        "lng": 76.815,
        "alt": 45,
        "cat": "heritage",
        "query": "Mallikarjuna Temple Basaralu Mandya",
        "blurb": "1234 CE Hoysala trikuta temple celebrated for exceptional outer wall relief sculptures.",
        "details": [
          "Commissioned by Harihara Dandanayaka under Hoysala King Narasimha II.",
          "Contains 16-armed Shiva dancing on Andhakasura and intricate friezes depicting scenes from the Bhagavata Purana."
        ]
      }
    ]
  },
  {
    "id": "mysuru",
    "name": "Mysuru (Mysore)",
    "division": "Mysuru Division",
    "tagline": "The City of Palaces, cultural capital of Karnataka, and heritage heartland",
    "bounds": {
      "north": 12.59,
      "south": 11.85,
      "east": 77.18,
      "west": 76.15
    },
    "home": {
      "center": {
        "lat": 12.3051,
        "lng": 76.6551,
        "altitude": 0
      },
      "range": 5000,
      "tilt": 58,
      "heading": 25
    },
    "landmarks": [
      {
        "id": "mysore-palace",
        "cat": "heritage",
        "featured": true,
        "name": "Mysore Palace (Amba Vilas)",
        "query": "Mysore Palace Sayyaji Rao Road Mysuru",
        "lat": 12.3051,
        "lng": 76.6551,
        "blurb": "The official residence of the Wadiyar dynasty, renowned for its Indo-Saracenic architecture and grand Dasara celebrations.",
        "details": [
          "Designed by British architect Henry Irwin and completed in 1912 after the old wooden palace burned down.",
          "Illuminated with nearly 100,000 light bulbs on Sundays and public holidays, drawing millions of visitors each year.",
          "Houses the famous Golden Throne (Chinnada Simhasana) and the ornate Durbar Hall with stained-glass ceilings."
        ]
      },
      {
        "id": "chamundi-hill",
        "cat": "temple",
        "featured": true,
        "name": "Chamundeshwari Temple & Chamundi Hill",
        "query": "Chamundeshwari Temple Chamundi Hill Mysuru",
        "lat": 12.2745,
        "lng": 76.671,
        "blurb": "Ancient hilltop temple dedicated to the patron goddess of Mysuru, overlooking the palace city below.",
        "details": [
          "Located atop the 1,000-metre Chamundi Hill; an ancient stone stairway of 1,008 steps leads to the summit.",
          "Halfway up stands a massive 15-foot monolithic statue of Nandi the bull, carved out of black granite in 1659.",
          "The seven-story gopuram was built by Krishnaraja Wadiyar III in 1827."
        ]
      },
      {
        "id": "st-philomenas-mysuru",
        "cat": "faith",
        "featured": true,
        "name": "St. Philomena's Cathedral",
        "query": "St Philomena's Cathedral Mysuru",
        "lat": 12.321,
        "lng": 76.658,
        "blurb": "Neo-Gothic Catholic cathedral built in 1936, inspired by Germany's Cologne Cathedral with 175-foot spires.",
        "details": [
          "One of the tallest churches in Asia, built under the patronage of Maharaja Nalwadi Krishnaraja Wadiyar.",
          "The crypt contains a relic of 3rd-century Saint Philomena and stained glass windows imported from France."
        ]
      },
      {
        "id": "mysore-zoo",
        "cat": "nature",
        "featured": true,
        "name": "Sri Chamarajendra Zoological Gardens (Mysore Zoo)",
        "query": "Mysore Zoo Mysuru Karnataka",
        "lat": 12.3025,
        "lng": 76.666,
        "blurb": "One of the oldest and most acclaimed zoological gardens in India, established in 1892 by Maharaja Chamaraja Wadiyar.",
        "details": [
          "Sprawls over 157 acres adjacent to Karanji Lake, home to hundreds of rare animal species in naturalistic enclosures.",
          "Pioneered animal adoption schemes and international zoo breeding exchanges in India."
        ]
      },
      {
        "id": "jaganmohan-palace",
        "cat": "heritage",
        "name": "Jaganmohan Palace & Art Gallery",
        "query": "Jaganmohan Palace Art Gallery Mysuru",
        "lat": 12.3075,
        "lng": 76.6495,
        "blurb": "Historic royal palace built in 1861, housing one of the largest art collections in South India including Raja Ravi Varma classics.",
        "details": [
          "Served as the temporary royal residence while the new Amba Vilas Palace was being constructed.",
          "Houses over 2,000 paintings, including iconic masterpieces such as 'Glow of Hope' (Lady with the Lamp) by S.L. Haldankar."
        ]
      },
      {
        "id": "somanathapura-temple",
        "cat": "heritage",
        "featured": true,
        "name": "Chennakesava Temple, Somanathapura",
        "query": "Chennakesava Temple Somanathapura Mysuru",
        "lat": 12.276,
        "lng": 76.905,
        "blurb": "UNESCO World Heritage trikuta Hoysala temple completed in 1268 CE, flawless in symmetry and soapstone carving detail.",
        "details": [
          "Built by Somnatha, a commander of Hoysala King Narasimha III.",
          "Features three consecrated sanctums under stellate shikharas and wall friezes detailing epics from Indian mythology."
        ]
      },
      {
        "id": "nanjangud-srikanteshwara",
        "cat": "temple",
        "featured": true,
        "name": "Srikanteshwara Temple, Nanjangud",
        "query": "Srikanteshwara Temple Nanjangud Mysuru",
        "lat": 12.118,
        "lng": 76.682,
        "blurb": "Known as Dakshina Kashi on the Kapila River, housing the healing Shiva deity Nanjundeshwara.",
        "details": [
          "One of the largest temple complexes in Karnataka covering over 50,000 square feet, with a massive nine-story gopuram.",
          "Tipu Sultan called the deity 'Hakim Nanjunda' after prayer water cured his favorite royal elephant's eye ailment."
        ]
      },
      {
        "id": "talakad-temples",
        "cat": "heritage",
        "name": "Talakad Buried Sand Temples",
        "query": "Talakadu Temples Mysuru",
        "lat": 12.195,
        "lng": 77.032,
        "blurb": "Ancient Ganga dynasty capital on the Kaveri, home to over 30 stone temples buried under desert-like sand dunes.",
        "details": [
          "Tied to the legendary 17th-century curse of Alamelamma ('May Talakad turn to sand, Malangi become a whirlpool, Mysore kings have no heirs').",
          "The Panchalingas of Talakad are excavated from sand and worshipped during the historic Panchalinga Darshana festival."
        ]
      },
      {
        "id": "lalitha-mahal",
        "cat": "heritage",
        "name": "Lalitha Mahal Palace",
        "query": "Lalitha Mahal Palace Hotel Mysuru",
        "lat": 12.301,
        "lng": 76.691,
        "blurb": "Pure white Renaissance-revival palace built in 1921 by Krishnaraja Wadiyar IV, inspired by St. Paul's Cathedral in London.",
        "details": [
          "Built at the foot of Chamundi Hill with imported Italian marble floors, crystal chandeliers, and a central copper dome."
        ]
      },
      {
        "id": "karanji-lake",
        "cat": "nature",
        "name": "Karanji Lake & Nature Park",
        "query": "Karanji Lake Mysuru",
        "lat": 12.303,
        "lng": 76.674,
        "blurb": "Picturesque 90-acre lake featuring India's largest walk-through aviary, butterfly park, and migratory heronry.",
        "details": [
          "Surrounded by landscaped wooden boardwalks and an observation watchtower overlooking nesting pelicans and painted storks."
        ]
      },
      {
        "id": "mysuru-krs-backwaters",
        "name": "KRS Backwaters & Submerged Venugopala Swamy",
        "lat": 12.435,
        "lng": 76.538,
        "alt": 45,
        "cat": "heritage",
        "query": "Venugopala Swamy Temple Hosa Kannambadi KRS Mysuru",
        "blurb": "Reconstructed 12th-century Hoysala temple relocated block-by-block from the KRS lake bed.",
        "details": [
          "Originally submerged during the building of KRS Dam in 1909, meticulously rehabilitated on a high promontory.",
          "Surrounded by calm water on three sides, offering magical sunset silhouettes."
        ]
      },
      {
        "id": "mysuru-balmuri-falls",
        "name": "Balmuri & Edmuri Falls (Cauvery Cascade)",
        "lat": 12.392,
        "lng": 76.581,
        "alt": 40,
        "cat": "nature",
        "query": "Balmuri Falls Srirangapatna Mysuru",
        "blurb": "Curved 6-foot step cascade across the Cauvery River, a legendary Indian cinema shooting location.",
        "details": [
          "Created by a 17th-century masonry check dam diverting water into surrounding irrigation canals.",
          "A favorite splash and picnic spot where the river curls smoothly around lush coconut fields."
        ]
      },
      {
        "id": "mysuru-kukkarahalli-lake",
        "name": "Kukkarahalli Lake Nature Reserve",
        "lat": 12.311,
        "lng": 76.632,
        "alt": 40,
        "cat": "nature",
        "query": "Kukkarahalli Lake Mysuru",
        "blurb": "120-acre lung space and wetland bird habitat in the heart of Mysore University campus.",
        "details": [
          "Created in 1864 by Mummadi Krishnaraja Wadiyar to irrigate 10,000 acres of farmland.",
          "Beloved morning walking trail visited by spot-billed pelicans, painted storks, and cormorants."
        ]
      },
      {
        "id": "mysuru-jayalakshmi-vilas",
        "name": "Jayalakshmi Vilas Mansion & Folklore Museum",
        "lat": 12.308,
        "lng": 76.628,
        "alt": 40,
        "cat": "civic",
        "query": "Jayalakshmi Vilas Mansion Mysore",
        "blurb": "1905 royal neoclassical palace housing Asia's largest collection of folk art and artifacts.",
        "details": [
          "Built for Princess Jayalakshmi Ammani, featuring 125 rooms with ornate timber pillars, stained glass, and pediments.",
          "Houses over 6,500 exhibits of traditional puppets, leather shadow figures, tribal artifacts, and brassware."
        ]
      }
    ]
  },
  {
    "id": "raichur",
    "name": "Raichur",
    "division": "Kalyana Karnataka",
    "tagline": "The historic doab between Krishna and Tungabhadra rivers with medieval stone citadels",
    "bounds": {
      "north": 16.55,
      "south": 15.8,
      "east": 77.65,
      "west": 76.28
    },
    "home": {
      "center": {
        "lat": 16.204,
        "lng": 77.355,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "raichur-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Raichur Fort & Sailani Burj",
        "query": "Raichur Fort Raichur Karnataka",
        "lat": 16.204,
        "lng": 77.355,
        "blurb": "Historic fortress built in 1294 CE by the Kakatiyas, fought over in the historic Battle of Raichur (1520).",
        "details": [
          "Built with massive mortarless stone blocks, some measuring over 40 feet long and weighing tons.",
          "Contains stone inscriptions in Sanskrit, Telugu, Persian and Arabic tracing Kakatiya, Vijayanagara and Bahmani control.",
          "Famous for the Sailani Burj bastion and the Ramgad hillock summit."
        ]
      },
      {
        "id": "ek-minar-masjid",
        "cat": "heritage",
        "name": "Ek Minar Ki Masjid",
        "query": "Ek Minar Ki Masjid Raichur",
        "lat": 16.208,
        "lng": 77.362,
        "blurb": "Unique Bahmani mosque built in 1513 CE featuring a single 65-foot minaret with internal winding stairs.",
        "details": [
          "Built during the reign of Mahmud Shah Bahmani.",
          "The cylindrical minaret was influenced by Persian architecture and offers a high vantage point across Raichur."
        ]
      },
      {
        "id": "aam-talab",
        "cat": "nature",
        "name": "Aam Talab (Mango Lake Promenade)",
        "query": "Aam Talab Lake Raichur",
        "lat": 16.195,
        "lng": 77.348,
        "blurb": "Historic scenic lake serving as Raichur's central recreational water body and sunset point.",
        "details": [
          "Constructed during medieval times to catch runoff from surrounding granite hills.",
          "Features landscaped lakeside promenades, boating and lighting."
        ]
      },
      {
        "id": "gabbur-temples",
        "cat": "heritage",
        "featured": true,
        "name": "Gabbur Heritage Temples (Town of Temples)",
        "query": "Gabbur Temples Deodurga Raichur",
        "lat": 16.168,
        "lng": 77.078,
        "blurb": "Historic village nicknamed the 'Temple Town' of Raichur with over 30 medieval Chalukyan stone shrines.",
        "details": [
          "Highlights include the Male Shankara, Venkateshwara, and Ishwara temples, featuring ornate stone pillars and inscriptions."
        ]
      },
      {
        "id": "deosugur-temple",
        "cat": "temple",
        "name": "Deosugur Sri Sugureshwara Temple",
        "query": "Sugureshwara Temple Deosugur Raichur",
        "lat": 16.248,
        "lng": 77.495,
        "blurb": "Ancient pilgrimage temple on the banks of the Krishna River, dedicated to Veerabhadra (Sugureshwara).",
        "details": [
          "The annual Jathra in December gathers over two lakh devotees from Karnataka, Telangana, and Andhra Pradesh."
        ]
      },
      {
        "id": "raichur-jaladurga-fort",
        "name": "Jaladurga Island Fort (Krishna Gorge)",
        "lat": 16.254,
        "lng": 76.421,
        "alt": 55,
        "cat": "heritage",
        "query": "Jaladurga Fort Lingsugur Raichur",
        "blurb": "Impregnable island citadel built on a steep granite cliff in the roaring gorge of Krishna River.",
        "details": [
          "Constructed by Adil Shahi rulers, surrounded by 300-foot vertical cliffs and churning white water rapids.",
          "Accessible via a narrow footbridge, offering one of the most dramatic canyon vistas in Karnataka."
        ]
      },
      {
        "id": "raichur-maski-site",
        "name": "Maski Archaeological Site & Ashokan Edict",
        "lat": 15.962,
        "lng": 76.662,
        "alt": 45,
        "cat": "heritage",
        "query": "Maski Ashokan Inscription Raichur",
        "blurb": "Pivotal site where Emperor Ashoka was first identified by his personal name 'Devanampriya Asoka'.",
        "details": [
          "C. Beadon discovered the rock edict in 1915, unlocking crucial epigraphical proof of Indian history.",
          "Surrounded by prehistoric rock shelters, gold-working crucibles, and Neolithic burial cairns."
        ]
      },
      {
        "id": "raichur-mudgal-fort",
        "name": "Mudgal Fort & Historic Moat",
        "lat": 16.0119,
        "lng": 76.442,
        "alt": 45,
        "cat": "heritage",
        "query": "Mudgal Fort Raichur",
        "blurb": "Vast medieval fortress that was the focal prize of the Bahmani-Vijayanagara wars.",
        "details": [
          "Features double line of stone walls, massive circular bastions, and a wide wet moat fed by local reservoirs.",
          "Houses ancient cannon posts, a 16th-century Catholic church, and royal palace pavilions."
        ]
      },
      {
        "id": "raichur-manvi-hill-temple",
        "name": "Manvi Mallikarjuna Hill Temple & Fort",
        "lat": 15.992,
        "lng": 77.048,
        "alt": 50,
        "cat": "temple",
        "query": "Mallikarjuna Temple Manvi Raichur",
        "blurb": "Hilltop shrine and medieval ruins overlooking the paddy fields of Manvi.",
        "details": [
          "Perched atop a boulder ridge, reached by 300 stone steps cut into granite cliffs.",
          "Celebrates an annual jathra festival drawing thousands of devotees across the Raichur doab."
        ]
      }
    ]
  },
  {
    "id": "ramanagara",
    "name": "Ramanagara",
    "division": "Bengaluru Division",
    "tagline": "The Silk City, granite rock climbing hub, and Ramadevara Betta vultures",
    "bounds": {
      "north": 13.07,
      "south": 12.11,
      "east": 77.64,
      "west": 77.04
    },
    "home": {
      "center": {
        "lat": 12.748,
        "lng": 77.296,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 60,
      "heading": 20
    },
    "landmarks": [
      {
        "id": "ramadevara-betta",
        "cat": "nature",
        "featured": true,
        "name": "Ramadevara Betta (Vulture Sanctuary)",
        "query": "Ramadevara Betta Ramanagara",
        "lat": 12.748,
        "lng": 77.296,
        "blurb": "Dramatic boulder hill famed as the shooting location for the film 'Sholay' and India's only vulture sanctuary.",
        "details": [
          "Notified in 2012 as India's first sanctuary for critically endangered long-billed and Egyptian vultures.",
          "Immortalized as the fictional village of Ramgarh in the 1975 Hindi cinema classic 'Sholay'.",
          "A climb of 400 stone steps leads to an ancient hilltop temple of Lord Rama."
        ]
      },
      {
        "id": "janapada-loka",
        "cat": "heritage",
        "featured": true,
        "name": "Janapada Loka (Folk World)",
        "query": "Janapada Loka Ramanagara",
        "lat": 12.712,
        "lng": 77.253,
        "blurb": "Expansive 15-acre open-air museum dedicated to the folk arts, music, dance and craft traditions of Karnataka.",
        "details": [
          "Founded by folklorist H. L. Nage Gowda in 1994.",
          "Houses over 5,000 authentic artifacts including Yakshagana headgear, leather shadow puppets, traditional farming implements, and rural village huts."
        ]
      },
      {
        "id": "savandurga",
        "cat": "nature",
        "featured": true,
        "name": "Savandurga (Asia's Largest Monolith Hill)",
        "query": "Savandurga Hill Ramanagara",
        "lat": 12.918,
        "lng": 77.295,
        "blurb": "Colossal monolith rock rising 1,226 metres above sea level, fortified by Kempe Gowda and Tipu Sultan.",
        "details": [
          "Composed of two massive granite domes: Karigudda (black hill) and Biligudda (white hill).",
          "Tipu Sultan considered it an impregnable citadel until it was stormed by Lord Cornwallis in 1791; now a world-class rock climbing destination."
        ]
      },
      {
        "id": "kanva-reservoir",
        "cat": "nature",
        "name": "Kanva Reservoir",
        "query": "Kanva Reservoir Ramanagara",
        "lat": 12.7293,
        "lng": 77.1982,
        "blurb": "Serene irrigation reservoir formed by a dam across the Kanva River in 1946, surrounded by tranquil hills.",
        "details": [
          "Named after the Vedic sage Kanva who is believed to have resided in these forested hills.",
          "A popular weekend camping and bird-watching retreat close to Bengaluru."
        ]
      },
      {
        "id": "mekedatu",
        "cat": "nature",
        "featured": true,
        "name": "Mekedatu (Goat's Leap) & Sangama",
        "query": "Mekedatu Sangama Kanakapura",
        "lat": 12.261,
        "lng": 77.442,
        "blurb": "Dramatic deep river gorge where the mighty Kaveri flows through a narrow rocky cleft barely wide enough for a goat to leap.",
        "details": [
          "Located downstream from the confluence (Sangama) of the Kaveri and Arkavathi rivers in Kanakapura taluk.",
          "The roaring river cuts through sheer granite walls into whirlpool gorges."
        ]
      },
      {
        "id": "channapatna-craft",
        "cat": "city",
        "name": "Channapatna Wooden Toy Crafts Center",
        "query": "Channapatna Crafts Park Ramanagara",
        "lat": 12.651,
        "lng": 77.205,
        "blurb": "Known worldwide as 'Gombegala Ooru' (Toy Town), protected under a Geographical Indication (GI) tag.",
        "details": [
          "The traditional lacquerware toy craft was introduced by Tipu Sultan who invited Persian artisans to train local craftspeople in ivory-wood lathing."
        ]
      },
      {
        "id": "ramanagara-revanasiddeshwara",
        "name": "Revanasiddeshwara Betta (SRS Hills)",
        "lat": 12.632,
        "lng": 77.248,
        "alt": 60,
        "cat": "temple",
        "query": "Sri Revanna Siddeshwara Hills Ramanagara",
        "blurb": "Prominent 3,000-foot monolithic hill crowned by the cave temple of saint Sri Revanna Siddeshwara.",
        "details": [
          "Challenging granite climb via carved stone stairways, offering sweeping views of Ramanagara boulder ranges.",
          "Revered pilgrimage stop dedicated to the 11th-century Veerashaiva saint philosopher."
        ]
      },
      {
        "id": "ramanagara-manchanabele-dam",
        "name": "Manchanabele Dam & Arkavathi Gorge",
        "lat": 12.875,
        "lng": 77.335,
        "alt": 50,
        "cat": "nature",
        "query": "Manchanabele Dam Ramanagara",
        "blurb": "Scenic water reservoir set deep in the shadow of Savandurga monolithic rock.",
        "details": [
          "Constructed across the Arkavathi River, creating a vast reflective lake framed by scrub-covered granite peaks.",
          "Famous spot for birdwatching, sunrise photography, and adventure camps."
        ]
      },
      {
        "id": "kengal-anjaneya",
        "name": "Kengal Anjaneya Swamy Temple, Channapatna",
        "lat": 12.684,
        "lng": 77.218,
        "alt": 45,
        "cat": "temple",
        "query": "Kengal Anjaneya Swamy Temple Channapatna Ramanagara",
        "blurb": "Historic temple enshrining a red-tinted monolith Hanuman carved on granite rock.",
        "details": [
          "Consecrated by saint Sri Vyasaraja, rajaguru of the Vijayanagara Empire.",
          "Renowned roadside pilgrimage sanctuary on the Bengaluru-Mysuru highway."
        ]
      },
      {
        "id": "ramanagara-bilikal-betta",
        "name": "Bilikal Rangaswamy Betta (Elephant Forest Peak)",
        "lat": 12.548,
        "lng": 77.485,
        "alt": 65,
        "cat": "nature",
        "query": "Bilikal Rangaswamy Betta Ramanagara",
        "blurb": "3,780-foot highest peak in Ramanagara, surrounded by dense elephant-inhabited reserve forests.",
        "details": [
          "Capped by a huge white-faced rock and the shrine of Lord Rangaswamy underneath a massive boulder.",
          "Offers 360-degree panoramic sights looking toward Bannerghatta, Kanakapura, and Kanva valleys."
        ]
      }
    ]
  },
  {
    "id": "shivamogga",
    "name": "Shivamogga (Shimoga)",
    "division": "Malenadu & Hills",
    "tagline": "Gateway to Malenadu, world-famous Jog Falls, and sacred Sharavathi rainforests",
    "bounds": {
      "north": 14.45,
      "south": 13.37,
      "east": 76.15,
      "west": 74.66
    },
    "home": {
      "center": {
        "lat": 13.935,
        "lng": 75.575,
        "altitude": 0
      },
      "range": 5500,
      "tilt": 62,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "jog-falls",
        "cat": "nature",
        "featured": true,
        "name": "Jog Falls (Gerosoppa)",
        "query": "Jog Falls Sagara Shivamogga",
        "lat": 14.2285,
        "lng": 74.8125,
        "blurb": "India's second-highest plunge waterfall, dropping 253 metres (830 ft) in four distinct cascades: Raja, Roarer, Rocket, and Rani.",
        "details": [
          "Formed by the Sharavathi River plunging off a sheer precipice in the Western Ghats.",
          "Raja falls in an unbroken column; Roarer rushes into a rocky cavern; Rocket shoots out at high velocity; Rani glides gracefully in a sheet of foam.",
          "A walkway of 1,400 steps leads down to the mist-drenched bottom pool."
        ]
      },
      {
        "id": "kodachadri",
        "cat": "nature",
        "featured": true,
        "name": "Kodachadri Peak & Sarvajna Peetha",
        "query": "Kodachadri Peak Hosanagara Shivamogga",
        "lat": 13.8565,
        "lng": 74.872,
        "blurb": "Dense biodiversity hotspot peak (1,343 m) where philosopher Adi Shankara meditated at the stone Sarvajna Peetha.",
        "details": [
          "Declared a natural heritage site in Karnataka, surrounded by dense tropical shola forests.",
          "At the windy summit stands the Sarvajna Peetha, a stone structure marking Adi Shankara's meditation spot.",
          "Offers views extending to the Arabian Sea horizon on clear evenings."
        ]
      },
      {
        "id": "sakrebyle",
        "cat": "nature",
        "featured": true,
        "name": "Sakrebyle Elephant Camp",
        "query": "Sakrebyle Elephant Camp Shivamogga",
        "lat": 13.882,
        "lng": 75.525,
        "blurb": "Forest department camp on the Tunga River backwaters where captive elephants bathe and are trained.",
        "details": [
          "Located 14 km from Shivamogga city along the picturesque Tunga reservoir.",
          "Visitors can watch elephants being scrubbed and bathed in the river by mahouts every morning."
        ]
      },
      {
        "id": "shivappa-nayaka-palace",
        "cat": "heritage",
        "name": "Shivappa Nayaka Palace Museum",
        "query": "Shivappa Nayaka Palace Shivamogga",
        "lat": 13.928,
        "lng": 75.568,
        "blurb": "17th-century rosewood palace built by Keladi ruler Shivappa Nayaka on the banks of the Tunga River.",
        "details": [
          "Built with solid rosewood pillars, intricately carved balconies, and stone arches.",
          "Now maintained by the Karnataka Department of Archaeology, exhibiting stone sculptures, coins, and battle weapons from the Keladi era."
        ]
      },
      {
        "id": "keladi-temple",
        "cat": "heritage",
        "featured": true,
        "name": "Keladi Rameshwara Temple",
        "query": "Rameshwara Temple Keladi Sagara Shivamogga",
        "lat": 14.221,
        "lng": 75.012,
        "blurb": "First capital of the Keladi Nayakas, featuring a 16th-century trikuta temple of Rameshwara, Veerabhadra, and Parvati.",
        "details": [
          "Contains a remarkable wooden ceiling carved with the Gandabherunda (two-headed mythological bird), the royal emblem of Karnataka."
        ]
      },
      {
        "id": "ikkeri-temple",
        "cat": "heritage",
        "featured": true,
        "name": "Ikkeri Aghoreshwara Temple",
        "query": "Aghoreshwara Temple Ikkeri Sagara",
        "lat": 14.128,
        "lng": 75.018,
        "blurb": "Granite temple of the Keladi Nayakas blending Hoysala, Dravidian and Vijayanagara architectural styles.",
        "details": [
          "Ikkeri served as the capital of the Keladi Nayakas for over a century.",
          "The Aghoreshwara temple features a colossal monolithic Nandi facing the Shiva sanctum, rendered in polished black stone."
        ]
      },
      {
        "id": "kavaledurga",
        "cat": "heritage",
        "name": "Kavaledurga Fort Ruins",
        "query": "Kavaledurga Fort Thirthahalli Shivamogga",
        "lat": 13.718,
        "lng": 75.122,
        "blurb": "Dramatic 9th-century hill fortress nestled amidst thick rainforests of Thirthahalli.",
        "details": [
          "Reinforced with seven circuits of granite battlements by Keladi chieftain Venkatappa Nayaka.",
          "Features the ruined palace foundations, rock-cut ponds, and the clifftop Shikhareshwara temple with views of the Varahi backwaters."
        ]
      },
      {
        "id": "mandagadde-bird",
        "cat": "nature",
        "name": "Mandagadde Bird Sanctuary",
        "query": "Mandagadde Bird Sanctuary Thirthahalli Shivamogga",
        "lat": 13.785,
        "lng": 75.465,
        "blurb": "Picturesque 1.14-acre river island on the Tunga River serving as a monsoon breeding haven for thousands of migratory birds.",
        "details": [
          "Flocked by median egrets, darter (snake-bird), and little cormorants from July to October."
        ]
      },
      {
        "id": "shivamogga-honnemaradu",
        "name": "Honnemaradu & Sharavathi Backwaters",
        "lat": 14.182,
        "lng": 74.965,
        "alt": 50,
        "cat": "nature",
        "query": "Honnemaradu Sharavathi Backwaters Sagar Shivamogga",
        "blurb": "Golden sand haven and eco-adventure water sports retreat on the Linganamakki reservoir.",
        "details": [
          "Known as 'Place of Golden Sand', renowned for silent canoeing, kayaking, and wild camping.",
          "Island wilderness rich in Malabar grey hornbills, paradise flycatchers, and freshwater fish."
        ]
      },
      {
        "id": "shivamogga-koodli-sangama",
        "name": "Koodli Sangama (Tunga-Bhadra Confluence)",
        "lat": 14.025,
        "lng": 75.675,
        "alt": 40,
        "cat": "heritage",
        "query": "Koodli Sangama Shivamogga",
        "blurb": "Sacred river confluence where the Tunga and Bhadra merge to become the Tungabhadra River.",
        "details": [
          "Home to the 12th-century Rameshwara and Chintamani Narasimha stone temples.",
          "Seat of the historic Koodli Arya Akshobhya Tirtha Matha and Shankara Matha."
        ]
      },
      {
        "id": "shivamogga-barkana-falls",
        "name": "Barkana Falls & Agumbe Rainforest",
        "lat": 13.4606,
        "lng": 75.1317,
        "alt": 60,
        "cat": "nature",
        "query": "Barkana Falls Agumbe Shivamogga",
        "blurb": "Tenth highest waterfall in India plunging 850 feet through dense virgin rainforest.",
        "details": [
          "Formed by the Sita River rushing down a sheer valley in the Agumbe Ghats.",
          "Located in the 'Cherrapunji of the South', known for dense mist, king cobras, and rich Western Ghats biodiversity."
        ]
      },
      {
        "id": "shivamogga-gajanur-dam",
        "name": "Gajanur Tunga Dam & Park",
        "lat": 13.855,
        "lng": 75.542,
        "alt": 45,
        "cat": "nature",
        "query": "Gajanur Dam Shivamogga",
        "blurb": "Scenic S-shaped dam on the Tunga River surrounded by lush Areca plantations.",
        "details": [
          "Engineered with 22 curved radial crest gates to regulate seasonal Western Ghats monsoon deluges.",
          "Popular picnic park situated 12 km from Shimoga on the road to Thirthahalli."
        ]
      }
    ]
  },
  {
    "id": "tumakuru",
    "name": "Tumakuru (Tumkur)",
    "division": "Southern Karnataka",
    "tagline": "The coconut city, sacred hilltop shrines, and historic fortresses",
    "bounds": {
      "north": 14.25,
      "south": 12.73,
      "east": 77.65,
      "west": 76.65
    },
    "home": {
      "center": {
        "lat": 13.374,
        "lng": 77.21,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "devarayanadurga",
        "cat": "nature",
        "featured": true,
        "name": "Devarayanadurga (DD Hills) & Yoga Narasimha",
        "query": "Devarayanadurga Temple Tumakuru",
        "lat": 13.374,
        "lng": 77.21,
        "blurb": "Rocky hill station (1,204 m) crowned by the historic Yoga Narasimha and Bhoga Narasimha temples amidst lush forests.",
        "details": [
          "Fortified by Mysore ruler Chikka Devaraja Wadiyar in 1696 after defeating local chieftains.",
          "Surrounded by reserve forests known for Ayurvedic medicinal plants and the rare yellow-throated bulbul."
        ]
      },
      {
        "id": "siddaganga-matha",
        "cat": "faith",
        "featured": true,
        "name": "Siddaganga Matha (Trividha Dasoha)",
        "query": "Siddaganga Matha Kyatsandra Tumakuru",
        "lat": 13.318,
        "lng": 77.142,
        "blurb": "World-renowned humanitarian matha that provides free boarding, education, and meals to over 10,000 rural students daily.",
        "details": [
          "Headed for over seven decades by centenarian humanitarian Sri Shivakumara Swamiji ('Walking God').",
          "Provides free food (Trividha Dasoha: Food, Education, Shelter) to underprivileged children regardless of caste or creed."
        ]
      },
      {
        "id": "madhugiri-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Madhugiri Monolithic Rock Fort",
        "query": "Madhugiri Fort Tumakuru",
        "lat": 13.662,
        "lng": 77.212,
        "blurb": "Asia's second largest monolithic rock dome (3,930 ft), fortified with multi-tiered stone walls and bastions.",
        "details": [
          "Originally fortified by Raja Hire Gowda in 1670 and later occupied by Hyder Ali.",
          "A challenging steep granite climb passes through gateways, granaries, and the ruined Gopalakrishna temple on the summit."
        ]
      },
      {
        "id": "namada-chilume",
        "cat": "nature",
        "name": "Namada Chilume Spring & Deer Park",
        "query": "Namada Chilume Tumakuru",
        "lat": 13.398,
        "lng": 77.192,
        "blurb": "Natural freshwater spring that flows continuously from a rock cleft, linked by legend to Lord Rama.",
        "details": [
          "Legend says Lord Rama shot an arrow into the granite rock to draw water for applying his tilak (nama).",
          "Surrounded by a scenic deer safari park in the Devarayanadurga reserve forest."
        ]
      },
      {
        "id": "goravanahalli",
        "cat": "temple",
        "name": "Goravanahalli Sri Mahalakshmi Temple",
        "query": "Goravanahalli Mahalakshmi Temple Koratagere Tumakuru",
        "lat": 13.488,
        "lng": 77.168,
        "blurb": "Highly revered self-manifested (swayambhu) shrine of Goddess Mahalakshmi drawing devotees from all over Karnataka.",
        "details": [
          "The idol is believed to have been consecrated by Kamalamma, a pious devotee in the early 20th century.",
          "Provides free meals (annadana) to thousands of pilgrims every Tuesday and Friday."
        ]
      },
      {
        "id": "kaidala-chennakeshava",
        "cat": "heritage",
        "name": "Kaidala Chennakeshava Temple",
        "query": "Chennakeshava Temple Kaidala Tumakuru",
        "lat": 13.315,
        "lng": 77.058,
        "blurb": "Birthplace of master sculptor Amarashilpi Jakanachari; houses a stunning 6-foot monolithic black stone Keshavaswamy idol.",
        "details": [
          "Tradition holds that Jakanachari cut off his right hand after his long-lost son pointed out a flaw in a stone sculpture at Belur, but miraculously regained his hand after carving this Kaidala idol ('Kai-dala')."
        ]
      },
      {
        "id": "tumakuru-pavagada-fort",
        "name": "Pavagada Hill Fort & Bastions",
        "lat": 14.102,
        "lng": 77.275,
        "alt": 60,
        "cat": "heritage",
        "query": "Pavagada Fort Tumakuru",
        "blurb": "Formidable multi-tiered 1405 CE hill fortress rising 2,000 feet above the dry Deccan plains.",
        "details": [
          "Built by Vijayanagara chieftain Gopanna Nayaka, later fortified by Hyder Ali with seven rings of defensive stone walls.",
          "Features ancient stone ammunition storage depots and watch bastions overlooking Andhra borderlands."
        ]
      },
      {
        "id": "tumakuru-markonahalli-dam",
        "name": "Markonahalli Dam (Automated Siphons)",
        "lat": 12.885,
        "lng": 76.915,
        "alt": 45,
        "cat": "civic",
        "query": "Markonahalli Dam Kunigal Tumakuru",
        "blurb": "Historic 1939 dam designed by Sir M. Visvesvaraya featuring automated priming siphons.",
        "details": [
          "Built across the Shimsha River, using revolutionary siphon spillways that discharge automatically without mechanical sluice gates.",
          "A marvel of early 20th-century Indian hydraulic engineering and irrigation design."
        ]
      },
      {
        "id": "tumakuru-seebi-narasimha",
        "name": "Seebi Narasimha Swamy Temple & Murals",
        "lat": 13.595,
        "lng": 76.985,
        "alt": 45,
        "cat": "heritage",
        "query": "Seebi Narasimha Swamy Temple Tumakuru",
        "blurb": "18th-century temple celebrated for rare surviving Mysore-style ceiling frescoes and murals.",
        "details": [
          "Constructed during Tipu Sultan's era by three merchant brothers: Lakshminarasappa, Puttanna, and Nallappa.",
          "Ceiling frescoes depict vibrant scenes from the Ramayana, Mahabharata, and contemporary Anglo-Mysore military clashes."
        ]
      },
      {
        "id": "tumakuru-kunigal-stud-farm",
        "name": "Kunigal Stud Farm (Historic Horse Breeding)",
        "lat": 13.025,
        "lng": 77.038,
        "alt": 40,
        "cat": "civic",
        "query": "Kunigal Stud Farm Tumakuru",
        "blurb": "India's oldest thoroughbred horse breeding stud farm established by Tipu Sultan in the 1790s.",
        "details": [
          "Originally bred cavalry chargers for the Mysore army, later modernized by the British Army Remount Department.",
          "Sprawls across 500 lush green acres, producing champions for premier Indian Derby events."
        ]
      }
    ]
  },
  {
    "id": "udupi",
    "name": "Udupi",
    "division": "Coastal Karnataka",
    "tagline": "Temple district, pristine Arabian Sea coastline, and Manipal education hub",
    "bounds": {
      "north": 13.98,
      "south": 13.05,
      "east": 75.25,
      "west": 74.55
    },
    "home": {
      "center": {
        "lat": 13.3445,
        "lng": 74.7655,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 20
    },
    "landmarks": []
  },
  {
    "id": "uttara-kannada",
    "name": "Uttara Kannada (Karwar / Gokarna)",
    "division": "Coastal Karnataka",
    "tagline": "Towering Murudeshwar Shiva, holy beaches of Gokarna, Yana karst rocks and lush Kali forests",
    "bounds": {
      "north": 15.39,
      "south": 13.94,
      "east": 75.15,
      "west": 73.97
    },
    "home": {
      "center": {
        "lat": 14.54,
        "lng": 74.32,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 62,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "murudeshwar",
        "cat": "temple",
        "featured": true,
        "name": "Murudeshwara Temple & Colossal Shiva Statue",
        "query": "Murudeshwar Temple Bhatkal Uttara Kannada",
        "lat": 14.094,
        "lng": 74.4845,
        "blurb": "World's second-tallest Shiva statue (123 ft) towering over Kanduka Hill, surrounded on three sides by the Arabian Sea.",
        "details": [
          "Features a 20-story Raja Gopuram (249 ft / 75 m) equipped with a high-speed elevator taking visitors to the top for coastal views.",
          "Tied to the legend of Ravana and the Atmalinga, which was thrown here and rooted into the sea cliff.",
          "Surrounded by sandy beaches and water sports at the base of Kanduka Giri."
        ]
      },
      {
        "id": "gokarna-mahabaleshwara",
        "cat": "temple",
        "featured": true,
        "name": "Gokarna Sri Mahabaleshwara Temple",
        "query": "Mahabaleshwar Temple Gokarna",
        "lat": 14.543,
        "lng": 74.318,
        "blurb": "Ancient temple housing the Pranalinga / Atmalinga of Shiva, revered as the Dakshina Kashi on the Arabian Sea.",
        "details": [
          "Mentioned in the Ramayana and Mahabharata; built in classic Dravidian stone masonry by Mayurasharma of the Kadamba dynasty.",
          "Devotees touch the sacred Atmalinga set into a square stone pit at the sanctum center.",
          "Traditional pilgrims take a purifying holy dip in the adjacent Arabian Sea waves before entering the temple."
        ]
      },
      {
        "id": "om-beach",
        "cat": "nature",
        "featured": true,
        "name": "Om Beach, Gokarna",
        "query": "Om Beach Gokarna Karnataka",
        "lat": 14.519,
        "lng": 74.318,
        "blurb": "Naturally formed beach resembling the sacred Devanagari 'Om' symbol, flanked by rugged coastal cliffs.",
        "details": [
          "Two semi-crescent coves join together naturally to trace the exact shape of the spiritual Om symbol.",
          "A scenic clifftop trail connects Kudle Beach, Om Beach, Half Moon Beach, and Paradise Beach."
        ]
      },
      {
        "id": "kudle-beach",
        "cat": "nature",
        "name": "Kudle Beach, Gokarna",
        "query": "Kudle Beach Gokarna",
        "lat": 14.528,
        "lng": 74.314,
        "blurb": "Wide crescent-shaped sandy bay framed by green headlands, popular for sunsets, beachfront cafes and yoga retreats.",
        "details": [
          "A peaceful pedestrian-access cove reached by a stone pathway descending from the Gokarna town cliffs."
        ]
      },
      {
        "id": "yana-rocks",
        "cat": "nature",
        "featured": true,
        "name": "Yana Karst Rock Formations",
        "query": "Yana Rocks Kumta Uttara Kannada",
        "lat": 14.588,
        "lng": 74.558,
        "blurb": "Two colossal monolithic black karst limestone peaks soaring 120 metres out of dense Sahyadri rainforests.",
        "details": [
          "Bhairaveshwara Shikhara (120 m) and Mohini Shikhara (90 m) are rare geological black crystalline limestone formations.",
          "A cave under Bhairaveshwara Shikhara contains a self-manifested Shiva linga with water dripping continuously onto it.",
          "Surrounded by evergreen Western Ghats jungle trails."
        ]
      },
      {
        "id": "mirjan-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Mirjan Fort",
        "query": "Mirjan Fort Kumta Uttara Kannada",
        "lat": 14.492,
        "lng": 74.421,
        "blurb": "16th-century laterite fort surrounded by deep moats, ruled by Queen Chennabhairadevi ('The Pepper Queen').",
        "details": [
          "Queen Chennabhairadevi of the Gersoppa dynasty ruled for 54 years and controlled international black pepper trade with Portuguese merchants.",
          "Built with red laterite stone bricks, high bastions, interconnected canals and water harvest wells."
        ]
      },
      {
        "id": "dandeli-wildlife",
        "cat": "nature",
        "featured": true,
        "name": "Dandeli Wildlife Sanctuary & Kali River Rafting",
        "query": "Dandeli River Rafting Kali River Uttara Kannada",
        "lat": 15.245,
        "lng": 74.623,
        "blurb": "Adventure capital of Karnataka famous for Class III white-water rafting on the roaring Kali River.",
        "details": [
          "The Dandeli-Anshi Tiger Reserve (Kali Tiger Reserve) is one of the few places in India where the elusive Black Panther is regularly spotted."
        ]
      },
      {
        "id": "sathodi-falls",
        "cat": "nature",
        "name": "Sathodi Falls, Yellapur",
        "query": "Sathodi Falls Yellapur Uttara Kannada",
        "lat": 14.935,
        "lng": 74.585,
        "blurb": "Picturesque rectangular cascade dropping 15 metres into the Kodasalli Dam backwaters.",
        "details": [
          "Formed by several forest streams joining together in a rocky gorge, often called the 'Mini Niagara of Uttara Kannada'."
        ]
      },
      {
        "id": "unchalli-falls",
        "cat": "nature",
        "name": "Unchalli Falls (Lushington Falls), Siddapur",
        "query": "Unchalli Falls Siddapur Uttara Kannada",
        "lat": 14.402,
        "lng": 74.748,
        "blurb": "Dramatic 116-metre cascade on the Aghanashini River, roaring into a deep forest chasm.",
        "details": [
          "Discovered in 1845 by British district collector J.D. Lushington; known locally as Keppa Joga for its deafening roar."
        ]
      },
      {
        "id": "tagore-beach-karwar",
        "cat": "nature",
        "name": "Rabindranath Tagore Beach & Warship Museum, Karwar",
        "query": "Rabindranath Tagore Beach Karwar",
        "lat": 14.812,
        "lng": 74.128,
        "blurb": "Pristine coastal promenade on the Kali River estuary, where Nobel laureate Rabindranath Tagore was inspired to write poetry.",
        "details": [
          "Houses the INS Chapal (K94) missile boat warship museum, a maritime aquarium, and sweeping views of the Devbagh headland."
        ]
      },
      {
        "id": "uk-paradise-beach",
        "name": "Paradise & Half Moon Beaches, Gokarna",
        "lat": 14.515,
        "lng": 74.328,
        "alt": 35,
        "cat": "coast",
        "query": "Paradise Beach Gokarna Uttara Kannada",
        "blurb": "Secluded crescent coves reached by cliff trekking through scenic headlands.",
        "details": [
          "Tucked between granite cliffs and the Arabian Sea, famous for pristine white sand and azure waters.",
          "Accessible only on foot or by local fishermen boats, offering peaceful solitude."
        ]
      },
      {
        "id": "uk-vibhooti-falls",
        "name": "Vibhooti Falls (Limestone Cascade)",
        "lat": 14.5984,
        "lng": 74.5514,
        "alt": 45,
        "cat": "nature",
        "query": "Vibhooti Falls Ankola Uttara Kannada",
        "blurb": "Crystal-clear waterfall tumbling down limestone rock beds in the dense Sahyadri forests.",
        "details": [
          "Named after the chalky white limestone deposits in the stream bed resembling sacred vibhooti ash.",
          "Surrounded by towering bamboo clumps and wild evergreen flora near the Yana rock towers."
        ]
      },
      {
        "id": "uk-devbagh-beach",
        "name": "Devbagh Beach & Kali River Estuary, Karwar",
        "lat": 14.845,
        "lng": 74.125,
        "alt": 35,
        "cat": "coast",
        "query": "Devbagh Beach Karwar Uttara Kannada",
        "blurb": "Untouched golden spit where the mighty Kali River meets the Arabian Sea.",
        "details": [
          "Lined with casuarina groves, known for dolphin spotting cruises, sea kayaking, and sunset cruises.",
          "Connected to the legendary travels of Rabindranath Tagore who stayed in Karwar in 1882."
        ]
      },
      {
        "id": "uk-magod-falls",
        "name": "Magod Falls (Bedti River Gorge)",
        "lat": 14.8615,
        "lng": 74.7032,
        "alt": 55,
        "cat": "nature",
        "query": "Magod Falls Yellapur Uttara Kannada",
        "blurb": "Two-tiered 650-foot waterfall roaring into a narrow, mist-filled rocky canyon.",
        "details": [
          "Formed by the Bedti River plunging down granite precipices in Yellapur taluk.",
          "Offers breathtaking viewing pavilions perched high above the river gorge."
        ]
      }
    ]
  },
  {
    "id": "vijayanagara",
    "name": "Vijayanagara (Hampi)",
    "division": "Kalyana Karnataka",
    "tagline": "UNESCO World Heritage imperial capital, surreal boulder landscapes, and the Golden Era",
    "bounds": {
      "north": 15.55,
      "south": 14.75,
      "east": 76.75,
      "west": 75.85
    },
    "home": {
      "center": {
        "lat": 15.335,
        "lng": 76.46,
        "altitude": 0
      },
      "range": 4500,
      "tilt": 62,
      "heading": 25
    },
    "landmarks": [
      {
        "id": "virupaksha-temple",
        "cat": "heritage",
        "featured": true,
        "name": "Virupaksha Temple, Hampi",
        "query": "Virupaksha Temple Hampi Vijayanagara",
        "lat": 15.335,
        "lng": 76.46,
        "blurb": "Oldest continuously active temple in Hampi dating from the 7th century, with a towering 160-foot gopuram on the Tungabhadra.",
        "details": [
          "The principal spiritual sanctuary of the Vijayanagara Empire dedicated to Shiva as Virupaksha (pampa-pati).",
          "Famous for the pinhole camera effect inside an inner chamber that projects the inverted shadow of the giant gopuram on the wall.",
          "Flanked by the historic 730-metre Hampi Bazaar where international merchants once traded pearls and rubies."
        ]
      },
      {
        "id": "stone-chariot-vittala",
        "cat": "heritage",
        "featured": true,
        "name": "Vijaya Vittala Temple & Stone Chariot",
        "query": "Vittala Temple Stone Chariot Hampi",
        "lat": 15.341,
        "lng": 76.477,
        "blurb": "The pinnacle of Vijayanagara artistic genius, famous for the iconic Stone Chariot (Garuda shrine) and musical pillars.",
        "details": [
          "The Stone Chariot is one of India's three celebrated stone chariots (along with Konark and Mahabalipuram), featured on the Indian 50-rupee currency note.",
          "The Ranga Mandapa contains 56 musical pillars (SaReGaMa pillars) that emit melodic acoustic notes when tapped gently.",
          "Built in the 15th-16th century under kings Devaraya II and Krishnadevaraya."
        ]
      },
      {
        "id": "lotus-mahal",
        "cat": "heritage",
        "featured": true,
        "name": "Lotus Mahal & Zenana Enclosure",
        "query": "Lotus Mahal Hampi",
        "lat": 15.32,
        "lng": 76.469,
        "blurb": "Two-storied secular pavilion displaying an exquisite synthesis of Vijayanagara Hindu and Islamic arch architecture.",
        "details": [
          "Named for its lotus-bud like arches, carved plasterwork, and pyramidical roof vaults.",
          "Designed with air-cooling water pipes running through walls to cool the royal quarters during scorching summer months."
        ]
      },
      {
        "id": "elephant-stables",
        "cat": "heritage",
        "featured": true,
        "name": "Elephant Stables, Hampi",
        "query": "Elephant Stables Hampi",
        "lat": 15.321,
        "lng": 76.473,
        "blurb": "Monumental row of eleven domed chambers designed to shelter the ceremonial royal elephants of the Vijayanagara kings.",
        "details": [
          "Each chamber is topped with a distinct Islamic-styled dome: fluted, ribbed, or octagonal.",
          "One of the few royal buildings that survived the destruction of Hampi in 1565 almost completely intact."
        ]
      },
      {
        "id": "hazara-rama",
        "cat": "heritage",
        "name": "Hazara Rama Temple, Hampi",
        "query": "Hazara Rama Temple Hampi",
        "lat": 15.319,
        "lng": 76.466,
        "blurb": "Private temple of the Vijayanagara kings, celebrated for exterior wall friezes telling the complete Ramayana in stone comic-strip panels.",
        "details": [
          "Features black schist polished pillars inside the sanctum and bas-relief panels depicting the Dasara festival processions."
        ]
      },
      {
        "id": "queens-bath",
        "cat": "heritage",
        "name": "Queen's Bath (Antahpura Pushkarini)",
        "query": "Queens Bath Hampi",
        "lat": 15.314,
        "lng": 76.472,
        "blurb": "Royal private aquatic pavilion surrounded by an ornamental moat and Indo-Islamic arched balconies.",
        "details": [
          "Features a central six-foot sunken pool open to the sky and decorative plaster ceilings with floral rosettes."
        ]
      },
      {
        "id": "matanga-hill",
        "cat": "nature",
        "featured": true,
        "name": "Matanga Hill (Sunrise / Sunset Panorama)",
        "query": "Matanga Hill Hampi",
        "lat": 15.332,
        "lng": 76.468,
        "blurb": "Highest point in central Hampi, offering an iconic 360-degree sunrise panorama over the ruins, banana groves and Tungabhadra River.",
        "details": [
          "Mentioned in the Ramayana as the hermitage of Sage Matanga where Sugriva sought refuge from Vali.",
          "A climb of stone steps leads to the Veerabhadra temple crowning the rocky summit."
        ]
      },
      {
        "id": "hemakuta-hill",
        "cat": "heritage",
        "name": "Hemakuta Hill & Sasivekalu Ganesha",
        "query": "Hemakuta Hill Temples Hampi",
        "lat": 15.333,
        "lng": 76.458,
        "blurb": "Sloping granite hill studded with pre-Vijayanagara and early Chalukyan triple-chambered stone shrines.",
        "details": [
          "At the base stands the 8-foot monolithic Sasivekalu (Mustard seed) Ganesha with a snake tied around his belly, carved from a single boulder in 1506."
        ]
      },
      {
        "id": "underground-shiva",
        "cat": "heritage",
        "name": "Underground Shiva Temple (Prasanna Virupaksha)",
        "query": "Underground Shiva Temple Hampi",
        "lat": 15.322,
        "lng": 76.461,
        "blurb": "One of the oldest temples in Hampi, built several metres below ground level with a sanctum perpetually filled with spring water.",
        "details": [
          "Devotees wade through cool ankle-to-knee-deep water to reach the inner sanctum."
        ]
      },
      {
        "id": "tungabhadra-dam",
        "cat": "nature",
        "name": "Tungabhadra Dam (Hosapete)",
        "query": "Tungabhadra Dam Hosapete Vijayanagara",
        "lat": 15.26,
        "lng": 76.335,
        "blurb": "Colossal multipurpose dam built across the Tungabhadra River creating the vast Pampa Sagara reservoir.",
        "details": [
          "Completed in 1953, with 33 crest spillway gates spanning over 2 kilometres in length.",
          "Features hilltop viewing points at Vaikunta Guest House and terraced Japanese gardens with musical water fountains."
        ]
      },
      {
        "id": "hampi-malyavanta-raghunatha",
        "name": "Malyavanta Raghunatha Temple",
        "lat": 15.334,
        "lng": 76.482,
        "alt": 60,
        "cat": "heritage",
        "query": "Malyavanta Raghunatha Temple Hampi Vijayanagara",
        "blurb": "Dramatic hilltop temple built directly into massive granite boulders on Malyavanta Hill.",
        "details": [
          "Where Lord Rama and Lakshmana are believed to have sheltered during the monsoon waiting for Sita's news.",
          "Famous for continuous 24/7 Ramcharitmanas chanting echoed from stone sanctum chambers."
        ]
      },
      {
        "id": "hampi-kadalekalu-ganesha",
        "name": "Kadalekalu Ganesha (Giant Monolith)",
        "lat": 15.3345,
        "lng": 76.4625,
        "alt": 50,
        "cat": "heritage",
        "query": "Kadalekalu Ganesha Hampi Vijayanagara",
        "blurb": "Monumental 15-foot high monolithic Ganesha carved from a single living hillside rock.",
        "details": [
          "Named 'Kadalekalu' (Bengal gram) because the potbelly resembles a gram seed.",
          "Enclosed in an open pillared mantapa with slender Corinthian-style pillars overlooking the Hampi Bazaar."
        ]
      },
      {
        "id": "hampi-achyutaraya-temple",
        "name": "Achyutaraya Temple (Tiruvengalanatha Complex)",
        "lat": 15.336,
        "lng": 76.471,
        "alt": 45,
        "cat": "heritage",
        "query": "Achyutaraya Temple Hampi Vijayanagara",
        "blurb": "Grand 1534 CE temple sanctuary nestled in the secluded valley of Gandhamadana and Matanga hills.",
        "details": [
          "Commissioned by King Achyuta Deva Raya, featuring a half-kilometer stone Courtesans' Street market.",
          "Known for dramatic pillared entrance corridors, intricate Yali pillars, and peaceful seclusion."
        ]
      },
      {
        "id": "hampi-stepped-tank",
        "name": "Stepped Tank (Pushkarini), Royal Enclosure",
        "lat": 15.318,
        "lng": 76.472,
        "alt": 45,
        "cat": "heritage",
        "query": "Stepped Tank Royal Enclosure Hampi Vijayanagara",
        "blurb": "Masterpiece of black schist geometric stepped architecture unearthed in the Royal Enclosure.",
        "details": [
          "Discovered during ASI excavations in the mid-1980s, fitted together like a jigsaw without mortar.",
          "Fed by an ancient network of elevated stone aqueducts bringing water from kilometers away."
        ]
      }
    ]
  },
  {
    "id": "vijayapura",
    "name": "Vijayapura (Bijapur)",
    "division": "Kittur Karnataka",
    "tagline": "Capital of the Adil Shahi sultanate, the Whispering Gallery, and colossal Islamic domes",
    "bounds": {
      "north": 17.25,
      "south": 16.35,
      "east": 76.3,
      "west": 75.3
    },
    "home": {
      "center": {
        "lat": 16.8305,
        "lng": 75.7355,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "gol-gumbaz",
        "cat": "heritage",
        "featured": true,
        "name": "Gol Gumbaz (Whispering Gallery)",
        "query": "Gol Gumbaz Vijayapura Bijapur",
        "lat": 16.8305,
        "lng": 75.7355,
        "blurb": "Mausoleum of Mohammed Adil Shah with the second-largest unsupported dome in the world and an acoustic Whispering Gallery.",
        "details": [
          "Completed in 1656; the massive dome has an external diameter of 44 metres and stands entirely unsupported by interior pillars.",
          "The Whispering Gallery inside reflects even the faintest whisper or scratch 11 times across the 38-metre chamber.",
          "Flanked by four distinctive eight-story octagonal minaret towers."
        ]
      },
      {
        "id": "ibrahim-rauza",
        "cat": "heritage",
        "featured": true,
        "name": "Ibrahim Rauza (The Black Taj of South India)",
        "query": "Ibrahim Rauza Vijayapura Bijapur",
        "lat": 16.829,
        "lng": 75.698,
        "blurb": "Exquisite 1627 CE twin-complex of a mausoleum and mosque, considered an inspiration for the Taj Mahal in Agra.",
        "details": [
          "Built by Ibrahim Adil Shah II for his queen Taj Sultana with delicate stone lattice jali windows, minarets, and bulbous domes.",
          "The stone ceiling is constructed of flat slabs without any visible joint supports."
        ]
      },
      {
        "id": "bara-kaman",
        "cat": "heritage",
        "featured": true,
        "name": "Bara Kaman (Unfinished Twelve Arches)",
        "query": "Bara Kaman Vijayapura Bijapur",
        "lat": 16.831,
        "lng": 75.717,
        "blurb": "Dramatic unfinished mausoleum of Ali Adil Shah II, comprising twelve soaring concentric stone arches standing open to the sky.",
        "details": [
          "Intended to rival Gol Gumbaz in height and grandeur with twelve horizontal and vertical arches.",
          "Work stopped abruptly when Ali Adil Shah II was assassinated in 1672, leaving a strikingly poetic open-air ruin."
        ]
      },
      {
        "id": "malik-e-maidan",
        "cat": "heritage",
        "featured": true,
        "name": "Malik-e-Maidan (Master of the Battlefield Cannon)",
        "query": "Malik-e-Maidan Vijayapura Bijapur",
        "lat": 16.8285,
        "lng": 75.7075,
        "blurb": "Colossal 55-tonne medieval bronze cannon cast in 1549, resting atop the Burj-e-Sherz bastion.",
        "details": [
          "Cast from five alloy metals (panchadhatu); when struck, it resonates like a temple bell.",
          "The muzzle is shaped like a lion's head devouring an elephant. Gunner legends hold that operators had to dive into water tanks to survive the deafening blast."
        ]
      },
      {
        "id": "jami-masjid-bijapur",
        "cat": "faith",
        "name": "Jami Masjid Vijayapura",
        "query": "Jami Masjid Vijayapura",
        "lat": 16.824,
        "lng": 75.723,
        "blurb": "Built by Ali Adil Shah I to celebrate victory at the Battle of Talikota (1565), one of South India's largest mosques.",
        "details": [
          "The expansive main prayer hall floor is divided into 2,250 inlaid musallahs (prayer spaces) with black borders, gifted by Mughal Emperor Aurangzeb."
        ]
      },
      {
        "id": "asar-mahal",
        "cat": "heritage",
        "name": "Asar Mahal (Palace of Relics)",
        "query": "Asar Mahal Vijayapura",
        "lat": 16.8315,
        "lng": 75.719,
        "blurb": "Built in 1646 by Mohammed Adil Shah as a hall of justice, housing two sacred hairs of Prophet Muhammad.",
        "details": [
          "Supported by four colossal 40-foot wooden pillars with floral fresco paintings and an artificial pool."
        ]
      },
      {
        "id": "shivagiri-statue",
        "cat": "temple",
        "name": "Shivagiri 85ft Colossal Shiva Statue",
        "query": "Shivagiri Shiva Statue Vijayapura",
        "lat": 16.842,
        "lng": 75.758,
        "blurb": "One of India's tallest seated statues of Lord Shiva, soaring 85 feet into the sky on the outskirts of Vijayapura.",
        "details": [
          "Consecrated in 2006, seated atop a miniature Shiva temple sanctum."
        ]
      },
      {
        "id": "vijayapura-taj-bawdi",
        "name": "Taj Bawdi (Royal Queen's Stepwell)",
        "lat": 16.828,
        "lng": 75.698,
        "alt": 45,
        "cat": "heritage",
        "query": "Taj Bawdi Bijapur Vijayapura",
        "blurb": "Monumental 1620 CE royal stepwell built by Ibrahim Adil Shah II for Queen Taj Sultana.",
        "details": [
          "Features a monumental 100-foot archway, flanked by two octagonal towers and guest galleries.",
          "One of the largest and most magnificent traditional water engineering structures in the Deccan."
        ]
      },
      {
        "id": "vijayapura-mehtar-mahal",
        "name": "Mehtar Mahal & Gateway",
        "lat": 16.825,
        "lng": 75.712,
        "alt": 45,
        "cat": "heritage",
        "query": "Mehtar Mahal Bijapur Vijayapura",
        "blurb": "1620 CE three-storey stone pavilion famous for lace-like stone carved brackets and minarets.",
        "details": [
          "Regarded as a crowning triumph of Indo-Islamic stone filigree and delicate balcony corbels.",
          "Legend holds it was built by a royal palace sweeper rewarded by the Adil Shahi Sultan."
        ]
      },
      {
        "id": "vijayapura-gagan-mahal",
        "name": "Gagan Mahal (Sky Palace Ruins)",
        "lat": 16.829,
        "lng": 75.711,
        "alt": 45,
        "cat": "heritage",
        "query": "Gagan Mahal Bijapur Vijayapura",
        "blurb": "1561 CE royal durbar palace boasting an immense central arch spanning 66 feet.",
        "details": [
          "Built by Ali Adil Shah I as both an open throne auditorium and private royal apartments.",
          "Where Emperor Aurangzeb formally accepted the surrender of Sikandar Adil Shah in 1686."
        ]
      },
      {
        "id": "vijayapura-upli-burj",
        "name": "Upli Burj (Hyder Burj Watchtower)",
        "lat": 16.826,
        "lng": 75.702,
        "alt": 55,
        "cat": "heritage",
        "query": "Upli Burj Bijapur Vijayapura",
        "blurb": "80-foot high cylindrical stone bastion equipped with winding outdoor stairways and cannons.",
        "details": [
          "Built in 1584 by Hyder Khan to survey surrounding plains against invading armies.",
          "Houses two historic wrought-iron cannons atop the platform with panoramic views over Vijayapura."
        ]
      }
    ]
  },
  {
    "id": "yadgir",
    "name": "Yadgir",
    "division": "Kalyana Karnataka",
    "tagline": "Hilltop fortresses, the Sleeping Buddha mountain, and ancient Buddhist heritage",
    "bounds": {
      "north": 17.05,
      "south": 16.1,
      "east": 77.55,
      "west": 76.19
    },
    "home": {
      "center": {
        "lat": 16.772,
        "lng": 77.138,
        "altitude": 0
      },
      "range": 5200,
      "tilt": 58,
      "heading": 15
    },
    "landmarks": [
      {
        "id": "yadgir-fort",
        "cat": "heritage",
        "featured": true,
        "name": "Yadgir Hill Fort & Bastions",
        "query": "Yadgir Fort Yadgir Karnataka",
        "lat": 16.772,
        "lng": 77.138,
        "blurb": "Formidable hill fort built atop a monolithic granite hill by the Yadava kings of Devagiri in the 10th century.",
        "details": [
          "Features three tiers of fortifications, large rock-cut water tanks, a mosque, and canons.",
          "Provides commanding views across the Bhima and Krishna river plains."
        ]
      },
      {
        "id": "sleeping-buddha",
        "cat": "nature",
        "featured": true,
        "name": "Sleeping Buddha Hill (Shahapur)",
        "query": "Sleeping Buddha Hill Shahapur Yadgir",
        "lat": 16.65,
        "lng": 76.98,
        "blurb": "Natural range of four hills in Shahapur that forms the striking profile of Lord Buddha reclining peacefully.",
        "details": [
          "When viewed from the east, the natural ridgeline distinctly traces the head, nose, chest, and feet of the reclining Buddha.",
          "One of the most unique geological scenic silhouettes in Karnataka."
        ]
      },
      {
        "id": "mailapur-temple",
        "cat": "temple",
        "name": "Mailapur Mailaralingeshwara Temple",
        "query": "Mailapur Mailara Lingeshwara Temple Yadgir",
        "lat": 16.835,
        "lng": 77.195,
        "blurb": "Famous pilgrimage temple dedicated to Lord Shiva in the form of Mailara Linga on a high hillock.",
        "details": [
          "Renowned for the annual Jathra where lakhs of pilgrims chant 'Elukoti Elukoti' and toss turmeric powder (bhandara), turning the entire hillside golden.",
          "Features ancient Gorava dance and shepherd traditions."
        ]
      },
      {
        "id": "basava-sagara-dam",
        "cat": "nature",
        "featured": true,
        "name": "Basava Sagara Dam (Narayanpur Dam)",
        "query": "Basava Sagara Dam Narayanpur Yadgir",
        "lat": 16.248,
        "lng": 76.34,
        "blurb": "Major multipurpose reservoir on the Krishna River completed in 1982, irrigating the fertile plains of Yadgir and Raichur.",
        "details": [
          "Features 30 radial gates and scenic sunset viewing points on the downstream embankments."
        ]
      },
      {
        "id": "shorapur-fort",
        "cat": "heritage",
        "name": "Shorapur Venugopala Swamy Fort & Palace",
        "query": "Shorapur Fort Yadgir",
        "lat": 16.521,
        "lng": 76.758,
        "blurb": "Historic kingdom of the Bedar Nayakas who fought heroically against British rule in the 1857 Rebellion under Raja Venkatappa Nayaka.",
        "details": [
          "Described in detail by the British chronicler Meadows Taylor; features stone fortifications and a historic Gopala temple."
        ]
      },
      {
        "id": "yadgir-taylor-manzil",
        "name": "Meadows Taylor Manzil, Shorapur",
        "lat": 16.518,
        "lng": 76.758,
        "alt": 50,
        "cat": "heritage",
        "query": "Meadows Taylor Manzil Shorapur Yadgir",
        "blurb": "1840s colonial mansion built by British administrator and novelist Meadows Taylor.",
        "details": [
          "Designed with unique acoustic ventilation channels and panoramic verandas overlooking the Shorapur valley.",
          "Taylor authored famous novels like 'Confessions of a Thug' during his benevolent administration here."
        ]
      },
      {
        "id": "yadgir-bonal-bird-sanctuary",
        "name": "Bonal Bird Sanctuary & Wetland",
        "lat": 16.482,
        "lng": 76.685,
        "alt": 40,
        "cat": "nature",
        "query": "Bonal Bird Sanctuary Shorapur Yadgir",
        "blurb": "Second largest bird sanctuary in Karnataka, drawing over 10,000 migratory winter waterbirds.",
        "details": [
          "Sprawls across an ancient 17th-century irrigation lake built by the Shorapur Nayak kings.",
          "Winter home to bar-headed geese, white-necked storks, spoonbills, and glossy ibises."
        ]
      },
      {
        "id": "yadgir-dhab-dhabi-falls",
        "name": "Gurmitkal Dhab Dhabi Waterfalls",
        "lat": 16.872,
        "lng": 77.395,
        "alt": 45,
        "cat": "nature",
        "query": "Dhab Dhabi Falls Gurmitkal Yadgir",
        "blurb": "Picturesque rocky waterfall cascading down dense green valleys near Gurmitkal.",
        "details": [
          "Tucked into the Gurmitkal hill ranges, flowing vigorously during the post-monsoon months.",
          "Surrounded by natural medicinal herbs and peaceful rock formations."
        ]
      },
      {
        "id": "yadgir-wankanadurg-fort",
        "name": "Wankanadurg Hill Fort",
        "lat": 16.6314,
        "lng": 76.6933,
        "alt": 55,
        "cat": "heritage",
        "query": "Wankanadurg Fort Yadgir",
        "blurb": "Historic medieval hill fort with stone ramparts and perennial freshwater rock pools.",
        "details": [
          "Served as a frontline defensive bastion for the Shorapur Nayakas against Nizam forces.",
          "Offers rugged hill trekking and expansive views across the Krishna-Bhima doab."
        ]
      }
    ]
  }
];

// Auto-attach Udupi's comprehensive landmarks from landmarks.js if loaded
if (typeof window !== "undefined") {
  const udupiDist = window.KARNATAKA_DISTRICTS?.find((d) => d.id === "udupi");
  if (udupiDist && Array.isArray(window.UDUPI_LANDMARKS) && window.UDUPI_LANDMARKS.length) {
    udupiDist.landmarks = window.UDUPI_LANDMARKS;
  }
}
