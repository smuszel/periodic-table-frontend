f () {
    cd ./packages/$1
    npm run $2
}

if [ -z $2 ]; then
    echo `ls ./packages`
    echo which package?
    read ps
else
    ps=$2
fi

for p in $ps; do f $p $1; done
