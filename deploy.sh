rm -rf node_modules/.cache
rm -rf out

npm run build 
npm run export

cd out
touch .nojekyll

git init
git checkout -b main
git add -A
git commit -m 'deploy to gh-pages'

git push -f git@github.com:colmpat/colmpat.github.io.git main:gh-pages

cd -

rm -rf out