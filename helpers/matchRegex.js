module.exports = function matchRegex(value, regex, options) {
    const regularExpression = new RegExp(regex);
    return value.match(regularExpression) !== null ? options.fn(this) : options.inverse(this);
}

