import { question4, disassembly } from '../question4';
describe('question4', () => {
    it('5^2', () => {
        expect(question4(5,2)).toBe(25);
    });
    it('5^3', () => {
        expect(question4(5,3)).toBe(125);
    });
    it('10^4', () => {
        expect(question4(10,4)).toBe(10000);
    });
    it('15^3', () => {
        expect(question4(15,3)).toBe(3375);
    });
    it('2.1^3', () => {
        expect(question4(2.100000000,3)).toBe(9.261000000);
    });
    it('2.0^-2', () => {
        expect(question4(2.000000000,-2)).toBe(0.250000000);
    });
    it('8.88023^3', () => {
        expect(question4(8.88023, 3)).toBe(700.28148295);
    });
    it('0.44528113^0', () => {
        expect(question4(0.44528113, 0)).toBe(1.00000000);
    });
    it('0.5to0.2', () => {
        expect(question4(-0.5, -2)).toBe(4.0000);
    });
    it('13', () => {
        expect(question4(-13.62608221, 3)).toBe(-2529.95626992);
    });
    it('a long long', () => {
        expect(question4(1.12345678, -1073741824)).toBe(0.00000000);
    });
});
