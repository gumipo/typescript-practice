export default function objectSample() {
  const a: object = {
    name: 'ぐみぽ',
    age: 27,
  }
  //オブジェクトリテラル記法
  let cauntry: {
    language: string
    name: string
  } = {
    language: 'ねこ',
    name: 'ねこ',
  }
  console.log(cauntry.name)

  cauntry = {
    language: 'いぬ',
    name: '犬',
  }
  console.log(cauntry)

  //オプショナルとreadonly
  const gumipo: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'ぐみぽ',
    firstName: 'gumipo',
  }

  gumipo.gender = 'male'
  gumipo.lastName = 'fgumiguimi'
  //readonlyのため再代入できない
  // gumipo.firstName="ねこ"

  //インデックスシグネチャー
  const capitals: {
    [countryName: string]: string
  } = {
    japan: 'tokyo',
    korea: 'seoul',
  }
  capitals.china = 'beijing'
  capitals.canada = 'otawa'
  console.log(capitals)
}
