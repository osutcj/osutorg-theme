module.exports = function (text, type) {
    return text.replace(`[${type}]`, '');;
}