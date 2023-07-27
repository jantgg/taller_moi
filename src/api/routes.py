"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def user_login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user = User.query.filter_by(email=body_email, password=body_password).first()
    token = None
    if not user:
        return jsonify({"error": "This user does not exist"}), 401
    if user:
        token = create_access_token(identity=user.email)
    else:
        return jsonify({"error": "The entered password is incorrect."}), 401
    return jsonify({"token": token}), 200


@api.route('/bikes', methods=['GET'])
def get_all_bikes():
    bikes = Bikes.query.all()
    bikes_serialized = []
    for bike in bikes:
        bike_serialized = bike.serialize()
        photos = [photo.serialize() for photo in bike.photos]
        bike_serialized['photos'] = photos
        bike_serialized['user_id'] = str(bike.user_id)
        bikes_serialized.append(bike_serialized) 
    return jsonify({"body": bikes_serialized}), 200

@api.route('/bikes', methods=['POST'])
@jwt_required()
def create_bike():
    data = request.get_json()
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    new_bikes = []
    for bike_data in data:
        new_bike = Bike(
            name=bike_data['name'],
            start_location_text=bike_data['start_location_text'],
            end_location_text=bike_data['end_location_text'],
            interest_text=bike_data['interest_text'],
            start_location_name=bike_data['start_location_name'],
            start_latitude=bike_data['start_latitude'],
            start_longitude=bike_data['start_longitude'],
            end_location_name=bike_data['end_location_name'],
            end_latitude=bike_data['end_latitude'],
            end_longitude=bike_data['end_longitude'],
            user_id = user.id,
        )
        db.session.add(new_bike)
        new_bikes.append(new_bike)
    db.session.commit()
    response_dict = {"response": "bike send successfully", "bike_ids": [r.id for r in new_bikes]}
    return jsonify(response_dict), 200


@api.route('/photos', methods=['POST'])
@jwt_required()
def upload_photo():
    photo_file = request.files.getlist("files")
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    new_photos=[]
    bike_data = json.loads(request.form['bike_data'])
    new_bike = bike(
        model=bike_data['model'],
        brand=bike_data['start_location_brand'],
        type_moto=bike_data['type'],
        year=bike_data['year'],
        kms=bike_data['kms'],
        carnet=bike_data['carnet'],
        description=bike_data['description'],
        price=bike_data['price'],
        user_id = user.id,)
    db.session.add(new_bike)
    db.session.commit()  # Confirma los cambios en la base de datos para obtener la ID
    bike_id = new_bike.id  # Obtiene la ID de la nueva ruta
    for photo in photo_file:
        upload_result = cloudinary.uploader.upload(photo, secure=True)
        new_photos.append(Photo(
            name=secure_filename(photo.filename),
            path=upload_result['secure_url'],
            bike_id=bike_id))
    for photo in new_photos:
        db.session.add(photo)
        db.session.commit()
    return jsonify([x.serialize() for x in new_photos])


@api.route('/bikes/<int:bike_id>', methods=['DELETE'])
@jwt_required()
def delete_bike(bike_id):
    bike = Bike.query.filter_by(id=bike_id).first()
    if not bike:
        return jsonify({'message': 'Bike not found'}), 404
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    if user.id != bike.user_id:
        return jsonify({'message': 'You are not authorized to delete this bike'}), 403
    for photo in bike.photos:
        db.session.delete(photo)
    db.session.delete(bike)
    db.session.commit()
    return jsonify({'message': 'Bike and associated photos deleted successfully'}), 200