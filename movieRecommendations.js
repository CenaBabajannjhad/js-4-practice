// Movie Recommendations
const recommendedMovies1 = ["Inception", "The Matrix", "Interstellar", "Memento"];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];
const mergeRecommendedMovies = recommendedMovies1.concat(recommendedMovies2);

// the filter check if indexOf an element is currect with current value
// if it is return value else return nothing
// indexOf method return index first element find in list 
let uniqueListItems = mergeRecommendedMovies.filter((value , index) => {
    return mergeRecommendedMovies.indexOf(value) === index;
})
uniqueListItems.reverse();
uniqueListItems = uniqueListItems.join(' | ')

console.log(uniqueListItems);