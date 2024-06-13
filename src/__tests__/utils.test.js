// Your tests here
// I expect calling the function pointsForWord("test") will return 7

import {pointsForWord} from "../utils";
describe("pointsForWord", () => {
    it("handles uppercase and lowercase input", () => {
        const word = "tEst";

        const points = pointsForWord(word);
    
        expect(points).toBe(7);
    });
});