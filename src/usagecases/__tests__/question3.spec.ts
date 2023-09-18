import { question3 } from '../question3';
describe('question3', () => {
    it('10の3の倍数の合計と5の倍数の合計', () => {
        expect(question3(10)).toBe(23);
    });
    it('100の3の倍数の合計と5の倍数の合計', () => {
        expect(question3(100)).toBe(2318);
    });
});
