from django.urls import path
from . import views

app_name ='community'

urlpatterns = [
    # 리뷰 관련
    path('reviews/', views.review_list_create),
    path('movie/<int:movie_pk>/review/', views.review_create),
    path('reviews/<int:review_pk>/', views.review_detail_update_delete),

    # 리뷰의 댓글 관련
    path('comments/', views.comment_list_create),
    path('review/<int:review_pk>/comment/', views.comment_create),
    path('comments/<int:comment_pk>/', views.comment_detail_update_delete),
]
