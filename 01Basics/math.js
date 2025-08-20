function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return b - a;
}
exports.mul = (a, b) => a * b;
// agr single func ko dusre mai cll karn ahai toh simple module.exports = add; aise kr lenge but agr baht func hai toh phir obj bnaa ke karna hogaa
module.exports = {
  add,
  sub,
};
