function main() {
    let hasilDadu = [1, 5, 2, 6, 2, 3]
    let kemunculanGanjil = 0
    let kemunculanGenap = 0

    for (let i = 0; i < 6; i++) {
        if (hasilDadu[i] % 2 == 0) {
            kemunculanGenap++
        }
        else if (hasilDadu[i] % 2 != 0) {
            kemunculanGanjil++
        }


    }
    console.log(`Raka mendapatkan angka ganjil sebanyak ${kemunculanGanjil} kali dan angka genap sebanyak ${kemunculanGenap} kali`)
}
main()




module.exports = main