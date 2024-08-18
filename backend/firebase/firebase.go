package firebase

import (
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"github.com/Billy1106/FindSeat/config"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

type firebaseInterface interface {
	VerifyIDToken(ctx *gin.Context, idToken string) (*auth.Token, error)
}

type FirebaseApp struct {
	*firebase.App
}

func (f *FirebaseApp) VerifyIDToken(ctx *gin.Context, idToken string) (*auth.Token, error) {
	client, err := f.Auth(ctx)
	if err != nil {
		return nil, err
	}
	token, err := client.VerifyIDToken(ctx, idToken)
	if err != nil {
		return nil, err
	}
	return token, nil
}

func NewFirebaseApp(ctx *gin.Context) (*FirebaseApp, error) {
	opt := option.WithCredentialsJSON([]byte(config.FB_SECRET_CREDENTIAL()))
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		return nil, err
	}
	return &FirebaseApp{app}, nil
}
