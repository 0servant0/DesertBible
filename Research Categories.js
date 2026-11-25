const categories = [
  ["Scripture & translations","Chapter text, translation comparison, reading tools."],
  ["Original languages","Hebrew, Aramaic, Greek, grammar, and word meanings."],
  ["Cross-references","Related verses, quotations, and biblical connections."],
  ["Historical context","Authorship questions, audience, and historical setting."],
  ["People & figures","People mentioned and their historical backgrounds."],
  ["Places & geography","Ancient locations, modern identifications, and maps."],
  ["Historical timeline","Events, estimated dates, and competing chronologies."],
  ["Archaeology","Excavations, artifacts, inscriptions, and limitations."],
  ["Ancient documents","Records, letters, chronicles, and royal inscriptions."],
  ["Manuscripts","Ancient copies, textual variants, and transmission."],
  ["Scholarly commentary","Academic research and competing interpretations."],
  ["Theology","Theological themes and traditions of interpretation."],
  ["Culture & daily life","Customs, laws, worship, economics, and warfare."],
  ["Literary analysis","Genre, structure, poetry, imagery, and rhetoric."],
  ["Prophecy & fulfillment","Claims, proposed fulfillments, and disagreements."],
  ["Evidence verification","Claims, support, uncertainty, and confidence."],
  ["Visual exploration","Maps, artifacts, manuscripts, and reconstructions."],
  ["Research library","Bibliographies, publications, and primary sources."],
  ["Research assistant","Source-linked answers with clear uncertainty."],
  ["Study tools","Notes, bookmarks, questions, and learning tools."]
];

