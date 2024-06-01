.PHONY: client-development-build
client-development-build:
	docker compose -f docker-compose-dev.yml build
.PHONY: client-development-up
client-development-up:
	docker compose -f docker-compose-dev.yml up client
.PHONY: client-development-down
client-development-down:
	docker compose -f docker-compose-dev.yml down
	
.PHONY: client-production-build
client-production-build:
	docker compose --env-file ./.env.production -f docker-compose.yml build
.PHONY: client-production-up
client-production-up:
	docker compose --env-file ./.env.production -f docker-compose.yml up client nginx
.PHONY: client-production-down
client-production-down:
	docker compose -f docker-compose.yml down