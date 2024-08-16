package main

import (
	"context"

	"github.com/Billy1106/FindSeat/presenter"
)

func main() {
	ctx := context.Background()
	server := presenter.NewServer()
	if err := server.Run(ctx); err != nil {
		panic(err)
	}
}
