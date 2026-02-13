const GOOGLE_CLIENT_ID = '441531089329-2lvgctldh97sbd9b3bec144bg2dqvaqj.apps.googleusercontent.com';

/* ===== i18n ===== */
const i18n = {
  en: {
    nav: { features: 'Features', howItWorks: 'How It Works', faq: 'FAQ', contact: 'Contact', signIn: 'Sign In', signOut: 'Sign Out', language: 'Language' },
    hero: { badge: 'Powered by vivo-AI', title: 'Edit with Words.<br><span class="gradient-text">Output in 4K.</span>', sub: 'BluePixel is an open-source AI project by vivo Image Group — providing a fully open-sourced agent to handle all your image and video editing needs. One agent, every edit, infinite possibilities.', watchDemo: 'Watch Demo' },
    features: { badge: 'Core Technology', title: 'Why BluePixel is <span class="gradient-text">different</span>', items: [
      { title: '4K Native Output', desc: 'Process and output at full 4K resolution. No downscaling, no quality loss — every pixel rendered at maximum fidelity.' },
      { title: 'Pixel Preservation', desc: "Areas you don't edit stay byte-identical. Zero degradation to untouched regions, guaranteed by our patented diffusion masking." },
      { title: 'Human-like Interactions', desc: "The agent provides personalized recommendations for each input image, delivering better editing effects. Describe your edit in plain text — no complex tools needed." },
      { title: 'API & Integrations', desc: 'REST API, OpenClaw skill integration. Fits right into your existing creative agent ecosystem and workflow.' },
    ]},
    how: { badge: 'Simple Workflow', title: 'How It <span class="gradient-text">Works</span>', items: [
      { title: 'Upload', desc: 'Drag and drop your image or video. We support all major formats up to 8K resolution.' },
      { title: 'Describe', desc: 'Type what you want to change in natural language. Be as specific or vague as you like.' },
      { title: 'Download', desc: 'Get your edited file in seconds. Full resolution, no watermarks, ready to publish.' },
    ]},
    gallery: { badge: 'Real Results', title: '<span class="gradient-text">Gallery</span>', viewMore: 'View More', items: [
      { title: 'Virtual Clothing Try-On', prompt: 'This girl is wearing a hat' },
      { title: 'Text Removal', prompt: 'Remove all text from the image while keeping the background intact' },
      { title: 'Background Change', prompt: 'Replace the background with a view of the Statue of Liberty' },
      { title: 'Image Restoration', prompt: 'Recolor and restore this image, remove scratches and damage' },
      { title: 'Object Editing', prompt: 'Remove the person in the background' },
      { title: 'Style Transfer', prompt: 'Transform this photo into a watercolor painting' },
    ]},
    testimonials: { badge: 'Testimonials', title: 'Loved by <span class="gradient-text">creators</span>' },
    faq: { badge: 'FAQ', title: 'Frequently Asked Questions' },
    signup: { title: 'Start editing with AI <span class="gradient-text">today</span>', desc: 'Join the open-source community. BluePixel by vivo Image Group — your AI agent for all image and video editing.', google: 'Continue with Google', welcome: "Welcome, {name}! You're all set." },
    footer: { desc: 'An open-source AI project by vivo Image Group. Edit with words, output in 4K.', product: 'Product', company: 'Company', legal: 'Legal', apiDocs: 'API Docs', about: 'About', blog: 'Blog', careers: 'Careers', privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Policy' },
  },
  zh: {
    nav: { features: '功能', howItWorks: '工作原理', faq: '常见问题', contact: '联系我们', signIn: '登录', signOut: '退出登录', language: '语言' },
    hero: { badge: '由 vivo-AI 驱动', title: '用语言编辑。<br><span class="gradient-text">4K 输出。</span>', sub: 'BluePixel 是 vivo 影像团队的开源 AI 项目——提供全面开源的智能体，满足您所有图像和视频编辑需求。一个智能体，所有编辑，无限可能。', watchDemo: '观看演示' },
    features: { badge: '核心技术', title: 'BluePixel 为何 <span class="gradient-text">与众不同</span>', items: [
      { title: '4K 原生输出', desc: '以完整 4K 分辨率处理和输出。无缩放、无质量损失——每个像素都以最高保真度渲染。' },
      { title: '像素保留', desc: '未编辑区域保持字节级一致。通过专利扩散掩码技术，确保未触碰区域零退化。' },
      { title: '类人交互', desc: '智能体为每张输入图片提供个性化推荐，带来更好的编辑效果。用自然语言描述您的编辑——无需复杂工具。' },
      { title: 'API 与集成', desc: 'REST API，OpenClaw 技能集成。无缝融入您现有的创意智能体生态系统和工作流。' },
    ]},
    how: { badge: '简单工作流', title: '如何 <span class="gradient-text">运作</span>', items: [
      { title: '上传', desc: '拖放您的图像或视频。我们支持所有主流格式，最高可达 8K 分辨率。' },
      { title: '描述', desc: '用自然语言输入您想要的更改。可以精确描述，也可以模糊表达。' },
      { title: '下载', desc: '几秒内获取编辑后的文件。全分辨率，无水印，可直接发布。' },
    ]},
    gallery: { badge: '实际效果', title: '<span class="gradient-text">画廊</span>', viewMore: '查看更多', items: [
      { title: '虚拟换装', prompt: '这个女孩戴着一顶帽子' },
      { title: '文字移除', prompt: '移除图片中的所有文字，同时保持背景完整' },
      { title: '背景更换', prompt: '将背景替换为自由女神像的景色' },
      { title: '图像修复', prompt: '重新上色并修复此图像，移除划痕和损伤' },
      { title: '物体编辑', prompt: '移除背景中的人物' },
      { title: '风格迁移', prompt: '将这张照片转换为水彩画' },
    ]},
    testimonials: { badge: '用户评价', title: '深受 <span class="gradient-text">创作者</span> 喜爱' },
    faq: { badge: '常见问题', title: '常见问题解答' },
    signup: { title: '立即开始 AI 编辑 <span class="gradient-text">体验</span>', desc: '加入开源社区。BluePixel 由 vivo 影像团队打造——您的全能 AI 图像视频编辑智能体。', google: '使用 Google 继续', welcome: '欢迎，{name}！一切就绪。' },
    footer: { desc: 'vivo 影像团队的开源 AI 项目。用语言编辑，4K 输出。', product: '产品', company: '公司', legal: '法律', apiDocs: 'API 文档', about: '关于', blog: '博客', careers: '招聘', privacy: '隐私政策', terms: '服务条款', cookies: 'Cookie 政策' },
  },
  ja: {
    nav: { features: '機能', howItWorks: '仕組み', faq: 'FAQ', contact: 'お問い合わせ', signIn: 'ログイン', signOut: 'ログアウト', language: '言語' },
    hero: { badge: 'vivo-AI 搭載', title: '言葉で編集。<br><span class="gradient-text">4K 出力。</span>', sub: 'BluePixel は vivo Image Group によるオープンソース AI プロジェクトです。画像・動画編集のすべてを、完全オープンソースのエージェントで。', watchDemo: 'デモを見る' },
    features: { badge: 'コア技術', title: 'BluePixel が<span class="gradient-text">違う</span>理由', items: [
      { title: '4K ネイティブ出力', desc: '4K フル解像度で処理・出力。ダウンスケーリングなし、品質損失なし。' },
      { title: 'ピクセル保持', desc: '編集していない領域はバイト単位で同一。特許取得の拡散マスキングで保証。' },
      { title: '人間らしいインタラクション', desc: '各入力画像に対してパーソナライズされた提案を提供し、より良い編集効果を実現。自然言語で編集内容を記述——複雑なツールは不要。' },
      { title: 'API と統合', desc: 'REST API、OpenClaw スキル統合。既存のクリエイティブワークフローにシームレスに統合。' },
    ]},
    how: { badge: 'シンプルワークフロー', title: '使い方<span class="gradient-text">ガイド</span>', items: [
      { title: 'アップロード', desc: '画像や動画をドラッグ＆ドロップ。8K まで対応。' },
      { title: '説明する', desc: '自然言語で変更内容を入力。詳細でも曖昧でもOK。' },
      { title: 'ダウンロード', desc: '数秒で編集ファイルを取得。フル解像度、透かしなし。' },
    ]},
    gallery: { badge: '実績', title: '<span class="gradient-text">ギャラリー</span>', viewMore: 'もっと見る', items: [
      { title: 'バーチャル着せ替え', prompt: 'この女の子は帽子をかぶっています' },
      { title: 'テキスト除去', prompt: '背景を維持しながら画像からすべてのテキストを削除' },
      { title: '背景変更', prompt: '背景を自由の女神の景色に置き換える' },
      { title: '画像修復', prompt: 'この画像を再着色して修復し、傷やダメージを除去' },
      { title: 'オブジェクト編集', prompt: '背景の人物を削除' },
      { title: 'スタイル変換', prompt: 'この写真を水彩画に変換' },
    ]},
    testimonials: { badge: 'お客様の声', title: '<span class="gradient-text">クリエイター</span>に愛されて' },
    faq: { badge: 'FAQ', title: 'よくある質問' },
    signup: { title: 'AI 編集を<span class="gradient-text">今すぐ</span>始めよう', desc: 'オープンソースコミュニティに参加。vivo Image Group による BluePixel。', google: 'Google で続行', welcome: 'ようこそ、{name}さん！準備完了です。' },
    footer: { desc: 'vivo Image Group によるオープンソース AI プロジェクト。言葉で編集、4K 出力。', product: '製品', company: '企業', legal: '法務', apiDocs: 'API ドキュメント', about: '概要', blog: 'ブログ', careers: '採用', privacy: 'プライバシーポリシー', terms: '利用規約', cookies: 'Cookie ポリシー' },
  },
  ko: {
    nav: { features: '기능', howItWorks: '작동 방식', faq: 'FAQ', contact: '문의', signIn: '로그인', signOut: '로그아웃', language: '언어' },
    hero: { badge: 'vivo-AI 기반', title: '말로 편집하세요.<br><span class="gradient-text">4K 출력.</span>', sub: 'BluePixel은 vivo Image Group의 오픈소스 AI 프로젝트입니다. 완전 오픈소스 에이전트로 모든 이미지 및 비디오 편집을 처리합니다.', watchDemo: '데모 보기' },
    features: { badge: '핵심 기술', title: 'BluePixel이 <span class="gradient-text">다른</span> 이유', items: [
      { title: '4K 네이티브 출력', desc: '4K 풀 해상도로 처리 및 출력. 다운스케일링 없음, 품질 손실 없음.' },
      { title: '픽셀 보존', desc: '편집하지 않은 영역은 바이트 수준으로 동일. 특허 확산 마스킹으로 보장.' },
      { title: '인간과 같은 상호작용', desc: '에이전트가 각 입력 이미지에 맞춤형 추천을 제공하여 더 나은 편집 효과를 제공합니다. 자연어로 편집 내용을 설명하세요——복잡한 도구는 필요 없습니다.' },
      { title: 'API 및 통합', desc: 'REST API, OpenClaw 스킬 통합. 기존 크리에이티브 워크플로우에 원활하게 통합.' },
    ]},
    how: { badge: '간단한 워크플로우', title: '작동 <span class="gradient-text">방식</span>', items: [
      { title: '업로드', desc: '이미지나 비디오를 드래그 앤 드롭. 8K까지 지원.' },
      { title: '설명', desc: '자연어로 원하는 변경 사항을 입력하세요.' },
      { title: '다운로드', desc: '몇 초 만에 편집된 파일을 받으세요. 풀 해상도, 워터마크 없음.' },
    ]},
    gallery: { badge: '실제 결과', title: '<span class="gradient-text">갤러리</span>', viewMore: '더 보기', items: [
      { title: '가상 의류 피팅', prompt: '이 소녀가 모자를 쓰고 있습니다' },
      { title: '텍스트 제거', prompt: '배경을 유지하면서 이미지에서 모든 텍스트를 제거' },
      { title: '배경 변경', prompt: '배경을 자유의 여신상 전망으로 교체' },
      { title: '이미지 복원', prompt: '이 이미지를 재착색하고 복원하며, 긁힘과 손상을 제거' },
      { title: '객체 편집', prompt: '배경에 있는 사람을 제거' },
      { title: '스타일 전환', prompt: '이 사진을 수채화로 변환' },
    ]},
    testimonials: { badge: '후기', title: '<span class="gradient-text">크리에이터</span>들의 사랑' },
    faq: { badge: 'FAQ', title: '자주 묻는 질문' },
    signup: { title: 'AI 편집을 <span class="gradient-text">지금</span> 시작하세요', desc: '오픈소스 커뮤니티에 참여하세요. vivo Image Group의 BluePixel.', google: 'Google로 계속', welcome: '환영합니다, {name}님! 준비 완료.' },
    footer: { desc: 'vivo Image Group의 오픈소스 AI 프로젝트. 말로 편집, 4K 출력.', product: '제품', company: '회사', legal: '법적 사항', apiDocs: 'API 문서', about: '소개', blog: '블로그', careers: '채용', privacy: '개인정보 처리방침', terms: '이용약관', cookies: '쿠키 정책' },
  },
  es: {
    nav: { features: 'Características', howItWorks: 'Cómo Funciona', faq: 'FAQ', contact: 'Contacto', signIn: 'Iniciar Sesión', signOut: 'Cerrar Sesión', language: 'Idioma' },
    hero: { badge: 'Impulsado por vivo-AI', title: 'Edita con Palabras.<br><span class="gradient-text">Salida en 4K.</span>', sub: 'BluePixel es un proyecto de IA de código abierto de vivo Image Group — un agente completamente abierto para todas tus necesidades de edición de imagen y video.', watchDemo: 'Ver Demo' },
    features: { badge: 'Tecnología Central', title: 'Por qué BluePixel es <span class="gradient-text">diferente</span>', items: [
      { title: 'Salida Nativa 4K', desc: 'Procesa y genera en resolución 4K completa. Sin reducción de escala, sin pérdida de calidad.' },
      { title: 'Preservación de Píxeles', desc: 'Las áreas no editadas permanecen idénticas byte a byte. Garantizado por nuestro enmascaramiento de difusión patentado.' },
      { title: 'Interacciones Humanizadas', desc: 'El agente proporciona recomendaciones personalizadas para cada imagen, logrando mejores efectos de edición. Describe tu edición en texto plano — sin herramientas complejas.' },
      { title: 'API e Integraciones', desc: 'API REST, integración con OpenClaw. Se integra perfectamente en tu ecosistema creativo.' },
    ]},
    how: { badge: 'Flujo Simple', title: 'Cómo <span class="gradient-text">Funciona</span>', items: [
      { title: 'Subir', desc: 'Arrastra y suelta tu imagen o video. Soportamos todos los formatos principales hasta 8K.' },
      { title: 'Describir', desc: 'Escribe lo que quieres cambiar en lenguaje natural.' },
      { title: 'Descargar', desc: 'Obtén tu archivo editado en segundos. Resolución completa, sin marcas de agua.' },
    ]},
    gallery: { badge: 'Resultados Reales', title: '<span class="gradient-text">Galería</span>', viewMore: 'Ver Más', items: [
      { title: 'Probador Virtual de Ropa', prompt: 'Esta chica lleva un sombrero' },
      { title: 'Eliminación de Texto', prompt: 'Eliminar todo el texto de la imagen manteniendo el fondo intacto' },
      { title: 'Cambio de Fondo', prompt: 'Reemplazar el fondo con una vista de la Estatua de la Libertad' },
      { title: 'Restauración de Imagen', prompt: 'Recolorear y restaurar esta imagen, eliminar rasguños y daños' },
      { title: 'Edición de Objetos', prompt: 'Eliminar la persona del fondo' },
      { title: 'Transferencia de Estilo', prompt: 'Transformar esta foto en una pintura de acuarela' },
    ]},
    testimonials: { badge: 'Testimonios', title: 'Amado por <span class="gradient-text">creadores</span>' },
    faq: { badge: 'FAQ', title: 'Preguntas Frecuentes' },
    signup: { title: 'Empieza a editar con IA <span class="gradient-text">hoy</span>', desc: 'Únete a la comunidad de código abierto. BluePixel de vivo Image Group.', google: 'Continuar con Google', welcome: '¡Bienvenido, {name}! Todo listo.' },
    footer: { desc: 'Un proyecto de IA de código abierto de vivo Image Group. Edita con palabras, salida en 4K.', product: 'Producto', company: 'Empresa', legal: 'Legal', apiDocs: 'Docs API', about: 'Acerca de', blog: 'Blog', careers: 'Empleo', privacy: 'Política de Privacidad', terms: 'Términos de Servicio', cookies: 'Política de Cookies' },
  },
  fr: {
    nav: { features: 'Fonctionnalités', howItWorks: 'Comment ça marche', faq: 'FAQ', contact: 'Contact', signIn: 'Connexion', signOut: 'Déconnexion', language: 'Langue' },
    hero: { badge: 'Propulsé par vivo-AI', title: 'Éditez avec des mots.<br><span class="gradient-text">Sortie en 4K.</span>', sub: "BluePixel est un projet IA open-source de vivo Image Group — un agent entièrement open-source pour tous vos besoins d'édition d'images et de vidéos.", watchDemo: 'Voir la démo' },
    features: { badge: 'Technologie de base', title: 'Pourquoi BluePixel est <span class="gradient-text">différent</span>', items: [
      { title: 'Sortie native 4K', desc: 'Traitement et sortie en résolution 4K complète. Pas de réduction, pas de perte de qualité.' },
      { title: 'Préservation des pixels', desc: 'Les zones non éditées restent identiques octet par octet. Garanti par notre masquage de diffusion breveté.' },
      { title: 'Interactions Humaines', desc: "L'agent fournit des recommandations personnalisées pour chaque image, offrant de meilleurs effets d'édition. Décrivez votre modification en texte simple — pas d'outils complexes." },
      { title: 'API et Intégrations', desc: "API REST, intégration OpenClaw. S'intègre parfaitement dans votre écosystème créatif." },
    ]},
    how: { badge: 'Flux simple', title: 'Comment ça <span class="gradient-text">fonctionne</span>', items: [
      { title: 'Télécharger', desc: "Glissez-déposez votre image ou vidéo. Nous supportons tous les formats majeurs jusqu'à 8K." },
      { title: 'Décrire', desc: 'Tapez ce que vous voulez changer en langage naturel.' },
      { title: 'Télécharger', desc: 'Obtenez votre fichier édité en secondes. Pleine résolution, sans filigrane.' },
    ]},
    gallery: { badge: 'Résultats réels', title: '<span class="gradient-text">Galerie</span>', viewMore: 'Voir plus', items: [
      { title: 'Essayage virtuel', prompt: 'Cette fille porte un chapeau' },
      { title: 'Suppression de texte', prompt: "Supprimer tout le texte de l'image en gardant l'arrière-plan intact" },
      { title: "Changement d'arrière-plan", prompt: "Remplacer l'arrière-plan par une vue de la Statue de la Liberté" },
      { title: "Restauration d'image", prompt: 'Recolorer et restaurer cette image, supprimer les rayures et dommages' },
      { title: "Édition d'objets", prompt: "Supprimer la personne à l'arrière-plan" },
      { title: 'Transfert de style', prompt: "Transformer cette photo en peinture à l'aquarelle" },
    ]},
    testimonials: { badge: 'Témoignages', title: 'Aimé par les <span class="gradient-text">créateurs</span>' },
    faq: { badge: 'FAQ', title: 'Questions fréquentes' },
    signup: { title: "Commencez l'édition IA <span class=\"gradient-text\">aujourd'hui</span>", desc: 'Rejoignez la communauté open-source. BluePixel par vivo Image Group.', google: 'Continuer avec Google', welcome: 'Bienvenue, {name} ! Tout est prêt.' },
    footer: { desc: "Un projet IA open-source de vivo Image Group. Éditez avec des mots, sortie en 4K.", product: 'Produit', company: 'Entreprise', legal: 'Légal', apiDocs: 'Docs API', about: 'À propos', blog: 'Blog', careers: 'Carrières', privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation", cookies: 'Politique de cookies' },
  },
  de: {
    nav: { features: 'Funktionen', howItWorks: 'So funktioniert es', faq: 'FAQ', contact: 'Kontakt', signIn: 'Anmelden', signOut: 'Abmelden', language: 'Sprache' },
    hero: { badge: 'Powered by vivo-AI', title: 'Mit Worten bearbeiten.<br><span class="gradient-text">Ausgabe in 4K.</span>', sub: 'BluePixel ist ein Open-Source-KI-Projekt der vivo Image Group — ein vollständig quelloffener Agent für alle Ihre Bild- und Videobearbeitungsbedürfnisse.', watchDemo: 'Demo ansehen' },
    features: { badge: 'Kerntechnologie', title: 'Warum BluePixel <span class="gradient-text">anders</span> ist', items: [
      { title: 'Native 4K-Ausgabe', desc: 'Verarbeitung und Ausgabe in voller 4K-Auflösung. Kein Herunterskalieren, kein Qualitätsverlust.' },
      { title: 'Pixelerhaltung', desc: 'Nicht bearbeitete Bereiche bleiben byteidentisch. Garantiert durch unsere patentierte Diffusionsmaskierung.' },
      { title: 'Menschliche Interaktionen', desc: 'Der Agent liefert personalisierte Empfehlungen für jedes Eingabebild und erzielt bessere Bearbeitungseffekte. Beschreiben Sie Ihre Bearbeitung in einfachem Text — keine komplexen Werkzeuge nötig.' },
      { title: 'API & Integrationen', desc: 'REST-API, OpenClaw-Skill-Integration. Fügt sich nahtlos in Ihr kreatives Ökosystem ein.' },
    ]},
    how: { badge: 'Einfacher Workflow', title: 'So <span class="gradient-text">funktioniert</span> es', items: [
      { title: 'Hochladen', desc: 'Ziehen Sie Ihr Bild oder Video per Drag & Drop. Wir unterstützen alle gängigen Formate bis 8K.' },
      { title: 'Beschreiben', desc: 'Geben Sie in natürlicher Sprache ein, was Sie ändern möchten.' },
      { title: 'Herunterladen', desc: 'Erhalten Sie Ihre bearbeitete Datei in Sekunden. Volle Auflösung, ohne Wasserzeichen.' },
    ]},
    gallery: { badge: 'Echte Ergebnisse', title: '<span class="gradient-text">Galerie</span>', viewMore: 'Mehr anzeigen', items: [
      { title: 'Virtuelle Anprobe', prompt: 'Dieses Mädchen trägt einen Hut' },
      { title: 'Textentfernung', prompt: 'Allen Text aus dem Bild entfernen und den Hintergrund beibehalten' },
      { title: 'Hintergrundwechsel', prompt: 'Den Hintergrund durch eine Ansicht der Freiheitsstatue ersetzen' },
      { title: 'Bildrestaurierung', prompt: 'Dieses Bild neu einfärben und restaurieren, Kratzer und Schäden entfernen' },
      { title: 'Objektbearbeitung', prompt: 'Die Person im Hintergrund entfernen' },
      { title: 'Stilübertragung', prompt: 'Dieses Foto in ein Aquarellgemälde verwandeln' },
    ]},
    testimonials: { badge: 'Referenzen', title: 'Geliebt von <span class="gradient-text">Kreativen</span>' },
    faq: { badge: 'FAQ', title: 'Häufig gestellte Fragen' },
    signup: { title: 'Starten Sie die KI-Bearbeitung <span class="gradient-text">heute</span>', desc: 'Treten Sie der Open-Source-Community bei. BluePixel von vivo Image Group.', google: 'Weiter mit Google', welcome: 'Willkommen, {name}! Alles bereit.' },
    footer: { desc: 'Ein Open-Source-KI-Projekt der vivo Image Group. Mit Worten bearbeiten, Ausgabe in 4K.', product: 'Produkt', company: 'Unternehmen', legal: 'Rechtliches', apiDocs: 'API-Docs', about: 'Über uns', blog: 'Blog', careers: 'Karriere', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', cookies: 'Cookie-Richtlinie' },
  },
};

const { createApp, ref, reactive, onMounted, onUnmounted, computed } = Vue;

createApp({
  setup() {
    const scrolled = ref(false);
    const mobileMenu = ref(false);
    const typedText = ref('');
    const user = ref(null);
    const showUserMenu = ref(false);
    const showLangMenu = ref(false);
    const currentLang = ref(localStorage.getItem('bluepixel_lang') || 'en');

    const languages = [
      { code: 'en', label: 'English' },
      { code: 'zh', label: '中文' },
      { code: 'ja', label: '日本語' },
      { code: 'ko', label: '한국어' },
      { code: 'es', label: 'Español' },
      { code: 'fr', label: 'Français' },
      { code: 'de', label: 'Deutsch' },
    ];

    function t(key, params) {
      const lang = i18n[currentLang.value] || i18n.en;
      const keys = key.split('.');
      let val = lang;
      for (const k of keys) { val = val && val[k]; }
      if (val === undefined) {
        // fallback to English
        val = i18n.en;
        for (const k of keys) { val = val && val[k]; }
      }
      if (typeof val === 'string' && params) {
        Object.keys(params).forEach(p => { val = val.replace(`{${p}}`, params[p]); });
      }
      return val || key;
    }

    function setLang(code) {
      currentLang.value = code;
      localStorage.setItem('bluepixel_lang', code);
      showLangMenu.value = false;
    }

    const phrases = [
      'Remove the person in the background…',
      'Change the sky to a golden sunset…',
      'Make the car red and add motion blur…',
      'Upscale to 4K and enhance details…',
    ];

    const stats = [
      { value: '4K', label: 'Native Output' },
      { value: '50K+', label: 'Creators' },
      { value: '99.7%', label: 'Pixel Accuracy' },
      { value: '<2s', label: 'Avg. Processing' },
    ];

    const featuresData = [
      { icon: '🎯' },
      { icon: '🔒' },
      { icon: '💬' },
      { icon: '🔗' },
    ];

    const stepsData = [
      { icon: '📤' },
      { icon: '💬' },
      { icon: '📥' },
    ];

    const galleryItems = [
      { bgBefore: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', bgAfter: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' },
      { bgBefore: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', bgAfter: 'linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)' },
      { bgBefore: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', bgAfter: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
      { bgBefore: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', bgAfter: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
      { bgBefore: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', bgAfter: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      { bgBefore: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', bgAfter: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)' },
    ];

    const testimonials = [
      { text: 'BluePixel replaced three tools in my workflow. I just describe what I want and it happens. The 4K output quality is unmatched.', name: 'Sarah Chen', role: 'Photographer', initials: 'SC', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
      { text: "We process 10,000+ product images monthly. BluePixel's API cut our editing costs by 80% while improving quality.", name: 'Marcus Johnson', role: 'E-commerce Director', initials: 'MJ', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
      { text: 'The pixel preservation is real — I tested it. Untouched areas are literally byte-identical. This is serious technology.', name: 'Dr. Yuki Tanaka', role: 'Computer Vision Researcher', initials: 'YT', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    ];

    const faqs = reactive([
      { q: 'What formats does BluePixel support?', a: 'We support JPEG, PNG, WebP, TIFF, RAW, MP4, MOV, and ProRes. Input up to 8K, output up to 4K (8K on Enterprise).', open: false },
      { q: 'How does pixel preservation work?', a: "Our patented diffusion masking technology identifies regions that shouldn't change and excludes them from the generation pipeline entirely. The result is byte-identical preservation of untouched areas.", open: false },
      { q: 'Is my content used for training?', a: 'Never. Your uploads are processed in isolated containers, encrypted at rest, and permanently deleted within 24 hours. Enterprise plans offer on-premise deployment.', open: false },
      { q: 'Can I use the API for commercial projects?', a: 'Yes! Pro and Enterprise plans include full commercial usage rights for all AI-generated edits. See our terms for details.', open: false },
      { q: 'What languages are supported for instructions?', a: 'BluePixel understands English, Chinese, Japanese, Spanish, French, German, Korean, and 20+ other languages natively.', open: false },
    ]);

    function toggleFaq(i) { faqs[i].open = !faqs[i].open; }

    let tokenClient = null;

    function googleLogin() {
      if (!tokenClient) {
        if (window.google && google.accounts && google.accounts.oauth2) {
          initTokenClient();
        } else {
          alert('Google Sign-In is still loading. Please try again.');
          return;
        }
      }
      tokenClient.requestAccessToken();
    }

    function initTokenClient() {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: 'profile email',
        callback: async (tokenResponse) => {
          if (tokenResponse.access_token) {
            try {
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: 'Bearer ' + tokenResponse.access_token },
              });
              const profile = await res.json();
              user.value = { name: profile.name, email: profile.email, picture: profile.picture };
              localStorage.setItem('bluepixel_user', JSON.stringify(user.value));
            } catch (e) { console.error('Failed to fetch user info:', e); }
          }
        },
      });
    }

    function logout() {
      user.value = null;
      showUserMenu.value = false;
      localStorage.removeItem('bluepixel_user');
    }

    let typeInterval;
    onMounted(() => {
      const saved = localStorage.getItem('bluepixel_user');
      if (saved) user.value = JSON.parse(saved);

      const initGoogle = () => {
        if (window.google && google.accounts && google.accounts.oauth2) {
          initTokenClient();
        } else { setTimeout(initGoogle, 500); }
      };
      initGoogle();

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) showUserMenu.value = false;
        if (!e.target.closest('.lang-selector')) showLangMenu.value = false;
      });

      let pi = 0, ci = 0, deleting = false;
      typeInterval = setInterval(() => {
        const phrase = phrases[pi];
        if (!deleting) {
          typedText.value = phrase.slice(0, ci + 1);
          ci++;
          if (ci >= phrase.length) deleting = true;
        } else {
          typedText.value = phrase.slice(0, ci - 1);
          ci--;
          if (ci <= 0) { deleting = false; pi = (pi + 1) % phrases.length; }
        }
      }, 60);

      const onScroll = () => {
        scrolled.value = window.scrollY > 50;
        document.querySelectorAll('.reveal').forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('revealed');
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const id = a.getAttribute('href');
          if (id === '#') return;
          const target = document.querySelector(id);
          if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
      });
    });

    onUnmounted(() => clearInterval(typeInterval));

    return { scrolled, mobileMenu, typedText, stats, featuresData, stepsData, galleryItems, testimonials, faqs, toggleFaq, user, showUserMenu, logout, googleLogin, t, currentLang, languages, showLangMenu, setLang };
  }
}).mount('#app');
