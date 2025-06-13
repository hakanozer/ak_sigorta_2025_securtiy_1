export const tcControll = (tc:string) => {
    if (!/^\d{11}$/.test(tc)) {
        return false;
    }

    const digits = tc.split('').map(Number);
    const sumOdd = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const sumEven = digits[1] + digits[3] + digits[5] + digits[7];
    const total = digits.slice(0, 10).reduce((acc, val) => acc + val, 0);

    const check1 = (sumOdd * 7 - sumEven) % 10 === digits[9];
    const check2 = total % 10 === digits[10];

    return check1 && check2;
}