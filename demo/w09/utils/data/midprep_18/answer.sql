CREATE TABLE product_18 (
    pId int NOT NULL PRIMARY KEY,
    pName varchar(255),
    price real,
    cat_id int,
    img_url varchar(255),
    FOREIGN KEY (cat_id) REFERENCES category_18(id)
    ON DELETE SET NULL 
    ON UPDATE CASCADE
);

INSERT INTO product_18 (pid, pName, price, cat_id, img_url)
VALUES
(1, 'Brown Brim', 25, 1, '/img/hats/brown-brim.png'),
(2, 'Blue Beanie', 18, 1, '/img/hats/blue-beanie.png'),
(3, 'Brown Cowboy', 35, 1, '/img/hats/brown-cowboy.png'),
(4, 'Grey Brim', 25, 1, '/img/hats/grey-brim.png'),
(5, 'Adidas NMD', 25, 3, '/img/sneakers/adidas-nmd.png'),
(6, 'Adidas Yeezy', 25, 3, '/img/sneakers/yeezy.png'),
(7, 'Black Converse', 25, 3, '/img/sneakers/black-converse.png'),
(8, 'Nike White AirForce', 25, 3, '/img/sneakers/white-nike-high-tops.png')
