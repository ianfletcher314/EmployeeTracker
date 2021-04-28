INSERT INTO department (name)
VALUES ("Sales"),("Finance"),("Marketing"),("Administration");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Analyst", 30000.00,1),("Sales Manager",60000.00,1),("Financial Analyst", 30000.00,2),
("Finance Manager",60000.00,2),("Marketing Analyst", 30000.00,3),("Marketing Manager",60000.00,3),
("Admin Assistant", 30000.00,4),("Office Manager",60000.00,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Johnson", 1, 2),("Suzie","Smith",2,NULL),("John","Gerrard",3,4),("Gerraldine","Perry",4,NULL),
("Spencer","Walton",5,6),("Georgia","Marrion",6,NULL),("Sylvester","Sutton",7,8),("Terry","Walsh",8,NULL);

