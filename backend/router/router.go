package router

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi"

	test "github.com/Billy1106/FindSeat/server/handlers/v1"
)

type Router struct {
	chi.Router
}

func NewRouter() *Router {
	r := chi.NewRouter()
	return &Router{r}
}

func (r *Router) Route() {
	// some code
	r.Get("/test", test.TestHandler)
}

func (r *Router) Run(port string) {
	// some code
	log.Printf("Server running on port %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), r))
}
