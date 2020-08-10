import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
DATA_PATH = "C://Users//Administrator//.vscode//Module 5//574_m5_datasets_v3.0//"
hw_df_raw = pd.read_csv(DATA_PATH+'HollywoodMovies.csv',low_memory=False)
hw_df_raw.head()
quest_movies = hw_df_raw[hw_df_raw['Story']=='Quest']
quest_movies[quest_movies['RottenTomatoes']== max(quest_movies['RottenTomatoes'])].Movie