function sorter(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) return true
        return false
    }
}