class Currency{
    constructor(amout) {
        this.amout_=amout
        this.type_=type
    }
    //换算美金
    toDollar(){
        return this.amout_*huilv(this.type_,"dollar")
    }
}

//换算的汇率 从哪个到哪个
//兑换中心
class ExchangeCenter{
    constructor() {
      this.huilvTable_={}
      setInterval(_=>{
        ajax("renminyinhang").then(table=>{
          this.huilvTable_=table
        }).catch(err=>{
          console.log(err);
        })
      },1000*60)
    }
    huilv(from,to){
       const huilvFrom= this.huilvTable_[from]
       const huilvTo= this.huilvTable_[to]
        if(!huilvFrom ||!huilvTo){
            throw new Error("瞎编货币")
        }
        return huilvFrom/huilvTo
    }
}