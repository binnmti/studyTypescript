import { question6 } from '../question6';
describe('question6', () => {
    it('2', () => {
        expect(question6('aaabbccc')).toBe(2);
    });
    it('31', () => {
        expect(question6('dasadjwlqdoqwfewfharphfgrewrhowhhfhsdfohfoihoasfdsadhkdfkjlbavjblvxnbknogwrelgjfheowafphpwohoidfhodhfo')).toBe(31);
    });
    // it('alotof', () => {
    //     expect(question6('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')).toBe(259);
    // });
});
