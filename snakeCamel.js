function snakeCamel(str) {
    let i = str.indexOf("_")
    for (pos = 0; pos < length; pos++) {
        let newStr = str.substring(pos, [i]) + str[i + 1].toUpperCase()
        return newStr
    }
}