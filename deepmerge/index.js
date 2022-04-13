const deepmerge = require('deepmerge');

const arr1 = {
	name: "foo",
	arr: [1,2,3]
};

const arr2 = {
	name: "foo",
	arr: [1,2,3]
}

let mergedObject = deepmerge(arr1, arr2);
console.log(mergedObject);