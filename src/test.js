const arr = ['aaa', 'b', 'hagai']

const filtered = arr.filter(item => {
  return (
    item => item.includes('b')
  )
} )

// filtered.map()

console.log(filtered)
