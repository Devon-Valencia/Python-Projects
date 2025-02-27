import requests
import sys

base_url = 'https://api.jikan.moe/v4'



def get_type_results(anime_type, page=1):
    url = f"{base_url}/anime?type{anime_type}"
    params = {'q': anime_type, 'type': ['movie', 'tv'], 'page': page}
    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        return data  
    else:
        print(f"Error fetching data: HTTP {response.status_code}")
        return None


def display_anime_type(data, page):
    if data and 'data' in data:
        type_list = data['data']
        print(f"\nPage {page}: Found {len(type_list)} anime results:\n")
        for anime in type_list:
            print(f"Title: {anime.get('title', 'Unknown')}")
            print(f"   Type: {anime.get('type', 'N/A')}")
            print(f"   Score: {anime.get('score', 'N/A')}")
            print(f"   Genres: {', '.join([genre['name'] for genre in anime.get('genres', [])])}")
            print(f"   Link: {anime.get('url', 'No URL available')}")
            print("-" * 50)


        if data.get('pagination', {}).get('has_next_page', False):
            user_input = input("1. Next, 2. Previous, 3. Quit\n").strip().lower()
            if user_input == '1':
                return page + 1
            elif user_input == '2' and page > 1:
                return page - 1
            elif user_input == '3':
                question_input = input('Are you sure?\n')
                if question_input == 'yes':
                    sys.exit()
                elif question_input == 'no':
                    from utils import common
                    common.return_home()
            else:
                userinput = input('1. Try again\n2. Quit\n')
                if userinput == '1':
                    from utils import common
                    common.return_home()
                elif user_input == '2':
                    sys.exit()
            


def fetch_by_type(anime_type):
    page = 1
    while True:
        data = get_type_results(anime_type, page)
        if data:
            next_page = display_anime_type(data, page)
            if next_page:
                page = next_page
            else:
                break
        else:
            print("No results found.")
            break

