// services/subjects/cs/part1.ts
// Unit 1: Computational Thinking and Programming - 2
// Dedicated chapters:
// - cs1: Python Revision Tour
// - cs2: Functions
// - cs3: File Handling (Text, Binary, CSV)
// - cs4: Data Structures (Stack)
// Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

export function getCSPart1Notes(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // CHAPTER 1: Python Revision Tour (Class 11 Review)
  if (
    id === 'cs1' ||
    (!id && (
      chapterLower === 'python revision tour' ||
      chapterLower.includes('revision tour') ||
      chapterLower.includes('review of python') ||
      chapterLower === 'cs1'
    ))
  ) {
    return `TOPIC: Chapter 1: Python Revision Tour
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. Python Tokens & Fundamental Concepts:**
**DEFINITION:** A token is the smallest individual unit in a Python program. Python recognises five categories of tokens:
- **Keywords:** Reserved words with predefined meanings that cannot be used as identifier names (e.g. \`def\`, \`global\`, \`lambda\`, \`pass\`, \`raise\`, \`with\`, \`is\`, \`in\`, \`None\`, \`True\`, \`False\`).
- **Identifiers:** User-defined names for variables, functions, and modules. Rules: Must start with a letter (A-Z, a-z) or underscore (\`_\`); followed by letters, digits, or underscores; cannot be a keyword; case-sensitive (\`Val\` vs \`val\`).
- **Literals:** Constant data values: String literals (\`'hello'\`, \`"world"\`, multiline \`'''doc'''\`), Numeric literals (Integer \`42\`, Float \`3.14\`, Complex \`3+4j\`), Boolean literals (\`True\`, \`False\`), and Special literal \`None\`.
- **Operators:** Symbols performing operations on operands (Arithmetic \`+\`, \`-\`, \`*\`, \`/\`, \`//\` [floor division], \`%\` [modulus], \`**\` [exponent]; Relational \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`; Logical \`and\`, \`or\`, \`not\`; Assignment \`=\`, \`+=\`, \`-=\`; Membership \`in\`, \`not in\`; Identity \`is\`, \`is not\`).
- **Punctuators / Delimiters:** Symbols used to organize code structures: \`(\`, \`)\`, \`[\`, \`]\`, \`{\`, \`}\`, \`:\`, \`,\`, \`.\`, \`;\`.

**2. Data Types & Mutability in Python:**
| Data Type | Category | Mutable / Immutable | Description & Standard Syntax |
| :--- | :--- | :--- | :--- |
| **int, float, complex** | Numeric | **Immutable** | Whole numbers, floating-point decimals, and numbers with imaginary unit \`j\`. |
| **bool** | Boolean | **Immutable** | Subtype of integer having values \`True\` (1) or \`False\` (0). |
| **str** | Sequence | **Immutable** | Ordered sequence of Unicode characters enclosed in quotes (e.g. \`"CBSE"\`). |
| **tuple** | Sequence | **Immutable** | Ordered sequence of items enclosed in parentheses (e.g. \`(10, 20, "CS")\`). Singleton tuple: \`(5,)\`. |
| **list** | Sequence | **Mutable** | Ordered, changeable sequence enclosed in brackets (e.g. \`[1, 2, 3]\`). Supports in-place modification. |
| **dict** | Mapping | **Mutable** | Unordered collection of key-value pairs enclosed in braces (e.g. \`{"roll": 101, "marks": 95}\`). Keys must be immutable. |
| **set** | Set Type | **Mutable** | Unordered collection of unique items enclosed in braces (e.g. \`{1, 2, 3}\`). |

**PRINCIPLE:** Mutability determines whether an object's value can be changed in-place in memory without creating a new memory location.
- For immutable types (int, float, str, tuple), modifying the value alters the memory reference (\`id()\`), allocating a new object.
- For mutable types (list, dict), modifying an element retains the same memory address (\`id()\`).

**3. Sequence Slicing & Operations:**
**FORMULA:** Sequence Slice Syntax: \`seq[start : stop : step]\`
- \`start\`: Starting index (inclusive, default = 0).
- \`stop\`: Ending index (exclusive, default = length).
- \`step\`: Step increment (default = +1). If \`step < 0\`, traversal occurs from right to left.
- **Example:**
  \`\`\`python
  s = "COMPUTER"
  print(s[1:5])     # "OMPU" (indices 1, 2, 3, 4)
  print(s[:3])      # "COM"  (indices 0, 1, 2)
  print(s[::2])     # "CMUE" (every 2nd character)
  print(s[::-1])    # "RETUPMOC" (reverses the string)
  \`\`\`

**4. Core Sequence Methods Master Reference:**
- **Strings (\`str\`):**
  * \`s.split(sep)\`: Splits string by delimiter into a list of words.
  * \`delim.join(list)\`: Joins list of strings with specified delimiter.
  * \`s.strip()\`: Removes leading and trailing whitespace.
  * \`s.isdigit()\`, \`s.isalpha()\`, \`s.isalnum()\`: Boolean tests for content.
  * \`s.find(sub)\`: Returns lowest index of substring, or \`-1\` if not found.
  * \`s.count(sub)\`: Counts non-overlapping occurrences of substring.
- **Lists (\`list\`):**
  * \`lst.append(item)\`: Adds single item to end of list.
  * \`lst.extend(iterable)\`: Appends all elements from another iterable to list.
  * \`lst.insert(index, item)\`: Inserts item at specified index.
  * \`lst.pop([index])\`: Removes and returns item at index (default is last item).
  * \`lst.remove(value)\`: Removes first occurrence of specified value.
  * \`lst.sort(reverse=False)\`: Sorts list in-place.
- **Dictionaries (\`dict\`):**
  * \`d[key]\`: Accesses value (raises \`KeyError\` if key does not exist).
  * \`d.get(key, default)\`: Returns value or default if key missing (avoids error).
  * \`d.keys()\`, \`d.values()\`, \`d.items()\`: Return dict view objects.
  * \`d.update(other_dict)\`: Merges another dictionary into \`d\`.

**5. Flow Control & Loop Constructs:**
- \`if-elif-else\` conditional ladder with indentation.
- \`for\` loop over sequences using \`range(start, stop, step)\`.
- \`while\` loop with loop-termination condition.
- **Jump Statements:**
  * \`break\`: Immediately terminates the innermost loop.
  * \`continue\`: Skips remainder of current iteration and jumps to next iteration.
  * \`else\` with loops: The \`else\` block executes **only if the loop completes normally without encountering a \`break\`**.

**COMMON MISTAKE:**
- Writing a singleton tuple as \`t = (5)\`. Without a trailing comma, Python treats \`(5)\` as an integer. Always write \`t = (5,)\` for a 1-element tuple.
- Expecting string methods to modify the string in-place: \`s.upper()\` does not alter \`s\`; you must assign \`s = s.upper()\`.`;
  }

  // CHAPTER 2: Functions
  if (
    id === 'cs2' ||
    (!id && (
      chapterLower === 'functions' ||
      chapterLower.includes('user defined function') ||
      (chapterLower.includes('function') && !chapterLower.includes('database') && !chapterLower.includes('sql'))
    ))
  ) {
    return `TOPIC: Chapter 2: Functions in Python
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. Anatomy of a Function & User-Defined Functions:**
**DEFINITION:** A function is a named, reusable subprogram of code that performs a specific, well-defined task and optionally returns a result to the caller.
- Functions provide **modularity**, eliminate code redundancy, and enhance program readability and maintainability.
- Syntax:
  \`\`\`python
  def function_name(param1, param2, ...):
      """Optional docstring explaining function behavior."""
      # Function body statements
      return result_value
  \`\`\`
- \`def\` is the keyword that introduces a function definition.
- **Parameters (Formal Parameters):** Variables declared in the function header that accept values during invocation.
- **Arguments (Actual Parameters):** Actual values or expressions passed into the function when it is called.

**2. Types of Arguments in Python Functions:**
1. **Positional Arguments:**
   - Arguments passed in the exact sequential order corresponding to the formal parameters.
   - Count and order must strictly match: \`def calc(x, y): ...\` called as \`calc(10, 20)\`.
2. **Default Arguments:**
   - Parameters initialized with a default value in the function header: \`def greet(name, msg="Good Morning"): ...\`
   - If caller does not supply an argument for a default parameter, the default value is used.
   - **Crucial CBSE Rule:** Non-default parameters **CANNOT follow default parameters**. (e.g. \`def test(a=10, b)\` is a syntax error; must be \`def test(b, a=10)\`).
3. **Keyword (Named) Arguments:**
   - Arguments passed by explicitly specifying the parameter name: \`calc(y=20, x=10)\`.
   - Allows arguments to be supplied in any arbitrary order.
   - When mixing positional and keyword arguments, all positional arguments must appear **before** keyword arguments.

**3. Scope and Lifetime of Variables (LEGB Rule):**
**PRINCIPLE:** Variable scope refers to the region of code where a variable is recognized and accessible. Python resolves identifiers using the **LEGB Rule**:
1. **L - Local:** Names assigned inside a function body or parameter list.
2. **E - Enclosing:** Names in the local scope of any enclosing function (nested functions).
3. **G - Global:** Names assigned at the top-level of a module file or declared with the \`global\` keyword.
4. **B - Built-in:** Predefined names loaded in Python's built-in namespace (e.g. \`print\`, \`len\`, \`range\`).

- **The \`global\` Statement:**
  * When a variable is assigned inside a function, Python treats it as **local by default**.
  * To modify or reassign a module-level global variable from within a function, you must declare it using \`global variable_name\`:
  \`\`\`python
  x = 100

  def modify_global():
      global x
      x = x + 50  # Modifies module-level x

  modify_global()
  print(x)  # Prints 150
  \`\`\`

**4. Parameter Passing Mechanism in Python:**
- Python employs **Pass-by-Object-Reference** (call-by-sharing):
  * **When passing Immutable Objects (integers, strings, tuples):**
    Reassignment inside the function creates a new local object; the caller's variable remains unaffected.
    \`\`\`python
    def increment(n):
        n = n + 1  # n points to a new integer; caller's value unchanged
    \`\`\`
  * **When passing Mutable Objects (lists, dictionaries):**
    In-place modifications (e.g. \`lst.append()\`, \`lst[0] = 99\`) directly alter the caller's original object because both reference the same memory address!
    \`\`\`python
    def add_item(lst):
        lst.append(999)  # Directly modifies caller's list in-place!
    \`\`\`

**5. Return Statements & Void Functions:**
- A function that explicitly returns a value uses the \`return\` statement. Execution immediately halts and control returns to caller.
- A function without a \`return\` statement (or with an empty \`return\`) implicitly returns **\`None\`**. (Void function).
- Returning multiple values: \`return a, b, c\` packs the values into a **tuple** \`(a, b, c)\`.

**COMMON MISTAKE:**
- Defining default parameters before non-default ones: \`def func(x=5, y): ...\` raises \`SyntaxError: non-default argument follows default argument\`.
- Forgetting that modifying a mutable parameter in-place inside a function alters the caller's list, causing unexpected output in Board prediction questions.`;
  }

  // CHAPTER 3: File Handling
  if (
    id === 'cs3' ||
    (!id && (
      chapterLower === 'file handling' ||
      chapterLower.includes('file handling') ||
      chapterLower === 'cs3'
    ))
  ) {
    return `TOPIC: Chapter 3: File Handling in Python
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. File Types & File Access Modes:**
- **Text Files (\`.txt\`):** Stores data as human-readable plain text encoded in ASCII or Unicode. Each line terminates with an EOL (End of Line) character (e.g. \`\\n\`).
- **Binary Files (\`.dat\` / \`.bin\`):** Stores raw binary data (0s and 1s) representing compiled objects in memory without encoding/decoding overhead.
- **CSV Files (\`.csv\`):** Plain-text tabular files where records represent lines and fields are separated by delimiters (default comma \`,\`).

| File Mode | File Pointer Position | Behavior if File Exists | Behavior if File Does Not Exist |
| :--- | :--- | :--- | :--- |
| **'r'** (read text) | Beginning (0) | Opens for reading only | Raises \`FileNotFoundError\` |
| **'w'** (write text) | Beginning (0) | Truncates (erases) all existing content | Creates a new empty file |
| **'a'** (append text) | End of file | Retains existing content; writes at end | Creates a new empty file |
| **'r+'** (read & write) | Beginning (0) | Opens for both reading and writing | Raises \`FileNotFoundError\` |
| **'w+'** (write & read) | Beginning (0) | Overwrites / truncates existing content | Creates a new file |
| **'a+'** (append & read) | End of file | Retains existing content; reading from start needs seek(0) | Creates a new file |
| **'rb', 'wb', 'ab'** | As above | Binary equivalents of read, write, and append modes | Same rules as text |

**2. Text File Operations & High-Frequency Methods:**
- \`f = open("data.txt", "r")\` or recommended \`with open("data.txt", "r") as f:\` (automatically closes file even on exceptions).
- **Reading Methods:**
  * \`f.read([n])\`: Reads entire file as a **single string**, or up to \`n\` characters/bytes.
  * \`f.readline()\`: Reads next line up to and including the newline character (\`\\n\`) as a string. Returns empty string \`""\` at EOF.
  * \`f.readlines()\`: Reads all remaining lines into a **list of strings**, each ending with \`\\n\`.
- **Writing Methods:**
  * \`f.write(str)\`: Writes string to file. Does NOT append a newline automatically.
  * \`f.writelines(list_of_strings)\`: Writes list of strings to file.
- **File Pointer Navigation:**
  * \`f.tell()\`: Returns current integer byte position of file pointer.
  * \`f.seek(offset, whence)\`: Moves pointer. \`whence=0\` (from beginning, supported in text files); \`whence=1\` (from current pos, binary only); \`whence=2\` (from end, binary only).

- **Standard Text File Processing Function:**
  \`\`\`python
  def count_lines_starting_with_vowel():
      vowels = ('A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u')
      count = 0
      with open("STORY.TXT", "r") as f:
          for line in f:
              if line.strip() and line.strip()[0] in vowels:
                  count += 1
      print("Lines starting with vowels:", count)
  \`\`\`

**3. Binary File Handling (\`pickle\` Module):**
**DEFINITION:** Pickling (Serialization) is the process of converting a Python object hierarchy (list, dict) into a byte stream. Unpickling (Deserialization) converts byte stream back into Python objects.
- \`pickle.dump(object, file_handle)\`: Serializes object to open binary file.
- \`pickle.load(file_handle)\`: Deserializes byte stream into Python object. Raises **\`EOFError\`** when end of file is reached.
- **Complete Binary File Search & Update Template:**
  \`\`\`python
  import pickle
  import os

  def insert_student(roll, name, marks):
      with open("STUDENT.DAT", "ab") as f:
          record = {"roll": roll, "name": name, "marks": marks}
          pickle.dump(record, f)

  def search_student(target_roll):
      found = False
      try:
          with open("STUDENT.DAT", "rb") as f:
              while True:
                  rec = pickle.load(f)
                  if rec["roll"] == target_roll:
                      print("Found:", rec)
                      found = True
                      break
      except EOFError:
          pass
      if not found:
          print("Record not found.")
  \`\`\`

**4. CSV File Handling (\`csv\` Module):**
- When opening CSV files in Python on Windows, always specify **\`newline=''\`** to suppress extraneous blank rows.
- \`csv.writer(file_handle, delimiter=',')\`:
  * \`writer.writerow(1d_list)\`: Writes a single record row.
  * \`writer.writerows(2d_nested_list)\`: Writes multiple rows.
- \`csv.reader(file_handle, delimiter=',')\`: Returns an iterable object yielding each row as a **list of strings**.
- **Standard CSV Template:**
  \`\`\`python
  import csv

  def create_csv():
      with open("STAFF.CSV", "w", newline='') as f:
          writer = csv.writer(f)
          writer.writerow(["EmpId", "Name", "Salary"])
          writer.writerow([101, "Aarav", 85000])
          writer.writerow([102, "Diya", 92000])

  def read_csv():
      with open("STAFF.CSV", "r") as f:
          reader = csv.reader(f)
          for row in reader:
              print(row[0], row[1], row[2])
  \`\`\`

**COMMON MISTAKE:**
- Forgetting \`newline=''\` when opening CSV files in write mode, resulting in blank alternate lines.
- Not enclosing \`pickle.load()\` in a \`try-except EOFError\` loop, which causes program crashes when reading binary files.`;
  }

  // CHAPTER 4: Data Structures (Stack)
  if (
    id === 'cs4' ||
    (!id && (
      chapterLower === 'data structures (stack)' ||
      chapterLower.includes('stack') ||
      chapterLower.includes('data structure') ||
      chapterLower === 'cs4'
    ))
  ) {
    return `TOPIC: Chapter 4: Data Structures (Stacks in Python)
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. Stack Concept & Principles:**
**DEFINITION:** A Stack is a linear data structure that operates strictly on the **LIFO (Last In First Out)** or **FILO (First In Last Out)** principle.
- All insertions and deletions take place at only **ONE END**, termed the **TOP** of the stack.
- Real-world analogies: Stack of plates in cafeteria, stack of coins, browser back history, undo/redo mechanism in text editors.
- **Fundamental Stack Operations:**
  1. **Push:** Inserting an element onto the TOP of the stack.
  2. **Pop:** Deleting and returning the topmost element from the stack.
  3. **Peek / Top:** Examining the topmost element without removing it.
  4. **IsEmpty:** Determining whether the stack has zero elements.
  5. **Display / Traversal:** Printing stack elements starting from TOP down to bottom.
- **Critical Boundary Conditions:**
  * **Underflow:** Attempting to perform a Pop or Peek operation on an empty stack (\`len(stk) == 0\`).
  * **Overflow:** Attempting to Push an item into a completely full stack (relevant in fixed-size arrays; Python lists expand dynamically, so overflow only occurs upon device memory exhaustion).

**2. Complete Python Implementation of Stack using Lists:**
\`\`\`python
# Stack Implementation using Python List

def isEmpty(stk):
    return len(stk) == 0

def Push(stk, item):
    stk.append(item)
    print(f"Pushed {item}. Top is now index {len(stk) - 1}")

def Pop(stk):
    if isEmpty(stk):
        print("Stack Underflow! Stack is completely empty.")
        return None
    else:
        return stk.pop()  # Removes and returns the last element (TOP)

def Peek(stk):
    if isEmpty(stk):
        print("Stack is empty!")
        return None
    else:
        return stk[-1]  # Last element represents TOP

def Display(stk):
    if isEmpty(stk):
        print("Stack is empty!")
    else:
        print("Stack from TOP to BOTTOM:")
        for i in range(len(stk) - 1, -1, -1):
            print(stk[i])
\`\`\`

**3. Standard Board Exam Problem Patterns:**
- **Pattern 1: Conditional Push from Dictionary / List of Tuples:**
  Given a dictionary of books \`{"B101": ["Python Core", 450], "B102": ["Data Mining", 250]}\`, write a function to push book titles having price > 300 onto a stack.
  \`\`\`python
  def Push_Book(books_dict, stk):
      for b_id, details in books_dict.items():
          if details[1] > 300:
              stk.append(details[0])
  \`\`\`

- **Pattern 2: Pop All Elements Until Underflow:**
  Write a function to pop and display all items from the stack until it is empty, handling underflow gracefully.
  \`\`\`python
  def Pop_All(stk):
      while not isEmpty(stk):
          item = stk.pop()
          print("Popped item:", item)
      print("Stack Underflow achieved.")
  \`\`\`

**COMMON MISTAKE:**
- Popping from the beginning: Calling \`stk.pop(0)\` violates the LIFO principle! In a Python list implementation, the Top of the stack is the **end of the list** (\`stk[-1]\`), so popping must be \`stk.pop()\` without arguments.
- Failing to check \`isEmpty(stk)\` before popping, leading to an uncaught \`IndexError: pop from empty list\`.`;
  }

  return null;
}
