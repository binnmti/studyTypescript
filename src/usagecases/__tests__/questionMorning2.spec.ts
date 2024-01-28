import { questionMorning2 } from '../questionMorning2';
describe('questionMorning2', () => {
    it('test1', () => {
        expect(questionMorning2([
            [1,1,0,0,1,0],
            [0,0,0,1,0,0],
            [0,1,1,0,1,1],
            [0,0,1,0,0,0],
            [0,1,1,0,1,0],
            [0,0,0,0,1,0]
          ])).toEqual([
            [1,1,0,0,1,0],
            [0,0,0,0,0,0],
            [0,0,0,0,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,1,0],
            [0,0,0,0,1,0]]);
    });

    // it('test7', () => {
    //     expect(questionMorning2([
    //       [0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0],
    //       [0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0],
    //       [0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0],
    //       [0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0],
    //       [0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1]
    //      ])).toEqual([
    //       [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
    //       [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
    //       [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0], 
    //       [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], 
    //       [0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]
    //     ]);
    // });
});


