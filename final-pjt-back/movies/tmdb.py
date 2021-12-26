import requests
from pprint import pprint
import json


class TMDBHelper:

    base_url = 'https://api.themoviedb.org/3'

    def __init__(self, api_key=None):
        self.api_key = api_key


    def get_request_url(self, method='/movie/popular', **kwargs):

        request_url = self.base_url + method
        request_url += f'?api_key={self.api_key}'

        for k, v in kwargs.items():
            request_url += f'&{k}={v}'

        return request_url
    

    def get_movie_id(self, title):

        request_url = self.get_request_url('/search/movie', query=title, region='KR', language='ko')
        data = requests.get(request_url).json()
        results = data.get('results')
        if results:
            movie = results[0]
            movie_id = movie['id']
            return movie_id
        else:
            return None


    def get_genre_url(self):
        
        genre_url = f'{self.base_url}/genre/movie/list?api_key={self.api_key}&language=ko-KR'
        return genre_url


    def get_movie_genre_name(self, genre_id):
        request_url = self.get_request_url('/genre/movie/list', language='ko')
        data = requests.get(request_url).json()

        results = data.get('genres')
        if results:
            for item in results:
                if item['id'] == genre_id:
                    return item['name']
        else:
            return None


tmdb_helper = TMDBHelper('4fdf2ade53f83421d9e8004a6d676138')
# 영화가 1페이지부터 6페이지까지 있음 - 총 101개

def dump_genre_data():
    genre_url = tmdb_helper.get_genre_url()
    data = requests.get(genre_url).json()
    genres = data.get('genres')

    genre_data = []

    for genre in genres:
        temp = {
            'model': 'movies.genre',
            'pk': genre.get('id'),
            'fields': {
                'name': genre.get('name')
            }
        }
        genre_data.append(temp)

    with open('tmdb.json', 'w', encoding='UTF-8') as f:
        json.dump(genre_data, f, indent=4, ensure_ascii=False)

def dump_movie_data():
    with open('tmdb.json', 'r+', encoding='UTF-8') as f:
        movie_data = json.load(f)

    for k in range(1, 26):
        url = tmdb_helper.get_request_url(region = 'KR', language = 'ko', page=k)
        data = requests.get(url).json()
        now_movies = data.get('results')

        for movie in now_movies:
            if movie.get('release_date') == "" or movie.get('poster_path') == "" or movie.get('overview') == "":
                continue

            movie.pop('backdrop_path')
            movie.pop('video')
            movie.pop('adult')
            movie.pop('original_language')
            movie.pop('original_title')
        
            movie['like_users'] = []
            # movie['genres'] = [tmdb_helper.get_movie_genre_name(x) for x in movie.get('genre_ids')]
            # movie.pop('genre_ids')
            
            temp = {
                'model': 'movies.movie',
                'pk': movie.pop('id'),
                'fields': movie,
            }
            movie_data.append(temp)

    with open('tmdb.json', 'w', encoding='UTF-8') as f:
        json.dump(movie_data, f, indent=4, ensure_ascii=False)

dump_genre_data()
dump_movie_data()

    