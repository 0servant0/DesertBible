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

