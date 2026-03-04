function colspan_num (s) {
  return (s == undefined || s == NaN || Number(s) < 1) ? 1: Number(s);
}

module.exports = {
  colspan_num
};