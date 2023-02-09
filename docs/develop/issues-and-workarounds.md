# Issues and Workarounds

This page provides workarounds and answers for issues and questions that frequently come up. 

## Error parsing resolv.conf
The following error has been detected in some Ubuntu operating systems.
```bash
    thread 'main' panicked at 'DNS wont fail: Custom { kind: Other, error: "Error parsing resolv.conf: ProtoError { kind: Msg(\"Malformed label: --\") }" }', /app/network/src/network.rs:172:30
```
Steps to resolve it:
1. Edit the **resolv.conf** file with path "**/etc/resolv.conf**" and comment out the line starting with "**search**".
2. Check if this file is a symbolic link. To do this, run the following command:
    
    ```bash
        ls -l /etc/resolv.conf
    ```
    
    In case it is a symbolic link, you must edit the files with path "**/run/systemd/resolve/resolv.conf**" and "**/run/systemd/resolve/stub-resolv.conf**" commenting in both the line beginning with "**search**".

## TAPLE-Tools not found
The TAPLE-Tools are not found when you try to use them.

```bash
    taple-keygen: command not found
```
or

```bash
    taple-sign: command not found
```

The first thing you need to check is that you have installed the [TAPLE-Tools](taple-tools.md#installation). If the problem persists, you may not have the tools in the PATH. Possible solutions:
1. Add the ``taple-keygen`` and ``taple-sign`` tools to the PATH. Refer to your operating system documentation.
2. Go to the directory of the scripts to run them. Example:

    ```bash
        cd taple-tools/scripts
        ./taple-keygen
    ```

## Permissions issues with docker
The following case has been detected on Linux operating systems when you run any docker command:

```bash
    Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/images/create?fromImage=opencanarias%2Ftaple-client&tag=latest": dial unix /var/run/docker.sock: connect: permission denied
```
The most frequent reason is not having sufficient permissions to run docker. Possible solutions:

1. Execute the docker commands with **sudo**.
2. Configure Docker to run as a non-root user. Refer to the [Docker documentation](https://docs.docker.com/engine/install/linux-postinstall/)

## Network issues with docker
While following [QuickStart tutorial](quickstart) some users reports having issues when trying to access localhost on their network. This issue happens when you try to run docker containers using **Docker Desktop** for Mac, for Windows or **Docker EE** for Windows server. This issue happens because scripts used in tutorial use the flag `--network=host` and this flag is not supported outside of Linux System according to [official documentation](https://docs.docker.com/network/host/):
```
The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.
```
As today date, we are only giving support to execute TAPLE on Linux Operative Systems so we can't give support to issues happening in  Operative Systems not supported. Yet, we can give you some help by following some workarounds listed in the [official issue](https://github.com/docker/roadmap/issues/238).