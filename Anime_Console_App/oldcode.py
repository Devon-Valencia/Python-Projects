# from prompt_toolkit import print_formatted_text, HTML
# from prompt_toolkit import PromptSession
# from prompt_toolkit.shortcuts import input_dialog
# from prompt_toolkit.shortcuts import radiolist_dialog
# from prompt_toolkit.shortcuts import message_dialog
# from prompt_toolkit.styles import Style
# from prompt_toolkit.shortcuts import button_dialog
# from anime_list import animes
# from anime_list import animes_df
# import pandas as pf

# ### First Attempt

# # session = PromptSession
# # def main():
# #     try:
# #         print('What filter do you want to use today?')
# #         question1 = session.prompt('''1. Filter by catagory\n2. Filter by Anime length\n3. Filter by type\n\n''')
# #         if question1 == '1':
# #             print('What catagory do you want to filter by: ')
# #             quest1 = session.prompt('1. Action\n2. Romance\n\n')
# #             if quest1 == '1':
# #                 print(animes_df[0:14])
# #             elif quest1 == '2':
# #                 print(animes_df[14:22])
# #             else:
# #                 print_formatted_text(HTML("\n<ansired>Enter a vaild input!</ansired>"))
# #         if question1 == '2':
# #             print('What length do you want to filter by: ')
# #             quest2 = session.prompt('1. Short\n2. Medium\n3. Long\n\n')
# #             if quest2 == '1':
# #                 print(animes_df[18:22])
# #             elif quest2 == '2':
# #                 print(animes_df[7:18])
# #             elif quest2 == '3':
# #                 print(animes_df[0:7])
# #             else:
# #                print_formatted_text(HTML("\n<ansired>Enter a vaild input!</ansired>"))
# #         if question1 == '3':
# #             print("What type do you want to filter by?")
# #             quest3 = session.prompt('1. Series\n2. Movie\n\n')
# #             if quest3 == '1':
# #                 print(animes_df[0:18])
# #             elif quest3 == '2':
# #                 print(animes_df[18:22])
# #             else:
# #                 print_formatted_text(HTML("\n<ansired>Enter a vaild input!</ansired>"))
# #     except:
# #         print_formatted_text(HTML("\n<ansired>Invaild input!</ansired>"))

# # if __name__ == '__main__':
# #     main()

# ## Making A UI 
# print("Available Anime Categories:", animes_df['Category'].tolist())
# result = button_dialog(
#     title='Welcome to Anime Recommendations!',
#     text='View Filters?',
#     buttons=[
#         ('Yes', True),
#         ('No', False),
#         ],
#     ).run()

# if not result:
#     message_dialog(
#         title='Quit',
#         text='Press ENTER to quit.'
#     ).run()
 

# elif result is True:
#     anime_filter = radiolist_dialog(
#         title="Anime Filters",
#         text="What filters would you like to use?",
#         values=[
#             ("name", "Name"),
#             ("genre", "Genre"),
#             ("length", "Length"),
#             ("Type", "Type"), 
#         ]
#     ).run()
# else:
#     message_dialog(
#     title='Quit',
#     text='Press ENTER to quit.').run()

# if anime_filter == 'name':
#     anime_checklist = input_dialog(
#         title='Filtering Name',
#         text='Please type the name',
#     ).run()
  
#     ### Debugging, Checks if user inputed something.
#     # if anime_filter == anime_filter.strip():
#     #     print(f"Checking for: {anime_filter}")

#     ### Prints available anime names
#     # print("Available Anime Names:", animes_df['Anime Name'].tolist())

#     if anime_checklist in animes_df['Anime Name'].values:
#         result_df = animes_df[animes_df['Anime Name'] == anime_checklist]
#         print(result_df)

#     else:
#         result = button_dialog(
#         title='No results found :C ',
#         text='Choose one of the following.',
#         buttons=[
#             ('Exit', True),
#             ('Return', None),
#             ],  
#         ).run()
#         if result == True:
#             print('Goodbye!')

# elif anime_filter == 'genre':
#     genre_filter = radiolist_dialog(
#         title='Genre Filter',
#         text='Pick your genre',
#             values=[
#             ('action', 'Action'),
#             ('romance', 'Romance'),
#             ]
#         ).run()