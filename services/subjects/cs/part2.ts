// services/subjects/cs/part2.ts
// Unit 2: Computer Networks & Unit 3: Database Management and Python-SQL Connectivity
// Dedicated chapters:
// - cs5: Computer Networks
// - cs6: Database Concepts
// - cs7: Structured Query Language
// - cs8: Python-SQL Interface
// - cs_rev: Full Subject Revision
// Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

export function getCSPart2Notes(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // FULL REVISION / MASTER CS REVISION BOOK
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
    return `TOPIC: CBSE Class 12 Computer Science Complete Master Revision Capsule (2026-27 Pattern)
Master Notebook Revision Book - Comprehensive high-yield synthesis covering Python syntax, File Handling templates, Stack algorithms, Network Case Study rules, SQL Master Queries, and Python-MySQL Connectivity.

**1. Python Core Syntax & File Handling Quick Review:**
- **Data Types:** Immutable (int, float, str, tuple, bool); Mutable (list, dict, set). Slicing: \`s[start:stop:step]\`.
- **Functions:** Positional, default (must be at the end), keyword arguments. Scope: LEGB rule. \`global\` keyword modifies global variables inside functions.
- **Text Files:** Modes ('r', 'w', 'a', 'r+'). Methods: \`read()\` (str), \`readline()\` (str), \`readlines()\` (list). Pointer: \`tell()\` (byte pos), \`seek(offset, whence)\`.
- **Binary Files (\`pickle\` module):** \`pickle.dump(obj, f)\` for serialization, \`pickle.load(f)\` for deserialization inside \`try-except EOFError\`.
- **CSV Files (\`csv\` module):** Open with \`newline=''\`. \`csv.writer(f)\` -> \`writerow()\` / \`writerows()\`. \`csv.reader(f)\` -> iterator of string lists.
- **Stack (LIFO):** \`stk.append(x)\` for Push; if \`len(stk) == 0: print("Underflow")\` else: \`stk.pop()\` for Pop; \`stk[-1]\` for Peek.

**2. Relational Database & SQL Master Reference:**
- **RDBMS Keys:** Primary Key (unique, non-null identifier), Candidate Key (all minimal superkeys eligible to be primary key), Alternate Key (candidate key not chosen as primary), Foreign Key (attribute referencing primary key in parent table).
- **Degree** = Number of Columns (Attributes); **Cardinality** = Number of Rows (Tuples).
- **DDL Commands:** \`CREATE TABLE\`, \`ALTER TABLE\` (ADD, MODIFY, DROP), \`DROP TABLE\`.
- **DML Commands:** \`SELECT\`, \`INSERT INTO\`, \`UPDATE ... SET\`, \`DELETE FROM\`.
- **Clauses Execution Order:** \`FROM\` -> \`WHERE\` -> \`GROUP BY\` -> \`HAVING\` -> \`SELECT\` -> \`ORDER BY\`.
- **WHERE vs HAVING:** \`WHERE\` filters individual rows before grouping (cannot use aggregates); \`HAVING\` filters groups formed by \`GROUP BY\` (can use aggregates like \`COUNT()\`, \`AVG()\`, \`SUM()\`, \`MAX()\`, \`MIN()\`).
- **Pattern Matching:** \`LIKE '%pattern%'\` (% matches any sequence of characters; _ matches exactly one character).
- **Python-MySQL:** \`con = mysql.connector.connect(...)\`, \`cur = con.cursor()\`, \`cur.execute(sql)\`, \`cur.fetchall()\`, \`con.commit()\` for DML updates.

**3. Computer Networks 4-Mark Case Study Golden Rules:**
- **Server Placement:** Place server in the building/wing with the **maximum number of computers** (80-20 rule to reduce inter-block traffic).
- **Repeater Placement:** Place a repeater when the physical cable distance between two blocks exceeds **70 to 100 meters** to regenerate attenuated signals.
- **Hub/Switch Placement:** Place a Hub/Switch in **EVERY block/wing** to connect local computers into a LAN.
- **Cable Layout Topology:**
  * **Star Topology:** Best if all blocks connect directly to the server block (central hub).
  * **Bus / Tree Topology:** Best for minimum total cable length (connect blocks in shortest path sequence).
- **Transmission Media Choice:**
  * High speed, long distance, immune to electromagnetic interference (EMI) => **Optical Fiber Cable (OFC)**.
  * Short distance, low cost within building => **Twisted Pair Cable (CAT6 / UTP)**.
  * Hilly terrain / across rivers where digging is impossible => **Radio Waves / Microwaves**.
- **Network Security:** Firewall (hardware/software barrier against unauthorized access), VoIP (Voice over Internet Protocol for voice calls), HTTPS (Port 443 with SSL/TLS encryption).

**KEY POINTS:**
- Never forget \`con.commit()\` after INSERT/UPDATE/DELETE in Python-MySQL scripts; otherwise database changes are not saved.
- Remember: Degree is column count, Cardinality is row count.`;
  }

  // CHAPTER 5: Computer Networks
  if (
    id === 'cs5' ||
    (!id && (
      chapterLower === 'computer networks' ||
      chapterLower.includes('computer networks') ||
      (chapterLower.includes('network') && !chapterLower.includes('neural')) ||
      chapterLower === 'cs5'
    ))
  ) {
    return `TOPIC: Chapter 5: Computer Networks
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Evolution of Networking & Data Communication Concepts:**
- **Evolution:** ARPANET (Advanced Research Projects Agency Network, 1969 - packet switching inception) -> NSFNET (National Science Foundation) -> Internet (worldwide network of networks).
- **Data Communication Terminologies:**
  * **Channel:** Physical transmission medium over which signals propagate.
  * **Bandwidth:**
    - Analog systems: Range of frequencies in a signal, measured in **Hertz (Hz, KHz, MHz, GHz)**.
    - Digital systems (Data Transfer Rate): Volume of data transmitted per second, measured in **bps (bits per second)**, Kbps, Mbps, Gbps, Tbps. Note: 1 Kbps = 1000 bps; 1 KBps = 1024 bytes/sec.

**2. Transmission Media (Guided vs Unguided):**
1. **Guided / Wired Media:**
   - **Twisted Pair Cable (UTP / STP):** Two insulated copper wires twisted together to reduce crosstalk. Inexpensive, flexible, standard for LANs with **RJ-45 connectors** (CAT5/CAT6). Attenuates rapidly over >100m.
   - **Coaxial Cable:** Central copper conductor surrounded by insulating layer, metallic braid shield, and outer jacket. Better noise immunity and bandwidth than twisted pair; used in cable TV.
   - **Optical Fiber Cable (OFC):** Core of high-purity glass or plastic surrounded by cladding (lower refractive index). Transmits data as **light pulses** using **Total Internal Reflection (TIR)**. Extremely high bandwidth, completely immune to **Electromagnetic Interference (EMI)**, minimal attenuation over long distances; optimal for network backbones.
2. **Unguided / Wireless Media:**
   - **Radio Waves:** Omnidirectional (propagates in all directions); easily penetrates physical walls; used in FM radio, Wi-Fi, cellular networks.
   - **Microwaves:** Unidirectional line-of-sight propagation; requires parabolic dish antennas mounted on tall towers; used in point-to-point and satellite links.
   - **Infrared:** Short-range line-of-sight communication; cannot penetrate solid obstacles; used in remote controls.

**3. Network Connecting Devices:**
- **Modem (Modulator-Demodulator):** Converts digital computer signals to analog telephone line signals and vice versa.
- **NIC (Network Interface Card / Ethernet Card):** Hardware circuit card embedding a unique, permanent, factory-assigned 48-bit **MAC Address** (Physical address).
- **RJ-45 (Registered Jack-45):** Standard 8-pin connector used to terminate twisted pair cables in Ethernet networks.
- **Hub:** Layer 1 physical device. A multiport repeater that **broadcasts** incoming packets to **ALL connected ports** without inspecting destination addresses. Increases packet collisions and network congestion.
- **Switch:** Layer 2 data link device. An intelligent multiport bridge that inspects destination MAC addresses and forwards packets **ONLY to the specific target port (unicast)**. Prevents collisions and optimizes bandwidth.
- **Repeater:** Amplifies and regenerates attenuated signals over cable runs exceeding **70 to 100 meters**.
- **Router:** Layer 3 network device. Inspects IP addresses to forward packets across **different subnets / networks** along the optimal routing path.
- **Gateway:** Protocol converter that interconnects two completely **dissimilar networks** operating on different protocols and architectures.

**4. Network Types & Topologies:**
- **Geographical Scale:**
  * **PAN (Personal Area Network):** Within ~10 meters (Bluetooth).
  * **LAN (Local Area Network):** Within a room, office, building, or campus (up to 1 km).
  * **MAN (Metropolitan Area Network):** Across an entire city (Cable TV, citywide intranet).
  * **WAN (Wide Area Network):** Across states, countries, or the globe (The Internet).
- **Topologies:**
  * **Star Topology:** Every node connects directly to a central hub/switch. Easy to install and isolate faults; if central switch fails, the entire network fails.
  * **Bus Topology:** Nodes share a single linear backbone cable with terminators at both ends. Minimal cable length; difficult fault detection; backbone break halts all traffic.
  * **Tree Topology:** Hierarchical combination of Star networks interconnected along a bus backbone. High scalability for large institutions.

**5. Network Protocols & Web Technologies:**
- **TCP/IP:** Transmission Control Protocol (breaks messages into sequenced packets and guarantees reliable delivery) / Internet Protocol (handles packet addressing and routing).
- **HTTP / HTTPS:** HyperText Transfer Protocol. HTTPS adds **SSL/TLS encryption** on Port 443 for confidential data transfer.
- **FTP:** File Transfer Protocol (Port 20/21) for uploading and downloading files.
- **Email Protocols:**
  * **SMTP (Simple Mail Transfer Protocol):** For **sending (pushing)** outgoing mail (Port 25/587).
  * **POP3 (Post Office Protocol v3):** Downloads emails from mail server to local device and deletes them from server (Port 110).
  * **IMAP:** Keeps emails synchronized on remote server across multiple devices.
- **VoIP:** Voice over Internet Protocol enabling voice calls over IP data networks.
- **DNS (Domain Name System):** Translates human-readable domain names (e.g. \`www.cbse.nic.in\`) to IP addresses.

**6. Network Security & Cyber Threats:**
- **Malware:** Viruses (infect host files), Worms (self-replicating, clog networks), Trojans (disguised as benign software to create backdoors), Ransomware (encrypts user files and demands ransom), Spyware (silently monitors keystrokes).
- **Firewall:** Hardware or software security system that monitors and controls incoming and outgoing network traffic based on predetermined rules.
- **Cookies:** Small text files saved on user browsers by web servers to remember login sessions, shopping carts, and tracking preferences.`;
  }

  // CHAPTER 6: Database Concepts
  if (
    id === 'cs6' ||
    (!id && (
      chapterLower === 'database concepts' ||
      chapterLower.includes('database concepts') ||
      chapterLower.includes('relational model') ||
      chapterLower === 'cs6'
    ))
  ) {
    return `TOPIC: Chapter 6: Database Concepts
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. Database Systems vs Traditional File Systems:**
- **Limitations of File Processing Systems:**
  1. *Data Redundancy:* Duplication of identical data across multiple files, wasting storage.
  2. *Data Inconsistency:* Conflicting versions of the same data existing across files.
  3. *Lack of Data Isolation & Data Dependence:* Close coupling between data formats and software application programs.
  4. *Concurrent Access Anomalies:* Difficulties coordinating simultaneous multi-user updates.
  5. *Data Security Deficiencies:* Difficulty enforcing granular user access controls.
- **Advantages of DBMS (Database Management System):**
  * Controls and minimizes data redundancy.
  * Ensures data integrity and consistency.
  * Facilitates data sharing across multiple client applications.
  * Enforces standards, security restrictions, and automated backup/recovery mechanisms.

**2. Relational Data Model Terminologies:**
**DEFINITION:** A Relational Database organizes data in two-dimensional tables called **Relations**, where each row represents a record and each column represents a property.
- **Relation (Table):** A two-dimensional table consisting of rows and columns.
- **Tuple (Row / Record):** A single horizontal row in a relation representing an entity instance.
- **Attribute (Column / Field):** A vertical column in a relation representing a specific characteristic or property.
- **Domain:** The pool of permissible, valid atomic values from which an attribute draws its values.
- **Degree:** The **total number of attributes (columns)** in a relation.
- **Cardinality:** The **total number of tuples (rows)** in a relation.
- **Example Table \`STUDENT\`:**
  | RollNo (INT) | Name (VARCHAR) | Stream (VARCHAR) | Marks (DECIMAL) |
  | :--- | :--- | :--- | :--- |
  | 1 | Aarav | Science | 94.5 |
  | 2 | Ananya | Commerce | 89.0 |
  | 3 | Rohan | Humanities | 91.5 |
  * **Degree** = 4 (RollNo, Name, Stream, Marks)
  * **Cardinality** = 3 (3 student records)

**3. Keys in Relational Databases:**
**PRINCIPLE:** A Key is an attribute or a combination of attributes that serves to identify tuples in a table or establish relationships between tables.
1. **Primary Key:**
   - A minimal set of attributes that uniquely and unambiguously identifies each tuple in a relation.
   - **Properties:** Must be strictly unique across all rows; **CANNOT contain NULL values** (Entity Integrity Constraint).
2. **Candidate Key:**
   - Any attribute or minimal combination of attributes that possesses the potential to serve as a Primary Key (all candidates for the primary key role).
3. **Alternate Key:**
   - A Candidate Key that is **NOT selected** as the Primary Key.
   - Formula: \`Alternate Keys = Candidate Keys - Primary Key\`.
4. **Foreign Key:**
   - An attribute in a relation whose values are derived from and reference the **Primary Key** of another (or same) relation.
   - Used to link two tables and enforce **Referential Integrity** (a tuple in child table cannot reference a non-existent value in parent table).

**COMMON MISTAKE:**
- Confusing Degree and Cardinality: Remember **D**egree = **D**own the columns (attribute count); **C**ardinality = **C**ount the rows (tuple count).
- Thinking a table can have multiple Primary Keys: A relation has only **ONE Primary Key** (which may consist of multiple attributes, termed a Composite Primary Key), but can have multiple Candidate Keys.`;
  }

  // CHAPTER 7: Structured Query Language
  if (
    id === 'cs7' ||
    (!id && (
      chapterLower === 'structured query language' ||
      chapterLower.includes('structured query language') ||
      chapterLower === 'sql' ||
      chapterLower === 'cs7'
    ))
  ) {
    return `TOPIC: Chapter 7: Structured Query Language (SQL)
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. SQL Classification (DDL vs DML):**
- **DDL (Data Definition Language):** Defines, modifies, and deletes database schema structures. DDL statements are **auto-committed** (cannot be rolled back).
  * \`CREATE TABLE\`: Creates a new table schema.
  * \`ALTER TABLE\`: Modifies an existing table structure (ADD, MODIFY, DROP columns).
  * \`DROP TABLE\`: Completely removes a table and its structure from database.
- **DML (Data Manipulation Language):** Manipulates stored table records.
  * \`SELECT\`: Queries and retrieves data from tables.
  * \`INSERT INTO\`: Adds new rows into a table.
  * \`UPDATE ... SET\`: Modifies attribute values of existing tuples.
  * \`DELETE FROM\`: Removes tuples from a table.

**2. DDL Commands Syntax & Constraints:**
- **Table Constraints:** \`PRIMARY KEY\`, \`NOT NULL\`, \`UNIQUE\`, \`DEFAULT\`, \`CHECK\`, \`FOREIGN KEY ... REFERENCES\`.
- **Creating a Table:**
  \`\`\`sql
  CREATE TABLE Employee (
      EmpId INT PRIMARY KEY,
      Name VARCHAR(30) NOT NULL,
      Salary DECIMAL(8,2) CHECK (Salary > 0),
      DeptId INT,
      DOJ DATE DEFAULT '2026-01-01'
  );
  \`\`\`
- **Modifying Table Structure (\`ALTER TABLE\`):**
  * Adding a column: \`ALTER TABLE Employee ADD City VARCHAR(25);\`
  * Modifying data type / size: \`ALTER TABLE Employee MODIFY Name VARCHAR(50);\`
  * Dropping a column: \`ALTER TABLE Employee DROP COLUMN City;\`
  * Dropping entire table: \`DROP TABLE Employee;\`

**3. Querying with SELECT & Filtering Clauses:**
- **DISTINCT:** Eliminates duplicate rows in query results (\`SELECT DISTINCT DeptId FROM Employee;\`).
- **WHERE Clause Conditions:**
  * Relational: \`=\`, \`!=\` or \`<>\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
  * Logical: \`AND\`, \`OR\`, \`NOT\`.
  * Range: \`BETWEEN low AND high\` (inclusive of both endpoints).
  * Membership: \`IN (val1, val2, ...)\` / \`NOT IN (...)\`.
  * NULL Check: \`IS NULL\` / \`IS NOT NULL\` (NEVER write \`= NULL\`).
  * Pattern Matching (\`LIKE\`):
    - \`%\`: Matches any sequence of zero or more characters (\`Name LIKE 'S%'\` -> starts with S).
    - \`_\`: Matches exactly one single character (\`Name LIKE '_a%'\` -> 2nd letter is a).
- **ORDER BY Clause:** Sorts output rows:
  \`SELECT * FROM Employee ORDER BY DeptId ASC, Salary DESC;\`

**4. Aggregate Functions & GROUP BY / HAVING:**
- **Five Standard SQL Aggregate (Group) Functions:**
  * \`COUNT(*)\`: Returns total number of rows, including NULLs and duplicates.
  * \`COUNT(column)\`: Returns count of non-NULL values in that column.
  * \`SUM(column)\`, \`AVG(column)\`, \`MIN(column)\`, \`MAX(column)\`: Compute statistics, ignoring NULLs.
- **GROUP BY Clause:** Groups rows having identical values in specified columns.
  * **Golden Rule:** Every attribute in the \`SELECT\` clause that is NOT inside an aggregate function MUST be listed in the \`GROUP BY\` clause.
- **WHERE vs HAVING:**
  | Feature | WHERE Clause | HAVING Clause |
  | :--- | :--- | :--- |
  | **Filtering Level** | Filters individual **rows (tuples)**. | Filters summary **groups** created by GROUP BY. |
  | **Timing** | Evaluated **before** grouping. | Evaluated **after** grouping. |
  | **Aggregates Allowed?** | **NO** (cannot use \`COUNT()\`, \`SUM()\`, etc.). | **YES** (evaluates aggregate expressions). |
  \`\`\`sql
  SELECT DeptId, COUNT(*), AVG(Salary)
  FROM Employee
  WHERE Salary > 30000
  GROUP BY DeptId
  HAVING COUNT(*) >= 3;
  \`\`\`

**5. Table Joins (Equi-Join & Cartesian Product):**
- **Cartesian Product (Cross Join):** Merges every row of table 1 with every row of table 2.
  * \`Degree(T1 × T2) = Degree(T1) + Degree(T2)\`
  * \`Cardinality(T1 × T2) = Cardinality(T1) × Cardinality(T2)\`
- **Equi-Join:** Merges tables on matching primary key and foreign key:
  \`\`\`sql
  SELECT E.Name, E.Salary, D.DeptName
  FROM Employee E, Department D
  WHERE E.DeptId = D.DeptId AND E.Salary >= 50000;
  \`\`\`

**COMMON MISTAKE:**
- Writing \`WHERE AVG(Salary) > 50000\`. Aggregate functions are strictly forbidden in \`WHERE\`; use \`HAVING AVG(Salary) > 50000\`.
- Checking nulls with \`WHERE Bonus = NULL\`. In SQL, NULL represents unknown, so \`= NULL\` always yields false. You must use \`WHERE Bonus IS NULL\`.`;
  }

  // CHAPTER 8: Python-SQL Interface
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
    return `TOPIC: Chapter 8: Python-SQL Interface (\`mysql.connector\`)
Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

**1. Connecting Python with MySQL Overview:**
- Python provides the **\`mysql.connector\`** module to interface Python programs with a MySQL relational database.
- Workflow:
  1. \`import mysql.connector\`
  2. Establish connection with database server using \`connect()\`.
  3. Create a cursor instance from connection using \`cursor()\`.
  4. Execute SQL queries using \`cursor.execute()\`.
  5. Fetch data for SELECT queries, or commit changes for DML (INSERT/UPDATE/DELETE).
  6. Clean up by closing cursor and database connection.

**2. Complete Python-MySQL Connectivity Implementation:**
\`\`\`python
import mysql.connector

# Step 1: Establish connection
con = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password123",
    database="SchoolDB"
)

if con.is_connected():
    print("Database connected successfully!")

# Step 2: Create cursor object
cur = con.cursor()

# Step 3 (A): Executing a SELECT (Read) Query
sql_select = "SELECT RollNo, Name, Marks FROM Student WHERE Marks > %s;"
cur.execute(sql_select, (75,))
records = cur.fetchall()  # returns list of tuples

print("High Scorer Students:")
for row in records:
    print(f"Roll: {row[0]}, Name: {row[1]}, Marks: {row[2]}")

# Step 3 (B): Executing DML (INSERT / UPDATE / DELETE)
sql_insert = "INSERT INTO Student (RollNo, Name, Marks) VALUES (%s, %s, %s);"
val = (105, "Tanvi", 92.5)
cur.execute(sql_insert, val)

# Step 4: COMMIT IS MANDATORY for DML statements!
con.commit()
print(f"{cur.rowcount} record(s) inserted successfully.")

# Step 5: Clean up resources
cur.close()
con.close()
\`\`\`

**3. Cursor Fetch Methods Master Reference:**
| Method | Return Type | Behavior & EOF Indicator |
| :--- | :--- | :--- |
| **\`cur.fetchone()\`** | \`tuple\` or \`None\` | Retrieves the **next single row** of a query result set. Returns \`None\` when no more rows remain. |
| **\`cur.fetchall()\`** | \`list of tuples\` | Retrieves **all remaining rows** of the result set into a Python list. Returns empty list \`[]\` if no rows. |
| **\`cur.fetchmany(size)\`** | \`list of tuples\` | Retrieves the next \`size\` rows from the result set. |
| **\`cur.rowcount\`** | \`int\` | Returns the number of rows affected by an INSERT, UPDATE, or DELETE query, or retrieved so far. |

**4. Parameterized Queries & SQL Injection Defense:**
- **Why use parameterized queries?**
  Passing values using \`%s\` placeholders (e.g. \`cur.execute("SELECT * FROM User WHERE id=%s", (uid,))\`) automatically sanitizes user inputs, preventing **SQL Injection Attacks**.
- Never concatenate user strings directly into SQL statements (e.g. \`"SELECT * FROM User WHERE id=" + uid\` is vulnerable).

**5. Exception Handling in Database Scripts:**
\`\`\`python
import mysql.connector

try:
    con = mysql.connector.connect(host="localhost", user="root", password="pw", database="Shop")
    cur = con.cursor()
    cur.execute("UPDATE Product SET Price = Price * 1.1 WHERE Category = 'Electronics'")
    con.commit()
except mysql.connector.Error as err:
    print("Database Error:", err)
    if con:
        con.rollback()  # Reverts uncommitted changes
finally:
    if 'con' in locals() and con.is_connected():
        cur.close()
        con.close()
\`\`\`

**COMMON MISTAKE:**
- Forgetting \`con.commit()\` after executing \`INSERT\`, \`UPDATE\`, or \`DELETE\` queries. Without \`commit()\`, changes remain in volatile transaction memory and are discarded upon closing the connection.
- Calling \`cur.fetchall()\` after executing an \`INSERT\` or \`UPDATE\` statement, which raises \`mysql.connector.errors.InterfaceError: No result set to fetch from\`.`;
  }

  return null;
}
