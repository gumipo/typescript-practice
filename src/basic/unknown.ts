export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown:sample 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('primitive:sample 1', typeof isFoo, isFoo)

  const sum = maybeNumber + 'ねこ'

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log(typeof sum, sum)
  }
}
