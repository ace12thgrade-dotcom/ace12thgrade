// services/subjects/cs/pyqs2.ts
// Unit 2: Computer Networks & Unit 3: SQL & Python-MySQL Connectivity Solved Board PYQs
// Dedicated PYQs for chapters:
// - cs5: Computer Networks
// - cs6: Database Concepts
// - cs7: Structured Query Language
// - cs8: Python-SQL Interface
// - cs_rev: Full Subject Revision
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getCSPart2PYQs(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // FULL REVISION / MASTER PYQ BANK
  if (
    id === 'cs_rev' ||
    id === 'cs_all' ||
    (!id && (
      chapterLower === 'full subject revision' ||
      chapterLower.includes('full subject revision') ||
      chapterLower.includes('master revision') ||
      chapterLower === 'cs_rev'
    ))
  ) {
    return `QUESTION: Q1. [5 Marks Master Networks Case Study, CBSE 2024 (91)]
"TechNova Educational Institute" is setting up its new campus in Bengaluru with four main buildings:
- Academic Block (140 Computers)
- Administrative Block (50 Computers)
- Examination Block (30 Computers)
- Hostel Block (20 Computers)

Distances between blocks:
- Academic to Administrative: 60 m
- Academic to Examination: 120 m
- Academic to Hostel: 180 m
- Administrative to Examination: 70 m
- Administrative to Hostel: 110 m
- Examination to Hostel: 90 m

Answer the following questions based on networking principles:
(a) Suggest the most suitable building to house the SERVER with valid justification.
(b) Suggest the placement of REPEATERS and SWITCHES/HUBS with justification.
(c) Suggest the best CABLE LAYOUT (Topology) to connect all four buildings.
(d) The institute wants to connect its Bengaluru campus to its regional branch in New Delhi. Which transmission medium is best suited for this connection?
(e) Suggest a modern communication service/protocol to conduct real-time interactive video conferencing between teachers and students across branches.
SOLUTION:
**(a) Server Placement & Justification:**
- **Placement:** **Academic Block**.
- **Justification:** According to the **80-20 Rule of Networking**, the server should be placed in the building with the maximum number of computers (140 PCs). This minimizes inter-block network traffic and latency, because 80% of data traffic remains localized within the same building.

**(b) Placement of Repeaters & Switches/Hubs:**
- **Repeaters:**
  * Repeaters are required when the cable distance between two communicating buildings exceeds **70 to 100 meters** to amplify and regenerate weakened signals.
  * Therefore, repeaters should be installed on:
    1. Cable between **Academic Block and Examination Block (120 m)**.
    2. Cable between **Academic Block and Hostel Block (180 m)** (if directly connected).
- **Switches / Hubs:**
  * A **Switch** must be installed in **EVERY building (Academic, Administrative, Examination, Hostel)** to interconnect all the individual desktop computers and local devices within that building into a Local Area Network (LAN).

**(c) Cable Layout (Topology):**
- **Option 1: Star Topology (Recommended):** With **Academic Block** (housing the server) as the central hub, connected directly to Administrative (60 m), Examination (120 m), and Hostel (180 m).
- **Option 2: Bus / Distributed Tree Topology (Minimum Cable Length):**
  * Connect: Academic -> Administrative (60 m) -> Examination (70 m) -> Hostel (90 m).
  * Total cable length = 60 + 70 + 90 = **220 meters** (economical, minimal digging cost).

**(d) Long-Distance Transmission Medium (Bengaluru to New Delhi):**
- **Satellite Microwave Communication** or leased high-speed **Broadband Internet via Optical Fiber Cable (OFC)** / WAN.

**(e) Video Conferencing Service / Protocol:**
- **VoIP (Voice over Internet Protocol)** along with **WebRTC / H.323 protocol** using secure platforms like Google Meet or Zoom.
**CBSE Marking Rubric:**
- 1 Mark for (a) Academic block + 80-20 rule justification.
- 1 Mark for (b) Repeaters (>70-100m) and Switches in all 4 blocks.
- 1 Mark for (c) Star/Bus layout with diagrammatic justification.
- 1 Mark for (d) Satellite/WAN/OFC link.
- 1 Mark for (e) VoIP / WebRTC / Video conferencing.
INSIGHT: For cable layout, always calculate total length for the bus topology (e.g. 220 m) to impress examiners.`;
  }

  // CHAPTER 5: Computer Networks PYQs
  if (
    id === 'cs5' ||
    (!id && (
      chapterLower === 'computer networks' ||
      chapterLower.includes('computer networks') ||
      (chapterLower.includes('network') && !chapterLower.includes('neural')) ||
      chapterLower === 'cs5'
    ))
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)]
Which of the following transmission media works on the principle of Total Internal Reflection (TIR) and is completely immune to Electromagnetic Interference (EMI)?
(A) Twisted Pair Cable
(B) Coaxial Cable
(C) Optical Fiber Cable
(D) Radio Waves
SOLUTION:
**Correct Answer:** (C) Optical Fiber Cable (OFC)
**Notebook Explanation:**
Optical Fiber Cables use high-grade glass or silica cores to transmit data as pulses of light via Total Internal Reflection. Since data is carried as light rather than electrical current, OFC is 100% immune to electromagnetic interference, radio frequency interference, and lightning surges.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Differentiate between a Hub and a Switch.
SOLUTION:
| Feature | Hub | Switch |
|---|---|---|
| **OSI Layer** | Operates at the **Physical Layer (Layer 1)**. | Operates at the **Data Link Layer (Layer 2)**. |
| **Data Transmission** | It is a **broadcasting device**; forwards incoming data packets to **ALL connected ports**, regardless of intended recipient. | It is an **intelligent unicasting device**; inspects destination MAC addresses and forwards packets **ONLY to the target port**. |
| **Network Traffic** | High collision rate and high network traffic/congestion. | Significantly minimizes collisions and bandwidth wastage. |
**CBSE Marking Rubric:**
- 1 Mark for broadcasting vs unicasting behavior.
- 1 Mark for Layer 1 vs Layer 2 distinction.

