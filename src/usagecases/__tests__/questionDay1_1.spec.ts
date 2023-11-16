import { questionDay1_1 } from '../questionDay1_1';
describe('questionDay1_1', () => {
    it('test1', () => {
        expect(questionDay1_1([[0,30],[5,10],[15,20]])).toBe(false);
    });
    it('test2', () => {
        expect(questionDay1_1([[7,10],[2,4]])).toBe(true);
    });
    it('test3', () => {
        expect(questionDay1_1([[1002, 1030], [1300, 1400], [33, 234], [1400, 1500], [2030, 2040], [2020, 2030], [1500, 1600], [10, 20]])).toBe(true);
    });
    it('test4', () => {
        expect(questionDay1_1([[946, 956], [10, 16], [28, 33], [787, 794], [116, 123], [45, 57], [370, 382], [525, 532], [220, 223], [248, 266], [242, 246], [352, 358], [745, 747], [391, 394], [396, 402], [571, 588], [675, 687], [555, 562], [624, 629], [500, 515], [171, 182], [209, 212], [620, 621], [655, 666], [483, 489], [65, 80], [97, 105], [416, 417], [834, 838], [603, 606], [429, 434], [158, 167], [634, 644], [194, 196], [690, 697], [228, 232], [129, 140], [599, 601], [438, 446], [829, 832], [1185, 1204], [464, 465], [284, 301], [305, 324], [324, 343], [1318, 1335], [713, 730], [994, 1012], [479, 482], [544, 546], [764, 776], [838, 845], [848, 866], [1592, 1608], [1101, 1106], [1802, 1807], [1051, 1056], [1449, 1458], [802, 818], [900, 915], [1174, 1184], [1416, 1426], [1860, 1873], [1838, 1853], [881, 900], [1081, 1084], [1144, 1156], [1369, 1380], [1471, 1485], [1386, 1400], [1565, 1576], [1554, 1555], [1656, 1657], [1750, 1751], [922, 928], [1224, 1229], [1764, 1776], [1619, 1638], [1696, 1715], [959, 969], [1813, 1829], [978, 984], [1028, 1034], [1120, 1137], [1246, 1263], [1207, 1221], [1072, 1075], [1272, 1287], [1501, 1520], [1539, 1553], [1339, 1353], [1291, 1310], [1432, 1445], [1561, 1565], [1522, 1539], [1674, 1683], [1726, 1733], [1577, 1587], [1719, 1720], [1792, 1800]])).toBe(true);
    });
});
