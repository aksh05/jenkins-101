import _ from 'lodash';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray)
