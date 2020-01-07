## 需求
在做项目中，需要根据switch开关的状态来判断是否在前台显示，需要知道当前开关的状态，需要知道是哪一个具体的公司  
根据官网的描述写的话可以满足知道目前的开关状态，但是不知道是哪一个具体的公司
```vue
 <el-switch
       v-model="scope.row.is_show"
       :active-value="1"
       :inactive-value="0"
       active-text
       inactive-text
       @change='changeStatus'
  >
  </el-switch>
 changeStatus(callback){
      console.log(callback)// 0 1 0 1 0 1 状态可以获取到
    }
```  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/Snipaste_2020-01-06_11-29-47.png)  
再继续增加一个参数就可以解决 其中$event就是当前的状态，,而scope.row.company_id就是自定义的参数公司的id   
```vue<el-switch
    v-model="scope.row.is_show"
    :active-value="1"
    :inactive-value="0"
    active-text
    inactive-text
    @change='changeStatus($event,scope.row.company_id)'
 >
 </el-switch>
  changeStatus($event,num){
      console.log($event)//0 1 0 1
      console.log(num)// 122642  122660
    }
```  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/Snipaste_2020-01-06_11-33-04.png)  

完美解决问题