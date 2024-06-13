// Your code here
// for each vowel. +1 points
// for each consonant +2 points
export function pointsForWord(word) {
    let points = 0;
    for(const char of word) {
       points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points
}