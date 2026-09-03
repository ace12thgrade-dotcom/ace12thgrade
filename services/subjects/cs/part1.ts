// services/subjects/cs/part1.ts
// Unit 1: Computational Thinking and Programming - 2
// Python Revision, Functions, Exception Handling, File Handling (Text, Binary, CSV), Stacks
// Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

export function getCSPart1Notes(chapterLower: string): string | null {
  // UNIT 1: Python Review, Functions & Exception Handling
  if (
    chapterLower.includes('python') ||
    chapterLower.includes('function') ||
    chapterLower.includes('exception') ||
    chapterLower === 'cs1' ||
    chapterLower.includes('computational thinking') ||
    chapterLower.includes('review of python')
  ) {
    return `TOPIC: Unit 1: Python Fundamentals, Functions & Exception Handling
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Python Data Types & Mutability Rules:**
- **Immutable Types:** Integers, Floats, Booleans, Strings, Tuples. Once created, their values cannot be changed in-place; modifications create new objects in memory.
- **Mutable Types:** Lists, Dictionaries, Sets. Their elements can be modified, appended, or deleted in-place without altering the object's identity (id).
- **String Slicing & Operations:**
  * Syntax: \`s[start : stop : step]\` (default step = 1; negative step reverses).
  * Example: \`s = "COMPUTER"\` => \`s[1:5]\` is \`"OMPU"\`; \`s[::-1]\` is \`"RETUPMOC"\`.
  * Common Methods: \`s.split()\`, \`s.join()\`, \`s.strip()\`, \`s.isdigit()\`, \`s.isalpha()\`, \`s.isalnum()\`, \`s.find()\`, \`s.count()\`.
- **List Operations:**
  * \`lst.append(x)\`: Adds element x at the end as a single object.
  * \`lst.extend(iterable)\`: Appends each element from the iterable individually.
  * \`lst.insert(index, x)\`: Inserts x at specified index.
  * \`lst.pop([index])\`: Removes and returns item at index (default is last item).
  * \`lst.remove(value)\`: Removes first occurrence of value (raises ValueError if not found).

**2. Python Functions & Parameter Passing:**
- **Function Definition:** Using \`def\` keyword.
  \`\`\`python
  def calculate_tax(salary, rate=0.10):  # rate is default parameter
      tax = salary * rate
      return tax
  \`\`\`
- **Types of Arguments:**
  1. **Positional Arguments:** Matched position-by-position from left to right.
  2. **Default Arguments:** Assigned default values in function header. **Rule:** Non-default arguments MUST precede default arguments (e.g., \`def calc(a, b=5):\` is VALID; \`def calc(a=5, b):\` is SYNTAX ERROR).
  3. **Keyword Arguments:** Specified by parameter name at call time (\`calculate_tax(rate=0.15, salary=50000)\`). Allows arguments to be passed in any order.
- **Scope & Lifetime of Variables:**
  * **LEGB Rule:** Python searches for variables in order: **L**ocal -> **E**nclosing -> **G**lobal -> **B**uilt-in.
  * **\`global\` Keyword:** Required inside a function to modify a variable defined in the global scope.
    \`\`\`python
    count = 10
    def increment():
        global count
        count += 5  # modifies global count to 15
    \`\`\`
- **Parameter Passing Mechanism (Pass-by-Object-Reference):**
  * When an **immutable** object (int, string, tuple) is passed, changes inside function do NOT reflect outside.
  * When a **mutable** object (list, dictionary) is modified in-place inside function (e.g. \`lst.append(5)\`), changes ARE reflected outside!

**3. Exception Handling in Python:**
- **Built-in Exceptions:**
  * \`ZeroDivisionError\`: Division or modulo by zero (\`10 / 0\`).
  * \`ValueError\`: Inappropriate value passed (e.g., \`int("hello")\`).
  * \`TypeError\`: Operation on incompatible types (e.g., \`"hello" + 5\`).
  * \`IndexError\`: Accessing out-of-range sequence index.
  * \`KeyError\`: Accessing non-existent dictionary key.
  * \`FileNotFoundError\`: Trying to open a file that does not exist in read mode.
  * \`EOFError\`: Raised when \`pickle.load()\` reaches end of a binary file.
- **Exception Handling Blocks:**
  \`\`\`python
  try:
      num = int(input("Enter divisor: "))
      res = 100 / num
  except ZeroDivisionError:
      print("Cannot divide by zero!")
  except ValueError:
      print("Invalid integer input!")
  else:
      print("Division successful! Result is:", res)  # executes only if NO exception occurred
  finally:
      print("Execution complete.")  # ALWAYS executes, regardless of errors
  \`\`\`

**COMMON MISTAKE:**
- Placing default parameters before positional parameters: \`def func(a=10, b):\` raises a \`SyntaxError: non-default argument follows default argument\`.
- Forgetting that modifying a list via \`lst = lst + [x]\` creates a new local list, whereas \`lst.append(x)\` modifies the caller's list in-place.`;
  }

  // UNIT 1: File Handling (Text, Binary, CSV)
  if (
    chapterLower.includes('file') ||
    chapterLower.includes('text file') ||
    chapterLower.includes('binary file') ||
    chapterLower.includes('csv') ||
    chapterLower.includes('pickle') ||
    chapterLower === 'cs2'
  ) {
    return `TOPIC: Unit 1: File Handling in Python (Text, Binary & CSV)
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Text File Handling (\`.txt\`):**
- Text files store data as human-readable ASCII/Unicode characters terminated by EOL (End-of-Line, \`\\n\`).
- **File Opening Modes:**
  * \`'r'\`: Read mode (default). File must exist; file pointer at beginning (0).
  * \`'w'\`: Write mode. Creates new file or overwrites existing file; pointer at beginning.
  * \`'a'\`: Append mode. Creates new file or appends to end of existing file; pointer at end.
  * \`'r+'\`: Read and Write mode. File must exist; pointer at beginning.
  * \`'w+'\`: Write and Read mode. Overwrites existing file.
  * \`'a+'\`: Append and Read mode.
- **Reading Methods:**
  * \`f.read([n])\`: Reads entire file as a single string (or n characters if specified).
  * \`f.readline()\`: Reads a single line as string, including trailing \`\\n\`.
  * \`f.readlines()\`: Reads all lines and returns a **list of strings**.
- **Writing Methods:**
  * \`f.write(str)\`: Writes string to file. Does NOT add newline automatically.
  * \`f.writelines(list_of_strings)\`: Writes a list of strings to file.
- **File Pointer Manipulation:**
  * \`f.tell()\`: Returns current position of file pointer (in bytes from beginning).
  * \`f.seek(offset, whence)\`: Moves file pointer.
    - \`whence = 0\`: Relative to file beginning (default).
    - \`whence = 1\`: Relative to current pointer position.
    - \`whence = 2\`: Relative to end of file.
    - *Note in Python 3 text mode: seek from current (1) or end (2) requires offset=0.*
- **Standard Text File Counting Template:**
  \`\`\`python
  def count_pattern():
      count = 0
      with open("STORY.TXT", "r") as f:
          for line in f:
              words = line.split()
              for w in words:
                  if w.upper().startswith('M'):
                      count += 1
      print("Count:", count)
  \`\`\`

**2. Binary File Handling (\`.dat\` / \`.bin\` using \`pickle\` module):**
- Stores raw binary data (0s and 1s) directly, preserving Python objects (lists, dictionaries, tuples) with exact internal representation.
- **Serialization (Pickling):** Converting Python object into byte stream.
  * Method: \`pickle.dump(object, file_pointer)\`
- **Deserialization (Unpickling):** Converting byte stream back into Python object.
  * Method: \`pickle.load(file_pointer)\`
  * When end of file is reached, \`pickle.load()\` raises an **\`EOFError\`**. Therefore, reading binary files must ALWAYS be enclosed within a \`try-except EOFError\` block.
- **Binary File Operations (Write, Read/Search, Update):**
  \`\`\`python
  import pickle

  # 1. Writing records to binary file
  def write_record():
      with open("STUDENT.DAT", "ab") as f:
          roll = int(input("Enter Roll: "))
          name = input("Enter Name: ")
          marks = float(input("Enter Marks: "))
          pickle.dump([roll, name, marks], f)

  # 2. Reading and Searching records
  def search_record(target_roll):
      found = False
      try:
          with open("STUDENT.DAT", "rb") as f:
              while True:
                  rec = pickle.load(f)  # rec = [roll, name, marks]
                  if rec[0] == target_roll:
                      print("Record Found:", rec)
                      found = True
                      break
      except EOFError:
          pass
      if not found:
          print("Record not found.")

  # 3. Updating records
  def update_marks(target_roll, new_marks):
      import os
      updated = False
      try:
          with open("STUDENT.DAT", "rb") as fin, open("TEMP.DAT", "wb") as fout:
              while True:
                  rec = pickle.load(fin)
                  if rec[0] == target_roll:
                      rec[2] = new_marks
                      updated = True
                  pickle.dump(rec, fout)
      except EOFError:
          pass
      os.remove("STUDENT.DAT")
      os.rename("TEMP.DAT", "STUDENT.DAT")
  \`\`\`

**3. CSV File Handling (\`.csv\` using \`csv\` module):**
- CSV (Comma Separated Values) is a plain-text tabular format where each row is a record and columns are separated by delimiters (default is comma \`,\`).
- When opening CSV files in Python on Windows, specify **\`newline=''\`** to prevent blank lines between rows.
- **Writing to CSV:**
  * \`csv.writer(file_handle, delimiter=',')\`
  * \`writer.writerow(list)\`: Writes a single 1D list as a row.
  * \`writer.writerows(nested_list)\`: Writes a 2D nested list as multiple rows.
- **Reading from CSV:**
  * \`csv.reader(file_handle, delimiter=',')\`
  * Returns an iterator yielding each row as a **list of strings**.
- **Standard CSV Template:**
  \`\`\`python
  import csv

  def write_csv():
      with open("EMPLOYEE.CSV", "w", newline='') as f:
          writer = csv.writer(f)
          writer.writerow(["EmpId", "Name", "Salary"])
          writer.writerow([101, "Aman", 75000])
          writer.writerow([102, "Sneha", 85000])

  def read_csv():
      with open("EMPLOYEE.CSV", "r") as f:
          reader = csv.reader(f)
          for row in reader:
              print(row[0], row[1], row[2])
  \`\`\`

**COMMON MISTAKE:**
- Forgetting \`newline=''\` when opening CSV files in write mode, which causes empty blank rows in Windows.
- Not catching \`EOFError\` while looping \`pickle.load()\`, which crashes the program when it hits the end of file.`;
  }

  // UNIT 1: Data Structures - Stacks
  if (
    chapterLower.includes('stack') ||
    chapterLower.includes('data structure') ||
    chapterLower === 'cs3'
  ) {
    return `TOPIC: Unit 1: Data Structures (Stacks in Python)
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Stack Concept & Principles:**
- A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** or **FILO (First In Last Out)** principle.
- Elements are inserted and removed from the **SAME END**, called the **TOP** of the stack.
- Real-world analogies: Stack of plates in cafeteria, stack of coins, undo operation in text editors, browser back button history.
- Key Stack Operations:
  1. **Push:** Inserting an item onto the top of the stack.
  2. **Pop:** Removing and returning the top item from the stack.
  3. **Peek / Top:** Accessing the top item without removing it.
  4. **IsEmpty:** Checking if the stack has zero elements.
  5. **Display:** Displaying stack elements from top to bottom.
- Critical Conditions:
  * **Underflow:** Attempting to pop or peek from an empty stack.
  * **Overflow:** Attempting to push into a full stack (applicable only in fixed-size arrays; Python lists are dynamically sized so overflow occurs only on memory exhaustion).

**2. Complete Python Implementation of Stack using List:**
\`\`\`python
# Stack Implementation using Python List

def isEmpty(stk):
    return len(stk) == 0

def Push(stk, item):
    stk.append(item)
    print(f"Pushed {item} onto stack. Top is now at index {len(stk)-1}")

def Pop(stk):
    if isEmpty(stk):
        print("Underflow: Stack is empty!")
        return None
    else:
        item = stk.pop()
        return item

def Peek(stk):
    if isEmpty(stk):
        print("Stack is empty!")
        return None
    else:
        return stk[-1]  # last element is the top

def Display(stk):
    if isEmpty(stk):
        print("Stack is empty!")
    else:
        top = len(stk) - 1
        print("Stack elements (Top to Bottom):")
        for i in range(top, -1, -1):
            print(stk[i])
\`\`\`

**3. Standard Board Question Patterns for Stacks:**
- **Pattern 1 (Conditional Push):**
  Given a dictionary or list of records (e.g. \`employees = {"E1": ["Aman", 45000], "E2": ["Ravi", 25000]}\`), push names of employees earning salary > 30000.
  \`\`\`python
  def Push_Sal(emp_dict, stk):
      for emp_id, details in emp_dict.items():
          if details[1] > 30000:
              stk.append(details[0])
  \`\`\`
- **Pattern 2 (Pop and Display):**
  Pop all elements until empty and count/display them.
  \`\`\`python
  def Pop_All(stk):
      while not isEmpty(stk):
          item = stk.pop()
          print("Popped:", item)
      print("Stack Underflow achieved.")
  \`\`\`

**COMMON MISTAKE:**
- Popping from index 0 (\`stk.pop(0)\`). In a stack implemented with a list, the top is the **END** of the list (\`stk[-1]\`), so popping must be \`stk.pop()\` without arguments.
- Forgetting to handle the Underflow condition before calling \`stk.pop()\`.`;
  }

  return null;
}
