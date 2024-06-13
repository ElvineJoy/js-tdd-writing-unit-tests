// Your code here
// for each vowel. +1 points
// for each consonant +2 points
export function pointsForWord(word) {
    let points = 0;
    for(const char of word) {
        if (["a","b", "c", "d", "e"].includes(char)) {
            points += 1;
        } else {
            points +=2;
        }
    }
    return points;
}