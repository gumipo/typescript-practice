export default function tupleSample() {
  let response: [number, string] = [200, 'ok']
  // response=[400,"じぇk","but"]
  // response=["300",4555]
  response = [400, 'ok']
  console.log(response)

  //可変長引数
  const girlfrends: [string, ...string[]] = ['けいこ', 'あみ', 'ねこ']
  girlfrends.push('まつだ')

  console.log(girlfrends)

  const commands: readonly string[] = ['ねこ', 'いぬ', 'ぶた', '熊']
  // commands.push("狸")
  // commands[4].push("狸")
}
