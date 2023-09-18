import { question1 } from '../question1';
describe('question1', () => {
    it('丸括弧で始まり丸括弧で終わる', () => {
        expect(question1('()')).toBe(true);
    });
    it('どの括弧で始まっても正しく閉じて終わる', () => {
        expect(question1('()[]{}')).toBe(true);
    });
    it('閉じ方で失敗', () => {
        expect(question1('(]}')).toBe(false);
    });
    it('これもOK', () => {
        expect(question1('([])')).toBe(true);
    });
    it('これもこれもOK', () => {
        expect(question1('{{{{}}}}')).toBe(true);
    });
    it('これもこれもこれもOK', () => {
        expect(question1('({{{{}{}(){}{}}}})')).toBe(true);
    });
    it('これはNG', () => {
        expect(question1('([)]')).toBe(false);
    });
});
