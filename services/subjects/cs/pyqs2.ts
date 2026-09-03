// services/subjects/cs/pyqs2.ts
// Unit 2: Computer Networks & Unit 3: SQL & Python-MySQL Connectivity Solved Board PYQs
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getCSPart2PYQs(chapterLower: string): string | null {
  // FULL REVISION / MASTER PYQ BANK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'cs_all'
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

  // UNIT 2: Computer Networks
  if (
    chapterLower.includes('network') ||
    chapterLower.includes('communication') ||
    chapterLower.includes('internet') ||
    chapterLower === 'cs4'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)] Which of the following transmission media works on the principle of Total Internal Reflection (TIR) and is completely immune to Electromagnetic Interference (EMI)?
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
- Protocol used for **sending (pushing) emails** from an email client to the outgoing mail server, and for transferring emails between mail transfer agents (MTAs) across the Internet. Operates by default on TCP port 25 or 587.
**(b) POP3 (Post Office Protocol Version 3):**
- Protocol used by email clients to **retrieve and download emails** from a remote mail server to a local client device. Once downloaded, emails are typically deleted from the server. Operates by default on TCP port 110.
**CBSE Marking Rubric:**
- 1 Mark for SMTP expansion and sending function.
- 1 Mark for POP3 expansion and retrieval function.`;
  }

  // UNIT 3: Database Management & SQL
  if (
    chapterLower.includes('database') ||
    chapterLower.includes('sql') ||
    chapterLower.includes('dbms') ||
    chapterLower.includes('rdbms') ||
    chapterLower === 'cs5'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (91)] Consider a table \`STUDENT\` with 6 columns and 25 rows. If 5 new rows are inserted and 1 column is deleted, the new Degree and Cardinality of the table will be:
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

QUESTION: Q2. [4 Marks SQL Query Problem, CBSE 2024 (91)]
Consider the following table \`TEACHER\`:
| TID | TName | Department | Salary | DateOfJoin | Gender |
|---|---|---|---|---|---|
| T101 | Ananya Sharma | Computer | 65000 | 2018-05-12 | F |
| T102 | Rajesh Verma | Physics | 72000 | 2015-08-20 | M |
| T103 | Sunita Mehra | Chemistry | 58000 | 2019-11-15 | F |
| T104 | Vikram Singh | Computer | 80000 | 2012-03-10 | M |
| T105 | Kavita Rao | Mathematics | 62000 | 2020-01-25 | F |
| T106 | Alok Nath | Physics | 54000 | 2021-07-18 | M |

Write SQL queries for the following:
(a) Display TName, Department, and Salary of all teachers whose Salary is between 60000 and 75000 (inclusive).
(b) Display the Department and the average salary of teachers in each department having more than 1 teacher.
(c) Display the details of all teachers whose TName ends with the letter 'a'.
(d) Increase the salary of all teachers in the 'Computer' department by 10%.
SOLUTION:
**(a) Query for Salary Range:**
\`\`\`sql
SELECT TName, Department, Salary
FROM TEACHER
WHERE Salary BETWEEN 60000 AND 75000;
\`\`\`
*(Alternative: \`WHERE Salary >= 60000 AND Salary <= 75000;\`)*

**(b) Query for Department Average Salary with Group Filter:**
\`\`\`sql
SELECT Department, AVG(Salary) AS Avg_Salary
FROM TEACHER
GROUP BY Department
HAVING COUNT(*) > 1;
\`\`\`

**(c) Query for Pattern Matching:**
\`\`\`sql
SELECT *
FROM TEACHER
WHERE TName LIKE '%a';
\`\`\`

**(d) DML Update Query:**
\`\`\`sql
UPDATE TEACHER
SET Salary = Salary * 1.10
WHERE Department = 'Computer';
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for query (a) using BETWEEN or >= AND <=.
- 1 Mark for query (b) using GROUP BY Department HAVING COUNT(*) > 1.
- 1 Mark for query (c) using LIKE '%a'.
- 1 Mark for query (d) using UPDATE ... SET Salary = Salary * 1.10 WHERE ...

QUESTION: Q3. [3 Marks Python-MySQL Connectivity, CBSE 2023 (Delhi)]
Write a Python program using \`mysql.connector\` to connect to a MySQL database \`"CompanyDB"\` on localhost with user \`"root"\` and password \`"admin123"\`. The program should query and display the \`EmpId\`, \`EmpName\`, and \`Designation\` of all employees whose \`Salary > 50000\` from table \`EMPLOYEE\`.
SOLUTION:
\`\`\`python
import mysql.connector

def fetch_high_earners():
    try:
        # Step 1: Connect to MySQL Server
        con = mysql.connector.connect(
            host="localhost",
            user="root",
            password="admin123",
            database="CompanyDB"
        )
        
        if con.is_connected():
            cursor = con.cursor()
            
            # Step 2: Execute SQL Query
            query = "SELECT EmpId, EmpName, Designation, Salary FROM EMPLOYEE WHERE Salary > 50000;"
            cursor.execute(query)
            
            # Step 3: Fetch and Display records
            records = cursor.fetchall()
            
            print(f"{'EmpId':<8} {'EmpName':<20} {'Designation':<20} {'Salary':<10}")
            print("=" * 60)
            for row in records:
                print(f"{row[0]:<8} {row[1]:<20} {row[2]:<20} Rs.{row[3]:<10}")
            print("=" * 60)
            print(f"Total eligible employees: {cursor.rowcount}")
            
            # Step 4: Clean up
            cursor.close()
            con.close()
            
    except mysql.connector.Error as err:
        print("Database Error:", err)

if __name__ == "__main__":
    fetch_high_earners()
\`\`\`
**CBSE Marking Rubric:**
- 0.5 Mark for \`import mysql.connector\` and \`mysql.connector.connect()\`.
- 0.5 Mark for creating cursor with \`con.cursor()\`.
- 1 Mark for executing SQL \`SELECT ... WHERE Salary > 50000\`.
- 1 Mark for \`cursor.fetchall()\` and iterating through records to display.
INSIGHT: For read queries (SELECT), \`con.commit()\` is not required, but \`con.close()\` is good practice.`;
  }

  return null;
}
