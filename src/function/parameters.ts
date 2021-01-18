//オプションパラメーターを物関数

export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('user is signedin', username)
    return true
  } else {
    console.log('not signed in')
    return false
  }
}

//デファルトパラメーターを持つ関数

export const isUserSignedIn2 = (userId: string, username: string = 'No name'): boolean => {
  if (userId === 'ABC') {
    console.log('user is signedin', username)
    return true
  } else {
    console.log('not signed in')
    return false
  }
}

//レストパラメーターを持つ関数

export const sumProductPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}
