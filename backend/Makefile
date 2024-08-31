SERVICE_NAME=backend
EXEC=docker-compose exec $(SERVICE_NAME)

test:
	$(EXEC) go vet ./... && $(EXEC) go test ./... -v
clean_testcache:
	$(EXEC) go clean -testcache
fmt:
	go fmt ./...

gen_ts:
	npx openapi-typescript docs/openapi3.yaml --output ../frontend/src/common/open-api-schema/schema.gen.ts

openapi_2_to_3:
	docker run --rm -v $(PWD)/docs:/docs openapitools/openapi-generator-cli:v5.2.0 generate -i /docs/swagger.yaml -g openapi -o /docs/openapi3 && \
	mv docs/openapi3/openapi.json docs/openapi3.yaml && \
	rm -rf docs/openapi3

swagger:
	export PATH="$(HOME)/go/bin:$$PATH" && swag init --parseDependency --requiredByDefault && swag fmt && make openapi_2_to_3 &&  make gen_ts
