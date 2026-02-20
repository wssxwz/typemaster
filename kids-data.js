// TypeKids - 幼儿版数据文件
// 包含6种动物主题的练习内容和SVG图片

const kidsAnimals = [
  {
    id: 'panda',
    emoji: '🐼',
    name: '熊猫',
    nameEn: 'Panda',
    color: '#f8c8d4',
    colorDark: '#e8a0b4',
    stars: 1,
    description: '简单英文字母',
    lines: [
      'Hello I am a panda bear.',
      'I love to eat bamboo.',
      'My fur is black and white.',
      'I live in the forest.',
      'Pandas are so cute!'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
      <!-- Bamboo -->
      <rect x="240" y="20" width="12" height="260" fill="#81c784" rx="6"/>
      <rect x="248" y="60" width="30" height="8" fill="#66bb6a" rx="4"/>
      <rect x="248" y="100" width="25" height="8" fill="#66bb6a" rx="4"/>
      <rect x="248" y="140" width="28" height="8" fill="#66bb6a" rx="4"/>
      <rect x="248" y="180" width="22" height="8" fill="#66bb6a" rx="4"/>
      <rect x="248" y="220" width="26" height="8" fill="#66bb6a" rx="4"/>
      <!-- Body -->
      <ellipse cx="150" cy="200" rx="75" ry="70" fill="white"/>
      <!-- Black patches on body -->
      <ellipse cx="105" cy="220" rx="30" ry="25" fill="#333"/>
      <ellipse cx="195" cy="220" rx="30" ry="25" fill="#333"/>
      <!-- Head -->
      <circle cx="150" cy="120" r="70" fill="white"/>
      <!-- Ears -->
      <circle cx="95" cy="65" r="28" fill="#333"/>
      <circle cx="205" cy="65" r="28" fill="#333"/>
      <!-- Eye patches -->
      <ellipse cx="118" cy="110" rx="22" ry="20" fill="#333"/>
      <ellipse cx="182" cy="110" rx="22" ry="20" fill="#333"/>
      <!-- Eyes -->
      <circle cx="118" cy="110" r="10" fill="white"/>
      <circle cx="182" cy="110" r="10" fill="white"/>
      <circle cx="120" cy="108" r="6" fill="#1a1a1a"/>
      <circle cx="184" cy="108" r="6" fill="#1a1a1a"/>
      <circle cx="122" cy="106" r="2" fill="white"/>
      <circle cx="186" cy="106" r="2" fill="white"/>
      <!-- Nose -->
      <ellipse cx="150" cy="130" rx="12" ry="8" fill="#333"/>
      <!-- Mouth -->
      <path d="M138 142 Q150 155 162 142" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Blush -->
      <circle cx="105" cy="135" r="14" fill="#ffb3c1" opacity="0.6"/>
      <circle cx="195" cy="135" r="14" fill="#ffb3c1" opacity="0.6"/>
      <!-- Arms holding bamboo -->
      <ellipse cx="225" cy="190" rx="18" ry="30" fill="white"/>
      <ellipse cx="225" cy="190" rx="12" ry="22" fill="#f5f5f5"/>
    </svg>`
  },
  {
    id: 'fox',
    emoji: '🦊',
    name: '小狐狸',
    nameEn: 'Fox',
    color: '#ffe0b2',
    colorDark: '#ffcc80',
    stars: 1,
    description: '简单拼音字母',
    lines: [
      'a o e i u v',
      'b p m f d t',
      'n l g k h j',
      'q x zh ch sh r',
      'z c s y w ai'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="300" height="300" fill="#fff8e1" rx="20"/>
      <!-- Sun -->
      <circle cx="250" cy="50" r="30" fill="#ffd54f" opacity="0.7"/>
      <!-- Body -->
      <ellipse cx="150" cy="210" rx="65" ry="60" fill="#ff8f00"/>
      <!-- Belly -->
      <ellipse cx="150" cy="220" rx="38" ry="42" fill="#fff8e1"/>
      <!-- Tail -->
      <path d="M210 240 Q270 180 240 140 Q220 120 200 150 Q190 200 210 240" fill="#ff8f00"/>
      <path d="M210 240 Q255 195 232 158 Q218 138 205 162 Q196 205 210 240" fill="#fff8e1"/>
      <!-- Head -->
      <ellipse cx="150" cy="120" rx="62" ry="58" fill="#ff8f00"/>
      <!-- Ears (triangles) -->
      <polygon points="100,75 85,30 125,65" fill="#ff8f00"/>
      <polygon points="100,75 90,38 120,67" fill="#ffccbc"/>
      <polygon points="200,75 215,30 175,65" fill="#ff8f00"/>
      <polygon points="200,75 210,38 180,67" fill="#ffccbc"/>
      <!-- Face white area -->
      <ellipse cx="150" cy="135" rx="42" ry="35" fill="#fff8e1"/>
      <!-- Eyes -->
      <ellipse cx="128" cy="110" rx="12" ry="14" fill="#1a1a1a"/>
      <ellipse cx="172" cy="110" rx="12" ry="14" fill="#1a1a1a"/>
      <circle cx="131" cy="107" r="4" fill="white"/>
      <circle cx="175" cy="107" r="4" fill="white"/>
      <!-- Nose -->
      <ellipse cx="150" cy="132" rx="8" ry="6" fill="#bf360c"/>
      <!-- Mouth -->
      <path d="M140 142 Q150 152 160 142" stroke="#bf360c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="105" y1="132" x2="140" y2="135" stroke="#795548" stroke-width="1.5" opacity="0.7"/>
      <line x1="105" y1="140" x2="140" y2="140" stroke="#795548" stroke-width="1.5" opacity="0.7"/>
      <line x1="160" y1="135" x2="195" y2="132" stroke="#795548" stroke-width="1.5" opacity="0.7"/>
      <line x1="160" y1="140" x2="195" y2="140" stroke="#795548" stroke-width="1.5" opacity="0.7"/>
      <!-- Blush -->
      <circle cx="112" cy="130" r="12" fill="#ff8a65" opacity="0.5"/>
      <circle cx="188" cy="130" r="12" fill="#ff8a65" opacity="0.5"/>
      <!-- Paws -->
      <ellipse cx="100" cy="240" rx="22" ry="15" fill="#ff8f00"/>
      <ellipse cx="200" cy="240" rx="22" ry="15" fill="#ff8f00"/>
    </svg>`
  },
  {
    id: 'dolphin',
    emoji: '🐬',
    name: '海豚',
    nameEn: 'Dolphin',
    color: '#b3e5fc',
    colorDark: '#81d4fa',
    stars: 2,
    description: '数字和符号',
    lines: [
      '1 2 3 4 5 6 7 8 9 0',
      '11 22 33 44 55 66',
      '77 88 99 100 200',
      '+ - * / = ( ) ! ?',
      '123 + 456 = 579'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Sky and sea background -->
      <rect width="300" height="300" fill="#e3f2fd" rx="20"/>
      <rect x="0" y="180" width="300" height="120" fill="#29b6f6" opacity="0.4" rx="20"/>
      <!-- Waves -->
      <path d="M0 185 Q40 175 80 185 Q120 195 160 185 Q200 175 240 185 Q270 192 300 185 L300 200 L0 200Z" fill="#29b6f6" opacity="0.6"/>
      <!-- Sun with rays -->
      <circle cx="55" cy="55" r="28" fill="#ffd54f"/>
      <line x1="55" y1="18" x2="55" y2="8" stroke="#ffd54f" stroke-width="3" stroke-linecap="round"/>
      <line x1="55" y1="92" x2="55" y2="102" stroke="#ffd54f" stroke-width="3" stroke-linecap="round"/>
      <line x1="18" y1="55" x2="8" y2="55" stroke="#ffd54f" stroke-width="3" stroke-linecap="round"/>
      <line x1="92" y1="55" x2="102" y2="55" stroke="#ffd54f" stroke-width="3" stroke-linecap="round"/>
      <!-- Dolphin body -->
      <ellipse cx="155" cy="155" rx="90" ry="40" fill="#0288d1" transform="rotate(-20 155 155)"/>
      <!-- Belly -->
      <ellipse cx="148" cy="160" rx="65" ry="22" fill="#b3e5fc" transform="rotate(-20 148 160)"/>
      <!-- Dorsal fin -->
      <path d="M165 115 Q185 80 175 120" fill="#0277bd"/>
      <!-- Tail -->
      <path d="M240 175 Q275 155 275 185 Q265 195 240 175Z" fill="#0288d1"/>
      <path d="M240 175 Q275 195 270 218 Q258 222 240 175Z" fill="#0288d1"/>
      <!-- Head -->
      <ellipse cx="90" cy="160" rx="42" ry="34" fill="#0288d1"/>
      <!-- Snout -->
      <ellipse cx="60" cy="165" rx="28" ry="16" fill="#0288d1"/>
      <ellipse cx="60" cy="167" rx="22" ry="11" fill="#b3e5fc"/>
      <!-- Eye -->
      <circle cx="90" cy="148" r="12" fill="white"/>
      <circle cx="92" cy="148" r="7" fill="#1a1a1a"/>
      <circle cx="94" cy="145" r="2.5" fill="white"/>
      <!-- Smile -->
      <path d="M55 172 Q72 182 88 175" stroke="#0277bd" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Pectoral fin -->
      <path d="M120 170 Q105 205 130 195" fill="#0277bd"/>
      <!-- Water splashes -->
      <circle cx="100" cy="175" r="5" fill="white" opacity="0.8"/>
      <circle cx="85" cy="182" r="3" fill="white" opacity="0.6"/>
      <circle cx="115" cy="178" r="4" fill="white" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'lion',
    emoji: '🦁',
    name: '小狮子',
    nameEn: 'Lion',
    color: '#fff9c4',
    colorDark: '#fff176',
    stars: 2,
    description: '简单英文单词',
    lines: [
      'cat dog sun moon star',
      'red blue green pink',
      'big small hot cold',
      'run jump play sing',
      'I love you very much!'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background - savanna -->
      <rect width="300" height="300" fill="#fff8e1" rx="20"/>
      <rect x="0" y="220" width="300" height="80" fill="#a5d6a7" opacity="0.5" rx="20"/>
      <!-- Mane (outer) -->
      <circle cx="150" cy="145" r="88" fill="#e65100"/>
      <!-- Mane dots effect -->
      <circle cx="150" cy="60" r="14" fill="#bf360c"/>
      <circle cx="185" cy="70" r="13" fill="#bf360c"/>
      <circle cx="215" cy="95" r="13" fill="#bf360c"/>
      <circle cx="228" cy="130" r="13" fill="#bf360c"/>
      <circle cx="220" cy="165" r="12" fill="#bf360c"/>
      <circle cx="85" cy="70" r="13" fill="#bf360c"/>
      <circle cx="58" cy="95" r="13" fill="#bf360c"/>
      <circle cx="45" cy="130" r="13" fill="#bf360c"/>
      <circle cx="52" cy="165" r="12" fill="#bf360c"/>
      <!-- Mane inner -->
      <circle cx="150" cy="145" r="70" fill="#f57f17"/>
      <!-- Head -->
      <ellipse cx="150" cy="148" rx="58" ry="54" fill="#ffcc02"/>
      <!-- Ears -->
      <circle cx="100" cy="103" r="18" fill="#ffcc02"/>
      <circle cx="100" cy="103" r="10" fill="#ffb74d"/>
      <circle cx="200" cy="103" r="18" fill="#ffcc02"/>
      <circle cx="200" cy="103" r="10" fill="#ffb74d"/>
      <!-- Eyes -->
      <ellipse cx="128" cy="135" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="172" cy="135" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="128" cy="133" rx="9" ry="11" fill="#c8a800"/>
      <ellipse cx="172" cy="133" rx="9" ry="11" fill="#c8a800"/>
      <circle cx="128" cy="134" r="5" fill="#1a1a1a"/>
      <circle cx="172" cy="134" r="5" fill="#1a1a1a"/>
      <circle cx="130" cy="132" r="2" fill="white"/>
      <circle cx="174" cy="132" r="2" fill="white"/>
      <!-- Nose and muzzle area -->
      <ellipse cx="150" cy="158" rx="26" ry="20" fill="#ffb74d"/>
      <ellipse cx="150" cy="155" rx="10" ry="7" fill="#d84315"/>
      <!-- Mouth -->
      <path d="M140 165 Q150 175 160 165" stroke="#d84315" stroke-width="3" fill="none" stroke-linecap="round"/>
      <line x1="150" y1="162" x2="150" y2="168" stroke="#d84315" stroke-width="2"/>
      <!-- Whiskers -->
      <line x1="100" y1="158" x2="130" y2="160" stroke="#8d6e63" stroke-width="1.5"/>
      <line x1="100" y1="166" x2="130" y2="165" stroke="#8d6e63" stroke-width="1.5"/>
      <line x1="170" y1="160" x2="200" y2="158" stroke="#8d6e63" stroke-width="1.5"/>
      <line x1="170" y1="165" x2="200" y2="166" stroke="#8d6e63" stroke-width="1.5"/>
      <!-- Blush -->
      <circle cx="112" cy="158" r="12" fill="#ff8a65" opacity="0.4"/>
      <circle cx="188" cy="158" r="12" fill="#ff8a65" opacity="0.4"/>
      <!-- Body -->
      <ellipse cx="150" cy="255" rx="55" ry="40" fill="#ffcc02"/>
      <!-- Tail -->
      <path d="M200 240 Q240 220 235 255 Q230 268 210 255" fill="#ffcc02"/>
      <circle cx="232" cy="258" r="12" fill="#e65100"/>
    </svg>`
  },
  {
    id: 'turtle',
    emoji: '🐢',
    name: '小乌龟',
    nameEn: 'Turtle',
    color: '#c8e6c9',
    colorDark: '#a5d6a7',
    stars: 3,
    description: '简单中文词组',
    lines: [
      '你好 再见 谢谢',
      '爸爸 妈妈 宝宝',
      '苹果 香蕉 西瓜',
      '小猫 小狗 小鸟',
      '我爱你 中国 家'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background - pond -->
      <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
      <ellipse cx="150" cy="260" rx="120" ry="40" fill="#80deea" opacity="0.5"/>
      <!-- Lily pad -->
      <ellipse cx="240" cy="270" rx="28" ry="16" fill="#66bb6a" opacity="0.7"/>
      <circle cx="240" cy="262" r="4" fill="#f06292"/>
      <!-- Shell -->
      <ellipse cx="150" cy="160" rx="85" ry="75" fill="#388e3c"/>
      <!-- Shell pattern hexagons -->
      <polygon points="150,100 168,110 168,130 150,140 132,130 132,110" fill="#2e7d32" opacity="0.7"/>
      <polygon points="110,120 128,130 128,150 110,160 92,150 92,130" fill="#2e7d32" opacity="0.7"/>
      <polygon points="190,120 208,130 208,150 190,160 172,150 172,130" fill="#2e7d32" opacity="0.7"/>
      <polygon points="130,155 148,165 148,185 130,195 112,185 112,165" fill="#2e7d32" opacity="0.7"/>
      <polygon points="170,155 188,165 188,185 170,195 152,185 152,165" fill="#2e7d32" opacity="0.7"/>
      <!-- Shell rim -->
      <ellipse cx="150" cy="160" rx="85" ry="75" fill="none" stroke="#1b5e20" stroke-width="4"/>
      <!-- Head -->
      <circle cx="150" cy="95" r="36" fill="#66bb6a"/>
      <!-- Eyes -->
      <circle cx="137" cy="83" r="10" fill="white"/>
      <circle cx="163" cy="83" r="10" fill="white"/>
      <circle cx="139" cy="83" r="6" fill="#1a1a1a"/>
      <circle cx="165" cy="83" r="6" fill="#1a1a1a"/>
      <circle cx="141" cy="81" r="2" fill="white"/>
      <circle cx="167" cy="81" r="2" fill="white"/>
      <!-- Smile -->
      <path d="M135 104 Q150 116 165 104" stroke="#2e7d32" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Neck -->
      <rect x="132" y="118" width="36" height="20" fill="#66bb6a" rx="5"/>
      <!-- Legs -->
      <ellipse cx="78" cy="155" rx="25" ry="15" fill="#66bb6a"/>
      <ellipse cx="222" cy="155" rx="25" ry="15" fill="#66bb6a"/>
      <ellipse cx="90" cy="220" rx="22" ry="14" fill="#66bb6a"/>
      <ellipse cx="210" cy="220" rx="22" ry="14" fill="#66bb6a"/>
      <!-- Tail -->
      <ellipse cx="150" cy="237" rx="12" ry="18" fill="#66bb6a"/>
      <!-- Toe lines -->
      <line x1="65" y1="152" x2="60" y2="160" stroke="#2e7d32" stroke-width="2"/>
      <line x1="78" y1="148" x2="75" y2="158" stroke="#2e7d32" stroke-width="2"/>
      <line x1="91" y1="152" x2="96" y2="160" stroke="#2e7d32" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'butterfly',
    emoji: '🦋',
    name: '蝴蝶',
    nameEn: 'Butterfly',
    color: '#e1bee7',
    colorDark: '#ce93d8',
    stars: 3,
    description: '简单英文句子',
    lines: [
      'The sky is blue today.',
      'I see a yellow sun.',
      'Birds fly in the sky.',
      'Flowers are very pretty.',
      'I am happy every day!'
    ],
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background - garden -->
      <rect width="300" height="300" fill="#f3e5f5" rx="20"/>
      <!-- Flowers in background -->
      <circle cx="40" cy="260" r="15" fill="#f48fb1" opacity="0.6"/>
      <circle cx="260" cy="260" r="15" fill="#ffcc02" opacity="0.6"/>
      <circle cx="150" cy="270" r="12" fill="#80deea" opacity="0.6"/>
      <rect x="37" y="265" width="5" height="30" fill="#66bb6a" opacity="0.7"/>
      <rect x="257" y="265" width="5" height="30" fill="#66bb6a" opacity="0.7"/>
      <!-- Upper left wing -->
      <path d="M150 150 Q80 60 45 90 Q20 120 60 155 Q95 185 150 155Z" fill="#ab47bc"/>
      <path d="M150 150 Q90 75 60 100 Q40 125 75 153 Q108 178 150 155Z" fill="#ce93d8" opacity="0.8"/>
      <!-- Wing patterns upper left -->
      <circle cx="90" cy="115" r="18" fill="#ff8a65" opacity="0.7"/>
      <circle cx="75" cy="138" r="10" fill="#fff9c4" opacity="0.8"/>
      <circle cx="110" cy="140" r="12" fill="#fff9c4" opacity="0.8"/>
      <!-- Upper right wing -->
      <path d="M150 150 Q220 60 255 90 Q280 120 240 155 Q205 185 150 155Z" fill="#ab47bc"/>
      <path d="M150 150 Q210 75 240 100 Q260 125 225 153 Q192 178 150 155Z" fill="#ce93d8" opacity="0.8"/>
      <!-- Wing patterns upper right -->
      <circle cx="210" cy="115" r="18" fill="#ff8a65" opacity="0.7"/>
      <circle cx="225" cy="138" r="10" fill="#fff9c4" opacity="0.8"/>
      <circle cx="190" cy="140" r="12" fill="#fff9c4" opacity="0.8"/>
      <!-- Lower left wing -->
      <path d="M150 155 Q80 180 65 230 Q75 265 120 255 Q155 240 150 200Z" fill="#7b1fa2"/>
      <path d="M150 155 Q90 185 78 228 Q86 256 122 247 Q152 233 150 200Z" fill="#ce93d8" opacity="0.6"/>
      <circle cx="100" cy="215" r="12" fill="#fff9c4" opacity="0.8"/>
      <!-- Lower right wing -->
      <path d="M150 155 Q220 180 235 230 Q225 265 180 255 Q145 240 150 200Z" fill="#7b1fa2"/>
      <path d="M150 155 Q210 185 222 228 Q214 256 178 247 Q148 233 150 200Z" fill="#ce93d8" opacity="0.6"/>
      <circle cx="200" cy="215" r="12" fill="#fff9c4" opacity="0.8"/>
      <!-- Body -->
      <ellipse cx="150" cy="155" rx="10" ry="55" fill="#4a148c"/>
      <!-- Head -->
      <circle cx="150" cy="98" r="14" fill="#4a148c"/>
      <!-- Antennae -->
      <path d="M146 88 Q125 60 115 48" stroke="#4a148c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="115" cy="48" r="6" fill="#ab47bc"/>
      <path d="M154 88 Q175 60 185 48" stroke="#4a148c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="185" cy="48" r="6" fill="#ab47bc"/>
      <!-- Eyes -->
      <circle cx="144" cy="96" r="5" fill="white"/>
      <circle cx="156" cy="96" r="5" fill="white"/>
      <circle cx="145" cy="96" r="3" fill="#1a1a1a"/>
      <circle cx="157" cy="96" r="3" fill="#1a1a1a"/>
    </svg>`
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { kidsAnimals };
}
