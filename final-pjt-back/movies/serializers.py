from rest_framework import serializers

from community.models import Review
from .models import Movie, Genre, Rank


class MovieListSerializer(serializers.ModelSerializer):
    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = ('id', 'name')
    genre_ids = GenreSerializer(many=True)

    # class RankSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Rank
    #         fields = '__all__'
    # rank = RankSerializer(many=True)

    class Meta:
        model = Movie
        fields = ('id','title', 'overview', 'popularity', 'release_date', 'vote_average', 'poster_path', 'genre_ids', 'like_users',)


class MovieSerializer(serializers.ModelSerializer):
    
    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = ('id', 'name')
    genre_ids = GenreSerializer(many=True)    

    class ReviewTitleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Review
            fields = ('id', 'title')
    movie_reviews = ReviewTitleSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'
    