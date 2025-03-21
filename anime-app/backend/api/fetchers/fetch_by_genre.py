import requests
from utils.filter_handler import apply_filters

base_url = 'https://api.jikan.moe/v4/anime'

def display_genre_results(page=1, limit=20, title=None, genre=None, anime_type=None):
    if not genre:
        return [] 
    
    data = apply_filters(title=title, genre=genre, anime_type=anime_type, page=page)
    return data  
    
