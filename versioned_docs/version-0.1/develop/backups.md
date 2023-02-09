# Backups

To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because **TAPLE Client** is using **[LevelDB](https://github.com/google/leveldb)** as database, in which hot backups are not supported so far.

In this **[section](./taple-client-config#environment-variables)**, you can find the definition of the different environment variables including `TAPLE_DATABASE_PATH` which represents the path where the database is located.