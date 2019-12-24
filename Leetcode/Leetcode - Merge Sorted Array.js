// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

var merge = function(nums1,m,nums2,n) {
    // iterate through nums1,  compare values between num1 and num2, splice both into nums1
    // let dict = {};
    // for(let i = 0; i < nums2.length; i++) {
    //     if(!dict[nums2[i]]){
    //         dict[nums2[i]] = nums2[i];
    //     } 
    // }
    // console.log(dict)

    // for(let j = 0; j < nums1.length-1; j++) {
    //     console.log(j)
    //     for(items in dict) {
    //         // console.log( nums1[j], nums1[j+1], dict[items])
    //         // console.log(nums1[j] < dict[items] && nums1[j+1] >= dict[items])
    //         if(nums1[j]<dict[items] && nums1[j+1] >= dict[items]){
    //             console.log('triggered')
    //             nums1.splice(nums1[j],0,dict[items]);
    //             delete dict[items];
    //             continue;
    //         } 
    //         if(nums1[j] == 0 && nums1[j+1] ==0) {
    //             console.log('trigga')
    //             nums1.splice(nums1[j],0,dict[items]);
    //             delete dict[items];
    //             continue;
    //         }
    //     }
        
    // }

    nums1.splice(m,nums1.length-m,...nums2)
    nums1.sort((a,b)=>{return a-b})
    console.log(nums1)
}
merge([1,2,3,0,0,0], 3, [2,5,6], 3) //[1,2,2,3,5,6]
