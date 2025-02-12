#!/usr/bin/env bash
# Usage: ./socks.sh [on|off]
# `./socks.sh on` will create a socks connection, and refresh the connection if one already exists
# `./socks.sh off` will terminate the socks connection
# `./socks.sh` with no arguments will echo the current status of socks
# You can alias this script by adding `alias socks='/path/to/socks.sh'` to your `~/.bashrc` or `~/.zshrc` file.
# Override the default location of keyfile by setting VA_SOCKS_KEYFILE environment variable
# Override the default network (Wi-Fi) by setting SOCKS_NETWORK environment variable
# Note: Only tested on OSX; Requires Ruby >= 3.3
set -o errexit
set -o nounset
# set -x

SOCKS_NETWORK=${SOCKS_NETWORK:-"Wi-Fi"}
IP="127.0.0.1"
WEB_PORT=2001
AUTOCONFIG_PORT=9500
# from https://stackoverflow.com/a/246128/4907881
PROXY_PAC_LOCATION="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

socks_add_key_cmd="ssh-add -K ${VA_SOCKS_KEYFILE:-~/.ssh/id_rsa_vagov}"
socks_del_key_cmd="ssh-add -d ${VA_SOCKS_KEYFILE:-~/.ssh/id_rsa_vagov}"
socks_start_cmd="ssh socks -D ${WEB_PORT} -N";
socks_kill_cmd="pkill -f \"$socks_start_cmd\"";
webserver_start_cmd="ruby -run -e httpd ${PROXY_PAC_LOCATION} -p ${AUTOCONFIG_PORT} --bind-address 127.0.0.1"

function turn_system_proxy_on {
    # Start server to serve up proxy config
    echo "Starting proxy.pac webserver";
    eval $webserver_start_cmd &> /dev/null & disown;

    echo "Setting Mac proxy settings";
    networksetup -setautoproxyurl       "${SOCKS_NETWORK}" "http://localhost:${AUTOCONFIG_PORT}/proxy.pac";
    networksetup -setautoproxystate     "${SOCKS_NETWORK}" on;
    networksetup -setproxyautodiscovery "${SOCKS_NETWORK}" off;
}

function turn_system_proxy_off {
    echo "Clearing Mac proxy settings.";
    networksetup -setautoproxystate     "${SOCKS_NETWORK}" off;
    networksetup -setproxyautodiscovery "${SOCKS_NETWORK}" on;

    echo "Stopping proxy.pac webserver"
    webserver_kill_cmd="pkill -f \"$webserver_start_cmd\"";
    eval $webserver_kill_cmd || true;
}


socks_ps=`ps -ef | grep "$socks_start_cmd" | grep -v grep` || true;
socks_ps_count=`ps -ef | grep "$socks_start_cmd" | grep -v grep | wc -l` || true;
[ $socks_ps_count -eq 0 ] && echo "socks are OFF" || echo "socks are ON";
if [ $# -eq 0 ]; then
    exit 0;
else
    if [ $# -eq 1 ] && [ $1 == "on" -o $1 == "start" ]; then
        echo "(re)starting socks...";
        eval $socks_kill_cmd || true;
        eval $socks_add_key_cmd;
        eval $socks_start_cmd & disown;
        turn_system_proxy_on;
        exit 0;
    else
        if [ $# -eq 1 ] && [ $1 == "off" -o $1 == "stop" ]; then
            echo "stopping socks...";
            turn_system_proxy_off;
            eval $socks_kill_cmd || true;
            eval $socks_del_key_cmd || true;
            exit 0;
        else
            echo "Usage: socks [on or start|off or stop]";
            exit 1;
        fi;
    fi;
fi;
