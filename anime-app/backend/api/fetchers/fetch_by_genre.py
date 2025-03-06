import sys
import requests
sys.path.append("C:/Users/jland/Documents/dev/PythonProjects/anime-app/backend/api/utils") 
from filter_handler import apply_filters

base_url = 'https://api.jikan.moe/v4'

def get_genre_id(anime_genre):
    url = f"{base_url}/genres/anime"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if 'data' in data:
            for genre in data['data']:
                if genre.get('name', '').lower() == anime_genre.lower():
                    print(f"Genre '{anime_genre}' found with ID: {genre.get('mal_id')}")
                    return genre.get('mal_id')  
        print(f"Genre '{anime_genre}' not found.")
        return None  
    else:
        print(f"Error fetching genres: HTTP {response.status_code}")
        return None  
    
def fetch_genre_data(page=1, limit=20, title=None, genre=None, anime_type=None):
    if genre:  
        genre_id = get_genre_id(genre)
        if genre_id:
            genre = genre_id  
        else:
            print(f"Genre '{genre}' not found.")
            return []  

    return apply_filters(title=title, genre=genre, anime_type=anime_type, page=page)

def display_genre_results(page=1, limit=20, title=None, genre="romance", anime_type=None):
    data = fetch_genre_data(page, limit, title, genre, anime_type)
    sort_data = sorted(data, key=lambda)
    if data:
        return [
            {
                "id": anime["mal_id"],
                "title": anime["title"],
                "type": anime.get("type"),
                "image_url": anime["images"]["jpg"]["image_url"],  # Gets the main anime image
                "synopsis": anime.get("synopsis", "No synopsis available."),  # Returns synopsis if available
                "score": anime.get("score", "N/A"),  # Includes score if available
                "genres": anime.get("genres", [{}])[0].get("name", "N/A")
            }
            for anime in data
        ]
    return []