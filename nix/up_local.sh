#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"
DOCKERFILE="docker-compose.yml"

nix build .#dtl && ./result
nix build .#deployer && ./result
nix build .#boba-deployer && ./result
nix run .#batch-submitter.copyToDockerDaemon
nix run .#l2geth.copyToDockerDaemon
nix run .#hardhat.copyToDockerDaemon
nix run .#gas-price-oracle.copyToDockerDaemon
nix build .#monitor && ./result
nix build .#relayer && ./result
nix build .#integration-tests && ./result
nix run .#fraud-detector.copyToDockerDaemon

if [[ $DAEMON == 1 ]]; then
    docker-compose \
    -f $DIR/$DOCKERFILE \
    up --detach -V
else
    docker-compose \
    -f $DIR/$DOCKERFILE \
    up -V
fi
