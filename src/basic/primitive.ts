export default function primitiveSample() {
  let name: string = 'ぐみぽ'
  let age: number = 28
  let isSingle: boolean = true

  const isOverTwenty: boolean = age >= 50

  console.log('primitive:sample 1', typeof name, name)
  console.log('primitive:sample 2', typeof age, age)
  console.log('primitive:sample 3', typeof isSingle, isSingle)
  console.log('primitive:sample 4', typeof isOverTwenty, isOverTwenty)
}
