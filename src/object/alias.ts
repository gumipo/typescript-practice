export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }
  const japan: Country = {
    capital: 'Tokyo',
    language: 'japanese',
    name: 'japan',
  }
  console.log(japan)

  const america: Country = {
    capital: 'washonton DC',
    language: 'English',
    name: 'america',
  }
  console.log(america)

  //合併型と交差型
  type Knight = {
    hp: number
    sp: number
    wapon: string
    swordskill: string
  }

  type Wizard = {
    hp: number
    mp: number
    wapon: string
    magicskill: string
  }

  //合併型 ナイトかウィザード
  type Addventurer = Knight | Wizard

  //ナイトとウィザード両方持つ
  type Pladin = Knight & Wizard

  const advenchrer1: Addventurer = {
    hp: 100,
    sp: 30,
    wapon: '気の件',
    swordskill: '三bん談議地',
  }

  const adventhrer2: Addventurer = {
    hp: 200,
    mp: 30,
    wapon: '気の杖',
    magicskill: 'ファイヤーボ',
  }
  console.log(advenchrer1)
  console.log(adventhrer2)

  const paladin: Pladin = {
    hp: 300,
    sp: 100,
    mp: 500,
    wapon: '猫じゃらし',
    swordskill: '水面切り',
    magicskill: '猫騙し',
  }
}
