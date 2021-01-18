// import World from './world'

// const root = document.getElementById('root')

// const world = new World('Hallo Typescript!!')

// world.sayHello(root)

//03　基本の型
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/index'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

//04　関数の型
// import { logMessage } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductPrice } from './function/parameters'

// logMessage('Hello Typescript')
// isUserSignedIn('ABC', 'ねこ')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')

// const sum = sumProductPrice(2, 3, 4, 6, 7, 4, 3, 2, 2, 7, 5, 4, 3, 34, 5, 4, 3, 2, 5, 6, 4, 3)
// console.log(sum)

//o5オブジェクトの方
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'

// objectSample()
// typeAliasSample()

// import arraySample from './array/array'

// arraySample()

//ジェネリック型
import genericsSample from './generics/generics'
import genericsAdvancedSample from './generics/advanced'
genericsSample()
genericsAdvancedSample()
