// function stringClean(str) {
//   let wordArray = str.split("");

//   wordArray = wordArray.filter(e => {
//     Number.isNaN(Number(e)) || e === 0 || e === "")  
//   })

//   return wordArray.join('');

// }

// console.log(Number('\"me3ssy\"'))
// console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"), "My \"messy\" data issues! Will they ever, ever be solved?")
















const stringClean = str => {
    str.split('').filter(e => Number.isNaN(Number(e)) || e === ' ').join('');
}











