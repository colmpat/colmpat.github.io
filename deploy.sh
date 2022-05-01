rm -rf node_modules/.cache
next build 
next export
cd out
touch .nojekyll
git coa "Deploy Next.js to gh-pages"
git push -u origin gh-pages
cd ..