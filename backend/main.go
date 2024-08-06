package main

import (
	"fmt"

	"github.com/Billy1106/FindSeat/config"
)

func main() {
	fmt.Println("Hello, World!", config.LoadConfig())
}
