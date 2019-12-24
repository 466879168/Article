# git操作
## 1. 安装git
安装git很多人都是在git官网[https://git-scm.com/](https://git-scm.com/)中下载，但是在官网下载的很慢，所以我给大家介绍下git的淘宝镜像，下载飞起，地址就是[https://npm.taobao.org/mirrors/git-for-windows/](https://npm.taobao.org/mirrors/git-for-windows/)

## 2. 运行git前的配置
安装完git第一件事情就是全局配置自己的用户名和邮箱，因为每一次的提交都需要使用到：  
```shell
$ git config --global user.name "466879168"
$ git config --global user.email "46679168@qq.com"
```  
加上--global的是全局配置，所有的项目都是用的这一个配置，如果想在不同的项目中使用不同的而配置的话，那就应该在项目下使用不加--global的配置  

### 检查配置信息
如果想要查看刚才的配置的话，可以使用`git config --list`命令列出所有的配置  
```shell
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
credential.helper=manager
user.name=466879168
user.email=466879168@qq.com
core.autocrlf=true
core.excludesfile=C:\Users\Admin\Documents\gitignore_global.txt
difftool.sourcetree.cmd='' "$LOCAL" "$REMOTE"
mergetool.sourcetree.cmd=''
mergetool.sourcetree.trustexitcode=true
```  
可以看到我们刚才配置的name和email已经在里面了  
如果想要查看某一项的配置可以输入`git config <user.name>`即可  
```shell
$ git config user.name
466879168
```  

## 3. git基础
### 3.1 创建git 仓库
在现有的git项目中进行git管理，需要在该项目目录中初始化一个git仓库  
```shell
$ git init
```  
想要克隆远程的git仓库就需要使用clone命令  
```shell
$ git clone https://github.com/466879168/Article.git
```  
如果想要在克隆的时候自定义本地仓库的名字，需要使用以下的命令：  
```shell
$ git clone https://github.com/466879168/Article.git 
```

### 3.2 每次记录更新到仓库
+ git status 检查当前的文件状态
+ git add . 添加文件到暂存区
+ git commit -m "" 提交文件到仓库区
+ git log 查看提交历史
+ git push 推送到远程的仓库
+ git pull 从远程的仓库拉去最新的代码
+ git branch <分支名称> 创建一个新的分支 仅仅是创建一个分支，并不会切换过去
+ git checkout <分支名称> 这样就可以切换到新建的分支上了
+ git checkout -b <分支名称> 创建并切换到新分支，它是两条命令的缩写 git branch <分支名称> git checkout <分支名称>
+ git checkout --<文件名> 撤销还没有提交到暂存区的文件的修改
+ git checkout .撤销从上次提交之后所做的所有修改
+ git merge <分支名称> 在当前分支上合并<分支名称>这个分支
+ git branch -d <分支名称> 删除分支
+ git branch 得到本地当前所有分支列表
+ git branch -r 查看远程分支
+ git branch -a 查看本地和远程的所有分支
+ git branch -v 查看每一个分支的最后一次提交
+ git branch --merged 查看哪些分支已经合并到当前分支 然后就可以删除不需要的了
+ git branch --no-merged 查看所有包含未合并工作的分支


### 3.3 git在编辑器中的状态
+ A: 你本地新增的文件（服务器上没有）
+ C: 文件的一个新拷贝
+ D: 你本地删除的文件（服务器上还在）
+ M: 文件的内容或者mode被修改了
+ R: 文件名被修改了
+ T: 文件的类型被修改了
+ U: 文件没有被合并(你需要完成合并才能进行提交)
+ X: 未知状态(很可能是遇到git的bug了，你可以向git提交bug report)

