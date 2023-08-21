export const logMessage = (message: string): void => {
  console.log('Function basix sample1 :', message)
}

export function logMessage2(message: string): void {
  console.log(message)
}

export const logMessage3 = function (message: string): void {
  console.log(message)
}

export const logMessage4 = (message: string) => console.log(message)

export const alwausThrowError = (message: string): never => {
  throw new Error(message)
}

//呼び出しシグネチャー
type logMessage = (message: string) => void

export const logMessage6: logMessage = (message) => {
  console.log('えんこねこねこ')
}
