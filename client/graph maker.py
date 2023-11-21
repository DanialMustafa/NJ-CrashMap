# %%
import matplotlib.pyplot as plt
import pandas as pd
import matplotlib.cm as cm
import geopandas as gpd
import folium
from folium.plugins import MarkerCluster
import geodatasets
import numpy as np
from shapely.geometry import Point

# %%
agency = pd.read_csv('agency.txt')
calendar_dates = pd.read_csv('calendar_dates.txt')
routes = pd.read_csv('routes.txt')
routes = routes.dropna(axis=1)
shapes = pd.read_csv('shapes.txt')
stop_times = pd.read_csv('stop_times.txt')
stops = pd.read_csv('stops.txt')
trips = pd.read_csv('trips.txt')
 

# %%
cmap = cm.viridis
plt.scatter(otp.Month, otp.OTP, c = otp.Year, cmap=cmap,s=100, marker='o')

sc = plt.scatter(otp.Month, otp.OTP, c=otp.Year, cmap=cmap, s=100, marker='o')
plt.colorbar(sc, label='Third Variable')

plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatter Plot with Lines Based on Third Variable')
plt.legend()
plt.grid(True)

plt.show()

# %% Train Data OTP Import
atlantic_city = pd.read_csv('RAIL_ACRL_OTP_DATA.csv').drop(0, axis = 0)
main_bergen = pd.read_csv('RAIL_BNTN_OTP_DATA.csv').drop(0, axis = 0)
montclair_boonton = pd.read_csv('RAIL_MNBN_OTP_DATA.csv').drop(0, axis = 0)
morris_essex = pd.read_csv('RAIL_MNE_OTP_DATA.csv').drop(0, axis = 0)
northeast_corridor = pd.read_csv('RAIL_NEC_OTP_DATA.csv').drop(0, axis = 0)
north_jersey_coast = pd.read_csv('RAIL_NJCL_OTP_DATA.csv').drop(0, axis = 0)
pascack_valley = pd.read_csv('RAIL_PASC_OTP_DATA.csv').drop(0, axis = 0)
raritan_valley = pd.read_csv('RAIL_RARV_OTP_DATA.csv').drop(0, axis = 0)
# %%
month_mapping = {
    'JANUARY': 1,
    'FEBRUARY': 2,
    'MARCH': 3,
    'APRIL': 4,
    'MAY': 5,
    'JUNE': 6,
    'JULY': 7,
    'AUGUST': 8, 
    'SEPTEMBER': 9, 
    'OCTOBER': 10, 
    'NOVEMBER': 11, 
    'DECEMBER': 12
}
# %%
train_OTP = pd.concat([atlantic_city, 
                       main_bergen,
                       montclair_boonton, 
                       morris_essex,
                       northeast_corridor,
                       north_jersey_coast,
                       pascack_valley,
                       raritan_valley])
train_OTP.columns = ['year', 'month', 'line', 'count', 'total', 'otp']
train_OTP = train_OTP.reset_index()
train_OTP.otp = pd.to_numeric(train_OTP.otp)

# %%
train_OTP
# %%
train_OTP['month'] = train_OTP['month'].str.replace(' ', '')
train_OTP['year'] = train_OTP['year'].str.replace(' ', '')
# %%

# %%
train_OTP['month2'] = train_OTP['month'].map(month_mapping)
train_OTP['month2'] = pd.to_numeric(train_OTP['month2'])
train_OTP['year'] = pd.to_numeric(train_OTP['year'])
# %%
train_OTP['date'] = pd.to_datetime(train_OTP['year'].astype(str) + train_OTP['month2'].astype(str).str.zfill(2), format='%Y%m')
# %%
train_OTP
# %%
plt.scatter(x = train_OTP[train_OTP['line'] == 'Atlantic City Rail Line']['date'],
            y = train_OTP[train_OTP['line'] == 'Atlantic City Rail Line']['otp'])
