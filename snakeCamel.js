function snakeCamel(str) {
    return str
        .join('_')
        .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}