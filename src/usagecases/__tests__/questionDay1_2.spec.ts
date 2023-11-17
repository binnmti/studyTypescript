import { questionDay1_2 } from '../questionDay1_2';
describe('questionDay1_2', () => {
    it('test1', () => {
        expect(questionDay1_2([[0,40],[5,10],[15,20]])).toBe(2);
    });
    it('test2', () => {
        expect(questionDay1_2([[7,10],[2,4]])).toBe(1);
    });
    it('test5', () => {
        expect(questionDay1_2([[484168,617671],[765198,792311],[557309,599256],[731216,988021],[251847,707658],[650743,932826]])).toBe(3);
    });
    it('test6', () => {
        expect(questionDay1_2([[218,7443],[453,15926],[518,4065],[667,10800],[791,10835],[1238,8711],[1695,16071],[1902,4572],[2124,3638],[2281,7720],[2620,14547],[2784,12673],[2851,18996],[3103,10511],[3334,19009],[3586,16806],[3672,11061],[3878,14715],[4467,4791],[4467,20680],[4548,20768],[4558,4680],[4759,18919],[4840,17941],[5015,19253],[5072,16799],[5279,23696],[5368,20866],[5411,22413],[5895,16491],[6041,16028],[6078,6553],[6159,10414],[6324,11627],[6845,14507],[6852,15315],[6919,11733],[7029,25696],[7144,17652],[7162,8060],[7218,19373],[7361,12182],[7610,22269],[8235,19991],[8304,8657],[8504,15036],[8691,8776],[9038,26890],[9222,13001],[9344,11990],[9774,12585],[10251,16586],[10375,22773],[10380,19928],[10530,13085],[10822,24532],[11089,18457],[11435,18756],[11488,26875],[11632,30754],[11662,14081],[11991,13065],[12175,27163],[12904,29589],[13510,18971],[13631,22410],[14122,14764],[14571,34482],[15237,20235],[15285,26735],[15626,27810],[15743,31773],[16178,20439],[16255,18032],[16350,23937],[16439,27347],[16828,32588],[16910,27764],[17161,34438],[17256,24085],[17351,22959],[17367,27647],[17483,24685],[17636,25088],[17690,33821],[17842,19068],[17842,37763],[17894,29930],[18103,28035],[18137,32843],[18153,19455],[18403,36564],[18422,29717],[18587,23403],[19290,20708],[19322,22252],[19444,33933],[19693,19736],[19704,20919],[19981,31396]])).toBe(50);
    });
});