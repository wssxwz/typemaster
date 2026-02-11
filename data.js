// Articles Database
const articles = [
    // English Articles
    {
        id: 1,
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
        id: 2,
        language: 'english',
        category: 'Science',
        difficulty: 'easy',
        title: 'Introduction to Physics',
        description: 'Explore the fundamental laws that govern our universe.',
        type: 'Text',
        duration: '~1 min',
        chars: 189,
        content: `Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines.`
    },
    {
        id: 3,
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

    // Chinese Articles
    {
        id: 4,
        language: 'chinese',
        category: 'Prose',
        difficulty: 'hard',
        title: '荷塘月色 (节选)',
        description: '中国现代散文经典，优美的景物描写。',
        type: 'Text',
        duration: '~1 min',
        chars: 113,
        content: `这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了。`
    },
    {
        id: 5,
        language: 'chinese',
        category: 'Philosophy',
        difficulty: 'medium',
        title: '论语选段',
        description: '孔子的智慧语录，传承千年的哲学思想。',
        type: 'Text',
        duration: '~1 min',
        chars: 98,
        content: `子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？子曰：温故而知新，可以为师矣。`
    },
    {
        id: 6,
        language: 'chinese',
        category: 'Modern Literature',
        difficulty: 'easy',
        title: '背影 (节选)',
        description: '朱自清的经典散文，感人至深的父爱故事。',
        type: 'Text',
        duration: '~2 min',
        chars: 156,
        content: `我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧回家。`
    },

    // Code Articles
    {
        id: 7,
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
        id: 8,
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
    {
        id: 9,
        language: 'code',
        category: 'Programming',
        difficulty: 'hard',
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

    // Additional English
    {
        id: 10,
        language: 'english',
        category: 'Literature',
        difficulty: 'hard',
        title: 'To Kill a Mockingbird',
        description: 'Harper Lee\'s powerful opening about childhood memories.',
        type: 'Text',
        duration: '~2 min',
        chars: 234,
        content: `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury.`
    },
    {
        id: 11,
        language: 'english',
        category: 'Business',
        difficulty: 'medium',
        title: 'Startup Culture',
        description: 'Understanding modern workplace dynamics.',
        type: 'Text',
        duration: '~2 min',
        chars: 198,
        content: `In today's fast-paced business environment, startup culture has become synonymous with innovation, flexibility, and rapid growth. Companies are embracing remote work, flat hierarchies, and employee empowerment.`
    },

    // Additional Chinese
    {
        id: 12,
        language: 'chinese',
        category: 'Poetry',
        difficulty: 'medium',
        title: '春江花月夜 (节选)',
        description: '张若虚的千古名篇，被誉为"孤篇压全唐"。',
        type: 'Text',
        duration: '~1 min',
        chars: 88,
        content: `春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。江流宛转绕芳甸，月照花林皆似霰。`
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articles };
}