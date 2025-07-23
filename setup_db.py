import sqlite3

conn = sqlite3.connect('flood_alert.db')
c = conn.cursor()

c.execute('''
CREATE TABLE IF NOT EXISTS subscribers (
    phone TEXT PRIMARY KEY
)
''')

c.execute('''
CREATE TABLE IF NOT EXISTS river_levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    level REAL NOT NULL
)
''')

conn.commit()
conn.close()