function openCultureDailyLife(workspace) {
  "use strict";

  const periods = [
    ["ancient","Ancient Near Eastern background",
     "Third and second millennia BCE",
     "Mesopotamian and Egyptian civilizations provide comparative evidence for ancient households, agriculture, administration and law. Such parallels do not independently establish the dates of biblical patriarchal narratives."],

    ["iron","Israel and Judah",
     "Approximately 1200–586 BCE",
     "Iron Age settlements, pottery, agricultural installations, inscriptions and household remains provide evidence for Israelite and Judahite society."],

    ["exile","Exile and Persian period",
     "Approximately 586–332 BCE",
     "Babylonian and Persian administration shaped taxation, settlement, community identity and the restoration of Jerusalem."],

    ["greek","Hellenistic period",
     "Approximately 332–63 BCE",
     "Greek political and cultural influence interacted with existing Jewish languages, customs and religious institutions."],

    ["roman","Roman and early Christian period",
     "63 BCE–second century CE",
     "Roman administration, provincial economies, Jewish religious institutions and Mediterranean urban communities form important contexts for New Testament research."]
  ];

  const sources = {
    borowski:{
      author:"Oded Borowski",
      title:"What Was Life like in Biblical Times?",
      type:"Academic archaeological synthesis",
      url:"https://thetorah.com/article/what-was-life-like-in-biblical-times",
      note:"Research on material culture and the reconstruction of ancient Israelite households."
    },

    borowskiBook:{
      author:"Oded Borowski",
      title:"Daily Life in Biblical Times",
      type:"Scholarly monograph, Society of Biblical Literature, 2003",
      url:"https://books.google.com/books/about/Daily_Life_in_Biblical_Times.html?id=cIOjVnRo41wC",
      note:"Academic study of rural life, households, economy, administration and cultural activities. Full access may require purchase or library access."
    },

    miller:{
      author:"Robert D. Miller II; BAS Staff summary",
      title:"Daily Life in Ancient Israel",
      type:"Archaeological research summary",
      url:"https://www.biblicalarchaeology.org/daily/ancient-cultures/ancient-israel/daily-life-in-ancient-israel/",
      note:"Early Iron Age villages, housing and agriculture."
    },

    met:{
      author:"Metropolitan Museum of Art",
      title:"Roman Art: A Resource for Educators",
      type:"Museum educational publication",
      url:"https://resources.metmuseum.org/resources/metpublications/pdf/Roman_Art_A_Resource_for_Educators.pdf",
      note:"Roman material culture and daily life. Includes discussion of evidence limitations."
    },

    abs:{
      author:"American Bible Society",
      title:"How People Made a Living in the Time of Jesus",
      type:"Biblical cultural introduction",
      url:"https://www.americanbible.org/engage/bible-resources/articles/how-people-made-a-living-in-the-time-of-jesus/",
      note:"Introductory information on occupations. Compare with primary evidence and specialist scholarship."
    },

    bas:{
      author:"Biblical Archaeology Society",
      title:"Life in the Ancient World",
      type:"Archaeological reading collection",
      url:"https://www.biblicalarchaeology.org/free-ebooks/life-in-the-ancient-world/",
      note:"Households, crafts and Mediterranean material culture. Registration may be required."
    },

    oracc:{
      author:"Open Richly Annotated Cuneiform Corpus",
      title:"ORACC",
      type:"Primary text research corpus",
      url:"https://oracc.museum.upenn.edu/",
      note:"Ancient Mesopotamian texts, including administrative and royal documents."
    },

    cdli:{
      author:"Cuneiform Digital Library Initiative",
      title:"Cuneiform Digital Library",
      type:"Primary document catalogue",
      url:"https://cdli.earth/",
      note:"Digitized cuneiform documents and catalogue records."
    },

    british:{
      author:"British Museum",
      title:"Collection Online",
      type:"Museum artifact catalogue",
      url:"https://www.britishmuseum.org/collection",
      note:"Research artifacts by date, material, provenance and object type."
    },

    metObjects:{
      author:"Metropolitan Museum of Art",
      title:"Museum Collection",
      type:"Museum artifact catalogue",
      url:"https://www.metmuseum.org/art/collection",
      note:"Ancient Near Eastern, Egyptian, Greek and Roman material culture."
    },

    odyssey:{
      author:"Society of Biblical Literature",
      title:"Bible Odyssey",
      type:"Academic educational resource",
      url:"https://www.bibleodyssey.org/",
      note:"Articles by biblical scholars on historical, social and literary contexts."
    },

    perseus:{
      author:"Perseus Digital Library",
      title:"Greek and Roman Texts",
      type:"Primary literary texts",
      url:"https://www.perseus.tufts.edu/",
      note:"Classical texts and language resources."
    },

    papyri:{
      author:"Papyri.info",
      title:"Documentary Papyri",
      type:"Primary document research database",
      url:"https://papyri.info/",
      note:"Ancient letters, contracts, receipts and administrative documents, especially from Egypt."
    },

    sefaria:{
      author:"Sefaria",
      title:"Jewish Textual Library",
      type:"Primary and traditional Jewish literature",
      url:"https://www.sefaria.org/texts",
      note:"Includes biblical and rabbinic literature. Later rabbinic traditions must not automatically be projected into earlier periods."
    },

    step:{
      author:"Tyndale House, Cambridge",
      title:"STEP Bible",
      type:"Biblical language research",
      url:"https://www.stepbible.org/",
      note:"Hebrew and Greek vocabulary, textual comparison and contextual research."
    },

    dss:{
      author:"Israel Museum",
      title:"Digital Dead Sea Scrolls",
      type:"Primary manuscript evidence",
      url:"https://dss.collections.imj.org.il/",
      note:"Selected ancient Jewish manuscripts and sectarian writings."
    },

    yale:{
      author:"Christine Hayes, Yale University",
      title:"Introduction to the Old Testament",
      type:"University lecture series",
      url:"https://oyc.yale.edu/religious-studies/rlst-145",
      note:"Historical, literary and religious contexts of the Hebrew Bible."
    },

    yaleNT:{
      author:"Dale B. Martin, Yale University",
      title:"Introduction to New Testament History and Literature",
      type:"University lecture series",
      url:"https://oyc.yale.edu/religious-studies/rlst-152",
      note:"New Testament literature and early Christian historical contexts."
    },

    coins:{
      author:"Roman Provincial Coinage project",
      title:"Roman Provincial Coinage Online",
      type:"Numismatic research database",
      url:"https://rpc.ashmus.ox.ac.uk/",
      note:"Provincial coinage, rulers, inscriptions, chronology and issuing authorities."
    },

    rrc:{
      author:"American Numismatic Society",
      title:"Online Coins of the Roman Empire",
      type:"Numismatic research database",
      url:"https://numismatics.org/ocre/",
      note:"Imperial coin types and associated numismatic evidence."
    }
  };

  /*
    Entry structure:
    ID, topic, category, relevant periods,
    biblical description, historical context,
    evidence to examine, limitations,
    Scripture references, research source IDs.

    Historical summaries are editorial synthesis,
    not direct quotations from listed sources.

    Corpus links are research starting points,
    not citations to individually verified objects.
  */

  const records = [

    [
      "housing",
      "Houses and domestic architecture",
      "Household",
      ["iron","roman"],
      "Biblical texts mention houses, rooftops, upper rooms, doors and domestic courtyards.",
      "Iron Age settlements include pillared domestic buildings often described as four-room houses. Domestic space could accommodate food storage, processing and animals. Roman-period housing varied greatly between villages, urban apartments and wealthy residences.",
      "Building foundations, pillars, hearths, storage jars, roof materials and settlement plans.",
      "The four-room house was not universal, and building design alone cannot establish the ethnicity of its occupants.",
      ["Deuteronomy 22:8","Joshua 2:15","1 Kings 17:19","Mark 2:1-4","Acts 20:7-9"],
      ["miller","borowskiBook","met","bas"]
    ],

    [
      "family",
      "Family and extended households",
      "Household",
      ["ancient","iron","exile","greek","roman"],
      "Genealogies, inheritance narratives and household instructions emphasize family relationships and obligations.",
      "Ancient households could combine kinship, production, property ownership, dependents and enslaved persons. Household structures differed by wealth, region and historical period.",
      "Genealogies, domestic architecture, marriage contracts, inheritance documents and household inventories.",
      "Biblical genealogies can serve literary and theological purposes in addition to recording ancestry.",
      ["Genesis 46:8-27","Joshua 7:14","Ruth 4:13-22","Ephesians 6:1-9","1 Timothy 5:8"],
      ["borowskiBook","papyri","met","odyssey"]
    ],

    [
      "marriage",
      "Marriage and betrothal",
      "Household",
      ["ancient","iron","exile","greek","roman"],
      "Marriage narratives describe negotiations, gifts, family involvement and obligations.",
      "Marriage could establish alliances between families and organize property, inheritance and household responsibilities. Jewish, Greek and Roman legal arrangements were not identical.",
      "Marriage contracts, dowry records, legal texts and family correspondence.",
      "Do not treat every marriage narrative as a universal legal requirement or assume that later wedding traditions existed unchanged in earlier centuries.",
      ["Genesis 24","Genesis 29:15-30","Deuteronomy 24:1-4","Matthew 1:18-25","John 2:1-11"],
      ["cdli","papyri","sefaria","odyssey"]
    ],

    [
      "women",
      "Women, work and property",
      "Household",
      ["ancient","iron","exile","greek","roman"],
      "Scripture portrays women as agricultural workers, household managers, merchants, patrons, prophets and participants in religious communities.",
      "Women's social and legal opportunities varied with wealth, family position, citizenship, local law and historical circumstances. Documentary records attest to women's participation in economic transactions.",
      "Property documents, commercial correspondence, inscriptions, domestic production tools and burial evidence.",
      "Elite literary sources do not necessarily describe the experiences of all women.",
      ["Judges 4:4-9","Ruth 2","Proverbs 31:10-31","Luke 8:1-3","Acts 16:14-15","Romans 16:1-2"],
      ["papyri","borowskiBook","met","odyssey"]
    ],

    [
      "children",
      "Children and upbringing",
      "Household",
      ["iron","exile","greek","roman"],
      "Biblical literature addresses parental teaching, childhood, discipline and family responsibilities.",
      "Children participated in household activities and learned skills through family and community life. Access to formal education varied significantly.",
      "Educational texts, toys, inscriptions, household evidence and ancient biographies.",
      "Evidence does not support assuming universal literacy or a standardized school system across biblical society.",
      ["Deuteronomy 6:4-9","Proverbs 1:8-9","Luke 2:41-52","Ephesians 6:1-4"],
      ["borowskiBook","met","odyssey"]
    ],

    [
      "agriculture",
      "Agriculture and seasonal life",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Grain, vineyards, orchards, sowing, reaping and harvest imagery appear throughout Scripture.",
      "Wheat and barley were important crops in the southern Levant. Agriculture depended on local rainfall, soils, labor and access to water. Farming conditions differed substantially from irrigated regions of Egypt and Mesopotamia.",
      "Carbonized seeds, pollen, agricultural terraces, sickle blades, storage facilities and ancient agricultural texts.",
      "Modern agricultural calendars cannot be applied uniformly to every ancient region or historical period.",
      ["Genesis 26:12","Deuteronomy 8:7-9","Ruth 1:22","Amos 9:13","Matthew 13:3-9","James 5:7"],
      ["borowski","miller","abs","oracc"]
    ],

    [
      "gleaning",
      "Gleaning and poverty relief",
      "Food and agriculture",
      ["iron","exile"],
      "Israelite legal texts instruct landholders to leave certain agricultural produce for vulnerable persons, including foreigners, orphans and widows.",
      "Gleaning involves gathering produce remaining after harvesting. The book of Ruth presents this practice within a narrative of poverty, kinship and social protection.",
      "Agricultural tools, landholding records, legal traditions and harvest accounts.",
      "A prescribed legal obligation is not proof that every landowner consistently followed it.",
      ["Leviticus 19:9-10","Deuteronomy 24:19-22","Ruth 2"],
      ["borowskiBook","yale","odyssey"]
    ],

    [
      "shepherding",
      "Shepherds and livestock",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Sheep, goats, cattle and shepherding appear in agricultural accounts, sacrifices and metaphors for leadership.",
      "Livestock supplied food, fibers, hides and other resources. Herding practices depended on seasonal pasture, geography and household organization.",
      "Animal bones, sheepfolds, pastoral settlements, wool-processing tools and administrative records.",
      "Shepherd imagery often serves moral or theological purposes and does not necessarily describe literal pastoral techniques.",
      ["Genesis 30:25-43","1 Samuel 17:34-36","Psalm 23","Ezekiel 34","John 10:1-18"],
      ["borowski","borowskiBook","abs","oracc"]
    ],

    [
      "bread",
      "Bread, grain and milling",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Bread appears as ordinary food, sacrificial material, hospitality and religious symbolism.",
      "Grain processing required substantial labor. Milling stones, ovens and cooking installations provide evidence for food preparation in domestic and commercial settings.",
      "Grinding stones, ovens, grain remains, baking installations and ancient representations of food preparation.",
      "The shape, ingredients and preparation of ancient bread differed by region and available resources.",
      ["Genesis 18:6","Leviticus 2:1-7","Judges 7:13","Matthew 6:11","John 6:35"],
      ["borowski","borowskiBook","metObjects"]
    ],

    [
      "oil",
      "Olive cultivation and oil",
      "Food and agriculture",
      ["iron","exile","greek","roman"],
      "Olive oil appears in cooking, lighting, anointing and religious offerings.",
      "Olive processing produced oil through crushing and pressing. Archaeological installations reveal production at household and larger economic scales.",
      "Olive pits, crushing stones, pressing installations, storage vessels and commercial records.",
      "The function of a particular installation must be established through archaeological context rather than visual resemblance alone.",
      ["Exodus 27:20","Deuteronomy 8:8","2 Kings 4:1-7","Luke 10:34","James 5:14"],
      ["borowskiBook","british","metObjects"]
    ],

    [
      "wine",
      "Vineyards and wine production",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Wine and vineyards occur in agricultural descriptions, celebrations, prophetic imagery and religious observance.",
      "Grape cultivation and fermentation formed part of Mediterranean agriculture. Production and distribution involved pressing installations and storage containers.",
      "Grape remains, winepresses, jars, amphorae and commercial inscriptions.",
      "Not every rock-cut basin was a winepress, and archaeological evidence does not establish the symbolic meaning of an individual passage.",
      ["Genesis 9:20-21","Isaiah 5:1-7","Amos 9:14","John 2:1-11","1 Corinthians 11:20-26"],
      ["borowskiBook","metObjects","british"]
    ],

    [
      "water",
      "Water, wells and cisterns",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Wells, springs, cisterns and water collection feature in narratives and prophetic imagery.",
      "Communities used water-storage installations and natural sources according to local environmental conditions. Reliable water access affected settlement and agriculture.",
      "Rock-cut cisterns, channels, reservoirs, wells and hydraulic installations.",
      "Different water systems belong to different periods; later Roman infrastructure should not automatically be attributed to Iron Age settlements.",
      ["Genesis 24:11-20","2 Kings 20:20","Jeremiah 2:13","John 4:5-26"],
      ["borowskiBook","miller","metObjects"]
    ],

    [
      "fishing",
      "Fishing and maritime livelihoods",
      "Occupations",
      ["iron","greek","roman"],
      "Fishing is an important occupation and metaphor in the Gospels.",
      "Fishing supported communities near major lakes, rivers and coastal waters. Equipment, processing methods and trading arrangements varied by location.",
      "Fish remains, hooks, net weights, boat remains and harbour installations.",
      "A boat or fishing object cannot be assigned to a named biblical individual without specific identifying evidence.",
      ["Ezekiel 47:10","Matthew 4:18-22","Luke 5:1-11","John 21:1-14"],
      ["abs","british","metObjects"]
    ],

    [
      "textiles",
      "Textiles, weaving and clothing",
      "Occupations",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts mention wool, linen, garments, weaving and dyed fabrics.",
      "Textile production involved acquiring fibers, spinning, weaving and sometimes dyeing. Clothing could communicate occupation, status and cultural identity.",
      "Spindle whorls, loom weights, preserved textiles, dye residues and visual representations.",
      "Organic materials often decay, making complete reconstructions uncertain.",
      ["Exodus 28:1-43","Proverbs 31:13-24","Ezekiel 27:7","Acts 16:14","John 19:23-24"],
      ["borowskiBook","metObjects","british","bas"]
    ],

    [
      "pottery",
      "Pottery and ceramic production",
      "Occupations",
      ["ancient","iron","exile","greek","roman"],
      "Clay vessels appear in food storage, cooking, ritual imagery and prophetic demonstrations.",
      "Pottery is particularly important to archaeological chronology because ceramic forms and production techniques changed over time.",
      "Kilns, pottery fragments, vessel forms, petrographic analyses and sealed archaeological deposits.",
      "A pottery type generally provides a date range, not an exact year or identification of its owner.",
      ["Jeremiah 18:1-6","Jeremiah 19:1-11","Lamentations 4:2","2 Corinthians 4:7"],
      ["borowskiBook","british","metObjects"]
    ],

    [
      "metalwork",
      "Metalworking and technology",
      "Occupations",
      ["ancient","iron","exile","greek","roman"],
      "Scripture describes metal tools, weapons, jewelry and religious objects.",
      "Copper alloys and iron were important materials. Production involved specialized knowledge of smelting, refining, casting or forging, depending on the metal.",
      "Slag, furnaces, molds, crucibles, tools and metallurgical analyses.",
      "The transition between archaeological metal-age classifications was gradual and regionally variable.",
      ["Genesis 4:22","Exodus 31:1-5","1 Samuel 13:19-22","Isaiah 44:12","Acts 19:24"],
      ["british","metObjects","borowskiBook"]
    ],

    [
      "builders",
      "Builders, artisans and carpentry",
      "Occupations",
      ["ancient","iron","exile","greek","roman"],
      "Biblical narratives describe construction workers, skilled craftsmen and artisans.",
      "Building could involve stoneworking, timber preparation, plastering and other specialized crafts. The Greek word tekton can denote a craftsman or builder and should not always be restricted to modern carpentry.",
      "Tools, unfinished building materials, construction traces, workshop remains and occupational inscriptions.",
      "The Gospel descriptions do not establish precisely which materials Jesus or Joseph worked with.",
      ["Exodus 35:30-35","1 Kings 5:13-18","Nehemiah 3","Matthew 13:55","Mark 6:3"],
      ["abs","step","bas","metObjects"]
    ],

    [
      "trade",
      "Trade, merchants and markets",
      "Economics",
      ["ancient","iron","exile","greek","roman"],
      "Biblical writings describe merchants, imported goods, markets and economic misconduct.",
      "Long-distance trade connected communities through land and maritime networks. Local markets distributed food, manufactured goods and other resources.",
      "Commercial documents, imported ceramics, seals, cargo remains and standardized weights.",
      "Imported goods demonstrate exchange networks but do not always identify the precise route or merchant involved.",
      ["Genesis 37:25-28","Ezekiel 27","Amos 8:4-6","Matthew 21:12-13","Revelation 18:11-19"],
      ["oracc","papyri","met","british"]
    ],

    [
      "weights",
      "Weights, measures and silver",
      "Economics",
      ["ancient","iron","exile","greek","roman"],
      "Shekels, talents, ephahs and other units appear in commercial, legal and religious contexts.",
      "Precious metal could be weighed for transactions before widespread coin use. Weight and capacity systems differed by place and period.",
      "Inscribed weights, balances, metal hoards, measuring vessels and transaction documents.",
      "A shekel was originally a weight designation, not necessarily a minted coin. Exact modern conversions depend on the historical standard being used.",
      ["Genesis 23:16","Leviticus 19:35-36","Proverbs 11:1","Amos 8:5"],
      ["british","cdli","borowskiBook","step"]
    ],

    [
      "coins",
      "Coins and monetary systems",
      "Economics",
      ["exile","greek","roman"],
      "New Testament passages mention denarii, drachmas and other monetary denominations.",
      "Coinage circulated under Persian, Hellenistic, Jewish and Roman authorities. Coins may carry portraits, symbols, inscriptions and political messages.",
      "Coin hoards, excavated coins, minting records, legends and numismatic catalogues.",
      "Ancient coin values cannot be reliably converted into a single modern dollar amount. Purchasing power varied.",
      ["Matthew 20:1-16","Matthew 22:15-22","Mark 12:41-44","Luke 15:8-10"],
      ["coins","rrc","british"]
    ],

    [
      "taxation",
      "Taxes, tribute and administration",
      "Economics",
      ["ancient","iron","exile","greek","roman"],
      "Scripture describes tribute, royal levies, taxation and tax collectors.",
      "Ancient governments extracted resources through labor obligations, agricultural levies, tribute and monetary payments. Systems differed among kingdoms and empires.",
      "Tax receipts, royal inscriptions, administrative tablets, ostraca and official correspondence.",
      "A biblical reference to taxation does not establish the precise tax rate or complete administrative system.",
      ["1 Kings 12:1-19","2 Kings 23:35","Nehemiah 5:1-5","Matthew 9:9","Luke 19:1-10","Romans 13:6-7"],
      ["oracc","cdli","papyri","met"]
    ],

    [
      "debt",
      "Debt, loans and economic hardship",
      "Economics",
      ["ancient","iron","exile","greek","roman"],
      "Biblical laws and narratives address borrowing, debt release, poverty and exploitation.",
      "Credit could support agricultural production and trade but also expose households to land loss, dependency and servitude.",
      "Loan contracts, interest agreements, debt records and ancient legal collections.",
      "Legal prescriptions concerning debt release do not demonstrate that such releases were consistently practiced.",
      ["Exodus 22:25-27","Deuteronomy 15:1-11","2 Kings 4:1","Nehemiah 5:1-13","Matthew 18:23-35"],
      ["cdli","oracc","papyri","yale"]
    ],

    [
      "slavery",
      "Slavery and dependent labor",
      "Law and society",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts describe slavery, debt-related servitude, captive labor and relationships between enslaved persons and owners.",
      "Ancient slavery involved profound inequality and restricted freedom. Conditions varied by legal system, status and occupation. Enslavement could result from warfare, birth, sale or other circumstances.",
      "Slave-sale documents, manumission inscriptions, legal texts, household records and correspondence.",
      "Ancient slavery must not be reduced to voluntary employment. Differences between historical systems do not remove coercion or exploitation.",
      ["Exodus 21:2-11","Leviticus 25:39-46","Deuteronomy 23:15-16","Ephesians 6:5-9","Philemon 8-21"],
      ["papyri","cdli","met","yaleNT"]
    ],

    [
      "land",
      "Land ownership and inheritance",
      "Law and society",
      ["ancient","iron","exile","greek","roman"],
      "Land allotments, inheritance, redemption and disputes over property appear throughout Scripture.",
      "Land was an economic resource and a foundation of household security. Ownership, tenancy and transfer operated within differing customary and legal arrangements.",
      "Land-sale tablets, boundary descriptions, property contracts and administrative records.",
      "Biblical land laws and narrative ideals must be distinguished from demonstrated historical practice.",
      ["Leviticus 25:23-34","Numbers 27:1-11","Ruth 4:1-12","1 Kings 21","Jeremiah 32:6-15"],
      ["cdli","papyri","borowskiBook","yale"]
    ],

    [
      "courts",
      "Courts, witnesses and justice",
      "Law and society",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts describe elders, judges, witnesses and judicial proceedings.",
      "Ancient justice could involve local authorities, royal officials or imperial institutions. City gates were significant public spaces in some Israelite narratives.",
      "Court documents, legal collections, administrative correspondence and public architecture.",
      "Do not equate ancient judicial institutions with modern independent court systems or constitutional rights.",
      ["Deuteronomy 16:18-20","Deuteronomy 19:15-21","Ruth 4:1-12","Amos 5:10-15","Acts 25:1-12"],
      ["oracc","cdli","papyri","yale"]
    ],

    [
      "hospitality",
      "Hospitality and social obligations",
      "Law and society",
      ["ancient","iron","exile","greek","roman"],
      "Biblical narratives portray the reception of travelers, the provision of food and lodging, and obligations toward guests.",
      "Hospitality could create reciprocal relationships and provide protection in environments where travel and accommodation were uncertain.",
      "Travel correspondence, ancient literary accounts, domestic architecture and guest-host traditions.",
      "Narrative portrayals of hospitality may communicate moral ideals rather than document universal social behavior.",
      ["Genesis 18:1-8","Judges 19:16-21","Luke 10:30-37","Romans 12:13","Hebrews 13:2"],
      ["odyssey","perseus","met"]
    ],

    [
      "honor",
      "Honor, shame and social status",
      "Law and society",
      ["iron","exile","greek","roman"],
      "Biblical writings refer to reputation, public disgrace, social rank and concern for one's name.",
      "Reputation and social standing were important in many ancient Mediterranean societies. Family relationships, wealth, citizenship and public recognition could influence status.",
      "Honorific inscriptions, biographies, legal texts and public monuments.",
      "Honor-shame models are interpretive frameworks, not universal explanations of every ancient person's motivation.",
      ["Proverbs 22:1","Luke 14:7-11","Romans 12:10","Philippians 2:3-11","James 2:1-7"],
      ["met","perseus","yaleNT"]
    ],

    [
      "patronage",
      "Patronage and benefaction",
      "Law and society",
      ["greek","roman"],
      "New Testament texts describe benefactors, hospitality, financial support and social obligations.",
      "Patronage linked people through unequal exchanges of assistance, resources, influence and loyalty. Public benefactions could also confer civic prestige.",
      "Honorific inscriptions, civic decrees, financial records and literary descriptions.",
      "Not every gift or relationship of support in the New Testament should be classified automatically as formal Roman patronage.",
      ["Luke 7:1-5","Luke 22:24-27","Romans 16:1-2","Philippians 4:10-18"],
      ["met","papyri","perseus","yaleNT"]
    ],

    [
      "literacy",
      "Literacy, scribes and education",
      "Language and education",
      ["ancient","iron","exile","greek","roman"],
      "Biblical writings describe scribes, letters, written law and the public reading of texts.",
      "Writing supported administration, commerce, religious traditions and communication. Literacy levels and the ability to compose documents differed across society.",
      "Ostraca, inscriptions, writing exercises, papyri, tablets and manuscript remains.",
      "The survival of writing establishes the existence of literate individuals, not universal population literacy.",
      ["Deuteronomy 31:9-13","Jeremiah 36","Ezra 7:6","Nehemiah 8:1-8","Luke 4:16-21"],
      ["borowskiBook","cdli","papyri","dss"]
    ],

    [
      "languages",
      "Languages of the biblical world",
      "Language and education",
      ["ancient","iron","exile","greek","roman"],
      "The biblical corpus includes Hebrew, Aramaic and Greek. Certain passages explicitly identify linguistic differences.",
      "Language use changed through migration, imperial administration and cultural contact. Aramaic became widely used across parts of the Near East, while Greek was prominent in the Hellenistic and Roman eastern Mediterranean.",
      "Multilingual inscriptions, manuscripts, administrative texts and documentary papyri.",
      "The language of a surviving written Gospel does not prove the precise spoken language of every recorded conversation.",
      ["2 Kings 18:26","Ezra 4:8","Daniel 2:4","Acts 21:37-40","John 19:20"],
      ["step","dss","oracc","papyri"]
    ],

    [
      "temple",
      "Temples, sanctuaries and worship",
      "Religion and ritual",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts describe altars, sanctuaries, priesthoods and temple worship.",
      "Temples could function as religious, administrative and economic institutions. Their architecture and practices varied between societies.",
      "Sanctuary remains, ritual objects, inscriptions, architectural plans and religious texts.",
      "The existence of an ancient sanctuary does not establish that every biblical ritual associated with it occurred as described.",
      ["Exodus 25:8","1 Kings 6","2 Kings 23","Ezra 6:13-18","John 2:13-22"],
      ["yale","oracc","british","odyssey"]
    ],

    [
      "sacrifice",
      "Sacrifices and offerings",
      "Religion and ritual",
      ["ancient","iron","exile","greek","roman"],
      "Levitical texts distinguish several kinds of offerings with differing ritual purposes.",
      "Animal and agricultural offerings formed part of numerous ancient religious systems. Israelite and Jewish practices must be interpreted within their specific textual and historical settings.",
      "Altars, faunal remains, ritual installations and liturgical or administrative documents.",
      "Similar sacrificial practices in neighboring societies do not necessarily imply identical theology or direct literary dependence.",
      ["Leviticus 1","Leviticus 2","Leviticus 16","1 Samuel 15:22","Hebrews 10:1-18"],
      ["yale","oracc","borowskiBook","odyssey"]
    ],

    [
      "sabbath",
      "Sabbath and sacred time",
      "Religion and ritual",
      ["iron","exile","greek","roman"],
      "Biblical laws prescribe Sabbath rest, and later texts discuss its observance and interpretation.",
      "Sabbath observance became a significant feature of Jewish religious life. Interpretations of appropriate conduct developed within different communities.",
      "Biblical legal texts, Second Temple Jewish writings and later rabbinic discussions.",
      "Later rabbinic regulations cannot automatically establish first-century or Iron Age practice.",
      ["Exodus 20:8-11","Deuteronomy 5:12-15","Nehemiah 13:15-22","Mark 2:23-28","Luke 13:10-17"],
      ["sefaria","dss","yale","yaleNT"]
    ],

    [
      "festivals",
      "Festivals and religious calendars",
      "Religion and ritual",
      ["iron","exile","greek","roman"],
      "Scripture describes Passover, Unleavened Bread, Weeks, Booths and other sacred occasions.",
      "Agricultural seasons, communal memory and religious observance shaped festival calendars. Historical developments affected how festivals were celebrated.",
      "Biblical calendars, pilgrimage traditions, ancient Jewish writings and calendar documents.",
      "Different Jewish groups could disagree about calendar calculations. Modern dates vary annually for lunar-based observances.",
      ["Exodus 12","Leviticus 23","Deuteronomy 16","John 7:2","Acts 2:1"],
      ["yale","dss","sefaria","odyssey"]
    ],

    [
      "purity",
      "Ritual purity and cleansing",
      "Religion and ritual",
      ["iron","exile","greek","roman"],
      "Biblical laws address ritual impurity associated with bodily conditions, death and other circumstances.",
      "Ritual purity concerned participation in sacred life. Archaeological evidence from the Second Temple period includes stepped pools commonly identified as ritual baths.",
      "Ritual installations, stone vessels, legal texts and ancient Jewish writings.",
      "Ritual impurity is not necessarily moral wrongdoing, physical dirt or infectious disease. Individual installations require contextual interpretation.",
      ["Leviticus 11","Leviticus 15","Numbers 19","Mark 7:1-23","John 2:6"],
      ["yale","dss","sefaria","odyssey"]
    ],

    [
      "synagogue",
      "Synagogues and communal gatherings",
      "Religion and ritual",
      ["greek","roman"],
      "The Gospels and Acts describe synagogues as settings for reading, teaching and communal activity.",
      "Ancient synagogues served Jewish communal functions. Their architectural forms and precise institutional development varied.",
      "Synagogue inscriptions, assembly buildings, architectural remains and literary testimony.",
      "Later synagogue layouts, leadership structures and liturgies should not be projected unchanged into the first century.",
      ["Luke 4:16-30","Mark 1:21-28","Acts 13:14-16","Acts 17:1-3"],
      ["odyssey","british","yaleNT"]
    ],

    [
      "church",
      "Early Christian gatherings",
      "Religion and ritual",
      ["roman"],
      "New Testament letters describe communal meals, teaching, prayer, worship and gatherings associated with households.",
      "Early Christian communities operated within Roman urban and domestic environments. Surviving literary evidence indicates considerable diversity in community organization.",
      "Early Christian writings, household architecture, inscriptions and later meeting-space archaeology.",
      "Later purpose-built churches and developed liturgical institutions cannot automatically be assigned to first-century communities.",
      ["Acts 2:42-47","Romans 16:3-5","1 Corinthians 11:17-34","Colossians 4:15"],
      ["yaleNT","met","odyssey"]
    ],

    [
      "lamps",
      "Lighting and oil lamps",
      "Material culture",
      ["ancient","iron","exile","greek","roman"],
      "Lamps appear in domestic descriptions, worship and parables.",
      "Ceramic oil lamps were common lighting devices. Their shapes, styles and manufacturing methods changed over time.",
      "Excavated lamps, residues, manufacturing molds and archaeological contexts.",
      "The symbolic meaning of a lamp in a passage must be established through literary context, not solely through artifact comparison.",
      ["Exodus 27:20-21","1 Samuel 3:3","Psalm 119:105","Matthew 5:15","Matthew 25:1-13"],
      ["british","metObjects","borowskiBook"]
    ],

    [
      "seals",
      "Seals and administrative identity",
      "Material culture",
      ["ancient","iron","exile","greek","roman"],
      "Seals and signet rings appear in biblical accounts of authority, transactions and document authentication.",
      "Seals could identify individuals, institutions or ownership and could secure containers and documents.",
      "Cylinder seals, stamp seals, clay seal impressions and associated inscriptions.",
      "A name on an artifact does not automatically identify its owner as a biblical person with the same name.",
      ["Genesis 38:18","1 Kings 21:8","Esther 8:8","Jeremiah 32:10-14"],
      ["british","metObjects","cdli"]
    ],

    [
      "music",
      "Music and musical instruments",
      "Material culture",
      ["ancient","iron","exile","greek","roman"],
      "Scripture refers to singing, stringed instruments, horns, percussion and worship music.",
      "Music accompanied religious observances, public celebrations, mourning and entertainment.",
      "Instrument remains, figurines, reliefs, inscriptions and ancient literary descriptions.",
      "The exact sounds, tuning systems and meanings of some ancient instrument names remain uncertain.",
      ["Genesis 4:21","1 Samuel 16:23","Psalm 150","Daniel 3:5","Ephesians 5:19"],
      ["borowskiBook","metObjects","british","step"]
    ],

    [
      "meals",
      "Meals, dining and banquets",
      "Food and agriculture",
      ["ancient","iron","exile","greek","roman"],
      "Meals serve as settings for hospitality, covenant relationships, celebration and religious teaching.",
      "Dining arrangements could express social hierarchy. Some Greco-Roman banquets used reclining arrangements, particularly in wealthier settings.",
      "Dining rooms, ceramic vessels, food remains, paintings and literary accounts.",
      "Elite banquet customs cannot be generalized to all ordinary meals or households.",
      ["Genesis 43:31-34","Esther 1:3-8","Luke 14:7-24","John 13:23-26","1 Corinthians 11:17-34"],
      ["met","bas","perseus"]
    ],

    [
      "roads",
      "Roads, travel and transportation",
      "Travel and communication",
      ["ancient","iron","exile","greek","roman"],
      "Journeys, roads, pack animals and travel difficulties feature throughout biblical narratives.",
      "Travel depended on terrain, weather, political conditions, available transport and access to supplies. Roman roads supported military movement, administration and commerce.",
      "Road remains, milestones, bridges, travel documents and geographical descriptions.",
      "A modern road or traditional pilgrimage route does not establish the precise route of a biblical journey.",
      ["Genesis 24:10","Isaiah 40:3-4","Luke 10:30","Acts 8:26-39","Acts 28:13-16"],
      ["met","perseus","british"]
    ],

    [
      "shipping",
      "Ships and maritime travel",
      "Travel and communication",
      ["ancient","iron","greek","roman"],
      "Scripture describes maritime commerce, journeys and the dangers of seafaring.",
      "Mediterranean shipping connected ports and transported grain, manufactured goods and passengers. Weather and seasonal conditions strongly affected voyages.",
      "Shipwrecks, anchors, amphorae, harbor facilities and maritime literary accounts.",
      "Ancient nautical terminology can be difficult to translate precisely. Archaeological parallels do not identify a particular biblical vessel.",
      ["1 Kings 9:26-28","Jonah 1","Ezekiel 27","Acts 27"],
      ["met","british","perseus"]
    ],

    [
      "letters",
      "Letters and messengers",
      "Travel and communication",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts preserve letters, royal communications and instructions carried by messengers.",
      "Correspondence could use clay tablets, ostraca, papyrus or other materials. Delivery relied on messengers, official systems and private travelers.",
      "Documentary letters, writing materials, seals and administrative archives.",
      "Literary reproductions of letters are not necessarily surviving original documents.",
      ["2 Samuel 11:14-15","2 Kings 19:14","Ezra 4:11-16","Acts 15:22-31","Colossians 4:16"],
      ["cdli","oracc","papyri","borowskiBook"]
    ],

    [
      "medicine",
      "Medicine, disease and healing",
      "Health and life cycle",
      ["ancient","iron","exile","greek","roman"],
      "Biblical passages describe illness, physicians, treatments, healing and care for vulnerable persons.",
      "Ancient healing combined practical treatment with diverse religious and medical understandings. Access to care depended on location and resources.",
      "Medical texts, instruments, skeletal pathology, botanical evidence and literary accounts.",
      "Ancient disease terms may not correspond directly to modern diagnoses. Biblical descriptions are not modern medical advice.",
      ["2 Kings 20:7","2 Chronicles 16:12","Isaiah 38:21","Mark 5:25-34","Luke 10:34","Colossians 4:14"],
      ["metObjects","british","perseus","odyssey"]
    ],

    [
      "burial",
      "Death, burial and tombs",
      "Health and life cycle",
      ["ancient","iron","exile","greek","roman"],
      "Burial narratives describe family tombs, mourning and the preparation of bodies.",
      "Burial practices differed across communities. Rock-cut tombs, individual graves and collective family burial are documented in different periods. Ossuaries occur in particular late Second Temple Jewish burial contexts.",
      "Tomb architecture, human remains, ossuaries, grave goods and funerary inscriptions.",
      "A burial form does not by itself identify an individual or establish that all members of a community followed the same practice.",
      ["Genesis 23","Genesis 50:24-26","2 Kings 23:16-18","John 11:38-44","John 19:38-42"],
      ["british","metObjects","odyssey","borowskiBook"]
    ],

    [
      "mourning",
      "Mourning and lamentation",
      "Health and life cycle",
      ["ancient","iron","exile","greek","roman"],
      "Biblical portrayals of mourning include weeping, torn garments, fasting and lament.",
      "Ancient mourning expressed grief through culturally recognizable actions and communal observances. These practices could also appear in public responses to collective disaster.",
      "Lament texts, funerary representations, inscriptions and ancient literary descriptions.",
      "Poetic and narrative portrayals may intensify ritual imagery for literary purposes.",
      ["Genesis 37:34-35","2 Samuel 1:17-27","Job 1:20","Lamentations 1","John 11:31-35"],
      ["oracc","perseus","odyssey"]
    ],

    [
      "warfare",
      "Warfare and military society",
      "Government and military",
      ["ancient","iron","exile","greek","roman"],
      "Biblical narratives and prophetic texts describe armies, fortifications, sieges and the consequences of war.",
      "Military institutions affected taxation, settlement, displacement and political authority. Imperial representations often promoted the power and legitimacy of rulers.",
      "Fortifications, destruction deposits, military inscriptions, reliefs and administrative documents.",
      "Royal victory accounts can contain propaganda. Archaeological destruction layers require independent dating and causal evaluation.",
      ["Joshua 6","2 Kings 18:13-17","Isaiah 36","Nehemiah 4","Luke 21:20-24"],
      ["oracc","british","borowskiBook","met"]
    ],

    [
      "kingship",
      "Kingship and royal administration",
      "Government and military",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts portray kings, royal households, officials, tribute and disputes over political authority.",
      "Ancient rulers governed through institutions involving administration, resource extraction, diplomacy and military power.",
      "Royal inscriptions, seals, administrative archives, palaces and official correspondence.",
      "Royal titles and claims must be evaluated according to their historical political and literary contexts.",
      ["1 Samuel 8:10-18","1 Kings 4:1-28","2 Kings 18","Esther 1","Luke 2:1-3"],
      ["oracc","cdli","british","yale"]
    ],

    [
      "empire",
      "Empire, citizenship and provincial government",
      "Government and military",
      ["exile","greek","roman"],
      "Biblical texts describe imperial decrees, governors, provincial authorities and Roman citizenship.",
      "Imperial rule involved different administrative arrangements across territories. Roman citizenship conveyed specific legal privileges, but inhabitants of Roman-controlled lands did not all possess citizenship.",
      "Decrees, inscriptions, coins, legal documents and administrative correspondence.",
      "The legal status of an individual or province must be established for the relevant historical date.",
      ["Ezra 1:1-4","Nehemiah 2:7-9","Luke 3:1-2","Acts 16:35-39","Acts 22:25-29"],
      ["papyri","coins","met","perseus"]
    ],

    [
      "games",
      "Athletics and public entertainment",
      "Material culture",
      ["greek","roman"],
      "New Testament authors employ imagery related to athletic competition, discipline and prizes.",
      "Athletic competitions formed part of Greek and Roman public culture. Events differed in religious associations, sponsorship and local significance.",
      "Stadium remains, athletic inscriptions, victory monuments and literary accounts.",
      "Athletic metaphors do not prove that the author personally attended a particular sporting event.",
      ["1 Corinthians 9:24-27","Philippians 3:13-14","2 Timothy 2:5","Hebrews 12:1"],
      ["met","perseus","metObjects"]
    ],

    [
      "foreigners",
      "Foreigners, migrants and social identity",
      "Law and society",
      ["ancient","iron","exile","greek","roman"],
      "Biblical texts describe migration, resident foreigners, exile and obligations toward outsiders.",
      "Movement between territories occurred through trade, displacement, migration, imperial resettlement and family relationships. Legal and social classifications differed across societies.",
      "Migration records, administrative texts, personal names, inscriptions and settlement evidence.",
      "Ancient terms for foreigners and resident aliens should not be equated automatically with modern immigration categories.",
      ["Genesis 12:10","Exodus 22:21","Leviticus 19:33-34","Ruth 1","Ezra 1","Ephesians 2:11-22"],
      ["oracc","papyri","yale","odyssey"]
    ]

  ].map(([id,title,category,era,text,context,evidence,limits,refs,sourceIds]) => ({
    id,title,category,era,text,context,evidence,limits,refs,sourceIds
  }));

  const books = "Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation".split("|");

  const chapterCounts = [
    50,40,27,36,34,24,21,4,31,24,
    22,25,29,36,10,13,10,42,150,31,
    12,8,66,52,5,48,12,14,3,9,
    1,4,7,3,9-6,3,2,14,4,28,
    16,24,21,28,16,16,13,6,6,4,
    4,5,3,6,4,3,1,13,5,5,
    3,5,1,1,1,22
  ];

  const root = document.createElement("div");

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>
      .dbcl {
        color:var(--text,#f1efe7);
        line-height:1.75;
      }

      .dbcl .cl-panel {
        margin:18px 0;
        padding:20px;
        border:1px solid var(--line,#34352e);
        border-radius:12px;
        background:var(--panel2,#20211d);
      }

      .dbcl .cl-grid {
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
        gap:12px;
      }

      .dbcl .cl-card {
        margin:12px 0;
        padding:18px;
        border:1px solid var(--line,#34352e);
        border-radius:9px;
        background:var(--panel,#191a17);
      }

      .dbcl .cl-gold {
        color:var(--gold,#c9aa70);
      }

      .dbcl .cl-muted {
        color:var(--muted,#aaa99e);
        font-size:13px;
      }

      .dbcl .cl-stat {
        font-size:28px;
        font-weight:bold;
        color:var(--gold,#c9aa70);
      }

      .dbcl .cl-note {
        padding:12px;
        margin:12px 0;
        border-left:3px solid var(--gold,#c9aa70);
        background:var(--bg,#10110f);
      }

      .dbcl .cl-actions {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin:12px 0;
      }

      .dbcl input,
      .dbcl select,
      .dbcl textarea {
        box-sizing:border-box;
        width:100%;
        padding:11px;
        border:1px solid var(--line,#34352e);
        border-radius:7px;
        background:var(--bg,#10110f);
        color:var(--text,#f1efe7);
        font:inherit;
      }

      .dbcl textarea {
        min-height:160px;
        resize:vertical;
      }

      .dbcl label {
        display:block;
        margin:6px 0;
        font-size:13px;
      }

      .dbcl summary {
        cursor:pointer;
        color:var(--gold,#c9aa70);
        font-weight:600;
      }

      .dbcl details {
        padding:12px 0;
        border-bottom:1px solid var(--line,#34352e);
      }

      .dbcl a {
        color:var(--gold,#c9aa70);
        overflow-wrap:anywhere;
      }

      .dbcl button[aria-pressed="true"] {
        border-color:var(--gold,#c9aa70);
        color:var(--gold,#c9aa70);
      }

      .dbcl .cl-era {
        padding:15px;
        margin:12px 0;
        border-left:2px solid var(--gold,#c9aa70);
      }

      .dbcl .cl-scripture {
        white-space:pre-wrap;
        padding:15px;
        background:var(--bg,#10110f);
        border-radius:8px;
      }

      @media(max-width:600px) {
        .dbcl .cl-panel,
        .dbcl .cl-card {
          padding:12px;
        }
      }
    </style>

    <div class="dbcl">

      <div class="eyebrow">
        DESERTBIBLE · SOCIAL HISTORY
      </div>

      <h2>Culture &amp; Daily Life</h2>

      <p>
        Explore the households, occupations,
        customs, institutions and material culture
        of the biblical world.
      </p>

      <section class="cl-panel">

        <div class="cl-grid">

          <div>
            <div class="cl-stat" id="clTopics"></div>
            Cultural studies
          </div>

          <div>
            <div class="cl-stat" id="clCategories"></div>
            Research categories
          </div>

          <div>
            <div class="cl-stat" id="clSources"></div>
            Research resources
          </div>

          <div>
            <div class="cl-stat" id="clReferences"></div>
            Passage references
          </div>

        </div>

        <div class="cl-note">
          <strong>Historical research standard</strong>

          <p>
            Biblical descriptions, archaeological
            findings, comparative ancient evidence
            and modern reconstructions are distinct
            categories of information.
          </p>

          <p>
            A practice documented in one region
            or century must not automatically be
            attributed to another.
          </p>
        </div>

      </section>

      <section class="cl-panel">

        <h3>01 · Historical Periods</h3>

        <p>
          Select a period to investigate its
          associated cultural studies.
        </p>

        <div id="clTimeline"></div>

        <p class="cl-muted">
          Dates are approximate historical frameworks,
          not dates assigned to every biblical narrative.
        </p>

      </section>

      <section class="cl-panel">

        <h3>02 · Cultural Research Explorer</h3>

        <div class="cl-grid">

          <div>
            <label for="clSearch">Search cultural topics</label>
            <input id="clSearch"
              type="search"
              placeholder="Marriage, bread, taxes, burial...">
          </div>

          <div>
            <label for="clCategory">Cultural category</label>
            <select id="clCategory">
              <option value="all">All categories</option>
            </select>
          </div>

          <div>
            <label for="clPeriod">Historical period</label>
            <select id="clPeriod">
              <option value="all">All periods</option>
            </select>
          </div>

          <div>
            <label for="clBook">Biblical book</label>
            <select id="clBook">
              <option value="all">All biblical books</option>
            </select>
          </div>

          <div>
            <label for="clChapter">Biblical chapter</label>
            <select id="clChapter">
              <option value="all">All chapters</option>
            </select>
          </div>

          <div>
            <label for="clSort">Sort results</label>
            <select id="clSort">
              <option value="category">Category order</option>
              <option value="az">Alphabetical</option>
              <option value="saved">Bookmarked studies</option>
            </select>
          </div>

        </div>

        <div class="cl-actions">

          <button type="button" id="clReset">
            Reset filters
          </button>

          <button type="button" id="clExportResults">
            Export matching studies
          </button>

        </div>

        <p id="clCount" role="status"
           aria-live="polite"></p>

        <div id="clResults"></div>

        <div class="cl-actions">

          <button type="button" id="clPrev">
            Previous results
          </button>

          <span id="clPage"></span>

          <button type="button" id="clNext">
            Next results
          </button>

        </div>

      </section>

      <section class="cl-panel" id="clProfile" hidden>

        <div class="eyebrow">
          CULTURAL RESEARCH PROFILE
        </div>

        <h3 id="clTitle"></h3>

        <div id="clDetails"></div>

        <h4>Scripture Investigation</h4>

        <div class="cl-grid">

          <div>
            <label for="clReference">Related passage</label>
            <select id="clReference"></select>
          </div>

          <div>
            <label for="clTranslation">Translation</label>
            <select id="clTranslation">
              <option value="web">World English Bible</option>
              <option value="kjv">King James Version</option>
              <option value="asv">American Standard Version</option>
            </select>
          </div>

        </div>

        <div class="cl-actions">

          <button type="button" id="clLoad">
            Read passage
          </button>

        </div>

        <p id="clStatus" role="status"
           aria-live="polite"></p>

        <div class="cl-scripture" id="clScripture"></div>

        <h4>Research Notes</h4>

        <textarea id="clNotes"
          aria-label="Personal cultural research notes"
          placeholder="Record observations, artifact IDs, publications, pages and unresolved questions."></textarea>

        <div class="cl-actions">

          <button type="button" id="clSaveNotes">
            Save notes
          </button>

          <button type="button" id="clBookmark">
            Bookmark study
          </button>

          <button type="button" id="clCopy">
            Copy study
          </button>

          <button type="button" id="clDownload">
            Download study
          </button>

        </div>

        <p id="clMessage" role="status"
           aria-live="polite"></p>

      </section>

      <section class="cl-panel">

        <h3>03 · Seasonal Agricultural Cycle</h3>

        <p>
          Generalized seasonal framework for
          Mediterranean agriculture in the southern Levant.
        </p>

        <div id="clSeasons"></div>

        <p class="cl-muted">
          Actual planting and harvest dates varied
          according to rainfall, altitude, crop,
          location and historical conditions.
        </p>

      </section>

      <section class="cl-panel">

        <h3>04 · Biblical Festival Calendar</h3>

        <p>
          Scriptural festival dates and their
          approximate modern seasonal placement.
        </p>

        <div id="clFestivals"></div>

        <p class="cl-muted">
          Month names follow conventional Jewish
          calendar terminology. Fixed Gregorian
          dates are deliberately not assigned.
        </p>

      </section>

      <section class="cl-panel">

        <h3>05 · Biblical Units and Currency</h3>

        <div id="clUnits"></div>

        <p class="cl-muted">
          These are historical unit descriptions,
          not universal modern conversions.
        </p>

      </section>

      <section class="cl-panel">

        <h3>06 · Archaeological Evidence Guide</h3>

        <div id="clEvidenceGuide"></div>

      </section>

      <section class="cl-panel">

        <h3>07 · Research Sources and Bibliography</h3>

        <label for="clSourceSearch">
          Search publications, institutions and collections
        </label>

        <input id="clSourceSearch"
          type="search"
          placeholder="Borowski, coins, papyri...">

        <div id="clLibrary"></div>

      </section>

      <section class="cl-panel">

        <h3>08 · Saved Cultural Studies</h3>

        <div id="clSaved"></div>

      </section>

      <section class="cl-panel">

        <h3>09 · Historical Interpretation Standards</h3>

        <div id="clStandards"></div>

      </section>

      <button type="button" id="clClose">
        Return to research categories
      </button>

    </div>
  `;

  const $ = id => root.querySelector("#" + id);

  function make(tag,text,parent) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }

    if (parent) parent.appendChild(element);

    return element;
  }

  function link(parent,title,url) {
    const element = make("a",title,parent);
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    return element;
  }

  function button(parent,title,action) {
    const element = make("button",title,parent);
    element.type = "button";
    element.addEventListener("click",action);
    return element;
  }

  function option(parent,value,title) {
    const element = make("option",title,parent);
    element.value = value;
    return element;
  }

  function readStorage(key,fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeStorage(key,value) {
    try {
      localStorage.setItem(key,JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  const notesKey = "DesertBible.culture.notes.v1";
  const bookmarkKey = "DesertBible.culture.bookmarks.v1";

  let notes = readStorage(notesKey,{});

  if (!notes || typeof notes !== "object" || Array.isArray(notes)) {
    notes = {};
  }

  let saved = readStorage(bookmarkKey,[]);

  if (!Array.isArray(saved)) saved = [];

  let active = null;
  let page = 0;
  let requestNumber = 0;

  const pageSize = 8;
  const cache = new Map();

  const categoryNames = [
    ...new Set(records.map(record => record.category))
  ].sort();

  $("clTopics").textContent = records.length;
  $("clCategories").textContent = categoryNames.length;
  $("clSources").textContent = Object.keys(sources).length;

  $("clReferences").textContent =
    new Set(records.flatMap(record => record.refs)).size;

  categoryNames.forEach(category => {
    option($("clCategory"),category,category);
  });

  periods.forEach(period => {
    option($("clPeriod"),period[0],period[1]);
  });

  books.forEach(book => {
    option($("clBook"),book,book);
  });

  function updateChapters() {
    $("clChapter").replaceChildren();
    option($("clChapter"),"all","All chapters");

    const index = books.indexOf($("clBook").value);

    $("clChapter").disabled = index < 0;

    if (index < 0) return;

    for (let i=1;i<=chapterCounts[index];i++) {
      option($("clChapter"),String(i),"Chapter " + i);
    }
  }

  function parseReference(reference) {
    const match = reference.match(
      /^(.+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/
    );

    if (!match) return null;

    return {
      book:match[1],
      chapter:Number(match[2]),
      verse:match[3] ? Number(match[3]) : null,
      endVerse:match[4] ? Number(match[4]) : null
    };
  }

  function filteredRecords() {
    const search = $("clSearch").value.toLowerCase().trim();
    const category = $("clCategory").value;
    const period = $("clPeriod").value;
    const book = $("clBook").value;
    const chapter = $("clChapter").value;
    const sort = $("clSort").value;

    const results = records.filter(record => {

      if (category !== "all" &&
          record.category !== category) return false;

      if (period !== "all" &&
          !record.era.includes(period)) return false;

      if (sort === "saved" &&
          !saved.includes(record.id)) return false;

      if (book !== "all") {

        const matches = record.refs.some(reference => {
          const parsed = parseReference(reference);

          if (!parsed || parsed.book !== book) return false;

          return chapter === "all" ||
            parsed.chapter === Number(chapter);
        });

        if (!matches) return false;
      }

      const searchable = [
        record.title,
        record.category,
        record.text,
        record.context,
        record.evidence,
        record.limits,
        ...record.refs,
        ...record.sourceIds.map(id =>
          sources[id].author + " " + sources[id].title
        )
      ].join(" ").toLowerCase();

      return search.split(/\s+/).every(term =>
        searchable.includes(term)
      );
    });

    return results.sort((a,b) => {
      if (sort === "az") return a.title.localeCompare(b.title);

      return a.category.localeCompare(b.category) ||
        a.title.localeCompare(b.title);
    });
  }

  function renderResults() {
    const results = filteredRecords();

    const pages = Math.max(1,Math.ceil(results.length/pageSize));

    page = Math.max(0,Math.min(page,pages-1));

    $("clResults").replaceChildren();

    $("clCount").textContent =
      results.length + " matching cultural studies.";

    $("clPage").textContent =
      "Page " + (page+1) + " of " + pages;

    $("clPrev").disabled = page === 0;
    $("clNext").disabled = page >= pages-1;

    if (!results.length) {
      make(
        "p",
        "No indexed cultural study matches this selection. This does not mean the passage has no cultural background. Try a topic search or consult the research library below.",
        $("clResults")
      );
      return;
    }

    results.slice(page*pageSize,(page+1)*pageSize)
      .forEach(record => {

        const card = make("article",undefined,$("clResults"));

        card.className = "cl-card";

        make("p",record.category,card).className = "cl-gold";

        make("h3",record.title,card);

        make("p",record.context,card);

        make(
          "p",
          record.refs.slice(0,3).join(" · "),
          card
        ).className = "cl-muted";

        const actions = make("div",undefined,card);

        actions.className = "cl-actions";

        button(actions,"Open research study",() => {
          openRecord(record);
        });

        if (saved.includes(record.id)) {
          make("span","Bookmarked",actions).className = "cl-gold";
        }

      });
  }

  function persistNotes() {
    if (!active) return true;

    notes[active.id] = $("clNotes").value;

    return writeStorage(notesKey,notes);
  }

  function addSection(parent,title,content) {
    make("h4",title,parent);
    make("p",content,parent);
  }

  function sourceEntry(parent,source) {
    const item = make("details",undefined,parent);

    make("summary",source.title,item);

    make("p",source.author,item);

    make("p",source.type,item).className = "cl-gold";

    make("p",source.note,item);

    link(item,"Open research source",source.url);

    return item;
  }

  function openRecord(record) {
    persistNotes();

    active = record;

    $("clProfile").hidden = false;
    $("clTitle").textContent = record.title;

    const details = $("clDetails");

    details.replaceChildren();

    make(
      "p",
      record.category,
      details
    ).className = "cl-gold";

    addSection(
      details,
      "Relevant historical periods",
      periods
        .filter(period => record.era.includes(period[0]))
        .map(period => period[1])
        .join(" · ")
    );

    addSection(details,"Biblical description",record.text);

    addSection(details,"Historical context",record.context);

    addSection(details,"Evidence to investigate",record.evidence);

    const caution = make("div",undefined,details);

    caution.className = "cl-note";

    addSection(caution,"Evidence limitations",record.limits);

    addSection(
      details,
      "Evidence classification",
      "Editorial historical synthesis with biblical references and research starting points. Individual archaeological objects and claims must be verified in their original publications."
    );

    make("h4","Related biblical passages",details);

    const referenceActions = make("div",undefined,details);

    referenceActions.className = "cl-actions";

    record.refs.forEach(reference => {
      button(referenceActions,reference,() => {
        $("clReference").value = reference;
        loadScripture();
      });
    });

    make("h4","Bibliography and research collections",details);

    record.sourceIds.forEach(id => {
      sourceEntry(details,sources[id]);
    });

    $("clReference").replaceChildren();

    record.refs.forEach(reference => {
      option($("clReference"),reference,reference);
    });

    // Prioritize a reference matching the selected book.
    const selectedBook = $("clBook").value;
    const selectedChapter = $("clChapter").value;

    const preferred = record.refs.find(reference => {
      const parsed = parseReference(reference);

      return parsed &&
        parsed.book === selectedBook &&
        (
          selectedChapter === "all" ||
          parsed.chapter === Number(selectedChapter)
        );
    });

    if (preferred) $("clReference").value = preferred;

    $("clNotes").value = notes[record.id] || "";
    $("clMessage").textContent = "";

    updateBookmarkButton();

    loadScripture();

    $("clProfile").scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }

  async function loadScripture() {
    const reference = $("clReference").value;

    if (!reference) return;

    const translation = $("clTranslation").value;

    const version = ++requestNumber;

    const url = "https://bible-api.com/" +
      encodeURIComponent(reference) +
      "?translation=" + translation;

    $("clStatus").textContent =
      "Retrieving " + reference + "...";

    $("clScripture").replaceChildren();

    try {
      let data = cache.get(url);

      if (!data) {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }

        data = await response.json();

        if (!Array.isArray(data.verses) ||
            !data.verses.length) {
          throw new Error("No verses returned");
        }

        cache.set(url,data);
      }

      if (version !== requestNumber || !root.isConnected) return;

      $("clStatus").replaceChildren();

      make(
        "span",
        reference + " · " +
        (data.translation_name || translation.toUpperCase()) +
        " · ",
        $("clStatus")
      );

      link($("clStatus"),"Verify Scripture source",url);

      data.verses.forEach(verse => {
        const line = make("p",undefined,$("clScripture"));

        make(
          "strong",
          String(verse.chapter) + ":" + String(verse.verse) + " ",
          line
        ).className = "cl-gold";

        line.appendChild(
          document.createTextNode(
            String(verse.text || "").trim()
          )
        );
      });

    } catch(error) {

      if (version !== requestNumber || !root.isConnected) return;

      $("clStatus").textContent =
        "Scripture preview unavailable. Cultural research remains accessible.";

      link(
        $("clScripture"),
        "Read the passage using STEP Bible",
        "https://www.stepbible.org/"
      );
    }
  }

  function updateBookmarkButton() {
    if (!active) return;

    const exists = saved.includes(active.id);

    $("clBookmark").textContent = exists ?
      "Remove bookmark" : "Bookmark study";

    $("clBookmark").setAttribute(
      "aria-pressed",
      String(exists)
    );
  }

  function toggleBookmark() {
    if (!active) return;

    if (saved.includes(active.id)) {

      saved = saved.filter(id => id !== active.id);

    } else {

      saved.push(active.id);

    }

    const stored = writeStorage(bookmarkKey,saved);

    $("clMessage").textContent = stored ?
      "Bookmarks updated." :
      "Bookmarks updated for this session only.";

    updateBookmarkButton();
    renderSaved();
    renderResults();
  }

  function renderSaved() {

    $("clSaved").replaceChildren();

    const items = records.filter(record =>
      saved.includes(record.id)
    );

    if (!items.length) {
      make(
        "p",
        "No cultural studies bookmarked in this browser.",
        $("clSaved")
      );
      return;
    }

    items.forEach(record => {
      const actions = make("div",undefined,$("clSaved"));

      actions.className = "cl-actions";

      button(actions,record.title,() => {
        openRecord(record);
      });

      button(actions,"Remove",() => {
        saved = saved.filter(id => id !== record.id);

        writeStorage(bookmarkKey,saved);

        updateBookmarkButton();
        renderSaved();
        renderResults();
      });
    });
  }

  function renderTimeline() {

    periods.forEach(period => {
      const item = make("article",undefined,$("clTimeline"));

      item.className = "cl-era";

      make("h4",period[1],item);

      make("p",period[2],item).className = "cl-gold";

      make("p",period[3],item);

      button(item,"Explore this period",() => {
        $("clPeriod").value = period[0];

        $("clCategory").value = "all";

        $("clBook").value = "all";

        $("clSearch").value = "";

        $("clSort").value = "category";

        updateChapters();

        page = 0;

        renderResults();

        $("clResults").scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      });
    });
  }

  const seasons = [
    [
      "Autumn · approximately September–November",
      "Grape harvesting could extend into early autumn. Olive harvesting generally followed later in the year. The arrival of rains made plowing and grain sowing possible in many areas.",
      "Deuteronomy 11:14"
    ],
    [
      "Winter · approximately December–February",
      "The main rainy season supported cereal growth. Field maintenance and other agricultural work depended on local rainfall and soil conditions.",
      "Ezra 10:9-13"
    ],
    [
      "Spring · approximately March–May",
      "Barley generally ripened before wheat. Harvest timing varied across elevation and climate.",
      "Ruth 1:22; Ruth 2:23"
    ],
    [
      "Summer · approximately June–August",
      "Dry conditions supported grain processing, storage and the maturation of various fruits. Water availability remained important.",
      "Proverbs 10:5; Amos 8:1-2"
    ]
  ];

  const festivals = [
    [
      "Passover",
      "14th day of the first month (Nisan)",
      "Usually March or April",
      "Commemoration of deliverance from Egypt.",
      "Exodus 12; Leviticus 23:5"
    ],
    [
      "Unleavened Bread",
      "15th–21st days of the first month",
      "Usually March or April",
      "Seven-day observance associated with the exodus.",
      "Exodus 12:15-20; Leviticus 23:6-8"
    ],
    [
      "Weeks / Shavuot",
      "Fifty-day counting framework",
      "Usually May or June",
      "Harvest celebration associated with firstfruits. Calendar calculations differed among historical Jewish groups.",
      "Leviticus 23:15-21; Deuteronomy 16:9-12"
    ],
    [
      "Day of Trumpet Blasts",
      "First day of the seventh month",
      "Usually September or October",
      "Sacred assembly associated with trumpet blasts; later known in Jewish tradition as Rosh Hashanah.",
      "Leviticus 23:23-25; Numbers 29:1-6"
    ],
    [
      "Day of Atonement",
      "Tenth day of the seventh month",
      "Usually September or October",
      "Ritual atonement, self-denial and sacred observance.",
      "Leviticus 16; Leviticus 23:26-32"
    ],
    [
      "Booths / Sukkot",
      "Begins on the fifteenth day of the seventh month",
      "Usually September or October",
      "Seven-day festival associated with dwelling in booths, followed by an eighth-day assembly.",
      "Leviticus 23:33-43; John 7:2"
    ],
    [
      "Dedication / Hanukkah",
      "Begins on Kislev 25",
      "Usually November or December",
      "Commemorates the rededication of the Jerusalem temple in the second century BCE.",
      "John 10:22; 1 Maccabees 4:36-59"
    ],
    [
      "Purim",
      "Adar 14 or 15",
      "Usually February or March",
      "Commemoration of deliverance described in Esther.",
      "Esther 9:20-32"
    ]
  ];

  const units = [
    [
      "Shekel",
      "Weight and later monetary designation",
      "A weight-based unit used in transactions involving precious metals. Later coinage could also bear shekel denominations.",
      "Genesis 23:16"
    ],
    [
      "Talent",
      "Large weight or accounting unit",
      "Used for substantial quantities of metal or large monetary obligations. Standards varied.",
      "Exodus 38:24; Matthew 18:24"
    ],
    [
      "Mina",
      "Weight or monetary accounting unit",
      "Its relationship to other units depended on the historical system.",
      "Ezekiel 45:12; Luke 19:13"
    ],
    [
      "Ephah",
      "Dry capacity measure",
      "Used for grain and other dry goods.",
      "Ruth 2:17; Ezekiel 45:11"
    ],
    [
      "Bath",
      "Liquid capacity measure",
      "Used for liquids such as oil.",
      "1 Kings 7:26; Ezekiel 45:11"
    ],
    [
      "Homer",
      "Large capacity measure",
      "Ezekiel 45:11 relates the ephah and bath to one tenth of a homer.",
      "Ezekiel 45:11"
    ],
    [
      "Cubit",
      "Length measure",
      "An anthropometric unit associated with the forearm. Historical cubit standards varied.",
      "Genesis 6:15; Ezekiel 40:5"
    ],
    [
      "Denarius",
      "Roman coin denomination",
      "Matthew 20 uses one denarius as the agreed payment for a day's vineyard work within the parable. This is not proof of a universal daily wage.",
      "Matthew 20:2; Matthew 22:19"
    ],
    [
      "Drachma",
      "Greek monetary denomination",
      "A coin denomination used in the Greek monetary world.",
      "Luke 15:8-9"
    ],
    [
      "Lepton",
      "Small coin denomination",
      "Mark 12:42 describes two lepta using a Roman quadrans as an explanatory equivalent.",
      "Mark 12:42"
    ],
    [
      "Stadion",
      "Distance measure",
      "A Greek distance unit whose precise historical length was not universal.",
      "Luke 24:13; John 6:19"
    ]
  ];

  const evidenceGuide = [
    [
      "Pottery and stratigraphy",
      "Ceramic styles and archaeological layers help establish relative chronology. Objects found outside secure contexts provide weaker chronological evidence."
    ],
    [
      "Radiocarbon dating",
      "Radiocarbon analysis estimates the age of suitable organic samples. Interpret calibrated date ranges alongside sample context and possible contamination."
    ],
    [
      "Archaeobotany",
      "Seeds, pollen and other plant remains provide evidence about crops, processing, environment and food consumption."
    ],
    [
      "Zooarchaeology",
      "Animal remains help investigate diet, livestock management, butchery and environmental adaptation."
    ],
    [
      "Epigraphy",
      "Inscriptions can preserve names, titles, dedications and administrative information. Their readings, dates and provenance require scrutiny."
    ],
    [
      "Numismatics",
      "Coins provide evidence about issuing authorities, imagery, monetary systems and chronology. Their circulation may continue long after minting."
    ],
    [
      "Architecture",
      "Buildings reveal patterns of construction, settlement and possible activities. Their precise functions may remain contested."
    ],
    [
      "Residue analysis",
      "Chemical residues can help identify substances formerly contained in vessels or processed using installations."
    ],
    [
      "Administrative archives",
      "Receipts, contracts and inventories reveal economic and bureaucratic practices, though surviving archives are incomplete and unevenly distributed."
    ],
    [
      "Comparative ethnography",
      "Documented practices from other communities may suggest interpretations of ancient evidence but cannot independently prove an ancient practice."
    ],
    [
      "Literary and legal evidence",
      "Texts preserve traditions, ideals, descriptions and regulations. Genre, authorship, date and rhetorical purpose affect historical interpretation."
    ]
  ];

  const standards = [
    [
      "Distinguish description from prescription",
      "A law requiring a practice establishes the existence of a prescription within the text, not necessarily universal observance."
    ],
    [
      "Maintain chronological control",
      "Do not use a practice documented centuries later as direct proof of an earlier custom without supporting evidence."
    ],
    [
      "Maintain geographical control",
      "Egyptian, Mesopotamian, Israelite, Greek and Roman customs were not interchangeable."
    ],
    [
      "Distinguish social classes",
      "Royal palaces, elite banquets and monumental architecture do not represent every household."
    ],
    [
      "Identify evidence provenance",
      "Record an artifact's excavation site, context, museum accession number, publication and date whenever available."
    ],
    [
      "Avoid arguments from silence",
      "The absence of surviving evidence is not always evidence that a practice never existed."
    ],
    [
      "Identify scholarly disagreement",
      "Evaluate competing interpretations and distinguish secure observations from uncertain reconstructions."
    ],
    [
      "Distinguish cultural context from theology",
      "Historical background can clarify a passage without independently determining its theological meaning."
    ],
    [
      "Avoid anachronism",
      "Modern institutions, economic values, religious customs and social categories must not automatically be projected onto ancient societies."
    ],
    [
      "Cite specific claims",
      "A museum catalogue or general bibliography is a starting point. A finished academic citation identifies the specific object, text, page or scholarly argument."
    ]
  ];

  function renderStaticSections() {

    seasons.forEach(([title,description,refs]) => {
      const item = make("details",undefined,$("clSeasons"));

      make("summary",title,item);
      make("p",description,item);
      make("p",refs,item).className = "cl-gold";
    });

    festivals.forEach(([title,date,season,description,refs]) => {
      const item = make("details",undefined,$("clFestivals"));

      make("summary",title,item);
      make("p",date,item).className = "cl-gold";
      make("p",season,item);
      make("p",description,item);
      make("p",refs,item).className = "cl-muted";
    });

    units.forEach(([title,type,description,refs]) => {
      const item = make("details",undefined,$("clUnits"));

      make("summary",title,item);
      make("p",type,item).className = "cl-gold";
      make("p",description,item);
      make("p",refs,item).className = "cl-muted";
    });

    evidenceGuide.forEach(([title,description]) => {
      const item = make("details",undefined,$("clEvidenceGuide"));

      make("summary",title,item);
      make("p",description,item);
    });

    standards.forEach(([title,description]) => {
      const item = make("details",undefined,$("clStandards"));

      make("summary",title,item);
      make("p",description,item);
    });

    const seasonalSource = make("p",undefined,$("clSeasons"));

    link(
      seasonalSource,
      "Agricultural background: Oded Borowski",
      sources.borowski.url
    );

    const calendarSource = make("p",undefined,$("clFestivals"));

    link(
      calendarSource,
      "Explore Jewish textual traditions",
      sources.sefaria.url
    );

    const coinSource = make("p",undefined,$("clUnits"));

    link(
      coinSource,
      "Examine Roman provincial coinage",
      sources.coins.url
    );
  }

  function renderLibrary() {

    $("clLibrary").replaceChildren();

    const query = $("clSourceSearch").value
      .toLowerCase().trim();

    const matches = Object.values(sources)
      .filter(source => {

        const text = [
          source.author,
          source.title,
          source.type,
          source.note
        ].join(" ").toLowerCase();

        return query.split(/\s+/).every(term =>
          text.includes(term)
        );

      });

    if (!matches.length) {
      make("p","No matching research resources.",$("clLibrary"));
      return;
    }

    matches.forEach(source => {
      sourceEntry($("clLibrary"),source);
    });
  }

  function recordReport(record) {

    return [
      "DESERTBIBLE — CULTURE & DAILY LIFE",
      "",
      "Topic: " + record.title,
      "Category: " + record.category,
      "Exported: " + new Date().toISOString(),
      "",
      "HISTORICAL PERIODS",
      ...periods
        .filter(period => record.era.includes(period[0]))
        .map(period => period[1] + " — " + period[2]),
      "",
      "BIBLICAL DESCRIPTION",
      record.text,
      "",
      "HISTORICAL CONTEXT",
      record.context,
      "",
      "EVIDENCE TO INVESTIGATE",
      record.evidence,
      "",
      "EVIDENCE LIMITATIONS",
      record.limits,
      "",
      "RELATED SCRIPTURE",
      ...record.refs,
      "",
      "BIBLIOGRAPHY AND RESEARCH STARTING POINTS",
      ...record.sourceIds.map(id => {
        const source = sources[id];

        return [
          source.author,
          source.title,
          source.type,
          source.url,
          source.note,
          ""
        ].join("\n");
      }),
      "PERSONAL RESEARCH NOTES",
      notes[record.id] || "",
      "",
      "RESEARCH INTEGRITY",
      "Descriptions are editorial historical syntheses.",
      "Repository links are research starting points.",
      "Verify individual claims in their original sources."
    ].join("\n");
  }

  function downloadText(text,filename) {

    const blob = new Blob(
      [text],
      {type:"text/plain;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url),1000);
  }

  function resetFilters() {
    $("clSearch").value = "";
    $("clCategory").value = "all";
    $("clPeriod").value = "all";
    $("clBook").value = "all";
    $("clSort").value = "category";

    updateChapters();

    page = 0;

    renderResults();
  }

  $("clSearch").addEventListener("input",() => {
    page = 0;
    renderResults();
  });

  ["clCategory","clPeriod","clChapter","clSort"]
    .forEach(id => {

      $(id).addEventListener("change",() => {
        page = 0;
        renderResults();
      });

    });

  $("clBook").addEventListener("change",() => {
    updateChapters();
    page = 0;
    renderResults();
  });

  $("clPrev").addEventListener("click",() => {
    page--;
    renderResults();
  });

  $("clNext").addEventListener("click",() => {
    page++;
    renderResults();
  });

  $("clReset").addEventListener("click",resetFilters);

  $("clReference").addEventListener("change",loadScripture);

  $("clTranslation").addEventListener("change",loadScripture);

  $("clLoad").addEventListener("click",loadScripture);

  $("clNotes").addEventListener("input",persistNotes);

  $("clSaveNotes").addEventListener("click",() => {

    const stored = persistNotes();

    $("clMessage").textContent = stored ?
      "Research notes saved in this browser." :
      "Research notes retained for this session only.";
  });

  $("clBookmark").addEventListener("click",toggleBookmark);

  $("clCopy").addEventListener("click",async () => {

    if (!active) return;

    persistNotes();

    try {
      await navigator.clipboard.writeText(recordReport(active));

      $("clMessage").textContent = "Research study copied.";

    } catch {

      $("clMessage").textContent =
        "Clipboard unavailable. Use Download study.";
    }
  });

  $("clDownload").addEventListener("click",() => {

    if (!active) return;

    persistNotes();

    downloadText(
      recordReport(active),
      "DesertBible-Culture-" + active.id + ".txt"
    );

    $("clMessage").textContent = "Research report prepared.";
  });

  $("clExportResults").addEventListener("click",() => {

    persistNotes();

    const results = filteredRecords();

    if (!results.length) {
      $("clCount").textContent =
        "No matching studies to export.";
      return;
    }

    downloadText(
      results.map(recordReport).join(
        "\n\n========================================\n\n"
      ),
      "DesertBible-Cultural-Research.txt"
    );
  });

  $("clSourceSearch").addEventListener("input",renderLibrary);

  $("clClose").addEventListener("click",() => {

    persistNotes();

    requestNumber++;

    workspace.remove();
  });

  updateChapters();

  renderTimeline();

  renderResults();

  renderStaticSections();

  renderLibrary();

  renderSaved();

  workspace.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}

function openProphecyFulfillment(workspace) {
  "use strict";

  const sources = {
    prophets: [
      "USCCB — Introduction to the Prophetic Books",
      "https://bible.usccb.org/bible/propheticbooks/0",
      "Catholic scholarly introduction"
    ],
    isaiah7: [
      "USCCB — Isaiah 7 and textual notes",
      "https://bible.usccb.org/bible/isaiah/7",
      "Biblical text and commentary"
    ],
    isaiah53: [
      "USCCB — Isaiah 53 and textual notes",
      "https://bible.usccb.org/bible/isaiah/53",
      "Biblical text and commentary"
    ],
    yaleMessiah: [
      "Yale Bible Study — Isaiah 9 and 11: Messianic Prophecy",
      "https://yalebiblestudy.org/wp-content/uploads/2020/07/Isaiah-Messianic-Prophecy.pdf",
      "Academic interpretation"
    ],
    daniel9: [
      "USCCB — Daniel 9 and textual notes",
      "https://bible.usccb.org/bible/daniel/9",
      "Historical-critical interpretation"
    ],
    matthew2: [
      "USCCB — Matthew 2 and textual notes",
      "https://bible.usccb.org/bible/matthew/2",
      "Biblical interpretation and quotations"
    ],
    yaleOT: [
      "Christine Hayes — Introduction to the Old Testament",
      "https://oyc.yale.edu/religious-studies/rlst-145",
      "Yale University lecture series"
    ],
    yaleNT: [
      "Dale B. Martin — New Testament History and Literature",
      "https://oyc.yale.edu/religious-studies/rlst-152",
      "Yale University lecture series"
    ],
    odyssey: [
      "Society of Biblical Literature — Bible Odyssey",
      "https://www.bibleodyssey.org/",
      "Academic research collection"
    ],
    step: [
      "Tyndale House — STEP Bible",
      "https://www.stepbible.org/",
      "Hebrew and Greek textual research"
    ],
    sefaria: [
      "Sefaria — Jewish textual library",
      "https://www.sefaria.org/texts",
      "Jewish Scripture and interpretive traditions"
    ],
    scrolls: [
      "Israel Museum — Digital Dead Sea Scrolls",
      "https://dss.collections.imj.org.il/",
      "Ancient manuscript collection"
    ],
    greatIsaiah: [
      "Israel Museum — Great Isaiah Scroll",
      "https://dss.collections.imj.org.il/isaiah",
      "Pre-Christian manuscript evidence"
    ],
    dss: [
      "Israel Antiquities Authority — Dead Sea Scrolls",
      "https://www.deadseascrolls.org.il/",
      "Manuscript archive"
    ],
    oracc: [
      "ORACC — Royal Inscriptions of the Neo-Assyrian Period",
      "https://oracc.museum.upenn.edu/rinap/",
      "Primary Assyrian inscriptions"
    ],
    museum: [
      "British Museum — Collection Online",
      "https://www.britishmuseum.org/collection",
      "Primary artifact research catalogue"
    ],
    cyrus: [
      "Muhammad A. Dandamayev — The Cyrus Cylinder",
      "https://www.iranicaonline.org/articles/cyrus-iv/",
      "Encyclopaedia Iranica historical study"
    ],
    gettyCyrus: [
      "Getty Museum — The Cyrus Cylinder",
      "https://www.getty.edu/education/teachers/classroom_resources/curricula/cyrus_cylinder/documents/cyrus_teacher.pdf",
      "Museum contextual publication"
    ],
    cdli: [
      "Cuneiform Digital Library Initiative",
      "https://cdli.earth/",
      "Primary document catalogue"
    ],
    perseus: [
      "Perseus Digital Library",
      "https://www.perseus.tufts.edu/",
      "Ancient Greek and Roman literature"
    ],
    ntvmr: [
      "New Testament Virtual Manuscript Room",
      "https://ntvmr.uni-muenster.de/",
      "New Testament manuscript research"
    ],
    fathers: [
      "New Advent — Early Church Fathers",
      "https://www.newadvent.org/fathers/",
      "Historical Christian interpretation"
    ],
    ccel: [
      "Christian Classics Ethereal Library",
      "https://www.ccel.org/",
      "Historical Christian theological literature"
    ],
    craig: [
      "William Lane Craig — Reasonable Faith",
      "https://www.reasonablefaith.org/",
      "Christian philosophy and apologetics"
    ],
    lennox: [
      "John Lennox — Official research and publications",
      "https://www.johnlennox.org/",
      "Science, philosophy and Christian apologetics"
    ],
    huff: [
      "Wesley Huff — Official resources",
      "https://www.wesleyhuff.com/",
      "Biblical manuscripts and apologetics"
    ],
    knechtle: [
      "Cliffe and Stuart Knechtle — Give Me an Answer",
      "https://givemeananswer.org/",
      "Public Christian apologetics"
    ]
  };

  const classifications = {
    narrative:
      "Fulfillment reported within biblical literature",
    historical:
      "Historically contextualized fulfillment claim",
    messianic:
      "Explicit New Testament messianic application",
    typology:
      "Typological or retrospective application",
    traditional:
      "Traditional messianic interpretation",
    conditional:
      "Conditional prophetic warning",
    disputed:
      "Disputed interpretation or chronology",
    future:
      "Eschatological or anticipated fulfillment"
  };

  /*
    Research record format:

    ID
    Title
    Classification
    Prophetic reference
    Related passages
    Original literary context
    Fulfillment claim
    Historical or textual evidence
    Alternative interpretations
    Evidence limitations
    Research source IDs

    All descriptions are editorial summaries.
    No statement is attributed to a named scholar
    without identifying the relevant publication.

    General collection links are research gateways,
    not individually verified artifact citations.
  */

  const records = [

    [
      "PF001",
      "The offspring of the woman",
      "traditional",
      "Genesis 3:15",
      ["Romans 16:20","Hebrews 2:14","Revelation 12:9"],
      "The judgment pronounced against the serpent describes hostility between the serpent and the woman and their offspring.",
      "Christian tradition often identifies this passage as the protoevangelium, an early anticipation of Christ's victory over evil.",
      "The later biblical texts develop related imagery of defeating Satan, death and the serpent.",
      "The immediate narrative concerns the serpent and human descendants. Jewish and historical-critical interpretations need not identify an individual Messiah here.",
      "Genesis does not explicitly name Jesus or describe crucifixion and resurrection in this verse.",
      ["yaleOT","sefaria","fathers","step"]
    ],

    [
      "PF002",
      "Blessing through Abraham",
      "messianic",
      "Genesis 12:1-3",
      ["Genesis 22:15-18","Galatians 3:8-16"],
      "God promises Abraham descendants, blessing and a relationship with the nations.",
      "Paul interprets the Abrahamic promise through Christ and the inclusion of Gentile believers.",
      "Galatians explicitly develops the Abrahamic promise in its theological argument.",
      "Jewish interpretations emphasize Abraham, Israel and the continuing significance of the covenant.",
      "Paul's interpretation establishes an early Christian reading, not independent proof of supernatural fulfillment.",
      ["yaleOT","yaleNT","sefaria","step"]
    ],

    [
      "PF003",
      "The promised birth of Isaac",
      "narrative",
      "Genesis 18:9-14",
      ["Genesis 21:1-7","Romans 9:7-9"],
      "The narrative promises a son to Abraham and Sarah despite their advanced age.",
      "Genesis describes Isaac's birth as the realization of that promise.",
      "The fulfillment is presented within the biblical narrative.",
      "Readers differ regarding the historical reconstruction and literary development of the patriarchal accounts.",
      "No independent contemporary record securely identifies this specific birth.",
      ["yaleOT","step","sefaria"]
    ],

    [
      "PF004",
      "The scepter of Judah",
      "traditional",
      "Genesis 49:8-12",
      ["2 Samuel 7:12-16","Hebrews 7:14","Revelation 5:5"],
      "Jacob's blessing associates Judah with royal authority and leadership.",
      "Christian interpretation connects Judah's royal imagery with Jesus and Davidic kingship.",
      "Later biblical writings associate the Messiah with Judah and David.",
      "The difficult Hebrew wording in Genesis 49:10 permits several translation and historical interpretations.",
      "The exact Hebrew expression traditionally rendered Shiloh remains debated.",
      ["step","sefaria","fathers","yaleOT"]
    ],

    [
      "PF005",
      "A star from Jacob",
      "traditional",
      "Numbers 24:15-19",
      ["Matthew 2:1-12","Revelation 22:16"],
      "Balaam's oracle anticipates a ruler associated with Israel's victory over neighboring peoples.",
      "Christian reception connects the star and ruler imagery with Jesus.",
      "Matthew includes star imagery in the infancy narrative, although it does not explicitly quote Numbers 24:17.",
      "Historical readings associate the oracle with Israelite kingship. Jewish messianic readings also developed.",
      "The passage does not provide astronomical coordinates or a date for Jesus' birth.",
      ["matthew2","sefaria","step"]
    ],

    [
      "PF006",
      "A prophet like Moses",
      "messianic",
      "Deuteronomy 18:15-19",
      ["Acts 3:19-26","Acts 7:37","John 6:14"],
      "Deuteronomy discusses legitimate prophetic authority within Israel.",
      "Acts explicitly applies the promise of a prophet like Moses to Jesus.",
      "Acts preserves the Christian application of the Deuteronomic passage.",
      "The original context can be understood as the continuing institution of prophecy rather than only one distant individual.",
      "The identification of Jesus as the ultimate prophet is an interpretive and theological conclusion.",
      ["yaleOT","yaleNT","step","sefaria"]
    ],

    [
      "PF007",
      "Rebuilding Jericho",
      "narrative",
      "Joshua 6:26",
      ["1 Kings 16:34"],
      "Joshua pronounces a curse concerning rebuilding Jericho.",
      "Kings associates the rebuilding by Hiel with the fulfillment of Joshua's pronouncement.",
      "The connection is explicitly made within Kings.",
      "Interpretation depends on the literary and historical relationship between Joshua and Kings.",
      "The deaths of Hiel's sons are not independently documented by contemporary evidence.",
      ["yaleOT","step"]
    ],

    [
      "PF008",
      "The judgment on Eli's household",
      "narrative",
      "1 Samuel 2:27-36",
      ["1 Samuel 4:10-18","1 Kings 2:26-27"],
      "A prophetic declaration announces judgment upon Eli's priestly household.",
      "Samuel and Kings connect subsequent losses and priestly changes with this judgment.",
      "The biblical narrative supplies the fulfillment relationship.",
      "Historical reconstruction of early Israelite priestly institutions remains incomplete.",
      "No external document securely verifies the specific prophetic announcement.",
      ["yaleOT","step"]
    ],

    [
      "PF009",
      "The enduring Davidic dynasty",
      "messianic",
      "2 Samuel 7:12-16",
      ["Psalm 89:19-37","Luke 1:30-33","Acts 13:22-23"],
      "Nathan's oracle promises continuity for David's royal house.",
      "Luke identifies Jesus with the enduring Davidic throne.",
      "The Tel Dan inscription is widely interpreted as referring to the House of David, providing historical context for the dynasty.",
      "The promise initially concerns David's successors. Jewish and Christian expectations concerning its ultimate realization differ.",
      "Evidence for the Davidic dynasty does not independently prove Jesus' genealogy or eternal kingship.",
      ["museum","yaleOT","yaleNT","step"]
    ],

    [
      "PF010",
      "Division of Solomon's kingdom",
      "narrative",
      "1 Kings 11:29-39",
      ["1 Kings 12:15-24"],
      "Ahijah announces that Jeroboam will receive authority over most of Israel's tribes.",
      "Kings presents the political division following Solomon as the fulfillment of Ahijah's announcement.",
      "External historical evidence establishes the later existence of separate kingdoms of Israel and Judah.",
      "The precise circumstances and chronology of the initial division are debated.",
      "Later evidence for separate kingdoms does not independently verify Ahijah's speech.",
      ["yaleOT","oracc","step"]
    ],

    [
      "PF011",
      "Josiah and the altar at Bethel",
      "narrative",
      "1 Kings 13:1-3",
      ["2 Kings 23:15-18"],
      "An unnamed man of God announces judgment against the altar at Bethel and names Josiah.",
      "Kings describes Josiah's later destruction of the altar.",
      "The literary fulfillment is explicit.",
      "Traditional readings understand this as long-range predictive prophecy. Critical scholarship investigates the editorial history of Kings.",
      "The date when this prophetic wording was first recorded cannot be established simply from the narrative chronology.",
      ["yaleOT","step","odyssey"]
    ],

    [
      "PF012",
      "Elijah and the drought",
      "narrative",
      "1 Kings 17:1",
      ["1 Kings 18:41-46","James 5:17-18"],
      "Elijah announces drought in the reign of Ahab.",
      "Kings describes the return of rain following Elijah's confrontation with the prophets of Baal.",
      "The fulfillment relationship is contained in Kings and recalled in James.",
      "Historical and theological readings assign different significance to the account.",
      "No securely identified contemporary climate record independently verifies this particular event and its prophetic causation.",
      ["yaleOT","step"]
    ],

    [
      "PF013",
      "Judgment on Ahab's dynasty",
      "narrative",
      "1 Kings 21:17-24",
      ["1 Kings 22:37-38","2 Kings 9:30-37","2 Kings 10:10-11"],
      "Elijah announces judgment after the seizure of Naboth's vineyard.",
      "Kings relates the deaths of Ahab, Jezebel and members of the dynasty to prophetic judgment.",
      "Assyrian records provide historical context for Ahab and Jehu, although not these specific prophetic details.",
      "The narrative combines political change with theological interpretation.",
      "External attestations of rulers do not verify every reported circumstance of death.",
      ["oracc","museum","yaleOT"]
    ],

    [
      "PF014",
      "Immanuel and the promised child",
      "messianic",
      "Isaiah 7:10-17",
      ["Matthew 1:18-25"],
      "Isaiah addresses King Ahaz during the Syro-Ephraimite crisis in the eighth century BCE.",
      "Matthew applies Isaiah 7:14 to Jesus' conception and birth.",
      "The Hebrew text uses almah, meaning a young woman. The ancient Greek translation uses parthenos, commonly meaning virgin.",
      "Historical readings emphasize a sign relevant to Ahaz. Christian readings understand Matthew's application as messianic or a fuller realization.",
      "The ancient wording can be studied independently, but the virginal conception is not independently established by the manuscript evidence.",
      ["isaiah7","step","greatIsaiah","sefaria"]
    ],

    [
      "PF015",
      "Light in Galilee",
      "messianic",
      "Isaiah 9:1-2",
      ["Matthew 4:12-17"],
      "Isaiah speaks of northern territories affected by oppression and political upheaval.",
      "Matthew associates Jesus' Galilean ministry with Isaiah's imagery of light.",
      "The Gospel explicitly quotes the prophetic passage.",
      "Historical interpretations emphasize the Assyrian-era circumstances and hopes of the original audience.",
      "The existence of ancient Galilean settlements does not independently establish the theological fulfillment.",
      ["yaleMessiah","oracc","step"]
    ],

    [
      "PF016",
      "The royal child and Davidic throne",
      "traditional",
      "Isaiah 9:6-7",
      ["Luke 1:32-33","Luke 2:10-11"],
      "Isaiah announces a royal child and a reign characterized by justice and peace.",
      "Christian tradition understands the passage as anticipating Christ's kingship.",
      "The royal language belongs to ancient Israelite traditions concerning kingship and divine authority.",
      "Historical readings may associate the oracle with an ancient king or coronation; Christian readings extend it to Jesus.",
      "The original royal setting and later messianic reception must be distinguished.",
      ["yaleMessiah","greatIsaiah","sefaria"]
    ],

    [
      "PF017",
      "The shoot from Jesse",
      "messianic",
      "Isaiah 11:1-10",
      ["Romans 15:12","Revelation 22:16"],
      "Isaiah describes an ideal ruler emerging from Jesse's family.",
      "Paul explicitly cites the root of Jesse in connection with Gentile hope.",
      "The passage's royal imagery connects it to Davidic traditions.",
      "Jewish and Christian traditions differ over the Messiah's identity and the realization of the promised peace.",
      "The complete realization of the passage's peaceful conditions is interpreted differently.",
      ["yaleMessiah","greatIsaiah","sefaria","step"]
    ],

    [
      "PF018",
      "Judgment against Babylon",
      "historical",
      "Isaiah 13:17-22",
      ["Isaiah 14:22-23","Daniel 5"],
      "The oracle depicts judgment against Babylon and names the Medes.",
      "Interpreters associate the oracle with Babylon's eventual defeat and decline.",
      "Babylon was captured by Cyrus in 539 BCE. Cuneiform evidence documents the transition to Persian rule.",
      "The relationship between the oracle's destruction imagery, Persian conquest and Babylon's later decline is debated.",
      "Babylon continued to be inhabited after 539 BCE; its capture was not the immediate total destruction portrayed by a strictly literal reading.",
      ["cyrus","cdli","museum","yaleOT"]
    ],

    [
      "PF019",
      "Samaria's judgment",
      "historical",
      "Micah 1:5-7",
      ["2 Kings 17:1-6","Hosea 13:16"],
      "Micah announces judgment against the northern kingdom's capital.",
      "The passage is associated with the Assyrian destruction of the northern kingdom in approximately 722–720 BCE.",
      "Assyrian royal inscriptions and biblical accounts attest to the conquest and incorporation of Samaria.",
      "The roles of Shalmaneser V and Sargon II in the final stages of the conquest remain subjects of historical discussion.",
      "Historical confirmation of the conquest does not establish the precise date of every prophetic verse.",
      ["oracc","museum","yaleOT"]
    ],

    [
      "PF020",
      "Jerusalem and the Assyrian crisis",
      "historical",
      "Isaiah 37:33-35",
      ["2 Kings 19:32-37","2 Chronicles 32:20-23"],
      "Isaiah promises Jerusalem's preservation during Sennacherib's campaign.",
      "The biblical narratives describe Jerusalem surviving the Assyrian threat.",
      "Sennacherib's inscriptions attest to his campaign against Judah in 701 BCE and his confinement of Hezekiah in Jerusalem without claiming Jerusalem's capture.",
      "Biblical and Assyrian texts interpret the campaign through different theological and political frameworks.",
      "Assyrian records do not independently establish the biblical explanation of divine intervention.",
      ["oracc","museum","yaleOT"]
    ],

    [
      "PF021",
      "Cyrus and restoration",
      "historical",
      "Isaiah 44:24-28",
      ["Isaiah 45:1-7","Ezra 1:1-4","Ezra 6:3-5"],
      "Isaiah names Cyrus in connection with restoration and the rebuilding of Jerusalem.",
      "Ezra associates Cyrus with authorization for rebuilding the Jerusalem temple.",
      "The Cyrus Cylinder, British Museum object 90920, records Cyrus' conquest of Babylon and restoration policies.",
      "Traditional interpretation emphasizes advance prediction by Isaiah. Much modern scholarship places Isaiah 40–55 in the sixth-century exilic setting.",
      "The Cyrus Cylinder does not explicitly mention Judah, Jerusalem or Ezra's decree. Authorship and dating affect the predictive argument.",
      ["cyrus","gettyCyrus","greatIsaiah","yaleOT"]
    ],

    [
      "PF022",
      "The voice preparing the way",
      "messianic",
      "Isaiah 40:3-5",
      ["Matthew 3:1-3","Mark 1:2-4","Luke 3:3-6","John 1:23"],
      "The opening of Isaiah 40 announces consolation and a way associated with God's coming and restoration.",
      "The Gospels apply the prophetic voice to John the Baptist.",
      "The connection is explicit in the Gospel texts.",
      "Historical readings emphasize restoration from exile; Christian readings understand John as preparing for Jesus.",
      "The Gospel application is distinct from the original historical setting.",
      ["greatIsaiah","step","yaleOT","yaleNT"]
    ],

    [
      "PF023",
      "The servant and the nations",
      "messianic",
      "Isaiah 42:1-4",
      ["Matthew 12:15-21"],
      "Isaiah describes God's servant bringing justice to the nations.",
      "Matthew quotes the servant passage in connection with Jesus' ministry.",
      "The textual relationship is explicit.",
      "Interpretations identify the servant variously with Israel, an individual representative or a messianic figure.",
      "The text's original servant identity cannot be settled solely by citing its later Christian application.",
      ["greatIsaiah","sefaria","step"]
    ],

    [
      "PF024",
      "The suffering servant",
      "messianic",
      "Isaiah 52:13-15",
      ["Isaiah 53","Matthew 8:17","Luke 22:37","Acts 8:26-35","1 Peter 2:21-25"],
      "The servant poem describes suffering, humiliation, vindication and the bearing of others' wrongdoing.",
      "New Testament writers identify aspects of Jesus' suffering and death with this servant imagery.",
      "The Great Isaiah Scroll preserves the passage in a manuscript dating to the pre-Christian period.",
      "Christian readings identify the servant with Christ. Jewish interpretations often identify the servant with Israel or a righteous representative.",
      "Pre-Christian manuscript evidence establishes the passage's prior existence, not independently the identity of the servant or divine fulfillment.",
      ["isaiah53","greatIsaiah","sefaria","step","fathers"]
    ],

    [
      "PF025",
      "Good news to the poor",
      "messianic",
      "Isaiah 61:1-2",
      ["Luke 4:16-21"],
      "The prophetic speaker announces good news, release and restoration for afflicted people.",
      "Luke portrays Jesus reading this passage and declaring its fulfillment.",
      "Luke explicitly connects the passage to Jesus' mission.",
      "Historical readings emphasize restoration and communal renewal. Christian interpretations emphasize Jesus' redemptive ministry.",
      "The report establishes Luke's presentation of Jesus, not an independent transcript of the synagogue event.",
      ["greatIsaiah","step","yaleNT"]
    ],

    [
      "PF026",
      "The seventy years of Babylon",
      "historical",
      "Jeremiah 25:8-12",
      ["Jeremiah 29:10","2 Chronicles 36:20-23","Daniel 9:2"],
      "Jeremiah announces an extended period of Babylonian domination.",
      "Later biblical texts associate the seventy years with exile, restoration and the end of Babylonian power.",
      "Babylon fell in 539 BCE. Jerusalem's temple was destroyed in 587 or 586 BCE and the rebuilt temple was completed around 516 or 515 BCE.",
      "Different starting and ending points produce different chronological calculations; seventy may represent a rounded period.",
      "There is no universally agreed exact seventy-year interval applicable to every version of the claim.",
      ["daniel9","cdli","cyrus","yaleOT"]
    ],

    [
      "PF027",
      "Jerusalem's destruction",
      "historical",
      "Jeremiah 21:3-10",
      ["2 Kings 25:1-21","Jeremiah 39:1-10","Jeremiah 52"],
      "Jeremiah warns Jerusalem of judgment through Babylonian conquest.",
      "The biblical accounts connect the city's destruction with these warnings.",
      "Babylonian sources establish regional campaigns, including Jerusalem's capture in 597 BCE. Archaeological evidence supports the later destruction of the city.",
      "The historical event and the biblical explanation of its causes are separate levels of analysis.",
      "The Babylonian Chronicle's account of 597 BCE should not be misidentified as a direct account of the final destruction in 587 or 586 BCE.",
      ["cdli","museum","yaleOT"]
    ],

    [
      "PF028",
      "Rachel weeping for her children",
      "typology",
      "Jeremiah 31:15-17",
      ["Matthew 2:16-18"],
      "Jeremiah depicts Rachel mourning in the context of exile and anticipated restoration.",
      "Matthew applies the lament to the killing of children in Bethlehem.",
      "The literary relationship is explicit in Matthew.",
      "The original passage concerns Israel's suffering and contains a promise of return.",
      "No surviving independent contemporary account securely corroborates Matthew's Bethlehem incident.",
      ["matthew2","step","yaleOT"]
    ],

    [
      "PF029",
      "The new covenant",
      "messianic",
      "Jeremiah 31:31-34",
      ["Luke 22:20","1 Corinthians 11:25","Hebrews 8:6-13","Hebrews 10:15-18"],
      "Jeremiah promises a renewed covenant with Israel and Judah, emphasizing internalized instruction and forgiveness.",
      "Christian texts associate the new covenant with Jesus' death and priestly work.",
      "Hebrews explicitly quotes the covenant passage.",
      "Jewish and Christian interpretations differ concerning the covenant's relationship to Torah, Israel and the Messiah.",
      "The identification of an ultimate covenant fulfillment is primarily theological.",
      ["sefaria","step","yaleOT","yaleNT"]
    ],

    [
      "PF030",
      "The downfall of Tyre",
      "disputed",
      "Ezekiel 26:1-21",
      ["Ezekiel 29:17-20"],
      "Ezekiel announces judgment against Tyre and names Nebuchadnezzar in the oracle.",
      "Interpreters relate the passage to Babylonian pressure on Tyre, Alexander's conquest in 332 BCE and subsequent historical changes.",
      "Tyre's lengthy history includes sieges, political transitions and repeated rebuilding.",
      "Some readings distinguish multiple attackers and historical stages. Others emphasize tensions between the oracle's details and the city's continued existence.",
      "Ezekiel 29 acknowledges the lack of expected spoil from Nebuchadnezzar's campaign. Tyre was not permanently eliminated as an inhabited city.",
      ["perseus","museum","yaleOT","step"]
    ],

    [
      "PF031",
      "The valley of dry bones",
      "future",
      "Ezekiel 37:1-14",
      ["Ezekiel 37:15-28","Romans 11:25-27"],
      "Ezekiel interprets the bones as the house of Israel and describes restoration from national despair.",
      "Interpretations include restoration from exile, spiritual renewal, national restoration and broader resurrection imagery.",
      "The passage itself explains the vision in relation to Israel's condition.",
      "Some modern Christians connect it to the establishment of Israel in 1948; other readers emphasize ancient restoration or future theological expectations.",
      "Modern political events cannot be identified as definitive fulfillment without defending the interpretive assumptions involved.",
      ["yaleOT","sefaria","step"]
    ],

    [
      "PF032",
      "The four kingdoms",
      "disputed",
      "Daniel 2:31-45",
      ["Daniel 7:1-14"],
      "Daniel interprets successive kingdoms through the image of a statue and its destruction.",
      "Different traditions associate the kingdoms with ancient empires and God's ultimate kingdom.",
      "Babylonian, Persian, Hellenistic and Roman imperial histories provide historical comparison.",
      "A common historical-critical sequence distinguishes Babylon, Media, Persia and Greece. A traditional Christian sequence identifies Babylon, Medo-Persia, Greece and Rome.",
      "The final kingdom sequence depends on interpretive and compositional assumptions.",
      ["yaleOT","step","sefaria"]
    ],

    [
      "PF033",
      "The Son of Man",
      "messianic",
      "Daniel 7:13-14",
      ["Daniel 7:18-27","Mark 14:61-62","Matthew 26:63-64"],
      "Daniel's vision depicts a humanlike figure receiving dominion following the judgment of oppressive kingdoms.",
      "Jesus' trial sayings invoke language associated with Daniel's figure.",
      "The relationship between Daniel and the Gospel imagery is textually recognizable.",
      "Interpretations include a collective representation of the holy ones, an angelic figure and an individual messianic figure.",
      "The figure's identity and the timing of the kingdom's realization remain debated.",
      ["yaleOT","yaleNT","sefaria","step"]
    ],

    [
      "PF034",
      "The ram and the goat",
      "historical",
      "Daniel 8:3-14",
      ["Daniel 8:20-25"],
      "Daniel describes symbolic animals and horns representing political powers.",
      "The interpretation within Daniel identifies the ram with Media and Persia and the goat with Greece.",
      "Alexander's conquest of Persia and the later Hellenistic kingdoms provide strong historical parallels.",
      "The smaller horn is commonly identified with Antiochus IV, though some traditions extend the imagery to later figures.",
      "Historical parallels do not independently settle the date of the vision's composition or whether prediction preceded the events.",
      ["yaleOT","perseus","step"]
    ],

    [
      "PF035",
      "The seventy weeks of Daniel",
      "disputed",
      "Daniel 9:24-27",
      ["Jeremiah 29:10","Daniel 9:2","Matthew 24:15"],
      "Daniel expands Jeremiah's restoration framework into seventy periods of seven.",
      "Interpretations relate the passage to temple restoration, messianic chronology, Jesus' death or future events.",
      "Persian and Hellenistic chronology supplies relevant historical reference points.",
      "Historical-critical readings commonly connect the passage to Antiochus IV and Onias III. Christian messianic readings employ different starting decrees and chronological schemes.",
      "No universally accepted calculation proves a precise date for Jesus' crucifixion or a future end-time event.",
      ["daniel9","yaleOT","step","sefaria"]
    ],

    [
      "PF036",
      "The kings of north and south",
      "disputed",
      "Daniel 11:2-35",
      ["Daniel 11:36-45","Daniel 12:1-4"],
      "Daniel describes political conflict, alliances and persecution.",
      "Many details correspond to conflicts between Hellenistic kingdoms and the reign of Antiochus IV.",
      "Greek historical sources and Second Temple Jewish literature provide comparative evidence.",
      "Traditional interpretations may understand the account as earlier supernatural prediction. Historical-critical scholarship commonly places the final composition during the second century BCE.",
      "Scholars debate the transition between recognizable historical events and the concluding predictions.",
      ["yaleOT","perseus","sefaria"]
    ],

    [
      "PF037",
      "Out of Egypt I called my son",
      "typology",
      "Hosea 11:1-4",
      ["Matthew 2:13-15"],
      "Hosea recalls Israel's earlier deliverance from Egypt.",
      "Matthew applies Israel's exodus pattern to Jesus' return from Egypt.",
      "The original reference is retrospective, while Matthew presents a renewed application.",
      "Christian typological interpretation sees Jesus recapitulating Israel's story.",
      "Hosea 11:1 is not simply a direct future prediction in its original literary context.",
      ["matthew2","step","sefaria"]
    ],

    [
      "PF038",
      "The outpouring of the Spirit",
      "messianic",
      "Joel 2:28-32",
      ["Acts 2:14-21","Romans 10:13"],
      "Joel describes God's Spirit being poured out and signs associated with the day of the Lord.",
      "Peter's Pentecost sermon identifies the experienced events with Joel's prophecy.",
      "Acts explicitly quotes Joel.",
      "Some Christians understand the entire prophecy as inaugurated at Pentecost; others anticipate further future realization.",
      "The theological interpretation of Pentecost and its cosmic imagery cannot be established by archaeology alone.",
      ["yaleNT","step","fathers"]
    ],

    [
      "PF039",
      "The restoration of David's fallen tent",
      "messianic",
      "Amos 9:11-15",
      ["Acts 15:13-18"],
      "Amos concludes with imagery of restoration following judgment.",
      "James cites Amos in connection with Gentile inclusion.",
      "The wording in Acts is related to the Greek textual tradition of Amos.",
      "Interpretations differ regarding national restoration, Gentile inclusion and messianic fulfillment.",
      "Comparison of Hebrew and Greek forms is necessary before drawing conclusions about individual wording.",
      ["step","sefaria","yaleNT"]
    ],

    [
      "PF040",
      "Nineveh and conditional judgment",
      "conditional",
      "Jonah 3:1-10",
      ["Jonah 4:1-2","Jeremiah 18:7-10"],
      "Jonah announces impending judgment, but Nineveh responds with repentance.",
      "The narrative reports that the announced calamity is withheld.",
      "The passage demonstrates conditionality within the book's prophetic theology.",
      "Interpretations of Jonah's genre and historical setting differ.",
      "There is no securely identified Assyrian record corroborating this particular citywide repentance.",
      ["yaleOT","prophets","step"]
    ],

    [
      "PF041",
      "Bethlehem and the coming ruler",
      "messianic",
      "Micah 5:2-5",
      ["Matthew 2:1-6","John 7:42"],
      "Micah associates a future ruler with Bethlehem and Israel's deliverance.",
      "Matthew identifies Jesus' birthplace with the Bethlehem oracle.",
      "Bethlehem is historically associated with Davidic traditions in biblical literature.",
      "Jewish and Christian readers differ regarding the ruler's identity and the implications of his ancient origins.",
      "The Hebrew and English verse numbering differ in some editions. Matthew's claim does not independently verify Jesus' birthplace.",
      ["matthew2","step","sefaria"]
    ],

    [
      "PF042",
      "Jerusalem becoming a ruin",
      "historical",
      "Micah 3:9-12",
      ["Jeremiah 26:17-19","2 Kings 25:8-10"],
      "Micah condemns corrupt leadership and warns of Jerusalem's destruction.",
      "Jeremiah recalls Micah's warning in connection with Hezekiah, while the later Babylonian destruction provides a historical comparison.",
      "Jerusalem was destroyed by Babylon in 587 or 586 BCE.",
      "Jeremiah's account emphasizes that repentance can affect prophetic judgment.",
      "The passage should not be treated as an uncomplicated prediction of one precisely dated event.",
      ["yaleOT","museum","prophets"]
    ],

    [
      "PF043",
      "The fall of Nineveh",
      "historical",
      "Nahum 2",
      ["Nahum 3","Zephaniah 2:13-15"],
      "Nahum celebrates the anticipated overthrow of the Assyrian capital.",
      "Nineveh's fall in 612 BCE is associated with the oracle.",
      "The Babylonian Fall of Nineveh Chronicle, British Museum object 21901, records the defeat of Nineveh.",
      "The oracle's political, poetic and theological dimensions require separate evaluation.",
      "The historical event is well attested, but the precise date of each poetic unit is not independently established.",
      ["museum","cdli","prophets"]
    ],

    [
      "PF044",
      "The righteous shall live by faith",
      "typology",
      "Habakkuk 2:2-4",
      ["Romans 1:17","Galatians 3:11","Hebrews 10:37-38"],
      "Habakkuk contrasts an arrogant figure with the endurance or faithfulness of the righteous amid judgment.",
      "New Testament authors employ the passage in theological discussions of faith and endurance.",
      "The Habakkuk Pesher from Qumran demonstrates another ancient interpretive application.",
      "Translation and theological emphasis vary across Hebrew, Greek and later interpretations.",
      "This is reception of a prophetic statement rather than straightforward prediction of a single historical event.",
      ["scrolls","step","yaleNT"]
    ],

    [
      "PF045",
      "The glory of the restored temple",
      "disputed",
      "Haggai 2:6-9",
      ["Ezra 6:14-15","Hebrews 12:26-27"],
      "Haggai encourages the rebuilding community with promises concerning the temple's future glory.",
      "Interpretations associate the passage with the Second Temple, later messianic expectations and an ultimate divine kingdom.",
      "The rebuilt temple belongs to the Persian-period restoration.",
      "The Hebrew wording concerning the treasures or desired things of the nations has received diverse translations.",
      "The traditional translation desire of all nations should not automatically be treated as an unambiguous personal messianic title.",
      ["step","yaleOT","sefaria"]
    ],

    [
      "PF046",
      "The humble king on a donkey",
      "messianic",
      "Zechariah 9:9-10",
      ["Matthew 21:1-11","John 12:12-16"],
      "Zechariah describes a humble king and a reign associated with peace.",
      "The Gospels explicitly associate Jesus' entry into Jerusalem with this oracle.",
      "The Gospel accounts establish the literary application.",
      "The surrounding promises of international peace receive differing present and future interpretations.",
      "An action can intentionally evoke an existing prophecy; correspondence alone does not establish supernatural prediction.",
      ["step","sefaria","yaleNT"]
    ],

    [
      "PF047",
      "The thirty pieces of silver",
      "typology",
      "Zechariah 11:12-13",
      ["Matthew 26:14-16","Matthew 27:3-10"],
      "Zechariah describes a symbolic shepherding episode and a payment of thirty pieces of silver.",
      "Matthew connects Judas' payment and the subsequent field purchase with prophetic language.",
      "Matthew's account resembles Zechariah while attributing the fulfillment citation to Jeremiah.",
      "Explanations include combined prophetic themes, literary allusion and differing citation conventions.",
      "The textual attribution and exact relationship require investigation rather than being silently harmonized.",
      ["step","yaleNT","sefaria"]
    ],

    [
      "PF048",
      "The pierced one",
      "messianic",
      "Zechariah 12:10",
      ["John 19:34-37","Revelation 1:7"],
      "Zechariah portrays mourning in Jerusalem associated with a pierced figure.",
      "John applies piercing imagery to Jesus' death.",
      "John explicitly invokes Scripture in describing the event.",
      "Hebrew pronouns, textual witnesses and the original identity of the figure are debated.",
      "Independent evidence for crucifixion does not establish every specific narrative detail.",
      ["step","ntvmr","sefaria"]
    ],

    [
      "PF049",
      "Strike the shepherd",
      "messianic",
      "Zechariah 13:7",
      ["Matthew 26:31","Mark 14:27"],
      "Zechariah describes the striking of a shepherd and the scattering of sheep.",
      "Jesus applies this imagery to the disciples' impending desertion.",
      "The Gospel texts explicitly cite the prophetic passage.",
      "Interpretations differ concerning the shepherd's role in Zechariah's original context.",
      "The documented literary connection is not independent historical corroboration of every associated event.",
      ["step","yaleNT","sefaria"]
    ],

    [
      "PF050",
      "The messenger preparing the way",
      "messianic",
      "Malachi 3:1-3",
      ["Matthew 11:7-10","Mark 1:2-4","Luke 7:27"],
      "Malachi announces a messenger preceding divine visitation and purification.",
      "The Gospels associate the preparatory messenger with John the Baptist.",
      "The Gospel application is explicit.",
      "Jewish and Christian interpretations differ regarding the visitation and the identities of its figures.",
      "Identifying the messenger does not establish that every aspect of the oracle has been historically realized.",
      ["step","sefaria","yaleNT"]
    ],

    [
      "PF051",
      "Elijah before the day of the Lord",
      "messianic",
      "Malachi 4:5-6",
      ["Matthew 11:14","Matthew 17:10-13","Luke 1:17","John 1:21"],
      "Malachi anticipates Elijah's coming before the day of the Lord.",
      "Matthew and Luke associate John with Elijah's preparatory role.",
      "Luke describes continuity in spirit and power, while John denies being Elijah in John 1:21.",
      "Interpretations distinguish literal return, prophetic role and possible future fulfillment.",
      "The different Gospel formulations must be examined without assuming they use identical categories.",
      ["step","sefaria","yaleNT"]
    ],

    [
      "PF052",
      "The rejected stone",
      "messianic",
      "Psalm 118:22-23",
      ["Matthew 21:42","Acts 4:11","1 Peter 2:4-7"],
      "Psalm 118 expresses thanksgiving and reversal of rejection.",
      "New Testament authors apply the rejected stone imagery to Jesus.",
      "Multiple New Testament texts explicitly invoke the psalm.",
      "The psalm's original setting may involve communal worship or royal thanksgiving.",
      "Its genre and earlier historical significance differ from a direct predictive oracle.",
      ["step","sefaria","yaleNT"]
    ],

    [
      "PF053",
      "The suffering righteous figure",
      "typology",
      "Psalm 22",
      ["Matthew 27:35-46","Mark 15:24-34","John 19:23-24"],
      "The psalm begins as a lament and develops toward thanksgiving and praise.",
      "The Gospel passion narratives employ several expressions associated with Psalm 22.",
      "The psalm belongs to the pre-Christian scriptural tradition.",
      "Christian tradition reads it in relation to Jesus' suffering. Jewish readings generally approach it within the lament tradition.",
      "Psalm 22:16 has important Hebrew and Greek textual differences; disputed wording must not be presented as uncontested.",
      ["step","sefaria","dss","ntvmr"]
    ],

    [
      "PF054",
      "The holy one and corruption",
      "messianic",
      "Psalm 16:8-11",
      ["Acts 2:25-32","Acts 13:35-37"],
      "The psalm expresses confidence in God's preservation from death or the realm of the dead.",
      "Acts interprets the passage in relation to Jesus' resurrection.",
      "The speeches explicitly cite the psalm and interpret it beyond David's own death.",
      "Historical readings emphasize the psalmist's confidence in divine preservation.",
      "The textual connection does not itself independently establish a supernatural resurrection.",
      ["step","yaleNT","sefaria"]
    ],

    [
      "PF055",
      "The priest according to Melchizedek",
      "messianic",
      "Psalm 110:1-4",
      ["Mark 12:35-37","Hebrews 5:5-10","Hebrews 7"],
      "Psalm 110 combines royal authority with priestly language.",
      "Hebrews develops the passage as a foundation for Christ's priesthood.",
      "The New Testament explicitly cites the psalm.",
      "Historical interpretations frequently consider royal institutions and enthronement imagery.",
      "The theological identification of the eternal priest depends on the interpretive framework.",
      ["step","sefaria","yaleNT","fathers"]
    ],

    [
      "PF056",
      "The betrayal of Jesus",
      "narrative",
      "Mark 14:17-21",
      ["Mark 14:43-46","John 13:18-30","Psalm 41:9"],
      "Jesus predicts betrayal during the meal with his disciples.",
      "The Gospel narratives identify Judas as the immediate betrayer.",
      "The prediction and reported outcome are preserved in related Gospel traditions.",
      "The writers also associate betrayal with scriptural patterns.",
      "The prediction is not preserved in an independently dated document written before the reported event.",
      ["yaleNT","step","ntvmr"]
    ],

    [
      "PF057",
      "Peter's denial",
      "narrative",
      "Mark 14:27-31",
      ["Mark 14:66-72","Matthew 26:69-75","Luke 22:54-62","John 18:15-27"],
      "Jesus warns Peter that he will deny association with him.",
      "The Gospels describe Peter's subsequent denials.",
      "Related traditions preserve the central account across the four Gospels.",
      "Differences in narrative details require source-sensitive interpretation.",
      "The surviving accounts were written after the events they describe.",
      ["step","yaleNT","ntvmr"]
    ],

    [
      "PF058",
      "Jesus' suffering and resurrection",
      "narrative",
      "Mark 8:31",
      ["Mark 9:31","Mark 10:33-34","Mark 15","Mark 16:1-8","1 Corinthians 15:3-8"],
      "The Gospel traditions describe Jesus predicting suffering, death and resurrection.",
      "Christian proclamation identifies his death and resurrection as the realization of these predictions.",
      "Jesus' crucifixion is widely accepted historically. Paul's letters preserve early testimony to resurrection belief.",
      "Christian apologetics argues for the resurrection as a historical divine act. Other historical approaches assess the origins of the belief without affirming a supernatural explanation.",
      "The surviving prediction accounts postdate the crucifixion. Historical evidence for death and resurrection belief must be distinguished from proof of divine resurrection.",
      ["craig","yaleNT","ntvmr","step"]
    ],

    [
      "PF059",
      "The sign of Jonah",
      "typology",
      "Jonah 1:17",
      ["Matthew 12:38-42","Luke 11:29-32"],
      "Jonah's story describes deliverance following time in the great fish.",
      "Matthew connects the sign with the Son of Man's time in the earth.",
      "Matthew explicitly establishes the typological relationship.",
      "Luke places a different emphasis on Jonah's role as a sign to Nineveh.",
      "The accounts should be compared individually before assuming identical chronological implications.",
      ["step","yaleNT","prophets"]
    ],

    [
      "PF060",
      "The destruction of the Second Temple",
      "historical",
      "Mark 13:1-2",
      ["Matthew 24:1-2","Luke 19:41-44","Luke 21:5-6"],
      "Jesus announces destruction concerning Jerusalem's temple complex.",
      "The oracle is associated with the Roman destruction of Jerusalem and the temple in 70 CE.",
      "Josephus, Jewish War book 6, and archaeological evidence establish the destruction.",
      "Scholars debate the dates of the Gospel traditions and final compositions relative to 70 CE.",
      "Historical confirmation of the destruction does not independently establish the exact date when the prediction was first spoken. Surviving retaining walls should be distinguished from the temple buildings.",
      ["perseus","museum","yaleNT"]
    ],

    [
      "PF061",
      "The famine in the reign of Claudius",
      "historical",
      "Acts 11:27-30",
      ["Acts 12:25"],
      "Acts reports Agabus predicting a severe famine during Claudius' reign.",
      "Acts connects the warning with relief provided to Judea.",
      "Josephus, Antiquities book 20, describes famine in Judea during the mid-first century.",
      "The extent and precise chronology of regional food shortages remain relevant to interpretation.",
      "Historical famine evidence does not independently corroborate Agabus' prediction.",
      ["perseus","yaleNT","step"]
    ],

    [
      "PF062",
      "Agabus and Paul's imprisonment",
      "narrative",
      "Acts 21:10-14",
      ["Acts 21:27-36","Acts 22:24-29"],
      "Agabus uses a symbolic action to warn Paul of captivity in Jerusalem.",
      "Acts narrates Paul's seizure and Roman detention.",
      "Both the warning and the resulting events are recorded within Acts.",
      "Interpreters examine how the symbolic warning corresponds to the precise roles of Jewish opponents and Roman authorities.",
      "No independent surviving record verifies this particular prophetic action.",
      ["yaleNT","step"]
    ],

    [
      "PF063",
      "The coming of the Son of Man",
      "future",
      "Matthew 24:29-36",
      ["Mark 13:24-32","Luke 21:25-28","Acts 1:6-11"],
      "The discourse includes cosmic imagery, tribulation and the coming of the Son of Man.",
      "Christian traditions anticipate Christ's return while differing over how much of the discourse concerns first-century events.",
      "The related Gospel accounts can be compared with Jewish apocalyptic literature.",
      "Preterist, futurist and mixed interpretations differ concerning Jerusalem, final judgment and the meaning of this generation.",
      "The passage does not authorize a verified modern calendar date for Christ's return.",
      ["yaleNT","step","fathers","ccel"]
    ],

    [
      "PF064",
      "The resurrection of the dead",
      "future",
      "Daniel 12:1-3",
      ["John 5:28-29","1 Corinthians 15:50-58","1 Thessalonians 4:13-18"],
      "Daniel anticipates deliverance and the awakening of the dead.",
      "Christian teaching connects bodily resurrection with Christ and the anticipated consummation.",
      "The passages provide textual evidence for developing Jewish and Christian resurrection beliefs.",
      "Traditions differ concerning the timing, nature and sequence of resurrection and judgment.",
      "Future resurrection is a theological expectation, not an event presently established through historical investigation.",
      ["yaleOT","yaleNT","sefaria","step"]
    ],

    [
      "PF065",
      "The man of lawlessness",
      "future",
      "2 Thessalonians 2:1-12",
      ["Daniel 7:25","Daniel 11:36","1 John 2:18"],
      "The letter discusses rebellion and a lawless figure in relation to the day of the Lord.",
      "Interpretations associate the passage with historical opponents, institutions or an anticipated end-time figure.",
      "The text can be situated within Jewish and Christian apocalyptic traditions.",
      "Futurist, historicist and other readings disagree about the figure's identity and the restraining power.",
      "No contemporary individual should be declared the definitive fulfillment based on superficial resemblance.",
      ["yaleNT","step","ccel"]
    ],

    [
      "PF066",
      "The seven churches",
      "historical",
      "Revelation 2",
      ["Revelation 3","Revelation 1:4"],
      "Revelation addresses seven congregations in Roman Asia with warnings and promises.",
      "The messages concern historical Christian communities and provide patterns later interpreted by other churches.",
      "Archaeology and inscriptions document the ancient cities addressed by Revelation.",
      "Some interpreters also read the churches as successive historical eras, although the text does not explicitly supply such a chronology.",
      "Present-day conditions at the ancient sites do not independently prove that every warning was realized exactly as proposed.",
      ["museum","yaleNT","step"]
    ],

    [
      "PF067",
      "The beast and the number 666",
      "disputed",
      "Revelation 13:11-18",
      ["Revelation 17:9-14"],
      "Revelation presents symbolic imagery concerning oppressive authority, allegiance and a numerical name.",
      "One prominent historical interpretation connects the number with Nero Caesar through Hebrew letter values.",
      "Ancient manuscript witnesses include the variant 616, which is relevant to the Nero interpretation.",
      "Other traditions identify broader imperial systems, recurring opposition or a future individual.",
      "Numerical coincidences do not establish the identity of a contemporary person, government or technology.",
      ["ntvmr","yaleNT","step"]
    ],

    [
      "PF068",
      "Babylon the Great",
      "disputed",
      "Revelation 17",
      ["Revelation 18","Revelation 19:1-3"],
      "Revelation portrays Babylon as a symbolic city associated with wealth, corruption and persecution.",
      "Many historical readings associate the imagery with imperial Rome.",
      "Roman political and economic structures provide relevant first-century context.",
      "Other readings treat Babylon as a recurring oppressive system or a future manifestation.",
      "The symbol does not provide an uncontested identification with a particular modern city or institution.",
      ["yaleNT","perseus","step"]
    ],

    [
      "PF069",
      "The thousand-year reign",
      "future",
      "Revelation 20:1-10",
      ["Revelation 19:11-21","Revelation 20:11-15"],
      "Revelation describes a thousand-year period, restraint of Satan and subsequent conflict.",
      "Christian traditions understand this passage through several millennial frameworks.",
      "Early and later Christian writings document substantial diversity in interpretation.",
      "Premillennial, amillennial and postmillennial positions differ concerning sequence and the meaning of the thousand years.",
      "The symbolic or literal nature and chronological placement of the millennium remain theological disputes.",
      ["fathers","ccel","yaleNT"]
    ],

    [
      "PF070",
      "New heavens and new earth",
      "future",
      "Isaiah 65:17-25",
      ["Isaiah 66:22","2 Peter 3:13","Revelation 21:1-5","Revelation 22:1-5"],
      "Isaiah portrays renewed creation and restored communal life.",
      "Revelation develops renewed creation imagery into its vision of God's presence and final restoration.",
      "The textual connections establish continuity between prophetic and apocalyptic imagery.",
      "Traditions differ concerning earthly restoration, cosmic transformation and symbolic interpretation.",
      "The ultimate realization remains a theological expectation rather than an independently verified future event.",
      ["greatIsaiah","yaleNT","step","fathers"]
    ]

  ].map(([
    id,title,category,prophecy,related,context,
    fulfillment,evidence,alternatives,limits,sourceIds
  ]) => ({
    id,title,category,prophecy,related,context,
    fulfillment,evidence,alternatives,limits,sourceIds
  }));

  const historicalTimeline = [
    [
      "Approximately 734–732 BCE",
      "Syro-Ephraimite crisis",
      "Isaiah 7",
      "Historical setting of the sign addressed to Ahaz."
    ],
    [
      "Approximately 722–720 BCE",
      "Fall of Samaria",
      "Micah 1:5-7",
      "Assyrian conquest and absorption of the northern kingdom."
    ],
    [
      "701 BCE",
      "Sennacherib's campaign against Judah",
      "Isaiah 37",
      "Assyrian inscriptions and biblical accounts provide overlapping historical evidence."
    ],
    [
      "612 BCE",
      "Fall of Nineveh",
      "Nahum 2–3",
      "Babylonian chronicle evidence documents the city's defeat."
    ],
    [
      "597 BCE",
      "Babylonian capture of Jerusalem",
      "2 Kings 24",
      "Recorded in Babylonian chronicle evidence."
    ],
    [
      "587 or 586 BCE",
      "Destruction of Jerusalem and the First Temple",
      "Jeremiah 21; Micah 3",
      "Historically established catastrophe, with chronological variation."
    ],
    [
      "539 BCE",
      "Cyrus captures Babylon",
      "Isaiah 44–45",
      "The Cyrus Cylinder and cuneiform evidence document the Persian takeover."
    ],
    [
      "Approximately 516–515 BCE",
      "Completion of the Second Temple",
      "Haggai 2; Ezra 6",
      "Persian-period restoration framework."
    ],
    [
      "332 BCE",
      "Alexander conquers Tyre",
      "Ezekiel 26",
      "Relevant to interpretations of the Tyre oracle."
    ],
    [
      "167–164 BCE",
      "Desecration and rededication of the temple",
      "Daniel 8–11",
      "Central to historical readings of the Antiochene crisis."
    ],
    [
      "Approximately 6–4 BCE",
      "Commonly proposed range for Jesus' birth",
      "Matthew 1–2",
      "Approximate reconstruction; infancy chronology is debated."
    ],
    [
      "Approximately 30 or 33 CE",
      "Crucifixion of Jesus",
      "Psalm 22; Isaiah 53; Gospel passion narratives",
      "The crucifixion is historically accepted; its precise year remains debated."
    ],
    [
      "Mid-first century CE",
      "Famine in Judea",
      "Acts 11:27-30",
      "Josephus provides relevant historical evidence."
    ],
    [
      "70 CE",
      "Roman destruction of Jerusalem",
      "Mark 13; Luke 21",
      "Established historical event with literary and archaeological evidence."
    ]
  ];

  const evidenceDocuments = [
    {
      title:"Great Isaiah Scroll — 1QIsaᵃ",
      date:"Approximately second century BCE",
      type:"Manuscript",
      detail:"Preserves the book of Isaiah in a pre-Christian manuscript, including passages later interpreted in relation to Jesus.",
      limit:"Establishes prior textual existence, not the truth of a particular fulfillment interpretation.",
      source:"greatIsaiah"
    },
    {
      title:"Habakkuk Pesher — 1QpHab",
      date:"Approximately first century BCE",
      type:"Manuscript and reception history",
      detail:"Demonstrates how an ancient Jewish community applied prophetic passages to its own historical circumstances.",
      limit:"Represents a particular ancient interpretation rather than the only meaning of Habakkuk.",
      source:"scrolls"
    },
    {
      title:"Sargon II royal inscriptions",
      date:"Late eighth century BCE",
      type:"Royal inscriptions",
      detail:"Provide historical evidence relating to Assyrian conquest and administration, including Samaria.",
      limit:"Royal inscriptions employ imperial ideology and may present selective accounts.",
      source:"oracc"
    },
    {
      title:"Sennacherib's Taylor Prism",
      date:"Seventh century BCE inscription describing the 701 BCE campaign",
      type:"Royal inscription — British Museum 91032",
      detail:"Records Sennacherib's campaign against Judah and his treatment of Hezekiah.",
      limit:"Does not independently verify the biblical account of supernatural intervention.",
      source:"museum"
    },
    {
      title:"Lachish reliefs",
      date:"Early seventh century BCE",
      type:"Assyrian palace reliefs",
      detail:"Depict Sennacherib's conquest of Lachish and provide material context for the campaign against Judah.",
      limit:"These are royal representations, not neutral photographic records of the campaign.",
      source:"museum"
    },
    {
      title:"Fall of Nineveh Chronicle",
      date:"Late seventh-century BCE events",
      type:"Cuneiform chronicle — British Museum 21901",
      detail:"Documents the defeat of Nineveh in 612 BCE.",
      limit:"Establishes the historical event, not the prior composition date of Nahum.",
      source:"museum"
    },
    {
      title:"Babylonian Jerusalem Chronicle",
      date:"Early sixth-century BCE events",
      type:"Cuneiform chronicle — British Museum 21946",
      detail:"Records the Babylonian capture of Jerusalem in 597 BCE.",
      limit:"Does not directly document the final temple destruction of 587 or 586 BCE.",
      source:"museum"
    },
    {
      title:"Cyrus Cylinder",
      date:"539–538 BCE context",
      type:"Royal inscription — British Museum 90920",
      detail:"Documents Cyrus' rise to power in Babylon and policies associated with restoring sanctuaries and communities.",
      limit:"Does not explicitly identify Jerusalem, the Jewish exiles or Ezra's recorded decree.",
      source:"cyrus"
    },
    {
      title:"Josephus — Jewish Antiquities",
      date:"Approximately 93–94 CE",
      type:"Ancient historical literature",
      detail:"Book 20 provides relevant evidence about famine in Judea.",
      limit:"Josephus wrote decades after the famine and does not independently verify Agabus' prophecy.",
      source:"perseus"
    },
    {
      title:"Josephus — Jewish War",
      date:"Approximately 75–79 CE",
      type:"Ancient historical literature",
      detail:"Book 6 describes the Roman destruction of Jerusalem and the temple.",
      limit:"Josephus' account reflects his position, audience and literary purposes.",
      source:"perseus"
    },
    {
      title:"Papyrus 115",
      date:"Approximately third or fourth century CE",
      type:"New Testament manuscript — P.Oxy. 4499",
      detail:"Preserves a reading of 616 in Revelation 13:18, relevant to interpretations of the beast's number.",
      limit:"The variant does not uniquely establish one interpretation of Revelation.",
      source:"ntvmr"
    }
  ];

  const frameworks = [
    [
      "Direct predictive prophecy",
      "A declaration understood as anticipating a later event. Evaluation requires examining wording, date, specificity and evidence for the proposed outcome."
    ],
    [
      "Conditional prophecy",
      "A warning or promise whose realization may depend on repentance or other conditions. Jeremiah 18:7-10 and Jonah 3 are important examples."
    ],
    [
      "Typological fulfillment",
      "An earlier person, event or institution is understood as a pattern realized in a later context. Matthew's use of Hosea 11:1 illustrates this method."
    ],
    [
      "Messianic interpretation",
      "A passage is understood in relation to the Messiah. Jewish and Christian traditions can disagree about the identity, role and actions of this figure."
    ],
    [
      "Inaugurated fulfillment",
      "A theological interpretation in which a promise begins to be realized but awaits further consummation."
    ],
    [
      "Fuller meaning",
      "An interpretive approach often called sensus plenior, in which a later revelation is understood to disclose significance beyond the earlier author's immediate awareness."
    ],
    [
      "Historical-critical interpretation",
      "Examines authorship, composition, genre, historical setting, literary development and the original audience before evaluating later applications."
    ],
    [
      "Jewish interpretive traditions",
      "Examine prophetic passages within the Hebrew Bible, Jewish historical experience and diverse rabbinic or messianic expectations."
    ],
    [
      "Preterism",
      "Interprets many apocalyptic prophecies in relation to events in the ancient past, particularly the first century. Partial and full preterism differ significantly."
    ],
    [
      "Futurism",
      "Understands substantial portions of biblical eschatological prophecy as awaiting future realization."
    ],
    [
      "Historicism",
      "Reads apocalyptic imagery as corresponding to successive periods or institutions in the history of the church and world."
    ],
    [
      "Idealism",
      "Emphasizes recurring symbolic patterns of divine sovereignty, opposition, judgment and hope rather than a fixed historical sequence."
    ],
    [
      "Premillennialism",
      "Understands Christ's return as preceding the millennial reign described in Revelation 20."
    ],
    [
      "Amillennialism",
      "Commonly interprets the millennium symbolically in relation to Christ's present reign rather than a separate future earthly thousand-year kingdom."
    ],
    [
      "Postmillennialism",
      "Generally anticipates an extended era of gospel influence or righteousness before Christ's return."
    ]
  ];

  const verificationQuestions = [
    "What does the passage actually say in its literary context?",
    "What historical circumstances confronted its original audience?",
    "Can the prophetic text be securely dated before the proposed event?",
    "What Hebrew, Aramaic or Greek textual variants affect interpretation?",
    "Is the declaration predictive, conditional, symbolic or retrospective?",
    "How specific is the proposed correspondence?",
    "Does independent contemporary evidence establish the event?",
    "Does the fulfillment account explicitly quote the prophetic text?",
    "Could the later account intentionally imitate the earlier passage?",
    "Are there unresolved details or competing historical explanations?",
    "Have alternative Jewish and Christian interpretations been examined?",
    "Are historical observations clearly distinguished from theological conclusions?"
  ];

  const books = (
    "Genesis|Exodus|Leviticus|Numbers|Deuteronomy|" +
    "Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|" +
    "2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|" +
    "Esther|Job|Psalms|Proverbs|Ecclesiastes|" +
    "Song of Solomon|Isaiah|Jeremiah|Lamentations|" +
    "Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|" +
    "Micah|Nahum|Habakkuk|Zephaniah|Haggai|" +
    "Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|" +
    "Romans|1 Corinthians|2 Corinthians|Galatians|" +
    "Ephesians|Philippians|Colossians|1 Thessalonians|" +
    "2 Thessalonians|1 Timothy|2 Timothy|Titus|" +
    "Philemon|Hebrews|James|1 Peter|2 Peter|" +
    "1 John|2 John|3 John|Jude|Revelation"
  ).split("|");

  const root = document.createElement("div");

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>
      .dbpf {
        color:var(--text,#f1efe7);
        line-height:1.75;
      }

      .dbpf .pf-panel {
        padding:20px;
        margin:18px 0;
        background:var(--panel2,#20211d);
        border:1px solid var(--line,#34352e);
        border-radius:12px;
      }

      .dbpf .pf-card {
        padding:16px;
        margin:12px 0;
        background:var(--panel,#191a17);
        border:1px solid var(--line,#34352e);
        border-radius:9px;
      }

      .dbpf .pf-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:12px;
      }

      .dbpf .pf-gold {
        color:var(--gold,#c9aa70);
      }

      .dbpf .pf-muted {
        color:var(--muted,#aaa99e);
        font-size:13px;
      }

      .dbpf .pf-stat {
        color:var(--gold,#c9aa70);
        font-size:28px;
        font-weight:bold;
      }

      .dbpf .pf-note {
        padding:14px;
        margin:12px 0;
        border-left:3px solid var(--gold,#c9aa70);
        background:var(--bg,#10110f);
      }

      .dbpf .pf-actions {
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        gap:8px;
        margin:12px 0;
      }

      .dbpf input:not([type="checkbox"]),
      .dbpf select,
      .dbpf textarea {
        box-sizing:border-box;
        width:100%;
        padding:11px;
        border:1px solid var(--line,#34352e);
        background:var(--bg,#10110f);
        color:var(--text,#f1efe7);
        border-radius:7px;
        font:inherit;
      }

      .dbpf textarea {
        min-height:150px;
        resize:vertical;
      }

      .dbpf label {
        display:block;
        margin:6px 0;
        font-size:13px;
      }

      .dbpf .pf-check {
        display:flex;
        align-items:flex-start;
        gap:10px;
        padding:8px 0;
        font-size:14px;
      }

      .dbpf input[type="checkbox"] {
        width:auto;
        flex-shrink:0;
        margin-top:5px;
        accent-color:var(--gold,#c9aa70);
      }

      .dbpf summary {
        cursor:pointer;
        color:var(--gold,#c9aa70);
        font-weight:600;
      }

      .dbpf details {
        padding:12px 0;
        border-bottom:1px solid var(--line,#34352e);
      }

      .dbpf a {
        color:var(--gold,#c9aa70);
        overflow-wrap:anywhere;
      }

      .dbpf .pf-text {
        padding:15px;
        margin:12px 0;
        background:var(--bg,#10110f);
        border-radius:8px;
        white-space:pre-wrap;
        overflow-wrap:anywhere;
      }

      .dbpf .pf-timeline {
        border-left:2px solid var(--gold,#c9aa70);
        padding:12px 16px;
        margin:12px 0;
      }

      .dbpf button[aria-pressed="true"] {
        border-color:var(--gold,#c9aa70);
        color:var(--gold,#c9aa70);
      }

      .dbpf [hidden] {
        display:none !important;
      }

      @media(max-width:600px) {
        .dbpf .pf-panel,
        .dbpf .pf-card {
          padding:12px;
        }

        .dbpf .pf-grid {
          grid-template-columns:1fr;
        }
      }
    </style>

    <div class="dbpf">

      <div class="eyebrow">
        DESERTBIBLE · PROPHETIC RESEARCH
      </div>

      <h2>Prophecy &amp; Fulfillment</h2>

      <p>
        Investigate prophetic declarations,
        messianic interpretations, historical events,
        textual evidence and anticipated fulfillment.
      </p>

      <section class="pf-panel">

        <div class="pf-grid">

          <div>
            <div class="pf-stat" id="pfTotal"></div>
            Research studies
          </div>

          <div>
            <div class="pf-stat" id="pfTypes"></div>
            Classification types
          </div>

          <div>
            <div class="pf-stat" id="pfSourceTotal"></div>
            Research resources
          </div>

          <div>
            <div class="pf-stat" id="pfDocumentTotal"></div>
            Evidence profiles
          </div>

        </div>

        <div class="pf-note">

          <strong>Research integrity</strong>

          <p>
            Historical confirmation of an event,
            pre-event existence of a text,
            literary correspondence and theological
            fulfillment are distinct claims.
          </p>

          <p>
            DesertBible does not assign mathematical
            probabilities to fulfilled prophecies
            without defensible statistical evidence.
            Interpretive disagreements are identified
            rather than concealed.
          </p>

        </div>

      </section>

      <section class="pf-panel">

        <h3>01 · Prophecy Research Explorer</h3>

        <div class="pf-grid">

          <div>
            <label for="pfSearch">Search studies</label>

            <input id="pfSearch"
              type="search"
              placeholder="Messiah, Cyrus, Daniel, Micah...">
          </div>

          <div>
            <label for="pfCategory">Classification</label>

            <select id="pfCategory">
              <option value="all">
                All classifications
              </option>
            </select>
          </div>

          <div>
            <label for="pfBook">Biblical book</label>

            <select id="pfBook">
              <option value="all">
                All biblical books
              </option>
            </select>
          </div>

          <div>
            <label for="pfSort">Display order</label>

            <select id="pfSort">
              <option value="canonical">
                Biblical source order
              </option>
              <option value="az">
                Alphabetical
              </option>
              <option value="category">
                Classification
              </option>
              <option value="saved">
                Bookmarked studies
              </option>
            </select>
          </div>

        </div>

        <div class="pf-actions">

          <button type="button" id="pfReset">
            Reset filters
          </button>

          <button type="button" id="pfExportAll">
            Export matching studies
          </button>

        </div>

        <p id="pfCount" role="status"
           aria-live="polite"></p>

        <div id="pfResults"></div>

        <div class="pf-actions">

          <button type="button" id="pfPrev">
            Previous
          </button>

          <span id="pfPage"></span>

          <button type="button" id="pfNext">
            Next
          </button>

        </div>

      </section>

      <section class="pf-panel" id="pfProfile" hidden>

        <div class="eyebrow">
          PROPHECY RESEARCH DOSSIER
        </div>

        <h3 id="pfTitle"></h3>

        <div id="pfDetails"></div>

        <h4>Compare Prophecy and Related Passages</h4>

        <div class="pf-grid">

          <div>
            <label for="pfOriginal">
              Original passage
            </label>

            <select id="pfOriginal"></select>
          </div>

          <div>
            <label for="pfRelated">
              Related or fulfillment passage
            </label>

            <select id="pfRelated"></select>
          </div>

          <div>
            <label for="pfTranslation">
              Translation
            </label>

            <select id="pfTranslation">
              <option value="web">
                World English Bible
              </option>
              <option value="kjv">
                King James Version
              </option>
              <option value="asv">
                American Standard Version
              </option>
            </select>
          </div>

        </div>

        <div class="pf-actions">

          <button type="button" id="pfCompare">
            Compare passages
          </button>

        </div>

        <div class="pf-grid">

          <div>
            <h4 id="pfOriginalTitle"></h4>

            <div id="pfOriginalText"
              class="pf-text"
              aria-live="polite"></div>
          </div>

          <div>
            <h4 id="pfRelatedTitle"></h4>

            <div id="pfRelatedText"
              class="pf-text"
              aria-live="polite"></div>
          </div>

        </div>

        <h4>Evidence Verification Checklist</h4>

        <p class="pf-muted">
          Checked items record your research progress.
          They do not represent a probability of
          prophetic fulfillment.
        </p>

        <div id="pfChecklist"></div>

        <p id="pfProgress"></p>

        <h4>Research Assessment</h4>

        <select id="pfAssessment">
          <option value="">
            Not yet assessed
          </option>
          <option value="additional">
            Additional evidence required
          </option>
          <option value="textual">
            Textual relationship established
          </option>
          <option value="historical">
            Historical event corroborated
          </option>
          <option value="theological">
            Theological interpretation
          </option>
          <option value="disputed">
            Competing interpretations unresolved
          </option>
        </select>

        <h4>Personal Research Notes</h4>

        <textarea id="pfNotes"
          aria-label="Prophecy research notes"
          placeholder="Record citations, textual variants, arguments, objections and conclusions."></textarea>

        <div class="pf-actions">

          <button type="button" id="pfSave">
            Save research
          </button>

          <button type="button" id="pfBookmark">
            Bookmark study
          </button>

          <button type="button" id="pfCopy">
            Copy dossier
          </button>

          <button type="button" id="pfDownload">
            Download dossier
          </button>

        </div>

        <p id="pfMessage" role="status"
           aria-live="polite"></p>

      </section>

      <section class="pf-panel">
        <h3>02 · Historical Fulfillment Timeline</h3>

        <p>
          Historical events relevant to selected
          prophetic interpretations.
        </p>

        <div id="pfTimeline"></div>
      </section>

      <section class="pf-panel">

        <h3>03 · Manuscripts and External Evidence</h3>

        <p>
          Investigate the surviving evidence,
          its historical significance and limitations.
        </p>

        <div id="pfEvidence"></div>

      </section>

      <section class="pf-panel">

        <h3>04 · Interpretive Frameworks</h3>

        <div id="pfFrameworks"></div>

      </section>

      <section class="pf-panel">

        <h3>05 · Research Sources and Bibliography</h3>

        <label for="pfSourceSearch">
          Search research resources
        </label>

        <input id="pfSourceSearch"
          type="search"
          placeholder="Isaiah, manuscripts, Yale...">

        <div id="pfLibrary"></div>

      </section>

      <section class="pf-panel">

        <h3>06 · Christian Scholars and Apologists</h3>

        <p>
          Explore contemporary Christian arguments,
          manuscript discussions and theological
          perspectives. Individual prophetic claims
          require a specific publication or recording
          before attribution.
        </p>

        <div id="pfScholars"></div>

      </section>

      <section class="pf-panel">

        <h3>07 · Saved Prophecy Studies</h3>

        <div id="pfSaved"></div>

      </section>

      <button type="button" id="pfClose">
        Return to research categories
      </button>

    </div>
  `;

  const $ = id => root.querySelector("#" + id);

  function make(tag,text,parent) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }

    if (parent) parent.appendChild(element);

    return element;
  }

  function link(parent,title,url) {
    const element = make("a",title,parent);

    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";

    return element;
  }

  function button(parent,title,callback) {
    const element = make("button",title,parent);

    element.type = "button";
    element.addEventListener("click",callback);

    return element;
  }

  function option(parent,value,title) {
    const element = make("option",title,parent);

    element.value = value;

    return element;
  }

  function section(parent,title,description) {
    make("h4",title,parent);
    make("p",description,parent);
  }

  function readStorage(key,fallback) {
    try {
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : fallback;

    } catch {
      return fallback;
    }
  }

  function writeStorage(key,value) {
    try {
      localStorage.setItem(key,JSON.stringify(value));

      return true;

    } catch {
      return false;
    }
  }

  const storageKey = "DesertBible.prophecy.research.v1";
  const bookmarkKey = "DesertBible.prophecy.bookmarks.v1";

  let research = readStorage(storageKey,{});
  let saved = readStorage(bookmarkKey,[]);

  if (!research ||
      typeof research !== "object" ||
      Array.isArray(research)) {
    research = {};
  }

  if (!Array.isArray(saved)) saved = [];

  let active = null;
  let page = 0;
  let requestNumber = 0;

  const pageSize = 8;
  const cache = new Map();

  $("pfTotal").textContent = records.length;

  $("pfTypes").textContent =
    Object.keys(classifications).length;

  $("pfSourceTotal").textContent =
    Object.keys(sources).length;

  $("pfDocumentTotal").textContent =
    evidenceDocuments.length;

  Object.entries(classifications)
    .forEach(([id,title]) => {
      option($("pfCategory"),id,title);
    });

  books.forEach(book => {
    option($("pfBook"),book,book);
  });

  function referenceBook(reference) {
    const match = reference.match(
      /^(.+?)\s+\d+(?::|$)/
    );

    return match ? match[1] : "";
  }

  function filteredRecords() {

    const query = $("pfSearch").value
      .toLowerCase().trim();

    const category = $("pfCategory").value;
    const book = $("pfBook").value;
    const sort = $("pfSort").value;

    const results = records.filter(record => {

      if (category !== "all" &&
          record.category !== category) {
        return false;
      }

      if (sort === "saved" &&
          !saved.includes(record.id)) {
        return false;
      }

      if (book !== "all") {

        const refs = [
          record.prophecy,
          ...record.related
        ];

        if (!refs.some(ref =>
          referenceBook(ref) === book
        )) return false;
      }

      const text = [
        record.id,
        record.title,
        classifications[record.category],
        record.prophecy,
        ...record.related,
        record.context,
        record.fulfillment,
        record.evidence,
        record.alternatives,
        record.limits
      ].join(" ").toLowerCase();

      return query.split(/\s+/)
        .every(word => text.includes(word));

    });

    if (sort === "az") {

      results.sort((a,b) =>
        a.title.localeCompare(b.title)
      );

    } else if (sort === "category") {

      results.sort((a,b) =>
        classifications[a.category]
          .localeCompare(classifications[b.category])
      );

    } else {

      results.sort((a,b) => {

        const difference =
          books.indexOf(referenceBook(a.prophecy)) -
          books.indexOf(referenceBook(b.prophecy));

        if (difference) return difference;

        const chapterA = Number(
          (a.prophecy.match(/\s(\d+)(?::|$)/) || [0,0])[1]
        );

        const chapterB = Number(
          (b.prophecy.match(/\s(\d+)(?::|$)/) || [0,0])[1]
        );

        return chapterA - chapterB ||
          a.id.localeCompare(b.id);
      });
    }

    return results;
  }

  function renderResults() {

    const results = filteredRecords();

    const pages = Math.max(
      1,
      Math.ceil(results.length/pageSize)
    );

    page = Math.max(0,Math.min(page,pages-1));

    $("pfResults").replaceChildren();

    $("pfCount").textContent =
      results.length + " matching research studies.";

    $("pfPage").textContent =
      "Page " + (page+1) + " of " + pages;

    $("pfPrev").disabled = page === 0;
    $("pfNext").disabled = page >= pages-1;

    if (!results.length) {

      make(
        "p",
        "No indexed prophecy study matches this selection. This does not establish the absence of prophetic material in the selected book.",
        $("pfResults")
      );

      return;
    }

    results.slice(
      page*pageSize,
      (page+1)*pageSize
    ).forEach(record => {

      const card = make(
        "article",
        undefined,
        $("pfResults")
      );

      card.className = "pf-card";

      make(
        "p",
        record.id + " · " +
        classifications[record.category],
        card
      ).className = "pf-gold";

      make("h3",record.title,card);

      make("p",record.prophecy,card)
        .className = "pf-gold";

      make("p",record.fulfillment,card);

      const actions = make("div",undefined,card);

      actions.className = "pf-actions";

      button(actions,"Open research dossier",() => {
        openRecord(record);
      });

      if (saved.includes(record.id)) {

        make("span","Bookmarked",actions)
          .className = "pf-gold";
      }

    });
  }

  function sourceEntry(parent,id) {

    const source = sources[id];

    if (!source) return;

    const item = make("details",undefined,parent);

    make("summary",source[0],item);

    make("p",source[2],item)
      .className = "pf-muted";

    link(item,"Open research resource",source[1]);
  }

  function persistResearch() {

    if (!active) return true;

    const checks = Array.from(
      $("pfChecklist")
        .querySelectorAll('input[type="checkbox"]')
    ).map(input => input.checked);

    research[active.id] = {
      notes:$("pfNotes").value,
      assessment:$("pfAssessment").value,
      checks
    };

    $("pfProgress").textContent =
      checks.filter(Boolean).length + " of " +
      verificationQuestions.length +
      " research questions reviewed.";

    return writeStorage(storageKey,research);
  }

  function renderChecklist(record) {

    $("pfChecklist").replaceChildren();

    const previous = research[record.id] || {};

    verificationQuestions.forEach((question,index) => {

      const label = make(
        "label",
        undefined,
        $("pfChecklist")
      );

      label.className = "pf-check";

      const input = make("input",undefined,label);

      input.type = "checkbox";

      input.checked = Boolean(
        Array.isArray(previous.checks) &&
        previous.checks[index]
      );

      make("span",question,label);

      input.addEventListener(
        "change",
        persistResearch
      );

    });
  }

  function openRecord(record) {

    persistResearch();

    active = record;

    $("pfProfile").hidden = false;

    $("pfTitle").textContent =
      record.id + " — " + record.title;

    const details = $("pfDetails");

    details.replaceChildren();

    make(
      "p",
      classifications[record.category],
      details
    ).className = "pf-gold";

    section(
      details,
      "Prophetic or source passage",
      record.prophecy
    );

    section(
      details,
      "Original historical and literary context",
      record.context
    );

    section(
      details,
      "Fulfillment claim or later application",
      record.fulfillment
    );

    section(
      details,
      "Historical and textual evidence",
      record.evidence
    );

    section(
      details,
      "Alternative interpretations",
      record.alternatives
    );

    const caution = make("div",undefined,details);

    caution.className = "pf-note";

    section(
      caution,
      "Evidence limitations",
      record.limits
    );

    make(
      "h4",
      "Related biblical passages",
      details
    );

    record.related.forEach(reference => {

      const p = make("p",undefined,details);

      make("span",reference + " · ",p);

      link(
        p,
        "Read passage",
        "https://bible-api.com/" +
        encodeURIComponent(reference) +
        "?translation=web"
      );
    });

    make(
      "h4",
      "Bibliography and research gateways",
      details
    );

    record.sourceIds.forEach(id => {
      sourceEntry(details,id);
    });

    $("pfOriginal").replaceChildren();
    $("pfRelated").replaceChildren();

    option(
      $("pfOriginal"),
      record.prophecy,
      record.prophecy
    );

    record.related.forEach(reference => {

      option(
        $("pfRelated"),
        reference,
        reference
      );
    });

    const previous = research[record.id] || {};

    $("pfNotes").value = previous.notes || "";

    $("pfAssessment").value =
      previous.assessment || "";

    $("pfMessage").textContent = "";

    renderChecklist(record);

    persistResearch();

    updateBookmarkButton();

    comparePassages();

    $("pfProfile").scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }

  async function fetchPassage(reference,translation) {

    const url = "https://bible-api.com/" +
      encodeURIComponent(reference) +
      "?translation=" + translation;

    if (cache.has(url)) {
      return cache.get(url);
    }

    const response = await fetch(url);

    if (!response.ok) {

      throw new Error(
        "Scripture API HTTP " + response.status
      );
    }

    const data = await response.json();

    if (!Array.isArray(data.verses) ||
        !data.verses.length) {

      throw new Error("Passage not returned");
    }

    const result = {data,url};

    cache.set(url,result);

    return result;
  }

  async function showPassage(
    reference,
    translation,
    titleId,
    textId,
    request
  ) {

    const title = $(titleId);
    const target = $(textId);

    title.textContent = reference;

    target.textContent = "Retrieving passage...";

    try {

      const result = await fetchPassage(
        reference,
        translation
      );

      if (request !== requestNumber ||
          !root.isConnected) return;

      target.replaceChildren();

      make(
        "p",
        result.data.translation_name ||
        translation.toUpperCase(),
        target
      ).className = "pf-gold";

      result.data.verses.forEach(verse => {

        const line = make("p",undefined,target);

        make(
          "strong",
          verse.chapter + ":" +
          verse.verse + " ",
          line
        ).className = "pf-gold";

        line.appendChild(
          document.createTextNode(
            String(verse.text || "").trim()
          )
        );
      });

      link(
        target,
        "Verify Scripture text",
        result.url
      );

    } catch {

      if (request !== requestNumber ||
          !root.isConnected) return;

      target.replaceChildren();

      make(
        "p",
        "Scripture preview is currently unavailable. The research dossier remains accessible.",
        target
      );

      link(
        target,
        "Investigate the passage in STEP Bible",
        sources.step[1]
      );
    }
  }

  async function comparePassages() {

    if (!active) return;

    const request = ++requestNumber;

    const translation =
      $("pfTranslation").value;

    await Promise.all([

      showPassage(
        $("pfOriginal").value,
        translation,
        "pfOriginalTitle",
        "pfOriginalText",
        request
      ),

      showPassage(
        $("pfRelated").value,
        translation,
        "pfRelatedTitle",
        "pfRelatedText",
        request
      )

    ]);
  }

  function updateBookmarkButton() {

    if (!active) return;

    const exists = saved.includes(active.id);

    $("pfBookmark").textContent = exists ?
      "Remove bookmark" :
      "Bookmark study";

    $("pfBookmark").setAttribute(
      "aria-pressed",
      String(exists)
    );
  }

  function toggleBookmark() {

    if (!active) return;

    if (saved.includes(active.id)) {

      saved = saved.filter(
        id => id !== active.id
      );

    } else {

      saved.push(active.id);
    }

    const stored = writeStorage(
      bookmarkKey,
      saved
    );

    $("pfMessage").textContent = stored ?
      "Bookmarks updated." :
      "Bookmarks updated for this session only.";

    updateBookmarkButton();

    renderSaved();

    renderResults();
  }

  function renderSaved() {

    $("pfSaved").replaceChildren();

    const matches = records.filter(record =>
      saved.includes(record.id)
    );

    if (!matches.length) {

      make(
        "p",
        "No prophecy studies bookmarked in this browser.",
        $("pfSaved")
      );

      return;
    }

    matches.forEach(record => {

      const row = make(
        "div",
        undefined,
        $("pfSaved")
      );

      row.className = "pf-actions";

      button(row,record.title,() => {
        openRecord(record);
      });

      button(row,"Remove",() => {

        saved = saved.filter(
          id => id !== record.id
        );

        writeStorage(bookmarkKey,saved);

        updateBookmarkButton();

        renderSaved();

        renderResults();
      });

    });
  }

  function renderTimeline() {

    historicalTimeline.forEach(([
      date,title,reference,description
    ]) => {

      const item = make(
        "article",
        undefined,
        $("pfTimeline")
      );

      item.className = "pf-timeline";

      make("p",date,item)
        .className = "pf-gold";

      make("h4",title,item);

      make("p",reference,item)
        .className = "pf-muted";

      make("p",description,item);

    });
  }

  function renderEvidence() {

    evidenceDocuments.forEach(document => {

      const item = make(
        "details",
        undefined,
        $("pfEvidence")
      );

      make("summary",document.title,item);

      make("p",document.date,item)
        .className = "pf-gold";

      make("p",document.type,item);

      section(
        item,
        "Historical significance",
        document.detail
      );

      section(
        item,
        "Research limitations",
        document.limit
      );

      sourceEntry(item,document.source);

    });
  }

  function renderFrameworks() {

    frameworks.forEach(([title,description]) => {

      const item = make(
        "details",
        undefined,
        $("pfFrameworks")
      );

      make("summary",title,item);

      make("p",description,item);
    });
  }

  function renderLibrary() {

    $("pfLibrary").replaceChildren();

    const query = $("pfSourceSearch").value
      .toLowerCase().trim();

    const matches = Object.entries(sources)
      .filter(([id,source]) => {

        const text = source.join(" ")
          .toLowerCase();

        return query.split(/\s+/)
          .every(word => text.includes(word));

      });

    if (!matches.length) {

      make(
        "p",
        "No matching research resources.",
        $("pfLibrary")
      );

      return;
    }

    matches.forEach(([id]) => {

      sourceEntry($("pfLibrary"),id);
    });
  }

  const scholars = [
    [
      "William Lane Craig",
      "Philosophy of religion, historical apologetics and arguments concerning Jesus' resurrection.",
      "Investigate his published arguments alongside historical scholarship and competing explanations.",
      "craig"
    ],
    [
      "Cliffe Knechtle",
      "Public Christian apologetics and discussions concerning biblical reliability and the identity of Jesus.",
      "Identify specific recorded statements and timestamps before using them as evidence for prophetic claims.",
      "knechtle"
    ],
    [
      "Stuart Knechtle",
      "Public Christian apologetics and theological discussions.",
      "Distinguish his individual statements from those of other speakers in shared ministry recordings.",
      "knechtle"
    ],
    [
      "Wesley Huff",
      "Biblical manuscript transmission, ancient texts and Christian apologetics.",
      "Compare manuscript claims with manuscript images, catalogue entries and relevant critical editions.",
      "huff"
    ],
    [
      "John Lennox",
      "Christian philosophy, science and theological interpretation.",
      "Examine the distinction between scientific observations, philosophical arguments and theological claims.",
      "lennox"
    ]
  ];

  function renderScholars() {

    scholars.forEach(([
      name,scope,method,source
    ]) => {

      const item = make(
        "details",
        undefined,
        $("pfScholars")
      );

      make("summary",name,item);

      section(item,"Research relevance",scope);

      section(item,"Verification standard",method);

      link(
        item,
        "Official resource",
        sources[source][1]
      );

    });
  }

  function recordReport(record) {

    const personal = research[record.id] || {};

    const checks = Array.isArray(personal.checks) ?
      personal.checks : [];

    return [

      "DESERTBIBLE — PROPHECY & FULFILLMENT",

      "",

      "Research ID: " + record.id,

      "Title: " + record.title,

      "Classification: " +
        classifications[record.category],

      "Export date: " + new Date().toISOString(),

      "",

      "SOURCE PASSAGE",

      record.prophecy,

      "",

      "RELATED PASSAGES",

      ...record.related,

      "",

      "ORIGINAL CONTEXT",

      record.context,

      "",

      "FULFILLMENT CLAIM OR APPLICATION",

      record.fulfillment,

      "",

      "HISTORICAL AND TEXTUAL EVIDENCE",

      record.evidence,

      "",

      "ALTERNATIVE INTERPRETATIONS",

      record.alternatives,

      "",

      "LIMITATIONS",

      record.limits,

      "",

      "BIBLIOGRAPHY AND RESEARCH GATEWAYS",

      ...record.sourceIds.map(id => {

        const source = sources[id];

        return source[0] + "\n" +
          source[2] + "\n" +
          source[1] + "\n";
      }),

      "PERSONAL RESEARCH CHECKLIST",

      ...verificationQuestions.map(
        (question,index) =>
          (checks[index] ? "[x] " : "[ ] ") +
          question
      ),

      "",

      "PERSONAL ASSESSMENT",

      personal.assessment || "Not yet assessed",

      "",

      "PERSONAL RESEARCH NOTES",

      personal.notes || "",

      "",

      "RESEARCH INTEGRITY",

      "Historical corroboration and theological fulfillment are distinct claims.",

      "The dossier contains editorial summaries rather than individually attributed scholarly quotations.",

      "Research collection links require further investigation of individual records."

    ].join("\n");
  }

  function downloadText(text,filename) {

    const blob = new Blob(
      [text],
      {type:"text/plain;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    },1000);
  }

  function resetFilters() {

    $("pfSearch").value = "";

    $("pfCategory").value = "all";

    $("pfBook").value = "all";

    $("pfSort").value = "canonical";

    page = 0;

    renderResults();
  }

  $("pfSearch").addEventListener("input",() => {

    page = 0;

    renderResults();
  });

  ["pfCategory","pfBook","pfSort"]
    .forEach(id => {

      $(id).addEventListener("change",() => {

        page = 0;

        renderResults();
      });

    });

  $("pfPrev").addEventListener("click",() => {

    page--;

    renderResults();
  });

  $("pfNext").addEventListener("click",() => {

    page++;

    renderResults();
  });

  $("pfReset").addEventListener(
    "click",
    resetFilters
  );

  $("pfCompare").addEventListener(
    "click",
    comparePassages
  );

  ["pfOriginal","pfRelated","pfTranslation"]
    .forEach(id => {

      $(id).addEventListener(
        "change",
        comparePassages
      );

    });

  $("pfNotes").addEventListener(
    "input",
    persistResearch
  );

  $("pfAssessment").addEventListener(
    "change",
    persistResearch
  );

  $("pfSave").addEventListener("click",() => {

    const stored = persistResearch();

    $("pfMessage").textContent = stored ?
      "Research saved in this browser." :
      "Research retained for this session only.";

  });

  $("pfBookmark").addEventListener(
    "click",
    toggleBookmark
  );

  $("pfCopy").addEventListener("click",async () => {

    if (!active) return;

    persistResearch();

    try {

      await navigator.clipboard.writeText(
        recordReport(active)
      );

      $("pfMessage").textContent =
        "Research dossier copied.";

    } catch {

      $("pfMessage").textContent =
        "Clipboard unavailable. Use Download dossier.";
    }
  });

  $("pfDownload").addEventListener("click",() => {

    if (!active) return;

    persistResearch();

    downloadText(
      recordReport(active),
      "DesertBible-Prophecy-" +
      active.id + ".txt"
    );

    $("pfMessage").textContent =
      "Research dossier prepared.";
  });

  $("pfExportAll").addEventListener("click",() => {

    persistResearch();

    const results = filteredRecords();

    if (!results.length) {

      $("pfCount").textContent =
        "No matching studies to export.";

      return;
    }

    downloadText(

      results.map(recordReport).join(
        "\n\n========================================\n\n"
      ),

      "DesertBible-Prophecy-Research.txt"
    );

  });

  $("pfSourceSearch").addEventListener(
    "input",
    renderLibrary
  );

  $("pfClose").addEventListener("click",() => {

    persistResearch();

    requestNumber++;

    workspace.remove();
  });

  renderResults();

  renderTimeline();

  renderEvidence();

  renderFrameworks();

  renderLibrary();

  renderScholars();

  renderSaved();

  workspace.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}

function openVisualExploration(workspace) {
  "use strict";

  const sources = {
    british: {
      name: "British Museum",
      url: "https://www.britishmuseum.org/collection"
    },
    israel: {
      name: "Israel Museum",
      url: "https://www.imj.org.il/en"
    },
    louvre: {
      name: "Louvre Collections",
      url: "https://collections.louvre.fr/"
    },
    dss: {
      name: "Leon Levy Dead Sea Scrolls Digital Library",
      url: "https://www.deadseascrolls.org.il/"
    },
    scrolls: {
      name: "Israel Museum Digital Dead Sea Scrolls",
      url: "https://dss.collections.imj.org.il/"
    },
    sinaiticus: {
      name: "Codex Sinaiticus Project",
      url: "https://www.codexsinaiticus.org/"
    },
    vatican: {
      name: "Vatican Apostolic Library",
      url: "https://digi.vatlib.it/"
    },
    csntm: {
      name: "Center for the Study of New Testament Manuscripts",
      url: "https://www.csntm.org/"
    },
    ntvmr: {
      name: "New Testament Virtual Manuscript Room",
      url: "https://ntvmr.uni-muenster.de/"
    },
    pleiades: {
      name: "Pleiades Ancient World Gazetteer",
      url: "https://pleiades.stoa.org/"
    },
    unesco: {
      name: "UNESCO World Heritage Centre",
      url: "https://whc.unesco.org/en/list/"
    },
    oracc: {
      name: "Open Richly Annotated Cuneiform Corpus",
      url: "https://oracc.museum.upenn.edu/"
    },
    met: {
      name: "Metropolitan Museum of Art",
      url: "https://www.metmuseum.org/art/collection"
    },
    isac: {
      name: "Institute for the Study of Ancient Cultures",
      url: "https://isac.uchicago.edu/"
    },
    yale: {
      name: "Yale University Library — Early Manuscripts",
      url: "https://guides.library.yale.edu/history_bible/early-manuscripts"
    },
    bas: {
      name: "Biblical Archaeology Society — Virtual Museum Tours",
      url: "https://www.biblicalarchaeology.org/exhibits-events/virtual-museum-tours/"
    },
    chester: {
      name: "Chester Beatty",
      url: "https://www.cbl.ie/"
    },
    cdli: {
      name: "Cuneiform Digital Library Initiative",
      url: "https://cdli.earth/"
    }
  };

  const types = [
    "Ancient cities",
    "Artifacts",
    "Inscriptions",
    "Manuscripts",
    "Architecture",
    "Daily life",
    "Geography",
    "Reconstructions"
  ];

  const records = [];

  function add(
    id, title, type, date, region, scripture,
    description, significance, limitation,
    source, lat = null, lon = null, direct = ""
  ) {
    records.push({
      id, title, type, date, region, scripture,
      description, significance, limitation,
      source, lat, lon, direct
    });
  }

  // ANCIENT CITIES

  add(
    "VE001", "Jerusalem", "Ancient cities",
    "Bronze Age to present", "Judah / Judea",
    "2 Samuel 5; 1 Kings 6; Matthew 21; Acts 2",
    "A major ancient city with remains from numerous historical periods.",
    "Central to the biblical monarchy, temple worship, the ministry of Jesus and early Christianity.",
    "Archaeological remains belong to different periods. Modern Jerusalem cannot be treated as an unchanged ancient city.",
    "pleiades", 31.778, 35.235
  );

  add(
    "VE002", "Samaria", "Ancient cities",
    "Iron Age onward", "Northern Kingdom of Israel",
    "1 Kings 16:24; 2 Kings 17; Micah 1:6",
    "The ancient royal capital established under Omri, located at modern Sebastia.",
    "Material remains illuminate the political and economic history of the northern kingdom.",
    "Later Roman remains must be distinguished from the Iron Age capital.",
    "pleiades", 32.276, 35.190
  );

  add(
    "VE003", "Lachish", "Ancient cities",
    "Bronze and Iron Ages", "Judah",
    "Joshua 10; 2 Kings 18:14; Micah 1:13",
    "A fortified settlement identified with Tell ed-Duweir.",
    "Excavations and Assyrian reliefs provide complementary evidence for the importance of Lachish and the 701 BCE campaign.",
    "Individual destruction layers require independent dating and interpretation.",
    "bas", 31.565, 34.848
  );

  add(
    "VE004", "Jericho", "Ancient cities",
    "Neolithic period onward", "Jordan Valley",
    "Joshua 2–6; Luke 19:1–10",
    "Tell es-Sultan preserves successive settlement phases and ancient fortifications.",
    "Important for understanding the long settlement history of the Jordan Valley.",
    "The chronology and relationship between excavated destruction levels and Joshua remain disputed.",
    "unesco", 31.871, 35.444,
    "https://whc.unesco.org/en/list/1687/"
  );

  add(
    "VE005", "Megiddo", "Ancient cities",
    "Bronze and Iron Ages", "Northern Levant",
    "Judges 5:19; 1 Kings 9:15; 2 Kings 23:29",
    "A strategic ancient settlement overlooking the Jezreel Valley.",
    "Provides evidence of urban development, fortifications and regional trade.",
    "The attribution of particular architectural phases to biblical kings remains debated.",
    "unesco", 32.585, 35.183,
    "https://whc.unesco.org/en/list/1108/"
  );

  add(
    "VE006", "Hazor", "Ancient cities",
    "Bronze and Iron Ages", "Upper Galilee",
    "Joshua 11; Judges 4; 1 Kings 9:15",
    "A major Canaanite urban center and later Iron Age settlement.",
    "Its buildings, inscriptions and destruction layers illuminate northern Israel's history.",
    "Archaeological destruction does not independently identify the responsible individuals.",
    "unesco", 33.018, 35.568,
    "https://whc.unesco.org/en/list/1108/"
  );

  add(
    "VE007", "Tel Dan", "Ancient cities",
    "Bronze and Iron Ages", "Upper Jordan Valley",
    "Judges 18; 1 Kings 12:29",
    "An archaeological site containing fortifications, settlement remains and a cultic precinct.",
    "Relevant to northern Israelite religious and political history.",
    "The precise relationship of individual structures to Jeroboam requires interpretation.",
    "pleiades", 33.249, 35.652
  );

  add(
    "VE008", "Beersheba", "Ancient cities",
    "Iron Age remains", "Negev",
    "Genesis 21:31; Genesis 26:33; Amos 5:5",
    "Tel Beersheba preserves a planned ancient settlement.",
    "Its streets, storage buildings and water installations illustrate urban organization.",
    "Iron Age remains do not directly establish the historicity of patriarchal narratives.",
    "unesco", 31.245, 34.841,
    "https://whc.unesco.org/en/list/1108/"
  );

  add(
    "VE009", "Nineveh", "Ancient cities",
    "Especially Neo-Assyrian period", "Mesopotamia",
    "Jonah 1–4; Nahum 1–3; Zephaniah 2:13",
    "An Assyrian imperial capital near modern Mosul.",
    "Palace reliefs and cuneiform archives illuminate Assyrian administration and ideology.",
    "Imperial records express royal perspectives rather than neutral historical reporting.",
    "british", 36.359, 43.154
  );

  add(
    "VE010", "Babylon", "Ancient cities",
    "Especially first millennium BCE", "Babylonia",
    "2 Kings 24–25; Daniel 1–5; Jeremiah 50–51",
    "A major Mesopotamian city with monumental religious and royal architecture.",
    "Relevant to the Babylonian exile and ancient imperial culture.",
    "Babylon in Revelation should not automatically be identified with the archaeological city.",
    "unesco", 32.543, 44.421,
    "https://whc.unesco.org/en/list/278/"
  );

  add(
    "VE011", "Ur", "Ancient cities",
    "Third and second millennia BCE", "Southern Mesopotamia",
    "Genesis 11:28–31",
    "An ancient Mesopotamian city known for its ziggurat and royal cemetery.",
    "Provides background for ancient Mesopotamian urban and religious life.",
    "The identification of Abraham's Ur with this particular city is traditional and debated.",
    "british", 30.963, 46.103
  );

  add(
    "VE012", "Susa", "Ancient cities",
    "Ancient Elam and Persian period", "Iran",
    "Esther 1:2; Nehemiah 1:1; Daniel 8:2",
    "A major ancient administrative and royal center.",
    "Its palace remains illuminate Achaemenid imperial culture.",
    "Persian palace archaeology does not independently verify every event in Esther.",
    "unesco", 32.190, 48.257,
    "https://whc.unesco.org/en/list/1455/"
  );

  add(
    "VE013", "Ephesus", "Ancient cities",
    "Hellenistic and Roman periods", "Asia Minor",
    "Acts 19; Ephesians; Revelation 2:1–7",
    "A major ancient city containing theaters, streets and monumental public buildings.",
    "Provides regional context for early Christian communities and Paul's ministry.",
    "Some prominent surviving structures postdate Paul's lifetime.",
    "unesco", 37.941, 27.342,
    "https://whc.unesco.org/en/list/1018/"
  );

  add(
    "VE014", "Corinth", "Ancient cities",
    "Greek and Roman periods", "Greece",
    "Acts 18; 1 Corinthians; 2 Corinthians",
    "An ancient city rebuilt as a Roman colony in 44 BCE.",
    "Its civic and commercial environment illuminates the Corinthian letters.",
    "Greek and Roman settlement phases must be distinguished.",
    "pleiades", 37.906, 22.879
  );

  add(
    "VE015", "Athens", "Ancient cities",
    "Classical to Roman periods", "Greece",
    "Acts 17:15–34",
    "An ancient intellectual, civic and religious center.",
    "Provides background for Paul's engagement with Greek religious and philosophical traditions.",
    "The surviving monuments represent different historical periods.",
    "unesco", 37.972, 23.726,
    "https://whc.unesco.org/en/list/404/"
  );

  add(
    "VE016", "Rome", "Ancient cities",
    "Roman Republic and Empire", "Italy",
    "Acts 28; Romans; Philippians 4:22",
    "The political center of the Roman Empire.",
    "Illuminates the imperial setting of early Christianity.",
    "Individual monuments cannot all be assigned to the first-century Christian community.",
    "pleiades", 41.892, 12.486
  );

  add(
    "VE017", "Caesarea Maritima", "Ancient cities",
    "Herodian and Roman periods", "Mediterranean coast",
    "Acts 10; Acts 23–26",
    "A harbor city developed under Herod the Great.",
    "Its theater, harbor and inscriptions illuminate Roman administration in Judea.",
    "Present remains include Roman, Byzantine and later construction.",
    "pleiades", 32.501, 34.892
  );

  add(
    "VE018", "Capernaum", "Ancient cities",
    "Roman and Byzantine periods", "Galilee",
    "Matthew 4:13; Mark 1:21; John 6:59",
    "An ancient lakeside settlement associated with Jesus' ministry.",
    "Settlement remains illuminate village life around the Sea of Galilee.",
    "The visible monumental synagogue is generally dated later than Jesus' lifetime.",
    "pleiades", 32.881, 35.575
  );

  add(
    "VE019", "Qumran", "Ancient cities",
    "Second Temple period", "Dead Sea region",
    "Background to Second Temple Judaism",
    "An archaeological settlement near caves containing ancient Jewish manuscripts.",
    "Provides context for the religious and literary world of the late Second Temple period.",
    "The settlement's precise function and relationship to the scrolls remain debated.",
    "dss", 31.741, 35.459
  );

  add(
    "VE020", "Masada", "Ancient cities",
    "Herodian and Roman periods", "Judean Desert",
    "Background to first-century Judea",
    "A fortified desert site containing Herodian palace complexes.",
    "Important for studying Herodian architecture and the First Jewish Revolt.",
    "Masada is not directly named in the canonical Bible.",
    "unesco", 31.315, 35.353,
    "https://whc.unesco.org/en/list/1040/"
  );

  // INSCRIPTIONS AND ARTIFACTS

  add(
    "VE021", "Tel Dan Stele", "Inscriptions",
    "Ninth century BCE", "Ancient Israel / Aram",
    "2 Samuel 7; 1 Kings 12; 2 Kings 8–9",
    "Fragments of an Aramaic royal victory inscription.",
    "The widely accepted reading 'House of David' provides evidence for a Davidic dynastic designation.",
    "The fragments do not verify the complete biblical biography of David.",
    "israel"
  );

  add(
    "VE022", "Mesha Stele", "Inscriptions",
    "Ninth century BCE", "Moab",
    "2 Kings 3",
    "A Moabite royal inscription describing Mesha's achievements.",
    "Provides an independent Moabite perspective on conflict involving Israel.",
    "Its royal and religious rhetoric must be considered when comparing it with Kings.",
    "louvre"
  );

  add(
    "VE023", "Merneptah Stele", "Inscriptions",
    "Approximately 1208 BCE", "Egypt / Canaan",
    "Background to early Israel",
    "An Egyptian victory inscription containing an early reference to Israel.",
    "Documents a group designated Israel in late Bronze Age Canaan.",
    "It does not identify the origins of Israel or establish the Exodus chronology.",
    "bas"
  );

  add(
    "VE024", "Black Obelisk", "Artifacts",
    "Approximately 825 BCE", "Assyria",
    "2 Kings 9–10",
    "A monument of Shalmaneser III depicting tribute from several rulers.",
    "An inscription identifies tribute associated with Jehu of the House of Omri.",
    "The depicted individual may be Jehu or his representative.",
    "british"
  );

  add(
    "VE025", "Taylor Prism", "Inscriptions",
    "Approximately 691 BCE", "Assyria",
    "2 Kings 18–19; Isaiah 36–37",
    "A clay prism recording campaigns of Sennacherib.",
    "Provides Assyrian evidence of the 701 BCE campaign and pressure on Hezekiah.",
    "It does not claim that Sennacherib captured Jerusalem and does not establish supernatural explanations.",
    "oracc", null, null,
    "https://oracc.museum.upenn.edu/rinap/"
  );

  add(
    "VE026", "Lachish Reliefs", "Artifacts",
    "Early seventh century BCE", "Assyria / Judah",
    "2 Kings 18; Micah 1:13",
    "Carved palace panels depicting the Assyrian conquest of Lachish.",
    "Visual evidence of Assyrian military activity and the representation of conquered communities.",
    "The reliefs were commissioned by the victorious empire and express royal propaganda.",
    "british", null, null,
    "https://www.britishmuseum.org/collection/object/W_1856-0909-14_7"
  );

  add(
    "VE027", "Siloam Inscription", "Inscriptions",
    "Late eighth century BCE, conventional dating", "Jerusalem",
    "2 Kings 20:20; 2 Chronicles 32:30",
    "A Hebrew inscription describing the meeting of tunnel excavation teams.",
    "Important evidence for ancient engineering and Hebrew epigraphy.",
    "The inscription itself does not name Hezekiah.",
    "bas"
  );

  add(
    "VE028", "Ketef Hinnom Silver Amulets", "Inscriptions",
    "Late seventh or early sixth century BCE", "Jerusalem",
    "Numbers 6:24–26",
    "Small rolled silver amulets preserving Hebrew blessing formulas.",
    "Contain language closely parallel to the priestly blessing.",
    "The inscriptions do not establish when the complete Pentateuch reached its final form.",
    "israel"
  );

  add(
    "VE029", "Lachish Letters", "Inscriptions",
    "Early sixth century BCE", "Judah",
    "Jeremiah 34:7; 2 Kings 24–25",
    "Hebrew letters written on pottery fragments.",
    "Illuminate administration and communication during Judah's final years.",
    "Proposed connections with particular biblical individuals require caution.",
    "bas"
  );

  add(
    "VE030", "Babylonian Chronicle", "Inscriptions",
    "Early sixth century BCE events", "Babylonia",
    "2 Kings 24:8–17",
    "A cuneiform chronicle recording events including Nebuchadnezzar's campaign against Jerusalem.",
    "Provides independent chronological evidence for the 597 BCE capture of Jerusalem.",
    "The surviving chronicle does not cover every event of the later destruction.",
    "british"
  );

  add(
    "VE031", "Cyrus Cylinder", "Inscriptions",
    "539 BCE or shortly afterward", "Persian Empire",
    "Ezra 1:1–4; Isaiah 45:1",
    "A Babylonian foundation inscription issued in the name of Cyrus.",
    "Illustrates Persian royal restoration rhetoric and policies.",
    "The inscription does not explicitly mention Jerusalem or the Judean exiles.",
    "british"
  );

  add(
    "VE032", "Pilate Inscription", "Inscriptions",
    "26–36 CE", "Caesarea Maritima",
    "Matthew 27; Mark 15; Luke 23; John 18–19",
    "A damaged Latin inscription naming Pontius Pilate.",
    "Supports the historical existence and prefectural office of Pilate.",
    "It contains no account of Jesus' trial or crucifixion.",
    "israel"
  );

  add(
    "VE033", "Gallio Inscription", "Inscriptions",
    "Mid-first century CE", "Delphi, Greece",
    "Acts 18:12–17",
    "Fragments of an imperial letter referring to Gallio as proconsul.",
    "Provides an important chronological anchor for Paul's Corinthian ministry.",
    "The inscription does not mention Paul.",
    "pleiades"
  );

  add(
    "VE034", "Flood Tablet — Gilgamesh", "Artifacts",
    "Seventh century BCE surviving tablet", "Mesopotamia",
    "Genesis 6–9",
    "A cuneiform tablet preserving a Mesopotamian flood narrative.",
    "Provides comparative literary evidence for ancient Near Eastern flood traditions.",
    "Literary parallels do not independently establish a worldwide flood or a particular direction of borrowing.",
    "british"
  );

  add(
    "VE035", "Law Stele of Hammurabi", "Artifacts",
    "Eighteenth century BCE", "Babylonia",
    "Exodus 21–23; Deuteronomy",
    "A royal monument containing ancient Babylonian legal provisions.",
    "Provides comparative evidence for ancient Near Eastern law.",
    "Similar legal provisions do not necessarily establish direct literary dependence.",
    "louvre"
  );

  add(
    "VE036", "Amarna Letters", "Inscriptions",
    "Fourteenth century BCE", "Egypt / Canaan",
    "Background to Late Bronze Age Canaan",
    "Diplomatic correspondence written primarily in Akkadian cuneiform.",
    "Documents relations between Egypt and regional rulers.",
    "The term Habiru should not automatically be equated with biblical Hebrews.",
    "cdli"
  );

  add(
    "VE037", "Sea of Galilee Ancient Boat", "Artifacts",
    "Approximately first century BCE to first century CE", "Galilee",
    "Mark 4:35–41; Luke 5:1–11",
    "Remains of an ancient wooden vessel recovered near Ginosar.",
    "Illustrates the type of maritime technology available around the Sea of Galilee.",
    "There is no evidence that Jesus or his disciples personally used this boat.",
    "bas"
  );

  add(
    "VE038", "Rosetta Stone", "Inscriptions",
    "196 BCE", "Ptolemaic Egypt",
    "Background to Hellenistic Egypt",
    "A priestly decree written using hieroglyphic, Demotic and Greek scripts.",
    "Important to the decipherment of Egyptian writing.",
    "It is not direct evidence for a biblical event.",
    "british"
  );

  add(
    "VE039", "Jehoiachin Ration Tablets", "Inscriptions",
    "Sixth century BCE", "Babylon",
    "2 Kings 25:27–30",
    "Babylonian administrative records associated with provisions for Jehoiachin and his household.",
    "Illuminate the presence of a former Judean king in Babylon.",
    "They do not directly establish every detail of the biblical release narrative.",
    "cdli"
  );

  add(
    "VE040", "Samaria Ostraca", "Inscriptions",
    "Eighth century BCE", "Northern Israel",
    "Amos 6; 1 Kings 16",
    "Inscribed pottery fragments recording deliveries.",
    "Illuminate administration, personal names and agricultural production.",
    "The quantities and institutional functions require specialist interpretation.",
    "isac"
  );

  // MANUSCRIPTS

  add(
    "VE041", "Great Isaiah Scroll — 1QIsaᵃ", "Manuscripts",
    "Approximately second century BCE", "Qumran",
    "Isaiah 1–66",
    "A substantially complete ancient Hebrew manuscript of Isaiah.",
    "Enables comparison with later Hebrew textual traditions.",
    "Its antiquity does not mean every reading is necessarily original.",
    "scrolls", null, null,
    "https://dss.collections.imj.org.il/isaiah"
  );

  add(
    "VE042", "Pesher Habakkuk — 1QpHab", "Manuscripts",
    "Late Second Temple period", "Qumran",
    "Habakkuk 1–2",
    "A manuscript interpreting passages of Habakkuk in relation to the community's circumstances.",
    "Documents an ancient Jewish practice of prophetic interpretation.",
    "Its interpretations represent a particular community rather than all ancient Judaism.",
    "scrolls", null, null,
    "https://dss.collections.imj.org.il/habakkuk"
  );

  add(
    "VE043", "Community Rule — 1QS", "Manuscripts",
    "Late Second Temple period", "Qumran",
    "Background to Second Temple Jewish communities",
    "An ancient Jewish document concerning community organization and discipline.",
    "Provides evidence of religious organization and covenantal practices.",
    "It is not a canonical biblical manuscript.",
    "scrolls"
  );

  add(
    "VE044", "Temple Scroll — 11Q19", "Manuscripts",
    "Late Second Temple period", "Qumran",
    "Exodus; Leviticus; Deuteronomy",
    "An extensive ancient Jewish composition concerning temple and legal arrangements.",
    "Illustrates interpretation and development of biblical legislation.",
    "Its architectural descriptions should not be mistaken for an excavated temple.",
    "scrolls"
  );

  add(
    "VE045", "Codex Sinaiticus", "Manuscripts",
    "Fourth century CE", "Eastern Mediterranean",
    "Greek Old and New Testaments",
    "An early Greek biblical codex containing the complete New Testament.",
    "An important witness to early Christian textual transmission.",
    "The codex contains corrections and textual differences requiring specialist analysis.",
    "sinaiticus"
  );

  add(
    "VE046", "Codex Vaticanus — Vat.gr.1209", "Manuscripts",
    "Fourth century CE", "Eastern Mediterranean",
    "Greek Old Testament and most of the New Testament",
    "An early biblical manuscript preserved in the Vatican Library.",
    "A major textual witness for biblical scholarship.",
    "Its surviving contents are incomplete and its readings must be compared with other witnesses.",
    "vatican", null, null,
    "https://digi.vatlib.it/view/MSS_Vat.gr.1209"
  );

  add(
    "VE047", "Papyrus 52 — P52", "Manuscripts",
    "Second century CE, approximate and debated", "Egyptian provenance",
    "John 18:31–33; John 18:37–38",
    "A small fragment of a Greek manuscript of John.",
    "Provides early manuscript evidence for the circulation of John's Gospel.",
    "Palaeographic dating cannot establish an exact year of production.",
    "ntvmr"
  );

  add(
    "VE048", "Papyrus 46 — P46", "Manuscripts",
    "Approximately 200 CE", "Egyptian provenance",
    "Pauline letters",
    "An early manuscript containing a substantial collection of Pauline epistles.",
    "Important for studying the circulation and transmission of Paul's letters.",
    "The surviving manuscript is incomplete and its dating is approximate.",
    "chester"
  );

  add(
    "VE049", "Papyrus 66 — P66", "Manuscripts",
    "Around 200 CE, approximate", "Egyptian provenance",
    "Gospel of John",
    "An extensive early Greek manuscript of John's Gospel.",
    "Provides evidence of early textual readings and scribal corrections.",
    "The date is estimated and the manuscript contains copying variations.",
    "ntvmr"
  );

  add(
    "VE050", "Papyrus 75 — P75", "Manuscripts",
    "Late second or third century CE, debated", "Egyptian provenance",
    "Luke; John",
    "A papyrus codex containing substantial portions of Luke and John.",
    "Important for comparing early Gospel textual traditions.",
    "Textual agreement with another manuscript does not automatically establish originality.",
    "ntvmr"
  );

  // ARCHITECTURE

  add(
    "VE051", "Hezekiah's Tunnel", "Architecture",
    "Commonly associated with late eighth century BCE", "Jerusalem",
    "2 Kings 20:20; 2 Chronicles 32:30",
    "An ancient water channel connecting the Gihon Spring area to the Siloam area.",
    "Illustrates water engineering in ancient Jerusalem.",
    "Its precise construction history and royal attribution involve archaeological interpretation.",
    "bas", 31.772, 35.235
  );

  add(
    "VE052", "Pool of Siloam", "Architecture",
    "Second Temple period installation", "Jerusalem",
    "John 9:1–11",
    "A monumental ancient pool with excavated stone steps.",
    "Provides historical geographical context for John's narrative.",
    "The structure does not independently verify the healing described in John.",
    "israel", 31.770, 35.235
  );

  add(
    "VE053", "Pool of Bethesda", "Architecture",
    "Ancient and later construction phases", "Jerusalem",
    "John 5:1–15",
    "A reservoir complex near the traditional location of the Sheep Gate.",
    "Provides archaeological context for the geographical setting of John 5.",
    "The remains do not independently verify the miracle narrative.",
    "pleiades", 31.781, 35.236
  );

  add(
    "VE054", "Ephesus Great Theatre", "Architecture",
    "Hellenistic and Roman construction", "Asia Minor",
    "Acts 19:29–41",
    "A monumental theater built into the hillside at Ephesus.",
    "Illustrates the civic setting of the disturbance described in Acts.",
    "The surviving theater includes construction and enlargement from different periods.",
    "unesco", 37.941, 27.341,
    "https://whc.unesco.org/en/list/1018/"
  );

  add(
    "VE055", "Arad Sanctuary", "Architecture",
    "Iron Age", "Judah / Negev",
    "Deuteronomy 12; 2 Kings 23",
    "An excavated Judahite sanctuary within a fortress.",
    "Provides evidence of religious architecture and worship outside Jerusalem.",
    "Its abandonment and relationship to royal religious reforms remain debated.",
    "bas", 31.280, 35.125
  );

  add(
    "VE056", "Arch of Titus", "Architecture",
    "Shortly after 81 CE", "Rome",
    "Historical background to the destruction of Jerusalem in 70 CE",
    "A Roman triumphal monument depicting spoils from Jerusalem.",
    "Its relief preserves Roman representations of temple objects including a menorah.",
    "The monument expresses Roman imperial victory ideology.",
    "met", 41.890, 12.489
  );

  add(
    "VE057", "Western Wall and Temple Platform", "Architecture",
    "Herodian period and later modifications", "Jerusalem",
    "Matthew 24:1–2; Mark 13:1–2",
    "Surviving retaining-wall structures associated with the enlarged temple platform.",
    "Illustrates monumental construction in the Second Temple period.",
    "The Western Wall is not a surviving wall of the temple sanctuary itself.",
    "israel", 31.777, 35.234
  );

  // GEOGRAPHY

  add(
    "VE058", "Sea of Galilee", "Geography",
    "Ancient to modern", "Northern Israel",
    "Matthew 4:18; Mark 4; John 6",
    "A freshwater lake central to several Gospel narratives.",
    "Provides geographic context for fishing, travel and settlement.",
    "Modern shorelines and water levels vary from ancient conditions.",
    "pleiades", 32.820, 35.588
  );

  add(
    "VE059", "Dead Sea", "Geography",
    "Ancient to modern", "Jordan Rift Valley",
    "Genesis 14:3; Ezekiel 47:8",
    "A hypersaline lake bordered by desert landscapes.",
    "Important for understanding regional geography and the preservation environment of nearby manuscripts.",
    "Modern water levels differ substantially from historical conditions.",
    "pleiades", 31.500, 35.470
  );

  add(
    "VE060", "Jordan River", "Geography",
    "Ancient to modern", "Jordan Valley",
    "Joshua 3; Matthew 3:13–17",
    "A river connecting the northern lake region with the Dead Sea.",
    "Central to multiple biblical geographic and religious traditions.",
    "The map marks a representative river location, not an exact biblical event location.",
    "pleiades", 31.840, 35.545
  );

  add(
    "VE061", "Mount of Olives", "Geography",
    "Ancient to modern", "Jerusalem",
    "Zechariah 14:4; Matthew 24:3; Acts 1:12",
    "A ridge east of Jerusalem's Old City.",
    "Provides geographic context for biblical narratives and religious traditions.",
    "Individual traditional event locations may not be archaeologically demonstrable.",
    "pleiades", 31.778, 35.245
  );

  add(
    "VE062", "Mount Carmel", "Geography",
    "Ancient to modern", "Northern Israel",
    "1 Kings 18; Amos 9:3",
    "A mountain range extending toward the Mediterranean.",
    "Provides the regional setting for traditions concerning Elijah.",
    "The exact location of Elijah's confrontation cannot be established archaeologically.",
    "pleiades", 32.730, 35.050
  );

  // DAILY LIFE

  add(
    "VE063", "Ancient Oil Lamps", "Daily life",
    "Bronze Age through Byzantine period", "Ancient Mediterranean",
    "Psalm 119:105; Matthew 25:1–13",
    "Ceramic and other vessels designed to burn oil using a wick.",
    "Illustrate domestic lighting and biblical lamp imagery.",
    "Lamp shapes changed considerably across historical periods.",
    "met"
  );

  add(
    "VE064", "Ancient Storage Jars", "Daily life",
    "Bronze and Iron Ages onward", "Ancient Near East",
    "1 Kings 17:12–16; Jeremiah 32:14",
    "Ceramic containers used for storing and transporting provisions.",
    "Illuminate household economics, agriculture and trade.",
    "A vessel's exact contents require contextual or residue evidence.",
    "isac"
  );

  add(
    "VE065", "Ancient Seals and Seal Impressions", "Daily life",
    "Bronze and Iron Ages onward", "Ancient Near East",
    "Jeremiah 32:10; Esther 8:8",
    "Engraved objects and impressions used in administrative and personal transactions.",
    "Illuminate ancient systems of authentication, ownership and authority.",
    "Objects without secure archaeological provenance require heightened authenticity scrutiny.",
    "met"
  );

  add(
    "VE066", "Roman Coins", "Daily life",
    "Roman Republic and Empire", "Roman Mediterranean",
    "Matthew 22:19–21; Mark 12:42",
    "Coins carrying portraits, inscriptions and official symbols.",
    "Illustrate ancient monetary systems and imperial political imagery.",
    "The precise coin used in an individual Gospel narrative is generally unknown.",
    "british"
  );

  add(
    "VE067", "Ancient Agricultural Implements", "Daily life",
    "Multiple ancient periods", "Ancient Near East",
    "Isaiah 2:4; Amos 9:13; Matthew 13",
    "Tools associated with cultivation and harvesting.",
    "Provide material context for agricultural language and parables.",
    "Tools should be compared using regional and chronological context.",
    "isac"
  );

  add(
    "VE068", "Ancient Weights and Measures", "Daily life",
    "Bronze and Iron Ages onward", "Ancient Near East",
    "Leviticus 19:35–36; Proverbs 11:1; Micah 6:11",
    "Physical weights used in economic exchanges.",
    "Provide context for biblical concerns about commercial honesty.",
    "Weight standards differed by place and historical period.",
    "british"
  );

  add(
    "VE069", "Ancient Writing Materials", "Daily life",
    "Multiple ancient periods", "Ancient Near East",
    "Jeremiah 36; Ezekiel 4:1; 2 John 12",
    "Examples include clay tablets, inscribed pottery, papyrus and parchment.",
    "Illustrate the technologies that supported ancient literary transmission.",
    "Survival rates differ substantially between materials and environments.",
    "cdli"
  );

  // RECONSTRUCTIONS

  add(
    "VE070", "Second Temple Jerusalem Model", "Reconstructions",
    "Modern model representing Jerusalem around 66 CE", "Jerusalem",
    "Matthew 24; John 2:13–22; Acts 2",
    "A modern architectural reconstruction presented at the Israel Museum.",
    "Helps visualize the urban environment of late Second Temple Jerusalem.",
    "The model incorporates scholarly interpretation and is not an ancient surviving structure.",
    "israel"
  );

  add(
    "VE071", "Reconstructed Arad Sanctuary", "Reconstructions",
    "Modern museum reconstruction of Iron Age remains", "Judah",
    "Deuteronomy 12; 2 Kings 23",
    "A museum presentation illustrating the arrangement of the excavated sanctuary.",
    "Helps visitors understand the organization of ancient religious space.",
    "Reconstructed arrangements must be distinguished from surviving original architecture.",
    "bas"
  );

  add(
    "VE072", "Mesopotamian Palace and Temple Galleries", "Reconstructions",
    "Modern displays of ancient materials", "Mesopotamia",
    "2 Kings 17–25; Isaiah; Daniel",
    "Museum presentations of architecture, sculpture and material culture.",
    "Enable comparison of ancient imperial environments.",
    "Museum installation choices do not reproduce ancient settings with complete certainty.",
    "isac"
  );

  const root = document.createElement("div");
  root.className = "dbve";

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>
      .dbve {
        color: #f1efe7;
        line-height: 1.65;
      }

      .dbve * {
        box-sizing: border-box;
      }

      .dbve h2, .dbve h3, .dbve h4 {
        color: #e0c38a;
        margin-top: 0;
      }

      .dbve .veHero {
        padding: 30px 22px;
        border: 1px solid #494133;
        border-radius: 18px;
        background:
          radial-gradient(
            ellipse at top right,
            #55442b55,
            transparent 65%
          ),
          #171814;
      }

      .dbve .veEyebrow {
        color: #c9aa70;
        font-size: 11px;
        letter-spacing: 3px;
      }

      .dbve .veMuted {
        color: #aaa99e;
      }

      .dbve .veStats {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(110px, 1fr));
        gap: 12px;
        margin-top: 22px;
      }

      .dbve .veStat {
        padding: 15px;
        border: 1px solid #34352e;
        background: #20211d;
        border-radius: 12px;
      }

      .dbve .veStat strong {
        display: block;
        font-size: 27px;
        color: #e0c38a;
      }

      .dbve .vePanel {
        background: #191a17;
        border: 1px solid #34352e;
        border-radius: 14px;
        padding: 18px;
        margin-top: 18px;
      }

      .dbve .veControls {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(170px, 1fr));
        gap: 12px;
      }

      .dbve input,
      .dbve select,
      .dbve textarea,
      .dbve button {
        background: #24251f;
        color: #f1efe7;
        border: 1px solid #45443a;
        padding: 12px;
        border-radius: 8px;
        font: inherit;
      }

      .dbve input,
      .dbve select,
      .dbve textarea {
        width: 100%;
      }

      .dbve button {
        cursor: pointer;
      }

      .dbve button:hover,
      .dbve button:focus-visible {
        border-color: #d9b778;
        background: #383426;
      }

      .dbve button:disabled {
        opacity: .4;
        cursor: default;
      }

      .dbve a {
        color: #e0c38a;
        overflow-wrap: anywhere;
      }

      .dbve .veTabs,
      .dbve .veActions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 12px;
      }

      .dbve .veActive {
        background: #59482f;
        border-color: #c9aa70;
      }

      .dbve .veGrid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(240px, 1fr));
        gap: 14px;
        margin-top: 16px;
      }

      .dbve .veCard {
        padding: 16px;
        border: 1px solid #393a31;
        border-radius: 14px;
        background: #20211d;
        min-width: 0;
      }

      .dbve .veVisual {
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background:
          radial-gradient(
            ellipse,
            #524329,
            #191a17
          );
        border: 1px solid #484131;
        border-radius: 10px;
        margin-bottom: 15px;
        text-align: center;
        padding: 20px;
      }

      .dbve .veSymbol {
        font-size: 54px;
        line-height: 1.2;
      }

      .dbve .veTag {
        display: inline-block;
        padding: 4px 9px;
        border: 1px solid #62543b;
        border-radius: 20px;
        color: #d7bd89;
        font-size: 12px;
        margin-bottom: 8px;
      }

      .dbve .veLimit {
        background: #302b21;
        border-left: 3px solid #c9aa70;
        padding: 12px;
        border-radius: 5px;
        color: #d8cbb2;
      }

      .dbve iframe {
        width: 100%;
        height: 380px;
        border: 1px solid #45443a;
        border-radius: 10px;
        background: #24251f;
      }

      .dbve .veSource {
        padding: 13px 0;
        border-bottom: 1px solid #34352e;
      }

      .dbve .veMapLayout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 14px;
      }

      .dbve textarea {
        min-height: 150px;
        resize: vertical;
      }

      .dbve .veImage {
        display: block;
        width: 100%;
        max-height: 360px;
        object-fit: contain;
        border-radius: 8px;
        background: #111;
      }

      @media(max-width: 700px) {
        .dbve .veMapLayout {
          grid-template-columns: 1fr;
        }

        .dbve iframe {
          height: 300px;
        }

        .dbve .veHero {
          padding: 20px 14px;
        }

        .dbve .veGrid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <section class="veHero">
      <div class="veEyebrow">
        DESERTBIBLE • VISUAL RESEARCH
      </div>

      <h2>Visual Exploration</h2>

      <p>
        Explore the material world of Scripture
        through ancient geography, manuscripts,
        archaeological discoveries, inscriptions,
        architecture and historical collections.
      </p>

      <div class="veStats">
        <div class="veStat">
          <strong id="veTotal"></strong>
          Research records
        </div>

        <div class="veStat">
          <strong id="veTypes"></strong>
          Visual categories
        </div>

        <div class="veStat">
          <strong id="veSources"></strong>
          Research resources
        </div>

        <div class="veStat">
          <strong id="vePlaces"></strong>
          Mapped locations
        </div>
      </div>
    </section>

    <section class="vePanel">
      <h3>Explore the ancient world</h3>

      <div class="veTabs">
        <button data-view="gallery">
          Visual gallery
        </button>

        <button data-view="map">
          Geographic explorer
        </button>

        <button data-view="sources">
          Digital collections
        </button>

        <button data-view="saved">
          Saved discoveries
        </button>

        <button data-view="notes">
          Research notebook
        </button>
      </div>

      <div class="veControls" style="margin-top:18px">

        <label>
          Search
          <input id="veSearch"
            placeholder="Micah, Lachish, Isaiah, Rome...">
        </label>

        <label>
          Category
          <select id="veCategory"></select>
        </label>

        <label>
          Biblical reference
          <input id="veScripture"
            placeholder="Genesis, John, Micah...">
        </label>

      </div>

      <div class="veActions">

        <button id="veReset">
          Reset filters
        </button>

        <button id="veExport">
          Download research index
        </button>

      </div>
    </section>

    <section class="vePanel" id="veOutput"></section>

    <section class="vePanel">

      <h3>Visual evidence standards</h3>

      <p>
        Archaeological photographs, manuscript
        facsimiles, modern maps and historical
        reconstructions are different forms of
        evidence and must not be confused.
      </p>

      <p class="veLimit">
        A site's existence does not establish every
        biblical event associated with it.
        Reconstructions contain interpretation.
        Modern map markers represent approximate
        locations rather than ancient boundaries
        or confirmed event locations.
      </p>

      <p class="veMuted">
        Images remain subject to the rights and
        permitted uses specified by their
        respective institutions.
      </p>

      <button id="veClose">
        Close Visual Exploration
      </button>

    </section>
  `;

  const $ = id => root.querySelector("#" + id);

  const output = $("veOutput");

  const storageKey =
    "DesertBible.visualExploration.v1";

  let state = {
    saved: [],
    notes: ""
  };

  try {
    const existing = JSON.parse(
      localStorage.getItem(storageKey) || "{}"
    );

    state.saved = Array.isArray(existing.saved)
      ? existing.saved
      : [];

    state.notes =
      typeof existing.notes === "string"
        ? existing.notes
        : "";
  } catch (error) {
    console.warn("Visual exploration storage:", error);
  }

  let activeView = "gallery";
  let page = 0;
  let selectedPlace = null;

  const pageSize = 9;

  const symbols = {
    "Ancient cities": "🏛",
    "Artifacts": "🏺",
    "Inscriptions": "𒀀",
    "Manuscripts": "📜",
    "Architecture": "🏛",
    "Daily life": "⚖",
    "Geography": "🗺",
    "Reconstructions": "🏗"
  };

  function element(tag, text = "", className = "") {
    const node = document.createElement(tag);

    node.textContent = text;

    if (className) {
      node.className = className;
    }

    return node;
  }

  function link(text, url) {
    const node = element("a", text);

    node.href = url;
    node.target = "_blank";
    node.rel = "noopener noreferrer";

    return node;
  }

  function button(text, handler) {
    const node = element("button", text);

    node.type = "button";

    node.addEventListener("click", handler);

    return node;
  }

  function saveState() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(state)
      );

      return true;
    } catch (error) {
      return false;
    }
  }

  function field(parent, title, value) {
    const p = element("p");

    p.append(
      element("strong", title + ": "),
      document.createTextNode(value)
    );

    parent.appendChild(p);
  }

  function filtered() {
    const search =
      $("veSearch").value.trim().toLowerCase();

    const scripture =
      $("veScripture").value.trim().toLowerCase();

    const category = $("veCategory").value;

    return records.filter(record => {

      const text = [
        record.title,
        record.type,
        record.region,
        record.date,
        record.scripture,
        record.description,
        record.significance,
        record.limitation
      ].join(" ").toLowerCase();

      return (
        (!search || text.includes(search)) &&
        (!scripture ||
          record.scripture
            .toLowerCase()
            .includes(scripture)) &&
        (!category || record.type === category)
      );
    });
  }

  function mapURL(record) {
    const delta = 0.05;

    const bounds = [
      record.lon - delta,
      record.lat - delta,
      record.lon + delta,
      record.lat + delta
    ].join(",");

    return (
      "https://www.openstreetmap.org/export/embed.html?" +
      "bbox=" + encodeURIComponent(bounds) +
      "&layer=mapnik" +
      "&marker=" +
      encodeURIComponent(
        record.lat + "," + record.lon
      )
    );
  }

  function fullMapURL(record) {
    return (
      "https://www.openstreetmap.org/" +
      "?mlat=" + record.lat +
      "&mlon=" + record.lon +
      "#map=13/" +
      record.lat + "/" + record.lon
    );
  }

  function toggleSaved(record) {
    if (state.saved.includes(record.id)) {
      state.saved = state.saved.filter(
        id => id !== record.id
      );
    } else {
      state.saved.push(record.id);
    }

    if (!saveState()) {
      alert(
        "Browser storage is unavailable. " +
        "This selection is saved only for this session."
      );
    }

    render();
  }

  function makeCitation(record) {
    const source = sources[record.source];

    return [
      "DesertBible Visual Exploration",
      "Record: " + record.id,
      "Title: " + record.title,
      "Date: " + record.date,
      "Region: " + record.region,
      "Biblical references: " + record.scripture,
      "Description: " + record.description,
      "Research significance: " + record.significance,
      "Evidence limitations: " + record.limitation,
      "Resource: " + source.name,
      "URL: " + (record.direct || source.url),
      "Access date: " +
        new Date().toISOString().slice(0, 10)
    ].join("\n");
  }

  function download(text, filename) {
    const blob = new Blob(
      [text],
      { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );
  }

  async function copyCitation(record) {
    try {
      await navigator.clipboard.writeText(
        makeCitation(record)
      );

      alert("Research record copied.");
    } catch (error) {
      download(
        makeCitation(record),
        record.id + "-citation.txt"
      );
    }
  }

  function imageSearch(record) {
    const url =
      "https://commons.wikimedia.org/w/index.php" +
      "?search=" +
      encodeURIComponent(record.title) +
      "&title=Special:MediaSearch&type=image";

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function createCard(record) {
    const card = element("article", "", "veCard");

    const visual =
      element("div", "", "veVisual");

    visual.append(
      element(
        "div",
        symbols[record.type] || "◈",
        "veSymbol"
      ),
      element(
        "small",
        "Category illustration — not an artifact photograph",
        "veMuted"
      )
    );

    card.appendChild(visual);

    card.append(
      element("span", record.type, "veTag"),
      element("h3", record.title),
      element(
        "p",
        record.date + " • " + record.region,
        "veMuted"
      )
    );

    field(card, "Scripture", record.scripture);

    card.appendChild(
      element("p", record.description)
    );

    const detail = element("details");

    detail.appendChild(
      element("summary", "Evidence and research significance")
    );

    field(
      detail,
      "Historical significance",
      record.significance
    );

    detail.appendChild(
      element(
        "p",
        record.limitation,
        "veLimit"
      )
    );

    field(
      detail,
      "Research record",
      record.id
    );

    card.appendChild(detail);

    const source = sources[record.source];

    const sourceLine = element("p");

    sourceLine.append(
      element("strong", "Institution / resource: "),
      link(
        source.name,
        record.direct || source.url
      )
    );

    card.appendChild(sourceLine);

    const actions =
      element("div", "", "veActions");

    actions.append(
      button(
        record.direct
          ? "Open source record"
          : "Browse collection",
        () => window.open(
          record.direct || source.url,
          "_blank",
          "noopener,noreferrer"
        )
      ),

      button(
        "Find images",
        () => imageSearch(record)
      ),

      button(
        state.saved.includes(record.id)
          ? "Remove saved"
          : "Save discovery",
        () => toggleSaved(record)
      ),

      button(
        "Copy citation",
        () => copyCitation(record)
      )
    );

    if (
      Number.isFinite(record.lat) &&
      Number.isFinite(record.lon)
    ) {
      actions.appendChild(
        button("Explore map", () => {
          selectedPlace = record.id;
          activeView = "map";
          render();
        })
      );
    }

    card.appendChild(actions);

    return card;
  }

  function renderGallery(list, heading) {
    output.append(
      element("h3", heading),
      element(
        "p",
        list.length + " matching research records",
        "veMuted"
      )
    );

    if (!list.length) {
      output.appendChild(
        element(
          "p",
          "No matching records. Adjust your filters."
        )
      );

      return;
    }

    const pages = Math.ceil(
      list.length / pageSize
    );

    page = Math.min(
      Math.max(page, 0),
      pages - 1
    );

    const gallery =
      element("div", "", "veGrid");

    list.slice(
      page * pageSize,
      (page + 1) * pageSize
    ).forEach(record => {
      gallery.appendChild(createCard(record));
    });

    output.appendChild(gallery);

    const actions =
      element("div", "", "veActions");

    const previous = button(
      "Previous",
      () => {
        page--;
        render();
        output.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    );

    previous.disabled = page === 0;

    const next = button(
      "Next",
      () => {
        page++;
        render();
        output.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    );

    next.disabled = page >= pages - 1;

    actions.append(
      previous,
      element(
        "span",
        "Page " + (page + 1) + " of " + pages
      ),
      next
    );

    output.appendChild(actions);
  }

  function renderMap() {
    output.append(
      element("h3", "Geographic Explorer"),
      element(
        "p",
        "Select a historical location to explore its modern geographical setting.",
        "veMuted"
      )
    );

    const places = filtered().filter(
      record =>
        Number.isFinite(record.lat) &&
        Number.isFinite(record.lon)
    );

    if (!places.length) {
      output.appendChild(
        element(
          "p",
          "No mapped locations match these filters."
        )
      );

      return;
    }

    let current = places.find(
      record => record.id === selectedPlace
    );

    if (!current) {
      current = places[0];
    }

    selectedPlace = current.id;

    const selector = element("select");

    selector.setAttribute(
      "aria-label",
      "Choose historical location"
    );

    places.forEach(record => {
      const option = element(
        "option",
        record.title + " — " + record.region
      );

      option.value = record.id;

      selector.appendChild(option);
    });

    selector.value = current.id;

    selector.addEventListener("change", () => {
      selectedPlace = selector.value;
      render();
    });

    output.appendChild(selector);

    const layout =
      element("div", "", "veMapLayout");

    layout.style.marginTop = "15px";

    const map = document.createElement("iframe");

    map.src = mapURL(current);
    map.loading = "lazy";
    map.title = "Map of " + current.title;
    map.referrerPolicy = "no-referrer";

    const info = element("div");

    info.append(
      element("h3", current.title),
      element("p", current.description)
    );

    field(info, "Region", current.region);
    field(info, "Scripture", current.scripture);

    field(
      info,
      "Approximate coordinates",
      current.lat + ", " + current.lon
    );

    info.append(
      link(
        "Open full interactive map",
        fullMapURL(current)
      ),

      element("p"),

      link(
        "Explore ancient geography in Pleiades",
        sources.pleiades.url
      )
    );

    layout.append(map, info);

    output.appendChild(layout);

    output.append(
      element(
        "p",
        "Map data © OpenStreetMap contributors. Modern geography; not reconstructed ancient borders.",
        "veMuted"
      ),
      element(
        "p",
        current.limitation,
        "veLimit"
      )
    );
  }

  function renderSources() {
    output.append(
      element("h3", "Digital Collections"),
      element(
        "p",
        "Explore institutional archives, photographs, digitized manuscripts, museum records and archaeological research."
      )
    );

    Object.entries(sources).forEach(([key, source]) => {

      const row = element("div", "", "veSource");

      row.append(
        element("h4", source.name),
        link("Open digital collection", source.url)
      );

      const related = records.filter(
        record => record.source === key
      );

      if (related.length) {
        row.appendChild(
          element(
            "p",
            "Related records: " +
              related.map(record => record.title).join("; "),
            "veMuted"
          )
        );
      }

      output.appendChild(row);
    });
  }

  function renderNotes() {
    output.append(
      element("h3", "Research Notebook"),
      element(
        "p",
        "Record observations, manuscript comparisons, questions and evidence assessments."
      )
    );

    const textarea =
      document.createElement("textarea");

    textarea.value = state.notes;

    textarea.placeholder =
      "Record your visual evidence observations...";

    textarea.setAttribute(
      "aria-label",
      "Visual exploration research notes"
    );

    textarea.addEventListener("input", () => {
      state.notes = textarea.value;
    });

    output.appendChild(textarea);

    const status =
      element("p", "", "veMuted");

    const actions =
      element("div", "", "veActions");

    actions.append(
      button("Save notes", () => {

        state.notes = textarea.value;

        status.textContent = saveState()
          ? "Research notes saved on this device."
          : "Unable to save in browser storage. Download a copy instead.";
      }),

      button("Download notes", () => {
        download(
          textarea.value,
          "DesertBible-visual-research-notes.txt"
        );
      }),

      button("Download saved discoveries", () => {

        const saved = records.filter(
          record => state.saved.includes(record.id)
        );

        download(
          saved.map(makeCitation).join(
            "\n\n====================\n\n"
          ),
          "DesertBible-saved-discoveries.txt"
        );
      })
    );

    output.append(actions, status);

    output.appendChild(
      element(
        "p",
        "Notes and bookmarks are stored locally in this browser, not synchronized between devices.",
        "veMuted"
      )
    );
  }

  function render() {
    output.replaceChildren();

    root.querySelectorAll(
      "[data-view]"
    ).forEach(node => {
      const active =
        node.dataset.view === activeView;

      node.classList.toggle("veActive", active);

      node.setAttribute(
        "aria-pressed",
        String(active)
      );
    });

    if (activeView === "map") {
      renderMap();
      return;
    }

    if (activeView === "sources") {
      renderSources();
      return;
    }

    if (activeView === "notes") {
      renderNotes();
      return;
    }

    if (activeView === "saved") {
      renderGallery(
        filtered().filter(
          record => state.saved.includes(record.id)
        ),
        "Saved Discoveries"
      );

      return;
    }

    renderGallery(
      filtered(),
      "Visual Research Gallery"
    );
  }

  $("veTotal").textContent = records.length;
  $("veTypes").textContent = types.length;

  $("veSources").textContent =
    Object.keys(sources).length;

  $("vePlaces").textContent =
    records.filter(record =>
      Number.isFinite(record.lat) &&
      Number.isFinite(record.lon)
    ).length;

  const all = element(
    "option",
    "All visual categories"
  );

  all.value = "";

  $("veCategory").appendChild(all);

  types.forEach(type => {

    const option = element("option", type);

    option.value = type;

    $("veCategory").appendChild(option);
  });

  root.querySelectorAll(
    "[data-view]"
  ).forEach(node => {

    node.addEventListener("click", () => {

      activeView = node.dataset.view;
      page = 0;

      render();
    });
  });

  ["veSearch", "veScripture"].forEach(id => {

    $(id).addEventListener("input", () => {
      page = 0;
      render();
    });
  });

  $("veCategory").addEventListener(
    "change",
    () => {
      page = 0;
      render();
    }
  );

  $("veReset").addEventListener("click", () => {

    $("veSearch").value = "";
    $("veScripture").value = "";
    $("veCategory").value = "";

    selectedPlace = null;
    page = 0;

    render();
  });

  $("veExport").addEventListener("click", () => {

    download(
      filtered().map(makeCitation).join(
        "\n\n====================\n\n"
      ),
      "DesertBible-visual-research-index.txt"
    );
  });

  $("veClose").addEventListener("click", () => {
    workspace.remove();
  });

  render();

  workspace.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function openOriginalLanguages(workspace) {
  "use strict";

  const books = [
    ["Genesis","Gen",50],
    ["Exodus","Exo",40],
    ["Leviticus","Lev",27],
    ["Numbers","Num",36],
    ["Deuteronomy","Deu",34],
    ["Joshua","Jos",24],
    ["Judges","Jdg",21],
    ["Ruth","Rut",4],
    ["1 Samuel","1Sa",31],
    ["2 Samuel","2Sa",24],
    ["1 Kings","1Ki",22],
    ["2 Kings","2Ki",25],
    ["1 Chronicles","1Ch",29],
    ["2 Chronicles","2Ch",36],
    ["Ezra","Ezr",10],
    ["Nehemiah","Neh",13],
    ["Esther","Est",10],
    ["Job","Job",42],
    ["Psalms","Psa",150],
    ["Proverbs","Pro",31],
    ["Ecclesiastes","Ecc",12],
    ["Song of Solomon","Sng",8],
    ["Isaiah","Isa",66],
    ["Jeremiah","Jer",52],
    ["Lamentations","Lam",5],
    ["Ezekiel","Ezk",48],
    ["Daniel","Dan",12],
    ["Hosea","Hos",14],
    ["Joel","Jol",3],
    ["Amos","Amo",9],
    ["Obadiah","Oba",1],
    ["Jonah","Jon",4],
    ["Micah","Mic",7],
    ["Nahum","Nam",3],
    ["Habakkuk","Hab",3],
    ["Zephaniah","Zep",3],
    ["Haggai","Hag",2],
    ["Zechariah","Zec",14],
    ["Malachi","Mal",4],
    ["Matthew","Mat",28],
    ["Mark","Mrk",16],
    ["Luke","Luk",24],
    ["John","Jhn",21],
    ["Acts","Act",28],
    ["Romans","Rom",16],
    ["1 Corinthians","1Co",16],
    ["2 Corinthians","2Co",13],
    ["Galatians","Gal",6],
    ["Ephesians","Eph",6],
    ["Philippians","Php",4],
    ["Colossians","Col",4],
    ["1 Thessalonians","1Th",5],
    ["2 Thessalonians","2Th",3],
    ["1 Timothy","1Ti",6],
    ["2 Timothy","2Ti",4],
    ["Titus","Tit",3],
    ["Philemon","Phm",1],
    ["Hebrews","Heb",13],
    ["James","Jas",5],
    ["1 Peter","1Pe",5],
    ["2 Peter","2Pe",3],
    ["1 John","1Jn",5],
    ["2 John","2Jn",1],
    ["3 John","3Jn",1],
    ["Jude","Jud",1],
    ["Revelation","Rev",22]
  ];

  const resources = [
    {
      name:"STEP Bible",
      type:"Interlinear and lexical research",
      description:"Original-language Bible study, grammatical analysis, word searches and translation comparison.",
      url:"https://www.stepbible.org/"
    },
    {
      name:"STEP Bible Data Repository",
      type:"Research datasets",
      description:"Tagged biblical texts, expanded morphology definitions, lexicons and versification documentation.",
      url:"https://github.com/STEPBible/STEPBible-Data"
    },
    {
      name:"Open Scriptures Hebrew Bible",
      type:"Hebrew text and morphology",
      description:"Westminster Leningrad Codex text with lexical and morphological annotations.",
      url:"https://github.com/openscriptures/morphhb"
    },
    {
      name:"MorphGNT",
      type:"Greek morphology",
      description:"Digitally tagged Greek New Testament data and grammatical analysis.",
      url:"https://github.com/morphgnt"
    },
    {
      name:"SBL Greek New Testament",
      type:"Critical Greek edition",
      description:"A scholarly Greek New Testament edition edited by Michael W. Holmes.",
      url:"https://sblgnt.com/"
    },
    {
      name:"New Testament Virtual Manuscript Room",
      type:"Textual criticism",
      description:"Manuscript discovery and textual research maintained by the Institute for New Testament Textual Research.",
      url:"https://ntvmr.uni-muenster.de/"
    },
    {
      name:"Center for the Study of New Testament Manuscripts",
      type:"Manuscript photography",
      description:"Digital preservation and study of Greek New Testament manuscripts.",
      url:"https://www.csntm.org/"
    },
    {
      name:"Codex Sinaiticus Project",
      type:"Greek manuscript",
      description:"Digitized manuscript images and transcriptions of Codex Sinaiticus.",
      url:"https://www.codexsinaiticus.org/"
    },
    {
      name:"Dead Sea Scrolls Digital Library",
      type:"Hebrew and Aramaic manuscripts",
      description:"Digital images of ancient Jewish manuscripts and fragments.",
      url:"https://www.deadseascrolls.org.il/"
    },
    {
      name:"Israel Museum Digital Dead Sea Scrolls",
      type:"Manuscript facsimiles",
      description:"Digital access to selected major Dead Sea Scrolls.",
      url:"https://dss.collections.imj.org.il/"
    },
    {
      name:"Logeion",
      type:"Greek lexicography",
      description:"University of Chicago dictionary platform providing access to historical Greek and Latin lexical resources.",
      url:"https://logeion.uchicago.edu/"
    },
    {
      name:"Perseus Digital Library",
      type:"Classical language research",
      description:"Greek and Latin texts, dictionaries and linguistic tools.",
      url:"https://www.perseus.tufts.edu/"
    },
    {
      name:"Comprehensive Aramaic Lexicon",
      type:"Aramaic lexicography",
      description:"Research database for historical Aramaic dialects, texts and vocabulary.",
      url:"https://cal.huc.edu/"
    },
    {
      name:"Sefaria",
      type:"Hebrew texts and Jewish interpretation",
      description:"Hebrew Bible, Jewish textual traditions and related literature.",
      url:"https://www.sefaria.org/"
    },
    {
      name:"Aleppo Codex",
      type:"Masoretic textual tradition",
      description:"Resources concerning the medieval Hebrew manuscript associated with the Ben Asher tradition.",
      url:"https://www.aleppocodex.org/"
    },
    {
      name:"Vatican Library",
      type:"Digitized manuscripts",
      description:"Historical manuscript collections including Codex Vaticanus.",
      url:"https://digi.vatlib.it/"
    },
    {
      name:"Bible Online Learner",
      type:"Biblical language education",
      description:"Exercises and linguistic learning resources for biblical languages.",
      url:"https://bibleol.3bmoodle.dk/"
    },
    {
      name:"Bible Odyssey",
      type:"Academic biblical research",
      description:"Accessible biblical scholarship associated with the Society of Biblical Literature.",
      url:"https://www.bibleodyssey.org/"
    }
  ];

  const grammar = [
    ["Hebrew","Consonantal roots",
    "Many Hebrew words are organized around consonantal roots. Related forms may share historical relationships without having identical meanings.",
    "כתב — associated with writing.",
    "Do not determine a word's contextual meaning solely from its root."],

    ["Hebrew","Qal",
    "The basic Hebrew verbal stem, commonly expressing simple actions or states.",
    "כָּתַב — he wrote.",
    "Qal verbs may be active, stative or otherwise contextually nuanced."],

    ["Hebrew","Niphal",
    "A verbal stem frequently expressing passive, middle or reflexive relationships.",
    "נִכְתַּב — was written.",
    "Niphal is not automatically passive in every occurrence."],

    ["Hebrew","Piel",
    "A derived verbal stem that can express factitive, denominative or other lexical functions.",
    "דִּבֵּר — he spoke.",
    "Describing Piel simply as intensive is insufficient."],

    ["Hebrew","Pual",
    "A verbal stem often functioning as the passive counterpart of Piel.",
    "דֻּבַּר — was spoken.",
    "The meaning must be established from actual usage."],

    ["Hebrew","Hiphil",
    "A verbal stem frequently expressing causative or related functions.",
    "הִכְתִּיב — caused to write.",
    "Not every Hiphil verb is translated with an explicit causative construction."],

    ["Hebrew","Hophal",
    "A verbal stem frequently serving as the passive counterpart of Hiphil.",
    "הֻכְתַּב — was dictated.",
    "Individual lexical meanings may differ from a mechanically derived translation."],

    ["Hebrew","Hithpael",
    "A derived stem often expressing reflexive, reciprocal or related meanings.",
    "הִתְהַלֵּךְ — walked about.",
    "The stem is not universally reflexive."],

    ["Hebrew","Qatal",
    "A suffix-conjugation verbal form often associated with completed situations or past reference.",
    "כָּתַב — he wrote.",
    "Its interpretation depends on discourse, syntax and context."],

    ["Hebrew","Yiqtol",
    "A prefix-conjugation verbal form used with several temporal, aspectual and modal functions.",
    "יִכְתֹּב — he will or may write.",
    "It should not be treated as an exclusively future tense."],

    ["Hebrew","Wayyiqtol",
    "A verbal construction frequently used in past narrative sequences.",
    "וַיֹּאמֶר — and he said.",
    "Its function is determined by discourse and verbal syntax."],

    ["Hebrew","Construct state",
    "A nominal construction establishing a close grammatical relationship between nouns.",
    "בֵּית דָּוִד — house of David.",
    "The relationship between the nouns must be interpreted contextually."],

    ["Hebrew","Ketiv and Qere",
    "Masoretic notation distinguishing the written consonantal form from a traditional reading.",
    "Ketiv: written; Qere: read.",
    "The written form and reading tradition must not be silently conflated."],

    ["Hebrew","Masoretic accents",
    "Traditional signs marking accentuation, cantillation and relationships within biblical Hebrew clauses.",
    "Disjunctive and conjunctive accents.",
    "The accent system reflects a received reading tradition and does not settle every syntactic dispute."],

    ["Aramaic","Biblical Aramaic",
    "Aramaic is a Northwest Semitic language related to Hebrew. Substantial biblical passages occur in Ezra and Daniel.",
    "Ezra 4:8–6:18; 7:12–26; Daniel 2:4b–7:28; Jeremiah 10:11.",
    "Language identification must follow the actual textual boundaries."],

    ["Aramaic","Nominal states",
    "Aramaic nouns can occur in absolute, construct and emphatic states.",
    "מַלְכָּא — king, emphatic state.",
    "The emphatic state does not always correspond mechanically to English definiteness."],

    ["Aramaic","Verbal stems",
    "Aramaic has derived verbal stems conventionally designated with forms such as Peal, Pael and Aphel.",
    "Peal — basic verbal stem.",
    "Hebrew stem labels should not be imposed directly onto Aramaic morphology."],

    ["Greek","Nominative case",
    "Frequently marks a grammatical subject or predicate nominative.",
    "λόγος — word.",
    "Case functions depend on syntax and construction."],

    ["Greek","Genitive case",
    "Expresses a range of relationships including possession, source, description and separation.",
    "λόγου — of a word.",
    "A genitive must not automatically be translated as possession."],

    ["Greek","Dative case",
    "Can express recipient, means, location, reference or other relationships.",
    "λόγῳ — to, by or with a word.",
    "The appropriate function depends on context."],

    ["Greek","Accusative case",
    "Frequently marks a direct object, but also has other syntactic functions.",
    "λόγον — word, accusative singular.",
    "An accusative is not necessarily a direct object."],

    ["Greek","Vocative case",
    "Used in direct address.",
    "κύριε — Lord.",
    "Grammatical address alone does not determine theological interpretation."],

    ["Greek","Present aspect",
    "Present-stem forms generally present situations with imperfective aspect.",
    "γράφω — I write.",
    "A present form does not automatically indicate continuous or habitual action."],

    ["Greek","Aorist aspect",
    "The aorist generally presents an event from a perfective viewpoint.",
    "ἔγραψα — I wrote.",
    "The aorist does not inherently mean once-for-all action."],

    ["Greek","Perfect forms",
    "Greek perfect forms frequently involve a resulting state associated with a prior situation.",
    "γέγραφα — I have written.",
    "The precise semantic analysis of the Greek perfect is debated."],

    ["Greek","Imperfect",
    "Frequently expresses imperfective situations within past temporal reference.",
    "ἔγραφον — I was writing, or I used to write.",
    "The form does not require an identical English rendering in every context."],

    ["Greek","Indicative mood",
    "Generally presents an assertion or situation within the grammatical structure of a clause.",
    "γράφει — he or she writes.",
    "An indicative form is not independent proof that a historical claim is true."],

    ["Greek","Subjunctive mood",
    "Used in various constructions involving purpose, possibility, expectation and related functions.",
    "ἵνα γράψῃ — so that he or she may write.",
    "The governing construction determines its function."],

    ["Greek","Imperative mood",
    "Communicates commands, requests, instructions or related functions.",
    "γράφε — write.",
    "Verbal aspect alone cannot settle whether an instruction is repeated or singular."],

    ["Greek","Participles",
    "Verbal adjectives that may function substantivally, adjectivally or adverbially.",
    "γράφων — writing.",
    "Participial relationships require syntactic analysis."],

    ["Greek","Infinitives",
    "Non-finite verbal forms used in several nominal and verbal constructions.",
    "γράφειν — to write.",
    "The infinitive's function depends on its governing syntax."],

    ["Greek","Active voice",
    "A grammatical voice often presenting the subject as performing an action.",
    "γράφω — I write.",
    "Grammatical subject and semantic agent are not always equivalent."],

    ["Greek","Middle voice",
    "A voice commonly expressing particular involvement of the subject in a situation.",
    "ἔρχομαι — I come or go.",
    "Middle morphology does not automatically imply reflexive meaning."],

    ["Greek","Passive voice",
    "Frequently presents the grammatical subject as affected by an action.",
    "γράφεται — is written.",
    "Some forms are morphologically shared with the middle voice."],

    ["Greek","Definite article",
    "A grammatical element with identifying, substantivizing and discourse functions.",
    "ὁ λόγος — the word.",
    "The presence or absence of an article cannot alone settle definiteness or theological meaning."]
  ];

  const hebrewAlphabet = [
    ["א","Aleph","ʾ"],
    ["ב","Bet","b"],
    ["ג","Gimel","g"],
    ["ד","Dalet","d"],
    ["ה","He","h"],
    ["ו","Waw","w"],
    ["ז","Zayin","z"],
    ["ח","Het","ḥ"],
    ["ט","Tet","ṭ"],
    ["י","Yod","y"],
    ["כ ך","Kaph","k"],
    ["ל","Lamed","l"],
    ["מ ם","Mem","m"],
    ["נ ן","Nun","n"],
    ["ס","Samekh","s"],
    ["ע","Ayin","ʿ"],
    ["פ ף","Pe","p"],
    ["צ ץ","Tsade","ṣ"],
    ["ק","Qoph","q"],
    ["ר","Resh","r"],
    ["שׁ שׂ","Shin / Sin","š / ś"],
    ["ת","Taw","t"]
  ];

  const greekAlphabet = [
    ["Α α","Alpha","a"],
    ["Β β","Beta","b"],
    ["Γ γ","Gamma","g"],
    ["Δ δ","Delta","d"],
    ["Ε ε","Epsilon","e"],
    ["Ζ ζ","Zeta","z"],
    ["Η η","Eta","ē"],
    ["Θ θ","Theta","th"],
    ["Ι ι","Iota","i"],
    ["Κ κ","Kappa","k"],
    ["Λ λ","Lambda","l"],
    ["Μ μ","Mu","m"],
    ["Ν ν","Nu","n"],
    ["Ξ ξ","Xi","x"],
    ["Ο ο","Omicron","o"],
    ["Π π","Pi","p"],
    ["Ρ ρ","Rho","r"],
    ["Σ σ ς","Sigma","s"],
    ["Τ τ","Tau","t"],
    ["Υ υ","Upsilon","y / u"],
    ["Φ φ","Phi","ph"],
    ["Χ χ","Chi","ch"],
    ["Ψ ψ","Psi","ps"],
    ["Ω ω","Omega","ō"]
  ];

  const vocabulary = [
    ["H0430","Hebrew","אֱלֹהִים","ʾĕlōhîm",
    "God, gods, divine beings depending on context.",
    "Genesis 1:1; Psalm 82:1",
    "Plural morphology does not alone establish the intended referent."],

    ["H3068","Hebrew","יהוה","YHWH",
    "The personal divine name represented by the Tetragrammaton.",
    "Exodus 3:15",
    "Its ancient pronunciation is reconstructed rather than directly preserved with certainty."],

    ["H2617","Hebrew","חֶסֶד","ḥesed",
    "Kindness, loyalty, steadfast love or mercy.",
    "Exodus 34:6; Micah 6:8",
    "No single English equivalent captures every contextual use."],

    ["H7965","Hebrew","שָׁלוֹם","šālôm",
    "Peace, welfare, soundness or well-being.",
    "Numbers 6:26; Isaiah 9:6",
    "The meaning may be personal, communal or political."],

    ["H7307","Hebrew","רוּחַ","rûaḥ",
    "Wind, breath or spirit.",
    "Genesis 1:2; Ezekiel 37",
    "The immediate context governs the appropriate sense."],

    ["H5315","Hebrew","נֶפֶשׁ","nefeš",
    "Life, person, living being, self or appetite.",
    "Genesis 2:7; Psalm 42:1–2",
    "It must not automatically be equated with a philosophical concept of an immaterial soul."],

    ["H1285","Hebrew","בְּרִית","bərît",
    "Covenant or binding agreement.",
    "Genesis 15:18; Jeremiah 31:31",
    "Different covenants have different participants and obligations."],

    ["H8451","Hebrew","תּוֹרָה","tôrâ",
    "Instruction, teaching or law.",
    "Psalm 1:2; Proverbs 1:8",
    "The term is not limited to statutory legal material."],

    ["H4941","Hebrew","מִשְׁפָּט","mišpāṭ",
    "Judgment, justice, legal decision or ordinance.",
    "Micah 6:8; Exodus 21:1",
    "Legal, ethical and administrative senses must be distinguished."],

    ["H6666","Hebrew","צְדָקָה","ṣədāqâ",
    "Righteousness, justice or right conduct.",
    "Genesis 15:6; Amos 5:24",
    "Its social and relational dimensions depend on context."],

    ["H1697","Hebrew","דָּבָר","dābār",
    "Word, matter, event or thing.",
    "Micah 1:1; Genesis 15:1",
    "It is not exclusively a term for spoken language."],

    ["H4899","Hebrew","מָשִׁיחַ","māšîaḥ",
    "Anointed person.",
    "1 Samuel 24:6; Isaiah 45:1",
    "The term is applied to different historical individuals."],

    ["H1254","Hebrew","בָּרָא","bārāʾ",
    "Create, in its principal biblical Qal usage.",
    "Genesis 1:1; Isaiah 45:7",
    "Creation from nothing cannot be established from this verb alone."],

    ["G3056","Greek","λόγος","logos",
    "Word, speech, statement, account or message.",
    "John 1:1; Acts 6:7",
    "The specialized significance in John's prologue must be established from its literary context."],

    ["G26","Greek","ἀγάπη","agapē",
    "Love or affection.",
    "John 13:35; 1 Corinthians 13",
    "The noun does not inherently mean unconditional divine love in every occurrence."],

    ["G4102","Greek","πίστις","pistis",
    "Faith, trust, faithfulness or reliability.",
    "Romans 3:22; Galatians 5:22",
    "Grammatical and contextual questions affect how particular occurrences are translated."],

    ["G5485","Greek","χάρις","charis",
    "Grace, favor, kindness or thanks.",
    "Ephesians 2:8; Luke 1:30",
    "Theological meanings must be distinguished from the word's broader usage."],

    ["G1343","Greek","δικαιοσύνη","dikaiosynē",
    "Righteousness or justice.",
    "Romans 1:17; Matthew 5:6",
    "The precise theological implications are contextually and interpretively debated."],

    ["G3341","Greek","μετάνοια","metanoia",
    "Repentance or change of mind.",
    "Mark 1:4; Acts 20:21",
    "Its meaning cannot be reduced to the components of its etymology."],

    ["G1577","Greek","ἐκκλησία","ekklēsia",
    "Assembly, congregation or church.",
    "Matthew 16:18; Acts 19:32",
    "The word does not inherently mean a church building or exclusively a Christian assembly."],

    ["G4151","Greek","πνεῦμα","pneuma",
    "Spirit, wind or breath.",
    "John 3:8; Acts 2:4",
    "Each occurrence requires contextual identification of its referent."],

    ["G5590","Greek","ψυχή","psychē",
    "Life, self, person or soul.",
    "Matthew 16:25–26",
    "The word alone does not establish a complete doctrine of human nature."],

    ["G5547","Greek","Χριστός","Christos",
    "Anointed, Christ or Messiah.",
    "Matthew 1:16; John 1:41",
    "Its application and theological significance depend on context."],

    ["G2962","Greek","κύριος","kyrios",
    "Lord, master, owner or sir.",
    "John 20:28; Matthew 25:11",
    "The title is used for human and divine referents."],

    ["G2316","Greek","θεός","theos",
    "God or deity.",
    "John 1:1; Acts 14:11",
    "Syntax, context and referent are essential to interpretation."],

    ["G4991","Greek","σωτηρία","sōtēria",
    "Salvation, deliverance or preservation.",
    "Romans 1:16; Philippians 1:19",
    "Physical and theological senses must be distinguished."],

    ["G932","Greek","βασιλεία","basileia",
    "Kingship, reign, royal rule or kingdom.",
    "Matthew 6:10; Luke 17:20–21",
    "The term can emphasize royal authority rather than territory alone."],

    ["G1344","Greek","δικαιόω","dikaioō",
    "Justify, declare righteous or vindicate.",
    "Romans 3:24; James 2:24",
    "Specific theological formulations require analysis beyond dictionary definitions."]
  ];

  const root = document.createElement("div");

  root.className = "dbol";

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>
      .dbol{
        color:#f1efe7;
        line-height:1.65;
      }

      .dbol *{
        box-sizing:border-box;
      }

      .dbol h2,.dbol h3,.dbol h4{
        color:#e0c38a;
        margin-top:0;
      }

      .dbol .olHero{
        padding:28px;
        border:1px solid #574b36;
        border-radius:18px;
        background:
          radial-gradient(
            ellipse at top right,
            #75603a50,
            transparent 70%
          ),
          #191a17;
      }

      .dbol .olAncient{
        font-family:
          "Noto Serif Hebrew",
          "Noto Serif",
          "Times New Roman",
          serif;
      }

      .dbol .olHeroWord{
        color:#e0c38a;
        font-size:clamp(28px,6vw,52px);
        margin-bottom:15px;
      }

      .dbol .olEyebrow{
        font-size:11px;
        color:#c9aa70;
        letter-spacing:3px;
      }

      .dbol .olMuted{
        color:#aaa99e;
      }

      .dbol .olPanel{
        background:#191a17;
        border:1px solid #34352e;
        border-radius:14px;
        padding:18px;
        margin-top:18px;
      }

      .dbol .olGrid{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(230px,1fr));
        gap:14px;
      }

      .dbol .olStats{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(110px,1fr));
        gap:10px;
        margin-top:20px;
      }

      .dbol .olStat{
        background:#20211d;
        border:1px solid #34352e;
        padding:15px;
        border-radius:10px;
      }

      .dbol .olStat strong{
        display:block;
        font-size:27px;
        color:#e0c38a;
      }

      .dbol .olCard{
        background:#20211d;
        border:1px solid #3b3c33;
        border-radius:12px;
        padding:16px;
        min-width:0;
      }

      .dbol input,.dbol select,
      .dbol textarea,.dbol button{
        font:inherit;
        color:#f1efe7;
        background:#24251f;
        border:1px solid #49483d;
        border-radius:8px;
        padding:11px;
      }

      .dbol input,.dbol select,
      .dbol textarea{
        width:100%;
      }

      .dbol button{
        cursor:pointer;
      }

      .dbol button:hover,
      .dbol button:focus-visible{
        background:#393426;
        border-color:#c9aa70;
      }

      .dbol button:disabled{
        opacity:.4;
        cursor:default;
      }

      .dbol a{
        color:#e0c38a;
        overflow-wrap:anywhere;
      }

      .dbol .olTabs,.dbol .olActions{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin-top:12px;
      }

      .dbol .olActive{
        background:#58482f;
        border-color:#d4b77d;
      }

      .dbol .olControls{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(135px,1fr));
        gap:12px;
        margin:15px 0;
      }

      .dbol .olWord{
        font-size:38px;
        line-height:1.6;
        color:#e0c38a;
        overflow-wrap:anywhere;
      }

      .dbol .olTag{
        display:inline-block;
        padding:4px 9px;
        border:1px solid #65563b;
        border-radius:20px;
        color:#d8bb83;
        font-size:12px;
      }

      .dbol .olLimit{
        border-left:3px solid #c9aa70;
        background:#302a20;
        padding:12px;
        border-radius:5px;
        color:#dacdb4;
      }

      .dbol .olVerse{
        padding:12px 0;
        border-bottom:1px solid #34352e;
      }

      .dbol .olAlphabet{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(100px,1fr));
        gap:10px;
      }

      .dbol .olLetter{
        text-align:center;
        padding:12px;
        background:#20211d;
        border:1px solid #34352e;
        border-radius:9px;
      }

      .dbol .olLetter strong{
        display:block;
        font-size:31px;
        color:#e0c38a;
      }

      .dbol .olEntry{
        padding:14px 0;
        border-bottom:1px solid #34352e;
      }

      .dbol textarea{
        min-height:170px;
        resize:vertical;
      }

      .dbol .olTable{
        width:100%;
        border-collapse:collapse;
      }

      .dbol .olTable td,
      .dbol .olTable th{
        text-align:left;
        padding:9px;
        border-bottom:1px solid #34352e;
        overflow-wrap:anywhere;
      }

      @media(max-width:650px){
        .dbol .olGrid{
          grid-template-columns:1fr;
        }

        .dbol .olHero{
          padding:20px 14px;
        }
      }
    </style>

    <section class="olHero">

      <div class="olEyebrow">
        DESERTBIBLE • LANGUAGE RESEARCH
      </div>

      <div class="olHeroWord olAncient">
        דָּבָר &nbsp; • &nbsp; λόγος
      </div>

      <h2>Original Languages</h2>

      <p>
        Investigate Scripture through Biblical
        Hebrew, Aramaic and Koine Greek.
        Explore lexical meaning, grammatical
        structure, textual transmission and
        scholarly language resources.
      </p>

      <div class="olStats">

        <div class="olStat">
          <strong>66</strong>
          Biblical books
        </div>

        <div class="olStat">
          <strong>1,189</strong>
          Chapter selections
        </div>

        <div class="olStat">
          <strong>3</strong>
          Biblical languages
        </div>

        <div class="olStat">
          <strong id="olResourceCount"></strong>
          Research resources
        </div>

      </div>

    </section>

    <section class="olPanel">

      <h3>Language Research Workspace</h3>

      <div class="olTabs">

        <button data-tab="passage">
          Passage study
        </button>

        <button data-tab="lexicon">
          Lexicon
        </button>

        <button data-tab="grammar">
          Grammar and morphology
        </button>

        <button data-tab="alphabet">
          Alphabets
        </button>

        <button data-tab="texts">
          Textual traditions
        </button>

        <button data-tab="library">
          Research library
        </button>

        <button data-tab="saved">
          Saved studies
        </button>

        <button data-tab="notes">
          Notebook
        </button>

      </div>

      <div id="olOutput"></div>

    </section>

    <section class="olPanel">

      <h3>Language Research Standards</h3>

      <div class="olGrid">

        <div class="olCard">
          <h4>Context before etymology</h4>
          <p>
            A word's historical root does not
            necessarily determine its meaning
            in a particular passage.
          </p>
        </div>

        <div class="olCard">
          <h4>Grammar before interpretation</h4>
          <p>
            Grammatical forms must be examined
            within their clauses, sentences
            and literary contexts.
          </p>
        </div>

        <div class="olCard">
          <h4>Textual transparency</h4>
          <p>
            Identify the original-language
            edition and distinguish manuscript
            readings from editorial decisions.
          </p>
        </div>

        <div class="olCard">
          <h4>Lexical identifiers</h4>
          <p>
            Strong's numbers identify lexical
            entries. They are not independent
            translations or complete definitions.
          </p>
        </div>

      </div>

      <p class="olLimit">
        Original-language research can clarify
        a passage, but grammar or dictionary
        definitions alone cannot settle every
        theological or historical disagreement.
      </p>

      <p>
        External linguistic research:
        <a href="https://www.stepbible.org/"
          target="_blank"
          rel="noopener noreferrer">
          STEP Bible
        </a>
        and its
        <a href="https://github.com/STEPBible/STEPBible-Data"
          target="_blank"
          rel="noopener noreferrer">
          dataset documentation
        </a>.
      </p>

      <button id="olClose">
        Close Original Languages
      </button>

    </section>
  `;

  const $ = id => root.querySelector("#" + id);

  const output = $("olOutput");

  const storageKey =
    "DesertBible.originalLanguages.v1";

  let saved = [];
  let notes = "";
  let bookIndex = 0;
  let chapter = 1;
  let verse = "";
  let view = "passage";

  let englishVerses = [];
  let originalWords = [];
  let passageStatus = "";
  let originalStatus = "";

  let loadCounter = 0;

  const cache = new Map();

  try {
    const stored = JSON.parse(
      localStorage.getItem(storageKey) || "{}"
    );

    saved = Array.isArray(stored.saved)
      ? stored.saved : [];

    notes = typeof stored.notes === "string"
      ? stored.notes : "";

    if (
      Number.isInteger(stored.bookIndex) &&
      stored.bookIndex >= 0 &&
      stored.bookIndex < books.length
    ) {
      bookIndex = stored.bookIndex;
    }

    chapter = Math.min(
      books[bookIndex][2],
      Math.max(1, Number(stored.chapter) || 1)
    );

    verse = String(stored.verse || "");

  } catch(error) {
    console.warn(
      "Original Languages storage:",error
    );
  }

  function make(tag,text="",className="") {
    const el = document.createElement(tag);

    el.textContent = text;

    if(className) {
      el.className = className;
    }

    return el;
  }

  function button(text,handler) {
    const el = make("button",text);

    el.type = "button";

    el.addEventListener("click",handler);

    return el;
  }

  function link(text,url) {
    const el = make("a",text);

    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";

    return el;
  }

  function field(parent,label,value) {
    const p = make("p");

    p.append(
      make("strong",label + ": "),
      document.createTextNode(String(value))
    );

    parent.appendChild(p);
  }

  function actions(parent,items) {
    const row = make("div","","olActions");

    row.append(...items);

    parent.appendChild(row);

    return row;
  }

  function saveStorage() {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          saved,notes,bookIndex,chapter,verse
        })
      );

      return true;

    } catch(error) {
      return false;
    }
  }

  function currentBook() {
    return books[bookIndex];
  }

  function chapterReference() {
    return currentBook()[0] + " " + chapter;
  }

  function reference() {
    return chapterReference() +
      (verse ? ":" + verse : "");
  }

  function testament() {
    return bookIndex < 39 ? "OT" : "NT";
  }

  function language() {
    if(testament() === "NT") {
      return "Koine Greek";
    }

    const name = currentBook()[0];

    if(name === "Daniel") {
      if(chapter >= 3 && chapter <= 7) {
        return "Biblical Aramaic";
      }

      if(chapter === 2) {
        if(verse && Number(verse) < 4) {
          return "Biblical Hebrew";
        }

        if(verse && Number(verse) > 4) {
          return "Biblical Aramaic";
        }

        return "Hebrew / Aramaic transition";
      }
    }

    if(name === "Ezra") {
      if(chapter === 5) {
        return "Biblical Aramaic";
      }

      if(chapter >= 4 && chapter <= 7) {
        return "Hebrew and/or Aramaic; check verse";
      }
    }

    if(
      name === "Jeremiah" &&
      chapter === 10
    ) {
      if(verse === "11") {
        return "Biblical Aramaic";
      }

      if(!verse) {
        return "Hebrew with Aramaic at verse 11";
      }
    }

    if(name === "Genesis" && chapter === 31) {
      return "Hebrew with an Aramaic expression at 31:47";
    }

    return "Biblical Hebrew";
  }

  function normalizeStrong(value) {
    const match =
      String(value).trim().match(/^([HG])0*(\d+)$/i);

    if(!match) {
      return null;
    }

    const prefix = match[1].toUpperCase();
    const number = Number(match[2]);

    if(!Number.isInteger(number) || number < 1) {
      return null;
    }

    if(
      (prefix === "H" && number > 8674) ||
      (prefix === "G" && number > 5624)
    ) {
      return null;
    }

    return prefix + number;
  }

  function strongURL(value) {
    const normalized = normalizeStrong(value);

    if(!normalized) {
      return "https://www.stepbible.org/";
    }

    const lang =
      normalized[0] === "H" ? "hebrew" : "greek";

    return "https://biblehub.com/" +
      lang + "/" +
      normalized.slice(1) + ".htm";
  }

  function stepURL() {
    return "https://www.stepbible.org/?q=" +
      encodeURIComponent("reference=" + reference());
  }

  function download(text,name) {
    const blob = new Blob(
      [text],
      {type:"text/plain;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = name;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);

      alert("Research record copied.");

    } catch(error) {
      download(
        text,
        "DesertBible-language-research.txt"
      );
    }
  }

  function saveItem(item) {
    const existing = saved.findIndex(
      row => row.id === item.id
    );

    if(existing >= 0) {
      saved.splice(existing,1);
    } else {
      saved.push(item);
    }

    if(!saveStorage()) {
      alert(
        "Browser storage unavailable. " +
        "Download your studies before leaving."
      );
    }

    render();
  }

  function isSaved(id) {
    return saved.some(row => row.id === id);
  }

  async function fetchText(url) {
    if(cache.has(url)) {
      return cache.get(url);
    }

    const response = await fetch(url);

    if(!response.ok) {
      throw new Error(
        "Source returned HTTP " + response.status
      );
    }

    const text = await response.text();

    cache.set(url,text);

    return text;
  }

  const hebrewFiles = [
    "Gen","Exod","Lev","Num","Deut",
    "Josh","Judg","Ruth","1Sam","2Sam",
    "1Kgs","2Kgs","1Chr","2Chr","Ezra",
    "Neh","Esth","Job","Ps","Prov",
    "Eccl","Song","Isa","Jer","Lam",
    "Ezek","Dan","Hos","Joel","Amos",
    "Obad","Jonah","Mic","Nah","Hab",
    "Zeph","Hag","Zech","Mal"
  ];

  async function loadHebrew() {
    const file = hebrewFiles[bookIndex];

    const url =
      "https://raw.githubusercontent.com/" +
      "openscriptures/morphhb/master/wlc/" +
      file + ".xml";

    const xmlText = await fetchText(url);

    const xml = new DOMParser().parseFromString(
      xmlText,
      "application/xml"
    );

    if(xml.querySelector("parsererror")) {
      throw new Error("Invalid XML response.");
    }

    const verses = Array.from(
      xml.getElementsByTagNameNS("*","verse")
    );

    const results = [];

    verses.forEach(node => {

      const id = node.getAttribute("osisID") || "";

      const parts = id.split(".");

      if(Number(parts[1]) !== Number(chapter)) {
        return;
      }

      const verseNumber = Number(parts[2]);

      if(!Number.isFinite(verseNumber)) {
        return;
      }

      const words = Array.from(
        node.getElementsByTagNameNS("*","w")
      );

      words.forEach(word => {

        const text = word.textContent.trim();

        const lemma =
          word.getAttribute("lemma") || "";

        const morph =
          word.getAttribute("morph") || "";

        const strongs = [];

        lemma.split(/[\/\s]+/).forEach(part => {

          if(/^\d+[a-z]?$/i.test(part)) {

            const digits = part.match(/^\d+/)[0];

            const id = normalizeStrong(
              "H" + digits
            );

            if(id && !strongs.includes(id)) {
              strongs.push(id);
            }
          }
        });

        results.push({
          verse:verseNumber,
          text,
          lemma,
          morph,
          strongs,
          language:
            morph.startsWith("A")
              ? "Aramaic"
              : morph.startsWith("H")
                ? "Hebrew"
                : "Hebrew/Aramaic"
        });
      });
    });

    if(!results.length) {
      throw new Error(
        "No matching tagged words found. " +
        "Source versification may differ."
      );
    }

    return results;
  }

  const greekFiles = [
    "61-Mt","62-Mk","63-Lk","64-Jn",
    "65-Ac","66-Ro","67-1Co","68-2Co",
    "69-Ga","70-Eph","71-Php","72-Col",
    "73-1Th","74-2Th","75-1Ti","76-2Ti",
    "77-Tit","78-Phm","79-Heb","80-Jas",
    "81-1Pe","82-2Pe","83-1Jn","84-2Jn",
    "85-3Jn","86-Jud","87-Re"
  ];

  async function loadGreek() {
    const file = greekFiles[bookIndex - 39];

    const url =
      "https://raw.githubusercontent.com/" +
      "morphgnt/sblgnt/master/" +
      file + "-morphgnt.txt";

    const text = await fetchText(url);

    const results = [];

    text.split(/\r?\n/).forEach(line => {

      const parts = line.trim().split(/\s+/);

      if(
        parts.length !== 7 ||
        !/^\d{6}$/.test(parts[0])
      ) {
        return;
      }

      const ch = Number(parts[0].slice(2,4));

      const v = Number(parts[0].slice(4,6));

      if(ch !== Number(chapter)) {
        return;
      }

      results.push({
        verse:v,
        text:parts[3],
        lemma:parts[6],
        morph:parts[1] + " / " + parts[2],
        strongs:[],
        language:"Greek"
      });
    });

    if(!results.length) {
      throw new Error(
        "No matching Greek words found."
      );
    }

    return results;
  }

  async function loadEnglish() {
    const url =
      "https://bible-api.com/" +
      encodeURIComponent(chapterReference()) +
      "?translation=web";

    const text = await fetchText(url);

    const data = JSON.parse(text);

    if(!Array.isArray(data.verses)) {
      throw new Error(
        "English passage unavailable."
      );
    }

    return data.verses;
  }

  async function loadPassage() {

    const request = ++loadCounter;

    englishVerses = [];
    originalWords = [];

    passageStatus = "Loading English reference text…";
    originalStatus = "Loading tagged original-language text…";

    render();

    const results = await Promise.allSettled([
      loadEnglish(),
      testament() === "OT"
        ? loadHebrew()
        : loadGreek()
    ]);

    if(request !== loadCounter) {
      return;
    }

    if(results[0].status === "fulfilled") {
      englishVerses = results[0].value;
      passageStatus = "World English Bible";
    } else {
      passageStatus =
        "English text unavailable. " +
        results[0].reason.message;
    }

    if(results[1].status === "fulfilled") {

      originalWords = results[1].value;

      originalStatus =
        testament() === "OT"
          ? "Open Scriptures Hebrew Bible — WLC"
          : "SBL Greek New Testament — MorphGNT";

    } else {

      originalStatus =
        "Original-language source unavailable. " +
        results[1].reason.message;
    }

    if(
      verse &&
      !englishVerses.some(
        row => String(row.verse) === verse
      ) &&
      !originalWords.some(
        row => String(row.verse) === verse
      )
    ) {
      verse = "";
    }

    saveStorage();

    if(view === "passage") {
      render();
    }
  }

  function decodeGreek(code) {

    const parts = code.split(" / ");

    const pos = {
      "N-":"Noun",
      "V-":"Verb",
      "A-":"Adjective",
      "RA":"Article",
      "C-":"Conjunction",
      "P-":"Preposition",
      "D-":"Adverb",
      "I-":"Interjection",
      "RP":"Personal pronoun",
      "RR":"Relative pronoun",
      "RD":"Demonstrative pronoun",
      "RI":"Interrogative pronoun",
      "RX":"Indefinite pronoun",
      "X-":"Particle"
    };

    const morph = parts[1] || "";

    const person = {
      "1":"First person",
      "2":"Second person",
      "3":"Third person"
    };

    const tense = {
      "P":"Present",
      "I":"Imperfect",
      "F":"Future",
      "A":"Aorist",
      "X":"Perfect",
      "Y":"Pluperfect"
    };

    const voice = {
      "A":"Active",
      "M":"Middle",
      "P":"Passive"
    };

    const mood = {
      "I":"Indicative",
      "D":"Imperative",
      "S":"Subjunctive",
      "O":"Optative",
      "N":"Infinitive",
      "P":"Participle"
    };

    const cases = {
      "N":"Nominative",
      "G":"Genitive",
      "D":"Dative",
      "A":"Accusative",
      "V":"Vocative"
    };

    const number = {
      "S":"Singular",
      "P":"Plural"
    };

    const gender = {
      "M":"Masculine",
      "F":"Feminine",
      "N":"Neuter"
    };

    return [
      pos[parts[0]],
      person[morph[0]],
      tense[morph[1]],
      voice[morph[2]],
      mood[morph[3]],
      cases[morph[4]],
      number[morph[5]],
      gender[morph[6]]
    ].filter(Boolean).join(" • ");
  }

  function decodeHebrew(code) {

    const stems = {
      "q":"Qal",
      "N":"Niphal",
      "p":"Piel",
      "P":"Pual",
      "h":"Hiphil",
      "H":"Hophal",
      "t":"Hithpael"
    };

    const pos = {
      "A":"Adjective",
      "C":"Conjunction",
      "D":"Adverb",
      "N":"Noun",
      "P":"Pronoun",
      "R":"Preposition",
      "S":"Suffix",
      "T":"Particle",
      "V":"Verb"
    };

    const conjugations = {
      "p":"Perfect / qatal",
      "q":"Sequential perfect",
      "i":"Imperfect / yiqtol",
      "w":"Sequential imperfect",
      "h":"Cohortative",
      "j":"Jussive",
      "v":"Imperative",
      "r":"Active participle",
      "s":"Passive participle",
      "a":"Infinitive absolute",
      "c":"Infinitive construct"
    };

    const lang = code[0];

    if(lang !== "H" && lang !== "A") {
      return "";
    }

    return code.slice(1).split("/").map(part => {

      const result = [
        lang === "A" ? "Aramaic" : "Hebrew",
        pos[part[0]]
      ];

      if(part[0] === "V" && lang === "H") {
        result.push(
          stems[part[1]],
          conjugations[part[2]]
        );
      }

      return result.filter(Boolean).join(" • ");

    }).join(" / ");
  }

  function renderPassage() {

    output.append(
      make("h3","Passage and Interlinear Study")
    );

    const controls = make(
      "div","","olControls"
    );

    const bookSelect = make("select");

    books.forEach((book,index) => {

      const option = make("option",book[0]);

      option.value = index;

      bookSelect.appendChild(option);
    });

    bookSelect.value = bookIndex;

    const chapterSelect = make("select");

    for(let i=1;i<=currentBook()[2];i++) {

      const option = make(
        "option","Chapter " + i
      );

      option.value = i;

      chapterSelect.appendChild(option);
    }

    chapterSelect.value = chapter;

    const verseSelect = make("select");

    const all = make("option","Entire chapter");

    all.value = "";

    verseSelect.appendChild(all);

    const verseNumbers = Array.from(new Set([
      ...englishVerses.map(row => Number(row.verse)),
      ...originalWords.map(row => Number(row.verse))
    ])).sort((a,b) => a-b);

    verseNumbers.forEach(number => {

      const option = make(
        "option","Verse " + number
      );

      option.value = number;

      verseSelect.appendChild(option);
    });

    verseSelect.value = verse;

    [
      ["Book",bookSelect],
      ["Chapter",chapterSelect],
      ["Verse",verseSelect]
    ].forEach(([name,control]) => {

      const label = make("label",name);

      label.appendChild(control);

      controls.appendChild(label);
    });

    output.appendChild(controls);

    bookSelect.addEventListener("change",() => {

      bookIndex = Number(bookSelect.value);

      chapter = 1;
      verse = "";

      loadPassage();
    });

    chapterSelect.addEventListener("change",() => {

      chapter = Number(chapterSelect.value);

      verse = "";

      loadPassage();
    });

    verseSelect.addEventListener("change",() => {

      verse = verseSelect.value;

      saveStorage();
      render();
    });

    actions(output,[
      button("Load passage",loadPassage),

      button("Previous chapter",() => {

        if(chapter > 1) {
          chapter--;
        } else if(bookIndex > 0) {
          bookIndex--;
          chapter = currentBook()[2];
        }

        verse = "";

        loadPassage();
      }),

      button("Next chapter",() => {

        if(chapter < currentBook()[2]) {
          chapter++;
        } else if(bookIndex < books.length-1) {
          bookIndex++;
          chapter = 1;
        }

        verse = "";

        loadPassage();
      }),

      button(
        isSaved("passage:" + reference())
          ? "Remove saved passage"
          : "Save passage",
        () => saveItem({
          id:"passage:" + reference(),
          type:"Passage",
          title:reference(),
          text:reference() + "\n" + language(),
          bookIndex,chapter,verse
        })
      )
    ]);

    const summary = make(
      "div","","olCard"
    );

    summary.style.marginTop = "15px";

    summary.append(
      make("h3",reference()),
      make("span",language(),"olTag"),
      make("p",originalStatus,"olMuted")
    );

    summary.appendChild(
      link(
        "Open passage in STEP Bible",
        stepURL()
      )
    );

    output.appendChild(summary);

    const selectedWords = originalWords.filter(
      row => !verse ||
        String(row.verse) === verse
    );

    const selectedEnglish = englishVerses.filter(
      row => !verse ||
        String(row.verse) === verse
    );

    const preview = make(
      "div","","olPanel"
    );

    preview.append(
      make("h3","English Reference Text"),
      make("p",passageStatus,"olMuted")
    );

    selectedEnglish.forEach(row => {

      const p = make(
        "div","","olVerse"
      );

      p.append(
        make("strong",String(row.verse) + " "),
        document.createTextNode(row.text)
      );

      preview.appendChild(p);
    });

    output.appendChild(preview);

    const original = make(
      "div","","olPanel"
    );

    original.append(
      make("h3","Original-Language Text"),
      make("p",originalStatus,"olMuted")
    );

    const groups = new Map();

    selectedWords.forEach(word => {

      if(!groups.has(word.verse)) {
        groups.set(word.verse,[]);
      }

      groups.get(word.verse).push(word.text);
    });

    groups.forEach((words,number) => {

      const row = make(
        "div","","olVerse"
      );

      const text = make(
        "div",
        words.join(" "),
        "olAncient"
      );

      text.style.fontSize = "25px";

      text.dir =
        testament() === "OT" ? "rtl" : "ltr";

      row.append(
        make("small","Verse " + number),
        text
      );

      original.appendChild(row);
    });

    if(testament() === "OT") {

      original.appendChild(
        make(
          "p",
          "Hebrew/Aramaic numbering follows the source edition and may differ from English verse numbering. Slash marks can indicate morphological segmentation.",
          "olLimit"
        )
      );
    }

    output.appendChild(original);

    const wordPanel = make(
      "div","","olPanel"
    );

    wordPanel.append(
      make("h3","Word-by-Word Analysis"),
      make(
        "p",
        selectedWords.length +
        " tagged words in the selection.",
        "olMuted"
      )
    );

    const filter = make("input");

    filter.placeholder =
      "Search word, lemma, Strong's number or morphology";

    wordPanel.appendChild(filter);

    const result = make("div");

    wordPanel.appendChild(result);

    function drawWords() {

      result.replaceChildren();

      const query =
        filter.value.trim().toLowerCase();

      const matched = selectedWords.filter(
        row => [
          row.text,
          row.lemma,
          row.morph,
          row.strongs.join(" ")
        ].join(" ").toLowerCase().includes(query)
      );

      const grid = make(
        "div","","olGrid"
      );

      grid.style.marginTop = "15px";

      let rendered = 0;

      function more() {

        const end = Math.min(
          rendered + 48,
          matched.length
        );

        for(let i=rendered;i<end;i++) {

          const word = matched[i];

          const card = make(
            "article","","olCard"
          );

          const wordText = make(
            "div",
            word.text,
            "olWord olAncient"
          );

          wordText.dir =
            word.language === "Greek"
              ? "ltr" : "rtl";

          card.append(
            wordText,
            make(
              "span",
              "Verse " + word.verse,
              "olTag"
            )
          );

          field(
            card,
            word.language === "Greek"
              ? "Dictionary lemma"
              : "Source lemma code",
            word.lemma || "Not supplied"
          );

          field(
            card,
            "Language",
            word.language
          );

          field(
            card,
            "Morphology code",
            word.morph || "Not supplied"
          );

          const explanation =
            word.language === "Greek"
              ? decodeGreek(word.morph)
              : decodeHebrew(word.morph);

          if(explanation) {
            field(
              card,
              "Decoded features",
              explanation
            );
          }

          word.strongs.forEach(id => {

            const p = make("p");

            p.appendChild(
              link(
                id + " — lexical entry",
                strongURL(id)
              )
            );

            const match = vocabulary.find(
              item =>
                normalizeStrong(item[0]) === id
            );

            if(match) {
              p.appendChild(
                document.createTextNode(
                  " • " + match[4]
                )
              );
            }

            card.appendChild(p);
          });

          if(word.language === "Greek") {

            card.appendChild(
              link(
                "Research Greek lemma in Logeion",
                "https://logeion.uchicago.edu/" +
                encodeURIComponent(word.lemma)
              )
            );
          }

          const note = [
            reference(),
            "Verse " + word.verse,
            "Word: " + word.text,
            "Lemma: " + word.lemma,
            "Morphology: " + word.morph,
            "Source: " + originalStatus
          ].join("\n");

          actions(card,[
            button(
              "Copy word record",
              () => copyText(note)
            )
          ]);

          grid.appendChild(card);
        }

        rendered = end;

        moreButton.hidden =
          rendered >= matched.length;

        count.textContent =
          "Showing " + rendered +
          " of " + matched.length + " words";
      }

      const count = make(
        "p","","olMuted"
      );

      const moreButton = button(
        "Show more words",
        more
      );

      result.append(
        count,grid,moreButton
      );

      more();

      if(!matched.length) {
        result.appendChild(
          make(
            "p",
            "No matching tagged words available."
          )
        );
      }
    }

    filter.addEventListener("input",drawWords);

    drawWords();

    output.appendChild(wordPanel);

    actions(output,[
      button("Download passage analysis",() => {

        const report = [
          "DESERTBIBLE ORIGINAL LANGUAGES",
          reference(),
          language(),
          originalStatus,
          "",
          ...selectedWords.map(word =>
            [
              "Verse " + word.verse,
              word.text,
              word.lemma,
              word.morph,
              word.strongs.join(", ")
            ].join("\t")
          ),
          "",
          "Research sources:",
          "https://github.com/openscriptures/morphhb",
          "https://github.com/morphgnt/sblgnt",
          "https://www.stepbible.org/"
        ].join("\n");

        download(
          report,
          "DesertBible-original-language-study.txt"
        );
      })
    ]);

    output.appendChild(
      make(
        "p",
        "English text and tagged words are displayed by verse; they are not automatically aligned word for word. The morphology decoder expands selected common features. The original source codes remain visible for verification.",
        "olLimit"
      )
    );
  }

  function renderLexicon() {

    output.append(
      make("h3","Lexical Research"),

      make(
        "p",
        "Explore selected vocabulary and look up additional entries by Strong's number."
      )
    );

    const controls = make(
      "div","","olControls"
    );

    const search = make("input");

    search.placeholder =
      "Search love, logos, hesed, H2617...";

    const lang = make("select");

    [
      "All languages",
      "Hebrew",
      "Greek"
    ].forEach(value => {

      const option = make("option",value);

      option.value = value;

      lang.appendChild(option);
    });

    controls.append(search,lang);

    output.appendChild(controls);

    const lookup = make(
      "div","","olCard"
    );

    lookup.append(
      make("h4","Full Strong's Reference Lookup")
    );

    const strongInput = make("input");

    strongInput.placeholder =
      "Enter H3068 or G3056";

    const status = make(
      "p","","olMuted"
    );

    lookup.append(strongInput,status);

    actions(lookup,[
      button("Open lexical entry",() => {

        const id = normalizeStrong(
          strongInput.value
        );

        if(!id) {
          status.textContent =
            "Enter H or G followed by a valid Strong's number.";
          return;
        }

        status.textContent =
          "Opening reference entry " + id;

        window.open(
          strongURL(id),
          "_blank",
          "noopener,noreferrer"
        );
      }),

      button("Open STEP Bible",() => {

        window.open(
          "https://www.stepbible.org/",
          "_blank",
          "noopener,noreferrer"
        );
      })
    ]);

    output.appendChild(lookup);

    const results = make("div");

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const query =
        search.value.trim().toLowerCase();

      const matching = vocabulary.filter(
        row =>
          (
            lang.value === "All languages" ||
            row[1] === lang.value
          ) &&
          (
            !query ||
            row.join(" ").toLowerCase().includes(query) ||
            (
              normalizeStrong(query) &&
              normalizeStrong(query) ===
                normalizeStrong(row[0])
            )
          )
      );

      results.appendChild(
        make(
          "p",
          matching.length +
          " selected vocabulary entries",
          "olMuted"
        )
      );

      const grid = make(
        "div","","olGrid"
      );

      matching.forEach(row => {

        const card = make(
          "article","","olCard"
        );

        const word = make(
          "div",
          row[2],
          "olWord olAncient"
        );

        word.dir =
          row[1] === "Hebrew"
            ? "rtl" : "ltr";

        card.append(
          make("span",row[0],"olTag"),
          word,
          make("h3",row[3]),
          make("p",row[4])
        );

        field(card,"Language",row[1]);

        field(card,"Biblical examples",row[5]);

        card.appendChild(
          make("p",row[6],"olLimit")
        );

        card.appendChild(
          link(
            "Compare external lexical entry",
            strongURL(row[0])
          )
        );

        const id = "lexicon:" + row[0];

        actions(card,[
          button(
            isSaved(id)
              ? "Remove saved word"
              : "Save word",
            () => saveItem({
              id,
              type:"Vocabulary",
              title:row[2] + " — " + row[3],
              text:row.join("\n")
            })
          ),

          button(
            "Copy lexical note",
            () => copyText(row.join("\n"))
          )
        ]);

        grid.appendChild(card);
      });

      results.appendChild(grid);

      if(!matching.length) {
        results.appendChild(
          make(
            "p",
            "No matching curated entry. Use the Strong's lookup above to investigate additional vocabulary."
          )
        );
      }
    }

    search.addEventListener("input",draw);

    lang.addEventListener("change",draw);

    draw();

    output.appendChild(
      make(
        "p",
        "These vocabulary summaries are editorial learning notes, not exhaustive dictionary articles or quotations from a particular scholar.",
        "olLimit"
      )
    );
  }

  function renderGrammar() {

    output.append(
      make("h3","Grammar and Morphology"),

      make(
        "p",
        "Explore grammatical concepts with examples and interpretive limitations."
      )
    );

    const select = make("select");

    [
      "All languages",
      "Hebrew",
      "Aramaic",
      "Greek"
    ].forEach(language => {

      const option = make("option",language);

      option.value = language;

      select.appendChild(option);
    });

    const search = make("input");

    search.placeholder =
      "Search aorist, Qal, genitive...";

    const controls = make(
      "div","","olControls"
    );

    controls.append(select,search);

    output.appendChild(controls);

    const results = make("div");

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const query =
        search.value.toLowerCase().trim();

      const grid = make(
        "div","","olGrid"
      );

      grammar.filter(row =>
        (
          select.value === "All languages" ||
          row[0] === select.value
        ) &&
        (
          !query ||
          row.join(" ").toLowerCase().includes(query)
        )
      ).forEach(row => {

        const card = make(
          "div","","olCard"
        );

        card.append(
          make("span",row[0],"olTag"),
          make("h3",row[1]),
          make("p",row[2]),
          make("p",row[3],"olAncient"),
          make("p",row[4],"olLimit")
        );

        grid.appendChild(card);
      });

      if(!grid.childElementCount) {
        grid.appendChild(
          make("p","No matching grammar topics.")
        );
      }

      results.appendChild(grid);
    }

    select.addEventListener("change",draw);

    search.addEventListener("input",draw);

    draw();

    output.appendChild(
      link(
        "Consult full morphology code documentation",
        "https://github.com/STEPBible/STEPBible-Data"
      )
    );
  }

  function renderAlphabet() {

    output.append(
      make("h3","Biblical Language Alphabets")
    );

    const sections = [
      [
        "Hebrew and Biblical Aramaic",
        "The biblical manuscript traditions use a related square-script alphabet. Final letter forms appear at the ends of words.",
        hebrewAlphabet,
        "rtl"
      ],
      [
        "Greek",
        "The Greek alphabet contains 24 letters. Sigma has a distinct lowercase final form.",
        greekAlphabet,
        "ltr"
      ]
    ];

    sections.forEach(section => {

      const panel = make(
        "div","","olPanel"
      );

      panel.append(
        make("h3",section[0]),
        make("p",section[1])
      );

      const grid = make(
        "div","","olAlphabet"
      );

      grid.dir = section[3];

      section[2].forEach(row => {

        const card = make(
          "div","","olLetter"
        );

        card.dir = "ltr";

        card.append(
          make("strong",row[0],"olAncient"),
          make("div",row[1]),
          make("small",row[2],"olMuted")
        );

        grid.appendChild(card);
      });

      panel.appendChild(grid);

      output.appendChild(panel);
    });

    output.appendChild(
      make(
        "p",
        "The Latin-letter equivalents are simplified scholarly transliterations, not recordings of ancient pronunciation. Hebrew vowel systems and Greek pronunciation changed over time, and modern teaching traditions differ.",
        "olLimit"
      )
    );
  }

  function renderTexts() {

    const traditions = [
      [
        "Masoretic Text",
        "The received Hebrew textual tradition preserved with vowel points, accents and textual annotations by Masoretic scribes.",
        "The surviving medieval codices preserve a much older textual tradition.",
        "https://www.aleppocodex.org/"
      ],
      [
        "Westminster Leningrad Codex",
        "A digital representation of the Hebrew Bible associated with the Leningrad Codex, dated 1008/1009 CE.",
        "A manuscript-based edition, not a direct copy of the original biblical autographs.",
        "https://github.com/openscriptures/morphhb"
      ],
      [
        "Dead Sea Scrolls",
        "Ancient Jewish manuscripts preserving biblical and nonbiblical writings in Hebrew, Aramaic and Greek.",
        "The manuscripts exhibit textual diversity and vary considerably in completeness.",
        "https://www.deadseascrolls.org.il/"
      ],
      [
        "Samaritan Pentateuch",
        "A distinct textual tradition of the Torah preserved by the Samaritan community.",
        "Its differences from the Masoretic Text include both shared ancient readings and distinctive arrangements.",
        "https://www.stepbible.org/"
      ],
      [
        "Septuagint",
        "Ancient Greek translations of Jewish Scriptures produced and transmitted over an extended period.",
        "The individual books differ in translation technique and textual history.",
        "https://www.stepbible.org/"
      ],
      [
        "Aramaic Targums",
        "Aramaic translations and interpretive renderings of Jewish Scriptures.",
        "Their expansions and interpretive features must be distinguished from the Hebrew base text.",
        "https://www.sefaria.org/"
      ],
      [
        "SBL Greek New Testament",
        "A modern critical Greek New Testament edition edited by Michael W. Holmes.",
        "It is an editorially established text rather than a transcription of one manuscript.",
        "https://sblgnt.com/"
      ],
      [
        "Nestle-Aland and UBS",
        "Modern critical Greek New Testament editions based on comparison of textual witnesses.",
        "Their editorial decisions and apparatuses require specialist interpretation.",
        "https://www.die-bibel.de/"
      ],
      [
        "Byzantine Textual Tradition",
        "A major tradition represented by many Greek New Testament manuscripts.",
        "Manuscript numerical superiority alone does not determine the earliest recoverable reading.",
        "https://ntvmr.uni-muenster.de/"
      ],
      [
        "Textus Receptus",
        "A family of early printed Greek New Testament editions.",
        "The editions are not identical and should not be treated as one ancient manuscript.",
        "https://www.stepbible.org/"
      ],
      [
        "Codex Sinaiticus",
        "A fourth-century Greek biblical manuscript preserving the complete New Testament.",
        "Its corrections and textual readings are historical witnesses requiring comparison.",
        "https://www.codexsinaiticus.org/"
      ],
      [
        "Codex Vaticanus",
        "A fourth-century Greek manuscript containing much of the Christian Bible.",
        "Its surviving contents are incomplete and represent one important textual witness.",
        "https://digi.vatlib.it/view/MSS_Vat.gr.1209"
      ]
    ];

    output.append(
      make("h3","Textual Traditions"),

      make(
        "p",
        "Explore the distinction between manuscripts, translations, textual traditions and scholarly editions."
      )
    );

    const grid = make(
      "div","","olGrid"
    );

    traditions.forEach(row => {

      const card = make(
        "article","","olCard"
      );

      card.append(
        make("h3",row[0]),
        make("p",row[1]),
        make("p",row[2],"olLimit"),
        link("Explore research resource",row[3])
      );

      grid.appendChild(card);
    });

    output.appendChild(grid);
  }

  function renderLibrary() {

    output.append(
      make("h3","Original Languages Research Library")
    );

    const search = make("input");

    search.placeholder =
      "Search Hebrew, Greek, lexicons, manuscripts...";

    output.appendChild(search);

    const results = make("div");

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const query =
        search.value.toLowerCase().trim();

      resources.filter(row =>
        Object.values(row).join(" ")
          .toLowerCase().includes(query)
      ).forEach(resource => {

        const entry = make(
          "div","","olEntry"
        );

        entry.append(
          make("span",resource.type,"olTag"),
          make("h3",resource.name),
          make("p",resource.description),
          link(
            "Open research resource",
            resource.url
          )
        );

        results.appendChild(entry);
      });

      if(!results.childElementCount) {
        results.appendChild(
          make("p","No matching resources.")
        );
      }
    }

    search.addEventListener("input",draw);

    draw();
  }

  function renderSaved() {

    output.append(
      make("h3","Saved Language Studies")
    );

    if(!saved.length) {

      output.appendChild(
        make(
          "p",
          "No saved studies yet. Save passages or vocabulary entries to build your research collection."
        )
      );

      return;
    }

    saved.forEach(item => {

      const card = make(
        "div","","olEntry"
      );

      card.append(
        make("span",item.type,"olTag"),
        make("h3",item.title),
        make("p",item.text)
      );

      const buttons = [
        button(
          "Remove",
          () => saveItem(item)
        ),

        button(
          "Copy",
          () => copyText(item.text)
        )
      ];

      if(
        item.type === "Passage" &&
        books[item.bookIndex]
      ) {

        buttons.unshift(
          button("Open passage",() => {

            bookIndex = item.bookIndex;
            chapter = item.chapter;
            verse = item.verse;

            view = "passage";

            loadPassage();
          })
        );
      }

      actions(card,buttons);

      output.appendChild(card);
    });

    actions(output,[
      button("Download saved studies",() => {

        download(
          saved.map(item =>
            item.title + "\n" + item.text
          ).join("\n\n================\n\n"),

          "DesertBible-saved-language-studies.txt"
        );
      })
    ]);
  }

  function renderNotes() {

    output.append(
      make("h3","Language Research Notebook"),

      make(
        "p",
        "Record lexical observations, grammatical questions, translation comparisons and manuscript research."
      )
    );

    const textarea = make("textarea");

    textarea.value = notes;

    textarea.placeholder =
      "Write your research notes...";

    textarea.addEventListener("input",() => {
      notes = textarea.value;
    });

    output.appendChild(textarea);

    const status = make(
      "p","","olMuted"
    );

    actions(output,[
      button("Save notebook",() => {

        status.textContent = saveStorage()
          ? "Notebook saved on this device."
          : "Browser storage unavailable. Download your notes.";
      }),

      button("Download notebook",() => {

        download(
          notes,
          "DesertBible-language-notebook.txt"
        );
      })
    ]);

    output.append(
      status,
      make(
        "p",
        "Saved studies and notes are stored locally in this browser.",
        "olMuted"
      )
    );
  }

  function render() {

    output.replaceChildren();

    root.querySelectorAll(
      "[data-tab]"
    ).forEach(node => {

      const active =
        node.dataset.tab === view;

      node.classList.toggle(
        "olActive",active
      );

      node.setAttribute(
        "aria-pressed",String(active)
      );
    });

    if(view === "passage") {
      renderPassage();
    }

    if(view === "lexicon") {
      renderLexicon();
    }

    if(view === "grammar") {
      renderGrammar();
    }

    if(view === "alphabet") {
      renderAlphabet();
    }

    if(view === "texts") {
      renderTexts();
    }

    if(view === "library") {
      renderLibrary();
    }

    if(view === "saved") {
      renderSaved();
    }

    if(view === "notes") {
      renderNotes();
    }
  }

  $("olResourceCount").textContent =
    resources.length;

  root.querySelectorAll(
    "[data-tab]"
  ).forEach(node => {

    node.addEventListener("click",() => {

      view = node.dataset.tab;

      render();
    });
  });

  $("olClose").addEventListener("click",() => {

    loadCounter++;

    workspace.remove();
  });

  loadPassage();

  workspace.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
}

function openArchaeology(workspace) {
  "use strict";

  const sources = {
    bm: [
      "British Museum",
      "https://www.britishmuseum.org/collection"
    ],
    louvre: [
      "Louvre Collections",
      "https://collections.louvre.fr/"
    ],
    israel: [
      "Israel Museum",
      "https://www.imj.org.il/en"
    ],
    iaa: [
      "Israel Antiquities Authority",
      "https://www.antiquities.org.il/"
    ],
    isac: [
      "Institute for the Study of Ancient Cultures",
      "https://isac.uchicago.edu/"
    ],
    oracc: [
      "Open Richly Annotated Cuneiform Corpus",
      "https://oracc.museum.upenn.edu/"
    ],
    rinap: [
      "Royal Inscriptions of the Neo-Assyrian Period",
      "https://oracc.museum.upenn.edu/rinap/"
    ],
    cdli: [
      "Cuneiform Digital Library Initiative",
      "https://cdli.earth/"
    ],
    dss: [
      "Dead Sea Scrolls Digital Library",
      "https://www.deadseascrolls.org.il/"
    ],
    imjdss: [
      "Israel Museum Digital Dead Sea Scrolls",
      "https://dss.collections.imj.org.il/"
    ],
    asor: [
      "American Society of Overseas Research",
      "https://www.asor.org/"
    ],
    bas: [
      "Biblical Archaeology Society",
      "https://www.biblicalarchaeology.org/"
    ],
    odyssey: [
      "Bible Odyssey",
      "https://www.bibleodyssey.org/"
    ],
    met: [
      "Metropolitan Museum of Art",
      "https://www.metmuseum.org/art/collection"
    ],
    penn: [
      "Penn Museum Collections",
      "https://www.penn.museum/collections/"
    ],
    unesco: [
      "UNESCO World Heritage Centre",
      "https://whc.unesco.org/"
    ],
    hadashot: [
      "Excavations and Surveys in Israel",
      "https://www.hadashot-esi.org.il/"
    ],
    jjar: [
      "Jerusalem Journal of Archaeology",
      "https://jjar.huji.ac.il/"
    ],
    telDan: [
      "Jewish Museum — Tel Dan Stele",
      "https://thejewishmuseum.org/wp-content/uploads/2025/07/JM_Collection_Tel_Dan_Section_Text_FINAL-2.pdf"
    ],
    danStudy: [
      "Michael Langlois — Tel Dan Inscription after 30 Years",
      "https://ngsba.org/wp-content/uploads/2025/03/Langlois-2024-Tel-Dan-Inscription-IEJ-74-2.pdf"
    ],
    inscriptions: [
      "BAS — Ancient Inscriptions",
      "https://library.biblicalarchaeology.org/collections/ancient-inscriptions/"
    ],
    bibleinterp: [
      "The Bible and Interpretation",
      "https://bibleinterp.arizona.edu/"
    ],
    edh: [
      "Epigraphic Database Heidelberg",
      "https://edh.ub.uni-heidelberg.de/"
    ],
    perseus: [
      "Perseus Digital Library",
      "https://www.perseus.tufts.edu/"
    ],
    pum: [
      "Papyri.info",
      "https://papyri.info/"
    ]
  };

  const evidence = {
    direct: {
      title:"Direct historical attestation",
      description:
        "An inscription or material record explicitly identifies a relevant person, population, dynasty, place or event."
    },
    material: {
      title:"Material corroboration",
      description:
        "Physical remains support a particular historical circumstance, although identification or dating may require interpretation."
    },
    context: {
      title:"Historical context",
      description:
        "Evidence illuminates the culture, institutions or environment associated with biblical literature without independently establishing its narratives."
    },
    textual: {
      title:"Textual witness",
      description:
        "A physical manuscript or inscription preserves a reading or textual tradition relevant to biblical literature."
    },
    disputed: {
      title:"Disputed identification",
      description:
        "The archaeological remains are real, but their association with a specific biblical person, event or chronology remains contested."
    }
  };

  /*
    RECORD STRUCTURE

    ID, title, date, sorting year, region,
    findspot, physical type, evidence category,
    biblical references, description,
    significance, limitations, sources,
    image search terms
  */

  const records = [

    [
      "ARC-001",
      "Merneptah Stele",
      "c. 1208 BCE",
      -1208,
      "Egypt",
      "Thebes, Egypt",
      "Royal inscription",
      "direct",
      ["Exodus","Joshua","Judges"],
      "An Egyptian royal victory monument from the reign of Pharaoh Merneptah. Its account of campaigns includes a population identified as Israel.",
      "Provides the earliest generally accepted extra-biblical reference to Israel and places a group bearing that name in Canaan by the late thirteenth century BCE.",
      "Does not establish the date, route or historical details of the Exodus or Israelite settlement narratives.",
      ["met","isac","bas"],
      "Merneptah Stele"
    ],

    [
      "ARC-002",
      "Tel Dan Stele",
      "9th century BCE",
      -850,
      "Levant",
      "Tel Dan",
      "Royal inscription",
      "direct",
      ["2 Samuel 7","1 Kings 12","2 Kings 8","2 Kings 9"],
      "Fragments of an Aramaic victory inscription recovered during excavations in 1993 and 1994. The monument is commonly associated with an Aramean ruler, probably Hazael.",
      "The widely accepted reading House of David provides important evidence for a Judahite royal dynasty associated with the name David.",
      "The monument does not establish the size of David's kingdom or verify every event in Samuel. Its account of royal deaths differs from the account in 2 Kings 9.",
      ["telDan","danStudy","israel"],
      "Tel Dan Stele"
    ],

    [
      "ARC-003",
      "Mesha Stele",
      "9th century BCE",
      -840,
      "Levant",
      "Dhiban, Jordan",
      "Royal inscription",
      "direct",
      ["2 Kings 3","1 Kings 16"],
      "A Moabite royal monument recording the achievements of King Mesha and conflict with Israel following the period of Omride rule.",
      "Independently attests Mesha, Omri and political conflict between Moab and Israel.",
      "The inscription presents Moab's royal perspective. Proposed readings of damaged passages remain debated.",
      ["louvre","inscriptions"],
      "Mesha Stele Louvre"
    ],

    [
      "ARC-004",
      "Black Obelisk of Shalmaneser III",
      "c. 825 BCE",
      -825,
      "Mesopotamia",
      "Nimrud, Iraq",
      "Royal monument",
      "direct",
      ["2 Kings 9","2 Kings 10"],
      "An Assyrian monument containing reliefs and inscriptions describing tribute from foreign rulers, including Jehu of Israel.",
      "Provides independent evidence for Jehu and Israel's relationship with Assyrian imperial power. The tribute episode is conventionally dated to 841 BCE.",
      "The kneeling figure may represent Jehu or his envoy. The title associating Jehu with Omri does not establish biological descent.",
      ["bm","oracc"],
      "Black Obelisk Shalmaneser III"
    ],

    [
      "ARC-005",
      "Kurkh Monolith of Shalmaneser III",
      "853 BCE",
      -853,
      "Mesopotamia",
      "Kurkh, southeastern Türkiye",
      "Royal inscription",
      "direct",
      ["1 Kings 16","1 Kings 20","1 Kings 22"],
      "An Assyrian royal inscription describing the Battle of Qarqar and naming Ahab of Israel among members of an opposing coalition.",
      "Provides an important chronological anchor for Ahab and the international politics of ninth-century BCE Israel.",
      "The reported military numbers may reflect royal exaggeration. The biblical narratives do not describe the battle itself.",
      ["bm","oracc"],
      "Kurkh Monolith Shalmaneser"
    ],

    [
      "ARC-006",
      "Taylor Prism of Sennacherib",
      "691 BCE",
      -691,
      "Mesopotamia",
      "Nineveh, Iraq",
      "Clay inscription",
      "direct",
      ["2 Kings 18","2 Kings 19","Isaiah 36","Isaiah 37","Micah 1"],
      "A clay prism preserving Sennacherib's annals, including his campaign against Judah in 701 BCE.",
      "Identifies Hezekiah, describes Assyrian conquest of Judahite settlements and records the containment of Hezekiah in Jerusalem.",
      "The annals do not claim the capture of Jerusalem. Their tribute figures differ from the biblical account. They cannot establish supernatural explanations.",
      ["bm","rinap"],
      "Taylor Prism Sennacherib"
    ],

    [
      "ARC-007",
      "Lachish Reliefs",
      "Early 7th century BCE",
      -690,
      "Mesopotamia",
      "Southwest Palace, Nineveh",
      "Stone relief",
      "direct",
      ["2 Kings 18","Isaiah 36","Micah 1:13"],
      "Assyrian palace reliefs depicting the siege and capture of Lachish during Sennacherib's campaign of 701 BCE.",
      "Provide visual and inscriptional evidence for the conquest of a major Judahite city.",
      "Royal victory imagery is selective and propagandistic. The reliefs do not establish Micah's precise composition date.",
      ["bm","rinap"],
      "Lachish reliefs British Museum"
    ],

    [
      "ARC-008",
      "Lachish Siege Ramp",
      "Associated with 701 BCE",
      -701,
      "Levant",
      "Tel Lachish",
      "Military architecture",
      "material",
      ["2 Kings 18","Isaiah 36","Micah 1:13"],
      "Physical remains of siege works associated with the Assyrian attack on Lachish.",
      "Complement the Assyrian reliefs and the archaeological destruction of the Judahite city.",
      "Reconstruction of the siege relies on excavation data and comparison with Assyrian evidence.",
      ["iaa","asor","bas"],
      "Lachish Assyrian siege ramp"
    ],

    [
      "ARC-009",
      "Siloam Inscription",
      "Late 8th century BCE",
      -700,
      "Levant",
      "Jerusalem",
      "Engineering inscription",
      "material",
      ["2 Kings 20:20","2 Chronicles 32:30"],
      "A Hebrew inscription discovered within the Siloam Tunnel in 1880, describing the meeting of workers excavating the tunnel.",
      "Provides evidence for ancient Judahite water engineering and literacy.",
      "The text does not identify Hezekiah by name. The attribution and precise construction chronology depend on additional evidence.",
      ["jjar","inscriptions"],
      "Siloam Inscription"
    ],

    [
      "ARC-010",
      "Ketef Hinnom Silver Amulets",
      "Late 7th–early 6th century BCE",
      -600,
      "Levant",
      "Jerusalem",
      "Inscribed amulet",
      "textual",
      ["Numbers 6:24-26","Deuteronomy 7:9"],
      "Two small inscribed silver amulets recovered from a burial complex in 1979.",
      "Preserve blessings with close parallels to biblical priestly blessing traditions and provide evidence for their antiquity.",
      "They are not complete biblical manuscripts and cannot establish the date of composition of the entire Pentateuch.",
      ["israel","jjar"],
      "Ketef Hinnom silver scrolls"
    ],

    [
      "ARC-011",
      "Lachish Letters",
      "Early 6th century BCE",
      -588,
      "Levant",
      "Tel Lachish",
      "Inscribed pottery",
      "context",
      ["Jeremiah 34","Jeremiah 37","2 Kings 25"],
      "Hebrew letters written on pottery fragments associated with the final decades of the Judahite monarchy.",
      "Illuminate military communication, literacy and political conditions before the Babylonian destruction of Judah.",
      "The letters do not directly identify every event or official described in Jeremiah.",
      ["bm","iaa"],
      "Lachish letters ostraca"
    ],

    [
      "ARC-012",
      "Samaria Ostraca",
      "8th century BCE",
      -780,
      "Levant",
      "Samaria",
      "Administrative inscription",
      "context",
      ["1 Kings 16","Amos","Hosea","Micah 1"],
      "Inscribed pottery fragments recording deliveries of commodities including wine and oil.",
      "Provide evidence for administration, personal names and economic organization in the northern kingdom.",
      "They do not independently establish the specific injustices condemned by the prophets.",
      ["isac","bas"],
      "Samaria ostraca"
    ],

    [
      "ARC-013",
      "Kuntillet Ajrud Inscriptions",
      "Early 8th century BCE",
      -790,
      "Levant",
      "Northeastern Sinai",
      "Religious inscription",
      "context",
      ["Deuteronomy 6","1 Kings 18","Hosea"],
      "Inscriptions and drawings from a desert site containing religious expressions involving Yahweh and references to asherah.",
      "Illuminate the diversity of religious practice within the broader Israelite cultural environment.",
      "The meaning of asherah and its relationship to the drawings and religious expressions remain debated.",
      ["asor","bibleinterp"],
      "Kuntillet Ajrud inscriptions"
    ],

    [
      "ARC-014",
      "Deir Alla Inscription",
      "c. 800 BCE",
      -800,
      "Levant",
      "Deir Alla, Jordan",
      "Plaster inscription",
      "direct",
      ["Numbers 22","Numbers 23","Numbers 24"],
      "A fragmentary wall inscription referring to Balaam son of Beor as a visionary figure.",
      "Demonstrates that traditions about a figure sharing Balaam's name and patronymic circulated outside biblical literature.",
      "Does not independently establish the events of Numbers or the historical identity of the two literary figures.",
      ["asor","bas"],
      "Deir Alla Balaam inscription"
    ],

    [
      "ARC-015",
      "Shoshenq I Bubastite Portal",
      "Late 10th century BCE",
      -925,
      "Egypt",
      "Karnak, Egypt",
      "Monumental inscription",
      "material",
      ["1 Kings 14:25-26","2 Chronicles 12"],
      "An Egyptian monumental record associated with Shoshenq I and a campaign into the southern Levant.",
      "Provides external evidence for Egyptian military activity during the period conventionally associated with biblical Shishak.",
      "The surviving list does not unambiguously record the plundering of Jerusalem or the temple treasures.",
      ["isac","met"],
      "Shoshenq Bubastite Portal Karnak"
    ],

    [
      "ARC-016",
      "Amarna Letters",
      "14th century BCE",
      -1350,
      "Egypt",
      "Tell el-Amarna",
      "Cuneiform tablets",
      "context",
      ["Genesis","Exodus","Joshua","Judges"],
      "Diplomatic correspondence between Egypt and rulers throughout the ancient Near East, much of it written in Akkadian.",
      "Illuminates Late Bronze Age city-states, diplomacy, political instability and Egyptian influence in Canaan.",
      "The references to Habiru cannot automatically be equated with biblical Hebrews or the Israelite conquest.",
      ["bm","louvre","cdli"],
      "Amarna letters clay tablets"
    ],

    [
      "ARC-017",
      "Code of Hammurabi",
      "18th century BCE",
      -1750,
      "Mesopotamia",
      "Susa, Iran",
      "Legal monument",
      "context",
      ["Exodus 21","Exodus 22","Deuteronomy 19"],
      "A Babylonian royal law collection inscribed on a monumental stone stele and later transported to Susa.",
      "Provides comparative evidence for legal traditions, social distinctions and judicial principles of the ancient Near East.",
      "Similar laws do not by themselves establish direct literary borrowing or Mosaic authorship.",
      ["louvre","oracc"],
      "Code of Hammurabi stele"
    ],

    [
      "ARC-018",
      "Gilgamesh Flood Tablet",
      "7th century BCE copy",
      -650,
      "Mesopotamia",
      "Nineveh, Iraq",
      "Literary tablet",
      "context",
      ["Genesis 6","Genesis 7","Genesis 8","Genesis 9"],
      "A cuneiform tablet preserving the flood narrative in Tablet XI of the Epic of Gilgamesh.",
      "Provides important comparative material for ancient Near Eastern flood literature.",
      "Literary similarities cannot establish the geographical extent or historicity of the biblical flood.",
      ["bm","oracc"],
      "Gilgamesh flood tablet"
    ],

    [
      "ARC-019",
      "Atrahasis Tablets",
      "Old Babylonian period",
      -1650,
      "Mesopotamia",
      "Mesopotamia",
      "Literary tablet",
      "context",
      ["Genesis 1","Genesis 2","Genesis 6"],
      "Cuneiform witnesses to an ancient Mesopotamian composition concerning humanity, divine conflict and a flood.",
      "Provide comparative literary evidence for ancient creation and flood traditions.",
      "Comparison must distinguish literary parallels from demonstrable historical dependence.",
      ["bm","cdli"],
      "Atrahasis cuneiform tablets"
    ],

    [
      "ARC-020",
      "Babylonian Chronicle",
      "Records events of 605–594 BCE",
      -597,
      "Mesopotamia",
      "Babylonia",
      "Historical tablet",
      "direct",
      ["2 Kings 24","Jeremiah 24","Daniel 1"],
      "A Babylonian chronicle recording events from Nebuchadnezzar II's reign, including the capture of Jerusalem in 597 BCE.",
      "Provides a major external chronological anchor for Babylonian intervention in Judah and the installation of a replacement ruler.",
      "This surviving tablet does not provide a complete account of the later destruction of Jerusalem in 586 BCE.",
      ["bm","cdli"],
      "Babylonian Chronicle Jerusalem 597"
    ],

    [
      "ARC-021",
      "Jehoiachin Ration Tablets",
      "Early 6th century BCE",
      -590,
      "Mesopotamia",
      "Babylon",
      "Administrative tablets",
      "direct",
      ["2 Kings 24","2 Kings 25:27-30","Jeremiah 52"],
      "Babylonian administrative records documenting provisions allocated to Jehoiachin, king of Judah, and members of his household.",
      "Independently attest the presence of a Judahite king and his family in Babylonian exile.",
      "They do not describe every aspect of his imprisonment, release or subsequent life.",
      ["cdli","isac","inscriptions"],
      "Jehoiachin ration tablets"
    ],

    [
      "ARC-022",
      "Cyrus Cylinder",
      "539–538 BCE",
      -539,
      "Mesopotamia",
      "Babylon",
      "Royal inscription",
      "context",
      ["Ezra 1","Isaiah 44","Isaiah 45","2 Chronicles 36"],
      "A Babylonian foundation inscription issued after Cyrus II conquered Babylon.",
      "Illuminates Persian royal restoration policies and religious legitimization in the context of the return from exile.",
      "Does not explicitly mention Judah, Jerusalem or the biblical decree concerning the Jerusalem temple.",
      ["bm","oracc"],
      "Cyrus Cylinder"
    ],

    [
      "ARC-023",
      "Nabonidus Chronicle",
      "Records events of the 6th century BCE",
      -539,
      "Mesopotamia",
      "Babylonia",
      "Historical tablet",
      "direct",
      ["Daniel 5","Ezra 1"],
      "A Babylonian chronicle describing events during the reign of Nabonidus and the Persian conquest of Babylon.",
      "Provides external historical context for the transition from Babylonian to Persian rule.",
      "Does not independently attest Daniel's banquet narrative or resolve every chronological question in Daniel.",
      ["bm","cdli"],
      "Nabonidus Chronicle"
    ],

    [
      "ARC-024",
      "Nabonidus Cylinders",
      "6th century BCE",
      -550,
      "Mesopotamia",
      "Ur and other Babylonian sites",
      "Royal inscription",
      "direct",
      ["Daniel 5"],
      "Royal inscriptions of Nabonidus, including examples naming his son Belshazzar.",
      "Establish the historical existence of Belshazzar and his relationship to the Babylonian royal household.",
      "Belshazzar's precise political status and Daniel's literary presentation require separate analysis.",
      ["bm","oracc"],
      "Nabonidus cylinder Belshazzar"
    ],

    [
      "ARC-025",
      "Al-Yahudu Tablets",
      "6th–5th centuries BCE",
      -550,
      "Mesopotamia",
      "Babylonia; exact findspots uncertain",
      "Administrative tablets",
      "material",
      ["Jeremiah 29","Ezekiel","Ezra"],
      "Cuneiform documents recording economic and legal activities involving Judean communities in Babylonia.",
      "Provide evidence for daily life, settlement and economic integration among Judean exiles and their descendants.",
      "Many tablets lack documented excavation provenance. They should not be used to identify particular biblical exiles without additional evidence.",
      ["cdli","isac"],
      "Al Yahudu cuneiform tablets"
    ],

    [
      "ARC-026",
      "Elephantine Papyri",
      "5th century BCE",
      -450,
      "Egypt",
      "Elephantine, Egypt",
      "Papyrus documents",
      "context",
      ["Ezra","Nehemiah","Deuteronomy"],
      "Aramaic documents associated with a Jewish community in Persian-period Egypt.",
      "Illuminate family arrangements, religious practice, administration and a Jewish temple outside Jerusalem.",
      "The community's practices cannot automatically be generalized to every contemporary Jewish population.",
      ["pum","bm","asor"],
      "Elephantine papyri"
    ],

    [
      "ARC-027",
      "Behistun Inscription",
      "Late 6th century BCE",
      -520,
      "Persia",
      "Bisotun, Iran",
      "Rock inscription",
      "direct",
      ["Ezra 4","Ezra 5","Ezra 6","Haggai","Zechariah"],
      "A monumental multilingual inscription of Darius I describing his accession and suppression of rebellions.",
      "Provides historical and linguistic evidence for Persian imperial rule during the period of the rebuilding of the Jerusalem temple.",
      "Does not describe the temple reconstruction itself.",
      ["unesco","oracc"],
      "Behistun inscription"
    ],

    [
      "ARC-028",
      "Great Isaiah Scroll",
      "c. 2nd century BCE",
      -125,
      "Levant",
      "Qumran Cave 1",
      "Manuscript",
      "textual",
      ["Isaiah"],
      "A nearly complete ancient Hebrew manuscript of Isaiah, conventionally designated 1QIsaᵃ.",
      "Provides exceptionally important evidence for the transmission of Isaiah before the medieval Masoretic codices.",
      "Its textual differences require comparison with other witnesses. It does not independently verify the events described in Isaiah.",
      ["imjdss","dss"],
      "Great Isaiah Scroll"
    ],

    [
      "ARC-029",
      "Habakkuk Pesher",
      "Late 1st century BCE",
      -30,
      "Levant",
      "Qumran Cave 1",
      "Manuscript",
      "textual",
      ["Habakkuk 1","Habakkuk 2"],
      "An ancient interpretive manuscript containing passages from Habakkuk accompanied by explanations applied to the community's historical circumstances.",
      "Documents Second Temple Jewish interpretation and transmission of prophetic literature.",
      "Its interpretations are not necessarily identical to the original historical references intended by Habakkuk.",
      ["imjdss","dss"],
      "Habakkuk Pesher scroll"
    ],

    [
      "ARC-030",
      "Community Rule Scroll",
      "Second Temple period",
      -100,
      "Levant",
      "Qumran Cave 1",
      "Manuscript",
      "context",
      ["Matthew 3","Luke 3","Acts"],
      "A sectarian Jewish composition concerning communal organization, ritual purity and religious discipline.",
      "Illuminates the diversity of Jewish religious life before and around the emergence of Christianity.",
      "Similarities do not establish that John the Baptist or Jesus belonged to the Qumran community.",
      ["dss","imjdss"],
      "Dead Sea Scrolls Community Rule"
    ],

    [
      "ARC-031",
      "Pontius Pilate Inscription",
      "26–36 CE",
      30,
      "Levant",
      "Caesarea Maritima",
      "Administrative inscription",
      "direct",
      ["Matthew 27","Mark 15","Luke 23","John 18","John 19"],
      "A Latin inscription discovered in 1961 identifying Pontius Pilate and his position as prefect of Judaea.",
      "Provides independent physical evidence for the historical Roman administrator named in the Gospel narratives.",
      "The inscription does not describe the trial or crucifixion of Jesus.",
      ["israel","iaa","inscriptions"],
      "Pontius Pilate stone inscription"
    ],

    [
      "ARC-032",
      "Gallio Inscription",
      "c. 52 CE",
      52,
      "Greece",
      "Delphi, Greece",
      "Imperial inscription",
      "direct",
      ["Acts 18:12-17"],
      "Fragments of an imperial letter of Claudius identifying Gallio as proconsul of Achaia.",
      "Provide an important chronological anchor for Paul's stay in Corinth as described in Acts.",
      "The inscription does not mention Paul or the judicial hearing itself.",
      ["edh","inscriptions","asor"],
      "Gallio Delphi inscription"
    ],

    [
      "ARC-033",
      "Erastus Inscription",
      "Roman imperial period",
      75,
      "Greece",
      "Corinth",
      "Pavement inscription",
      "disputed",
      ["Romans 16:23","Acts 19:22","2 Timothy 4:20"],
      "A Latin pavement inscription naming an Erastus associated with the office of aedile.",
      "Demonstrates the presence of a civic official bearing a name also found in Pauline literature.",
      "The identification of this official with Paul's Erastus is debated, as are chronological and administrative questions.",
      ["asor","edh"],
      "Erastus inscription Corinth"
    ],

    [
      "ARC-034",
      "Jerusalem Temple Warning Inscription",
      "Second Temple period",
      1,
      "Levant",
      "Jerusalem",
      "Greek inscription",
      "context",
      ["Acts 21:27-29","Ephesians 2:14"],
      "A Greek warning inscription restricting unauthorized access beyond a boundary within the Jerusalem temple precinct.",
      "Illustrates the historical system of access restrictions associated with the Second Temple.",
      "Does not directly record Paul's arrest or determine the intended metaphorical meaning of Ephesians.",
      ["inscriptions","israel"],
      "Jerusalem temple warning inscription"
    ],

    [
      "ARC-035",
      "Pool of Siloam",
      "Second Temple period phases",
      1,
      "Levant",
      "Jerusalem",
      "Water installation",
      "material",
      ["John 9"],
      "Archaeological remains of a large stepped pool in southern ancient Jerusalem.",
      "Provide physical evidence for a substantial water installation associated with the historical setting of John's account.",
      "Identification of a location does not independently establish the healing narrative.",
      ["iaa","jjar","hadashot"],
      "Pool of Siloam archaeology"
    ],

    [
      "ARC-036",
      "Pool of Bethesda",
      "Ancient and Roman period phases",
      1,
      "Levant",
      "Jerusalem",
      "Water installation",
      "material",
      ["John 5:1-9"],
      "Ancient pool structures near the traditional location of the Sheep Gate and later healing-related installations.",
      "Provide archaeological context for the pool complex mentioned in John.",
      "The precise architectural sequence requires reconstruction; the site does not establish the reported miracle.",
      ["iaa","jjar","bas"],
      "Pool of Bethesda archaeological ruins"
    ],

    [
      "ARC-037",
      "Caiaphas Ossuary",
      "1st century CE",
      40,
      "Levant",
      "Jerusalem",
      "Burial artifact",
      "disputed",
      ["Matthew 26","John 11:49","John 18"],
      "An inscribed limestone ossuary associated with a burial complex discovered in 1990 and bearing a name commonly rendered Joseph son of Caiaphas.",
      "Provides possible material evidence connected with the family of the high priest Caiaphas.",
      "Identification with the particular high priest described in the Gospels is plausible but not conclusively established by the inscription alone.",
      ["israel","iaa","inscriptions"],
      "Caiaphas ossuary"
    ],

    [
      "ARC-038",
      "Yehohanan Crucifixion Remains",
      "1st century CE",
      40,
      "Levant",
      "Givat HaMivtar, Jerusalem",
      "Human burial remains",
      "material",
      ["Matthew 27","Mark 15","Luke 23","John 19"],
      "Burial remains of a man whose heel bone preserved an iron nail associated with Roman crucifixion.",
      "Provide rare physical evidence for crucifixion practices and burial of an executed person in Roman-period Judaea.",
      "The remains are not those of Jesus and cannot establish an identical procedure in every crucifixion.",
      ["iaa","israel","bas"],
      "Yehohanan crucifixion archaeology"
    ],

    [
      "ARC-039",
      "Arch of Titus",
      "c. 81 CE",
      81,
      "Italy",
      "Rome",
      "Triumphal monument",
      "material",
      ["Matthew 24","Mark 13","Luke 21"],
      "A Roman monument commemorating Flavian victory, with reliefs depicting spoils associated with the Jerusalem temple.",
      "Provides material and visual evidence for Roman commemoration of the conquest of Jerusalem in 70 CE.",
      "The reliefs express imperial ideology and do not independently establish theological interpretations of Jesus' predictions.",
      ["unesco","met","perseus"],
      "Arch of Titus menorah relief"
    ],

    [
      "ARC-040",
      "Judaea Capta Coins",
      "After 70 CE",
      71,
      "Roman Empire",
      "Multiple Roman mints",
      "Coinage",
      "direct",
      ["Matthew 24","Luke 21"],
      "Roman coins commemorating victory over Judaea following the Jewish revolt.",
      "Provide contemporary material evidence for imperial representation of the conquest.",
      "Coin imagery is political propaganda rather than an impartial account of the war.",
      ["bm","met"],
      "Judaea Capta Roman coins"
    ],

    [
      "ARC-041",
      "Magdala Synagogue",
      "1st century CE",
      30,
      "Levant",
      "Migdal, Galilee",
      "Religious architecture",
      "context",
      ["Matthew 4:23","Mark 1:21","Luke 4:15"],
      "A synagogue complex from the Second Temple period associated with a decorated stone bearing religious imagery.",
      "Illuminates synagogue architecture and Jewish communal life in early Roman Galilee.",
      "There is no archaeological proof that Jesus personally taught within this particular building.",
      ["iaa","hadashot","bas"],
      "Magdala synagogue stone"
    ],

    [
      "ARC-042",
      "Capernaum Synagogue",
      "Late Roman or Byzantine period",
      400,
      "Levant",
      "Capernaum",
      "Religious architecture",
      "context",
      ["Mark 1:21","Luke 4:31","John 6:59"],
      "A monumental limestone synagogue built over earlier remains at ancient Capernaum.",
      "Documents the continuing religious significance and settlement history of the town.",
      "The visible limestone building is later than Jesus' lifetime. The interpretation of earlier underlying structures requires care.",
      ["iaa","asor"],
      "Capernaum synagogue archaeology"
    ],

    [
      "ARC-043",
      "Theatre of Ephesus",
      "Hellenistic and Roman phases",
      50,
      "Anatolia",
      "Ephesus, Türkiye",
      "Public architecture",
      "material",
      ["Acts 19:23-41"],
      "A large ancient theatre developed through Hellenistic and Roman construction phases.",
      "Provides physical context for the urban assembly and public disturbance described in Acts.",
      "Its existence does not independently demonstrate that the particular gathering involving Paul's associates occurred.",
      ["unesco","asor"],
      "Ephesus Great Theatre"
    ],

    [
      "ARC-044",
      "Temple of Artemis at Ephesus",
      "Multiple ancient construction phases",
      -350,
      "Anatolia",
      "Ephesus, Türkiye",
      "Religious architecture",
      "context",
      ["Acts 19:23-41"],
      "Remains and artifacts associated with the celebrated sanctuary of Artemis at Ephesus.",
      "Document the importance of the Artemis cult within the city's religious and economic environment.",
      "Archaeological evidence does not establish the historical details of the silversmiths' disturbance in Acts.",
      ["bm","unesco"],
      "Temple of Artemis Ephesus archaeology"
    ],

    [
      "ARC-045",
      "Corinth Bema",
      "Roman imperial period",
      50,
      "Greece",
      "Ancient Corinth",
      "Civic architecture",
      "context",
      ["Acts 18:12-17"],
      "A raised public platform situated within the Roman forum of Corinth.",
      "Illustrates the civic and judicial environment of Roman Corinth.",
      "Identification of this exact platform as the location of Paul's hearing cannot be independently demonstrated.",
      ["asor","bas"],
      "Corinth Bema archaeology"
    ],

    [
      "ARC-046",
      "Royal Cemetery of Ur",
      "c. 2600–2450 BCE",
      -2500,
      "Mesopotamia",
      "Ur, Iraq",
      "Burial complex",
      "context",
      ["Genesis 11:28-31","Genesis 12"],
      "Elite Mesopotamian tombs containing elaborate burial goods and evidence of royal funerary practices.",
      "Illuminate the longstanding urban civilization associated with southern Mesopotamia.",
      "The cemetery predates most proposed patriarchal chronologies and provides no direct evidence for Abraham.",
      ["penn","bm"],
      "Royal Cemetery Ur artifacts"
    ],

    [
      "ARC-047",
      "Ziggurat of Ur",
      "c. 21st century BCE",
      -2100,
      "Mesopotamia",
      "Ur, Iraq",
      "Religious architecture",
      "context",
      ["Genesis 11"],
      "A monumental stepped temple platform associated with the Third Dynasty of Ur and the cult of the moon god Nanna.",
      "Illustrates Mesopotamian monumental religious architecture.",
      "It is not identified as the biblical Tower of Babel and does not establish Abraham's presence.",
      ["penn","bm","unesco"],
      "Great Ziggurat of Ur"
    ],

    [
      "ARC-048",
      "Etemenanki Ziggurat",
      "Especially 1st millennium BCE",
      -600,
      "Mesopotamia",
      "Babylon",
      "Religious architecture",
      "context",
      ["Genesis 11:1-9"],
      "The Babylonian temple tower associated with the sanctuary of Marduk, known through texts and archaeological remains.",
      "Provides a meaningful architectural and cultural comparison for the Tower of Babel narrative.",
      "Literary comparison does not establish that Genesis describes this particular structure or a historical confusion of languages.",
      ["oracc","unesco","bm"],
      "Etemenanki Babylon archaeological remains"
    ],

    [
      "ARC-049",
      "Megiddo Six-Chambered Gate",
      "Iron Age",
      -950,
      "Levant",
      "Tel Megiddo",
      "Fortification",
      "disputed",
      ["1 Kings 9:15","2 Kings 23:29"],
      "A monumental gate complex belonging to the Iron Age occupation of Megiddo.",
      "Provides evidence for organized urban construction at an important strategic location.",
      "The gate's dating and attribution to Solomon or a later political administration are debated.",
      ["isac","asor","unesco"],
      "Megiddo six chambered gate"
    ],

    [
      "ARC-050",
      "Hazor Late Bronze Age Destruction",
      "Late Bronze Age",
      -1250,
      "Levant",
      "Tel Hazor",
      "Destruction layer",
      "disputed",
      ["Joshua 11","Judges 4"],
      "Excavations reveal substantial destruction affecting the Late Bronze Age city.",
      "Establishes that a major urban center experienced violent destruction during the transition toward the Iron Age.",
      "The identity of the destroyers and relationship to Joshua remain debated. Destruction alone does not identify its perpetrators.",
      ["asor","iaa","unesco"],
      "Hazor Bronze Age destruction archaeology"
    ],

    [
      "ARC-051",
      "Jericho Fortifications",
      "Multiple occupation periods",
      -1550,
      "Levant",
      "Tell es-Sultan",
      "Fortification",
      "disputed",
      ["Joshua 2","Joshua 6"],
      "Ancient settlement remains include fortifications and destruction deposits from different chronological periods.",
      "Document the long and complex occupation history of Jericho.",
      "Chronological disagreements and the nature of Late Bronze Age occupation prevent a simple identification of a particular destruction layer with Joshua.",
      ["unesco","asor","bibleinterp"],
      "Tell es Sultan Jericho excavations"
    ],

    [
      "ARC-052",
      "Broad Wall of Jerusalem",
      "Late 8th century BCE",
      -700,
      "Levant",
      "Jerusalem",
      "Fortification",
      "material",
      ["2 Chronicles 32:5","Isaiah 22:10"],
      "A substantial ancient wall discovered in Jerusalem's Jewish Quarter.",
      "Supports the existence of major defensive construction during the late Iron Age.",
      "The remains carry no inscription directly identifying the king who authorized their construction.",
      ["jjar","iaa"],
      "Jerusalem Broad Wall archaeology"
    ],

    [
      "ARC-053",
      "Stepped Stone Structure",
      "Iron Age phases; chronology debated",
      -1000,
      "Levant",
      "Jerusalem",
      "Monumental architecture",
      "disputed",
      ["2 Samuel 5","1 Kings 9"],
      "A prominent stepped stone construction on the eastern slope of ancient Jerusalem.",
      "Provides evidence for substantial architectural activity at the early urban site.",
      "The dating, function and association with Davidic royal construction remain contested.",
      ["jjar","iaa","bibleinterp"],
      "Stepped Stone Structure Jerusalem"
    ],

    [
      "ARC-054",
      "Masada",
      "Herodian and early Roman periods",
      50,
      "Levant",
      "Judaean Desert",
      "Fortress",
      "context",
      ["Matthew 2","Luke 1:5"],
      "A fortified desert complex extensively developed by Herod the Great and later occupied during the Jewish revolt.",
      "Illuminates Herodian architecture, Roman siege archaeology and ancient Jewish life.",
      "Its principal revolt history belongs to the post-New Testament Gospel setting, with literary and archaeological evidence requiring comparison.",
      ["unesco","iaa"],
      "Masada Herodian archaeological ruins"
    ],

    [
      "ARC-055",
      "LMLK Stamp Impressions",
      "Late 8th century BCE",
      -710,
      "Levant",
      "Judah; multiple sites",
      "Stamped pottery",
      "context",
      ["2 Kings 18","2 Chronicles 32","Micah"],
      "Storage-jar handles bearing royal stamp impressions containing the letters LMLK.",
      "Provide evidence for centralized administration and commodity distribution in Iron Age Judah.",
      "The precise administrative purpose and relationship to Assyrian campaign preparations remain subjects of investigation.",
      ["iaa","israel","jjar"],
      "LMLK stamped jar handles"
    ],

    [
      "ARC-056",
      "Samaria Capital and Palace Remains",
      "Iron Age",
      -850,
      "Levant",
      "Sebastia, Samaria",
      "Royal architecture",
      "material",
      ["1 Kings 16:24","Amos 3","Micah 1:5-7"],
      "Excavated architectural remains document the development of Samaria as a major royal center.",
      "Provide material context for the northern kingdom's capital and elite institutions.",
      "Assigning particular structures to individual kings depends on chronology and architectural interpretation.",
      ["asor","isac","bas"],
      "Ancient Samaria palace archaeology"
    ],

    [
      "ARC-057",
      "Samaria Ivories",
      "9th–8th centuries BCE",
      -800,
      "Levant",
      "Samaria",
      "Decorative artifact",
      "context",
      ["1 Kings 22:39","Amos 3:15","Amos 6:4"],
      "Carved ivory fragments associated with the elite material culture of Samaria.",
      "Illustrate luxury furnishings, artistic exchange and the wealth of royal environments.",
      "The ivory fragments cannot be assigned to particular biblical pieces of furniture or specific acts of exploitation.",
      ["israel","bm","asor"],
      "Samaria carved ivory artifacts"
    ],

    [
      "ARC-058",
      "Sargon II Royal Inscriptions",
      "722–705 BCE",
      -720,
      "Mesopotamia",
      "Khorsabad and other Assyrian sites",
      "Royal inscription",
      "direct",
      ["2 Kings 17","Isaiah 20:1","Micah 1"],
      "Assyrian royal records describing Sargon II's campaigns, including claims concerning Samaria and activity in the southern Levant.",
      "Provide evidence for Assyrian imperial domination and deportation practices associated with the northern kingdom's collapse.",
      "The exact division of responsibility for Samaria's conquest between Shalmaneser V and Sargon II requires comparison of multiple sources.",
      ["rinap","oracc","isac"],
      "Sargon II Khorsabad inscriptions"
    ],

    [
      "ARC-059",
      "Tiglath-Pileser III Annals",
      "745–727 BCE",
      -735,
      "Mesopotamia",
      "Nimrud and other Assyrian sites",
      "Royal inscription",
      "direct",
      ["2 Kings 15","2 Kings 16","Isaiah 7"],
      "Assyrian royal records documenting campaigns, tribute and political control in the Levant.",
      "Independently identify rulers and geopolitical circumstances associated with the expansion of Assyria during the biblical monarchy.",
      "The inscriptions are royal accounts and must be interpreted alongside chronological and textual evidence.",
      ["rinap","bm","oracc"],
      "Tiglath Pileser III inscriptions"
    ],

    [
      "ARC-060",
      "Beth Shean Egyptian Monuments",
      "Late Bronze Age",
      -1250,
      "Levant",
      "Beth Shean",
      "Monumental inscription",
      "context",
      ["Joshua 17:11","Judges 1:27","1 Samuel 31"],
      "Egyptian monuments and architectural remains associated with an administrative center in Canaan.",
      "Provide evidence for Egyptian influence and political control in the region during the Late Bronze Age.",
      "The Egyptian remains do not independently establish Saul's death or the events described in 1 Samuel 31.",
      ["penn","israel","iaa"],
      "Beth Shean Egyptian stelae"
    ]

  ].map(row => ({
    id:row[0],
    title:row[1],
    date:row[2],
    year:row[3],
    region:row[4],
    location:row[5],
    type:row[6],
    evidence:row[7],
    references:row[8],
    description:row[9],
    significance:row[10],
    limitations:row[11],
    sources:row[12],
    imageQuery:row[13]
  }));

  const methods = [
    [
      "Stratigraphy",
      "Analyzes relationships between archaeological deposits, structures and occupation layers.",
      "Disturbed deposits, intrusive objects and later construction may complicate interpretation."
    ],
    [
      "Radiocarbon dating",
      "Estimates the age of suitable organic material through measurement of radioactive carbon.",
      "Requires calibration, suitable samples and careful association with the archaeological event being investigated."
    ],
    [
      "Ceramic typology",
      "Compares pottery forms, manufacture and decoration with established chronological sequences.",
      "Regional variation and long-lived forms limit chronological precision."
    ],
    [
      "Epigraphy",
      "Studies inscriptions, scripts, languages and their historical contexts.",
      "Damaged texts, uncertain readings and restored letters must be identified."
    ],
    [
      "Palaeography",
      "Examines the development and characteristics of historical writing systems.",
      "Script dating usually provides ranges rather than exact calendar years."
    ],
    [
      "Numismatics",
      "Studies coins, their inscriptions, imagery, production and circulation.",
      "A coin's production date does not necessarily equal the date of the deposit containing it."
    ],
    [
      "Provenance and provenience",
      "Examines an artifact's ownership history and its precise archaeological find context.",
      "Unprovenanced objects may have lost essential contextual information and present authenticity risks."
    ],
    [
      "Archaeobotany",
      "Investigates ancient plant remains to reconstruct diet, agriculture and environmental conditions.",
      "Preservation and sampling biases influence surviving evidence."
    ],
    [
      "Zooarchaeology",
      "Studies animal remains to investigate food practices, economy and environmental relationships.",
      "Animal bone assemblages do not independently establish ethnic identity."
    ],
    [
      "Historical geography",
      "Compares ancient texts, geography, settlement patterns and archaeological locations.",
      "Similar place names and changing settlement locations may complicate identification."
    ],
    [
      "Architectural analysis",
      "Studies buildings, construction techniques, modifications and spatial organization.",
      "Function and ownership cannot always be determined from architecture alone."
    ],
    [
      "Source criticism",
      "Evaluates the origin, purpose, audience and reliability of written evidence.",
      "Royal records and religious literature may express particular ideological perspectives."
    ],
    [
      "Material culture",
      "Examines artifacts and physical remains as evidence of human behavior.",
      "Artifact styles cannot automatically be equated with particular ethnic or religious identities."
    ],
    [
      "Archaeological survey",
      "Documents settlement distributions and surface remains across geographical regions.",
      "Surface visibility, sampling and chronological resolution affect the results."
    ],
    [
      "Experimental archaeology",
      "Tests possible ancient techniques through controlled reconstruction and experimentation.",
      "A successful experiment demonstrates feasibility, not necessarily the exact historical method used."
    ]
  ];

  const books = [
    ["Genesis",50],["Exodus",40],
    ["Leviticus",27],["Numbers",36],
    ["Deuteronomy",34],["Joshua",24],
    ["Judges",21],["Ruth",4],
    ["1 Samuel",31],["2 Samuel",24],
    ["1 Kings",22],["2 Kings",25],
    ["1 Chronicles",29],["2 Chronicles",36],
    ["Ezra",10],["Nehemiah",13],
    ["Esther",10],["Job",42],
    ["Psalms",150],["Proverbs",31],
    ["Ecclesiastes",12],["Song of Solomon",8],
    ["Isaiah",66],["Jeremiah",52],
    ["Lamentations",5],["Ezekiel",48],
    ["Daniel",12],["Hosea",14],
    ["Joel",3],["Amos",9],
    ["Obadiah",1],["Jonah",4],
    ["Micah",7],["Nahum",3],
    ["Habakkuk",3],["Zephaniah",3],
    ["Haggai",2],["Zechariah",14],
    ["Malachi",4],["Matthew",28],
    ["Mark",16],["Luke",24],
    ["John",21],["Acts",28],
    ["Romans",16],["1 Corinthians",16],
    ["2 Corinthians",13],["Galatians",6],
    ["Ephesians",6],["Philippians",4],
    ["Colossians",4],["1 Thessalonians",5],
    ["2 Thessalonians",3],["1 Timothy",6],
    ["2 Timothy",4],["Titus",3],
    ["Philemon",1],["Hebrews",13],
    ["James",5],["1 Peter",5],
    ["2 Peter",3],["1 John",5],
    ["2 John",1],["3 John",1],
    ["Jude",1],["Revelation",22]
  ];

  const root = document.createElement("div");

  root.className = "dbar";

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>

      .dbar{
        color:#f1efe7;
        line-height:1.65;
      }

      .dbar *{
        box-sizing:border-box;
      }

      .dbar h2,.dbar h3,.dbar h4{
        color:#e0c38a;
        margin-top:0;
      }

      .dbar .arHero{
        padding:30px;
        border:1px solid #645337;
        border-radius:18px;
        background:
          radial-gradient(
            ellipse at top right,
            #ac88434d,
            transparent 65%
          ),
          linear-gradient(
            135deg,#22221c,#141511
          );
      }

      .dbar .arEyebrow{
        color:#c9aa70;
        font-size:11px;
        letter-spacing:3px;
      }

      .dbar .arHero h2{
        font-size:clamp(30px,5vw,46px);
        margin:12px 0;
      }

      .dbar .arMuted{
        color:#aaa99e;
      }

      .dbar .arPanel{
        background:#191a17;
        border:1px solid #34352e;
        border-radius:14px;
        padding:18px;
        margin-top:18px;
      }

      .dbar .arStats{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(110px,1fr));
        gap:12px;
        margin-top:22px;
      }

      .dbar .arStat{
        background:#25251f;
        border:1px solid #494335;
        border-radius:11px;
        padding:14px;
      }

      .dbar .arStat strong{
        display:block;
        font-size:28px;
        color:#e0c38a;
      }

      .dbar .arGrid{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));
        gap:16px;
      }

      .dbar .arCard{
        border:1px solid #454337;
        background:#20211d;
        border-radius:13px;
        padding:18px;
        min-width:0;
        transition:border-color .2s;
      }

      .dbar .arCard:hover{
        border-color:#8b7650;
      }

      .dbar .arIcon{
        width:48px;
        height:48px;
        display:grid;
        place-items:center;
        font-size:25px;
        border:1px solid #65563a;
        border-radius:10px;
        background:#383126;
        margin-bottom:15px;
      }

      .dbar .arTabs,.dbar .arActions{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin:14px 0;
      }

      .dbar button,.dbar input,
      .dbar select,.dbar textarea{
        font:inherit;
        background:#25261f;
        color:#f1efe7;
        padding:10px 12px;
        border:1px solid #504b3d;
        border-radius:8px;
      }

      .dbar button{
        cursor:pointer;
      }

      .dbar button:hover,
      .dbar button:focus-visible{
        background:#403627;
        border-color:#c9aa70;
      }

      .dbar button:disabled{
        opacity:.4;
        cursor:default;
      }

      .dbar button.arActive{
        background:#59482c;
        border-color:#d1b579;
      }

      .dbar input,.dbar select,
      .dbar textarea{
        width:100%;
      }

      .dbar textarea{
        min-height:180px;
        resize:vertical;
      }

      .dbar a{
        color:#e0c38a;
        overflow-wrap:anywhere;
      }

      .dbar .arControls{
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(145px,1fr));
        gap:12px;
        margin:15px 0;
      }

      .dbar .arTag{
        display:inline-block;
        border:1px solid #665638;
        border-radius:20px;
        color:#ddc18a;
        padding:4px 9px;
        font-size:12px;
        margin:3px 3px 3px 0;
      }

      .dbar .arLimit{
        border-left:3px solid #c9aa70;
        background:#302a20;
        border-radius:5px;
        padding:12px;
        color:#dfd0b5;
        margin:12px 0;
      }

      .dbar .arEvidence{
        border-left:3px solid #8ea68a;
        background:#262e24;
        border-radius:5px;
        padding:12px;
        margin:12px 0;
      }

      .dbar .arTimeline{
        border-left:2px solid #826d47;
        margin-left:12px;
        padding-left:22px;
      }

      .dbar .arEvent{
        position:relative;
        margin-bottom:16px;
        padding:15px;
        border:1px solid #454337;
        border-radius:10px;
        background:#20211d;
      }

      .dbar .arEvent:before{
        content:"";
        position:absolute;
        left:-29px;
        top:25px;
        width:11px;
        height:11px;
        border-radius:50%;
        background:#c9aa70;
        border:2px solid #191a17;
      }

      .dbar .arEntry{
        padding:16px 0;
        border-bottom:1px solid #34352e;
      }

      .dbar .arReference{
        border-bottom:1px solid #454337;
        padding:10px 0;
      }

      .dbar .arTableWrap{
        overflow-x:auto;
      }

      .dbar table{
        width:100%;
        border-collapse:collapse;
      }

      .dbar td,.dbar th{
        padding:10px;
        border-bottom:1px solid #454337;
        text-align:left;
        vertical-align:top;
      }

      @media(max-width:650px){

        .dbar .arHero{
          padding:22px 15px;
        }

        .dbar .arGrid{
          grid-template-columns:1fr;
        }

        .dbar .arPanel{
          padding:14px;
        }
      }

    </style>

    <section class="arHero">

      <div class="arEyebrow">
        DESERTBIBLE • MATERIAL EVIDENCE
      </div>

      <h2>Biblical Archaeology</h2>

      <p>
        Unearth the historical world of Scripture.
        Investigate ancient inscriptions,
        excavations, monuments, manuscripts
        and material culture through
        documented archaeological evidence.
      </p>

      <div class="arStats">

        <div class="arStat">
          <strong id="arRecordCount"></strong>
          Evidence records
        </div>

        <div class="arStat">
          <strong id="arSourceCount"></strong>
          Research resources
        </div>

        <div class="arStat">
          <strong id="arRegionCount"></strong>
          Geographic regions
        </div>

        <div class="arStat">
          <strong>66</strong>
          Book selections
        </div>

      </div>

    </section>

    <section class="arPanel">

      <h3>Archaeological Research Workspace</h3>

      <div class="arTabs">

        <button data-ar-tab="catalogue">
          Artifact catalogue
        </button>

        <button data-ar-tab="sites">
          Excavation explorer
        </button>

        <button data-ar-tab="timeline">
          Evidence timeline
        </button>

        <button data-ar-tab="scripture">
          Biblical connections
        </button>

        <button data-ar-tab="methods">
          Research methods
        </button>

        <button data-ar-tab="library">
          Museum and research library
        </button>

        <button data-ar-tab="saved">
          Saved evidence
        </button>

        <button data-ar-tab="notes">
          Research notebook
        </button>

      </div>

      <div id="arOutput"></div>

    </section>

    <section class="arPanel">

      <h3>Archaeological Evidence Standards</h3>

      <div id="arStandards" class="arGrid"></div>

      <p class="arLimit">
        Archaeology can establish material
        circumstances and independently attest
        historical people, institutions and events.
        It cannot independently establish divine
        intervention, inspiration or the theological
        truth of a passage.
      </p>

      <button id="arClose">
        Close Archaeology
      </button>

    </section>
  `;

  const $ = id => root.querySelector("#" + id);

  const output = $("arOutput");

  const storageKey =
    "DesertBible.archaeology.v1";

  const regions = Array.from(
    new Set(records.map(record => record.region))
  ).sort();

  const types = Array.from(
    new Set(records.map(record => record.type))
  ).sort();

  let saved = [];
  let notes = "";
  let view = "catalogue";
  let selected = null;

  let filters = {
    search:"",
    region:"",
    type:"",
    evidence:"",
    period:"",
    sort:"featured"
  };

  let page = 1;
  const pageSize = 12;

  let bookIndex = 32;
  let chapter = 1;

  let requestCounter = 0;

  try {

    const previous = JSON.parse(
      localStorage.getItem(storageKey) || "{}"
    );

    saved = Array.isArray(previous.saved)
      ? previous.saved.filter(
          id => records.some(r => r.id === id)
        )
      : [];

    notes = typeof previous.notes === "string"
      ? previous.notes : "";

  } catch(error) {
    console.warn(
      "Archaeology storage:",error
    );
  }

  function make(tag,text="",className="") {

    const el = document.createElement(tag);

    el.textContent = text;

    if(className) {
      el.className = className;
    }

    return el;
  }

  function button(text,handler) {

    const el = make("button",text);

    el.type = "button";

    el.addEventListener("click",handler);

    return el;
  }

  function link(text,url) {

    const el = make("a",text);

    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";

    return el;
  }

  function field(parent,label,value) {

    const p = make("p");

    p.append(
      make("strong",label + ": "),
      document.createTextNode(String(value))
    );

    parent.appendChild(p);
  }

  function actions(parent,items) {

    const row = make(
      "div","","arActions"
    );

    row.append(...items);

    parent.appendChild(row);

    return row;
  }

  function selectControl(items,value,onChange) {

    const select = make("select");

    items.forEach(item => {

      const option = make(
        "option",item[1]
      );

      option.value = item[0];

      select.appendChild(option);
    });

    select.value = value;

    select.addEventListener(
      "change",
      () => onChange(select.value)
    );

    return select;
  }

  function control(parent,name,element) {

    const label = make("label",name);

    label.appendChild(element);

    parent.appendChild(label);
  }

  function saveStorage() {

    try {

      localStorage.setItem(
        storageKey,
        JSON.stringify({saved,notes})
      );

      return true;

    } catch(error) {
      return false;
    }
  }

  function toggleSaved(id,element) {

    if(saved.includes(id)) {
      saved = saved.filter(value => value !== id);
    } else {
      saved.push(id);
    }

    if(!saveStorage()) {
      alert(
        "Browser storage unavailable. " +
        "Download your research before leaving."
      );
    }

    if(element) {

      element.textContent = saved.includes(id)
        ? "Remove bookmark"
        : "Bookmark evidence";
    }

    if(view === "saved") {
      render();
    }
  }

  function download(text,name) {

    const blob = new Blob(
      [text],
      {type:"text/plain;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = name;

    document.body.appendChild(a);

    a.click();
    a.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );
  }

  async function copyText(text) {

    try {

      await navigator.clipboard.writeText(text);

      alert("Research record copied.");

    } catch(error) {

      download(
        text,
        "DesertBible-archaeology-record.txt"
      );
    }
  }

  function report(record) {

    return [
      "DESERTBIBLE ARCHAEOLOGICAL RESEARCH",
      "",
      record.id + " — " + record.title,
      "Date: " + record.date,
      "Findspot: " + record.location,
      "Region: " + record.region,
      "Physical type: " + record.type,
      "Evidence classification: " +
        evidence[record.evidence].title,
      "",
      "Biblical connections:",
      record.references.join("; "),
      "",
      "Description:",
      record.description,
      "",
      "Historical significance:",
      record.significance,
      "",
      "Evidence limitations:",
      record.limitations,
      "",
      "Research resources:",
      ...record.sources.map(
        key => sources[key].join(" — ")
      ),
      "",
      "Record accessed: " +
        new Date().toISOString().slice(0,10),
      "",
      "Editorial research summary. Consult original publications before academic citation."
    ].join("\n");
  }

  function imageURL(record) {

    return "https://commons.wikimedia.org/" +
      "w/index.php?title=Special:MediaSearch" +
      "&type=image&search=" +
      encodeURIComponent(record.imageQuery);
  }

  function mapURL(location) {

    return "https://www.google.com/maps/search/" +
      "?api=1&query=" +
      encodeURIComponent(location);
  }

  function iconFor(record) {

    if(record.type.includes("inscription")) {
      return "𒀭";
    }

    if(record.type.includes("tablet")) {
      return "▤";
    }

    if(record.type.includes("Manuscript")) {
      return "📜";
    }

    if(record.type.includes("architecture") ||
       record.type.includes("Fortification")) {
      return "🏛";
    }

    if(record.type.includes("Coin")) {
      return "◉";
    }

    return "◇";
  }

  function recordCard(record) {

    const card = make(
      "article","","arCard"
    );

    card.append(
      make(
        "div",
        iconFor(record),
        "arIcon"
      ),
      make(
        "small",
        record.id,
        "arMuted"
      ),
      make("h3",record.title),
      make("span",record.date,"arTag"),
      make("span",record.region,"arTag")
    );

    field(
      card,
      "Evidence",
      evidence[record.evidence].title
    );

    field(card,"Findspot",record.location);

    card.append(
      make("p",record.description),
      make(
        "p",
        record.references.join(" • "),
        "arMuted"
      )
    );

    const saveButton = button(
      saved.includes(record.id)
        ? "Remove bookmark"
        : "Bookmark evidence",
      () => toggleSaved(record.id,saveButton)
    );

    actions(card,[
      button("Investigate evidence",() => {

        selected = record.id;

        render();
      }),
      saveButton
    ]);

    card.appendChild(
      link(
        "Explore artifact photographs",
        imageURL(record)
      )
    );

    return card;
  }

  function recordDetail(record) {

    output.appendChild(
      button("← Return to research results",() => {

        selected = null;

        render();
      })
    );

    const detail = make(
      "article","","arPanel"
    );

    detail.append(
      make(
        "small",
        record.id,
        "arMuted"
      ),
      make("h2",record.title),
      make("span",record.date,"arTag"),
      make("span",record.region,"arTag"),
      make("span",record.type,"arTag")
    );

    field(
      detail,
      "Findspot",
      record.location
    );

    field(
      detail,
      "Evidence classification",
      evidence[record.evidence].title
    );

    detail.append(
      make("h3","Artifact description"),
      make("p",record.description),
      make("h3","Historical significance"),
      make(
        "p",
        record.significance,
        "arEvidence"
      ),
      make("h3","Limitations and uncertainties"),
      make(
        "p",
        record.limitations,
        "arLimit"
      ),
      make("h3","Biblical connections")
    );

    record.references.forEach(reference => {

      const row = make(
        "div","","arReference"
      );

      row.appendChild(
        link(
          reference,
          "https://www.stepbible.org/?q=" +
          encodeURIComponent(
            "reference=" + reference
          )
        )
      );

      detail.appendChild(row);
    });

    detail.appendChild(
      make("h3","Photographs and location")
    );

    actions(detail,[
      link(
        "Find artifact photographs",
        imageURL(record)
      ),
      link(
        "Explore geographic findspot",
        mapURL(record.location)
      )
    ]);

    detail.append(
      make(
        "p",
        "Geographic links identify the named location, not necessarily an exact excavation trench.",
        "arMuted"
      ),
      make("h3","Research resources")
    );

    record.sources.forEach(key => {

      const source = sources[key];

      const p = make("p");

      p.appendChild(
        link(source[0],source[1])
      );

      detail.appendChild(p);
    });

    detail.appendChild(
      make(
        "p",
        "Resource links include institutional collections and research gateways. Search the artifact name in the relevant collection. These are not all item-level excavation citations.",
        "arMuted"
      )
    );

    detail.appendChild(
      make("h3","Research citation")
    );

    const citation = make("textarea");

    citation.value = report(record);

    citation.readOnly = true;

    detail.appendChild(citation);

    const saveButton = button(
      saved.includes(record.id)
        ? "Remove bookmark"
        : "Bookmark evidence",
      () => toggleSaved(record.id,saveButton)
    );

    actions(detail,[
      saveButton,

      button("Copy research record",() => {
        copyText(report(record));
      }),

      button("Download evidence record",() => {

        download(
          report(record),
          record.id + "-research.txt"
        );
      }),

      button("Add to notebook",() => {

        notes +=
          (notes ? "\n\n" : "") +
          report(record);

        saveStorage();

        selected = null;
        view = "notes";

        render();
      })
    ]);

    output.appendChild(detail);

    detail.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }

  function matchesPeriod(record,period) {

    if(period === "bronze") {
      return record.year < -1200;
    }

    if(period === "iron") {
      return record.year >= -1200 &&
        record.year < -586;
    }

    if(period === "exile") {
      return record.year >= -586 &&
        record.year < -332;
    }

    if(period === "hellenistic") {
      return record.year >= -332 &&
        record.year < -63;
    }

    if(period === "roman") {
      return record.year >= -63;
    }

    return true;
  }

  function filteredRecords() {

    const query =
      filters.search.trim().toLowerCase();

    const list = records.filter(record => {

      const text = [
        record.title,
        record.location,
        record.region,
        record.date,
        record.type,
        record.description,
        record.significance,
        record.limitations,
        record.references.join(" "),
        evidence[record.evidence].title
      ].join(" ").toLowerCase();

      return (
        !query || text.includes(query)
      ) && (
        !filters.region ||
        record.region === filters.region
      ) && (
        !filters.type ||
        record.type === filters.type
      ) && (
        !filters.evidence ||
        record.evidence === filters.evidence
      ) && matchesPeriod(
        record,
        filters.period
      );
    });

    if(filters.sort === "oldest") {
      list.sort((a,b) => a.year-b.year);
    }

    if(filters.sort === "newest") {
      list.sort((a,b) => b.year-a.year);
    }

    if(filters.sort === "name") {
      list.sort((a,b) =>
        a.title.localeCompare(b.title)
      );
    }

    return list;
  }

  function renderCatalogue() {

    output.append(
      make("h3","Archaeological Evidence Catalogue"),

      make(
        "p",
        "Search discoveries by name, biblical reference, location, period or evidence classification."
      )
    );

    const search = make("input");

    search.value = filters.search;

    search.placeholder =
      "Search Micah, Lachish, Assyria, Pilate...";

    output.appendChild(search);

    const controls = make(
      "div","","arControls"
    );

    const results = make("div");

    function update(key,value) {

      filters[key] = value;

      page = 1;

      draw();
    }

    control(
      controls,
      "Region",
      selectControl(
        [["","All regions"],
        ...regions.map(x => [x,x])],
        filters.region,
        value => update("region",value)
      )
    );

    control(
      controls,
      "Artifact type",
      selectControl(
        [["","All types"],
        ...types.map(x => [x,x])],
        filters.type,
        value => update("type",value)
      )
    );

    control(
      controls,
      "Evidence type",
      selectControl(
        [["","All classifications"],
        ...Object.entries(evidence).map(
          ([key,value]) => [key,value.title]
        )],
        filters.evidence,
        value => update("evidence",value)
      )
    );

    control(
      controls,
      "Date range",
      selectControl(
        [
          ["","All periods"],
          ["bronze","Before 1200 BCE"],
          ["iron","1200–587 BCE"],
          ["exile","586–333 BCE"],
          ["hellenistic","332–64 BCE"],
          ["roman","63 BCE onward"]
        ],
        filters.period,
        value => update("period",value)
      )
    );

    control(
      controls,
      "Sort results",
      selectControl(
        [
          ["featured","Catalogue order"],
          ["oldest","Oldest first"],
          ["newest","Newest first"],
          ["name","Alphabetical"]
        ],
        filters.sort,
        value => update("sort",value)
      )
    );

    output.appendChild(controls);

    actions(output,[
      button("Reset filters",() => {

        filters = {
          search:"",
          region:"",
          type:"",
          evidence:"",
          period:"",
          sort:"featured"
        };

        page = 1;

        render();
      }),

      button("Export matching records",() => {

        download(
          filteredRecords().map(report)
            .join("\n\n================\n\n"),
          "DesertBible-archaeology-results.txt"
        );
      })
    ]);

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const list = filteredRecords();

      const totalPages = Math.max(
        1,
        Math.ceil(list.length/pageSize)
      );

      page = Math.min(page,totalPages);

      results.appendChild(
        make(
          "p",
          list.length +
          " matching evidence records",
          "arMuted"
        )
      );

      const grid = make(
        "div","","arGrid"
      );

      list.slice(
        (page-1)*pageSize,
        page*pageSize
      ).forEach(record => {

        grid.appendChild(
          recordCard(record)
        );
      });

      results.appendChild(grid);

      if(!list.length) {

        results.appendChild(
          make(
            "p",
            "No matching records in this catalogue. Try broader search terms or remove filters."
          )
        );
      }

      const previous = button(
        "Previous page",
        () => {

          page--;

          draw();
        }
      );

      previous.disabled = page <= 1;

      const next = button(
        "Next page",
        () => {

          page++;

          draw();
        }
      );

      next.disabled = page >= totalPages;

      actions(results,[
        previous,
        make(
          "span",
          "Page " + page +
          " of " + totalPages
        ),
        next
      ]);
    }

    search.addEventListener(
      "input",
      () => update("search",search.value)
    );

    draw();
  }

  function renderSites() {

    output.append(
      make("h3","Excavation and Findspot Explorer"),

      make(
        "p",
        "Explore archaeological locations and the objects associated with them."
      )
    );

    const search = make("input");

    search.placeholder =
      "Search Jerusalem, Nineveh, Corinth...";

    output.appendChild(search);

    const results = make("div");

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const query =
        search.value.trim().toLowerCase();

      const grouped = new Map();

      records.forEach(record => {

        if(!grouped.has(record.location)) {
          grouped.set(record.location,[]);
        }

        grouped.get(record.location).push(record);
      });

      const grid = make(
        "div","","arGrid"
      );

      grid.style.marginTop = "15px";

      Array.from(grouped.entries())
        .sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(([location,list]) => {

          const text = [
            location,
            ...list.map(record =>
              record.title + " " + record.region
            )
          ].join(" ").toLowerCase();

          if(query && !text.includes(query)) {
            return;
          }

          const card = make(
            "article","","arCard"
          );

          card.append(
            make("div","🏛","arIcon"),
            make("h3",location),
            make(
              "p",
              list.length +
              " related catalogue records",
              "arMuted"
            )
          );

          list.forEach(record => {

            const row = make("p");

            row.appendChild(
              button(record.title,() => {

                selected = record.id;

                render();
              })
            );

            card.appendChild(row);
          });

          card.appendChild(
            link(
              "Explore location on map",
              mapURL(location)
            )
          );

          grid.appendChild(card);
        });

      if(!grid.childElementCount) {
        grid.appendChild(
          make("p","No matching findspots.")
        );
      }

      results.appendChild(grid);
    }

    search.addEventListener("input",draw);

    draw();
  }

  function renderTimeline() {

    output.append(
      make("h3","Archaeological Evidence Timeline"),

      make(
        "p",
        "Explore the chronological development of material evidence from ancient Mesopotamia to the Roman and Byzantine periods."
      ),

      make(
        "p",
        "Dates refer to artifact production, associated events or approximate occupation periods. Representative sorting years are not exact archaeological dates.",
        "arLimit"
      )
    );

    const select = selectControl(
      [
        ["","All periods"],
        ["bronze","Before 1200 BCE"],
        ["iron","1200–587 BCE"],
        ["exile","586–333 BCE"],
        ["hellenistic","332–64 BCE"],
        ["roman","63 BCE onward"]
      ],
      "",
      draw
    );

    output.appendChild(select);

    const timeline = make(
      "div","","arTimeline"
    );

    timeline.style.marginTop = "20px";

    output.appendChild(timeline);

    function draw() {

      timeline.replaceChildren();

      records.filter(record =>
        matchesPeriod(record,select.value)
      ).sort((a,b) =>
        a.year-b.year
      ).forEach(record => {

        const event = make(
          "article","","arEvent"
        );

        event.append(
          make(
            "span",record.date,"arTag"
          ),
          make("h3",record.title),
          make(
            "p",
            record.location,
            "arMuted"
          ),
          make("p",record.significance),
          button("Study this evidence",() => {

            selected = record.id;

            render();
          })
        );

        timeline.appendChild(event);
      });
    }

    draw();
  }

  function matchPassage(record,name,ch) {

    return record.references.some(reference => {

      if(reference === name) {
        return true;
      }

      if(!reference.startsWith(name + " ")) {
        return false;
      }

      const rest =
        reference.slice(name.length).trim();

      const match = rest.match(/^(\d+)/);

      return match &&
        Number(match[1]) === Number(ch);
    });
  }

  function renderScripture() {

    output.append(
      make("h3","Biblical Archaeology Connections"),

      make(
        "p",
        "Select a biblical book and chapter to investigate relevant material evidence."
      )
    );

    const controls = make(
      "div","","arControls"
    );

    const bookSelect = selectControl(
      books.map(
        (row,index) => [String(index),row[0]]
      ),
      String(bookIndex),
      value => {

        bookIndex = Number(value);

        chapter = 1;

        render();
      }
    );

    const chapters = Array.from(
      {length:books[bookIndex][1]},
      (_,index) => [
        String(index+1),
        "Chapter " + (index+1)
      ]
    );

    const chapterSelect = selectControl(
      chapters,
      String(chapter),
      value => {

        chapter = Number(value);

        render();
      }
    );

    control(controls,"Book",bookSelect);

    control(
      controls,"Chapter",chapterSelect
    );

    output.appendChild(controls);

    const reference =
      books[bookIndex][0] + " " + chapter;

    output.appendChild(
      make("h3",reference)
    );

    const preview = make(
      "div","","arPanel"
    );

    preview.append(
      make(
        "h4",
        "Scripture reference — World English Bible"
      )
    );

    const passage = make(
      "div",
      "Select Load Scripture to read the passage."
    );

    const loadButton = button(
      "Load Scripture",
      async () => {

        const request = ++requestCounter;

        loadButton.disabled = true;

        passage.textContent =
          "Loading Scripture…";

        try {

          const response = await fetch(
            "https://bible-api.com/" +
            encodeURIComponent(reference) +
            "?translation=web"
          );

          if(!response.ok) {
            throw new Error(
              "HTTP " + response.status
            );
          }

          const data = await response.json();

          if(request !== requestCounter) {
            return;
          }

          if(!Array.isArray(data.verses)) {
            throw new Error(
              "Passage unavailable."
            );
          }

          passage.replaceChildren();

          data.verses.forEach(verse => {

            const row = make(
              "div","","arReference"
            );

            row.append(
              make(
                "strong",
                verse.verse + " "
              ),
              document.createTextNode(
                verse.text
              )
            );

            passage.appendChild(row);
          });

        } catch(error) {

          passage.textContent =
            "Scripture could not be retrieved. " +
            "Use the external Scripture link.";

        } finally {

          loadButton.disabled = false;
        }
      }
    );

    preview.append(
      loadButton,
      passage,
      link(
        "Open passage in STEP Bible",
        "https://www.stepbible.org/?q=" +
        encodeURIComponent(
          "reference=" + reference
        )
      )
    );

    output.appendChild(preview);

    const matched = records.filter(record =>
      matchPassage(
        record,
        books[bookIndex][0],
        chapter
      )
    );

    const section = make(
      "div","","arPanel"
    );

    section.append(
      make("h3","Related Archaeological Evidence"),
      make(
        "p",
        matched.length +
        " related catalogue records",
        "arMuted"
      )
    );

    if(!matched.length) {

      section.appendChild(
        make(
          "p",
          "No archaeological records are currently indexed specifically to this selection. This does not establish an absence of relevant historical evidence.",
          "arLimit"
        )
      );
    }

    const grid = make(
      "div","","arGrid"
    );

    matched.forEach(record => {

      grid.appendChild(
        recordCard(record)
      );
    });

    section.appendChild(grid);

    output.appendChild(section);

    output.appendChild(
      make(
        "p",
        "Biblical connections are editorial research associations. Book-level references provide general context and do not necessarily apply directly to every chapter.",
        "arLimit"
      )
    );
  }

  function renderMethods() {

    output.append(
      make("h3","Archaeological Research Methods"),

      make(
        "p",
        "Understand how archaeological evidence is discovered, dated, interpreted and evaluated."
      )
    );

    const grid = make(
      "div","","arGrid"
    );

    methods.forEach(row => {

      const card = make(
        "article","","arCard"
      );

      card.append(
        make("h3",row[0]),
        make("p",row[1]),
        make("p",row[2],"arLimit")
      );

      grid.appendChild(card);
    });

    output.appendChild(grid);

    const checklist = make(
      "section","","arPanel"
    );

    checklist.append(
      make("h3","Evidence Evaluation Checklist"),

      make(
        "p",
        "Use this checklist when assessing archaeological claims."
      )
    );

    [
      "Identify the original excavation or publication.",
      "Confirm the artifact's documented findspot.",
      "Check the proposed date and dating method.",
      "Distinguish surviving text from reconstructed text.",
      "Consult alternative scholarly interpretations.",
      "Determine whether the evidence directly supports the stated claim.",
      "Identify possible political or religious bias in ancient sources.",
      "Separate archaeological conclusions from theological interpretations.",
      "Record collection numbers and publication details when available.",
      "Document remaining uncertainty."
    ].forEach(text => {

      const row = make(
        "label","","arReference"
      );

      row.style.display = "flex";
      row.style.gap = "10px";

      const check = make("input");

      check.type = "checkbox";

      check.style.width = "auto";

      row.append(
        check,
        document.createTextNode(text)
      );

      checklist.appendChild(row);
    });

    output.appendChild(checklist);
  }

  function renderLibrary() {

    output.append(
      make(
        "h3",
        "Museum and Academic Research Library"
      ),

      make(
        "p",
        "Access institutional collections, archaeological publications, ancient inscriptions and manuscript archives."
      )
    );

    const search = make("input");

    search.placeholder =
      "Search museum, inscriptions, archaeology...";

    output.appendChild(search);

    const results = make("div");

    output.appendChild(results);

    function draw() {

      results.replaceChildren();

      const query =
        search.value.toLowerCase().trim();

      Object.values(sources).filter(source =>
        source.join(" ")
          .toLowerCase().includes(query)
      ).forEach(source => {

        const entry = make(
          "div","","arEntry"
        );

        entry.append(
          make("h3",source[0]),
          link(
            "Open research resource",
            source[1]
          )
        );

        results.appendChild(entry);
      });

      if(!results.childElementCount) {

        results.appendChild(
          make("p","No matching resources.")
        );
      }
    }

    search.addEventListener("input",draw);

    draw();

    const publications = make(
      "div","","arPanel"
    );

    publications.append(
      make("h3","Recommended Academic Reading"),

      make(
        "p",
        "Amihai Mazar — Archaeology of the Land of the Bible: 10,000–586 B.C.E. (1990)."
      ),

      make(
        "p",
        "Ephraim Stern — Archaeology of the Land of the Bible, Volume II: The Assyrian, Babylonian, and Persian Periods, 732–332 B.C.E. (2001)."
      ),

      make(
        "p",
        "William G. Dever — Beyond the Texts: An Archaeological Portrait of Ancient Israel and Judah (2017)."
      ),

      make(
        "p",
        "Israel Finkelstein and Neil Asher Silberman — The Bible Unearthed (2001)."
      ),

      make(
        "p",
        "Eric H. Cline — Biblical Archaeology: A Very Short Introduction (2009)."
      ),

      make(
        "p",
        "Jodi Magness — The Archaeology of the Holy Land: From the Destruction of Solomon's Temple to the Muslim Conquest (2012)."
      ),

      link(
        "Find books through WorldCat",
        "https://search.worldcat.org/"
      ),

      make(
        "p",
        "These publications represent different scholarly approaches. Their conclusions should be compared rather than treated as interchangeable.",
        "arLimit"
      )
    );

    output.appendChild(publications);
  }

  function renderSaved() {

    output.append(
      make("h3","Saved Archaeological Evidence")
    );

    const list = records.filter(record =>
      saved.includes(record.id)
    );

    if(!list.length) {

      output.appendChild(
        make(
          "p",
          "Bookmark archaeological records to build your personal evidence collection."
        )
      );

      return;
    }

    const grid = make(
      "div","","arGrid"
    );

    list.forEach(record => {

      grid.appendChild(
        recordCard(record)
      );
    });

    output.appendChild(grid);

    actions(output,[
      button("Download evidence collection",() => {

        download(
          list.map(report)
            .join("\n\n================\n\n"),
          "DesertBible-archaeology-collection.txt"
        );
      })
    ]);
  }

  function renderNotes() {

    output.append(
      make("h3","Archaeological Research Notebook"),

      make(
        "p",
        "Record observations, source comparisons, excavation questions and evidence assessments."
      )
    );

    const area = make("textarea");

    area.value = notes;

    area.placeholder =
      "Enter archaeological research notes...";

    area.addEventListener("input",() => {
      notes = area.value;
    });

    output.appendChild(area);

    const status = make(
      "p","","arMuted"
    );

    actions(output,[
      button("Save notebook",() => {

        status.textContent = saveStorage()
          ? "Notebook saved in this browser."
          : "Storage unavailable. Download your notebook.";
      }),

      button("Download notebook",() => {

        download(
          notes,
          "DesertBible-archaeology-notebook.txt"
        );
      }),

      button("Copy notebook",() => {
        copyText(notes);
      })
    ]);

    output.append(
      status,

      make(
        "p",
        "Bookmarks and notebook entries are stored locally on this device.",
        "arMuted"
      )
    );
  }

  function render() {

    requestCounter++;

    output.replaceChildren();

    root.querySelectorAll(
      "[data-ar-tab]"
    ).forEach(node => {

      const active =
        node.dataset.arTab === view;

      node.classList.toggle(
        "arActive",active
      );

      node.setAttribute(
        "aria-pressed",String(active)
      );
    });

    if(selected) {

      const record = records.find(
        item => item.id === selected
      );

      if(record) {

        recordDetail(record);

        return;
      }
    }

    if(view === "catalogue") {
      renderCatalogue();
    }

    if(view === "sites") {
      renderSites();
    }

    if(view === "timeline") {
      renderTimeline();
    }

    if(view === "scripture") {
      renderScripture();
    }

    if(view === "methods") {
      renderMethods();
    }

    if(view === "library") {
      renderLibrary();
    }

    if(view === "saved") {
      renderSaved();
    }

    if(view === "notes") {
      renderNotes();
    }
  }

  $("arRecordCount").textContent =
    records.length;

  $("arSourceCount").textContent =
    Object.keys(sources).length;

  $("arRegionCount").textContent =
    regions.length;

  Object.values(evidence).forEach(item => {

    const card = make(
      "div","","arCard"
    );

    card.append(
      make("h4",item.title),
      make("p",item.description)
    );

    $("arStandards").appendChild(card);
  });

  root.querySelectorAll(
    "[data-ar-tab]"
  ).forEach(node => {

    node.addEventListener("click",() => {

      selected = null;

      view = node.dataset.arTab;

      render();
    });
  });

  $("arClose").addEventListener("click",() => {

    requestCounter++;

    workspace.remove();
  });

  render();

  workspace.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

}

