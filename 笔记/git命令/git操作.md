git init - 初始化仓库。
git add . - 添加文件到暂存区。
git commit - 将暂存区内容添加到仓库中。

git branch - 查看分支
git branch (branchname) - 创建分支
git checkout (branchname) - 切换分支
git merge - 合并分支

git clone (仓库地址) - 克隆仓库
git log - 查看日志
git status - 查看仓库状态
git reset (filename) - 回退
git reset (commitID) - 版本回退
git alias - 自定义命令

# 提交过程
git add .
git commit -m "message"
git push

# 拉取代码
git checkout (分支名)
git pull

# 合并代码
1.切换到develop分支拉去最近代码
  git pull
2.切回当前开发分支，合并develop分支，查看合并之后的状态
  git checkout dev-zcd
  git merge develop
  git status
3.解决冲突
  git add 冲突文件
  git commit
  git push
4.上线前切到develop分支，合并开发分支
  git checkout develop
  git merge dev-zcd
  git push
