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

  `“You'll never find rainbows if you're looking down.”`,

  `“Perfect love is the most beautiful of all frustrations because it is more than one can express.”`,

  `“Life is a beautiful, magnificent thing, even to a jellyfish.”`,

  `“Nothing is permanent in this wicked world - not event our troubles.”`,
  
  `“If you're really truthful with yourself, it's a wonderful guidance.”`,

  `„ადამიანის უძვირფასესი საუნჯე მისი ვინაობაა.“`,

  `„არამც თუ უსაბუთო ძაგება, უსაბუთო ქებაც კი საწყენია მართებულის კაცისათვის.“`,

  `„ზოგი საგანია, რომ თუ არ დაინახავ, ვერ ირწმუნებ, და ზოგი – იმისთანა, თუ არ ირწმუნებ, ვერ დაინახავ.“`,

  `„ზოგი საგანია, რომ თუ არ დაინახავ, ვერ ირწმუნებ, და ზოგი – იმისთანა, თუ არ ირწმუნებ, ვერ დაინახავ.“`,

  `„ზოგი საგანია, რომ თუ არ დაინახავ, ვერ ირწმუნებ, და ზოგი – იმისთანა, თუ არ ირწმუნებ, ვერ დაინახავ.“`,

  `„ქვეყანა ტაძარი კი არაა, საცა კაცი უნდა ლოცულობდეს, არამედ სახელოსნოა, საცა უნდა ირჯებოდეს და მუშაობდეს!“`,

  `„ადამიანის გული თვალუწვდენელი ორმოა.“`,

  `„გახსოვდეს, რომ ქვეყანაზე ქაღალდის გარდა არის კიდევ სინდისი.“`,

  `„ბედს თვითონ კაცი ქმნის და არა ბედი კაცსა.“`,

  `„ქვეყნის სამსახური ყველგან მსხვერპლია და არა სეირი.“`,

  `„ქვეყნის სამსახური ყველგან მსხვერპლია და არა სეირი.“`,

  `„რასაც თვითონ არ ვიმოქმედებთო, სხვისგან ბევრს ნურას ველოდებითო.“`,

  `„შენ რომ ცუდკაცობდე, კაიკაცობაზედ სხვას მაინც ნუ გალანძღავ.“`,

  `„წარსული მკვიდრი საძირკველია აწმყოსი, როგორც აწმყო მომავლისა.“`,

  `„კარგია გაღვიძებული ადამიანი, მაგრამ უფრო უკეთესია ადამიანი, რომელსაც ძილშიაც არა სძინავს, ქვეყნის უბედურებით გულ-აღტკინებულსა.“`,

  `„ლუკმა მაშინ არის ტკბილი, როცა კაი კაცობით არის ნაშოვნი.“`,
]

button.addEventListener('click', function(){
    quotes.innerHTML = `${advices[Math.floor(Math.random() * advices.length)]}`
    countAdvice++;
    adviceNum.innerHTML = `${countAdvice}`
})