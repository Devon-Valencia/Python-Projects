import pandas as pd

animes = [['Naruto', 'action', 'long', 'series'],
          ['Bleach', 'action', 'long', 'series'],
          ['One Piece', 'action', 'long', 'series'], 
          ['Nlack Clover', 'action', 'long', 'series'],
          ['Hunter X Hunter', 'action', 'long', 'series'],
          ['attack On Titan', 'action', 'long', 'series'],
          ['Full Metal Alchemist', 'action', 'long', 'series'],
          ['Dolo Leveling', 'action', 'medium', 'series'],
          ['Demon Slayer', 'action', 'medium', 'series'],
          ['Jujustu Kaisen', 'action', 'medium', 'series'],
          ['Mob Psycho 100', 'action', 'medium', 'series'],
          ['That Time I Reincarnated Into a Slime', 'action', 'medium', 'series'],
          ['One Punch Man', 'action', 'medium', 'series'],
          ['Vinland Saga', 'action', 'medium', 'series'],
          ['Darling in The Franxx', 'romance', 'medium', 'series'],
          ['Bunny Girl Senpai', 'romance', 'medium', 'series'],
          ['Plastic Memories', 'romance', 'medium', 'series'],
          ['Horimiya', 'romance', 'medium', 'series'],
          ['Your Name', 'romance', 'short', 'movie'],
          ['I Want To Eat Your Pancreas', 'romance', 'short', 'movie'],
          ['A Silent Voice', 'romance', 'short', 'movie'],
          ['5 Centimeters Per Second', 'romance', 'short', 'movie']]

animes_df = pd.DataFrame(animes, columns = ['Anime Name', 'Category', 'Length', 'Type'])
