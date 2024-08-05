from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import auth, users
from app.core.database import Base, engine

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# 在 models 中定义的模型都继承于 Base，这些模型的数据都会写入 metadata 中
# 以下代码会在数据库中创建模型对应的表，如果表已经存在则不会创建
Base.metadata.create_all(bind=engine)

# 添加路由
app.include_router(auth.router)
app.include_router(users.router)