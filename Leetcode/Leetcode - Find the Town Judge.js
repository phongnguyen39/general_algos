// https://leetcode.com/problems/find-the-town-judge/

var findJudge = function(N, trust) {
    // find the judge: 1) value that trusts no one, is the judge, all other values from 2d -> judge
    // 2d array represents who trusts who

    if(trust.length == 0 || N == 0 ) {
        console.log(-1)
        return -1;
    }


    

    // generate dict with N people
    let people = {};
    for(let k = 1; k <= N; k++) {
        people[k] = new Set();
    }
    
    // loop 2d, 
    // keys will trust[i][0], values trust[i][1]

    for(let i = 0; i < trust.length; i++) { 
        people[trust[i][0]].add(trust[i][1])
    }

    // search for dict and look for person with empty array
    let judge = -1;
    for(person in people) {
        if(people[person].size == 0) {
            // console.log('JUDGE:', person);
            judge = parseInt(person);
        }
    }

    /// who is the just, second step is to see if anyone trust him

    for(person in people) {
        if(parseInt(person) == judge) {
            continue;
        }
        if(people[person].has(judge) == false) {
            return -1;
        }
    }
    console.log(judge)
    return judge;
    
};
// findJudge(3,[[1,3],[2,3]]) // 1 -> 3, 2 -> 3, but three trusts no one
findJudge(3,[[1,2],[2,3]]) // 1 -> 3, 2 -> 3, but three trusts 