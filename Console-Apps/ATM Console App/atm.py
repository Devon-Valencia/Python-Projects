from cardHolder import cardHolder

def print_menu():

    print('Please choose from the following options...')
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Show Balance")
    print("4. Exit")

def deposit(cardHolder):
    try: 
        deposit = float(input("How much many $$ will you like to deposit: "))
        cardHolder.set_balance(cardHolder.get_balance() + deposit)
        print("Thank you for your $$. Your new balance is: ", str(cardHolder.get_balance()))
    except:
        print('Invaild input.')

def withdraw(cardholder):
    try:
        withdraw_amount = float(input("How much $$ would you like to withdraw: "))
        if (cardholder.get_balance() < withdraw_amount):
            print("Insufficient balance :(")
        else:
            cardholder.set_balance(cardholder.get_balance() - withdraw_amount)
            print("Thank you for using our ATM!")
    except ValueError:
        print('Invalid input.')
def check_balance(cardHolder):
    print("Your current balance is: ", cardHolder.get_balance())

if __name__ == "__main__" :
    current_user = cardHolder("","","","","",)

    ### Create a repo of cardholders
    list_of_cardHolders = []
    list_of_cardHolders.append(cardHolder("592397421679" , 4356, "Jared", "Moser", 1349.75))
    list_of_cardHolders.append(cardHolder("949606332480" , 9321, "Billy", "Wanker", 23.31))
    list_of_cardHolders.append(cardHolder("383828819467" , 2355, "Dexter", "Morgan", 123532.89))
    list_of_cardHolders.append(cardHolder("959458234374" , 6765, "Sophia", "Landen", 687.32))
    list_of_cardHolders.append(cardHolder("024839845743" , 5754, "Charlotte", "Greenville", 453.23))
    list_of_cardHolders.append(cardHolder("334239295624" , 6453, "Amelia", "Twinkerbell", 54543.32))
    
    ### Prompt user from debit card number
    # print("Available card numbers:", [holder.cardNum for holder in list_of_cardHolders])
    debitcardnum = ""
    while True:
        try:
            debitcardnum = input("Please insert your debit card: ")
            ### check against repo
            debitMatch = [holder for holder in list_of_cardHolders if holder.cardNum == debitcardnum]
            if(len(debitMatch) > 0):
                current_user = debitMatch[0]
                break
            else: 
                print("Card number not recognized. Please try again.")
        except:
            print("Card number not recognized. Please try again.")
# while True:
#     pinnum = input("Please insert your debit card: ")
#     pinMatch = [holder for holder in list_of_cardHolders if holder.get_pin == pinMatch]
#     if(len(pinMatch) > 0):
#         current_user = pinMatch[0]
#         break
#     else:
#         ("Pin is invalid please try again.")
while True:
    try:
        userPin = int(input("Please enter your pin: ").strip())
        if(current_user.get_pin() == userPin):
            break
        else:
            print("Invalid PIN. Please try again")
    except:
        print("Invalid PIN. Please try again")

### Print options
print("Welcome ", current_user.get_firstname()," :)" )
option = 0
while (True):
    print_menu()
    try:
        option = int(input())
    except:
        print("Invalid input. Please try again.")
    if(option == 1):
        deposit(current_user)
    elif(option == 2):
        withdraw(current_user)
    elif(option == 3):
        check_balance(current_user)
    elif(option == 4):
        break
    else:
        option == 0

print("Thank you have a nice day.")