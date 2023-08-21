export default function genericsSample() {
  //ジェネリックを使わない

  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(stringReduce(['ねこねこねじょ', 'ねじねじびえじ'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(numberReduce([1, 2, 3, 4, 5, 6], 0))

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(genericStringReduce(['ねこ', 'えんこ'], 'えんこ'))

  //いろいろなジェネリック型の定義ほうほう
  //完全な呼び出しシグネチャー（ここのシグネチャんいジェネリック型をあてる）
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
