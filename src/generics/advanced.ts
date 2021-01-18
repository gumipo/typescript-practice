export default function genericsAdvancedSample() {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringsToNumbers(['123', '345', '5456'], (item) => Number(item))

  console.log(numbers)
  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumbersToStrings([123, 345, 3333], (item) => String(item))
  console.log(strings)
}
