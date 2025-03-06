import requests
import sys

sys.path.append("C:/Users/jland/Documents/dev/PythonProjects/anime-app/backend/api/utils") 
from filter_handler import apply_filters

base_url = 'https://api.jikan.moe/v4'

def fetch_type_data(page=1, limit=20, title=None, genre=None, anime_type=None):
    data = apply_filters(title=title, genre=genre, anime_type=anime_type, page=page)
    return data

def display_type_results(page=1, limit=20, title=None, genre=None, anime_type=None):
    data = fetch_type_data(page, limit, title, genre, anime_type)
    if data:
        return [
            {
                "id": anime["mal_id"],
                "title": anime["title"],
                "type": anime.get("type"),
                "image_url": anime["images"]["jpg"]["image_url"],  # Gets the main anime image
                "synopsis": anime.get("synopsis", "No synopsis available."),  # Returns synopsis if available
                "score": anime.get("score", "N/A"),  # Includes score if available
            }
            for anime in data
        ]
    return []