/**
 * Estudo do laço for (uso de dois laços)
 */

console.clear()
for (let i = 1; i < 11; i ++) {
    console.log('')
    console.log(`tabuada do ${i}`)
    console.log('')
    for(let j = 1; j < 11; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}