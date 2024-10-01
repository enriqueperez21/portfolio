from .cells import Cell

class Matrix:
    def __init__(self, rows: int, columns: int, gui_born_cell= None, gui_kill_cell= None):
        self.gui_born_cell = gui_born_cell
        self.gui_kill_cell = gui_kill_cell
        self.matrix = self.generate_cells(rows, columns)
        self.rows = rows
        self.columns = columns

    def get_size(self):
        return [self.rows, self.columns]
        

    def generate_cells(self, rows, columns):
        grid = []
        for x in range(rows):
            row = []
            for y in range(columns):
                # Create each cell
                this_cell = Cell(x, y, gui_born_cell=self.gui_born_cell, gui_kill_cell=self.gui_kill_cell)

                # Save cell
                row.append(this_cell)

            grid.append(row)
        return grid

    def print(self):
        for x in range(self.rows):
            for y in range(self.columns):
                if (self.matrix[x][y].is_alive()):
                    print("*", end="")
                else:
                    print("-", end="")
            print("\n", end="")

    def get_cell(self, row, column):
        return self.matrix[row][column]

    def born_cell(self,row, column):
        self.matrix[row][column].born()

    def kill_cell(self,row, column):
        self.matrix[row][column].kill()