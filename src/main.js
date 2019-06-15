import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


/////////////////////////////////////////
//原生js算法
import {curry} from 'api/helpers'
import toolFun from 'api/tool'
const curryA= curry(3);

var arr = [1,2,"2",4,9,"a","a",2,3,5,6,5];
var strr='jkjgdsvbnkaddsdsssssdbbdsgdhjkshdk';
var arr2=[1,2,6,4,9,92,4,2,7,0,3,5,6,5];
// console.log(uniq(aa))
console.log(curryA(3))
var dd={ss:2, rr:5, gg:4}
console.log(toolFun.uniq2(arr));
console.log('ggg',toolFun.findMaxDuplicateChar(strr));
console.log(toolFun.quickSort(arr2));
console.log(toolFun.randomStr(10));
console.log(toolFun.isEmptyObject(dd))

// //原型对象
// function createPerson(name,age,job) {
//   var o=new Object();
//   o.name=name;
//   o.age=age;
//   o.job=job;
//   o.sayName=function () {
//     alert(this.name)
//   };
//   return o
// }
// var person1=createPerson('hhh',29,'sdjsjk')
// console.log(person1);


// //闭包
// function bibao(val){
//   var name='zhengsijie';
//   this.name='sss'
//   this.age=7;
//   this.func=function(){
//     name=val;
//     this.name=val;
//     console.log('hh:',name)
//     console.log('hh:',this.name)
//   }
// }

// var stance=new bibao('ww')

// stance.func();

// var p1 = new Promise(function(resolve, reject){
//   console.log(111)
//   console.log(222)
//   console.log(333)
//   resolve(1);
//   console.log(444)
//   console.log(555)
// })
// setTimeout(function(){
//   console.log(666)
// console.log("will be executed at the top of the next Event Loop");
// },0)
// console.log(777)
// p1.then(function(value){
//   console.log(888)
// console.log("p1 fulfilled");
// })
// setTimeout(function(){
//   console.log(999)
// console.log("will be executed at the bottom of the next Event Loop");
// },0)
// console.log(101010);



// (function() {
//   var bar ;
//   var baz ;
//   var foo = 1;
//   alert(foo + " " + bar + " " + baz);
//   bar = 2;
//   baz = 3;
// })();

// foo();

// function foo() {
//   alert("Hello!");
// }
// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
// var a = {
//   user:"汪某",
//   fn:function(e,d,f){
//       console.log(this.user); //汪某
//       console.log(e,d,f); //10 1 2
//   }
// }
// var b = a.fn;
// var c = b.bind(a,10,7);//参数有顺序的
// c(1,2,4,5);


// var arr = ["One","Two","Three"];

// var arrtoo = arr.slice(0);
// arrtoo[1] = "set Map";
// document.writeln("数组的原始值：" + arr + "<br />");//Export:数组的原始值：One,Two,Three
// document.writeln("数组的新值：" + arrtoo + "<br />");//Export:数组的新值：One,set Map,Three

// var arr = ["One","Two","Three"];

// var arrtooo = arr.concat();
// arrtooo[1] = "set Map To";
// document.writeln("数组的原始值：" + arr + "<br />");//Export:数组的原始值：One,Two,Three
// document.writeln("数组的新值：" + arrtooo + "<br />");//Export:数组的新值：One,set Map To,Three

// var deepCopy=function(source){
//   var result={};
//   for(var key in source){
//     result[key]=typeof source[key]=='object'?deepCopy(source[key]):source[key]
//   };
//   return result
// }
// var aa={ name:"yy", age:26,hh:{
//   na:9,
//   ag:'ee'
// }};
// var bb=deepCopy(aa)
// console.log(bb)

// const target = { a: 1 };

// const source1 = { a:'xx',b: 2 };
// const source2 = { c: 3 };

// var ttt={aa:'rr',a:'a',b:'b',c:'c'}
// var tttt={...ttt}
// console.log(tttt)
// tttt.aa='zheng';
// console.log(ttt)
// console.log(tttt)

// function simpleCopy (initalObj) {
//   var obj = {};
//   for ( var i in initalObj) {
//    obj[i] = initalObj[i];
//   }
//   return obj;
// }
// var copy=simpleCopy(aa);
// copy.age='27'
// console.log(copy)
// console.log(aa)

// setTimeout(function(){
//   console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//   console.log('马上执行for循环啦');
//   for(var i = 0; i < 10000; i++){
//       i == 99 && resolve();
//   }
// }).then(function(){
//   console.log('执行then函数啦')
// });


// var a = {
//   user:"汪某",
//   fn:function(e,d,f){
//       console.log(this.user); //汪某
//       console.log(e,d,f); //10 1 2
//   }
// }
// var b = a.fn;
// var c = b.bind(a);
// c(1,2);

// let iterable = [3, 5, 7];
// iterable.foo = "hello";

// for (let i in iterable) {
//   console.log(i); //  0, 1, 2, "foo", "arrCustom", "objCustom"
// }


// for (let i of iterable) {
//   console.log(i);
// }

// console.log('88:',Array.prototype)


///////////////////////////////////
