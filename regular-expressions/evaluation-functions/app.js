let re;
// re = /hello/;
//we can can a case insensitive flag for the regex as belo
re = /hello/i;
// re = /hello/g; searches all body for a match not just the first
console.log(re);
console.log(re.source)

//evaluating functions for regex


//exec() -Return result in an array or null

const result = re.exec('hello');
console.log(result) //will give the match or null ['hello,index,input]


//test() -Return true or false

const result_test = re.test('hi')
console.log(result_test)


//match() - Result result array or null
const str = 'Hello There';
const result_match = str.match(re);
console.log(result_match)

//search() -Return index of the first match if not found return -1

const str_search = 'This is not a frill Hello There';
const result_search = str_search.search(re);
console.log(result_search)

//replace()- Return a new string with some or all matches of a pattern

const str_replace = 'Hello There'
const newStr = str_replace.replace(re,'Yes')
console.log(newStr)