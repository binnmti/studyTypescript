export const question2 = (str: string): boolean => {
    
    let rotate = '';
    let str3 = [];
    for (let i = 1; i < str.length; i++) {
        rotate = str.substring(0, i);
        let str2 = "";
        for (let j = 1; j <= str.length / i; j++) {
            str2 += rotate;
        }
        if (str2 === str) {
            return true;
        }
    }
    
    // for (let i = 1; i < str.length; i++) {
    //     const rotate = str.substring(0, i);
    //     let str2 = '';
    //     for (let j = 1; j <= str.length / i; j++) {
    //         str2 += rotate;
    //     }
    //     if (str2 === str) {
    //         return true;
    //     }
    // }
    return false;
};
