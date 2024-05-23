begin
    insert into categories values (1,'Burgers');
    insert into categories values (2,'Kids menu');
    insert into categories values (3,'Drinks');
    insert into categories values (4,'Desserts');
    insert into categories values (5,'Others');
    insert into categories values (6,'Gluten free');
exception
    when others then
    rollback;
end;


begin
    insert into jobs values (1,'Cook');
    insert into jobs values (2,'Waiter');
    insert into jobs values (3,'Delivery');
    insert into jobs values (4,'Cashier');
    insert into jobs values (5,'Manager');
    insert into jobs values (6,'Human Resources');
exception
    when others then
    rollback;
end;




begin
    insert into employees values (1, 'Emily', 'Smith', 'EmilySmith@gmail.com','891264309578',  TO_DATE('1990-05-12', 'YYYY-MM-DD'), TO_DATE('2024-04-22', 'YYYY-MM-DD'), 1450, 0, 'a2B!c4D?5', 1);
    insert into employees values (2, 'Michael', 'Johnson', 'MichaelJohnson@gmail.com','725046831294',   TO_DATE('1985-09-23', 'YYYY-MM-DD'), TO_DATE('2024-04-23', 'YYYY-MM-DD'), 1450, 0, '6eFgH!7?8', 1);
    insert into employees values (3, 'Jennifer', 'Williams', 'JenniferWilliams@gmail.com','630815924367',  TO_DATE('1983-12-31', 'YYYY-MM-DD'), TO_DATE('2024-04-24', 'YYYY-MM-DD'), 1450, 0, 'i9JkL?01m', 1);
    insert into employees values (4, 'Christopher', 'Brown', 'ChristopherBrown@gmail.com','492678301546',  TO_DATE('1992-03-17', 'YYYY-MM-DD'), TO_DATE('2024-04-25', 'YYYY-MM-DD'), 1450, 0, 'N23oP!45q', 1);
    insert into employees values (5, 'Jessica', 'Jones', 'JessicaJones@gmail.com','185703496237',  TO_DATE('1994-07-08', 'YYYY-MM-DD'), TO_DATE('2024-04-26', 'YYYY-MM-DD'), 1450, 0, 'T67uVw?89', 1);
    insert into employees values (6, 'Matthew', 'Davis', 'MatthewDavis@gmail.com','762935804216',  TO_DATE('1988-10-22', 'YYYY-MM-DD'), TO_DATE('2024-04-27', 'YYYY-MM-DD'), 1450, 0, 'yZ10!AB12?', 1);
    insert into employees values (7, 'Ashley', 'Miller', 'AshleyMiller@gmail.com','531907824613',  TO_DATE('1986-06-15', 'YYYY-MM-DD'), TO_DATE('2024-04-28', 'YYYY-MM-DD'), 1450, 0, 'cD34eF!56', 1);
    insert into employees values (8, 'Joshua', 'Wilson', 'JoshuaWilson@gmail.com','924386175093',  TO_DATE('1993-09-30', 'YYYY-MM-DD'), TO_DATE('2024-04-29', 'YYYY-MM-DD'), 1450, 0, 'H78iJK?90', 1);
    insert into employees values (9, 'Amanda', 'Moore', 'AmandaMoore@gmail.com','364891275030',  TO_DATE('1995-02-14', 'YYYY-MM-DD'), TO_DATE('2024-04-30', 'YYYY-MM-DD'), 1450, 0, 'm12NOp!34Q', 1);
    insert into employees values (10, 'Daniel', 'Taylor', 'DanielTaylor@gmail.com','207685913420',  TO_DATE('1991-08-07', 'YYYY-MM-DD'), TO_DATE('2024-05-01', 'YYYY-MM-DD'), 1450, 0, 'rS56tUV?78', 1);
    insert into employees values (11, 'Sarah', 'Anderson', 'SarahAnderson@gmail.com','805946312708',  TO_DATE('1989-04-20', 'YYYY-MM-DD'), TO_DATE('2024-05-02', 'YYYY-MM-DD'), 1450, 0, 'W90xYZ!12', 1);
    insert into employees values (12, 'David', 'Thomas', 'DavidThomas@gmail.com','652094187563',  TO_DATE('1984-11-03', 'YYYY-MM-DD'), TO_DATE('2024-05-03', 'YYYY-MM-DD'), 1450, 0, '34ABcD?56e',1);
    insert into employees values (13, 'Samantha', 'Jackson', 'SamanthaJackson@gmail.com','419368527014',  TO_DATE('1987-07-17', 'YYYY-MM-DD'), TO_DATE('2024-05-04', 'YYYY-MM-DD'), 1450, 0, 'F78gHI!90', 1);
    insert into employees values (14, 'James', 'White', 'JamesWhite@gmail.com','935761802643',  TO_DATE('1996-01-30', 'YYYY-MM-DD'), TO_DATE('2024-05-05', 'YYYY-MM-DD'), 1450, 0, 'J12kLM?34', 1);
    insert into employees values (15, 'Elizabeth', 'Harris', 'ElizabethHarris@gmail.com','273890561742',  TO_DATE('1982-05-24', 'YYYY-MM-DD'), TO_DATE('2024-05-06', 'YYYY-MM-DD'), 1450, 0, 'No56Pq!78R', 1);
    insert into employees values (16, 'Ryan', 'Martin', 'RyanMartin@gmail.com','617439280154',  TO_DATE('1990-08-15', 'YYYY-MM-DD'), TO_DATE('2024-05-07', 'YYYY-MM-DD'), 1450, 0, 'X34Yz!56AB', 1);
    insert into employees values (17, 'Lauren', 'Thompson', 'LaurenThompson@gmail.com','539178264301',  TO_DATE('1988-12-28', 'YYYY-MM-DD'), TO_DATE('2024-05-08', 'YYYY-MM-DD'), 1450, 0, 'Cd78Ef?90G', 1);
    insert into employees values (18, 'John', 'Martinez', 'JohnMartinez@gmail.com','873902416538',  TO_DATE('1993-03-10', 'YYYY-MM-DD'), TO_DATE('2024-05-09', 'YYYY-MM-DD'), 1450, 0, 'sT90UvW?12', 1);
    insert into employees values (19, 'Brittany', 'Garcia', 'BrittanyGarcia@gmail.com','426719583012',  TO_DATE('1986-10-04', 'YYYY-MM-DD'), TO_DATE('2024-05-10', 'YYYY-MM-DD'), 1450, 0, 'H12iJK!34', 1);
    insert into employees values (20, 'Nicholas', 'Robinson', 'NicholasRobinson@gmail.com','960318475629',  TO_DATE('1984-02-18', 'YYYY-MM-DD'), TO_DATE('2024-05-11', 'YYYY-MM-DD'), 1450, 0, 'lm56NOp?78', 1);
    insert into employees values (21, 'Megan', 'Lewis', 'MeganLewis@gmail.com','741082936175',  TO_DATE('1992-06-09', 'YYYY-MM-DD'), TO_DATE('2024-05-12', 'YYYY-MM-DD'), 1450, 0, 'aB2!cD?e3F', 1);
    insert into employees values (22, 'Andrew', 'Walker', 'AndrewWalker@gmail.com','749305816427',  TO_DATE('1990-07-05', 'YYYY-MM-DD'), TO_DATE('2024-04-22', 'YYYY-MM-DD'), 1100, 0, 'G4hI!5Jk?L6', 2);
    insert into employees values (23, 'Taylor', 'Hill', 'TaylorHill@gmail.com','630918275046',  TO_DATE('1988-02-14', 'YYYY-MM-DD'), TO_DATE('2024-04-23', 'YYYY-MM-DD'), 1100, 0, '7mNpO!q8Rs', 2);
    insert into employees values (24, 'Brandon', 'Scott', 'BrandonScott@gmail.com','184092753618',  TO_DATE('1993-05-22', 'YYYY-MM-DD'), TO_DATE('2024-04-24', 'YYYY-MM-DD'), 1100, 0, 'T9uV!wX?10y', 2);
    insert into employees values (25, 'Rachel', 'King', 'RachelKing@gmail.com','542897631804',  TO_DATE('1985-11-30', 'YYYY-MM-DD'), TO_DATE('2024-04-25', 'YYYY-MM-DD'), 1100, 0, 'Z11AB!cd?12', 2);
    insert into employees values (26, 'Justin', 'Green', 'JustinGreen@gmail.com','937618245093',  TO_DATE('1991-09-17', 'YYYY-MM-DD'), TO_DATE('2024-04-26', 'YYYY-MM-DD'), 1100, 0, 'eF13gHI!14J', 2);
    insert into employees values (27, 'Nicole', 'Hall', 'NicoleHall@gmail.com','351782946013',  TO_DATE('1989-04-02', 'YYYY-MM-DD'), TO_DATE('2024-04-27', 'YYYY-MM-DD'), 1100, 0, 'K15Lm?16NoP', 2);
    insert into employees values (28, 'Robert', 'Adams', 'RobertAdams@gmail.com','267819304576',  TO_DATE('1992-08-14', 'YYYY-MM-DD'), TO_DATE('2024-04-28', 'YYYY-MM-DD'), 1100, 0, 'Q17rS!tUV?18', 2);
    insert into employees values (29, 'Amber', 'Wright', 'AmberWright@gmail.com','689143275086',  TO_DATE('1987-01-25', 'YYYY-MM-DD'), TO_DATE('2024-04-29', 'YYYY-MM-DD'), 1100, 0, 'W19xYZ!20AB', 2);
    insert into employees values (30, 'Jonathan', 'Mitchell', 'JonathanMitchell@gmail.com','901542637189',  TO_DATE('1995-03-11', 'YYYY-MM-DD'), TO_DATE('2024-04-30', 'YYYY-MM-DD'), 1100, 0, 'cD21eF?22G', 2);
    insert into employees values (31, 'Kayla', 'Perez', 'KaylaPerez@gmail.com','409275816324',  TO_DATE('1986-12-18', 'YYYY-MM-DD'), TO_DATE('2024-05-01', 'YYYY-MM-DD'), 1100, 0, 'H23iJK!24Lm', 2);
    insert into employees values (32, 'William', 'Ortiz', 'WilliamOrtiz@gmail.com','176245389012',  TO_DATE('1993-07-07', 'YYYY-MM-DD'), TO_DATE('2024-05-02', 'YYYY-MM-DD'), 1100, 0, '25NOp?26qrS', 2);
    insert into employees values (33, 'Stephanie', 'Lee', 'StephanieLee@gmail.com','274159083726',  TO_DATE('1988-11-19', 'YYYY-MM-DD'), TO_DATE('2024-05-03', 'YYYY-MM-DD'), 1100, 0, 'T27UvW!28xY', 2);
    insert into employees values (34, 'Joseph', 'Young', 'JosephYoung@gmail.com','736925481037',  TO_DATE('1990-04-14', 'YYYY-MM-DD'), TO_DATE('2024-05-04', 'YYYY-MM-DD'), 1100, 0, 'Z29!ABcD?30', 2);
    insert into employees values (35, 'Cassandra', 'Torres', 'CassandraTorres@gmail.com','815032469871',  TO_DATE('1994-08-27', 'YYYY-MM-DD'), TO_DATE('2024-05-05', 'YYYY-MM-DD'), 1100, 0, 'eF31gHI!32Jk', 2);
    insert into employees values (36, 'Kyle', 'Rodriguez', 'KyleRodriguez@gmail.com','503276189542',  TO_DATE('1985-06-03', 'YYYY-MM-DD'), TO_DATE('2024-05-06', 'YYYY-MM-DD'), 1100, 0, 'L33mNo?34Pq', 2);
    insert into employees values (37, 'Heather', 'Rivera', 'HeatherRivera@gmail.com','792635180497',  TO_DATE('1992-09-10', 'YYYY-MM-DD'), TO_DATE('2024-05-07', 'YYYY-MM-DD'), 1330, 0, 'R35sTU!vW?36', 3);
    insert into employees values (38, 'Benjamin', 'Evans', 'BenjaminEvans@gmail.com','503819274856',  TO_DATE('1994-02-28', 'YYYY-MM-DD'), TO_DATE('2024-05-08', 'YYYY-MM-DD'), 1330, 0, 'X37YZ!abCD?', 3);
    insert into employees values (39, 'Melissa', 'Cook', 'MelissaCook@gmail.com','275631804925',  TO_DATE('1987-07-15', 'YYYY-MM-DD'), TO_DATE('2024-05-09', 'YYYY-MM-DD'), 1330, 0, 'eF38gHI!39Jk', 3);
    insert into employees values (40, 'Tyler', 'Turner', 'TylerTurner@gmail.com','618490235761',  TO_DATE('1991-11-22', 'YYYY-MM-DD'), TO_DATE('2024-05-10', 'YYYY-MM-DD'), 1330, 0, 'L40mNo?41Pq', 3);
    insert into employees values (41, 'Victoria', 'Phillips', 'VictoriaPhillips@gmail.com','435271908634',  TO_DATE('1989-04-05', 'YYYY-MM-DD'), TO_DATE('2024-05-11', 'YYYY-MM-DD'), 1330, 0, '1aB?c2D!e3F', 3);
    insert into employees values (42, 'Zachary', 'Cruz', 'ZacharyCruz@gmail.com','897654321098',  TO_DATE('1993-08-18', 'YYYY-MM-DD'), TO_DATE('2024-05-12', 'YYYY-MM-DD'), 1330, 0, '4GhI5!Jk?L6m', 3);
    insert into employees values (43, 'Rebecca', 'Bailey', 'RebeccaBailey@gmail.com','729503816245',  TO_DATE('1986-05-30', 'YYYY-MM-DD'), TO_DATE('2024-05-13', 'YYYY-MM-DD'), 1330, 0, '7N8oP!q9RsT', 3);
    insert into employees values (44, 'Jacob', 'Price', 'JacobPrice@gmail.com','372891054638',  TO_DATE('1990-12-07', 'YYYY-MM-DD'), TO_DATE('2024-05-14', 'YYYY-MM-DD'), 1330, 0, '10uV!wX11yZ12', 3);
    insert into employees values (45, 'Michelle', 'Reed', 'MichelleReed@gmail.com','918406725391',  TO_DATE('1988-10-12', 'YYYY-MM-DD'), TO_DATE('2024-05-15', 'YYYY-MM-DD'), 1330, 0, 'ABcD!eF13gHI', 3);
    insert into employees values (46, 'Ethan', 'Hayes', 'EthanHayes@gmail.com','640928571364',  TO_DATE('1996-03-25', 'YYYY-MM-DD'), TO_DATE('2024-05-16', 'YYYY-MM-DD'), 1330, 0, '14JkLm?15NoP', 3);
    insert into employees values (47, 'Kaitlyn', 'Foster', 'KaitlynFoster@gmail.com','536097281453',  TO_DATE('1985-11-19', 'YYYY-MM-DD'), TO_DATE('2024-05-17', 'YYYY-MM-DD'), 1330, 0, 'q16rS!tUV?17', 3);
    insert into employees values (48, 'Alexander', 'Murphy', 'AlexanderMurphy@gmail.com','325890416372',  TO_DATE('1983-06-28', 'YYYY-MM-DD'), TO_DATE('2024-05-18', 'YYYY-MM-DD'), 1330, 0, '18WxYZ!19ABcD', 3);
    insert into employees values (49, 'Emily', 'Nelson', 'EmilyNelson@gmail.com','789623501847',  TO_DATE('1998-01-15', 'YYYY-MM-DD'), TO_DATE('2024-05-19', 'YYYY-MM-DD'), 1330, 0, 'eF20gHI!21JkL', 3);
    insert into employees values (50, 'Kevin', 'Barnes', 'KevinBarnes@gmail.com','924681037596',  TO_DATE('1986-09-08', 'YYYY-MM-DD'), TO_DATE('2024-05-20', 'YYYY-MM-DD'), 1330, 0, 'm22No?P23qRs', 3);
    insert into employees values (51, 'Olivia', 'Coleman', 'OliviaColeman@gmail.com','162740953817',  TO_DATE('1990-04-20', 'YYYY-MM-DD'), TO_DATE('2024-05-21', 'YYYY-MM-DD'), 1330, 0, 'T24UvW!25xYZ', 3);
    insert into employees values (52, 'Brian', 'Bennett', 'BrianBennett@gmail.com','482630175984',  TO_DATE('1993-02-17', 'YYYY-MM-DD'), TO_DATE('2024-05-22', 'YYYY-MM-DD'), 1110, 0, '26ABcD?eF27', 4);
    insert into employees values (53, 'Emma', 'Powell', 'EmmaPowell@gmail.com','597823014856',  TO_DATE('1988-08-29', 'YYYY-MM-DD'), TO_DATE('2024-05-23', 'YYYY-MM-DD'), 1110, 0, '28gHI29Jk?L30', 4);
    insert into employees values (54, 'Timothy', 'Rogers', 'TimothyRogers@gmail.com','376982045813',  TO_DATE('1985-12-10', 'YYYY-MM-DD'), TO_DATE('2024-05-24', 'YYYY-MM-DD'), 1110, 0, 'mNo31P!q32rST', 4);
    insert into employees values (55, 'Allison', 'Ross', 'AllisonRoss@gmail.com','239687510384',  TO_DATE('1991-06-03', 'YYYY-MM-DD'), TO_DATE('2024-05-25', 'YYYY-MM-DD'), 1110, 0, 'UV33wX!34yZAB', 4);
    insert into employees values (56, 'Cody', 'Russell', 'CodyRussell@gmail.com','981402367815',  TO_DATE('1989-11-14', 'YYYY-MM-DD'), TO_DATE('2024-05-26', 'YYYY-MM-DD'), 1110, 0, 'cD35eF?36gHI', 4);
    insert into employees values (57, 'Morgan', 'Hayes', 'MorganHayes@gmail.com','547893216704',  TO_DATE('1995-04-27', 'YYYY-MM-DD'), TO_DATE('2024-05-27', 'YYYY-MM-DD'), 1110, 0, 'J37kLm!38NoP', 4);
    insert into employees values (58, 'Patrick', 'Collins', 'PatrickCollins@gmail.com','654987320146',  TO_DATE('1983-09-05', 'YYYY-MM-DD'), TO_DATE('2024-05-28', 'YYYY-MM-DD'), 1950, 1, 'q39rS?40tUVW', 5);
    insert into employees values (59, 'Hannah', 'Bell', 'HannahBell@gmail.com','821403976582',  TO_DATE('1987-03-12', 'YYYY-MM-DD'), TO_DATE('2024-05-29', 'YYYY-MM-DD'), 1950, 1, 'x41YZ!ABcD?e', 5);
    insert into employees values (60, 'Steven', 'Cooper', 'StevenCooper@gmail.com','405978613294',  TO_DATE('1984-07-18', 'YYYY-MM-DD'), TO_DATE('2024-05-30', 'YYYY-MM-DD'), 1950, 1, 'F42gHI!43JkLm', 5);
    insert into employees values (61, 'Erica', 'Jenkins', 'EricaJenkins@gmail.com','136985720489',  TO_DATE('1986-11-23', 'YYYY-MM-DD'), TO_DATE('2024-05-31', 'YYYY-MM-DD'), 1950, 1, '1aB?c2D!e3F4', 5);
    insert into employees values (62, 'Gregory', 'Ward', 'GregoryWard@gmail.com','792041836590',  TO_DATE('1982-05-09', 'YYYY-MM-DD'), TO_DATE('2024-06-01', 'YYYY-MM-DD'), 1950, 1, '9N10oP!qRsTU', 5);
    insert into employees values (63, 'Caitlin', 'Hughes', 'CaitlinHughes@gmail.com','569283047615',  TO_DATE('1989-01-30', 'YYYY-MM-DD'), TO_DATE('2024-06-02', 'YYYY-MM-DD'), 1950, 1, 'V11wX!yZAB12', 5);
    insert into employees values (64, 'Samuel', 'Griffin', 'SamuelGriffin@gmail.com','927365148023',  TO_DATE('1981-08-14', 'YYYY-MM-DD'), TO_DATE('2024-06-03', 'YYYY-MM-DD'), 1880, 0, 'eF26gHI!JkL27', 6);
    insert into employees values (65, 'Jenna', 'Sullivan', 'JennaSullivan@gmail.com','731920468517',  TO_DATE('1980-12-03', 'YYYY-MM-DD'), TO_DATE('2024-06-04', 'YYYY-MM-DD'), 1880, 0, 'HI34JkLm!35No', 6);
    insert into employees values (66, 'Nathan', 'Diaz', 'NathanDiaz@gmail.com','513892047615',  TO_DATE('1978-06-22', 'YYYY-MM-DD'), TO_DATE('2024-06-05', 'YYYY-MM-DD'), 1880, 0, 'mNo?P42qRs43', 6);