QUESTION: Q3. [2 Marks, CBSE 2024 (91)] Expand and explain the functions of:
(a) SMTP
(b) POP3.
SOLUTION:
**(a) SMTP (Simple Mail Transfer Protocol):**
- Protocol used for **sending (pushing) emails** from an email client to the outgoing mail server, and for transferring emails between mail transfer agents across the Internet. Operates by default on TCP port 25 or 587.
**(b) POP3 (Post Office Protocol Version 3):**
- Protocol used by email clients to **retrieve and download emails** from a remote mail server to a local client device. Once downloaded, emails are typically deleted from the server. Operates by default on TCP port 110.
**CBSE Marking Rubric:**
- 1 Mark for SMTP expansion and sending function.
- 1 Mark for POP3 expansion and retrieval function.`;
  }

  // CHAPTER 6: Database Concepts PYQs
  if (
    id === 'cs6' ||
    (!id && (
      chapterLower === 'database concepts' ||
      chapterLower.includes('database concepts') ||
      chapterLower.includes('relational model') ||
      chapterLower === 'cs6'
    ))
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)]
Consider a table \`STUDENT\` with 6 columns and 25 rows. If 5 new rows are inserted and 1 column is deleted, the new Degree and Cardinality of the table will be:
(A) Degree = 5, Cardinality = 30
(B) Degree = 30, Cardinality = 5
(C) Degree = 6, Cardinality = 25
(D) Degree = 7, Cardinality = 20
SOLUTION:
**Correct Answer:** (A) Degree = 5, Cardinality = 30
**Notebook Explanation:**
1. **Degree** = Number of columns (attributes). Initial = 6.
   After deleting 1 column: New Degree = 6 - 1 = **5**.
2. **Cardinality** = Number of rows (tuples). Initial = 25.
   After inserting 5 rows: New Cardinality = 25 + 5 = **30**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)]
Explain the difference between a Candidate Key and an Alternate Key with a suitable example.
SOLUTION:
**Definitions & Contrast:**
- **Candidate Key:** Any attribute or minimal set of attributes that is uniquely capable of identifying each record in a relation. A relation may have one or more candidate keys.
- **Alternate Key:** A candidate key that is **NOT selected** as the primary key of the table.
**Concrete Example:**
Consider a table \`STUDENT(AdmNo, RollNo, Name, Email)\`:
- Both \`AdmNo\` and \`RollNo\` can uniquely identify a student; therefore, both are **Candidate Keys**.
- If the database designer selects \`AdmNo\` as the **Primary Key**, then \`RollNo\` becomes the **Alternate Key**.
**CBSE Marking Rubric:**
- 1 Mark for clear definitions of candidate vs alternate key.
- 1 Mark for illustrative relational example.

QUESTION: Q3. [2 Marks, CBSE 2024]
What is Referential Integrity? Which constraint in SQL is used to enforce it?
SOLUTION:
**Referential Integrity:**
- A database rule ensuring that relationships between tables remain consistent. It dictates that any foreign key value in a child table must match an existing primary key value in the referenced parent table, or must be NULL.
- It prevents orphaned records and accidental deletion of referenced rows.
**SQL Constraint:**
- Enforced using the **\`FOREIGN KEY ... REFERENCES parent_table(primary_key_col)\`** constraint.
**CBSE Marking Rubric:**
- 1 Mark for explaining referential consistency rule.
- 1 Mark for identifying the FOREIGN KEY REFERENCES constraint.`;
  }

  // CHAPTER 7: Structured Query Language PYQs
  if (
    id === 'cs7' ||
    (!id && (
      chapterLower === 'structured query language' ||
      chapterLower.includes('structured query language') ||
      chapterLower === 'sql' ||
      chapterLower === 'cs7'
    ))
  ) {
    return `QUESTION: Q1. [4 Marks SQL Query Problem, CBSE 2024 (91)]
Consider the following table \`TEACHER\`:
| TID | TName | Department | Salary | DateOfJoin | Gender |
|---|---|---|---|---|---|
| T101 | Ananya Sharma | Computer | 65000 | 2018-05-12 | F |
| T102 | Rajesh Verma | Physics | 72000 | 2015-08-20 | M |
| T103 | Sunita Roy | Chemistry | 68000 | 2019-11-04 | F |
| T104 | Amit Mehra | Computer | 75000 | 2014-03-15 | M |
| T105 | Priya Nair | Mathematics| 62000 | 2021-07-01 | F |

Write SQL commands for the following:
(a) To display details of all teachers whose salary is between 65000 and 72000 (both inclusive).
(b) To display the Department and average salary of each department having more than 1 teacher.
(c) To display the names of teachers whose name begins with 'A'.
(d) To increase the salary of all teachers in the 'Computer' department by 5000.
SOLUTION:
**(a) Salary Range Query:**
\`\`\`sql
SELECT * FROM TEACHER
WHERE Salary BETWEEN 65000 AND 72000;
\`\`\`

**(b) Department Summary with GROUP BY & HAVING:**
\`\`\`sql
SELECT Department, AVG(Salary)
FROM TEACHER
GROUP BY Department
HAVING COUNT(*) > 1;
\`\`\`

**(c) Pattern Matching with LIKE:**
\`\`\`sql
SELECT TName FROM TEACHER
WHERE TName LIKE 'A%';
\`\`\`

**(d) DML Update Statement:**
\`\`\`sql
UPDATE TEACHER
SET Salary = Salary + 5000
WHERE Department = 'Computer';
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for (a) using BETWEEN ... AND.
- 1 Mark for (b) GROUP BY Department with HAVING COUNT(*) > 1.
- 1 Mark for (c) WHERE TName LIKE 'A%'.
- 1 Mark for (d) UPDATE TEACHER SET ... WHERE.`;
  }

  // CHAPTER 8: Python-SQL Interface PYQs
  if (
    id === 'cs8' ||
    (!id && (
      chapterLower === 'python-sql interface' ||
      chapterLower.includes('python-sql') ||
      chapterLower.includes('python sql') ||
      chapterLower.includes('connectivity') ||
      chapterLower.includes('connector') ||
      chapterLower === 'cs8'
    ))
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024]
Which of the following methods of the cursor object returns the next single row of a query result set as a tuple, and what does it return when no more rows are available?
(A) fetchall(), empty list
(B) fetchone(), None
(C) fetchmany(), 0
(D) rowcount, -1
SOLUTION:
**Correct Answer:** (B) fetchone(), None
**Notebook Explanation:**
The \`cur.fetchone()\` method retrieves the next individual row from the active cursor result set as a Python tuple. When all records have been consumed (EOF), it returns the special singleton value \`None\`.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [3 Marks, CBSE 2024 (Delhi)]
Write a Python script using the \`mysql.connector\` module to connect to a database named \`"HOSPITAL"\` on localhost with username \`"root"\` and password \`"med123"\`. Fetch and display the \`DoctorID\`, \`DoctorName\`, and \`Specialization\` of all doctors whose specialization is \`"Cardiology"\`.
SOLUTION:
\`\`\`python
import mysql.connector

def display_cardiologists():
    try:
        # Step 1: Establish connection
        con = mysql.connector.connect(
            host="localhost",
            user="root",
            password="med123",
            database="HOSPITAL"
        )
        
        # Step 2: Create cursor
        cur = con.cursor()
        
        # Step 3: Execute query with parameterization
        sql = "SELECT DoctorID, DoctorName, Specialization FROM Doctor WHERE Specialization = %s"
        cur.execute(sql, ("Cardiology",))
        
        # Step 4: Fetch and print all results
        records = cur.fetchall()
        print("--- Cardiology Specialists ---")
        for doc in records:
            print(f"ID: {doc[0]} | Name: {doc[1]} | Spec: {doc[2]}")
            
        # Step 5: Clean up
        cur.close()
        con.close()
        
    except mysql.connector.Error as err:
        print("Database connection error:", err)

# Call function
display_cardiologists()
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for correct \`mysql.connector.connect()\` call with all 4 parameters.
- 1 Mark for \`cur.execute()\` and \`cur.fetchall()\`.
- 1 Mark for iterating fetched records and closing connection.

QUESTION: Q3. [2 Marks, CBSE 2023]
Why is \`con.commit()\` required after an \`INSERT\` or \`UPDATE\` statement in Python MySQL connectivity, but not after a \`SELECT\` statement?
SOLUTION:
**Role of con.commit():**
- In relational databases, DML operations (INSERT, UPDATE, DELETE) run within a transaction block. These changes are initially held in temporary transaction buffers.
- Calling \`con.commit()\` instructs MySQL to **permanently write (commit)** the changes to the disk database. Without \`commit()\`, all modifications are discarded when the session ends.
- In contrast, \`SELECT\` is a read-only query that does not modify stored data; therefore, no commit is necessary.
**CBSE Marking Rubric:**
- 1 Mark for explaining temporary transaction buffer vs disk write.
- 1 Mark for contrasting data modification with read-only SELECT.`;
  }

  return null;
}
