// list of ips, ips are stirngs
// remove duplicates, but keep the first instance of it
// not sorted, use a memory efficient structure no hashtables

let removeDupIP = (arr) => {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {

        if (!dict[arr[i]]) {
            dict[arr[i]] = 1
        } else {
            dict[arr[i]]++;
        }
    }
    console.log(dict)
}
removeDupIP(['50.116.30.23', '198.58.103.28', '198.58.103.36', '198.58.102.49', '198.58.103.91', '198.58.102.95', '198.58.103.92', '198.58.102.96', '198.58.103.114', '198.58.103.28', '198.58.102.117', '198.58.103.115', '198.58.103.91', '198.58.102.155', '198.58.102.156', ' 98.58.103.158']);  // two duplicates in here