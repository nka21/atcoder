ARG VARIANT="base:ubuntu"
FROM mcr.microsoft.com/devcontainers/$VARIANT

RUN apt-get update && apt-get install -y \
    nodejs npm \
    python3 python3-pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install n
RUN sudo npm install -g n && \
    sudo n stable

# Uninstall nodejs npm
RUN sudo apt purge -y nodejs npm && \
    sudo apt autoremove -y
    
# Install dependencies
RUN npm install -g atcoder-cli && \
    pip3 install online-judge-tools --break-system-packages

# Copy to ~/.config
COPY .devcontainer/atcoder-cli-nodejs /home/vscode/.config/atcoder-cli-nodejs
RUN sudo chown -R vscode:vscode /home/vscode/.config/atcoder-cli-nodejs