CREATE TABLE shop_18 (
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    cat_id int,
    price real,
    remote_url varchar(255),
    local_url varchar(255),
    FOREIGN KEY (cat_id) REFERENCES category_18(id) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE
);

INSERT INTO shop_18(id, name, cat_id, price, remote_url, local_url)
VALUES
(1,'Adidas NMD', 3, 220, 'https://i.ibb.co/0s3pdnc/adidas-nmd.png', '/img/sneakers/adidas-nmd.png'),
(2,'Adidas Yeezy', 3, 280, 'https://i.ibb.co/dJbG1cT/yeezy.png', '/img/sneakers/yeezy.png'),
(3,'Black Converse', 3, 110, 'https://i.ibb.co/bPmVXyP/black-converse.png', '/img/sneakers/black-converse.png')
