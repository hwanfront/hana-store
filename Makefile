.PHONY: client-production-build
client-production-build:
	docker compose --env-file ./.env.production -f docker-compose.yml build client

.PHONY: client-production-pull
client-production-pull:
	docker compose --env-file ./.env.production -f docker-compose.yml pull client

.PHONY: client-production-up
client-production-up:
	docker compose --env-file ./.env.production -f docker-compose.yml up client nginx -d

.PHONY: client-production-down
client-production-down:
	docker compose -f docker-compose.yml down


.PHONY: nginx-up
nginx-up:
	docker compose --env-file ./.env.production -f docker-compose.yml up nginx -d
.PHONY: nginx-down
nginx-down:
	docker compose -f docker-compose.yml down nginx


.PHONY: certbot-run
certbot-run:
	docker compose --env-file ./.env.production -f docker-compose.yml run certbot