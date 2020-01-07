## element中Message消息提示的使用
当修改公司的状态 后台返回的res.success为true时 给用户一个提示消息  
```vue
setContactStatus(params).then(res => {
          console.log(res)
          if(res.success){
            this.$message({
              showClose: true,
              message: '状态修改成功',
              type: 'success'
            });
          }
        })
```  
![](https://raw.githubusercontent.com/466879168/Figure-bed/master/images/20200107141657.png)