from django.shortcuts import get_list_or_404, get_object_or_404
from django.views.decorators.http import require_POST
from .models import Movie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieListSerializer, MovieSerializer
from django.http.response import HttpResponse, JsonResponse
import datetime


@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        # Movie에 영화 정보 DB 저장되어 있다고 가정하면 아래와 같음
        # movies = Movie.objects.all()
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def recommend_nowtime(request):
    if request.method == 'GET':
        now = datetime.datetime.now()
        date_string = now.strftime('%Y-%m-%d')
        month = date_string[5:7]
        movies = Movie.objects.filter(release_date__contains='-' + month + '-').order_by('-vote_average')[:30]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)
 

@api_view(['GET'])
def recommend_top_rated(request):
    if request.method == 'GET':
        movies = Movie.objects.order_by('-vote_average')[:30]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def recommend_popular(request):
    if request.method == 'GET':
        movies = Movie.objects.order_by('-popularity')[:30]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def recommend_recent(request):
    if request.method == 'GET':
        movies = Movie.objects.order_by('-release_date')[:30]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def recommend_fall(request, genre_pk):
    if request.method == 'GET':
        movies = Movie.objects.filter(genre_ids__name__icontains=genre_pk)[:20]
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    if request.method == 'GET':
        movie = get_object_or_404(Movie, pk=movie_pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


@require_POST
def likes(request, pk):
    if request.user.is_authenticated:
        movie = get_object_or_404(Movie, pk=pk)

        if movie.like_users.filter(pk=request.user.pk).exists():
            movie.like_users.remove(request.user)
            liked = False
        else:
            movie.like_users.add(request.user)
            liked = True
        like_status = {
            'liked': liked,
            'count': movie.like_users.count(),
        }
        return JsonResponse(like_status)
    return HttpResponse(status=401)

