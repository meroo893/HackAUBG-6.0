import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from keras.models import Sequential
from keras.layers import Dense, Dropout, BatchNormalization
from keras.callbacks import EarlyStopping
from keras.regularizers import l2
from sqlalchemy import create_engine
# Enter your own data for PG like this: postgresql://postgres:password@localhost/dbname(Car_insurance_improved)
connection_string = ''


engine = create_engine(connection_string)

query = 'SELECT "model", "brand", "fuel_type", "risk_factor" FROM vehicle'
vehicle = pd.read_sql_query(query, engine)
encoder = OneHotEncoder()
encoded_features = encoder.fit_transform(vehicle[['model', 'brand', 'fuel_type']]).toarray()


target = vehicle['risk_factor'].values


X_train, X_test, y_train, y_test = train_test_split(encoded_features, target, test_size=0.2, random_state=42)
input_dim = X_train.shape[1]
model = Sequential()


model.add(Dense(128, input_dim=input_dim, activation='relu', kernel_regularizer=l2(0.001)))
model.add(BatchNormalization())


model.add(Dense(64, activation='relu', kernel_regularizer=l2(0.001)))
model.add(Dropout(0.5))
model.add(BatchNormalization())


model.add(Dense(64, activation='relu', kernel_regularizer=l2(0.001)))
model.add(Dropout(0.5))
model.add(BatchNormalization())


model.add(Dense(32, activation='relu', kernel_regularizer=l2(0.001)))
model.add(Dropout(0.5))
model.add(BatchNormalization())

model.add(Dense(32, activation='relu', kernel_regularizer=l2(0.001)))
model.add(Dropout(0.5))
model.add(BatchNormalization())


model.add(Dense(1))

model.compile(optimizer='adam', loss='mean_squared_error')


model.summary()
early_stopping = EarlyStopping(monitor='val_loss', patience=50, restore_best_weights=True)


history = model.fit(X_train, y_train, validation_split=0.3, epochs=1000, batch_size=10, verbose=1,callbacks=[early_stopping])
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


y_pred = model.predict(X_test)


mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"Mean Absolute Error (MAE): {mae}")
print(f"Mean Squared Error (MSE): {mse}")
print(f"Root Mean Squared Error (RMSE): {rmse}")
print(f"R-squared (R²): {r2}")
#UNIT TESTS
# new_data = pd.DataFrame({
#     'model': ['Sedan', 'SUV', 'Convertible'],
#     'brand': ['Toyota', 'Toyota', 'Toyota'],
#     'fuel_type': ['Petrol', 'Diesel', 'Natural gas']
# })

#new_encoded_features = encoder.transform(new_data).toarray()

#new_predictions = model.predict(new_encoded_features)

#for i, prediction in enumerate(new_predictions, start=1):
    #print(f"Entry {i} predicted risk factor: {prediction[0]}")


model.save("risk_algorithm.h5")