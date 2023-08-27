const createRandomGenerator = (length) => {
  const storage = new Set()

  return () => {
    let random

    do {
      random = Math.random().toString().split('.')[1].slice(0, length)
    } while (storage.has(random))

    storage.add(random)
    return random
  }
}

export { createRandomGenerator }
