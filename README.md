# Research Purple Wave Tracker
This is the issue tracker and computer inventory for research purple wave

## Tables
```bash
mysql -u root -p
Enter password:
```
Password: CAMH123

```sql
show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| purple_wave        |
| student_portal     |
| test               |
| testdb             |
+--------------------+
7 rows in set (0.00 sec)

use purple_wave;

show tables;
+-----------------------+
| Tables_in_purple_wave |
+-----------------------+
| computer_inventory    |
| issue_tracker         |
+-----------------------+
2 rows in set (0.00 sec)

describe computer_inventory;
+-------------------+------------+------+-----+---------+----------------+
| Field             | Type       | Null | Key | Default | Extra          |
+-------------------+------------+------+-----+---------+----------------+
| id                | int(11)    | NO   | PRI | NULL    | auto_increment |
| img_res           | varchar(3) | YES  |     | NULL    |                |
| user_name         | text       | YES  |     | NULL    |                |
| location          | text       | YES  |     | NULL    |                |
| computer_name     | text       | YES  |     | NULL    |                |
| asset_tag         | text       | YES  |     | NULL    |                |
| research_software | text       | YES  |     | NULL    |                |
| notes             | text       | YES  |     | NULL    |                |
+-------------------+------------+------+-----+---------+----------------+
8 rows in set (0.00 sec)

describe issue_tracker;
+-------------------+-------------+------+-----+---------+----------------+
| Field             | Type        | Null | Key | Default | Extra          |
+-------------------+-------------+------+-----+---------+----------------+
| issue_id          | int(11)     | NO   | PRI | NULL    | auto_increment |
| date              | date        | YES  |     | NULL    |                |
| site              | text        | YES  |     | NULL    |                |
| program           | text        | YES  |     | NULL    |                |
| room              | text        | YES  |     | NULL    |                |
| user_name         | text        | YES  |     | NULL    |                |
| extension         | varchar(10) | YES  |     | NULL    |                |
| issue_category    | text        | YES  |     | NULL    |                |
| issue_description | text        | YES  |     | NULL    |                |
| reporting_manager | text        | YES  |     | NULL    |                |
| assigned_to       | text        | YES  |     | NULL    |                |
| progress_notes    | text        | YES  |     | NULL    |                |
| closing_notes     | text        | YES  |     | NULL    |                |
| status            | text        | YES  |     | NULL    |                |
+-------------------+-------------+------+-----+---------+----------------+
14 rows in set (0.00 sec)
```

## TODO
* Reminders sent to Research IT staff for issues that are not closed
