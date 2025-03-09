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
    if isinstance(genre, list) and genre:  
        genre = genre[0]  # Take the first genre if it's a list
    
    data = fetch_genre_data(page, limit, title, genre, anime_type)
    
    if data:
        # Sort genres in each anime so that the search genre appears first
        for anime in data:
            genres = anime.get("genres", [])
            sorted_genres = sorted(genres, key=lambda g: 0 if g.get("name", "").lower() == genre.lower() else 1)
            anime["genres"] = [g["name"] for g in sorted_genres]  

        return [
            {
                "id": anime["mal_id"],
                "title": anime["title"],
                "type": anime.get("type"),
                "image_url": anime["images"]["jpg"]["image_url"],  
                "synopsis": anime.get("synopsis", "No synopsis available."),  
                "score": anime.get("score", "N/A"),  
                "genres": anime["genres"] 
            }
            for anime in data
        ]
    
    return []