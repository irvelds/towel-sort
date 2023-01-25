
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix) {
    return matrix.reduce((acc, item, index) => {
      if ((index + 1) % 2 === 0) {
        item.reverse()
      };
      acc.push(...item);
      return acc;
    }, []);
  }
  return []

}
