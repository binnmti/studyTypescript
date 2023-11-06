import { question6 } from '../question6';
describe('question6', () => {
    it('aaabbccc', () => {
        expect(question6('aaabbccc')).toBe(2);
    });
    it('dasadjwlqdoqwfewfharphfgrewrhowhhfhsdfohfoihoasfdsadhkdfkjlbavjblvxnbknogwrelgjfheowafphpwohoidfhodhfo', () => {
        expect(question6('dasadjwlqdoqwfewfharphfgrewrhowhhfhsdfohfoihoasfdsadhkdfkjlbavjblvxnbknogwrelgjfheowafphpwohoidfhodhfo')).toBe(31);
    });
    it('aaaaaabbbbbbbbccccccccdddddddeeeeeeffffffg', () => {
        expect(question6('aaaaaabbbbbbbbccccccccdddddddeeeeeeffffffg')).toBe(8);
    });
    it('alotof', () => {
        expect(question6('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')).toBe(259);
    });
});
