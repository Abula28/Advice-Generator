const quotes = document.querySelector('.quotes')
const button = document.querySelector('.button')
let adviceNum = document.querySelector('.adviceNum')

let countAdvice = 1;

let advices = [`“Whatever you are, be a good one.”`,

 `“Be yourself; everyone else is already taken.”`,

  `“Every man dies. Not every man lives.”`,

 `“Nothing is impossible. The word itself says “I’m possible!”`,
 
 `“Happiness depends upon ourselves.” `, `“If you look at what you have in life, you’ll always have more.”`,

 `“Live every day like it's your last, one day you will be right.”`, `“It is never too late to be what you might have been.”`, 

 `“Strong minds discuss ideas. Average minds discuss events. Weak minds discuss people”`,

  `“Time is a created thing. To say: "I don't have time" is like saying: "I don't want to."”`,

  `“Smart people learn from everything and everyone. Average people from their experiences. Stupid people already have all the answers.”`,

  `“It is never too late to be what you might have been.”`,

  `"Always respect your superiors; if you have any."`,

  `“If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.”`,

  `“I don’t care that they stole my idea …  I care that they don’t have any of their own.”`,

  `“Life can be wonderful if you're not afraid of it. All it needs is courage, imagination ... and a little dough.”`,
  
]

button.addEventListener('click', function(){
    quotes.innerHTML = `${advices[Math.floor(Math.random() * advices.length)]}`
    countAdvice++;
    adviceNum.innerHTML = `${countAdvice}`
})