package config

import (
	"fmt"
	"os"
)

func LoadConfig() string {
	fmt.Println("Loading config...")
	v, ok := os.LookupEnv("TEST")
	if !ok {
		panic("TEST is not set")
	}
	return v
}
