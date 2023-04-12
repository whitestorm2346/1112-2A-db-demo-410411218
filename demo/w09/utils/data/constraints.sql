-- 定義域限制 (domain constraints)
INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url)
VALUES 
(40,'Brown Brim',1,'a25','https://i.ibb.co/ZYW3VTp/brown-brim.png','/img/hats/brown-brim.png')

-- 關聯鍵限制 (primary key constraints)
INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url)
VALUES 
(2,'Brown Brim',1,25,'https://i.ibb.co/ZYW3VTp/brown-brim.png','/img/hats/brown-brim.png')

-- 實體完整限制 (entity integrity constraitns)
INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url)
VALUES 
(null,'Brown Brim',1,25,'https://i.ibb.co/ZYW3VTp/brown-brim.png','/img/hats/brown-brim.png')


-- 參考完整限制 (referential integrity constraint)
INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url)
VALUES 
(40,'Brown Brim',6,25,'https://i.ibb.co/ZYW3VTp/brown-brim.png','/img/hats/brown-brim.png')


-- ON UPDATE CASCASE

-- ON DELETE SET NULL