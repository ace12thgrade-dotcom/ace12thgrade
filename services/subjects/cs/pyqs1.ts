// services/subjects/cs/pyqs1.ts
// Unit 1 Solved Board PYQs & Question Bank
// Python Review, Functions, File Handling (Text, Binary, CSV), Stacks
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getCSPart1PYQs(chapterLower: string): string | null {
  // UNIT 1: Python Review, Functions & Exception Handling
  if (
    chapterLower.includes('python') ||
    chapterLower.includes('function') ||
    chapterLower.includes('exception') ||
    chapterLower === 'cs1' ||
    chapterLower.includes('computational thinking') ||
    chapterLower.includes('review of python')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)] Consider the following Python code snippet:
\`\`\`python
tup = (10, 20, 30, 40)
tup[1] = 25
print(tup)
\`\`\`
Which of the following will be the output?
(A) (10, 25, 30, 40)
(B) (10, 20, 25, 30, 40)
(C) TypeError: 'tuple' object does not support item assignment
(D) ValueError: cannot modify tuple
SOLUTION:
**Correct Answer:** (C) TypeError: 'tuple' object does not support item assignment
**Notebook Explanation:**
In Python, tuples are **immutable** sequence types. Once initialized, their elements cannot be changed, replaced, added, or deleted in-place. Attempting to assign a new value to \`tup[1]\` directly violates immutability and raises a \`TypeError\`.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [2 Marks Output Prediction, CBSE 2023 (Delhi)] Find and write the output of the following Python code:
\`\`\`python
def ChangeVal(M, N=40):
    M = M + N
    N = M - N
    print(M, "#", N)
    return M

A = 20
B = 10
B = ChangeVal(A, B)
print(A, "$", B)
A = ChangeVal(B)
print(A, "$", B)
\`\`\`
SOLUTION:
**Dry Run Execution Table (Accurate Book Table Format):**
| Step | Statement Executed | Var A | Var B | Param M | Param N | Action / Output Printed | Returned Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Initial assignment | 20 | 10 | - | - | Initial state | - |
| 2 | Call ChangeVal(A, B) | 20 | 10 | 20 | 10 | Function entered with M=20, N=10 | - |
| 3 | M = M + N (20 + 10) | 20 | 10 | 30 | 10 | M updated to 30 | - |
| 4 | N = M - N (30 - 10) | 20 | 10 | 30 | 20 | N updated to 20 | - |
| 5 | print(M, "#", N) | 20 | 10 | 30 | 20 | **Prints: 30 # 20** | - |
| 6 | return M (returns 30) | 20 | **30** | - | - | Returned 30 assigned to B | 30 |
| 7 | print(A, "$", B) | 20 | 30 | - | - | **Prints: 20 $ 30** | - |
| 8 | Call ChangeVal(B) | 20 | 30 | 30 | **40** | Default argument N=40 used | - |
| 9 | M = M + N (30 + 40) | 20 | 30 | 70 | 40 | M updated to 70 | - |
| 10 | N = M - N (70 - 40) | 20 | 30 | 70 | 30 | N updated to 30 | - |
| 11 | print(M, "#", N) | 20 | 30 | 70 | 30 | **Prints: 70 # 30** | - |
| 12 | return M (returns 70) | **70** | 30 | - | - | Returned 70 assigned to A | 70 |
| 13 | print(A, "$", B) | 70 | 30 | - | - | **Prints: 70 $ 30** | - |

**Final Output:**
\`\`\`
30 # 20
20 $ 30
70 # 30
70 $ 30
\`\`\`
**CBSE Marking Rubric:**
- 0.5 Mark for each correct output line.
INSIGHT: Default argument N=40 is used in the second function call because only one argument was passed.

QUESTION: Q3. [3 Marks, CBSE 2024 (91)] Write a function \`count_vowels_words()\` in Python that reads a text file named \`"STORY.TXT"\` and counts the number of words that start with a vowel (A, E, I, O, U or a, e, i, o, u).
SOLUTION:
\`\`\`python
def count_vowels_words():
    vowels = ('A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u')
    count = 0
    try:
        with open("STORY.TXT", "r") as f:
            for line in f:
                words = line.split()
                for word in words:
                    if word.startswith(vowels):
                        count += 1
        print("Number of words starting with a vowel:", count)
    except FileNotFoundError:
        print("Error: STORY.TXT file does not exist.")
\`\`\`
**Dry Run:**
If file contains: \`"An apple a day keeps the doctor away"\`
- Words starting with vowel: \`"An", "apple", "a", "away"\`
- Output: \`Number of words starting with a vowel: 4\`
**CBSE Marking Rubric:**
- 1 Mark for opening file correctly in read mode (or with open).
- 1 Mark for reading lines, splitting into words, and iterating.
- 1 Mark for checking \`word[0].lower() in 'aeiou'\` or \`word.startswith(vowels)\` and displaying count.
INSIGHT: \`startswith()\` accepts a tuple of prefixes, which makes the code concise and Pythonic.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)] Which of the following functions in Python returns the current position of the file pointer within a file?
(A) f.seek()
(B) f.tell()
(C) f.read()
(D) f.offset()
SOLUTION:
**Correct Answer:** (B) f.tell()
**Notebook Explanation:**
- \`f.tell()\`: Returns an integer representing the current byte offset position of the file pointer from the beginning of the file.
- \`f.seek(offset, whence)\`: Moves the file pointer to a new position.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [3 Marks Binary File Handling, CBSE 2024 (91)] A binary file \`"BOOK.DAT"\` has structure \`[BookNo, BookName, Author, Price]\`. Write a user-defined function in Python \`search_book(bno)\` that searches for a book with \`BookNo\` equal to \`bno\` and displays its details. If not found, display \`"Book not found"\`.
SOLUTION:
\`\`\`python
import pickle

def search_book(bno):
    found = False
    try:
        with open("BOOK.DAT", "rb") as f:
            while True:
                record = pickle.load(f)  # record: [BookNo, BookName, Author, Price]
                if record[0] == bno:
                    print("Book Found!")
                    print("Book Number :", record[0])
                    print("Book Title  :", record[1])
                    print("Author Name :", record[2])
                    print("Price (Rs.) :", record[3])
                    found = True
                    break
    except EOFError:
        pass  # Normal end of file reached
    except FileNotFoundError:
        print("Error: BOOK.DAT file does not exist.")
        return

    if not found:
        print("Book not found.")
\`\`\`
**CBSE Marking Rubric:**
- 0.5 Mark for importing \`pickle\` and opening \`"BOOK.DAT"\` in \`"rb"\` mode.
- 1 Mark for \`try-except EOFError\` loop reading with \`pickle.load(f)\`.
- 1 Mark for comparing \`record[0] == bno\` and displaying record details.
- 0.5 Mark for handling \`found == False\` and displaying appropriate message.
INSIGHT: Always use \`except EOFError:\` to catch the end of file gracefully when using \`pickle.load()\`.

QUESTION: Q3. [3 Marks CSV File Handling, CBSE 2023 (Delhi)] Write a user-defined function \`read_csv_records()\` in Python to read a CSV file \`"STUDENT.CSV"\` having fields \`[RollNo, Name, Marks, Grade]\` and display the records of all students who have scored \`Marks >= 90\`. Also display the total count of such students.
SOLUTION:
\`\`\`python
import csv

def read_csv_records():
    count = 0
    try:
        with open("STUDENT.CSV", "r") as f:
            reader = csv.reader(f)
            header = next(reader)  # skip header row if present
            print("Students scoring 90 or more marks:")
            print(f"{'RollNo':<8} {'Name':<15} {'Marks':<8} {'Grade':<5}")
            print("-" * 38)
            for row in reader:
                # row: ['RollNo', 'Name', 'Marks', 'Grade']
                if len(row) >= 4:
                    marks = float(row[2])
                    if marks >= 90:
                        print(f"{row[0]:<8} {row[1]:<15} {row[2]:<8} {row[3]:<5}")
                        count += 1
            print("-" * 38)
            print("Total meritorious students:", count)
    except FileNotFoundError:
        print("Error: STUDENT.CSV file does not exist.")
\`\`\`
**CBSE Marking Rubric:**
- 0.5 Mark for importing \`csv\` and opening file in read mode.
- 1 Mark for \`csv.reader()\` and iterating through rows.
- 1 Mark for converting \`marks\` to numeric (\`float(row[2])\`) and checking condition \`>= 90\`.
- 0.5 Mark for updating and printing the count.
INSIGHT: In CSV files, all values are read as strings, so \`float(row[2])\` or \`int(row[2])\` is compulsory before numerical comparison.`;
  }

  // UNIT 1: Data Structures - Stacks
  if (
    chapterLower.includes('stack') ||
    chapterLower.includes('data structure') ||
    chapterLower === 'cs3'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)] The operation of inserting an element into a stack and removing an element from a stack is respectively called:
