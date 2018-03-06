import os
import folium
import geocoder
import pandas as pd
import numpy as np


dfMerged = pd.read_csv("dataWithLatLong.csv")
dfMerged = dfMerged.sort_values(["Year", "Week_Reported"])
dfData = dfMerged[["Longitude", "Latitude"]].values

from folium.plugins import MarkerCluster
from folium import IFrame

table = """
<!DOCTYPE html>
<html>
<head>
<style>
table {{
    width:100%;
}}
table, th, td {{
    border: 1px solid black;
    border-collapse: collapse;
}}
th, td {{
    padding: 5px;
    text-align: left;
}}
table#t01 tr:nth-child(odd) {{
    background-color: #eee;
}}
table#t01 tr:nth-child(even) {{
   background-color:#fff;
}}
</style>
</head>
<body>

<table id="t01">
  <tr>
    <td>County</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>Week</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>Year</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>Cases</td>
    <td>{}</td>
  </tr>
</table>
</body>
</html>
""".format

popups, locations = [], []

#mP = folium.Map([35., -118.5], tiles='stamentoner', zoom_start=5)
mP = folium.Map([35., -118.5], tiles="Stamen Terrain", zoom_start=5)
#folium.LayerControl().add_to(mP)

for idx in range(dfData.shape[0]):
    for count in range(dfMerged["Positive_Cases"].iloc[idx]):
        locations.append(list(dfData[idx]))
        county = dfMerged["County"].iloc[idx]
        cases = dfMerged["Positive_Cases"].iloc[idx]
        week = dfMerged["Week_Reported"].iloc[idx]
        year = dfMerged["Year"].iloc[idx]
        iframe = IFrame(table(county, week, year, cases), width=250, height=140)
        popups.append(iframe)

t = folium.FeatureGroup(name='West Nile Cases')
t.add_child(MarkerCluster(locations=locations, popups=popups))

mP.add_child(t)


mP.save('CasesMapWestNile.html')
