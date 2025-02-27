import requests
import sys

base_url = 'https://api.jikan.moe/v4'

def get_genre_id(anime_genre):
    url = f"{base_url}/genres/anime"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        if 'data' in data:
            for genre in data['data']:
                if genre.get('name' , '').lower() == anime_genre.lower():
                    return genre.get('mal_id')
        else:
            print("Error 'data' key was not found in response. Full response", data)
            return []
    else:
        print(f"Error fetching data: HTTP {response.status_code}")


def get_anime_by_genre(genre_id):
    if genre_id is None:
        return []

    url = f"{base_url}/anime?genres={genre_id}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data.get('data', [])  
    else:
        print(f"Error fetching anime: HTTP {response.status_code}")
        return []

def display_genre_results(anime_list):
    if anime_list:
        print(f"\nFound {len(anime_list)} anime in this genre:\n")
        for anime in anime_list[:25]: 
            print(f"Title: {anime.get('title', 'Unknown')}")
            print(f"   Type: {anime.get('type', 'N/A')}")
            print(f"   Score: {anime.get('score', 'N/A')}")
            print(f"   Genres: {', '.join([genre['name'] for genre in anime.get('genres', [])])}")
            print(f"   Link: {anime.get('url', 'No URL available')}")
            print("-" * 50)
    else:
        userinput = input('1. Try again\n2. Quit\n')
        if userinput == '1':
           from utils import common
           common.return_home()
        else:
            userinput = input('1. Try again\n2. Quit\n')
        if userinput == '1':
           from utils import common
           common.return_home()
        else:
            sys.exit()


def fetch_genre(anime_genre):
    genre_id = get_genre_id(anime_genre)
    anime_list = get_anime_by_genre(genre_id)
    display_genre_results(anime_list) 