(A) Enqueue and Dequeue
(B) Push and Pop
(C) Insert and Delete
(D) Add and Remove
SOLUTION:
**Correct Answer:** (B) Push and Pop
**Notebook Explanation:**
In computer science, a Stack is a LIFO (Last-In-First-Out) data structure where:
- Inserting an item at the top is called **Push**.
- Deleting an item from the top is called **Pop**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Differentiate between Stack Overflow and Stack Underflow with respect to stack operations.
SOLUTION:
| Feature | Stack Overflow | Stack Underflow |
|---|---|---|
| **Definition** | The error condition that occurs when attempting to **Push** an element into a stack that is already full to maximum capacity. | The error condition that occurs when attempting to **Pop** or peek an element from an **Empty Stack** (size = 0). |
| **Occurrence in Python** | In Python dynamic lists, memory is dynamically allocated, so overflow occurs only when physical RAM memory is exhausted. | Frequently occurs in Python if \`stk.pop()\` is executed on an empty list \`[]\`, raising an \`IndexError\`. |
**CBSE Marking Rubric:**
- 1 Mark for defining Overflow (pushing into full stack).
- 1 Mark for defining Underflow (popping from empty stack).

QUESTION: Q3. [5 Marks Core Stack Board Problem, CBSE 2024 (91)]
Write user-defined functions in Python to perform the following operations on a stack:
(a) \`Push_Customer(Cust_Stack, Customer_Record)\`: Takes a stack \`Cust_Stack\` and a list \`Customer_Record\` containing \`[Cust_Id, Cust_Name, City, Bill_Amount]\`. The function should push only those customers onto \`Cust_Stack\` whose \`City\` is \`"Delhi"\` and \`Bill_Amount > 5000\`.
(b) \`Pop_Customer(Cust_Stack)\`: Pops and displays the top customer record from \`Cust_Stack\`. If the stack is empty, it should display \`"Stack Underflow: No Customer to display"\`.
SOLUTION:
\`\`\`python
# Stack Implementation for Customer Records

def Push_Customer(Cust_Stack, Customer_Record):
    """
    Cust_Stack: list acting as the stack
    Customer_Record: [Cust_Id, Cust_Name, City, Bill_Amount]
    """
    cust_id, cust_name, city, bill_amount = Customer_Record
    
    # Check eligibility conditions
    if city.strip().lower() == "delhi" and bill_amount > 5000:
        Cust_Stack.append(Customer_Record)
        print(f"Customer {cust_name} (ID: {cust_id}) successfully pushed onto stack.")
    else:
        print(f"Customer {cust_name} does not meet criteria (City: {city}, Bill: {bill_amount}).")

def Pop_Customer(Cust_Stack):
    """
    Pops and displays the top record from Cust_Stack.
    Checks underflow condition first.
    """
    if len(Cust_Stack) == 0:
        print("Stack Underflow: No Customer to display.")
        return None
    else:
        popped_cust = Cust_Stack.pop()
        print("--- Popped Customer Details ---")
        print("Customer ID  :", popped_cust[0])
        print("Customer Name:", popped_cust[1])
        print("City         :", popped_cust[2])
        print("Bill Amount  : Rs.", popped_cust[3])
        return popped_cust

# Example Driver Code for Testing:
if __name__ == "__main__":
    my_stack = []
    
    customers = [
        [101, "Rohit Sharma", "Delhi", 7200],
        [102, "Virat Kohli", "Mumbai", 9500],
        [103, "Shubman Gill", "Delhi", 4200],
        [104, "KL Rahul", "Delhi", 8100]
    ]
    
    print("=== Pushing Eligible Records ===")
    for c in customers:
        Push_Customer(my_stack, c)
        
    print("\\n=== Popping Records ===")
    Pop_Customer(my_stack)
    Pop_Customer(my_stack)
    Pop_Customer(my_stack)  # Triggering underflow
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for \`Push_Customer\` header and parameter unpacking.
- 1.5 Marks for checking condition (\`city == 'Delhi' and bill_amount > 5000\`) and calling \`Cust_Stack.append()\`.
- 1 Mark for \`Pop_Customer\` checking \`len(Cust_Stack) == 0\` and printing Underflow message.
- 1.5 Marks for calling \`Cust_Stack.pop()\` and displaying popped customer record details.
INSIGHT: Notice \`append()\` pushes onto top and \`pop()\` removes from top without parameters.`;
  }

  return null;
}
