STEPS ON HOW TO USE GIT


-------GIT----------
# ADDING FILES TO YOUR GIT
# steps to using git in the trminal 
# git init--- to initialize it
# git config --global user.name ----add your username
# git config --global user.email ----add your email
# git status --- this give you an untracked files, you have to add them to the staging area
# git add -A this is use to add files. the A means add all files
# git commit

# TO REVERSE TO THE PREVIOUS COMMIT
# git reset --hard HEAD
# TO DELETE FILE THAT HAS BEEN ALREADY COMMITED
# git log ----shows you all the log that you did
# copy the ID
# type q for quit or :q
# git reset hard and paste in the ID of the commit

It is morE advisable to create a new branch rather than move inbetween different commit. lets see how.

> git branch ---- this will list all the branches we corrently have.

creating new branch will mean having a copy of the master branch into another branch and we can edit it without affecting the original branch.

> git branch ----branch name (to create new branch)
>git checkout ----name of the branch(to switch to the new branch)

you can merge the new branch and the master branch like so.
>git checkout master to switch to the master branch
> git merge ----name of the branch you want to merge

PUSHING CODE TO GIHHUB
copy the url of your remote git and paste it in your terminal

>git push origin -----the name of the branch you want to push

TO CREATE A README FILE
> touch REANME.md (md stands for mark down. its a special formart to write document)

ERROR: fatal: Unable to create '/path/my_proj/.git/index.lock': File exists.

SOLUTION: rm -force ./.git/index.lock