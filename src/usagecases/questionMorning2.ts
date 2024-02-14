/*
*/
// 時間計算量:O(n)
// 空間計算量:O(1)
const checkRightHand = (direction:number, i:number, j:number, w:number, h:number, image: number[][]) => {

    //↓
    let nextI = i;
    let nextJ = j;
    let co = 0;

    do {
        if (image[nextI][nextJ] === 1) {
            image[nextI][nextJ] = 2;
        }

        if (direction == 0) {
            let check = false;
            //↓
            if (!check && nextI + 1 < h) {
                if (image[nextI + 1][nextJ] !== 0) {
                    nextI = nextI + 1;
                    check = true;
                }
                direction = 0;
            } else {
                //←
                if (!check && nextJ - 1 >= 0) {
                    if (image[nextI][nextJ - 1] !== 0) {
                        nextJ = nextJ - 1;
                        check = true;
                    }
                    direction = 1;
                }
                //↑
                if (!check && nextI - 1 >= 0) {
                    if (image[nextI - 1][nextJ] !== 0) {
                        nextI = nextI - 1;
                        check = true;
                    }
                    direction = 2;
                }
                //→
                if (!check && nextJ + 1 < w) {
                    if (image[nextI][nextJ + 1] !== 0) {
                        nextJ = nextJ + 1;
                        check = true;
                    }
                    direction = 3;
                }
            }
        }
        else if (direction == 1) {
            let check = false;
            //←
            if (!check && nextJ - 1 >= 0) {
                if (image[nextI][nextJ - 1] !== 0) {
                    nextJ = nextJ - 1;
                    check = true;
                }
                direction = 1;
            }
            else {
                //↑
                if (!check && nextI - 1 >= 0) {
                    if (image[nextI - 1][nextJ] !== 0) {
                        nextI = nextI - 1;
                        check = true;
                    }
                    direction = 2;
                }
                //→
                if (!check && nextJ + 1 < w) {
                    if (image[nextI][nextJ + 1] !== 0) {
                        nextJ = nextJ + 1;
                        check = true;
                    }
                    direction = 3;
                }
                //↓
                if (!check && nextI + 1 < h) {
                    if (image[nextI + 1][nextJ] !== 0) {
                        nextI = nextI + 1;
                        check = true;
                    }
                    direction = 0;
                }                 
            }
        }
        else if (direction == 2) {
            let check = false;
            //↑
            if (!check && nextI - 1 >= 0) {
                if (image[nextI - 1][nextJ] !== 0) {
                    nextI = nextI - 1;
                    check = true;
                }
                direction = 2;
            }
            else {
                //→
                if (!check && nextJ + 1 < w) {
                    if (image[nextI][nextJ + 1] !== 0) {
                        nextJ = nextJ + 1;
                        check = true;
                    }
                    direction = 3;
                }
                //↓
                if (!check && nextI + 1 < h) {
                    if (image[nextI + 1][nextJ] !== 0) {
                        nextI = nextI + 1;
                        check = true;
                    }
                    direction = 0;
                }                 
                //←
                if (!check && nextJ - 1 >= 0) {
                    if (image[nextI][nextJ - 1] !== 0) {
                        nextJ = nextJ - 1;
                        check = true;
                    }
                    direction = 1;
                }
            }
        }
        else if (direction == 3) {
            let check = false;
            //→
            if (!check && nextJ + 1 < w) {
                if (image[nextI][nextJ + 1] !== 0) {
                    nextJ = nextJ + 1;
                    check = true;
                }
                direction = 3;
            }
            else {
                //↓
                if (!check && nextI + 1 < h) {
                    if (image[nextI + 1][nextJ] !== 0) {
                        nextI = nextI + 1;
                        check = true;
                    }
                    direction = 0;
                }                 
                //←
                if (!check && nextJ - 1 >= 0) {
                    if (image[nextI][nextJ - 1] !== 0) {
                        nextJ = nextJ - 1;
                        check = true;
                    }
                    direction = 1;
                }
                //↑
                if (!check && nextI - 1 >= 0) {
                    if (image[nextI - 1][nextJ] !== 0) {
                        nextI = nextI - 1;
                        check = true;
                    }
                    direction = 2;
                }
            }
        }



        // //↓
        // if (nextI + 1 < h) {
        //     if (image[nextI + 1][nextJ] !== 0) {
        //         nextI = nextI + 1;
        //         check = true;
        //     }
        // }

        // //←
        // if (!check && nextJ - 1 >= 0) {
        //     if (image[nextI][nextJ - 1] !== 0) {
        //         nextJ = nextJ - 1;
        //         check = true;
        //     }
        // }

        // //↑
        // if (!check && nextI - 1 >= 0) {
        //     if (image[nextI - 1][nextJ] !== 0) {
        //         nextI = nextI - 1;
        //         check = true;
        //     }
        // }

        // //→
        // if (!check && nextJ + 1 < w) {
        //     if (image[nextI][nextJ + 1] !== 0) {
        //         nextJ = nextJ + 1;
        //         check = true;
        //     }
        // }
        
        co++;
     } while (co < 1000)
    // } while ((nextI != i || nextJ != j))
}


export const questionMorning2 = (image: number[][]): number[][] => {
    const w = image[0].length;
    const h = image.length;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            //最初と最後は全部
            if (i === 0 || i === h - 1) {
            } else {
                //それ以外は最初と最後だけ
                if (j !== 0 && j !== w - 1) continue;
            }

            if (image[i][j] !== 0) {
                checkRightHand(0, i, j, w, h, image);
                checkRightHand(1, i, j, w, h, image);
                checkRightHand(2, i, j, w, h, image);
                checkRightHand(3, i, j, w, h, image);
            }
        }
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (image[i][j] === 2) {
                image[i][j] = 1;
            } else {
                image[i][j] = 0;
            }
        }
    }

    return image;
};
