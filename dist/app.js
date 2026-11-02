const profileUrl = 'https://www.kumagai.com/profile/?anc=about_gmo';
const lifeUrl = 'https://shop.kumagai.com/app/';

const quotes = [
  { text: "ちょっとすまん、武信くん、ちゃんとボタン閉めてください。あなたお詫びをしているのにボタン開けてどうすんだ？", tag: "ネタ・会見", cat: "funny", note: "DRESS CODE", hot: true, time: "02:37:07頃", scene: "謝罪会見の空気が張りつめているところに、服装へのひと言が突然入る場面。", meaning: "深刻な会見なのに、注意の内容だけが妙に日常的。その落差が、この会見を象徴する一言として残りました。" },
  { text: "同じ回答を二度すると、皆様のお命、命の砂時計無駄遣いしますので。", tag: "ネタ・会見", cat: "funny", note: "TIME MANAGEMENT", hot: true, time: "01:41:26頃", scene: "同じ趣旨の質問が重なったとき、待っている記者の時間を大切にしたいという流れで出た言葉。", meaning: "熊谷氏が普段から語る『時間＝命』という考え方を、質疑応答の進行にもそのまま持ち込んだ場面です。", life: "公式の夢手帳でも、時間を有限の命として可視化する考え方を発信しています。", sourceUrl: lifeUrl, sourceLabel: "公式アプリ『夢が、かなうアプリ。』" },
  { text: "IPを止めればいいんですよ。", tag: "おーっと", cat: "ai", note: "SIMPLE ANSWER", hot: true, time: "01:31:22頃", scene: "通信の秘密などの論点を踏まえたうえで、被害拡大を止める方法を短く言い切った場面。", meaning: "技術的・制度的な難しさを飛び越えて、まず止めるという強い意志だけが前に出る一言です。" },
  { text: "早い時間にお越しになった方は中央におられるのではないかという仮説を持って、フェアに。", tag: "ネタ・会見", cat: "funny", note: "FAIRNESS THEORY", hot: true, time: "02:50:07頃", scene: "記者からの質問順をどう決めているか説明するなかで、会場の位置と来場時間を結びつけた仮説。", meaning: "会見の進行ルールを説明しているだけなのに、急に独自の会場理論が始まるところが面白いポイントです。" },
  { text: "早く来られた記者様から前列から左右一段ずつ行きまして。", tag: "ネタ・会見", cat: "funny", note: "THE ORDER", time: "02:50:17頃", scene: "質問者の指名順について、最前列から左右均等に進める運営方法を説明した場面。", meaning: "謝罪会見が、いつの間にか整然とした座席・指名アルゴリズムの説明会になります。" },
  { text: "「社員さん」。これは禁止用語なので。", tag: "ネタ・会見", cat: "funny", note: "HOUSE RULES", time: "00:33:05頃", scene: "GMOグループの呼び方を説明し、社員を『パートナー』と呼ぶ方針を語った場面。", meaning: "呼び方にまで理念を通す、GMOイズムの細かさが一言で分かります。", life: "公式プロフィールでも、パートナーや挑戦を通じて笑顔を増やす考え方が紹介されています。", sourceUrl: profileUrl, sourceLabel: "熊谷正寿 公式プロフィール" },
  { text: "子会社は禁止用語です。", tag: "ネタ・会見", cat: "funny", note: "HOUSE RULES", time: "00:33:11頃", scene: "M&Aを『仲間づくり』と呼び、上下関係を感じさせる言葉を避ける説明のなかで出た言葉。", meaning: "企業グループの組織図より先に、言葉のルールを紹介するところが熊谷流です。", life: "GMOの公式資料でも、GMOイズムを共有する組織づくりが重要な価値として扱われています。", sourceUrl: profileUrl, sourceLabel: "熊谷正寿 公式プロフィール" },
  { text: "クマの耳という制度を自分で作っておりまして、8000人が私にダイレクトに連絡ができるようになってます。", tag: "ネタ・会見", cat: "funny", note: "KUMA'S EAR", time: "03:07:37頃", scene: "グループのトップとパートナーが直接つながる仕組みを説明した場面。", meaning: "大企業の話なのに、制度名が『クマの耳』。スケールと名前のゆるさのギャップが強烈です。" },
  { text: "ランチのおかずがまずいという話があれば、それを業者さんと交渉し。", tag: "ネタ・会見", cat: "funny", note: "LUNCH CRISIS", time: "03:08:55頃", scene: "トップへの直接連絡が、重大な経営課題だけでなく身近な困りごとにも届くという例え。", meaning: "企業統治の話を、ランチのおかずまで下げて説明することで、制度のキャラクターが立っています。" },
  { text: "今のこの社会的な混乱は、まだプロローグでしかないと。", tag: "映画っぽい", cat: "movie", note: "THE PROLOGUE", hot: true, time: "00:54:15頃", scene: "不正アクセスの謝罪から、AIによって変化するサイバー攻撃の話へ移る第2部での発言。", meaning: "会見を一気に近未来サスペンスの予告編へ変える、最も映画っぽい一言です。", life: "熊谷氏は1995年からインターネット事業に関わり、公式メッセージでもAIをインターネット革命の後半戦と位置づけています。", sourceUrl: profileUrl, sourceLabel: "熊谷正寿 公式プロフィール" },
  { text: "以前は拳銃でした。今は機関銃です。", tag: "映画っぽい", cat: "movie", note: "ESCALATION", hot: true, time: "00:56:36頃", scene: "AIによって攻撃の速度と量が変わったことを、武器の比喩で説明した場面。", meaning: "抽象的なサイバー攻撃の変化を、誰でも映像化できる比喩に変えています。" },
  { text: "AIの攻撃者にはAIをだと思うんです。", tag: "おーっと", cat: "ai", note: "COUNTERMEASURE", hot: true, time: "02:41:32頃", scene: "日本を守るAIの話から、AIを使う攻撃者に対抗する方向性を語った場面。", meaning: "短すぎるのに、宣戦布告と作戦名のように聞こえる一言です。" },
  { text: "スピードは曲線ではありません。垂直です。", tag: "おーっと", cat: "ai", note: "VERTICAL", hot: true, time: "00:39:43頃", scene: "ChatGPT登場後のAIの進化速度を、曲線から垂直へ変わったと説明した場面。", meaning: "グラフの説明が、そのまま時代への危機感を表す決めぜりふになっています。" },
  { text: "日進月歩ならぬ、秒針奮励。", tag: "おーっと", cat: "ai", note: "NEW SPEED", time: "00:40:02頃", scene: "技術の進歩が日単位ではなく、秒単位のイメージになったという趣旨の言葉。", meaning: "四字熟語を作り替える、熊谷語録らしい速度感の表現です。" },
  { text: "スピードの障害になっているのは人間という時代が訪れました。", tag: "おーっと", cat: "ai", note: "THE BOTTLENECK", hot: true, time: "00:42:11頃", scene: "AIが24時間動き、コピーもできるため、人間の処理速度がボトルネックになるという説明。", meaning: "人間中心の仕事観をひっくり返すので、聞いた瞬間に『おーっと』なります。" },
  { text: "今やちょっと知識があれば、高校生でも、下手すると中学生でも、攻撃者・ハッカーが犯罪者になれるツールがこのAltexです。", tag: "おーっと", cat: "ai", note: "NEXT GENERATION", time: "00:51:47頃", scene: "脆弱性診断ツールやAIの悪用可能性について説明した場面。", meaning: "専門的なセキュリティの話を、年齢のイメージまで下げて危険性を伝えています。" },
  { text: "以前はピンポイント爆撃でした。今は絨毯爆撃です。", tag: "映画っぽい", cat: "movie", note: "THE ATTACK", time: "00:57:02頃", scene: "攻撃の変化を、拳銃・機関銃、ピンポイント爆撃・絨毯爆撃という比喩で並べた場面。", meaning: "会見が企業の謝罪から、戦場のナレーションへ切り替わる瞬間です。" },
  { text: "このインターネットを、人々の、日本の、世界の宝物として、きれいにしてから死んでいきたいと思います。", tag: "映画っぽい", cat: "movie", note: "THE LAST MISSION", hot: true, time: "00:58:49頃", scene: "31年間インターネット産業に関わってきた責任と、残りの人生について語った場面。", meaning: "大げさに聞こえるほどの使命感を、本人の人生そのものとして語るからこそ映画的です。", life: "公式プロフィールでは、1991年の創業からインターネット事業を続け、挑戦を通じて笑顔を増やすことを掲げています。", sourceUrl: profileUrl, sourceLabel: "熊谷正寿 公式プロフィール" },
  { text: "僕は命かけて、この産業を多くの方の笑顔のツールにしてから死ぬつもりです。", tag: "映画っぽい", cat: "movie", note: "FINAL LINE", hot: true, time: "00:58:49頃", scene: "インターネットを犯罪者の道具のまま残して引退できないという話の続き。", meaning: "『笑顔』という経営理念と、『命をかける』という覚悟が一文に重なっています。", life: "GMOの公式トップメッセージも、お客様の笑顔と感動を創造し社会に貢献することを使命として掲げています。", sourceUrl: 'https://www.gmo.jp/company-profile/top-message/', sourceLabel: "GMO公式トップメッセージ" },
  { text: "この業界から撤退し、『あとは任せたよ』なんて言えません。", tag: "映画っぽい", cat: "movie", note: "NO RETREAT", time: "00:59:27頃", scene: "自分が長年関わってきたインターネットを、途中で放り出すことはできないという文脈。", meaning: "引退宣言の逆。最後まで現場に残る主人公の台詞のように響きます。" },
  { text: "皆さんの武器のペンは、この事実を書いていただきたい。", tag: "映画っぽい", cat: "movie", note: "THE PRESS", time: "00:57:55頃", scene: "報道陣に、攻撃の変化と社会の対応の遅れを伝えてほしいと求めた場面。", meaning: "記者のペンを『武器』と呼び、会見を社会への作戦会議に変えています。" },
  { text: "命の砂時計を何に捧げているのかというのが人生であり。", tag: "おーっと", cat: "wow", note: "LIFE TIMER", hot: true, time: "01:11:32頃", scene: "会社は理念で成り立つという質問への答えとして、自分の人生と会社の関係を説明した場面。", meaning: "時間の管理術を、人生の使い道という哲学まで引き上げた一言です。", life: "公式プロフィールの座右の銘は、夢を行動にし、習慣にし、人格と運命につなげるという考え方です。", sourceUrl: profileUrl, sourceLabel: "熊谷正寿 公式プロフィール" },
  { text: "990分のカウントダウン。命の砂時計。", tag: "おーっと", cat: "wow", note: "990 MINUTES", hot: true, time: "01:11:22頃", scene: "睡眠時間を除けば、1日に使える時間は990分ほどだと説明した場面。", meaning: "会見の進行管理と人生哲学が、同じ『時間』という言葉でつながります。", life: "公式の夢手帳アプリも、人生をカウントダウンとして意識する仕組みを採用しています。", sourceUrl: lifeUrl, sourceLabel: "公式アプリ『夢が、かなうアプリ。』" },
  { text: "一歩たりとも犯罪者に、お金を払うことはしない。", tag: "おーっと", cat: "ai", note: "NO RANSOM", time: "00:44:28頃", scene: "犯罪者がAIを使って社会を脅かしていると述べ、身代金を支払わない方針を明言した場面。", meaning: "謝罪会見の中に、交渉を拒む強い対決姿勢が現れます。" },
  { text: "私は31年間、一度たりとも、もうかる、もうけるという言葉を使ったことはありません。", tag: "理念・経営", cat: "wow", note: "31 YEARS", hot: true, time: "00:32:05頃", scene: "GMOismの説明で、利益ではなくお客様の笑顔を目標にしてきたと語った場面。", meaning: "経営者の会見で利益の話を否定し、理念を先に置くところが熊谷氏らしいポイントです。", life: "公式のGMO資料でも、お客様の笑顔・感動と社会への貢献がグループの価値として掲げられています。", sourceUrl: 'https://www.gmo.jp/company-profile/top-message/', sourceLabel: "GMO公式トップメッセージ" },
  { text: "お客様の笑顔が基準です。", tag: "理念・経営", cat: "wow", note: "THE STANDARD", time: "01:38:01頃", scene: "判断基準は儲かるかどうかではなく、お客様が笑顔になるかどうかだと説明した場面。", meaning: "短いからこそ、会見全体の評価軸として機能する言葉です。", life: "GMO公式トップメッセージでも、お客様の笑顔と感動を創造し社会に貢献すると説明されています。", sourceUrl: 'https://www.gmo.jp/company-profile/top-message/', sourceLabel: "GMO公式トップメッセージ" },
  { text: "目的ではなく、結果としての利益で株主様も笑顔になると。", tag: "理念・経営", cat: "wow", note: "THE RESULT", time: "00:31:43頃", scene: "『お客様の笑顔』を先に置き、その循環の結果として利益が生まれるという説明を短く編集した表現。", meaning: "会見中の理念説明を、サイト用に読みやすく要約した一行です。", life: "熊谷氏は手帳に夢と行動を書き、目標を実行・実現する方法を長年発信しています。", sourceUrl: lifeUrl, sourceLabel: "公式アプリ『夢が、かなうアプリ。』" },
  { text: "自分の失敗をお客さんに迷惑をかけて、その話をすり替えるつもりは1ミリもありません。", tag: "理念・経営", cat: "wow", note: "NO SPIN", time: "00:58:13頃", scene: "AIや社会の危機を語る第2部が、自社の不正アクセスの言い訳ではないと線引きした場面。", meaning: "大きな社会論を語りながら、自社の責任から逃げないという釘を自分で刺しています。" },
];

