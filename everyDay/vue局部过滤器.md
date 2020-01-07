## 过滤器
在开发中后台传过来的数据是数组，在前台展示的时候需要转化为文字 0-销售联系人、1-系统账号、2-公司联系人  
所以用过滤器转化一下  
```vue
 <el-table-column prop="city" label="联系人类型" min-width="100">
       <template slot-scope="scope">
         {{ scope.row.type | statusFormat }}
       </template>
  </el-table-column>

filters: {
      //联系人对话框中 过滤器
      statusFormat:function(input){
        let str = "_";
        switch(input){
          case 0:
            str="销售联系人"
                break
          case 1:
            str="系统账号"
                break
          case 2:
            str="公司联系人"
                break
        }
        return str
      }
    }
```  
展示出来的状态为：  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/Snipaste_2020-01-07_11-16-55.png)