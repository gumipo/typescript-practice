export default function notExistSample() {
  let name = null

  name = 'ぐみぽ'

  console.log('notExist:sample 1', typeof name, name)
  if (name) {
    console.log('notExist:sample 2', '吾輩は' + name + 'である')
  } else {
    console.log('notExist:sample 3', '名前はまだない')
  }

  let age = undefined
  console.log('notExist:sample 4', typeof age, age)

  age = 45

  if (age) {
    console.log('notExist:sample 5', '年齢は' + age + 'である')
  } else {
    console.log('notExist:sample 6', '生まれてない')
  }
}
