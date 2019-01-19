//Classical JS Example

const devices = [
  { id: 1, type: "HDD", capacity: 64 },
  { id: 2, type: "SSD", capacity: 32 },
  { id: 3, type: "USB flash", capacity: 16 }
];

//whether all of our devices can store our vide
//whther SOME of our devices can store our video material

//Video Material is 32GB

let allDevicesCanStoreVideos;
let onlySomeDevicesCanStoreVideos;

// for (let i = 0; i < devices.length; i++) {
//   if (devices[i].capacity < 32) {
//     allDevicesCanStoreVideos = false;
//   } else {
//     onlySomeDevicesCanStoreVideos = true;
//   }
// }

allDevicesCanStoreVideos = devices.every(device => {
  return device.capacity >= 32;
});
onlySomeDevicesCanStoreVideos = devices.some(device => {
  return device.capacity >= 32;
});
console.log(allDevicesCanStoreVideos);
console.log(onlySomeDevicesCanStoreVideos);
