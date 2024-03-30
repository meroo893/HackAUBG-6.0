import psycopg2
import pandas as pd
from Database_connection import connect
from select_quere import fetchData

# Connect to the database
conn = connect("Car_Insurance")

# Fetch data into a DataFrame
query = "SELECT * FROM \"tableName\""
df = pd.read_sql_query(query, conn)

# Close the connection
conn.close()

# Convert DataFrame to JSON
json_data = df.to_json(orient="records")

# Print or return the JSON data
print(json_data)
