package mongo_test

import (
	"fmt"
	"testing"

	"github.com/Billy1106/FindSeat/repositories/project_repo/mongo"
	"github.com/gin-gonic/gin"
)

func TestPersonName(t *testing.T) {
	ctx := gin.Context{}
	p := mongo.NewProjectRepositoryImpl(ctx)
	result, err := p.GetAllStaffs(ctx)
	if err != nil {
		t.Errorf("Error: %v", err)
	}

	fmt.Println(result)

}
