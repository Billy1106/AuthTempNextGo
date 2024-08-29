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

func MONGO_HOST() string {
	v, ok := os.LookupEnv("MONGO_HOST")
	if !ok {
		panic("MONGO_HOST is not set")
	}
	return v
}

func MONGO_USER() string {
	v, ok := os.LookupEnv("MONGO_USER")
	if !ok {
		panic("MONGO_USER is not set")
	}
	return v
}

func MONGO_PASSWORD() string {
	v, ok := os.LookupEnv("MONGO_PASSWORD")
	if !ok {
		panic("MONGO_PASSWORD is not set")
	}
	return v
}

func MONGO_DB() string {
	v, ok := os.LookupEnv("MONGO_DB")
	if !ok {
		panic("MONGO_DB is not set")
	}
	return v
}
