'use strict';

var btn = document.getElementById('gen-madlib');
var currStoryContainer = document.getElementById('curr-story');

btn.addEventListener('click', handleClick)

function handleClick(){
    var storyType = getStoryType();
    var validSpeechTypes = storyType === 'christmas' ? defaultWords : stories; 
    var nounSpeech = getRandEl(validSpeechTypes);
    var verbSpeech = getRandEl(validSpeechTypes);
    var adverbSpeech = getRandEl(validSpeechTypes);
    var adjectiveSpeech = getRandEl(validSpeechTypes);
    return currStoryContainer = nounSpeech + verbSpeech + adverbSpeech + adjectiveSpeech;
} 

function getStoryType() {
    return document.querySelector('input[type="radio"]:checked').value;
}

function fillInStory(story, words) {
    for(var wordType in words) {
        story = fillInStoryForType(story, words[wordType], wordType)
    }
    return story;
}

function fillInStoryForType(story, words, wordType) {
    for(var i = 0; i < 4; i++) {
        story = story.replace('{{' + wordType + '}}', words[i])
    }
    return story;
}

function fillInDefaultWords(words) {
    for(var wordType in words) {
        while(words[wordType].length < 4) {
            words[wordType].push(getRandFilteredEl(defaultWords, words[wordType]))
        }
    }
    return words;
}

 var finalStory = fillInStory(stories.christmas, defaultWords)
 console.log(finalStory)

