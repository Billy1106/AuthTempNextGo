package project_repo

import (
	staff_model "github.com/Billy1106/FindSeat/models/staff_model"
	"github.com/gin-gonic/gin"
)

type Repository interface {
	GetAllStaffs(ctx gin.Context) ([]staff_model.Staff, error)
}
