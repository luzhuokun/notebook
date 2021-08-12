// 堆排序（nlog2n 1 不稳定）
// 特点：该二叉树保持父节点总是比子节点大（或小）
function heapsort(arr) {
  function shiftdown(arr, left, right) {
    const i = 2 * left + 1
    const j = 2 * left + 2
    let largest = left
    if (i <= right && arr[i] > arr[largest])largest = i
    if (j <= right && arr[j] > arr[largest])largest = j
    if (largest !== left) {
      [arr[largest], arr[left]] = [arr[left], arr[largest]]
      shiftdown(arr, largest, right) // 这里要注意一下right值，即最后一个节点的边界问题
    }
  }
  const len = arr.length
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    shiftdown(arr, i, len-1)
  }
  for (let i = len - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]]
    shiftdown(arr, 0, i-1)
  }
  return arr
}

console.log(heapsort([3, 4, 5, 6, 1, 7, 9, 8, 2]))
