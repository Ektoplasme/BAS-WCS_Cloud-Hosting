stop:
	docker stop $(shell docker ps -a -q)

clean:
	docker system prune -af

dev:
	docker compose -f docker-compose.dev.yml up --build -d