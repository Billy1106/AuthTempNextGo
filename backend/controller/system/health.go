package system

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type SystemHandler struct{}

func (s *SystemHandler) Health(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "ok"})
}

func NewSystemHandler() *SystemHandler {
	return &SystemHandler{}
}
