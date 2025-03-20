import requests
import random


# Random Anime Fetcher (Used for Homepage Scrolling)
BASE_URL = 'https://api.jikan.moe/v4/anime'

def fetch_random_anime_page(page=1, limit=20):
    """
    Fetches a paginated list of anime for the homepage scrolling feature.
    """
    response = requests.get(f"{BASE_URL}?page={page}&limit={limit}")
    return response.json() if response.status_code == 200 else None

def display_anime_on_page(page=1, limit=20):
    """
    Formats the fetched anime data for the frontend.
    Includes title, image, synopsis, and score.
    """
    data = fetch_random_anime_page(page, limit)
    if data and 'data' in data:
        anime_list = data["data"][:]
        random.shuffle(anime_list)
        return [
            {
                "id": anime["mal_id"],
                "title": anime["title"],
                "image_url": anime["images"]["jpg"]["image_url"],  # Gets the main anime image
                "synopsis": anime.get("synopsis", "No synopsis available."),  # Returns synopsis if available
                "score": anime.get("score", "N/A"),
                "type": anime.get("type")
            } for anime in anime_list
        ]
    return []