

CREATE TABLE `member` (
	`memno` INT(11) NOT NULL AUTO_INCREMENT,
	`id` VARCHAR(50) NOT NULL,
	`pw` VARCHAR(50) NOT NULL,
	`mname` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`memno`),
	UNIQUE INDEX `id` (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

INSERT INTO member(id, pw, mname) VALUES('user1', '1234', '사용자1');
SELECT memno, id, pw, mname FROM member WHERE memno = 1;
SELECT  memno, id, pw, mname FROM member;
UPDATE member SET pw = 'qwer' WHERE memno = 1;
UPDATE member SET mname = '사용자2' WHERE memno = 1;
DELETE FROM member WHERE memno = 1;


CREATE TABLE `column` (
	`colno` INT(11) NOT NULL AUTO_INCREMENT,
	`cname` VARCHAR(100) NOT NULL,
	`corder` INT(11) NOT NULL,
	PRIMARY KEY (`colno`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

INSERT INTO column(cname, corder) VALUES('할 일', 1);
SELECT colno, cname, corder FROM column WHERE colno = 1;
SELECT  colno, cname, corder FROM column;
UPDATE column SET cname = 'qwer' WHERE memno = 1;
UPDATE column SET mname = '사용자2' WHERE memno = 1;
UPDATE column SET corder = corder+1 WHERE memno = 1;
DELETE FROM column WHERE memno = 1;



SELECT AUTO_INCREMENT
FROM information_schema.TABLES
WHERE table_name = 'member'
AND table_schema = DATABASE() ;


CREATE TABLE `card` (
	`cardno` INT(11) NOT NULL AUTO_INCREMENT,
	`memno` INT(11) NULL DEFAULT NULL,
	`colno` INT(11) NULL DEFAULT NULL,
	`ccontent` VARCHAR(1000) NOT NULL,
	`corder` INT(11) NOT NULL,
	PRIMARY KEY (`cardno`),
	INDEX `FK_card_member` (`memno`),
	INDEX `FK_card_column` (`colno`),
	CONSTRAINT `FK_card_column` FOREIGN KEY (`colno`) REFERENCES `column` (`colno`),
	CONSTRAINT `FK_card_member` FOREIGN KEY (`memno`) REFERENCES `member` (`memno`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

INSERT INTO column(memno, colno, ccontent, corder) VALUES(1, 1, '일1', 1);
SELECT cardno, memno, colno, ccontent, corder FROM column WHERE cardno = 1;
SELECT cardno, memno, colno, ccontent, corder FROM column;
UPDATE column SET ccontent = '일2' WHERE cardno = 1;
UPDATE column SET corder = corder+1 WHERE cardno = 1;
DELETE FROM column WHERE cardno = 1;
