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

const flowByIndex = [
  { steps: [{ speaker: "竹信氏", text: "設定不備が今回のインシデントの要因で、9月14日に発生、16日に暫定処置を行ったと説明。フォレンジック調査と恒久対策の予定も話していた。" }, { speaker: "熊谷氏", text: "技術的な説明の途中で、登壇者の開いたボタンに気づき、謝罪中の服装について突然指摘した。" }, { speaker: "竹信氏", text: "指摘を受けて謝罪し、そのまま発生経緯・調査結果・11月30日を目処とする恒久対策の説明に戻った。" }], note: "深刻な原因説明の途中に、会見現場の細部へ話が飛んだことで印象に残った場面です。" },
  { steps: [{ speaker: "記者", text: "2年前の脆弱性指摘について、具体的な内容と、コスト・人員・事業継続を優先した判断がなかったかを質問した。" }, { speaker: "熊谷氏", text: "先ほどの質問と重なるため山下氏に回答を振り、同じ説明を繰り返すと待っている人の時間を使うとして、別の質問を求めた。" }, { speaker: "記者／熊谷氏", text: "記者が『もっと具体的に』と重ね、熊谷氏が『具体的とは？』と返した後、当時の判断の説明へ続いた。" }], note: "質問の重複を避けたい進行上の意図と、記者側の『具体的な説明を』という要求がぶつかった流れです。" },
  { steps: [{ speaker: "熊谷氏", text: "匿名VPNが犯罪者の隠れみのになっている現状を説明し、対策は『サービス側を法制度で止める』か『サイバーイージスで日本を守る』かの二つだと整理した。" }, { speaker: "熊谷氏", text: "通信の秘密があることは認めつつ、犯罪に使われたIPを止める仕組みは政府が作れる、と話を進めた。" }, { speaker: "熊谷氏", text: "その具体策を短く言い切った後、バイナンスの1兆円被害を例に、社会の対応速度を上げる必要性へ話を広げた。" }], note: "『制度や手続きより、まず根元を止める』という問題意識が、短い断定になっています。" },
  { steps: [{ speaker: "熊谷氏", text: "サポート体制について、通常営業時はAIが一次受けし必要に応じて人が対応していたが、インシデント後は専門チームが人の手で24時間対応していると説明した。" }, { speaker: "記者", text: "人員も増強されたという理解でよいかと確認した。" }, { speaker: "熊谷氏", text: "増員して電話が取れない状態を極力なくし、お客様をないがしろにしないのが企業ポリシーだと答えた。その直後、質問者の指名順の説明に移った。" }], note: "顧客対応の説明から、突然『会場の指名順の理論』へ切り替わる境目に出た発言です。" },
  { steps: [{ speaker: "熊谷氏", text: "前の質問で、インシデント後は人による24時間対応にしていると説明し、追加の人員増強についても答えた。" }, { speaker: "熊谷氏", text: "早く来た記者は中央付近にいるのではないかという仮説を立て、前列から左右に一段ずつ指名したと、会見の進行方法を説明した。" }, { speaker: "熊谷氏", text: "二周目に入ろうとしたところ、まだ一周目の質問が残っていることに気づき、何度も『ご無礼しました』と訂正した。" }], note: "座席配置と来場時間から独自の公平ルールを作り、さらに自分で進行を取り違えるところまで含めて一連の場面です。" },
  { steps: [{ speaker: "熊谷氏", text: "グループの理念として、お客様の笑顔を基準にし、その結果として利益が生まれると説明した。" }, { speaker: "熊谷氏", text: "上場企業12社を中心とする158社のグループだと紹介し、『社員』という言い方には上下関係があるとして避ける方針を示した。" }, { speaker: "熊谷氏", text: "その流れで『社員さん』を禁止用語として扱うと述べ、呼び方そのものに理念を通す姿勢を見せた。" }], note: "会社概要の説明が、いつの間にか社内用語のルール説明へ変わっていく流れです。" },
  { steps: [{ speaker: "熊谷氏", text: "『社員』に上下関係を感じさせないため、グループでは別の呼び方をすると説明した。" }, { speaker: "熊谷氏", text: "さらに『子会社』も禁止用語とし、買収やM&Aではなく『仲間づくり』、社員ではなく『パートナー』と呼ぶと続けた。" }, { speaker: "熊谷氏", text: "8,300人のパートナーと、ネットインフラ・金融・セキュリティ事業を持つグループの説明へ戻った。" }], note: "一つ前の『社員さん』から、組織の上下関係を消すための言葉づかいが連続しています。" },
  { steps: [{ speaker: "記者", text: "社員が社長に直接意見を伝えられる仕組みがあるかを質問した。" }, { speaker: "熊谷氏", text: "『クマの耳』という制度で、約8,000人が直接連絡でき、重要なものには自分で返信すると説明した。" }, { speaker: "熊谷氏", text: "ただし各社のマネジメントを飛び越す制度ではなく、グループ共通の改善要望を集める仕組みだと位置づけた。" }], note: "大企業の内部通報・改善制度を、固い制度名ではなく『クマの耳』として紹介したことが印象を強めています。" },
  { steps: [{ speaker: "熊谷氏", text: "『クマの耳』には、経営上の大きな意見だけでなく、日常の不便も届くと説明した。" }, { speaker: "熊谷氏", text: "エレベーターの待ち時間が長いという声なら総務部がビルと交渉し、ランチのおかずがまずいという声なら業者と交渉すると具体例を挙げた。" }, { speaker: "熊谷氏", text: "小さな要望からサービス改善まで、グループの仲間の声を集める仕組みとして機能していると締めた。" }], note: "ガバナンスの説明を、エレベーターとランチという生活感のある例まで下げて説明したため、語録として立っています。" },
  { steps: [{ speaker: "熊谷氏", text: "AIを使った攻撃ツールAltexが複製され、悪用が広がっていること、侵入から発覚・公表まで長い時間がかかることを説明した。" }, { speaker: "熊谷氏", text: "上場企業でさえ毎日のように情報漏洩が起きていると述べ、今回の件だけではなく社会全体の変化を話すと前置きした。" }, { speaker: "熊谷氏", text: "その社会的混乱はまだ始まりにすぎないという危機感を示し、続いて今回の反省と結論に移った。" }], note: "個別の事件説明から、AIによって攻撃が変質した社会全体の話へ転調する場面です。" },
  { steps: [{ speaker: "熊谷氏", text: "今回の反省として、セキュリティ企業を名乗るだけでなく、攻撃を受けても事業を続けられるレジリエンス企業になる必要があると述べた。" }, { speaker: "熊谷氏", text: "犯罪者の攻撃は以前より速く、大量になったと説明し、武器や戦争の比喩を使って変化を伝えた。" }, { speaker: "熊谷氏", text: "その最初の比喩として、以前と現在の攻撃速度を拳銃と機関銃に置き換えた。" }], note: "自社の反省から、攻撃側の変化を伝えるための比喩へ移る最初の一撃です。" },
  { steps: [{ speaker: "記者", text: "日本独自のAIや、先端AIのルールづくりについて質問した。" }, { speaker: "熊谷氏", text: "フロンティアAIの開発競争には世界レベルのルールが必要だと答え、日本を守るソブリンAIの考え方にも触れた。" }, { speaker: "熊谷氏", text: "攻撃者がAIを使うなら防御側もAIを使うべきで、察知から各所への連絡まで自動化するのがサイバーイージスだと説明した。" }], note: "AI規制や国産AIの話が、防御AIの構想と『AIにはAIを』という短い対抗策に集約されています。" },
  { steps: [{ speaker: "熊谷氏", text: "AIについて、業界の流行が変わるのを見てきたが、今回は年明けから全グループでAIに向き合うよう指示したと振り返った。" }, { speaker: "熊谷氏", text: "AIの進化速度が二次曲線のように上がり、体感としては曲線ではなく垂直だと説明した。" }, { speaker: "熊谷氏", text: "その速度感を一言で言い換え、続けて『AIがAIを開発している』ことを理由として挙げた。" }], note: "AIの進化をグラフの話から体感的な言葉へ変換したため、見出しのように残る発言です。" },
  { steps: [{ speaker: "熊谷氏", text: "AIがAIを開発する時代になり、人間だけがコードを書く段階から、人間とAIが協働する段階へ、さらにAIを人が監督する段階へ移ったと説明した。" }, { speaker: "熊谷氏", text: "人間は睡眠や食事が必要だが、AIは電気があれば動き続けると、速度差を具体化した。" }, { speaker: "熊谷氏", text: "その急速な変化を、従来の『日進月歩』では足りない言葉に置き換えた。" }], note: "四字熟語を作り替えることで、日単位ではなく秒単位で進むという感覚を伝えています。" },
  { steps: [{ speaker: "熊谷氏", text: "AIは24時間動き、コピーもでき、計算リソースがあれば無限に増やせると説明した。" }, { speaker: "熊谷氏", text: "一方、人間は食事や睡眠が必要で、AIエージェントは人が寝ている間も動くと続けた。" }, { speaker: "熊谷氏", text: "その結果、人間の処理速度そのものが社会のボトルネックになるという逆転した見方を示した。" }], note: "AIの性能自慢ではなく、人間・企業・社会が速度に合わせられるかという問題に着地する流れです。" },
  { steps: [{ speaker: "熊谷氏", text: "Altexはもともと脆弱性診断のための平和利用ツールだったが、オープン型AIとクローズ型AIを組み合わせて攻撃に使えると説明した。" }, { speaker: "熊谷氏", text: "一つのAIが拒否しても次のAIに切り替え、ガードレールを避けながら弱点を探す仕組みだと話した。" }, { speaker: "熊谷氏", text: "GitHubから削除されても既に約1万2,000の亜種がコピーされ、専門知識が少なくても攻撃に使える状態だと危機感を示した。" }], note: "ツールの説明から、コピーの速さと悪用の民主化へ話が進み、危険性を年齢のイメージまで下げて伝えた場面です。" },
  { steps: [{ speaker: "熊谷氏", text: "犯罪者の攻撃が以前より速く大量になったことを、拳銃と機関銃の比喩で説明した。" }, { speaker: "熊谷氏", text: "同じ変化を戦争に置き換え、狙いを定めた攻撃から広範囲への攻撃になったと続けた。" }, { speaker: "熊谷氏", text: "その比喩の二つ目として、ピンポイント爆撃と絨毯爆撃を並べた。" }], note: "一つ前の『機関銃』を、戦争のスケールに拡張した連続発言です。" },
  { steps: [{ speaker: "熊谷氏", text: "攻撃をテロに例えるなら無差別殺人だとし、人・企業・政府が同じスピードに対応できなければインターネットが使えなくなると警告した。" }, { speaker: "熊谷氏", text: "記者のペンを武器として、この事実を報じてほしいと呼びかけ、自分の会社の失敗を言い訳にするつもりはないと線引きした。" }, { speaker: "熊谷氏", text: "31年間、人生の半分をインターネットに捧げてきたという話から、人々・日本・世界の宝物として残したいという言葉へ進んだ。" }], note: "短い語録だけを切り取ると突然に見えますが、直前には攻撃への危機感と31年間の関与が積み重なっています。" },
  { steps: [{ speaker: "熊谷氏", text: "人々・日本・世界の宝物としてインターネットを残したいという思いを述べた。" }, { speaker: "熊谷氏", text: "犯罪者のツールになっている状態のままでは、この業界から撤退できないと続けた。" }, { speaker: "熊谷氏", text: "最後まで自分が責任を持ち、多くの人の笑顔のための産業にしてから人生を終えたいという決意で締めた。" }], note: "『笑顔のツールにしてから死ぬ』は、宝物としてきれいにしたいという直前の使命感を受けた結論です。" },
  { steps: [{ speaker: "熊谷氏", text: "インターネットを世界の宝物としてきれいにしたいと語った。" }, { speaker: "熊谷氏", text: "犯罪者のツールになっている状態のまま、この業界から『あとは任せたよ』と撤退することはできないと述べた。" }, { speaker: "熊谷氏", text: "自分が命をかけて、インターネット産業を多くの人の笑顔の道具にしてから死ぬつもりだと続けた。" }], note: "撤退を否定する発言は、単独の決意表明ではなく、31年間の関与と社会への危機感の結論です。" },
  { steps: [{ speaker: "熊谷氏", text: "犯罪者の攻撃は機関銃、絨毯爆撃、無差別殺人のように変わったと説明し、社会の対応速度を上げる必要を訴えた。" }, { speaker: "熊谷氏", text: "記者のペンを武器と呼び、この事実を書いて、人・企業・国家の変化を促してほしいと呼びかけた。" }, { speaker: "熊谷氏", text: "その後、自分の失敗を言い訳にしないと明言し、31年間インターネットに人生を捧げてきた話へ続いた。" }], note: "記者会見の相手である報道陣に、社会を動かす役割を直接託した場面です。" },
  { steps: [{ speaker: "記者", text: "お詫びと状況説明の会見で、なぜAIの発展と自身の経営理念に多くの時間を割いたのかを質問した。" }, { speaker: "熊谷氏", text: "会社は理念で成り立ち、自分は創業者であり、自分の人生とGMOインターネットグループは切り離せないと答えた。" }, { speaker: "熊谷氏", text: "1日は1,440分、睡眠を除けば約990分。その限られた時間を何に捧げるかが人生だと説明した。" }], note: "時間管理の話ではなく、なぜ第2部を語るのかという質問への答えとして出ています。" },
  { steps: [{ speaker: "熊谷氏", text: "1日は1,440分だが、睡眠時間を除けば使える時間は約990分だと計算した。" }, { speaker: "熊谷氏", text: "その数字を一日のカウントダウン、命の砂時計として捉え、時間を何に捧げるかが人生だと説明した。" }, { speaker: "熊谷氏", text: "自分はインターネットとグループに捧げていると答え、記者がさらに具体的な説明を求めると、攻撃が100倍になった現実を補足した。" }], note: "数字の説明から、時間を命として見る熊谷氏の人生観へ移るため、語録として独立して残っています。" },
  { steps: [{ speaker: "熊谷氏", text: "人間には寿命があり、1日は1,440分だと置いた。" }, { speaker: "熊谷氏", text: "睡眠時間を除くと約990分。その一日をカウントダウンする砂時計として捉えた。" }, { speaker: "熊谷氏", text: "その時間を何に捧げるかが人生であり、自分はインターネットとGMOに捧げていると結論づけた。" }], note: "記者から第2部の意図を問われた回答の中で、具体的な数字が人生観に変わっていく流れです。" },
  { steps: [{ speaker: "熊谷氏", text: "AIは24時間動き、コピーもでき、人間より速く増殖できる一方、最初にその速度へ合わせたのは犯罪者だと説明した。" }, { speaker: "熊谷氏", text: "犯罪者が生活・企業・社会を脅かしている以上、身代金を払えば攻撃を助長することになると話を進めた。" }, { speaker: "熊谷氏", text: "その経営方針を、犯罪者には一歩たりともお金を払わないという一文にまとめた。" }], note: "AIと犯罪者の速度の話が、身代金を支払わないという具体的な判断につながっています。" },
  { steps: [{ speaker: "熊谷氏", text: "GMOismでは、すべての目標はお客様の笑顔だと説明した。" }, { speaker: "熊谷氏", text: "お客様が喜ぶサービスを作り、その笑顔の循環の結果として株主も笑顔になるという順序を示した。" }, { speaker: "熊谷氏", text: "その考えを31年間続けてきたとして、利益を先に置く言い方をしてこなかったと強調した。" }], note: "後に続く『社員さん』『子会社』の言葉のルールも、この顧客中心の理念紹介から始まっています。" },
  { steps: [{ speaker: "記者", text: "2年前の脆弱性指摘後、サービス継続と利用者の資産・個人情報保護の間で何を判断したのか、さらに補償範囲を質問した。" }, { speaker: "熊谷氏", text: "会社の基準は儲かるかではなくお客様の笑顔で、その時点でもその基準で判断したと説明した。" }, { speaker: "熊谷氏", text: "ただし現在のお客様は笑顔ではないと認め、当時のリスク分析を検証するとした。直接損害は全額補償し、二次被害は今後検討すると答えた。" }], note: "理念を掲げるだけでなく、今回の結果がお客様の笑顔になっていないことも同時に認めた回答です。" },
  { steps: [{ speaker: "熊谷氏", text: "お客様の笑顔を目標にし、その笑顔の循環の結果として利益が生まれるというGMOismを説明した。" }, { speaker: "熊谷氏", text: "利益を目的にするのではなく、顧客への価値提供を先に置くという順序を31年間の方針として語った。" }, { speaker: "熊谷氏", text: "その理念をグループのパートナー8,300人に確認してほしいと続け、会社概要の説明へ移った。" }], note: "この一言だけでは利益否定に見えますが、実際には『顧客の笑顔→価値提供→結果として利益』という順序の説明です。" },
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
  const flow = flowByIndex[index];
  const flowHtml = flow ? `<div class="detail-block flow-block"><span>会見の流れ（全発言を確認した要約）</span><ol class="flow-list">${flow.steps.map((step) => `<li><b>${escapeAttr(step.speaker)}</b><p>${escapeAttr(step.text)}</p></li>`).join('')}</ol><p class="flow-note">${escapeAttr(flow.note)}</p></div>` : '';
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
      ${flowHtml}
      ${life}
    </div>
  </article>`;
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function render() {
  if (!grid || !search || !empty) return;
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

document.querySelector('#filters')?.addEventListener('click', (event) => {
  const button = event.target.closest('.filter');
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach((item) => { item.classList.toggle('active', item === button); item.setAttribute('aria-selected', item === button); });
  render();
});
search?.addEventListener('input', render);
document.querySelector('#clearSearch')?.addEventListener('click', () => { search.value = ''; activeFilter = 'all'; document.querySelector('[data-filter="all"]')?.click(); });
document.querySelector('#randomTop')?.addEventListener('click', randomQuote);
document.querySelector('#randomHero')?.addEventListener('click', randomQuote);
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

const transcriptBlocks = window.transcriptBlocks || [];
const transcriptList = document.querySelector('#transcriptList');
const transcriptMeta = document.querySelector('#transcriptMeta');
const transcriptSearch = document.querySelector('#transcriptSearch');
let activeTranscriptFilter = 'all';

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function transcriptTemplate(item, index) {
  const searchable = `${item.speaker} ${item.text}`.toLowerCase();
  return `<article class="transcript-line ${item.kind}" data-transcript-index="${index}" data-searchable="${escapeHtml(searchable)}">
    <div class="transcript-meta"><strong>${escapeHtml(item.speaker)}</strong><time>${escapeHtml(item.time)}</time></div>
    <p>${escapeHtml(item.text)}</p>
  </article>`;
}

function renderTranscript() {
  if (!transcriptList) return;
  const query = (transcriptSearch?.value || '').trim().toLowerCase();
  const filtered = transcriptBlocks.filter((item) => {
    const matchesFilter = activeTranscriptFilter === 'all' || item.kind === activeTranscriptFilter;
    const matchesSearch = !query || `${item.speaker} ${item.text}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
  transcriptList.innerHTML = filtered.map((item) => transcriptTemplate(item, transcriptBlocks.indexOf(item))).join('');
  if (transcriptMeta) {
    transcriptMeta.textContent = query || activeTranscriptFilter !== 'all'
      ? `${filtered.length}件を表示 ／ 全${transcriptBlocks.length}件`
      : `全${transcriptBlocks.length}件 ／ 2026.11.02 · 00:00:00–03:25:04`;
  }
}

document.querySelector('#transcriptFilters')?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-transcript-filter]');
  if (!button) return;
  activeTranscriptFilter = button.dataset.transcriptFilter;
  document.querySelectorAll('#transcriptFilters [data-transcript-filter]').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  renderTranscript();
});
transcriptSearch?.addEventListener('input', renderTranscript);
render();
renderTranscript();
