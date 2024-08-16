package presenter

import (
	"context"

	"github.com/Billy1106/FindSeat/controller/system"
	"github.com/gin-gonic/gin"
)

const latest = "/v1"

type Server struct{}

func (s *Server) Run(ctx context.Context) error {
	r := gin.Default()
	v1 := r.Group(latest)

	{
		systemHandler := system.NewSystemHandler()
		v1.GET("/test", systemHandler.Health)
	}

	err := r.Run()
	if err != nil {
		return err
	}

	return nil

}

func NewServer() *Server {
	return &Server{}
}
