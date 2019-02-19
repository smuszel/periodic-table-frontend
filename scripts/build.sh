packages=$1

f () {
    cd ./packages/$1
    npm run build
    cp -f ../../dockerfile ./dist
    docker build ./dist -t "smuszel/periodic-table-of-frontend:$1"
    rm ./dist/dockerfile
    docker push "smuszel/periodic-table-of-frontend:$1"
}

for p in $packages; do f $p & done