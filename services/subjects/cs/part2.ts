// services/subjects/cs/part2.ts
// Unit 2: Computer Networks & Unit 3: Database Management and Python-SQL Connectivity
// Master Notebook Notes - Strictly aligned with CBSE Class 12 Computer Science (083) NCERT Syllabus (2026-27).

export function getCSPart2Notes(chapterLower: string): string | null {
  // FULL REVISION / MASTER CS REVISION BOOK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'cs_all'
  ) {
    return `TOPIC: CBSE Class 12 Computer Science Complete Master Revision Capsule (2026-27 Pattern)
Master Notebook Revision Book - Comprehensive high-yield synthesis covering Python syntax, File Handling templates, Stack algorithms, Network Case Study rules, SQL Master Queries, and Python-MySQL Connectivity.

**1. Python Core Syntax & File Handling Quick Review:**
- Text Files: Modes ('r', 'w', 'a', 'r+'). Methods: \`read()\` (str), \`readline()\` (str), \`readlines()\` (list). Pointer: \`tell()\` (byte pos), \`seek(offset, whence)\`.
- Binary Files (\`pickle\` module): \`pickle.dump(obj, f)\` for serialization, \`pickle.load(f)\` for deserialization inside \`try-except EOFError\`.
- CSV Files (\`csv\` module): Open with \`newline=''\`. \`csv.writer(f)\` -> \`writerow()\` / \`writerows()\`. \`csv.reader(f)\` -> iterator of string lists.
- Stack (LIFO): \`stk.append(x)\` for Push; if \`len(stk) == 0: print("Underflow")\` else: \`stk.pop()\` for Pop; \`stk[-1]\` for Peek.

**2. Relational Database & SQL Master Reference:**
- RDBMS Keys: Primary Key (unique, non-null identifier), Candidate Key (all minimal superkeys eligible to be primary key), Alternate Key (candidate key not chosen as primary), Foreign Key (attribute referencing primary key in parent table).
- Degree = Number of Columns (Attributes); Cardinality = Number of Rows (Tuples).
- DDL Commands: \`CREATE TABLE\`, \`ALTER TABLE\` (ADD, MODIFY, DROP), \`DROP TABLE\`.
- DML Commands: \`SELECT\`, \`INSERT INTO\`, \`UPDATE ... SET\`, \`DELETE FROM\`.
- Clauses Execution Order: \`FROM\` -> \`WHERE\` -> \`GROUP BY\` -> \`HAVING\` -> \`SELECT\` -> \`ORDER BY\`.
- WHERE vs HAVING: \`WHERE\` filters individual rows before grouping (cannot use aggregates); \`HAVING\` filters groups formed by \`GROUP BY\` (can use aggregates like \`COUNT()\`, \`AVG()\`, \`SUM()\`, \`MAX()\`, \`MIN()\`).
- Pattern Matching: \`LIKE '%pattern%'\` (% matches any sequence of characters; _ matches exactly one character).
- Python-MySQL: \`con = mysql.connector.connect(...)\`, \`cur = con.cursor()\`, \`cur.execute(sql)\`, \`cur.fetchall()\`, \`con.commit()\` for DML updates.

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

  // UNIT 2: Computer Networks
  if (
    chapterLower.includes('network') ||
    chapterLower.includes('communication') ||
    chapterLower.includes('internet') ||
    chapterLower === 'cs4'
  ) {
    return `TOPIC: Unit 2: Computer Networks
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Data Communication Terminologies:**
- **Channel & Bandwidth:**
  * Bandwidth in Analog systems: Difference between highest and lowest frequencies of a signal, measured in **Hertz (Hz, KHz, MHz, GHz)**.
  * Bandwidth in Digital systems (Data Transfer Rate): Volume of data transferred per unit time, measured in **bps (bits per second)**, Kbps, Mbps, Gbps, Tbps. (1 Kbps = 1000 bps in telecom, 1 KBps = 1024 bytes/sec in storage).
- **Transmission Media:**
  1. **Guided / Wired Media:**
     * **Twisted Pair Cable (UTP / STP):** Inexpensive, flexible, easy installation; vulnerable to noise and high attenuation; used in LANs (CAT5/CAT6 with RJ-45 connectors).
     * **Coaxial Cable:** Solid central copper wire surrounded by insulator and metallic mesh shield; higher bandwidth than twisted pair; used in cable TV.
     * **Optical Fiber Cable (OFC):** Core made of high-purity glass/plastic, transmits data as **light pulses** using **Total Internal Reflection (TIR)**; extremely high bandwidth, immune to electromagnetic interference (EMI), ideal for high-speed backbone inter-building connections.
  2. **Unguided / Wireless Media:**
     * **Radio Waves:** Omnidirectional (travels in all directions); penetrates walls; used in FM radio, Wi-Fi, cellular phones.
     * **Microwaves:** Unidirectional line-of-sight propagation; requires parabolic dish antennas on high towers; used in point-to-point satellite communications.
     * **Infrared:** Short-range line-of-sight communication; cannot penetrate solid walls; used in TV remotes.

**2. Network Devices:**
- **Modem (Modulator-Demodulator):** Converts digital signals from computer to analog signals for telephone lines and vice-versa.
- **RJ-45 (Registered Jack-45):** 8-pin connector used to terminate twisted pair cables in Ethernet networks.
- **Ethernet Card / NIC (Network Interface Card):** Hardware component containing a unique, hardcoded 48-bit **MAC Address** (Physical address).
- **Hub:** Layer 1 multiport repeater; broadcasts incoming data packets to **ALL connected ports**; passive/active; increases collision probability.
- **Switch:** Layer 2 intelligent multiport device; inspects destination MAC addresses and forwards packets **ONLY to the intended recipient port** (unicast); reduces network congestion.
- **Repeater:** Amplifies and regenerates attenuated signals over long cable runs (>70-100m).
- **Router:** Layer 3 device that routes data packets between **different networks** using IP addresses; finds the shortest routing path.
- **Gateway:** Connects two entirely **dissimilar networks** operating on different communication protocols (acts as a protocol converter).

**3. Network Topologies & Network Types:**
- **Types of Networks:**
  * **PAN (Personal Area Network):** Within ~10 meters (Bluetooth, Zigbee).
  * **LAN (Local Area Network):** Within a room, building, or campus (up to 1 km).
  * **MAN (Metropolitan Area Network):** Spans a city (Cable TV network).
  * **WAN (Wide Area Network):** Spans countries or continents (The Internet).
- **Topologies:**
  * **Star Topology:** All nodes connected to a central switch/hub. Easy to install and troubleshoot; if one cable fails, only that node is affected; if central hub fails, entire network crashes.
  * **Bus Topology:** Single continuous linear backbone cable with terminators at both ends. Minimal cable length; difficult to isolate faults; backbone cable break halts entire network.
  * **Tree Topology:** Hierarchical combination of Star and Bus topologies. Highly scalable for multi-department organizations.
  * **Mesh Topology:** Every node connected to every other node (n(n-1)/2 links). Highest fault tolerance, but most expensive cabling.

**4. Protocols & Web Technologies:**
- **TCP/IP:** Core suite of Internet. TCP breaks data into packets and ensures reliable sequenced delivery; IP handles addressing and packet routing.
- **HTTP / HTTPS:** HyperText Transfer Protocol for transmitting web pages. HTTPS uses **SSL/TLS encryption** on Port 443 for secure transactions.
- **FTP (File Transfer Protocol):** For transferring files between client and server (Port 20/21).
- **Email Protocols:**
  * **SMTP (Simple Mail Transfer Protocol):** For sending/pushing outgoing emails from client to server (Port 25/587).
  * **POP3 (Post Office Protocol 3):** Downloads emails from mail server to local device and deletes them from server (Port 110).
  * **IMAP (Internet Message Access Protocol):** Keeps emails synced on remote server across multiple client devices.
- **VoIP (Voice over Internet Protocol):** Enables voice calling and multimedia sessions over IP networks (e.g. Skype, WhatsApp call).
- **DNS (Domain Name System):** Translates human-friendly domain names (e.g. \`www.cbse.gov.in\`) into machine-readable IP addresses (e.g. \`164.100.158.208\`).

**5. Network Security & Cyber Crimes:**
- **Threats:** Virus (replicates by attaching to host files), Worm (self-replicating standalone program clogging network), Trojan Horse (disguised as useful software to steal data), Ransomware (encrypts files and demands ransom), Spyware/Keyloggers (monitors keystrokes and user activity).
- **Firewall:** Hardware or software security device monitoring and filtering incoming/outgoing network traffic based on predetermined security rules.
- **Cookies:** Small text files stored on user's browser by web servers to track user sessions, preferences, and browsing habits.

**COMMON MISTAKE:**
- Confusing Hub with Switch: Hub broadcasts to all ports; Switch forwards data exclusively to the destination MAC address port.
- Confusing SMTP with POP3: SMTP is for SENDING emails; POP3/IMAP is for RECEIVING/DOWNLOADING emails.`;
  }

  // UNIT 3: Database Management & SQL
  if (
    chapterLower.includes('database') ||
    chapterLower.includes('sql') ||
    chapterLower.includes('dbms') ||
    chapterLower.includes('rdbms') ||
    chapterLower === 'cs5'
  ) {
    return `TOPIC: Unit 3: Database Management & SQL
Master Notebook Notes - Strictly aligned with CBSE Class 12 CS (083) NCERT Syllabus (2026-27).

**1. Relational Database Concepts:**
- **Relation:** A two-dimensional table consisting of rows and columns.
- **Tuple:** A row in a relation representing a single data record.
- **Attribute:** A column in a relation representing a specific property/field.
- **Domain:** The pool of permissible values from which an attribute draws its values.
- **Degree:** Total number of **attributes (columns)** in a relation.
- **Cardinality:** Total number of **tuples (rows)** in a relation.
- **Keys in RDBMS:**
  * **Primary Key:** A minimal set of attributes that uniquely and unambiguously identifies each tuple in a table; cannot contain NULL values.
  * **Candidate Key:** All candidate attributes/combinations that have the potential to serve as a primary key.
  * **Alternate Key:** A candidate key that is not selected as the primary key.
  * **Foreign Key:** An attribute whose values are derived from the primary key of another (or same) relation; enforces **Referential Integrity**.

**2. SQL Commands (DDL vs DML):**
- **DDL (Data Definition Language):** Modifies database schema structure.
  * \`CREATE TABLE Student (Roll INT PRIMARY KEY, Name VARCHAR(30) NOT NULL, Marks DECIMAL(5,2));\`
  * \`ALTER TABLE Student ADD (City VARCHAR(20));\`
  * \`ALTER TABLE Student MODIFY (Name VARCHAR(50));\`
  * \`ALTER TABLE Student DROP COLUMN City;\`
  * \`DROP TABLE Student;\`
- **DML (Data Manipulation Language):** Manipulates stored table records.
  * \`INSERT INTO Student VALUES (101, 'Rohan', 94.5);\`
  * \`UPDATE Student SET Marks = Marks + 5 WHERE Marks < 40;\`
  * \`DELETE FROM Student WHERE Roll = 101;\`
  * \`SELECT ... FROM ...\`

**3. SELECT Queries & Clauses:**
- **DISTINCT:** Eliminates duplicate values in query output (\`SELECT DISTINCT Department FROM Employee;\`).
- **WHERE Clause:** Filters tuples based on boolean conditions:
  * Relational: \`=\`, \`!=\` or \`<>\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
  * Logical: \`AND\`, \`OR\`, \`NOT\`.
  * \`BETWEEN val1 AND val2\`: Inclusive range check (\`Salary BETWEEN 30000 AND 50000\`).
  * \`IN (val1, val2, ...)\`: Checks membership in a discrete list (\`City IN ('Delhi', 'Mumbai')\`).
  * \`IS NULL\` / \`IS NOT NULL\`: Checks for missing or unassigned values (\`Bonus IS NULL\`).
  * \`LIKE\`: Pattern matching with wildcards:
    - \`%\`: Matches zero or more characters (\`Name LIKE 'A%'\` -> starts with A).
    - \`_\`: Matches exactly one single character (\`Name LIKE '_a%'\` -> second letter is a).
- **ORDER BY Clause:** Sorts query output in ascending (\`ASC\`, default) or descending (\`DESC\`) order:
  \`SELECT * FROM Student ORDER BY Marks DESC, Name ASC;\`
- **Aggregate (Group) Functions:**
  * \`COUNT(*)\`: Returns total number of rows (including NULLs).
  * \`COUNT(column)\`: Returns number of non-NULL values in column.
  * \`SUM(column)\`, \`AVG(column)\`, \`MAX(column)\`, \`MIN(column)\`: Ignore NULL values.
- **GROUP BY Clause:** Combines rows having identical values in specified columns into summary groups.
  * **Crucial Rule:** Any column in the \`SELECT\` list that is NOT inside an aggregate function MUST appear in the \`GROUP BY\` clause.
- **HAVING Clause:** Filters groups produced by \`GROUP BY\` using conditions on aggregate functions:
  \`\`\`sql
  SELECT Department, COUNT(*), AVG(Salary)
  FROM Employee
  WHERE Status = 'Active'
  GROUP BY Department
  HAVING COUNT(*) > 5;
  \`\`\`
- **Table Joins (Equi-Join & Cartesian Product):**
  * **Cartesian Product (Cross Join):** Degree = Degree(T1) + Degree(T2); Cardinality = Cardinality(T1) × Cardinality(T2).
  * **Equi-Join:** Matching primary key and foreign key:
    \`\`\`sql
    SELECT E.EmpName, D.DeptName, E.Salary
    FROM Employee E, Department D
    WHERE E.DeptId = D.DeptId AND E.Salary > 50000;
    \`\`\`

**4. Interface Python with SQL Database (\`mysql.connector\`):**
- **Five Standard Steps for Python-MySQL Connectivity:**
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

  # Step 3: Execute SQL queries
  # (A) Read Query
  cur.execute("SELECT Roll, Name, Marks FROM Student WHERE Marks > 75;")
  records = cur.fetchall()  # returns list of tuples
  for row in records:
      print(f"Roll: {row[0]}, Name: {row[1]}, Marks: {row[2]}")

  # (B) Write / Update Query (DML requires commit)
  sql_insert = "INSERT INTO Student (Roll, Name, Marks) VALUES (%s, %s, %s);"
  val = (105, "Tanvi", 92.0)
  cur.execute(sql_insert, val)
  con.commit()  # MANDATORY to save changes to database!
  print(cur.rowcount, "record inserted.")

  # Step 4: Clean up
  cur.close()
  con.close()
  \`\`\`
- **Cursor Fetch Methods:**
  * \`cur.fetchone()\`: Returns next tuple or None.
  * \`cur.fetchall()\`: Returns list of all remaining tuples.
  * \`cur.fetchmany(size)\`: Returns list of specified number of tuples.
  * \`cur.rowcount\`: Returns number of rows affected by query.

**COMMON MISTAKE:**
- Using \`WHERE COUNT(*) > 5\`: Aggregate functions cannot be used in a \`WHERE\` clause; you must use \`HAVING COUNT(*) > 5\`.
- Forgetting \`con.commit()\` after executing \`INSERT\`, \`UPDATE\`, or \`DELETE\` queries from Python. Without \`commit()\`, the transaction is rolled back and changes are lost.`;
  }

  return null;
}
