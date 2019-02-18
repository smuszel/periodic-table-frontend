packages=$1

f () {
    cd ./packages/$1
    npm run build
    cp -f ../../dockerfile ./dist
    docker build ./dist -t "github-stats-table:$1"
    rm ./dist/dockerfile
}

for p in $packages; do f $p & done