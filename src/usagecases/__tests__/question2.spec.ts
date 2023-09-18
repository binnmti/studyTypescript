import { question2 } from '../question2';
describe('question2', () => {
    it('ababの繰り返し', () => {
        expect(question2('abab')).toBe(true);
    });
    it('abaの繰り返し', () => {
        expect(question2('aba')).toBe(false);
    });
    it('abcabcabcabcの繰り返し', () => {
        expect(question2('abcabcabc')).toBe(true);
    });
});
