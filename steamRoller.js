function steamrollArray(arr) {
    const result = [];
    function extractItems(item){
        if(Array.isArray(item)){
            for(let i = 0; i < item.length; i++){
                extractItems(item[i])
            }
        }else{
            result.push(item);
        }
    }
    arr.forEach(array=> extractItems(array));
    return result;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]))