exception
    when others then
    rollback;
end;





begin
    insert into allergens values (1,'Gluten', '../Images/Allergies/gluten.png');
    insert into allergens values (2,'Eggs', '../Images/Allergies/eggs.png');
    insert into allergens values (3,'Fish', '../Images/Allergies/fish.png');
    insert into allergens values (4,'Crustacean', '../Images/Allergies/crustacean.png');
    insert into allergens values (5,'Peanuts', '../Images/Allergies/peanuts.png');
    insert into allergens values (6,'Dairy', '../Images/Allergies/dairy.png');
    insert into allergens values (7,'Soybean', '../Images/Allergies/soybean.png');
    insert into allergens values (8,'Nuts', '../Images/Allergies/nuts.png');
    insert into allergens values (9,'Celery', '../Images/Allergies/celery.png');
    insert into allergens values (10,'Mollusk', '../Images/Allergies/mollusk.png');
    insert into allergens values (11,'Lupin beans', '../Images/Allergies/lupin-beans.png');
    insert into allergens values (12,'Sesame seeds', '../Images/Allergies/sesame-seeds.png');
    insert into allergens values (13,'Mustard', '../Images/Allergies/mustard.png');
    insert into allergens values (14,'Sulphites', '../Images/Allergies/sulphites.png');
