// Articles Database
const articles = [
    // English Articles - EASY (100-150 chars)
    {
        id: 1,
        language: 'english',
        category: 'Science',
        difficulty: 'easy',
        title: 'Introduction to Physics',
        description: 'Explore the fundamental laws that govern our universe.',
        type: 'Text',
        duration: '~1 min',
        chars: 132,
        content: `Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy.`
    },
    {
        id: 2,
        language: 'english',
        category: 'Literature',
        difficulty: 'easy',
        title: 'Simple Reading',
        description: 'Practice with basic English sentences.',
        type: 'Text',
        duration: '~1 min',
        chars: 148,
        content: `The sun rises in the east and sets in the west. Birds sing in the morning. Children play in the park. Life is beautiful when we appreciate simple things.`
    },

    // English Articles - MEDIUM (200-400 chars)
    {
        id: 3,
        language: 'english',
        category: 'Literature',
        difficulty: 'medium',
        title: 'The Great Gatsby',
        description: 'A classic introduction featuring the mysterious Jay Gatsby.',
        type: 'Text',
        duration: '~2 min',
        chars: 272,
        content: `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing any one,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'`
    },
    {
        id: 4,
        language: 'english',
        category: 'Technology',
        difficulty: 'medium',
        title: 'The History of Computers',
        description: 'Learn about the evolution of computing machines.',
        type: 'Text',
        duration: '~2 min',
        chars: 245,
        content: `The history of computers began with primitive designs in the early 19th century. The first modern computers were created in the 1940s and were enormous, room-sized machines that could only perform basic calculations. Today, we carry more computing power in our pockets.`
    },
    {
        id: 5,
        language: 'english',
        category: 'Business',
        difficulty: 'medium',
        title: 'Startup Culture',
        description: 'Understanding modern workplace dynamics.',
        type: 'Text',
        duration: '~2 min',
        chars: 312,
        content: `In today's fast-paced business environment, startup culture has become synonymous with innovation, flexibility, and rapid growth. Companies are embracing remote work, flat hierarchies, and employee empowerment. This shift represents a fundamental change in how we think about work, productivity, and success in the modern era.`
    },

    // English Articles - HARD (500-800 chars)
    {
        id: 6,
        language: 'english',
        category: 'Literature',
        difficulty: 'hard',
        title: 'To Kill a Mockingbird',
        description: 'Harper Lee\'s powerful opening about childhood memories and moral lessons.',
        type: 'Text',
        duration: '~4 min',
        chars: 612,
        content: `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh. He couldn't have cared less, so long as he could pass and punt. When enough years had gone by to enable us to look back on them, we sometimes discussed the events leading to his accident. I maintain that the Ewells started it all, but Jem, who was four years my senior, said it started long before that.`
    },
    {
        id: 7,
        language: 'english',
        category: 'Technology',
        difficulty: 'hard',
        title: 'Artificial Intelligence Revolution',
        description: 'Explore the impact of AI on society and the future of technology.',
        type: 'Text',
        duration: '~5 min',
        chars: 723,
        content: `Artificial Intelligence has evolved from a theoretical concept into a transformative force reshaping every aspect of modern life. From healthcare diagnostics to autonomous vehicles, AI systems are demonstrating capabilities that were once thought to be exclusively human. Machine learning algorithms can now recognize patterns in vast datasets, make predictions with remarkable accuracy, and even generate creative content. However, this rapid advancement raises important questions about ethics, privacy, and the future of work. As AI continues to develop, society must grapple with challenges such as algorithmic bias, data security, and the potential displacement of human workers. The key to harnessing AI's potential lies in developing robust frameworks for responsible innovation, ensuring that these powerful technologies serve humanity's best interests while minimizing potential harms.`
    },

    // Chinese Articles - EASY (100-150 chars)
    {
        id: 8,
        language: 'chinese',
        category: 'Philosophy',
        difficulty: 'easy',
        title: '论语选段',
        description: '孔子的智慧语录，传承千年的哲学思想。',
        type: 'Text',
        duration: '~1 min',
        chars: 98,
        content: `子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？子曰：温故而知新，可以为师矣。`
    },
    {
        id: 9,
        language: 'chinese',
        category: 'Prose',
        difficulty: 'easy',
        title: '荷塘月色 (节选)',
        description: '中国现代散文经典，优美的景物描写。',
        type: 'Text',
        duration: '~1 min',
        chars: 113,
        content: `这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了。`
    },

    // Chinese Articles - MEDIUM (200-400 chars)
    {
        id: 10,
        language: 'chinese',
        category: 'Modern Literature',
        difficulty: 'medium',
        title: '背影 (节选)',
        description: '朱自清的经典散文，感人至深的父爱故事。',
        type: 'Text',
        duration: '~2 min',
        chars: 232,
        content: `我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说："事已如此，不必难过，好在天无绝人之路！"`
    },
    {
        id: 11,
        language: 'chinese',
        category: 'Poetry',
        difficulty: 'medium',
        title: '春江花月夜 (节选)',
        description: '张若虚的千古名篇，被誉为"孤篇压全唐"。',
        type: 'Text',
        duration: '~2 min',
        chars: 267,
        content: `春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。江流宛转绕芳甸，月照花林皆似霰。空里流霜不觉飞，汀上白沙看不见。江天一色无纤尘，皎皎空中孤月轮。江畔何人初见月？江月何年初照人？人生代代无穷已，江月年年望相似。不知江月待何人，但见长江送流水。`
    },

    // Chinese Articles - HARD (500-800 chars)
    {
        id: 12,
        language: 'chinese',
        category: 'Prose',
        difficulty: 'hard',
        title: '故都的秋 (节选)',
        description: '郁达夫的经典散文，描写北平秋天的独特韵味。',
        type: 'Text',
        duration: '~4 min',
        chars: 587,
        content: `秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。我的不远千里，要从杭州赶上青岛，更要从青岛赶上北平来的理由，也不过想饱尝一尝这"秋"，这故都的秋味。江南，秋当然也是有的；但草木雕得慢，空气来得润，天的颜色显得淡，并且又时常多雨而少风；一个人夹在苏州上海杭州，或厦门香港广州的市民中间，浑浑沌沌地过去，只能感到一点点清凉，秋的味，秋的色，秋的意境与姿态，总看不饱，尝不透，赏玩不到十足。秋并不是名花，也并不是美酒，那一种半开，半醉的状态，在领略秋的过程上，是不合适的。不逢北国之秋，已将近十余年了。在南方每年到了秋天，总要想起陶然亭的芦花，钓鱼台的柳影，西山的虫唱，玉泉的夜月，潭柘寺的钟声。`
    },

    // Code Articles - EASY (100-150 chars)
    {
        id: 13,
        language: 'code',
        category: 'Programming',
        difficulty: 'easy',
        title: 'Python Hello World',
        description: 'Start your Python journey with basic syntax.',
        type: 'Code',
        duration: '~1 min',
        chars: 147,
        content: `def greet(name):
    return f"Hello, {name}!"

def main():
    names = ["Alice", "Bob", "Charlie"]
    for name in names:
        print(greet(name))

if __name__ == "__main__":
    main()`
    },

    // Code Articles - MEDIUM (200-400 chars)
    {
        id: 14,
        language: 'code',
        category: 'Programming',
        difficulty: 'medium',
        title: 'JavaScript Array Methods',
        description: 'Practice commonly used array methods in JavaScript.',
        type: 'Code',
        duration: '~2 min',
        chars: 203,
        content: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(doubled, filtered, sum);`
    },
    {
        id: 15,
        language: 'code',
        category: 'Programming',
        difficulty: 'medium',
        title: 'React Component Example',
        description: 'Practice typing a modern React functional component.',
        type: 'Code',
        duration: '~3 min',
        chars: 289,
        content: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}`
    },

    // Code Articles - HARD (500-800 chars)
    {
        id: 16,
        language: 'code',
        category: 'Programming',
        difficulty: 'hard',
        title: 'Full Stack API Implementation',
        description: 'Practice typing a complete REST API with authentication.',
        type: 'Code',
        duration: '~5 min',
        chars: 658,
        content: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';
const users = [];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User created' });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ error: 'User not found' });
  
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(403).json({ error: 'Invalid password' });
  
  const token = jwt.sign({ username }, SECRET_KEY);
  res.json({ token });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(3000, () => console.log('Server running on port 3000'));`
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articles };
}