package system

import "github.com/gin-gonic/gin"

type SystemHandler struct{}

func (s *SystemHandler) Health(ctx *gin.Context) {
	ctx.JSON(200, gin.H{"message": "ok"})
}

func NewSystemHandler() *SystemHandler {
	return &SystemHandler{}
}
