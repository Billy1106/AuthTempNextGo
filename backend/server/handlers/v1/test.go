package test

import (
	"fmt"
	"net/http"
)

func TestHandler(w http.ResponseWriter, req *http.Request) {
	// some code
	fmt.Println("Test handler")
	return
}
