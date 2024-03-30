import psycopg2

def fetchData(cursor, row):

    cursor.execute(f"SELECT {row} FROM \"tableName\"")