plt.axhline(np.mean(train_OTP[train_OTP['line'] == 'Atlantic City Rail Line']['otp']), color = 'red', linestyle = '--', label='Average OTP for Train Line')
plt.xlabel('Time (Year)')
plt.ylabel('OTP (%)')
plt.title('OTP for Atlantic City Rail (2017 - 2023)')
plt.legend()

plt.savefig('my_plot.png')
# %%

# %%
data = {'Year': [2010, 2011, 2012, 2013, 2014],
        'Percentage': [45, 50, 55, 60, 65]}
df = pd.DataFrame(data)

# Create a boxplot
df.boxplot(column='Percentage', by='Year', grid=False)

# Add labels and a title
plt.xlabel('Year')
plt.ylabel('Percentage')
plt.title('Boxplot of Percentages by Year')

# Show the plot
plt.show()

# %%
traffic_count = pd.read_csv('Traffic_Counts_Data.csv')
# %%
traffic_count
# %% 2012 - 2020
traffic_count2 = traffic_count.groupby(['County', 'Year']).sum('Annual Average Daily Traffic').reset_index()[['County', 'Year', 'Annual Average Daily Traffic']]
#traffic_count2['Year'] = pd.to_datetime(traffic_count2['Year'], format='%m/%d/%Y')

# %%

traffic_count2
# %%
crash_data = pd.read_csv('Total_NJ_Crash_Records_By_County_-_No_Private_Properties.csv').drop('Total', axis = 1).rename(columns = {' Year': 'Year'})
# %%
crash_data2 = pd.melt(crash_data, id_vars=['Year'], var_name='County', value_name='Annual Crashes')[['County', 'Year', 'Annual Crashes']]
# %%
crash_data2
# %%
crash_data2.iloc[4, 0]

# %%
for i in range(len(pd.unique(traffic_count2['County']))):
    county = pd.unique(traffic_count2['County'])[i]
    mask = traffic_count2['County'] == county
    filtered_df = traffic_count2[mask]

    plt.bar(x = filtered_df['Year'],
        height = filtered_df['Annual Average Daily Traffic'])
    plt.axhline(np.mean(filtered_df['Annual Average Daily Traffic']), color = 'red', linestyle = '--', label='Overall Average Annual Daily Traffic for {} County'.format(county))
    plt.xlabel('Time (Year)')
    plt.ylabel('Annual Average Daily Traffic')
    plt.title('Annual Average Daily Traffic for {} County (2012 - 2020)'.format(county))
    plt.ticklabel_format(style='plain', axis='y')
    plt.xticks(rotation = 15)
    plt.legend()
    plt.savefig(str.replace("traffic_plots/{}_Traffic.png".format(county), ' ', '_'), bbox_inches='tight')
    plt.show()
    plt.close
# %%
for i in range(len(pd.unique(crash_data2['County']))):
    county = pd.unique(crash_data2['County'])[i]
    mask = crash_data2['County'] == county
    filtered_df = crash_data2[mask]

    plt.scatter(x = filtered_df['Year'],
            y = filtered_df['Annual Crashes'])
    plt.axhline(np.mean(filtered_df['Annual Crashes']), color = 'red', linestyle = '--', label='Overall Average Annual Crashes for {} County'.format(county))
    plt.plot(filtered_df['Year'], filtered_df['Annual Crashes'], linestyle='-', color='#1f77b4')
    plt.xlabel('Time (Year)')
    plt.ylabel('Annual Crashes')
    plt.title('Annual Crashes for {} County (2001 - 2020)'.format(county))
    plt.ticklabel_format(style='plain', axis='y')
    plt.xticks(rotation = 15)
    plt.legend()
    plt.savefig(str.replace("crash_plots/{}_Crash.png".format(county), ' ', '_'), bbox_inches='tight')
    plt.show()
    plt.close
# %%
crash_data2
# %%
traffic_count2
# %%
filtered_df
# %%
crash_data2