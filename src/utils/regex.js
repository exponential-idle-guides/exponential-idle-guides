function re_soft_hyphen (str) {
  return str.split('').join(String.fromCharCode(0x00ad) + "?")
}

module.exports = {
  re_soft_hyphen,
}