export {}

// const arr: number[] = [1, 3, 6, 9] //! False
const arr: number[] = [1, 6, 2, 10] //* True

const sum_8 = (arr: number[]) => {
  let flag = false

  arr.forEach((num, idx) => {
    while (idx < arr.length) {
      if (num + arr[idx + 1] === 8) {
        console.log(num, '+', arr[idx + 1])
        flag = true
      }
      idx++
    }
  })

  return flag
}

console.log(sum_8(arr))
