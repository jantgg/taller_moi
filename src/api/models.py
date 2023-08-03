from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    bikes = db.relationship('Bike', backref='user')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Bike(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(50), nullable=False, unique=True)
    brand = db.Column(db.String(50), nullable=False)
    type_moto = db.Column(db.String(50), nullable=False)
    year = db.Column(db.String(4), nullable=False)
    kms = db.Column(db.String(50), nullable=False)
    carnet = db.Column(db.String(4), nullable=False)
    description = db.Column(db.String(450), nullable=False)
    price = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    photos = db.relationship('Photo')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "model": self.model,
            "brand": self.brand,
            "kms": self.kms,
            "type_moto": self.type_moto,
            "year": self.year,
            "carnet": self.carnet,
            "price": self.price,
            "description": self.description,
        }

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    path = db.Column(db.String(250), nullable=False, unique=True)
    bike_id = db.Column(db.Integer, db.ForeignKey('bike.id'), nullable=False)

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "path": self.path,
        }

class Links(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.String(250), nullable=False)
    citas = db.Column(db.String(250), nullable=False)
    telefono = db.Column(db.String(250), nullable=False)
    direccion = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f'{self.fecha}'

    def serialize(self):
        return {
            "id": self.id,
            "citas": self.citas,
            "telefono": self.telefono,
            "direccion": self.direccion,
            "fecha": self.fecha,
        }