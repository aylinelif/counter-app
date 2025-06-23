CREATE TABLE Kisiler (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Isim NVARCHAR(50),
    Yas INT
);
INSERT INTO Kisiler (Isim, Yas)
VALUES ('Aylin', 22);
select * from Kisiler