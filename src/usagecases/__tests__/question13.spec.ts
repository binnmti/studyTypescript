import { question13 } from '../question13';
describe('question13', () => {
    it('test1', () => {
        expect(question13([
            [0,0,2,0,0,1,0],
            [1,0,1,1,2,0,0],
            [0,0,0,1,1,0,1],
            [2,1,0,2,0,0,0],
            [0,0,1,1,2,1,0],
            [1,0,0,1,0,0,2],
            [0,2,0,2,0,2,0]
          ])).toBe(3);
    });
});


