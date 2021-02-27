module.exports = function towelSort(matrix) {

  if (matrix == undefined) {

    return []

  } else {
    var ma1 = matrix.slice(3, 4).flat().reverse()
    var ma2 = matrix.slice(0, 1).flat()
    var ma3 = matrix.slice(1, 2).flat().reverse()
    var ma4 = matrix.slice(2, 3).flat()

    var result = ma2.concat(ma3, ma4, ma1)

    return result
  }

}
