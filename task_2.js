function compare(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (var value of arr1)
            if (arr1[value] === arr2[value]) return true
            else return false
    } else return false
}