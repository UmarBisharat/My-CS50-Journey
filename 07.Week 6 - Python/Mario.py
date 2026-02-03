def main():
    # Keep prompting until the user gives a valid integer between 1 and 8
    while True:
        try:
            height = int(input("Height: "))
            if 1 <= height <= 8:
                break
        except ValueError:
            pass

    # Print the two-sided pyramid
    for i in range(1, height + 1):
        # Left side: (height - i) spaces, then i hashes
        # Middle: two spaces
        # Right side: i hashes
        print(" " * (height - i) + "#" * i + "  " + "#" * i)


if __name__ == "__main__":
    main()
