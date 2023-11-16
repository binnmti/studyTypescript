import { question8 } from '../question8';
describe('question8', () => {
    it('test1', () => {
        expect(question8("Hello2World", 11)).toBe("W");
    });
    it('test2', () => {
        expect(question8("A23", 5)).toBe("A");
    });
    it('test3', () => {
        expect(question8("proGram222ing", 25)).toBe("G");
    });
    it('test4', () => {
        expect(question8("abcd23456788888889999999", 102931)).toBe("c");
    });
    it('test5', () => {
        expect(question8("ABCDEFG3255GHEEQegy389e", 12924)).toBe("D");
    });
    it('test6', () => {
        //536870888
        expect(question8("abcdefg29923845554494942884858", 534295823)).toBe("e");
    });
});
