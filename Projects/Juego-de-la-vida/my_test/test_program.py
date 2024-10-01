import io
import sys
import unittest

class TestGameOfLife(unittest.TestCase):

    def test_main_program(self, Game_of_live):
        rows = 5
        columns = 5
        iterations = 3

        game_input = [
            "----*",
            "**---",
            "--**-",
            "---**",
            "-**--"
        ]

        Game = Game_of_live(rows, columns, iterations, game_input)

        expected_output = expected_output = expected_output = (
            "XXXXXXXXXXXXXXX GAME XXXXXXXXXXXXXXX\n"
            "///////////// 1 /////////////\n"
            "-----\n"
            "-***-\n"
            "-****\n"
            "-*--*\n"
            "--**-\n"
            "///////////// 2 /////////////\n"
            "--*--\n"
            "-*--*\n"
            "*---*\n"
            "-*--*\n"
            "--**-\n"
            "///////////// 3 /////////////\n"
            "-----\n"
            "-*-*-\n"
            "**-**\n"
            "-**-*\n"
            "--**-\n"
        )

        # Redirigir la salida estándar para capturarla
        captured_output = io.StringIO()
        sys.stdout = captured_output  # Redirige la salida estándar a captured_output

        Game.start_game()

        # Restaurar la salida estándar
        sys.stdout = sys.__stdout__

        # Compara la salida capturada con la esperada
        self.assertEqual(captured_output.getvalue(), expected_output, "\n\033[91m✘ La salida del juego no coincide con la esperada.")
        print("\033[92m✔ La prueba pasó correctamente.")