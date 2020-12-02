insert into members (username, password)
values ($1, $2);

select * from members
where username = $1