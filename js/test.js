/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    for (let i=0;i<A.length;i++){
        var B=[];
        var C=[];
        if (A[i]%2===0){
            B.concat(A[i]);
        }
        else {
            C.concat(A[i]);
        }
    }
    return [...B, ...C];
};