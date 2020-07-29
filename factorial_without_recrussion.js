function factorial(x) {
    if (x === 1 || x === 0) return 1
    else {
        for (var n = x - 1; n > 0; n--) {
            x = x * n;
        }
        return x;
    }
}