const contextByIndex = [
  { before: "ご質問のご回答に関しましてですが、おっしゃるとおり、設定不備による今回のインシデントでございます。", after: "申し訳ありません。はい。" },
  { before: "あと事業の継続性とか、そういうものを優先したということはないのか、判断に影響があったかかはなかったのか、教えてください。", after: "なるべく違うご質問でご質問いただけたらよろしいかと思います。" },
  { before: "サイバーイージスは。", after: "総務省さんがキャリアに言って、犯罪のIPだから止めろと。" },
  { before: "高木様以上よろしいでしょうか。はい。それでは皆様、えっと、私の仮説ですが、", after: "今から二周目に入りますが、えー、もしよろしければ同じ順番で。" },
  { before: "高木様以上よろしいでしょうか。はい。それでは皆様、えっと、私の仮説ですが、", after: "今から二周目に入りますが、えー、もしよろしければ同じ順番で。" },
  { before: "現在、上場企業12社を中心とした158社で構成されております。", after: "グループ会社、世でよく買収とかM&Aという言葉がありますが、私たちはそれは仲間づくりと呼んでおりまして、" },
  { before: "関わる社員さん。", after: "グループ会社、世でよく買収とかM&Aという言葉がありますが、私たちはそれは仲間づくりと呼んでおりまして、" },
  { before: "この、えー、結論はイエスです。", after: "で、そこの、えー、全部を返信するのは難しいですが、これぞというものには私が直接返信をしたりする仕組みもございます。" },
  { before: "グループの総務部が全力でそれを改善するためにビルと交渉したり。", after: "グループの仲間たちの声を集める仕組みとして現実に機能を果たしております。" },
  { before: "それで、この情報漏洩の毎日、どこかのお会社が毎日情報漏洩です。", after: "締めで今回私の反省と結論を申し上げたいと思います。" },
  { before: "皆様、犯罪者の攻撃は、以前は、", after: "戦争に例えると、以前はピンポイント爆撃でした。" },
  { before: "ただ、それは三大AIの競合みたいになってしまうといけないので、そうならない枠組みでできたらいいなと。", after: "悪いことしてるのを察知して、それをサイバーイージスで止めるっていうのは、" },
  { before: "それがスピードが。", after: "特にこの半年間、激しいスピードで変わっています。" },
  { before: "日進月歩ならぬ。", after: "秒針奮励という、そういうようなイメージ感でおります。" },
  { before: "計算リソースがあれば無限大に増やすことができるんです。", after: "いつも皆様のAIも皆様の指示待ってるはずです。" },
  { before: "一万二千亜種コピーされて、1万2000件も世界中に拡散し、", after: "それどころか、これを見本に同じようなツールが複数開発され、" },
  { before: "今は機関銃です。", after: "テロに例えるなら、今は無差別殺人ですよ。" },
  { before: "きれいにしてから死んでいきたいと思います。", after: "以上です。" },
  { before: "この業界から撤退し。", after: "僕は命かけてこの産業を多くの方の笑顔のツールにしてから死ぬつもりです。" },
  { before: "この業界から撤退し。", after: "僕は命かけてこの産業を多くの方の笑顔のツールにしてから死ぬつもりです。" },
  { before: "ければ、犯罪者の汚染でインターネットが使えなくなってしまいます。", after: "人や企業や、そして国家がこのスピードに合わせられるように変化を促していただきたいと願っております。" },
  { before: "なんと1日990分しかありません。", after: "ということです。田子さんの回答になりましたでしょうか。" },
  { before: "人に寿命がある以上、時間は命です。1日は1440分ですけれど、24時間は。", after: "命の砂時計を何に捧げているのかというのが人生であり、私はインターネットとこのグループに捧げてます。" },
  { before: "皆様の生活を、企業を、社会を脅かしているんです。", after: "助長するようなことはしません。永久に支払わないと申し上げたのはそういうことです。" },
  { before: "目的ではなく結果としての利益で株主様も笑顔になると、31年間ずっと言い続けてきました。", after: "8300人にご確認ください。" },
  { before: "私どもは基準が儲かる、儲ける31年間一度も言ったことないです。", after: "まずは桑畑様の今のいくつかの質問のうちの一つ目です。" },
  { before: "私たちは誇りを持ち、", after: "8300人にご確認ください。" },
  { before: "人や企業や、そして国家がこのスピードに合わせられるように変化を促していただきたいと願っております。", after: "ただ、私が感じていることを31年間、" },
];

