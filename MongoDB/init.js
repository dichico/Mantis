db = db.getSiblingDB("equivalencia");

db.createCollection("users");

db.users.insertOne({
  "admin": true,
  "username": "admin",
  "password": "$2a$10$T.S3odonziOx4wmaW6AMVe.tdILw2GolyD9JIrw.GtlYhu61lW/iC",
  "email": "admin@mantis.com",
  "fullName": "Administrador do Serviço"
});