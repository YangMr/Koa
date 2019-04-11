/*
function makeIterator(arr) {
    let nextIndex = 0;
    //返回一个迭代器对象
    return {
        next : ()=>{
            //next方法返回的结果对象
            if(nextIndex < arr.length){
                return {
                    value : arr[nextIndex++],
                    done : false
                }
            }else{
                return {
                    done : true
                }
            }
        }
    }
}

const it = makeIterator(["吃饭","睡觉","打豆豆"]);

console.log("首先",it.next().value);
console.log("其次",it.next().value);
console.log("然后",it.next().value);
console.log("最后",it.next().done);
*/


/*生成器:
    字面意思就是生成一个东西,但生成器就是返回迭代器的函数,我们本质上还是在操作迭代
器,只不过借助生成器函数来完成这件事情,从语法上来看只不过是比普通函数多了一个*号*/

function *makeIterator(arr) {
    for (let i=0;i<arr.length;i++){
        yield arr[i];
    }
}

const gen = makeIterator(["吃饭","睡觉","打豆豆"]);

console.log("首先",gen.next().value);
console.log("其次",gen.next().value);
console.log("然后",gen.next().value);
console.log("最后",gen.next().done);

