import { question7 } from '../question7';
describe('question7', () => {
    it('test1', () => {
        expect(question7([10,10,40,20,30], 50)).toBe(2);
    });
    it('test2', () => {
        expect(question7([50, 60, 70, 80, 90], 40)).toBe(-1);
    });
    it('test3', () => {
        expect(question7([45, 45, 8, 7, 40, 10, 37, 42, 21, 9], 217)).toBe(8);
    });
    it('test4', () => {
        expect(question7([16, 15, 13, 6, 9, 3, 2, 8, 3, 5, 6, 1, 3, 14, 4, 16, 15, 11, 3, 16], 123)).toBe(10);
    });
    // it('test5', () => {
    //     expect(question7([17, 19, 145, 157, 126, 107, 31, 191, 130, 153, 78, 37, 9, 104, 5, 5, 164, 49, 130, 96, 11, 164, 118, 90, 67, 26, 142, 98, 137, 175, 160, 128, 69, 110, 98, 57, 30, 199, 58, 66, 7, 56, 91, 6, 176, 36, 2, 62, 195, 39, 45, 137, 109, 33, 8, 78, 59, 176, 153, 20, 196, 60, 24, 12, 118, 24, 33, 9, 28, 178, 34, 130, 124, 2, 77, 9, 57, 104, 127, 194, 158, 16, 142, 116, 13, 73, 80, 84, 12, 190, 161, 27, 156, 106, 99, 57, 95, 117, 153, 174, 56, 100, 162, 161, 83, 44, 23, 158, 62, 152, 186, 101, 99, 40, 29, 148, 36, 12, 87, 178, 156, 134, 162, 175, 179, 123, 171, 142, 21, 90, 156, 30, 164, 97, 110, 54, 168, 85, 80, 76, 175, 149, 158, 74, 87, 119, 44, 13, 161, 171, 80, 130, 189, 114, 59, 47, 78, 17, 24, 108, 144, 144, 110, 12, 187, 127, 159, 92, 162, 39, 35, 178, 185, 96, 25, 63, 138, 95, 30, 153, 196, 186, 161, 179, 65, 170, 69, 130, 16, 17, 29, 158, 167, 126, 8, 60, 158, 174, 106, 64], 10517)).toBe(103);
    // });
    it('test6', () => {
        expect(question7([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365)).toBe(16);
    });
    it('test7', () => {
        expect(question7([100], 100)).toBe(1);
    });

// [test10] fail (x=[8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], n=134365, received=0, expect=16)
// [test11] fail (x=[100], n=100, received=0, expect=1)
});
