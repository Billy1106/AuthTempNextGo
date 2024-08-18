package middleware

import (
	"context"
	"log"
	"strings"

	firebase "firebase.google.com/go/v4"
	"github.com/Billy1106/FindSeat/config"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

var firebaseApp *firebase.App

func InitFirebase(ctx context.Context) error {
	opt := option.WithCredentialsJSON([]byte(config.FB_SECRET_CREDENTIAL()))
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		return err
	}
	firebaseApp = app
	return nil
}

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		header := c.GetHeader("Authorization")
		if header == "" {
			c.JSON(401, gin.H{"error": "Authorization header is required"})
			c.Abort()
		}
		token := strings.Split(header, "Bearer ")[1]
		if token == "" {
			c.JSON(401, gin.H{"error": "Token is required"})
			c.Abort()
		}

		firebaseClient, err := firebaseApp.Auth(c)
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			c.Abort()
		}

		log.Print(token)

		_, err = firebaseClient.VerifyIDToken(c, token)
		if err != nil {
			c.JSON(401, gin.H{"error": "Invalid token " + err.Error()})
			c.Abort()
		}

		log.Print(token)
		c.Next()
	}
}
