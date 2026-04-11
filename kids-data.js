// TypeKids - 幼儿版数据文件
// 18 种动物，覆盖不同难度和语言

const kidsAnimals = [
  // ==================== 难度⭐ - 入门级 ====================
  {
    id: 'panda',
    emoji: '🐼',
    name: '熊猫',
    nameEn: 'Panda',
    language: 'english',
    color: '#f8c8d4',
    stars: 1,
    description: '简单英文句子',
    descriptionEn: 'Simple sentences',
    lines: [
      'Hello I am a panda bear.',
      'I love to eat bamboo.',
      'My fur is black and white.',
      'I live in the forest.',
      'Pandas are so cute!'
    ],
    svg: makeAnimalSVG('panda')
  },
  {
    id: 'otter_letters_lower',
    emoji: '🦦',
    name: '小水獭',
    nameEn: 'Otter',
    language: 'english',
    color: '#d1f2eb',
    stars: 1,
    description: '小写字母分组练习',
    descriptionEn: 'Lowercase letter groups',
    lines: [
      'a b c d e',
      'f g h i j',
      'k l m n o',
      'p q r s t',
      'u v w x y z'
    ],
    svg: makeAnimalSVG('otter')
  },
  {
    id: 'seal_letters_upper',
    emoji: '🦭',
    name: '小海豹',
    nameEn: 'Seal',
    language: 'english',
    color: '#d6eaf8',
    stars: 1,
    description: '大写字母分组练习',
    descriptionEn: 'Uppercase letter groups',
    lines: [
      'A B C D E',
      'F G H I J',
      'K L M N O',
      'P Q R S T',
      'U V W X Y Z'
    ],
    svg: makeAnimalSVG('seal')
  },
  {
    id: 'rabbit',
    emoji: '🐰',
    name: '小兔子',
    nameEn: 'Rabbit',
    language: 'english',
    color: '#f3e5f5',
    stars: 1,
    description: '超短英文单词',
    descriptionEn: 'Short words',
    lines: [
      'cat dog pig cow',
      'sun moon star sky',
      'red blue green pink',
      'one two three four',
      'I can read now!'
    ],
    svg: makeAnimalSVG('rabbit')
  },
  {
    id: 'chick_words_basic',
    emoji: '🐥',
    name: '小鸡',
    nameEn: 'Chick',
    language: 'english',
    color: '#fff5ba',
    stars: 1,
    description: '三字母日常单词',
    descriptionEn: 'Easy 3-letter daily words',
    lines: [
      'cat dog sun hat',
      'pen cup bus map',
      'red bed box toy',
      'jam egg pig fox',
      'run hop sit nap'
    ],
    svg: makeAnimalSVG('chick')
  },
    emoji: '🦊',
    name: '小狐狸',
    nameEn: 'Fox',
    language: 'chinese',
    color: '#ffe0b2',
    stars: 1,
    description: '简单拼音字母',
    lines: [
      'a o e i u v',
      'b p m f d t',
      'n l g k h j',
      'q x zh ch sh r',
      'z c s y w ai'
    ],
    svg: makeAnimalSVG('fox')
  },
  {
    id: 'rabbit',
    emoji: '🐰',
    name: '小兔子',
    nameEn: 'Rabbit',
    language: 'english',
    color: '#f3e5f5',
    stars: 1,
    description: '超短英文单词',
    descriptionEn: 'Short words',
    lines: [
      'cat dog pig cow',
      'sun moon star sky',
      'red blue green pink',
      'one two three four',
      'I can read now!'
    ],
    svg: makeAnimalSVG('rabbit')
  },
  {
    id: 'bear',
    emoji: '🐻',
    name: '小熊',
    nameEn: 'Bear',
    language: 'chinese',
    color: '#d7ccc8',
    stars: 1,
    description: '简单汉字',
    lines: [
      '大小多少上下',
      '日月水火土金',
      '人口手足耳目',
      '山水田石头云',
      '天天向上进步'
    ],
    svg: makeAnimalSVG('bear')
  },

  // ==================== 难度⭐⭐ - 进阶级 ====================
  {
    id: 'dolphin',
    emoji: '🐬',
    name: '海豚',
    nameEn: 'Dolphin',
    language: 'english',
    color: '#b3e5fc',
    stars: 2,
    description: '数字和符号',
    descriptionEn: 'Numbers & symbols',
    lines: [
      '1 2 3 4 5 6 7 8 9 0',
      '11 22 33 44 55 66',
      '77 88 99 100 200',
      '+ - * / = ( ) ! ?',
      '123 + 456 = 579'
    ],
    svg: makeAnimalSVG('dolphin')
  },
  {
    id: 'lion',
    emoji: '🦁',
    name: '小狮子',
    nameEn: 'Lion',
    language: 'english',
    color: '#fff9c4',
    stars: 2,
    description: '英文单词练习',
    descriptionEn: 'Vocabulary words',
    lines: [
      'cat dog sun moon star',
      'red blue green yellow',
      'big small hot cold',
      'run jump play sing',
      'I love you very much!'
    ],
    svg: makeAnimalSVG('lion')
  },
  {
    id: 'penguin',
    emoji: '🐧',
    name: '小企鹅',
    nameEn: 'Penguin',
    language: 'chinese',
    color: '#cfd8dc',
    stars: 2,
    description: '中文词语',
    lines: [
      '苹果 香蕉 西瓜 葡萄',
      '小猫 小狗 小鸟 小鱼',
      '爸爸 妈妈 哥哥 姐姐',
      '你好 再见 谢谢 欢迎',
      '中国 北京 上海 家乡'
    ],
    svg: makeAnimalSVG('penguin')
  },
  {
    id: 'koala',
    emoji: '🐨',
    name: '考拉',
    nameEn: 'Koala',
    language: 'english',
    color: '#c8e6c9',
    stars: 2,
    description: '英文短句',
    descriptionEn: 'Short sentences',
    lines: [
      'The sky is blue today.',
      'Birds fly in the air.',
      'Flowers smell so sweet.',
      'I like to read books.',
      'Learning is fun for me!'
    ],
    svg: makeAnimalSVG('koala')
  },
  {
    id: 'alpaca_letters_pair',
    emoji: '🦙',
    name: '羊驼',
    nameEn: 'Alpaca',
    language: 'english',
    color: '#fbeee6',
    stars: 2,
    description: '大小写字母配对练习',
    descriptionEn: 'Upper and lowercase matching',
    lines: [
      'Aa Bb Cc Dd Ee',
      'Ff Gg Hh Ii Jj',
      'Kk Ll Mm Nn Oo',
      'Pp Qq Rr Ss Tt',
      'Uu Vv Ww Xx Yy Zz'
    ],
    svg: makeAnimalSVG('alpaca')
  },
  {
    id: 'hedgehog_letters_mix',
    emoji: '🦔',
    name: '小刺猬',
    nameEn: 'Hedgehog',
    language: 'english',
    color: '#e8d8c3',
    stars: 2,
    description: '随机大小写字母混合',
    descriptionEn: 'Mixed random uppercase and lowercase letters',
    lines: [
      'A b C d E f G h',
      'i J k L m N o P',
      'Q r S t U v W x',
      'y Z a B c D e F',
      'g H i J k L m N'
    ],
    svg: makeAnimalSVG('hedgehog')
  },
  {
    id: 'squirrel_words_title',
    emoji: '🐿️',
    name: '小松鼠',
    nameEn: 'Squirrel',
    language: 'english',
    color: '#f6d8b8',
    stars: 2,
    description: '日常物品首字母大写',
    descriptionEn: 'Daily objects with capital initials',
    lines: [
      'Apple Banana Water Bread',
      'Pencil Eraser Bottle Spoon',
      'Window Table Pillow Basket',
      'School Garden Market Library',
      'Morning Dinner Weekend Holiday'
    ],
    svg: makeAnimalSVG('squirrel')
  },
  {
    id: 'duck_words_mix',
    emoji: '🦆',
    name: '小鸭子',
    nameEn: 'Duck',
    language: 'english',
    color: '#d9ecff',
    stars: 2,
    description: '动物颜色数字混合单词',
    descriptionEn: 'Mixed animal, color and number words',
    lines: [
      'Red cat Two dogs',
      'Blue bird Three fish',
      'Green frog Four ducks',
      'Yellow bee Five ants',
      'Pink pig One rabbit'
    ],
    svg: makeAnimalSVG('duck')
  },

  // ==================== 难度⭐⭐⭐ - 挑战级 ====================
  {
    id: 'turtle',
    emoji: '🐢',
    name: '小乌龟',
    nameEn: 'Turtle',
    language: 'chinese',
    color: '#a5d6a7',
    stars: 3,
    description: '中文词组',
    lines: [
      '你好 再见 谢谢 对不起',
      '春天 夏天 秋天 冬天',
      '东南 西北 前后 左右',
      '红色 黄色 蓝色 绿色',
      '快乐 幸福 健康 平安'
    ],
    svg: makeAnimalSVG('turtle')
  },
  {
    id: 'butterfly',
    emoji: '🦋',
    name: '蝴蝶',
    nameEn: 'Butterfly',
    language: 'english',
    color: '#e1bee7',
    stars: 3,
    description: '英文句子',
    descriptionEn: 'Full sentences',
    lines: [
      'The sky is blue today.',
      'I see a yellow sun.',
      'Birds fly in the sky.',
      'Flowers are very pretty.',
      'I am happy every day!'
    ],
    svg: makeAnimalSVG('butterfly')
  },
  {
    id: 'elephant',
    emoji: '🐘',
    name: '大象',
    nameEn: 'Elephant',
    language: 'chinese',
    color: '#b0bec5',
    stars: 3,
    description: '中文句子',
    lines: [
      '今天天气真好啊。',
      '我和朋友去公园。',
      '看到很多美丽的花。',
      '我们一起玩游戏。',
      '真是快乐的一天！'
    ],
    svg: makeAnimalSVG('elephant')
  },
  {
    id: 'frog',
    emoji: '🐸',
    name: '小青蛙',
    nameEn: 'Frog',
    language: 'english',
    color: '#aed581',
    stars: 3,
    description: '英文段落',
    descriptionEn: 'Paragraphs',
    lines: [
      'I have a little frog.',
      'It likes to jump around.',
      'It lives near the pond.',
      'It sings a loud song.',
      'My frog is my friend!'
    ],
    svg: makeAnimalSVG('frog')
  },
  {
    id: 'sloth_words_long',
    emoji: '🦥',
    name: '树懒',
    nameEn: 'Sloth',
    language: 'english',
    color: '#d7ccc8',
    stars: 3,
    description: '稍长日常单词和短语',
    descriptionEn: 'Longer daily words and short phrases',
    lines: [
      'playground butterfly beautiful',
      'good morning happy birthday',
      'rainbow sunshine little garden',
      'reading together after school',
      'thank you my best friend'
    ],
    svg: makeAnimalSVG('sloth')
  },

  // ==================== 难度⭐⭐⭐⭐ - 专家级 ====================
  {
    id: 'unicorn',
    emoji: '🦄',
    name: '独角兽',
    nameEn: 'Unicorn',
    language: 'english',
    color: '#f8bbd9',
    stars: 4,
    description: '长英文句子',
    descriptionEn: 'Long sentences',
    lines: [
      'Once upon a time there was a magical unicorn.',
      'It had a shiny golden horn on its forehead.',
      'The unicorn could fly over rainbows and clouds.',
      'Children dreamed of seeing this wonderful creature.',
      'Magic and wonder followed the unicorn everywhere!'
    ],
    svg: makeAnimalSVG('unicorn')
  },
  {
    id: 'dragon',
    emoji: '🐉',
    name: '小龙',
    nameEn: 'Dragon',
    language: 'chinese',
    color: '#ffcc80',
    stars: 4,
    description: '中文段落',
    lines: [
      '从前有一只善良的小龙住在山里。',
      '它虽然会喷火但从不伤害别人。',
      '小龙喜欢帮助森林里的小动物们。',
      '大家都很喜欢这个友好的朋友。',
      '从此过上了幸福快乐的生活！'
    ],
    svg: makeAnimalSVG('dragon')
  },
  {
    id: 'whale',
    emoji: '🐋',
    name: '鲸鱼',
    nameEn: 'Whale',
    language: 'english',
    color: '#90caf9',
    stars: 4,
    description: '海洋主题英文',
    descriptionEn: 'Ocean theme',
    lines: [
      'The big blue whale swims in the ocean.',
      'It is the largest animal on our planet.',
      'Whales sing beautiful songs underwater.',
      'They travel across many seas and oceans.',
      'We must protect these gentle giants!'
    ],
    svg: makeAnimalSVG('whale')
  },
  {
    id: 'phoenix',
    emoji: '🦅',
    name: '凤凰',
    nameEn: 'Phoenix',
    language: 'chinese',
    color: '#ffab91',
    stars: 4,
    description: '成语故事',
    lines: [
      '凤凰是传说中的神鸟非常美丽。',
      '它生活在高高的梧桐树上。',
      '凤凰涅槃重生获得新的生命。',
      '象征着吉祥和幸福的美好。',
      '给人们带来希望和力量！'
    ],
    svg: makeAnimalSVG('phoenix')
  },
  {
    id: 'owl',
    emoji: '🦉',
    name: '猫头鹰',
    nameEn: 'Owl',
    language: 'english',
    color: '#bcaaa4',
    stars: 4,
    description: '知识主题',
    descriptionEn: 'Knowledge theme',
    lines: [
      'The wise old owl sits in the tree.',
      'It watches everything with big round eyes.',
      'Owls are very smart and quiet birds.',
      'They hunt at night and sleep in daytime.',
      'The owl knows many secrets of the forest!'
    ],
    svg: makeAnimalSVG('owl')
  },
  // ===== English +2 =====
  {
    id: 'cat',
    emoji: '🐱',
    name: '小猫',
    nameEn: 'Cat',
    language: 'english',
    color: '#fff9c4',
    stars: 2,
    description: 'Animal friends',
    descriptionEn: 'Animal friends',
    lines: [
      'My cat has soft warm fur.',
      'It likes to sleep all day.',
      'It plays with a ball of yarn.',
      'My cat drinks cold fresh milk.',
      'I love my cute little cat!'
    ],
    svg: makeAnimalSVG('cat')
  },
  {
    id: 'dog',
    emoji: '🐶',
    name: '小狗',
    nameEn: 'Dog',
    language: 'english',
    color: '#fbe9e7',
    stars: 2,
    description: 'Best friends',
    descriptionEn: 'Best friends',
    lines: [
      'My dog wags its fluffy tail.',
      'It runs fast in the park.',
      'My dog loves to play fetch.',
      'It barks loud at the door.',
      'Dogs are our best friends!'
    ],
    svg: makeAnimalSVG('dog')
  },
  // ===== Chinese +4 =====
  {
    id: 'monkey',
    emoji: '🐵',
    name: '小猴子',
    nameEn: 'Monkey',
    language: 'chinese',
    color: '#fce4ec',
    stars: 2,
    description: '中文词语',
    descriptionEn: 'Chinese words',
    lines: [
      '香蕉 苹果 桃子 西瓜',
      '爬树 跳跃 奔跑 玩耍',
      '聪明 活泼 快乐 顽皮',
      '森林 山洞 河流 草地',
      '我喜欢吃香蕉！'
    ],
    svg: makeAnimalSVG('monkey')
  },
  {
    id: 'hamster',
    emoji: '🐹',
    name: '仓鼠',
    nameEn: 'Hamster',
    language: 'chinese',
    color: '#fff3e0',
    stars: 1,
    description: '简单词语',
    descriptionEn: 'Simple words',
    lines: [
      '大 小 多 少 好 坏',
      '吃 喝 跑 跳 笑 哭',
      '手 脚 眼 耳 口 鼻',
      '红 黄 蓝 绿 白 黑',
      '今天我很开心！'
    ],
    svg: makeAnimalSVG('hamster')
  },
  {
    id: 'parrot',
    emoji: '🦜',
    name: '鹦鹉',
    nameEn: 'Parrot',
    language: 'chinese',
    color: '#e8f5e9',
    stars: 3,
    description: '中文短句',
    descriptionEn: 'Chinese sentences',
    lines: [
      '鹦鹉会学人说话真聪明。',
      '它穿着绿色羽毛的外衣。',
      '鹦鹉喜欢站在树枝上唱歌。',
      '我们要好好爱护小动物。',
      '动物是我们的好朋友！'
    ],
    svg: makeAnimalSVG('parrot')
  },
  {
    id: 'horse',
    emoji: '🐴',
    name: '小马',
    nameEn: 'Horse',
    language: 'chinese',
    color: '#f5f5f5',
    stars: 4,
    description: '成语故事',
    descriptionEn: 'Idiom stories',
    lines: [
      '小马要过河不知道深浅。',
      '老牛说水很浅可以过去。',
      '小松鼠说水很深会淹死。',
      '小马自己走进去试一试。',
      '实践才能出真知识！'
    ],
    svg: makeAnimalSVG('horse')
  },
  {
    id: 'tiger',
    emoji: '🐯',
    name: '小老虎',
    nameEn: 'Tiger',
    language: 'chinese',
    color: '#ffcc80',
    stars: 4,
    description: '动物故事',
    lines: [
      '森林里住着一只勇敢的小老虎。',
      '它每天练习跑步和跳跃的本领。',
      '小老虎帮助其他弱小的动物。',
      '大家都叫它森林小英雄。',
      '勇气和智慧让它不断成长！'
    ],
    svg: makeAnimalSVG('tiger')
  }
];