const grid = document.getElementById("categoryGrid");
categories.forEach((item, index) => {
  const button = document.createElement("button");
  button.className = "category";
  button.dataset.category = item.join(" ").toLowerCase();
  button.innerHTML = `<div class="number">CATEGORY ${String(index+1).padStart(2,"0")}</div>
    <h3></h3><p></p>`;
  button.querySelector("h3").textContent = item[0];
  button.querySelector("p").textContent = item[1];
  button.addEventListener("click", () => {
  let workspace = document.getElementById("researchWorkspace");

  if (!workspace) {
    workspace = document.createElement("div");
    workspace.id = "researchWorkspace";
    workspace.className = "panel";
    grid.insertAdjacentElement("afterend", workspace);
  }
if (item[0] === "Scripture & translations") {
  openScriptureTranslations(workspace);
  return;
}
    if (item[0] === "Cross-references") {
  openCrossReferences(workspace);
  return;
}
    if (item[0].trim().toLowerCase() === "people & figures") {
  openPeopleFigures(workspace);
  return;
}
    if (item[0].trim().toLowerCase() === "historical timeline") {
  openHistoricalTimeline(workspace);
  return;
}
    if (item[0].trim().toLowerCase() === "ancient documents") {
  openAncientDocuments(workspace);
  return;
}

  const passage = document.querySelector("#scripture h2").textContent;

  workspace.innerHTML = `
    <div class="eyebrow">DESERTBIBLE RESEARCH</div>
    <h2>${item[0]}</h2>
    <p>${item[1]}</p>
    <p><strong>Selected passage:</strong> ${passage}</p>
    <div class="research-content">
  <h3>Original Languages — Micah 1</h3>

  <p>
    <strong>Primary text:</strong> Biblical Hebrew.
    <strong>Passage:</strong> Micah 1:1–16.
  </p>

  <p>
    <strong>Base text:</strong>
    Westminster Leningrad Codex (WLC).
    Hebrew readings and verse divisions must be checked against the source.
  </p>

  <p>
    <strong>Research status:</strong> Pending verse-by-verse verification.
    No lexical, grammatical, or textual claim is considered verified until
    its evidence and source are recorded.
  </p>

  <h4>Research Sections</h4>

 <section>
  <h5>1. Original Hebrew Text</h5>

  <p>
    <strong>Base text:</strong> Westminster Leningrad Codex (WLC).
    Hebrew text is displayed verse by verse. Textual variants will be
    documented separately rather than silently combined.
  </p>

  <p>
    <a href="https://ebible.org/hebwlc/MIC01.htm"
       target="_blank" rel="noopener noreferrer">
      Verify against the WLC source
    </a>
  </p>

  <div lang="he" dir="rtl" class="hebrew-text">
    <p><strong>Micah 1:1</strong><br>
    דְּבַר־יְהוָ֣ה ׀ אֲשֶׁ֣ר הָיָ֗ה אֶל־מִיכָה֙ הַמֹּ֣רַשְׁתִּ֔י בִּימֵ֥י יֹותָ֛ם אָחָ֥ז יְחִזְקִיָּ֖ה מַלְכֵ֣י יְהוּדָ֑ה אֲשֶׁר־חָזָ֥ה עַל־שֹׁמְר֖וֹן וִירֽוּשָׁלִָֽם׃</p>

    <p><strong>Micah 1:2</strong><br>
    שִׁמְעוּ֙ עַמִּ֣ים כֻּלָּ֔ם הַקְשִׁ֖יבִי אֶ֣רֶץ וּמְלֹאָ֑הּ וִיהִי֩ אֲדֹנָ֨י יְהוִ֤ה בָּכֶם֙ לְעֵ֔ד אֲדֹנָ֖י מֵהֵיכַ֥ל קָדְשֹֽׁו׃</p>

    <p><strong>Micah 1:3</strong><br>
    כִּֽי־הִנֵּ֥ה יְהוָ֖ה יֹצֵ֣א מִמְּקֹומֹ֑ו וְיָרַ֥ד וְדָרַ֖ךְ עַל־בָּמֳתֵי אָֽרֶץ׃</p>

    <p><strong>Micah 1:4</strong><br>
    וְנָמַ֤סּוּ הֶֽהָרִים֙ תַּחְתָּ֔יו וְהָעֲמָקִ֖ים יִתְבַּקָּ֑עוּ כַּדֹּונַג֙ מִפְּנֵ֣י הָאֵ֔שׁ כְּמַ֖יִם מֻגָּרִ֥ים בְּמֹורָֽד׃</p>

    <p><strong>Micah 1:5</strong><br>
    בְּפֶ֤שַׁע יַֽעֲקֹב֙ כָּל־זֹ֔את וּבְחַטֹּ֖אות בֵּ֣ית יִשְׂרָאֵ֑ל מִֽי־פֶ֣שַׁע יַעֲקֹ֗ב הֲלֹוא֙ שֹֽׁמְרֹ֔ון וּמִי֙ בָּמֹ֣ות יְהוּדָ֔ה הֲלֹ֖וא יְרוּשָׁלִָֽם׃</p>

    <p><strong>Micah 1:6</strong><br>
    וְשַׂמְתִּ֥י שֹׁמְרֹ֛ון לְעִ֥י הַשָּׂדֶ֖ה לְמַטָּ֣עֵי כָ֑רֶם וְהִגַּרְתִּ֤י לַגַּי֙ אֲבָנֶ֔יהָ וִיסֹדֶ֖יהָ אֲגַלֶּֽה׃</p>

    <p><strong>Micah 1:7</strong><br>
    וְכָל־פְּסִילֶ֣יהָ יֻכַּ֗תּוּ וְכָל־אֶתְנַנֶּ֙יהָ֙ יִשָּׂרְפ֣וּ בָאֵ֔שׁ וְכָל־עֲצַבֶּ֖יהָ אָשִׂ֣ים שְׁמָמָ֑ה כִּ֠י מֵאֶתְנַ֤ן זֹונָה֙ קִבָּ֔צָה וְעַד־אֶתְנַ֥ן זֹונָ֖ה יָשֽׁוּבוּ׃</p>

    <p><strong>Micah 1:8</strong><br>
    עַל־זֹאת֙ אֶסְפְּדָ֣ה וְאֵילִ֔ילָה אֵילְכָ֥ה שֹׁולָ֖ל וְעָרֹ֑ום אֶעֱשֶׂ֤ה מִסְפֵּד֙ כַּתַּנִּ֔ים וְאֵ֖בֶל כִּבְנֹ֥ות יַעֲנָֽה׃</p>

    <p><strong>Micah 1:9</strong><br>
    כִּ֥י אֲנוּשָׁ֖ה מַכֹּותֶ֑יהָ כִּי־בָ֙אָה֙ עַד־יְהוּדָ֔ה נָגַ֛ע עַד־שַׁ֥עַר עַמִּ֖י עַד־יְרוּשָׁלִָֽם׃</p>

    <p><strong>Micah 1:10</strong><br>
    בְּגַת֙ אַל־תַּגִּ֔ידוּ בָּכֹ֖ו אַל־תִּבְכּ֑וּ בְּבֵ֣ית לְעַפְרָ֔ה עָפָ֖ר הִתְפַּלָּֽשִׁי׃</p>

    <p><strong>Micah 1:11</strong><br>
    עִבְרִ֥י לָכֶ֛ם יֹושֶׁ֥בֶת שָׁפִ֖יר עֶרְיָה־בֹ֑שֶׁת לֹ֤א יָֽצְאָה֙ יֹושֶׁ֣בֶת צַֽאֲנָ֔ן מִסְפַּד֙ בֵּ֣ית הָאֵ֔צֶל יִקַּ֥ח מִכֶּ֖ם עֶמְדָּתֹֽו׃</p>

    <p><strong>Micah 1:12</strong><br>
    כִּֽי־חָ֥לָֽה לְטֹ֖וב יֹושֶׁ֣בֶת מָרֹ֑ות כִּֽי־יָ֤רַד רָע֙ מֵאֵ֣ת יְהוָ֔ה לְשַׁ֖עַר יְרוּשָׁלִָֽם׃</p>

    <p><strong>Micah 1:13</strong><br>
    רְתֹ֧ם הַמֶּרְכָּבָ֛ה לָרֶ֖כֶשׁ יֹושֶׁ֣בֶת לָכִ֑ישׁ רֵאשִׁ֨ית חַטָּ֥את הִיא֙ לְבַת־צִיֹּ֔ון כִּי־בָ֥ךְ נִמְצְא֖וּ פִּשְׁעֵ֥י יִשְׂרָאֵֽל׃</p>

    <p><strong>Micah 1:14</strong><br>
    לָכֵן֙ תִּתְּנִ֣י שִׁלּוּחִ֔ים עַ֖ל מֹורֶ֣שֶׁת גַּ֑ת בָּתֵּ֤י אַכְזִיב֙ לְאַכְזָ֔ב לְמַלְכֵ֖י יִשְׂרָאֵֽל׃</p>

    <p><strong>Micah 1:15</strong><br>
    עֹ֗וד הַיֹּורֵשׁ֙ אָ֣בִי לָ֔ךְ יֹושֶׁ֖בֶת מָֽרֵשָׁ֑ה עַד־עֲדֻלָּ֥ם יָבֹ֖וא כְּבֹ֥וד יִשְׂרָאֵֽל׃</p>

    <p><strong>Micah 1:16</strong><br>
    קָרְחִ֣י וָגֹ֔זִּי עַל־בְּנֵ֖י תַּעֲנוּגָ֑יִךְ הַרְחִ֤יבִי קָרְחָתֵךְ֙ כַּנֶּ֔שֶׁר כִּ֥י גָל֖וּ מִמֵּֽךְ׃ ס</p>
  </div>
</section>
</div>
    <button id="closeResearch">Return to categories</button>
  `;

  document.getElementById("closeResearch").addEventListener("click", () => {
    workspace.remove();
  });

  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
});

  function openScriptureTranslations(workspace) {
  "use strict";

  const books = [
    ["Genesis","GEN",50],
    ["Exodus","EXO",40],
    ["Leviticus","LEV",27],
    ["Numbers","NUM",36],
    ["Deuteronomy","DEU",34],
    ["Joshua","JOS",24],
    ["Judges","JDG",21],
    ["Ruth","RUT",4],
    ["1 Samuel","1SA",31],
    ["2 Samuel","2SA",24],
    ["1 Kings","1KI",22],
    ["2 Kings","2KI",25],
    ["1 Chronicles","1CH",29],
    ["2 Chronicles","2CH",36],
    ["Ezra","EZR",10],
    ["Nehemiah","NEH",13],
    ["Esther","EST",10],
    ["Job","JOB",42],
    ["Psalms","PSA",150],
    ["Proverbs","PRO",31],
    ["Ecclesiastes","ECC",12],
    ["Song of Solomon","SNG",8],
    ["Isaiah","ISA",66],
    ["Jeremiah","JER",52],
    ["Lamentations","LAM",5],
    ["Ezekiel","EZK",48],
    ["Daniel","DAN",12],
    ["Hosea","HOS",14],
    ["Joel","JOL",3],
    ["Amos","AMO",9],
    ["Obadiah","OBA",1],
    ["Jonah","JON",4],
    ["Micah","MIC",7],
    ["Nahum","NAM",3],
    ["Habakkuk","HAB",3],
    ["Zephaniah","ZEP",3],
    ["Haggai","HAG",2],
    ["Zechariah","ZEC",14],
    ["Malachi","MAL",4],
    ["Matthew","MAT",28],
    ["Mark","MRK",16],
    ["Luke","LUK",24],
    ["John","JHN",21],
    ["Acts","ACT",28],
    ["Romans","ROM",16],
    ["1 Corinthians","1CO",16],
    ["2 Corinthians","2CO",13],
    ["Galatians","GAL",6],
    ["Ephesians","EPH",6],
    ["Philippians","PHP",4],
    ["Colossians","COL",4],
    ["1 Thessalonians","1TH",5],
    ["2 Thessalonians","2TH",3],
    ["1 Timothy","1TI",6],
    ["2 Timothy","2TI",4],
    ["Titus","TIT",3],
    ["Philemon","PHM",1],
    ["Hebrews","HEB",13],
    ["James","JAS",5],
    ["1 Peter","1PE",5],
    ["2 Peter","2PE",3],
    ["1 John","1JN",5],
    ["2 John","2JN",1],
    ["3 John","3JN",1],
    ["Jude","JUD",1],
    ["Revelation","REV",22]
  ];

  const editions = [
    {
      id: "web",
      short: "WEB",
      name: "World English Bible",
      history: "A modern English translation developed through revision of the American Standard Version.",
      source: "https://worldenglish.bible/",
      rights: "Public domain."
    },
    {
      id: "kjv",
      short: "KJV",
      name: "King James Version",
      history: "First published in 1611. Its New Testament reflects the printed Greek textual tradition commonly associated with the Textus Receptus. The API text is not a facsimile of the original 1611 printing.",
      source: "https://ebible.org/eng-kjv/",
      rights: "Public domain in the United States. Special publication rights apply in the United Kingdom."
    },
    {
      id: "asv",
      short: "ASV",
      name: "American Standard Version",
      history: "Published in 1901 as the American revision associated with the English Revised Version. Notable for its use of Jehovah in the Old Testament.",
      source: "https://ebible.org/eng-asv/",
      rights: "Public domain in the United States."
    }
  ];

  const api = "https://bible-api.com/data";
  const cache = new Map();

  let requestVersion = 0;
  let loading = false;
  let results = [];
  let loadedReference = "";

  const root = document.createElement("div");
  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>
      .dbst {
        color: var(--text);
        line-height: 1.7;
      }
      .dbst .st-section {
        padding: 20px;
        margin: 16px 0;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: var(--panel2);
      }
      .dbst .st-controls {
        display: grid;
        grid-template-columns:
          repeat(auto-fit,minmax(150px,1fr));
        gap: 12px;
        margin: 14px 0;
      }
      .dbst select,
      .dbst input[type="search"] {
        width: 100%;
        min-width: 0;
        padding: 11px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--bg);
        color: var(--text);
        font: inherit;
      }
      .dbst label {
        display: block;
        margin: 5px 0;
      }
      .dbst input[type="checkbox"] {
        min-width: auto;
        width: auto;
        accent-color: var(--gold);
      }
      .dbst .st-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 14px 0;
      }
      .dbst .st-table-wrap {
        overflow-x: auto;
        border: 1px solid var(--line);
        border-radius: 10px;
      }
      .dbst table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        min-width: 350px;
      }
      .dbst th,
      .dbst td {
        padding: 14px;
        border: 1px solid var(--line);
        text-align: left;
        vertical-align: top;
        overflow-wrap: anywhere;
      }
      .dbst th {
        color: var(--gold);
        background: var(--panel2);
      }
      .dbst th:first-child,
      .dbst td:first-child {
        width: 58px;
        color: var(--gold);
      }
      .dbst td {
        background: var(--panel);
      }
      .dbst mark {
        background: #594a29;
        color: #ffffff;
        border-radius: 3px;
      }
      .dbst a {
        color: var(--gold);
        overflow-wrap: anywhere;
      }
      .dbst details {
        padding: 12px 0;
        border-bottom: 1px solid var(--line);
      }
      .dbst summary {
        cursor: pointer;
        color: var(--gold);
        font-weight: 600;
      }
      .dbst .st-muted {
        color: var(--muted);
        font-size: 13px;
      }
      .dbst .st-stat {
        font-size: 23px;
        color: var(--gold);
        font-weight: 700;
      }
      .dbst button:disabled {
        opacity: .45;
        cursor: not-allowed;
      }
      @media(max-width:600px) {
        .dbst .st-section {
          padding: 12px;
        }
        .dbst td,
        .dbst th {
          padding: 9px;
          font-size: 14px;
        }
      }
    </style>

    <div class="dbst">
      <div class="eyebrow">
        DESERTBIBLE · TEXTUAL RESEARCH
      </div>

      <h2>Scripture &amp; Translations</h2>

      <p>
        Read, compare and investigate the biblical text
        across multiple English translations.
      </p>

      <div class="st-section">
        <div class="st-controls">
          <div>
            <div class="st-stat">66</div>
            Biblical books
          </div>
          <div>
            <div class="st-stat">1,189</div>
            Chapters
          </div>
          <div>
            <div class="st-stat">3</div>
            English translations
          </div>
        </div>
        <p class="st-muted">
          Coverage follows the 66-book Protestant canon.
          Other Christian traditions recognize different
          canonical collections and arrangements.
        </p>
      </div>

      <section class="st-section">
        <h3>01 · Passage Explorer</h3>

        <div class="st-controls">
          <div>
            <label for="stBook">Biblical book</label>
            <select id="stBook"></select>
          </div>

          <div>
            <label for="stChapter">Chapter</label>
            <select id="stChapter"></select>
          </div>

          <div>
            <label for="stVerse">Verse</label>
            <select id="stVerse">
              <option value="">Entire chapter</option>
            </select>
          </div>
        </div>

        <h4>Translation editions</h4>
        <div id="stEditions"></div>

        <div class="st-actions">
          <button type="button" id="stLoad">
            Load passage
          </button>
          <button type="button" id="stPrevious">
            Previous chapter
          </button>
          <button type="button" id="stNext">
            Next chapter
          </button>
        </div>

        <p id="stStatus"
           role="status"
           aria-live="polite"></p>
      </section>

      <section class="st-section">
        <h3>02 · Parallel Scripture Comparison</h3>

        <h2 id="stReference"></h2>

        <div class="st-controls">
          <div>
            <label for="stSearch">
              Search within loaded chapter
            </label>
            <input id="stSearch"
                   type="search"
                   placeholder="Enter word or phrase">
          </div>
        </div>

        <label>
          <input type="checkbox" id="stHighlight">
          Highlight differing word choices
        </label>

        <label>
          <input type="checkbox" id="stDifferences">
          Show only differing verse wording
        </label>

        <p class="st-muted">
          Comparison ignores capitalization and punctuation
          when identifying word-choice differences.
          Highlighting is mechanical, not a judgment about
          translation accuracy or theological meaning.
        </p>

        <div class="st-actions">
          <button type="button" id="stCopy">
            Copy comparison
          </button>
          <button type="button" id="stDownload">
            Download comparison
          </button>
          <button type="button" id="stReader">
            Open in Read Scripture
          </button>
        </div>

        <p id="stSummary"></p>
        <div id="stOutput"></div>
      </section>

      <section class="st-section">
        <h3>03 · Translation History &amp; Identity</h3>
        <div id="stProfiles"></div>
      </section>

      <section class="st-section">
        <h3>04 · Translation Research Method</h3>

        <details open>
          <summary>Translation differences</summary>
          <p>
            English translations may differ through
            vocabulary, grammar, syntax, idiom,
            interpretive decisions and underlying
            textual readings.
          </p>
          <p>
            A different English word does not by itself
            establish a different Hebrew or Greek
            manuscript reading.
          </p>
        </details>

        <details>
          <summary>Formal and functional equivalence</summary>
          <p>
            Formal equivalence emphasizes correspondence
            with source-language expressions and structure.
            Functional equivalence emphasizes communicating
            meaning naturally in the receiving language.
            Actual translation practice commonly combines
            both approaches.
          </p>
        </details>

        <details>
          <summary>Original-language investigation</summary>
          <p>
            The Old Testament is predominantly Hebrew,
            with portions in Aramaic. The New Testament
            is preserved in Koine Greek.
          </p>
          <p>
            Investigate differences using original-language
            grammar, lexical context and critical editions.
            Do not assume that an English gloss exhausts
            the meaning of an ancient word.
          </p>
        </details>

        <details>
          <summary>Verse alignment and numbering</summary>
          <p>
            Chapter and verse numbering can differ
            between textual and religious traditions.
            This workspace aligns texts by their returned
            chapter and verse numbers. It does not
            independently reconcile every numbering system.
          </p>
        </details>

        <details>
          <summary>Research integrity</summary>
          <p>
            Identify the edition, record the passage,
            compare its wording, investigate the original
            language, consult textual evidence and record
            uncertainty before reaching conclusions.
          </p>
        </details>
      </section>

      <section class="st-section">
        <h3>05 · Significant Textual Questions</h3>

        <details>
          <summary>Mark 16:9–20</summary>
          <p>
            The longer ending of Mark is absent from
            Codex Sinaiticus and Codex Vaticanus but
            appears in many other witnesses. Its textual
            history requires examination beyond English
            translation comparison.
          </p>
          <button type="button"
                  data-st-case="40,16">
            Investigate Mark 16
          </button>
        </details>

        <details>
          <summary>John 7:53–8:11</summary>
          <p>
            The account of the woman accused of adultery
            is absent from several early Greek witnesses
            and appears in different locations in some
            manuscripts.
          </p>
          <button type="button"
                  data-st-case="42,8">
            Investigate John 8
          </button>
        </details>

        <details>
          <summary>1 John 5:7–8</summary>
          <p>
            The expanded Trinitarian wording known as the
            Comma Johanneum has limited support in the
            Greek manuscript tradition and a significant
            history in Latin transmission.
          </p>
          <button type="button"
                  data-st-case="61,5">
            Investigate 1 John 5
          </button>
        </details>

        <p class="st-muted">
          These examples concern textual transmission.
          Translation comparison alone cannot establish
          the earliest recoverable reading. Consult a
          scholarly critical apparatus.
        </p>

        <p>
          <a href="https://ntvmr.uni-muenster.de/"
             target="_blank" rel="noopener noreferrer">
            INTF — New Testament Virtual Manuscript Room
          </a>
        </p>

        <p>
          <a href="https://www.codexsinaiticus.org/"
             target="_blank" rel="noopener noreferrer">
            Codex Sinaiticus — manuscript project
          </a>
        </p>
      </section>

      <section class="st-section">
        <h3>06 · Primary Sources &amp; Digital Editions</h3>

        <div id="stSources"></div>

        <p>
          <a href="https://bible-api.com/"
             target="_blank" rel="noopener noreferrer">
            Bible API — documentation and available editions
          </a>
        </p>

        <p>
          <a href="https://ebible.org/"
             target="_blank" rel="noopener noreferrer">
            eBible.org — digital biblical text collection
          </a>
        </p>

        <p>
          <a href="https://www.deadseascrolls.org.il/"
             target="_blank" rel="noopener noreferrer">
            Leon Levy Dead Sea Scrolls Digital Library
          </a>
        </p>

        <p class="st-muted">
          API texts are digital transcriptions rather than
          manuscript images or complete critical editions.
          Footnotes, textual apparatus and formatting may
          not be included in returned passages.
        </p>
      </section>

      <button type="button" id="stClose">
        Return to research categories
      </button>
    </div>
  `;

  const $ = id => root.querySelector("#" + id);

  function make(tag, text, parent) {
    const element = document.createElement(tag);
    if (text !== undefined) {
      element.textContent = text;
    }
    if (parent) parent.appendChild(element);
    return element;
  }

  function link(parent, title, url) {
    const anchor = make("a", title, parent);
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    return anchor;
  }

  function normalize(text) {
    return String(text)
      .normalize("NFC")
      .toLowerCase()
      .match(/[\p{L}\p{N}]+/gu) || [];
  }

  function fillChapters(preferred = 1) {
    const book = books[Number($("stBook").value)];

    $("stChapter").replaceChildren();

    for (let n = 1; n <= book[2]; n++) {
      const option = make(
        "option", String(n), $("stChapter")
      );
      option.value = String(n);
    }

    $("stChapter").value = String(
      Math.min(Math.max(Number(preferred) || 1, 1), book[2])
    );
  }

  const testamentGroups = [
    make("optgroup", undefined, $("stBook")),
    make("optgroup", undefined, $("stBook"))
  ];

  testamentGroups[0].label = "Old Testament";
  testamentGroups[1].label = "New Testament";

  books.forEach((book, index) => {
    const option = make(
      "option",
      book[0],
      testamentGroups[index < 39 ? 0 : 1]
    );
    option.value = String(index);
  });

  editions.forEach(edition => {
    const label = make(
      "label", undefined, $("stEditions")
    );

    const input = make("input", undefined, label);
    input.type = "checkbox";
    input.value = edition.id;
    input.checked = true;

    label.append(
      " " + edition.short + " — " + edition.name
    );

    input.addEventListener("change", invalidate);
  });

  editions.forEach(edition => {
    const details = make(
      "details", undefined, $("stProfiles")
    );

    make(
      "summary",
      edition.short + " — " + edition.name,
      details
    );

    make("p", edition.history, details);
    make("p", "Rights: " + edition.rights, details);

    link(details, "Edition source", edition.source);
  });

  function selectedEditions() {
    return editions.filter(edition =>
      [...$("stEditions")
        .querySelectorAll("input:checked")]
        .some(input => input.value === edition.id)
    );
  }

  function updateButtons() {
    const valid = !loading && results.some(
      result => !result.error
    );

    $("stCopy").disabled = !valid;
    $("stDownload").disabled = !valid;
    $("stReader").disabled = !valid;
    $("stLoad").disabled = loading;
    $("stPrevious").disabled = loading;
    $("stNext").disabled = loading;
  }

  function invalidate() {
    requestVersion++;
    loading = false;
    results = [];
    loadedReference = "";

    $("stReference").textContent = "";
    $("stSummary").textContent = "";
    $("stOutput").replaceChildren();
    $("stSources").replaceChildren();

    $("stVerse").replaceChildren();

    const option = make(
      "option", "Entire chapter", $("stVerse")
    );
    option.value = "";

    $("stStatus").textContent =
      "Select Load passage to retrieve the chosen text.";

    updateButtons();
  }

  async function fetchChapter(edition, book, chapter) {
    let bookID = book[1];

    const alternatives = {
      EZK: "EZE",
      SNG: "SON",
      NAM: "NAH",
      JOL: "JOE"
    };

    const ids = [bookID];

    if (alternatives[bookID]) {
      ids.push(alternatives[bookID]);
    }

    for (const id of ids) {
      const url =
        api + "/" + edition.id + "/" +
        id + "/" + chapter;

      if (cache.has(url)) {
        return cache.get(url);
      }

      const response = await fetch(url);

      if (response.status === 404) continue;

      if (response.status === 429) {
        throw new Error(
          "Source rate limit reached. Wait 30 seconds and retry."
        );
      }

      if (!response.ok) {
        throw new Error(
          "Source returned HTTP " + response.status
        );
      }

      const data = await response.json();

      if (!Array.isArray(data.verses) ||
          !data.verses.length) {
        throw new Error("No verse records returned.");
      }

      const verses = new Map();

      data.verses.forEach(verse => {
        if (
          Number(verse.chapter) === chapter &&
          Number.isInteger(Number(verse.verse)) &&
          typeof verse.text === "string"
        ) {
          const number = Number(verse.verse);
          const text = verse.text.trim();

          if (text) {
            verses.set(
              number,
              verses.has(number)
                ? verses.get(number) + " " + text
                : text
            );
          }
        }
      });

      if (!verses.size) {
        throw new Error(
          "No matching chapter records returned."
        );
      }

      const result = {
        ...edition,
        url,
        verses,
        error: null,
        retrieved: new Date().toISOString()
      };

      cache.set(url, result);
      return result;
    }

    throw new Error(
      "This chapter was not found in the source."
    );
  }

  async function loadPassage() {
    if (loading) return;

    const chosen = selectedEditions();

    if (!chosen.length) {
      $("stStatus").textContent =
        "Select at least one translation.";
      return;
    }

    const version = ++requestVersion;
    const book = books[Number($("stBook").value)];
    const chapter = Number($("stChapter").value);

    loading = true;
    results = [];
    loadedReference = "";

    $("stReference").textContent = "";
    $("stOutput").replaceChildren();
    $("stSources").replaceChildren();
    $("stSummary").textContent = "";
    $("stStatus").textContent =
      "Retrieving " + book[0] + " " + chapter + "…";

    updateButtons();

    const retrieved = await Promise.all(
      chosen.map(async edition => {
        try {
          return await fetchChapter(
            edition, book, chapter
          );
        } catch (error) {
          return {
            ...edition,
            error: error.message,
            verses: new Map()
          };
        }
      })
    );

    if (
      version !== requestVersion ||
      !root.isConnected
    ) return;

    results = retrieved;
    loading = false;

    loadedReference = book[0] + " " + chapter;

    $("stReference").textContent = loadedReference;

    const numbers = allVerseNumbers();

    $("stVerse").replaceChildren();

    const all = make(
      "option", "Entire chapter", $("stVerse")
    );
    all.value = "";

    numbers.forEach(number => {
      const option = make(
        "option",
        "Verse " + number,
        $("stVerse")
      );
      option.value = String(number);
    });

    const successful = results.filter(
      result => !result.error
    );

    $("stStatus").textContent =
      successful.length + " of " +
      results.length + " translations retrieved.";

    results.forEach(result => {
      const section = make(
        "div", undefined, $("stSources")
      );

      make("h4", result.name, section);

      if (result.error) {
        make("p", result.error, section);
      } else {
        link(
          section,
          "Inspect exact API source: " + loadedReference,
          result.url
        );

        make(
          "p",
          "Retrieved (UTC): " + result.retrieved,
          section
        );
      }
    });

    updateButtons();
    renderComparison();
  }

  function allVerseNumbers() {
    return [...new Set(
      results.flatMap(result =>
        [...result.verses.keys()]
      )
    )].sort((a, b) => a - b);
  }

  function hasDifference(number) {
    const available = results
      .filter(result => !result.error)
      .map(result => result.verses.get(number))
      .filter(Boolean);

    if (available.length < 2) return false;

    return new Set(
      available.map(text =>
        normalize(text).join(" ")
      )
    ).size > 1;
  }

  function visibleNumbers() {
    const query = $("stSearch").value
      .trim().toLowerCase();

    const selectedVerse = $("stVerse").value;

    return allVerseNumbers().filter(number => {
      if (
        selectedVerse &&
        number !== Number(selectedVerse)
      ) return false;

      if (
        query &&
        !results.some(result =>
          (result.verses.get(number) || "")
            .toLowerCase().includes(query)
        )
      ) return false;

      if (
        $("stDifferences").checked &&
        !hasDifference(number)
      ) return false;

      return true;
    });
  }

  function appendVerseText(
    cell, text, editionIndex, number
  ) {
    const others = results
      .filter((result, index) =>
        index !== editionIndex &&
        !result.error &&
        result.verses.has(number)
      )
      .map(result =>
        new Set(normalize(result.verses.get(number)))
      );

    if (
      !$("stHighlight").checked ||
      !others.length
    ) {
      cell.textContent = text;
      return;
    }

    const parts = text.match(
      /[\p{L}\p{N}]+|[^\p{L}\p{N}]+/gu
    ) || [];

    parts.forEach(part => {
      const word = normalize(part)[0];

      if (
        word &&
        others.some(set => !set.has(word))
      ) {
        make("mark", part, cell);
      } else {
        cell.append(document.createTextNode(part));
      }
    });
  }

  function renderComparison() {
    $("stOutput").replaceChildren();

    results.filter(result => result.error)
      .forEach(result => {
        make(
          "p",
          result.short + ": " + result.error,
          $("stOutput")
        );
      });

    if (!results.length) return;

    const numbers = visibleNumbers();

    $("stSummary").textContent =
      "Displaying " + numbers.length +
      " of " + allVerseNumbers().length +
      " returned verse numbers.";

    if (!numbers.length) {
      make(
        "p",
        "No verses match the current selection.",
        $("stOutput")
      );
      return;
    }

    const wrapper = make(
      "div", undefined, $("stOutput")
    );
    wrapper.className = "st-table-wrap";

    const table = make("table", undefined, wrapper);

    table.style.minWidth =
      (65 + results.length * 210) + "px";

    const head = make("thead", undefined, table);
    const header = make("tr", undefined, head);

    make("th", "Verse", header);

    results.forEach(result => {
      make("th", result.short, header);
    });

    const body = make("tbody", undefined, table);

    numbers.forEach(number => {
      const row = make("tr", undefined, body);

      make("td", String(number), row);

      results.forEach((result, index) => {
        const cell = make("td", undefined, row);

        if (result.error) {
          cell.textContent = "Source unavailable";
          return;
        }

        if (!result.verses.has(number)) {
          cell.textContent =
            "Verse not returned by this edition";
          return;
        }

        appendVerseText(
          cell,
          result.verses.get(number),
          index,
          number
        );
      });
    });
  }

  function navigateChapter(direction) {
    if (loading) return;

    let index = Number($("stBook").value);
    let chapter = Number($("stChapter").value);

    chapter += direction;

    if (chapter > books[index][2]) {
      if (index === books.length - 1) return;
      index++;
      chapter = 1;
    }

    if (chapter < 1) {
      if (index === 0) return;
      index--;
      chapter = books[index][2];
    }

    $("stBook").value = String(index);

    fillChapters(chapter);
    invalidate();
    loadPassage();
  }

  function exportText() {
    const lines = [
      "DESERTBIBLE — SCRIPTURE & TRANSLATIONS",
      loadedReference,
      "Exported: " + new Date().toISOString(),
      "Scope: Current passage and filters",
      ""
    ];

    visibleNumbers().forEach(number => {
      lines.push(
        loadedReference + ":" + number
      );

      results.forEach(result => {
        lines.push(
          result.short + " — " +
          (result.error
            ? "Source unavailable"
            : result.verses.get(number) ||
              "Verse not returned")
        );
      });

      lines.push("");
    });

    lines.push("SOURCE RECORDS");

    results.forEach(result => {
      lines.push(
        result.name + " — " +
        (result.url || result.error)
      );

      if (result.retrieved) {
        lines.push(
          "Retrieved: " + result.retrieved
        );
      }

      lines.push("Rights: " + result.rights);
    });

    lines.push(
      "",
      "Verse alignment follows returned numbering.",
      "English wording differences do not establish manuscript variants."
    );

    return lines.join("\n");
  }

  $("stCopy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(exportText());
      $("stStatus").textContent = "Comparison copied.";
    } catch {
      $("stStatus").textContent =
        "Clipboard unavailable. Use Download comparison.";
    }
  });

  $("stDownload").addEventListener("click", () => {
    const blob = new Blob(
      [exportText()],
      { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download =
      "DesertBible-" +
      loadedReference.replace(/\s+/g, "-") +
      ".txt";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  $("stReader").addEventListener("click", () => {
    const readerBook =
      document.getElementById("bibleBook");

    const readerChapter =
      document.getElementById("bibleChapter");

    const readerLoad =
      document.getElementById("loadBibleChapter");

    if (!readerBook || !readerChapter || !readerLoad) {
      $("stStatus").textContent =
        "Existing Scripture reader could not be located.";
      return;
    }

    const book = books[Number($("stBook").value)];

    readerBook.value = book[0];

    readerBook.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    readerChapter.value = $("stChapter").value;

    if (typeof showView === "function") {
      showView("scripture");
    }

    readerLoad.click();
  });

  $("stBook").addEventListener("change", () => {
    fillChapters(1);
    invalidate();
  });

  $("stChapter").addEventListener(
    "change", invalidate
  );

  $("stLoad").addEventListener(
    "click", loadPassage
  );

  $("stPrevious").addEventListener(
    "click", () => navigateChapter(-1)
  );

  $("stNext").addEventListener(
    "click", () => navigateChapter(1)
  );

  $("stSearch").addEventListener(
    "input", renderComparison
  );

  [
    "stVerse",
    "stHighlight",
    "stDifferences"
  ].forEach(id => {
    $(id).addEventListener(
      "change", renderComparison
    );
  });

  root.querySelectorAll("[data-st-case]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const [index, chapter] =
          button.dataset.stCase.split(",").map(Number);

        $("stBook").value = String(index);

        fillChapters(chapter);
        $("stSearch").value = "";
        $("stDifferences").checked = false;

        invalidate();
        loadPassage();

        $("stReference").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });

  $("stClose").addEventListener("click", () => {
    requestVersion++;
    workspace.remove();
  });

  const currentBook =
    document.getElementById("bibleBook")?.value;

  const currentChapter =
    document.getElementById("bibleChapter")?.value;

  const initialIndex = books.findIndex(
    book => book[0] === currentBook
  );

  $("stBook").value = String(
    initialIndex >= 0 ? initialIndex : 0
  );

  fillChapters(currentChapter || 1);

  updateButtons();

  workspace.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  loadPassage();
}

  grid.appendChild(button);
});

function openCrossReferences(workspace) {
  "use strict";

  const books = [
    ["Genesis","Gen",50],
    ["Exodus","Exod",40],
    ["Leviticus","Lev",27],
    ["Numbers","Num",36],
    ["Deuteronomy","Deut",34],
    ["Joshua","Josh",24],
    ["Judges","Judg",21],
    ["Ruth","Ruth",4],
    ["1 Samuel","1Sam",31],
    ["2 Samuel","2Sam",24],
    ["1 Kings","1Kgs",22],
    ["2 Kings","2Kgs",25],
    ["1 Chronicles","1Chr",29],
    ["2 Chronicles","2Chr",36],
    ["Ezra","Ezra",10],
    ["Nehemiah","Neh",13],
    ["Esther","Esth",10],
    ["Job","Job",42],
    ["Psalms","Ps",150],
    ["Proverbs","Prov",31],
    ["Ecclesiastes","Eccl",12],
    ["Song of Solomon","Song",8],
    ["Isaiah","Isa",66],
    ["Jeremiah","Jer",52],
    ["Lamentations","Lam",5],
    ["Ezekiel","Ezek",48],
    ["Daniel","Dan",12],
    ["Hosea","Hos",14],
    ["Joel","Joel",3],
    ["Amos","Amos",9],
    ["Obadiah","Obad",1],
    ["Jonah","Jonah",4],
    ["Micah","Mic",7],
    ["Nahum","Nah",3],
    ["Habakkuk","Hab",3],
    ["Zephaniah","Zeph",3],
    ["Haggai","Hag",2],
    ["Zechariah","Zech",14],
    ["Malachi","Mal",4],
    ["Matthew","Matt",28],
    ["Mark","Mark",16],
    ["Luke","Luke",24],
    ["John","John",21],
    ["Acts","Acts",28],
    ["Romans","Rom",16],
    ["1 Corinthians","1Cor",16],
    ["2 Corinthians","2Cor",13],
    ["Galatians","Gal",6],
    ["Ephesians","Eph",6],
    ["Philippians","Phil",4],
    ["Colossians","Col",4],
    ["1 Thessalonians","1Thess",5],
    ["2 Thessalonians","2Thess",3],
    ["1 Timothy","1Tim",6],
    ["2 Timothy","2Tim",4],
    ["Titus","Titus",3],
    ["Philemon","Phlm",1],
    ["Hebrews","Heb",13],
    ["James","Jas",5],
    ["1 Peter","1Pet",5],
    ["2 Peter","2Pet",3],
    ["1 John","1John",5],
    ["2 John","2John",1],
    ["3 John","3John",1],
    ["Jude","Jude",1],
    ["Revelation","Rev",22]
  ];

  const sourceURL =
    "https://raw.githubusercontent.com/neuu-org/bible-crossrefs-dataset/main/data/00_raw/openbible/cross_references.txt";

  const originalSource =
    "https://www.openbible.info/labs/cross-references/";

  const repository =
    "https://github.com/neuu-org/bible-crossrefs-dataset";

  const license =
    "https://creativecommons.org/licenses/by/4.0/";

  const bibleAPI = "https://bible-api.com/";

  const bookMap = new Map(
    books.map((book, index) => [
      book[1], { name: book[0], index }
    ])
  );

  const root = document.createElement("div");
  workspace.replaceChildren(root);

  let records = [];
  let currentReference = "";
  let currentText = "";
  let currentTextSource = "";
  let selectedCode = "";
  let page = 0;
  let generation = 0;
  let verseGeneration = 0;

  const pageSize = 20;
  const textCache = new Map();

  root.innerHTML = `
    <style>
      .dbxr {
        color: var(--text);
        line-height: 1.7;
      }

      .dbxr .xr-panel {
        background: var(--panel2);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 20px;
        margin: 16px 0;
      }

      .dbxr .xr-controls {
        display: grid;
        grid-template-columns:
          repeat(auto-fit,minmax(145px,1fr));
        gap: 12px;
        margin: 12px 0;
      }

      .dbxr label {
        display: block;
        margin-bottom: 5px;
        color: var(--muted);
      }

      .dbxr select,
      .dbxr input {
        width: 100%;
        min-width: 0;
        padding: 11px;
        background: var(--bg);
        color: var(--text);
        border: 1px solid var(--line);
        border-radius: 8px;
        font: inherit;
      }

      .dbxr .xr-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 12px 0;
      }

      .dbxr .xr-result {
        border: 1px solid var(--line);
        border-left: 3px solid var(--gold);
        border-radius: 9px;
        padding: 16px;
        margin: 12px 0;
        background: var(--panel);
      }

      .dbxr .xr-score {
        color: var(--gold);
        font-size: 13px;
        font-weight: 600;
      }

      .dbxr .xr-muted {
        color: var(--muted);
        font-size: 13px;
      }

      .dbxr .xr-stat {
        color: var(--gold);
        font-weight: 700;
        font-size: 25px;
      }

      .dbxr .xr-bar {
        height: 8px;
        background: var(--line);
        border-radius: 8px;
        overflow: hidden;
        margin: 8px 0;
      }

      .dbxr .xr-fill {
        height: 100%;
        background: var(--gold);
      }

      .dbxr blockquote {
        margin: 12px 0;
        padding: 14px;
        border-left: 2px solid var(--gold);
        background: var(--bg);
      }

      .dbxr a {
        color: var(--gold);
        overflow-wrap: anywhere;
      }

      .dbxr details {
        padding: 12px 0;
        border-bottom: 1px solid var(--line);
      }

      .dbxr summary {
        cursor: pointer;
        color: var(--gold);
      }

      .dbxr button:disabled {
        opacity: .45;
        cursor: not-allowed;
      }

      @media(max-width:600px) {
        .dbxr .xr-panel {
          padding: 12px;
        }
      }
    </style>

    <div class="dbxr">

      <div class="eyebrow">
        DESERTBIBLE · BIBLICAL CONNECTIONS
      </div>

      <h2>Cross-References</h2>

      <p>
        Investigate connections between biblical
        passages across the Old and New Testaments,
        comparing Scripture with Scripture.
      </p>

      <section class="xr-panel">
        <div class="xr-controls">
          <div>
            <div class="xr-stat">66</div>
            Books supported
          </div>
          <div>
            <div class="xr-stat" id="xrTotal">—</div>
            Indexed reference records
          </div>
          <div>
            <div class="xr-stat" id="xrCoverage">—</div>
            Indexed source verses
          </div>
        </div>

        <p class="xr-muted">
          Counts are calculated from the retrieved
          dataset rather than estimated.
        </p>
      </section>

      <section class="xr-panel">

        <h3>01 · Select a Biblical Passage</h3>

        <div class="xr-controls">

          <div>
            <label for="xrBook">Book</label>
            <select id="xrBook"></select>
          </div>

          <div>
            <label for="xrChapter">Chapter</label>
            <select id="xrChapter"></select>
          </div>

          <div>
            <label for="xrVerse">Verse</label>
            <select id="xrVerse"></select>
          </div>

          <div>
            <label for="xrEdition">Translation</label>
            <select id="xrEdition">
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

        <div class="xr-actions">
          <button type="button" id="xrLoad">
            Investigate passage
          </button>

          <button type="button" id="xrPrevious">
            Previous verse
          </button>

          <button type="button" id="xrNext">
            Next verse
          </button>
        </div>

        <p id="xrStatus"
           role="status"
           aria-live="polite"></p>

        <p id="xrVerseStatus"
           role="status"></p>

        <div id="xrOriginal"></div>

      </section>

      <section class="xr-panel">

        <h3>02 · Reference Distribution</h3>

        <div id="xrStatistics"></div>

        <h4>Most frequently connected books</h4>

        <div id="xrDistribution"></div>

        <p class="xr-muted">
          Distribution counts describe dataset
          connections, not theological importance.
        </p>

      </section>

      <section class="xr-panel">

        <h3>03 · Cross-Reference Explorer</h3>

        <div class="xr-controls">

          <div>
            <label for="xrTestament">
              Testament
            </label>

            <select id="xrTestament">
              <option value="all">Entire Bible</option>
              <option value="ot">Old Testament</option>
              <option value="nt">New Testament</option>
            </select>
          </div>

          <div>
            <label for="xrTarget">
              Connected book
            </label>

            <select id="xrTarget">
              <option value="">All books</option>
            </select>
          </div>

          <div>
            <label for="xrDirection">
              Connection direction
            </label>

            <select id="xrDirection">
              <option value="both">
                Incoming and outgoing
              </option>
              <option value="outgoing">
                Outgoing references
              </option>
              <option value="incoming">
                Incoming references
              </option>
            </select>
          </div>

          <div>
            <label for="xrVotes">
              Minimum community score
            </label>

            <select id="xrVotes">
              <option value="all">All scores</option>
              <option value="0">0 or higher</option>
              <option value="5">5 or higher</option>
              <option value="10">10 or higher</option>
              <option value="25">25 or higher</option>
              <option value="50">50 or higher</option>
              <option value="100">100 or higher</option>
            </select>
          </div>

          <div>
            <label for="xrSort">Sort order</label>

            <select id="xrSort">
              <option value="votes">
                Highest community score
              </option>
              <option value="canonical">
                Biblical book order
              </option>
            </select>
          </div>

          <div>
            <label for="xrSearch">Find passage</label>
            <input id="xrSearch"
                   type="search"
                   placeholder="Example: Isaiah">
          </div>

        </div>

        <p id="xrSummary"></p>

        <div class="xr-actions">
          <button type="button" id="xrCopy">
            Copy research
          </button>

          <button type="button" id="xrDownload">
            Download research
          </button>

          <button type="button" id="xrReset">
            Reset filters
          </button>
        </div>

        <div id="xrResults"></div>

        <div class="xr-actions">

          <button type="button" id="xrPageBack">
            Previous results
          </button>

          <button type="button" id="xrPageNext">
            Next results
          </button>

        </div>

        <p id="xrPageStatus"></p>

      </section>

      <section class="xr-panel">

        <h3>04 · Understanding Biblical Connections</h3>

        <details open>
          <summary>Direct quotations</summary>
          <p>
            One biblical author may explicitly cite
            an earlier scriptural passage.
          </p>
          <p>
            Example: Matthew 2:6 draws on Micah 5:2
            and incorporates language associated with
            the shepherd-ruler tradition in
            2 Samuel 5:2.
          </p>
          <p>
            Compare the wording and original contexts
            rather than assuming identical quotation.
          </p>
        </details>

        <details>
          <summary>Allusions and verbal parallels</summary>
          <p>
            Authors may evoke earlier Scripture
            without expressly identifying a quotation.
            Shared words alone do not establish
            deliberate literary dependence.
          </p>
          <p>
            Compare Genesis 1:1 and John 1:1,
            considering their opening language
            and theological setting.
          </p>
        </details>

        <details>
          <summary>Parallel historical accounts</summary>
          <p>
            Different biblical books may recount
            related events from distinct perspectives.
          </p>
          <p>
            Compare 2 Kings 18–19 and Isaiah 36–37
            concerning the Assyrian crisis during
            Hezekiah's reign.
          </p>
          <p>
            Shared biblical accounts are not necessarily
            independent historical witnesses.
          </p>
        </details>

        <details>
          <summary>Prophecy and fulfillment</summary>
          <p>
            Biblical authors sometimes interpret
            earlier prophetic passages in relation
            to subsequent events.
          </p>
          <p>
            Matthew 2:15 cites Hosea 11:1.
            Hosea's immediate context concerns
            Israel's past, while Matthew applies
            the language to Jesus.
          </p>
          <p>
            Distinguish original context, later
            interpretation and theological conclusions.
          </p>
        </details>

        <details>
          <summary>Thematic relationships</summary>
          <p>
            Passages can share theological or ethical
            themes without directly quoting one another.
          </p>
          <p>
            Compare Micah 6:8 and Matthew 23:23
            concerning justice and moral responsibility.
          </p>
        </details>

        <p class="xr-muted">
          These examples illustrate research methods.
          The reference dataset does not classify
          individual connections into these categories.
        </p>

      </section>

      <section class="xr-panel">

        <h3>05 · Research Verification Protocol</h3>

        <ol>
          <li>
            Read the selected passage in context.
          </li>

          <li>
            Read the complete connected passage.
          </li>

          <li>
            Establish each passage's literary genre
            and historical setting.
          </li>

          <li>
            Compare Hebrew, Aramaic or Greek wording
            where relevant.
          </li>

          <li>
            Determine whether the relationship is
            quotation, allusion, parallel account,
            thematic similarity or another connection.
          </li>

          <li>
            Consult critical editions and scholarship
            before asserting literary dependence.
          </li>

          <li>
            Record competing interpretations
            and remaining uncertainties.
          </li>
        </ol>

        <p>
          <strong>Evidence limitation:</strong>
          A cross-reference is a proposed relationship
          between passages. It does not independently
          prove historical authenticity, prophetic
          fulfillment or theological agreement.
        </p>

      </section>

      <section class="xr-panel">

        <h3>06 · Sources &amp; Attribution</h3>

        <h4>Cross-reference data</h4>

        <p>
          Cross-reference data from OpenBible.info,
          used under Creative Commons Attribution
          4.0 International.
        </p>

        <p>
          The data draws substantially on the
          Treasury of Scripture Knowledge and
          includes community voting.
        </p>

        <p>
          <a id="xrOriginalSource"
             target="_blank"
             rel="noopener noreferrer">
            OpenBible.info — original project
          </a>
        </p>

        <p>
          <a id="xrRepository"
             target="_blank"
             rel="noopener noreferrer">
            Dataset repository
          </a>
        </p>

        <p>
          <a id="xrRaw"
             target="_blank"
             rel="noopener noreferrer">
            Inspect retrieved source file
          </a>
        </p>

        <p>
          <a id="xrLicense"
             target="_blank"
             rel="noopener noreferrer">
            Creative Commons Attribution 4.0
          </a>
        </p>

        <h4>Scripture texts</h4>

        <p>
          <a href="https://bible-api.com/"
             target="_blank"
             rel="noopener noreferrer">
            Bible API — digital Scripture retrieval
          </a>
        </p>

        <p>
          <a href="https://ebible.org/"
             target="_blank"
             rel="noopener noreferrer">
            eBible.org — digital Bible editions
          </a>
        </p>

        <h4>Manuscript verification resources</h4>

        <p>
          <a href="https://ntvmr.uni-muenster.de/"
             target="_blank"
             rel="noopener noreferrer">
            New Testament Virtual Manuscript Room
          </a>
        </p>

        <p>
          <a href="https://www.deadseascrolls.org.il/"
             target="_blank"
             rel="noopener noreferrer">
            Leon Levy Dead Sea Scrolls Digital Library
          </a>
        </p>

        <p id="xrDataInfo"></p>

        <p class="xr-muted">
          DesertBible indexes, filters and reorganizes
          the original cross-reference records.
          Incoming links are derived from the dataset.
          Original vote scores are retained.
          References are aligned by verse numbering;
          differences between numbering traditions
          are not independently reconciled here.
        </p>

      </section>

      <button type="button" id="xrClose">
        Return to research categories
      </button>

    </div>
  `;

  const $ = id => root.querySelector("#" + id);

  function make(tag, text, parent) {
    const element = document.createElement(tag);

    if (text !== undefined) {
      element.textContent = text;
    }

    if (parent) parent.appendChild(element);

    return element;
  }

  function link(parent, title, url) {
    const anchor = make("a", title, parent);

    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    return anchor;
  }

  $("xrOriginalSource").href = originalSource;
  $("xrRepository").href = repository;
  $("xrRaw").href = sourceURL;
  $("xrLicense").href = license;

  books.forEach((book, index) => {
    const option = make(
      "option", book[0], $("xrBook")
    );

    option.value = String(index);

    const target = make(
      "option", book[0], $("xrTarget")
    );

    target.value = book[1];
  });

  function parseCode(code) {
    const match =
      /^([1-3]?[A-Za-z]+)\.(\d+)\.(\d+)$/
        .exec(code);

    if (!match) return null;

    const book = bookMap.get(match[1]);
    const chapter = Number(match[2]);
    const verse = Number(match[3]);

    if (!book) return null;

    if (
      chapter < 1 ||
      chapter > books[book.index][2] ||
      verse < 1
    ) return null;

    return {
      code,
      book: match[1],
      name: book.name,
      index: book.index,
      chapter,
      verse
    };
  }

  function parseRange(value) {
    const parts = value.split("-");
    if (parts.length > 2) return null;

    const start = parseCode(parts[0]);
    const end = parts.length === 2
      ? parseCode(parts[1])
      : start;

    if (!start || !end) return null;

    if (compareCodes(start, end) > 0) {
      return null;
    }

    return { start, end, value };
  }

  function compareCodes(a, b) {
    return (
      a.index - b.index ||
      a.chapter - b.chapter ||
      a.verse - b.verse
    );
  }

  function humanReference(value) {
    const range = parseRange(value);

    if (!range) return value;

    const a = range.start;
    const b = range.end;

    const start =
      a.name + " " + a.chapter + ":" + a.verse;

    if (a.code === b.code) return start;

    if (
      a.book === b.book &&
      a.chapter === b.chapter
    ) {
      return start + "-" + b.verse;
    }

    if (a.book === b.book) {
      return start + "-" + b.chapter + ":" + b.verse;
    }

    return start + " – " +
      b.name + " " + b.chapter + ":" + b.verse;
  }

  function containsVerse(range, selected) {
    return (
      compareCodes(range.start, selected) <= 0 &&
      compareCodes(range.end, selected) >= 0
    );
  }

  function fillChapters(preferred = 1) {
    const book = books[Number($("xrBook").value)];

    $("xrChapter").replaceChildren();

    for (let chapter = 1;
         chapter <= book[2];
         chapter++) {

      const option = make(
        "option",
        String(chapter),
        $("xrChapter")
      );

      option.value = String(chapter);
    }

    $("xrChapter").value = String(
      Math.min(
        Math.max(Number(preferred) || 1, 1),
        book[2]
      )
    );
  }

  let chapterVerses = [];

  async function retrieveText(reference, edition) {
    const url =
      bibleAPI + encodeURIComponent(reference) +
      "?translation=" + edition;

    if (textCache.has(url)) {
      return textCache.get(url);
    }

    const response = await fetch(url);

    if (response.status === 429) {
      throw new Error(
        "Scripture source rate limit reached. Retry shortly."
      );
    }

    if (!response.ok) {
      throw new Error(
        "Scripture source returned HTTP " +
        response.status
      );
    }

    const data = await response.json();

    if (!Array.isArray(data.verses) ||
        !data.verses.length) {
      throw new Error("No Scripture verses returned.");
    }

    const result = {
      url,
      verses: data.verses,
      text: data.verses.map(verse =>
        String(verse.text || "").trim()
      ).join(" ")
    };

    textCache.set(url, result);

    return result;
  }

  function clearResearch() {
    generation++;
    records = [];
    currentReference = "";
    currentText = "";
    currentTextSource = "";
    selectedCode = "";
    page = 0;

    [
      "xrOriginal",
      "xrStatistics",
      "xrDistribution",
      "xrResults"
    ].forEach(id => $(id).replaceChildren());

    $("xrSummary").textContent = "";
    $("xrPageStatus").textContent = "";

    $("xrCopy").disabled = true;
    $("xrDownload").disabled = true;
    $("xrPageBack").disabled = true;
    $("xrPageNext").disabled = true;
  }

  async function fillVerses(preferred = 1) {
    const version = ++verseGeneration;
    const book = books[Number($("xrBook").value)];
    const chapter = Number($("xrChapter").value);

    chapterVerses = [];

    $("xrVerse").replaceChildren();
    $("xrLoad").disabled = true;
    $("xrPrevious").disabled = true;
    $("xrNext").disabled = true;

    $("xrVerseStatus").textContent =
      "Retrieving chapter verse numbers…";

    try {
      const edition = $("xrEdition").value;

      const result = await retrieveText(
        book[0] + " " + chapter,
        edition
      );

      if (
        version !== verseGeneration ||
        !root.isConnected
      ) return false;

      chapterVerses = [...new Set(
        result.verses
          .filter(verse =>
            Number(verse.chapter) === chapter
          )
          .map(verse => Number(verse.verse))
          .filter(number =>
            Number.isInteger(number) && number > 0
          )
      )].sort((a,b) => a-b);

      if (!chapterVerses.length) {
        throw new Error("No valid verse numbers returned.");
      }

      chapterVerses.forEach(number => {
        const option = make(
          "option", String(number), $("xrVerse")
        );

        option.value = String(number);
      });

      $("xrVerse").value = String(
        chapterVerses.includes(Number(preferred))
          ? Number(preferred)
          : chapterVerses[0]
      );

      $("xrVerseStatus").textContent = "";
      $("xrLoad").disabled = false;
      $("xrPrevious").disabled = false;
      $("xrNext").disabled = false;

      return true;

    } catch (error) {

      if (
        version !== verseGeneration ||
        !root.isConnected
      ) return false;

      $("xrVerseStatus").textContent =
        error.message + " Change chapter or translation to retry.";

      return false;
    }
  }

  async function loadDataset() {

    if (window.DesertBibleCrossReferenceIndex) {
      return window.DesertBibleCrossReferenceIndex;
    }

    if (window.DesertBibleCrossReferenceRequest) {
      return window.DesertBibleCrossReferenceRequest;
    }

    window.DesertBibleCrossReferenceRequest =
      (async () => {

        const response = await fetch(sourceURL);

        if (!response.ok) {
          throw new Error(
            "Reference dataset unavailable: HTTP " +
            response.status
          );
        }

        const text = await response.text();
        const lines = text.split(/\r?\n/);

        const edges = [];
        const bySource = new Map();
        const byTargetBook = new Map();

        let excluded = 0;

        for (const line of lines) {

          const clean = line.trim();

          if (
            !clean ||
            clean.startsWith("#") ||
            /^from/i.test(clean)
          ) continue;

          const fields = clean.split("\t");

          if (fields.length < 3) {
            excluded++;
            continue;
          }

          const from = fields[0].trim();
          const to = fields[1].trim();
          const score = Number(fields[2].trim());

          const origin = parseCode(from);
          const range = parseRange(to);

          if (
            !origin ||
            !range ||
            !fields[2].trim() ||
            !Number.isFinite(score)
          ) {
            excluded++;
            continue;
          }

          const edge = {
            from,
            to,
            score,
            origin,
            range
          };

          edges.push(edge);

          if (!bySource.has(from)) {
            bySource.set(from, []);
          }

          bySource.get(from).push(edge);

          for (
            let index = range.start.index;
            index <= range.end.index;
            index++
          ) {
            const code = books[index][1];

            if (!byTargetBook.has(code)) {
              byTargetBook.set(code, []);
            }

            byTargetBook.get(code).push(edge);
          }
        }

        if (edges.length < 100000) {
          throw new Error(
            "Dataset integrity check failed: unexpected record count."
          );
        }

        const index = {
          edges,
          bySource,
          byTargetBook,
          excluded,
          retrieved: new Date().toISOString()
        };

        window.DesertBibleCrossReferenceIndex = index;

        return index;

      })();

    try {
      return await window.DesertBibleCrossReferenceRequest;
    } finally {
      window.DesertBibleCrossReferenceRequest = null;
    }
  }

  function collectReferences(index, code) {

    const selected = parseCode(code);
    const output = [];
    const seen = new Set();

    function add(edge, direction, target) {

      if (target === code) return;

      const key =
        edge.from + "|" +
        edge.to + "|" +
        direction + "|" +
        edge.score;

      if (seen.has(key)) return;

      seen.add(key);

      const range = parseRange(target);

      if (!range) return;

      output.push({
        target,
        direction,
        score: edge.score,
        sourceFrom: edge.from,
        sourceTo: edge.to,
        book: range.start.book,
        bookIndex: range.start.index,
        chapter: range.start.chapter,
        verse: range.start.verse
      });
    }

    (index.bySource.get(code) || [])
      .forEach(edge => {
        add(edge, "outgoing", edge.to);
      });

    (index.byTargetBook.get(selected.book) || [])
      .forEach(edge => {
        if (containsVerse(edge.range, selected)) {
          add(edge, "incoming", edge.from);
        }
      });

    return output;
  }

  async function investigate() {

    if (!$("xrVerse").value) return;

    clearResearch();

    const version = generation;

    const book = books[Number($("xrBook").value)];
    const chapter = Number($("xrChapter").value);
    const verse = Number($("xrVerse").value);
    const edition = $("xrEdition").value;

    selectedCode =
      book[1] + "." + chapter + "." + verse;

    currentReference =
      book[0] + " " + chapter + ":" + verse;

    $("xrStatus").textContent =
      "Loading reference index and Scripture…";

    make("h3", currentReference, $("xrOriginal"));

    try {

      const outcomes = await Promise.allSettled([
        loadDataset(),
        retrieveText(currentReference, edition)
      ]);

      if (
        version !== generation ||
        !root.isConnected
      ) return;

      const dataResult = outcomes[0];
      const scriptureResult = outcomes[1];

      if (scriptureResult.status === "fulfilled") {

        currentText = scriptureResult.value.text;
        currentTextSource = scriptureResult.value.url;

        make(
          "p",
          edition.toUpperCase(),
          $("xrOriginal")
        );

        make(
          "blockquote",
          currentText,
          $("xrOriginal")
        );

        link(
          $("xrOriginal"),
          "Verify selected Scripture text",
          currentTextSource
        );

      } else {

        make(
          "p",
          "Scripture retrieval failed: " +
          scriptureResult.reason.message,
          $("xrOriginal")
        );
      }

      if (dataResult.status !== "fulfilled") {
        throw dataResult.reason;
      }

      const index = dataResult.value;

      $("xrTotal").textContent =
        index.edges.length.toLocaleString();

      $("xrCoverage").textContent =
        index.bySource.size.toLocaleString();

      $("xrDataInfo").textContent =
        "Dataset retrieved (UTC): " +
        index.retrieved +
        ". Unrecognized or invalid rows excluded: " +
        index.excluded.toLocaleString() + ".";

      records = collectReferences(
        index, selectedCode
      );

      $("xrStatus").textContent =
        records.length.toLocaleString() +
        " directed reference records found for " +
        currentReference + ".";

      $("xrCopy").disabled = false;
      $("xrDownload").disabled = false;

      renderStatistics();
      renderResults();

    } catch (error) {

      if (
        version !== generation ||
        !root.isConnected
      ) return;

      $("xrStatus").textContent =
        error.message +
        " Select Investigate passage to retry.";
    }
  }

  function renderStatistics() {

    $("xrStatistics").replaceChildren();
    $("xrDistribution").replaceChildren();

    const outgoing = records.filter(
      item => item.direction === "outgoing"
    ).length;

    const incoming = records.filter(
      item => item.direction === "incoming"
    ).length;

    const ot = records.filter(
      item => item.bookIndex < 39
    ).length;

    const nt = records.filter(
      item => item.bookIndex >= 39
    ).length;

    const distinct = new Set(
      records.map(item => item.target)
    ).size;

    const panel = $("xrStatistics");

    [
      ["Distinct connected passages", distinct],
      ["Outgoing records", outgoing],
      ["Incoming records", incoming],
      ["Old Testament records", ot],
      ["New Testament records", nt]
    ].forEach(([label, count]) => {
      const p = make("p", undefined, panel);

      make(
        "strong",
        count.toLocaleString() + " — ",
        p
      );

      p.append(label);
    });

    const counts = new Map();

    records.forEach(item => {
      counts.set(
        item.book,
        (counts.get(item.book) || 0) + 1
      );
    });

    const sorted = [...counts.entries()]
      .sort((a,b) => b[1] - a[1])
      .slice(0,10);

    if (!sorted.length) {

      make(
        "p",
        "No connections returned for this verse.",
        $("xrDistribution")
      );

      return;
    }

    const maximum = sorted[0][1];

    sorted.forEach(([code, count]) => {

      make(
        "p",
        bookMap.get(code).name + " — " + count,
        $("xrDistribution")
      );

      const bar = make(
        "div", undefined, $("xrDistribution")
      );

      bar.className = "xr-bar";

      const fill = make("div", undefined, bar);
      fill.className = "xr-fill";

      fill.style.width =
        (count / maximum * 100) + "%";
    });
  }

  function filteredRecords() {

    const testament = $("xrTestament").value;
    const book = $("xrTarget").value;
    const direction = $("xrDirection").value;
    const votes = $("xrVotes").value;

    const query = $("xrSearch").value
      .trim().toLowerCase();

    const filtered = records.filter(item => {

      if (
        testament === "ot" &&
        item.bookIndex >= 39
      ) return false;

      if (
        testament === "nt" &&
        item.bookIndex < 39
      ) return false;

      if (book && item.book !== book) {
        return false;
      }

      if (
        direction !== "both" &&
        item.direction !== direction
      ) return false;

      if (
        votes !== "all" &&
        item.score < Number(votes)
      ) return false;

      if (
        query &&
        !humanReference(item.target)
          .toLowerCase().includes(query)
      ) return false;

      return true;
    });

    const canonicalSort = (a,b) =>
      a.bookIndex - b.bookIndex ||
      a.chapter - b.chapter ||
      a.verse - b.verse;

    if ($("xrSort").value === "canonical") {
      filtered.sort(canonicalSort);
    } else {
      filtered.sort(
        (a,b) => b.score - a.score ||
          canonicalSort(a,b)
      );
    }

    return filtered;
  }

  function renderResults() {

    const container = $("xrResults");
    container.replaceChildren();

    const filtered = filteredRecords();

    const pageCount = Math.max(
      1, Math.ceil(filtered.length / pageSize)
    );

    page = Math.min(
      Math.max(page, 0),
      pageCount - 1
    );

    const start = page * pageSize;
    const visible = filtered.slice(
      start, start + pageSize
    );

    $("xrSummary").textContent =
      filtered.length.toLocaleString() +
      " matching records out of " +
      records.length.toLocaleString() + ".";

    $("xrPageStatus").textContent =
      "Page " + (page + 1) + " of " + pageCount;

    $("xrPageBack").disabled = page === 0;

    $("xrPageNext").disabled =
      page + 1 >= pageCount;

    if (!visible.length) {

      make(
        "p",
        "No references match the selected filters.",
        container
      );

      return;
    }

    visible.forEach(item => {

      const card = make(
        "article", undefined, container
      );

      card.className = "xr-result";

      const reference = humanReference(item.target);

      make("h3", reference, card);

      make(
        "p",
        item.direction === "outgoing"
          ? "Outgoing · Selected verse points to this passage"
          : "Incoming · This verse points to the selected passage",
        card
      );

      const score = make(
        "p",
        "Community vote score: " + item.score,
        card
      );

      score.className = "xr-score";

      const source = make(
        "p",
        "Original record: " +
        item.sourceFrom + " → " + item.sourceTo,
        card
      );

      source.className = "xr-muted";

      const actions = make(
        "div", undefined, card
      );

      actions.className = "xr-actions";

      const preview = make(
        "button",
        "Compare Scripture",
        actions
      );

      const follow = make(
        "button",
        "Investigate connected verse",
        actions
      );

      preview.type = "button";
      follow.type = "button";

      const textPanel = make(
        "div", undefined, card
      );

      preview.addEventListener("click", async () => {

        if (textPanel.dataset.loaded === "true") {
          textPanel.hidden = !textPanel.hidden;

          preview.textContent = textPanel.hidden
            ? "Compare Scripture"
            : "Hide comparison";

          return;
        }

        preview.disabled = true;
        textPanel.textContent = "Retrieving passage…";

        const range = parseRange(item.target);

        try {

          if (range.start.book !== range.end.book) {
            throw new Error(
              "This cross-book range requires separate reading of its endpoints."
            );
          }

          const edition = $("xrEdition").value;

          const result = await retrieveText(
            reference, edition
          );

          if (!card.isConnected) return;

          textPanel.replaceChildren();

          make(
            "h4",
            "Selected passage — " + currentReference,
            textPanel
          );

          make(
            "blockquote",
            currentText ||
              "Selected Scripture text unavailable.",
            textPanel
          );

          if (currentTextSource) {
            link(
              textPanel,
              "Verify selected passage",
              currentTextSource
            );
          }

          make(
            "h4",
            "Connected passage — " + reference,
            textPanel
          );

          make(
            "p",
            edition.toUpperCase(),
            textPanel
          );

          result.verses.forEach(verse => {

            make(
              "blockquote",
              verse.chapter + ":" + verse.verse +
              " — " + String(verse.text).trim(),
              textPanel
            );
          });

          link(
            textPanel,
            "Verify connected passage text",
            result.url
          );

          make(
            "p",
            "Read both passages in context before determining the significance of this connection.",
            textPanel
          );

          textPanel.dataset.loaded = "true";

          preview.textContent = "Hide comparison";

        } catch (error) {

          textPanel.textContent = error.message;

        } finally {

          preview.disabled = false;
        }
      });

      follow.addEventListener("click", async () => {

        const range = parseRange(item.target);

        clearResearch();

        $("xrBook").value =
          String(range.start.index);

        fillChapters(range.start.chapter);

        const success = await fillVerses(
          range.start.verse
        );

        if (success) {
          await investigate();

          $("xrOriginal").scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });

      link(
        card,
        "Inspect original cross-reference project",
        originalSource
      );
    });
  }

  async function navigateVerse(direction) {

    const current = Number($("xrVerse").value);
    const position = chapterVerses.indexOf(current);

    if (position < 0) return;

    const nextPosition = position + direction;

    if (
      nextPosition >= 0 &&
      nextPosition < chapterVerses.length
    ) {

      $("xrVerse").value = String(
        chapterVerses[nextPosition]
      );

      await investigate();

      return;
    }

    let bookIndex = Number($("xrBook").value);
    let chapter = Number($("xrChapter").value);

    chapter += direction;

    if (chapter > books[bookIndex][2]) {

      if (bookIndex === books.length - 1) {
        return;
      }

      bookIndex++;
      chapter = 1;
    }

    if (chapter < 1) {

      if (bookIndex === 0) return;

      bookIndex--;
      chapter = books[bookIndex][2];
    }

    clearResearch();

    $("xrBook").value = String(bookIndex);

    fillChapters(chapter);

    const success = await fillVerses();

    if (!success) return;

    if (direction < 0) {
      $("xrVerse").value = String(
        chapterVerses[chapterVerses.length - 1]
      );
    }

    await investigate();
  }

  function researchExport() {

    const edition = $("xrEdition").value.toUpperCase();

    const lines = [
      "DESERTBIBLE — CROSS-REFERENCE RESEARCH",
      "",
      "Selected passage: " + currentReference,
      "Translation: " + edition,
      "Exported (UTC): " + new Date().toISOString(),
      "",
      currentText || "Scripture text unavailable.",
      "Scripture source: " +
        (currentTextSource || "Unavailable"),
      "",
      "FILTERED CROSS-REFERENCE RECORDS",
      ""
    ];

    filteredRecords().forEach((item,index) => {

      lines.push(
        (index+1) + ". " +
          humanReference(item.target),

        "Direction: " + item.direction,

        "Community score: " + item.score,

        "Original record: " +
          item.sourceFrom + " -> " +
          item.sourceTo,

        ""
      );
    });

    lines.push(
      "SOURCE ATTRIBUTION",
      "Cross-reference data from OpenBible.info.",
      originalSource,
      "Dataset distribution: " + repository,
      "Raw dataset: " + sourceURL,
      "Creative Commons Attribution 4.0:",
      license,
      $("xrDataInfo").textContent,
      "",
      "Scripture retrieval: https://bible-api.com/",
      "Incoming connections were derived from original records.",
      "Vote scores are not scholarly confidence ratings.",
      "Cross-references do not independently prove historical or theological claims."
    );

    return lines.join("\n");
  }

  $("xrCopy").addEventListener("click", async () => {

    try {

      await navigator.clipboard.writeText(
        researchExport()
      );

      $("xrStatus").textContent =
        "Research records copied.";

    } catch {

      $("xrStatus").textContent =
        "Clipboard unavailable. Use Download research.";
    }
  });

  $("xrDownload").addEventListener("click", () => {

    const blob = new Blob(
      [researchExport()],
      { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;

    anchor.download =
      "DesertBible-CrossReferences-" +
      currentReference.replace(/[^a-zA-Z0-9]+/g,"-") +
      ".txt";

    document.body.appendChild(anchor);

    anchor.click();
    anchor.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );
  });

  const filterIDs = [
    "xrTestament",
    "xrTarget",
    "xrDirection",
    "xrVotes",
    "xrSort",
    "xrSearch"
  ];

  filterIDs.forEach(id => {

    $(id).addEventListener(
      id === "xrSearch" ? "input" : "change",
      () => {
        page = 0;
        renderResults();
      }
    );
  });

  $("xrReset").addEventListener("click", () => {

    $("xrTestament").value = "all";
    $("xrTarget").value = "";
    $("xrDirection").value = "both";
    $("xrVotes").value = "all";
    $("xrSort").value = "votes";
    $("xrSearch").value = "";

    page = 0;

    renderResults();
  });

  $("xrPageBack").addEventListener("click", () => {

    page--;
    renderResults();

    $("xrSummary").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  $("xrPageNext").addEventListener("click", () => {

    page++;
    renderResults();

    $("xrSummary").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  $("xrBook").addEventListener("change", async () => {

    clearResearch();
    fillChapters(1);
    await fillVerses();

    $("xrStatus").textContent =
      "Select Investigate passage.";
  });

  $("xrChapter").addEventListener("change", async () => {

    clearResearch();
    await fillVerses();

    $("xrStatus").textContent =
      "Select Investigate passage.";
  });

  $("xrEdition").addEventListener("change", async () => {

    const preferred = $("xrVerse").value;

    clearResearch();

    const success = await fillVerses(preferred);

    if (success) await investigate();
  });

  $("xrVerse").addEventListener("change", () => {

    clearResearch();

    $("xrStatus").textContent =
      "Select Investigate passage.";
  });

  $("xrLoad").addEventListener(
    "click", investigate
  );

  $("xrPrevious").addEventListener(
    "click", () => navigateVerse(-1)
  );

  $("xrNext").addEventListener(
    "click", () => navigateVerse(1)
  );

  $("xrClose").addEventListener("click", () => {

    generation++;
    verseGeneration++;

    workspace.remove();
  });

  const readerBook =
    document.getElementById("bibleBook")?.value;

  const readerChapter =
    document.getElementById("bibleChapter")?.value;

  const initialIndex = books.findIndex(
    book => book[0] === readerBook
  );

  $("xrBook").value = String(
    initialIndex >= 0 ? initialIndex : 0
  );

  fillChapters(readerChapter || 1);

  clearResearch();

  workspace.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  (async () => {

    const success = await fillVerses();

    if (success) await investigate();

  })();
}

function openPeopleFigures(workspace) {
  "use strict";

  const source =
    "https://github.com/STEPBible/STEPBible-Data";

  const distribution =
    "https://github.com/BSB-publishing/bsb-data-output";

  const api =
    "https://bible-api.com/";

  const license =
    "https://creativecommons.org/licenses/by/4.0/";

  const books = [
    ["GEN","Genesis"],["EXO","Exodus"],
    ["LEV","Leviticus"],["NUM","Numbers"],
    ["DEU","Deuteronomy"],["JOS","Joshua"],
    ["JDG","Judges"],["RUT","Ruth"],
    ["1SA","1 Samuel"],["2SA","2 Samuel"],
    ["1KI","1 Kings"],["2KI","2 Kings"],
    ["1CH","1 Chronicles"],["2CH","2 Chronicles"],
    ["EZR","Ezra"],["NEH","Nehemiah"],
    ["EST","Esther"],["JOB","Job"],
    ["PSA","Psalms"],["PRO","Proverbs"],
    ["ECC","Ecclesiastes"],["SNG","Song of Solomon"],
    ["ISA","Isaiah"],["JER","Jeremiah"],
    ["LAM","Lamentations"],["EZK","Ezekiel"],
    ["DAN","Daniel"],["HOS","Hosea"],
    ["JOL","Joel"],["AMO","Amos"],
    ["OBA","Obadiah"],["JON","Jonah"],
    ["MIC","Micah"],["NAM","Nahum"],
    ["HAB","Habakkuk"],["ZEP","Zephaniah"],
    ["HAG","Haggai"],["ZEC","Zechariah"],
    ["MAL","Malachi"],["MAT","Matthew"],
    ["MRK","Mark"],["LUK","Luke"],
    ["JHN","John"],["ACT","Acts"],
    ["ROM","Romans"],["1CO","1 Corinthians"],
    ["2CO","2 Corinthians"],["GAL","Galatians"],
    ["EPH","Ephesians"],["PHP","Philippians"],
    ["COL","Colossians"],["1TH","1 Thessalonians"],
    ["2TH","2 Thessalonians"],["1TI","1 Timothy"],
    ["2TI","2 Timothy"],["TIT","Titus"],
    ["PHM","Philemon"],["HEB","Hebrews"],
    ["JAS","James"],["1PE","1 Peter"],
    ["2PE","2 Peter"],["1JN","1 John"],
    ["2JN","2 John"],["3JN","3 John"],
    ["JUD","Jude"],["REV","Revelation"]
  ];

  const bookMap = new Map(books);

  const bookOrder = new Map(
    books.map((book,index) => [book[0],index])
  );

  const evidence = [
    {
      name: "Hezekiah",
      period: "Late eighth century BCE",
      role: "King of Judah",
      passages: [
        "2 Kings 18:1-16",
        "Isaiah 36:1",
        "2 Chronicles 32:1"
      ],
      biblical:
        "The biblical narratives describe Hezekiah's reign, religious reforms and confrontation with Assyria.",
      object: "Sennacherib's Prism",
      date: "691 BCE; describing the campaign of 701 BCE",
      status: "Direct external attestation",
      finding:
        "The Assyrian royal inscription identifies Hezekiah of Judah and describes Sennacherib's campaign against his kingdom.",
      limitation:
        "The inscription is an Assyrian royal account. It does not independently confirm every event or theological explanation in the biblical narratives.",
      institution: "Israel Museum",
      url:
        "https://imj.org.il/en/exhibitions/special-display-assyrian-campaign-judah-told-sennacherib-prism"
    },
    {
      name: "Sennacherib",
      period: "705–681 BCE",
      role: "King of Assyria",
      passages: [
        "2 Kings 18:13",
        "2 Kings 19:36-37",
        "Isaiah 36:1"
      ],
      biblical:
        "The biblical accounts describe Sennacherib's invasion of Judah during Hezekiah's reign.",
      object: "Royal annals of Sennacherib",
      date: "Early seventh century BCE",
      status: "Direct external attestation",
      finding:
        "Surviving Assyrian royal inscriptions document his reign and campaigns, including his invasion of Judah in 701 BCE.",
      limitation:
        "Royal inscriptions emphasize imperial achievements and must be evaluated in light of their political and literary purpose.",
      institution: "Israel Museum",
      url:
        "https://imj.org.il/en/exhibitions/special-display-assyrian-campaign-judah-told-sennacherib-prism"
    },
    {
      name: "Jehu",
      period: "Ninth century BCE",
      role: "King of Israel",
      passages: [
        "2 Kings 9:1-13",
        "2 Kings 10:28-36"
      ],
      biblical:
        "Second Kings describes Jehu's accession and overthrow of the ruling dynasty of Israel.",
      object: "Black Obelisk of Shalmaneser III",
      date: "Late ninth century BCE",
      status: "Direct external attestation",
      finding:
        "The Assyrian monument records tribute associated with Jehu and identifies him using the dynastic designation of Omri.",
      limitation:
        "The Assyrian designation does not establish that Jehu was literally Omri's biological son. Whether the depicted figure is Jehu himself or a representative requires caution.",
      institution: "Biblical Archaeology — artifact record",
      url:
        "https://biblical-archaeology.org/en/?focused_location=17408"
    }
  ];

  const root = document.createElement("div");

  workspace.replaceChildren(root);

  let people = [];
  let peopleMap = new Map();
  let selected = null;
  let selectedReferences = [];
  let page = 0;
  let refPage = 0;
  let loadedSource = "";
  let retrievedAt = "";
  let profileVersion = 0;

  const pageSize = 24;
  const referencePageSize = 30;

  const textCache = new Map();

  root.innerHTML = `
    <style>
      .dbpf {
        color:var(--text);
        line-height:1.75;
      }

      .dbpf .pf-panel {
        border:1px solid var(--line);
        background:var(--panel2);
        border-radius:12px;
        padding:20px;
        margin:16px 0;
      }

      .dbpf .pf-controls {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(160px,1fr));
        gap:12px;
        margin:14px 0;
      }

      .dbpf .pf-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(190px,1fr));
        gap:12px;
      }

      .dbpf .pf-card {
        background:var(--panel);
        border:1px solid var(--line);
        border-left:3px solid var(--gold);
        border-radius:9px;
        padding:16px;
        overflow-wrap:anywhere;
      }

      .dbpf input,
      .dbpf select,
      .dbpf textarea {
        box-sizing:border-box;
        width:100%;
        min-width:0;
        background:var(--bg);
        color:var(--text);
        border:1px solid var(--line);
        padding:11px;
        border-radius:8px;
        font:inherit;
      }

      .dbpf textarea {
        resize:vertical;
        min-height:130px;
      }

      .dbpf label {
        display:block;
        color:var(--muted);
        margin-bottom:5px;
      }

      .dbpf .pf-actions {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin:14px 0;
      }

      .dbpf .pf-stat {
        color:var(--gold);
        font-size:25px;
        font-weight:700;
      }

      .dbpf .pf-muted {
        color:var(--muted);
        font-size:13px;
      }

      .dbpf .pf-tag {
        color:var(--gold);
        font-size:13px;
      }

      .dbpf .pf-reference {
        border-bottom:1px solid var(--line);
        padding:12px 0;
      }

      .dbpf blockquote {
        margin:10px 0;
        padding:14px;
        background:var(--bg);
        border-left:2px solid var(--gold);
      }

      .dbpf a {
        color:var(--gold);
        overflow-wrap:anywhere;
      }

      .dbpf details {
        border-bottom:1px solid var(--line);
        padding:12px 0;
      }

      .dbpf summary {
        cursor:pointer;
        color:var(--gold);
      }

      .dbpf button:disabled {
        opacity:.45;
        cursor:not-allowed;
      }

      @media(max-width:600px) {
        .dbpf .pf-panel {
          padding:12px;
        }
      }
    </style>

    <div class="dbpf">

      <div class="eyebrow">
        DESERTBIBLE · BIBLICAL PROSOPography
      </div>

      <h2>People &amp; Figures</h2>

      <p>
        Investigate biblical individuals, their
        scriptural appearances, family relationships,
        names and historical evidence.
      </p>

      <section class="pf-panel">

        <div class="pf-controls">

          <div>
            <div class="pf-stat" id="pfCount">—</div>
            Individual records
          </div>

          <div>
            <div class="pf-stat">66</div>
            Canonical books supported
          </div>

          <div>
            <div class="pf-stat" id="pfMentions">—</div>
            Indexed person-verse associations
          </div>

        </div>

        <p class="pf-muted">
          Prosopography is the study of people
          and their relationships through
          collective historical and textual records.
        </p>

      </section>

      <section class="pf-panel">

        <h3>01 · Biblical People Directory</h3>

        <div class="pf-controls">

          <div>
            <label for="pfSearch">
              Search name or identifier
            </label>
            <input id="pfSearch"
                   type="search"
                   placeholder="David, Mary, Moses...">
          </div>

          <div>
            <label for="pfTestament">
              Scriptural appearances
            </label>
            <select id="pfTestament">
              <option value="all">Entire Bible</option>
              <option value="ot">Old Testament</option>
              <option value="nt">New Testament</option>
              <option value="both">Both Testaments</option>
            </select>
          </div>

          <div>
            <label for="pfBook">Biblical book</label>
            <select id="pfBook">
              <option value="">All books</option>
            </select>
          </div>

          <div>
            <label for="pfChapter">
              Chapter number
            </label>
            <input id="pfChapter"
                   type="number"
                   min="1"
                   max="150"
                   placeholder="All chapters">
          </div>

          <div>
            <label for="pfSort">Sort records</label>
            <select id="pfSort">
              <option value="name">
                Alphabetical
              </option>
              <option value="mentions">
                Most occurrences
              </option>
              <option value="scripture">
                Biblical book order
              </option>
            </select>
          </div>

        </div>

        <div class="pf-actions">

          <button type="button" id="pfReset">
            Reset filters
          </button>

          <button type="button" id="pfReload">
            Reload directory
          </button>

        </div>

        <p id="pfStatus"
           role="status"
           aria-live="polite"></p>

        <p id="pfSummary"></p>

        <div id="pfDirectory" class="pf-grid"></div>

        <div class="pf-actions">

          <button type="button" id="pfBack">
            Previous results
          </button>

          <button type="button" id="pfNext">
            Next results
          </button>

        </div>

        <p id="pfPage"></p>

      </section>

      <section class="pf-panel" id="pfProfilePanel" hidden>

        <div class="eyebrow">
          INDIVIDUAL RESEARCH RECORD
        </div>

        <h2 id="pfName"></h2>

        <div id="pfIdentity"></div>

        <h3>02 · Biblical Names &amp; Identity</h3>

        <div id="pfNames"></div>

        <h3>03 · Family &amp; Relationships</h3>

        <div id="pfRelations"></div>

        <p class="pf-muted">
          Relationships follow the source dataset.
          Ancient genealogies may omit generations,
          employ broader kinship terminology or
          contain disputed identifications.
        </p>

        <h3>04 · Scripture Occurrences</h3>

        <div class="pf-controls">

          <div>
            <label for="pfRefBook">
              Filter references
            </label>
            <select id="pfRefBook">
              <option value="">All books</option>
            </select>
          </div>

          <div>
            <label for="pfEdition">
              Scripture translation
            </label>
            <select id="pfEdition">
              <option value="web">WEB</option>
              <option value="kjv">KJV</option>
              <option value="asv">ASV</option>
            </select>
          </div>

        </div>

        <div id="pfReferences"></div>

        <div class="pf-actions">

          <button type="button" id="pfRefBack">
            Previous references
          </button>

          <button type="button" id="pfRefNext">
            Next references
          </button>

        </div>

        <p id="pfRefPage"></p>

        <h3>05 · Research Notes</h3>

        <label for="pfNotes">
          Personal observations and citations
        </label>

        <textarea id="pfNotes"
          placeholder="Record observations, questions and sources..."></textarea>

        <div class="pf-actions">

          <button type="button" id="pfSave">
            Save notes locally
          </button>

          <button type="button" id="pfCopy">
            Copy profile
          </button>

          <button type="button" id="pfDownload">
            Download profile
          </button>

        </div>

        <p id="pfNoteStatus" role="status"></p>

      </section>

      <section class="pf-panel">

        <h3>06 · Historical &amp; Archaeological Evidence</h3>

        <p>
          Selected case studies connecting biblical
          figures with surviving external documents.
        </p>

        <div id="pfEvidence"></div>

        <p class="pf-muted">
          This is a selected evidence catalogue,
          not an exhaustive inventory of every
          externally attested biblical figure.
          Absence from this catalogue does not establish
          absence of historical evidence.
        </p>

      </section>

      <section class="pf-panel">

        <h3>07 · Evaluating Biblical Figures</h3>

        <details open>

          <summary>Biblical testimony</summary>

          <p>
            Biblical passages establish what the
            surviving scriptural texts communicate
            about an individual. Literary context,
            genre and textual transmission remain
            relevant to interpretation.
          </p>

        </details>

        <details>

          <summary>Direct external attestation</summary>

          <p>
            An inscription, document or other
            external record may identify an
            individual by name, title and historical
            circumstances.
          </p>

          <p>
            Identification requires more than
            similarity of names.
          </p>

        </details>

        <details>

          <summary>Indirect and contextual evidence</summary>

          <p>
            Archaeological evidence can illuminate
            a person's geographical setting,
            political environment or cultural
            background without establishing that
            individual's historical existence.
          </p>

        </details>

        <details>

          <summary>Chronological uncertainty</summary>

          <p>
            Exact birth dates, death dates and
            genealogical chronologies cannot be
            established for many biblical figures.
            This directory does not assign invented
            dates to fill those gaps.
          </p>

        </details>

        <details>

          <summary>Individuals sharing a name</summary>

          <p>
            Biblical individuals frequently share
            names. Identification must account for
            their family, geographical setting,
            chronological setting and literary
            context.
          </p>

          <p>
            Distinct dataset identifiers are retained
            to avoid merging different individuals.
          </p>

        </details>

        <details>

          <summary>Scripture and theological interpretation</summary>

          <p>
            Historical identification does not by
            itself establish every theological claim
            associated with a figure. Distinguish
            historical investigation from matters of
            religious interpretation and belief.
          </p>

        </details>

      </section>

      <section class="pf-panel">

        <h3>08 · Research Sources</h3>

        <p>
          Structured proper-name data created for
          STEP Bible, based on work at Tyndale
          House, Cambridge.
        </p>

        <p>
          <a href="https://www.stepbible.org/"
             target="_blank" rel="noopener noreferrer">
            STEP Bible — biblical research platform
          </a>
        </p>

        <p>
          <a href="https://github.com/STEPBible/STEPBible-Data"
             target="_blank" rel="noopener noreferrer">
            TIPNR — original dataset and documentation
          </a>
        </p>

        <p>
          <a href="https://github.com/BSB-publishing/bsb-data"
             target="_blank" rel="noopener noreferrer">
            BSB data — structured conversion documentation
          </a>
        </p>

        <p>
          <a href="https://creativecommons.org/licenses/by/4.0/"
             target="_blank" rel="noopener noreferrer">
            Creative Commons Attribution 4.0
          </a>
        </p>

        <p>
          <a href="https://oracc.museum.upenn.edu/"
             target="_blank" rel="noopener noreferrer">
            ORACC — ancient cuneiform research
          </a>
        </p>

        <p>
          <a href="https://www.britishmuseum.org/collection"
             target="_blank" rel="noopener noreferrer">
            British Museum — collection catalogue
          </a>
        </p>

        <p>
          <a href="https://www.tyndalebulletin.org/"
             target="_blank" rel="noopener noreferrer">
            Tyndale Bulletin — biblical scholarship
          </a>
        </p>

        <p>
          <a href="https://bible-api.com/"
             target="_blank" rel="noopener noreferrer">
            Bible API — Scripture retrieval
          </a>
        </p>

        <div id="pfProvenance"></div>

        <p class="pf-muted">
          DesertBible filters, indexes and reformats
          the structured identification data.
          Extended AI-generated biographical descriptions
          are not imported. Source identifications
          are not independently verified person by person.
          Verse references may follow different
          numbering or translation traditions.
        </p>

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

    const anchor = make("a",title,parent);

    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    return anchor;
  }

  function button(parent,title,action) {

    const element = make("button",title,parent);

    element.type = "button";

    element.addEventListener("click",action);

    return element;
  }

  function normalize(value) {

    return String(value || "")
      .normalize("NFKD")
      .replace(/\p{M}/gu,"")
      .toLowerCase()
      .trim();
  }

  function readableID(value) {

    return String(value || "")
      .replace(/_/g," ")
      .replace(/@/g," · ");
  }

  function parseReference(value) {

    const result =
      /^([1-3]?[A-Z]+)\.(\d+)\.(\d+)$/
        .exec(String(value).toUpperCase());

    if (!result) return null;

    const aliases = {
      EZE:"EZK",
      SON:"SNG",
      NAH:"NAM",
      JOE:"JOL",
      JUDG:"JDG"
    };

    const code =
      aliases[result[1]] || result[1];

    if (!bookMap.has(code)) return null;

    return {
      code,
      chapter:Number(result[2]),
      verse:Number(result[3]),
      raw:value,
      label:
        bookMap.get(code) + " " +
        result[2] + ":" + result[3]
    };
  }

  function sortReferences(a,b) {

    return (
      bookOrder.get(a.code) -
      bookOrder.get(b.code) ||
      a.chapter - b.chapter ||
      a.verse - b.verse
    );
  }

  function getReferences(person) {

    const output = new Map();

    const names = Array.isArray(person.names)
      ? person.names
      : [];

    names.forEach(name => {

      if (!Array.isArray(name.verses)) return;

      name.verses.forEach(value => {

        const parsed = parseReference(value);

        if (parsed) {
          output.set(parsed.label,parsed);
        }
      });
    });

    return [...output.values()].sort(sortReferences);
  }

  function getName(person) {

    if (person.uniqueName) {

      return String(person.uniqueName)
        .split("@")[0];
    }

    if (Array.isArray(person.names)) {

      const entry = person.names.find(
        item => item.ESV_translation
      );

      if (entry) return entry.ESV_translation;
    }

    return readableID(person.id);
  }

  function nameVariants(person) {

    const variants = new Set();

    if (Array.isArray(person.names)) {

      person.names.forEach(name => {

        Object.entries(name).forEach(([key,value]) => {

          if (
            typeof value === "string" &&
            /translation|transliteration|hebrew|greek|lemma/i
              .test(key)
          ) {
            variants.add(value);
          }
        });
      });
    }

    variants.add(getName(person));

    return [...variants].filter(Boolean);
  }

  function prepareRecords(records) {

    const unique = new Map();

    records.forEach(record => {

      if (!record || typeof record !== "object") return;

      if (
        normalize(record.type) !== "person" ||
        !record.id
      ) return;

      if (unique.has(record.id)) return;

      const references = getReferences(record);

      const name = getName(record);
      const variants = nameVariants(record);

      const searchText = normalize(
        [name,record.id,record.uniqueName,...variants]
          .filter(Boolean)
          .join(" ")
      );

      unique.set(record.id,{
        raw:record,
        id:record.id,
        name,
        variants,
        references,
        searchText,
        ot:references.some(
          ref => bookOrder.get(ref.code) < 39
        ),
        nt:references.some(
          ref => bookOrder.get(ref.code) >= 39
        )
      });
    });

    return [...unique.values()];
  }

  async function fetchJSON(url) {

    const response = await fetch(url);

    if (!response.ok) {

      throw new Error("HTTP " + response.status);
    }

    return response.json();
  }

  async function retrieveDataset() {

    if (window.DesertBiblePeopleDataset) {
      return window.DesertBiblePeopleDataset;
    }

    const folderAPI =
      "https://api.github.com/repos/BSB-publishing/" +
      "bsb-data-output/contents/base/proper-names";

    let files;

    try {

      files = await fetchJSON(folderAPI);

    } catch (error) {

      throw new Error(
        "The structured source directory could not be accessed: " +
        error.message
      );
    }

    if (!Array.isArray(files)) {

      throw new Error(
        "Unexpected source directory format."
      );
    }

    const candidates = files.filter(file =>

      file.type === "file" &&
      file.download_url &&
      /\.(json|jsonl)$/i.test(file.name) &&
      !/schema|metadata|manifest/i.test(file.name)

    ).sort((a,b) => {

      const priority = name =>
        /people|person|persons/i.test(name)
          ? 0
          : /proper|names/i.test(name)
          ? 1
          : 2;

      return priority(a.name) - priority(b.name);
    });

    for (const file of candidates) {

      try {

        const response = await fetch(file.download_url);

        if (!response.ok) continue;

        const raw = await response.text();

        let records;

        if (/\.jsonl$/i.test(file.name)) {

          records = raw.split(/\r?\n/)
            .filter(line => line.trim())
            .map(line => JSON.parse(line));

        } else {

          const data = JSON.parse(raw);

          if (Array.isArray(data)) {

            records = data;

          } else if (Array.isArray(data.people)) {

            records = data.people;

          } else if (Array.isArray(data.entries)) {

            records = data.entries;

          } else if (Array.isArray(data.records)) {

            records = data.records;

          } else {

            records = Object.values(data);
          }
        }

        const prepared = prepareRecords(records);

        if (prepared.length < 1000) continue;

        const result = {

          people:prepared,

          url:file.download_url,

          retrieved:new Date().toISOString(),

          sha:file.sha || ""

        };

        window.DesertBiblePeopleDataset = result;

        return result;

      } catch {

        continue;
      }
    }

    throw new Error(
      "No compatible full people dataset was found. " +
      "Inspect the source repository before retrying."
    );
  }

  books.forEach(([code,name]) => {

    const option = make("option",name,$("pfBook"));

    option.value = code;
  });

  async function loadDirectory() {

    $("pfReload").disabled = true;

    $("pfStatus").textContent =
      "Retrieving and indexing biblical people…";

    try {

      const result = await retrieveDataset();

      if (!root.isConnected) return;

      people = result.people;

      peopleMap = new Map(
        people.map(person => [person.id,person])
      );

      loadedSource = result.url;
      retrievedAt = result.retrieved;

      $("pfCount").textContent =
        people.length.toLocaleString();

      $("pfMentions").textContent =
        people.reduce(
          (sum,person) =>
            sum + person.references.length,
          0
        ).toLocaleString();

      $("pfProvenance").replaceChildren();

      link(
        $("pfProvenance"),
        "Inspect exact retrieved data file",
        loadedSource
      );

      make(
        "p",
        "Retrieved (UTC): " + retrievedAt,
        $("pfProvenance")
      );

      if (result.sha) {

        make(
          "p",
          "Source file Git blob SHA: " + result.sha,
          $("pfProvenance")
        );
      }

      $("pfStatus").textContent =
        "Biblical people directory loaded.";

      page = 0;

      renderDirectory();

    } catch (error) {

      $("pfStatus").textContent = error.message;

      $("pfDirectory").replaceChildren();

      link(
        $("pfDirectory"),
        "Inspect the external data repository",
        distribution
      );

    } finally {

      $("pfReload").disabled = false;
    }
  }

  function filteredPeople() {

    const search = normalize($("pfSearch").value);

    const testament = $("pfTestament").value;

    const book = $("pfBook").value;

    const chapter = Number($("pfChapter").value);

    const result = people.filter(person => {

      if (
        search &&
        !person.searchText.includes(search)
      ) return false;

      if (testament === "ot" && !person.ot) {
        return false;
      }

      if (testament === "nt" && !person.nt) {
        return false;
      }

      if (
        testament === "both" &&
        !(person.ot && person.nt)
      ) return false;

      if (book || chapter) {

        if (!person.references.some(reference =>

          (!book || reference.code === book) &&
          (!chapter || reference.chapter === chapter)

        )) return false;
      }

      return true;
    });

    const order = $("pfSort").value;

    if (order === "mentions") {

      result.sort((a,b) =>

        b.references.length -
        a.references.length ||
        a.name.localeCompare(b.name)

      );

    } else if (order === "scripture") {

      result.sort((a,b) => {

        if (!a.references.length) {
          return b.references.length ? 1 : 0;
        }

        if (!b.references.length) return -1;

        return sortReferences(
          a.references[0],
          b.references[0]
        );
      });

    } else {

      result.sort((a,b) =>

        a.name.localeCompare(b.name) ||
        a.id.localeCompare(b.id)

      );
    }

    return result;
  }

  function renderDirectory() {

    const filtered = filteredPeople();

    const pages = Math.max(
      1,Math.ceil(filtered.length/pageSize)
    );

    page = Math.min(
      Math.max(page,0),
      pages-1
    );

    $("pfDirectory").replaceChildren();

    $("pfSummary").textContent =
      filtered.length.toLocaleString() +
      " matching individual records.";

    $("pfPage").textContent =
      "Page " + (page+1) + " of " + pages;

    $("pfBack").disabled = page === 0;

    $("pfNext").disabled = page+1 >= pages;

    const visible = filtered.slice(
      page*pageSize,
      (page+1)*pageSize
    );

    if (!visible.length) {

      make(
        "p",
        "No matching people found.",
        $("pfDirectory")
      );

      return;
    }

    visible.forEach(person => {

      const card = make(
        "article",undefined,$("pfDirectory")
      );

      card.className = "pf-card";

      make("h3",person.name,card);

      const id = make(
        "p",
        person.id,
        card
      );

      id.className = "pf-muted";

      make(
        "p",
        person.references.length +
        " indexed verse references",
        card
      );

      if (person.references.length) {

        make(
          "p",
          "First indexed occurrence: " +
          person.references[0].label,
          card
        );
      }

      make(
        "p",
        person.ot && person.nt
          ? "Old and New Testament appearances"
          : person.ot
          ? "Old Testament appearances"
          : person.nt
          ? "New Testament appearances"
          : "No recognized verse references",
        card
      );

      button(
        card,
        "Open research profile",
        () => openProfile(person)
      );
    });
  }

  function renderNames(person) {

    $("pfNames").replaceChildren();

    if (!Array.isArray(person.raw.names)) {

      make(
        "p",
        "No structured name forms supplied.",
        $("pfNames")
      );

      return;
    }

    person.raw.names.forEach((entry,index) => {

      const details = make(
        "details",undefined,$("pfNames")
      );

      make(
        "summary",
        entry.ESV_translation ||
        entry.strongs ||
        "Name record " + (index+1),
        details
      );

      const fields = Object.entries(entry)
        .filter(([key,value]) =>

          typeof value === "string" &&
          /translation|transliteration|hebrew|greek|lemma|strong/i
            .test(key)

        );

      fields.forEach(([key,value]) => {

        const p = make("p",undefined,details);

        make(
          "strong",
          key.replace(/_/g," ") + ": ",
          p
        );

        p.append(value);
      });

      if (Array.isArray(entry.verses)) {

        make(
          "p",
          entry.verses.length +
          " source reference entries.",
          details
        );
      }
    });
  }

  function renderRelations(person) {

    const panel = $("pfRelations");

    panel.replaceChildren();

    const relations = person.raw.relations;

    if (
      !relations ||
      !Object.keys(relations).length
    ) {

      make(
        "p",
        "No family relationship records supplied by this dataset.",
        panel
      );

      return;
    }

    Object.entries(relations).forEach(([role,value]) => {

      const section = make("div",undefined,panel);

      make(
        "h4",
        role.replace(/_/g," "),
        section
      );

      const entries = Array.isArray(value)
        ? value
        : [value];

      entries.forEach(entry => {

        const identifier =
          typeof entry === "string"
            ? entry
            : entry?.id || entry?.name;

        if (!identifier) return;

        const related = peopleMap.get(identifier);

        if (related) {

          const actions = make(
            "div",undefined,section
          );

          actions.className = "pf-actions";

          button(

            actions,

            related.name + " · " + related.id,

            () => openProfile(related)

          );

        } else {

          make(
            "p",
            readableID(identifier) +
            " — source relationship identifier",
            section
          );
        }
      });
    });
  }

  function notesKey(person) {

    return "DesertBible.people.notes." + person.id;
  }

  function openProfile(person) {

    selected = person;

    selectedReferences = person.references;

    profileVersion++;

    $("pfProfilePanel").hidden = false;

    $("pfName").textContent = person.name;

    $("pfIdentity").replaceChildren();

    make(
      "p",
      "Individual identifier: " + person.id,
      $("pfIdentity")
    );

    make(
      "p",
      "Source identity: " +
        (person.raw.uniqueName || person.id),
      $("pfIdentity")
    );

    make(
      "p",
      "Recorded name forms: " +
        person.variants.join(" · "),
      $("pfIdentity")
    );

    make(
      "p",
      person.references.length +
        " indexed Scripture occurrences.",
      $("pfIdentity")
    );

    if (person.references.length) {

      make(
        "p",
        "First indexed biblical occurrence: " +
          person.references[0].label,
        $("pfIdentity")
      );

      make(
        "p",
        "Last indexed biblical occurrence: " +
          person.references[
            person.references.length-1
          ].label,
        $("pfIdentity")
      );
    }

    make(
      "p",
      "Canonical reference order is not a chronological biography.",
      $("pfIdentity")
    ).className = "pf-muted";

    renderNames(person);

    renderRelations(person);

    $("pfRefBook").replaceChildren();

    const all = make(
      "option","All books",$("pfRefBook")
    );

    all.value = "";

    const usedBooks = new Set(
      person.references.map(ref => ref.code)
    );

    books.forEach(([code,name]) => {

      if (!usedBooks.has(code)) return;

      const option = make(
        "option",name,$("pfRefBook")
      );

      option.value = code;
    });

    $("pfNotes").value = "";

    $("pfNoteStatus").textContent = "";

    try {

      $("pfNotes").value =
        localStorage.getItem(notesKey(person)) || "";

    } catch {

      $("pfNoteStatus").textContent =
        "Local note storage is unavailable.";
    }

    refPage = 0;

    renderReferences();

    $("pfProfilePanel").scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }

  async function retrieveScripture(reference,edition) {

    const url = api +
      encodeURIComponent(reference) +
      "?translation=" + edition;

    if (textCache.has(url)) {

      return textCache.get(url);
    }

    const response = await fetch(url);

    if (response.status === 429) {

      throw new Error(
        "Scripture source rate limit reached. Retry shortly."
      );
    }

    if (!response.ok) {

      throw new Error(
        "Scripture source returned HTTP " +
          response.status
      );
    }

    const data = await response.json();

    if (
      !Array.isArray(data.verses) ||
      !data.verses.length
    ) {

      throw new Error(
        "No Scripture text returned."
      );
    }

    const result = {
      url,
      verses:data.verses
    };

    textCache.set(url,result);

    return result;
  }

  function scripturePreview(parent,reference) {

    const output = make("div",undefined,parent);

    const control = button(
      parent,
      "Read Scripture",
      async () => {

        if (control.dataset.loaded === "true") {

          output.hidden = !output.hidden;

          control.textContent = output.hidden
            ? "Read Scripture"
            : "Hide Scripture";

          return;
        }

        control.disabled = true;

        const edition = $("pfEdition").value;

        output.textContent = "Retrieving Scripture…";

        try {

          const result = await retrieveScripture(
            reference,edition
          );

          if (!output.isConnected) return;

          output.replaceChildren();

          make(
            "p",
            edition.toUpperCase() +
              " · " + reference,
            output
          );

          result.verses.forEach(verse => {

            make(
              "blockquote",
              verse.chapter + ":" +
                verse.verse + " — " +
                String(verse.text || "").trim(),
              output
            );
          });

          link(
            output,
            "Verify Scripture source",
            result.url
          );

          control.dataset.loaded = "true";

          control.textContent = "Hide Scripture";

        } catch (error) {

          output.textContent = error.message;

        } finally {

          control.disabled = false;
        }
      }
    );
  }

  function renderReferences() {

    $("pfReferences").replaceChildren();

    if (!selected) return;

    const book = $("pfRefBook").value;

    const filtered = selectedReferences.filter(
      ref => !book || ref.code === book
    );

    const pages = Math.max(

      1,

      Math.ceil(
        filtered.length/referencePageSize
      )

    );

    refPage = Math.min(
      Math.max(refPage,0),
      pages-1
    );

    $("pfRefPage").textContent =
      filtered.length + " references · Page " +
      (refPage+1) + " of " + pages;

    $("pfRefBack").disabled = refPage === 0;

    $("pfRefNext").disabled = refPage+1 >= pages;

    const visible = filtered.slice(
      refPage*referencePageSize,
      (refPage+1)*referencePageSize
    );

    if (!visible.length) {

      make(
        "p",
        "No recognized reference entries available.",
        $("pfReferences")
      );
    }

    visible.forEach(reference => {

      const row = make(
        "div",undefined,$("pfReferences")
      );

      row.className = "pf-reference";

      make("h4",reference.label,row);

      scripturePreview(row,reference.label);

      link(

        row,

        "Examine passage in STEP Bible",

        "https://www.stepbible.org/?q=version=KJV|reference=" +
          encodeURIComponent(reference.label)

      );
    });
  }

  function renderEvidence() {

    evidence.forEach(record => {

      const article = make(
        "article",undefined,$("pfEvidence")
      );

      article.className = "pf-card";

      article.style.marginBottom = "14px";

      make("h3",record.name,article);

      make("p",record.role,article);

      make("p",record.period,article);

      make(
        "p",
        record.status,
        article
      ).className = "pf-tag";

      make("h4","Biblical testimony",article);

      make("p",record.biblical,article);

      record.passages.forEach(reference => {

        const section = make(
          "div",undefined,article
        );

        section.className = "pf-reference";

        make("strong",reference,section);

        scripturePreview(section,reference);
      });

      make("h4","External evidence",article);

      make("p",record.object,article);

      make("p","Date: " + record.date,article);

      make("p",record.finding,article);

      make("h4","Evidence limitations",article);

      make("p",record.limitation,article);

      link(article,record.institution,record.url);

      const actions = make(
        "div",undefined,article
      );

      actions.className = "pf-actions";

      button(actions,"Find in people directory",() => {

        $("pfSearch").value = record.name;

        $("pfTestament").value = "all";

        $("pfBook").value = "";

        $("pfChapter").value = "";

        page = 0;

        renderDirectory();

        $("pfSearch").scrollIntoView({
          behavior:"smooth",
          block:"center"
        });
      });
    });
  }

  function exportProfile() {

    if (!selected) return "";

    const lines = [

      "DESERTBIBLE — PEOPLE & FIGURES",

      "",

      "Name: " + selected.name,

      "Individual identifier: " + selected.id,

      "Source identity: " +
        (selected.raw.uniqueName || selected.id),

      "Recorded name forms: " +
        selected.variants.join("; "),

      "Exported (UTC): " +
        new Date().toISOString(),

      "",

      "FAMILY RELATIONSHIP DATA",

      JSON.stringify(
        selected.raw.relations || {},
        null,
        2
      ),

      "",

      "SCRIPTURE OCCURRENCES",

      ...selected.references.map(ref => ref.label),

      "",

      "PERSONAL RESEARCH NOTES",

      $("pfNotes").value || "No notes recorded.",

      "",

      "SOURCE ATTRIBUTION",

      "Data created for STEP Bible.",

      "https://www.stepbible.org/",

      source,

      "Structured conversion: " + distribution,

      "Retrieved file: " + loadedSource,

      "Retrieved (UTC): " + retrievedAt,

      "Licence: CC BY 4.0",

      license,

      "",

      "DesertBible reformats and filters source data.",

      "Individual identifications and relationships require critical verification.",

      "Canonical order does not establish historical chronology."

    ];

    return lines.join("\n");
  }

  $("pfSave").addEventListener("click",() => {

    if (!selected) return;

    try {

      localStorage.setItem(
        notesKey(selected),
        $("pfNotes").value
      );

      $("pfNoteStatus").textContent =
        "Notes saved in this browser.";

    } catch {

      $("pfNoteStatus").textContent =
        "Local storage unavailable. Download the profile instead.";
    }
  });

  $("pfCopy").addEventListener("click",async () => {

    if (!selected) return;

    try {

      await navigator.clipboard.writeText(
        exportProfile()
      );

      $("pfNoteStatus").textContent =
        "Research profile copied.";

    } catch {

      $("pfNoteStatus").textContent =
        "Clipboard unavailable. Use Download profile.";
    }
  });

  $("pfDownload").addEventListener("click",() => {

    if (!selected) return;

    const blob = new Blob(
      [exportProfile()],
      {type:"text/plain;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;

    anchor.download =
      "DesertBible-Person-" +
      selected.id.replace(/[^a-zA-Z0-9_-]/g,"-") +
      ".txt";

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );
  });

  [
    "pfSearch",
    "pfTestament",
    "pfBook",
    "pfChapter",
    "pfSort"
  ].forEach(id => {

    $(id).addEventListener(

      id === "pfSearch" ||
      id === "pfChapter"
        ? "input"
        : "change",

      () => {

        page = 0;

        renderDirectory();
      }
    );
  });

  $("pfReset").addEventListener("click",() => {

    $("pfSearch").value = "";

    $("pfTestament").value = "all";

    $("pfBook").value = "";

    $("pfChapter").value = "";

    $("pfSort").value = "name";

    page = 0;

    renderDirectory();
  });

  $("pfBack").addEventListener("click",() => {

    page--;

    renderDirectory();
  });

  $("pfNext").addEventListener("click",() => {

    page++;

    renderDirectory();
  });

  $("pfRefBook").addEventListener("change",() => {

    refPage = 0;

    renderReferences();
  });

  $("pfEdition").addEventListener("change",() => {

    renderReferences();
  });

  $("pfRefBack").addEventListener("click",() => {

    refPage--;

    renderReferences();
  });

  $("pfRefNext").addEventListener("click",() => {

    refPage++;

    renderReferences();
  });

  $("pfReload").addEventListener("click",() => {

    delete window.DesertBiblePeopleDataset;

    loadDirectory();
  });

  $("pfClose").addEventListener("click",() => {

    profileVersion++;

    workspace.remove();
  });

  renderEvidence();

  workspace.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

  loadDirectory();
}

