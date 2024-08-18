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

func FB_SECRET_CREDENTIAL() string {
	v, ok := os.LookupEnv("FB_SECRET_CREDENTIAL")
	if !ok {
		panic("FB_SECRET_CREDENTIAL is not set")
	}
	return v
}
