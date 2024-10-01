import tkinter as tk
from tkinter import messagebox
import threading
from src import Game_of_live
from .gui_views import home_window, game_window
from .gui_functions import create_board, toggle_cell

class GameOfLifeGUI:
    def __init__(self, root):
        # Guardamos dentro de la clase la función create_board alojada en gui_functions
        self.create_board = lambda: create_board(self)
        self.toggle_cell = lambda event: toggle_cell(self, event)

        # Guardamos la función game_windows que contiene la ventana del juego
        self.game_window = lambda rows, columns: game_window(self, rows, columns)

        # Iniciamos la ventana que contiene la entrada de las filas y las columnas
        home_window(self, root)


    def start_game(self):
        """
        Iniciar el "Juego de la vida"
        
        Functiones:
            - Crea las funciones que permiten controlar el estado de las celdas mostradas

            - Recolecta las celdas vivas en una función

            - Crea una instancia de la clase Game_of_live y manda la lista con las celdas vivas.

            - Modifica la interfaz para ocultar y mostrar las funciones
        """

        # Función para cambiar el color de las celdas que mueren y viven
        def born_cell(row, col):
            rect = self.cells[(row, col)]
            try:
                self.canvas.itemconfig(rect, fill="black")
            except Exception as E:
                pass

        def kill_cell(row, col):
            rect = self.cells[(row, col)]
            try:
                self.canvas.itemconfig(rect, fill="white")
            except Exception as E:
                pass

        list_position_alive_cell = []

        # Guarda las celdas vivas en una lista
        for (row, col), rect in self.cells.items():
            if self.canvas.itemcget(rect, "fill") == "black":
                list_position_alive_cell.append((row, col))

        # Bloquea la interacción con la celda,
        # para que no se pueda seleccionar después de iniciar el juego
        self.canvas.tag_unbind("cell", '<Button-1>')
        
        # Instanciar un objeto de la clase Game of Live usando los parametro de enter_by_console como falso
        # y la lista para que la clase ejecuta para la GUI y no para la consola
        Game = Game_of_live(self.rows, self.columns, enter_by_console=False, list_position_alive_cell=list_position_alive_cell,
                            gui_born_cell=born_cell, gui_kill_cell=kill_cell)
                
        self.start_game_button.grid_remove()  # Ocutar botón de "Iniciar juego"
        self.next_iteration.grid() # Aparecer el botón de siguiente iteración
        self.continue_game.grid()
        self.Game = Game

    def execute_one_iteration(self):
        self.Game.start_game()

    def execute_infinity(self):
        try:
            # Iniciar el juego
            self.Game.start_game()
            # Ocultar los botones de Siguiente iteración y continuar
            self.next_iteration.grid_remove()
            self.continue_game.grid_remove()
            # Mostrar el botón de terminar el juego
            self.end_game.grid()
            
            # Volver a llamar a la función después de 0.1 segundos
            threading.Timer(0.10, self.execute_infinity).start()
        except Exception as E:
            pass
        

# Ejecutar la interfaz
if __name__ == "__main__":
    root = tk.Tk()
    app = GameOfLifeGUI(root)
    root.mainloop()