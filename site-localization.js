(() => {
  const languageNames = {
    en: 'English',
    'zh-CN': '中文（简体）',
    ja: '日本語',
    ko: '한국어',
    ar: 'العربية',
  };
  const languageFlagSvgs = {
    en: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#012169"/><path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="10"/><path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" stroke-width="4"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="16"/><path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="8"/></svg>',
    'zh-CN': '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#de2910"/><path d="m13 5 1.7 5.2h5.5l-4.5 3.2 1.7 5.2-4.4-3.2-4.5 3.2 1.7-5.2-4.4-3.2h5.5zM27 5l.8 2.4h2.5l-2 1.5.8 2.4-2.1-1.5-2 1.5.8-2.4-2.1-1.5h2.6zM33 11l.8 2.4h2.5l-2 1.5.8 2.4-2.1-1.5-2 1.5.8-2.4-2.1-1.5h2.6zM32 20l.8 2.4h2.5l-2 1.5.8 2.4-2.1-1.5-2 1.5.8-2.4-2.1-1.5h2.6zM26 26l.8 2.4h2.5l-2 1.5.8 2.4-2.1-1.5-2 1.5.8-2.4-2.1-1.5h2.6z" fill="#ffde00"/></svg>',
    ja: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#fff"/><circle cx="30" cy="20" r="11" fill="#bc002d"/></svg>',
    ko: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#fff"/><circle cx="30" cy="17" r="8" fill="#cd2e3a"/><circle cx="30" cy="23" r="8" fill="#0047a0"/><circle cx="30" cy="17" r="4" fill="#0047a0"/><circle cx="30" cy="23" r="4" fill="#cd2e3a"/><g fill="#000"><path d="M8 7h3v10H8zm5 0h3v10h-3zm5 0h3v10h-3zM39 7h3v4h-3zm5 0h3v4h-3zm5 0h3v4h-3zM8 23h3v10H8zm5 6h3v4h-3zm5 0h3v4h-3zM39 29h3v4h-3zm5-6h3v10h-3zm5-6h3v10h-3z"/></g></svg>',
    ar: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#006c35"/><path d="M13 25h34" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="m45 22 5 3-5 3" fill="none" stroke="#fff" stroke-width="2"/></svg>',
  };
  const languages = ['en', 'zh-CN', 'ja', 'ko', 'ar'];
  const copy = {
    'Home': ['首页', 'ホーム', '홈', 'الرئيسية'],
    'Rooms & Villas': ['客房与别墅', '客室・ヴィラ', '객실 및 빌라', 'الغرف والفلل'],
    'Offers': ['优惠', 'プラン', '혜택', 'العروض'],
    'Dining': ['餐饮', 'ダイニング', '다이닝', 'المطاعم'],
    'Wellness': ['康养', 'ウェルネス', '웰니스', 'العافية'],
    'Activities': ['体验活动', 'アクティビティ', '액티비티', 'الأنشطة'],
    'Transport & Tour Service': ['交通与旅游服务', '送迎・ツアーサービス', '교통 및 투어 서비스', 'خدمات النقل والجولات السياحية'],
    'Weddings': ['婚礼', 'ウェディング', '웨딩', 'حفلات الزفاف'],
    'About us': ['关于我们', '当リゾートについて', '리조트 소개', 'من نحن'],
    'Main navigation': ['主导航', 'メインナビゲーション', '주요 메뉴', 'التنقل الرئيسي'],
    'Breadcrumb': ['面包屑导航', 'パンくずリスト', '경로 탐색', 'مسار التنقل'],
    'Chat via WhatsApp': ['通过 WhatsApp 联系', 'WhatsAppでチャット', 'WhatsApp으로 문의하기', 'تواصل عبر واتساب'],
    'Book your stay': ['预订住宿', '宿泊を予約', '숙박 예약', 'احجز إقامتك'],
    'Open navigation': ['打开导航菜单', 'ナビゲーションを開く', '탐색 메뉴 열기', 'فتح قائمة التنقل'],
    'Close navigation': ['关闭导航菜单', 'ナビゲーションを閉じる', '탐색 메뉴 닫기', 'إغلاق قائمة التنقل'],
    'Choose language': ['选择语言', '言語を選択', '언어 선택', 'اختر اللغة'],
    'Check in': ['入住日期', 'チェックイン', '체크인', 'تاريخ الوصول'],
    'Check out': ['退房日期', 'チェックアウト', '체크아웃', 'تاريخ المغادرة'],
    'ROOM': ['客房', '客室', '객실', 'الغرفة'],
    'Room': ['客房', '客室', '객실', 'الغرفة'],
    'Adult': ['成人', '大人', '성인', 'بالغ'],
    'Child': ['儿童', '子ども', '어린이', 'طفل'],
    'Check availability': ['查询空房', '空室を確認', '예약 가능 여부 확인', 'تحقق من التوافر'],
    'Add room': ['增加客房', '客室を追加', '객실 추가', 'إضافة غرفة'],
    'Remove room': ['减少客房', '客室を減らす', '객실 제거', 'إزالة غرفة'],
    'Add adult': ['增加成人', '大人を追加', '성인 추가', 'إضافة بالغ'],
    'Remove adult': ['减少成人', '大人を減らす', '성인 제거', 'إزالة بالغ'],
    'Add child': ['增加儿童', '子どもを追加', '어린이 추가', 'إضافة طفل'],
    'Remove child': ['减少儿童', '子どもを減らす', '어린이 제거', 'إزالة طفل'],
    '1 Room, 2 Adult, 0 Child': ['1间客房，2位成人，0位儿童', '1室、大人2名、子ども0名', '객실 1개, 성인 2명, 어린이 0명', 'غرفة واحدة، بالغان، 0 أطفال'],
    'Our story': ['我们的故事', '私たちのストーリー', '리조트 이야기', 'قصتنا'],
    'Our Story | The Ning Resort Ubud': ['我们的故事 | The Ning Resort Ubud', '私たちのストーリー | The Ning Resort Ubud', '리조트 이야기 | The Ning Resort Ubud', 'قصتنا | The Ning Resort Ubud'],
    'The Ning Resort Ubud': ['The Ning Resort Ubud', 'The Ning Resort Ubud', 'The Ning Resort Ubud', 'The Ning Resort Ubud'],
    'The Ning Resort Ubud | Luxury Resort in Ubud Bali': ['The Ning Resort Ubud | 巴厘岛乌布豪华度假村', 'The Ning Resort Ubud | バリ島ウブドのラグジュアリーリゾート', 'The Ning Resort Ubud | 발리 우붓 럭셔리 리조트', 'The Ning Resort Ubud | منتجع فاخر في أوبود، بالي'],
    'Rooms & Villas | The Ning Resort Ubud': ['客房与别墅 | The Ning Resort Ubud', '客室・ヴィラ | The Ning Resort Ubud', '객실 및 빌라 | The Ning Resort Ubud', 'الغرف والفلل | The Ning Resort Ubud'],
    'Offers | The Ning Resort Ubud': ['优惠 | The Ning Resort Ubud', 'プラン | The Ning Resort Ubud', '혜택 | The Ning Resort Ubud', 'العروض | The Ning Resort Ubud'],
    'Dining | The Ning Resort Ubud': ['餐饮 | The Ning Resort Ubud', 'ダイニング | The Ning Resort Ubud', '다이닝 | The Ning Resort Ubud', 'المطاعم | The Ning Resort Ubud'],
    'Wellness | The Ning Resort Ubud': ['康养 | The Ning Resort Ubud', 'ウェルネス | The Ning Resort Ubud', '웰니스 | The Ning Resort Ubud', 'العافية | The Ning Resort Ubud'],
    'Experiences | The Ning Resort Ubud': ['体验活动 | The Ning Resort Ubud', 'アクティビティ | The Ning Resort Ubud', '체험 | The Ning Resort Ubud', 'التجارب | The Ning Resort Ubud'],
    'Transport & Tour Service | The Ning Resort Ubud': ['交通与旅游服务 | The Ning Resort Ubud', '送迎・ツアーサービス | The Ning Resort Ubud', '교통 및 투어 서비스 | The Ning Resort Ubud', 'خدمات النقل والجولات السياحية | The Ning Resort Ubud'],
    'Weddings | The Ning Resort Ubud': ['婚礼 | The Ning Resort Ubud', 'ウェディング | The Ning Resort Ubud', '웨딩 | The Ning Resort Ubud', 'حفلات الزفاف | The Ning Resort Ubud'],
    'Quick Links': ['快速链接', 'クイックリンク', '빠른 링크', 'روابط سريعة'],
    'Follow us': ['关注我们', 'フォローする', '팔로우하기', 'تابعنا'],
    'Contact': ['联系方式', 'お問い合わせ', '문의하기', 'اتصل بنا'],
    'Phone: +62 361 4792200': ['电话：+62 361 4792200', '電話：+62 361 4792200', '전화: +62 361 4792200', 'الهاتف: ‎+62 361 4792200'],
    'WhatsApp: +62 822-3665-5292': ['WhatsApp：+62 822-3665-5292', 'WhatsApp：+62 822-3665-5292', 'WhatsApp: +62 822-3665-5292', 'واتساب: ‎+62 822-3665-5292'],
    'Jl. Subak Banjar Sala, Pejeng Kawan,': ['Jl. Subak Banjar Sala, Pejeng Kawan,', 'Jl. Subak Banjar Sala, Pejeng Kawan,', 'Jl. Subak Banjar Sala, Pejeng Kawan,', 'Jl. Subak Banjar Sala, Pejeng Kawan,'],
    'Ubud, Bali 80552, Indonesia': ['印度尼西亚巴厘岛乌布 80552', 'インドネシア、バリ島ウブド 80552', '인도네시아 발리 우붓 80552', 'أوبود، بالي 80552، إندونيسيا'],
    'UBUD, BALI': ['巴厘岛乌布', 'バリ島ウブド', '발리 우붓', 'أوبود، بالي'],
    'UBUD, BALI 80552, INDONESIA': ['印度尼西亚巴厘岛乌布 80552', 'インドネシア、バリ島ウブド 80552', '인도네시아 발리 우붓 80552', 'أوبود، بالي 80552، إندونيسيا'],
    'BALI 80571, INDONESIA': ['印度尼西亚巴厘岛 80571', 'インドネシア、バリ島 80571', '인도네시아 발리 80571', 'بالي 80571، إندونيسيا'],
    'UBUD, GIANYAR REGENCY': ['巴厘岛吉安雅县乌布', 'バリ島ギャニャール県ウブド', '발리 기안야르 리젠시 우붓', 'أوبود، مقاطعة جيانيار'],
    'info@theningresortubud.com': ['info@theningresortubud.com', 'info@theningresortubud.com', 'info@theningresortubud.com', 'info@theningresortubud.com'],
    'Instagram': ['Instagram', 'Instagram', 'Instagram', 'Instagram'],
    'Facebook': ['Facebook', 'Facebook', 'Facebook', 'Facebook'],
    'TikTok': ['TikTok', 'TikTok', 'TikTok', 'TikTok'],
    'LinkedIn': ['LinkedIn', 'LinkedIn', 'LinkedIn', 'LinkedIn'],
    'Copyright © THE NING RESORT UBUD 2023': ['版权所有 © THE NING RESORT UBUD 2023', 'Copyright © THE NING RESORT UBUD 2023', '저작권 © THE NING RESORT UBUD 2023', 'حقوق النشر © THE NING RESORT UBUD 2023'],
    'Copyright Â© THE NING RESORT UBUD 2023': ['版权所有 © THE NING RESORT UBUD 2023', 'Copyright © THE NING RESORT UBUD 2023', '저작권 © THE NING RESORT UBUD 2023', 'حقوق النشر © THE NING RESORT UBUD 2023'],
    'Â© THE NING RESORT UBUD 2026': ['© THE NING RESORT UBUD 2026', '© THE NING RESORT UBUD 2026', '© THE NING RESORT UBUD 2026', '© THE NING RESORT UBUD 2026'],
    'Our Facilities.': ['我们的设施', '施設のご案内', '리조트 시설', 'مرافقنا'],
    'Explore all stays': ['探索所有住宿', 'すべての客室を見る', '모든 객실 둘러보기', 'استكشف جميع أماكن الإقامة'],
    'Explore Ubud': ['探索乌布', 'ウブドを散策', '우붓 둘러보기', 'استكشف أوبود'],
    'Open in Google Maps': ['在 Google 地图中打开', 'Google マップで開く', 'Google 지도에서 열기', 'افتح في خرائط Google'],
    'Discover Our Offers': ['探索优惠', '宿泊プランを見る', '혜택 둘러보기', 'اكتشف عروضنا'],
    'Explore services': ['查看服务', 'サービスを見る', '서비스 둘러보기', 'استكشف الخدمات'],
    'Find your activities': ['探索体验活动', 'アクティビティを見る', '액티비티 둘러보기', 'اكتشف الأنشطة'],
    'Find your table': ['预订餐桌', 'テーブルを予約', '테이블 예약', 'احجز طاولتك'],
    'Make an enquiry': ['咨询详情', 'お問い合わせ', '문의하기', 'أرسل استفسارًا'],
    'Make a reservation': ['预订', '予約する', '예약하기', 'أجرِ حجزًا'],
    'Book Now': ['立即预订', '今すぐ予約', '지금 예약', 'احجز الآن'],
    'Plan your stay': ['规划您的住宿', '滞在を計画する', '숙박 계획하기', 'خطط لإقامتك'],
    'Plan your trip': ['规划您的行程', '旅行を計画する', '여행 계획하기', 'خطط لرحلتك'],
    'Ask our team': ['咨询我们的团队', 'スタッフに相談する', '직원에게 문의하기', 'استفسر من فريقنا'],
    'Ask for a customized plan': ['咨询定制行程', 'オーダーメイドプランを相談', '맞춤 일정 문의하기', 'اطلب خطة مخصصة'],
    'Enquire with us': ['联系我们咨询', 'お問い合わせ', '문의하기', 'استفسر منا'],
    'Enquire about weddings': ['咨询婚礼事宜', 'ウェディングについて問い合わせる', '웨딩 문의하기', 'استفسر عن حفلات الزفاف'],
    'Start a conversation': ['与我们联系', 'ご相談はこちら', '상담 시작하기', 'ابدأ محادثة'],
    'Stay with us': ['入住度假村', 'ご宿泊はこちら', '숙박 예약하기', 'أقم لدينا'],
    'View room details': ['查看客房详情', '客室の詳細を見る', '객실 상세 정보 보기', 'عرض تفاصيل الغرفة'],
    'View Rate': ['查看价格', '料金を見る', '요금 보기', 'عرض الأسعار'],
    'FREE WiFi - Hi Speed Internet': ['免费高速 Wi-Fi', '無料高速Wi-Fi', '무료 고속 Wi-Fi', 'واي فاي مجاني عالي السرعة'],
    '1 King Bed': ['1张特大床', 'キングベッド1台', '킹사이즈 침대 1개', 'سرير كينغ واحد'],
    'Up to 2 adults': ['最多可住2位成人', '大人2名まで', '성인 최대 2명', 'يتسع لشخصين بالغين كحد أقصى'],
    'Up to 4 adults': ['最多可住4位成人', '大人4名まで', '성인 최대 4명', 'يتسع لأربعة بالغين كحد أقصى'],
    '24 Hour Front Desk': ['24小时前台服务', '24時間対応フロントデスク', '24시간 프런트 데스크', 'مكتب استقبال على مدار الساعة'],
    'Room Features & Facilities': ['客房设施', '客室の設備・アメニティ', '객실 특징 및 시설', 'مميزات الغرفة ومرافقها'],
    'Room highlights': ['客房特色', '客室の特徴', '객실 특징', 'مميزات الغرفة'],
    'Suite details': ['套房详情', 'スイートの詳細', '스위트 상세 정보', 'تفاصيل الجناح'],
    'Villa details': ['别墅详情', 'ヴィラの詳細', '빌라 상세 정보', 'تفاصيل الفيلا'],
    'Bathroom Features': ['浴室设施', 'バスルームの設備', '욕실 시설', 'مرافق الحمام'],
    'Climate control': ['温控设施', '空調設備', '냉난방 시설', 'التحكم بدرجة الحرارة'],
    'Entertainment': ['娱乐设施', 'エンターテインメント', '엔터테인먼트', 'الترفيه'],
    'General Amenities': ['一般设施', '共用アメニティ', '일반 편의 시설', 'وسائل الراحة العامة'],
    'Internet': ['网络', 'インターネット', '인터넷', 'الإنترنت'],
    'Kitchen Features': ['厨房设施', 'キッチン設備', '주방 시설', 'مرافق المطبخ'],
    'Kitchenette': ['小厨房', '簡易キッチン', '간이 주방', 'مطبخ صغير'],
    'Sun Bed': ['日光躺椅', 'サンベッド', '선베드', 'سرير استرخاء'],
    'Villa Size': ['别墅面积', 'ヴィラの広さ', '빌라 면적', 'مساحة الفيلا'],
    'Duplex Villa Size': ['复式别墅面积', 'メゾネットヴィラの広さ', '복층 빌라 면적', 'مساحة الفيلا الدوبلك스'],
    'Previous dining experiences': ['上一组餐饮体验', '前のダイニング体験', '이전 다이닝 경험', 'تجارب الطعام السابقة'],
    'Next dining experiences': ['下一组餐饮体验', '次のダイニング体験', '다음 다이닝 경험', 'تجارب الطعام التالية'],
    'Laundry Facilities': ['洗衣设施', 'ランドリー設備', '세탁 시설', 'مرافق الغسيل'],
    'Balcony': ['阳台', 'バルコニー', '발코니', 'شرفة'],
    'Private Balcony': ['私人阳台', 'プライベートバルコニー', '전용 발코니', 'شرفة خاصة'],
    'Private balcony': ['私人阳台', 'プライベートバルコニー', '전용 발코니', 'شرفة خاصة'],
    'Two Private Balcony': ['两处私人阳台', 'プライベートバルコニー2か所', '전용 발코니 2개', 'شرفتان خاصتان'],
    'Two Private balcony': ['两处私人阳台', 'プライベートバルコニー2か所', '전용 발코니 2개', 'شرفتان خاصتان'],
    'Private Balcony & Living Room': ['私人阳台与起居室', 'プライベートバルコニー・リビングルーム', '전용 발코니 및 거실', 'شرفة خاصة وغرفة معيشة'],
    'Private pool': ['私人泳池', 'プライベートプール', '전용 수영장', 'مسبح خاص'],
    'Private Pool': ['私人泳池', 'プライベートプール', '전용 수영장', 'مسبح خاص'],
    'Private plunge pool': ['私人小型泳池', 'プライベートプランジプール', '전용 플런지 풀', 'مسبح غطس خاص'],
    'Private Plunge Pool': ['私人小型泳池', 'プライベートプランジプール', '전용 플런지 풀', 'مسبح غطس خاص'],
    'Private garden': ['私人花园', 'プライベートガーデン', '전용 정원', 'حديقة خاصة'],
    'Private setting': ['私密环境', 'プライベートな空間', '프라이빗한 공간', 'أجواء خاصة'],
    'Garden setting': ['花园环境', 'ガーデンビュー', '정원 전망', 'إطلالة على الحديقة'],
    'Natural textures': ['自然质感', '自然素材の質感', '자연 소재의 질감', 'خامات طبيعية'],
    'Contemporary interior': ['现代风格内饰', 'モダンなインテリア', '현대적인 인테리어', 'تصميم داخلي عصري'],
    'Residential layout': ['居家式布局', 'レジデンススタイルの間取り', '레지던스형 구조', 'تصميم سكني'],
    'Duplex layout': ['复式布局', 'メゾネットタイプ', '복층 구조', 'تصميم دوبلكس'],
    'One bedroom': ['一间卧室', 'ベッドルーム1室', '침실 1개', 'غرفة نوم واحدة'],
    'Two bedrooms': ['两间卧室', 'ベッドルーム2室', '침실 2개', 'غرفتا نوم'],
    'Separate living room': ['独立起居室', '独立したリビングルーム', '별도의 거실', 'غرفة معيشة منفصلة'],
    'Bedside Lights': ['床头灯', 'ベッドサイドライト', '침대 옆 조명', 'مصابيح بجانب السرير'],
    'Desk': ['书桌', 'デスク', '책상', 'مكتب'],
    'Electronic Door Lock': ['电子门锁', '電子ドアロック', '전자 도어록', 'قفل باب إلكتروني'],
    'In-room Safe Deposit Box': ['客房保险箱', '室内セーフティボックス', '객실 내 금고', 'خزنة داخل الغرفة'],
    'Linen': ['床品', 'リネン類', '침구류', 'أغطية الأسرّة'],
    'Non Smoking In Rooms': ['客房内禁烟', '客室内禁煙', '객실 내 금연', 'ممنوع التدخين داخل الغرف'],
    'Power': ['电源插座', '電源', '전원', 'منافذ كهرباء'],
    'Privacy Curtains': ['遮光帘', 'プライバシーカーテン', '암막 커튼', 'ستائر للخصوصية'],
    'Private Entrance': ['私人入口', '専用エントランス', '전용 출입구', 'مدخل خاص'],
    'Sofa': ['沙发', 'ソファ', '소파', 'أريكة'],
    'Windows': ['窗户', '窓', '창문', 'نوافذ'],
    'Hand Soap': ['洗手液', 'ハンドソープ', '손 세정제', 'صابون اليدين'],
    'Private Bathroom': ['独立浴室', '専用バスルーム', '전용 욕실', 'حمام خاص'],
    'Bathtub': ['浴缸', 'バスタブ', '욕조', 'حوض استحمام'],
    'Separate Shower & Bath': ['独立淋浴间和浴缸', '独立したシャワーとバスタブ', '분리형 샤워실 및 욕조', 'دش وحوض استحمام منفصلان'],
    'Shower': ['淋浴', 'シャワー', '샤워', 'دش'],
    'Hand Shower': ['手持花洒', 'ハンドシャワー', '핸드 샤워기', 'دش يدوي'],
    'Toiletries': ['洗浴用品', 'バスアメニティ', '세면도구', 'مستلزمات الاستحمام'],
    'Towels': ['毛巾', 'タオル', '수건', 'مناشف'],
    'Air-conditioning': ['空调', 'エアコン', '에어컨', 'تكييف هواء'],
    'Flat Screen TV': ['平板电视', '薄型テレビ', '평면 TV', 'تلفزيون بشاشة مسطحة'],
    'Netflix': ['Netflix', 'Netflix', 'Netflix', 'Netflix'],
    'Bathrobes': ['浴袍', 'バスローブ', '목욕 가운', 'أردية حمام'],
    'Daily Housekeeping': ['每日客房清洁', '毎日のハウスキーピング', '매일 객실 정돈', 'خدمة تنظيف يومية'],
    'Hair Dryer': ['吹风机', 'ヘアドライヤー', '헤어드라이어', 'مجفف شعر'],
    'Room Slippers': ['客房拖鞋', 'スリッパ', '슬리퍼', 'نعال الغرفة'],
    'Electric Kettle': ['电热水壶', '電気ケトル', '전기 주전자', 'غلاية كهربائية'],
    'Free Bottled Water': ['免费瓶装水', '無料のボトルウォーター', '무료 생수', 'مياه معبأة مجانية'],
    'Mini Bar': ['迷你吧', 'ミニバー', '미니바', 'ميني بار'],
    'Tea/Coffee Making facilities': ['茶和咖啡冲泡设施', 'お茶・コーヒーセット', '차·커피 메이커', 'مرافق إعداد الشاي والقهوة'],
    'Iron & ironing board': ['熨斗和熨衣板', 'アイロン・アイロン台', '다리미 및 다리미판', 'مكواة وطاولة كي'],
    'Microwave': ['微波炉', '電子レンジ', '전자레인지', 'ميكروويف'],
    'Oven': ['烤箱', 'オーブン', '오븐', 'فرن'],
    'Refrigerator - Full Size': ['全尺寸冰箱', 'フルサイズ冷蔵庫', '풀사이즈 냉장고', 'ثلاجة كاملة الحجم'],
    'Stove': ['炉灶', 'コンロ', '레인지', 'موقد'],
    'Suite': ['套房', 'スイート', '스위트', 'جناح'],
    'Plunge Pool Villa': ['小型泳池别墅', 'プランジプールヴィラ', '플런지 풀 빌라', 'فيلا بمسبح غطس'],
    'One Bedroom Pool Villa': ['一卧室泳池别墅', '1ベッドルーム・プールヴィラ', '침실 1개 풀빌라', 'فيلا بمسبح وغرفة نوم واحدة'],
    'Living Room Villa': ['带起居室别墅', 'リビングルーム付きヴィラ', '거실이 있는 빌라', 'فيلا مع غرفة معيشة'],
    'Two Bedroom Villa': ['两卧室别墅', '2ベッドルームヴィラ', '침실 2개 빌라', 'فيلا بغرفتي نوم'],
    'Suite Room': ['套房', 'スイートルーム', '스위트룸', 'غرفة جناح'],
    'Suite with Balcony': ['阳台套房', 'バルコニー付きスイート', '발코니 스위트', 'جناح مع شرفة'],
    'Deluxe Suite with Balcony': ['豪华阳台套房', 'デラックス・バルコニースイート', '디럭스 발코니 스위트', 'جناح ديلوكس مع شرفة'],
    'Deluxe suite': ['豪华套房', 'デラックススイート', '디럭스 스위트', 'جناح ديلوكس'],
    'One-Bedroom Plunge Pool Villa': ['一卧室私人小型泳池别墅', '1ベッドルーム・プランジプールヴィラ', '침실 1개 플런지 풀 빌라', 'فيلا بغرفة نوم واحدة ومسبح غطس'],
    'One-Bedroom Pool Villa': ['一卧室泳池别墅', '1ベッドルーム・プールヴィラ', '침실 1개 풀빌라', 'فيلا بمسبح وغرفة نوم واحدة'],
    'One-Bedroom Pool Villa with Living Room': ['一卧室带起居室泳池别墅', 'リビングルーム付き1ベッドルーム・プールヴィラ', '거실이 있는 침실 1개 풀빌라', 'فيلا بمسبح وغرفة نوم واحدة وغرفة معيشة'],
    'One-bedroom Pool Villa with Living Room': ['一卧室带起居室泳池别墅', 'リビングルーム付き1ベッドルーム・プールヴィラ', '거실이 있는 침실 1개 풀빌라', 'فيلا بمسبح وغرفة نوم واحدة وغرفة معيشة'],
    'One-Bedroom Private Pool Villa': ['一卧室私人泳池别墅', '1ベッドルーム・プライベートプールヴィラ', '침실 1개 전용 수영장 빌라', 'فيلا بمسبح خاص وغرفة نوم واحدة'],
    'Pool Villa with Living Room': ['带起居室泳池别墅', 'リビングルーム付きプールヴィラ', '거실이 있는 풀빌라', 'فيلا بمسبح وغرفة معيشة'],
    'Two-Bedroom Duplex Pool Villa': ['两卧室复式泳池别墅', '2ベッドルーム・メゾネットプールヴィラ', '침실 2개 복층 풀빌라', 'فيلا دوبلكس بمسبح وغرفتي نوم'],
    'Two-Bedroom Suite with Balcony': ['两卧室阳台套房', 'バルコニー付き2ベッドルームスイート', '발코니가 있는 침실 2개 스위트', 'جناح بغرفتي نوم وشرفة'],
    'Residential Suite Two-Bedroom with Balcony': ['两卧室住宅式阳台套房', 'バルコニー付き2ベッドルーム・レジデンススイート', '발코니가 있는 침실 2개 레지던스 스위트', 'جناح سكني بغرفتي نوم وشرفة'],
    'Residential Suite Two-Bedroom With Balcony': ['两卧室住宅式阳台套房', 'バルコニー付き2ベッドルーム・レジデンススイート', '발코니가 있는 침실 2개 레지던스 스위트', 'جناح سكني بغرفتي نوم وشرفة'],
    'Residential Suite': ['住宅式套房', 'レジデンススイート', '레지던스 스위트', 'جناح سكني'],
    'Two-Bedroom Family': ['两卧室家庭房', '2ベッドルーム・ファミリー', '침실 2개 패밀리룸', 'غرفة عائلية بغرفتي نوم'],
    'Explore More': ['探索更多', 'もっと見る', '더 둘러보기', 'استكشف المزيد'],
    'Suites & Villas': ['套房与别墅', 'スイート・ヴィラ', '스위트 및 빌라', 'الأجنحة والفلل'],
    'Explore suites and villas': ['探索套房与别墅', 'スイートとヴィラを見る', '스위트 및 빌라 둘러보기', 'استكشف الأجنحة والفلل'],
    'Show slide': ['显示幻灯片', 'スライドを表示', '슬라이드 표시', 'اعرض الشريحة'],
    'Previous slide': ['上一张幻灯片', '前のスライド', '이전 슬라이드', 'الشريحة السابقة'],
    'Next slide': ['下一张幻灯片', '次のスライド', '다음 슬라이드', 'الشريحة التالية'],
    'Play slideshow': ['播放幻灯片', 'スライドショーを再生', '슬라이드쇼 재생', 'تشغيل عرض الشرائح'],
    'Pause slideshow': ['暂停幻灯片', 'スライドショーを一時停止', '슬라이드쇼 일시정지', 'إيقاف عرض الشرائح مؤقتًا'],
    'Slideshow controls': ['幻灯片控制', 'スライドショー操作', '슬라이드쇼 컨트롤', 'عناصر التحكم بعرض الشرائح'],
    'Photo slideshow controls': ['照片轮播控制', '写真スライドショー操作', '사진 슬라이드쇼 컨트롤', 'عناصر التحكم بعرض الصور'],
    'The Ning Resort photos': ['The Ning Resort 图片', 'The Ning Resortの写真', 'The Ning Resort 사진', 'صور The Ning Resort'],
    'Previous photo': ['上一张照片', '前の写真', '이전 사진', 'الصورة السابقة'],
    'Next photo': ['下一张照片', '次の写真', '다음 사진', 'الصورة التالية'],
    'Previous room categories': ['上一组客房类别', '前の客室カテゴリー', '이전 객실 카테고리', 'فئات الغرف السابقة'],
    'Next room categories': ['下一组客房类别', '次の客室カテゴリー', '다음 객실 카테고리', 'فئات الغرف التالية'],
    'Exquisite Dining Experiences': ['精致餐饮体验', '美食を楽しむひととき', '품격 있는 다이닝 경험', 'تجارب طعام راقية'],
    'A TASTE OF THE NING': ['品味 The Ning', 'The Ningを味わう', 'The Ning의 맛', 'نكهات The Ning'],
    'Dining & Entertainment Gallery': ['餐饮与休闲画廊', 'ダイニング＆エンターテインメントギャラリー', '다이닝 및 엔터테인먼트 갤러리', 'معرض المطاعم والترفيه'],
    'Enlarge photo:': ['放大照片：', '写真を拡大：', '사진 확대:', 'تكبير الصورة:'],
    'View photo': ['查看照片', '写真を見る', '사진 보기', 'عرض الصورة'],
    'Close enlarged photo': ['关闭放大的照片', '拡大写真を閉じる', '확대 사진 닫기', 'إغلاق الصورة المكبرة'],
    'Show previous photo': ['显示上一张照片', '前の写真を表示', '이전 사진 표시', 'عرض الصورة السابقة'],
    'Show next photo': ['显示下一张照片', '次の写真を表示', '다음 사진 표시', 'عرض الصورة التالية'],
    'A Table Set for Sharing': ['共享餐桌', 'みんなで囲むテーブル', '함께 나누는 식탁', 'مائدة تجمع الأحبة'],
    'A relaxed dining scene surrounded by the greenery and warmth of Ubud.': ['在乌布的绿意与温暖中，享受轻松惬意的用餐时光。', 'ウブドの緑と温もりに包まれた、くつろぎのダイニング風景。', '우붓의 푸르름과 따스함에 둘러싸인 편안한 식사 풍경입니다.', 'أجواء طعام مريحة تحيط بها خضرة أوبود ودفؤها.'],
    'A Taste of Bali': ['巴厘岛风味', 'バリの味わい', '발리의 맛', 'نكهة بالي'],
    'Discover the ingredients and local flavours that inspire each dish.': ['探索启发每道菜肴的当地食材与风味。', '一皿一皿を彩る、地元の食材と味わいをお楽しみください。', '각 요리에 영감을 주는 현지 식재료와 풍미를 만나보세요.', 'اكتشف المكونات والنكهات المحلية التي تلهم كل طبق.'],
    'An Evening Pour': ['暮色中的一杯', '夕暮れの一杯', '저녁의 한 잔', 'رشفة في المساء'],
    'A thoughtfully prepared drink to enjoy as the evening unfolds.': ['随着夜色渐浓，细品一杯精心调制的饮品。', '夕暮れの移ろいとともに、丁寧に仕立てた一杯を。', '저녁이 깊어가는 순간, 정성껏 만든 음료를 즐겨보세요.', 'استمتع بمشروب مُعدّ بعناية مع إقبال المساء.'],
    'Fresh from the Kitchen': ['厨房新鲜出品', 'キッチンから届く新鮮な一皿', '주방에서 갓 나온 요리', 'طازج من المطبخ'],
    'Fresh ingredients come together in a colourful celebration of flavour.': ['新鲜食材汇聚一堂，呈现缤纷美味。', '新鮮な食材が織りなす、彩り豊かな味わい。', '신선한 재료가 어우러져 다채로운 풍미를 선사합니다.', 'مكونات طازجة تجتمع في احتفاء غني بالألوان والنكهات.'],
    'A Moment to Savour': ['细细品味的时刻', '味わいを楽しむひととき', '음미하는 순간', 'لحظة تستحق التذوق'],
    'Take your time and make room for one more memorable taste.': ['放慢脚步，再为一段难忘的滋味留些时间。', 'ゆっくりと、心に残るもう一つの味わいを。', '여유를 가지고 기억에 남을 또 하나의 맛을 즐겨보세요.', 'تمهّل واستمتع بمذاق آخر لا يُنسى.'],
    'The Art of the Table': ['餐桌之艺', 'テーブルを彩る技', '식탁의 예술', 'فن المائدة'],
    'Small details make every gathering feel special.': ['细致之处，让每次相聚都与众不同。', 'さりげない心配りが、集いを特別なものにします。', '세심한 디테일이 모든 모임을 특별하게 만듭니다.', 'التفاصيل الصغيرة تجعل كل لقاء مميزًا.'],
    'Flavours in Season': ['时令风味', '旬の味わい', '제철의 풍미', 'نكهات الموسم'],
    'Seasonal produce brings a little colour to every plate.': ['时令食材为每道菜肴增添一抹色彩。', '旬の食材が、一皿ごとに彩りを添えます。', '제철 식재료가 모든 접시에 색을 더합니다.', 'تضفي المنتجات الموسمية لمسة من الألوان على كل طبق.'],
    'Made with Care': ['用心制作', '心を込めて', '정성을 담아', 'أُعدّ بعناية'],
    'A glimpse into the thoughtful preparation behind each meal.': ['一窥每道餐点背后的细致用心。', '一皿一皿に込められた、丁寧な仕込みをご覧ください。', '각 요리에 담긴 정성스러운 준비 과정을 엿보세요.', 'لمحة عن العناية التي تُبذل في إعداد كل وجبة.'],
    'At the Bar': ['吧台时光', 'バーで過ごすひととき', '바에서 보내는 시간', 'في البار'],
    'Settle in at Rose Bar for a refreshing drink and good company.': ['在 Rose Bar 坐下来，享受清爽饮品与惬意相伴。', 'Rose Barで、爽やかな一杯と心地よい語らいを。', 'Rose Bar에서 상쾌한 음료와 좋은 사람들과 함께 편안히 쉬어보세요.', 'استرخِ في Rose Bar مع مشروب منعش وصحبة طيبة.'],
    'A Slower Pace': ['慢享时光', 'ゆったりとした時間', '느긋한 속도', 'إيقاع أبطأ'],
    'Enjoy an unhurried moment surrounded by the natural beauty of Bali.': ['置身巴厘岛的自然之美中，享受一段悠然时光。', 'バリの自然美に包まれて、ゆったりとしたひとときを。', '발리의 자연 속에서 서두르지 않는 여유를 즐겨보세요.', 'استمتع بلحظة هادئة وسط جمال بالي الطبيعي.'],
    'A SANCTUARY OF YOUR OWN': ['专属静谧天地', '自分だけのサンクチュアリ', '나만의 안식처', 'ملاذك الخاص'],
    'Where Nature': ['自然与', '自然と', '자연과', 'حيث تلتقي الطبيعة'],
    'Meets Luxury': ['奢华相遇', 'ラグジュアリーが出会う場所', '럭셔리가 만나는 곳', 'بالفخامة'],
    'Luxury Resort in Ubud Bali offering private pool villas, rice field views, jungle view and unforgettable honeymoon experiences.': ['The Ning 是位于巴厘岛乌布的豪华度假村，提供私人泳池别墅、稻田与丛林景观，以及难忘的蜜月体验。', 'バリ島ウブドに佇むラグジュアリーリゾート。プライベートプール付きヴィラや田園・ジャングルの眺望、心に残るハネムーン体験をご用意しています。', '발리 우붓의 럭셔리 리조트에서 전용 수영장 빌라, 논과 정글 전망, 잊지 못할 허니문을 경험해 보세요.', 'منتجع فاخر في أوبود، بالي، يضم فللًا بمسابح خاصة وإطلالات على حقول الأرز والغابات، وتجارب شهر عسل لا تُنسى.'],
    'Located just 15 minutes from Ubud Center, our resort combines modern elegance with authentic Balinese hospitality for an unforgettable island escape.': ['度假村距离乌布市中心仅约15分钟车程，融合现代优雅与真挚的巴厘岛待客之道，为您打造难忘的海岛假期。', 'ウブド中心部から車で約15分。モダンな優雅さとバリならではのおもてなしが調和する、心に残る島での滞在をお楽しみください。', '우붓 중심부에서 차로 약 15분 거리에 위치한 리조트에서 현대적인 우아함과 발리의 따뜻한 환대를 경험해 보세요.', 'على بُعد نحو 15 دقيقة من وسط أوبود، يجمع منتجعنا بين الأناقة العصرية وكرم الضيافة البالي الأصيل لقضاء عطلة لا تُنسى.'],
    'As one of the most peaceful private resorts in Ubud, The Ning Resort Ubud features spacious luxury rooms, premium amenities, and personalized service designed for couples, families, honeymooners and travelers seeking a romantic getaway in Ubud.': ['The Ning Resort Ubud 是乌布宁静的私密度假胜地之一，设有宽敞豪华的客房、优质设施与个性化服务，适合情侣、家庭、蜜月旅客及寻求浪漫假期的宾客。', 'The Ning Resort Ubudは、ウブドでも特に静かなプライベートリゾートの一つです。広々とした客室、上質なアメニティ、きめ細やかなサービスで、カップルやご家族、ハネムーンのお客様に心に残る滞在をご提供します。', 'The Ning Resort Ubud은 우붓의 평온한 프라이빗 리조트로, 넓은 객실과 고급 편의 시설, 맞춤형 서비스를 갖추어 커플, 가족, 허니문 여행객에게 특별한 휴식을 선사합니다.', 'يُعد The Ning Resort Ubud من أهدأ المنتجعات الخاصة في أوبود، ويوفر غرفًا فاخرة واسعة ومرافق راقية وخدمة شخصية للأزواج والعائلات وحديثي الزواج ولكل من يبحث عن عطلة رومانسية.'],
    'OUR POINT OF VIEW': ['我们的理念', '私たちの想い', '우리의 관점', 'رؤيتنا'],
    'Come as you are.': ['自在而来。', 'ありのままのあなたで。', '있는 그대로 오세요.', 'تعال كما أنت.'],
    'Leave a little lighter.': ['带着轻盈与从容离开。', '心を少し軽くしてお帰りください。', '한결 가벼운 마음으로 돌아가세요.', 'غادر بقلب أخفّ قليلًا.'],
    'The Ning is a place to find your own pace. Grounded in the warmth of Balinese hospitality, our resort brings thoughtful comfort into a setting shaped by the island\'s natural beauty.': ['The Ning 是一处让您找回自在节奏的地方。度假村以巴厘岛温暖的待客之道为底蕴，在岛屿自然之美中为您呈现贴心舒适的体验。', 'The Ningは、自分らしい時間の流れを見つける場所。バリのおもてなしの温かさを大切に、島の自然美に寄り添う心地よい滞在をご用意しています。', 'The Ning은 자신만의 속도를 찾는 곳입니다. 발리의 따뜻한 환대와 섬의 자연미 속에서 세심한 편안함을 전합니다.', 'The Ning هو مكان تستعيد فيه إيقاعك الخاص. يجمع منتجعنا دفء الضيافة البالية وراحة مدروسة في أجواء تنسجم مع جمال الجزيرة الطبيعي.'],
    'THE SPIRIT OF BALI, ALL AROUND YOU': ['巴厘岛风情，环绕身边', 'バリの心が、あらゆる場所に', '발리의 정취가 곳곳에', 'روح بالي تحيط بك من كل جانب'],
    'THE SPIRIT OF UBUD': ['乌布之韵', 'ウブドの心', '우붓의 정취', 'روح أوبود'],
    'Made of this': ['源自这片', 'この地が育む', '이곳에서 비롯된', 'من هذا'],
    'place.': ['土地。', '場所。', '곳.', 'المكان.'],
    'From the green beyond your window to the gracious welcome that greets you, Ubud is part of every stay. We invite you to meet the island with openness and leave room for the unexpected.': ['从窗外的绿意到亲切的欢迎，乌布融入每一段住宿体验。敞开心怀感受这座岛屿，也为不期而遇的惊喜留些空间。', '窓の外に広がる緑から心のこもったお迎えまで、ウブドの魅力が滞在のあらゆる瞬間に息づいています。島との出会いを楽しみ、思いがけない発見に心を開いてみてください。', '창밖의 푸르름부터 따뜻한 환대까지, 우붓의 매력이 머무는 모든 순간에 함께합니다. 열린 마음으로 섬을 만나고 뜻밖의 발견을 기대해 보세요.', 'من الخضرة خلف نافذتك إلى الترحيب الودود، يرافقك سحر أوبود طوال إقامتك. اكتشف الجزيرة بقلب منفتح واترك مساحة للمفاجآت الجميلة.'],
    'FIND YOUR WAY HERE': ['找到这里', 'アクセス', '찾아오시는 길', 'اعثر على طريقك إلينا'],
    'Ubud, at': ['乌布，', 'ウブドを', '우붓을', 'أوبود بين'],
    'your feet.': ['尽在脚下。', '巡る旅へ。', '가까이에서 만나보세요.', 'قدميك.'],
    'Around 15 minutes from Ubud centre, The Ning offers a peaceful base for exploring Bali\'s cultural heart.': ['The Ning 距离乌布市中心约15分钟车程，是探索巴厘岛文化核心的宁静据点。', 'ウブド中心部から車で約15分。The Ningは、バリの文化の中心を巡る旅の穏やかな拠点です。', '우붓 중심부에서 차로 약 15분 거리에 있어 발리 문화의 중심을 둘러보기에 좋은 평온한 거점입니다.', 'يقع The Ning على بُعد نحو 15 دقيقة من وسط أوبود، ويوفر قاعدة هادئة لاستكشاف القلب الثقافي لبالي.'],
    'THE NING RESORT UBUD': ['THE NING RESORT UBUD', 'THE NING RESORT UBUD', 'THE NING RESORT UBUD', 'THE NING RESORT UBUD'],
    'WE WILL SAVE YOU A PLACE': ['我们为您留一席之地', 'あなたのための場所をご用意しています', '여러분을 위한 자리를 마련해 둘게요', 'سنحتفظ لك بمكان'],
    'Your Ubud story': ['您的乌布故事', 'あなたのウブドの物語', '우붓에서의 이야기', 'حكايتك في أوبود'],
    'starts here.': ['从这里开始。', 'ここから始まります。', '여기서 시작됩니다.', 'تبدأ من هنا.'],
    'Where Nature Meets Luxury': ['自然与奢华相遇之处', '自然とラグジュアリーが出会う場所', '자연과 럭셔리가 만나는 곳', 'حيث تلتقي الطبيعة بالفخامة'],
    'A WORLD AWAY, CLOSE TO EVERYTHING': ['远离喧嚣，近享一切', '喧騒から離れ、すべてに近い場所', '모든 것과 가까운 완벽한 휴식처', 'بعيد عن صخب العالم وقريب من كل شيء'],
    'Just 15 minutes from Ubud\'s lively centre, yet a world apart. Set out for temples, galleries and markets, then return to the quiet.': ['距离乌布热闹的市中心仅15分钟车程，却仿佛远离尘嚣。探访寺庙、画廊与市集后，再回到宁静之中。', '活気あふれるウブド中心部から車でわずか15分。それでいて別世界のような静けさ。寺院やギャラリー、市場を巡った後は、穏やかな空間へお戻りください。', '활기찬 우붓 중심부에서 차로 단 15분 거리지만 한적한 휴식을 누릴 수 있습니다. 사원과 갤러리, 시장을 둘러본 뒤 고요한 리조트로 돌아오세요.', 'على بُعد 15 دقيقة فقط من وسط أوبود النابض بالحياة، ومع ذلك تشعر أنك في عالم آخر. اكتشف المعابد والمعارض والأسواق، ثم عُد إلى الهدوء.'],
    'Find us in Ubud': ['在乌布找到我们', 'ウブドでお待ちしています', '우붓에서 만나요', 'تجدنا في أوبود'],
    'A PLACE THAT FEELS LIKE YOURS': ['如同自己的家', '自分の場所のようにくつろげる場所', '내 집처럼 편안한 곳', 'مكان تشعر فيه وكأنه لك'],
    'Your Ubud stay': ['您的乌布之旅', 'ウブドでの滞在', '우붓에서의 숙박', 'إقامتك في أوبود'],
    'awaits.': ['即将开启。', 'お待ちしています。', '기다리고 있습니다.', 'بانتظارك.'],
    'A STAY FOR TWO': ['双人时光', '二人で過ごす滞在', '둘만의 시간', 'إقامة لشخصين'],
    'Honeymoon Package': ['蜜月套餐', 'ハネムーンプラン', '허니문 패키지', 'باقة شهر العسل'],
    'in Ubud Bali': ['巴厘岛乌布', 'バリ島ウブド', '발리 우붓', 'في أوبود، بالي'],
    'Celebrate your beginning with a private villa, thoughtful romantic touches and time to unwind together.': ['入住私人别墅，享受贴心的浪漫细节与相伴时光，共同开启人生新篇章。', 'プライベートヴィラで、心を込めたロマンチックな演出と二人でくつろぐ時間を楽しみ、新たな門出をお祝いください。', '전용 빌라와 세심한 로맨틱한 배려, 둘만의 여유로운 시간으로 새로운 시작을 기념하세요.', 'احتفلوا ببدايتكم في فيلا خاصة، مع لمسات رومانسية مدروسة ووقت للاسترخاء معًا.'],
    'A MOMENT TOGETHER': ['共度美好时光', '二人だけのひととき', '함께하는 순간', 'لحظة تجمعكما'],
    'Romantic Package': ['浪漫套餐', 'ロマンティックプラン', '로맨틱 패키지', 'باقة رومانسية'],
    'Turn a Bali escape into quality time with a relaxing stay and special details made for two.': ['在巴厘岛悠然小住，以专为两人准备的贴心细节，共度珍贵时光。', 'くつろぎの滞在と二人のための特別な演出で、バリの休日をかけがえのない時間に。', '편안한 숙박과 둘을 위한 특별한 배려로 발리 여행을 소중한 시간으로 만들어 보세요.', 'حوّل رحلتك إلى بالي إلى وقت ثمين مع إقامة باعثة على الاسترخاء وتفاصيل خاصة لشخصين.'],
    'A FLOATING ESCAPE': ['水上悠享时光', '水上で過ごす特別な休日', '물 위에서 즐기는 휴식', 'استرخاء فوق الماء'],
    'Floating Boat Package': ['漂浮船套餐', 'フローティングボートプラン', '플로팅 보트 패키지', 'باقة القارب العائم'],
    'Add a memorable floating breakfast or lunch experience to a peaceful stay surrounded by Ubud\'s greenery.': ['在乌布绿意环绕的宁静住宿中，增添一场难忘的漂浮早餐或午餐体验。', 'ウブドの緑に包まれた静かな滞在に、心に残るフローティングブレックファストやランチを添えて。', '우붓의 푸르름 속 평온한 숙박에 잊지 못할 플로팅 조식 또는 점심을 더해보세요.', 'أضف تجربة إفطار أو غداء عائم لا تُنسى إلى إقامة هادئة تحيط بها خضرة أوبود.'],
    'Breakfast Package': ['早餐套餐', '朝食プラン', '조식 패키지', 'باقة الإفطار'],
    'Luch Package': ['午餐套餐', 'ランチプラン', '점심 패키지', 'باقة الغداء'],
    'A LONGER ESCAPE': ['延长假期', 'ゆったり長めの滞在', '더 오래 머무는 휴식', 'إجازة أطول'],
    'Stay Longer,': ['住得更久，', '長く滞在して、', '더 오래 머물며,', 'أقم مدة أطول،'],
    'Enjoy More': ['尽享更多。', 'もっと楽しむ。', '더 많은 것을 누리세요.', 'واستمتع أكثر.'],
    'Take your time in Ubud with more days to unwind, explore the island and enjoy the resort at your own pace.': ['在乌布多留几日，悠然放松、探索岛屿，以自己的节奏享受度假时光。', 'ウブドでゆっくり過ごし、島を巡り、リゾートでの時間を自分のペースで楽しみませんか。', '우붓에서 여유롭게 머물며 섬을 둘러보고 자신만의 속도로 리조트를 즐겨보세요.', 'امنح نفسك وقتًا أطول في أوبود للاسترخاء واستكشاف الجزيرة والاستمتاع بالمنتجع على إيقاعك الخاص.'],
    'MAKE YOUR UBUD STAY SPECIAL': ['让乌布之旅与众不同', 'ウブドでの滞在を特別なものに', '우붓에서의 특별한 숙박', 'اجعل إقامتك في أوبود مميزة'],
    'Offers & Room Packages': ['优惠与住宿套餐', '宿泊プラン・客室パッケージ', '혜택 및 객실 패키지', 'العروض وباقات الإقامة'],
    'Experience a luxurious escape in the heart of Ubud, Bali. Enjoy elegant accommodation, serene natural surroundings, and warm Balinese hospitality for a relaxing and memorable stay.': ['在巴厘岛乌布中心享受奢华假期。优雅住宿、宁静自然与温暖的巴厘岛待客之道，为您带来放松而难忘的体验。', 'バリ島ウブドの中心で、上質な休日をお過ごしください。洗練された客室、穏やかな自然、温かなバリのおもてなしが、心安らぐ思い出を彩ります。', '발리 우붓 중심에서 우아한 숙박과 평온한 자연, 따뜻한 발리식 환대를 경험하며 편안하고 기억에 남는 휴식을 즐겨보세요.', 'استمتع بعطلة فاخرة في قلب أوبود، بالي، مع إقامة أنيقة وطبيعة هادئة وكرم ضيافة بالي الدافئ لقضاء وقت مريح لا يُنسى.'],
    'A LITTLE OF EVERYTHING, AT YOUR PACE': ['悠然享受，精彩纷呈', '自分のペースで、心ゆくまで', '나만의 속도로 다채롭게', 'كل ما تحب، على إيقاعك'],
    'Orchid Restaurant & Rose Bar': ['Orchid 餐厅与 Rose 酒吧', 'Orchid Restaurant & Rose Bar', 'Orchid 레스토랑 & Rose 바', 'مطعم Orchid وبار Rose'],
    'Enjoy island-inspired dining, a relaxed drink and unhurried moments beneath the canopy.': ['在绿荫之下，品尝岛屿风味、享用轻松饮品，悠然度过美好时光。', '木々の下で、島の恵みを味わい、飲み物を片手にゆったりとお過ごしください。', '나무 그늘 아래에서 섬의 풍미와 여유로운 음료를 즐기며 느긋한 시간을 보내세요.', 'استمتع بنكهات مستوحاة من الجزيرة ومشروب مريح ولحظات هادئة تحت ظلال الأشجار.'],
    'Frangipani Spa': ['鸡蛋花水疗中心', 'フランジパニ・スパ', '프랜지파니 스파', 'سبا فرانجيباني'],
    'Slow down with thoughtful treatments and time-honoured rituals in a calming setting.': ['在宁静的环境中享受贴心护理与传统疗愈仪式，让身心慢下来。', '穏やかな空間で、心を込めたトリートメントと受け継がれてきた儀式に身を委ねてください。', '차분한 공간에서 세심한 트리트먼트와 전통 의식으로 여유를 되찾아 보세요.', 'تمهّل واستمتع بعلاجات مدروسة وطقوس عريقة في أجواء هادئة.'],
    'Infinity Pool': ['无边泳池', 'インフィニティプール', '인피니티 풀', 'مسبح إنفينيتي'],
    'Take a refreshing dip and unwind as the pool meets the tranquil tropical landscape.': ['畅游一番，在泳池与宁静热带景致交融之处放松身心。', '穏やかな熱帯の景色に溶け込むプールで、ひと泳ぎして心をほどきましょう。', '고요한 열대 풍경과 어우러진 수영장에서 물놀이를 즐기며 휴식을 취하세요.', 'استمتع بسباحة منعشة واسترخِ حيث يلتقي المسبح بالمشهد الاستوائي الهادئ.'],
    'Lotus Gym': ['莲花健身房', 'ロータスジム', '로터스 짐', 'نادي لوتس الرياضي'],
    'Keep to your routine in a well-equipped space, with room to move at your own pace.': ['在设施齐全的空间保持日常锻炼，按自己的节奏自在活动。', '設備の整った空間で、いつもの習慣を自分のペースで続けられます。', '잘 갖춰진 공간에서 자신만의 속도로 운동 루틴을 이어가세요.', 'حافظ على روتينك في مساحة مجهزة جيدًا، وتحرك على إيقاعك الخاص.'],
    'Yoga Shala': ['瑜伽馆', 'ヨガシャラ', '요가 샬라', 'قاعة اليوغا'],
    'Reconnect through mindful movement and breath in a peaceful open-air space.': ['在宁静的开放空间中，通过专注的动作与呼吸重新连接身心。', '静かな屋外空間で、意識的な動きと呼吸を通して心身を整えましょう。', '평온한 야외 공간에서 마음을 담은 움직임과 호흡으로 몸과 마음을 다시 연결해 보세요.', 'استعد توازنك بالحركة الواعية والتنفس في مساحة هادئة ومفتوحة.'],
    'LET THE ISLAND SET THE PACE': ['让岛屿带您放慢脚步', '島のリズムに身を委ねて', '섬의 리듬에 몸을 맡기세요', 'دع الجزيرة تحدد الإيقاع'],
    'Feel The Real': ['感受真实', '本物を感じる', '진정한 경험을 느껴보세요', 'عِش التجربة الحقيقية'],
    'Ubud Bali.': ['巴厘岛乌布。', 'バリ島ウブド。', '발리 우붓.', 'أوبود، بالي.'],
    'Wellness rituals, generous flavours and encounters with the island that stay with you.': ['疗愈仪式、丰盛风味与难忘的岛屿相遇，伴您久久回味。', '心身を癒す習慣、豊かな味わい、そして心に残る島との出会い。', '웰니스 의식과 풍성한 맛, 오래 기억에 남을 섬과의 만남을 경험하세요.', 'طقوس العافية والنكهات الغنية وتجارب الجزيرة التي تبقى في ذاكرتك.'],
    'PRIVATE TRANSFER & CURATED TOURS': ['私人接送与精选游览', 'プライベート送迎・厳選ツアー', '프라이빗 이동 및 엄선 투어', 'تنقلات خاصة وجولات مختارة'],
    'Explore Bali, Your Way': ['以自己的方式探索巴厘岛', '自分らしいバリの旅へ', '나만의 방식으로 발리 탐험하기', 'اكتشف بالي على طريقتك'],
    'Discover the beauty of Bali with our private transportation and curated tour experiences. From Ubud\'s lush rice terraces and cultural landmarks to the island\'s hidden gems, let us take you on a memorable journey with comfort, convenience, and personalized service.': ['乘坐私人交通工具，参加精心策划的行程，探索巴厘岛之美。从乌布葱郁的梯田与文化地标，到岛上的隐秘之境，让我们以舒适、便捷和贴心服务，陪您开启难忘旅程。', 'プライベート送迎と厳選ツアーでバリの魅力を発見しませんか。ウブドの緑豊かな棚田や文化遺産から島の隠れた名所まで、快適で便利な移動と心を込めたサービスでご案内します。', '프라이빗 교통편과 엄선된 투어로 발리의 아름다움을 만나보세요. 우붓의 푸른 계단식 논과 문화 명소부터 섬의 숨은 보석까지 편안하고 세심한 서비스로 안내합니다.', 'اكتشف جمال بالي مع خدمات النقل الخاصة والجولات المختارة. من مدرجات الأرز الخضراء والمعالم الثقافية في أوبود إلى كنوز الجزيرة الخفية، دعنا نصحبك في رحلة لا تُنسى براحة وسهولة وخدمة شخصية.'],
    'Private Transfers': ['私人接送', 'プライベート送迎', '프라이빗 이동 서비스', 'تنقلات خاصة'],
    'Comfortable airport and intercity travel with friendly local drivers.': ['由友善的当地司机为您提供舒适的机场接送与城际出行服务。', '親しみやすい地元ドライバーが、空港送迎や都市間移動を快適にサポートします。', '친절한 현지 운전기사와 함께 공항 및 도시 간 이동을 편안하게 이용하세요.', 'تنقل مريح من المطار وبين المدن مع سائقين محليين ودودين.'],
    'Curated Tours': ['精选游览', '厳選ツアー', '엄선된 투어', 'جولات مختارة'],
    'Handpicked experiences to explore temples, waterfalls, and hidden gems.': ['精选体验，带您探索寺庙、瀑布与隐秘景点。', '寺院や滝、隠れた名所を巡る、選りすぐりの体験をご案内します。', '사원과 폭포, 숨은 명소를 둘러보는 엄선된 경험을 만나보세요.', 'تجارب مختارة لاستكشاف المعابد والشلالات والجواهر الخفية.'],
    'Flexible Planning': ['灵活规划', '柔軟なプランニング', '유연한 일정 계획', 'تخطيط مرن'],
    'Custom itineraries tailored to your pace, interests, and travel style.': ['根据您的节奏、兴趣与旅行风格量身规划行程。', 'お客様のペースや興味、旅のスタイルに合わせて旅程をカスタマイズします。', '여행 속도와 관심사, 스타일에 맞춰 일정을 구성해 드립니다.', 'خطط رحلات مخصصة تناسب إيقاعك واهتماماتك وأسلوب سفرك.'],
    'your': ['尽在', 'すぐ', '가까이에서', 'على'],
    'feet.': ['脚下。', 'そばで。', '만나보세요.', 'مقربة منك.'],
    'Rooms in category': ['客房类别', '客室カテゴリー', '객실 카테고리', 'فئة الغرفة'],
    'Orchid Restaurant': ['Orchid 餐厅', 'Orchid Restaurant', 'Orchid 레스토랑', 'مطعم Orchid'],
    'Rose Bar': ['Rose 酒吧', 'Rose Bar', 'Rose 바', 'بار Rose'],
    'Residensial Suite Two-Bedroom With Balcony': ['两卧室住宅式阳台套房', 'バルコニー付き2ベッドルーム・レジデンススイート', '발코니가 있는 침실 2개 레지던스 스위트', 'جناح سكني بغرفتي نوم وشرفة'],
    'Patio': ['庭院', 'パティオ', '파티오', 'فناء'],
    'Terrace': ['露台', 'テラス', '테라스', 'شرفة خارجية'],
    'One Bedroom': ['一间卧室', 'ベッドルーム1室', '침실 1개', 'غرفة نوم واحدة'],
    'Two Bedroom': ['两间卧室', 'ベッドルーム2室', '침실 2개', 'غرفتا نوم'],
    'PRIVATE POOL VILLA': ['私人泳池别墅', 'プライベートプールヴィラ', '전용 수영장 빌라', 'فيلا بمسبح خاص'],
    'SUITE ROOM': ['套房', 'スイートルーム', '스위트룸', 'غرفة جناح'],
    'TWO-BEDROOM VILLA': ['两卧室别墅', '2ベッドルームヴィラ', '침실 2개 빌라', 'فيلا بغرفتي نوم'],
    'RESIDENTIAL SUITE': ['住宅式套房', 'レジデンススイート', '레지던스 스위트', 'جناح سكني'],
    'Suites Room & Private Pool Villa In Ubud Bali.': ['巴厘岛乌布套房与私人泳池别墅', 'バリ島ウブドのスイートとプライベートプールヴィラ', '발리 우붓의 스위트 및 전용 수영장 빌라', 'أجنحة وفلل بمسابح خاصة في أوبود، بالي'],
    'Discover refined elegance at The Ning Resort Ubud, a premier luxury resort in Ubud, Bali, featuring exclusive private pool villas and spacious suite rooms in the heart of Ubud.': ['在 The Ning Resort Ubud 感受雅致格调。这座乌布顶级豪华度假村坐落于城市中心，提供专属私人泳池别墅与宽敞套房。', 'The Ning Resort Ubudで洗練された優雅さをご体験ください。ウブドの中心に位置する最高級リゾートで、プライベートプール付きヴィラと広々としたスイートをご用意しています。', 'The Ning Resort Ubud에서 세련된 우아함을 경험해 보세요. 우붓 중심의 최고급 리조트에서 전용 수영장 빌라와 넓은 스위트룸을 만나실 수 있습니다.', 'استمتع بالأناقة الراقية في The Ning Resort Ubud، منتجع فاخر في قلب أوبود يضم فللًا حصرية بمسابح خاصة وأجنحة واسعة.'],
    'Your own tucked-away garden sanctuary': ['专属静谧花园天地', '隠れ家のようなプライベートガーデン', '나만의 한적한 정원 안식처', 'ملاذك الهادئ وسط الحديقة'],
    'More space to settle into Ubud': ['更宽敞舒适，悠享乌布', 'ウブドでゆったり過ごせる広さ', '우붓에서 여유롭게 머물 수 있는 공간', 'مساحة أوسع للاستمتاع بأوبود'],
    'Room to breathe, a view to remember': ['舒展身心，饱览难忘景致', '心ほどける空間、心に残る眺め', '여유로운 공간과 기억에 남을 전망', 'مساحة للاسترخاء وإطلالة لا تُنسى'],
    'Open the doors to your own pool': ['推门即享私人泳池', '扉を開けば、プライベートプール', '문을 열면 나만의 수영장이', 'افتح الأبواب على مسبحك الخاص'],
    'Space to gather and retreat': ['共享时光，也享私密', '集いとくつろぎの空間', '함께 모이고 편히 쉴 수 있는 공간', 'مساحة للاجتماع والاسترخاء'],
    'Room for everyone, with a pool to call your own': ['宽敞容纳每位宾客，畅享专属泳池', 'みんなで過ごせる広さと、自分たちだけのプール', '모두를 위한 공간과 전용 수영장', 'مساحة للجميع ومسبح خاص بكم'],
    'A residential feel for longer stays': ['居家氛围，适合悠长假期', '長期滞在にも心地よいレジデンススタイル', '장기 투숙에 어울리는 레지던스 분위기', 'أجواء سكنية مريحة للإقامات الطويلة'],
    'The Ning Resort among Ubud rice fields': ['乌布稻田间的 The Ning Resort', 'ウブドの棚田に佇むThe Ning Resort', '우붓 논 사이에 자리한 The Ning Resort', 'The Ning Resort بين حقول أرز أوبود'],
    'A suite at The Ning Resort': ['The Ning Resort 套房', 'The Ning Resortのスイート', 'The Ning Resort 스위트룸', 'جناح في The Ning Resort'],
    'Private plunge pool villa at The Ning': ['The Ning 私人小型泳池别墅', 'The Ningのプライベートプランジプールヴィラ', 'The Ning 전용 플런지 풀 빌라', 'فيلا بمسبح غطس خاص في The Ning'],
    'A jungle-view pool villa at The Ning': ['The Ning 丛林景观泳池别墅', 'The Ningのジャングルビュー・プールヴィラ', 'The Ning 정글 전망 풀빌라', 'فيلا بمسبح وإطلالة على الغابة في The Ning'],
    'Orchid Restaurant at The Ning Resort': ['The Ning Resort 的 Orchid 餐厅', 'The Ning ResortのOrchid Restaurant', 'The Ning Resort의 Orchid 레스토랑', 'مطعم Orchid في The Ning Resort'],
    'Airport & Hotel Transfer': ['机场与酒店接送', '空港・ホテル送迎', '공항 및 호텔 이동', 'النقل من المطار وإلى الفندق'],
    'Private Day Tours': ['私人一日游', 'プライベート日帰りツアー', '프라이빗 일일 투어', 'جولات يومية خاصة'],
    'Island Exploration': ['探索岛屿', '島内観光', '섬 탐험', 'استكشاف الجزيرة'],
    'Family & Group Travel': ['家庭与团体出行', 'ご家族・グループ旅行', '가족 및 단체 여행', 'رحلات العائلات والمجموعات'],
    'Hidden Gems & Local Experiences': ['秘境与当地体验', '穴場スポットとローカル体験', '숨은 명소 및 현지 체험', 'جواهر خفية وتجارب محلية'],
    'Flexible Itinerary Planning': ['灵活行程规划', '柔軟な旅程づくり', '유연한 일정 계획', 'تخطيط مرن لبرنامج الرحلة'],
    'Arrival and departure transfers in clean, comfortable vehicles with professional and friendly drivers.': ['由专业友善的司机驾驶整洁舒适的车辆，为您提供接送服务。', '清潔で快適な車両と、親切でプロフェッショナルなドライバーが空港送迎を承ります。', '전문적이고 친절한 운전기사가 깨끗하고 편안한 차량으로 픽업 및 샌딩 서비스를 제공합니다.', 'خدمات نقل الوصول والمغادرة بسيارات نظيفة ومريحة وسائقين محترفين وودودين.'],
    'Enjoy curated adventures to Ubud’s rice fields, temples, waterfalls, villages and scenic viewpoints.': ['精选旅程带您探访乌布的稻田、寺庙、瀑布、村落与观景胜地。', 'ウブドの棚田や寺院、滝、村々、絶景スポットを巡る厳選ツアーをお楽しみください。', '우붓의 논과 사원, 폭포, 마을, 전망 명소를 둘러보는 엄선된 여행을 즐겨보세요.', 'استمتع برحلات مختارة إلى حقول الأرز والمعابد والشلالات والقرى والإطلالات الخلابة في أوبود.'],
    'Discover Bali beyond the usual route with flexible itineraries designed around your interests and schedule.': ['按照您的兴趣与时间灵活安排行程，探索常规路线之外的巴厘岛。', '興味やスケジュールに合わせた柔軟な旅程で、定番ルートの先にあるバリを発見しましょう。', '관심사와 일정에 맞춘 유연한 여행으로 익숙한 경로 너머의 발리를 만나보세요.', 'اكتشف بالي خارج المسارات المعتادة عبر برامج مرنة تناسب اهتماماتك وجدولك.'],
    'Comfortable transportation for couples, families and small groups looking for a smooth travel experience.': ['为情侣、家庭与小团体提供舒适交通，让旅程轻松顺畅。', 'カップルやご家族、小グループに快適な移動をご用意し、スムーズな旅をサポートします。', '커플과 가족, 소규모 그룹을 위한 편안한 이동으로 순조로운 여행을 도와드립니다.', 'تنقل مريح للأزواج والعائلات والمجموعات الصغيرة لتجربة سفر سلسة.'],
    'Go beyond tourist hotspots and enjoy Bali’s authentic culture, nature and local charm with expert guidance.': ['在专业向导陪伴下，走出热门景点，感受巴厘岛真实的文化、自然与当地魅力。', '専門ガイドとともに観光名所の先へ。バリの本物の文化や自然、地域の魅力に触れてください。', '전문 안내와 함께 유명 관광지를 넘어 발리의 진정한 문화와 자연, 현지의 매력을 만나보세요.', 'تجاوز الوجهات السياحية المعتادة واكتشف ثقافة بالي الأصيلة وطبيعتها وسحرها المحلي برفقة خبراء.'],
    'Personalize your trip with recommended stops, timing and route suggestions made for convenience and comfort.': ['为您推荐合适的停靠点、时间安排与路线，让行程更加舒适便捷。', 'おすすめの立ち寄り先や時間配分、ルートをご提案し、快適で便利な旅をお手伝いします。', '추천 방문지와 시간, 경로를 안내해 편리하고 편안한 여행을 맞춤 구성해 드립니다.', 'خصص رحلتك بتوصيات للمحطات والتوقيت والمسارات بما يضمن الراحة والسهولة.'],
    'PRIVATE TRAVEL, PERSONALIZED': ['专属定制出行', 'あなただけのプライベートな旅', '나만을 위한 프라이빗 여행', 'رحلات خاصة مصممة لك'],
    'Transport &': ['交通与', '送迎・', '교통 및', 'النقل و'],
    'Tour Service': ['旅游服务', 'ツアーサービス', '투어 서비스', 'الجولات السياحية'],
    'Explore Bali with effortless comfort, well-planned itineraries, and friendly expert guidance from the moment you arrive.': ['从抵达的那一刻起，便以轻松舒适的方式探索巴厘岛，享受周到行程与友善专业的指引。', '到着した瞬間から、快適な移動、綿密な旅程、親しみやすい専門スタッフの案内でバリを満喫できます。', '도착하는 순간부터 편안한 이동과 잘 짜인 일정, 친절하고 전문적인 안내로 발리를 둘러보세요.', 'اكتشف بالي براحة وسهولة، مع برامج مدروسة وإرشاد ودود من الخبراء منذ لحظة وصولك.'],
    'YOUR JOURNEY, YOUR WAY': ['开启属于您的旅程', 'あなたらしい旅を', '나만의 방식으로 떠나는 여행', 'رحلتك على طريقتك'],
    'Discover Bali with comfort,': ['舒适探索巴厘岛，', '快適にバリを巡り、', '편안하게 발리를 만나고,', 'اكتشف بالي براحة،'],
    'style and peace of mind.': ['安心自在。', '自分らしい旅を。', '스타일과 여유를 누리세요.', 'بأسلوب وراحة بال.'],
    'From Ubud’s green terraces and sacred temples to Bali’s hidden beaches and cultural treasures, our transport and tour service is designed to help you explore the island at your own pace. Whether you need a private transfer, a day trip or a fully tailored itinerary, we make every journey smooth, memorable and stress-free.': ['从乌布翠绿的梯田与神圣寺庙，到巴厘岛隐秘的海滩与文化瑰宝，我们的交通与旅游服务让您按照自己的节奏探索岛屿。无论是私人接送、一日游还是量身定制的行程，我们都让每段旅程顺畅、难忘、无忧。', 'ウブドの緑豊かな棚田や神聖な寺院から、バリの隠れたビーチや文化遺産まで。送迎・ツアーサービスで、自分のペースで島を巡りませんか。プライベート送迎、日帰り旅行、オーダーメイドの旅程まで、快適で思い出深く、ストレスのない旅をお手伝いします。', '우붓의 푸른 계단식 논과 신성한 사원부터 발리의 숨은 해변과 문화유산까지, 교통 및 투어 서비스로 자신만의 속도에 맞춰 섬을 둘러보세요. 프라이빗 이동, 당일 여행, 맞춤 일정 등 모든 여정을 편안하고 기억에 남도록 도와드립니다.', 'من مدرجات أوبود الخضراء ومعابدها المقدسة إلى شواطئ بالي الخفية وكنوزها الثقافية، صُممت خدمات النقل والجولات لتستكشف الجزيرة على إيقاعك. سواء احتجت إلى نقل خاص أو رحلة ليوم واحد أو برنامج مصمم بالكامل لك، نجعل كل رحلة سلسة ولا تُنسى وخالية من التوتر.'],
    'WHY CHOOSE US': ['为何选择我们', '選ばれる理由', '저희를 선택해야 하는 이유', 'لماذا تختارنا'],
    'Thoughtful service,': ['贴心服务，', '心を込めたサービスを、', '세심한 서비스,', 'خدمة مدروسة،'],
    'crafted for your trip.': ['为您的旅程精心打造。', '旅に合わせてご用意します。', '여행에 맞춰 준비합니다.', 'مصممة خصيصًا لرحلتك.'],
    'We combine reliable private transportation, local insight and flexible planning to create a Bali experience that feels effortless. Enjoy punctual pickups, comfortable vehicles and personalized itineraries whether you’re exploring Ubud, the coast or the island’s hidden corners.': ['我们结合可靠的私人交通、当地见闻与灵活规划，为您打造轻松自在的巴厘岛体验。无论探索乌布、海岸还是岛上秘境，都可享受准时接送、舒适车辆与个性化行程。', '信頼できるプライベート送迎、地元ならではの知識、柔軟なプランニングを組み合わせ、快適なバリの旅を実現します。ウブドや海岸、島の隠れた名所へも、時間厳守の送迎と快適な車両、オーダーメイドの旅程でご案内します。', '믿을 수 있는 프라이빗 교통편과 현지 정보, 유연한 계획으로 편안한 발리 여행을 만들어 드립니다. 우붓과 해안, 숨은 명소 어디든 정시 픽업과 편안한 차량, 맞춤 일정으로 안내합니다.', 'نجمع بين النقل الخاص الموثوق والمعرفة المحلية والتخطيط المرن لنمنحك تجربة بالي سهلة ومريحة. استمتع بالالتزام بالمواعيد والمركبات المريحة والبرامج الشخصية سواء كنت تستكشف أوبود أو الساحل أو زوايا الجزيرة الخفية.'],
    'READY TO EXPLORE BALI?': ['准备好探索巴厘岛了吗？', 'バリを巡る準備はできましたか？', '발리를 둘러볼 준비가 되셨나요?', 'هل أنت مستعد لاكتشاف بالي؟'],
    'Let us take': ['让我们带您', '私たちが', '저희가 모셔다드릴게요', 'دعنا نأخذك'],
    'you there.': ['前往目的地。', '目的地までご案内します。', '목적지까지 안내하겠습니다.', 'إلى وجهتك.'],
    'A BEAUTIFUL PLACE TO BEGIN': ['开启美好篇章的理想之地', '新たな始まりにふさわしい場所', '아름다운 시작을 위한 곳', 'مكان جميل لبداية جديدة'],
    'Made for': ['为您的', 'あなたの', '당신의 순간을', 'صُمم من أجل'],
    'your moment.': ['重要时刻而设。', '大切な瞬間のために。', '위해 준비되었습니다.', 'لحظتك.'],
    'An intimate celebration, a joyful gathering, a few days together in Bali. We bring the setting and thoughtful details; you bring the people who matter.': ['在巴厘岛举办温馨庆典、欢欣聚会，或与挚爱相伴数日。我们用心准备场地与细节，您只需邀请重要的人。', '親しい方とのお祝いも、喜びを分かち合う集いも、バリで過ごす数日間も。会場と細やかな演出は私たちにお任せください。大切な方々をお迎えください。', '발리에서 소중한 사람들과 함께하는 아늑한 축하와 즐거운 모임, 며칠간의 특별한 시간을 준비해 보세요. 장소와 세심한 디테일은 저희가, 소중한 사람들은 여러분이 준비해 주세요.', 'احتفلوا بمناسبة حميمة أو لقاء مبهج أو اقضوا بضعة أيام معًا في بالي. نهتم بالمكان والتفاصيل المدروسة، وأنتم تدعون الأشخاص الأعزاء.'],
    'YOUR CELEBRATION, YOUR WAY': ['以您的方式庆祝', 'あなたらしいお祝いを', '나만의 방식으로 축하하세요', 'احتفالك على طريقتك'],
    'Gather close.': ['相聚一堂。', '大切な人と集い。', '가까이 모여.', 'اجتمعوا بالقرب.'],
    'Stay awhile.': ['悠然共度。', 'ゆっくりお過ごしください。', '여유롭게 머무세요.', 'وأمضوا وقتًا جميلًا.'],
    'Trade the ballroom for a garden, the rush for a pause. Our team will help bring your ideas to life with care and a sense of place.': ['以花园取代宴会厅，以从容取代匆忙。我们的团队将用心结合当地风情，协助您实现理想中的庆典。', '宴会場ではなく庭園で、慌ただしさではなく穏やかな時間を。土地の魅力と心配りを添えて、スタッフがお二人のアイデアを形にします。', '연회장 대신 정원에서, 분주함 대신 여유를 즐겨보세요. 현지의 분위기와 세심한 배려로 여러분의 아이디어를 실현하도록 도와드립니다.', 'استبدل قاعة الاحتفالات بحديقة، والعجلة بلحظة هادئة. سيساعدكم فريقنا على تحقيق أفكاركم بعناية وروح المكان.'],
    'INTIMATE CELEBRATIONS  ·  BESPOKE GATHERINGS': ['温馨庆典 · 专属聚会', '心温まる祝宴 · オーダーメイドの集い', '아늑한 축하 · 맞춤 모임', 'احتفالات حميمة · لقاءات مصممة خصيصًا'],
    'SOME DAYS STAY WITH YOU': ['有些日子，令人久久难忘', '心に残り続ける一日', '오래 기억에 남는 날', 'أيام تبقى في الذاكرة'],
    'Let’s make it': ['让我们一起把这一天', '一緒に', '함께', 'لنجعل هذا اليوم'],
    'one of those days.': ['变成难忘的一天。', '忘れられない日にしましょう。', '잊지 못할 날로 만들어 보세요.', 'واحدًا من تلك الأيام المميزة.'],
    'REST. RESET. RECONNECT.': ['休憩 · 焕新 · 重新连接', '休む。整える。つながる。', '쉬고, 회복하고, 다시 연결하세요.', 'استرح. جدد نشاطك. استعد توازنك.'],
    'Make room': ['留些空间', '心に余白を', '여유를 만들어', 'اترك مساحة'],
    'to feel good.': ['感受美好。', '心地よさを感じて。', '기분 좋게.', 'للشعور بالراحة.'],
    'A restorative treatment, a morning stretch or a quiet moment in the pool. Our wellness spaces invite you to come back to yourself, one breath at a time.': ['焕活身心的护理、清晨舒展，或在泳池畔享受片刻静谧。度假村的康养空间邀您随着每一次呼吸，重新找回自己。', '心身を整えるトリートメントや朝のストレッチ、プールサイドでの静かなひととき。ウェルネス空間で、一呼吸ごとに自分らしさを取り戻しましょう。', '회복을 돕는 트리트먼트와 아침 스트레칭, 수영장에서의 고요한 시간까지. 웰니스 공간에서 한 호흡씩 자신을 되찾아 보세요.', 'علاج يعيد إليك النشاط، أو تمارين صباحية، أو لحظة هادئة بجانب المسبح. تدعوك مرافق العافية للعودة إلى ذاتك مع كل نفس.'],
    'FRANGIPANI SPA': ['鸡蛋花水疗中心', 'フランジパニ・スパ', '프랜지파니 스파', 'سبا فرانجيباني'],
    'Let go a little.': ['稍稍放下烦忧。', '少し肩の力を抜いて。', '잠시 내려놓으세요.', 'تخلّص من بعض التوتر.'],
    'Time-honoured rituals and thoughtful treatments invite you to slow down and settle in.': ['传承悠久的仪式与贴心护理，邀您放慢脚步，安心享受。', '受け継がれてきた儀式と丁寧なトリートメントで、ゆったりとおくつろぎください。', '오랜 전통의 의식과 세심한 케어로 여유롭게 쉬어보세요.', 'طقوس عريقة وعلاجات مدروسة تدعوك إلى التمهّل والاستقرار.'],
    'Explore spa treatments': ['探索水疗护理', 'スパトリートメントを見る', '스파 트리트먼트 둘러보기', 'استكشف علاجات السبا'],
    'YOGA SHALA': ['瑜伽馆', 'ヨガシャラ', '요가 샬라', 'قاعة اليوغا'],
    'Find your centre.': ['找回内在平衡。', '心の中心を見つけて。', '내면의 중심을 찾으세요.', 'اعثر على توازنك الداخلي.'],
    'Move, breathe and arrive in the present with mindful practice in a tranquil open-air space.': ['在宁静的开放空间中专注练习，通过动作与呼吸回到当下。', '静かな屋外空間で意識的に体を動かし、呼吸を整え、今この瞬間に心を向けましょう。', '고요한 야외 공간에서 마음을 담아 움직이고 호흡하며 현재에 집중해 보세요.', 'تحرك وتنفس وكن حاضرًا من خلال ممارسة واعية في مساحة هادئة ومفتوحة.'],
    'Find your practice': ['探索适合您的练习', '自分に合う練習を見つける', '나에게 맞는 수련 찾기', 'اكتشف الممارسة المناسبة لك'],
    'LOTUS GYM': ['莲花健身房', 'ロータスジム', '로터스 짐', 'نادي لوتس الرياضي'],
    'Move your way.': ['自在活动。', '自分らしく体を動かして。', '나만의 방식으로 움직이세요.', 'تحرك بطريقتك.'],
    'A considered space for the familiar rituals that help you feel your best, even away from home.': ['即使身在异乡，也能在精心规划的空间中延续熟悉的日常，保持良好状态。', '旅先でも心地よく過ごせるよう、いつもの習慣を続けられる空間をご用意しました。', '집을 떠나서도 익숙한 루틴을 이어가며 최상의 컨디션을 유지할 수 있는 공간입니다.', 'مساحة مدروسة تتيح لك مواصلة عاداتك المألوفة والشعور بأفضل حال حتى بعيدًا عن المنزل.'],
    'TAKE A DEEPER BREATH': ['深呼吸，放松身心', '深く息を吸って', '깊게 숨을 쉬어보세요', 'تنفّس بعمق'],
    'Come away': ['离开时，', 'お帰りの際には', '돌아가실 때는', 'غادر وأنت'],
    'feeling lighter.': ['心境更加轻盈。', '心が軽くなっていますように。', '한결 가벼워져 있기를.', 'تشعر بخفة أكبر.'],
    'MAKE IT A LITTLE MORE YOURS': ['让假期更合您心意', 'あなたらしさを添えて', '나만의 특별함을 더하세요', 'اجعلها أقرب إلى ذوقك'],
    'Good things': ['美好时光', '素敵な時間を', '좋은 순간을', 'أوقات جميلة'],
    'come together.': ['由此汇聚。', '一緒に。', '함께하세요.', 'تجتمع هنا.'],
    'Pair a slower stay with the details that make it unforgettable. Speak with our team to shape a stay around you.': ['悠然入住，再添贴心细节，让假期令人难忘。欢迎与我们的团队联系，为您打造专属住宿体验。', 'ゆったりとした滞在に、忘れられない思い出を彩る心配りを。スタッフにご相談いただき、お客様に合わせた滞在をお作りします。', '여유로운 숙박에 잊지 못할 디테일을 더해보세요. 직원과 상담해 나에게 꼭 맞는 일정을 만들어 보세요.', 'اجمع بين إقامة هادئة وتفاصيل تجعلها لا تُنسى. تحدث مع فريقنا لتصميم إقامة تناسبك.'],
    'Stay a little longer': ['多住一会儿', 'もう少し長く滞在', '조금 더 오래 머물기', 'أقم مدة أطول قليلًا'],
    'Settle into the rhythm of Ubud with more time to unwind and discover the island.': ['多留些时间放松身心，融入乌布的节奏，探索这座岛屿。', 'ゆっくりとくつろぎながら島を巡る時間を増やし、ウブドのリズムに身を委ねましょう。', '여유롭게 쉬고 섬을 둘러볼 시간을 더해 우붓의 리듬에 빠져보세요.', 'انسجم مع إيقاع أوبود وامنح نفسك وقتًا أطول للاسترخاء واكتشاف الجزيرة.'],
    'TIME FOR TWO': ['双人时光', '二人の時間', '둘만의 시간', 'وقت لشخصين'],
    'A softer kind of escape': ['温柔惬意的假期', '心ほどける休日', '부드러운 휴식', 'عطلة أكثر هدوءًا'],
    'Slow mornings, considered wellness and time together in a private pool villa.': ['在私人泳池别墅中，享受悠闲清晨、贴心康养与相伴时光。', 'プライベートプール付きヴィラで、ゆったりとした朝、心身を整える時間、二人のひとときを。', '전용 수영장 빌라에서 느긋한 아침과 세심한 웰니스, 함께하는 시간을 누리세요.', 'صباحات هادئة وعافية مدروسة ووقت مشترك في فيلا بمسبح خاص.'],
    'A TASTE OF UBUD': ['品味乌布', 'ウブドを味わう', '우붓의 맛', 'نكهة أوبود'],
    'Stay for the feeling': ['为美好感受而停留', '心に残るひとときを', '그 느낌을 위해 머무르세요', 'أقم من أجل هذا الشعور'],
    'Make space for generous flavours and the little rituals that make a holiday.': ['尽情品味丰盛佳肴与度假中的小小仪式，为美好时光留出空间。', '豊かな味わいと、休日を彩る小さな習慣を楽しむ時間をお過ごしください。', '풍성한 맛과 휴가를 특별하게 만드는 작은 의식을 즐길 여유를 가져보세요.', 'خصص وقتًا للنكهات الغنية والطقوس الصغيرة التي تجعل العطلة مميزة.'],
    'YOUR NEXT CHAPTER IN BALI': ['在巴厘岛开启下一段旅程', 'バリで始まる新たな章', '발리에서 시작하는 새로운 이야기', 'فصلك القادم في بالي'],
    'Let the island': ['让这座岛', '島の', '섬이', 'دع الجزيرة'],
    'surprise you.': ['带给您惊喜。', '思いがけない魅力を見せてくれます。', '여러분을 놀라게 하도록 하세요.', 'تفاجئك.'],
    'Make room for discovery.': ['为探索留些空间。', '新しい発見のための余白を。', '새로운 발견을 위한 여유를 가지세요.', 'اترك مساحة للاكتشاف.'],
    'GO A LITTLE DEEPER': ['深入感受乌布', 'もう少し深く知る', '조금 더 깊이 경험해 보세요', 'اكتشف المزيد'],
    'Follow what': ['追随内心', '心が動く方へ', '마음이 이끄는 곳으로', 'اتبع ما'],
    'moves you.': ['所向。', '進みましょう。', '향하세요.', 'يلهمك.'],
    'From a morning among emerald rice terraces to the colour and craft of a village ceremony, Ubud rewards a slower, more curious kind of travel.': ['从清晨漫步翠绿梯田，到感受村庄庆典的色彩与工艺，乌布值得您放慢脚步、保持好奇，细细探索。', '朝のエメラルド色の棚田から、村の祭礼に息づく色彩や工芸まで。ウブドでは、ゆっくりと好奇心を持って旅するほど多くの発見があります。', '아침의 푸른 계단식 논부터 마을 의식의 색채와 공예까지, 우붓은 천천히 호기심을 갖고 여행할수록 더 많은 매력을 보여줍니다.', 'من صباح بين مدرجات الأرز الزمردية إلى ألوان وحرف احتفالات القرى، تكافئك أوبود برحلة أبطأ وأكثر فضولًا.'],
    'CULTURE & CRAFT': ['文化与工艺', '文化と手仕事', '문화와 공예', 'الثقافة والحرف'],
    'Stories in every detail.': ['细节之中，皆有故事。', '一つひとつの細部に物語が。', '모든 디테일에 이야기가 있습니다.', 'حكاية في كل تفصيل.'],
    'Discover the temples, makers and living traditions woven into everyday Balinese life.': ['探访寺庙、手工艺人，以及融入巴厘岛日常生活的传统文化。', '寺院や作り手、バリの日常に息づく伝統に触れてみてください。', '발리의 일상에 스며든 사원과 장인, 살아 있는 전통을 만나보세요.', 'اكتشف المعابد والحرفيين والتقاليد الحية المتجذرة في الحياة اليومية في بالي.'],
    'NATURE & ADVENTURE': ['自然与探险', '自然と冒険', '자연과 모험', 'الطبيعة والمغامرة'],
    'Take the scenic way.': ['沿途饱览美景。', '景色を楽しみながら。', '경치 좋은 길을 따라가세요.', 'اسلك الطريق ذي المناظر الخلابة.'],
    'Follow quiet paths through the island’s green heart and see where the day takes you.': ['沿着静谧小径走进岛屿葱郁的腹地，随心开启一天的探索。', '島の緑豊かな中心を静かな小道で巡り、その日の気分に身を委ねてみましょう。', '섬의 푸른 중심부를 지나는 한적한 길을 따라가며 하루의 여정을 즐겨보세요.', 'اتبع المسارات الهادئة في قلب الجزيرة الأخضر ودع يومك يقودك إلى وجهتك.'],
    'WELLNESS & RITUAL': ['康养与仪式', 'ウェルネスと儀式', '웰니스와 의식', 'العافية والطقوس'],
    'Find your own pace.': ['找到自己的节奏。', '自分のペースを見つけて。', '나만의 속도를 찾으세요.', 'اعثر على إيقاعك الخاص.'],
    'Make time for mindful movement, a restoring spa ritual or simply a little stillness.': ['留些时间进行专注练习、体验焕活身心的水疗仪式，或只是静静休息。', '意識的な運動や心身を癒すスパの儀式、あるいは静かなひとときのために時間をお取りください。', '마음 챙김 운동과 회복을 돕는 스파 의식, 또는 고요한 휴식을 위한 시간을 가져보세요.', 'خصص وقتًا للحركة الواعية أو طقوس السبا المجددة للنشاط أو لمجرد الهدوء.'],
    'THE ISLAND HAS ITS OWN PLANS': ['岛屿自有安排', '島には島の楽しみ方が', '섬에는 섬만의 계획이 있습니다', 'للجزيرة خططها الخاصة'],
    'Leave space': ['为发现', '発見のための', '발견을 위한', 'اترك مساحة'],
    'for discovery.': ['留些空间。', '余白を残して。', '여유를 남겨두세요.', 'للاكتشاف.'],
    'BEST RESTAURANT IN UBUD BALI': ['巴厘岛乌布人气餐厅', 'バリ島ウブドのレストラン', '발리 우붓 최고의 레스토랑', 'أفضل مطعم في أوبود، بالي'],
    'Flavours to': ['令人回味的', '心に残る', '오래 기억될', 'نكهات تستحق'],
    'linger over.': ['风味。', '味わいを。', '풍미를 음미하세요.', 'أن تتذوقها.'],
    'An easy breakfast that turns into a long lunch. A cocktail as the light changes. At Orchid Restaurant and Rose Bar, each gathering has its own pace.': ['从悠闲早餐延续至漫长午餐，伴着光影变化啜饮一杯鸡尾酒。在 Orchid 餐厅与 Rose 酒吧，每次相聚都有自己的节奏。', 'ゆったりとした朝食が長いランチへ。光の移ろいとともにカクテルを。Orchid RestaurantとRose Barでは、集いの一つひとつが自分らしいペースで流れます。', '여유로운 아침 식사가 긴 점심으로 이어지고, 빛이 바뀌는 시간에 칵테일 한 잔을 즐겨보세요. Orchid 레스토랑과 Rose 바에서는 모든 모임이 각자의 속도로 펼쳐집니다.', 'إفطار هادئ يمتد إلى غداء طويل، وكوكتيل مع تغيّر الضوء. في مطعم Orchid وبار Rose، لكل لقاء إيقاعه الخاص.'],
    'Orchid Restaurant & Rose Bar is a best restaurant in Ubud Bali offering a casual dining convenience with the warm ambiance of a modern nature architect. Located in the dawn area, promises the best view  of the resort while you enjoy a wonderful Forest Valley View of signature Asian & Western cuisines.': ['Orchid 餐厅与 Rose 酒吧坐落于乌布，以轻松便利的用餐体验和融入自然的现代设计营造温暖氛围。餐厅位于度假村高处，视野开阔，您可一边欣赏森林山谷美景，一边品尝招牌亚洲与西式佳肴。', 'Orchid Restaurant & Rose Barはウブドに位置し、自然を取り入れたモダンな建築と温かな雰囲気の中で、気軽にお食事をお楽しみいただけます。リゾートの高台にあり、森と渓谷の眺めとともに、アジア料理や西洋料理のシグネチャーメニューをご堪能ください。', 'Orchid 레스토랑 & Rose 바는 우붓에 자리한 레스토랑으로, 자연을 담은 현대적 건축과 따뜻한 분위기에서 편안한 식사를 제공합니다. 리조트의 높은 곳에 위치해 숲과 계곡의 전망을 즐기며 대표 아시아 및 서양 요리를 맛볼 수 있습니다.', 'يقع مطعم Orchid وبار Rose في أوبود، ويقدمان تجربة طعام مريحة في أجواء دافئة وبتصميم عصري مستوحى من الطبيعة. ويطلان من موقع مرتفع في المنتجع على مشهد الغابة والوادي، حيث تستمتع بأطباق آسيوية وغربية مميزة.'],
    'ORCHID RESTAURANT': ['ORCHID 餐厅', 'ORCHID RESTAURANT', 'ORCHID 레스토랑', 'مطعم ORCHID'],
    'Rooted in': ['扎根于', '心に根ざす', '순간에 뿌리내린', 'متجذر في'],
    'the moment.': ['此刻。', '今この瞬間。', '순간.', 'اللحظة.'],
    'Colourful island ingredients come together in a relaxed setting made for gathering.': ['缤纷的岛屿食材汇聚于轻松舒适的空间，适合相聚共享。', '島の彩り豊かな食材を、集いにぴったりのくつろいだ空間でお楽しみください。', '다채로운 섬의 식재료가 모임에 어울리는 편안한 공간에서 어우러집니다.', 'تجتمع مكونات الجزيرة الملونة في أجواء مريحة تناسب اللقاءات.'],
    'As a best restaurant in Ubud Bali, Orchid Restaurant is conveniently located Adjacent to the main swimming pool, Orchid Restaurant offers dining inside and Iris dome. The morning sun heralds an extensive breakfast buffet and a la carte specialties to perfectly pair with the exhilarating Forest Valley Views.': ['Orchid 餐厅邻近主泳池，设有室内用餐区与 Iris Dome。清晨阳光洒落时，您可享用丰盛的早餐自助与单点佳肴，同时饱览令人心旷神怡的森林山谷景色。', 'Orchid Restaurantはメインプールのすぐそばにあり、屋内席とIrisドーム席をご用意しています。朝の光の中、豊富な朝食ビュッフェやアラカルト料理を、森と渓谷の爽快な眺めとともにお楽しみください。', 'Orchid 레스토랑은 메인 수영장 옆에 있으며 실내 좌석과 Iris 돔을 갖추고 있습니다. 아침 햇살 아래 풍성한 조식 뷔페와 단품 요리를 숲과 계곡의 탁 트인 전망과 함께 즐겨보세요.', 'يقع مطعم Orchid بجوار المسبح الرئيسي، ويضم جلسات داخلية وقبة Iris. استمتع ببوفيه إفطار متنوع وأطباق حسب الطلب مع شروق الشمس وإطلالات رائعة على الغابة والوادي.'],
    'BREAKFAST  ·  LUNCH  ·  DINNER': ['早餐 · 午餐 · 晚餐', '朝食 · ランチ · ディナー', '조식 · 점심 · 저녁', 'الإفطار · الغداء · العشاء'],
    'ROSE BAR': ['ROSE 酒吧', 'ROSE BAR', 'ROSE 바', 'بار ROSE'],
    'Where flavour': ['风味与宁静', '味わいと', '풍미와 평온이', 'حيث تلتقي النكهة'],
    'meets serenity.': ['相遇之处。', '静けさが出会う場所。', '만나는 곳.', 'بالسكينة.'],
    'Discover a dining experience where exceptional flavours meet the tranquillity of Ubud. At Rose Bar, every dish and refreshing sip is thoughtfully crafted to celebrate the pleasure of good food, meaningful connections, and unhurried moments. Surrounded by the natural beauty of Bali, Rose Bar invites you to slow down, savour every taste, and embrace the serenity of the moment.': ['在 Rose 酒吧，卓越风味与乌布的宁静相遇。每道佳肴与清爽饮品都经过精心呈现，让您尽享美食、真挚相聚与悠然时光。置身巴厘岛自然美景之中，放慢脚步，细品每一口，拥抱此刻的宁静。', 'Rose Barで、ウブドの静けさと格別な味わいが出会うダイニングをご体験ください。料理や爽やかな一杯は、食の喜び、大切な人とのつながり、ゆったりとした時間を楽しめるよう丁寧にご用意しています。バリの自然美に包まれて、ゆっくり味わい、今この瞬間の静けさをお楽しみください。', 'Rose 바에서 뛰어난 풍미와 우붓의 평온함이 어우러진 다이닝을 경험해 보세요. 모든 요리와 음료는 좋은 음식과 의미 있는 만남, 여유로운 순간의 즐거움을 위해 정성껏 준비됩니다. 발리의 자연에 둘러싸여 천천히 음미하며 지금 이 순간의 평온함을 느껴보세요.', 'اكتشف تجربة طعام تلتقي فيها النكهات الاستثنائية بهدوء أوبود. في بار Rose، يُحضّر كل طبق ومشروب منعش بعناية للاحتفاء بمتعة الطعام واللقاءات الهادفة واللحظات الهادئة. وسط جمال بالي الطبيعي، تمهّل وتذوق كل نكهة واستمتع بسكينة اللحظة.'],
    'A place to gather, indulge, and linger a little longer.': ['相聚、尽兴、悠然多留片刻的好地方。', '集い、味わい、もう少し長く過ごしたくなる場所。', '함께 모여 맛을 즐기며 조금 더 머물고 싶은 곳입니다.', 'مكان للقاء والاستمتاع والبقاء لبعض الوقت.'],
    'Savour exquisite flavours and thoughtfully crafted dishes in the serene tropical setting of Orchid Restaurant & Rose Bar.': ['在宁静的热带氛围中，于 Orchid 餐厅与 Rose 酒吧品尝精致风味与匠心佳肴。', '穏やかな熱帯の空間に佇むOrchid Restaurant & Rose Barで、洗練された味わいと丁寧に仕立てた料理をご堪能ください。', '고요한 열대 분위기의 Orchid 레스토랑 & Rose 바에서 정교한 풍미와 정성껏 만든 요리를 즐겨보세요.', 'تذوق النكهات الراقية والأطباق المُحضرة بعناية في الأجواء الاستوائية الهادئة لمطعم Orchid وبار Rose.'],
    'Romantic Dinner': ['浪漫晚餐', 'ロマンティックディナー', '로맨틱 디너', 'عشاء رومانسي'],
    'Floating Breakfast & Lunch': ['漂浮早餐与午餐', 'フローティングブレックファスト＆ランチ', '플로팅 조식 및 점심', 'إفطار وغداء عائمان'],
    'Happy Hour': ['欢乐时光', 'ハッピーアワー', '해피아워', 'ساعة التخفيضات'],
    'Buy a Bucket of 4 Bottles of Prost Beer': ['购买一桶 Prost 啤酒（4瓶）', 'Prostビール4本入りバケツ', 'Prost 맥주 4병 버킷', 'دلو يضم 4 زجاجات من بيرة بروست'],
    'Balinese Cooking Class': ['巴厘岛烹饪课程', 'バリ料理教室', '발리 요리 클래스', 'درس طهي بالي'],
    'Cocktail Class (Get 3 Glass Cocktails)': ['鸡尾酒课程（含3杯鸡尾酒）', 'カクテル教室（カクテル3杯付き）', '칵테일 클래스(칵테일 3잔 제공)', 'درس كوكتيلات (يشمل 3 أكواب)'],
    'IDR 1,819,000 ++ / Couple': ['1,819,000 印尼盾++ / 每对', '1,819,000ルピア++ / 2名様', 'IDR 1,819,000++ / 커플', '1,819,000 روبية إندونيسية++ / للزوجين'],
    'Floating Breakfast · IDR 375,000 ++ / Boat': ['漂浮早餐 · 375,000 印尼盾++ / 每船', 'フローティングブレックファスト · 375,000ルピア++ / 1台', '플로팅 조식 · IDR 375,000++ / 보트', 'إفطار عائم · 375,000 روبية إندونيسية++ / للقارب'],
    'Floating Lunch · IDR 675,000 ++ / Boat': ['漂浮午餐 · 675,000 印尼盾++ / 每船', 'フローティングランチ · 675,000ルピア++ / 1台', '플로팅 점심 · IDR 675,000++ / 보트', 'غداء عائم · 675,000 روبية إندونيسية++ / للقارب'],
    'IDR 130,000 ++ (Buy 1 Get 2)': ['130,000 印尼盾++（买1赠1）', '130,000ルピア++（1杯購入で2杯）', 'IDR 130,000++ (1개 구매 시 2개 제공)', '130,000 روبية إندونيسية++ (اشترِ واحدًا واحصل على اثنين)'],
    'IDR 200,000 ++ / Bucket': ['200,000 印尼盾++ / 每桶', '200,000ルピア++ / 1バケツ', 'IDR 200,000++ / 버킷', '200,000 روبية إندونيسية++ / الدلو'],
    'IDR 600,000 ++ / Served for 2 Persons': ['600,000 印尼盾++ / 供2人享用', '600,000ルピア++ / 2名様分', 'IDR 600,000++ / 2인 제공', '600,000 روبية إندونيسية++ / تكفي لشخصين'],
    'IDR 300,000 ++ / Person': ['300,000 印尼盾++ / 每人', '300,000ルピア++ / 1名様', 'IDR 300,000++ / 1인', '300,000 روبية إندونيسية++ / للشخص'],
    'Balinese temple framed by tropical trees': ['热带树木环绕的巴厘岛寺庙', '熱帯の木々に囲まれたバリの寺院', '열대 나무에 둘러싸인 발리 사원', 'معبد بالي تحيط به أشجار استوائية'],
    'acommodation in ubud bali': ['巴厘岛乌布住宿', 'バリ島ウブドの宿泊施設', '발리 우붓 숙소', 'إقامة في أوبود، بالي'],
    'Private plunge pool villa in ubud bali': ['巴厘岛乌布私人小型泳池别墅', 'バリ島ウブドのプライベートプランジプールヴィラ', '발리 우붓 전용 플런지 풀 빌라', 'فيلا بمسبح غطس خاص في أوبود، بالي'],
    'Private pool villa in ubud bali': ['巴厘岛乌布私人泳池别墅', 'バリ島ウブドのプライベートプールヴィラ', '발리 우붓 전용 수영장 빌라', 'فيلا بمسبح خاص في أوبود، بالي'],
    'Light-filled two-bedroom villa in ubud bali': ['巴厘岛乌布明亮的两卧室别墅', 'バリ島ウブドの明るい2ベッドルームヴィラ', '발리 우붓의 밝은 침실 2개 빌라', 'فيلا مشرقة بغرفتي نوم في أوبود، بالي'],
    'Residential-style suite two-bedroom in ubud bali': ['巴厘岛乌布两卧室住宅式套房', 'バリ島ウブドの2ベッドルーム・レジデンススイート', '발리 우붓의 침실 2개 레지던스 스위트', 'جناح سكني بغرفتي نوم في أوبود، بالي'],
    'Private villa surrounded by tropical greenery at sunset': ['日落时分被热带绿植环绕的私人别墅', '夕暮れ時、熱帯の緑に囲まれたプライベートヴィラ', '해 질 녘 열대 녹음에 둘러싸인 전용 빌라', 'فيلا خاصة تحيط بها النباتات الاستوائية عند الغروب'],
    'Romantic villa suite with candlelight and a rose': ['烛光与玫瑰点缀的浪漫别墅套房', 'キャンドルとバラが彩るロマンチックなヴィラスイート', '촛불과 장미로 꾸민 로맨틱한 빌라 스위트', 'جناح فيلا رومانسي تزينه الشموع والورود'],
    'Floating breakfast tray on a private pool in Ubud': ['乌布私人泳池上的漂浮早餐托盘', 'ウブドのプライベートプールに浮かぶ朝食トレイ', '우붓 전용 수영장 위에 떠 있는 조식 트레이', 'صينية إفطار عائمة في مسبح خاص بأوبود'],
    'The Ning Resort surrounded by Ubud rice fields': ['乌布稻田环绕的 The Ning Resort', 'ウブドの棚田に囲まれたThe Ning Resort', '우붓 논에 둘러싸인 The Ning Resort', 'The Ning Resort تحيط به حقول أرز أوبود'],
    'Peaceful spa treatment in a warm, natural setting': ['在温暖自然的环境中享受宁静水疗', '温かみのある自然な空間で受ける穏やかなスパトリートメント', '따뜻하고 자연스러운 공간에서 즐기는 편안한 스파 트리트먼트', 'جلسة سبا هادئة في أجواء طبيعية دافئة'],
    'Infinity pool surrounded by Ubud\'s lush greenery': ['乌布葱郁绿意环绕的无边泳池', 'ウブドの豊かな緑に囲まれたインフィニティプール', '우붓의 푸른 녹음에 둘러싸인 인피니티 풀', 'مسبح إنفينيتي تحيط به خضرة أوبود'],
    'Bright, modern gym for a restorative workout': ['明亮现代的健身房，助您焕发活力', 'リフレッシュに最適な明るくモダンなジム', '활력 있는 운동을 위한 밝고 현대적인 피트니스 공간', 'صالة رياضية مشرقة وعصرية لاستعادة النشاط'],
    'Yoga and meditation in a peaceful retreat setting': ['在静谧的度假环境中练习瑜伽与冥想', '静かなリゾート空間で行うヨガと瞑想', '평온한 휴식 공간에서 즐기는 요가와 명상', 'اليوغا والتأمل في أجواء هادئة للاسترخاء'],
    'Suite with warm wood details and soft linen': ['以温润木质细节与柔软亚麻装饰的套房', '温かみのある木の意匠と柔らかなリネンを備えたスイート', '따뜻한 목재 디테일과 부드러운 린넨이 돋보이는 스위트룸', 'جناح بتفاصيل خشبية دافئة وأغطية ناعمة'],
    'Calm contemporary suite interior': ['宁静雅致的现代套房内景', '落ち着いたモダンなスイートの内装', '차분하고 현대적인 스위트룸 인테리어', 'تصميم داخلي هادئ وعصري للجناح'],
    'Private plunge pool surrounded by tropical planting': ['热带绿植环绕的私人小型泳池', '熱帯植物に囲まれたプライベートプランジプール', '열대 식물에 둘러싸인 전용 플런지 풀', 'مسبح غطس خاص تحيط به نباتات استوائية'],
    'Private villa pool overlooking lush greenery': ['可俯瞰葱郁绿景的私人别墅泳池', '豊かな緑を望むプライベートヴィラのプール', '푸른 녹음을 바라보는 전용 빌라 수영장', 'مسبح فيلا خاص يطل على خضرة وارفة'],
    'Private villa lounge opening onto a green garden': ['通向葱郁花园的私人别墅起居室', '緑豊かな庭に続くプライベートヴィラのラウンジ', '푸른 정원으로 이어지는 전용 빌라 라운지', 'صالة فيلا خاصة تفتح على حديقة خضراء'],
    'Light-filled two-bedroom villa': ['明亮通透的两卧室别墅', '光あふれる2ベッドルームヴィラ', '햇살이 가득한 침실 2개 빌라', 'فيلا مشرقة بغرفتي نوم'],
    'Residential-style suite framed by tropical greenery': ['热带绿意环绕的住宅式套房', '熱帯の緑に囲まれたレジデンススイート', '열대 녹음에 둘러싸인 레지던스 스위트', 'جناح سكني تحيط به النباتات الاستوائية'],
    'Private villa pool among tropical plants': ['热带植物环绕的私人别墅泳池', '熱帯植物に囲まれたプライベートヴィラのプール', '열대 식물 사이에 자리한 전용 빌라 수영장', 'مسبح فيلا خاص وسط النباتات الاستوائية'],
    'A relaxing spa treatment': ['舒缓身心的水疗护理', '心身を癒すスパトリートメント', '편안한 스파 트리트먼트', 'جلسة سبا باعثة على الاسترخاء'],
    'An intimate dinner setting': ['温馨私密的晚餐环境', '親密な雰囲気のディナー空間', '아늑하고 오붓한 저녁 식사 공간', 'أجواء عشاء حميمة'],
    'Balinese temple details surrounded by greenery': ['绿意环绕的巴厘岛寺庙细节', '緑に囲まれたバリの寺院の意匠', '푸른 녹음에 둘러싸인 발리 사원의 세부 장식', 'تفاصيل معبد بالي تحيط بها الخضرة'],
    'A peaceful path through tropical countryside': ['穿过热带乡野的宁静小径', '熱帯の田園を抜ける静かな小道', '열대 시골을 가로지르는 평화로운 길', 'طريق هادئ عبر ريف استوائي'],
    'A quiet moment of mindful movement outdoors': ['户外专注舒展身心的宁静时刻', '屋外で心を整えながら体を動かす静かなひととき', '야외에서 마음 챙김 움직임을 즐기는 고요한 순간', 'لحظة هادئة من الحركة الواعية في الهواء الطلق'],
    'Bali coastline and countryside during a private tour': ['私人旅途中欣赏的巴厘岛海岸与乡野', 'プライベートツアーで巡るバリの海岸と田園風景', '프라이빗 투어 중 만나는 발리 해안과 전원 풍경', 'ساحل بالي وريفها خلال جولة خاصة'],
    'An intimate wedding celebration surrounded by nature': ['自然环绕的温馨婚礼庆典', '自然に囲まれた心温まるウェディング', '자연에 둘러싸인 아늑한 결혼 축하 행사', 'احتفال زفاف حميم تحيط به الطبيعة'],
    'Sacred temple architecture in the lush Balinese landscape': ['巴厘岛葱郁景致中的神圣寺庙建筑', 'バリの緑豊かな風景に佇む神聖な寺院建築', '발리의 푸른 풍경 속 신성한 사원 건축물', 'عمارة معبد مقدس وسط طبيعة بالي الخضراء'],
    'A quiet sanctuary in Ubud. Discover private pool villas, thoughtful dining and restorative wellness at The Ning Resort Ubud, Bali.': ['在乌布静谧的度假胜地，探索私人泳池别墅、匠心餐饮与疗愈康养体验。', 'ウブドの静かなサンクチュアリで、プライベートプール付きヴィラ、こだわりのダイニング、心身を癒すウェルネスをご体験ください。', '우붓의 고요한 안식처에서 전용 수영장 빌라와 세심한 다이닝, 회복을 돕는 웰니스를 경험해 보세요.', 'اكتشف ملاذًا هادئًا في أوبود، مع فلل بمسابح خاصة ومطاعم مميزة وتجارب عافية متجددة في The Ning Resort Ubud، بالي.'],
    'Find your place to unwind among the suites and private pool villas at The Ning Resort Ubud.': ['在 The Ning Resort Ubud 的套房与私人泳池别墅中，找到悠然休憩之所。', 'The Ning Resort Ubudのスイートやプライベートプール付きヴィラで、くつろぎのひとときをお過ごしください。', 'The Ning Resort Ubud의 스위트와 전용 수영장 빌라에서 편안한 휴식을 즐겨보세요.', 'اعثر على مكان للاسترخاء بين الأجنحة والفلل ذات المسابح الخاصة في The Ning Resort Ubud.'],
    'Explore considered seasonal offers for your next escape to The Ning Resort Ubud, Bali.': ['探索 The Ning Resort Ubud 的精选季节优惠，计划下一次巴厘岛之旅。', '次のバリ旅行に向けて、The Ning Resort Ubudの季節限定プランをご覧ください。', '다음 발리 여행을 위해 The Ning Resort Ubud의 엄선된 시즌 혜택을 살펴보세요.', 'اكتشف العروض الموسمية المختارة لعطلتك القادمة في The Ning Resort Ubud، بالي.'],
    'Discover thoughtful island dining at Orchid Restaurant and Rose Bar at The Ning Resort Ubud.': ['在 The Ning Resort Ubud 的 Orchid 餐厅与 Rose 酒吧，体验别具匠心的岛屿风味。', 'The Ning Resort UbudのOrchid RestaurantとRose Barで、島の恵みを生かした料理をお楽しみください。', 'The Ning Resort Ubud의 Orchid 레스토랑과 Rose 바에서 세심하게 준비한 섬의 다이닝을 경험해 보세요.', 'اكتشف تجربة طعام مستوحاة من الجزيرة في مطعم Orchid وبار Rose في The Ning Resort Ubud.'],
    'Restore your sense of balance with spa rituals, yoga and mindful movement at The Ning Resort Ubud.': ['在 The Ning Resort Ubud 通过水疗仪式、瑜伽与专注练习，重拾身心平衡。', 'The Ning Resort Ubudで、スパの儀式やヨガ、意識的な動きを通して心身のバランスを整えましょう。', 'The Ning Resort Ubud에서 스파 의식과 요가, 마음 챙김 움직임으로 균형을 되찾아 보세요.', 'استعد توازنك من خلال طقوس السبا واليوغا والحركة الواعية في The Ning Resort Ubud.'],
    'Explore the culture, nature and quiet adventures of Ubud from The Ning Resort Ubud.': ['从 The Ning Resort Ubud 出发，探索乌布的文化、自然与静谧探险。', 'The Ning Resort Ubudを拠点に、ウブドの文化や自然、穏やかな冒険をお楽しみください。', 'The Ning Resort Ubud에서 출발해 우붓의 문화와 자연, 여유로운 모험을 만나보세요.', 'اكتشف ثقافة أوبود وطبيعتها ومغامراتها الهادئة انطلاقًا من The Ning Resort Ubud.'],
    'Private transportation and curated tours in Bali from The Ning Resort Ubud.': ['从 The Ning Resort Ubud 出发，享受巴厘岛私人交通与精选游览服务。', 'The Ning Resort Ubudから、バリ島のプライベート送迎や厳選ツアーをご利用いただけます。', 'The Ning Resort Ubud에서 발리의 프라이빗 이동 서비스와 엄선 투어를 이용해 보세요.', 'خدمات نقل خاصة وجولات مختارة في بالي من The Ning Resort Ubud.'],
    'Celebrate your wedding surrounded by the romance and natural beauty of Ubud at The Ning Resort.': ['在 The Ning Resort 于乌布的浪漫氛围与自然美景中，庆祝您的婚礼。', 'The Ning Resortで、ウブドのロマンチックな雰囲気と自然美に包まれたウェディングを。', 'The Ning Resort에서 우붓의 낭만과 자연의 아름다움에 둘러싸여 결혼을 축하해 보세요.', 'احتفل بزفافك وسط أجواء أوبود الرومانسية وجمالها الطبيعي في The Ning Resort.'],
    'Learn about The Ning Resort Ubud, a calm and considered sanctuary in the heart of Bali.': ['了解 The Ning Resort Ubud——巴厘岛中心宁静而贴心的度假胜地。', 'バリの中心に佇む、穏やかで心配りに満ちたThe Ning Resort Ubudについてご紹介します。', '발리 중심부의 평온하고 세심한 안식처, The Ning Resort Ubud을 만나보세요.', 'تعرف على The Ning Resort Ubud، ملاذ هادئ ومدروس في قلب بالي.'],
    'Discover the Two-Bedroom Suite with Balcony at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的两卧室阳台套房。', 'The Ning Resort Ubudのバルコニー付き2ベッドルームスイートをご覧ください。', 'The Ning Resort Ubud의 발코니가 있는 침실 2개 스위트를 만나보세요.', 'اكتشف الجناح بغرفتي نوم وشرفة في The Ning Resort Ubud.'],
    'Discover the Deluxe Suite with Balcony at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的豪华阳台套房。', 'The Ning Resort Ubudのデラックス・バルコニースイートをご覧ください。', 'The Ning Resort Ubud의 디럭스 발코니 스위트를 만나보세요.', 'اكتشف جناح ديلوكس مع شرفة في The Ning Resort Ubud.'],
    'Discover the One-Bedroom Pool Villa at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的一卧室泳池别墅。', 'The Ning Resort Ubudの1ベッドルーム・プールヴィラをご覧ください。', 'The Ning Resort Ubud의 침실 1개 풀빌라를 만나보세요.', 'اكتشف فيلا بمسبح وغرفة نوم واحدة في The Ning Resort Ubud.'],
    'Discover the One-Bedroom Plunge Pool Villa at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的一卧室私人小型泳池别墅。', 'The Ning Resort Ubudの1ベッドルーム・プランジプールヴィラをご覧ください。', 'The Ning Resort Ubud의 침실 1개 플런지 풀 빌라를 만나보세요.', 'اكتشف فيلا بغرفة نوم واحدة ومسبح غطس في The Ning Resort Ubud.'],
    'Discover the Suite with Balcony at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的阳台套房。', 'The Ning Resort Ubudのバルコニー付きスイートをご覧ください。', 'The Ning Resort Ubud의 발코니 스위트를 만나보세요.', 'اكتشف جناحًا مع شرفة في The Ning Resort Ubud.'],
    'Discover the Two-Bedroom Duplex Pool Villa at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的两卧室复式泳池别墅。', 'The Ning Resort Ubudの2ベッドルーム・メゾネットプールヴィラをご覧ください。', 'The Ning Resort Ubud의 침실 2개 복층 풀빌라를 만나보세요.', 'اكتشف فيلا دوبلكس بمسبح وغرفتي نوم في The Ning Resort Ubud.'],
    'Discover the Pool Villa with Living Room at The Ning Resort Ubud.': ['探索 The Ning Resort Ubud 的带起居室泳池别墅。', 'The Ning Resort Ubudのリビングルーム付きプールヴィラをご覧ください。', 'The Ning Resort Ubud의 거실이 있는 풀빌라를 만나보세요.', 'اكتشف فيلا بمسبح وغرفة معيشة في The Ning Resort Ubud.'],
    'Follow quiet paths through the island\'s green heart and see where the day takes you.': ['沿着静谧小径走进岛屿葱郁的腹地，随心开启一天的探索。', '島の緑豊かな中心を静かな小道で巡り、その日の気分に身を委ねてみましょう。', '섬의 푸른 중심부를 지나는 한적한 길을 따라가며 하루의 여정을 즐겨보세요.', 'اتبع المسارات الهادئة في قلب الجزيرة الأخضر ودع يومك يقودك إلى وجهتك.'],
    'Quick links': ['快速链接', 'クイックリンク', '빠른 링크', 'روابط سريعة'],
    'Filter rooms by category': ['按类别筛选客房', '客室をカテゴリーで絞り込む', '카테고리별 객실 필터', 'تصفية الغرف حسب الفئة'],
    'Room packages in Ubud': ['乌布住宿套餐', 'ウブドの宿泊プラン', '우붓 객실 패키지', 'باقات الإقامة في أوبود'],
    'Room categories': ['客房类别', '客室カテゴリー', '객실 카테고리', 'فئات الغرف'],
    'Previous packages': ['上一组套餐', '前のプラン', '이전 패키지', 'الباقات السابقة'],
    'Next packages': ['下一组套餐', '次のプラン', '다음 패키지', 'الباقات التالية'],
    'Package carousel controls': ['套餐轮播控制', 'プランのカルーセル操作', '패키지 캐러셀 컨트롤', 'عناصر التحكم في عرض الباقات'],
    'Photo gallery': ['照片图库', 'フォトギャラリー', '사진 갤러리', 'معرض الصور'],
    'Sunlight falling across a tropical landscape': ['阳光洒落在热带景致之上', '熱帯の風景に降り注ぐ日差し', '열대 풍경 위로 내리쬐는 햇살', 'ضوء الشمس ينساب على مشهد استوائي'],
    'Map showing The Ning Resort Ubud': ['The Ning Resort Ubud 地图', 'The Ning Resort Ubudの地図', 'The Ning Resort Ubud 지도', 'خريطة The Ning Resort Ubud'],
    'Map showing Ubud, Bali': ['巴厘岛乌布地图', 'バリ島ウブドの地図', '발리 우붓 지도', 'خريطة أوبود، بالي'],
    'Dining gallery': ['餐饮照片图库', 'ダイニングギャラリー', '다이닝 갤러리', 'معرض صور المطاعم'],
    'Exquisite dining experiences': ['精致餐饮体验', '美食を楽しむひととき', '품격 있는 다이닝 경험', 'تجارب طعام راقية'],
    'Close': ['关闭', '閉じる', '닫기', 'إغلاق'],
    'Open in Maps': ['在地图中打开', '地図で開く', '지도에서 열기', 'افتح في الخرائط'],
    'Open in Maps (opens in new tab)': ['在地图中打开（在新标签页中打开）', '地図で開く（新しいタブで開きます）', '지도에서 열기(새 탭에서 열림)', 'افتح في الخرائط (يفتح في علامة تبويب جديدة)'],
    'Deluxe Suite with Balcony | The Ning Resort Ubud': ['豪华阳台套房 | The Ning Resort Ubud', 'デラックス・バルコニースイート | The Ning Resort Ubud', '디럭스 발코니 스위트 | The Ning Resort Ubud', 'جناح ديلوكس مع شرفة | The Ning Resort Ubud'],
    'One-Bedroom Plunge Pool Villa | The Ning Resort Ubud': ['一卧室私人小型泳池别墅 | The Ning Resort Ubud', '1ベッドルーム・プランジプールヴィラ | The Ning Resort Ubud', '침실 1개 플런지 풀 빌라 | The Ning Resort Ubud', 'فيلا بغرفة نوم واحدة ومسبح غطس | The Ning Resort Ubud'],
    'One-Bedroom Pool Villa | The Ning Resort Ubud': ['一卧室泳池别墅 | The Ning Resort Ubud', '1ベッドルーム・プールヴィラ | The Ning Resort Ubud', '침실 1개 풀빌라 | The Ning Resort Ubud', 'فيلا بمسبح وغرفة نوم واحدة | The Ning Resort Ubud'],
    'One-Bedroom Pool Villa with Living Room | The Ning Resort Ubud': ['一卧室带起居室泳池别墅 | The Ning Resort Ubud', 'リビングルーム付き1ベッドルーム・プールヴィラ | The Ning Resort Ubud', '거실이 있는 침실 1개 풀빌라 | The Ning Resort Ubud', 'فيلا بمسبح وغرفة نوم واحدة وغرفة معيشة | The Ning Resort Ubud'],
    'Suite with Balcony | The Ning Resort Ubud': ['阳台套房 | The Ning Resort Ubud', 'バルコニー付きスイート | The Ning Resort Ubud', '발코니 스위트 | The Ning Resort Ubud', 'جناح مع شرفة | The Ning Resort Ubud'],
    'Two-Bedroom Duplex Pool Villa | The Ning Resort Ubud': ['两卧室复式泳池别墅 | The Ning Resort Ubud', '2ベッドルーム・メゾネットプールヴィラ | The Ning Resort Ubud', '침실 2개 복층 풀빌라 | The Ning Resort Ubud', 'فيلا دوبلكس بمسبح وغرفتي نوم | The Ning Resort Ubud'],
    'Two-Bedroom Suite with Balcony | The Ning Resort Ubud': ['两卧室阳台套房 | The Ning Resort Ubud', 'バルコニー付き2ベッドルームスイート | The Ning Resort Ubud', '발코니가 있는 침실 2개 스위트 | The Ning Resort Ubud', 'جناح بغرفتي نوم وشرفة | The Ning Resort Ubud'],
    'Discover refined elegance at The Ning Resort Ubud, a premier luxury resort in Ubud, Bali, featuring exclusive private pool villas and spacious suite rooms in the heart of Ubud. Designed with authentic natural materials and surrounded by breathtaking jungle views, our luxury accommodation in Ubud offers the perfect blend of privacy, comfort, and Balinese serenity. Whether you are seeking a romantic private pool villa in Ubud, a honeymoon resort in Bali, or a peaceful luxury stay near Ubud center, The Ning Resort delivers an unforgettable Bali luxury retreat experience.': ['在 The Ning Resort Ubud 感受精致优雅。这座乌布顶级豪华度假村位于城市中心，提供私人泳池别墅与宽敞套房。客房采用自然材质，四周丛林景致怡人，兼具私密、舒适与巴厘岛式宁静。无论是浪漫别墅、蜜月假期，还是乌布市中心附近的静谧奢华住宿，这里都将为您带来难忘体验。', 'The Ning Resort Ubudで洗練された優雅さをご体験ください。ウブド中心部に位置するラグジュアリーリゾートで、プライベートプール付きヴィラと広々としたスイートをご用意しています。自然素材を用いた客室からは美しいジャングルを望み、プライバシーと快適さ、バリならではの静けさが調和します。ロマンチックな滞在やハネムーン、ウブド中心部近くでの贅沢な休暇に最適です。', 'The Ning Resort Ubud에서 세련된 우아함을 경험해 보세요. 우붓 중심부의 럭셔리 리조트로 전용 수영장 빌라와 넓은 스위트룸을 갖추고 있습니다. 자연 소재로 꾸민 객실에서 아름다운 정글 전망을 감상하며 프라이버시와 편안함, 발리의 평온함을 누리세요. 로맨틱한 풀빌라 휴가와 허니문, 우붓 중심부 근처의 고요한 휴식까지 잊지 못할 경험을 선사합니다.', 'استمتع بالأناقة الراقية في The Ning Resort Ubud، منتجع فاخر في قلب أوبود يضم فللًا بمسابح خاصة وأجنحة واسعة. صُممت أماكن الإقامة بمواد طبيعية أصيلة وتحيط بها إطلالات خلابة على الغابة، لتجمع بين الخصوصية والراحة وهدوء بالي. سواء كنت تبحث عن فيلا رومانسية أو إقامة لشهر العسل أو عطلة فاخرة هادئة قرب وسط أوبود، ستعيش تجربة لا تُنسى.'],
    'Our Suite Rooms at The Ning Resort Ubud offer the ultimate in modern natural luxury, providing our guests a comfortable and luxurious retreat. Our Suite Rooms feature a range of facilities to ensure a comfortable and relaxing stay, including a private balcony where guests can enjoy the stunning views of the surrounding natural beauty.': ['The Ning Resort Ubud 的套房融合现代设计与自然奢华，为宾客打造舒适雅致的休憩空间。套房配备完善设施与私人阳台，可欣赏周边自然美景，让您尽享放松惬意的住宿体验。', 'The Ning Resort Ubudのスイートは、モダンなデザインと自然のぬくもりが調和する、快適で上質な空間です。充実した設備とプライベートバルコニーを備え、周囲の美しい自然を眺めながらゆったりとお過ごしいただけます。', 'The Ning Resort Ubud의 스위트룸은 현대적인 디자인과 자연의 고급스러움이 어우러진 편안한 휴식 공간입니다. 다양한 시설과 전용 발코니를 갖춰 주변의 아름다운 자연을 감상하며 여유로운 시간을 보낼 수 있습니다.', 'توفر أجنحة The Ning Resort Ubud ملاذًا مريحًا يجمع بين التصميم العصري وفخامة الطبيعة. وهي مجهزة بمرافق متنوعة وشرفة خاصة تتيح للضيوف الاستمتاع بإطلالات الطبيعة المحيطة وإقامة باعثة على الاسترخاء.'],
    'Experience the ultimate in modern natural luxury in our Deluxe Suite With Balcony at The Ning Resort Ubud. Deluxe Suite With Balcony provide a spacious and comfortable retreat for our guests, featuring stunning views of the rice fields and jungle. The Deluxe Suite Rooms feature a range of facilities to ensure a comfortable and relaxing stay, come with two private balconies, allowing guests to enjoy breathtaking views of the rice fields from different angles.': ['入住 The Ning Resort Ubud 的豪华阳台套房，体验现代设计与自然奢华。宽敞舒适的套房可欣赏稻田与丛林景致，配备完善设施和两处私人阳台，让您从不同角度饱览壮丽稻田风光。', 'The Ning Resort Ubudのデラックス・バルコニースイートで、モダンな自然の贅沢をご体験ください。広々とした快適な客室からは棚田やジャングルを望めます。充実した設備に加え、プライベートバルコニーを2か所備え、異なる角度から棚田の眺めをお楽しみいただけます。', 'The Ning Resort Ubud의 디럭스 발코니 스위트에서 현대적인 자연의 고급스러움을 경험해 보세요. 넓고 편안한 객실에서 논과 정글 전망을 감상할 수 있으며, 다양한 편의 시설과 전용 발코니 2개를 갖춰 여러 각도에서 아름다운 논을 바라볼 수 있습니다.', 'استمتع بالفخامة العصرية المستوحاة من الطبيعة في جناح ديلوكس مع شرفة في The Ning Resort Ubud. يوفر الجناح الفسيح والمريح إطلالات رائعة على حقول الأرز والغابة، إلى جانب مرافق متكاملة وشرفتين خاصتين تتيحان الاستمتاع بمناظر الحقول من زوايا مختلفة.'],
    'Nestled amidst the lush greenery of Ubud, our One Bedroom Plunge Pool Villa with Garden View is the perfect escape for travelers seeking a peaceful and tranquil retreat. The villa features a spacious and comfortable bedroom with a king-size bed, premium bedding, and pillows to ensure a restful night’s sleep.': ['这间带花园景观的一卧室小型泳池别墅坐落在乌布葱郁绿意之中，是寻求宁静休憩的理想之选。宽敞舒适的卧室配有特大床与优质寝具，伴您一夜安眠。', 'ウブドの豊かな緑に囲まれたガーデンビューの1ベッドルーム・プランジプールヴィラは、静かな休暇を求める方に最適です。広々とした快適な寝室にはキングベッドと上質な寝具を備え、心地よい眠りをお届けします。', '우붓의 푸른 자연 속에 자리한 정원 전망의 침실 1개 플런지 풀 빌라는 평온한 휴식을 원하는 분에게 이상적입니다. 넓고 편안한 침실에 킹사이즈 침대와 고급 침구를 갖춰 편안한 밤을 선사합니다.', 'تقع فيلا بمسبح غطس وغرفة نوم واحدة وإطلالة على الحديقة وسط خضرة أوبود، وهي خيار مثالي للباحثين عن الهدوء. تضم غرفة نوم واسعة ومريحة بسرير كينغ ومفروشات فاخرة لنوم هانئ.'],
    'Escape to the lush jungles of Ubud and stay in our One Bedroom Villa with Swimming Pool Surrounded by Jungle View. Our villa offers the perfect balance of natural beauty and modern luxury, with a range of amenities to make your stay comfortable and memorable. The villa features a spacious and comfortable bedroom with a king-size bed, premium bedding, and pillows to ensure a restful night’s sleep.': ['逃离日常，入住乌布葱郁丛林中的一卧室泳池别墅。别墅将自然之美与现代奢华完美结合，配备多种设施，让住宿舒适而难忘。宽敞卧室设有特大床与优质寝具，为您带来安稳睡眠。', 'ウブドの豊かなジャングルに佇む、1ベッドルーム・プールヴィラで特別な時間をお過ごしください。自然の美しさとモダンな贅沢が調和し、快適な滞在を叶える設備が整っています。広々とした寝室にはキングベッドと上質な寝具をご用意しています。', '우붓의 푸른 정글 속 침실 1개 풀빌라에서 특별한 휴식을 즐겨보세요. 자연의 아름다움과 현대적인 럭셔리가 조화를 이루며 편안하고 기억에 남는 숙박을 위한 다양한 시설을 갖추고 있습니다. 넓은 침실에는 킹사이즈 침대와 고급 침구가 마련되어 있습니다.', 'استمتع بإقامة فيلا بمسبح وغرفة نوم واحدة وسط غابات أوبود الخضراء. تجمع الفيلا بين جمال الطبيعة والفخامة العصرية، وتضم مرافق تجعل إقامتك مريحة ولا تُنسى. كما تحتوي على غرفة نوم واسعة بسرير كينغ ومفروشات فاخرة لنوم مريح.'],
    'One-bedroom Pool Villa With Living Room boasts a separate living room and dining area, with a comfortable sofa and a dining set, perfect for guests to entertain or relax in the privacy of their own villa. Outside, the private pool is the perfect place to cool off and soak up the sun, with sun loungers and a tropical garden surrounding the pool area.': ['这间一卧室泳池别墅设有独立起居室与用餐区，配备舒适沙发和餐桌，适合在私密空间中招待亲友或悠然放松。户外私人泳池四周环绕日光躺椅与热带花园，是消暑与沐浴阳光的理想之处。', 'リビングルーム付き1ベッドルーム・プールヴィラには、ソファとダイニングセットを備えた独立のリビング・ダイニングエリアがあり、プライベートな空間でくつろいだり、大切な方を招いたりできます。屋外のプライベートプールは、サンラウンジャーと熱帯庭園に囲まれ、涼んだり日光浴をしたりするのに最適です。', '거실이 있는 침실 1개 풀빌라에는 편안한 소파와 식탁을 갖춘 별도의 거실 및 식사 공간이 있어 프라이빗한 빌라에서 휴식을 취하거나 손님을 맞이하기 좋습니다. 야외 전용 수영장 주변에는 선베드와 열대 정원이 있어 더위를 식히고 햇볕을 즐기기에 좋습니다.', 'تضم الفيلا بمسبح وغرفة نوم واحدة غرفة معيشة ومنطقة طعام منفصلتين مع أريكة مريحة وطاولة طعام، لتستمتع بالخصوصية أو تستقبل ضيوفك. ويحيط بالمسبح الخاص كراسٍ للاستلقاء وحديقة استوائية، مما يجعله مكانًا مثاليًا للانتعاش والاستمتاع بالشمس.'],
    'The villa features two spacious bedrooms duplex, each with a comfortable king-size bed, plush bedding, and amenities to ensure a restful night’s sleep. The en-suite bathrooms are elegantly designed, offers two well-appointed bathrooms: the upstairs bathroom features a bathtub with a hand shower, while the downstairs bathroom is equipped with a spacious head shower, as well as premium bathrobes and slippers, hairdryer, and toiletries.': ['这栋宽敞的复式别墅设有两间卧室，每间均配备舒适的特大床、柔软寝具与贴心设施。两间雅致的浴室中，楼上设有浴缸与手持花洒，楼下配有宽敞淋浴间；另备有优质浴袍、拖鞋、吹风机及洗浴用品。', '広々としたメゾネットヴィラには、キングベッドと上質な寝具を備えたベッドルームが2室あります。バスルームも2か所あり、上階にはハンドシャワー付きのバスタブ、下階には広々としたシャワーを設置。上質なバスローブやスリッパ、ヘアドライヤー、アメニティもご用意しています。', '넓은 복층 빌라에는 킹사이즈 침대와 고급 침구를 갖춘 침실 2개가 있습니다. 욕실도 2개로, 위층에는 핸드 샤워기가 있는 욕조가 있고 아래층에는 넓은 샤워 공간이 마련되어 있습니다. 고급 목욕 가운과 슬리퍼, 헤어드라이어, 세면도구도 제공합니다.', 'تضم الفيلا الدوبلكس الفسيحة غرفتي نوم، في كل منهما سرير كينغ مريح ومفروشات فاخرة ومرافق تضمن نومًا هانئًا. ويضم الحمامان الأنيقان حوض استحمام مع دش يدوي في الطابق العلوي ودشًا واسعًا في الطابق السفلي، إضافة إلى أردية حمام ونعال ومجفف شعر ومستلزمات استحمام فاخرة.'],
    'The Residential Suite with Balcony features two spacious bedrooms, each with a comfortable king-size bed, plush bedding, and a range of amenities to ensure a restful night’s sleep. The en-suite bathrooms are elegantly designed, complete with a bathtub, as well as premium bathrobes and slippers, hairdryer, and toiletries. Guests can relax on the private balcony that overlooks the lush tropical jungle and pool, surrounded by lush greenery, providing a perfect place to unwind and soak up the sun in complete privacy. The Residential Suite is designed to cater to every need of our guests, with a fully equipped kitchenette, minibar and electric kettle, allowing guests to prepare their own meals and enjoy them in the comfort of their own villa.': ['这间住宅式阳台套房设有两间宽敞卧室，均配备舒适特大床、柔软寝具与贴心设施。雅致的独立浴室设有浴缸，并备有优质浴袍、拖鞋、吹风机和洗浴用品。宾客可在私人阳台上俯瞰葱郁热带丛林与泳池，在私密空间中放松、享受阳光。套房还配有设备齐全的小厨房、迷你吧与电热水壶，方便您准备餐点，在别墅中自在享用。', 'バルコニー付きレジデンススイートには、キングベッドと上質な寝具を備えた広々とした寝室が2室あります。優雅な専用バスルームにはバスタブを設け、上質なバスローブやスリッパ、ヘアドライヤー、アメニティもご用意。熱帯のジャングルとプールを望むプライベートバルコニーでは、緑に包まれながら人目を気にせず日光浴や休息を楽しめます。設備の整った簡易キッチン、ミニバー、電気ケトルも備え、ご自身で用意した食事をヴィラでお召し上がりいただけます。', '발코니가 있는 레지던스 스위트에는 킹사이즈 침대와 고급 침구를 갖춘 넓은 침실 2개가 있습니다. 욕조가 마련된 세련된 전용 욕실과 고급 목욕 가운, 슬리퍼, 헤어드라이어, 세면도구를 제공합니다. 열대 정글과 수영장이 내려다보이는 전용 발코니에서 푸른 자연에 둘러싸여 프라이빗하게 휴식을 취하고 햇볕을 즐겨보세요. 시설이 완비된 간이 주방과 미니바, 전기 주전자도 있어 빌라에서 직접 식사를 준비해 편안하게 즐길 수 있습니다.', 'يضم الجناح السكني مع شرفة غرفتي نوم واسعتين، تحتوي كل منهما على سرير كينغ مريح ومفروشات فاخرة ومرافق متعددة. وتتميز الحمامات الخاصة الأنيقة بحوض استحمام، مع أردية حمام ونعال ومجفف شعر ومستلزمات استحمام راقية. استرخِ على الشرفة الخاصة المطلة على الغابة الاستوائية والمسبح، واستمتع بالخضرة والشمس في خصوصية تامة. كما يضم الجناح مطبخًا صغيرًا مجهزًا وميني بار وغلاية كهربائية لتحضير وجباتك والاستمتاع بها داخل الفيلا.'],
    'The villa also features modern amenities such as Googlenest digital serving experience, At The Ning Resort Ubud, we understand that every guest has unique needs and preferences, and we strive to provide a personalized experience that meets every expectation. Our Two Bedroom Pool Villa offer the ultimate in modern natural luxury, providing a private and intimate retreat for our guests in Ubud, Bali.': ['别墅还配备 Google Nest 等现代设施。The Ning Resort Ubud 深知每位宾客都有不同的需求与喜好，因此致力于提供贴合期待的个性化体验。两卧室泳池别墅融合现代设计与自然奢华，为您在巴厘岛乌布打造私密舒适的休憩天地。', 'ヴィラにはGoogle Nestなどの最新設備も備えています。The Ning Resort Ubudでは、お客様一人ひとりのニーズや好みに合わせた滞在を大切にしています。2ベッドルーム・プールヴィラは、モダンな自然の贅沢を備えた、ウブドでのプライベートな隠れ家です。', '빌라에는 Google Nest와 같은 현대적인 편의 시설도 마련되어 있습니다. The Ning Resort Ubud은 고객마다 다른 필요와 취향을 이해하고 기대에 맞는 맞춤형 경험을 제공하기 위해 노력합니다. 침실 2개 풀빌라에서 현대적인 자연의 럭셔리와 프라이빗한 휴식을 누려보세요.', 'تضم الفيلا أيضًا وسائل راحة حديثة مثل Google Nest. ندرك في The Ning Resort Ubud أن لكل ضيف احتياجات وتفضيلات مختلفة، ونسعى لتقديم تجربة شخصية تلبي توقعاته. توفر فيلا المسبح بغرفتي نوم فخامة عصرية مستوحاة من الطبيعة وملاذًا خاصًا في أوبود، بالي.'],
    'Our Residential Suite Two Bedrooms with Balcony offer the ultimate in modern natural luxury, providing a private and intimate retreat for our guests in Ubud, Bali.': ['The Ning Resort Ubud 的两卧室阳台住宅套房融合现代风格与自然奢华，为您在乌布打造私密舒适的休憩空间。', 'バルコニー付き2ベッドルーム・レジデンススイートは、モダンな自然の贅沢を備えた、バリ島ウブドでのプライベートな隠れ家です。', '발코니가 있는 침실 2개 레지던스 스위트에서 현대적인 자연의 럭셔리와 발리 우붓의 프라이빗한 휴식을 경험해 보세요.', 'يوفر الجناح السكني بغرفتي نوم وشرفة فخامة عصرية مستوحاة من الطبيعة وملاذًا خاصًا ومريحًا في أوبود، بالي.'],
  };

  const languageIndex = Object.fromEntries(languages.map((language, index) => [language, index - 1]));
  const roomCopy = {
    suite: {
      listing: ['套房采用现代自然风格，配有私人阳台，可欣赏周边景致，为您带来舒适惬意的住宿体验。', '自然素材を生かしたモダンなスイートで、プライベートバルコニーから周囲の景色を楽しみながら快適にお過ごしいただけます。', '자연의 감성을 담은 현대적인 스위트룸에서 전용 발코니와 주변 경관을 즐기며 편안하게 머물러 보세요.', 'توفر الأجنحة المصممة بطابع عصري مستوحى من الطبيعة إقامة مريحة وشرفة خاصة للاستمتاع بالمناظر المحيطة.'],
      detail: [
        ['套房融合现代舒适与自然质感，配有特大床、私人阳台及完善设施，可欣赏周边景致。', 'モダンな快適さと自然のぬくもりを備えたスイートです。キングベッド、プライベートバルコニー、充実した設備を整え、周囲の景色もお楽しみいただけます。', '현대적인 편안함과 자연의 감성을 담은 스위트룸입니다. 킹사이즈 침대와 전용 발코니, 다양한 편의 시설을 갖추고 주변 경관을 즐길 수 있습니다.', 'يجمع الجناح بين الراحة العصرية والطابع الطبيعي، ويضم سرير كينغ وشرفة خاصة ومرافق متكاملة مع إطلالات على الطبيعة المحيطة.'],
        ['宽敞浴室设有淋浴间，并提供拖鞋、吹风机与高速网络等设施，让您在探索乌布后舒适放松。', '広々としたバスルームにシャワーを備え、スリッパやヘアドライヤー、高速インターネットもご利用いただけます。ウブド散策の後も快適にお過ごしください。', '넓은 욕실과 샤워 시설을 갖추고 슬리퍼, 헤어드라이어, 고속 인터넷을 제공합니다. 우붓을 둘러본 뒤 편안하게 쉬어보세요.', 'يضم الحمام الواسع دشًا، كما تتوفر نعال ومجفف شعر وإنترنت عالي السرعة لتسترخي براحة بعد استكشاف أوبود.'],
      ],
    },
    'deluxe-suite': {
      listing: ['豪华套房宽敞舒适，可欣赏稻田与丛林景致，并设有两处私人阳台，让您从不同角度欣赏乌布风光。', '広々としたデラックススイートから棚田やジャングルを望めます。プライベートバルコニーを2か所備え、異なる景色をお楽しみいただけます。', '넓고 편안한 디럭스 스위트에서 논과 정글 전망을 감상하세요. 전용 발코니 2개에서 다양한 풍경을 즐길 수 있습니다.', 'يوفر جناح ديلوكس الفسيح إطلالات على حقول الأرز والغابة، مع شرفتين خاصتين للاستمتاع بالمشهد من زوايا مختلفة.'],
      detail: [
        ['豪华套房采用现代自然风格，宽敞舒适，可欣赏稻田与丛林美景，并配有两处私人阳台。', 'モダンな自然の趣を感じる広々としたデラックススイートです。棚田やジャングルを望み、プライベートバルコニーを2か所備えています。', '현대적인 자연의 감성이 돋보이는 넓은 디럭스 스위트로, 논과 정글 전망 및 전용 발코니 2개를 갖추고 있습니다.', 'يتميز جناح ديلوكس الفسيح بطابع عصري مستوحى من الطبيعة، وإطلالات على حقول الأرز والغابة وشرفتين خاصتين.'],
        ['舒适浴室配有淋浴设施，另备有柔软拖鞋与 Google Nest 等现代设施，并提供高速网络。', '快適なバスルームにシャワーを備え、スリッパやGoogle Nestなどの設備、高速インターネットもご利用いただけます。', '편안한 욕실과 샤워 시설을 갖추고 슬리퍼와 Google Nest 등 현대적인 편의 시설, 고속 인터넷을 제공합니다.', 'يضم الحمام المريح دشًا، وتتوفر نعال ووسائل حديثة مثل Google Nest وإنترنت عالي السرعة.'],
      ],
    },
    'plunge-pool': {
      listing: ['这间花园景观别墅坐落在乌布绿意之中，设有舒适卧室与特大床，是享受宁静假期的理想之选。', 'ウブドの緑に囲まれたガーデンビューのヴィラです。快適な寝室とキングベッドを備え、静かな休暇に最適です。', '우붓의 푸르름에 둘러싸인 정원 전망 빌라입니다. 편안한 침실과 킹사이즈 침대를 갖춰 평온한 휴식에 적합합니다.', 'تقع الفيلا المطلة على الحديقة وسط خضرة أوبود، وتضم غرفة نوم مريحة وسرير كينغ لتكون خيارًا مثاليًا لقضاء عطلة هادئة.'],
      detail: [
        ['别墅设有特大床、浴缸与私人阳台，可欣赏花园景致；私人小型泳池和日光躺椅让您尽享悠闲时光。', 'キングベッド、バスタブ、プライベートバルコニーを備え、庭園を望めます。プランジプールとサンラウンジャーで、ゆったりとお過ごしください。', '킹사이즈 침대와 욕조, 전용 발코니에서 정원 전망을 즐겨보세요. 플런지 풀과 선베드에서 여유로운 시간을 보낼 수 있습니다.', 'تضم الفيلا سرير كينغ وحوض استحمام وشرفة خاصة تطل على الحديقة، إلى جانب مسبح غطس وكراسٍ للاستلقاء للاسترخاء.'],
        ['电热水壶、迷你吧、支持 Google Cast 的电视与高速网络，为您的住宿增添便利。', '電気ケトル、ミニバー、Google Cast対応テレビ、高速インターネットを備え、快適な滞在をサポートします。', '전기 주전자와 미니바, Google Cast 지원 TV, 고속 인터넷을 갖춰 편리한 숙박을 제공합니다.', 'تتوفر غلاية كهربائية وميني بار وتلفزيون يدعم Google Cast وإنترنت عالي السرعة لإقامة مريحة.'],
      ],
    },
    'pool-villa': {
      listing: ['别墅坐落于乌布丛林中，融合自然之美与现代舒适，设有宽敞卧室和特大床。', 'ウブドのジャングルに佇むヴィラです。自然の美しさとモダンな快適さが調和し、広々とした寝室とキングベッドを備えています。', '우붓의 정글 속에 자리한 빌라로 자연의 아름다움과 현대적인 편안함이 어우러져 있습니다. 넓은 침실과 킹사이즈 침대를 갖추고 있습니다.', 'تقع الفيلا وسط غابات أوبود، وتجمع بين جمال الطبيعة والراحة العصرية، مع غرفة نوم واسعة وسرير كينغ.'],
      detail: [
        ['别墅设有特大床、浴缸与私人露台，可俯瞰丛林；私人泳池和日光躺椅让您在自然中放松身心。', 'キングベッド、バスタブ、プライベートテラスを備え、ジャングルを望めます。プライベートプールやサンラウンジャーで自然の中の休息をお楽しみください。', '킹사이즈 침대와 욕조, 전용 테라스에서 정글 전망을 감상하세요. 전용 수영장과 선베드에서 자연 속 휴식을 즐길 수 있습니다.', 'تضم الفيلا سرير كينغ وحوض استحمام وشرفة خاصة تطل على الغابة، مع مسبح خاص وكراسٍ للاستلقاء للاسترخاء وسط الطبيعة.'],
        ['电热水壶与迷你吧让住宿更加便利；私密舒适的环境尤其适合情侣或独自旅行的宾客。', '電気ケトルとミニバーを備えた、プライベートで快適な空間です。カップルや一人旅のお客様にもおすすめです。', '전기 주전자와 미니바를 갖춘 프라이빗하고 편안한 공간으로 커플이나 혼자 여행하는 분에게도 잘 어울립니다.', 'توفر الفيلا غلاية كهربائية وميني بار وأجواء مريحة وخاصة، وهي مناسبة للأزواج أو المسافرين بمفردهم.'],
      ],
    },
    'living-room': {
      listing: ['别墅设有独立起居室与用餐区，配备舒适沙发和餐桌；户外私人泳池周围环绕日光躺椅与热带花园。', '独立したリビング・ダイニングエリアにソファとテーブルを備えています。屋外のプライベートプールはサンラウンジャーと熱帯庭園に囲まれています。', '별도의 거실 및 식사 공간에 편안한 소파와 식탁이 있습니다. 야외 전용 수영장은 선베드와 열대 정원으로 둘러싸여 있습니다.', 'تضم الفيلا غرفة معيشة ومنطقة طعام منفصلتين مع أريكة مريحة وطاولة، ويحيط بالمسبح الخاص في الخارج كراسٍ للاستلقاء وحديقة استوائية.'],
      detail: [
        ['楼上卧室配有特大床、浴缸与私人阳台，设施齐全，适合舒适入住。', '上階の寝室にはキングベッド、バスタブ、プライベートバルコニーを備え、快適にお過ごしいただけます。', '위층 침실에는 킹사이즈 침대와 욕조, 전용 발코니가 마련되어 있어 편안하게 머물 수 있습니다.', 'تضم غرفة النوم في الطابق العلوي سرير كينغ وحوض استحمام وشرفة خاصة ومرافق متكاملة لإقامة مريحة.'],
        ['楼下设有独立起居与用餐空间、淋浴间和私人泳池，周围的热带花园与日光躺椅适合放松休憩。', '下階には独立したリビング・ダイニング、シャワー、プライベートプールを備えています。熱帯庭園とサンラウンジャーに囲まれ、ゆったりとお過ごしいただけます。', '아래층에는 별도의 거실 및 식사 공간, 샤워 시설과 전용 수영장이 있습니다. 열대 정원과 선베드에서 편안히 쉬어보세요.', 'يضم الطابق السفلي غرفة معيشة ومنطقة طعام منفصلتين ودشًا ومسبحًا خاصًا، تحيط بها حديقة استوائية وكراسٍ للاسترخاء.'],
      ],
    },
    duplex: {
      listing: ['复式别墅设有两间卧室与两间雅致浴室，配备特大床、柔软寝具、浴缸和淋浴设施。', 'メゾネットヴィラには、キングベッドと上質な寝具を備えた寝室が2室あり、バスタブ付きの浴室とシャワー付きの浴室を設けています。', '복층 빌라에는 킹사이즈 침대와 고급 침구를 갖춘 침실 2개와 욕조가 있는 욕실, 샤워 시설이 마련된 욕실이 있습니다.', 'تضم الفيلا الدوبلكس غرفتي نوم بسريرَي كينغ ومفروشات فاخرة، إضافة إلى حمامين أحدهما بحوض استحمام والآخر بدش.'],
      detail: [
        ['两间宽敞卧室均配有特大床与优质寝具。楼上浴室设有浴缸和手持花洒，楼下配有宽敞淋浴间。', '広々とした寝室が2室あり、どちらもキングベッドと上質な寝具を備えています。上階の浴室にはバスタブとハンドシャワー、下階には広々としたシャワーを設置しています。', '넓은 침실 2개에 각각 킹사이즈 침대와 고급 침구를 갖추고 있습니다. 위층 욕실에는 욕조와 핸드 샤워기가, 아래층에는 넓은 샤워 공간이 있습니다.', 'تضم الفيلا غرفتي نوم واسعتين بسريرَي كينغ ومفروشات فاخرة. يحتوي حمام الطابق العلوي على حوض استحمام ودش يدوي، بينما يضم الطابق السفلي دشًا واسعًا.'],
        ['私人阳台可俯瞰热带花园，私人泳池与日光躺椅为您营造悠闲时光；别墅另配迷你吧与电热水壶。', 'プライベートバルコニーから熱帯庭園を望めます。プライベートプールやサンラウンジャーでくつろげるほか、ミニバーと電気ケトルも備えています。', '전용 발코니에서 열대 정원을 바라볼 수 있습니다. 전용 수영장과 선베드에서 휴식을 즐기고 미니바와 전기 주전자도 이용해 보세요.', 'تطل الشرفة الخاصة على الحديقة الاستوائية، ويوفر المسبح الخاص وكراسي الاستلقاء أجواء مريحة، مع ميني بار وغلاية كهربائية.'],
      ],
    },
    'residential-suite': {
      listing: ['住宅式套房设有两间宽敞卧室、浴缸与私人阳台，可俯瞰丛林和泳池；小厨房方便您准备简餐。', 'レジデンススイートには広々とした寝室が2室、バスタブ、プライベートバルコニーを備え、ジャングルやプールを望めます。簡易キッチンで軽食もご用意いただけます。', '레지던스 스위트에는 넓은 침실 2개와 욕조, 전용 발코니가 있으며 정글과 수영장을 내려다볼 수 있습니다. 간이 주방에서 간단한 식사도 준비할 수 있습니다.', 'يضم الجناح السكني غرفتي نوم واسعتين وحوض استحمام وشرفة خاصة تطل على الغابة والمسبح، مع مطبخ صغير لإعداد وجبات خفيفة.'],
      detail: [
        ['两间卧室均配有特大床与优质寝具，雅致浴室设有浴缸，并提供浴袍、拖鞋、吹风机及洗浴用品。', 'どちらの寝室にもキングベッドと上質な寝具を備えています。優雅なバスルームにはバスタブがあり、バスローブやスリッパ、ヘアドライヤー、アメニティもご用意しています。', '두 침실 모두 킹사이즈 침대와 고급 침구를 갖추고 있습니다. 세련된 욕실에는 욕조가 있으며 목욕 가운, 슬리퍼, 헤어드라이어, 세면도구를 제공합니다.', 'تضم كلتا غرفتي النوم سرير كينغ ومفروشات فاخرة. ويحتوي الحمام الأنيق على حوض استحمام، مع أردية حمام ونعال ومجفف شعر ومستلزمات استحمام.'],
        ['私人阳台可欣赏热带丛林与泳池景致；设备齐全的小厨房、迷你吧和电热水壶，让您自在准备餐点。', 'プライベートバルコニーから熱帯のジャングルとプールを望めます。設備の整った簡易キッチン、ミニバー、電気ケトルも備えています。', '전용 발코니에서 열대 정글과 수영장을 감상할 수 있습니다. 시설이 완비된 간이 주방과 미니바, 전기 주전자도 마련되어 있습니다.', 'توفر الشرفة الخاصة إطلالات على الغابة الاستوائية والمسبح، كما يضم الجناح مطبخًا صغيرًا مجهزًا وميني بار وغلاية كهربائية لتحضير وجباتك.'],
      ],
    },
  };
  const roomDetailId = {
    'suite-with-balcony.html': 'suite',
    'deluxe-suite-with-balcony.html': 'deluxe-suite',
    'one-bedroom-plunge-pool-villa.html': 'plunge-pool',
    'one-bedroom-pool-villa.html': 'pool-villa',
    'pool-villa-with-living-room.html': 'living-room',
    'two-bedroom-duplex-pool-villa.html': 'duplex',
    'two-bedroom-suite-with-balcony.html': 'residential-suite',
  }[window.location.pathname.split('/').pop()];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalTitle = document.title;
  const textAttributes = ['aria-label', 'alt', 'placeholder', 'title', 'content'];

  const localized = (source, language, node) => {
    const index = languageIndex[language];
    if (index < 0) return source;
    const normalizedSource = source.replace(/â€™/g, '’').replace(/Â([©·])/g, '$1');
    const key = copy[source]
      ? source
      : copy[normalizedSource]
        ? normalizedSource
        : Object.keys(copy).find((candidate) => candidate.toLowerCase() === normalizedSource.toLowerCase());
    if (key) return copy[key][index];
    const occupancy = source.match(/^(\d+) Rooms?, (\d+) Adult, (\d+) Child$/);
    if (occupancy) {
      const [, rooms, adults, children] = occupancy;
      return [
        `${rooms}间客房，${adults}位成人，${children}位儿童`,
        `${rooms}室、大人${adults}名、子ども${children}名`,
        `객실 ${rooms}개, 성인 ${adults}명, 어린이 ${children}명`,
        `غرف ${rooms}، بالغون ${adults}، أطفال ${children}`,
      ][index];
    }
    const roomCategory = source.match(/^Rooms in category: (.+)$/);
    if (roomCategory) return `${localized('Rooms in category', language)}: ${localized(roomCategory[1], language)}`;
    const area = source.match(/^([\d.]+) square meters(?: \( (.+) \))?$/);
    if (area) {
      const suffix = area[2] ? ` (${localized(area[2], language)})` : '';
      return [
        `${area[1]}平方米${suffix}`,
        `${area[1]}㎡${suffix}`,
        `${area[1]}㎡${suffix}`,
        `${area[1]} متر مربع${suffix}`,
      ][index];
    }
    const roomLink = source.match(/^View (.+)$/);
    if (roomLink) return `${localized('View room details', language)}: ${localized(roomLink[1], language)}`;
    const resortImage = source.match(/^(.+) at The Ning Resort Ubud$/);
    if (resortImage) return `${localized(resortImage[1], language)} | The Ning Resort Ubud`;
    const galleryLabel = source.match(/^(.+) photo gallery$/i);
    if (galleryLabel) {
      const labels = ['的照片图库', 'のフォトギャラリー', ' 사진 갤러리', ' - معرض الصور'];
      return `${localized(galleryLabel[1], language)}${labels[index]}`;
    }
    const enlargedPhoto = source.match(/^Enlarge photo: (.+)$/);
    if (enlargedPhoto) return `${localized('Enlarge photo:', language)} ${localized(enlargedPhoto[1], language)}`;
    const photoNumber = source.match(/^(.+) photo (\d+)$/);
    if (photoNumber) {
      return [
        `${localized(photoNumber[1], language)}照片 ${photoNumber[2]}`,
        `${localized(photoNumber[1], language)}の写真${photoNumber[2]}`,
        `${localized(photoNumber[1], language)} 사진 ${photoNumber[2]}`,
        `${localized(photoNumber[1], language)} - الصورة ${photoNumber[2]}`,
      ][index];
    }
    const photoControls = source.match(/^(.+) photo controls$/i);
    if (photoControls) {
      return [
        `${localized(photoControls[1], language)}照片控制`,
        `${localized(photoControls[1], language)}の写真操作`,
        `${localized(photoControls[1], language)} 사진 컨트롤`,
        `عناصر التحكم في صور ${localized(photoControls[1], language)}`,
      ][index];
    }
    const photoAction = source.match(/^(Previous|Next) (.+) photo$/i);
    if (photoAction) {
      return [
        `${photoAction[1] === 'Previous' ? '上一张' : '下一张'}${localized(photoAction[2], language)}照片`,
        `${localized(photoAction[2], language)}の${photoAction[1] === 'Previous' ? '前の' : '次の'}写真`,
        `${localized(photoAction[2], language)} ${photoAction[1] === 'Previous' ? '이전' : '다음'} 사진`,
        `${photoAction[1] === 'Previous' ? 'الصورة السابقة لـ' : 'الصورة التالية لـ'} ${localized(photoAction[2], language)}`,
      ][index];
    }
    const roomSlide = source.match(/^(.+) at The Ning Resort Ubud, slide (\d+)$/i);
    if (roomSlide) {
      const number = roomSlide[2];
      return [
        `${localized(roomSlide[1], language)}，第${number}张幻灯片`,
        `${localized(roomSlide[1], language)}、スライド${number}`,
        `${localized(roomSlide[1], language)}, ${number}번 슬라이드`,
        `${localized(roomSlide[1], language)}، الشريحة ${number}`,
      ][index];
    }
    const slideLabel = source.match(/^Show slide (\d+): (.+)$/);
    if (slideLabel) {
      const [, number, description] = slideLabel;
      return [
        `显示第 ${number} 张幻灯片：${localized(description, language)}`,
        `スライド${number}を表示：${localized(description, language)}`,
        `${number}번 슬라이드 표시: ${localized(description, language)}`,
        `اعرض الشريحة ${number}: ${localized(description, language)}`,
      ][index];
    }
    if (!node?.parentElement) return source;
    const detailParagraph = node.parentElement.closest('.room-detail-summary p.body-copy');
    if (detailParagraph) {
      const paragraphs = roomCopy[roomDetailId]?.detail;
      const paragraphIndex = Array.from(document.querySelectorAll('.room-detail-summary p.body-copy')).indexOf(detailParagraph);
      const chunks = source.split(/\r?\n\s*/).filter(Boolean);
      if (chunks.length > 1) {
        return chunks.map((chunk, chunkIndex) => {
          const translated = localized(chunk, language);
          return translated !== chunk ? translated : paragraphs?.[chunkIndex]?.[index] || chunk;
        }).join('\n');
      }
      return paragraphs?.[paragraphIndex]?.[index] || source;
    }
    const stayParagraph = node.parentElement.closest('.stay-row p:not(.eyebrow)');
    const roomRow = stayParagraph?.closest('.stay-row');
    const room = roomRow ? roomCopy[roomRow.id] : null;
    if (room && stayParagraph) return room.listing[index];
    return source;
  };

  const translateNode = (node, language) => {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = localized(trimmed, language, node);
    if (translated !== trimmed) {
      const start = source.indexOf(trimmed);
      const desired = `${source.slice(0, start)}${translated}${source.slice(start + trimmed.length)}`;
      if (node.nodeValue !== desired) node.nodeValue = desired;
    } else if (node.nodeValue !== source && language === 'en') node.nodeValue = source;
  };

  const translateElement = (element, language) => {
    textAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let saved = originalAttributes.get(element);
      if (!saved) {
        saved = {};
        originalAttributes.set(element, saved);
      }
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const source = saved[attribute];
      const translated = localized(source, language);
      if (translated !== source && element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
      else if (language === 'en' && element.getAttribute(attribute) !== source) element.setAttribute(attribute, source);
    });
  };

  const updateBookingLanguage = (language) => {
    document.querySelectorAll('.header-book[href*="swiftbook.io/inst/"]').forEach((link) => {
      const bookingUrl = new URL(link.href);
      const [route, queryString = ''] = bookingUrl.hash.slice(1).split('?');
      const query = new URLSearchParams(queryString);
      query.set('lang', language);
      bookingUrl.hash = `${route}?${query.toString()}`;
      link.href = bookingUrl.toString();
    });
  };

  const applyLanguage = (language) => {
    const selected = languages.includes(language) ? language : 'en';
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
    document.title = localized(originalTitle, selected);
    updateBookingLanguage(selected);
    document.querySelectorAll('title, meta[ name="description" ], [aria-label], [alt], [placeholder], [title]').forEach((element) => {
      translateElement(element, selected);
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script, style, svg, .site-language') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });
    let node;
    while ((node = walker.nextNode())) translateNode(node, selected);
    const trigger = document.querySelector('.site-language-trigger');
    if (trigger) {
      trigger.textContent = selected === 'zh-CN' ? '中文' : selected === 'ja' ? '日本語' : selected === 'ko' ? '한국어' : selected === 'ar' ? 'عربي' : 'EN';
      trigger.setAttribute('aria-label', `${localized('Choose language', selected)}: ${languageNames[selected]}`);
    }
  };

  const nav = document.querySelector('.primary-nav');
  if (nav) {
    const selector = document.createElement('div');
    selector.className = 'site-language';
    const trigger = document.createElement('button');
    trigger.className = 'site-language-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.textContent = 'EN';
    const options = document.createElement('div');
    options.className = 'site-language-options';
    options.hidden = true;
    languages.forEach((language) => {
      const option = document.createElement('button');
      option.type = 'button';
      const flag = document.createElement('span');
      flag.className = 'site-language-flag';
      flag.setAttribute('aria-hidden', 'true');
      flag.innerHTML = languageFlagSvgs[language];
      option.append(flag, document.createTextNode(languageNames[language]));
      option.setAttribute('lang', language);
      option.addEventListener('click', () => {
        applyLanguage(language);
        try {
          window.localStorage.setItem('thening-language', language);
        } catch (error) {
          console.error('Unable to save the selected language.', error);
        }
        options.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      });
      options.append(option);
    });
    trigger.addEventListener('click', () => {
      options.hidden = !options.hidden;
      trigger.setAttribute('aria-expanded', String(!options.hidden));
    });
    document.addEventListener('click', (event) => {
      if (!selector.contains(event.target)) {
        options.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    selector.append(trigger, options);
    nav.after(selector);
  }

  const style = document.createElement('style');
  style.textContent = `
    .site-language { position: relative; flex: 0 0 auto; margin-left: 4px; font-family: "DM Sans", sans-serif; }
    .site-language-trigger { min-width: 46px; padding: 7px 8px; border: 1px solid rgba(255,255,255,.55); border-radius: 999px; background: transparent; color: #fff; cursor: pointer; font-size: 9px; line-height: 1.2; }
    .site-language-trigger:hover, .site-language-trigger:focus-visible { background: transparent; color: #fff; }
    .site-language-options { position: absolute; top: calc(100% + 9px); right: 0; z-index: 20; min-width: 145px; padding: 5px; border: 0; background: #111; box-shadow: none; }
    .site-header .site-language-options { border: 0; box-shadow: none; }
    .site-header.is-scrolled .site-language-options { background: rgba(0,0,0,.6); }
    .site-language-options[hidden] { display: none; }
    .site-language-options button { width: 100%; padding: 9px 10px; display: flex; align-items: center; gap: 9px; border: 0; background: transparent; color: #fff; cursor: pointer; font: inherit; font-size: 12px; text-align: start; }
    .site-language-options button { border-bottom: 1px solid rgba(255,255,255,.25); }
    .site-language-flag { flex: 0 0 28px; width: 28px; height: 18px; line-height: 0; }
    .site-language-flag svg { display: block; width: 28px; height: 18px; border-radius: 2px; }
    .site-language-options button:hover, .site-language-options button:focus-visible { background: rgba(255,255,255,.14); }
    .site-language-trigger:focus-visible, .site-language-options button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
    html[dir="rtl"] .site-language-options { right: auto; left: 0; }
    html[dir="rtl"] body { direction: rtl; }
    html[dir="rtl"] .hero-content, html[dir="rtl"] .page-hero-content { right: 12%; left: auto; text-align: right; }
    html[dir="rtl"] .hero-caption { right: 5.5%; left: auto; }
    html[dir="rtl"] .footer-meta { direction: rtl; }
    @media (max-width: 820px) {
      .site-language { margin: 0; }
      .site-language-trigger { min-width: 62px; padding: 8px 10px; font-size: 11px; }
      .site-language-options { top: calc(100% + 7px); right: 0; bottom: auto; left: auto; }
      html[dir="rtl"] .site-language-options { right: auto; left: 0; }
      html[dir="rtl"] .hero-content, html[dir="rtl"] .page-hero-content { right: 7%; left: auto; }
    }
  `;
  document.head.append(style);

  let initialLanguage = 'en';
  try {
    initialLanguage = window.localStorage.getItem('thening-language') || 'en';
  } catch (error) {
    console.error('Unable to read the saved language preference.', error);
  }
  applyLanguage(initialLanguage);

  const observer = new MutationObserver((mutations) => {
    const language = languages.includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') translateNode(mutation.target, language);
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.TEXT_NODE) translateNode(addedNode, language);
        else if (addedNode instanceof Element) {
          translateElement(addedNode, language);
          const walker = document.createTreeWalker(addedNode, NodeFilter.SHOW_TEXT);
          let textNode;
          while ((textNode = walker.nextNode())) translateNode(textNode, language);
          addedNode.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach((element) => translateElement(element, language));
        }
      });
      if (mutation.type === 'attributes') translateElement(mutation.target, language);
    });
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: textAttributes });
})();
