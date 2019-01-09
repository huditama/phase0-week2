// QUESTION 1
STORE "Mass" with 600 kg
STORE "Acceleration" 2 m/s2
STORE "Force" without any value

CALCULATE "Mass" times "Acceleration"
SET "Force" value with CALCULATE result

DISPLAY "Area"


// QUESTION 2
STORE "Year" with "Number"

IF "Year" % 4 = 0, THEN
     IF "Year" % 100 ≠  0 
      ELSE IF "Year" % 4 = 0, THEN
        IF "Year" %     100 = 0 THEN
          IF "Year" % 400 = 0
  DISPLAY "Year adalah tahun kabisat"
ELSE
    DISPLAY "Year bukan tahun kabisat"

DISPLAY "Year"


// QUESTION 3
STORE "Laundry" with 0

WHILE "Laundry" < 20
  ADD "Laundry" by 1
  
DISPLAY "Laundry Process"


// QUESTION 4
STORE "Count" to 0
STORE "Kuku" to = " "
  
  WHILE "Count" < 40
    
    IF "Kuku"  = "Pendek"
      DISPLAY "Puji"
    ELSE IF "Kuku" = "Panjang"
      DISPLAY "Hukum"
   
   ADD "Count" by 1

DISPLAY "Count"