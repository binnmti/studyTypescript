import { question4 } from '../question4';
describe('question4', () => {
    it('5^2', () => {
        expect(question4(5,2)).toBe(25);
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
   
});
