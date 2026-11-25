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
