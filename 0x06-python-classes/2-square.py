#!/usr/bin/python3
"""Define a class Square."""

class Square:
    """A class that defines a square"""

    def __init__(self, size=0):
        """Initialize a new Square.
        Args:
            size: represnets the size of the square defined
        Raises:
            TypeError: if size is not integer
            ValueError: if size is less than zero
        """

        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        elif size < 0:
             raise ValueError('size must be >= 0')
        self.__size = size