const grid = document.querySelector('#quoteGrid');
const empty = document.querySelector('#emptyState');
const search = document.querySelector('#searchInput');
const toast = document.querySelector('#toast');
let activeFilter = 'all';

function timeToSeconds(value) {
  const match = value?.match(/(\d+):(\d{2}):(\d{2})/);
  if (!match) return null;
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

function cardTemplate(item, index) {
  const detailId = `quote-detail-${index}`;
  const source = item.sourceUrl ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel} ↗</a>` : '';
  const life = item.life ? `<div class="detail-block"><span>人物・哲学からの補足</span><p>${item.life}</p>${source ? `<p class="detail-source">${source}</p>` : ''}</div>` : '';
  const context = contextByIndex[index];
  const contextHtml = context ? `<div class="detail-block context-block"><span>前後の発言（前後約30秒の目安）</span><div class="context-lines"><div class="context-line"><b>直前</b><p>${escapeAttr(context.before)}</p></div><div class="context-line"><b>直後</b><p>${escapeAttr(context.after)}</p></div></div></div>` : '';
  const clipPath = `assets/quotes/quote-${String(index + 1).padStart(2, '0')}.mp3`;
  const listen = `<button class="quote-audio-btn" data-play-clip="${clipPath}" type="button">▶ 聴く</button>`;
  return `<article class="quote-card ${item.hot ? 'standout' : ''}" data-index="${index}" tabindex="0" role="button" aria-expanded="false" aria-controls="${detailId}">
    <span class="rank">${String(index + 1).padStart(2, '0')}</span>
    <div class="quote-main"><div class="card-tag">${item.tag}</div><blockquote>「${item.text}」</blockquote></div>
    <div class="card-footer"><span class="source">${item.note}</span><span class="tap-hint">TAP DETAILS</span>${listen}<button class="copy-btn" data-copy="${escapeAttr(item.text)}" type="button">COPY ⧉</button></div>
    <audio class="quote-clip-audio" preload="auto" src="${clipPath}" data-clip-path="${clipPath}" aria-hidden="true"></audio>
    <div class="quote-detail" id="${detailId}" hidden>
      <div class="detail-block"><span>会見での背景 ${item.time ? `／ ${item.time}` : ''}</span><p>${item.scene}</p></div>
      <div class="detail-block"><span>この一言の見どころ</span><p>${item.meaning}</p></div>
      <div class="detail-block audio-proof"><span>音声照合</span><p>話者：熊谷 ／ ${item.time || '時刻確認済み'}<br />この語録専用の音声を再生できます。</p></div>
      ${contextHtml}
      ${life}
    </div>
  </article>`;
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function render() {
  const needle = search.value.trim().toLowerCase();
  const filtered = quotes.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.cat === activeFilter;
    const searchable = `${item.text} ${item.tag} ${item.note} ${item.scene} ${item.meaning} ${item.life || ''}`.toLowerCase();
    const matchesSearch = !needle || searchable.includes(needle);
    return matchesFilter && matchesSearch;
  });
  grid.innerHTML = filtered.map((item) => cardTemplate(item, quotes.indexOf(item))).join('');
  grid.querySelectorAll('.quote-clip-audio').forEach((player) => {
    ['loadedmetadata', 'timeupdate', 'play', 'pause', 'ended'].forEach((eventName) => player.addEventListener(eventName, syncAudioUI));
  });
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

const conferenceAudio = document.querySelector('#conferenceAudio');
const audioToggle = document.querySelector('#audioToggle');
const audioProgress = document.querySelector('#audioProgress');
const audioStatus = document.querySelector('#audioStatus');
const audioCurrent = document.querySelector('#audioCurrent');
const audioDuration = document.querySelector('#audioDuration');
let activePlayer = conferenceAudio;

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds)) return '--:--';
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
  const secs = (total % 60).toString().padStart(2, '0');
  return hours ? `${hours}:${minutes}:${secs}` : `${minutes}:${secs}`;
}

function syncAudioUI() {
  const player = activePlayer || conferenceAudio;
  if (!player) return;
  const playing = !player.paused && !player.ended;
  audioToggle?.setAttribute('aria-pressed', String(playing));
  if (audioToggle) audioToggle.querySelector('.audio-play').textContent = playing ? 'Ⅱ' : '▶';
  if (audioStatus) audioStatus.textContent = playing ? (player !== conferenceAudio ? '語録音声を再生中' : '再生中') : (player.ended ? '再生完了' : '停止中');
  if (audioCurrent) audioCurrent.textContent = formatAudioTime(player.currentTime);
  if (audioDuration) audioDuration.textContent = formatAudioTime(player.duration);
  if (audioProgress && Number.isFinite(player.duration) && player.duration > 0) audioProgress.value = String((player.currentTime / player.duration) * 100);
}

async function playAudioAt(seconds = null) {
  if (!conferenceAudio) return;
  document.querySelectorAll('.quote-clip-audio').forEach((player) => player.pause());
  activePlayer = conferenceAudio;
  const target = Number.isFinite(seconds) ? seconds : null;
  if (target !== null) conferenceAudio.currentTime = Math.min(target, conferenceAudio.duration || target);
  try { await conferenceAudio.play(); }
  catch { showToast('音声を再生できませんでした'); }
  if (target !== null && Number.isFinite(conferenceAudio.duration)) conferenceAudio.currentTime = Math.min(target, conferenceAudio.duration);
  syncAudioUI();
}

async function playQuoteClip(path) {
  const clip = [...document.querySelectorAll('.quote-clip-audio')].find((player) => player.dataset.clipPath === path);
  if (!clip) return;
  conferenceAudio?.pause();
  document.querySelectorAll('.quote-clip-audio').forEach((player) => { if (player !== clip) player.pause(); });
  clip.currentTime = 0;
  activePlayer = clip;
  try { await clip.play(); }
  catch { showToast('音声を再生できませんでした'); }
  syncAudioUI();
}

audioToggle?.addEventListener('click', () => {
  if (activePlayer !== conferenceAudio) {
    activePlayer?.pause();
    activePlayer = conferenceAudio;
  }
  if (conferenceAudio?.paused) playAudioAt();
  else conferenceAudio?.pause();
  syncAudioUI();
});
audioProgress?.addEventListener('input', () => {
  const player = activePlayer || conferenceAudio;
  if (player && Number.isFinite(player.duration)) player.currentTime = player.duration * (Number(audioProgress.value) / 100);
  syncAudioUI();
});
conferenceAudio?.addEventListener('loadedmetadata', syncAudioUI);
conferenceAudio?.addEventListener('timeupdate', syncAudioUI);
conferenceAudio?.addEventListener('play', syncAudioUI);
conferenceAudio?.addEventListener('pause', syncAudioUI);
conferenceAudio?.addEventListener('ended', syncAudioUI);

function toggleCard(card, force) {
  const detail = card.querySelector('.quote-detail');
  const open = force ?? detail.hidden;
  detail.hidden = !open;
  card.classList.toggle('is-open', open);
  card.setAttribute('aria-expanded', String(open));
  const hint = card.querySelector('.tap-hint');
  if (hint) hint.textContent = open ? 'CLOSE DETAILS' : 'TAP DETAILS';
}

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  activeFilter = 'all';
  document.querySelectorAll('.filter').forEach((button) => { button.classList.toggle('active', button.dataset.filter === 'all'); button.setAttribute('aria-selected', button.dataset.filter === 'all'); });
  search.value = '';
  render();
  document.querySelector(`#quoteGrid .quote-card[data-index="${index}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const card = document.querySelector(`#quoteGrid .quote-card[data-index="${index}"]`);
  if (card) { toggleCard(card, true); card.classList.add('random-picked'); setTimeout(() => card.classList.remove('random-picked'), 1200); }
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
document.addEventListener('click', (event) => {
  const copyButton = event.target.closest('[data-copy]');
  if (copyButton) { event.stopPropagation(); copyText(copyButton.dataset.copy, copyButton); return; }
  const audioButton = event.target.closest('[data-play-clip]');
  if (audioButton) { event.stopPropagation(); playQuoteClip(audioButton.dataset.playClip); return; }
  const card = event.target.closest('.quote-card');
  if (card && !event.target.closest('.quote-detail')) toggleCard(card);
});
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.quote-card')) { event.preventDefault(); toggleCard(event.target); }
});
render();
