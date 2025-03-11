import requests
import sys
sys.path.append("C:/Users/jland/Documents/dev/PythonProjects/anime-app/backend/api/utils") 
from filter_handler import apply_filters

base_url = 'https://api.jikan.moe/v4'


def fetch_name_data(page=1, limit=20, title=None, genre=None, anime_type=None):
    data = apply_filters(title=title, genre=genre, anime_type=anime_type, page=page)
    return data

def display_name_results(query, page=1, limit=20):
    JIKAN_API_URL = f"https://api.jikan.moe/v4/anime"
    
    response = requests.get(f"{JIKAN_API_URL}?q={query}&page={page}&limit={limit}")
    return response.json().get("data", [])  # Get the filtered results