git pull origin dev

git add src/ server.js public/ db/ package.json package-lock.json QA.md task.md forge.config.js .vscode/ git.md  &&

git commit -m "Code in Progress" &&

git push -u origin dev 


# Update branch backup with information from dev branch and push to git

git switch backup

git merge dev

git add src/ server.js public/ db/ package.json package-lock.json QA.md task.md forge.config.js .vscode/ git.md 

git commit -m "Ajust list Aluna for turma" 

# Delete branch

git branch -D main

git push -u origin backup