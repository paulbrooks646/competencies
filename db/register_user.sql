insert into members (username, password, email)
values ($1, $2, $3);

select * from members
where username = $1