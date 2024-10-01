import tkinter as tk
from tkinter import messagebox

def create_board(self):
    """
    Verifica los valores de las filas y columnas.
    Captura errores al momento de obtener los valores.
    Muestra los mensajes de error que se generen

    Parámetro: Objeto -> GameOfLifeGUI

    Ejecuta la función game_window que lanza la ventana de juego
    en caso todo se ha ejecutado correctamente
    """
    try:
        rows = int(self.entry_rows.get())
        columns = int(self.entry_columns.get())
        
        # Verificar que los valores estén en los rangos específicos, 
        # sino están detener la ejecución
        if 5 > rows > 60:
            messagebox.showerror("Error", "El número de filas debe ser entre 5 y 60")
            return
        if 5 > columns > 140:
            messagebox.showerror("Error", "El número de columnas debe ser entre 5 y 140")
            return
        
        # Crear la nueva ventana con la matriz si todo está bien
        self.game_window(rows, columns)
        
    # Capturar todos los errores que se puedan generar y mostrar el mensaje
    except Exception as e:
        # Mostrar el mensaje de Error que se genere
        messagebox.showerror("Error", e)


def toggle_cell(self, event):
    """
    Añade un evento a cada celda para que sea presionable y
    alterne el estado entre viva (negra) y muerta (blanca)

    Parámetro: Objeto   -> GameOfLifeGUI
               Functión -> event
    """
    rect_id = event.widget.find_closest(event.x, event.y)[0]
    current_color = self.canvas.itemcget(rect_id, "fill")
    new_color = "black" if current_color == "white" else "white"
    self.canvas.itemconfig(rect_id, fill=new_color)