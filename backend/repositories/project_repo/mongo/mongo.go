package mongo

import (
	"context"

	"github.com/Billy1106/FindSeat/config"
	"github.com/Billy1106/FindSeat/models/staff_model"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type ProjectRepositoryImpl struct {
	cli *mongo.Client
}

func NewProjectRepositoryImpl(ctx gin.Context) *ProjectRepositoryImpl {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(config.MONGO_HOST()).SetAuth(options.Credential{
		Username: config.MONGO_USER(),
		Password: config.MONGO_PASSWORD(),
	}))
	if err != nil {
		panic(err)
	}
	return &ProjectRepositoryImpl{cli: client}
}

func (r *ProjectRepositoryImpl) GetAllStaffs(ctx gin.Context) ([]staff_model.Staff, error) {
	collection := r.cli.Database(config.MONGO_DB()).Collection("staffs")
	cursor, err := collection.Find(&ctx, bson.M{}) // No filter
	if err != nil {
		return nil, err
	}
	staffs := make([]staff_model.Staff, 0)
	if err := cursor.All(&ctx, &staffs); err != nil {
		return nil, err
	}
	return staffs, nil
}
