

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
INSERT INTO member(id, pw, mname) VALUES('user2', '1234', '사용자2');
SELECT memno, id, pw, mname FROM member WHERE memno = 1;
SELECT  memno, id, pw, mname FROM member;
UPDATE member SET pw = 'qwer' WHERE memno = 1;
UPDATE member SET mname = '사용자2' WHERE memno = 1;
DELETE FROM member WHERE memno = 1;


CREATE TABLE `rcolumn` (
	`colno` INT(11) NOT NULL AUTO_INCREMENT,
	`cname` VARCHAR(100) NOT NULL,
	`corder` INT(11) NOT NULL,
	PRIMARY KEY (`colno`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;


INSERT INTO rcolumn(cname, corder) VALUES('할 일', 1);

SELECT r.colno, r.cname, c.cardno, c.id, c.ccontent FROM rcolumn r 
LEFT JOIN (SELECT cardno, id, colno, ccontent FROM card JOIN member ON card.memno = member.memno) c ON r.colno = c.colno;



SELECT colno, cname, corder FROM rcolumn WHERE colno = 1;
SELECT  colno, cname, corder FROM rcolumn;
UPDATE rcolumn SET cname = 'qwer' WHERE memno = 1;
UPDATE rcolumn SET mname = '사용자2' WHERE memno = 1;
UPDATE rcolumn SET corder = corder+1 WHERE memno = 1;
DELETE FROM rcolumn WHERE memno = 1;



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

INSERT INTO card(memno, colno, ccontent, corder) VALUES(1, 1, '일1', 1);
INSERT INTO card(memno, colno, ccontent, corder) VALUES(1, 1, '일2', 2);
INSERT INTO card(memno, colno, ccontent, corder) VALUES(1, 1, '일3', 3);
SELECT cardno, memno, colno, ccontent, corder FROM card WHERE colno = 1;
SELECT cardno, memno, colno, ccontent, corder FROM card;
UPDATE card SET ccontent = '일2' WHERE cardno = 1;
UPDATE card SET corder = corder+1 WHERE cardno = 1;
DELETE FROM card WHERE cardno = 1;

INSERT INTO card(memno, colno, ccontent, corder) VALUES(2, 2, '일4', 1);
INSERT INTO card(memno, colno, ccontent, corder) VALUES(1, 3, '일5', 2);
INSERT INTO card(memno, colno, ccontent, corder) VALUES(2, 3, '일6', 3);


with recursive cte (cardno, ccontent, corder) as (
  select     cardno,
             ccontent,
             corder
  from       card
  where      corder = NULL
  union all
  select     p.cardno,
             p.ccontent,
             p.corder
  from       card p
  inner join cte
          on p.corder = cte.cardno
)
select * from cte;


# 재귀적? 계층적?
select  cardno,
			memno,
			colno,
        ccontent,
        corder 
from    (select * from card
         order BY colno, corder, cardno) cards_sorted,
        (select @pv := '0') initialisation
where   find_in_set(corder, @pv)
and     length(@pv := concat(@pv, ',', cardno))

# 계층 조회 최종 쿼리
SELECT r.colno, r.cname, c.cardno, c.id, c.ccontent 
FROM rcolumn r 
LEFT JOIN 
(
	SELECT cardno, id, colno, ccontent 
	FROM (
		select  cardno,
				memno,
				colno,
	        ccontent,
	        corder 
		from    (select * from card
		         order BY colno, corder, cardno) cards_sorted,
		        (select @pv := '0') initialisation
		where   find_in_set(corder, @pv)
		and     length(@pv := concat(@pv, ',', cardno))
	) card
	JOIN member 
	ON card.memno = member.memno
) c 
ON r.colno = c.colno;



# 다시 복구
SELECT r.colno, r.cname, c.cardno, c.id, c.ccontent, r.corder, c.corder
FROM rcolumn r 
LEFT JOIN 
	(
		SELECT cardno, card.memno, colno, member.id, ccontent, corder
		FROM card 
		JOIN member 
		ON card.memno = member.memno
		WHERE member.memno = 1
	) c 
ON r.colno = c.colno
ORDER BY r.corder DESC, c.corder DESC;