// SVG 生成器 - 为每种动物生成独特的卡通 SVG
function makeAnimalSVG(type) {
  const svgs = {
    panda: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
      <rect x="240" y="20" width="12" height="260" fill="#81c784" rx="6"/>
      <ellipse cx="150" cy="200" rx="75" ry="70" fill="white"/>
      <ellipse cx="105" cy="220" rx="30" ry="25" fill="#333"/>
      <ellipse cx="195" cy="220" rx="30" ry="25" fill="#333"/>
      <circle cx="150" cy="120" r="70" fill="white"/>
      <circle cx="95" cy="65" r="28" fill="#333"/>
      <circle cx="205" cy="65" r="28" fill="#333"/>
      <ellipse cx="118" cy="110" rx="22" ry="20" fill="#333"/>
      <ellipse cx="182" cy="110" rx="22" ry="20" fill="#333"/>
      <circle cx="118" cy="110" r="10" fill="white"/>
      <circle cx="182" cy="110" r="10" fill="white"/>
      <circle cx="120" cy="108" r="6" fill="#1a1a1a"/>
      <circle cx="184" cy="108" r="6" fill="#1a1a1a"/>
      <ellipse cx="150" cy="130" rx="12" ry="8" fill="#333"/>
      <path d="M138 142 Q150 155 162 142" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="105" cy="135" r="14" fill="#ffb3c1" opacity="0.6"/>
      <circle cx="195" cy="135" r="14" fill="#ffb3c1" opacity="0.6"/>
    </svg>`,
    fox: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fff8e1" rx="20"/>
      <circle cx="250" cy="50" r="30" fill="#ffd54f" opacity="0.7"/>
      <ellipse cx="150" cy="210" rx="65" ry="60" fill="#ff8f00"/>
      <ellipse cx="150" cy="220" rx="38" ry="42" fill="#fff8e1"/>
      <path d="M210 240 Q270 180 240 140 Q220 120 200 150 Q190 200 210 240" fill="#ff8f00"/>
      <ellipse cx="150" cy="120" rx="62" ry="58" fill="#ff8f00"/>
      <polygon points="100,75 85,30 125,65" fill="#ff8f00"/>
      <polygon points="200,75 215,30 175,65" fill="#ff8f00"/>
      <ellipse cx="150" cy="135" rx="42" ry="35" fill="#fff8e1"/>
      <ellipse cx="128" cy="110" rx="12" ry="14" fill="#1a1a1a"/>
      <ellipse cx="172" cy="110" rx="12" ry="14" fill="#1a1a1a"/>
      <circle cx="131" cy="107" r="4" fill="white"/>
      <circle cx="175" cy="107" r="4" fill="white"/>
      <ellipse cx="150" cy="132" rx="8" ry="6" fill="#bf360c"/>
      <path d="M140 142 Q150 152 160 142" stroke="#bf360c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="112" cy="130" r="12" fill="#ff8a65" opacity="0.5"/>
      <circle cx="188" cy="130" r="12" fill="#ff8a65" opacity="0.5"/>
    </svg>`,
    rabbit: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fce4ec" rx="20"/>
      <ellipse cx="150" cy="210" rx="70" ry="65" fill="#f5f5f5"/>
      <ellipse cx="150" cy="220" rx="40" ry="45" fill="#fff"/>
      <circle cx="150" cy="115" r="65" fill="#f5f5f5"/>
      <ellipse cx="110" cy="65" rx="18" ry="55" fill="#f5f5f5"/>
      <ellipse cx="190" cy="65" rx="18" ry="55" fill="#f5f5f5"/>
      <ellipse cx="110" cy="65" rx="10" ry="40" fill="#ffcdd2"/>
      <ellipse cx="190" cy="65" rx="10" ry="40" fill="#ffcdd2"/>
      <circle cx="125" cy="105" r="11" fill="#1a1a1a"/>
      <circle cx="175" cy="105" r="11" fill="#1a1a1a"/>
      <circle cx="128" cy="102" r="4" fill="white"/>
      <circle cx="178" cy="102" r="4" fill="white"/>
      <ellipse cx="150" cy="128" rx="9" ry="6" fill="#ffab91"/>
      <path d="M142 138 Q150 148 158 138" stroke="#ffab91" stroke-width="2.5" fill="none"/>
      <circle cx="115" cy="125" r="12" fill="#ffcdd2" opacity="0.5"/>
      <circle cx="185" cy="125" r="12" fill="#ffcdd2" opacity="0.5"/>
    </svg>`,
    bear: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#efebe9" rx="20"/>
      <ellipse cx="150" cy="215" rx="75" ry="70" fill="#8d6e63"/>
      <ellipse cx="150" cy="225" rx="45" ry="50" fill="#d7ccc8"/>
      <circle cx="150" cy="125" r="70" fill="#8d6e63"/>
      <circle cx="85" cy="70" r="25" fill="#8d6e63"/>
      <circle cx="215" cy="70" r="25" fill="#8d6e63"/>
      <circle cx="85" cy="70" r="15" fill="#d7ccc8"/>
      <circle cx="215" cy="70" r="15" fill="#d7ccc8"/>
      <ellipse cx="125" cy="115" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="175" cy="115" rx="14" ry="16" fill="#1a1a1a"/>
      <circle cx="125" cy="113" r="5" fill="white"/>
      <circle cx="175" cy="113" r="5" fill="white"/>
      <ellipse cx="150" cy="140" rx="22" ry="16" fill="#d7ccc8"/>
      <ellipse cx="150" cy="135" rx="12" ry="8" fill="#5d4037"/>
      <path d="M140 150 Q150 160 160 150" stroke="#5d4037" stroke-width="3" fill="none"/>
      <circle cx="110" cy="140" r="10" fill="#ffccbc" opacity="0.5"/>
      <circle cx="190" cy="140" r="10" fill="#ffccbc" opacity="0.5"/>
    </svg>`,
    dolphin: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e3f2fd" rx="20"/>
      <rect x="0" y="180" width="300" height="120" fill="#29b6f6" opacity="0.4"/>
      <circle cx="55" cy="55" r="28" fill="#ffd54f"/>
      <ellipse cx="155" cy="155" rx="90" ry="40" fill="#0288d1" transform="rotate(-20 155 155)"/>
      <ellipse cx="148" cy="160" rx="65" ry="22" fill="#b3e5fc" transform="rotate(-20 148 160)"/>
      <path d="M165 115 Q185 80 175 120" fill="#0277bd"/>
      <path d="M240 175 Q275 155 275 185 Q265 195 240 175Z" fill="#0288d1"/>
      <ellipse cx="90" cy="160" rx="42" ry="34" fill="#0288d1"/>
      <ellipse cx="60" cy="165" rx="28" ry="16" fill="#0288d1"/>
      <ellipse cx="60" cy="167" rx="22" ry="11" fill="#b3e5fc"/>
      <circle cx="90" cy="148" r="12" fill="white"/>
      <circle cx="92" cy="148" r="7" fill="#1a1a1a"/>
      <circle cx="94" cy="145" r="2.5" fill="white"/>
      <path d="M55 172 Q72 182 88 175" stroke="#0277bd" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    lion: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fff8e1" rx="20"/>
      <circle cx="150" cy="145" r="88" fill="#e65100"/>
      <circle cx="150" cy="60" r="14" fill="#bf360c"/>
      <circle cx="185" cy="70" r="13" fill="#bf360c"/>
      <circle cx="215" cy="95" r="13" fill="#bf360c"/>
      <circle cx="85" cy="70" r="13" fill="#bf360c"/>
      <circle cx="58" cy="95" r="13" fill="#bf360c"/>
      <circle cx="150" cy="145" r="70" fill="#f57f17"/>
      <ellipse cx="150" cy="148" rx="58" ry="54" fill="#ffcc02"/>
      <circle cx="100" cy="103" r="18" fill="#ffcc02"/>
      <circle cx="200" cy="103" r="18" fill="#ffcc02"/>
      <ellipse cx="128" cy="135" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="172" cy="135" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="128" cy="133" rx="9" ry="11" fill="#c8a800"/>
      <ellipse cx="172" cy="133" rx="9" ry="11" fill="#c8a800"/>
      <ellipse cx="150" cy="158" rx="26" ry="20" fill="#ffb74d"/>
      <ellipse cx="150" cy="155" rx="10" ry="7" fill="#d84315"/>
      <path d="M140 165 Q150 175 160 165" stroke="#d84315" stroke-width="3" fill="none"/>
    </svg>`,
    penguin: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e3f2fd" rx="20"/>
      <ellipse cx="150" cy="220" rx="70" ry="75" fill="#263238"/>
      <ellipse cx="150" cy="225" rx="45" ry="55" fill="#fff"/>
      <circle cx="150" cy="115" r="60" fill="#263238"/>
      <ellipse cx="125" cy="105" rx="14" ry="16" fill="#fff"/>
      <ellipse cx="175" cy="105" rx="14" ry="16" fill="#fff"/>
      <circle cx="125" cy="105" r="6" fill="#1a1a1a"/>
      <circle cx="175" cy="105" r="6" fill="#1a1a1a"/>
      <polygon points="150,125 135,145 165,145" fill="#ff9800"/>
      <ellipse cx="100" cy="200" rx="20" ry="35" fill="#263238"/>
      <ellipse cx="200" cy="200" rx="20" ry="35" fill="#263238"/>
      <circle cx="115" cy="135" r="10" fill="#ff7043" opacity="0.5"/>
      <circle cx="185" cy="135" r="10" fill="#ff7043" opacity="0.5"/>
    </svg>`,
    koala: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
      <ellipse cx="150" cy="210" rx="70" ry="65" fill="#9e9e9e"/>
      <ellipse cx="150" cy="215" rx="45" ry="48" fill="#bdbdbd"/>
      <circle cx="150" cy="115" r="65" fill="#9e9e9e"/>
      <circle cx="80" cy="65" r="28" fill="#9e9e9e"/>
      <circle cx="220" cy="65" r="28" fill="#9e9e9e"/>
      <circle cx="80" cy="65" r="16" fill="#bdbdbd"/>
      <circle cx="220" cy="65" r="16" fill="#bdbdbd"/>
      <ellipse cx="120" cy="105" rx="18" ry="20" fill="#37474f"/>
      <ellipse cx="180" cy="105" rx="18" ry="20" fill="#37474f"/>
      <circle cx="120" cy="105" r="7" fill="#fff"/>
      <circle cx="180" cy="105" r="7" fill="#fff"/>
      <ellipse cx="150" cy="130" rx="18" ry="14" fill="#37474f"/>
      <circle cx="105" cy="135" r="14" fill="#ef9a9a" opacity="0.5"/>
      <circle cx="195" cy="135" r="14" fill="#ef9a9a" opacity="0.5"/>
    </svg>`,
    turtle: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
      <ellipse cx="150" cy="160" rx="85" ry="75" fill="#388e3c"/>
      <polygon points="150,100 168,110 168,130 150,140 132,130 132,110" fill="#2e7d32" opacity="0.7"/>
      <polygon points="110,120 128,130 128,150 110,160 92,150 92,130" fill="#2e7d32" opacity="0.7"/>
      <polygon points="190,120 208,130 208,150 190,160 172,150 172,130" fill="#2e7d32" opacity="0.7"/>
      <circle cx="150" cy="95" r="36" fill="#66bb6a"/>
      <circle cx="137" cy="83" r="10" fill="white"/>
      <circle cx="163" cy="83" r="10" fill="white"/>
      <circle cx="139" cy="83" r="6" fill="#1a1a1a"/>
      <circle cx="165" cy="83" r="6" fill="#1a1a1a"/>
      <path d="M135 104 Q150 116 165 104" stroke="#2e7d32" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="78" cy="155" rx="25" ry="15" fill="#66bb6a"/>
      <ellipse cx="222" cy="155" rx="25" ry="15" fill="#66bb6a"/>
    </svg>`,
    butterfly: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#f3e5f5" rx="20"/>
      <path d="M150 150 Q80 60 45 90 Q20 120 60 155 Q95 185 150 155Z" fill="#ab47bc"/>
      <path d="M150 150 Q220 60 255 90 Q280 120 240 155 Q205 185 150 155Z" fill="#ab47bc"/>
      <path d="M150 155 Q80 180 65 230 Q75 265 120 255 Q155 240 150 200Z" fill="#7b1fa2"/>
      <path d="M150 155 Q220 180 235 230 Q225 265 180 255 Q145 240 150 200Z" fill="#7b1fa2"/>
      <circle cx="90" cy="115" r="18" fill="#ff8a65" opacity="0.7"/>
      <circle cx="210" cy="115" r="18" fill="#ff8a65" opacity="0.7"/>
      <ellipse cx="150" cy="155" rx="10" ry="55" fill="#4a148c"/>
      <circle cx="150" cy="98" r="14" fill="#4a148c"/>
      <path d="M146 88 Q125 60 115 48" stroke="#4a148c" stroke-width="3" fill="none"/>
      <path d="M154 88 Q175 60 185 48" stroke="#4a148c" stroke-width="3" fill="none"/>
      <circle cx="115" cy="48" r="6" fill="#ab47bc"/>
      <circle cx="185" cy="48" r="6" fill="#ab47bc"/>
    </svg>`,
    elephant: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#cfd8dc" rx="20"/>
      <ellipse cx="150" cy="200" rx="85" ry="75" fill="#90a4ae"/>
      <ellipse cx="150" cy="210" rx="50" ry="55" fill="#cfd8dc"/>
      <circle cx="150" cy="115" r="65" fill="#90a4ae"/>
      <ellipse cx="65" cy="130" rx="45" ry="55" fill="#90a4ae"/>
      <ellipse cx="235" cy="130" rx="45" ry="55" fill="#90a4ae"/>
      <ellipse cx="65" cy="130" rx="25" ry="35" fill="#cfd8dc" opacity="0.5"/>
      <ellipse cx="235" cy="130" rx="25" ry="35" fill="#cfd8dc" opacity="0.5"/>
      <circle cx="130" cy="100" r="10" fill="#1a1a1a"/>
      <circle cx="170" cy="100" r="10" fill="#1a1a1a"/>
      <path d="M145 135 Q150 155 140 175 Q135 195 150 205" stroke="#90a4ae" stroke-width="18" fill="none" stroke-linecap="round"/>
      <circle cx="115" cy="130" r="8" fill="#ef9a9a" opacity="0.6"/>
      <circle cx="185" cy="130" r="8" fill="#ef9a9a" opacity="0.6"/>
    </svg>`,
    frog: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#dcedc8" rx="20"/>
      <ellipse cx="150" cy="200" rx="80" ry="70" fill="#7cb342"/>
      <ellipse cx="150" cy="210" rx="50" ry="50" fill="#aed581"/>
      <circle cx="150" cy="110" r="65" fill="#7cb342"/>
      <circle cx="105" cy="85" r="25" fill="#7cb342"/>
      <circle cx="195" cy="85" r="25" fill="#7cb342"/>
      <circle cx="105" cy="85" r="14" fill="#fff"/>
      <circle cx="195" cy="85" r="14" fill="#fff"/>
      <circle cx="105" cy="85" r="7" fill="#1a1a1a"/>
      <circle cx="195" cy="85" r="7" fill="#1a1a1a"/>
      <path d="M120 130 Q150 150 180 130" stroke="#558b2f" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="85" cy="180" rx="30" ry="20" fill="#7cb342"/>
      <ellipse cx="215" cy="180" rx="30" ry="20" fill="#7cb342"/>
      <circle cx="125" cy="125" r="10" fill="#ef9a9a" opacity="0.5"/>
      <circle cx="175" cy="125" r="10" fill="#ef9a9a" opacity="0.5"/>
    </svg>`,
    unicorn: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fce4ec" rx="20"/>
      <ellipse cx="150" cy="200" rx="75" ry="70" fill="#f8bbd9"/>
      <ellipse cx="150" cy="210" rx="45" ry="50" fill="#fff"/>
      <circle cx="150" cy="115" r="60" fill="#f8bbd9"/>
      <polygon points="150,35 140,75 150,65 160,75" fill="#ffd54f"/>
      <ellipse cx="105" cy="105" rx="14" ry="16" fill="#1a1a1a"/>
      <ellipse cx="195" cy="105" rx="14" ry="16" fill="#1a1a1a"/>
      <circle cx="105" cy="103" r="5" fill="white"/>
      <circle cx="195" cy="103" r="5" fill="white"/>
      <ellipse cx="150" cy="135" rx="10" ry="7" fill="#f48fb1"/>
      <path d="M138 148 Q150 160 162 148" stroke="#f48fb1" stroke-width="3" fill="none"/>
      <path d="M85 80 Q60 50 55 30" stroke="#f8bbd9" stroke-width="4" fill="none"/>
      <circle cx="115" cy="130" r="12" fill="#ffcdd2" opacity="0.5"/>
      <circle cx="185" cy="130" r="12" fill="#ffcdd2" opacity="0.5"/>
    </svg>`,
    dragon: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fff3e0" rx="20"/>
      <ellipse cx="150" cy="200" rx="80" ry="70" fill="#ff7043"/>
      <ellipse cx="150" cy="210" rx="50" ry="50" fill="#ffcc80"/>
      <circle cx="150" cy="110" r="60" fill="#ff7043"/>
      <polygon points="90,70 75,35 110,65" fill="#ff7043"/>
      <polygon points="210,70 225,35 190,65" fill="#ff7043"/>
      <ellipse cx="115" cy="100" rx="16" ry="18" fill="#fff"/>
      <ellipse cx="185" cy="100" rx="16" ry="18" fill="#fff"/>
      <circle cx="115" cy="100" r="7" fill="#1a1a1a"/>
      <circle cx="185" cy="100" r="7" fill="#1a1a1a"/>
      <path d="M130 130 Q150 145 170 130" stroke="#e64a19" stroke-width="3" fill="none"/>
      <path d="M70 180 Q50 160 55 140" stroke="#ff7043" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="120" cy="125" r="8" fill="#ef9a9a" opacity="0.5"/>
      <circle cx="180" cy="125" r="8" fill="#ef9a9a" opacity="0.5"/>
    </svg>`,
    whale: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#e3f2fd" rx="20"/>
      <ellipse cx="150" cy="170" rx="100" ry="65" fill="#42a5f5"/>
      <ellipse cx="150" cy="180" rx="70" ry="40" fill="#90caf9"/>
      <path d="M50 150 Q20 140 25 170 Q30 190 55 175" fill="#42a5f5"/>
      <path d="M250 160 Q280 140 275 175 Q270 195 245 175" fill="#42a5f5"/>
      <circle cx="110" cy="155" r="12" fill="#1a1a1a"/>
      <circle cx="110" cy="155" r="5" fill="white"/>
      <path d="M130 180 Q150 195 180 185" stroke="#1565c0" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="80" cy="120" r="8" fill="white" opacity="0.6"/>
      <circle cx="95" cy="110" r="6" fill="white" opacity="0.5"/>
      <circle cx="70" cy="135" r="5" fill="white" opacity="0.4"/>
    </svg>`,
    phoenix: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fff3e0" rx="20"/>
      <path d="M150 60 Q180 80 175 120 Q170 160 150 180 Q130 160 125 120 Q120 80 150 60" fill="#ff7043"/>
      <path d="M150 60 Q170 75 165 115 Q160 155 150 170 Q140 155 135 115 Q130 75 150 60" fill="#ffcc80"/>
      <circle cx="135" cy="100" r="10" fill="#1a1a1a"/>
      <circle cx="165" cy="100" r="10" fill="#1a1a1a"/>
      <circle cx="135" cy="100" r="4" fill="white"/>
      <circle cx="165" cy="100" r="4" fill="white"/>
      <path d="M145 125 Q150 135 155 125" stroke="#e64a19" stroke-width="3" fill="none"/>
      <path d="M150 60 L150 30" stroke="#ffd54f" stroke-width="6" stroke-linecap="round"/>
      <path d="M150 30 L140 45 M150 30 L150 40 M150 30 L160 45" stroke="#ffd54f" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 140 Q60 160 70 200" stroke="#ff7043" stroke-width="8" fill="none"/>
      <path d="M200 140 Q240 160 230 200" stroke="#ff7043" stroke-width="8" fill="none"/>
    </svg>`,
    owl: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#efebe9" rx="20"/>
      <ellipse cx="150" cy="180" rx="75" ry="80" fill="#bcaaa4"/>
      <ellipse cx="150" cy="190" rx="45" ry="55" fill="#d7ccc8"/>
      <circle cx="150" cy="110" r="65" fill="#bcaaa4"/>
      <polygon points="120,70 110,45 135,75" fill="#bcaaa4"/>
      <polygon points="180,70 190,45 165,75" fill="#bcaaa4"/>
      <circle cx="120" cy="105" r="28" fill="#fff"/>
      <circle cx="180" cy="105" r="28" fill="#fff"/>
      <circle cx="120" cy="105" r="12" fill="#1a1a1a"/>
      <circle cx="180" cy="105" r="12" fill="#1a1a1a"/>
      <polygon points="150,125 140,145 160,145" fill="#ff9800"/>
      <path d="M100 160 Q85 180 90 200" stroke="#8d6e63" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M200 160 Q215 180 210 200" stroke="#8d6e63" stroke-width="6" fill="none" stroke-linecap="round"/>
    </svg>`,
    tiger: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fff3e0" rx="20"/>
      <ellipse cx="150" cy="200" rx="75" ry="70" fill="#ff9800"/>
      <ellipse cx="150" cy="210" rx="45" ry="50" fill="#fff"/>
      <circle cx="150" cy="115" r="65" fill="#ff9800"/>
      <polygon points="95,65 80,30 115,60" fill="#ff9800"/>
      <polygon points="205,65 220,30 185,60" fill="#ff9800"/>
      <ellipse cx="120" cy="105" rx="16" ry="18" fill="#1a1a1a"/>
      <ellipse cx="180" cy="105" rx="16" ry="18" fill="#1a1a1a"/>
      <circle cx="120" cy="103" r="5" fill="white"/>
      <circle cx="180" cy="103" r="5" fill="white"/>
      <ellipse cx="150" cy="135" rx="14" ry="10" fill="#fff"/>
      <path d="M140 145 Q150 155 160 145" stroke="#1a1a1a" stroke-width="3" fill="none"/>
      <path d="M100 80 L110 100 M120 75 L125 95 M130 78 L130 95" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <path d="M170 78 L170 95 M180 75 L175 95 M200 80 L190 100" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
      <circle cx="110" cy="130" r="10" fill="#ffccbc" opacity="0.5"/>
      <circle cx="190" cy="130" r="10" fill="#ffccbc" opacity="0.5"/>
    </svg>`
  };

  // ---- 新增动物 SVG ----
  svgs.cat = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#fff8e1" rx="20"/>
    <ellipse cx="150" cy="210" rx="70" ry="65" fill="#ffca28"/>
    <ellipse cx="150" cy="220" rx="42" ry="48" fill="#fff9c4"/>
    <circle cx="150" cy="115" r="65" fill="#ffca28"/>
    <polygon points="95,75 80,35 120,70" fill="#ffca28"/>
    <polygon points="205,75 220,35 180,70" fill="#ffca28"/>
    <polygon points="95,75 82,42 116,68" fill="#ffecb3"/>
    <polygon points="205,75 218,42 184,68" fill="#ffecb3"/>
    <ellipse cx="125" cy="108" rx="14" ry="16" fill="#1a1a1a"/>
    <ellipse cx="175" cy="108" rx="14" ry="16" fill="#1a1a1a"/>
    <circle cx="125" cy="105" r="5" fill="white"/>
    <circle cx="175" cy="105" r="5" fill="white"/>
    <ellipse cx="150" cy="132" rx="10" ry="7" fill="#f06292"/>
    <path d="M138 142 Q150 152 162 142" stroke="#f06292" stroke-width="2.5" fill="none"/>
    <line x1="110" y1="138" x2="70" y2="130" stroke="#bbb" stroke-width="2"/>
    <line x1="110" y1="143" x2="68" y2="143" stroke="#bbb" stroke-width="2"/>
    <line x1="190" y1="138" x2="230" y2="130" stroke="#bbb" stroke-width="2"/>
    <line x1="190" y1="143" x2="232" y2="143" stroke="#bbb" stroke-width="2"/>
    <circle cx="112" cy="130" r="11" fill="#f8bbd0" opacity="0.5"/>
    <circle cx="188" cy="130" r="11" fill="#f8bbd0" opacity="0.5"/>
  </svg>`;

  svgs.dog = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#fbe9e7" rx="20"/>
    <ellipse cx="150" cy="210" rx="72" ry="66" fill="#d7a26a"/>
    <ellipse cx="150" cy="220" rx="44" ry="50" fill="#f5deb3"/>
    <circle cx="150" cy="115" r="65" fill="#d7a26a"/>
    <ellipse cx="85" cy="95" rx="22" ry="40" fill="#c49a6c" transform="rotate(-15 85 95)"/>
    <ellipse cx="215" cy="95" rx="22" ry="40" fill="#c49a6c" transform="rotate(15 215 95)"/>
    <ellipse cx="125" cy="108" rx="14" ry="16" fill="#1a1a1a"/>
    <ellipse cx="175" cy="108" rx="14" ry="16" fill="#1a1a1a"/>
    <circle cx="125" cy="105" r="5" fill="white"/>
    <circle cx="175" cy="105" r="5" fill="white"/>
    <ellipse cx="150" cy="138" rx="22" ry="16" fill="#f5deb3"/>
    <ellipse cx="150" cy="133" rx="14" ry="9" fill="#c49a6c"/>
    <path d="M138 148 Q150 158 162 148" stroke="#c49a6c" stroke-width="3" fill="none"/>
    <circle cx="112" cy="132" r="10" fill="#ef9a9a" opacity="0.5"/>
    <circle cx="188" cy="132" r="10" fill="#ef9a9a" opacity="0.5"/>
  </svg>`;

  svgs.deer = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f1f8e9" rx="20"/>
    <ellipse cx="150" cy="208" rx="72" ry="66" fill="#ce8a56"/>
    <ellipse cx="150" cy="218" rx="44" ry="50" fill="#f5e6d3"/>
    <circle cx="150" cy="112" r="63" fill="#ce8a56"/>
    <path d="M85 80 Q60 45 45 25 Q65 30 75 55 Q55 35 65 60 Q80 50 85 80" fill="#a0522d"/>
    <path d="M215 80 Q240 45 255 25 Q235 30 225 55 Q245 35 235 60 Q220 50 215 80" fill="#a0522d"/>
    <ellipse cx="125" cy="108" rx="13" ry="15" fill="#1a1a1a"/>
    <ellipse cx="175" cy="108" rx="13" ry="15" fill="#1a1a1a"/>
    <circle cx="125" cy="105" r="5" fill="white"/>
    <circle cx="175" cy="105" r="5" fill="white"/>
    <ellipse cx="150" cy="132" rx="12" ry="8" fill="#8b4513"/>
    <path d="M138 142 Q150 153 162 142" stroke="#8b4513" stroke-width="2.5" fill="none"/>
    <circle cx="113" cy="132" r="10" fill="#ffccbc" opacity="0.5"/>
    <circle cx="187" cy="132" r="10" fill="#ffccbc" opacity="0.5"/>
  </svg>`;

  svgs.monkey = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#fce4ec" rx="20"/>
    <ellipse cx="150" cy="208" rx="72" ry="66" fill="#a0522d"/>
    <ellipse cx="150" cy="218" rx="45" ry="50" fill="#d2996f"/>
    <circle cx="150" cy="112" r="63" fill="#a0522d"/>
    <circle cx="80" cy="85" r="28" fill="#a0522d"/>
    <circle cx="220" cy="85" r="28" fill="#a0522d"/>
    <circle cx="80" cy="85" r="16" fill="#d2996f"/>
    <circle cx="220" cy="85" r="16" fill="#d2996f"/>
    <ellipse cx="150" cy="118" rx="48" ry="42" fill="#d2996f"/>
    <ellipse cx="125" cy="105" rx="13" ry="15" fill="#1a1a1a"/>
    <ellipse cx="175" cy="105" rx="13" ry="15" fill="#1a1a1a"/>
    <circle cx="125" cy="102" r="5" fill="white"/>
    <circle cx="175" cy="102" r="5" fill="white"/>
    <ellipse cx="150" cy="130" rx="16" ry="10" fill="#8b4513"/>
    <path d="M138 140 Q150 150 162 140" stroke="#8b4513" stroke-width="3" fill="none"/>
    <circle cx="110" cy="128" r="10" fill="#ffab91" opacity="0.6"/>
    <circle cx="190" cy="128" r="10" fill="#ffab91" opacity="0.6"/>
  </svg>`;

  svgs.hamster = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#fff3e0" rx="20"/>
    <ellipse cx="150" cy="212" rx="70" ry="65" fill="#ffb74d"/>
    <ellipse cx="150" cy="222" rx="42" ry="48" fill="#ffe0b2"/>
    <circle cx="150" cy="115" r="60" fill="#ffb74d"/>
    <ellipse cx="85" cy="120" rx="30" ry="24" fill="#ffb74d"/>
    <ellipse cx="215" cy="120" rx="30" ry="24" fill="#ffb74d"/>
    <circle cx="90" cy="75" r="20" fill="#ffb74d"/>
    <circle cx="210" cy="75" r="20" fill="#ffb74d"/>
    <circle cx="90" cy="75" r="11" fill="#ffe0b2"/>
    <circle cx="210" cy="75" r="11" fill="#ffe0b2"/>
    <ellipse cx="125" cy="108" rx="13" ry="15" fill="#1a1a1a"/>
    <ellipse cx="175" cy="108" rx="13" ry="15" fill="#1a1a1a"/>
    <circle cx="125" cy="105" r="5" fill="white"/>
    <circle cx="175" cy="105" r="5" fill="white"/>
    <ellipse cx="150" cy="130" rx="10" ry="7" fill="#e65100"/>
    <path d="M140 140 Q150 150 160 140" stroke="#e65100" stroke-width="2.5" fill="none"/>
    <circle cx="112" cy="128" r="12" fill="#ffccbc" opacity="0.5"/>
    <circle cx="188" cy="128" r="12" fill="#ffccbc" opacity="0.5"/>
  </svg>`;

  svgs.parrot = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#e8f5e9" rx="20"/>
    <ellipse cx="150" cy="210" rx="68" ry="72" fill="#4caf50"/>
    <ellipse cx="150" cy="218" rx="40" ry="52" fill="#a5d6a7"/>
    <circle cx="150" cy="108" r="62" fill="#4caf50"/>
    <path d="M120 65 Q105 40 95 25 Q115 38 120 65" fill="#ffeb3b"/>
    <ellipse cx="125" cy="100" rx="15" ry="17" fill="#1a1a1a"/>
    <ellipse cx="175" cy="100" rx="15" ry="17" fill="#1a1a1a"/>
    <circle cx="125" cy="98" r="6" fill="white"/>
    <circle cx="175" cy="98" r="6" fill="white"/>
    <path d="M135 122 Q150 118 165 122 Q158 136 150 138 Q142 136 135 122Z" fill="#ff9800"/>
    <circle cx="110" cy="122" r="12" fill="#ff5722" opacity="0.4"/>
    <circle cx="190" cy="122" r="12" fill="#ff5722" opacity="0.4"/>
    <path d="M95 175 Q70 160 65 190" stroke="#388e3c" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M205 175 Q230 160 235 190" stroke="#388e3c" stroke-width="10" fill="none" stroke-linecap="round"/>
  </svg>`;

  svgs.horse = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#f5f5f5" rx="20"/>
    <ellipse cx="150" cy="205" rx="75" ry="68" fill="#bdbdbd"/>
    <ellipse cx="150" cy="215" rx="45" ry="52" fill="#e0e0e0"/>
    <circle cx="150" cy="110" r="63" fill="#bdbdbd"/>
    <path d="M95 68 Q80 30 75 10 Q95 25 100 55 Q88 35 95 68" fill="#9e9e9e"/>
    <path d="M115 62 Q105 28 108 10 Q122 22 120 52 Q113 32 115 62" fill="#9e9e9e"/>
    <ellipse cx="125" cy="105" rx="13" ry="15" fill="#1a1a1a"/>
    <ellipse cx="175" cy="105" rx="13" ry="15" fill="#1a1a1a"/>
    <circle cx="125" cy="103" r="5" fill="white"/>
    <circle cx="175" cy="103" r="5" fill="white"/>
    <ellipse cx="150" cy="132" rx="20" ry="14" fill="#e0e0e0"/>
    <ellipse cx="150" cy="128" rx="10" ry="7" fill="#9e9e9e"/>
    <path d="M138 142 Q150 152 162 142" stroke="#9e9e9e" stroke-width="3" fill="none"/>
    <circle cx="112" cy="130" r="10" fill="#ef9a9a" opacity="0.4"/>
    <circle cx="188" cy="130" r="10" fill="#ef9a9a" opacity="0.4"/>
  </svg>`;

  svgs.duck = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#e3f2fd" rx="20"/>
    <rect x="0" y="210" width="300" height="90" fill="#64b5f6" opacity="0.35"/>
    <ellipse cx="150" cy="195" rx="75" ry="62" fill="#fdd835"/>
    <ellipse cx="150" cy="205" rx="48" ry="45" fill="#fff9c4"/>
    <circle cx="150" cy="110" r="60" fill="#fdd835"/>
    <ellipse cx="125" cy="103" rx="14" ry="16" fill="#1a1a1a"/>
    <ellipse cx="175" cy="103" rx="14" ry="16" fill="#1a1a1a"/>
    <circle cx="125" cy="100" r="5" fill="white"/>
    <circle cx="175" cy="100" r="5" fill="white"/>
    <path d="M125 128 Q150 122 175 128 Q168 148 150 150 Q132 148 125 128Z" fill="#ff8f00"/>
    <circle cx="112" cy="125" r="11" fill="#fff176" opacity="0.5"/>
    <circle cx="188" cy="125" r="11" fill="#fff176" opacity="0.5"/>
    <path d="M85 185 Q65 165 70 185 Q60 178 65 200" stroke="#fdd835" stroke-width="12" fill="none" stroke-linecap="round"/>
  </svg>`;

  return svgs[type] || svgs.panda;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { kidsAnimals };
}
