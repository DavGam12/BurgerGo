insert into categories values ('BG','Burgers');
insert into categories values ('SP','Specials');
insert into categories values ('DR','Drinks');
insert into categories values ('KM','Kids menu');
insert into categories values ('DS','Desserts');
insert into categories values ('OT','Others');


begin
    insert into jobs values ('K','Cook');
    insert into jobs values ('W','Waiter');
    insert into jobs values ('D','Delivery');
    insert into jobs values ('C','Cashier');
    insert into jobs values ('M','Manager');
    insert into jobs values ('H','Human Resources');
exception
    when others then
    rollback;
end;



begin
    insert into employees values (1, 'Emily', 'Smith', TO_DATE('1990-05-12', 'YYYY-MM-DD'), '891264309578', TO_DATE('2024-04-22', 'YYYY-MM-DD'), 1450, 0, a2B!c4D?5, 'K');
    insert into employees values (2, 'Michael', 'Johnson', TO_DATE('1985-09-23', 'YYYY-MM-DD'), '725046831294', TO_DATE('2024-04-23', 'YYYY-MM-DD'), 1450, 0, 6eFgH!7?8, 'K');
    insert into employees values (3, 'Jennifer', 'Williams', TO_DATE('1983-12-31', 'YYYY-MM-DD'), '630815924367', TO_DATE('2024-04-24', 'YYYY-MM-DD'), 1450, 0, i9JkL?01m, 'K');
    insert into employees values (4, 'Christopher', 'Brown', TO_DATE('1992-03-17', 'YYYY-MM-DD'), '492678301546', TO_DATE('2024-04-25', 'YYYY-MM-DD'), 1450, 0, N23oP!45q, 'K');
    insert into employees values (5, 'Jessica', 'Jones', TO_DATE('1994-07-08', 'YYYY-MM-DD'), '185703496237', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 1450, 0, T67uVw?89, 'K');
    insert into employees values (6, 'Matthew', 'Davis', TO_DATE('1988-10-22', 'YYYY-MM-DD'), '762935804216', TO_DATE('2024-04-27', 'YYYY-MM-DD'), 1450, 0, yZ10!AB12?, 'K');
    insert into employees values (7, 'Ashley', 'Miller', TO_DATE('1986-06-15', 'YYYY-MM-DD'), '531907824613', TO_DATE('2024-04-28', 'YYYY-MM-DD'), 1450, 0, cD34eF!56, 'K');
    insert into employees values (8, 'Joshua', 'Wilson', TO_DATE('1993-09-30', 'YYYY-MM-DD'), '924386175093', TO_DATE('2024-04-29', 'YYYY-MM-DD'), 1450, 0, H78iJK?90, 'K');
    insert into employees values (9, 'Amanda', 'Moore', TO_DATE('1995-02-14', 'YYYY-MM-DD'), '364891275030', TO_DATE('2024-04-30', 'YYYY-MM-DD'), 1450, 0, m12NOp!34Q, 'K');
    insert into employees values (10, 'Daniel', 'Taylor', TO_DATE('1991-08-07', 'YYYY-MM-DD'), '207685913420', TO_DATE('2024-05-01', 'YYYY-MM-DD'), 1450, 0, rS56tUV?78, 'K');
    insert into employees values (11, 'Sarah', 'Anderson', TO_DATE('1989-04-20', 'YYYY-MM-DD'), '805946312708', TO_DATE('2024-05-02', 'YYYY-MM-DD'), 1450, 0, W90xYZ!12, 'K');
    insert into employees values (12, 'David', 'Thomas', TO_DATE('1984-11-03', 'YYYY-MM-DD'), '652094187563', TO_DATE('2024-05-03', 'YYYY-MM-DD'), 1450, 0, 34ABcD?56e,'K');
    insert into employees values (13, 'Samantha', 'Jackson', TO_DATE('1987-07-17', 'YYYY-MM-DD'), '419368527014', TO_DATE('2024-05-04', 'YYYY-MM-DD'), 1450, 0, F78gHI!90, 'K');
    insert into employees values (14, 'James', 'White', TO_DATE('1996-01-30', 'YYYY-MM-DD'), '935761802643', TO_DATE('2024-05-05', 'YYYY-MM-DD'), 1450, 0, J12kLM?34, 'K');
    insert into employees values (15, 'Elizabeth', 'Harris', TO_DATE('1982-05-24', 'YYYY-MM-DD'), '273890561742', TO_DATE('2024-05-06', 'YYYY-MM-DD'), 1450, 0, No56Pq!78R, 'K');
    insert into employees values (16, 'Ryan', 'Martin', TO_DATE('1990-08-15', 'YYYY-MM-DD'), '617439280154', TO_DATE('2024-05-07', 'YYYY-MM-DD'), 1450, 0, X34Yz!56AB, 'K');
    insert into employees values (17, 'Lauren', 'Thompson', TO_DATE('1988-12-28', 'YYYY-MM-DD'), '539178264301', TO_DATE('2024-05-08', 'YYYY-MM-DD'), 1450, 0, Cd78Ef?90G, 'K');
    insert into employees values (18, 'John', 'Martinez', TO_DATE('1993-03-10', 'YYYY-MM-DD'), '873902416538', TO_DATE('2024-05-09', 'YYYY-MM-DD'), 1450, 0, sT90UvW?12, 'K');
    insert into employees values (19, 'Brittany', 'Garcia', TO_DATE('1986-10-04', 'YYYY-MM-DD'), '426719583012', TO_DATE('2024-05-10', 'YYYY-MM-DD'), 1450, 0, H12iJK!34, 'K');
    insert into employees values (20, 'Nicholas', 'Robinson', TO_DATE('1984-02-18', 'YYYY-MM-DD'), '960318475629', TO_DATE('2024-05-11', 'YYYY-MM-DD'), 1450, 0, lm56NOp?78, 'K');
    insert into employees values (21, 'Megan', 'Lewis', TO_DATE('1992-06-09', 'YYYY-MM-DD'), '741082936175', TO_DATE('2024-05-12', 'YYYY-MM-DD'), 1450, 0, aB2!cD?e3F, 'K');
    insert into employees values (22, 'Andrew', 'Walker', TO_DATE('1990-07-05', 'YYYY-MM-DD'), '749305816427', TO_DATE('2024-04-22', 'YYYY-MM-DD'), 1100, 0, G4hI!5Jk?L6, 'W');
    insert into employees values (23, 'Taylor', 'Hill', TO_DATE('1988-02-14', 'YYYY-MM-DD'), '630918275046', TO_DATE('2024-04-23', 'YYYY-MM-DD'), 1100, 0, 7mNpO!q8Rs, 'W');
    insert into employees values (24, 'Brandon', 'Scott', TO_DATE('1993-05-22', 'YYYY-MM-DD'), '184092753618', TO_DATE('2024-04-24', 'YYYY-MM-DD'), 1100, 0, T9uV!wX?10y, 'W');
    insert into employees values (25, 'Rachel', 'King', TO_DATE('1985-11-30', 'YYYY-MM-DD'), '542897631804', TO_DATE('2024-04-25', 'YYYY-MM-DD'), 1100, 0, Z11AB!cd?12, 'W');
    insert into employees values (26, 'Justin', 'Green', TO_DATE('1991-09-17', 'YYYY-MM-DD'), '937618245093', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 1100, 0, eF13gHI!14J, 'W');
    insert into employees values (27, 'Nicole', 'Hall', TO_DATE('1989-04-02', 'YYYY-MM-DD'), '351782946013', TO_DATE('2024-04-27', 'YYYY-MM-DD'), 1100, 0, K15Lm?16NoP, 'W');
    insert into employees values (28, 'Robert', 'Adams', TO_DATE('1992-08-14', 'YYYY-MM-DD'), '267819304576', TO_DATE('2024-04-28', 'YYYY-MM-DD'), 1100, 0, Q17rS!tUV?18, 'W');
    insert into employees values (29, 'Amber', 'Wright', TO_DATE('1987-01-25', 'YYYY-MM-DD'), '689143275086', TO_DATE('2024-04-29', 'YYYY-MM-DD'), 1100, 0, W19xYZ!20AB, 'W');
    insert into employees values (30, 'Jonathan', 'Mitchell', TO_DATE('1995-03-11', 'YYYY-MM-DD'), '901542637189', TO_DATE('2024-04-30', 'YYYY-MM-DD'), 1100, 0, cD21eF?22G, 'W');
    insert into employees values (31, 'Kayla', 'Perez', TO_DATE('1986-12-18', 'YYYY-MM-DD'), '409275816324', TO_DATE('2024-05-01', 'YYYY-MM-DD'), 1100, 0, H23iJK!24Lm, 'W');
    insert into employees values (32, 'William', 'Ortiz', TO_DATE('1993-07-07', 'YYYY-MM-DD'), '176245389012', TO_DATE('2024-05-02', 'YYYY-MM-DD'), 1100, 0, 25NOp?26qrS, 'W');
    insert into employees values (33, 'Stephanie', 'Lee', TO_DATE('1988-11-19', 'YYYY-MM-DD'), '274159083726', TO_DATE('2024-05-03', 'YYYY-MM-DD'), 1100, 0, T27UvW!28xY, 'W');
    insert into employees values (34, 'Joseph', 'Young', TO_DATE('1990-04-14', 'YYYY-MM-DD'), '736925481037', TO_DATE('2024-05-04', 'YYYY-MM-DD'), 1100, 0, Z29!ABcD?30, 'W');
    insert into employees values (35, 'Cassandra', 'Torres', TO_DATE('1994-08-27', 'YYYY-MM-DD'), '815032469871', TO_DATE('2024-05-05', 'YYYY-MM-DD'), 1100, 0, eF31gHI!32Jk, 'W');
    insert into employees values (36, 'Kyle', 'Rodriguez', TO_DATE('1985-06-03', 'YYYY-MM-DD'), '503276189542', TO_DATE('2024-05-06', 'YYYY-MM-DD'), 1100, 0, L33mNo?34Pq, 'W');
    insert into employees values (37, 'Heather', 'Rivera', TO_DATE('1992-09-10', 'YYYY-MM-DD'), '792635180497', TO_DATE('2024-05-07', 'YYYY-MM-DD'), 1330, 0, R35sTU!vW?36, 'D');
    insert into employees values (38, 'Benjamin', 'Evans', TO_DATE('1994-02-28', 'YYYY-MM-DD'), '503819274856', TO_DATE('2024-05-08', 'YYYY-MM-DD'), 1330, 0, X37YZ!abCD?, 'D');
    insert into employees values (39, 'Melissa', 'Cook', TO_DATE('1987-07-15', 'YYYY-MM-DD'), '275631804925', TO_DATE('2024-05-09', 'YYYY-MM-DD'), 1330, 0, eF38gHI!39Jk, 'D');
    insert into employees values (40, 'Tyler', 'Turner', TO_DATE('1991-11-22', 'YYYY-MM-DD'), '618490235761', TO_DATE('2024-05-10', 'YYYY-MM-DD'), 1330, 0, L40mNo?41Pq, 'D');
    insert into employees values (41, 'Victoria', 'Phillips', TO_DATE('1989-04-05', 'YYYY-MM-DD'), '435271908634', TO_DATE('2024-05-11', 'YYYY-MM-DD'), 1330, 0, 1aB?c2D!e3F, 'D');
    insert into employees values (42, 'Zachary', 'Cruz', TO_DATE('1993-08-18', 'YYYY-MM-DD'), '897654321098', TO_DATE('2024-05-12', 'YYYY-MM-DD'), 1330, 0, 4GhI5!Jk?L6m, 'D');
    insert into employees values (43, 'Rebecca', 'Bailey', TO_DATE('1986-05-30', 'YYYY-MM-DD'), '729503816245', TO_DATE('2024-05-13', 'YYYY-MM-DD'), 1330, 0, 7N8oP!q9RsT, 'D');
    insert into employees values (44, 'Jacob', 'Price', TO_DATE('1990-12-07', 'YYYY-MM-DD'), '372891054638', TO_DATE('2024-05-14', 'YYYY-MM-DD'), 1330, 0, 10uV!wX11yZ12, 'D');
    insert into employees values (45, 'Michelle', 'Reed', TO_DATE('1988-10-12', 'YYYY-MM-DD'), '918406725391', TO_DATE('2024-05-15', 'YYYY-MM-DD'), 1330, 0, ABcD!eF13gHI, 'D');
    insert into employees values (46, 'Ethan', 'Hayes', TO_DATE('1996-03-25', 'YYYY-MM-DD'), '640928571364', TO_DATE('2024-05-16', 'YYYY-MM-DD'), 1330, 0, 14JkLm?15NoP, 'D');
    insert into employees values (47, 'Kaitlyn', 'Foster', TO_DATE('1985-11-19', 'YYYY-MM-DD'), '536097281453', TO_DATE('2024-05-17', 'YYYY-MM-DD'), 1330, 0, q16rS!tUV?17, 'D');
    insert into employees values (48, 'Alexander', 'Murphy', TO_DATE('1983-06-28', 'YYYY-MM-DD'), '325890416372', TO_DATE('2024-05-18', 'YYYY-MM-DD'), 1330, 0, 18WxYZ!19ABcD, 'D');
    insert into employees values (49, 'Emily', 'Nelson', TO_DATE('1998-01-15', 'YYYY-MM-DD'), '789623501847', TO_DATE('2024-05-19', 'YYYY-MM-DD'), 1330, 0, eF20gHI!21JkL, 'D');
    insert into employees values (50, 'Kevin', 'Barnes', TO_DATE('1986-09-08', 'YYYY-MM-DD'), '924681037596', TO_DATE('2024-05-20', 'YYYY-MM-DD'), 1330, 0, m22No?P23qRs, 'D');
    insert into employees values (51, 'Olivia', 'Coleman', TO_DATE('1990-04-20', 'YYYY-MM-DD'), '162740953817', TO_DATE('2024-05-21', 'YYYY-MM-DD'), 1330, 0, T24UvW!25xYZ, 'D');
    insert into employees values (52, 'Brian', 'Bennett', TO_DATE('1993-02-17', 'YYYY-MM-DD'), '482630175984', TO_DATE('2024-05-22', 'YYYY-MM-DD'), 1110, 0, 26ABcD?eF27, 'C');
    insert into employees values (53, 'Emma', 'Powell', TO_DATE('1988-08-29', 'YYYY-MM-DD'), '597823014856', TO_DATE('2024-05-23', 'YYYY-MM-DD'), 1110, 0, 28gHI29Jk?L30, 'C');
    insert into employees values (54, 'Timothy', 'Rogers', TO_DATE('1985-12-10', 'YYYY-MM-DD'), '376982045813', TO_DATE('2024-05-24', 'YYYY-MM-DD'), 1110, 0, mNo31P!q32rST, 'C');
    insert into employees values (55, 'Allison', 'Ross', TO_DATE('1991-06-03', 'YYYY-MM-DD'), '239687510384', TO_DATE('2024-05-25', 'YYYY-MM-DD'), 1110, 0, UV33wX!34yZAB, 'C');
    insert into employees values (56, 'Cody', 'Russell', TO_DATE('1989-11-14', 'YYYY-MM-DD'), '981402367815', TO_DATE('2024-05-26', 'YYYY-MM-DD'), 1110, 0, cD35eF?36gHI, 'C');
    insert into employees values (57, 'Morgan', 'Hayes', TO_DATE('1995-04-27', 'YYYY-MM-DD'), '547893216704', TO_DATE('2024-05-27', 'YYYY-MM-DD'), 1110, 0, J37kLm!38NoP, 'C');
    insert into employees values (58, 'Patrick', 'Collins', TO_DATE('1983-09-05', 'YYYY-MM-DD'), '654987320146', TO_DATE('2024-05-28', 'YYYY-MM-DD'), 1950, 1, q39rS?40tUVW, 'M');
    insert into employees values (59, 'Hannah', 'Bell', TO_DATE('1987-03-12', 'YYYY-MM-DD'), '821403976582', TO_DATE('2024-05-29', 'YYYY-MM-DD'), 1950, 1, x41YZ!ABcD?e, 'M');
    insert into employees values (60, 'Steven', 'Cooper', TO_DATE('1984-07-18', 'YYYY-MM-DD'), '405978613294', TO_DATE('2024-05-30', 'YYYY-MM-DD'), 1950, 1, F42gHI!43JkLm, 'M');
    insert into employees values (61, 'Erica', 'Jenkins', TO_DATE('1986-11-23', 'YYYY-MM-DD'), '136985720489', TO_DATE('2024-05-31', 'YYYY-MM-DD'), 1950, 1, 1aB?c2D!e3F4, 'M');
    insert into employees values (62, 'Gregory', 'Ward', TO_DATE('1982-05-09', 'YYYY-MM-DD'), '792041836590', TO_DATE('2024-06-01', 'YYYY-MM-DD'), 1950, 1, 9N10oP!qRsTU, 'M');
    insert into employees values (63, 'Caitlin', 'Hughes', TO_DATE('1989-01-30', 'YYYY-MM-DD'), '569283047615', TO_DATE('2024-06-02', 'YYYY-MM-DD'), 1950, 1, V11wX!yZAB12, 'M');
    insert into employees values (64, 'Samuel', 'Griffin', TO_DATE('1981-08-14', 'YYYY-MM-DD'), '927365148023', TO_DATE('2024-06-03', 'YYYY-MM-DD'), 1880, 0, eF26gHI!JkL27, 'H');
    insert into employees values (65, 'Jenna', 'Sullivan', TO_DATE('1980-12-03', 'YYYY-MM-DD'), '731920468517', TO_DATE('2024-06-04', 'YYYY-MM-DD'), 1880, 0, HI34JkLm!35No, 'H');
    insert into employees values (66, 'Nathan', 'Diaz', TO_DATE('1978-06-22', 'YYYY-MM-DD'), '513892047615', TO_DATE('2024-06-05', 'YYYY-MM-DD'), 1880, 0, mNo?P42qRs43, 'H');
exception
    when others then
    rollback;
end;



insert into orders values ()


insert into customers values ()