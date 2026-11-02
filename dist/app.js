const quotes = [
  { text: "今のこの社会的な混乱は、まだプロローグでしかない。", tag: "映画っぽい", cat: "movie", note: "THE PROLOGUE", hot: true },
  { text: "以前は拳銃でした。今は機関銃です。", tag: "映画っぽい", cat: "movie", note: "ESCALATION", hot: true },
  { text: "このインターネットを、人々の、日本の、世界の宝物として、きれいにしてから死んでいきたいと思います。", tag: "映画っぽい", cat: "movie", note: "THE LAST MISSION", hot: true },
  { text: "僕は命かけて、この産業を多くの方の笑顔のツールにしてから死ぬつもりです。", tag: "映画っぽい", cat: "movie", note: "FINAL LINE", hot: true },
  { text: "この業界から撤退し、『あとは任せたよ』なんて言えません。", tag: "映画っぽい", cat: "movie", note: "NO RETREAT", hot: false },
  { text: "以前はピンポイント爆撃でした。今は絨毯爆撃です。", tag: "映画っぽい", cat: "movie", note: "THE ATTACK", hot: false },
  { text: "皆さんの武器のペンは、この事実を書いていただきたい。", tag: "映画っぽい", cat: "movie", note: "THE PRESS", hot: false },
  { text: "AIが攻撃者にはAIを。", tag: "おーっと", cat: "ai", note: "COUNTERMEASURE", hot: true },
  { text: "スピードは曲線ではありません。垂直です。", tag: "おーっと", cat: "ai", note: "VERTICAL", hot: true },
  { text: "日進月歩ならぬ、秒進分歩です。", tag: "おーっと", cat: "ai", note: "NEW SPEED", hot: false },
  { text: "もはや、スピードの障害になっているのは人間という時代が訪れました。", tag: "おーっと", cat: "ai", note: "THE BOTTLENECK", hot: true },
  { text: "今の日本のインターネットを守るには、サイバーイージスしかないと思っています。", tag: "おーっと", cat: "ai", note: "CYBER AEGIS", hot: false },
  { text: "IPを止めればいいんですよ。", tag: "おーっと", cat: "ai", note: "SIMPLE ANSWER", hot: true },
  { text: "一歩たりとも犯罪者に、お金を払うことはしない。", tag: "おーっと", cat: "ai", note: "NO RANSOM", hot: false },
  { text: "同じ回答をすると、皆様の命の砂時計を無駄遣いします。", tag: "ネタ・会見", cat: "funny", note: "TIME MANAGEMENT", hot: true },
  { text: "ちょっとすまん、竹信くん、ちゃんとボタン閉めてください。あなたお詫びをしているのに、ボタン開けてどうすんだ？", tag: "ネタ・会見", cat: "funny", note: "DRESS CODE", hot: true },
  { text: "私の仮説ですが、早い時間にお越しになった方は中央におられるのではないか。", tag: "ネタ・会見", cat: "funny", note: "FAIRNESS THEORY", hot: false },
  { text: "フェアに、早く来られた記者様から前列から左右一段ずつ行きます。", tag: "ネタ・会見", cat: "funny", note: "THE ORDER", hot: false },
  { text: "社員さんは禁止用語です。", tag: "ネタ・会見", cat: "funny", note: "HOUSE RULES", hot: false },
  { text: "子会社は禁止用語です。", tag: "ネタ・会見", cat: "funny", note: "HOUSE RULES", hot: false },
  { text: "クマの耳という制度を自分で作っておりまして、8000人が私にダイレクトに連絡できます。", tag: "ネタ・会見", cat: "funny", note: "KUMA'S EAR", hot: false },
  { text: "ランチのおかずがまずいという話があれば、業者さんと交渉します。", tag: "ネタ・会見", cat: "funny", note: "LUNCH CRISIS", hot: false },
  { text: "命の砂時計を何に捧げているのかというのが人生です。", tag: "おーっと", cat: "wow", note: "LIFE TIMER", hot: true },
  { text: "990分のカウントダウン。命の砂時計。", tag: "おーっと", cat: "wow", note: "990 MINUTES", hot: true },
  { text: "お客様の笑顔が基準です。", tag: "理念・経営", cat: "wow", note: "THE STANDARD", hot: false },
  { text: "利益は目的ではなく、結果です。", tag: "理念・経営", cat: "wow", note: "THE RESULT", hot: false },
  { text: "私は31年間、一度たりとも、もうかる、もうけるという言葉を使ったことはありません。", tag: "理念・経営", cat: "wow", note: "31 YEARS", hot: true },
  { text: "自分の失敗をお客さんに迷惑をかけて、その話をすり替えるつもりは1ミリもありません。", tag: "理念・経営", cat: "wow", note: "NO SPIN", hot: false },
];

const grid = document.querySelector('#quoteGrid');
const empty = document.querySelector('#emptyState');
const search = document.querySelector('#searchInput');
const toast = document.querySelector('#toast');
let activeFilter = 'all';

function cardTemplate(item, index) {
  return `<article class="quote-card ${item.hot ? 'standout' : ''}" data-index="${index}">
    <span class="accent">${item.hot ? '✦' : '✧'}</span>
    <div><div class="card-tag">${item.tag}</div><blockquote>「${item.text}」</blockquote></div>
    <div class="card-footer"><span class="source">${item.note}</span><button class="copy-btn" data-copy="${escapeAttr(item.text)}" type="button">COPY ⧉</button></div>
  </article>`;
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function render() {
  const needle = search.value.trim().toLowerCase();
  const filtered = quotes.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.cat === activeFilter;
    const matchesSearch = !needle || `${item.text} ${item.tag} ${item.note}`.toLowerCase().includes(needle);
    return matchesFilter && matchesSearch;
  });
  grid.innerHTML = filtered.map((item) => cardTemplate(item, quotes.indexOf(item))).join('');
  empty.hidden = filtered.length !== 0;
}

function showToast(message = 'コピーしました') {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1500);
}

async function copyText(text, button) {
  try { await navigator.clipboard.writeText(text); }
  catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); }
  if (button) { const original = button.textContent; button.textContent = 'COPIED ✓'; button.classList.add('copied'); setTimeout(() => { button.textContent = original; button.classList.remove('copied'); }, 1200); }
  showToast();
}

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  activeFilter = 'all';
  document.querySelectorAll('.filter').forEach((button) => { button.classList.toggle('active', button.dataset.filter === 'all'); button.setAttribute('aria-selected', button.dataset.filter === 'all'); });
  search.value = '';
  render();
  document.querySelector(`#quoteGrid .quote-card[data-index="${index}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const card = document.querySelector(`#quoteGrid .quote-card[data-index="${index}"]`);
  card?.classList.add('random-picked');
  setTimeout(() => card?.classList.remove('random-picked'), 1200);
}

document.querySelector('#filters').addEventListener('click', (event) => {
  const button = event.target.closest('.filter');
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach((item) => { item.classList.toggle('active', item === button); item.setAttribute('aria-selected', item === button); });
  render();
});
search.addEventListener('input', render);
document.querySelector('#clearSearch').addEventListener('click', () => { search.value = ''; activeFilter = 'all'; document.querySelector('[data-filter="all"]').click(); });
document.querySelector('#randomTop').addEventListener('click', randomQuote);
document.querySelector('#randomHero').addEventListener('click', randomQuote);
document.addEventListener('click', (event) => { const button = event.target.closest('[data-copy]'); if (button) copyText(button.dataset.copy, button); });
render();
