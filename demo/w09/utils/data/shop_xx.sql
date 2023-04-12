CREATE TABLE shop_xx (
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    cat_id int,
    price real,
    remote_url varchar(255),
    local_url varchar(255),
    FOREIGN KEY (cat_id) REFERENCES category_xx(id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url)
VALUES 
(1,'Brown Brim',1,25,'https://i.ibb.co/ZYW3VTp/brown-brim.png','/img/hats/brown-brim.png'),
(2,'Blue Beanie',1,18,'https://i.ibb.co/ypkgK0X/blue-beanie.png','/img/hats/blue-beanie.png'),
(3,'Brown Cowboy',1,35,'https://i.ibb.co/QdJwgmp/brown-cowboy.png','/img/hats/brown-cowboy.png'),