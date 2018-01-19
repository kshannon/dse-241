
# coding: utf-8

# Import libraries
import json
import pandas as pd
import numpy as np


# Read json file into pandas data frame
df = pd.read_json('exercise2-olympics.json')
df.head(5)


# Dataframe to take who are the top 10 countries by medal count
df1 = df.groupby('Country').count().sort_values(['Medal'], ascending=False).head(10)


# Get this country list
country_list = df1.index.values
print country_list


# Change country list to list and extracting only elements from main data frame that matches to country list
c_lst = country_list.tolist()
df_new = df[df['Country'].isin(c_lst)]

# with open('temp.json', 'w') as f:
#     f.write(df_new.to_json(orient='records', lines=True))

# Saving the processed data frame as json that will be later used in d3 code
with open('temp1.json', 'w') as f:
    f.write(df_new.to_json(orient='records'))

# code to check if json file written looks good
df_after = pd.read_json('temp1.json')
df_after.head(5)
