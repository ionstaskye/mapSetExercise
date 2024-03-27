//{1,2,3,4}
//{'r','e','f'}
//0: {[1,2,3] => true}
//1: {[1,2,3] => false}
const hasDuplicate = (arr) =>  {
    let noDupes = new Set (arr)
    if (arr.length !== noDupes.size)    {
        return true
    }
    else{
        return false
    }
}
const vowelCount = (str)    =>  {
    let strArray = str.split('')
    let vowelCountMap = new Map ()
    let vowel = "aeiou"
    for (i=0; i<strArray.length; i++){
        let letter = strArray[i]
        let lowerCaseLetter= letter.toLowercase
        if (vowel.indexOf(lowerCaseLetterletter) !== -1)   {            
           if(vowelCountMap.has(lowerCaseLetterletter)) {
           vowelCountMap.set(lowerCaseLetterletter, vowelCountMap.get(lowerCaseLetterletter)+1)
        }
        else    {
            vowelCountMap.set(lowerCaseLetterletter, 1)
        }
    }
   }
   return vowelCountMap
}