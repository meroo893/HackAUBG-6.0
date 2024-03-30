import psycopg2

def connect(db_name):
    conn = psycopg2.connect(
    dbname=db_name,
    user="postgres",
    password="Dobromir03",
    host="localhost",
    port="5432")
    return conn
