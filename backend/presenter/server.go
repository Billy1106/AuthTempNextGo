package presenter

import (
	"context"
	"time"

	"github.com/Billy1106/FindSeat/controller/system"
	"github.com/Billy1106/FindSeat/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

const latest = "/v1"

type Server struct{}

func (s *Server) Run(ctx context.Context) error {
	r := gin.Default()

	// Initialize CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Authorization",
			"Content-Type",
			"Accept-Encoding",
		},
		AllowCredentials: true,
		MaxAge:           24 * time.Hour,
	}))

	middleware.InitFirebase(ctx)
	v1 := r.Group(latest)
	v1.Use(middleware.AuthMiddleware())
	{
		systemHandler := system.NewSystemHandler()
		v1.GET("/test", systemHandler.Health)
	}

	// Start the server
	if err := r.Run(); err != nil {
		return err
	}

	return nil
}

func NewServer() *Server {
	return &Server{}
}