function openHistoricalTimeline(workspace) {
  "use strict";

  const sources = {

    iron: {
      name:"Metropolitan Museum of Art — Iron Age chronology",
      url:"https://resources.metmuseum.org/resources/metpublications/pdf/Assyria_to_Iberia_Art_and_Culture_in_the_Iron_Age.pdf"
    },

    levant: {
      name:"Metropolitan Museum of Art — Eastern Mediterranean chronology",
      url:"https://www.metmuseum.org/fr/toah/ht/04/wae.html"
    },

    mesopotamia: {
      name:"Metropolitan Museum of Art — Mesopotamian chronology",
      url:"https://artistproject.metmuseum.org/toah/ht/04/wam.html"
    },

    israel: {
      name:"Jewish Museum — Timeline of Ancient Israel",
      url:"https://s3.amazonaws.com/tjmassets/programs_educator_resources_pdf/JM_Archaeology_CurriculumGuide.pdf"
    },

    cyrus: {
      name:"Metropolitan Museum of Art — Cyrus and the Judean Diaspora",
      url:"https://www.metmuseum.org/de/perspectives/cyrus-and-the-judean-diaspora"
    },

    second: {
      name:"Teach Jewish History — Second Temple Period",
      url:"https://teachjewishhistory.org/supplement-second-temple"
    },

    roman: {
      name:"Metropolitan Museum of Art — The World between Empires",
      url:"https://resources.metmuseum.org/resources/metpublications/pdf/The_World_between_Empires_Art_and_Identity_in_the_Ancient_Middle_East.pdf"
    },

    josephus: {
      name:"Josephus — Jewish Antiquities and Jewish War",
      url:"https://attalus.org/info/josephus.html"
    },

    assyria: {
      name:"ORACC — Open Richly Annotated Cuneiform Corpus",
      url:"https://oracc.museum.upenn.edu/"
    },

    museum: {
      name:"British Museum — Collection catalogue",
      url:"https://www.britishmuseum.org/collection"
    },

    scrolls: {
      name:"Leon Levy Dead Sea Scrolls Digital Library",
      url:"https://www.deadseascrolls.org.il/"
    },

    sinaiticus: {
      name:"Codex Sinaiticus manuscript project",
      url:"https://www.codexsinaiticus.org/"
    },

    fathers: {
      name:"Early Christian writings — Patristic texts",
      url:"https://www.newadvent.org/fathers/"
    },

    testament: {
      name:"STEP Bible — Scripture research",
      url:"https://www.stepbible.org/"
    },

    ancient: {
      name:"Historical and Biblical Israel — History, Tradition and Archives",
      url:"https://www.thetbs.org/study-materials/wp-content/uploads/2023/03/Historical_and_biblical_Israel_the_history_tradition_and_archives.pdf"
    },

    judea: {
      name:"Second Temple Period — Historical overview",
      url:"https://www.gov.il/en/pages/history-the-second-temple-period"
    }

  };

  const periods = [
    "Primeval history",
    "Patriarchal period",
    "Exodus and settlement",
    "Judges and monarchy",
    "Divided kingdoms",
    "Babylonian exile",
    "Persian period",
    "Hellenistic period",
    "Roman and New Testament period",
    "Early Christianity"
  ];

  const statusLabels = {
    biblical:"Biblical narrative — undated",
    disputed:"Disputed chronology",
    approximate:"Approximate historical date",
    established:"Established historical anchor"
  };

  /*
    Record structure:
    Date label,
    Start year,
    End year,
    Period index,
    Evidence status,
    Event title,
    Location,
    Scripture references,
    Description,
    Evidence limitations,
    Historical source identifiers.

    Negative years represent BCE.
    Positive years represent CE.
    Null years represent undated narratives.
  */

  const data = [

    [
      "Undated",null,null,0,"biblical",
      "Creation",
      "The created world",
      ["Genesis 1:1-31","Genesis 2:1-25"],
      "Genesis introduces God as creator and describes the ordering of the world and humanity's place within creation.",
      "No independently established calendar date is assigned. Interpretations of the creation accounts and their relationship to natural history differ.",
      []
    ],

    [
      "Undated",null,null,0,"biblical",
      "Human disobedience and Eden",
      "Eden — geographical identification uncertain",
      ["Genesis 3:1-24"],
      "The narrative describes human disobedience, judgment and expulsion from Eden.",
      "The geographical location of Eden and a calendar date for the narrative cannot be established from available external evidence.",
      []
    ],

    [
      "Undated",null,null,0,"biblical",
      "Cain and Abel",
      "Geographical setting uncertain",
      ["Genesis 4:1-16"],
      "Genesis describes the first brothers, their offerings and the death of Abel.",
      "The narrative has no independently established calendar chronology.",
      []
    ],

    [
      "Undated",null,null,0,"biblical",
      "Noah and the flood",
      "Geographical extent disputed",
      ["Genesis 6:9-22","Genesis 8:1-22","Genesis 9:1-17"],
      "The flood narrative concerns judgment, preservation and God's covenant with Noah.",
      "Ancient Near Eastern flood traditions provide comparative literary evidence but do not establish a calendar date for Noah or independently verify a worldwide flood.",
      ["mesopotamia"]
    ],

    [
      "Undated",null,null,0,"biblical",
      "Babel and the dispersion",
      "Shinar",
      ["Genesis 11:1-9"],
      "Genesis associates Babel with human construction, linguistic division and dispersion.",
      "Mesopotamian urban traditions provide cultural context. No specific archaeological tower is securely identified as the biblical tower.",
      ["mesopotamia"]
    ],

    [
      "Undated",null,null,1,"biblical",
      "Abraham's migration",
      "Mesopotamia and Canaan",
      ["Genesis 11:27-32","Genesis 12:1-9"],
      "The narrative follows Abram from his ancestral homeland toward Canaan.",
      "Ancient Near Eastern cultural parallels cannot securely establish Abraham's individual dates or identify him in contemporary external records.",
      []
    ],

    [
      "Undated",null,null,1,"biblical",
      "Covenant with Abraham",
      "Canaan",
      ["Genesis 15:1-21","Genesis 17:1-27"],
      "Genesis describes divine promises involving descendants, land and covenant identity.",
      "The covenant is a biblical and theological claim rather than an independently dated political event.",
      []
    ],

    [
      "Undated",null,null,1,"biblical",
      "Isaac and Jacob",
      "Canaan and Mesopotamia",
      ["Genesis 26:1-33","Genesis 28:10-22","Genesis 32:22-32"],
      "The patriarchal narratives continue through Isaac and Jacob, whose name Israel becomes associated with the descendants of the patriarchs.",
      "Secure independent dates for these individuals are unavailable.",
      []
    ],

    [
      "Undated",null,null,1,"biblical",
      "Joseph in Egypt",
      "Egypt",
      ["Genesis 37:1-36","Genesis 41:37-57","Genesis 46:1-7"],
      "Genesis depicts Joseph's rise in Egypt and the migration of Jacob's household.",
      "No Egyptian official is securely identified as the biblical Joseph. Proposed dynastic identifications remain speculative.",
      []
    ],

    [
      "Date disputed",null,null,2,"disputed",
      "Moses and the Exodus",
      "Egypt and wilderness",
      ["Exodus 3:1-15","Exodus 12:29-42","1 Kings 6:1"],
      "Exodus describes Israel's departure from Egyptian bondage under Moses.",
      "Fifteenth-century and thirteenth-century BCE proposals are among traditional chronological reconstructions. No consensus independently establishes the event's date or scale.",
      []
    ],

    [
      "Date disputed",null,null,2,"disputed",
      "Sinai covenant and wilderness period",
      "Sinai and wilderness",
      ["Exodus 19:1-25","Exodus 20:1-21","Numbers 14:26-35"],
      "The biblical account connects Israel's wilderness experience with covenant law and national identity.",
      "The calendar chronology depends on disputed Exodus reconstructions. The identification of Mount Sinai is also uncertain.",
      []
    ],

    [
      "Date disputed",null,null,2,"disputed",
      "Joshua and settlement in Canaan",
      "Canaan",
      ["Joshua 1:1-9","Joshua 6:1-27","Joshua 24:1-28"],
      "Joshua describes Israelite entry into Canaan, military encounters and covenant renewal.",
      "Archaeological evidence for settlement and destruction varies by site. No single universally accepted conquest chronology exists.",
      ["israel"]
    ],

    [
      "c. 1208 BCE",-1208,-1208,2,"approximate",
      "Israel in the Merneptah inscription",
      "Egypt and Canaan",
      [],
      "An Egyptian victory inscription from Merneptah's reign contains an early extra-biblical reference generally understood as Israel.",
      "The inscription attests a group called Israel in Canaan. It does not establish the Exodus chronology or the group's complete origins.",
      ["museum","israel"]
    ],

    [
      "Date disputed",null,null,3,"disputed",
      "Period of the Judges",
      "Israelite settlements",
      ["Judges 2:6-23","Judges 4:1-24","Judges 6:1-24"],
      "Judges presents regional leaders and recurring narratives of oppression, deliverance and religious disobedience.",
      "The durations in Judges cannot automatically be combined into an independently verified consecutive chronology.",
      []
    ],

    [
      "c. 1020 BCE",-1020,-1020,3,"approximate",
      "Saul and the emergence of monarchy",
      "Israel",
      ["1 Samuel 9:15-27","1 Samuel 10:1-24"],
      "First Samuel describes Saul's appointment as king and the emergence of centralized royal leadership.",
      "The date is conventional and approximate. Saul's exact reign remains uncertain.",
      ["israel"]
    ],

    [
      "c. 1000–960 BCE",-1000,-960,3,"approximate",
      "Reign of David",
      "Judah and Jerusalem",
      ["2 Samuel 5:1-12","2 Samuel 7:8-16"],
      "The biblical account associates David with Jerusalem, royal consolidation and the Davidic dynasty.",
      "The extent and organization of David's kingdom remain debated. The later Tel Dan inscription is relevant to the dynasty.",
      ["israel"]
    ],

    [
      "Tenth century BCE",-999,-900,3,"approximate",
      "Solomon and the First Temple",
      "Jerusalem",
      ["1 Kings 3:5-15","1 Kings 6:1-14","1 Kings 8:1-21"],
      "Kings attributes the construction of the Jerusalem Temple and major royal projects to Solomon.",
      "The exact chronology and extent of Solomon's kingdom remain debated; the biblical description is not a surviving architectural survey.",
      ["israel"]
    ],

    [
      "Late tenth century BCE",-930,-920,4,"approximate",
      "Division of Israel and Judah",
      "Samaria region and Jerusalem",
      ["1 Kings 12:1-24"],
      "The biblical narrative describes the separation of the northern kingdom from the Davidic kingdom of Judah.",
      "The exact year varies among chronological reconstructions.",
      ["israel","cyrus"]
    ],

    [
      "c. 925 BCE",-925,-925,4,"approximate",
      "Campaign of Shoshenq I",
      "Egypt and southern Levant",
      ["1 Kings 14:25-28","2 Chronicles 12:1-9"],
      "The Egyptian ruler commonly identified with biblical Shishak conducted a campaign recorded at Karnak.",
      "The Egyptian inscription and biblical account are not identical descriptions. Their relationship requires comparison.",
      ["museum","israel"]
    ],

    [
      "Ninth century BCE",-899,-800,4,"approximate",
      "Omri and the northern kingdom",
      "Samaria",
      ["1 Kings 16:21-28"],
      "Omri is associated with the establishment of Samaria as a royal center.",
      "External inscriptions illuminate the importance of the Omride state without independently confirming every biblical detail.",
      ["iron","assyria"]
    ],

    [
      "853 BCE",-853,-853,4,"established",
      "Battle of Qarqar",
      "Syria",
      [],
      "The Assyrian account of Shalmaneser III names Ahab of Israel among rulers involved in resistance to Assyria.",
      "The royal inscription supplies an external historical anchor. The battle is not explicitly narrated in Kings.",
      ["assyria","iron"]
    ],

    [
      "Ninth century BCE",-899,-800,4,"approximate",
      "Elijah and Elisha",
      "Israel and surrounding regions",
      ["1 Kings 17:1-24","1 Kings 18:17-40","2 Kings 2:1-15"],
      "The biblical narratives place Elijah and Elisha within the political and religious environment of the northern monarchy.",
      "The approximate period follows the kings associated with their narratives. Individual events lack independently established dates.",
      ["iron"]
    ],

    [
      "841 BCE",-841,-841,4,"established",
      "Jehu and Assyrian tribute",
      "Israel and Assyria",
      ["2 Kings 9:1-13","2 Kings 10:28-36"],
      "The Black Obelisk of Shalmaneser III records tribute associated with Jehu.",
      "The inscription does not establish that the depicted tribute bearer is necessarily Jehu himself.",
      ["assyria","museum"]
    ],

    [
      "Ninth century BCE",-899,-800,4,"approximate",
      "Mesha and the kingdom of Moab",
      "Moab",
      ["2 Kings 3:4-27"],
      "The Mesha inscription provides a Moabite perspective on conflict involving Israel.",
      "The biblical account and royal inscription differ in perspective and cannot be treated as identical reports.",
      ["museum","iron"]
    ],

    [
      "Ninth century BCE",-899,-800,4,"approximate",
      "Tel Dan inscription",
      "Tel Dan",
      ["2 Samuel 7:11-16"],
      "The Aramaic inscription contains wording widely interpreted as a reference to the House of David.",
      "It supports the existence of a recognized dynastic designation. It is not a contemporary biography of David.",
      ["museum","iron"]
    ],

    [
      "Eighth century BCE",-799,-700,4,"approximate",
      "Amos and Hosea",
      "Northern kingdom of Israel",
      ["Amos 1:1","Hosea 1:1"],
      "These prophetic books identify their messages with rulers of the eighth century BCE.",
      "The historical settings of prophetic activity should be distinguished from the later collection and editing of prophetic books.",
      ["iron"]
    ],

    [
      "Eighth century BCE",-799,-700,4,"approximate",
      "Isaiah and Micah",
      "Judah, Samaria and Jerusalem",
      ["Isaiah 1:1","Micah 1:1-9"],
      "The prophetic books associate Isaiah and Micah with Judah's eighth-century political and religious crises.",
      "Individual oracles cannot all be assigned exact calendar dates from their superscriptions.",
      ["iron","levant"]
    ],

    [
      "734–732 BCE",-734,-732,4,"established",
      "Syro-Ephraimite crisis",
      "Judah, Israel and Damascus",
      ["2 Kings 16:5-9","Isaiah 7:1-17"],
      "Judah faced pressure from neighboring kingdoms as Assyria expanded under Tiglath-Pileser III.",
      "Assyrian and biblical sources provide different perspectives on the crisis.",
      ["iron","assyria"]
    ],

    [
      "722/721 BCE",-722,-721,4,"established",
      "Fall of Samaria",
      "Samaria",
      ["2 Kings 17:1-23","2 Kings 18:9-12"],
      "Assyria conquered the northern kingdom and incorporated its territory into imperial administration.",
      "Sources differ in details of the final conquest and the respective roles of Shalmaneser V and Sargon II.",
      ["iron","cyrus"]
    ],

    [
      "701 BCE",-701,-701,4,"established",
      "Sennacherib's campaign against Judah",
      "Lachish and Jerusalem",
      ["2 Kings 18:13-37","2 Kings 19:1-37","Isaiah 36:1-22"],
      "Assyrian royal inscriptions and reliefs document Sennacherib's campaign against Judah during Hezekiah's reign.",
      "The Assyrian account does not claim the capture of Jerusalem. The sources differ in their explanations of the campaign's outcome.",
      ["iron","assyria","museum"]
    ],

    [
      "c. 622 BCE",-622,-622,4,"approximate",
      "Josiah's reforms",
      "Jerusalem and Judah",
      ["2 Kings 22:1-20","2 Kings 23:1-25"],
      "Kings connects Josiah's reforms with the discovery of a law book and changes to religious practice.",
      "The date follows conventional regnal chronology. The scope and literary history of the reforms remain debated.",
      ["ancient"]
    ],

    [
      "612 BCE",-612,-612,4,"established",
      "Fall of Nineveh",
      "Assyria",
      ["Nahum 3:1-19","Zephaniah 2:13-15"],
      "Babylonian and Median forces captured Nineveh, severely weakening Assyrian imperial power.",
      "The historical event provides context for prophetic literature but does not independently date every oracle.",
      ["iron","mesopotamia"]
    ],

    [
      "609 BCE",-609,-609,4,"established",
      "Josiah and the Egyptian intervention",
      "Megiddo",
      ["2 Kings 23:29-30","2 Chronicles 35:20-24"],
      "The biblical accounts place Josiah's death during Pharaoh Necho's northern campaign.",
      "The narratives differ in detail, and the wider international campaign supplies the historical chronological anchor.",
      ["ancient","levant"]
    ],

    [
      "605 BCE",-605,-605,4,"established",
      "Battle of Carchemish",
      "Carchemish",
      ["Jeremiah 46:1-12"],
      "Babylon defeated Egyptian forces and extended its dominance over the region.",
      "The battle provides a secure context for Judah's changing political circumstances.",
      ["iron","ancient","cyrus"]
    ],

    [
      "597 BCE",-597,-597,5,"established",
      "First major Babylonian capture of Jerusalem",
      "Jerusalem and Babylon",
      ["2 Kings 24:8-17"],
      "Nebuchadnezzar captured Jerusalem and removed King Jehoiachin, installing Zedekiah.",
      "Babylonian historical records provide external chronological support; the exile involved multiple deportations.",
      ["ancient","cyrus"]
    ],

    [
      "Early sixth century BCE",-599,-570,5,"approximate",
      "Jeremiah and Ezekiel",
      "Judah and Babylonia",
      ["Jeremiah 1:1-3","Ezekiel 1:1-3"],
      "The books associate prophetic activity with the final years of Judah and the Babylonian exile.",
      "The indicated period is contextual, not a complete lifespan or a date for the books' final forms.",
      ["ancient"]
    ],

    [
      "587/586 BCE",-587,-586,5,"established",
      "Destruction of Jerusalem and the First Temple",
      "Jerusalem",
      ["2 Kings 25:1-21","Jeremiah 52:12-30"],
      "Babylon destroyed Jerusalem's royal and religious institutions and deported members of the population.",
      "The one-year difference in scholarly dates reflects chronological and calendrical reconstruction.",
      ["levant","mesopotamia","iron"]
    ],

    [
      "Sixth century BCE",-599,-500,5,"approximate",
      "Judean life in Babylonia",
      "Babylonia",
      ["Jeremiah 29:1-14","Psalm 137:1-9"],
      "The exile produced enduring Judean communities outside the homeland.",
      "Documents relating to Judeans in Babylonia illuminate social and economic life; they do not independently confirm every narrative.",
      ["ancient"]
    ],

    [
      "539 BCE",-539,-539,6,"established",
      "Cyrus conquers Babylon",
      "Babylon",
      ["Isaiah 45:1-7","Daniel 5:25-31"],
      "The Persian conquest ended Neo-Babylonian imperial rule and initiated a new political order.",
      "The conquest is externally dated. Particular literary details in Daniel require separate evaluation.",
      ["iron","mesopotamia","cyrus"]
    ],

    [
      "c. 538 BCE",-538,-538,6,"approximate",
      "Return and restoration under Persian rule",
      "Judah and Babylonia",
      ["Ezra 1:1-11","Ezra 2:1-2"],
      "Ezra associates Cyrus with permission to return and restore the Jerusalem Temple.",
      "The Cyrus Cylinder documents broader restoration policies, but does not specifically name Jerusalem or reproduce Ezra's decree.",
      ["cyrus","second"]
    ],

    [
      "520 BCE",-520,-520,6,"established",
      "Haggai and Zechariah",
      "Jerusalem",
      ["Haggai 1:1-15","Zechariah 1:1-6"],
      "These prophetic texts contain regnal dates associated with Darius I and encourage restoration of the Temple.",
      "The dates apply to specified prophetic settings, not necessarily the final composition of the books.",
      ["ancient"]
    ],

    [
      "c. 516/515 BCE",-516,-515,6,"approximate",
      "Completion of the Second Temple",
      "Jerusalem",
      ["Ezra 6:13-22"],
      "Ezra places the Temple's completion in the sixth regnal year of Darius I.",
      "Calendar conventions account for variation in modern year labels.",
      ["second","ancient"]
    ],

    [
      "Fifth century BCE",-499,-400,6,"approximate",
      "Persian royal setting of Esther",
      "Susa",
      ["Esther 1:1-9","Esther 4:10-17"],
      "Esther places its story within the Persian imperial court of Ahasuerus, commonly identified with Xerxes I.",
      "The narrative's individual events and figures are not all independently attested.",
      ["mesopotamia"]
    ],

    [
      "Fifth century BCE",-499,-400,6,"approximate",
      "Ezra and the restoration of communal law",
      "Jerusalem",
      ["Ezra 7:1-26","Nehemiah 8:1-12"],
      "Ezra is associated with instruction in the law and the restoration community.",
      "The identification of the relevant Artaxerxes and Ezra's exact arrival date are debated.",
      ["ancient"]
    ],

    [
      "c. 445/444 BCE",-445,-444,6,"approximate",
      "Nehemiah and Jerusalem's walls",
      "Jerusalem",
      ["Nehemiah 2:1-20","Nehemiah 6:15-16"],
      "Nehemiah describes authorization to rebuild Jerusalem's defenses during Persian rule.",
      "The date follows the conventional identification of Artaxerxes I and his twentieth regnal year.",
      ["ancient"]
    ],

    [
      "332 BCE",-332,-332,7,"established",
      "Alexander and the southern Levant",
      "Eastern Mediterranean",
      [],
      "Alexander's campaigns brought the region into the emerging Macedonian political order.",
      "This event supplies context for later Jewish and Christian history rather than a directly dated narrative in the Protestant Old Testament.",
      ["second","levant"]
    ],

    [
      "301 BCE",-301,-301,7,"established",
      "Ptolemaic control of the region",
      "Judea and Egypt",
      [],
      "The struggles among Alexander's successors resulted in Ptolemaic control of Judea.",
      "The transition is part of the broader political history of the Hellenistic kingdoms.",
      ["ancient","josephus"]
    ],

    [
      "c. 200–198 BCE",-200,-198,7,"approximate",
      "Seleucid control of Judea",
      "Judea",
      [],
      "Seleucid expansion displaced Ptolemaic control of the region.",
      "Military victory and subsequent political consolidation need not share a single date.",
      ["ancient","josephus"]
    ],

    [
      "167–164 BCE",-167,-164,7,"established",
      "Temple crisis and Maccabean revolt",
      "Jerusalem and Judea",
      ["Daniel 11:21-35"],
      "Policies associated with Antiochus IV provoked resistance and a struggle over Jewish religious institutions.",
      "First and Second Maccabees are major literary sources. Their canonical status differs among Christian traditions. Daniel's relationship to these events is interpreted differently.",
      ["second","josephus"]
    ],

    [
      "164 BCE",-164,-164,7,"established",
      "Rededication of the Jerusalem Temple",
      "Jerusalem",
      ["John 10:22-23"],
      "The rededication associated with Judas Maccabeus became the historical background of Hanukkah.",
      "John refers to the later observance, not the original rededication event. First Maccabees 4 is an important literary source.",
      ["second","josephus"]
    ],

    [
      "Second century BCE onward",-199,-1,7,"approximate",
      "Hasmonean rule and Jewish textual communities",
      "Judea",
      [],
      "Hasmonean political developments and diverse Jewish religious movements shaped the later Second Temple environment.",
      "The Dead Sea Scrolls represent diverse manuscripts and compositions; their dates and community associations vary.",
      ["second","scrolls","josephus"]
    ],

    [
      "63 BCE",-63,-63,8,"established",
      "Pompey captures Jerusalem",
      "Jerusalem",
      [],
      "Roman intervention brought Judea under increasing Roman political control.",
      "Judea's precise administrative status changed over subsequent decades.",
      ["roman","second","josephus"]
    ],

    [
      "37–4 BCE",-37,-4,8,"established",
      "Reign of Herod the Great",
      "Judea",
      ["Matthew 2:1-18"],
      "Herod ruled as a Roman-supported king and undertook extensive building projects.",
      "The conventional date of Herod's death is 4 BCE, although alternative reconstructions exist.",
      ["roman","judea","josephus"]
    ],

    [
      "27 BCE–14 CE",-27,14,8,"established",
      "Reign of Augustus",
      "Roman Empire",
      ["Luke 2:1-7"],
      "Augustus established the Roman imperial system within which the New Testament narratives begin.",
      "Augustus's securely dated reign does not itself establish the date or circumstances of Luke's census narrative.",
      ["roman"]
    ],

    [
      "c. 20–18 BCE",-20,-18,8,"approximate",
      "Herodian Temple reconstruction",
      "Jerusalem",
      ["John 2:19-21","Mark 13:1-2"],
      "Herod initiated major rebuilding and expansion of the Temple complex.",
      "Construction continued long after Herod. Ancient sources and modern chronological conversions yield slightly different commencement dates.",
      ["roman","josephus"]
    ],

    [
      "c. 6–4 BCE — common reconstruction",-6,-4,8,"disputed",
      "Birth of Jesus",
      "Bethlehem and Judea",
      ["Matthew 1:18-25","Matthew 2:1-12","Luke 2:1-20"],
      "Matthew and Luke contain infancy narratives concerning Jesus.",
      "The exact birth year is unknown. Matthew's Herodian setting and Luke's census reference create significant chronological questions.",
      ["josephus"]
    ],

    [
      "6 CE",6,6,8,"established",
      "Roman provincial administration of Judea",
      "Judea",
      ["Luke 2:1-2","Acts 5:37"],
      "Judea came under direct Roman administration following the removal of Archelaus. Quirinius is associated with a census in this period.",
      "This externally dated census creates a chronological difficulty when compared with the conventional date of Herod's death.",
      ["roman","josephus"]
    ],

    [
      "14–37 CE",14,37,8,"established",
      "Reign of Tiberius",
      "Roman Empire",
      ["Luke 3:1-2"],
      "Tiberius succeeded Augustus. Luke uses his reign as a chronological reference for the activity of John the Baptist.",
      "Conversion of regnal years can depend on the method used to count an emperor's reign.",
      ["josephus"]
    ],

    [
      "26–36 CE",26,36,8,"established",
      "Administration of Pontius Pilate",
      "Judea",
      ["Matthew 27:11-26","John 18:28-40"],
      "Pilate governed Judea as a Roman prefect during the period associated with Jesus's public activity.",
      "The Caesarea inscription and ancient literary sources attest Pilate; they do not independently establish every detail of the Gospel trial accounts.",
      ["josephus"]
    ],

    [
      "c. 28–29 CE",28,29,8,"approximate",
      "John the Baptist",
      "Jordan region",
      ["Luke 3:1-22","Mark 1:2-11"],
      "Luke associates John's activity with the fifteenth year of Tiberius. Josephus also discusses John.",
      "The exact beginning of John's activity depends on regnal dating conventions.",
      ["josephus"]
    ],

    [
      "Late 20s to early 30s CE",27,33,8,"approximate",
      "Public ministry of Jesus",
      "Galilee and Judea",
      ["Mark 1:14-20","Matthew 5:1-12","Luke 4:16-30"],
      "The Gospels describe Jesus's teaching, proclamation, healings and movement through Galilee and Judea.",
      "The exact duration and sequence of all episodes cannot be established independently.",
      []
    ],

    [
      "30 or 33 CE — leading proposals",30,33,8,"disputed",
      "Crucifixion of Jesus",
      "Jerusalem",
      ["Mark 15:21-39","John 19:16-30"],
      "The Gospel accounts place Jesus's execution under Pontius Pilate in connection with Passover.",
      "The occurrence of the execution and its precise calendar year are separate historical questions. Thirty and thirty-three CE are leading chronological proposals.",
      ["josephus"]
    ],

    [
      "Following the crucifixion",null,null,8,"biblical",
      "Resurrection testimony",
      "Jerusalem and Galilee",
      ["Matthew 28:1-20","Luke 24:1-49","1 Corinthians 15:3-8"],
      "The New Testament records the proclamation that Jesus rose from the dead and appeared to followers.",
      "Historical study can investigate the testimony and its early transmission. Calendar chronology and theological judgments concerning the resurrection must be distinguished.",
      []
    ],

    [
      "Early 30s CE — conventional setting",30,34,8,"approximate",
      "Pentecost and the Jerusalem church",
      "Jerusalem",
      ["Acts 2:1-47"],
      "Acts describes the emergence of a public Christian community marked by apostolic proclamation and communal life.",
      "The proposed calendar range depends on reconstructions of the crucifixion and subsequent events.",
      []
    ],

    [
      "30s CE",30,39,8,"approximate",
      "Paul's conversion",
      "Damascus region",
      ["Acts 9:1-22","Galatians 1:11-24"],
      "Acts and Paul's letters describe his transition from persecutor to apostolic missionary.",
      "No exact year can be independently established.",
      []
    ],

    [
      "44 CE",44,44,8,"established",
      "Death of Herod Agrippa I",
      "Caesarea",
      ["Acts 12:20-23"],
      "Acts and Josephus both describe the death of Agrippa I in a public royal setting.",
      "The narratives differ in their presentation and theological explanations.",
      ["josephus"]
    ],

    [
      "Late 40s CE",46,49,8,"approximate",
      "Early Pauline missionary activity",
      "Cyprus and Asia Minor",
      ["Acts 13:1-52","Acts 14:1-28"],
      "Acts describes missionary activity involving Paul and Barnabas.",
      "The assigned dates are conventional reconstructions rather than an independently preserved travel diary.",
      []
    ],

    [
      "c. 48–49 CE",48,49,8,"approximate",
      "Jerusalem council",
      "Jerusalem",
      ["Acts 15:1-29","Galatians 2:1-10"],
      "Early Christian leaders addressed the relationship between Gentile believers and Jewish law.",
      "The chronological relationship between Acts 15 and Galatians 2 remains debated.",
      []
    ],

    [
      "Early 50s CE",50,53,8,"approximate",
      "Paul at Corinth and Gallio",
      "Corinth",
      ["Acts 18:1-17"],
      "Acts associates Paul's Corinthian activity with Gallio, whose proconsulship is illuminated by the Delphi inscription.",
      "The inscription supports the chronology of Gallio's administration, not every event narrated in Acts.",
      []
    ],

    [
      "50s CE",50,59,8,"approximate",
      "Major Pauline letter-writing period",
      "Eastern Roman Empire",
      ["1 Thessalonians 1:1-10","1 Corinthians 1:1-9","Romans 1:1-17"],
      "Several surviving letters of Paul are conventionally dated to the middle decades of the first century.",
      "Individual letter dates and the authorship of disputed Pauline letters require separate assessment.",
      []
    ],

    [
      "Early 60s CE",60,63,8,"approximate",
      "Paul's Roman imprisonment",
      "Rome",
      ["Acts 28:16-31"],
      "Acts concludes with Paul living under Roman custody while proclaiming his message.",
      "The exact chronology of his arrival and later career remains reconstructed rather than fully externally documented.",
      []
    ],

    [
      "64 CE",64,64,8,"established",
      "Great Fire of Rome",
      "Rome",
      [],
      "Tacitus, Annals 15.44, associates the aftermath of the fire with punishment of Christians under Nero.",
      "Tacitus wrote decades after the event. The passage should be evaluated as Roman literary testimony.",
      []
    ],

    [
      "66–73/74 CE",66,74,8,"established",
      "First Jewish–Roman War",
      "Judea",
      [],
      "The revolt against Roman authority transformed the political and religious landscape of Judea.",
      "Josephus is a major literary witness whose political position and retrospective presentation require critical evaluation.",
      ["roman","josephus"]
    ],

    [
      "70 CE",70,70,8,"established",
      "Destruction of the Second Temple",
      "Jerusalem",
      ["Mark 13:1-2","Luke 21:20-24"],
      "Roman forces captured Jerusalem and destroyed the Temple during the Jewish–Roman War.",
      "The event is independently well attested. Its relationship to Gospel composition dates, prophecy and theological interpretation requires separate analysis.",
      ["roman","second","josephus"]
    ],

    [
      "First century CE — dating debated",40,100,8,"disputed",
      "Composition and circulation of New Testament writings",
      "Eastern Mediterranean",
      [],
      "The earliest Christian writings developed and circulated among geographically dispersed communities.",
      "The dates, authorship and editorial histories of individual books require separate research. The displayed range is not a definitive date for every text.",
      ["testament"]
    ],

    [
      "Late first century CE — commonly proposed",90,100,8,"disputed",
      "Revelation and the churches of Asia",
      "Patmos and Asia Minor",
      ["Revelation 1:1-11","Revelation 2:1-7"],
      "Revelation addresses seven churches in Roman Asia and presents apocalyptic visions.",
      "A Domitianic setting is commonly proposed, but earlier dating has also been defended.",
      []
    ],

    [
      "c. 95–100 CE",95,100,9,"approximate",
      "First Clement",
      "Rome and Corinth",
      [],
      "The letter conventionally called First Clement addresses conflict and communal order in Corinth.",
      "The traditional late first-century date is approximate; authorship and precise chronology require textual evaluation.",
      ["fathers"]
    ],

    [
      "Early second century CE",100,117,9,"approximate",
      "Ignatius of Antioch",
      "Eastern Roman Empire",
      [],
      "Letters attributed to Ignatius discuss church leadership, Christian identity and unity.",
      "The dating and transmission of the Ignatian letter collections are subjects of scholarship.",
      ["fathers"]
    ],

    [
      "c. 112 CE",112,112,9,"approximate",
      "Pliny's correspondence with Trajan",
      "Bithynia-Pontus",
      [],
      "Pliny's Letters 10.96–97 describe Roman administrative responses to Christians and their religious practices.",
      "The letters provide evidence for particular communities and official policy rather than universal Christian practice.",
      []
    ],

    [
      "132–135 CE",132,135,9,"established",
      "Bar Kokhba revolt",
      "Roman Judea",
      [],
      "The revolt marked another major conflict between Jewish resistance and Roman authority.",
      "Its effects varied across Jewish and Christian communities.",
      ["second"]
    ],

    [
      "Mid-second century CE",140,165,9,"approximate",
      "Justin Martyr and Christian apologetics",
      "Roman Empire",
      [],
      "Justin's surviving apologetic writings articulate Christian beliefs in dialogue with Roman and Jewish intellectual settings.",
      "Dates vary among individual works; the writings represent Justin's arguments rather than every Christian community.",
      ["fathers"]
    ],

    [
      "c. 180 CE",180,180,9,"approximate",
      "Irenaeus and the fourfold Gospel",
      "Lyon",
      [],
      "Irenaeus's Against Heresies explicitly argues for four authoritative Gospels.",
      "This is evidence of developing Christian textual authority, not a universal formal settlement of the entire New Testament canon.",
      ["fathers"]
    ],

    [
      "313 CE",313,313,9,"established",
      "Imperial toleration associated with Milan",
      "Roman Empire",
      [],
      "Constantine and Licinius agreed on policies permitting religious practice and restoration of confiscated Christian property.",
      "Christianity was not thereby established as the empire's sole official religion.",
      ["fathers"]
    ],

    [
      "325 CE",325,325,9,"established",
      "Council of Nicaea",
      "Nicaea",
      [],
      "The council addressed major theological disputes and issued a creed concerning the relationship of the Son to the Father.",
      "Nicaea did not select or establish the complete biblical canon.",
      ["fathers"]
    ],

    [
      "Fourth century CE",300,399,9,"approximate",
      "Codex Sinaiticus",
      "Eastern Mediterranean — origin debated",
      [],
      "This surviving Greek biblical manuscript preserves major portions of the Old Testament and the complete New Testament, alongside other early Christian writings.",
      "The precise production location remains debated. Its contents illustrate ancient manuscript collections rather than a universal canonical decree.",
      ["sinaiticus"]
    ],

    [
      "367 CE",367,367,9,"established",
      "Athanasius's Thirty-Ninth Festal Letter",
      "Alexandria",
      [],
      "Athanasius lists the twenty-seven books that constitute the modern New Testament.",
      "The letter documents an important canonical witness, not the simultaneous creation or universal acceptance of the canon.",
      ["fathers"]
    ],

    [
      "381 CE",381,381,9,"established",
      "Council of Constantinople",
      "Constantinople",
      [],
      "The council addressed theological disputes following Nicaea and affirmed Nicene theological commitments.",
      "The textual and historical relationship between the council and the later received Niceno-Constantinopolitan Creed requires specialized study.",
      ["fathers"]
    ]

  ].map((row,index) => ({

    id:"HT-" + String(index+1).padStart(3,"0"),

    date:row[0],
    start:row[1],
    end:row[2],
    period:row[3],
    status:row[4],
    title:row[5],
    location:row[6],
    references:row[7],
    description:row[8],
    limitation:row[9],
    sources:row[10]

  }));

  const root = document.createElement("div");

  workspace.replaceChildren(root);

  let page = 0;

  const pageSize = 15;

  const scriptureCache = new Map();

  const saved = new Set();

  root.innerHTML = `
    <style>

      .dbht {
        color:var(--text);
        line-height:1.75;
      }

      .dbht .ht-panel {
        background:var(--panel2);
        border:1px solid var(--line);
        border-radius:12px;
        padding:22px;
        margin:17px 0;
      }

      .dbht .ht-controls {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(150px,1fr));
        gap:12px;
        margin:14px 0;
      }

      .dbht input,
      .dbht select {
        box-sizing:border-box;
        width:100%;
        min-width:0;
        font:inherit;
        padding:11px;
        border:1px solid var(--line);
        border-radius:8px;
        background:var(--bg);
        color:var(--text);
      }

      .dbht label {
        display:block;
        color:var(--muted);
        margin-bottom:5px;
      }

      .dbht .ht-actions {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin:13px 0;
      }

      .dbht .ht-event {
        position:relative;
        background:var(--panel);
        border:1px solid var(--line);
        border-radius:10px;
        padding:19px;
        margin:0 0 20px 24px;
      }

      .dbht .ht-track {
        border-left:2px solid var(--gold);
        margin:20px 5px;
      }

      .dbht .ht-event::before {
        content:"";
        position:absolute;
        width:12px;
        height:12px;
        top:26px;
        left:-32px;
        border:2px solid var(--gold);
        background:var(--bg);
        border-radius:50%;
      }

      .dbht .ht-date {
        color:var(--gold);
        font-size:20px;
        font-weight:700;
      }

      .dbht .ht-stat {
        color:var(--gold);
        font-size:28px;
        font-weight:700;
      }

      .dbht .ht-muted {
        font-size:13px;
        color:var(--muted);
      }

      .dbht .ht-status {
        display:inline-block;
        padding:4px 9px;
        margin:4px 0;
        border:1px solid var(--line);
        border-radius:5px;
        font-size:12px;
        font-weight:600;
      }

      .dbht .ht-established {
        color:#91c6a4;
      }

      .dbht .ht-approximate {
        color:#d9bd79;
      }

      .dbht .ht-disputed {
        color:#e1a17a;
      }

      .dbht .ht-biblical {
        color:#b5b8c7;
      }

      .dbht .ht-warning {
        background:var(--bg);
        border-left:2px solid var(--gold);
        padding:14px;
        margin:14px 0;
      }

      .dbht blockquote {
        background:var(--bg);
        border-left:2px solid var(--gold);
        padding:14px;
        margin:12px 0;
      }

      .dbht a {
        color:var(--gold);
        overflow-wrap:anywhere;
      }

      .dbht details {
        border-bottom:1px solid var(--line);
        padding:12px 0;
      }

      .dbht summary {
        cursor:pointer;
        color:var(--gold);
        font-weight:600;
      }

      .dbht button:disabled {
        opacity:.45;
        cursor:not-allowed;
      }

      @media(max-width:600px) {

        .dbht .ht-panel {
          padding:12px;
        }

        .dbht .ht-event {
          padding:12px;
          margin-left:15px;
        }

        .dbht .ht-event::before {
          left:-23px;
        }

      }

    </style>

    <div class="dbht">

      <div class="eyebrow">
        DESERTBIBLE · CHRONOLOGICAL RESEARCH
      </div>

      <h2>Historical Timeline</h2>

      <p>
        Explore the biblical narrative within
        the wider history of ancient kingdoms,
        empires, religious communities and
        early Christianity.
      </p>

      <section class="ht-panel">

        <div class="ht-controls">

          <div>
            <div class="ht-stat" id="htCount"></div>
            Research records
          </div>

          <div>
            <div class="ht-stat" id="htPeriodCount"></div>
            Historical periods
          </div>

          <div>
            <div class="ht-stat" id="htAnchorCount"></div>
            Established historical anchors
          </div>

          <div>
            <div class="ht-stat" id="htSourceCount"></div>
            Reference resources
          </div>

        </div>

        <div class="ht-warning">

          <strong>Chronological integrity</strong>

          <p>
            This timeline distinguishes narrative
            sequence from independently dated
            history. Undated events are not assigned
            invented calendar years.
          </p>

        </div>

      </section>

      <section class="ht-panel">

        <h3>01 · Historical Period Explorer</h3>

        <div id="htPeriods" class="ht-actions"></div>

      </section>

      <section class="ht-panel">

        <h3>02 · Timeline Research Filters</h3>

        <div class="ht-controls">

          <div>

            <label for="htSearch">
              Search events, people or Scripture
            </label>

            <input id="htSearch"
                   type="search"
                   placeholder="Assyria, Micah, 701...">

          </div>

          <div>

            <label for="htPeriod">Historical period</label>

            <select id="htPeriod">
              <option value="all">All periods</option>
            </select>

          </div>

          <div>

            <label for="htStatus">Dating status</label>

            <select id="htStatus">

              <option value="all">All records</option>

              <option value="established">
                Established historical anchors
              </option>

              <option value="approximate">
                Approximate chronology
              </option>

              <option value="disputed">
                Disputed chronology
              </option>

              <option value="biblical">
                Undated biblical narratives
              </option>

            </select>

          </div>

          <div>

            <label for="htEra">Calendar era</label>

            <select id="htEra">

              <option value="all">All eras</option>

              <option value="bce">BCE</option>

              <option value="ce">CE</option>

              <option value="undated">Undated</option>

            </select>

          </div>

          <div>

            <label for="htYearStart">From year</label>

            <input id="htYearStart"
                   type="number"
                   step="1"
                   placeholder="Example: -800">

          </div>

          <div>

            <label for="htYearEnd">To year</label>

            <input id="htYearEnd"
                   type="number"
                   step="1"
                   placeholder="Example: -600">

          </div>

          <div>

            <label for="htEdition">
              Scripture translation
            </label>

            <select id="htEdition">

              <option value="web">WEB</option>

              <option value="kjv">KJV</option>

              <option value="asv">ASV</option>

            </select>

          </div>

          <div>

            <label for="htSort">Display order</label>

            <select id="htSort">

              <option value="narrative">
                Historical period and narrative
              </option>

              <option value="oldest">
                Earliest dated first
              </option>

              <option value="newest">
                Latest dated first
              </option>

            </select>

          </div>

        </div>

        <p class="ht-muted">
          Enter negative years for BCE and positive
          years for CE. Example: -701 represents
          701 BCE. There is no year zero in conventional
          BCE/CE historical reckoning.
        </p>

        <div class="ht-actions">

          <button type="button" id="htReset">
            Reset filters
          </button>

          <button type="button" id="htSaved">
            Show bookmarked events
          </button>

          <button type="button" id="htCopy">
            Copy timeline
          </button>

          <button type="button" id="htDownload">
            Download timeline
          </button>

        </div>

        <p id="htMessage" role="status"></p>

      </section>

      <section class="ht-panel">

        <h3>03 · Biblical and Historical Timeline</h3>

        <p id="htSummary"></p>

        <div id="htTimeline" class="ht-track"></div>

        <div class="ht-actions">

          <button type="button" id="htPrevious">
            Previous events
          </button>

          <button type="button" id="htNext">
            Next events
          </button>

        </div>

        <p id="htPage"></p>

      </section>

      <section class="ht-panel">

        <h3>04 · Chronological Research Method</h3>

        <details open>

          <summary>Established historical anchors</summary>

          <p>
            Events with relatively secure historical
            chronological frameworks supported by
            historical documents, inscriptions or
            widely accepted synchronization.
          </p>

          <p>
            An established date does not verify every
            narrative detail associated with an event.
            Some established anchors include a narrow
            range of alternative calendar conversions.
          </p>

        </details>

        <details>

          <summary>Approximate historical dates</summary>

          <p>
            Dates reconstructed from regnal years,
            literary context, archaeology or other
            historical relationships.
          </p>

          <p>
            The abbreviation c. means circa,
            indicating approximation.
          </p>

        </details>

        <details>

          <summary>Disputed chronology</summary>

          <p>
            Events or proposed calendar dates for
            which substantial chronological or
            historical questions remain.
          </p>

          <p>
            A proposed date is not presented as
            an established external fact.
          </p>

        </details>

        <details>

          <summary>Undated biblical narratives</summary>

          <p>
            These records preserve the biblical
            narrative sequence without assigning
            an independently unestablished date.
          </p>

        </details>

        <details>

          <summary>Regnal years and calendar systems</summary>

          <p>
            Ancient kingdoms used different calendar
            systems and conventions for counting
            the years of rulers.
          </p>

          <p>
            Accession-year and non-accession-year
            systems, overlapping reigns and different
            beginnings of the calendar year can
            produce differences in modern dating.
          </p>

        </details>

        <details>

          <summary>Archaeological dating</summary>

          <p>
            Stratigraphy, pottery typology,
            radiocarbon analysis, inscriptions
            and historical synchronization can
            establish archaeological chronologies.
          </p>

          <p>
            Dating an artifact or destruction layer
            does not automatically identify the
            individual or event responsible.
          </p>

        </details>

        <details>

          <summary>Event date versus composition date</summary>

          <p>
            The period described by a biblical
            book is not necessarily the period
            when the book was written, edited
            or transmitted.
          </p>

          <p>
            Researchers should distinguish historical
            setting, literary composition, surviving
            manuscripts and later interpretation.
          </p>

        </details>

        <details>

          <summary>Prophecy and historical fulfillment</summary>

          <p>
            Establish the historical setting and
            wording of a prophetic text before
            evaluating proposed fulfillment.
          </p>

          <p>
            Historical correspondence, literary
            interpretation and theological conclusions
            are distinct research questions.
          </p>

        </details>

      </section>

      <section class="ht-panel">

        <h3>05 · Sources and Research Library</h3>

        <p>
          Consult the following institutional
          chronologies, ancient literary sources
          and manuscript collections.
        </p>

        <div id="htSources"></div>

        <p class="ht-muted">
          These resources include primary texts,
          institutional historical syntheses and
          broader research collections. A repository
          link is not equivalent to an exact artifact
          accession number or a page-specific citation.
        </p>

      </section>

      <section class="ht-panel">

        <h3>06 · Scope and Evidence Limitations</h3>

        <p>
          This catalogue is a curated overview of
          major biblical and related historical
          developments. It is not an exhaustive
          chronology of every biblical event.
        </p>

        <p>
          Undated events are displayed according
          to narrative or thematic placement.
          Their position does not establish an
          absolute chronological relationship
          with dated records.
        </p>

        <p>
          Sources differ in chronological conventions,
          historical interpretations and religious
          assumptions. These differences should
          remain visible in serious research.
        </p>

        <p>
          Biblical passages, ancient documents
          and archaeological evidence must be
          interpreted within their respective
          literary and historical contexts.
        </p>

      </section>

      <button type="button" id="htClose">
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

    const anchor = make("a",title,parent);

    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    return anchor;
  }

  function button(parent,title,action) {

    const control = make("button",title,parent);

    control.type = "button";

    control.addEventListener("click",action);

    return control;
  }

  function normalize(value) {

    return String(value || "")
      .normalize("NFKD")
      .replace(/\p{M}/gu,"")
      .toLowerCase()
      .trim();
  }

  function formatYear(year) {

    if (year === null) return "Undated";

    return Math.abs(year) + (year < 0 ? " BCE" : " CE");
  }

  const storageKey =
    "DesertBible.historicalTimeline.bookmarks.v1";

  try {

    const previous = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    if (Array.isArray(previous)) {

      previous.forEach(id => {

        if (data.some(event => event.id === id)) {
          saved.add(id);
        }

      });
    }

  } catch {}

  let savedOnly = false;

  function persistBookmarks() {

    try {

      localStorage.setItem(
        storageKey,
        JSON.stringify([...saved])
      );

      $("htMessage").textContent =
        "Bookmarks saved in this browser.";

    } catch {

      $("htMessage").textContent =
        "Bookmarks retained for this session only.";

    }
  }

  $("htCount").textContent =
    data.length.toLocaleString();

  $("htPeriodCount").textContent =
    periods.length;

  $("htAnchorCount").textContent =
    data.filter(
      event => event.status === "established"
    ).length;

  $("htSourceCount").textContent =
    Object.keys(sources).length;

  periods.forEach((period,index) => {

    const count = data.filter(
      record => record.period === index
    ).length;

    const option = make(
      "option",
      period + " (" + count + ")",
      $("htPeriod")
    );

    option.value = String(index);

    button(
      $("htPeriods"),
      period,
      () => {

        $("htPeriod").value = String(index);

        page = 0;

        render();

        $("htSummary").scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      }
    );
  });

  Object.values(sources).forEach(source => {

    const paragraph = make(
      "p",undefined,$("htSources")
    );

    link(paragraph,source.name,source.url);

  });

  function getFilters() {

    const startRaw = $("htYearStart").value.trim();

    const endRaw = $("htYearEnd").value.trim();

    const start =
      startRaw === "" ? null : Number(startRaw);

    const end =
      endRaw === "" ? null : Number(endRaw);

    let error = "";

    if (
      (start !== null &&
        (!Number.isInteger(start) || start === 0)) ||

      (end !== null &&
        (!Number.isInteger(end) || end === 0))
    ) {

      error =
        "Enter valid whole-number years other than zero.";

    } else if (
      start !== null &&
      end !== null &&
      start > end
    ) {

      error =
        "The beginning year must precede the ending year.";
    }

    return {

      search:normalize($("htSearch").value),

      period:$("htPeriod").value,

      status:$("htStatus").value,

      era:$("htEra").value,

      sort:$("htSort").value,

      start,
      end,
      error

    };
  }

  function filteredEvents() {

    const filters = getFilters();

    if (filters.error) return [];

    const result = data.filter(event => {

      if (savedOnly && !saved.has(event.id)) {
        return false;
      }

      if (
        filters.period !== "all" &&
        event.period !== Number(filters.period)
      ) return false;

      if (
        filters.status !== "all" &&
        event.status !== filters.status
      ) return false;

      const dated =
        event.start !== null &&
        event.end !== null;

      if (
        filters.era === "bce" &&
        (!dated || event.start >= 0)
      ) return false;

      if (
        filters.era === "ce" &&
        (!dated || event.end <= 0)
      ) return false;

      if (
        filters.era === "undated" &&
        dated
      ) return false;

      if (
        filters.start !== null ||
        filters.end !== null
      ) {

        if (!dated) return false;

        if (
          filters.start !== null &&
          event.end < filters.start
        ) return false;

        if (
          filters.end !== null &&
          event.start > filters.end
        ) return false;

      }

      if (filters.search) {

        const haystack = normalize([

          event.title,

          event.date,

          event.location,

          event.description,

          event.limitation,

          periods[event.period],

          statusLabels[event.status],

          ...event.references

        ].join(" "));

        const terms = filters.search.split(/\s+/);

        if (!terms.every(term => haystack.includes(term))) {

          return false;
        }

      }

      return true;

    });

    if (
      filters.sort === "oldest" ||
      filters.sort === "newest"
    ) {

      result.sort((a,b) => {

        if (a.start === null) {
          return b.start === null ? 0 : 1;
        }

        if (b.start === null) return -1;

        return filters.sort === "oldest"
          ? a.start - b.start
          : b.end - a.end;

      });

    }

    return result;
  }

  async function fetchScripture(reference,edition) {

    const url =
      "https://bible-api.com/" +
      encodeURIComponent(reference) +
      "?translation=" + edition;

    if (scriptureCache.has(url)) {

      return scriptureCache.get(url);

    }

    const response = await fetch(url);

    if (response.status === 429) {

      throw new Error(
        "Scripture source rate limit reached. Retry shortly."
      );
    }

    if (!response.ok) {

      throw new Error(
        "Scripture source returned HTTP " +
        response.status
      );
    }

    const result = await response.json();

    if (
      !Array.isArray(result.verses) ||
      !result.verses.length
    ) {

      throw new Error(
        "No Scripture text was returned."
      );
    }

    const record = {

      url,

      text:result.verses.map(verse =>
        String(verse.text || "").trim()
      ).join(" ")

    };

    scriptureCache.set(url,record);

    return record;
  }

  function scripturePreview(parent,reference) {

    const section = make(
      "div",undefined,parent
    );

    make("p",reference,section);

    const output = make(
      "div",undefined,section
    );

    button(section,"Read Scripture",async control => {

      const clicked = control.currentTarget;

      if (output.dataset.loaded === "true") {

        output.hidden = !output.hidden;

        clicked.textContent = output.hidden
          ? "Read Scripture"
          : "Hide Scripture";

        return;
      }

      clicked.disabled = true;

      output.textContent =
        "Retrieving Scripture…";

      try {

        const edition = $("htEdition").value;

        const result = await fetchScripture(
          reference,edition
        );

        if (!output.isConnected) return;

        output.replaceChildren();

        make(
          "p",
          reference + " · " + edition.toUpperCase(),
          output
        );

        make(
          "blockquote",
          result.text,
          output
        );

        link(
          output,
          "Verify Scripture source",
          result.url
        );

        output.dataset.loaded = "true";

        clicked.textContent = "Hide Scripture";

      } catch (error) {

        output.textContent = error.message;

      } finally {

        clicked.disabled = false;

      }

    });

    const researchLink = make(
      "p",undefined,section
    );

    link(

      researchLink,

      "Examine passage in STEP Bible",

      "https://www.stepbible.org/?q=version=KJV|reference=" +
        encodeURIComponent(reference)

    );

  }

  function renderEvent(event,container) {

    const article = make(
      "article",undefined,container
    );

    article.className = "ht-event";

    make(
      "div",
      event.date,
      article
    ).className = "ht-date";

    make(
      "p",
      periods[event.period],
      article
    ).className = "ht-muted";

    make("h3",event.title,article);

    make(
      "div",
      statusLabels[event.status],
      article
    ).className =
      "ht-status ht-" + event.status;

    make(
      "p",
      "Location: " + event.location,
      article
    );

    make("p",event.description,article);

    const limitation = make(
      "div",undefined,article
    );

    limitation.className = "ht-warning";

    make(
      "strong",
      "Historical and evidence limitations",
      limitation
    );

    make("p",event.limitation,limitation);

    if (event.references.length) {

      const scripture = make(
        "details",undefined,article
      );

      make(
        "summary",
        "Biblical passages (" +
          event.references.length + ")",
        scripture
      );

      event.references.forEach(reference => {

        scripturePreview(scripture,reference);

      });

    } else {

      make(

        "p",

        "External historical or literary context; no direct Protestant-canon passage is assigned.",

        article

      ).className = "ht-muted";

    }

    const references = make(
      "details",undefined,article
    );

    make(
      "summary",
      "Sources and verification",
      references
    );

    if (event.sources.length) {

      event.sources.forEach(id => {

        const source = sources[id];

        if (!source) return;

        const paragraph = make(
          "p",undefined,references
        );

        link(
          paragraph,
          source.name,
          source.url
        );

      });

    } else {

      make(

        "p",

        "No event-specific external source is attached to this record. Consult the listed passages and specialized research before making independent historical claims.",

        references

      );

    }

    make(
      "p",
      "Research record: " + event.id,
      references
    ).className = "ht-muted";

    const actions = make(
      "div",undefined,article
    );

    actions.className = "ht-actions";

    const bookmark = button(

      actions,

      saved.has(event.id)
        ? "Remove bookmark"
        : "Bookmark event",

      () => {

        if (saved.has(event.id)) {

          saved.delete(event.id);

        } else {

          saved.add(event.id);

        }

        persistBookmarks();

        if (savedOnly) {

          render();

        } else {

          bookmark.textContent = saved.has(event.id)
            ? "Remove bookmark"
            : "Bookmark event";

        }

        $("htSaved").textContent = savedOnly
          ? "Show all events"
          : "Show bookmarks (" + saved.size + ")";

      }

    );

    button(actions,"Copy event citation",async () => {

      try {

        await navigator.clipboard.writeText(

          eventExport(event).join("\n")

        );

        $("htMessage").textContent =
          "Event research citation copied.";

      } catch {

        $("htMessage").textContent =
          "Clipboard unavailable. Use timeline download.";

      }

    });

  }

  function render() {

    const filters = getFilters();

    const events = filteredEvents();

    $("htTimeline").replaceChildren();

    if (filters.error) {

      $("htSummary").textContent = filters.error;

      $("htPage").textContent = "";

      $("htPrevious").disabled = true;

      $("htNext").disabled = true;

      $("htCopy").disabled = true;

      $("htDownload").disabled = true;

      return;
    }

    const totalPages = Math.max(
      1,
      Math.ceil(events.length/pageSize)
    );

    page = Math.min(
      Math.max(page,0),
      totalPages-1
    );

    $("htSummary").textContent =

      events.length + " matching records out of " +

      data.length + " total records.";

    $("htPage").textContent =

      "Page " + (page+1) +

      " of " + totalPages;

    $("htPrevious").disabled = page === 0;

    $("htNext").disabled =
      page+1 >= totalPages;

    $("htCopy").disabled = !events.length;

    $("htDownload").disabled = !events.length;

    if (!events.length) {

      make(

        "p",

        "No timeline events match these filters.",

        $("htTimeline")

      );

      return;
    }

    const visible = events.slice(

      page*pageSize,

      (page+1)*pageSize

    );

    visible.forEach(
      event => renderEvent(event,$("htTimeline"))
    );

  }

  function eventExport(event) {

    const lines = [

      event.date + " — " + event.title,

      "Research ID: " + event.id,

      "Historical period: " + periods[event.period],

      "Location: " + event.location,

      "Dating status: " + statusLabels[event.status],

      "",

      event.description,

      "",

      "Evidence limitations: " + event.limitation,

      "",

      "Biblical passages: " +

        (
          event.references.length
            ? event.references.join("; ")
            : "No direct passage assigned"
        ),

      "Historical resources:"

    ];

    if (event.sources.length) {

      event.sources.forEach(id => {

        const source = sources[id];

        if (source) {

          lines.push(

            source.name,

            source.url

          );

        }

      });

    } else {

      lines.push(
        "No event-specific external source attached."
      );

    }

    lines.push("");

    return lines;
  }

  function exportTimeline() {

    const lines = [

      "DESERTBIBLE — HISTORICAL TIMELINE",

      "Exported UTC: " + new Date().toISOString(),

      "Scope: Current filtered timeline records",

      "Records: " + filteredEvents().length,

      "",

      "Chronological convention: BCE / CE",

      "Undated narratives are not assigned calendar years.",

      ""

    ];

    filteredEvents().forEach(event => {

      lines.push(

        ...eventExport(event),

        "----------------------------------------",

        ""

      );

    });

    lines.push(

      "RESEARCH LIMITATIONS",

      "This is a curated historical overview.",

      "Dates may be approximate or disputed.",

      "External historical anchors do not verify every associated biblical statement.",

      "Repository links may require further artifact-specific or passage-specific research."

    );

    return lines.join("\n");
  }

  $("htCopy").addEventListener("click",async () => {

    try {

      await navigator.clipboard.writeText(
        exportTimeline()
      );

      $("htMessage").textContent =
        "Filtered timeline copied.";

    } catch {

      $("htMessage").textContent =
        "Clipboard unavailable. Use Download timeline.";

    }

  });

  $("htDownload").addEventListener("click",() => {

    const blob = new Blob(

      [exportTimeline()],

      {type:"text/plain;charset=utf-8"}

    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;

    anchor.download =
      "DesertBible-Historical-Timeline.txt";

    document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );

  });

  const filterIDs = [

    "htSearch",

    "htPeriod",

    "htStatus",

    "htEra",

    "htYearStart",

    "htYearEnd",

    "htSort",

    "htEdition"

  ];

  filterIDs.forEach(id => {

    const element = $(id);

    element.addEventListener(

      element.tagName === "INPUT"
        ? "input"
        : "change",

      () => {

        page = 0;

        render();

      }

    );

  });

  $("htReset").addEventListener("click",() => {

    $("htSearch").value = "";

    $("htPeriod").value = "all";

    $("htStatus").value = "all";

    $("htEra").value = "all";

    $("htYearStart").value = "";

    $("htYearEnd").value = "";

    $("htSort").value = "narrative";

    savedOnly = false;

    $("htSaved").textContent =
      "Show bookmarks (" + saved.size + ")";

    $("htMessage").textContent = "";

    page = 0;

    render();

  });

  $("htSaved").addEventListener("click",() => {

    savedOnly = !savedOnly;

    $("htSaved").textContent = savedOnly

      ? "Show all events"

      : "Show bookmarks (" + saved.size + ")";

    page = 0;

    render();

  });

  $("htPrevious").addEventListener("click",() => {

    page--;

    render();

    $("htSummary").scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  });

  $("htNext").addEventListener("click",() => {

    page++;

    render();

    $("htSummary").scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  });

  $("htClose").addEventListener("click",() => {

    workspace.remove();

  });

  $("htSaved").textContent =
    "Show bookmarks (" + saved.size + ")";

  render();

  workspace.scrollIntoView({

    behavior:"smooth",

    block:"start"

  });

}

function openAncientDocuments(workspace) {
  "use strict";

  const collections = {
    dss: [
      "Israel Antiquities Authority — Dead Sea Scrolls",
      "https://www.deadseascrolls.org.il/explore-the-archive?locale=en_US"
    ],
    imj: [
      "Israel Museum — Digital Dead Sea Scrolls",
      "https://dss.collections.imj.org.il/"
    ],
    loc: [
      "Library of Congress — Dead Sea Scrolls exhibition",
      "https://www.loc.gov/exhibits/scrolls/"
    ],
    sinaiticus: [
      "Codex Sinaiticus Project",
      "https://www.codexsinaiticus.org/"
    ],
    vatican: [
      "Vatican Library — Digital manuscripts",
      "https://digi.vatlib.it/"
    ],
    ntvmr: [
      "Institute for New Testament Textual Research — Virtual Manuscript Room",
      "https://ntvmr.uni-muenster.de/"
    ],
    csntm: [
      "Center for the Study of New Testament Manuscripts",
      "https://www.csntm.org/"
    ],
    bm: [
      "British Museum — Collection catalogue",
      "https://www.britishmuseum.org/collection"
    ],
    louvre: [
      "Louvre — Collections database",
      "https://collections.louvre.fr/"
    ],
    oracc: [
      "Open Richly Annotated Cuneiform Corpus",
      "https://oracc.museum.upenn.edu/"
    ],
    cdli: [
      "Cuneiform Digital Library Initiative",
      "https://cdli.earth/"
    ],
    perseus: [
      "Perseus Digital Library — Classical texts",
      "https://www.perseus.tufts.edu/"
    ],
    fathers: [
      "New Advent — Early Christian texts",
      "https://www.newadvent.org/fathers/"
    ],
    oxford: [
      "Oxford — Papyri.info",
      "https://papyri.info/"
    ],
    epigraphy: [
      "Epigraphic Database Heidelberg",
      "https://edh.ub.uni-heidelberg.de/"
    ],
    aleppo: [
      "Aleppo Codex Project",
      "https://www.aleppocodex.org/"
    ],
    chester: [
      "Chester Beatty — Digital collections",
      "https://www.cbl.ie/"
    ],
    bl: [
      "British Library",
      "https://www.bl.uk/"
    ],
    gallica: [
      "Bibliothèque nationale de France — Gallica",
      "https://gallica.bnf.fr/"
    ],
    chicago: [
      "University of Chicago — Biblical primary-source research guide",
      "https://guides.lib.uchicago.edu/bible/primary"
    ],
    yale: [
      "Yale University — Dead Sea Scroll nomenclature",
      "https://guides.library.yale.edu/Dead_Sea_Scrolls/nomenclature"
    ],
    step: [
      "STEP Bible — Biblical texts",
      "https://www.stepbible.org/"
    ]
  };

  const categories = [
    "Hebrew Bible manuscripts",
    "Dead Sea Scrolls",
    "Septuagint and ancient versions",
    "New Testament manuscripts",
    "Egyptian documents",
    "Assyrian documents",
    "Babylonian and Mesopotamian documents",
    "Persian period documents",
    "Israelite and neighboring inscriptions",
    "Ancient Jewish literature",
    "Greco-Roman historical literature",
    "Early Christian documents"
  ];

  const relations = {
    direct: "Direct biblical textual witness",
    external: "External historical evidence",
    context: "Historical and cultural context",
    comparison: "Comparative literature",
    reception: "Interpretation and reception history"
  };

  /*
    Record fields:

    0  — Document identifier
    1  — Document title
    2  — Category index
    3  — Date or date range
    4  — Original language
    5  — Material or document type
    6  — Origin or discovery context
    7  — Evidence relationship
    8  — Related biblical passages
    9  — Document description
    10 — Research significance
    11 — Evidence limitations
    12 — Collection identifiers
    13 — Direct resource links

    Dates of manuscripts are distinguished
    from dates of literary composition.
  */

  const records = [

    [
      "AD-001",
      "Ketef Hinnom Silver Amulets",
      0,
      "Late seventh or early sixth century BCE",
      "Hebrew",
      "Inscribed silver amulets",
      "Jerusalem, Ketef Hinnom",
      "direct",
      ["Numbers 6:24-26"],
      "Two small silver scrolls preserve religious inscriptions containing wording closely related to the priestly blessing in Numbers.",
      "Important early evidence for the circulation of biblical blessing formulas before the Babylonian exile.",
      "The inscriptions do not preserve the entire book of Numbers or establish the date of its final composition.",
      ["chicago"],
      []
    ],

    [
      "AD-002",
      "Aleppo Codex",
      0,
      "Tenth century CE — manuscript",
      "Hebrew",
      "Parchment codex",
      "Tiberian Masoretic tradition",
      "direct",
      ["Deuteronomy","Joshua","Isaiah","Psalms"],
      "A major witness to the Tiberian Masoretic tradition associated with Aaron ben Asher.",
      "Preserves significant evidence concerning Hebrew vocalization, accents, consonantal readings and Masoretic annotations.",
      "Portions of the manuscript are missing. Its medieval date is not the composition date of the biblical books it preserves.",
      ["aleppo","chicago"],
      []
    ],

    [
      "AD-003",
      "Leningrad Codex — Firkovich B 19 A",
      0,
      "1008/1009 CE — manuscript",
      "Hebrew",
      "Parchment codex",
      "Tiberian textual tradition",
      "direct",
      ["Genesis–Malachi"],
      "A complete medieval manuscript of the Hebrew Bible in the Masoretic tradition.",
      "Forms the principal manuscript basis of Biblia Hebraica Stuttgartensia and Biblia Hebraica Quinta.",
      "A critical edition based on this manuscript may contain editorial annotations and readings from other witnesses.",
      ["chicago","step"],
      []
    ],

    [
      "AD-004",
      "Samaritan Pentateuch",
      0,
      "Ancient textual tradition; surviving manuscripts vary in date",
      "Hebrew",
      "Scriptural manuscript tradition",
      "Samaritan religious communities",
      "direct",
      ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy"],
      "A distinctive textual tradition of the five books of Moses preserved by the Samaritan community.",
      "Provides evidence of textual diversity, harmonization and traditions concerning Mount Gerizim.",
      "It is a manuscript tradition rather than one surviving ancient document. Individual manuscript dates must be examined separately.",
      ["chicago"],
      []
    ],

    [
      "AD-005",
      "Great Isaiah Scroll — 1QIsaᵃ",
      1,
      "Approximately 120–100 BCE — manuscript",
      "Hebrew",
      "Parchment scroll",
      "Qumran Cave 1",
      "direct",
      ["Isaiah 1–66","Isaiah 7:14","Isaiah 40:3","Isaiah 53"],
      "A substantially complete ancient manuscript of Isaiah preserving all sixty-six chapters.",
      "Allows comparison of an ancient Isaiah witness with the medieval Masoretic tradition and other textual witnesses.",
      "The scroll contains spelling differences, corrections and substantive variants. It is not identical in every detail to the Masoretic Text.",
      ["imj","dss"],
      [
        ["Israel Museum — Great Isaiah Scroll",
         "https://dss.collections.imj.org.il/isaiah"]
      ]
    ],

    [
      "AD-006",
      "Second Isaiah Scroll — 1QIsaᵇ",
      1,
      "Late Second Temple period — manuscript",
      "Hebrew",
      "Fragmentary parchment scroll",
      "Qumran Cave 1",
      "direct",
      ["Isaiah"],
      "Another ancient Isaiah manuscript recovered from Cave 1.",
      "Provides an additional witness to the transmission of Isaiah and often reflects readings close to the later Masoretic tradition.",
      "Its surviving portions are incomplete. Agreement in surviving passages must not be generalized to missing text.",
      ["dss","imj"],
      []
    ],

    [
      "AD-007",
      "Habakkuk Commentary — 1QpHab",
      1,
      "Approximately 50 BCE — manuscript",
      "Hebrew",
      "Parchment commentary scroll",
      "Qumran Cave 1",
      "reception",
      ["Habakkuk 1–2","Habakkuk 2:4"],
      "A sectarian commentary quoting and interpreting passages from the first two chapters of Habakkuk.",
      "Provides evidence of Second Temple prophetic interpretation and the application of Scripture to contemporary circumstances.",
      "Its interpretations reflect a particular ancient community and are not necessarily the original historical meaning of Habakkuk.",
      ["imj","dss"],
      [
        ["Israel Museum — Habakkuk Commentary",
         "https://dss.collections.imj.org.il/habakkuk"]
      ]
    ],

    [
      "AD-008",
      "Community Rule — 1QS",
      1,
      "Approximately 100–75 BCE — manuscript",
      "Hebrew",
      "Parchment scroll",
      "Qumran Cave 1",
      "context",
      ["Deuteronomy 6","Isaiah 40:3"],
      "A document regulating the religious and communal life of a group identified as the Yahad.",
      "Illuminates communal discipline, purity, covenant identity and religious interpretation during the Second Temple period.",
      "The precise relationship between the Qumran community and the Essenes remains a scholarly question. It is not a Christian document.",
      ["imj","dss","loc"],
      []
    ],

    [
      "AD-009",
      "War Scroll — 1QM",
      1,
      "Late Second Temple period — manuscript",
      "Hebrew",
      "Parchment scroll",
      "Qumran Cave 1",
      "comparison",
      ["Daniel 7–12","Revelation 19"],
      "An ancient Jewish composition describing an anticipated conflict involving opposing forces associated with light and darkness.",
      "Provides comparative evidence for Jewish apocalyptic expectations and religious warfare imagery.",
      "Thematic resemblance does not establish direct literary dependence between this scroll and Revelation.",
      ["imj","dss"],
      []
    ],

    [
      "AD-010",
      "Temple Scroll — 11Q19",
      1,
      "Late Second Temple period — manuscript",
      "Hebrew",
      "Parchment scroll",
      "Qumran Cave 11",
      "comparison",
      ["Exodus 25–31","Leviticus","Deuteronomy 12"],
      "An extensive composition presenting temple regulations, architectural instructions and religious legislation.",
      "Useful for examining ancient Jewish interpretations and reorganizations of Pentateuchal legislation.",
      "The described temple is not an archaeological plan proving that this particular structure was constructed.",
      ["imj","dss"],
      []
    ],

    [
      "AD-011",
      "Genesis Apocryphon — 1Q20",
      1,
      "Approximately 25 BCE–50 CE — manuscript",
      "Aramaic",
      "Fragmentary parchment scroll",
      "Qumran Cave 1",
      "reception",
      ["Genesis 6–15"],
      "An ancient retelling and expansion of selected Genesis narratives involving figures including Noah and Abram.",
      "Demonstrates interpretive development and rewritten biblical traditions in Second Temple Judaism.",
      "Its additional narrative material must not be presented as independently verified events.",
      ["imj","dss"],
      []
    ],

    [
      "AD-012",
      "Samuel Scroll — 4Q51 / 4QSamᵃ",
      1,
      "Late Second Temple period — manuscript",
      "Hebrew",
      "Fragmentary parchment manuscript",
      "Qumran Cave 4",
      "direct",
      ["1 Samuel","2 Samuel"],
      "An important ancient witness preserving portions of Samuel.",
      "Provides textual evidence relevant to readings differing from the medieval Masoretic Text, including agreements with some ancient versional witnesses.",
      "The manuscript is fragmentary. Readings must be compared individually rather than treating it as universally superior.",
      ["dss"],
      []
    ],

    [
      "AD-013",
      "Great Psalms Scroll — 11Q5 / 11QPsᵃ",
      1,
      "First century CE — manuscript",
      "Hebrew",
      "Parchment scroll",
      "Qumran Cave 11",
      "direct",
      ["Psalms"],
      "A substantial collection of psalms with an arrangement differing from the received Masoretic Psalter and including additional compositions.",
      "Illuminates ancient psalm collections, textual transmission and liturgical traditions.",
      "Whether it represents a distinct scriptural edition or a specialized collection remains debated.",
      ["dss"],
      []
    ],

    [
      "AD-014",
      "4QJerᵇ — 4Q71",
      1,
      "Second Temple period — manuscript",
      "Hebrew",
      "Fragmentary manuscript",
      "Qumran Cave 4",
      "direct",
      ["Jeremiah"],
      "A Hebrew Jeremiah witness relevant to the shorter textual form associated with the ancient Greek translation.",
      "Contributes evidence that differences between Hebrew and Greek Jeremiah may reflect ancient Hebrew textual forms.",
      "The surviving fragments do not establish that every difference in Greek Jeremiah reflects the same Hebrew exemplar.",
      ["dss"],
      []
    ],

    [
      "AD-015",
      "Aramaic Enoch manuscripts",
      1,
      "Second Temple period — multiple manuscripts",
      "Aramaic",
      "Fragmentary scrolls",
      "Qumran Cave 4",
      "reception",
      ["Genesis 6:1-4","Jude 14-15"],
      "Fragments of Enochic literature recovered at Qumran preserve ancient Jewish traditions concerning heavenly beings, judgment and revelations.",
      "Provide manuscript evidence for Enochic literature predating Christianity.",
      "The fragments do not preserve all of the later Ethiopic collection. Canonical status varies among religious traditions.",
      ["dss"],
      []
    ],

    [
      "AD-016",
      "Papyrus Fouad 266",
      2,
      "First century BCE — manuscript",
      "Greek with Hebrew divine-name forms",
      "Papyrus manuscript",
      "Egypt",
      "direct",
      ["Deuteronomy"],
      "Fragments of Greek Pentateuchal manuscripts, including Deuteronomy, with Hebrew forms of the divine name in relevant portions.",
      "Important evidence for early Greek Jewish scriptural transmission and scribal treatment of the divine name.",
      "The manuscript does not establish how every ancient Greek biblical copy represented the divine name.",
      ["chicago","oxford"],
      []
    ],

    [
      "AD-017",
      "Greek Minor Prophets Scroll — 8HevXIIgr",
      2,
      "Around the turn of the era — manuscript",
      "Greek",
      "Fragmentary leather scroll",
      "Nahal Hever, Judean Desert",
      "direct",
      ["Jonah","Micah","Nahum","Habakkuk","Zephaniah","Zechariah"],
      "An ancient Greek witness to portions of the Twelve Minor Prophets displaying revision toward a Hebrew textual tradition.",
      "Especially valuable for research into the Greek text of Micah and other prophetic books.",
      "Surviving portions are fragmentary and reflect a revisional textual tradition rather than necessarily the earliest Greek translation.",
      ["dss"],
      []
    ],

    [
      "AD-018",
      "Codex Vaticanus — Vatican Greek 1209",
      2,
      "Fourth century CE — manuscript",
      "Greek",
      "Parchment codex",
      "Production location uncertain",
      "direct",
      ["Genesis–Malachi","Matthew–Hebrews"],
      "A major Greek biblical manuscript preserving much of the Greek Old Testament and New Testament.",
      "A principal witness in biblical textual criticism, especially for ancient Greek readings.",
      "Some portions are missing from the surviving original codex. The manuscript is not identical to every other Greek biblical tradition.",
      ["vatican","ntvmr"],
      [
        ["Vatican Library — Vat.gr.1209",
         "https://digi.vatlib.it/view/MSS_Vat.gr.1209"]
      ]
    ],

    [
      "AD-019",
      "Codex Sinaiticus — GA 01",
      3,
      "Fourth century CE — manuscript",
      "Greek",
      "Parchment codex",
      "Production location uncertain",
      "direct",
      ["Matthew–Revelation","Genesis–Malachi"],
      "A major Greek biblical manuscript preserving the complete New Testament and substantial portions of the Greek Old Testament.",
      "Allows investigation of ancient readings, scribal corrections and early Christian manuscript collections.",
      "The codex also preserves the Epistle of Barnabas and Shepherd of Hermas in part. Its contents do not prove universal canonical agreement.",
      ["sinaiticus","ntvmr"],
      []
    ],

    [
      "AD-020",
      "Codex Alexandrinus — GA 02",
      3,
      "Fifth century CE — manuscript",
      "Greek",
      "Parchment codex",
      "Eastern Mediterranean",
      "direct",
      ["Genesis–Malachi","Matthew–Revelation"],
      "A major Greek biblical codex preserving much of the Old and New Testaments.",
      "Provides an important textual witness, particularly for Revelation and the history of Greek biblical transmission.",
      "The manuscript contains lacunae and differing textual characteristics across biblical books.",
      ["bl","ntvmr","csntm"],
      []
    ],

    [
      "AD-021",
      "Papyrus 52 — P52 / P.Ryl. III 457",
      3,
      "Commonly assigned to the second century CE; dating debated",
      "Greek",
      "Papyrus codex fragment",
      "Egyptian antiquities provenance",
      "direct",
      ["John 18:31-33","John 18:37-38"],
      "A small fragment containing portions of the Gospel of John on both sides.",
      "Important evidence for the early physical transmission of John's Gospel.",
      "Palaeographical dating cannot establish an exact year. The fragment neither preserves the entire Gospel nor dates its original composition precisely.",
      ["ntvmr","csntm"],
      []
    ],

    [
      "AD-022",
      "Papyrus 46 — P46",
      3,
      "Approximately late second or early third century CE",
      "Greek",
      "Papyrus codex",
      "Egypt",
      "direct",
      ["Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","Hebrews"],
      "An early substantial collection of Pauline letters, including Hebrews.",
      "Important for investigating the collection and transmission of Pauline writings.",
      "Parts of the manuscript are missing. Its inclusion or omission of surviving books does not by itself settle authorship or canon questions.",
      ["chester","ntvmr","csntm"],
      []
    ],

    [
      "AD-023",
      "Papyrus 66 — P66",
      3,
      "Commonly dated around 200 CE; precise date debated",
      "Greek",
      "Papyrus codex",
      "Egypt",
      "direct",
      ["John"],
      "An early substantial manuscript of John's Gospel containing numerous scribal corrections.",
      "Useful for studying ancient variants and the processes involved in copying and correcting Gospel manuscripts.",
      "The manuscript is not an autograph. Individual corrections and readings require examination.",
      ["ntvmr","csntm"],
      []
    ],

    [
      "AD-024",
      "Papyrus 75 — P75",
      3,
      "Commonly late second or third century CE; dating debated",
      "Greek",
      "Papyrus codex",
      "Egypt",
      "direct",
      ["Luke","John"],
      "An early manuscript preserving substantial portions of Luke and John.",
      "Important for comparing Gospel readings with later witnesses, including Codex Vaticanus.",
      "Textual similarity does not establish that Vaticanus was copied directly from this particular manuscript.",
      ["vatican","ntvmr"],
      []
    ],

    [
      "AD-025",
      "Papyrus 45 — P45",
      3,
      "Third century CE — manuscript",
      "Greek",
      "Papyrus codex",
      "Egypt",
      "direct",
      ["Matthew","Mark","Luke","John","Acts"],
      "A fragmentary early codex containing portions of the four Gospels and Acts.",
      "Provides evidence concerning early collections of Christian narrative writings.",
      "Missing leaves prevent reconstruction of every reading and every original codex feature with certainty.",
      ["chester","ntvmr","csntm"],
      []
    ],

    [
      "AD-026",
      "Papyrus 47 — P47",
      3,
      "Third century CE — manuscript",
      "Greek",
      "Papyrus codex",
      "Egypt",
      "direct",
      ["Revelation 9–17"],
      "An early fragmentary manuscript of Revelation.",
      "An important witness to the textual transmission of the Apocalypse.",
      "Only part of Revelation survives in this manuscript.",
      ["chester","ntvmr"],
      []
    ],

    [
      "AD-027",
      "Codex Bezae — GA 05",
      3,
      "Approximately fifth century CE — manuscript",
      "Greek and Latin",
      "Bilingual parchment codex",
      "Production location uncertain",
      "direct",
      ["Matthew","Mark","Luke","John","Acts"],
      "A bilingual Gospel and Acts manuscript known for distinctive textual readings.",
      "Especially valuable for examining textual diversity in Acts and the Gospels.",
      "Its distinctive readings are not automatically original or automatically secondary; each requires critical assessment.",
      ["ntvmr","csntm"],
      []
    ],

    [
      "AD-028",
      "Merneptah Victory Stele",
      4,
      "Approximately 1208 BCE",
      "Egyptian",
      "Hieroglyphic royal inscription",
      "Thebes, Egypt",
      "external",
      ["Joshua","Judges"],
      "An Egyptian royal victory inscription containing an early extra-biblical reference widely identified as Israel.",
      "Establishes that a group called Israel was known in the Canaanite setting by the late thirteenth century BCE.",
      "It does not identify the Exodus generation, establish the twelve tribes or describe the biblical conquest narrative.",
      ["chicago"],
      []
    ],

    [
      "AD-029",
      "Shoshenq I — Bubastite Portal inscription",
      4,
      "Tenth century BCE",
      "Egyptian",
      "Monumental hieroglyphic relief and inscription",
      "Karnak, Egypt",
      "external",
      ["1 Kings 14:25-28","2 Chronicles 12:1-9"],
      "A monumental record associated with Shoshenq I's campaign into the southern Levant.",
      "Supplies external historical context for the Egyptian ruler commonly identified with biblical Shishak.",
      "The list of places does not independently establish every event reported in Kings or Chronicles.",
      ["chicago"],
      []
    ],

    [
      "AD-030",
      "Amarna Letters",
      4,
      "Fourteenth century BCE",
      "Predominantly Akkadian",
      "Cuneiform clay tablets",
      "Amarna, Egypt",
      "context",
      ["Joshua","Judges"],
      "Diplomatic correspondence between Egyptian rulers and foreign authorities, including rulers of Levantine city-states.",
      "Illuminates Late Bronze Age Canaan, regional politics and diplomatic relationships.",
      "The groups designated Habiru or Apiru cannot simply be equated with all biblical Hebrews.",
      ["bm","cdli","oracc"],
      []
    ],

    [
      "AD-031",
      "Instruction of Amenemope",
      4,
      "Late second or early first millennium BCE — composition dating debated",
      "Egyptian",
      "Wisdom literature",
      "Egypt",
      "comparison",
      ["Proverbs 22:17–24:22"],
      "An Egyptian wisdom composition containing ethical instructions and advice concerning behavior.",
      "Provides significant literary parallels for the study of Proverbs and international wisdom traditions.",
      "The precise direction, date and mechanism of literary transmission require scholarly evaluation.",
      ["bm"],
      []
    ],

    [
      "AD-032",
      "Kurkh Monolith of Shalmaneser III",
      5,
      "853 BCE — campaign recorded",
      "Akkadian",
      "Royal cuneiform inscription",
      "Kurkh, southeastern Türkiye",
      "external",
      ["1 Kings 16–22"],
      "A royal record describing campaigns of Shalmaneser III, including the Battle of Qarqar.",
      "Names Ahab of Israel within a coalition resisting Assyrian expansion.",
      "Assyrian royal troop figures and victory language require assessment as imperial rhetoric. Qarqar is not explicitly narrated in Kings.",
      ["bm","oracc"],
      []
    ],

    [
      "AD-033",
      "Black Obelisk of Shalmaneser III",
      5,
      "Ninth century BCE; Jehu tribute associated with 841 BCE",
      "Akkadian",
      "Inscribed stone monument with reliefs",
      "Nimrud",
      "external",
      ["2 Kings 9–10"],
      "An Assyrian monument depicting tributary delegations and recording tribute associated with Jehu.",
      "An important external chronological and political witness involving the northern kingdom.",
      "The depicted person need not be Jehu himself. Assyrian dynastic terminology does not establish biological descent from Omri.",
      ["bm","oracc"],
      []
    ],

    [
      "AD-034",
      "Tiglath-Pileser III Royal Inscriptions",
      5,
      "744–727 BCE — reign",
      "Akkadian",
      "Royal cuneiform inscriptions",
      "Assyrian imperial centers",
      "external",
      ["2 Kings 15:19-29","2 Kings 16:7-9"],
      "Royal texts recording Assyrian campaigns, tribute and imperial expansion into the Levant.",
      "Provide external context for the reigns of Menahem, Pekah, Hoshea and Ahaz.",
      "Numerous inscriptions constitute this corpus. Specific claims require citation of the particular inscription and line.",
      ["oracc","bm"],
      [
        ["ORACC — Royal Inscriptions of the Neo-Assyrian Period",
         "https://oracc.museum.upenn.edu/rinap/"]
      ]
    ],

    [
      "AD-035",
      "Sargon II Royal Inscriptions",
      5,
      "721–705 BCE — reign",
      "Akkadian",
      "Royal cuneiform inscriptions",
      "Assyria, including Dur-Sharrukin",
      "external",
      ["2 Kings 17:1-23","Isaiah 20:1"],
      "Royal accounts describing imperial activities, including claims concerning Samaria and campaigns in the Levant.",
      "Relevant to the fall of the northern kingdom and Assyrian provincial administration.",
      "The respective roles of Shalmaneser V and Sargon II in Samaria's conquest must be evaluated across different sources.",
      ["oracc","bm"],
      []
    ],

    [
      "AD-036",
      "Sennacherib Prism — Taylor Prism",
      5,
      "691 BCE — object; describes 701 BCE campaign",
      "Akkadian",
      "Six-sided clay prism",
      "Nineveh",
      "external",
      ["2 Kings 18–19","Isaiah 36–37","2 Chronicles 32","Micah 1"],
      "An Assyrian royal account describing Sennacherib's campaigns, including his conflict with Hezekiah of Judah.",
      "A direct external witness to Hezekiah and Assyrian military pressure against Judah.",
      "The account does not claim Jerusalem was captured and does not independently verify the biblical explanation for Assyria's withdrawal.",
      ["bm","oracc"],
      []
    ],

    [
      "AD-037",
      "Lachish Siege Relief Inscriptions",
      5,
      "Early seventh century BCE; campaign of 701 BCE",
      "Akkadian",
      "Inscribed palace stone reliefs",
      "Nineveh, Southwest Palace",
      "external",
      ["2 Kings 18:13-17","Isaiah 36:1-2","Micah 1:13"],
      "Palace reliefs and inscriptions representing the Assyrian siege and capture of Lachish.",
      "Connect the biblical geographical setting of Lachish with a documented Assyrian campaign.",
      "The reliefs are royal representations, not neutral photographic records. They do not independently identify every event of Micah's prophecy.",
      ["bm","oracc"],
      []
    ],

    [
      "AD-038",
      "Esarhaddon Royal Inscriptions",
      5,
      "680–669 BCE — reign",
      "Akkadian",
      "Royal cuneiform inscriptions",
      "Assyria",
      "external",
      ["2 Kings 19:37","2 Chronicles 33:10-13"],
      "Assyrian royal records that include references to western tributary kings, among them Manasseh of Judah.",
      "Provide external attestation of Manasseh within the Assyrian political system.",
      "These references do not independently verify every narrative concerning Manasseh's imprisonment or repentance.",
      ["oracc","bm"],
      []
    ],

    [
      "AD-039",
      "Epic of Gilgamesh — Tablet XI",
      6,
      "First millennium BCE surviving Nineveh witnesses; older traditions",
      "Akkadian",
      "Cuneiform clay tablet",
      "Mesopotamia",
      "comparison",
      ["Genesis 6–9"],
      "A literary narrative containing Utnapishtim's account of surviving a devastating flood.",
      "Provides comparative evidence for ancient Near Eastern flood literature.",
      "Similarities and differences must be examined without treating the text as independent proof of a worldwide flood or a specific date for Noah.",
      ["bm","cdli","oracc"],
      []
    ],

    [
      "AD-040",
      "Atrahasis Epic",
      6,
      "Second millennium BCE manuscript tradition",
      "Akkadian",
      "Cuneiform literary tablets",
      "Mesopotamia",
      "comparison",
      ["Genesis 1–9"],
      "An ancient composition concerning humanity's creation, relations with the gods and a flood.",
      "Provides comparative material for studying creation and flood traditions.",
      "Conceptual and narrative parallels do not establish that Genesis simply reproduces this composition.",
      ["bm","cdli"],
      []
    ],

    [
      "AD-041",
      "Enuma Elish",
      6,
      "Composition date debated; first millennium BCE manuscript witnesses",
      "Akkadian",
      "Cuneiform creation epic",
      "Babylonia and Assyria",
      "comparison",
      ["Genesis 1"],
      "A Babylonian literary composition describing divine conflict, cosmic organization and the elevation of Marduk.",
      "Provides evidence of ancient Mesopotamian creation theology for comparison with Genesis.",
      "The literary and theological differences are as important as the shared cosmological vocabulary and themes.",
      ["bm","cdli","oracc"],
      []
    ],

    [
      "AD-042",
      "Laws of Hammurabi",
      6,
      "Eighteenth century BCE",
      "Akkadian",
      "Inscribed stone stele",
      "Babylonia; discovered at Susa",
      "comparison",
      ["Exodus 21–23","Leviticus 24:17-22"],
      "A royal legal collection addressing property, injury, family relationships and social obligations.",
      "Allows comparison of ancient Near Eastern legal traditions with biblical legislation.",
      "Legal parallels do not establish an identical legal system or prove direct copying.",
      ["louvre","cdli"],
      []
    ],

    [
      "AD-043",
      "Babylonian Chronicle — BM 21946",
      6,
      "Early sixth-century BCE events recorded",
      "Akkadian",
      "Cuneiform clay tablet",
      "Babylonia",
      "external",
      ["2 Kings 24:8-17","Jeremiah 46:2"],
      "A chronicle recording events of Babylonian expansion, including Carchemish and the capture of Jerusalem in 597 BCE.",
      "Provides important chronological anchors for Nebuchadnezzar's reign and Judah's political history.",
      "The surviving chronicle does not provide a complete record of all later events, including the final destruction of Jerusalem.",
      ["bm","cdli"],
      []
    ],

    [
      "AD-044",
      "Jehoiachin Ration Tablets",
      6,
      "Sixth century BCE",
      "Akkadian",
      "Administrative clay tablets",
      "Babylon",
      "external",
      ["2 Kings 24:12-15","2 Kings 25:27-30"],
      "Palace administrative documents listing provisions associated with Jehoiachin and members of his household.",
      "External evidence for the presence of the Judean king and his household in Babylonia.",
      "The records document provisions rather than the complete events surrounding his later release.",
      ["cdli","oracc"],
      []
    ],

    [
      "AD-045",
      "Al-Yahudu Tablets",
      6,
      "Sixth–fifth centuries BCE",
      "Akkadian",
      "Legal and administrative clay tablets",
      "Babylonia; precise archaeological findspots uncertain",
      "context",
      ["Jeremiah 29:1-14","Ezekiel 1:1-3"],
      "Documents recording economic and legal activities involving Judean communities in Babylonia.",
      "Illuminate daily life, names, taxation, family relationships and settlement among Judean exiles and descendants.",
      "Uncertain archaeological provenance requires careful attention. These records do not narrate every biblical exile event.",
      ["cdli","oracc"],
      []
    ],

    [
      "AD-046",
      "Nabonidus Chronicle",
      6,
      "Sixth century BCE events; surviving manuscript date requires separate assessment",
      "Akkadian",
      "Cuneiform chronicle",
      "Babylonia",
      "external",
      ["Daniel 5","Isaiah 45:1-7"],
      "A Babylonian chronicle recording events associated with Nabonidus and the Persian conquest of Babylon.",
      "Provides important evidence for the political transition from Babylonian to Persian rule in 539 BCE.",
      "It does not reproduce the biblical banquet narrative or independently verify every detail of Daniel 5.",
      ["bm","cdli"],
      []
    ],

    [
      "AD-047",
      "Cyrus Cylinder",
      7,
      "539 BCE or shortly afterward",
      "Akkadian",
      "Cuneiform clay cylinder",
      "Babylon",
      "context",
      ["Ezra 1:1-4","Isaiah 44:28","Isaiah 45:1"],
      "A royal inscription presenting Cyrus's conquest and restoration measures in Babylonian political and religious terms.",
      "Provides imperial context for restoration and the return of religious objects and communities.",
      "The cylinder does not specifically mention Jerusalem, the Judeans or the decree quoted in Ezra.",
      ["bm","oracc"],
      []
    ],

    [
      "AD-048",
      "Behistun Inscription",
      7,
      "Approximately 520 BCE",
      "Old Persian, Elamite and Babylonian",
      "Multilingual monumental rock inscription",
      "Behistun, Iran",
      "context",
      ["Ezra 4–6","Haggai 1:1","Zechariah 1:1"],
      "Darius I's monumental account of his accession and suppression of rival claimants.",
      "Illuminates Persian royal ideology, administrative history and multilingual imperial communication.",
      "It does not independently document the Jerusalem Temple restoration described in Ezra.",
      ["oracc","cdli"],
      []
    ],

    [
      "AD-049",
      "Elephantine Papyri",
      7,
      "Especially fifth century BCE",
      "Predominantly Imperial Aramaic",
      "Letters and legal papyri",
      "Elephantine, Egypt",
      "context",
      ["Ezra","Nehemiah"],
      "Documents from a community in Persian-period Egypt, including correspondence concerning a temple dedicated to YHW.",
      "Illuminate Judean diaspora life, marriage, property, religious practice and imperial administration.",
      "The Elephantine community's practices cannot be assumed to represent every Judean community or all biblical religious norms.",
      ["oxford","bm"],
      []
    ],

    [
      "AD-050",
      "Mesha Stele",
      8,
      "Ninth century BCE",
      "Moabite",
      "Inscribed basalt monument",
      "Dhiban, Jordan",
      "external",
      ["2 Kings 3:4-27"],
      "A royal inscription of Mesha describing Moabite achievements and relations with Israel.",
      "Provides a neighboring kingdom's perspective on the political environment associated with the Omride dynasty.",
      "The biblical and Moabite accounts differ in presentation, and some damaged readings remain disputed.",
      ["louvre"],
      []
    ],

    [
      "AD-051",
      "Tel Dan Stele",
      8,
      "Ninth century BCE",
      "Aramaic",
      "Fragmentary stone inscription",
      "Tel Dan",
      "external",
      ["2 Samuel 7:12-16","2 Kings 8–9"],
      "An Aramaic royal inscription containing a designation widely interpreted as the House of David.",
      "Significant external evidence for recognition of a Davidic dynastic designation.",
      "It does not establish the territorial extent of David's kingdom or provide a contemporary account of his reign.",
      ["chicago"],
      []
    ],

    [
      "AD-052",
      "Siloam Inscription",
      8,
      "Commonly late eighth century BCE",
      "Hebrew",
      "Rock-cut inscription",
      "Jerusalem water tunnel",
      "context",
      ["2 Kings 20:20","2 Chronicles 32:30"],
      "An inscription describing workers meeting during the excavation of a water tunnel.",
      "Documents ancient engineering and Hebrew writing in Jerusalem.",
      "The inscription does not name Hezekiah. Its association with his waterworks rests on broader historical and archaeological arguments.",
      ["chicago"],
      []
    ],

    [
      "AD-053",
      "Lachish Letters",
      8,
      "Early sixth century BCE",
      "Hebrew",
      "Ink-inscribed pottery sherds",
      "Lachish",
      "context",
      ["Jeremiah 34:6-7","2 Kings 25:1-4"],
      "Military and administrative correspondence associated with Judah's final years before Babylonian destruction.",
      "Provides evidence for communications, literacy and regional military conditions.",
      "The letters do not independently identify every individual or incident discussed by Jeremiah.",
      ["bm"],
      []
    ],

    [
      "AD-054",
      "Samaria Ostraca",
      8,
      "Eighth century BCE — commonly assigned",
      "Hebrew",
      "Administrative pottery inscriptions",
      "Samaria",
      "context",
      ["1 Kings 16:24","Amos 3:15","Amos 6:4-6"],
      "Administrative records concerning deliveries such as wine and oil, with personal and geographical names.",
      "Illuminate the economy and administrative organization of the northern kingdom.",
      "The documents do not independently establish each social accusation made by the prophets.",
      ["chicago"],
      []
    ],

    [
      "AD-055",
      "Kuntillet Ajrud Inscriptions",
      8,
      "Approximately eighth century BCE",
      "Hebrew and related Northwest Semitic forms",
      "Inscriptions on pottery and plaster",
      "Northeastern Sinai",
      "context",
      ["Exodus 20:3-6","2 Kings 17:7-23"],
      "Religious inscriptions containing references to YHWH and expressions involving asherah.",
      "Important evidence for the diversity of religious language and practices in the Iron Age.",
      "Whether asherah denotes a goddess, cultic object or another referent in specific inscriptions remains debated.",
      ["chicago"],
      []
    ],

    [
      "AD-056",
      "Deir Alla Inscription",
      8,
      "Approximately eighth century BCE",
      "Northwest Semitic; linguistic classification debated",
      "Ink-written plaster inscription",
      "Deir Alla, Jordan",
      "comparison",
      ["Numbers 22–24"],
      "A fragmentary literary inscription mentioning Balaam son of Beor.",
      "Provides extra-biblical evidence for a literary tradition concerning a figure also named in Numbers.",
      "It does not independently establish that the narrated biblical encounter occurred exactly as described.",
      ["chicago"],
      []
    ],

    [
      "AD-057",
      "1 Enoch",
      9,
      "Multiple compositions, principally Second Temple period",
      "Aramaic, Greek and Ethiopic transmission",
      "Composite apocalyptic literature",
      "Ancient Jewish literary tradition",
      "reception",
      ["Genesis 6:1-4","Daniel 7","Jude 14-15"],
      "A collection of ancient Jewish writings concerning heavenly revelations, judgment and other apocalyptic subjects.",
      "Important for the study of Jude's citation of Enochic material and Second Temple religious concepts.",
      "Its constituent works have different dates. The Ethiopic Orthodox tradition accords it canonical status, unlike most other Christian traditions.",
      ["dss","chicago"],
      []
    ],

    [
      "AD-058",
      "Jubilees",
      9,
      "Second century BCE — commonly proposed composition",
      "Hebrew composition; Ethiopic and other transmission",
      "Rewritten biblical literature",
      "Second Temple Jewish tradition",
      "reception",
      ["Genesis","Exodus"],
      "A retelling of early biblical history structured around jubilees and concerned with law, sacred time and covenant identity.",
      "Ancient Hebrew fragments attest its circulation among Second Temple Jewish readers.",
      "Its narrative additions are interpretive traditions rather than automatic independent confirmations of biblical events.",
      ["dss","chicago"],
      []
    ],

    [
      "AD-059",
      "First Maccabees",
      9,
      "Late second or early first century BCE — composition",
      "Preserved principally in Greek; Hebrew original commonly proposed",
      "Historical literature",
      "Judea",
      "context",
      ["Daniel 11","John 10:22-23"],
      "A narrative of the Maccabean revolt and the rise of Hasmonean leadership.",
      "A major literary source for the Temple crisis, rededication and later Jewish political developments.",
      "It has a particular political and theological perspective. Its canonical status varies among Christian traditions.",
      ["chicago","step"],
      []
    ],

    [
      "AD-060",
      "Second Maccabees",
      9,
      "Late second or early first century BCE — composition",
      "Greek",
      "Historical and theological literature",
      "Hellenistic Jewish literary setting",
      "context",
      ["Daniel 11","Hebrews 11:35"],
      "A Greek work presenting selected events surrounding the Temple crisis and Maccabean resistance.",
      "Illuminates Jewish martyrdom traditions, resurrection beliefs and religious identity.",
      "It is not simply the chronological continuation of First Maccabees. Its theological and rhetorical aims require consideration.",
      ["chicago","step"],
      []
    ],

    [
      "AD-061",
      "Philo of Alexandria — On the Creation",
      9,
      "First half of the first century CE — composition",
      "Greek",
      "Philosophical biblical exposition",
      "Alexandria",
      "reception",
      ["Genesis 1–3","John 1:1-18"],
      "A Jewish philosophical interpretation of the creation narrative drawing on Greek intellectual traditions.",
      "Useful for studying ancient Jewish scriptural interpretation and philosophical concepts.",
      "Similar vocabulary does not establish that the Gospel of John directly depended on Philo.",
      ["perseus","chicago"],
      []
    ],

    [
      "AD-062",
      "Josephus — Jewish Antiquities",
      10,
      "93/94 CE — composition",
      "Greek",
      "Historical literature",
      "Rome",
      "external",
      ["Daniel","Matthew","Luke","Acts"],
      "A historical account extending from ancient Jewish traditions into the first century CE.",
      "Contains important discussions of Herodian rulers, John the Baptist, James and a passage concerning Jesus.",
      "The wording of the Testimonium Flavianum in Antiquities 18.63–64 shows substantial textual and authenticity questions.",
      ["perseus"],
      [
        ["Josephus — English text, public-domain translation",
         "https://www.gutenberg.org/ebooks/2848"]
      ]
    ],

    [
      "AD-063",
      "Josephus — The Jewish War",
      10,
      "Approximately 75–79 CE — composition",
      "Greek",
      "Historical literature",
      "Rome",
      "external",
      ["Matthew 24","Mark 13","Luke 21"],
      "An account of Jewish history and the revolt against Roman rule culminating in Jerusalem's destruction.",
      "A major ancient literary source for the First Jewish–Roman War and the Second Temple's destruction in 70 CE.",
      "Josephus wrote from a particular political and personal position. His interpretation and numerical claims require critical evaluation.",
      ["perseus"],
      [
        ["Josephus — Jewish War, public-domain translation",
         "https://www.gutenberg.org/ebooks/2850"]
      ]
    ],

    [
      "AD-064",
      "Tacitus — Annals 15.44",
      10,
      "Early second century CE — composition",
      "Latin",
      "Roman historical literature",
      "Roman Empire",
      "external",
      ["Luke 23","John 19"],
      "A Roman historical passage discussing Christians and the execution of Christus under Pontius Pilate during Tiberius's reign.",
      "Significant non-Christian literary testimony concerning Jesus's execution and the presence of Christians in Rome.",
      "Tacitus wrote decades after Jesus's death. His precise information sources are not identified in the passage.",
      ["perseus"],
      []
    ],

    [
      "AD-065",
      "Pliny the Younger — Letters 10.96–97",
      10,
      "Approximately 112 CE — correspondence",
      "Latin",
      "Administrative correspondence",
      "Bithynia-Pontus and Rome",
      "external",
      ["Acts","1 Peter"],
      "Correspondence between Pliny and Trajan concerning the treatment of individuals accused of being Christians.",
      "Provides external evidence of Christian worship practices and Roman administrative responses in the early second century.",
      "The letters describe particular communities and do not provide a comprehensive account of early Christianity.",
      ["perseus"],
      []
    ],

    [
      "AD-066",
      "Suetonius — Claudius 25.4",
      10,
      "Early second century CE — composition",
      "Latin",
      "Imperial biography",
      "Roman Empire",
      "external",
      ["Acts 18:1-2"],
      "A passage describing disturbances among Jews in Rome and associating them with a figure or name rendered Chrestus.",
      "Relevant to research into Claudius's actions concerning Jews and the setting of Acts 18.",
      "Whether Chrestus refers to Christ or another person remains disputed.",
      ["perseus"],
      []
    ],

    [
      "AD-067",
      "Pontius Pilate Inscription",
      10,
      "26–36 CE — administrative setting",
      "Latin",
      "Fragmentary stone dedication",
      "Caesarea Maritima",
      "external",
      ["Matthew 27","Mark 15","Luke 23","John 18–19"],
      "A dedicatory inscription identifying Pontius Pilate and his title as prefect of Judea.",
      "Direct epigraphic evidence for Pilate's historical office.",
      "The inscription does not describe Jesus's trial or execution.",
      ["epigraphy","chicago"],
      []
    ],

    [
      "AD-068",
      "Gallio Inscription — Delphi",
      10,
      "Approximately 52 CE",
      "Greek",
      "Fragmentary imperial inscription",
      "Delphi, Greece",
      "external",
      ["Acts 18:12-17"],
      "Fragments of a letter from Emperor Claudius referring to Gallio as proconsul.",
      "Provides an important chronological anchor used in reconstructing Paul's activity at Corinth.",
      "The inscription does not mention Paul or narrate the hearing described in Acts.",
      ["perseus"],
      []
    ],

    [
      "AD-069",
      "Didache",
      11,
      "Late first or early second century CE — commonly proposed",
      "Greek",
      "Christian instructional literature",
      "Precise origin uncertain",
      "reception",
      ["Matthew 5–7","Matthew 28:19","1 Corinthians 11"],
      "An early Christian instructional work addressing ethics, baptism, prayer, communal meals and community leadership.",
      "Provides important comparative evidence for early Christian practice and the reception of teachings associated with Jesus.",
      "Its composition date and literary relationship to individual New Testament writings remain debated.",
      ["fathers"],
      [
        ["Read the Didache",
         "https://www.newadvent.org/fathers/0714.htm"]
      ]
    ],

    [
      "AD-070",
      "First Clement",
      11,
      "Approximately 95–100 CE — conventional composition date",
      "Greek",
      "Christian communal letter",
      "Rome to Corinth",
      "reception",
      ["1 Corinthians","Hebrews"],
      "A letter from the Roman Christian community addressing conflict and leadership in Corinth.",
      "Provides evidence for early Christian communal organization and use of Jewish and Christian scriptural traditions.",
      "The text does not name Clement as author. Traditional attribution and precise dating require separate assessment.",
      ["fathers"],
      [
        ["Read First Clement",
         "https://www.newadvent.org/fathers/1010.htm"]
      ]
    ],

    [
      "AD-071",
      "Letters of Ignatius of Antioch",
      11,
      "Early second century CE — conventional dating",
      "Greek",
      "Christian letters",
      "Eastern Roman Empire",
      "reception",
      ["Matthew","John","Philippians"],
      "Letters associated with Ignatius discussing church unity, leadership, Christian identity and Jesus Christ.",
      "Important witnesses to Christian theological language and church organization after the apostolic period.",
      "Different recensions survive. The commonly accepted seven-letter middle recension must be distinguished from later expanded forms.",
      ["fathers"],
      []
    ],

    [
      "AD-072",
      "Polycarp — Letter to the Philippians",
      11,
      "Early to mid-second century CE — composition",
      "Greek; partial Latin transmission",
      "Christian letter",
      "Smyrna and Philippi",
      "reception",
      ["Philippians","1 Peter","1 John"],
      "A letter addressing Christian conduct, perseverance and community concerns.",
      "Provides evidence for the early reception of Christian writings and ethical traditions.",
      "Its precise dating and possible compositional history remain subjects of scholarly discussion.",
      ["fathers"],
      []
    ],

    [
      "AD-073",
      "Shepherd of Hermas",
      11,
      "Second century CE — composition",
      "Greek",
      "Christian visionary literature",
      "Rome",
      "reception",
      ["Matthew 13","James","Revelation"],
      "A Christian work containing visions, mandates and similitudes focused on repentance and moral life.",
      "Documents early Christian ethical and visionary traditions and appears within the surviving Codex Sinaiticus collection.",
      "Ancient popularity and manuscript inclusion do not establish universal canonical status.",
      ["fathers","sinaiticus"],
      []
    ],

    [
      "AD-074",
      "Epistle of Barnabas",
      11,
      "Late first or early second century CE — commonly proposed",
      "Greek",
      "Christian theological treatise",
      "Origin uncertain",
      "reception",
      ["Leviticus","Isaiah","Hebrews"],
      "An early Christian work presenting extensive interpretive arguments about Jewish Scripture and Christian identity.",
      "Useful for investigating early Christian interpretation and the history of scriptural reception.",
      "The work is anonymous and should not be assumed to have been written by Paul's companion Barnabas.",
      ["fathers","sinaiticus"],
      []
    ],

    [
      "AD-075",
      "Justin Martyr — First Apology",
      11,
      "Mid-second century CE — composition",
      "Greek",
      "Christian apologetic literature",
      "Roman Empire",
      "reception",
      ["Matthew","Luke","John"],
      "An apologetic work defending Christianity and describing aspects of Christian belief and worship.",
      "Important for research into baptism, Eucharistic practice and the use of Gospel traditions.",
      "Justin's descriptions represent his historical and argumentative setting, not necessarily every contemporary Christian community.",
      ["fathers"],
      [
        ["Read First Apology",
         "https://www.newadvent.org/fathers/0126.htm"]
      ]
    ],

    [
      "AD-076",
      "Irenaeus — Against Heresies",
      11,
      "Approximately 180 CE — composition",
      "Greek original; substantial Latin transmission",
      "Christian theological literature",
      "Lyon",
      "reception",
      ["Matthew","Mark","Luke","John"],
      "A theological work opposing teachings Irenaeus regarded as erroneous and articulating Christian doctrine.",
      "Contains an influential defense of the fourfold Gospel and evidence concerning early Christian scriptural interpretation.",
      "Irenaeus's position does not represent a universal formal decree determining the complete New Testament canon.",
      ["fathers"],
      [
        ["Read Against Heresies, Book III",
         "https://www.newadvent.org/fathers/0103300.htm"]
      ]
    ],

    [
      "AD-077",
      "Muratorian Fragment",
      11,
      "Late second-century composition traditionally proposed; dating disputed",
      "Latin surviving text",
      "Fragmentary canonical list",
      "Surviving medieval manuscript",
      "reception",
      ["Luke","John","Acts","Romans","Revelation"],
      "A fragmentary discussion of Christian writings and their acceptance or rejection.",
      "Provides important evidence for historical debates about collections of authoritative Christian literature.",
      "Its original composition date, original language and provenance remain debated. The surviving manuscript is considerably later.",
      ["chicago"],
      []
    ],

    [
      "AD-078",
      "Eusebius — Ecclesiastical History",
      11,
      "Early fourth century CE — composition and revisions",
      "Greek",
      "Christian historical literature",
      "Caesarea",
      "reception",
      ["Acts","Revelation"],
      "A historical work recording Christian communities, bishops, persecutions, writers and disputes over religious writings.",
      "Preserves quotations and reports from earlier works, some of which no longer survive independently.",
      "Eusebius selected and interpreted material according to his historical and theological purposes.",
      ["fathers"],
      [
        ["Read Ecclesiastical History, Book III",
         "https://www.newadvent.org/fathers/250103.htm"]
      ]
    ],

    [
      "AD-079",
      "Athanasius — Thirty-Ninth Festal Letter",
      11,
      "367 CE — composition",
      "Greek original; multiple transmission traditions",
      "Ecclesiastical letter",
      "Alexandria",
      "reception",
      ["Matthew–Revelation"],
      "A festal letter containing a list of the twenty-seven books of the New Testament.",
      "A major historical witness to the development of Christian canonical collections.",
      "The letter did not create the New Testament or settle all canonical differences among Christian communities.",
      ["fathers"],
      [
        ["Read Festal Letter 39",
         "https://www.newadvent.org/fathers/2806039.htm"]
      ]
    ]

  ].map(row => ({
    id:row[0],
    title:row[1],
    category:row[2],
    date:row[3],
    language:row[4],
    material:row[5],
    origin:row[6],
    relation:row[7],
    passages:row[8],
    description:row[9],
    significance:row[10],
    limitations:row[11],
    collections:row[12],
    links:row[13]
  }));

  const bibleBooks = [
    "Genesis","Exodus","Leviticus","Numbers",
    "Deuteronomy","Joshua","Judges","Ruth",
    "1 Samuel","2 Samuel","1 Kings","2 Kings",
    "1 Chronicles","2 Chronicles","Ezra",
    "Nehemiah","Esther","Job","Psalms",
    "Proverbs","Ecclesiastes","Song of Solomon",
    "Isaiah","Jeremiah","Lamentations","Ezekiel",
    "Daniel","Hosea","Joel","Amos","Obadiah",
    "Jonah","Micah","Nahum","Habakkuk",
    "Zephaniah","Haggai","Zechariah","Malachi",
    "Matthew","Mark","Luke","John","Acts",
    "Romans","1 Corinthians","2 Corinthians",
    "Galatians","Ephesians","Philippians",
    "Colossians","1 Thessalonians",
    "2 Thessalonians","1 Timothy","2 Timothy",
    "Titus","Philemon","Hebrews","James",
    "1 Peter","2 Peter","1 John","2 John",
    "3 John","Jude","Revelation"
  ];

  const root = document.createElement("div");

  workspace.replaceChildren(root);

  root.innerHTML = `
    <style>

      .dbad {
        color:var(--text,#ece8df);
        line-height:1.75;
      }

      .dbad .ad-panel {
        background:var(--panel2,#17191e);
        border:1px solid var(--line,#33363c);
        border-radius:12px;
        padding:22px;
        margin:18px 0;
      }

      .dbad .ad-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(160px,1fr));
        gap:14px;
      }

      .dbad input,
      .dbad select {
        background:var(--bg,#101216);
        color:var(--text,#ece8df);
        border:1px solid var(--line,#33363c);
        border-radius:7px;
        padding:11px;
        width:100%;
        box-sizing:border-box;
        font:inherit;
      }

      .dbad label {
        display:block;
        font-size:13px;
        margin-bottom:6px;
        color:var(--muted,#b3b3b3);
      }

      .dbad .ad-stat {
        font-size:28px;
        font-weight:700;
        color:var(--gold,#c7a76a);
      }

      .dbad .ad-actions {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        margin:14px 0;
      }

      .dbad .ad-record {
        background:var(--panel,#14161a);
        border:1px solid var(--line,#33363c);
        border-radius:10px;
        padding:20px;
        margin:16px 0;
      }

      .dbad .ad-id {
        font-size:12px;
        letter-spacing:1px;
        color:var(--gold,#c7a76a);
      }

      .dbad .ad-muted {
        font-size:13px;
        color:var(--muted,#b3b3b3);
      }

      .dbad .ad-note {
        background:var(--bg,#101216);
        border-left:2px solid var(--gold,#c7a76a);
        padding:14px;
        margin:13px 0;
      }

      .dbad .ad-label {
        display:inline-block;
        border:1px solid var(--line,#33363c);
        border-radius:5px;
        padding:4px 9px;
        font-size:12px;
        margin:4px 0 12px;
      }

      .dbad .ad-direct {
        color:#9bc8ad;
      }

      .dbad .ad-external {
        color:#9fc0e2;
      }

      .dbad .ad-context {
        color:#d9bd79;
      }

      .dbad .ad-comparison {
        color:#c6b1df;
      }

      .dbad .ad-reception {
        color:#dfb5a1;
      }

      .dbad a {
        color:var(--gold,#c7a76a);
        overflow-wrap:anywhere;
      }

      .dbad details {
        padding:12px 0;
        border-bottom:1px solid var(--line,#33363c);
      }

      .dbad summary {
        cursor:pointer;
        font-weight:600;
        color:var(--gold,#c7a76a);
      }

      .dbad dt {
        font-size:12px;
        color:var(--muted,#b3b3b3);
        margin-top:10px;
      }

      .dbad dd {
        margin:0 0 10px;
        overflow-wrap:anywhere;
      }

      .dbad blockquote {
        padding:12px;
        margin:10px 0;
        background:var(--bg,#101216);
        border-left:2px solid var(--gold,#c7a76a);
      }

      .dbad button:disabled {
        opacity:.45;
        cursor:not-allowed;
      }

      @media(max-width:600px) {

        .dbad .ad-panel,
        .dbad .ad-record {
          padding:13px;
        }

      }

    </style>

    <div class="dbad">

      <div class="eyebrow">
        DESERTBIBLE · PRIMARY SOURCE RESEARCH
      </div>

      <h2>Ancient Documents</h2>

      <p>
        Investigate surviving textual witnesses,
        inscriptions, historical records and
        ancient religious literature connected
        with the biblical world.
      </p>

      <section class="ad-panel">

        <div class="ad-grid">

          <div>
            <div class="ad-stat" id="adTotal"></div>
            Document records
          </div>

          <div>
            <div class="ad-stat" id="adCategoryCount"></div>
            Research collections
          </div>

          <div>
            <div class="ad-stat" id="adDirectCount"></div>
            Biblical textual witnesses
          </div>

          <div>
            <div class="ad-stat" id="adSourceCount"></div>
            Research institutions and resources
          </div>

        </div>

        <div class="ad-note">

          <strong>Evidence integrity</strong>

          <p>
            A manuscript preserves a textual reading.
            An inscription may establish a historical
            name, place or event. Comparative literature
            illuminates cultural and intellectual context.
            These different types of evidence must not
            be treated as interchangeable.
          </p>

        </div>

      </section>

      <section class="ad-panel">

        <h3>01 · Document Collections</h3>

        <div class="ad-actions" id="adCollections"></div>

      </section>

      <section class="ad-panel">

        <h3>02 · Research Catalogue</h3>

        <div class="ad-grid">

          <div>

            <label for="adSearch">
              Search documents
            </label>

            <input id="adSearch"
                   type="search"
                   placeholder="Micah, Isaiah, P52, Assyria...">

          </div>

          <div>

            <label for="adCategory">
              Document collection
            </label>

            <select id="adCategory">
              <option value="all">All collections</option>
            </select>

          </div>

          <div>

            <label for="adRelation">
              Evidence relationship
            </label>

            <select id="adRelation">
              <option value="all">All evidence types</option>
            </select>

          </div>

          <div>

            <label for="adLanguage">
              Language
            </label>

            <select id="adLanguage">
              <option value="all">All languages</option>
            </select>

          </div>

          <div>

            <label for="adBook">
              Related biblical book
            </label>

            <select id="adBook">
              <option value="all">All biblical books</option>
            </select>

          </div>

          <div>

            <label for="adEdition">
              Scripture preview translation
            </label>

            <select id="adEdition">
              <option value="web">WEB</option>
              <option value="kjv">KJV</option>
              <option value="asv">ASV</option>
            </select>

          </div>

          <div>

            <label for="adSort">
              Display order
            </label>

            <select id="adSort">
              <option value="collection">Collection order</option>
              <option value="title">Title A–Z</option>
              <option value="direct">Textual witnesses first</option>
            </select>

          </div>

        </div>

        <div class="ad-actions">

          <button type="button" id="adReset">
            Reset filters
          </button>

          <button type="button" id="adBookmarks">
            Show bookmarks
          </button>

          <button type="button" id="adCopy">
            Copy catalogue
          </button>

          <button type="button" id="adDownload">
            Download research
          </button>

        </div>

        <p id="adMessage" role="status" aria-live="polite"></p>

        <p id="adResultCount"></p>

        <div id="adResults"></div>

        <div class="ad-actions">

          <button type="button" id="adPrevious">
            Previous documents
          </button>

          <button type="button" id="adNext">
            Next documents
          </button>

        </div>

        <p id="adPage"></p>

      </section>

      <section class="ad-panel">

        <h3>03 · Manuscript Research Methodology</h3>

        <details open>

          <summary>Manuscript versus composition</summary>

          <p>
            A manuscript is a physical witness to
            a text. A composition is the literary
            work transmitted through one or more
            manuscripts.
          </p>

          <p>
            The age of a surviving copy establishes
            neither the exact age of the original
            composition nor the originality of
            every reading it preserves.
          </p>

        </details>

        <details>

          <summary>Palaeography and radiocarbon dating</summary>

          <p>
            Palaeography estimates dates by studying
            handwriting and comparing it with
            other historical examples.
          </p>

          <p>
            Radiocarbon analysis estimates the age
            of organic material. It does not
            automatically determine the exact date
            when a text was written on that material.
          </p>

        </details>

        <details>

          <summary>Provenance and archaeological context</summary>

          <p>
            Provenance concerns an object's history,
            discovery context and ownership.
          </p>

          <p>
            Controlled excavations can supply evidence
            unavailable for objects acquired without
            a documented archaeological findspot.
          </p>

        </details>

        <details>

          <summary>Textual criticism</summary>

          <p>
            Textual criticism compares surviving
            witnesses to investigate the transmission
            and earliest recoverable forms of a text.
          </p>

          <p>
            Manuscript age, scribal behavior,
            relationships between witnesses and
            internal considerations all matter.
            No single manuscript is automatically
            correct at every point.
          </p>

        </details>

        <details>

          <summary>Ancient translations</summary>

          <p>
            Greek, Latin, Syriac and other ancient
            versions can preserve evidence of earlier
            textual forms.
          </p>

          <p>
            A difference may reflect a different
            underlying text, translation technique,
            interpretation or later transmission.
          </p>

        </details>

        <details>

          <summary>Royal inscriptions and historical bias</summary>

          <p>
            Royal monuments frequently present
            rulers as victorious, legitimate and
            divinely favored.
          </p>

          <p>
            Historically valuable inscriptions must
            still be compared with other records,
            archaeological context and the political
            objectives of their authors.
          </p>

        </details>

        <details>

          <summary>Canonical status</summary>

          <p>
            An ancient document may be historically
            important without belonging to a particular
            religious canon.
          </p>

          <p>
            Jewish, Protestant, Catholic, Eastern
            Orthodox and Ethiopian Orthodox traditions
            do not all possess identical scriptural
            collections.
          </p>

        </details>

        <details>

          <summary>Manuscript identification systems</summary>

          <p>
            Dead Sea Scroll identifiers such as 1Q
            and 4Q refer to discovery locations
            and manuscript cataloguing systems.
          </p>

          <p>
            Gregory–Aland identifiers such as P52
            and 01 designate New Testament
            manuscript witnesses.
          </p>

          <p>
            Museum accession numbers identify
            particular catalogued objects.
          </p>

          <p>
            Researchers should record manuscript
            identifiers, fragment numbers, columns,
            lines and edition details whenever
            available.
          </p>

        </details>

        <details>

          <summary>Historical evidence versus theological claims</summary>

          <p>
            External evidence may establish that
            a ruler existed, that a city was destroyed
            or that a religious community circulated
            a particular text.
          </p>

          <p>
            Such evidence does not necessarily establish
            every associated narrative detail or resolve
            its theological interpretation.
          </p>

        </details>

      </section>

      <section class="ad-panel">

        <h3>04 · Documentary Evidence classifications</h3>

        <div id="adDefinitions"></div>

      </section>

      <section class="ad-panel">

        <h3>05 · Digital Archives and Research Institutions</h3>

        <div id="adLibrary"></div>

        <p class="ad-muted">
          Collection links lead to research repositories.
          Search using the displayed manuscript title
          or catalogue identifier. Direct document links
          are identified separately where supplied.
        </p>

      </section>

      <section class="ad-panel">

        <h3>06 · Academic Citation Guide</h3>

        <p>
          A complete documentary citation should
          identify the document, manuscript or accession
          number, relevant passage, column or line,
          publication or editor, and the consulted source.
        </p>

        <div class="ad-note">

          <strong>Example identification</strong>

          <p>
            Great Isaiah Scroll (1QIsaᵃ),
            Isaiah 53, Israel Museum,
            Digital Dead Sea Scrolls.
          </p>

          <p>
            Add the specific column, line and
            consulted edition when citing an exact reading.
          </p>

        </div>

        <p>
          DesertBible's citation export supplies
          a research record and resource links.
          It is not a substitute for a complete
          critical-edition citation.
        </p>

      </section>

      <section class="ad-panel">

        <h3>07 · Catalogue Scope</h3>

        <p>
          This curated catalogue covers selected
          significant documents from the ancient
          Near East, biblical manuscript traditions,
          Second Temple Judaism, the Roman world
          and early Christianity.
        </p>

        <p>
          Related passages identify direct textual
          witnesses, historical relationships or
          thematic comparisons according to each
          record's evidence classification.
        </p>

        <p>
          A related biblical book does not mean
          the document preserves the entire book.
          Consult the surviving manuscript contents
          and critical editions for exact coverage.
        </p>

        <p>
          External archives contain additional
          documents beyond this catalogue.
          Some resources require further navigation
          or institutional access.
        </p>

      </section>

      <button type="button" id="adClose">
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

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }

  function link(parent,title,url) {

    const anchor = make("a",title,parent);

    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    return anchor;
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

  function normalize(value) {

    return String(value || "")
      .normalize("NFKD")
      .replace(/\p{M}/gu,"")
      .toLowerCase()
      .trim();
  }

  let page = 0;

  const pageSize = 10;

  let bookmarkedOnly = false;

  const saved = new Set();

  const cache = new Map();

  const storageKey =
    "DesertBible.ancientDocuments.bookmarks.v1";

  try {

    const previous = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    if (Array.isArray(previous)) {

      previous.forEach(id => {

        if (records.some(record => record.id === id)) {
          saved.add(id);
        }

      });

    }

  } catch {}

  function persist() {

    try {

      localStorage.setItem(
        storageKey,
        JSON.stringify([...saved])
      );

      $("adMessage").textContent =
        "Research bookmarks saved in this browser.";

    } catch {

      $("adMessage").textContent =
        "Bookmarks retained for this session only.";

    }

  }

  $("adTotal").textContent = records.length;

  $("adCategoryCount").textContent = categories.length;

  $("adDirectCount").textContent =
    records.filter(
      record => record.relation === "direct"
    ).length;

  $("adSourceCount").textContent =
    Object.keys(collections).length;

  categories.forEach((category,index) => {

    const count = records.filter(
      record => record.category === index
    ).length;

    option(
      $("adCategory"),
      String(index),
      category + " (" + count + ")"
    );

    button(
      $("adCollections"),
      category + " (" + count + ")",
      () => {

        $("adCategory").value = String(index);

        page = 0;

        render();

        $("adResultCount").scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }
    );

  });

  Object.entries(relations).forEach(([key,title]) => {

    option($("adRelation"),key,title);

  });

  const languages = [
    "Hebrew",
    "Aramaic",
    "Greek",
    "Latin",
    "Akkadian",
    "Egyptian",
    "Moabite",
    "Old Persian",
    "Elamite",
    "Ethiopic"
  ];

  languages.forEach(language => {

    option($("adLanguage"),language,language);

  });

  bibleBooks.forEach(book => {

    option($("adBook"),book,book);

  });

  const definitions = {

    direct:
      "A manuscript or ancient witness preserving biblical wording or a closely related scriptural formula.",

    external:
      "A source outside the biblical text relevant to a historical person, office, event or political setting.",

    context:
      "A document illuminating the environment, institutions, customs or religious practices associated with biblical history.",

    comparison:
      "A literary or documentary source relevant to thematic, legal, linguistic or cultural comparison.",

    reception:
      "Evidence concerning the interpretation, use or transmission of Scripture and related religious traditions."

  };

  Object.entries(relations).forEach(([key,title]) => {

    const section = make(
      "details",undefined,$("adDefinitions")
    );

    make("summary",title,section);

    make("p",definitions[key],section);

  });

  Object.values(collections).forEach(source => {

    const paragraph = make(
      "p",undefined,$("adLibrary")
    );

    link(paragraph,source[0],source[1]);

  });

  function relatedBooks(reference) {

    const text = String(reference).trim();

    if (text === "Genesis–Malachi") {
      return bibleBooks.slice(0,39);
    }

    if (text === "Matthew–Revelation") {
      return bibleBooks.slice(39);
    }

    if (text === "Matthew–Hebrews") {
      return bibleBooks.slice(39,58);
    }

    const ordered = [...bibleBooks].sort(
      (a,b) => b.length-a.length
    );

    const book = ordered.find(name =>

      text === name ||
      text.startsWith(name + " ")

    );

    return book ? [book] : [];

  }

  function matchesBook(record,book) {

    return record.passages.some(reference =>

      relatedBooks(reference).includes(book)

    );

  }

  function filtered() {

    const query = normalize($("adSearch").value);

    const category = $("adCategory").value;

    const relation = $("adRelation").value;

    const language = $("adLanguage").value;

    const book = $("adBook").value;

    const result = records.filter(record => {

      if (
        bookmarkedOnly &&
        !saved.has(record.id)
      ) return false;

      if (
        category !== "all" &&
        record.category !== Number(category)
      ) return false;

      if (
        relation !== "all" &&
        record.relation !== relation
      ) return false;

      if (
        language !== "all" &&
        !normalize(record.language).includes(
          normalize(language)
        )
      ) return false;

      if (
        book !== "all" &&
        !matchesBook(record,book)
      ) return false;

      if (query) {

        const searchable = normalize([

          record.id,
          record.title,
          record.date,
          record.language,
          record.material,
          record.origin,
          record.description,
          record.significance,
          record.limitations,
          categories[record.category],
          relations[record.relation],
          ...record.passages

        ].join(" "));

        if (!query.split(/\s+/).every(term =>
          searchable.includes(term)
        )) return false;

      }

      return true;

    });

    if ($("adSort").value === "title") {

      result.sort((a,b) =>
        a.title.localeCompare(b.title)
      );

    }

    if ($("adSort").value === "direct") {

      result.sort((a,b) =>

        Number(b.relation === "direct") -
        Number(a.relation === "direct")

      );

    }

    return result;
  }

  function documentCitation(record) {

    const lines = [

      "DESERTBIBLE — ANCIENT DOCUMENTS",

      record.title,

      "Research identifier: " + record.id,

      "Collection: " + categories[record.category],

      "Date: " + record.date,

      "Language: " + record.language,

      "Document type: " + record.material,

      "Origin or provenance: " + record.origin,

      "Evidence relationship: " +
        relations[record.relation],

      "",

      "Description:",

      record.description,

      "",

      "Research significance:",

      record.significance,

      "",

      "Evidence limitations:",

      record.limitations,

      "",

      "Related biblical passages:",

      record.passages.join("; "),

      "",

      "Direct resources:"

    ];

    if (record.links.length) {

      record.links.forEach(source => {

        lines.push(source[0],source[1]);

      });

    } else {

      lines.push(
        "No item-specific digital link attached."
      );

    }

    lines.push("","Collection and research resources:");

    record.collections.forEach(key => {

      const source = collections[key];

      if (source) {
        lines.push(source[0],source[1]);
      }

    });

    lines.push(

      "",

      "Citation limitation: Consult the original " +
      "manuscript catalogue or critical edition " +
      "for exact page, column, line or fragment citations.",

      "Exported: " + new Date().toISOString()

    );

    return lines.join("\n");

  }

  function exportCatalogue() {

    return [

      "DESERTBIBLE — ANCIENT DOCUMENTS RESEARCH",

      "Filtered records: " + filtered().length,

      "",

      ...filtered().map(documentCitation)

    ].join("\n\n" + "=".repeat(55) + "\n\n");

  }

  async function copyText(text,message) {

    try {

      await navigator.clipboard.writeText(text);

      $("adMessage").textContent = message;

    } catch {

      $("adMessage").textContent =
        "Clipboard unavailable. Use Download research.";

    }

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

  function previewReference(parent,reference) {

    const section = make("div",undefined,parent);

    make("p",reference,section);

    const researchLink = make(
      "p",undefined,section
    );

    link(

      researchLink,

      "Open biblical research in STEP Bible",

      "https://www.stepbible.org/?q=version=KJV|reference=" +
        encodeURIComponent(reference)

    );

    /*
      Only individual chapter-and-verse references
      receive inline API previews.

      Whole books and broad ranges remain
      available through external research links.
    */

    const match = reference.match(
      /^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/
    );

    if (!match) return;

    const first = Number(match[3]);

    const last = match[4]
      ? Number(match[4])
      : first;

    if (last-first > 40 || last < first) return;

    const output = make("div",undefined,section);

    button(section,"Read Scripture",async event => {

      const control = event.currentTarget;

      if (output.dataset.loaded === "true") {

        output.hidden = !output.hidden;

        control.textContent = output.hidden
          ? "Read Scripture"
          : "Hide Scripture";

        return;

      }

      control.disabled = true;

      output.textContent = "Retrieving Scripture…";

      try {

        const edition = $("adEdition").value;

        const url =
          "https://bible-api.com/" +
          encodeURIComponent(reference) +
          "?translation=" + edition;

        let result = cache.get(url);

        if (!result) {

          const response = await fetch(url);

          if (!response.ok) {

            throw new Error(

              "Scripture source unavailable (HTTP " +
              response.status + ")."

            );

          }

          const json = await response.json();

          if (
            !Array.isArray(json.verses) ||
            !json.verses.length
          ) {

            throw new Error(
              "No Scripture text returned."
            );

          }

          result = json.verses.map(verse =>

            String(verse.text || "").trim()

          ).join(" ");

          cache.set(url,result);

        }

        if (!output.isConnected) return;

        output.replaceChildren();

        make(
          "p",
          reference + " · " + edition.toUpperCase(),
          output
        );

        make("blockquote",result,output);

        link(output,"Verify biblical text source",url);

        make(

          "p",

          "This is a modern Bible translation preview, not a transcription or translation of the ancient document.",

          output

        ).className = "ad-muted";

        output.dataset.loaded = "true";

        control.textContent = "Hide Scripture";

      } catch (error) {

        output.textContent =
          error.message + " Use the external research link.";

      } finally {

        control.disabled = false;

      }

    });

  }

  function renderRecord(record,parent) {

    const article = make("article",undefined,parent);

    article.className = "ad-record";

    make(

      "div",

      record.id + " · " + categories[record.category],

      article

    ).className = "ad-id";

    make("h3",record.title,article);

    make(

      "div",

      relations[record.relation],

      article

    ).className =
      "ad-label ad-" + record.relation;

    const metadata = make("dl",undefined,article);

    [

      ["Date",record.date],

      ["Language",record.language],

      ["Document type",record.material],

      ["Origin or discovery context",record.origin]

    ].forEach(([label,value]) => {

      make("dt",label,metadata);

      make("dd",value,metadata);

    });

    make("h4","Document overview",article);

    make("p",record.description,article);

    make("h4","Research significance",article);

    make("p",record.significance,article);

    const limitation = make("div",undefined,article);

    limitation.className = "ad-note";

    make("strong","Evidence limitations",limitation);

    make("p",record.limitations,limitation);

    const passages = make("details",undefined,article);

    make(

      "summary",

      "Related Scripture (" +
      record.passages.length + ")",

      passages

    );

    make(

      "p",

      "The relationship between these passages and the document is classified above. Related passages do not necessarily survive within the document.",

      passages

    ).className = "ad-muted";

    record.passages.forEach(reference => {

      previewReference(passages,reference);

    });

    const sources = make("details",undefined,article);

    make("summary","Ancient sources and verification",sources);

    if (record.links.length) {

      make("h4","Document-specific resources",sources);

      record.links.forEach(source => {

        const paragraph = make("p",undefined,sources);

        link(paragraph,source[0],source[1]);

      });

    } else {

      make(

        "p",

        "No direct item-level digital link is attached. Consult the collection resources below using the document title or manuscript identifier.",

        sources

      ).className = "ad-muted";

    }

    make("h4","Collection and research resources",sources);

    record.collections.forEach(key => {

      const source = collections[key];

      if (!source) return;

      const paragraph = make("p",undefined,sources);

      link(paragraph,source[0],source[1]);

    });

    const controls = make("div",undefined,article);

    controls.className = "ad-actions";

    const bookmark = button(

      controls,

      saved.has(record.id)
        ? "Remove bookmark"
        : "Bookmark document",

      () => {

        if (saved.has(record.id)) {

          saved.delete(record.id);

        } else {

          saved.add(record.id);

        }

        persist();

        updateBookmarks();

        if (bookmarkedOnly) {

          render();

        } else {

          bookmark.textContent = saved.has(record.id)
            ? "Remove bookmark"
            : "Bookmark document";

        }

      }

    );

    button(controls,"Copy research citation",() => {

      copyText(

        documentCitation(record),

        "Document research citation copied."

      );

    });

    button(controls,"Download document record",() => {

      downloadText(

        documentCitation(record),

        "DesertBible-" + record.id + ".txt"

      );

    });

  }

  function updateBookmarks() {

    $("adBookmarks").textContent = bookmarkedOnly

      ? "Show all documents"

      : "Show bookmarks (" + saved.size + ")";

  }

  function render() {

    const results = filtered();

    const totalPages = Math.max(
      1,
      Math.ceil(results.length/pageSize)
    );

    page = Math.min(
      Math.max(page,0),
      totalPages-1
    );

    $("adResults").replaceChildren();

    $("adResultCount").textContent =

      results.length +
      " matching document records out of " +
      records.length + ".";

    $("adPage").textContent =

      "Page " + (page+1) + " of " + totalPages;

    $("adPrevious").disabled = page === 0;

    $("adNext").disabled =
      page+1 >= totalPages;

    $("adCopy").disabled = !results.length;

    $("adDownload").disabled = !results.length;

    if (!results.length) {

      make(

        "p",

        "No documents match the selected filters. This does not establish that no relevant ancient evidence exists.",

        $("adResults")

      );

      return;

    }

    results.slice(

      page*pageSize,

      (page+1)*pageSize

    ).forEach(record => {

      renderRecord(record,$("adResults"));

    });

  }

  [

    "adSearch",
    "adCategory",
    "adRelation",
    "adLanguage",
    "adBook",
    "adEdition",
    "adSort"

  ].forEach(id => {

    const control = $(id);

    control.addEventListener(

      control.tagName === "INPUT"
        ? "input"
        : "change",

      () => {

        page = 0;

        render();

      }

    );

  });

  $("adReset").addEventListener("click",() => {

    $("adSearch").value = "";

    $("adCategory").value = "all";

    $("adRelation").value = "all";

    $("adLanguage").value = "all";

    $("adBook").value = "all";

    $("adSort").value = "collection";

    $("adEdition").value = "web";

    bookmarkedOnly = false;

    $("adMessage").textContent = "";

    page = 0;

    updateBookmarks();

    render();

  });

  $("adBookmarks").addEventListener("click",() => {

    bookmarkedOnly = !bookmarkedOnly;

    page = 0;

    updateBookmarks();

    render();

  });

  $("adCopy").addEventListener("click",() => {

    copyText(

      exportCatalogue(),

      "Filtered document catalogue copied."

    );

  });

  $("adDownload").addEventListener("click",() => {

    downloadText(

      exportCatalogue(),

      "DesertBible-Ancient-Documents.txt"

    );

  });

  $("adPrevious").addEventListener("click",() => {

    page--;

    render();

    $("adResultCount").scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  });

  $("adNext").addEventListener("click",() => {

    page++;

    render();

    $("adResultCount").scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  });

  $("adClose").addEventListener("click",() => {

    workspace.remove();

  });

  updateBookmarks();

  render();

  workspace.scrollIntoView({

    behavior:"smooth",

    block:"start"

  });

}





