from src import Matrix

class Game_of_live:
    def __init__(self, rows: int, columns: int, n_iterations = 0, 
                 enter_matrix = None, enter_by_console=True, list_position_alive_cell = [],
                 gui_born_cell= None, gui_kill_cell= None):
        
        self.enter_by_console = enter_by_console

        if (gui_born_cell != None, gui_kill_cell != None):
            self.matrix = Matrix(rows, columns, gui_born_cell = gui_born_cell, gui_kill_cell = gui_kill_cell)
        else:
            self.matrix = Matrix(rows, columns)

        self.l_alive_cells = []      # List with the cells objects that is alive
        self.interations = n_iterations
        Load_first_state(self, enter_matrix).start(list_position_alive_cell, enter_by_console)

    def start_game(self):
        GameEngine(self).game(self.enter_by_console)

    def get_alive_cells(self): return self.l_alive_cells

    def set_alive_cells(self, new_alive_cells):
        self.l_alive_cells = new_alive_cells

    def print_matrix(self):
        self.matrix.print()

    def get_cell(self,row_position, column_position):
        return self.matrix.get_cell(row_position, column_position)

class Load_first_state:
    def __init__(self, Game_of_live, enter_matrix):
        self.Game = Game_of_live
        self.enter_matrix = enter_matrix

    def start(self, list_position_alive_cell, enter_by_console = True):
        if (self.enter_matrix == None and enter_by_console):
            self.enter_matrix = self.input_matrix()

        if(enter_by_console):
            self.update_matrix(self.enter_matrix)
        else: 
            alive_cells = []
            for row, column in list_position_alive_cell:
                alive_cell = self.Game.get_cell(row, column)
                alive_cell.born()
                alive_cells.append(alive_cell)

            self.Game.set_alive_cells(alive_cells)


    def input_matrix(self):
        rows, columns = self.Game.matrix.get_size()
        print(f"Enter the alive cells, use \"-\" to dead cells and \"*\" to live cells ({rows}x{columns}) matrix")
        enter_matrix = []
        for _ in range(rows) :
            new_column = list(input(""))
            enter_matrix.append(new_column)
        return enter_matrix
    
    def update_matrix(self, matrix):
        alive_cells = []
        rows, columns = self.Game.matrix.get_size()
        for row in range(rows): # Iterate in rows
            for column in range(columns): # Iterate in columns
                if(matrix[row][column] == "*"):
                    alive_cell = self.Game.get_cell(row, column) # Get Cell object
                    alive_cells.append(alive_cell)               # Append the cell to the List

                    # Born the cell in the matrix
                    alive_cell.born()                            

        self.Game.set_alive_cells(alive_cells)


class GameEngine:
    def __init__(self, Game_of_live: Game_of_live):
        self.Game = Game_of_live
        # Set with (tuples) rows and columns of cells to calculate the next matrix
        self.set_important_cells = set()  # Use the set to avoid duplicate values
        self.iterations = Game_of_live.interations # Number of iterations
 
    def game(self, enter_by_console = True):
        if(enter_by_console):
            print("XXXXXXXXXXXXXXX GAME XXXXXXXXXXXXXXX")
            continue_game = True
            counter = 0
            while(continue_game):
                print(f"///////////// {counter+1} /////////////")
                self.count_neighbors()
                self.update_game()
                counter += 1
                self.Game.print_matrix()
                if(counter >= self.iterations): continue_game = False
        else:
            self.count_neighbors()
            self.update_game()
        
    # Do the game
    def update_game(self):
        new_alive_cells = []

        # Iterate across the rows and columns of important cells
        for row, column in self.set_important_cells:

            # Get the cell using the row and column
            this_cell = self.Game.get_cell(row, column)
            # Execute the game function in the Cell object
            this_cell.game()
            
            # If the cell is alive we append it in the list
            if(this_cell.is_alive()): 
                new_alive_cells.append(this_cell)

        # set the new list of alive cells
        self.Game.set_alive_cells(new_alive_cells) 
        # Void the set of important cells
        self.set_position_important_cells = set()
    

    # Count the alive neighbors
    def count_neighbors(self):
        list_alive_cells = self.Game.get_alive_cells()

        for alive_cell in list_alive_cells:
            # Get row and column position
            cell_row, cell_column = alive_cell.get_position()           # The row and column of the cell in the matrix
            list_neighbors = self.get_neighbors(cell_row, cell_column)  # Get the list of neighbors (Cell objects)

            # Visit each neighbor
            for neighbor in list_neighbors:
                neighbor_row, neighbor_column = neighbor.get_position()

                # If the neighbor is alive, add a "alive neighbor" to the current cell (the current cell is alive)
                if(neighbor.is_alive()):
                    alive_cell.add_neighbor()
                # If the neighbor is dead, add a "alive  neighbor" to the Dead cell, not this cell.
                else:
                    neighbor.add_neighbor()
                
                # Add the position of the neighbors, don't care if is alive or dead because it's a set not a list
                self.add_important_cells(neighbor_row, neighbor_column)

            self.add_important_cells(cell_row, cell_column)

    # Add a cell to the set of important cells
    def add_important_cells(self, row, column):
        self.set_important_cells.add((row, column))

    # Get the Neighbors
    def get_neighbors(self, row_position, column_position):
        neighbors = []

        for row in range(-1, 2):
            for column in range(-1, 2):
                if(row == 0 and column == 0):
                    continue

                new_row = row_position + row
                new_column = column_position + column

                if (self.cell_is_in_matrix(new_row, new_column)):
                    neighbor = self.Game.get_cell(new_row, new_column)
                    neighbors.append(neighbor)

        return neighbors
    
    #Verified if the cell is in the matrix
    def cell_is_in_matrix(self, row_position, column_position):
        rows, columns = self.Game.matrix.get_size()
        return (self.is_in_range(row_position, rows-1) and self.is_in_range(column_position, columns-1))

    def is_in_range(self, number, max): return (0 <= number <= max)