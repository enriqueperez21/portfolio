import tkinter as tk

def home_window(self, root):
    self.root = root
    self.root.title("Game of Life - Iniciar Juego")

    # Creación de un Título para la ventana
    self.titulo = tk.Label(root, text="Game of Life by Luis Enrique Pérez",
                font=("Helvetica", 14, "bold"),
                compound="left", padx=10, pady=0)
    self.titulo.grid(row=0, column=0, columnspan=1, padx=10, pady=10)

    # Etiquetas para mostrar en la ventana (Ingreso de filas y columnas)
    self.label_rows = tk.Label(root, text="Número de filas mínimo 5 y máximo 60:")
    self.label_rows.grid(row=1, column=0, padx=10, pady=10)

    self.label_columns = tk.Label(root, text="Número de columnas (mínimo 5 y máximo 140):")
    self.label_columns.grid(row=3, column=0, padx=10, pady=10)

    # TextBox para ingresar los valores de las filas y las columnas
    self.entry_rows = tk.Entry(root)
    self.entry_rows.grid(row=2, column=0, padx=10, pady=10)

    self.entry_columns = tk.Entry(root)
    self.entry_columns.grid(row=4, column=0, padx=10, pady=10)

    # Botón para abrir la ventana de juego y crear el tablero
    self.start_button = tk.Button(root, text="Iniciar el tablero de juego", command=self.create_board)
    self.start_button.grid(row=5, columnspan=2, padx=10, pady=10)

def game_window(self, rows, columns):
        # Obtenemos las filas y columnas previamente guardadas
        self.rows = rows
        self.columns = columns

        # Crear una nueva ventana para el tablero de juego
        self.board_window = tk.Toplevel()

        # En caso la cantidad de filas y columnas sea baja asignamos un tamaño de ventana fijo
        if(rows < 8 and columns < 8):
            self.board_window.geometry("300x300")

        # Añadimos un nombre a la ventana
        self.board_window.title(f"Game of Life - Tablero {rows}x{columns}")

        # Creación de un frame para contener el título
        title_frame = tk.Frame(self.board_window)
        title_frame.grid(row = 0, column=0, columnspan=3, padx=10, pady=5)

        # Creación de un Título para la ventana
        self.titulo = tk.Label(title_frame, text="Game of Life by Luis Enrique Pérez",
                  font=("Helvetica", 14, "bold"),
                  compound="left", padx=10, pady=0)
        self.titulo.grid(row=0, column=0, columnspan=1)

        # Crear el Canvas
        self.cell_size = 10  # Tamaño de las celdas en píxeles
        canvas_width = self.columns * self.cell_size
        canvas_height = self.rows * self.cell_size

        self.canvas = tk.Canvas(self.board_window, width=canvas_width, height=canvas_height)
        self.canvas.grid(row=1, column=0, padx=20, pady=20)

        self.cells = {}  # Diccionario para almacenar las celdas

        # Dibujar la matriz de rectángulos en el canvas y asignar el tag "cell"
        for row in range(self.rows):
            for col in range(self.columns):
                x1 = col * self.cell_size
                y1 = row * self.cell_size
                x2 = x1 + self.cell_size
                y2 = y1 + self.cell_size
                rect = self.canvas.create_rectangle(x1, y1, x2, y2, fill="white", outline="gray", tags="cell")
                self.cells[(row, col)] = rect
        
        # Añadir evento de clic para cambiar el estado de la celda
        self.canvas.tag_bind("cell", '<Button-1>', lambda event: self.toggle_cell(event))

        # Crear un frame que contenga los botones
        buttons_frame = tk.Frame(self.board_window)
        buttons_frame.grid(row=2, column=0, columnspan=3, padx=20, pady=20)  # Márgenes del frame contenedor

        # Botón para iniciar el juego
        self.start_game_button = tk.Button(buttons_frame, text="Iniciar Juego", command=self.start_game)
        self.start_game_button.grid(row=0, column=0, pady=10)  # Margen debajo del frame

        # Botón para ejecutar la siguiente iteración
        self.next_iteration = tk.Button(buttons_frame, text="Siguiente Iteración", command=self.execute_one_iteration)
        self.next_iteration.grid(row=0, column=0, padx = 10, pady=10)  # Margen debajo del frame
        self.next_iteration.grid_remove()

        # Botón para ejecutar el juego en bucle
        self.continue_game = tk.Button(buttons_frame, text="Seguir infinitamente", command=self.execute_infinity)
        self.continue_game.grid(row=0, column=1, padx = 10, pady=10)  # Margen debajo del frame
        self.continue_game.grid_remove()

        # Botón para detener el juego
        self.end_game = tk.Button(buttons_frame, text="Terminar Ejecución", command=self.board_window.destroy)
        self.end_game.grid(row=0, column=1, padx = 10, pady=10)  # Margen debajo del frame
        self.end_game.grid_remove()