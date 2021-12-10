console.log('Hello parcel!')

// babel에선 async await문법은 기본설정으로 제공하고있지않음 
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise);
}

test();