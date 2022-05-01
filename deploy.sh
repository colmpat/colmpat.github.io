rm -rf node_modules/.cache
npm run build 
npm run export
cd out
touch .nojekyll
git coa "Deploy Next.js to gh-pages"
git push -u origin gh-pages
cd ..