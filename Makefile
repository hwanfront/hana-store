.PHONY: client-development-build
client-development-build:
	docker compose -f docker/development/docker-compose-dev.yml build
.PHONY: client-development-up
client-development-up:
	docker compose -f docker/development/docker-compose-dev.yml up client
.PHONY: client-development-down
client-development-down:
	docker compose -f docker/development/docker-compose-dev.yml down