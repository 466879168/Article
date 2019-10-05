/**
 * 目录：
 * 1. 冒泡排序
 * 2. 插入排序
 * 3. 快速排序
 * 4. bind方法
 */

//1. 
//冒泡排序的思想：让数组中的当前项和后一项进行比较，如果当前项比后一项大，则两项交换位置
/**
 * bubble实现冒泡排序
 * @param arr 需要排序的数组
 * @return 排序后的新数组
 */
function bubble(arr) {
    //外层循环循环几次
    for (let i=0;i<arr.length-1;i++){
        //内层循环控制每一轮的次数
        for (let j=0;j<arr.length-1-i;j++){
            if (arr[j]>arr[j+1]){
                //当前项大于后一项
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}




//2. 
//插入排序
/**
 * insert插入排序
 * @param arr 需要排序的数组
 * @returns {*} 返回排序后的新数组
 */
function insert(arr) {
    //1. 准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
    let handle=[]
    handle.push(arr[0])
    //2. 从第二项开始一次抓牌，一直到把牌面上的牌抓光
    for (let i=1;i<arr.length;i++){
        //A是新抓的牌
        let A=arr[i]
        //和handle手里的牌一次比较（从后向前）
        for (let j=handle.length-1;j>=0;j--){
            //每一次要比较的手里的牌
            let B=handle[j]
            //如果当前新牌A比要比较的牌B大，把A放到B的后面
            if (A>B){
                handle.splice(j+1,0,A)
                break
            }
            //已经比到了第一项了，我们把新牌A放到最前面即可
            if (j === 0){
                handle.unshift(A)
            }
        }
    }
    return handle
}

//3. 
//[12,8,15,16,1,24]
//快速排序：找到数组的中间项，把她从原来数组中移除，获取这一项的结果（15）然后拿出数组中的每一项和中间项比较，小的放左边，大的放右边，左右两边继续这个操作
/**
 * quick 快速排序
 * @param arr 需要排序的数组
 * @return 排序后的数组
 */
function quick(arr) {
    //4. 结束递归，当arr中小于等于一项的时候，则不处理
    if (arr.length <= 1) {
        return arr
    }
    //1. 找到数组中的中间项，在原有的数组中把它移除
    let middleIndex = Math.floor(arr.length / 2)
    //删除的这一项数组的元素
    let middleValue = arr.splice(middleIndex, 1)[0]
    //2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放在左边数组，比当前项大的放右边数组
    let arrLeft = []
    let arrRight = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        item < middleValue ? arrLeft.push(item) : arrRight.push(item)
    }
    //3. 递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止（最后让左边+中间+右边拼接成后的结果）
    return quick(arrLeft).concat(middleValue, quick(arrRight))
}




//4. bind方法
