CREATE TABLE category_18 (
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    size varchar(20),
    local_url varchar(255),
    remote_url varchar(255),
    link_url varchar(255)
)

INSERT INTO category_18 (id, name, size, local_url, remote_url, link_url)
VALUES
(1, 'hats', null, '/img/homepage/hats.png', 'https://i.ibb.co/cvpntL1/hats.png', '/crown2_18/shop_18/hats'),
(2, 'jackets', null, '/img/homepage/jackets.png', 'https://i.ibb.co/px2tCc3/jackets.png', '/crown2_18/shop_18/jackets'),
(3, 'sneakers', null, '/img/homepage/sneakers.png', 'https://i.ibb.co/0jqHpnp/sneakers.png', '/crown2_18/shop_18/sneakers'),
(4, 'womens', 'large', 'https://i.ibb.co/GCCdy8t/womens.png', '/img/homepage/womens.png', '/crown2_18/shop_18/womens'),
(5, 'mens', 'large', 'https://i.ibb.co/R70vBrQ/men.png', '/img/homepage/mens.png', '/crown2_18/shop_18/mens')

DROP TABLE category_18

SELECT * FROM public.category_18
ORDER BY id ASC