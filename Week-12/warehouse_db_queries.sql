-- WAREHOUSE DATABASE QUERIES -- 

-- 1. Find the item that has minimum weight.
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST)
VALUES (1, 'Item 1', 10.00, 20.00),
	     (2, 'Item 2', 20.00, 30.00);
       
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- 2. Find the different warehouses in “Pune”.
INSERT INTO CITIES (CITY, STATE, ZIP)
VALUES ('PUNE', 'MAHARASHTRA', 411001);

INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT)
VALUES (1, 'Warehouse 1', 'PUNE', '{"type":"distribution"}'),
	     (2, 'Warehouse 2', 'PUNE', '{"type":"Manufacturing"}');
       
SELECT * FROM WAREHOUSES WHERE LOCATION='PUNE';

-- 3. Find the details of items ordered by a customer “Mr. Patil”.
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY)
VALUES (1, 'Mr. Patil', '123 Main Street', 'PUNE');

INSERT INTO ORDERS (ONO, ODATE, CNO)
VALUES (1, '2022-01-01', 1); 

INSERT INTO ITEMS_ORDERS (ITEMNO, ONO, ORDERED_QUANTITY)
VALUES (1, 1, 1),
	     (2, 1, 2);

SELECT c.cname, i.description, i.weight, i.cost, io.ordered_quantity
FROM items i
INNER JOIN items_orders io
ON i.itemno = io.itemno -- getting all items info with respective Order No.
INNER JOIN orders o 
ON io.ono = o.ono -- getting all orders with quantity info from items_orders and items info from first join
INNER JOIN customer c
ON o.cno = c.cno -- get customer info. specific to "Mr. Patil"
WHERE c.cname = 'Mr. Patil';

-- 4. Find a Warehouse which has maximum stores. 
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY, WAREHOUSE)
VALUES (1, 'Store 1', 'PUNE', 1),
	     (2, 'Store 2', 'PUNE', 2),
	     (3, 'Store 3', 'PUNE', 1),
	     (4, 'Store 4', 'PUNE', 1), 
       
select s.warehouse as "Warehouse ID", count(sid) as "No. of Stores" 
from stores as s  
group by s.warehouse order by count(sid) desc limit 1;

-- 5. Find an item which is ordered for a minimum number of times.
SELECT ITEMS.ITEMNO, ITEMS.DESCRIPTION, count(ITEMS.itemno) as "order frequency"
FROM ITEMS
RIGHT JOIN ITEMS_ORDERS
ON ITEMS.ITEMNO = ITEMS_ORDERS.ITEMNO
GROUP BY ITEMS.ITEMNO order by ITEMS.ITEMNO desc limit 1;

-- 6. Find the detailed orders given by each customer.
SELECT 
    c.cname,
    i.description,
    i.weight,
    i.cost,
    io.ordered_quantity
FROM
    items i
        INNER JOIN
    items_orders io ON i.itemno = io.itemno
        INNER JOIN
    orders o ON io.ono = o.ono
        INNER JOIN
    customer c ON o.cno = c.cno 