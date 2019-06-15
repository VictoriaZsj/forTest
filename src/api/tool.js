
export default {
  //数组去重
  uniq1: function (array) {
    var temp = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) {
      if (temp.indexOf(array[i]) == -1) {
        temp.push(array[i]);
      }
    }
    return temp;
  },
  uniq2:function (arr){
    // var temp = {}, r = [], len = array.length, val, type;
    //     // for (var i = 0; i < len; i++) {
    //     //   val = array[i];
    //     //   type = typeof val;
    //     //   if (!temp[val]) {
    //     //     temp[val] = [type];
    //     //     r.push(val);
    //     //   } else if (temp[val].indexOf(type) < 0) {
    //     //     temp[val].push(type);
    //     //     r.push(val);
    //     //   }
    //     // }
    //     // return r;
    //用键值来判断，新建一个对象
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
      if(!hashTable[arr[i]]) {
        hashTable[arr[i]] = true;
        data.push(arr[i]);
      }
    }
    return data
  },
//统计一个字符串出现最多的字母
  findMaxDuplicateChar:function (str) {
    if(str.length == 1) {
      return str;
    }
    let charObj = {};
    for(let i=0;i<str.length;i++) {
      if(!charObj[str.charAt(i)]) {
        charObj[str.charAt(i)] = 1;
      }else{
        charObj[str.charAt(i)] += 1;
      }
    }
    let maxChar = '',
      maxValue = 1;
    for(var k in charObj) {
      if(charObj[k] >= maxValue) {
        maxChar = k;
        maxValue = charObj[k];
      }
    }
    return maxChar;
},
//冒泡排序
  bubbleSort:function(arr,sequence){
    for(var i=0;i<arr.length-1;i++){//i是从索引为零开始到数组的倒数第二个
      for(var j=0;j<arr.length-i-1;j++){//j是从索引为0开始到
        if(sequence===1){
          if(arr[j]>arr[j+1]) {
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }//从小到大排序
        }else if(sequence===2){
          if(arr[j]<arr[j+1]) {
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }//从大到小排序
        }
      }
    }
    return arr;
  },
  //快速排序
  quickSort:function (arr) {
    if(arr.length<1){
      return arr
    };
    let q=arr[0];
    let leftArr=[];
    let rightArr=[];
    for(let i=1;i<arr.length;i++){
      if(arr[i]<q){
        leftArr.push(arr[i])
      }else {
        rightArr.push(arr[i])
      }
    }
    return [...this.quickSort(leftArr),q,...this.quickSort(rightArr)];
  },
  //生成随机字符串
  randomStr: function  (len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678';
    var maxPos = chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  isEmptyObject:function (obj) {
    var name;
    for (name in obj) {
      return false
    }
    return true;
  }
}
