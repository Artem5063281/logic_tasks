function compare(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (var i = 0; i < arr1.length; i++)
            if (arr1[i] === arr2[i]) return true
    } else return false
}