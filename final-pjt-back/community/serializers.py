from rest_framework import serializers

from movies.models import Movie
from .models import Review, Comment
from django.contrib.auth import get_user_model


class MovieTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)


class ReviewListSerializer(serializers.ModelSerializer):
    movie = MovieTitleSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Review
        fields = ('id', 'movie', 'title', 'user', 'movie_title', 'content', 'created_at', 'updated_at',)

class CommentListSerializer(serializers.ModelSerializer):
    class ReviewTitleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Review
            fields = ('id', 'title')
    review = ReviewTitleSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('review',)


class ReviewSerializer(serializers.ModelSerializer):

    # class MovieTitleSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Movie
    #         fields = ('id', 'title')
    # movie = MovieTitleSerializer(read_only=True)
    comments = CommentSerializer(
        many = True,
        read_only = True,
    )
    comment_count = serializers.IntegerField(
        source='comments.count',
        read_only=True,
    )

    class Meta:
        model = Review
        fields = ('id','title', 'content', 'movie_title', 'comments', 'comment_count', 'rank', 'created_at', 'updated_at')