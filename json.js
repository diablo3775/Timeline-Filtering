let jsondata = [
    {"InstallDate": "2019-01-01", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-02", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-03", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-03", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-04", "ComputerName": "HP", "PatchCategory": "Patch4"},
    {"InstallDate": "2019-01-05", "ComputerName": "DELL", "PatchCategory": "Patch5"},
    {"InstallDate": "2019-01-06", "ComputerName": "ACER", "PatchCategory": "Patch6"},
    {"InstallDate": "2019-01-07", "ComputerName": "HP", "PatchCategory": "Patch7"},
    {"InstallDate": "2019-01-08", "ComputerName": "DELL", "PatchCategory": "Patch8"},
    {"InstallDate": "2019-01-09", "ComputerName": "ACER", "PatchCategory": "Patch9"},
    {"InstallDate": "2019-01-10", "ComputerName": "HP", "PatchCategory": "Patch10"},
    {"InstallDate": "2019-01-11", "ComputerName": "ACER", "PatchCategory": "Patch11"},
    {"InstallDate": "2019-01-12", "ComputerName": "DELL", "PatchCategory": "Patch12"},
    {"InstallDate": "2019-01-13", "ComputerName": "ACER", "PatchCategory": "Patch13"},
    {"InstallDate": "2019-01-14", "ComputerName": "DELL", "PatchCategory": "Patch14"},
    {"InstallDate": "2019-01-15", "ComputerName": "ACER", "PatchCategory": "Patch15"},
    {"InstallDate": "2019-01-16", "ComputerName": "DELL", "PatchCategory": "Patch16"},
    {"InstallDate": "2019-01-17", "ComputerName": "ACER", "PatchCategory": "Patch17"},
    {"InstallDate": "2019-01-18", "ComputerName": "DELL", "PatchCategory": "Patch18"},
    {"InstallDate": "2019-01-19", "ComputerName": "ACER", "PatchCategory": "Patch19"},
    {"InstallDate": "2019-01-20", "ComputerName": "DELL", "PatchCategory": "Patch20"},
    {"InstallDate": "2019-01-21", "ComputerName": "ACER", "PatchCategory": "Patch21"},
    {"InstallDate": "2019-01-22", "ComputerName": "DELL", "PatchCategory": "Patch22"},
    {"InstallDate": "2019-01-23", "ComputerName": "ACER", "PatchCategory": "Patch23"},
    {"InstallDate": "2019-01-24", "ComputerName": "DELL", "PatchCategory": "Patch24"},
    {"InstallDate": "2019-01-25", "ComputerName": "ACER", "PatchCategory": "Patch25"},
    {"InstallDate": "2019-01-26", "ComputerName": "MSI", "PatchCategory": "Patch26"},
    {"InstallDate": "2019-01-27", "ComputerName": "HP", "PatchCategory": "Patch27"},
    {"InstallDate": "2019-01-28", "ComputerName": "DELL", "PatchCategory": "Patch28"},
    {"InstallDate": "2019-01-29", "ComputerName": "ACER", "PatchCategory": "Patch29"},
    {"InstallDate": "2019-01-30", "ComputerName": "HP", "PatchCategory": "Patch30"},
    {"InstallDate": "2019-01-31", "ComputerName": "DELL", "PatchCategory": "Patch31"},
    {"InstallDate": "2019-02-01", "ComputerName": "ACER", "PatchCategory": "Patch32"},
    {"InstallDate": "2019-02-02", "ComputerName": "DELL", "PatchCategory": "Patch33"},
    {"InstallDate": "2019-02-03", "ComputerName": "MSI", "PatchCategory": "Patch34"},
    {"InstallDate": "2019-02-04", "ComputerName": "DELL", "PatchCategory": "Patch35"},
    {"InstallDate": "2019-02-05", "ComputerName": "MSI", "PatchCategory": "Patch36"},
    {"InstallDate": "2019-02-06", "ComputerName": "DELL", "PatchCategory": "Patch37"},
    {"InstallDate": "2019-02-07", "ComputerName": "MSI", "PatchCategory": "Patch38"},
    {"InstallDate": "2019-02-08", "ComputerName": "DELL", "PatchCategory": "Patch39"},
    {"InstallDate": "2019-02-09", "ComputerName": "MSI", "PatchCategory": "Patch40"},
    {"InstallDate": "2019-01-01", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-02", "ComputerName": "MSI", "PatchCategory": "Patch2"},
    {"InstallDate": "2019-01-03", "ComputerName": "MSI", "PatchCategory": "Patch3"},
    {"InstallDate": "2019-01-04", "ComputerName": "HP", "PatchCategory": "Patch4"},
    {"InstallDate": "2019-01-05", "ComputerName": "DELL", "PatchCategory": "Patch5"},
    {"InstallDate": "2019-01-06", "ComputerName": "ACER", "PatchCategory": "Patch6"},
    {"InstallDate": "2019-01-07", "ComputerName": "HP", "PatchCategory": "Patch7"},
    {"InstallDate": "2019-01-08", "ComputerName": "DELL", "PatchCategory": "Patch8"},
    {"InstallDate": "2019-01-09", "ComputerName": "ACER", "PatchCategory": "Patch9"},
    {"InstallDate": "2019-01-10", "ComputerName": "HP", "PatchCategory": "Patch10"},
    {"InstallDate": "2019-01-11", "ComputerName": "ACER", "PatchCategory": "Patch11"},
    {"InstallDate": "2019-01-12", "ComputerName": "DELL", "PatchCategory": "Patch12"},
    {"InstallDate": "2019-01-13", "ComputerName": "ACER", "PatchCategory": "Patch13"},
    {"InstallDate": "2019-01-14", "ComputerName": "DELL", "PatchCategory": "Patch14"},
    {"InstallDate": "2019-01-15", "ComputerName": "ACER", "PatchCategory": "Patch15"},
    {"InstallDate": "2019-01-16", "ComputerName": "DELL", "PatchCategory": "Patch16"},
    {"InstallDate": "2019-01-17", "ComputerName": "ACER", "PatchCategory": "Patch17"},
    {"InstallDate": "2019-01-18", "ComputerName": "DELL", "PatchCategory": "Patch18"},
    {"InstallDate": "2019-01-19", "ComputerName": "ACER", "PatchCategory": "Patch19"},
    {"InstallDate": "2019-01-20", "ComputerName": "DELL", "PatchCategory": "Patch20"},
    {"InstallDate": "2019-01-21", "ComputerName": "ACER", "PatchCategory": "Patch21"},
    {"InstallDate": "2019-01-22", "ComputerName": "DELL", "PatchCategory": "Patch22"},
    {"InstallDate": "2019-01-23", "ComputerName": "ACER", "PatchCategory": "Patch23"},
    {"InstallDate": "2019-01-24", "ComputerName": "DELL", "PatchCategory": "Patch24"},
    {"InstallDate": "2019-01-25", "ComputerName": "ACER", "PatchCategory": "Patch25"},
    {"InstallDate": "2019-01-26", "ComputerName": "MSI", "PatchCategory": "Patch26"},
    {"InstallDate": "2019-01-27", "ComputerName": "HP", "PatchCategory": "Patch27"},
    {"InstallDate": "2019-01-28", "ComputerName": "DELL", "PatchCategory": "Patch28"},
    {"InstallDate": "2019-01-29", "ComputerName": "ACER", "PatchCategory": "Patch29"},
    {"InstallDate": "2019-01-30", "ComputerName": "HP", "PatchCategory": "Patch30"},
    {"InstallDate": "2019-01-31", "ComputerName": "DELL", "PatchCategory": "Patch31"},
    {"InstallDate": "2019-02-01", "ComputerName": "ACER", "PatchCategory": "Patch32"},
    {"InstallDate": "2019-02-02", "ComputerName": "DELL", "PatchCategory": "Patch33"},
    {"InstallDate": "2019-02-03", "ComputerName": "MSI", "PatchCategory": "Patch34"},
    {"InstallDate": "2019-02-04", "ComputerName": "DELL", "PatchCategory": "Patch35"},
    {"InstallDate": "2019-02-05", "ComputerName": "MSI", "PatchCategory": "Patch36"},
    {"InstallDate": "2019-02-06", "ComputerName": "DELL", "PatchCategory": "Patch37"},
    {"InstallDate": "2019-02-07", "ComputerName": "MSI", "PatchCategory": "Patch38"},
    {"InstallDate": "2019-02-08", "ComputerName": "DELL", "PatchCategory": "Patch39"},
    {"InstallDate": "2019-02-09", "ComputerName": "MSI", "PatchCategory": "Patch40"},
    {"InstallDate": "2019-01-01", "ComputerName": "MSI", "PatchCategory": "Patch1"},
    {"InstallDate": "2019-01-02", "ComputerName": "MSI", "PatchCategory": "Patch2"},
    {"InstallDate": "2019-01-03", "ComputerName": "MSI", "PatchCategory": "Patch3"},
    {"InstallDate": "2019-01-04", "ComputerName": "HP", "PatchCategory": "Patch4"},
    {"InstallDate": "2019-01-05", "ComputerName": "DELL", "PatchCategory": "Patch5"},
    {"InstallDate": "2019-01-06", "ComputerName": "ACER", "PatchCategory": "Patch6"},
    {"InstallDate": "2019-01-07", "ComputerName": "HP", "PatchCategory": "Patch7"},
    {"InstallDate": "2019-01-08", "ComputerName": "DELL", "PatchCategory": "Patch8"},
    {"InstallDate": "2019-01-09", "ComputerName": "ACER", "PatchCategory": "Patch9"},
    {"InstallDate": "2019-01-10", "ComputerName": "HP", "PatchCategory": "Patch10"},
    {"InstallDate": "2019-01-11", "ComputerName": "ACER", "PatchCategory": "Patch11"},
    {"InstallDate": "2019-01-12", "ComputerName": "DELL", "PatchCategory": "Patch12"},
    {"InstallDate": "2019-01-13", "ComputerName": "ACER", "PatchCategory": "Patch13"},
    {"InstallDate": "2019-01-14", "ComputerName": "DELL", "PatchCategory": "Patch14"},
    {"InstallDate": "2019-01-15", "ComputerName": "ACER", "PatchCategory": "Patch15"},
    {"InstallDate": "2019-01-16", "ComputerName": "DELL", "PatchCategory": "Patch16"},
    {"InstallDate": "2019-01-17", "ComputerName": "ACER", "PatchCategory": "Patch17"},
    {"InstallDate": "2019-01-18", "ComputerName": "DELL", "PatchCategory": "Patch18"},
    {"InstallDate": "2019-01-19", "ComputerName": "ACER", "PatchCategory": "Patch19"},
    {"InstallDate": "2019-01-20", "ComputerName": "DELL", "PatchCategory": "Patch20"},
    {"InstallDate": "2019-01-21", "ComputerName": "ACER", "PatchCategory": "Patch21"},
    {"InstallDate": "2019-01-22", "ComputerName": "DELL", "PatchCategory": "Patch22"},
    {"InstallDate": "2019-01-23", "ComputerName": "ACER", "PatchCategory": "Patch23"},
    {"InstallDate": "2019-01-24", "ComputerName": "DELL", "PatchCategory": "Patch24"},
    {"InstallDate": "2019-01-25", "ComputerName": "ACER", "PatchCategory": "Patch25"},
    {"InstallDate": "2019-01-26", "ComputerName": "MSI", "PatchCategory": "Patch26"},
    {"InstallDate": "2019-01-27", "ComputerName": "HP", "PatchCategory": "Patch27"},
    {"InstallDate": "2019-01-28", "ComputerName": "DELL", "PatchCategory": "Patch28"},
    {"InstallDate": "2019-01-29", "ComputerName": "ACER", "PatchCategory": "Patch29"},
    {"InstallDate": "2019-01-30", "ComputerName": "HP", "PatchCategory": "Patch30"},
    {"InstallDate": "2019-01-31", "ComputerName": "DELL", "PatchCategory": "Patch31"},
    {"InstallDate": "2019-02-01", "ComputerName": "ACER", "PatchCategory": "Patch32"},
    {"InstallDate": "2019-02-02", "ComputerName": "DELL", "PatchCategory": "Patch33"},
    {"InstallDate": "2019-02-03", "ComputerName": "MSI", "PatchCategory": "Patch34"},
    {"InstallDate": "2019-02-04", "ComputerName": "DELL", "PatchCategory": "Patch35"},
    {"InstallDate": "2019-02-05", "ComputerName": "MSI", "PatchCategory": "Patch36"},
    {"InstallDate": "2019-02-06", "ComputerName": "DELL", "PatchCategory": "Patch37"},
    {"InstallDate": "2019-02-07", "ComputerName": "MSI", "PatchCategory": "Patch38"},
    {"InstallDate": "2019-02-08", "ComputerName": "DELL", "PatchCategory": "Patch39"},
    {"InstallDate": "2019-02-09", "ComputerName": "MSI", "PatchCategory": "Patch40"},
]
