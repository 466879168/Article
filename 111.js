class Promise{
constructor(excutorCallBack){
    //new 时候的状态
    this.status='pending'
    //这个时候还没有结果
    this.value=undefined
    //成功要执行的方法
    this.fulfilledArr=[]
    //失败要执行的方法
    this.rejectedArr=[]
    //resolve函数
    let resolveFn=(result)=>{
        if (this.status!== 'pending') {
            return 
        }
        this.status='fulfilled'
        this.value=result
        this.fulfilledArr.forEach(item=>item(this.value))
    }
    //reject函数
    let rejectFn=(reason)=>{
        if (this.status!== 'pending') {
            return 
        }
        this.status='rejected'
        this.value=reason
        this.rejectedArr.forEach(item=>item(this.value))
    }
    //new实例的回调函数
    excutorCallBack(resolveFn,rejectFn)
}
then(fulfilledCallBack,rejectedCallBack){
this.fulfilledArr.push(fulfilledCallBack)
this.rejectedArr.push(rejectedCallBack)
}
}

export default Promise