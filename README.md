# codenames

Play codenames on a tabletop. Utilizes [Vite](https://vitejs.dev/), docker-compose, [python flask](https://flask.palletsprojects.com/en/2.2.x/) with [pipenv](https://pipenv.pypa.io/en/latest/install/), [nginx](https://www.nginx.com/), and [mongodb](https://www.mongodb.com/)

## Setup

1. ## Setup .env
   ```
   cp .env.template .env
   ```
2. ## Settings
   - GAME_MODE
     Change the `GAME_MODE` between "custom" and "random". For randomly generated images from the internet, choose "random". For local images choose "custom".
   - IMAGE_DIR
     Specify where to pull the local custom images from.

## Running the app in docker

1. ## Create the docker image
   ```
   npm run docker:build
   ```
2. ## Start the apps
   ```
   npm run docker:compose
   ```
3. ## Start the database
   ```
   docker compose up mongodb
   ```
4. ## Shutdown
   ```
   npm run docker:clean
   ```

## Tools required for development

1. ## [nvm](https://github.com/nvm-sh/nvm#install--update-script)
   ```
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   source ~/.bashrc
   ```
1. ## npm and node v16
   ```
   nvm install 16
   npm install
   ```
1. ## vite
   ```
   npm i vite
   ```
1. ## [docker](https://docs.docker.com/engine/install/ubuntu/)
1. ## docker-compose
   ```
   sudo apt install docker-compose-plugin
   ```
1. ## python3 v3.11
   ```
   sudo apt update
   sudo apt install software-properties-common
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt update
   sudo apt install python3.11
   sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1
   ```
1. ## [pip](https://pip.pypa.io/en/stable/installation/)
   ```
   python3.11 get-pip.py
   python3.11 -m pip install --upgrade --force-reinstall pip
   ```
1. ## pipenv
   ```
   pip3.11 install --user pipenv
   ```
1. ## flask
   ```
   pip3.11 install requests
   pip3.11 install Flask
   ```
1. ## nginx
   managed through docker
1. ## mongodb
   managed through docker
   ```
   pip3.11 install pymongo
   ```

## Run locally

### Run client

```
npm run dev
```

### Run server

```
cp .env.template .env
```

```
pipenv install
pipenv shell
```

```
flask run
```
