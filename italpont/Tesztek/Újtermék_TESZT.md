# Tesztjegyzőkönyv - Új termék hozzáadása

Az alábbi tesztdokumentum a Italpont projekthez tartozó  8.3.7. árúkészlet kezelése funkcióihoz készült. Felelőse: Racskó Ádám 

## 1. Teszteljárások (TP)

### 1.1. Új termék hozzáadása 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: összeadás funkció tesztelése
    0. lépés: Jelentkezzünk be admin felhasználóként.
    1. lépés: Termékek menüpontot nyissuk meg.
    2. lépés: Nyomjuk meg az `+` gombot.
    3. lépés: Írjuk be az adatokat a megadott mezőkbe.
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Termék sikeresen hozzáadva` üzenet.

## 2. Teszesetek (TC)

### 2.1. Új termék hozzáadása funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: új termék hozzáadása funkció tesztelése 
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` = Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: **Termék sikeresen hozzáadva**

#### 2.1.2. TC-02
- TP: TP-02
- Leírás: új termék hozzáadása funkció tesztelése 
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` = Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = -18000 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: `HIBA: nem lehet negatív számot megadni`

### 2.1.3. TC-03
-TP: TP-03
-Leírás: új termék hozzáadása funkció tesztelése
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` =  ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: `HIBA: minden mezőt ki kell tölteni`

### 2.1.4. TC-04
TP: TP-04
-Leírás: új termék hozzáadása funkció tesztelése
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` = Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = egy
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: `HIBA: Az Űrtartalom mező csak szám lehet `

### 2.1.5. TC-05
TP: TP-05
-Leírás: új termék hozzáadása funkció tesztelése
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` =  Whiskey; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = sok pénz 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: `HIBA: Az Ár csak szám lehet `

### 2.1.6. TC-06
TP: TP-06
-Leírás: új termék hozzáadása funkció tesztelése
- Bemenet: 
`Név` = Laphroaig 10 ; 
`Kategória` = asdadasdasd
`Alkategória` =  Whiskey; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = sok pénz 
- Művelet: nyomjuk meg az `HOZZÁAD` gombot 
- Elvárt kimenet: Felugróablak: `HIBA: invalid kategória `


## 3. Tesztriportok (TR)

### 3.1. Összeadás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` = Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (Sikeres hozzáadás)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
     1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` =  Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = -18000 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA: nem lehet negatív számot megadni)

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
     1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` = Whiskey ; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA: minden mezőt ki kell tölteni)

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
     1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` =  Whiskey; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = egy
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = 18000 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA: Az Űrtartalom csak szám lehet)

#### 3.1.5. TR-05 (TC-05)
- TP: TP-01
     1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = alkoholos_italok
`Alkategória` =  Whiskey; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = sok pénz 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA: Az Ár csak szám lehet)

#### 3.1.6. TR-06 (TC-06)
- TP: TP-01
     1. lépés: beírtam az inputokat:
`Név` = Laphroaig 10 ; 
`Kategória` = asdadasdasd
`Alkategória` =  Whiskey; 
`Márka` = Laphroaig;
`Kedvezmény` = 10 ; 
`Űrtartalom` = 1
`Alkoholtartalom` = 40 ; 
`Leírás` = Finom whiskey;
`Ár` = sok pénz 
    3. lépés: a `+` gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA: invalid kategória)