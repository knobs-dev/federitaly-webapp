#!/bin/bash

# Call the script with deploy.sh {network}
if [[ $# -lt 1 ]]; then
    echo "Number of arguments supplied not correct. Call this script: \
    ./deploy.sh {env} \
    env should be one of the networks configured in dfx.json."
    exit 1
fi

ENV=$1

# Check DFX version
version=$(dfx -V | sed 's/dfx\ //g' | sed 's/-.*$//g')
if [[ "$version" < "0.14.0" ]]; then
    echo "dfx 0.14.0 or above required. Please do: dfx upgrade"
    exit 1
fi

## Cleanup, build and deploy canisters
# Param $1: ENV
# Param $2: NETWORK
cleanup_and_deploy() {
    echo "Deploying $1 environment on $2 network"

    # Cleanup environment
    bash ./cleanup.sh $1;

    # Generate production build
    pnpm build

    # Deploy frontend canister
    dfx deploy --network "$2"
}

if [[ $ENV == "local" ]]; then
    # Start local replica
    dfx start --clean --background
    
    cleanup_and_deploy $ENV "local"
elif [[ $ENV == "prod" ]]; then

    cleanup_and_deploy $ENV "ic"
fi