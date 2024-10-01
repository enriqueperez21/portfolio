class Cell:
    def __init__(self,x: int, y:int, gui_born_cell= None, gui_kill_cell= None):
        self.gui_born_cell = gui_born_cell
        self.gui_kill_cell = gui_kill_cell
        self.alive = False
        self.neighbors = 0
        self.x_position = x
        self.y_position = y

    def clean_neighbors(self):
        self.neighbors = 0

    def add_neighbor(self):
        self.neighbors += 1

    def get_position(self):
        return [self.x_position, self.y_position]
    
    def is_alive(self):
        return self.alive
    
    def game(self):
        if(self.is_alive()):
            self.game_if_alive()
        else:
            self.game_if_dead()
        self.clean_neighbors()

    def game_if_alive(self):
        if(self.neighbors > 3 or self.neighbors < 2):
            self.kill()
        # If neighbors is equals to 2 or 3, the cell keep alive

    def game_if_dead(self):
        if(self.neighbors == 3):
            self.born()

    def born(self):
        if (self.gui_born_cell != None):
            r, c = self.get_position()
            self.gui_born_cell(r, c)
        self.alive = True

    def kill(self):
        if (self.gui_kill_cell != None):
            r, c = self.get_position()
            self.gui_kill_cell(r, c)
        self.alive = False