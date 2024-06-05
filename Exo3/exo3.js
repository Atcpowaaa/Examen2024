//longestWord('a b c d e fgh') => "fgh"

//longestWord('one two three') => "three"

//longestWord('red blue grey') => "grey"


const chain = 'a b c d e fgh'
const wordsize = chain.split(' ')
word_tri = wordsize.sort((a,b)=>a.length-b.length);
console.log(word_tri.slice(-1));
