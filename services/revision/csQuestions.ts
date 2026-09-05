// services/revision/csQuestions.ts
// CBSE Class 12 Computer Science (Python & SQL) Full Subject Revision Question Bank (Complete Syllabus)

import { RevisionQuestion } from './types.ts';

export const csCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Python Coding & Output Questions',
  'File Handling (Text, Binary, CSV)',
  'Data Structures (Stack Operations)',
  'SQL Queries & Table Constraints',
  'Computer Networks & Case Study',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const csQuestions: RevisionQuestion[] = [
  // 1. Python File Handling - Binary Files (pickle) / 3-Mark
  {
    id: 'cs-q1',
    questionNumber: 1,
    subjectId: 'computer_science',
    chapterTitle: 'File Handling in Python',
    chapterNumber: 2,
    category: 'File Handling (Text, Binary, CSV)',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2023, 2020',
    question: `A binary file 'STUDENT.DAT' contains records stored as a list of dictionaries with structure: {'RollNo': int, 'Name': str, 'Marks': float}.\nWrite a Python function CountHighScore() that reads the file 'STUDENT.DAT' and counts and displays the records of all students who scored Marks greater than or equal to 90. The function should also display the total count of such high-scoring students. Handle EOFError appropriately.`,
    answer: {
      finalAnswer: 'Function reads STUDENT.DAT using pickle.load() inside a try-except EOFError loop and prints matching records with total count.',
      formulaOrConcept: `• Binary file module: import pickle\n• Loading objects: pickle.load(file_object)\n• End of file handling: try ... except EOFError: pass`,
      solution: `Python Program Code:

\`\`\`python
import pickle

def CountHighScore():
    count = 0
    try:
        with open("STUDENT.DAT", "rb") as f:
            print(f"{'RollNo':<10}{'Name':<20}{'Marks':<10}")
            print("-" * 40)
            while True:
                try:
                    record = pickle.load(f)
                    if record['Marks'] >= 90:
                        print(f"{record['RollNo']:<10}{record['Name']:<20}{record['Marks']:<10}")
                        count += 1
                except EOFError:
                    break
    except FileNotFoundError:
        print("Error: The file 'STUDENT.DAT' does not exist.")
        return

    print("-" * 40)
    print(f"Total students with 90% or above marks: {count}")
\`\`\`

Explanation:
1. 'STUDENT.DAT' is opened in read-binary mode ("rb") using the \`with\` statement to guarantee proper file closure.
2. \`pickle.load(f)\` reads one serialized object at a time inside an infinite \`while True\` loop.
3. The conditional check \`if record['Marks'] >= 90:\` filters students scoring 90 or more and increments \`count\`.
4. When the end of the file is reached, \`pickle.load()\` raises an \`EOFError\`, which is caught by the inner \`except EOFError:\` block to terminate the loop cleanly.`,
      examApproach: 'Always handle EOFError when reading binary files using pickle in CBSE exams. Forgetting EOFError loses 1 mark.',
      markingPoints: [
        '0.5 Mark: Correct import of pickle module and opening file in "rb" mode.',
        '1 Mark: Correct while loop with pickle.load() and EOFError handling.',
        '1 Mark: Filtering record[\'Marks\'] >= 90 and updating count.',
        '0.5 Mark: Formatted output and printing final count.'
      ]
    }
  },

  // 2. Data Structures - Stack Implementation in Python / 3-Mark
  {
    id: 'cs-q2',
    questionNumber: 2,
    subjectId: 'computer_science',
    chapterTitle: 'Data Structures (Stack)',
    chapterNumber: 3,
    category: 'Data Structures (Stack Operations)',
    label: 'High Priority',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `Write two user-defined functions in Python:\n(a) PushCustomer(Customer_List) - to take a list of customer details where each element is a list of [Cust_ID, Name, BillAmount], and push only those customers into a stack named HighSpenders whose BillAmount is greater than 5000.\n(b) PopCustomer(HighSpenders) - to pop and display the top customer from the stack. If the stack is empty, display "Stack Underflow / Empty".`,
    answer: {
      finalAnswer: 'PushCustomer appends [Cust_ID, Name, BillAmount] with BillAmount > 5000; PopCustomer uses list.pop() with underflow check.',
      formulaOrConcept: `• Stack follows LIFO (Last In First Out)\n• Push: stack.append(item)\n• Pop: stack.pop() with if len(stack) == 0: underflow check`,
      solution: `Python Program Code:

\`\`\`python
# Stack Implementation using Python List

def PushCustomer(Customer_List, HighSpenders):
    for cust in Customer_List:
        # cust is [Cust_ID, Name, BillAmount]
        if cust[2] > 5000:
            HighSpenders.append(cust)
            print(f"Pushed to Stack: {cust[1]} (Bill: {cust[2]})")

def PopCustomer(HighSpenders):
    if len(HighSpenders) == 0:
        print("Stack Underflow / Empty")
        return None
    else:
        removed_cust = HighSpenders.pop()
        print(f"Popped Customer: ID={removed_cust[0]}, Name={removed_cust[1]}, Amount={removed_cust[2]}")
        return removed_cust

# Example Driver Code
if __name__ == "__main__":
    customers = [
        [101, "Aarav", 4500],
        [102, "Diya", 8200],
        [103, "Kabir", 3100],
        [104, "Ananya", 12000]
    ]
    HighSpenders = []
    
    print("Pushing High Spenders:")
    PushCustomer(customers, HighSpenders)
    
    print("\\nPopping from Stack:")
    PopCustomer(HighSpenders)
    PopCustomer(HighSpenders)
    PopCustomer(HighSpenders)  # Should show Underflow
\`\`\`

Key Points:
• In Python, a dynamic list serves as a stack.
• \`append()\` pushes elements to top of stack.
• \`pop()\` removes elements from top of stack.
• The underflow check \`if len(stack) == 0:\` is mandatory before calling \`pop()\`.`,
      examApproach: 'Always write the Underflow check for pop operations. Without "if len(stk) == 0", marks are automatically lost.',
      markingPoints: [
        '1.5 Marks: Correct Push function with condition check cust[2] > 5000 and append().',
        '1.5 Marks: Correct Pop function with stack empty / underflow check and pop() statement.'
      ]
    }
  },

  // 3. Database Management - SQL Queries & DDL/DML / 5-Mark
  {
    id: 'cs-q3',
    questionNumber: 3,
    subjectId: 'computer_science',
    chapterTitle: 'Database Management & SQL',
    chapterNumber: 4,
    category: 'SQL Queries & Table Constraints',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2022, 2019',
    question: `Consider the following table 'EMPLOYEE':\n\nEmpId | EmpName   | Department | Salary | JoinDate   | City\nE101  | Rajesh    | IT         | 75000  | 2020-03-15 | Delhi\nE102  | Simran    | HR         | 48000  | 2019-07-20 | Mumbai\nE103  | Amit      | Finance    | 62000  | 2021-01-10 | Delhi\nE104  | Priya     | IT         | 82000  | 2018-11-25 | Bangalore\nE105  | Rohan     | HR         | 51000  | 2022-06-01 | Delhi\nE106  | Neha      | Marketing  | 45000  | 2021-09-14 | Mumbai\n\nWrite SQL queries for the following:\n(i) Display EmpName and Salary of all employees in the IT department who earn more than 70000.\n(ii) Display the Department and the average salary in each department, but only for departments having more than 1 employee.\n(iii) Display details of all employees who joined in the year 2021, ordered by Salary in descending order.\n(iv) Increase the Salary of all employees living in 'Mumbai' by 10%.\n(v) Write the SQL query to add a new column 'Email' of type VARCHAR(50) to the EMPLOYEE table.`,
    answer: {
      finalAnswer: 'Queries using SELECT with WHERE, GROUP BY with HAVING, ORDER BY DESC, UPDATE, and ALTER TABLE ADD.',
      formulaOrConcept: `• Filtering rows: WHERE condition\n• Grouping & group filtering: GROUP BY col HAVING condition\n• Sorting: ORDER BY col DESC\n• Modifying data: UPDATE table SET col = val WHERE condition\n• Modifying schema: ALTER TABLE table ADD col datatype`,
      solution: `SQL Queries:

(i) Display IT employees earning > 70000:
\`\`\`sql
SELECT EmpName, Salary 
FROM EMPLOYEE 
WHERE Department = 'IT' AND Salary > 70000;
\`\`\`

(ii) Department and average salary for departments with > 1 employee:
\`\`\`sql
SELECT Department, AVG(Salary) AS AvgSalary 
FROM EMPLOYEE 
GROUP BY Department 
HAVING COUNT(*) > 1;
\`\`\`

(iii) Employees who joined in year 2021, sorted by Salary descending:
\`\`\`sql
SELECT * 
FROM EMPLOYEE 
WHERE JoinDate BETWEEN '2021-01-01' AND '2021-12-31' 
ORDER BY Salary DESC;
-- Alternative using YEAR() function:
-- WHERE YEAR(JoinDate) = 2021 ORDER BY Salary DESC;
\`\`\`

(iv) Increase salary by 10% for Mumbai employees:
\`\`\`sql
UPDATE EMPLOYEE 
SET Salary = Salary + (0.10 * Salary) 
WHERE City = 'Mumbai';
-- Or: SET Salary = Salary * 1.10 WHERE City = 'Mumbai';
\`\`\`

(v) Add new column 'Email':
\`\`\`sql
ALTER TABLE EMPLOYEE 
ADD Email VARCHAR(50);
\`\`\``,
      examApproach: 'Crucial Distinction: Use HAVING with GROUP BY for aggregate conditions (COUNT > 1). Never use WHERE for aggregate functions like AVG or COUNT!',
      markingPoints: [
        '1 Mark: Correct SELECT with WHERE and AND operator.',
        '1 Mark: Correct GROUP BY with HAVING COUNT(*) > 1 and AVG(Salary).',
        '1 Mark: Correct date filter and ORDER BY Salary DESC.',
        '1 Mark: Correct UPDATE syntax with SET and WHERE.',
        '1 Mark: Correct DDL command ALTER TABLE ... ADD Email VARCHAR(50).'
      ]
    }
  },

  // 4. Computer Networks - Case Study / 5-Mark
  {
    id: 'cs-q4',
    questionNumber: 4,
    subjectId: 'computer_science',
    chapterTitle: 'Computer Networks',
    chapterNumber: 5,
    category: 'Computer Networks & Case Study',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023 (Delhi), 2020',
    question: `TechGlobal Corp is setting up its network across 4 blocks in a campus: Admin Block, Finance Block, Tech Block, and HR Block.\n\nBlock-to-block distances:\n• Admin to Finance: 60 m\n• Admin to Tech: 150 m\n• Admin to HR: 80 m\n• Finance to Tech: 90 m\n• Finance to HR: 120 m\n• Tech to HR: 180 m\n\nNumber of Computers in each block:\n• Admin Block: 120\n• Finance Block: 40\n• Tech Block: 50\n• HR Block: 25\n\nQuestions:\n(a) Suggest the most suitable block to house the Server and justify your choice.\n(b) Suggest the best cable layout / network topology for connecting the blocks.\n(c) Which network device should be placed in each block to connect all computers within that block?\n(d) Is a repeater required between Admin Block and Tech Block? Justify.\n(e) The company wants to connect its Delhi head office with its branch office in London for live video conferencing. Suggest the most suitable transmission medium.`,
    answer: {
      finalAnswer: '(a) Admin Block (80-20 Rule); (b) Star Topology centered at Admin Block; (c) Switch/Hub; (d) Yes, distance is 150 m (> 100 m Ethernet limit); (e) Satellite / Fiber Optic submarine link.',
      formulaOrConcept: `• Server placement: 80-20 Rule (Block with maximum computers)\n• Topology: Star topology centered at server block minimizes total cable and network traffic.\n• Repeater rule: Ethernet (UTP) signals attenuate beyond 70-100 meters.\n• Connecting devices: Switch/Hub inside each block.`,
      solution: `(a) Server Placement:
• Suggested Block: Admin Block.
• Justification: According to the 80-20 rule of network architecture, the server should be placed in the block having the maximum number of computers (Admin Block has 120 computers). This minimizes network traffic congestion across inter-block cables.

(b) Cable Layout & Topology:
• Suggested Topology: Star Topology (or Bus-Star Hybrid).
• Layout: Connect all blocks directly to the central Admin Block (where the server is located):
  - Admin to Finance: 60 m
  - Admin to HR: 80 m
  - Admin to Tech: 150 m
• Total cable length = 60 + 80 + 150 = 290 meters (most efficient and fault-tolerant).

(c) Network Device for Each Block:
• Switch (or Hub).
• Justification: A Switch connects multiple local computers in a LAN within each block and intelligently directs data packets based on MAC addresses.

(d) Repeater Requirement:
• Yes, a Repeater is recommended between Admin Block and Tech Block.
• Justification: The distance between Admin and Tech Block is 150 meters. Standard copper twisted pair (UTP/STP) Ethernet cables suffer from signal attenuation and packet degradation beyond 100 meters. A repeater regenerates and amplifies signals over long runs.

(e) Transmission Medium for Delhi to London Connection:
• Satellite Communication (or Submarine Optical Fiber Cable via WAN/Internet).
• Justification: Intercontinental live video conferencing over thousands of kilometers requires high-bandwidth international broadband links via geostationary communication satellites or transatlantic fiber-optic links.`,
      examApproach: 'State the 80-20 rule explicitly when choosing the server location to secure the justification mark.',
      markingPoints: [
        '1 Mark: Server in Admin Block with 80-20 maximum computer justification.',
        '1 Mark: Star topology centered at Admin block with cable length calculation.',
        '1 Mark: Recommending Switch/Hub for connecting block computers.',
        '1 Mark: Repeater needed for Admin-Tech (150 m > 100 m) with attenuation justification.',
        '1 Mark: Recommending Satellite / Submarine Optical Fiber for international link.'
      ]
    }
  },

  // 5. Python Output Question / 2-Mark
  {
    id: 'cs-q5',
    questionNumber: 5,
    subjectId: 'computer_science',
    chapterTitle: 'Python Revision Tour',
    chapterNumber: 1,
    category: 'Python Coding & Output Questions',
    label: 'Must Practice',
    marks: '2 Marks',
    yearTag: 'CBSE 2024, 2023',
    question: `Find and write the output of the following Python code:\n\n\`\`\`python
def FunChange(Text):
    NewText = ""
    for i in range(len(Text)):
        if Text[i].isupper():
            NewText += Text[i].lower()
        elif Text[i].islower():
            NewText += Text[i].upper()
        elif Text[i].isdigit():
            NewText += str(int(Text[i]) * 2)
        else:
            NewText += "#"
    return NewText

Message = "Py3.10@Board"
print(FunChange(Message))
\`\`\``,
    answer: {
      finalAnswer: 'Output is: pY6#20#bOARD',
      formulaOrConcept: `• isupper() -> converts to lower()\n• islower() -> converts to upper()\n• isdigit() -> digit converted to int, multiplied by 2, and converted back to str\n• other chars (., @) -> replaced with '#' `,
      solution: `Step-by-step trace of string "Py3.10@Board":
1. 'P' is upper -> converted to 'p'
2. 'y' is lower -> converted to 'Y'
3. '3' is digit -> int(3) * 2 = 6 -> '6'
4. '.' is symbol -> '#'
5. '1' is digit -> int(1) * 2 = 2 -> '2'
6. '0' is digit -> int(0) * 2 = 0 -> '0'
7. '@' is symbol -> '#'
8. 'B' is upper -> 'b'
9. 'o' is lower -> 'O'
10. 'a' is lower -> 'A'
11. 'r' is lower -> 'R'
12. 'd' is lower -> 'D'

Combining all characters:
pY6#20#bOARD`,
      examApproach: 'Trace each character one-by-one in rough work to avoid silly arithmetic or case mistakes.',
      markingPoints: [
        '2 Marks: Complete correct string output: pY6#20#bOARD.'
      ]
    }
  }
];
