function tri(numbers, order) {
    
    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
        return;
    }

   
    const compareAscendant = (a, b) => a - b;
  
    const compareDescendant = (a, b) => b - a;

    const compareFunction = order === "asc" ? compareAscendant : compareDescendant;

    numbers.sort(compareFunction);

    return numbers;
}

const tableauAscendant = tri([3, 1, 5, 2, 4], "asc");
console.log("Tri ascendant :", tableauAscendant); 
const tableauDescendant = tri([3, 1, 5, 2, 4], "desc");
console.log("Tri descendant :", tableauDescendant); 