exception
    when others then
    rollback;
end;


begin
    insert into products values (1,'Simple beef', '../Images/Menu/simple-beef.png', 1.40, 'Beef burger, lettuce, tomato, pickles ketchup, and mustard.', 1);
    insert into products values (2,'Simple chicken', '../Images/Menu/simple-chicken.png', 1.50, 'Chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (3,'Simple fried chicken', '../Images/Menu/simple-fried-chicken.png', 1.80, 'Fried chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (4,'Double beef', '../Images/Menu/double-beef.png', 2.60, 'Double beef burger, lettuce, pickles, tomato, ketchup, and mustard.', 1);
    insert into products values (5,'Double chicken', '../Images/Menu/double-chicken.png', 2.90, 'Double chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (6,'Double fried chicken', '../Images/Menu/double-fried-chicken.png', 3.40, 'Double fried chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (7,'Triple beef', '../Images/Menu/triple-beef.png', 3.50, 'Triple beef burger, lettuce, pickles, tomato, ketchup, and mustard.', 1);
    insert into products values (8,'Triple chicken', '../Images/Menu/triple-chicken.png', 4.15, 'Triple chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (9,'Triple fried chicken', '../Images/Menu/triple-fried-chicken.png', 4.90, 'Triple fried chicken burger, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (10,'Simple beef cheeseburger', '../Images/Menu/simple-beef-cheeseburger.png', 1.750, 'Beef burger, extra cheese, lettuce,  pickles, tomato, ketchup, and mustard.', 1);
    insert into products values (11,'Simple chicken cheeseburger', '../Images/Menu/simple-chicken-cheeseburger.png', 1.80, 'Chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);    
    insert into products values (12,'Simple fried chicken cheeseburger', '../Images/Menu/simple-fried-chicken-cheeseburger.png', 2.10, 'Fried chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (13,'Double beef cheeseburger', '../Images/Menu/double-beef-cheeseburger.png', 3.30, 'Double beef burger, extra cheese, lettuce,  pickles, tomato, ketchup, and mustard.', 1);
    insert into products values (14,'Double chicken cheeseburger', '../Images/Menu/double-chicken-cheeseburger.png', 3.50, 'Double chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (15,'Double fried chicken cheeseburger', '../Images/Menu/double-fried-chicken-cheeseburger.png', 4.00, 'Double fried chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (16,'Triple beef cheeseburger', '../Images/Menu/triple-beef-cheeseburger.png', 4.90, 'Triple beef burger, extra cheese, lettuce, pickles, tomato, ketchup, and mustard.', 1);
    insert into products values (17,'Triple chicken cheeseburger', '../Images/Menu/triple-chicken-cheeseburger.png', 5.20, 'Triple chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (18,'Triple fried chicken cheeseburger', '../Images/Menu/triple-fried-chicken-cheeseburger.png', 5.50, 'Triple fried chicken burger, extra cheese, lettuce, tomato, ketchup, and mustard.', 1);
    insert into products values (19,'Simple beef BBQ', '../Images/Menu/simple-beef-bbq.png', 1.50, 'Beef burger, lettuce, tomato, pickles and homemade barbecue sauce..', 1);
    insert into products values (20,'Simple chicken BBQ', '../Images/Menu/simple-chicken-bbq.png', 1.60, 'Chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (21,'Simple fried chicken BBQ', '../Images/Menu/simple-fried-chicken-bbq.png', 1.90, 'Fried chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (22,'Double beef BBQ', '../Images/Menu/double-beef-bbq.png', 2.80, 'Double beef burger, lettuce, tomato, pickles and homemade barbecue sauce.', 1);
    insert into products values (23,'Double chicken BBQ', '../Images/Menu/double-chicken-bbq.png', 3.00, 'Double chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (24,'Double fried chicken BBQ', '../Images/Menu/double-fried-chicken-bbq.png', 3.60, 'Double fried chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (25,'Triple beef BBQ', '../Images/Menu/triple-beef-bbq.png', 4.20, 'Triple beef burger, lettuce, tomato, pickles and homemade barbecue sauce.', 1);
    insert into products values (26,'Triple chicken BBQ', '../Images/Menu/triple-chicken-bbq.png', 4.60, 'Triple chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (27,'Triple fried chicken BBQ', '../Images/Menu/triple-fried-chicken-bbq.png', 5.50, 'Triple fried chicken burger, lettuce, tomato, and homemade barbecue sauce.', 1);
    insert into products values (28,'Burger beef jr', '../Images/Menu/beef-jr.png', 1.20, 'Small beef burger with lettuce and a beef patty.', 2);
    insert into products values (29,'Burger chicken jr', '../Images/Menu/chicken-jr.png', 1.20, 'Small beef burger with lettuce and a chicken patty.', 2);
    insert into products values (30,'Burger fried chicken jr', '../Images/Menu/fried-chicken-jr.png', 1.20, 'Small beef burger with lettuce and a fried chicken patty.', 2);
    insert into products values (31,'Nuggies jr', '../Images/Menu/nuggets-jr.png', 1.50, '6 pieces of chicken nuggets.', 2);
    insert into products values (32,'Vanilla ice cream jr', '../Images/Menu/ice-cream-vanilla-jr.png', 1.10, 'One small vanilla ice cream cone.', 2);
    insert into products values (33,'Chocolate ice cream jr', '../Images/Menu/ice-cream-chocolate-jr.png', 1.10, 'One small chocolate ice cream cone.', 2);
    insert into products values (34,'Water bottle', '../Images/Menu/water.png', 1.30, 'A water bottle', 3);
    insert into products values (35,'Coke', '../Images/Menu/coke.png', 1.90, 'A can of coke.', 3);
    insert into products values (36,'Coke light', '../Images/Menu/coke-light.png', 1.90, 'A can of coke light.', 3);
    insert into products values (37,'Fanta lemon', '../Images/Menu/fanta-lemon.png', 1.90, 'A can of fanta lemon flavoured.', 3);
    insert into products values (38,'Fanta orange', '../Images/Menu/fanta-orange.png', 1.90, 'A can of fanta orange flavoured.', 3);
    insert into products values (39,'Beer', '../Images/Menu/beer.png', 2.00, 'A can of beer.', 3);
    insert into products values (40,'Sprite', '../Images/Menu/sprite.png', 1.90, 'A can of sprite.', 3);
    insert into products values (41,'Aquarius lemon', '../Images/Menu/aquarius-lemon.png', 1.90, 'A can of aquarius lemon flavoured.', 3);
    insert into products values (42,'Aquarius orange', '../Images/Menu/aquarius-orange.png', 1.90, 'A can of aquarius orange flavoured.', 3);
    insert into products values (43,'Apple pie', '../Images/Menu/apple-pie.png', 1.150, 'A sweet apple pie caramelised with sugar syrup.', 4);
    insert into products values (44,'Sliced apple', '../Images/Menu/apple.png', 1.90, 'A sliced apple.', 4);
    insert into products values (45,'Vanilla ice cream', '../Images/Menu/ice-cream-vanilla.png', 2.10, 'A cup of vanilla ice cream.', 4);
    insert into products values (46,'Chocolate ice cream', '../Images/Menu/ice-cream-chocolate.png', 2.10, 'A cup of chocolate ice cream.', 4);
    insert into products values (47,'Caramel ice cream', '../Images/Menu/ice-cream-caramel.png', 2.10, 'A cup of caramel ice cream.', 4);
    insert into products values (48,'Chicken nuggets', '../Images/Menu/chicken-nuggets.png', 6.70, '10 pieces of chicken nuggets.', 5);
    insert into products values (49,'Chicken wings', '../Images/Menu/chicken-wings.png', 8.40, '10 pieces of chicken wings.', 5);
    insert into products values (50,'French fries', '../Images/Menu/french-fries.png', 1.50, 'A bag of french fries.', 5);
    insert into products values (51,'French fries deluxe', '../Images/Menu/french-fries-deluxe.png', 1.60, 'A bag of french fries deluxe.', 5);
    insert into products values (52,'Ketchup', '../Images/Menu/ketchup.png', 0.50, 'A ketchup sauce package.', 5);
    insert into products values (53,'Mayonnaise', '../Images/Menu/mayonnaise.png', 0.50, 'A mayonnaise sauce package.', 5);
    insert into products values (54,'Barbecue', '../Images/Menu/barbecue.png', 0.50, 'A barbecue sauce package.', 5);
    insert into products values (55,'Ranch', '../Images/Menu/ranch.png', 0.50, 'A ranch sauce package.', 5);
    insert into products values (56,'Glutten free simple beef', '../Images/Menu/simple-beef.png', 1.40, 'A glutten free beef burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
    insert into products values (57,'Glutten free simple chicken', '../Images/Menu/simple-chicken.png', 1.50, 'A glutten free chicken burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
    insert into products values (58,'Glutten free simple fried chicken', '../Images/Menu/simple-fried-chicken.png', 1.80, 'A glutten free fried chicken burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
    insert into products values (59,'Glutten free double beef', '../Images/Menu/double-beef.png', 2.60, 'A glutten free double beef burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
    insert into products values (60,'Glutten free double chicken', '../Images/Menu/double-chicken.png', 2.90, 'A glutten free double chicken burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
    insert into products values (61,'Glutten free double fried chicken', '../Images/Menu/double-fried-chicken.png', 3.40, 'A glutten free double fried chicken burger with lettuce, tomato, pickles ketchup, and mustard.', 6);
exception
    when others then
    rollback;
end;
