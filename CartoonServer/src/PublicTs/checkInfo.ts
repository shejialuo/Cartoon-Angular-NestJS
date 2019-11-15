const checkNumber = function checknumber(): string {
    const str = '0123456789';
    let res = '';
    for (let i = 0; i < 4; i++) {
    const n = Math.floor((Math.random() * str.length));
    res += str [n];
    }
    return res;
};

export {checkNumber};
