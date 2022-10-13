migrate:
	docker-compose run prode npm run db:migrate

# Config
envs:
	docker-compose run prode env

envs-db:
	docker-compose run db env

app-shell:
	docker-compose run prode sh

db-shell:
	docker-compose run db bash

# Images & Containers
build:
	docker-compose build

run:
	docker-compose up

run-db:
	docker-compose up db adminer

lint:
	docker-compose run prode npm run lint

watch-logs:
	docker-compose logs

stop:
	docker-compose stop

down:
	docker-compose down -v --remove-orphans 

remove:
	docker-compose rm --force --stop -v 

clean: stop down remove

init: clean build run

init-db: clean build run-db
