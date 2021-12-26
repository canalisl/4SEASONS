from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('summer-movie-list/', views.movie_list),
    path('summer-recommend/nowtime/', views.recommend_nowtime),
    path('summer-recommend/top-rated/', views.recommend_top_rated),
    path('summer-recommend/popular/', views.recommend_popular),
    path('summer-recommend/recent/', views.recommend_recent),
    path('fall-recommend/<genre_pk>/', views.recommend_fall),
    # path('fall-recommend/', views.recommend),
    path('movie/<int:movie_pk>/', views.movie_detail),
    path('<int:pk>/likes/', views.likes),
]