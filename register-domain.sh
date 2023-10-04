curl -sLv -X POST \
    -H 'Content-Type: application/json' \
    https://icp0.io/registrations \
    --data @- <<EOF
{
    "name": "madeinitalyoriginale.it"
}
EOF
# {"id":"1eb163b41fb57d1b48731241cac9e57a455289d1f2f85e8f3f1cd0483461418d"}% 