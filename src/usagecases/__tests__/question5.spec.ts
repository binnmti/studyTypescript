import { question5 } from '../question5';
describe('question5', () => {
    it('color', () => {
        expect(question5('color','color')).toBe(true);
    });
    it('color#', () => {
        expect(question5('coll#or','co#olor')).toBe(true);
    });
    it('abcd#', () => {
        expect(question5('ab##','c#d#')).toBe(true);
    });
    it('aaaa#', () => {
        expect(question5('aaa###a','aaaa###a')).toBe(false);
    });
});
