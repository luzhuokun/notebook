
## 常用命令

### 递交代码
git add .  
git commit -m 'xxx'  
git push  

### 配置
git config [--local|--global|--system] -l  
git config [--local|--global|--system] -e  
git config [--local|--global|--system] --add section.key value(默认是添加在local配置中)  
git config [--local|--global|--system] --unset section.key  

### 把代码还原到commit_id的位置
git reset commit_id(commit_id通过git log查)

### 添加远程仓库
git remote add example git@github.com:yourUserId/example.git

### git 命令修改commit时的用户名和邮箱地址
#### 查询
git config user.name
git config user.email
#### 修改
git config user.name xxxx
git config user.email xxxx
#### 修改全局
git config --global user.name xxxx
git config --global user.email xxxx

### 强制推送
git push origin <you_branch_name> -f
