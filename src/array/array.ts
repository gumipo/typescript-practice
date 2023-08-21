export default function arraySample() {
  const colors: string[] = ['red', 'blue']

  colors.push('black')
  // colors.push(123)
  console.log('array', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)

  console.log(even)

  const ids: (string | number)[] = ['ABC', 123]
  // ids.push(true)
  ids.push(456)
  console.log(ids)

  const genarateSumArray = (): (string | number)[] => {
    const _sumArray = []

    _sumArray.push(123) //number
    _sumArray.push('ABC')
    return _sumArray
  }
  const sumeArray = genarateSumArray()
  sumeArray.push(456)
  //  sumeArray.push(true)
}
