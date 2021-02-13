let temps = {
    Australia: 22,
    Ethiopia: 20,
    Russia: -16,
    Italy: 18,
    Canada: -24,
    Monaco: 4,
    Peru: 14,
    Spain: -4,
    Portugal: -6,
}

for (key in temps) {
    console.log(key, temps[key])
}

let Calc_Avg = function(obj) {
    let summ = 0
    for (ttt in obj) {
        summ += temps[ttt]
        }
    let average = summ / Object.keys(obj).length
    console.log('avg. temp :: ', average)
}
    
let Find_Max = function(obj) {
    let max = 0
    for(ttt in obj) {
        if(obj[ttt] > max) max = obj[ttt]
    }
    console.log('max :: ', max)
}

Calc_Avg(temps)
Find_Max(temps)