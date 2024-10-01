from src import Game_of_live

print("Start the game")

print("Enter the x(rows) and the y(colums) size and the number of iterations")
rows = int(input("X: "))
columns = int(input("Y: "))
n_iterations = int(input("Iterations: "))

Game = Game_of_live(rows, columns, n_iterations)

Game.start_game()