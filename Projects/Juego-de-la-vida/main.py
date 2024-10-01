from src import GameOfLifeGUI
import tkinter as tk

def main():
    root = tk.Tk()
    app = GameOfLifeGUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()