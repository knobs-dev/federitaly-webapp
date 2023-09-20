curl -sLv -X POST \
    -H 'Content-Type: application/json' \
    https://icp0.io/registrations \
    --data @- <<EOF
{
    "name": "madeinitalyoriginale.it"
}
EOF