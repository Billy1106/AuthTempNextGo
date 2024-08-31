package system

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type SystemHandler struct{}

// Verify godoc
//
//	@Description	Verify the health of the server
//	@Tags			verify
//	@Success		200	{string}	string	"ok"
//	@Failure		401	{string}	string	"Unauthorized"
//
//	@Security		Bearer
//	@Router			/test [get]
func (s *SystemHandler) Health(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "ok"})
}

func NewSystemHandler() *SystemHandler {
	return &SystemHandler{}
}
