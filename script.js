'use strict';

var madLibSentenceChristmas = 'Every Christmas we  {{verb}}  to a   {{adjective}}   tree farm far away. This is not just any   {{adjective}}   tree farm. My dad and I    {{verb}}   onto the   {{noun}}   to    {{verb}}   for the perfect   {{noun}}  .  Some people like them   {{adjective}}  , but I prefer them   {{adjective}}  . After  searching for hours I usually   {{adverb}}   exclaim "Dad! The perfect tree is over   there!" Off we    {{verb}}   to get the tree. The problem is we always forget the  {{noun}}   and the  {{noun}}  . But at the end of the day we    {{adverb}}   get the tree and head home    {{adverb}}  . "I wish it was Christmas all year round"  I    {{adverb}}   think to myself.'

// var madLibSentenceShopping = ' Today I went shopping. When I arrived at the store I saw a   {{adjective}}     {{noun}}  , who upon noticing me    {{adverb}}   said "I need to   {{verb}}  ". "Well,   that was   {{adjective}}  " I thought to myself and walked in the store. The store had rearranged it\s inventory, so I felt    {{adverb}}   lost. I   walked up to store clerk and said    {{adverb}}   "I am looking for a   {{adjective}}     {{noun}}   that doesn’t    {{verb}}   as often as the last one I had." The store clerk    looked at me with a   {{adjective}}   look in his eye and said, "What you are looking for can be found by the   {{noun}}  , if you see a   {{noun}}   that    {{adverb}}   can    {{verb}}  , then you've gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it    on amazon.com, Their products seem to    {{verb}}   the perfect amount". '


var madLibSentenceBrainstorm = "Many say that brainstorming is   {{adjective}}   and does not   {{verb}}  . However, with the combination of the right computer and   {{noun}}   anyone  can lead a good    {{verb}}  . When you have    {{adverb}}   pulled together a   {{adjective}}      group of   {{noun}}   in a big room with lots of TVs then  magical things will happen. In the past we have    {{adverb}}   suggested  participants work together to find the most   {{adjective}}   solution. The   most difficult part is many   {{adjective}}     {{noun}}   like to   {{verb}} . This has proved to be    {{adverb}}   problematic.  But in the end the most important   {{noun}}   usually is brought to light.  Typically we try to encourage ideas to    {{verb}}  , and never shut ideas  down. This concludes our instructions. Thanks for    {{adverb}}   listening!"
var nounList = [
    'father','teenager','lion','cat','pug','book','table','coat','wolf','minister',
    'teacher','child','woman','man','alligator','tiger','bird','zoo','city','state','bear',
];

var verbList = [
    'bend','beat','bite','blow','burn','cut','dig','drive','feel',
    'fight','fly','forgive','hang','hear','hurt','lay','lead','leave','make','pay',
    'send','shut','sing','teach','throw','understand','wake','wear','win','write', 
];

var adverbList = [
    'awkwardly','brutally','absentmindedly','carefully','eagerly','gracefully','lazily',
    'quickly','recklessly','savagely','urgently','extremely','rather','very',
    'terribly','really','abroad','down','everywhere','inside','outside','somewhere','there','underground',
];

var adjectiveList = [
    'gigantic','colossal','immense','mammoth','scrawny','pitiful','uptight','flabby','puny','teeny','miniature',
    'bewildered','clumsy','grumpy','itchy','repulsive','thoughtless','scary','nervous','fierce','mysterious',
];

var btn = document.getElementById('gen-madlib');
var currStoryContainer = document.getElementById('curr-story');

btn.addEventListener('click', handleClick)

function handleClick(){
    var storyType = getStoryType();
    var validSpeechTypes = storyType === 'male' ? madLibSentenceChristmas : madLibSentenceBrainstorm; 
    var nounSpeech = getRandElem(validSpeechTypes);
    var verbSpeech = getRandElem(validSpeechTypes);
    var adverbSpeech = getRandElem(validSpeechTypes);
    var adjectiveSpeech = getRandElem(validSpeechTypes);
    return currStoryContainer = nounSpeech + verbSpeech + adverbSpeech + adjectiveSpeech;
} 

for (var i = 0; i < nounList.length; i++) {
  // fill-in the {{noun}}s in the sentence with the nouns
  madLibSentenceChristmas = madLibSentenceChristmas.replace('{{noun}}', nounList[i]);
}
// console.log(madLibSentenceChristmas);

for (var i = 0; i < verbList.length; i++) {
    madLibSentenceChristmas = madLibSentenceChristmas.replace('{{verb}}', verbList[i]);
  }
//   console.log(madLibSentenceChristmas);

for (var i = 0; i < adverbList.length; i++) {
    madLibSentenceChristmas = madLibSentenceChristmas.replace('{{adverb}}', adverbList[i]);
  }
//   console.log(madLibSentenceChristmas);

for (var i = 0; i < adjectiveList.length; i++) {
    madLibSentenceChristmas = madLibSentenceChristmas.replace('{{adjective}}', adjectiveList[i]);
  }
  console.log(madLibSentenceChristmas);

function getStoryType() {
    return document.querySelector('input[type="radio"]:checked').value;
}

function getRandElem(arr) {
    return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandFilteredElem(arr, filter){
    var randEl = getRandElem(arr);
    while(randEl === filter) {
       randEl = getRandElem(arr);
    }
    return randEl;
}