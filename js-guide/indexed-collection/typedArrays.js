//JavaScript typed arrays are array-like objects and provide a mechanism for accessing raw binary data. Array objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using WebSockets , and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily maniputae raw binary data in typed arrays

// To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into buffers and views. A buffer(implemented by the ArrayBuffer object) is an object representing a chunk of data; it has no format to speak of, and offers no mechanism for accessing its contents. In order to access the memory contained in abuffer, you need to use a view. A view provides a context - that is a data type, starting offset and the number of elements - that turns the data into an actual typed array.

//ArrayBuffer
//The ArrayBuffer is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an ArrayBuffer, instead, you create a typed array view or a DataView which represents the buffer in a specific format, and use that to read and write the contents of the buffer

//Typed array views
// Typed array views have self descriptive names and provide views for all the usual numeric types like Int8, Uint32, Float64 etc.

let buffer = new ArrayBuffer(16);

console.log(buffer.byteLength);

let int32View = new Int32Array(buffer);

console.log(int32View);
console.log(int32View.length);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

console.log(int32View);
