create table products (
  id serial primary key,
  name varchar(25),
  price integer,
  img text
)

insert into products(name, price, img) values ('Butter Beer', 10, 'https://www.google.com/search?q=butterbeer&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjgx5qg7KjfAhURd6wKHVkGDzIQ_AUIDygC&biw=1280&bih=698#imgrc=y1hlmQOZADusYM:');
insert into products(name, price, img) values ('Butter Beer', 5, 'https://unsplash.com/photos/VTt_Jn1LrOg')
