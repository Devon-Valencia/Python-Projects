from prompt_toolkit import print_formatted_text, HTML
from prompt_toolkit import PromptSession
from prompt_toolkit.shortcuts import input_dialog
from prompt_toolkit.shortcuts import radiolist_dialog
from prompt_toolkit.shortcuts import message_dialog
from prompt_toolkit.styles import Style
from prompt_toolkit.shortcuts import button_dialog
from anime_list import animes
from anime_list import animes_df
import pandas as pf

## Making A UI 
result = button_dialog(
    title='Welcome to Anime Recommendations!',
    text='View Filters?',
    buttons=[
        ('Yes', True),
        ('No', False),
        ],
                style=Style.from_dict({
            'dialog': 'bg:#7c8e8e',
            'dialog shadow': 'bg:#3d4646',
            'radio-checked': '#000000',
            'dialog.body': '#4c76dc',
            'dialog.shadow': 'bg:#98828f',
            'frame.label': '#000000',
            'dialog.body label': '#000000',
            'button': '#7c8e8e',
            'button.arrow': '#4c76dc',
        })
    ).run()

if result is False:
    message_dialog(
        title='Quit',
        text='Press ENTER to quit.',
        style=Style.from_dict({
            'dialog': 'bg:#7c8e8e',
            'dialog shadow': 'bg:#3d4646',
            'radio-checked': '#000000',
            'dialog.body': '#4c76dc',
            'dialog.shadow': 'bg:#98828f',
            'frame.label': '#000000',
            'dialog.body label': '#000000',
            'button': '#7c8e8e',
            'button.arrow': '#4c76dc',
        })
    ).run()
 

if result is True:
    anime_filter = radiolist_dialog(
        title="Anime Filters",
        text="What filters would you like to use?",
        values=[
            ("name", "Name"),
            ("genre", "Genre"),
            ("length", "Length"),
            ("Type", "Type"), 
        ],
        style=Style.from_dict({
            'dialog': 'bg:#7c8e8e',
            'dialog shadow': 'bg:#3d4646',
            'radio-checked': '#000000',
            'dialog.body': '#4c76dc',
            'dialog.shadow': 'bg:#98828f',
            'frame.label': '#000000',
            'dialog.body label': '#000000',
            'button': '#7c8e8e',
            'button.arrow': '#4c76dc',
        })
    ).run()
else:
        message_dialog(
            title='Quit',
            text='Press ENTER to quit.').run()

if anime_filter == 'name':
    anime_checklist = input_dialog(
        title='Filtering Name',
        text='Please type the name',
        style=Style.from_dict({
            'dialog': 'bg:#7c8e8e',
            'dialog shadow': 'bg:#3d4646',
            'dialog.body': '#4c76dc',
            'dialog.shadow': 'bg:#98828f',
            'frame.label': '#000000',
            'dialog.body label': '#000000',
            'button': '#7c8e8e',
            'button.arrow': '#4c76dc',
        })
    ).run()
  
    ### Debugging, Checks if user inputed something.
    # if anime_filter == anime_filter.strip():
    #     print(f"Checking for: {anime_filter}")

    ### Prints available anime names
    # print("Available Anime Names:", animes_df['Anime Name'].tolist())

    if anime_checklist in animes_df['Anime Name'].values:
        result_df = animes_df[animes_df['Anime Name'] == anime_checklist]
        print(result_df)

    else:
        result = button_dialog(
        title='No results found :C ',
        text='Choose one of the following.',
        buttons=[
            ('Exit', True),
            ('Return', None),
            ],
            style=Style.from_dict({
                'dialog': 'bg:#7c8e8e',
                'dialog shadow': 'bg:#3d4646',
                'dialog.body': '#4c76dc',
                'dialog.shadow': 'bg:#98828f',
                'frame.label': '#000000',
                'dialog.body label': '#000000',
                'button': '#7c8e8e',
                'button.arrow': '#4c76dc',
        })  
        ).run()
        if result == True:
            print('Goodbye!')

elif anime_filter == 'genre':
    genre_filter = radiolist_dialog(
        title='Genre Filter',
        text='Pick your genre',
            values=[
            ('action', 'Action'),
            ('romance', 'Romance'),
            ],
            style=Style.from_dict({
                'dialog': 'bg:#7c8e8e',
                'dialog shadow': 'bg:#3d4646',
                'radio-checked': '#000000',
                'dialog.body': '#4c76dc',
                'dialog.shadow': 'bg:#98828f',
                'frame.label': '#000000',
                'dialog.body label': '#000000',
                'button': '#7c8e8e',
                'button.arrow': '#4c76dc',
        })
        ).run()
    if genre_filter == 'action':
        result_df = animes_df[animes_df['Category'] == genre_filter]
        print(result_df)
    elif genre_filter == 'romance':
        result_df = animes_df[animes_df['Category'] == genre_filter]
        print(result_df) 


elif anime_filter == 'length':
    length_filter = radiolist_dialog(
        title='Length Filter',
        text='Filter by Length',
        values=[
            ('long', 'Long'),
            ('medium', 'Medium'),
            ('short', 'Short'),
        ],
            style=Style.from_dict({
                'dialog': 'bg:#7c8e8e',
                'dialog shadow': 'bg:#3d4646',
                'radio-checked': '#000000',
                'dialog.body': '#4c76dc',
                'dialog.shadow': 'bg:#98828f',
                'frame.label': '#000000',
                'dialog.body label': '#000000',
                'button': '#7c8e8e',
                'button.arrow': '#4c76dc',
        })
    ).run()
    if length_filter == 'long':
        result_df = animes_df[animes_df['Length'] == length_filter]
        print(result_df)
    elif length_filter == 'medium':
        result_df = animes_df[animes_df['Length'] == length_filter]
        print(result_df)
    elif length_filter == 'short':
        result_df = animes_df[animes_df['Length'] == length_filter]
        print(result_df)


elif anime_filter == 'Type':
    type_filter = radiolist_dialog(
        title='Type Filter',
        text='Filter by Type',
        values=[
            ('series', 'Series'),
            ('movie', 'Movie'),
        ],
            style=Style.from_dict({
                'dialog': 'bg:#7c8e8e',
                'dialog shadow': 'bg:#3d4646',
                'radio-checked': '#000000',
                'dialog.body': '#4c76dc',
                'dialog.shadow': 'bg:#98828f',
                'frame.label': '#000000',
                'dialog.body label': '#000000',
                'button': '#7c8e8e',
                'button.arrow': '#4c76dc',
        })
    ).run() 
    if type_filter == 'series':
        result_df = animes_df[animes_df['Type'] == type_filter]
        print(result_df)
    elif type_filter == 'movie':
        result_df = animes_df[animes_df['Type'] == type_filter]
        print(result_df)